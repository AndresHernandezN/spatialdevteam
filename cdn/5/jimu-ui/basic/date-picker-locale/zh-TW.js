System.register([],(function(t,e){return{execute:function(){t((()=>{"use strict";var t={d:(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};t.r(e),t.d(e,{default:()=>m});var n={lessThanXSeconds:{one:"\u5c11\u65bc 1 \u79d2",other:"\u5c11\u65bc {{count}} \u79d2"},xSeconds:{one:"1 \u79d2",other:"{{count}} \u79d2"},halfAMinute:"\u534a\u5206\u9418",lessThanXMinutes:{one:"\u5c11\u65bc 1 \u5206\u9418",other:"\u5c11\u65bc {{count}} \u5206\u9418"},xMinutes:{one:"1 \u5206\u9418",other:"{{count}} \u5206\u9418"},xHours:{one:"1 \u5c0f\u6642",other:"{{count}} \u5c0f\u6642"},aboutXHours:{one:"\u5927\u7d04 1 \u5c0f\u6642",other:"\u5927\u7d04 {{count}} \u5c0f\u6642"},xDays:{one:"1 \u5929",other:"{{count}} \u5929"},aboutXWeeks:{one:"\u5927\u7d04 1 \u500b\u661f\u671f",other:"\u5927\u7d04 {{count}} \u500b\u661f\u671f"},xWeeks:{one:"1 \u500b\u661f\u671f",other:"{{count}} \u500b\u661f\u671f"},aboutXMonths:{one:"\u5927\u7d04 1 \u500b\u6708",other:"\u5927\u7d04 {{count}} \u500b\u6708"},xMonths:{one:"1 \u500b\u6708",other:"{{count}} \u500b\u6708"},aboutXYears:{one:"\u5927\u7d04 1 \u5e74",other:"\u5927\u7d04 {{count}} \u5e74"},xYears:{one:"1 \u5e74",other:"{{count}} \u5e74"},overXYears:{one:"\u8d85\u904e 1 \u5e74",other:"\u8d85\u904e {{count}} \u5e74"},almostXYears:{one:"\u5c07\u8fd1 1 \u5e74",other:"\u5c07\u8fd1 {{count}} \u5e74"}};const a=function(t,e,a){var r,i=n[t];return r="string"==typeof i?i:1===e?i.one:i.other.replace("{{count}}",String(e)),null!=a&&a.addSuffix?a.comparison&&a.comparison>0?r+"\u5167":r+"\u524d":r};function r(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const i={date:r({formats:{full:"y'\u5e74'M'\u6708'd'\u65e5' EEEE",long:"y'\u5e74'M'\u6708'd'\u65e5'",medium:"yyyy-MM-dd",short:"yy-MM-dd"},defaultWidth:"full"}),time:r({formats:{full:"zzzz a h:mm:ss",long:"z a h:mm:ss",medium:"a h:mm:ss",short:"a h:mm"},defaultWidth:"full"}),dateTime:r({formats:{full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})};var o={lastWeek:"'\u4e0a\u500b'eeee p",yesterday:"'\u6628\u5929' p",today:"'\u4eca\u5929' p",tomorrow:"'\u660e\u5929' p",nextWeek:"'\u4e0b\u500b'eeee p",other:"P"};const u=function(t,e,n,a){return o[t]};function d(t){return function(e,n){var a;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&t.formattingValues){var r=t.defaultFormattingWidth||t.defaultWidth,i=null!=n&&n.width?String(n.width):r;a=t.formattingValues[i]||t.formattingValues[r]}else{var o=t.defaultWidth,u=null!=n&&n.width?String(n.width):t.defaultWidth;a=t.values[u]||t.values[o]}return a[t.argumentCallback?t.argumentCallback(e):e]}}const l={ordinalNumber:function(t,e){var n=Number(t);switch(null==e?void 0:e.unit){case"date":return n+"\u65e5";case"hour":return n+"\u6642";case"minute":return n+"\u5206";case"second":return n+"\u79d2";default:return"\u7b2c "+n}},era:d({values:{narrow:["\u524d","\u516c\u5143"],abbreviated:["\u524d","\u516c\u5143"],wide:["\u516c\u5143\u524d","\u516c\u5143"]},defaultWidth:"wide"}),quarter:d({values:{narrow:["1","2","3","4"],abbreviated:["\u7b2c\u4e00\u523b","\u7b2c\u4e8c\u523b","\u7b2c\u4e09\u523b","\u7b2c\u56db\u523b"],wide:["\u7b2c\u4e00\u523b\u9418","\u7b2c\u4e8c\u523b\u9418","\u7b2c\u4e09\u523b\u9418","\u7b2c\u56db\u523b\u9418"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:d({values:{narrow:["\u4e00","\u4e8c","\u4e09","\u56db","\u4e94","\u516d","\u4e03","\u516b","\u4e5d","\u5341","\u5341\u4e00","\u5341\u4e8c"],abbreviated:["1\u6708","2\u6708","3\u6708","4\u6708","5\u6708","6\u6708","7\u6708","8\u6708","9\u6708","10\u6708","11\u6708","12\u6708"],wide:["\u4e00\u6708","\u4e8c\u6708","\u4e09\u6708","\u56db\u6708","\u4e94\u6708","\u516d\u6708","\u4e03\u6708","\u516b\u6708","\u4e5d\u6708","\u5341\u6708","\u5341\u4e00\u6708","\u5341\u4e8c\u6708"]},defaultWidth:"wide"}),day:d({values:{narrow:["\u65e5","\u4e00","\u4e8c","\u4e09","\u56db","\u4e94","\u516d"],short:["\u65e5","\u4e00","\u4e8c","\u4e09","\u56db","\u4e94","\u516d"],abbreviated:["\u9031\u65e5","\u9031\u4e00","\u9031\u4e8c","\u9031\u4e09","\u9031\u56db","\u9031\u4e94","\u9031\u516d"],wide:["\u661f\u671f\u65e5","\u661f\u671f\u4e00","\u661f\u671f\u4e8c","\u661f\u671f\u4e09","\u661f\u671f\u56db","\u661f\u671f\u4e94","\u661f\u671f\u516d"]},defaultWidth:"wide"}),dayPeriod:d({values:{narrow:{am:"\u4e0a",pm:"\u4e0b",midnight:"\u51cc\u6668",noon:"\u5348",morning:"\u65e9",afternoon:"\u4e0b\u5348",evening:"\u665a",night:"\u591c"},abbreviated:{am:"\u4e0a\u5348",pm:"\u4e0b\u5348",midnight:"\u51cc\u6668",noon:"\u4e2d\u5348",morning:"\u65e9\u6668",afternoon:"\u4e2d\u5348",evening:"\u665a\u4e0a",night:"\u591c\u9593"},wide:{am:"\u4e0a\u5348",pm:"\u4e0b\u5348",midnight:"\u51cc\u6668",noon:"\u4e2d\u5348",morning:"\u65e9\u6668",afternoon:"\u4e2d\u5348",evening:"\u665a\u4e0a",night:"\u591c\u9593"}},defaultWidth:"wide",formattingValues:{narrow:{am:"\u4e0a",pm:"\u4e0b",midnight:"\u51cc\u6668",noon:"\u5348",morning:"\u65e9",afternoon:"\u4e0b\u5348",evening:"\u665a",night:"\u591c"},abbreviated:{am:"\u4e0a\u5348",pm:"\u4e0b\u5348",midnight:"\u51cc\u6668",noon:"\u4e2d\u5348",morning:"\u65e9\u6668",afternoon:"\u4e2d\u5348",evening:"\u665a\u4e0a",night:"\u591c\u9593"},wide:{am:"\u4e0a\u5348",pm:"\u4e0b\u5348",midnight:"\u51cc\u6668",noon:"\u4e2d\u5348",morning:"\u65e9\u6668",afternoon:"\u4e2d\u5348",evening:"\u665a\u4e0a",night:"\u591c\u9593"}},defaultFormattingWidth:"wide"})};function s(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=n.width,r=a&&t.matchPatterns[a]||t.matchPatterns[t.defaultMatchWidth],i=e.match(r);if(!i)return null;var o,u=i[0],d=a&&t.parsePatterns[a]||t.parsePatterns[t.defaultParseWidth],l=Array.isArray(d)?function(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n;return}(d,(function(t){return t.test(u)})):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n;return}(d,(function(t){return t.test(u)}));return o=t.valueCallback?t.valueCallback(l):l,{value:o=n.valueCallback?n.valueCallback(o):o,rest:e.slice(u.length)}}}var h,c={ordinalNumber:(h={matchPattern:/^(\u7b2c\s*)?\d+(\u65e5|\u6642|\u5206|\u79d2)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(h.matchPattern);if(!n)return null;var a=n[0],r=t.match(h.parsePattern);if(!r)return null;var i=h.valueCallback?h.valueCallback(r[0]):r[0];return{value:i=e.valueCallback?e.valueCallback(i):i,rest:t.slice(a.length)}}),era:s({matchPatterns:{narrow:/^(\u524d)/i,abbreviated:/^(\u524d)/i,wide:/^(\u516c\u5143\u524d|\u516c\u5143)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^(\u524d)/i,/^(\u516c\u5143)/i]},defaultParseWidth:"any"}),quarter:s({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^\u7b2c[\u4e00\u4e8c\u4e09\u56db]\u523b/i,wide:/^\u7b2c[\u4e00\u4e8c\u4e09\u56db]\u523b\u9418/i},defaultMatchWidth:"wide",parsePatterns:{any:[/(1|\u4e00)/i,/(2|\u4e8c)/i,/(3|\u4e09)/i,/(4|\u56db)/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:s({matchPatterns:{narrow:/^(\u4e00|\u4e8c|\u4e09|\u56db|\u4e94|\u516d|\u4e03|\u516b|\u4e5d|\u5341[\u4e8c\u4e00])/i,abbreviated:/^(\u4e00|\u4e8c|\u4e09|\u56db|\u4e94|\u516d|\u4e03|\u516b|\u4e5d|\u5341[\u4e8c\u4e00]|\d|1[12])\u6708/i,wide:/^(\u4e00|\u4e8c|\u4e09|\u56db|\u4e94|\u516d|\u4e03|\u516b|\u4e5d|\u5341[\u4e8c\u4e00])\u6708/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^\u4e00/i,/^\u4e8c/i,/^\u4e09/i,/^\u56db/i,/^\u4e94/i,/^\u516d/i,/^\u4e03/i,/^\u516b/i,/^\u4e5d/i,/^\u5341(?!(\u4e00|\u4e8c))/i,/^\u5341\u4e00/i,/^\u5341\u4e8c/i],any:[/^\u4e00|1/i,/^\u4e8c|2/i,/^\u4e09|3/i,/^\u56db|4/i,/^\u4e94|5/i,/^\u516d|6/i,/^\u4e03|7/i,/^\u516b|8/i,/^\u4e5d|9/i,/^\u5341(?!(\u4e00|\u4e8c))|10/i,/^\u5341\u4e00|11/i,/^\u5341\u4e8c|12/i]},defaultParseWidth:"any"}),day:s({matchPatterns:{narrow:/^[\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u65e5]/i,short:/^[\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u65e5]/i,abbreviated:/^\u9031[\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u65e5]/i,wide:/^\u661f\u671f[\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u65e5]/i},defaultMatchWidth:"wide",parsePatterns:{any:[/\u65e5/i,/\u4e00/i,/\u4e8c/i,/\u4e09/i,/\u56db/i,/\u4e94/i,/\u516d/i]},defaultParseWidth:"any"}),dayPeriod:s({matchPatterns:{any:/^(\u4e0a\u5348?|\u4e0b\u5348?|\u5348\u591c|[\u4e2d\u6b63]\u5348|\u65e9\u4e0a?|\u4e0b\u5348|\u665a\u4e0a?|\u51cc\u6668)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^\u4e0a\u5348?/i,pm:/^\u4e0b\u5348?/i,midnight:/^\u5348\u591c/i,noon:/^[\u4e2d\u6b63]\u5348/i,morning:/^\u65e9\u4e0a/i,afternoon:/^\u4e0b\u5348/i,evening:/^\u665a\u4e0a?/i,night:/^\u51cc\u6668/i}},defaultParseWidth:"any"})};const m={code:"zh-TW",formatDistance:a,formatLong:i,formatRelative:u,localize:l,match:c,options:{weekStartsOn:1,firstWeekContainsDate:4}};return e})())}}}));