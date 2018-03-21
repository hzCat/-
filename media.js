(function(doc, win, px = 375, rem = 50) {
  // 获取设备
  var docE1 = doc.documentElement,
    resizeEvt = "orientationchange" in window ? "orientationchange" : "resize",
    // 计算
    recalc = function() {
      // 屏幕宽度
      var clientWidth = docE1.clientWidth;
      // 不存在屏幕宽度
      if (!clientWidth) return;
      // 将屏幕宽度320的html下的font-size设置为,设计稿宽度为px
      docE1.style.fontSize = rem * (clientWidth / px) + "px";
    };

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener("DOMContentLoaded", recalc, false);
})(document, window);
// chrome不识别小于12px的字体,所以rem不能低于12
// px设置为屏幕宽度,iphone6-375 ,iphone5-320
// rem设置为50的时候,正常使用rem为ui图的百分之一
