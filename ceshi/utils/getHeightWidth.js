export function GetAllHeight() {
    let systemInfo = wx.getSystemInfoSync()
    // px rpx的换算比例
    let pxToRpxScale = 750 / systemInfo.windowWidth
    // 手机自带导航栏
    let navigationHeight = 44 * pxToRpxScale
    // 默认状态栏的高度
    let ktxStatusHeight = systemInfo.statusBarHeight * pxToRpxScale
    // window的宽度 高度
    let ktxWindowHeight = systemInfo.windowHeight * pxToRpxScale
    let ktxWindowWidth = systemInfo.windowWidth * pxToRpxScale
    // 屏幕的高度
    let ktxScreenHeight = systemInfo.screenHeight * pxToRpxScale
    // 安全距离
    let safeHeight = ktxScreenHeight - systemInfo.safeArea.bottom * pxToRpxScale
    // tabBar高度
    let tabBarHeight = ktxScreenHeight - ktxStatusHeight - navigationHeight - ktxWindowHeight

    return {
        pxToRpxScale,
        navigationHeight,
        ktxStatusHeight,
        ktxWindowHeight,
        ktxWindowWidth,
        ktxScreenHeight,
        safeHeight,
        tabBarHeight,
    }
    
}