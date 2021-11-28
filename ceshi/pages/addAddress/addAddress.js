import { GetAllHeight } from "../../utils/getHeightWidth"
import {addAddress, getSheng,getShi,getqu} from "../../api/address"
import {request} from "../../utils/request"
// pages/addAddress/addAddress.js
const {
    pxTorpxScale,
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
        pageHeight:0,
        safeHeight,
        navigationHeight,
        province: [],
        city:[],
        qu:[],
        address:{
            name: "",
            phone: "",
            sheng_id:"",
            shi_id:"",
            address: "",
            sheng_name: "",
            shi_name: "",
            qu_name: "",
            is_moren: true
        },
        zuojiantou:[
            {
                id:1,
                url:"../../pages/images/jiantou.png"
            }
        ],
        youjiantou:[
            {
                id:1,
                url:"../../pages/images/youjiantou.png"
            }
        ],
        addfriends:[
            {
                id:1,
                url:"../../pages/images/liang.png"
            }
        ]
    },
    
    addAddress() {
        console.log(this.data.address)
        // 发送请求提交收货人信息
        addAddress(this.data.address, (res) => {
            console.log(res)
        })
        // 成功之后跳转到查看收货人页面
        wx.navigateTo({
            url: '/pages/shouHuoDiZhi/shouHuoDiZhi',
          })
        // 失败之后要展示失败信息
    },

    inputTextHandle({ detail: { value }, currentTarget: { dataset: { filed,format} } }) {
        this.data.address[filed] =format ? this[format](value, filed):value
        this.setData({ address: this.data.address })

        },

    //  inputTextHandle:function(e){
    //     console.log(e)
    //     this.data.address.sheng_id=this.data.province[e.detail.value].id
    //     this.setData({address:this.data.address})
    //     getShi(this.data.address.sheng_id,{}, (res) => {

    //         console.log(res.data.result)
    //         this.setData({
    //             city:res.data.result
    //         })

    //     })
        
    // },
   
   
   
    formatPickerValue_sheng: function(value,filed) {
        
        this.setData({
            [filed + "_tempIndexValue"]: value
        })
        this.data.address.sheng_id=this.data.province[value].id
        this.setData({address:this.data.address})
        getShi(this.data.address.sheng_id,{}, (res) => {

            console.log(res.data.result)
            this.setData({
                city:res.data.result
            })

        })
        
        return this.data.province[value].name                                                                                                                                                                                                                            
    },
    formatPickerValue_shi: function(value, filed) {
        this.setData({
            [filed + "_tempIndexValue"]: value
        })
        this.data.address.shi_id=this.data.city[value].id
        this.setData({address:this.data.address})

        getqu(this.data.address.shi_id,{}, (res) => {

            console.log(res.data.result)
            this.setData({
                qu:res.data.result
            })
        })
        
        return this.data.city[value].name
    },
    formatPickerValue_qu:function(value, filed){
        this.setData({
            [filed + "_tempIndexValue"]: value
        })
        return this.data.qu[value].name
    },
    
    
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function () {
        this.data.address.name=""
        this.setData({address:this.data.address})
       
        // 获取省
        
        getSheng({}, (res) => {
            console.log(res.data.result)
            this.setData({
                province:res.data.result
            })
        })
        // getShi(this.data.sheng_id,{}, (res) => {

        //             console.log(res.data.result)
        //             this.setData({
        //                 city:res.data.result
        //             })
        
        //         })
        

    },
    

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        this.setData({pageHeight:ktxScreenHeight-safeHeight-navigationHeight-20-160})

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