/**
 * 个人中心静态数据源
 */

/**
 * 用户菜单列表
 * islink : 是否需要右侧箭头
 */
export const accountMenu = [
  { title: '我的订单', islink: true, linktitle: '查看全部订单',icon: '', linkurl: '', list: [
    { name: '待付款', icon: 'card', url: '' },
    { name: '待收货', icon: 'delivery', url: '' },
    { name: '已完成', icon: 'accomplish', url: '' },
    { name: '退款/收货', icon: 'qian', url: '' }
  ] },
  { title: '我的活动', islink: false, linktitle: '',icon: '', linkurl: '', list: [
    { name: '活动详情', icon: 'pixelsa', url: '' },
    { name: '查看盟友', icon: 'hand', url: '' },
    { name: '积分', icon: 'star', url: '' },
    { name: '', icon: '', url: '' }
  ] },
  { title: '我的任务', islink: false, linktitle: '',icon: '', linkurl: '', list: [
    { name: '愿望清单', icon: 'love', url: '' },
    { name: '', icon: '', url: '' },
    { name: '', icon: '', url: '' },
    { name: '', icon: '', url: '' },
  ] }
]
