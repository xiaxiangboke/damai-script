// ==UserScript==
// @name Auto jump to payment for pay.damai.cn
// @version      0.1
// @description  大麦网自动跳转第三方支付页面
// @author       Kagurazaka Kotori
// @homepageURL  https://github.com/kagurazakakotori/damai-script
// @downloadURL  https://raw.githubusercontent.com/kagurazakakotori/damai-script/master/Auto%20jump%20to%20payment%20for%20pay.damai.cn.user.js
//
// @namespace Violentmonkey Scripts
// @match *://pay.damai.cn/*
// @grant none
// @require      https://cdn.bootcss.com/jquery/1.8.2/jquery.min.js
// 
// ==/UserScript==

$('#operLayer').remove();
$('.site_guide').remove();
$('.dm-bottom-wrap').remove();

$(function(){
  $('.payTab [typeid=1]').click();          // Switch to online pay tab
  $('.r[groupid=1][typeid=2]').click();     // Choose Alipay
  //$('.r[groupid=77][typeid=57]').click();   // Choose WeChatPay
  
  // Submit
  // $('#submit2').click();
  $('#form1').submit();
});