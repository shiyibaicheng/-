// 本文件是模拟后端接口代码
const addressMock = {
    "/getAddress": function() {
        let dataBase = wx.getStorageSync('database') || {}
        dataBase.address = dataBase.address || []
        return { code: 200, data: dataBase.address }
    },
    "/addAddress": function(param) {
        let dataBase = wx.getStorageSync('database') || {}
        dataBase.address = dataBase.address || []
        dataBase.address.push(param)
        wx.setStorageSync('dataBase', dataBase)
        return { code: 200, data: true }
    }
}

export default addressMock