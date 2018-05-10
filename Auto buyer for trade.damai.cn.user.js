// ==UserScript==
// @name Auto buyer for trade.damai.cn
// @version      0.1
// @description  大麦网自动填写订单信息（包括实名信息）
// @author       Kagurazaka Kotori
// @homepageURL  https://github.com/kagurazakakotori/damai-script
// @downloadURL  https://raw.githubusercontent.com/kagurazakakotori/damai-script/master/Auto%20buyer%20for%20trade.damai.cn.user.js
//
// @namespace Violentmonkey Scripts
// @match *://buy.damai.cn/*
// @grant none
// @require      https://cdn.bootcss.com/jquery/1.8.2/jquery.min.js
// 
// ==/UserScript==

let cardid = "110009f2a97184f19325f01bbf377492238e033f09222";  //身份证45位字符串,F12审查元素可知

$('.g-bd img').remove();
$('#operLayer').remove();
$('.site_guide').remove();
$('.dm-bottom-wrap').remove();

$(function(){
  // Select ID card
  $('.m-panel-realname .u-btn-rds').append('<div id="monkey-realname"></div>');
  $('#monkey-realname').click();
  $('[realname_cardid=' + cardid + ']').click();
  $('[wid=modal-onevote3] .u-btn-c5').append('<div id="monkey-realname-confirm"></div>');
  $('#monkey-realname-confirm').click();
  console.log('ID card selected');
  
  // Submit
  $('#orderConfirmSubmit').click();
});
