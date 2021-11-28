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
		
		canpin: [
			{
				id:1,
				name:"酒碗",
				url:"../images/酒碗.png",
				jiage:"1260.00"
			},
			{
				id:2,
				name:"重阳糕",
				url:"../images/重阳糕.png",
				jiage:"88.00"
			}
		],
  	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	gotoaddAddress() {
		wx.navigateTo({
		  url: '/pages/addOrder/addOrder',
		})
	},
	onLoad: function (options) {

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