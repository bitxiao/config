(()=>{"use strict";var e={519:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function u(e){try{l(r.next(e))}catch(e){i(e)}}function a(e){try{l(r.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,a)}l((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!((o=(o=u.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};Object.defineProperty(t,"__esModule",{value:!0});var i=n(882),u=i.getInterface();(function(){return r(this,void 0,void 0,(function(){var e,t,n;return o(this,(function(r){switch(r.label){case 0:return e=20,[4,(t=i.getFunc())()];case 1:n=r.sent(),r.label=2;case 2:return e-- >0&&null==n?[4,i.delay(1e3)]:[3,5];case 3:return r.sent(),[4,t()];case 4:return n=r.sent(),[3,2];case 5:return[2,n]}}))}))})().then((function(e){if(null!=e)u(e[0],e[1]);else{var t=["fail","fail to get data, timed out!"];u(t[0],t[1])}})).catch((function(e){var t=["fail",e.toString()];u(t[0],t[1])}))},498:function(e,t){var n=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function u(e){try{l(r.next(e))}catch(e){i(e)}}function a(e){try{l(r.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,a)}l((r=r.apply(e,t||[])).next())}))},r=this&&this.__generator||function(e,t){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!((o=(o=u.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};function o(){return n(this,void 0,void 0,(function(){var e;return r(this,(function(t){return(e=document.querySelectorAll('iframe#iframe-embed[src^="http"]')).length>0?[2,["reload",e[0].getAttribute("src")]]:[2,null]}))}))}function i(){return n(this,void 0,void 0,(function(){return r(this,(function(e){return null==window.sources?[2,null]:[2,["result",JSON.stringify({sources:window.sources,tracks:window.tracks})]]}))}))}Object.defineProperty(t,"__esModule",{value:!0}),t.getFunc=void 0,t.getFunc=function(){var e=location.href;return e.startsWith("https://myflixer.to/watch-")?o:e.search("/vidcloud.msk.ru/")>-1?i:null}},456:function(e,t){var n=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function u(e){try{l(r.next(e))}catch(e){i(e)}}function a(e){try{l(r.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,a)}l((r=r.apply(e,t||[])).next())}))},r=this&&this.__generator||function(e,t){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!((o=(o=u.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};function o(e){return null!=e.error}function i(e){var t={defaultQuality:e.defaultQuality,videoUrl:e.videoUrl};return e.quality&&"string"==typeof e.quality&&(t.quality=e.quality),t}function u(e){return n(this,void 0,void 0,(function(){var t,n;return r(this,(function(r){switch(r.label){case 0:return[4,fetch(e).catch((function(e){return{error:e.toString()}}))];case 1:return o(t=r.sent())?[3,3]:[4,t.json().catch((function(e){return{error:e.toString()}}))];case 2:return o(n=r.sent())?[2,n]:[2,n.map(i)];case 3:return[2,t];case 4:return[2]}}))}))}function a(e){var t=0;if(e.defaultQuality&&(t+=10),null!=e.quality){var n=e.quality;n.search("720")>-1&&(t+=8),n.search("480")>-1&&(t+=7),n.search("1080")>-1&&(t+=6)}return t}function l(){return n(this,void 0,void 0,(function(){var e,t,n,l,c,s;return r(this,(function(r){switch(r.label){case 0:return(e=Object.keys(window).filter((function(e){return e.startsWith("flashvars_")}))).length>0&&"mediaDefinitions"in(t=window[e[0]])&&(n=Array.from(t.mediaDefinitions).map(i)).length>0?(n.sort((function(e,t){return a(t)-a(e)})),(l=n[0].videoUrl)?[4,u(l)]:[3,2]):[3,2];case 1:if(!o(c=r.sent())&&(s=Array.from(c)).length>0)return s.sort((function(e,t){return a(t)-a(e)})),[2,["result",JSON.stringify({sources:[{file:s[0].videoUrl,type:"hls",label:"ORG"}]})]];r.label=2;case 2:return[2,null]}}))}))}Object.defineProperty(t,"__esModule",{value:!0}),t.getFunc=void 0,t.getFunc=function(){return location.href.search("pornhub.com/")>-1?l:null}},882:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function u(e){try{l(r.next(e))}catch(e){i(e)}}function a(e){try{l(r.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,a)}l((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!((o=(o=u.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.getFunc=t.getInterface=t.delay=void 0;var i=n(498),u=n(456),a=n(39);t.delay=function(e){return r(this,void 0,void 0,(function(){return o(this,(function(t){return[2,new Promise((function(t,n){setTimeout((function(){t(1)}),e)}))]}))}))},t.getInterface=function(){if("Android"in window){var e=window.Android;return function(t,n){return e.sendMessage(t,n)}}var t=window.webkit&&window.webkit.messageHandlers&&window.webkit.messageHandlers.bridge;if(t){var n=t;return function(e,t){n.postMessage({type:e,msg:t})}}return function(e,t){console.log(e,t)}},t.getFunc=function(){var e=i.getFunc();return null==e&&(e=u.getFunc()),null==e&&(e=a.getFunc()),null==e&&(e=function(){return r(this,void 0,void 0,(function(){return o(this,(function(e){return[2,["fail","process function not found,url:"+location.href]]}))}))}),e}},39:function(e,t){var n=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function u(e){try{l(r.next(e))}catch(e){i(e)}}function a(e){try{l(r.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,a)}l((r=r.apply(e,t||[])).next())}))},r=this&&this.__generator||function(e,t){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!((o=(o=u.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.getFunc=void 0;var o=new Map,i=new Array;function u(e){var t=i.filter((function(t){return t[0]==e}));if(t.length>0){var n=t[t.length-1],r=o.get(n[0]+"_"+n[1]).split("?"),u=new URLSearchParams(r[1]);if(Array.from(["range","rn","rbuf"]).forEach((function(e){u.has(e)&&u.delete(e)})),u.has("clen")&&u.has("mime")){var a=parseInt(u.get("clen")),l=u.get("mime");if("audio"===n[0]&&a>5e5||"video"===n[0]&&a>1e6){var c=r[0]+"?"+u.toString();return[n[0],c]}console.log("size not valid, length:"+a+",mime:"+l)}else console.log("no clen and mime found")}else console.log("no such media type found:",e);return null}function a(){return n(this,void 0,void 0,(function(){var e,t,n,i;return r(this,(function(r){return 0==o.size?null!=document.querySelector("ytm-player-error-message-renderer")?[2,["fail","unavailable"]]:(console.log("no data given"),[2,null]):document.querySelectorAll("video[src^=blob]").length>0?location.href.startsWith("https://music.youtube.com/")?null!=(e=u("audio"))?(i={sources:[{file:e[1],type:e[0],label:"ORG"}]},[2,["result",JSON.stringify(i)]]):[2,null]:(t=u("audio"),n=u("video"),null!=t&&null!=n?(i={sources:[{file:t[1],type:t[0],label:"ORG"},{file:n[1],type:n[0],label:"ORG"}]},[2,["result",JSON.stringify(i)]]):[2,null]):null!=document.querySelector("ytm-player-error-message-renderer")?[2,["fail","unavailable"]]:(console.log("no active video found"),[2,null])}))}))}function l(e){if(e.search("/videoplayback?")>-1){var t=new URLSearchParams(e);if(t.has("id")&&t.has("mime")){var n=t.get("mime"),r=n.startsWith("video");if(r||n.startsWith("audio")){var u=t.get("id"),a=r?"video":"audio",l=a+"_"+u;o.has(l)||(o.set(l,e),i.push([a,u]))}}}}t.getFunc=function(){return location.href.search("youtube.com/watch?")>-1?(window.mycallback=l,a):null}}},t={};!function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}(519)})();