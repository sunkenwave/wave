var gulp = require('gulp');
var fs = require('fs');
var path = require('path');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var lost = require('lost');
var minifyCss = require('gulp-minify-css');
var spritesmith = require('gulp.spritesmith');
var buffer = require('vinyl-buffer');
var imagemin = require('gulp-imagemin');
var merge = require('merge-stream');
var po2json = require('po2json');
var mkdirp = require('mkdirp');
var scanner = require('i18next-scanner');
var json2po = require('i18next-conv');

/*
  ** Environment **
  Development: gulp --env=nameCasino
  Production:  gulp --env=nameCasino --prod
*/

var _CASINO = gutil.env.env;
var prod = gutil.env.prod;

gulp.task('po2json', function() {
  var pathDirCasino = './localization-po/' + _CASINO + 'casino';

  var listDirs = fs.readdirSync(pathDirCasino).filter(function(dir) {
    return  fs.statSync(path.join(pathDirCasino, dir)).isDirectory();
  });

  var updatelistDirs = listDirs.map(function(item) {
    return { dir: pathDirCasino + "/" + item + '/ru.po', item: item };
  });

  updatelistDirs.forEach(function(obj) {
    var jsonData = po2json.parseFileSync(obj.dir, { format: 'mf'});
    var pathLanguage = './../../static/mobile/localization/' + _CASINO + 'casino';
    mkdirp(pathLanguage, function (err) {
      fs.writeFile('./../../static/mobile/localization/' + _CASINO + 'casino/' + obj.item + '.json', JSON.stringify(jsonData));
    });
  });
});

gulp.task('js2json', function() {
  var pathDirCasino = '../locale/' + _CASINO + 'casino';
  
  var listDirs = fs.readdirSync(pathDirCasino).filter(function(dir) {
    return  fs.statSync(path.join(pathDirCasino, dir)).isDirectory();
  });
  
  return gulp.src(['src/**/*.js'])
    .pipe(scanner({
      func: {
        list: ['__']
      },
      defaultValue: "",
      lngs: listDirs,
      defaultNs: 'translation',
      nsSeparator: '.,,.....',
      keySeparator: '.,,.....',
      resource: {
        loadPath: './localization/' + _CASINO + 'casino/{{lng}}.json',
        savePath: './localization/' + _CASINO + 'casino/{{lng}}.json'
      }
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('json2po', function() {
  var pathDirCasino = '../locale/' + _CASINO + 'casino';

  var listDirs = fs.readdirSync(pathDirCasino).filter(function(dir) {
    return  fs.statSync(path.join(pathDirCasino, dir)).isDirectory();
  });
  
  listDirs.forEach(function(dir) {
    var source = path.resolve(__dirname, './localization/' + _CASINO + 'casino/' + dir + '.json');
    var target = path.resolve(__dirname, './localization-po/' + _CASINO + 'casino/' + dir + '/vulkan-mobile.po');
    var options = {quiet : true};
    var callback = () => {console.log('Translation ' + dir + ' done');}
    json2po.i18nextToGettext(dir, source, target, options, callback);
  });
});

gulp.task('sprite', function () {
  var pathDir = 'src/assets/images/' + _CASINO + 'casino' + '/sprites';

  var listDirs = fs.readdirSync(pathDir).filter(function(dir) {
    return  fs.statSync(path.join(pathDir, dir)).isDirectory();
  });


  var updatelistDirs = listDirs.map(function(item) {
    return {
      path: 'src/assets/images/' + _CASINO + 'casino' + '/sprites/' + item + '/*.png',
      name: item
    }
  })

  updatelistDirs.map(function(dir) {
    console.log(dir);
    var spriteData = gulp.src(dir.path)
      .pipe(spritesmith({
        imgName: dir.name + '.png',
        imgPath: '/static/mobile/images/' + _CASINO + 'casino' + '/sprites/' + dir.name + '.png',
        cssName: '_' + dir.name + '.scss',
        padding: 10
      }));

    var imgStream = spriteData.img
      .pipe(buffer())
      .pipe(gulp.dest('src/assets/images/' + _CASINO + 'casino' + '/sprites'));

    var cssStream = spriteData.css
      .pipe(gulp.dest('src/styles/' + _CASINO + ''));

    return merge(imgStream, cssStream);
  })
});

gulp.task('images', ['sprite'], function() {
  gulp.src('src/assets/images/**/*.*')
    .pipe(!prod ? gutil.noop() : imagemin())
    .pipe(gulp.dest('../../static/mobile/images'))
});

gulp.task('fonts', function() {
  gulp.src('src/assets/fonts/**/*.*')
    .pipe(gulp.dest('../../static/mobile/fonts'))
});

gulp.task('sass', function() {
  gulp.src('src/styles/' + _CASINO + '/*.scss')
    .pipe(!prod ? sourcemaps.init() : gutil.noop())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([lost(), autoprefixer()]))
    .pipe(!prod ? sourcemaps.write() : gutil.noop())
    .pipe(prod ? minifyCss() : gutil.noop())
    .pipe(gulp.dest('../../static/mobile/css/' + _CASINO));
});

gulp.task('webpack', function(callback) {
  var entryWebpack = [
    'webpack-dev-server/client?http://localhost:4000',
    'webpack/hot/only-dev-server',
    path.join(__dirname, 'src', 'js', _CASINO)
  ];
  
  var plugins = [
    new webpack.HotModuleReplacementPlugin()
  ];

  if (prod) {
    plugins.push(new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings:     false,
        drop_console: true,
        unsafe:       true
      }
    }))
    
    entryWebpack = [ path.join(__dirname, 'src', 'js', _CASINO) ];
  }
  var compiler = webpack({
    entry: entryWebpack,


    output: {
      path: path.join(__dirname, '../../static/mobile/js', _CASINO),
      filename: 'main.js',
      publicPath: '/static/'
    },

    devtool: !prod ? "cheap-inline-module-source-map" : null,

    module: {
      preLoaders: [
        {
          test: /\.jsx$|\.js$/,
          loader: 'eslint-loader',
          exclude: /node_modules/
        }
      ],
      loaders: [
        {
          test: /\.js$/,
          loaders: !prod ? ['react-hot', 'babel'] : ['babel'],
          exclude: /node_modules/,
          include: path.join(__dirname, 'src', 'js')
        },
        {
          test: /\.json$/,
          loader: "json-loader"
        }
      ]
    },

    watchOptions: {
      aggregateTimeout: 100
    },

    plugins: plugins
  }, function(err, stats) {
      if (err) throw new gutil.PluginError("webpack", err);
      callback();
  });

  if (prod) {
    return compiler;
  } else {
    var server = new WebpackDevServer(compiler, {
      publicPath: '/static/',
      hot: true,
      historyApiFallback: true,
      stats: { colors: true },
    });

    server.listen(4000, "localhost", function(err, result) {
      if (err) throw new gutil.PluginError("webpack", err);
      console.log('webpack-dev-server listening at http://localhost:4000/...');
    });
  }
});

gulp.task('watch', function() {
  gulp.watch('src/styles/**/*.scss', ['sass']);
  gulp.watch('src/assets/fonts/**', ['fonts']);
  gulp.watch('src/assets/img/**/*.*', ['images']);
});

var tasks = ['webpack', 'images', 'fonts', 'sass'];

!prod && tasks.push('watch');

gulp.task('default', tasks);