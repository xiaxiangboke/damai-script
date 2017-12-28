// ==UserScript==
// @name Auto buyer for trade.damai.cn
// @namespace Violentmonkey Scripts
// @version      0.1
// @description  Buy ticket and search your wallet!
// @match *://trade.damai.cn/*
// @grant none
// @require      http://192.168.1.230/jq/jquery-1.8.2.min.js
// 
// ==/UserScript==

let cardid = "1100077cc2c37966e94c6dc8e2bc6069c9bde7f13ee76";

$('.g-bd img').remove();

$(function(){
  // Select ID card
  $('.m-panel-realname .u-btn-rds').append('<div id="monkey-realname"></div>');
  $('#monkey-realname').click();
  $('[realname_cardid=' + cardid + ']').click();
  $('[wid=modal-onevote3] .u-btn-c5').append('<div id="monkey-realname-confirm"></div>');
  $('#monkey-realname-confirm').click();
  console.log('ID card selected');
  
  // Submit
  //setTimeout(function(){
    $('#orderConfirmSubmit').click();
  //},20);
});