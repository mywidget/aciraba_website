!function(e){e.fn.clockTimePicker=function(t,o){if("string"==typeof t&&("value"==t||"val"==t)&&!o)return e(this).val();var r,a=e.extend(!0,{afternoonHoursInOuterCircle:!1,alwaysSelectHoursFirst:!1,autosize:!1,contextmenu:!1,colors:{buttonTextColor:"#0797FF",clockFaceColor:"#EEEEEE",clockInnerCircleTextColor:"#888888",clockInnerCircleUnselectableTextColor:"#CCCCCC",clockOuterCircleTextColor:"#000000",clockOuterCircleUnselectableTextColor:"#CCCCCC",hoverCircleColor:"#DDDDDD",popupBackgroundColor:"#FFFFFF",popupHeaderBackgroundColor:"#0797FF",popupHeaderTextColor:"#FFFFFF",selectorColor:"#0797FF",selectorNumberColor:"#FFFFFF",signButtonColor:"#FFFFFF",signButtonBackgroundColor:"#0797FF"},duration:!1,durationNegative:!1,fonts:{fontFamily:"Arial",clockOuterCircleFontSize:14,clockInnerCircleFontSize:12,buttonFontSize:20},hideUnselectableNumbers:!1,i18n:{okButton:"OK",cancelButton:"Cancel"},maximum:"23:59",minimum:"-23:59",modeSwitchSpeed:500,onlyShowClockOnMobile:!1,onAdjust:function(e,t){},onChange:function(e,t){},onClose:function(){},onModeSwitch:function(){},onOpen:function(){},popupWidthOnDesktop:200,precision:1,required:!1,separator:":",useDurationPlusSign:!1,vibrate:!0},"object"==typeof t?t:{}),c=".clock-timepicker input { caret-color: transparent; }";if(l()&&(c+=" .clock-timepicker input::selection { background:rgba(255,255,255,0.6); } .clock-timepicker input::-moz-selection { background:rgba(255,255,255,0.6); }"),r=!1,e("head style").each(function(){if(e(this).text()==c)return r=!0,!1}),!r){var n=document.createElement("style");n.type="text/css",n.styleSheet?n.styleSheet.cssText=c:n.appendChild(document.createTextNode(c)),(document.head||document.getElementsByTagName("head")[0]).appendChild(n)}return this.each(function(){var r,c=e(this),n=c.data();for(var m in n)a.hasOwnProperty(m)&&(a[m]=n[m]);if(a.precision=parseInt(a.precision),a.modeSwitchSpeed=parseInt(a.modeSwitchSpeed),a.popupWidthOnDesktop=parseInt(a.popupWidthOnDesktop),a.fonts.clockOuterCircleFontSize=parseInt(a.fonts.clockOuterCircleFontSize),a.fonts.clockInnerCircleFontSize=parseInt(a.fonts.clockInnerCircleFontSize),a.fonts.buttonFontSize=parseInt(a.fonts.buttonFontSize),1!=a.precision&&5!=a.precision&&10!=a.precision&&15!=a.precision&&30!=a.precision&&60!=a.precision&&(console.error("%c[jquery-clock-timepicker] Invalid precision specified: "+a.precision+"! Precision has to be 1, 5, 10, 15, 30 or 60. For now, the precision has been set back to: 1","color:orange"),a.precision=1),(!a.separator||(""+a.separator).match(/[0-9]+/))&&(console.error("%c[jquery-clock-timepicker] Invalid separator specified: "+(a.separator?a.separator:"(empty)")+"! The separator cannot be empty nor can it contain any decimals. For now, the separator has been set back to a colon (:).","color:orange"),a.separator=":"),a.durationNegative&&!a.duration&&console.log("%c[jquery-clock-timepicker] durationNegative is set to true, but this has no effect because duration is false!","color:orange"),a.maximum&&!a.maximum.match(/^-?[0-9]+:[0-9]{2}$/)&&(console.log('%c[jquery-clock-timepicker] Invalid time format for option "maximum": '+a.maximum+"! Maximum not used...","color:orange"),a.maximum=null),a.minimum&&!a.minimum.match(/^-?[0-9]+:[0-9]{2}$/)&&(console.log('%c[jquery-clock-timepicker] Invalid time format for option "minimum": '+a.minimum+"! Minimum not used...","color:orange"),a.minimum=null),a.minimum&&a.maximum&&(a.minimum==a.maximum||!s(a.minimum,a.maximum))&&(console.log('%c[jquery-clock-timepicker] Option "minimum" must be smaller than the option "maximum"!',"color:orange"),a.minimum=null),"vibrate"in navigator||(a.vibrate=!1),"string"==typeof t){if(e(this).parent().hasClass("clock-timepicker")){if("dispose"==(t=t.toLowerCase()))en(e(this));else if("value"==t||"val"==t){e(this).val(ec(o));var u=e(this).parent().find(".clock-timepicker-mobile-input");u.length>0&&u.val(ec(o))}else"show"==t?e(this).parent().find("canvas:first").trigger("keydown"):"hide"==t?(e(this).parent().find(".clock-timepicker-popup").css("display","none"),e(this).blur()):console.log("%c[jquery-clock-timepicker] Invalid option passed to clockTimePicker: "+t,"color:red")}else console.log("%c[jquery-clock-timepicker] Before calling a function, please initialize the ClockTimePicker!","color:red");return}e(this).parent().hasClass("clock-timepicker")&&en(e(this)),c.val(ec(c.val())),l()&&c.prop("readonly",!0);var p=c.val(),$="",d="HOUR",f=!1,k=!1,g=l()?e(document).width()-80:a.popupWidthOnDesktop,v=g-(l()?50:20),h=parseInt(v/2),_=parseInt(v/2),x=parseInt(v/2),b=h-16,y=b-29,C=!1,w=0;c.wrap('<div class="clock-timepicker" style="display:inline-block; position:relative">');var P=e('<div class="clock-timepicker-autosize">');if(P.css("position","absolute").css("opacity",0).css("display","none").css("top",parseInt(c.css("margin-top"))+"px").css("left","0px").css("font-size",c.css("font-size")).css("font-family",c.css("font-family")).css("font-weight",c.css("font-weight")).css("line-height",c.css("line-height")),c.parent().append(P),c.css("min-width",c.outerWidth()),ea(),l()){function T(e){e.preventDefault()}function I(e){return e.preventDefault(),e.stopImmediatePropagation(),"HOUR"==d?ei():er(),!1}(r=e('<div class="clock-timepicker-background">')).css("zIndex",99998).css("display","none").css("position","fixed").css("top","0px").css("left","0px").css("width","100%").css("height","100%").css("backgroundColor","rgba(0,0,0,0.6)"),c.parent().append(r),r.off("touchmove",T),r.on("touchmove",T),r.off("click",I),r.on("click",I)}var O=e('<div class="clock-timepicker-popup">');if(O.css("display","none").css("zIndex",99999).css("cursor","default").css("position","fixed").css("width",g+"px").css("backgroundColor",a.colors.popupBackgroundColor).css("box-shadow","0 4px 20px 0px rgba(0, 0, 0, 0.14)").css("border-radius","5px").css("overflow","hidden").css("user-select","none"),O.on("contextmenu",function(){return!1}),l()){function S(e){e.preventDefault()}function F(e){return e.stopImmediatePropagation(),"HOUR"==d?ei():er(),!1}O.css("left","40px").css("top","40px"),window.addEventListener("orientationchange",function(){setTimeout(function(){Q(),K()},500)}),O.off("touchmove",S),O.on("touchmove",S),O.off("click",F),O.on("click",F)}if(c.parent().append(O),!l()){function H(t){"none"==O.css("display")||e(t.target)[0]==z[0]||e.contains(z.parent()[0],e(t.target)[0])||ee()}e(window).off("click.clockTimePicker",H),e(window).on("click.clockTimePicker",H)}var z=c;if(l()){(z=e('<div class="clock-timepicker-mobile-time">')).css("width","100%").css("fontFamily",a.fonts.fontFamily).css("fontSize","40px").css("padding","10px 0px").css("textAlign","center").css("color",a.colors.popupHeaderTextColor).css("backgroundColor",a.colors.popupHeaderBackgroundColor);var U=e('<span class="clock-timepicker-mobile-time-hours">');z.append(U);var N=e("<span>");N.html(a.separator),z.append(N);var R=e('<span class="clock-timepicker-mobile-time-minutes">');z.append(R),O.append(z)}c.attr("autocomplete")&&c.attr("data-autocomplete-orig",c.attr("autocomplete")),c.prop("autocomplete","off"),c.attr("autocorrect")&&c.attr("data-autocorrect-orig",c.attr("autocorrect")),c.prop("autocorrect","off"),c.attr("autocapitalize")&&c.attr("data-autocapitalize-orig",c.attr("autocapitalize")),c.prop("autocapitalize","off"),c.attr("spellcheck")&&c.attr("data-spellcheck-orig",c.attr("spellcheck")),c.prop("spellcheck",!1),z.on("drag.clockTimePicker dragend.clockTimePicker dragover.clockTimePicker dragenter.clockTimePicker dragstart.clockTimePicker dragleave.clockTimePicker drop.clockTimePicker selectstart.clockTimePicker contextmenu.clockTimePicker",function e(t){if(!a.contextmenu||1==t.which)return t.stopImmediatePropagation(),t.preventDefault(),!1}),z.on("mousedown.clockTimePicker",el),z.on("keyup.clockTimePicker",function e(t){if(!t.shiftKey&&!t.ctrlKey&&!t.altKey&&t.key.match(/^[0-9]{1}$/)){var o=es().replace(/.[0-9]+$/,""),r=es().replace(/^(\+|-)?[0-9]+./,""),n="-"==es()[0],l=es();$+=t.key;var m=("HOUR"==d?(n?"-":"")+(a.duration||1!=$.length?"":"0")+$:o)+a.separator+("HOUR"==d?r:(1==$.length?"0":"")+$);s(m,a.minimum)&&(m=a.minimum),s(a.maximum,m)&&(m=a.maximum),m=ec(m),em(m),C=!0;var u=("HOUR"==d?(n?"-":"")+$+"0":o)+a.separator+("HOUR"==d?"00":$+"0");if("MINUTE"==d&&(2==$.length||parseInt($+"0")>=60)||"HOUR"==d&&!a.duration&&2==$.length||(n?!s(a.minimum,u):!s(u,a.maximum))){if($="","HOUR"==d){if(60==a.precision||m==a.maximum&&a.maximum.match(/00$/)||"-"==a.minimum[0]&&m==a.minimum&&a.minimum.match(/00$/)){ee();return}eo(),er();return}ee();return}"HOUR"==d?ei():er(),m!=l&&(c.attr("value",m.replace(/^\+/,"")),a.onAdjust.call(c.get(0),m.replace(/^\+/,""),l.replace(/^\+/,""))),ea(),K()}}),z.on("keydown.clockTimePicker",function e(t){if(9==t.keyCode)ee();else if(13==t.keyCode)ee();else if(27==t.keyCode)em(ec(p)),ee();else if(8==t.keyCode||46==t.keyCode){if($="",!es())return!1;var o,r=es();t.preventDefault(),RegExp("^(-|\\+)?([0-9]+)(.([0-9]{1,2}))?$").test(es());var n=!!a.duration&&!!a.durationNegative&&"-"==RegExp.$1,l=parseInt(RegExp.$2),m=RegExp.$4?parseInt(RegExp.$4):0;"HOUR"==d?(em(ec(o=0==l?a.required?(a.duration?"":"0")+"0"+a.separator+"00":"":(a.duration?"":"0")+"0"+a.separator+(m<10?"0":"")+m)),o?ei():ee(),r!=o&&(c.attr("value",o.replace(/^\+/,"")),a.onAdjust.call(c.get(0),o.replace(/^\+/,""),r.replace(/^\+/,"")))):0==m?0!=l||a.required?(et(),ei()):(em(""),""!=r&&(c.attr("value",""),a.onAdjust.call(c.get(0),"",r.replace(/^\+/,""))),ee()):(em(ec(o=(n?"-":"")+(l<10&&!a.duration?"0":"")+l+a.separator+"00")),er(),r!=o&&(c.attr("value",o.replace(/^\+/,"")),a.onAdjust.call(c.get(0),o.replace(/^\+/,""),r.replace(/^\+/,"")))),ea()}else if((36==t.keyCode||37==t.keyCode)&&""!=es())em(ec(es())),"HOUR"!=d?(ei(),et()):(t.preventDefault(),t.stopPropagation());else if((35==t.keyCode||39==t.keyCode)&&""!=es())em(ec(es())),60!=a.precision&&"MINUTE"!=d?(er(),eo()):(t.preventDefault(),t.stopPropagation());else if(190==t.keyCode||t.key==a.separator)t.preventDefault(),0==es().length&&em("0"),em(ec(es())),60!=a.precision?(er(),"MINUTE"!=d&&eo()):ei();else if("+"==t.key&&a.duration&&a.durationNegative){t.preventDefault();var r=es();if("-"==r[0]){var o=r.substring(1);em(ec(o)),c.attr("value",o),a.onAdjust.call(c.get(0),o,r),ea(),K(),"HOUR"==d?ei():er()}}else if("-"==t.key&&a.duration&&a.durationNegative){t.preventDefault();var r=es().replace(/^\+/,"");if("-"!=r[0]){var o="-"+r;em(ec(o)),c.attr("value",o),a.onAdjust.call(c.get(0),o,r),ea(),K(),"HOUR"==d?ei():er()}}else{if(38!=t.keyCode&&"+"!=t.key&&40!=t.keyCode&&"-"!=t.key)return t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation(),!1;t.preventDefault();var r=es();RegExp("^(-|\\+)?([0-9]+)(.([0-9]{1,2}))?$").test(r);var l=parseInt(RegExp.$2);a.duration&&a.durationNegative&&"-"==RegExp.$1&&(l=-l);var m=RegExp.$4?parseInt(RegExp.$4):0;"HOUR"==d?l+=38==t.keyCode||"+"==t.key?1:-1:(m+=(38==t.keyCode||"+"==t.key?1:-1)*a.precision)<0?m=0:m>59&&(m=60-a.precision);var u=a.minimum;a.duration&&a.durationNegative||"-"!=u[0]||(u="0:00");var f=a.maximum;if(1!=a.precision){var k=parseInt(f.replace(/^(\+|-)?[0-9]+./,""));f=f.replace(/.[0-9]+$/,"")+a.separator+(k-k%a.precision)}var o=(l<0?"-":"")+(l<10&&!a.duration?"0":"")+Math.abs(l)+a.separator+(m<10?"0":"")+m;"HOUR"!=d||(s(o,f)?s(u,o)||(o=u):o=f),r!=o&&(em(ec(o)),c.attr("value",o.replace(/^\+/,"")),a.onAdjust.call(c.get(0),o.replace(/^\+/,""),r.replace(/^\+/,"")),ea(),K(),"HOUR"==d?ei():er())}}),c.on("mousewheel.clockTimePicker",function e(t){c.is(":focus")&&X(t)}),c.on("focus.clockTimePicker",function e(t){l()?(V(),et(!0),ei()):setTimeout(function(){"none"==O.css("display")&&el(t)},50)});var D=e("<div>");D.css("position","relative").css("width",v+"px").css("height",v+"px").css("margin","10px "+(l()?25:10)+"px"),O.append(D);var E=e('<canvas class="clock-timepicker-hour-canvas">');E.css("cursor","default").css("position","absolute").css("top","0px").css("left","0px"),E.attr("width",v),E.attr("height",v),M(E),D.append(E);var j=e('<canvas class="clock-timepicker-minute-canvas">');if(j.css("cursor","default").css("position","absolute").css("top","0px").css("left","0px").css("display","none"),j.attr("width",v),j.attr("height",v),M(j),D.append(j),l()){var A=e("<div>");A.css("text-align","right").css("padding","15px 30px"),a.fonts.fontFamily=a.fonts.fontFamily.replace(/\"/g,"").replace(/\'/g,"");var q='<a style="text-decoration:none; color:'+a.colors.buttonTextColor+"; font-family:"+a.fonts.fontFamily+"; font-size:"+a.fonts.buttonFontSize+'px; padding-left:30px">',B=e(q);B.html(a.i18n.cancelButton),B.on("click",function(){ee()}),A.append(B);var W=e(q);W.html(a.i18n.okButton),W.on("click",function(){l()&&c.val(es()),a.vibrate&&navigator.vibrate(10),ee()}),A.append(W),O.append(A)}function M(t){l()?(t.on("touchstart",function(t){t.preventDefault();var o=t.originalEvent.touches[0].pageX-e(this).offset().left,r=t.originalEvent.touches[0].pageY-e(this).offset().top,n=Math.sqrt(Math.pow(Math.abs(o-_),2)+Math.pow(Math.abs(r-x),2));if(a.duration&&a.durationNegative&&n<=20){k=!0;var l=es();newVal=l.match(/^-/)?l.substring(1):"-"+l.replace(/^(-|\+)/,""),a.minimum&&!s(a.minimum,newVal)&&(newVal=ec(a.minimum)),a.maximum&&!s(newVal,a.maximum)&&(newVal=ec(a.maximum)),em(ec(newVal)),K(),c.attr("value",newVal.replace(/^\+/,"")),a.onAdjust.call(c.get(0),newVal.replace(/^\+/,""),l.replace(/^\+/,"")),"HOUR"==d?ei():er();return}f=!0,Y(o,r)}),t.on("touchend",function(e){e.preventDefault(),f=!1,k||60==a.precision||(eo(),er()),k=!1}),t.on("touchmove",function(t){if(t.preventDefault(),f){var o=t.originalEvent.touches[0].pageX-e(this).offset().left,r=t.originalEvent.touches[0].pageY-e(this).offset().top;Y(o,r)}})):(t.on("mousedown",function(t){var o=t.pageX-e(this).offset().left,r=t.pageY-e(this).offset().top;Y(o,r),f=!0}),t.on("mouseup",function(t){f=!1;var o=t.pageX-e(this).offset().left,r=t.pageY-e(this).offset().top,n=Math.sqrt(Math.pow(Math.abs(o-_),2)+Math.pow(Math.abs(r-x),2));if(a.duration&&a.durationNegative&&n<=20){var l=es();newVal=l.match(/^-/)?l.substring(1):"-"+l.replace(/^(-|\+)/,""),a.minimum&&!s(a.minimum,newVal)&&(newVal=ec(a.minimum)),a.maximum&&!s(newVal,a.maximum)&&(newVal=ec(a.maximum)),em(ec(newVal)),K(),c.attr("value",newVal.replace(/^\+/,"")),a.onAdjust.call(c.get(0),newVal.replace(/^\+/,""),l.replace(/^\+/,"")),"HOUR"==d?ei():er();return}if(!Y(o,r,!0))return 60==a.precision?ee():"HOUR"==d?(eo(),er()):ee(),!1;"MINUTE"==d||60==a.precision?ee():(eo(),er())}),t.on("mousemove",function(t){var o=t.pageX-e(this).offset().left,r=t.pageY-e(this).offset().top;Y(o,r)}),t.on("mouseleave",function(e){"HOUR"==d?G():J()}),t.on("mousewheel",function(e){X(e)})),t.on("keydown",function(e){e.preventDefault(),Y(),et(),ei(),p=es()})}function X(e){var t=window.event||e;if(e.preventDefault(),!(new Date().getTime()-w<100)){w=new Date().getTime();var o=Math.max(-1,Math.min(1,t.wheelDelta||-t.detail));RegExp("^(-|\\+)?([0-9]+)(.([0-9]{1,2}))?$").test(es());var r=!!a.duration&&!!a.durationNegative&&"-"==RegExp.$1,n=parseInt(RegExp.$2);r&&(n=-n);var l=RegExp.$4?parseInt(RegExp.$4):0;"HOUR"==d?(a.duration&&a.durationNegative&&0==n&&!r&&-1==o?r=!0:a.duration&&a.durationNegative&&0==n&&r&&1==o?r=!1:n+=o,-1!=n||(a.duration?a.durationNegative||(n=0):n=23),24!=n||a.duration||(n=0)):((l+=o*a.precision)<0&&(l=60+l),l>=60&&(l-=60));var m=es(),u=(n<10&&!a.duration?"0":"")+(r&&0==n?"-"+n:n)+a.separator+(l<10?"0":"")+l,p=!0;a.maximum&&!s(u,a.maximum)&&(p=!1),a.minimum&&!s(a.minimum,u)&&(p=!1),p||"HOUR"!=d||(u=o>0?ec(a.maximum):ec(a.minimum),p=!0),p&&(em(ec(u)),ea(),K(),"HOUR"==d?ei():er(),u!=m&&(c.attr("value",u.replace(/^\+/,"")),a.onAdjust.call(c.get(0),u.replace(/^\+/,""),m.replace(/^\+/,""))))}}function Y(e,t,o){var r=360*Math.atan((t-x)/(e-_))/(2*Math.PI)+90,n=Math.sqrt(Math.pow(Math.abs(e-_),2)+Math.pow(Math.abs(t-x),2)),l=0,m=0,u=!1;if(RegExp("^(-|\\+)?([0-9]+).([0-9]{2})$").test(es())&&(u=!!a.duration&&!!a.durationNegative&&"-"==RegExp.$1,l=parseInt(RegExp.$2),m=parseInt(RegExp.$3)),"HOUR"==d){r=Math.round(r/30);var p=-1;if(n<h+10&&n>h-28?e-_>=0?p=0==r?12:r:e-_<0&&(p=r+6):n<h-28&&n>h-65&&(e-_>=0?p=0!=r?r+12:0:e-_<0&&24==(p=r+18)&&(p=0)),a.afternoonHoursInOuterCircle&&(p+=p>=12?-12:12),!(p>-1))return G(null,a.duration&&a.durationNegative&&n<=12),!1;var $=(u?"-":"")+(p<10&&!a.duration?"0":"")+p+a.separator+(m<10?"0":"")+m;if(f||o){var k=!0;if(a.maximum&&!s($,a.maximum)&&(k=!1),a.minimum&&!s(a.minimum,$)&&(k=!1),k||(a.maximum&&s((u?"-":"")+(p<10&&!a.duration?"0":"")+p+a.separator+"00",a.maximum)&&($=ec(a.maximum),k=!0),!a.minimum||s(a.minimum,(u?"-":"")+(p<10&&!a.duration?"0":"")+p+a.separator+"00")||($=ec(a.minimum),k=!0)),k){var g=es();$!=g&&(a.vibrate&&navigator.vibrate(10),c.attr("value",$.replace(/^\+/,"")),a.onAdjust.call(c.get(0),$.replace(/^\+/,""),g.replace(/^\+/,""))),em(ec($)),ea()}}return C=!0,G(0==p?24:p,a.duration&&a.durationNegative&&n<=12),!0}if("MINUTE"==d){r=Math.round(r/6);var v=-1;if(n<h+10&&n>h-40&&(e-_>=0?v=r:e-_<0&&60==(v=r+30)&&(v=0)),!(v>-1))return J(null,a.duration&&a.durationNegative&&n<=12),!1;if(1!=a.precision){var b=Math.floor(v/a.precision);(v=b*a.precision+(1==Math.round((v-b*a.precision)/a.precision)?a.precision:0))>=60&&(v=0)}var $=(u?"-":"")+(l<10&&!a.duration?"0":"")+l+a.separator+(v<10?"0":"")+v,k=!0;if(a.maximum&&!s($,a.maximum)&&(k=!1),a.minimum&&!s(a.minimum,$)&&(k=!1),(f||o)&&k){var g=es();$!=g&&(a.vibrate&&navigator.vibrate(10),c.attr("value",$.replace(/^\+/,"")),a.onAdjust.call(c.get(0),$.replace(/^\+/,""),g.replace(/^\+/,""))),em(ec($))}return C=!0,J(0==v?60:v,a.duration&&a.durationNegative&&n<=12),!0}}function K(){"HOUR"==d?G():J()}function L(e,t){e.beginPath(),e.arc(_,x,12,0,2*Math.PI,!1),e.fillStyle=a.colors.signButtonBackgroundColor,e.fill(),t&&(e.beginPath(),e.arc(_,x,14,0,2*Math.PI,!1),e.strokeStyle=a.colors.signButtonBackgroundColor,e.stroke()),e.beginPath(),e.moveTo(_-6,x),e.lineTo(_+6,x),e.lineWidth=2,e.strokeStyle=a.colors.signButtonColor,e.stroke(),es().match(/^-/)||(e.beginPath(),e.moveTo(_,x-6),e.lineTo(_,x+6),e.lineWidth=2,e.strokeStyle=a.colors.signButtonColor,e.stroke())}function G(e,t){var o=E.get(0).getContext("2d");RegExp("^(-|\\+)?([0-9]+).([0-9]{1,2})$").test(es());var r="-"==RegExp.$1,c=parseInt(RegExp.$2);if(o.clearRect(0,0,v,v),c>=24){O.css("visibility","hidden");return}if(a.onlyShowClockOnMobile||O.css("visibility","visible"),0==c&&(c=24),es()||(c=-1),o.beginPath(),o.arc(_,x,h,0,2*Math.PI,!1),o.fillStyle=a.colors.clockFaceColor,o.fill(),!l()&&e){var n=!0;a.maximum&&!s((r?"-":"")+(24==e?"00":e)+":00",a.maximum)&&(n=!1),a.minimum&&!s(a.minimum,(r?"-":"")+(24==e?"00":e)+":00",!0)&&(n=!1),n&&(o.beginPath(),o.arc(_+Math.cos(Math.PI/6*(e%12-3))*(e>12?a.afternoonHoursInOuterCircle?b:y:a.afternoonHoursInOuterCircle?y:b),x+Math.sin(Math.PI/6*(e%12-3))*(e>12?a.afternoonHoursInOuterCircle?b:y:a.afternoonHoursInOuterCircle?y:b),15,0,2*Math.PI,!1),o.fillStyle=a.colors.hoverCircleColor,o.fill())}for(o.beginPath(),o.arc(_,x,3,0,2*Math.PI,!1),o.fillStyle=a.colors.selectorColor,o.fill(),c>-1&&(!a.maximum||24==c||s(c,a.maximum))&&(o.beginPath(),o.moveTo(_,x),o.lineTo(_+Math.cos(Math.PI/6*(c%12-3))*(c>12?a.afternoonHoursInOuterCircle?b:y:a.afternoonHoursInOuterCircle?y:b),x+Math.sin(Math.PI/6*(c%12-3))*(c>12?a.afternoonHoursInOuterCircle?b:y:a.afternoonHoursInOuterCircle?y:b)),o.lineWidth=1,o.strokeStyle=a.colors.selectorColor,o.stroke(),o.beginPath(),o.arc(_+Math.cos(Math.PI/6*(c%12-3))*(c>12?a.afternoonHoursInOuterCircle?b:y:a.afternoonHoursInOuterCircle?y:b),x+Math.sin(Math.PI/6*(c%12-3))*(c>12?a.afternoonHoursInOuterCircle?b:y:a.afternoonHoursInOuterCircle?y:b),15,0,2*Math.PI,!1),o.fillStyle=a.colors.selectorColor,o.fill()),o.font=a.fonts.clockOuterCircleFontSize+"px "+a.fonts.fontFamily,i=1;i<=12;i++){var m=Math.PI/6*(i-3),u=i;a.afternoonHoursInOuterCircle?(u=i+12,c==i+12?o.fillStyle=a.colors.selectorNumberColor:o.fillStyle=a.colors.clockInnerCircleTextColor,24==u&&(u="00")):c==i?o.fillStyle=a.colors.selectorNumberColor:o.fillStyle=a.colors.clockOuterCircleTextColor,(!a.maximum||s((r?"-":"")+u+":00",a.maximum))&&(!a.minimum||s(a.minimum,(r?"-":"")+u+":00",!0))?o.fillText(u,_+Math.cos(m)*b-o.measureText(u).width/2,x+Math.sin(m)*b+a.fonts.clockOuterCircleFontSize/3):a.hideUnselectableNumbers||(o.fillStyle=a.colors.clockOuterCircleUnselectableTextColor,o.fillText(u,_+Math.cos(m)*b-o.measureText(u).width/2,x+Math.sin(m)*b+a.fonts.clockOuterCircleFontSize/3))}for(i=1,o.font=a.fonts.clockInnerCircleFontSize+"px "+a.fonts.fontFamily;i<=12;i++){var m=Math.PI/6*(i-3),u=i;a.afternoonHoursInOuterCircle?c==i?o.fillStyle=a.colors.selectorNumberColor:o.fillStyle=a.colors.clockOuterCircleTextColor:(u=i+12,c==i+12?o.fillStyle=a.colors.selectorNumberColor:o.fillStyle=a.colors.clockInnerCircleTextColor,24==u&&(u="00")),(!a.maximum||s((r?"-":"")+u+":00",a.maximum))&&(!a.minimum||s(a.minimum,(r?"-":"")+u+":00",!0))?o.fillText(u,_+Math.cos(m)*y-o.measureText(u).width/2,x+Math.sin(m)*y+a.fonts.clockInnerCircleFontSize/3):a.hideUnselectableNumbers||(o.fillStyle=a.colors.clockInnerCircleUnselectableTextColor,o.fillText(u,_+Math.cos(m)*y-o.measureText(u).width/2,x+Math.sin(m)*y+a.fonts.clockInnerCircleFontSize/3))}a.duration&&a.durationNegative&&L(o,t)}function J(e,t){var o=j.get(0).getContext("2d");RegExp("^(-|\\+)?([0-9]+).([0-9]{1,2})$").test(es());var r="-"==RegExp.$1,c=parseInt(RegExp.$2),n=parseInt(RegExp.$3);if(es()||(n=-1),a.onlyShowClockOnMobile||O.css("visibility","visible"),o.clearRect(0,0,v,v),o.beginPath(),o.arc(_,x,h,0,2*Math.PI,!1),o.fillStyle=a.colors.clockFaceColor,o.fill(),!l()&&e){60==e&&(e=0);var m=!0;a.maximum&&!s((r?"-":"")+c+":"+(e<10?"0":"")+e,a.maximum)&&(m=!1),a.minimum&&!s(a.minimum,(r?"-":"")+c+":"+(e<10?"0":"")+e)&&(m=!1),m&&(o.beginPath(),o.arc(_+Math.cos(Math.PI/6*(e/5-3))*b,x+Math.sin(Math.PI/6*(e/5-3))*b,15,0,2*Math.PI,!1),o.fillStyle=a.colors.hoverCircleColor,o.fill())}for(o.beginPath(),o.arc(_,x,3,0,2*Math.PI,!1),o.fillStyle=a.colors.selectorColor,o.fill(),n>-1&&(!a.maximum||s(c+":"+n,a.maximum))&&(!a.minimum||s(a.minimum,c+":"+n))&&(o.beginPath(),o.moveTo(_,x),o.lineTo(_+Math.cos(Math.PI/6*(n/5-3))*b,x+Math.sin(Math.PI/6*(n/5-3))*b),o.lineWidth=1,o.strokeStyle=a.colors.selectorColor,o.stroke(),o.beginPath(),o.arc(_+Math.cos(Math.PI/6*(n/5-3))*b,x+Math.sin(Math.PI/6*(n/5-3))*b,15,0,2*Math.PI,!1),o.fillStyle=a.colors.selectorColor,o.fill()),o.font=a.fonts.clockOuterCircleFontSize+"px "+a.fonts.fontFamily,i=1;i<=12;i++)if(Math.floor(5*i/a.precision)==5*i/a.precision){var u=Math.PI/6*(i-3);n==5*i||0==n&&12==i?o.fillStyle=a.colors.selectorNumberColor:o.fillStyle=a.colors.clockOuterCircleTextColor;var p=5*i==5?"05":5*i;60==p&&(p="00");var m=!0;a.maximum&&!s((r?"-":"")+c+":"+p,a.maximum)&&(m=!1),a.minimum&&!s(a.minimum,(r?"-":"")+c+":"+p)&&(m=!1),m?o.fillText(p,_+Math.cos(u)*b-o.measureText(p).width/2,x+Math.sin(u)*b+a.fonts.clockOuterCircleFontSize/3):a.hideUnselectableNumbers||(o.fillStyle=a.colors.clockOuterCircleUnselectableTextColor,o.fillText(p,_+Math.cos(u)*b-o.measureText(p).width/2,x+Math.sin(u)*b+a.fonts.clockOuterCircleFontSize/3))}n>-1&&n%5!=0&&(o.beginPath(),o.arc(_+Math.cos(Math.PI/6*(n/5-3))*b,x+Math.sin(Math.PI/6*(n/5-3))*b,2,0,2*Math.PI,!1),o.fillStyle="white",o.fill()),a.duration&&a.durationNegative&&L(o,t)}function Q(){window.innerHeight<400?(g=window.innerHeight-60,O.css("width",g+200+"px"),z.css("position","absolute").css("left","0px").css("top","0px").css("width","200px").css("height",g+20+"px"),D.css("margin","10px 25px 0px 230px"),t=g+parseInt(D.css("margin-top"))+parseInt(D.css("margin-bottom"))):((g=window.innerWidth-80)>300&&(g=300),O.css("width",g+"px"),z.css("position","static").css("width","100%").css("height","auto"),D.css("margin","10px 25px 10px 25px"),t=g+parseInt(D.css("margin-top"))+parseInt(D.css("margin-bottom"))+65),O.css("left",parseInt((e("body").prop("clientWidth")-O.outerWidth())/2)+"px"),O.css("top",parseInt((window.innerHeight-t)/2)+"px"),h=parseInt((v=g-50)/2),_=parseInt(v/2),x=parseInt(v/2),y=(b=h-16)-29,D.css("width",v+"px"),D.css("height",v+"px");var t,o=window.devicePixelRatio||1,r=E.get(0),a=j.get(0);r.width=v*o,r.height=v*o,a.width=v*o,a.height=v*o;var c=r.getContext("2d"),n=a.getContext("2d");c.scale(o,o),n.scale(o,o),E.css("width",v),E.css("height",v),j.css("width",v),j.css("height",v)}function V(){c.val()?em(ec(c.val())):em(ec("00:00")),!l()&&a.onlyShowClockOnMobile&&O.css("visibility","hidden"),l()&&Q(),O.css("display","block"),K(),l()?r&&r.stop().css("opacity",0).css("display","block").animate({opacity:1},300):(Z(),e(window).on("scroll.clockTimePicker",e=>{Z()})),a.onOpen.call(c.get(0))}function Z(){var t=c.offset().top-e(window).scrollTop()+c.outerHeight();if(t+O.outerHeight()>window.innerHeight){var o=c.offset().top-e(window).scrollTop()-O.outerHeight();o>=0&&(t=o)}var r=c.offset().left-e(window).scrollLeft()-parseInt((O.outerWidth()-c.outerWidth())/2);O.css("left",r+"px").css("top",t+"px")}function ee(){e(window).off("scroll.clockTimePicker");var t=ec(c.val());if($="",O.css("display","none"),l()?r.stop().animate({opacity:0},300,function(){r.css("display","none")}):c.val(t),!function e(){if(document.activeElement==z.get(0)){var t=document.createElement("input");c.parent().get(0).appendChild(t),t.focus(),c.parent().get(0).removeChild(t)}}(),!C&&!p&&t.match(RegExp("^0+"+a.separator+"00$")))em("");else if(p!=t){if("createEvent"in document){var o=document.createEvent("HTMLEvents");o.initEvent("change",!0,!1),c.get(0).dispatchEvent(o)}else{var o=document.createEventObject();o.eventType="click",c.get(0).fireEvent("onchange",o)}a.onChange.call(c.get(0),t.replace(/^\+/,""),p.replace(/^\+/,"")),p=t}a.onClose.call(c.get(0)),C=!1}function et(e){"HOUR"!=d&&($="",G(),e?j.css("display","none"):j.css("zIndex",2).stop().animate({opacity:0,zoom:"80%",left:"10%",top:"10%"},a.modeSwitchSpeed,function(){j.css("display","none")}),E.stop().css("zoom","100%").css("left","0px").css("top","0px").css("display","block").css("opacity",1).css("zIndex",1),d="HOUR",a.onModeSwitch.call(c.get(0),d))}function eo(e){"MINUTE"!=d&&($="",J(),j.stop().css("display","block").css("zoom","80%").css("left","10%").css("top","10%").css("opacity",0).css("zIndex",1),e?j.css("opacity",1).css("zoom","100%").css("left","0px").css("top","0px"):j.animate({opacity:1,zoom:"100%",left:"0px",top:"0px"}),d="MINUTE",a.onModeSwitch.call(c.get(0),d))}function ei(){z.focus(),setTimeout(function(){l()?(e(".clock-timepicker-mobile-time-hours").css("backgroundColor","rgba(255, 255, 255, 0.6)"),e(".clock-timepicker-mobile-time-minutes").css("backgroundColor","inherit")):z.get(0).setSelectionRange(0,es().indexOf(a.separator))},1)}function er(){z.focus(),setTimeout(function(){l()?(e(".clock-timepicker-mobile-time-hours").css("backgroundColor","inherit"),e(".clock-timepicker-mobile-time-minutes").css("backgroundColor","rgba(255, 255, 255, 0.6)")):z.get(0).setSelectionRange(es().indexOf(a.separator)+1,es().length)},1)}function ea(){!a.autosize||l()||(P.html(c.val()),P.css("display","inline-block"),c.css("width",P.outerWidth()+5+parseInt(c.css("padding-left"))+parseInt(c.css("padding-right"))+"px"),P.css("display","none"))}function ec(e){if(""==e)return a.required?a.duration?"0:00":"00:00":e;if(RegExp("^(-|\\+)?([0-9]+)(.([0-9]{1,2})?)?$","i").test(e)){var t=parseInt(RegExp.$2),o=parseInt(RegExp.$4);o||(o=0);var r=!!a.duration&&!!a.durationNegative&&"-"==RegExp.$1;if(t>=24&&!a.duration&&(t%=24),o>=60&&(o%=60),1!=a.precision){var c=Math.floor(o/a.precision);60!=(o=c*a.precision+(1==Math.round((o-c*a.precision)/a.precision)?a.precision:0))||(o=0,24!=++t||a.duration||(t=0))}e=(r?"-":"")+(t<10&&!a.duration?"0":"")+t+a.separator+(RegExp.$3?(o<10?"0":"")+o:"00")}else if(RegExp("^(-|\\+)?.([0-9]{1,2})").test(e)){var o=parseInt(RegExp.$2),r=!!a.duration&&!!a.durationNegative&&"-"==RegExp.$1;o>=60&&(o%=60),e=(r&&o>0?"-":"")+"0"+(a.duration?"":"0")+a.separator+(o<10?"0":"")+o}else e="0"+(a.duration?"":"0")+a.separator+"00";return(a.duration&&a.useDurationPlusSign&&!e.match(/^\-/)&&!e.match(/^0+:00$/)?"+":"")+e}function en(e){e.parent().find(".clock-timepicker-autosize").remove(),e.parent().find(".clock-timepicker-background").remove(),e.parent().find(".clock-timepicker-popup").remove(),e.unwrap(),e.off("drag.clockTimePicker dragend.clockTimePicker dragover.clockTimePicker dragenter.clockTimePicker dragstart.clockTimePicker dragleave.clockTimePicker drop.clockTimePicker selectstart.clockTimePicker contextmenu.clockTimePicker"),e.off("mousedown.clockTimePicker"),e.off("keyup.clockTimePicker"),e.off("keydown.clockTimePicker"),e.off("mousewheel.clockTimePicker"),e.off("focus.clockTimePicker"),e.attr("data-autocomplete-orig")?(e.attr("autocomplete",e.attr("data-autocomplete-orig")),e.removeAttr("data-autocomplete-orig")):e.removeAttr("autocomplete"),e.attr("data-autocorrect-orig")?(e.attr("autocorrect",e.attr("data-autocorrect-orig")),e.removeAttr("data-autocorrect-orig")):e.removeAttr("autocorrect"),e.attr("data-autocapitalize-orig")?(e.attr("autocapitalize",e.attr("data-autocapitalize-orig")),e.removeAttr("data-autocapitalize-orig")):e.removeAttr("autocapitalize"),e.attr("data-spellcheck-orig")?(e.attr("spellcheck",e.attr("data-spellcheck-orig")),e.removeAttr("data-spellcheck-orig")):e.removeAttr("spellcheck")}function el(e){if(!a.contextmenu||1==e.which)return!function e(t){var o="none"!=O.css("display");if(es()){if(60==a.precision)et(!o),ei();else{var r=z.css("direction");r||(r="ltr");var c=z.css("text-align");c||(c="left");var n=z.innerWidth(),l=parseFloat(z.css("padding-left")),s=parseFloat(z.css("padding-right")),m=n-l-s;P.css("display","inline-block"),P.html(es());var u=P.innerWidth();P.html(a.separator);var p=P.innerWidth()/2;P.html(es().replace(RegExp(a.separator+"[0-9]+$"),"")),p+=P.innerWidth(),P.css("display","none");var $=n/2;"left"==c||"justify"==c||"ltr"==r&&"start"==c||"rtl"==r&&"end"==c?$=Math.floor(l+p):"center"==c?$=Math.floor(l+(m-u)/2+p):("right"==c||"ltr"==r&&"end"==c||"rtl"==r&&"start"==c)&&($=Math.floor(l+m-(u-p))),t.offsetX>=$-2&&(o||!a.alwaysSelectHoursFirst)?("HOUR"==d&&a.vibrate&&navigator.vibrate(10),eo(!o),er()):("MINUTE"==d&&a.vibrate&&navigator.vibrate(10),et(!o),ei())}}else em(ec("00:00")),et(!o),ei();o||V()}(e),e.stopImmediatePropagation(),e.stopPropagation(),e.preventDefault(),!1}function es(){return l()?e(".clock-timepicker-mobile-time-hours").html()+a.separator+e(".clock-timepicker-mobile-time-minutes").html():z.val()}function em(t){if(l()){if(t.match(/^(-|\\+)?([0-9]{1,2}).([0-9]{1,2})$/)){var o=RegExp.$1+(a.duration||1!=RegExp.$2.length?"":"0")+RegExp.$2,r=(1==RegExp.$3.length?"0":"")+RegExp.$3;e(".clock-timepicker-mobile-time-hours").html(o),e(".clock-timepicker-mobile-time-minutes").html(r)}}else z.val(t)}});function l(){var e,t=!1;return e=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(t=!0),t}function s(e,t,o){var r="^(-|\\+)?([0-9]+)(.([0-9]{1,2}))?$";RegExp(r,"i").test(e);var a=60*parseInt(RegExp.$2);RegExp.$4&&!o&&(a+=parseInt(RegExp.$4)),"-"==RegExp.$1&&(a*=-1),RegExp(r,"i").test(t);var c=60*parseInt(RegExp.$2);return RegExp.$4&&!o&&(c+=parseInt(RegExp.$4)),"-"==RegExp.$1&&(c*=-1),a<=c}}}(jQuery);