var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.owns=function(f,h){return Object.prototype.hasOwnProperty.call(f,h)};$jscomp.assign="function"==typeof Object.assign?Object.assign:function(f,h){for(var k=1;k<arguments.length;k++){var g=arguments[k];if(g)for(var l in g)$jscomp.owns(g,l)&&(f[l]=g[l])}return f};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;
$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(f,h,k){f!=Array.prototype&&f!=Object.prototype&&(f[h]=k.value)};$jscomp.getGlobal=function(f){f=["object"==typeof globalThis&&globalThis,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global,f];for(var h=0;h<f.length;++h){var k=f[h];if(k&&k.Math==Math)return k}throw Error("Cannot find global object");};$jscomp.global=$jscomp.getGlobal(this);
$jscomp.polyfill=function(f,h,k,g){if(h){k=$jscomp.global;f=f.split(".");for(g=0;g<f.length-1;g++){var l=f[g];l in k||(k[l]={});k=k[l]}f=f[f.length-1];g=k[f];h=h(g);h!=g&&null!=h&&$jscomp.defineProperty(k,f,{configurable:!0,writable:!0,value:h})}};$jscomp.polyfill("Object.assign",function(f){return f||$jscomp.assign},"es6","es3");
(function(f,h){"object"===typeof exports&&"undefined"!==typeof module?module.exports=h():"function"===typeof define&&define.amd?define(h):(f=f||self,f.Scroller=h())})(this,function(){function f(f){var h=null!=l[f];h&&(l[f]=null);return h}function h(f,h,b,a,e,d){var c=Date.now(),k=c,p=0,v=0,m=z++;d||(d=document.body);if(0===m%20){var q={},g;for(g in l)q[g]=!0;l=q}var t=function(g){g=!0!==g;var r=Date.now();if(!l[m]||h&&!h(m))l[m]=null,b&&b(60-v/((r-c)/1E3),m,!1);else{if(g)for(var q=Math.round((r-k)/
(1E3/60))-1,u=0;u<Math.min(q,4);u++)t(!0),v++;a&&(p=(r-c)/a,1<p&&(p=1));q=e?e(p):p;!1!==f(q,r,g)&&1!==p||!g?g&&(k=r,y(t,d)):(l[m]=null,b&&b(60-v/((r-c)/1E3),m,1===p||null==a))}};l[m]=!0;y(t,d);return m}function k(f){return Math.pow(f-1,3)+1}function g(f){return 1>(f/=.5)?.5*Math.pow(f,3):.5*(Math.pow(f-2,3)+2)}var l={},z=1,n="undefined"==typeof window?{}:window,y=n.requestAnimationFrame||n.webkitRequestAnimationFrame||n.mozRequestAnimationFrame||n.oRequestAnimationFrame,w,A={scrollingX:!0,scrollingY:!0,
animating:!0,animationDuration:250,bouncing:!0,locking:!0,paging:!1,snapping:!1,zooming:!1,minZoom:.5,maxZoom:3,speedMultiplier:1,scrollingComplete:function(){},penetrationDeceleration:.03,penetrationAcceleration:.08};(function(){w=function(b,a){this.__callback=b;this.options=Object.assign({},A,a)};var l={__isSingleTouch:!1,__isTracking:!1,__didDecelerationComplete:!1,__isGesturing:!1,__isDragging:!1,__isDecelerating:!1,__isAnimating:!1,__clientLeft:0,__clientTop:0,__clientWidth:0,__clientHeight:0,
__contentWidth:0,__contentHeight:0,__snapWidth:100,__snapHeight:100,__refreshHeight:null,__refreshActive:!1,__refreshActivate:null,__refreshDeactivate:null,__refreshStart:null,__zoomLevel:1,__scrollLeft:0,__scrollTop:0,__maxScrollLeft:0,__maxScrollTop:0,__scheduledLeft:0,__scheduledTop:0,__scheduledZoom:0,__lastTouchLeft:null,__lastTouchTop:null,__lastTouchMove:null,__positions:null,__minDecelerationScrollLeft:null,__minDecelerationScrollTop:null,__maxDecelerationScrollLeft:null,__maxDecelerationScrollTop:null,
__decelerationVelocityX:null,__decelerationVelocityY:null,setDimensions:function(b,a,e,d){b===+b&&(this.__clientWidth=b);a===+a&&(this.__clientHeight=a);e===+e&&(this.__contentWidth=e);d===+d&&(this.__contentHeight=d);this.__computeScrollMax();this.scrollTo(this.__scrollLeft,this.__scrollTop,!0)},setPosition:function(b,a){this.__clientLeft=b||0;this.__clientTop=a||0},setSnapSize:function(b,a){this.__snapWidth=b;this.__snapHeight=a},activatePullToRefresh:function(b,a,e,d){this.__refreshHeight=b;this.__refreshActivate=
a;this.__refreshDeactivate=e;this.__refreshStart=d},triggerPullToRefresh:function(){this.__publish(this.__scrollLeft,-this.__refreshHeight,this.__zoomLevel,!0);this.__refreshStart&&this.__refreshStart()},finishPullToRefresh:function(){this.__refreshActive=!1;this.__refreshDeactivate&&this.__refreshDeactivate();this.scrollTo(this.__scrollLeft,this.__scrollTop,!0)},getValues:function(){return{left:this.__scrollLeft,top:this.__scrollTop,zoom:this.__zoomLevel}},getScrollMax:function(){return{left:this.__maxScrollLeft,
top:this.__maxScrollTop}},zoomTo:function(b,a,e,d,c){if(!this.options.zooming)throw Error("Zooming is not enabled!");c&&(this.__zoomComplete=c);this.__isDecelerating&&(f(this.__isDecelerating),this.__isDecelerating=!1);c=this.__zoomLevel;null==e&&(e=this.__clientWidth/2);null==d&&(d=this.__clientHeight/2);b=Math.max(Math.min(b,this.options.maxZoom),this.options.minZoom);this.__computeScrollMax(b);e=(e+this.__scrollLeft)*b/c-e;d=(d+this.__scrollTop)*b/c-d;e>this.__maxScrollLeft?e=this.__maxScrollLeft:
0>e&&(e=0);d>this.__maxScrollTop?d=this.__maxScrollTop:0>d&&(d=0);this.__publish(e,d,b,a)},zoomBy:function(b,a,e,d,c){this.zoomTo(this.__zoomLevel*b,a,e,d,c)},scrollTo:function(b,a,e,d){this.__isDecelerating&&(f(this.__isDecelerating),this.__isDecelerating=!1);if(null!=d&&d!==this.__zoomLevel){if(!this.options.zooming)throw Error("Zooming is not enabled!");b*=d;a*=d;this.__computeScrollMax(d)}else d=this.__zoomLevel;this.options.scrollingX?this.options.paging?b=Math.round(b/this.__clientWidth)*this.__clientWidth:
this.options.snapping&&(b=Math.round(b/this.__snapWidth)*this.__snapWidth):b=this.__scrollLeft;this.options.scrollingY?this.options.paging?a=Math.round(a/this.__clientHeight)*this.__clientHeight:this.options.snapping&&(a=Math.round(a/this.__snapHeight)*this.__snapHeight):a=this.__scrollTop;b=Math.max(Math.min(this.__maxScrollLeft,b),0);a=Math.max(Math.min(this.__maxScrollTop,a),0);b===this.__scrollLeft&&a===this.__scrollTop&&(e=!1);this.__isTracking||this.__publish(b,a,d,e)},scrollBy:function(b,a,
e){this.scrollTo((this.__isAnimating?this.__scheduledLeft:this.__scrollLeft)+(b||0),(this.__isAnimating?this.__scheduledTop:this.__scrollTop)+(a||0),e)},doMouseZoom:function(b,a,e,d){return this.zoomTo(this.__zoomLevel*(0<b?.97:1.03),!1,e-this.__clientLeft,d-this.__clientTop)},doTouchStart:function(b,a){if(null==b.length)throw Error("Invalid touch list: "+b);a instanceof Date&&(a=a.valueOf());if("number"!==typeof a)throw Error("Invalid timestamp value: "+a);this.__interruptedAnimation=!0;this.__isDecelerating&&
(f(this.__isDecelerating),this.__isDecelerating=!1,this.__interruptedAnimation=!0);this.__isAnimating&&(f(this.__isAnimating),this.__isAnimating=!1,this.__interruptedAnimation=!0);var e=1===b.length;if(e){var d=b[0].pageX;b=b[0].pageY}else d=Math.abs(b[0].pageX+b[1].pageX)/2,b=Math.abs(b[0].pageY+b[1].pageY)/2;this.__initialTouchLeft=d;this.__initialTouchTop=b;this.__zoomLevelStart=this.__zoomLevel;this.__lastTouchLeft=d;this.__lastTouchTop=b;this.__lastTouchMove=a;this.__lastScale=1;this.__enableScrollX=
!e&&this.options.scrollingX;this.__enableScrollY=!e&&this.options.scrollingY;this.__isTracking=!0;this.__didDecelerationComplete=!1;this.__isDragging=!e;this.__isSingleTouch=e;this.__positions=[]},doTouchMove:function(b,a,e){if(null==b.length)throw Error("Invalid touch list: "+b);a instanceof Date&&(a=a.valueOf());if("number"!==typeof a)throw Error("Invalid timestamp value: "+a);if(this.__isTracking){if(2===b.length){var d=Math.abs(b[0].pageX+b[1].pageX)/2;b=Math.abs(b[0].pageY+b[1].pageY)/2}else d=
b[0].pageX,b=b[0].pageY;var c=this.__positions;if(this.__isDragging){var f=d-this.__lastTouchLeft,h=b-this.__lastTouchTop,g=this.__scrollLeft,m=this.__scrollTop,k=this.__zoomLevel;if(null!=e&&this.options.zooming){var l=k;k=k/this.__lastScale*e;k=Math.max(Math.min(k,this.options.maxZoom),this.options.minZoom);if(l!==k){var n=d-this.__clientLeft,x=b-this.__clientTop;g=(n+g)*k/l-n;m=(x+m)*k/l-x;this.__computeScrollMax(k)}}this.__enableScrollX&&(g-=f*this.options.speedMultiplier,l=this.__maxScrollLeft,
g>l||0>g)&&(g=this.options.bouncing?g+f/2*this.options.speedMultiplier:g>l?l:0);this.__enableScrollY&&(m-=h*this.options.speedMultiplier,f=this.__maxScrollTop,m>f||0>m)&&(this.options.bouncing?(m+=h/2*this.options.speedMultiplier,this.__enableScrollX||null==this.__refreshHeight||(!this.__refreshActive&&m<=-this.__refreshHeight?(this.__refreshActive=!0,this.__refreshActivate&&this.__refreshActivate()):this.__refreshActive&&m>-this.__refreshHeight&&(this.__refreshActive=!1,this.__refreshDeactivate&&
this.__refreshDeactivate()))):m=m>f?f:0);60<c.length&&c.splice(0,30);c.push(g,m,a);this.__publish(g,m,k)}else if(h=this.options.locking?3:0,g=Math.abs(d-this.__initialTouchLeft),m=Math.abs(b-this.__initialTouchTop),this.__enableScrollX=this.options.scrollingX&&g>=h,this.__enableScrollY=this.options.scrollingY&&m>=h,c.push(this.__scrollLeft,this.__scrollTop,a),this.__isDragging=(this.__enableScrollX||this.__enableScrollY)&&(5<=g||5<=m))this.__interruptedAnimation=!1;this.__lastTouchLeft=d;this.__lastTouchTop=
b;this.__lastTouchMove=a;this.__lastScale=e}},doTouchEnd:function(b){b instanceof Date&&(b=b.valueOf());if("number"!==typeof b)throw Error("Invalid timestamp value: "+b);if(this.__isTracking){this.__isTracking=!1;if(this.__isDragging)if(this.__isDragging=!1,this.__isSingleTouch&&this.options.animating&&100>=b-this.__lastTouchMove){for(var a=this.__positions,e=a.length-1,d=e,c=e;0<c&&a[c]>this.__lastTouchMove-100;c-=3)d=c;d!==e?(e=a[e]-a[d],c=this.__scrollTop-a[d-1],this.__decelerationVelocityX=(this.__scrollLeft-
a[d-2])/e*(1E3/60),this.__decelerationVelocityY=c/e*(1E3/60),a=this.options.paging||this.options.snapping?4:1,Math.abs(this.__decelerationVelocityX)>a||Math.abs(this.__decelerationVelocityY)>a?this.__refreshActive||this.__startDeceleration(b):this.options.scrollingComplete()):this.options.scrollingComplete()}else 100<b-this.__lastTouchMove&&this.options.scrollingComplete();this.__isDecelerating||(this.__refreshActive&&this.__refreshStart?(this.__publish(this.__scrollLeft,-this.__refreshHeight,this.__zoomLevel,
!0),this.__refreshStart&&this.__refreshStart()):((this.__interruptedAnimation||this.__isDragging)&&this.options.scrollingComplete(),this.scrollTo(this.__scrollLeft,this.__scrollTop,!0,this.__zoomLevel),this.__refreshActive&&(this.__refreshActive=!1,this.__refreshDeactivate&&this.__refreshDeactivate())));this.__positions.length=0}},__publish:function(b,a,e,d){var c=this,l=c.__isAnimating;l&&(f(l),c.__isAnimating=!1);if(d&&c.options.animating){c.__scheduledLeft=b;c.__scheduledTop=a;c.__scheduledZoom=
e;var p=c.__scrollLeft,n=c.__scrollTop,m=c.__zoomLevel,q=b-p,u=a-n,t=e-m;c.__isAnimating=h(function(a,b,d){d&&(c.__scrollLeft=p+q*a,c.__scrollTop=n+u*a,c.__zoomLevel=m+t*a,c.__callback&&c.__callback(c.__scrollLeft,c.__scrollTop,c.__zoomLevel))},function(a){return c.__isAnimating===a},function(a,b,d){b===c.__isAnimating&&(c.__isAnimating=!1);(c.__didDecelerationComplete||d)&&c.options.scrollingComplete();c.options.zooming&&(c.__computeScrollMax(),c.__zoomComplete&&(c.__zoomComplete(),c.__zoomComplete=
null))},c.options.animationDuration,l?k:g)}else c.__scheduledLeft=c.__scrollLeft=b,c.__scheduledTop=c.__scrollTop=a,c.__scheduledZoom=c.__zoomLevel=e,c.__callback&&c.__callback(b,a,e),c.options.zooming&&(c.__computeScrollMax(),c.__zoomComplete&&(c.__zoomComplete(),c.__zoomComplete=null))},__computeScrollMax:function(b){null==b&&(b=this.__zoomLevel);this.__maxScrollLeft=Math.max(this.__contentWidth*b-this.__clientWidth,0);this.__maxScrollTop=Math.max(this.__contentHeight*b-this.__clientHeight,0)},
__startDeceleration:function(b){var a=this;if(a.options.paging){b=Math.max(Math.min(a.__scrollLeft,a.__maxScrollLeft),0);var e=Math.max(Math.min(a.__scrollTop,a.__maxScrollTop),0),d=a.__clientWidth,c=a.__clientHeight;a.__minDecelerationScrollLeft=Math.floor(b/d)*d;a.__minDecelerationScrollTop=Math.floor(e/c)*c;a.__maxDecelerationScrollLeft=Math.ceil(b/d)*d;a.__maxDecelerationScrollTop=Math.ceil(e/c)*c}else a.__minDecelerationScrollLeft=0,a.__minDecelerationScrollTop=0,a.__maxDecelerationScrollLeft=
a.__maxScrollLeft,a.__maxDecelerationScrollTop=a.__maxScrollTop;var f=a.options.snapping?4:.001;a.__isDecelerating=h(function(b,c,d){a.__stepThroughDeceleration(d)},function(){var b=Math.abs(a.__decelerationVelocityX)>=f||Math.abs(a.__decelerationVelocityY)>=f;b||(a.__didDecelerationComplete=!0);return b},function(b,c,d){a.__isDecelerating=!1;a.__didDecelerationComplete&&a.options.scrollingComplete();a.scrollTo(a.__scrollLeft,a.__scrollTop,a.options.snapping)})},__stepThroughDeceleration:function(b){var a=
this.__scrollLeft+this.__decelerationVelocityX,e=this.__scrollTop+this.__decelerationVelocityY;if(!this.options.bouncing){var d=Math.max(Math.min(this.__maxDecelerationScrollLeft,a),this.__minDecelerationScrollLeft);d!==a&&(a=d,this.__decelerationVelocityX=0);d=Math.max(Math.min(this.__maxDecelerationScrollTop,e),this.__minDecelerationScrollTop);d!==e&&(e=d,this.__decelerationVelocityY=0)}b?this.__publish(a,e,this.__zoomLevel):(this.__scrollLeft=a,this.__scrollTop=e);this.options.paging||(this.__decelerationVelocityX*=
.95,this.__decelerationVelocityY*=.95);if(this.options.bouncing){d=b=0;var c=this.options.penetrationDeceleration,f=this.options.penetrationAcceleration;a<this.__minDecelerationScrollLeft?b=this.__minDecelerationScrollLeft-a:a>this.__maxDecelerationScrollLeft&&(b=this.__maxDecelerationScrollLeft-a);e<this.__minDecelerationScrollTop?d=this.__minDecelerationScrollTop-e:e>this.__maxDecelerationScrollTop&&(d=this.__maxDecelerationScrollTop-e);0!==b&&(this.__decelerationVelocityX=0>=b*this.__decelerationVelocityX?
this.__decelerationVelocityX+b*c:b*f);0!==d&&(this.__decelerationVelocityY=0>=d*this.__decelerationVelocityY?this.__decelerationVelocityY+d*c:d*f)}}},n;for(n in l)w.prototype[n]=l[n]})();return w})
