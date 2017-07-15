/*! 

SCROLLING ANIMATIONS --- Open Source - PROJECT: FANTASY WORLD by Himanshu Singh
  _   _  _                                _            
 | | | |(_) _ __ ___    __ _  _ __   ___ | |__   _   _ 
 | |_| || || '_ ` _ \  / _` || '_ \ / __|| '_ \ | | | |
 |  _  || || | | | | || (_| || | | |\__ \| | | || |_| |
 |_| |_||_||_| |_| |_| \__,_||_| |_||___/|_| |_| \__,_|

*/

!function(e){var n={hsdotsnav:"fillup",sectionContainer:"section",easing:"ease",animationTime:1e3,pagination:!0,updateURL:!1,keyboard:!0,beforeMove:null,afterMove:null,loop:!0,responsiveFallback:!1,direction:"vertical"};e.fn.swipeEvents=function(){return this.each(function(){function n(e){var n=e.originalEvent.touches;n&&n.length&&(t=n[0].pageX,i=n[0].pageY,o.bind("touchmove",a))}function a(e){var n=e.originalEvent.touches;if(n&&n.length){var s=t-n[0].pageX,r=i-n[0].pageY;s>=50&&o.trigger("swipeLeft"),s<=-50&&o.trigger("swipeRight"),r>=50&&o.trigger("swipeUp"),r<=-50&&o.trigger("swipeDown"),(Math.abs(s)>=50||Math.abs(r)>=50)&&o.unbind("touchmove",a)}}var t,i,o=e(this);o.bind("touchstart",n)})},e.fn.onepage_scroll=function(a){function t(){var n=!1,a=typeof o.responsiveFallback;"number"==a&&(n=e(window).width()<o.responsiveFallback),"boolean"==a&&(n=o.responsiveFallback),"function"==a&&(valFunction=o.responsiveFallback(),n=valFunction,typeOFv=typeof n,"number"==typeOFv&&(n=e(window).width()<valFunction)),n?(e("body").addClass("disabled-onepage-scroll"),e(document).unbind("mousewheel DOMMouseScroll MozMousePixelScroll"),s.swipeEvents().unbind("swipeDown swipeUp")):(e("body").hasClass("disabled-onepage-scroll")&&(e("body").removeClass("disabled-onepage-scroll"),e("html, body, .wrapper").animate({scrollTop:0},"fast")),s.swipeEvents().bind("swipeDown",function(n){e("body").hasClass("disabled-onepage-scroll")||n.preventDefault(),s.moveUp()}).bind("swipeUp",function(n){e("body").hasClass("disabled-onepage-scroll")||n.preventDefault(),s.moveDown()}),e(document).bind("mousewheel DOMMouseScroll MozMousePixelScroll",function(e){e.preventDefault(),i(e,e.originalEvent.wheelDelta||-e.originalEvent.detail)}))}function i(e,n){deltaOfInterest=n;var a=(new Date).getTime();a-lastAnimation<quietPeriod+o.animationTime?e.preventDefault():(deltaOfInterest<0?s.moveDown():s.moveUp(),lastAnimation=a)}var o=e.extend({},n,a),s=e(this),r=e(o.sectionContainer);if(total=r.length,status="off",topPos=0,leftPos=0,lastAnimation=0,quietPeriod=500,paginationList="",e.fn.transformPage=function(n,a,t){"function"==typeof n.beforeMove&&n.beforeMove(t),e(this).css({"-webkit-transform":"horizontal"==n.direction?"translate3d("+a+"%, 0, 0)":"translate3d(0, "+a+"%, 0)","-webkit-transition":"all "+n.animationTime+"ms "+n.easing,"-moz-transform":"horizontal"==n.direction?"translate3d("+a+"%, 0, 0)":"translate3d(0, "+a+"%, 0)","-moz-transition":"all "+n.animationTime+"ms "+n.easing,"-ms-transform":"horizontal"==n.direction?"translate3d("+a+"%, 0, 0)":"translate3d(0, "+a+"%, 0)","-ms-transition":"all "+n.animationTime+"ms "+n.easing,transform:"horizontal"==n.direction?"translate3d("+a+"%, 0, 0)":"translate3d(0, "+a+"%, 0)",transition:"all "+n.animationTime+"ms "+n.easing}),e(this).one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(e){"function"==typeof n.afterMove&&n.afterMove(t)})},e.fn.moveDown=function(){var n=e(this);if(index=e(o.sectionContainer+".current").data("index"),current=e(o.sectionContainer+"[data-index='"+index+"']"),next=e(o.sectionContainer+"[data-index='"+(index+1)+"']"),next.length<1){if(1!=o.loop)return;pos=0,next=e(o.sectionContainer+"[data-index='1']")}else pos=100*index*-1;if("function"==typeof o.beforeMove&&o.beforeMove(next.data("index")),current.removeClass("current"),next.addClass("current"),1==o.pagination&&(e(".onepage-pagination li[data-index='"+index+"']").removeClass("current"),e(".onepage-pagination li[data-index='"+next.data("index")+"']").addClass("current")),e("body")[0].className=e("body")[0].className.replace(/\bviewing-page-\d.*?\b/g,""),e("body").addClass("viewing-page-"+next.data("index")),history.replaceState&&1==o.updateURL){var a=window.location.href.substr(0,window.location.href.indexOf("#"))+"#"+(index+1);history.pushState({},document.title,a)}n.transformPage(o,pos,next.data("index"))},e.fn.moveUp=function(){var n=e(this);if(index=e(o.sectionContainer+".current").data("index"),current=e(o.sectionContainer+"[data-index='"+index+"']"),next=e(o.sectionContainer+"[data-index='"+(index-1)+"']"),next.length<1){if(1!=o.loop)return;pos=100*(total-1)*-1,next=e(o.sectionContainer+"[data-index='"+total+"']")}else pos=100*(next.data("index")-1)*-1;if("function"==typeof o.beforeMove&&o.beforeMove(next.data("index")),current.removeClass("current"),next.addClass("current"),1==o.pagination&&(e(".onepage-pagination li[data-index='"+index+"']").removeClass("current"),e(".onepage-pagination li[data-index='"+next.data("index")+"']").addClass("current")),e("body")[0].className=e("body")[0].className.replace(/\bviewing-page-\d.*?\b/g,""),e("body").addClass("viewing-page-"+next.data("index")),history.replaceState&&1==o.updateURL){var a=window.location.href.substr(0,window.location.href.indexOf("#"))+"#"+(index-1);history.pushState({},document.title,a)}n.transformPage(o,pos,next.data("index"))},e.fn.moveTo=function(n){if(current=e(o.sectionContainer+".current"),next=e(o.sectionContainer+"[data-index='"+n+"']"),next.length>0){if("function"==typeof o.beforeMove&&o.beforeMove(next.data("index")),current.removeClass("current"),next.addClass("current"),e(".onepage-pagination li.current").removeClass("current"),e(".onepage-pagination li[data-index='"+n+"']").addClass("current"),e("body")[0].className=e("body")[0].className.replace(/\bviewing-page-\d.*?\b/g,""),e("body").addClass("viewing-page-"+next.data("index")),pos=100*(n-1)*-1,history.replaceState&&1==o.updateURL){var a=window.location.href.substr(0,window.location.href.indexOf("#"))+"#"+(n-1);history.pushState({},document.title,a)}s.transformPage(o,pos,n)}},s.addClass("onepage-wrapper").css("position","relative"),e.each(r,function(n){e(this).css({position:"absolute",top:topPos+"%"}).addClass("section").attr("data-index",n+1),e(this).css({position:"absolute",left:"horizontal"==o.direction?leftPos+"%":0,top:"vertical"==o.direction||"horizontal"!=o.direction?topPos+"%":0}),"horizontal"==o.direction?leftPos+=100:topPos+=100,1==o.pagination&&(paginationList+="<li data-index='"+(n+1)+"' href='#"+(n+1)+"'><a></a></li>")}),s.swipeEvents().bind("swipeDown",function(n){e("body").hasClass("disabled-onepage-scroll")||n.preventDefault(),s.moveUp()}).bind("swipeUp",function(n){e("body").hasClass("disabled-onepage-scroll")||n.preventDefault(),s.moveDown()}),1==o.pagination&&(e("ul.onepage-pagination.hsdotsnav.hsdotsnav-"+o.hsdotsnav).length<1&&e("<ul class='onepage-pagination hsdotsnav hsdotsnav-"+o.hsdotsnav+"'></ul>").prependTo("body"),"horizontal"==o.direction?(posLeft=s.find(".onepage-pagination").width()/2*-1,s.find(".onepage-pagination").css("margin-left",posLeft)):(posTop=s.find(".onepage-pagination").height()/2*-1,s.find(".onepage-pagination").css("margin-top",posTop)),e("ul.onepage-pagination").html(paginationList)),""!=window.location.hash&&"#1"!=window.location.hash)if(init_index=window.location.hash.replace("#",""),parseInt(init_index)<=total&&parseInt(init_index)>0){if(e(o.sectionContainer+"[data-index='"+init_index+"']").addClass("current"),e("body").addClass("viewing-page-"+init_index),1==o.pagination&&e(".onepage-pagination li[data-index='"+init_index+"']").addClass("current"),next=e(o.sectionContainer+"[data-index='"+init_index+"']"),next&&(next.addClass("current"),1==o.pagination&&e(".onepage-pagination li[data-index='"+init_index+"']").addClass("current"),e("body")[0].className=e("body")[0].className.replace(/\bviewing-page-\d.*?\b/g,""),e("body").addClass("viewing-page-"+next.data("index")),history.replaceState&&1==o.updateURL)){var d=window.location.href.substr(0,window.location.href.indexOf("#"))+"#"+init_index;history.pushState({},document.title,d)}pos=100*(init_index-1)*-1,s.transformPage(o,pos,init_index)}else e(o.sectionContainer+"[data-index='1']").addClass("current"),e("body").addClass("viewing-page-1"),1==o.pagination&&e(".onepage-pagination li[data-index='1']").addClass("current");else e(o.sectionContainer+"[data-index='1']").addClass("current"),e("body").addClass("viewing-page-1"),1==o.pagination&&e(".onepage-pagination li[data-index='1']").addClass("current");return 1==o.pagination&&e(".onepage-pagination li").click(function(){var n=e(this).data("index");s.moveTo(n)}),e(document).bind("mousewheel DOMMouseScroll MozMousePixelScroll",function(n){n.preventDefault();var a=n.originalEvent.wheelDelta||-n.originalEvent.detail;e("body").hasClass("disabled-onepage-scroll")||i(n,a)}),0!=o.responsiveFallback&&(e(window).resize(function(){t()}),t()),1==o.keyboard&&e(document).keydown(function(n){var a=n.target.tagName.toLowerCase();if(!e("body").hasClass("disabled-onepage-scroll"))switch(n.which){case 38:"input"!=a&&"textarea"!=a&&s.moveUp();break;case 40:"input"!=a&&"textarea"!=a&&s.moveDown();break;case 33:"input"!=a&&"textarea"!=a&&s.moveUp();break;case 34:"input"!=a&&"textarea"!=a&&s.moveDown();break;case 36:s.moveTo(1);break;case 35:s.moveTo(total);break;default:return}}),!1}}(window.jQuery);