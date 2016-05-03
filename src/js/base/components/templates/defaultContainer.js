import React, { PropTypes } from 'react';

export const DefaultContainer = (props) => {
  const { container, title, img, name, date, url } = props;
  const src = img || '/static/mobile/images/base/thumb-cover.png';

  return (
    <div className={`default-container default-container--${container}`}>
      <img className="default-container__cover" src={src} />
      <div className="default-container__description">
        <h4 className="default-container__title">{title}</h4>
        <span className="default-container__name">{name}</span>
        <span className="default-container__date">{date}</span>
      </div>
      {url}
    </div>

    // <div className={"default-container " + "default-container--" + this.props.container}>
    //   <div className="default-container__img">
    //     <img className="default-container__cover" src={this.props.img ?
    //     this.props.img : `/static/mobile/images/base/thumb-cover.png`} />
    //     <div className="black-bg">
    //       <div className="content-center">
    //         {this.props.children}
    //       </div>
    //     </div>
    //   </div>
    //   <div className="default-container__description">
    //     <h4 className="default-container__title">{this.props.title}</h4>
    //     <span className="default-container__name">{this.props.name}</span>
    //     <span className="default-container__date">{this.props.date}</span>
    //   </div>
    // </div>
  );
};

DefaultContainer.propTypes = {
  container: PropTypes.string,
  title: PropTypes.string,
  img: PropTypes.string,
  name: PropTypes.string,
  date: PropTypes.string,
  url: PropTypes.object,
};
