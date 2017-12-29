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
let test137185 = '12049418';

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


let num = '4';
let proId = aqours.day1280;

console.log("Stalled:" + proId + "x" + num);

// DO NOT edit the following

let companyId = '872'; // 872 for Shanghai

let startTime = 1514545200000;
if ($.now() < startTime) {
  // Get offset
  let serverTime = new Array();
  let localTime = new Array();
  let offset = new Array();
  let sum = 0;
  for (i = 0; i < 50; i++) {
    serverTime[i] = parseInt($.ajax({
      type: "GET",
      url: "../serverTime.aspx",
      async: false
    }).responseText);
    localTime[i] = $.now();
    offset[i] = serverTime[i] - localTime[i];
    console.log(offset[i]);
    sum += offset[i];
    setTimeout(2000);
  }
  console.log(sum)

  // calculate average offset
  let average = parseInt(sum / offset.length);
  console.log("Average delay:" + average);

  let interval = setInterval(function () {
    console.log("Now" + $.now());
    console.log("serverTime" + ($.now() + average));
    if (($.now() + average) >= startTime) {
      clearInterval(interval);
      location.href = "//www.damai.cn/GotoShopping.aspx?_action=Immediately&proId=" + proId + "&optype=1&companyId=" + companyId + "&num=" + num + "&n=0";
      console.log("RequestSent");
    }
  }, 20);
} else {
  location.href = "//www.damai.cn/GotoShopping.aspx?_action=Immediately&proId=" + proId + "&optype=1&companyId=" + companyId + "&num=" + num + "&n=0";
  console.log("RequestSent");
}