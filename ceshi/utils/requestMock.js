import AddressMock from "../mock/address"

export default function request(route, params, callback, method="POST") {
    wx.showLoading({
      title: '正在加载',
    })
    let data = AddressMock[route](params)
    setTimeout(() => {
        wx.hideLoading()
        callback(data)
    }, (Math.floor(Math.random() * 5 + 1)) * 1000)
}