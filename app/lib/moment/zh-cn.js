//! moment.js locale configuration

;(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
      && typeof require === 'function' ? factory(require('../moment')) :
  typeof define === 'function' && define.amd ? define(['../moment'], factory) :
  factory(global.moment)
}(this, (function (moment) { 'use strict';


   var zhCn = moment.defineLocale('zh-cn', {
       months : '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二�?'.split('_'),
       monthsShort : '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12�?'.split('_'),
       weekdays : '星期日_星期一_星期二_星期三_星期四_星期五_星期�?'.split('_'),
       weekdaysShort : '周日_周一_周二_周三_周四_周五_周六'.split('_'),
       weekdaysMin : '日_一_二_三_四_五_�?'.split('_'),
       longDateFormat : {
           LT : 'HH:mm',
           LTS : 'HH:mm:ss',
           L : 'YYYY/MM/DD',
           LL : 'YYYY年M月D�?',
           LLL : 'YYYY年M月D日Ah点mm�?',
           LLLL : 'YYYY年M月D日ddddAh点mm�?',
           l : 'YYYY/M/D',
           ll : 'YYYY年M月D�?',
           lll : 'YYYY年M月D�? HH:mm',
           llll : 'YYYY年M月D日dddd HH:mm'
       },
       meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
       meridiemHour: function (hour, meridiem) {
           if (hour === 12) {
               hour = 0;
           }
           if (meridiem === '凌晨' || meridiem === '早上' ||
                   meridiem === '上午') {
               return hour;
           } else if (meridiem === '下午' || meridiem === '晚上') {
               return hour + 12;
           } else {
               // '中午'
               return hour >= 11 ? hour : hour + 12;
           }
       },
       meridiem : function (hour, minute, isLower) {
           var hm = hour * 100 + minute;
           if (hm < 600) {
               return '凌晨';
           } else if (hm < 900) {
               return '早上';
           } else if (hm < 1130) {
               return '上午';
           } else if (hm < 1230) {
               return '中午';
           } else if (hm < 1800) {
               return '下午';
           } else {
               return '晚上';
           }
       },
       calendar : {
           sameDay : '[今天]LT',
           nextDay : '[明天]LT',
           nextWeek : '[下]ddddLT',
           lastDay : '[昨天]LT',
           lastWeek : '[上]ddddLT',
           sameElse : 'L'
       },
       dayOfMonthOrdinalParse: /\d{1,2}(日|月|�?)/,
       ordinal : function (number, period) {
           switch (period) {
               case 'd':
               case 'D':
               case 'DDD':
                   return number + '�?';
               case 'M':
                   return number + '�?';
               case 'w':
               case 'W':
                   return number + '�?';
               default:
                   return number;
           }
       },
       relativeTime : {
           future : '%s�?',
           past : '%s�?',
           s : '几秒',
           ss : '%d �?',
           m : '1 分钟',
           mm : '%d 分钟',
           h : '1 小时',
           hh : '%d 小时',
           d : '1 �?',
           dd : '%d �?',
           M : '1 个月',
           MM : '%d 个月',
           y : '1 �?',
           yy : '%d �?'
       },
       week : {
           // GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
           dow : 1, // Monday is the first day of the week.
           doy : 4  // The week that contains Jan 4th is the first week of the year.
       }
   });

   return zhCn;

})));