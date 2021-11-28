import {GetAllHeight} from "../../utils/getHeightWidth"

const {
	pxToRpxScale,
	navigationHeight,
	ktxStatusHeight,
	ktxWindowHeight,
	ktxWindowWidth,
	ktxScreenHeight,
	safeHeight,
	tabBarHeight,
} = GetAllHeight()

GetAllHeight()

Page({

    /**
     * 页面的初始数据
     */
    data: {
        navigationHeight,
		safeHeight,
		pageHeight:0,
        
        currentAddressId: null,
        dizhiArr: [
            {id: 1, name:"佩小祺",phone:"182****1046",dizhi:"河北省唐山路南区鹭港小区701",isMoren: true},
            {id: 2, name:"佩小祺",phone:"182****1046",dizhi:"河北省唐山路南区鹭港小区701",isMoren: false, tabs: [
                {id: 1, name: "家", backColor: 'green'},
                {id: 2, name: "公司", backColor: 'blue'}
            ]},
            {id: 3, name:"佩小祺",phone:"182****1046",dizhi:"河北省唐山路南区鹭港小区701",isMoren: false},
            {id: 4, name:"佩小祺",phone:"182****1046",dizhi:"河北省唐山路南区鹭港小区701",isMoren: false},
        ],
    },

    gotoaddAddress(){
        wx.redirectTo({
          url: '/pages/addAddress/addAddress',
        })
    },
    // 点击地址的句柄
    tapAddAddress(event) {
        console.log(event)
        // 本地存储点击的地址id
        // 获取当前点击的地址id
        let addressId = event.currentTarget.dataset.addressid
        // 设置存储
        wx.setStorageSync("currentAddressId", addressId) 
        // 返回上个页面
        wx.navigateBack()
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // 获取缓存中的当前addressId
        let currentAddressId = wx.getStorageSync('currentAddressId')
        this.setData({ currentAddressId: currentAddressId })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        this.setData({pageHeight: ktxScreenHeight - navigationHeight - 80 - 20 - safeHeight})
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

        // let dizhiArr = wx.getStorageSync('/getAddress')
        // console.log('数据',dizhiArr)
        //     this.setData ({
        //         dizhiArr:dizhiArr
        //     })
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})