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
        pageHeight: 0,

        dizhi: [
            {moren:"默认地址",sanji:"河北省唐山路南区",juti:"鹭港小区701",name:"佩小祺",phone:"182****1046"}
        ],
        kouhao: [{url:"/pages/images/大于号.png"}],
        fukuan:[{zhifu:"支付方式",fanghshi:"线上付款"},],
        huowuxiangqing: [
            {name:"柳宗工作室",shuliang:"共2件",beizhu:"该不支持7天无理由退换的商品",kuaidigongsi:"快递公司",wuliu:"德邦物流",day:"9月18日[今天]15：00-21：00"}
        ],
        huowu:[{url:"/pages/images/酒坛.png"}],




        tijiao:[
            {spjiage:"商品金额",spjiagenum:"1290.00",yunfei:"运费 (总重:10.000 kg )",yunfeinum:"80.00",zong:"1290.00",tj:"提交订单"}
        ],
    },

    goToAddressHandle() {
        wx.navigateTo({
          url: '/pages/shouHuoDiZhi/shouHuoDiZhi',
        })
    },
    
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        this.setData({ pageHeight: ktxWindowHeight - 80*3 - 40 - safeHeight - 20 })
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