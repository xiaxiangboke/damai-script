// ==UserScript==
// @name Hider and Unhider for piao.damai.cn
// @namespace Violentmonkey Scripts
// @version      0.1
// @description  Buy ticket and search your wallet!
// @match https://piao.damai.cn/*
// @grant none
// @require      http://192.168.1.230/jq/jquery-1.8.2.min.js
// 
// ==/UserScript==

$('.hd').remove();
$('.sd').remove();
$('.g-ft').remove();
$('.m-box:eq(1)').remove();
$('.m-layer').remove();
$('.m-mask').remove();
$('.m-share').remove();
$('.m-sdfix').remove();
$('.m-qrcode').remove();
$('.m-calendar').remove();
$('.m-choose-picker').remove();
$('.m-goodstips').remove();
$('.m-flowers').remove();
  console.log('removed');


$(function(){
  $('li.itm').removeClass('itm-oos');
  $('ul.lst').removeClass('lst-dis');
  $('#cartList.m-cart').removeClass('f-dn');
  $('#cartList.m-cart').show();
  
  // For the Afternoon show - 1280
  $('[data-performid=9000160]>a').append('<div id="afternoon"></div>');
  $('#afternoon').click();
  $('ul.lst').removeClass('lst-dis');
  $('[data-priceid=12013117]>a>span').click();
  $('.ipt-num').val('4');
  
  // For test only
  //$('[data-performid=9006781]>a').append('<div id="afternoon"></div>');
  //$('#afternoon').click();
  //$('ul.lst').removeClass('lst-dis');
  //$('[data-priceid=12049418]>a>span').click();
  //$('.ipt-num').val('4');
  
  console.log('Done');
});