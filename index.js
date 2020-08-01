!function(t,i){"object"==typeof exports&&"undefined"!=typeof module?module.exports=i():"function"==typeof define&&define.amd?define(i):(t=t||self).Scroller=i()}(this,(function(){"use strict";const t="undefined"==typeof window?{}:window;let i={},h=1;const s=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame;function n(t){var h=null!=i[t];return h&&(i[t]=null),h}function e(t,n,e,o,l){var r=Date.now(),a=r,u=0,c=0,f=h++;if(f%20==0){var _={};for(var v in i)_[v]=!0;i=_}var M=function(h){var _=!0!==h,v=Date.now();if(!i[f]||n&&!n(f))return i[f]=null,void(e&&e(60-c/((v-r)/1e3),f,!1));if(_)for(var d=Math.round((v-a)/(1e3/60))-1,m=0;m<Math.min(d,4);m++)M(!0),c++;o&&(u=(v-r)/o)>1&&(u=1);var p=l?l(u):u;!1!==t(p,v,_)&&1!==u||!_?_&&(a=v,s(M)):(i[f]=null,e&&e(60-c/((v-r)/1e3),f,1===u||null==o))};return i[f]=!0,s(M),f}function o(t){return Math.pow(t-1,3)+1}function l(t){return(t/=.5)<1?.5*Math.pow(t,3):.5*(Math.pow(t-2,3)+2)}const r={scrollingX:!0,scrollingY:!0,animating:!0,animationDuration:250,bouncing:!0,locking:!0,paging:!1,snapping:!1,zooming:!1,minZoom:.5,maxZoom:3,speedMultiplier:1,scrollingComplete:function(){},penetrationDeceleration:.03,penetrationAcceleration:.08};function a(t,i){this.t=t,this.options=Object.assign({},r,i)}return a.prototype={i:!1,h:!1,s:!1,o:!1,l:!1,u:!1,_:!1,v:0,M:0,m:0,p:0,g:0,T:0,D:100,S:100,L:null,Z:!1,I:null,P:null,A:null,H:1,V:0,C:0,R:0,W:0,j:0,k:0,B:0,X:null,Y:null,G:null,O:null,q:null,F:null,J:null,K:null,N:null,U:null,setDimensions:function(t,i,h,s){t===+t&&(this.m=t),i===+i&&(this.p=i),h===+h&&(this.g=h),s===+s&&(this.T=s),this.$(),this.scrollTo(this.V,this.C,!0)},setPosition:function(t,i){this.v=t||0,this.M=i||0},setSnapSize:function(t,i){this.D=t,this.S=i},activatePullToRefresh:function(t,i,h,s){this.L=t,this.I=i,this.P=h,this.A=s},triggerPullToRefresh:function(){this.tt(this.V,-this.L,this.H,!0),this.A&&this.A()},finishPullToRefresh:function(){this.Z=!1,this.P&&this.P(),this.scrollTo(this.V,this.C,!0)},getValues:function(){return{left:this.V,top:this.C,zoom:this.H}},getScrollMax:function(){return{left:this.R,top:this.W}},zoomTo:function(t,i,h,s,e){if(!this.options.zooming)throw new Error("Zooming is not enabled!");e&&(this.it=e),this.u&&(n(this.u),this.u=!1);var o=this.H;null==h&&(h=this.m/2),null==s&&(s=this.p/2),t=Math.max(Math.min(t,this.options.maxZoom),this.options.minZoom),this.$(t);var l=(h+this.V)*t/o-h,r=(s+this.C)*t/o-s;l>this.R?l=this.R:l<0&&(l=0),r>this.W?r=this.W:r<0&&(r=0),this.tt(l,r,t,i)},zoomBy:function(t,i,h,s,n){this.zoomTo(this.H*t,i,h,s,n)},scrollTo:function(t,i,h,s){if(this.u&&(n(this.u),this.u=!1),null!=s&&s!==this.H){if(!this.options.zooming)throw new Error("Zooming is not enabled!");t*=s,i*=s,this.$(s)}else s=this.H;this.options.scrollingX?this.options.paging?t=Math.round(t/this.m)*this.m:this.options.snapping&&(t=Math.round(t/this.D)*this.D):t=this.V,this.options.scrollingY?this.options.paging?i=Math.round(i/this.p)*this.p:this.options.snapping&&(i=Math.round(i/this.S)*this.S):i=this.C,t=Math.max(Math.min(this.R,t),0),i=Math.max(Math.min(this.W,i),0),t===this.V&&i===this.C&&(h=!1),this.h||this.tt(t,i,s,h)},scrollToViewportCenter(t,i,h,s){s=null==s?this.H:s,this.zoomTo(s,!1),this.scrollTo(t*s-.5*this.m,i*s-.5*this.p,h)},scrollBy:function(t,i,h){var s=this._?this.j:this.V,n=this._?this.k:this.C;this.scrollTo(s+(t||0),n+(i||0),h)},containsPoint:(t,i)=>!(t<0)&&(!(t>self.g)&&(!(i<0)&&!(i>self.T))),doMouseZoom:function(t,i,h,s){var n=t>0?.97:1.03;return this.zoomTo(this.H*n,!1,h-this.v,s-this.M)},doTouchStart:function(t,i){if(null==t.length)throw new Error("Invalid touch list: "+t);if(i instanceof Date&&(i=i.valueOf()),"number"!=typeof i)throw new Error("Invalid timestamp value: "+i);var h,s;this.ht=!0,this.u&&(n(this.u),this.u=!1,this.ht=!0),this._&&(n(this._),this._=!1,this.ht=!0);var e=1===t.length;e?(h=t[0].pageX,s=t[0].pageY):(h=Math.abs(t[0].pageX+t[1].pageX)/2,s=Math.abs(t[0].pageY+t[1].pageY)/2),this.st=h,this.nt=s,this.et=this.H,this.X=h,this.Y=s,this.G=i,this.ot=1,this.lt=!e&&this.options.scrollingX,this.rt=!e&&this.options.scrollingY,this.h=!0,this.s=!1,this.l=!e,this.i=e,this.O=[]},doTouchMove:function(t,i,h){if(null==t.length)throw new Error("Invalid touch list: "+t);if(i instanceof Date&&(i=i.valueOf()),"number"!=typeof i)throw new Error("Invalid timestamp value: "+i);if(this.h){var s,n;2===t.length?(s=Math.abs(t[0].pageX+t[1].pageX)/2,n=Math.abs(t[0].pageY+t[1].pageY)/2):(s=t[0].pageX,n=t[0].pageY);var e=this.O;if(this.l){var o=s-this.X,l=n-this.Y,r=this.V,a=this.C,u=this.H;if(null!=h&&this.options.zooming){var c=u;if(u=u/this.ot*h,c!==(u=Math.max(Math.min(u,this.options.maxZoom),this.options.minZoom))){var f=s-this.v,_=n-this.M;r=(f+r)*u/c-f,a=(_+a)*u/c-_,this.$(u)}}if(this.lt){r-=o*this.options.speedMultiplier;var v=this.R;(r>v||r<0)&&(this.options.bouncing?r+=o/2*this.options.speedMultiplier:r=r>v?v:0)}if(this.rt){a-=l*this.options.speedMultiplier;var M=this.W;(a>M||a<0)&&(this.options.bouncing?(a+=l/2*this.options.speedMultiplier,this.lt||null==this.L||(!this.Z&&a<=-this.L?(this.Z=!0,this.I&&this.I()):this.Z&&a>-this.L&&(this.Z=!1,this.P&&this.P()))):a=a>M?M:0)}e.length>60&&e.splice(0,30),e.push(r,a,i),this.tt(r,a,u)}else{var d=this.options.locking?3:0,m=Math.abs(s-this.st),p=Math.abs(n-this.nt);this.lt=this.options.scrollingX&&m>=d,this.rt=this.options.scrollingY&&p>=d,e.push(this.V,this.C,i),this.l=(this.lt||this.rt)&&(m>=5||p>=5),this.l&&(this.ht=!1)}this.X=s,this.Y=n,this.G=i,this.ot=h}},doTouchEnd:function(t){if(t instanceof Date&&(t=t.valueOf()),"number"!=typeof t)throw new Error("Invalid timestamp value: "+t);if(this.h){if(this.h=!1,this.l)if(this.l=!1,this.i&&this.options.animating&&t-this.G<=100){for(var i=this.O,h=i.length-1,s=h,n=h;n>0&&i[n]>this.G-100;n-=3)s=n;if(s!==h){var e=i[h]-i[s],o=this.V-i[s-2],l=this.C-i[s-1];this.N=o/e*(1e3/60),this.U=l/e*(1e3/60);var r=this.options.paging||this.options.snapping?4:1;Math.abs(this.N)>r||Math.abs(this.U)>r?this.Z||this.at(t):this.options.scrollingComplete()}else this.options.scrollingComplete()}else t-this.G>100&&this.options.scrollingComplete();this.u||(this.Z&&this.A?(this.tt(this.V,-this.L,this.H,!0),this.A&&this.A()):((this.ht||this.l)&&this.options.scrollingComplete(),this.scrollTo(this.V,this.C,!0,this.H),this.Z&&(this.Z=!1,this.P&&this.P()))),this.O.length=0}},tt:function(t,i,h,s){var r=this,a=r._;if(a&&(n(a),r._=!1),s&&r.options.animating){r.j=t,r.k=i,r.B=h;var u=r.V,c=r.C,f=r.H,_=t-u,v=i-c,M=h-f;r._=e((function(t,i,h){h&&(r.V=u+_*t,r.C=c+v*t,r.H=f+M*t,r.t&&r.t(r.V,r.C,r.H))}),(function(t){return r._===t}),(function(t,i,h){i===r._&&(r._=!1),(r.s||h)&&r.options.scrollingComplete(),r.options.zooming&&(r.$(),r.it&&(r.it(),r.it=null))}),r.options.animationDuration,a?o:l)}else r.j=r.V=t,r.k=r.C=i,r.B=r.H=h,r.t&&r.t(t,i,h),r.options.zooming&&(r.$(),r.it&&(r.it(),r.it=null))},$:function(t){null==t&&(t=this.H),this.R=Math.max(this.g*t-this.m,0),this.W=Math.max(this.T*t-this.p,0)},at:function(t){var i=this;if(i.options.paging){var h=Math.max(Math.min(i.V,i.R),0),s=Math.max(Math.min(i.C,i.W),0),n=i.m,o=i.p;i.q=Math.floor(h/n)*n,i.F=Math.floor(s/o)*o,i.J=Math.ceil(h/n)*n,i.K=Math.ceil(s/o)*o}else i.q=0,i.F=0,i.J=i.R,i.K=i.W;var l=i.options.snapping?4:.001;i.u=e((function(t,h,s){i.ut(s)}),(function(){var t=Math.abs(i.N)>=l||Math.abs(i.U)>=l;return t||(i.s=!0),t}),(function(t,h,s){i.u=!1,i.s&&i.options.scrollingComplete(),i.scrollTo(i.V,i.C,i.options.snapping)}))},ut:function(t){var i=this.V+this.N,h=this.C+this.U;if(!this.options.bouncing){var s=Math.max(Math.min(this.J,i),this.q);s!==i&&(i=s,this.N=0);var n=Math.max(Math.min(this.K,h),this.F);n!==h&&(h=n,this.U=0)}if(t?this.tt(i,h,this.H):(this.V=i,this.C=h),!this.options.paging){this.N*=.95,this.U*=.95}if(this.options.bouncing){var e=0,o=0,l=this.options.penetrationDeceleration,r=this.options.penetrationAcceleration;i<this.q?e=this.q-i:i>this.J&&(e=this.J-i),h<this.F?o=this.F-h:h>this.K&&(o=this.K-h),0!==e&&(e*this.N<=0?this.N+=e*l:this.N=e*r),0!==o&&(o*this.U<=0?this.U+=o*l:this.U=o*r)}}},a}));
//# sourceMappingURL=index.js.map
