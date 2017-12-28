// ==UserScript==
// @name Auto jump to payment for pay.damai.cn
// @namespace Violentmonkey Scripts
// @version      0.1
// @description  Buy ticket and search your wallet!
// @match *://pay.damai.cn/*
// @grant none
// @require      http://192.168.1.230/jq/jquery-1.8.2.min.js
// 
// ==/UserScript==

$('#operLayer').remove();
$('.site_guide').remove();
$('.dm-bottom-wrap').remove();

$(function(){
  $('.payTab [typeid=1]').click();          // Switch to online pay tab
  $('.r[groupid=1][typeid=2]').click();     // Choose Alipay
  //$('.r[groupid=77][typeid=57]').click();   // Choose WePay
  
  // Submit
  // $('#submit2').click();
  //setTimeout(function(){
    $('#form1').submit();
  //},20);
});