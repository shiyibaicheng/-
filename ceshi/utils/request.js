import { Domain } from "../constant"

export default function request(route, params, callback, method="POST", isSelfApiFlag = true) {
    wx.showLoading({
      title: '正在加载',
    })
    wx.request({
      url: isSelfApiFlag ? Domain + route : route,
      data: params,
      method,
      success: (result) => {
        wx.hideLoading()
        callback(result)
      },
      fail: (res) => {},
    })
}