// ==UserScript==
// @name Auto submit for piao.damai.cn
// @namespace Violentmonkey Scripts
// @version      0.1
// @description  Buy ticket and search your wallet!
// @match https://piao.damai.cn/*
// @grant none
// @require      http://192.168.1.230/jq/jquery-1.8.2.min.js
// 
// ==/UserScript==

// Price ID begin
let test139316 = {
    stu: '12084693',
    back: '12084692',
    front: '12084798'
}

let aqours = {
    day1280: '12013117',
    day1080: '12013118',
    day880a: '12068613',
    day880ext: '12089426',
    day880: '12068621',
    day680: '12013119',
    day480: '12068614',
    night1280: '12068634',
    night1080: '12068635',
    night880ext: '12089425',
    night880: '12068639',
    night880a: '12068637',
    night680: '12068636',
    night480: '12068638'
}
// Price ID end


let num = '1';
let proId = aqours.day1280;

// DO NOT edit the following

let companyId = '872'; // 872 for Shanghai

$(function(){
  setInterval(function(){
    location.href = "//www.damai.cn/GotoShopping.aspx?_action=Immediately&proId=" + proId + "&optype=1&companyId=" + companyId + "&num=" + num + "&n=0"
  },100);
  console.log('Done');
});
