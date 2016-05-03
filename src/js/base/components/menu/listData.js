import i18next from '../../containers/i18n';

window.__ = function __(string) {
  return i18next.t(string);
};

export const listData = [
  {
    title: __('games'),
    icon: 'icon-games',
    inner: [
      { title: __('all games'), icon: 'icon-all-games', link: '/games/all' },
      { title: __('new games'), icon: 'icon-new-games', link: '/games/new' },
      { title: __('top 5 games'), icon: 'icon-top-games', link: '/games/top5' },
    ],
  },
  {
    title: __('cashier'),
    icon: 'icon-cash',
    inner: [
      { title: __('refill'), icon: 'icon-deposit', link: '/cash' },
    ],
  },
  {
    title: __('profile'),
    icon: 'icon-profile',
    inner: [
      { title: __('activate the coupon'), icon: 'icon-activate-coupon', link: '/profile' },
    ],
  },
  {
    title: __('information'),
    icon: 'icon-info',
    inner: [
      { title: __('terms'), icon: 'icon-rules', link: '/termsandconditions' },
      { title: __('responsible gaming'), icon: 'icon-fair-game', link: '/responsiblegaming' },
      { title: __('privacy policy'), icon: 'icon-protection', link: '/privacypolicy' },
      { title: __('antifraud tools'), icon: 'icon-antifraud', link: '/antifraud' },
      { title: __('fair gaming'), icon: 'icon-hands', link: '/fairgaming' },
    ],
  },
];
