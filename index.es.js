const t="undefined"==typeof window?{}:window,i={};let h=1;const s=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame;function n(t){var h=null!=i[t];return h&&(i[t]=null),h}function e(t,n,e,o,l){var a=Date.now(),r=a,u=0,c=0,f=h++;if(f%20==0){var _={};for(var v in i)_[v]=!0;i=_}var M=function(h){var _=!0!==h,v=Date.now();if(!i[f]||n&&!n(f))return i[f]=null,void(e&&e(60-c/((v-a)/1e3),f,!1));if(_)for(var m=Math.round((v-r)/(1e3/60))-1,p=0;p<Math.min(m,4);p++)M(!0),c++;o&&(u=(v-a)/o)>1&&(u=1);var d=l?l(u):u;!1!==t(d,v,_)&&1!==u||!_?_&&(r=v,s(M)):(i[f]=null,e&&e(60-c/((v-a)/1e3),f,1===u||null==o))};return i[f]=!0,s(M),f}var o;function l(t){return Math.pow(t-1,3)+1}function a(t){return(t/=.5)<1?.5*Math.pow(t,3):.5*(Math.pow(t-2,3)+2)}const r={scrollingX:!0,scrollingY:!0,animating:!0,animationDuration:250,bouncing:!0,locking:!0,paging:!1,snapping:!1,zooming:!1,minZoom:.5,maxZoom:3,speedMultiplier:1,scrollingComplete:function(){},penetrationDeceleration:.03,penetrationAcceleration:.08};!function(){o=function(t,i){this.t=t,this.options=Object.assign({},r,i)};var t={i:!1,h:!1,s:!1,o:!1,l:!1,u:!1,_:!1,v:0,M:0,m:0,p:0,g:0,T:0,D:100,S:100,L:null,Z:!1,I:null,A:null,H:null,P:1,R:0,V:0,W:0,k:0,B:0,C:0,X:0,Y:null,j:null,G:null,O:null,q:null,F:null,J:null,K:null,N:null,U:null,setDimensions:function(t,i,h,s){t===+t&&(this.m=t),i===+i&&(this.p=i),h===+h&&(this.g=h),s===+s&&(this.T=s),this.$(),this.scrollTo(this.R,this.V,!0)},setPosition:function(t,i){this.v=t||0,this.M=i||0},setSnapSize:function(t,i){this.D=t,this.S=i},activatePullToRefresh:function(t,i,h,s){this.L=t,this.I=i,this.A=h,this.H=s},triggerPullToRefresh:function(){this.tt(this.R,-this.L,this.P,!0),this.H&&this.H()},finishPullToRefresh:function(){this.Z=!1,this.A&&this.A(),this.scrollTo(this.R,this.V,!0)},getValues:function(){return{left:this.R,top:this.V,zoom:this.P}},getScrollMax:function(){return{left:this.W,top:this.k}},zoomTo:function(t,i,h,s,e){if(!this.options.zooming)throw new Error("Zooming is not enabled!");e&&(this.it=e),this.u&&(n(this.u),this.u=!1);var o=this.P;null==h&&(h=this.m/2),null==s&&(s=this.p/2),t=Math.max(Math.min(t,this.options.maxZoom),this.options.minZoom),this.$(t);var l=(h+this.R)*t/o-h,a=(s+this.V)*t/o-s;l>this.W?l=this.W:l<0&&(l=0),a>this.k?a=this.k:a<0&&(a=0),this.tt(l,a,t,i)},zoomBy:function(t,i,h,s,n){this.zoomTo(this.P*t,i,h,s,n)},scrollTo:function(t,i,h,s){if(this.u&&(n(this.u),this.u=!1),null!=s&&s!==this.P){if(!this.options.zooming)throw new Error("Zooming is not enabled!");t*=s,i*=s,this.$(s)}else s=this.P;this.options.scrollingX?this.options.paging?t=Math.round(t/this.m)*this.m:this.options.snapping&&(t=Math.round(t/this.D)*this.D):t=this.R,this.options.scrollingY?this.options.paging?i=Math.round(i/this.p)*this.p:this.options.snapping&&(i=Math.round(i/this.S)*this.S):i=this.V,t=Math.max(Math.min(this.W,t),0),i=Math.max(Math.min(this.k,i),0),t===this.R&&i===this.V&&(h=!1),this.h||this.tt(t,i,s,h)},scrollBy:function(t,i,h){var s=this._?this.B:this.R,n=this._?this.C:this.V;this.scrollTo(s+(t||0),n+(i||0),h)},doMouseZoom:function(t,i,h,s){var n=t>0?.97:1.03;return this.zoomTo(this.P*n,!1,h-this.v,s-this.M)},doTouchStart:function(t,i){if(null==t.length)throw new Error("Invalid touch list: "+t);if(i instanceof Date&&(i=i.valueOf()),"number"!=typeof i)throw new Error("Invalid timestamp value: "+i);var h,s;this.ht=!0,this.u&&(n(this.u),this.u=!1,this.ht=!0),this._&&(n(this._),this._=!1,this.ht=!0);var e=1===t.length;e?(h=t[0].pageX,s=t[0].pageY):(h=Math.abs(t[0].pageX+t[1].pageX)/2,s=Math.abs(t[0].pageY+t[1].pageY)/2),this.st=h,this.nt=s,this.et=this.P,this.Y=h,this.j=s,this.G=i,this.ot=1,this.lt=!e&&this.options.scrollingX,this.at=!e&&this.options.scrollingY,this.h=!0,this.s=!1,this.l=!e,this.i=e,this.O=[]},doTouchMove:function(t,i,h){if(null==t.length)throw new Error("Invalid touch list: "+t);if(i instanceof Date&&(i=i.valueOf()),"number"!=typeof i)throw new Error("Invalid timestamp value: "+i);if(this.h){var s,n;2===t.length?(s=Math.abs(t[0].pageX+t[1].pageX)/2,n=Math.abs(t[0].pageY+t[1].pageY)/2):(s=t[0].pageX,n=t[0].pageY);var e=this.O;if(this.l){var o=s-this.Y,l=n-this.j,a=this.R,r=this.V,u=this.P;if(null!=h&&this.options.zooming){var c=u;if(u=u/this.ot*h,c!==(u=Math.max(Math.min(u,this.options.maxZoom),this.options.minZoom))){var f=s-this.v,_=n-this.M;a=(f+a)*u/c-f,r=(_+r)*u/c-_,this.$(u)}}if(this.lt){a-=o*this.options.speedMultiplier;var v=this.W;(a>v||a<0)&&(this.options.bouncing?a+=o/2*this.options.speedMultiplier:a=a>v?v:0)}if(this.at){r-=l*this.options.speedMultiplier;var M=this.k;(r>M||r<0)&&(this.options.bouncing?(r+=l/2*this.options.speedMultiplier,this.lt||null==this.L||(!this.Z&&r<=-this.L?(this.Z=!0,this.I&&this.I()):this.Z&&r>-this.L&&(this.Z=!1,this.A&&this.A()))):r=r>M?M:0)}e.length>60&&e.splice(0,30),e.push(a,r,i),this.tt(a,r,u)}else{var m=this.options.locking?3:0,p=Math.abs(s-this.st),d=Math.abs(n-this.nt);this.lt=this.options.scrollingX&&p>=m,this.at=this.options.scrollingY&&d>=m,e.push(this.R,this.V,i),this.l=(this.lt||this.at)&&(p>=5||d>=5),this.l&&(this.ht=!1)}this.Y=s,this.j=n,this.G=i,this.ot=h}},doTouchEnd:function(t){if(t instanceof Date&&(t=t.valueOf()),"number"!=typeof t)throw new Error("Invalid timestamp value: "+t);if(this.h){if(this.h=!1,this.l)if(this.l=!1,this.i&&this.options.animating&&t-this.G<=100){for(var i=this.O,h=i.length-1,s=h,n=h;n>0&&i[n]>this.G-100;n-=3)s=n;if(s!==h){var e=i[h]-i[s],o=this.R-i[s-2],l=this.V-i[s-1];this.N=o/e*(1e3/60),this.U=l/e*(1e3/60);var a=this.options.paging||this.options.snapping?4:1;Math.abs(this.N)>a||Math.abs(this.U)>a?this.Z||this.rt(t):this.options.scrollingComplete()}else this.options.scrollingComplete()}else t-this.G>100&&this.options.scrollingComplete();this.u||(this.Z&&this.H?(this.tt(this.R,-this.L,this.P,!0),this.H&&this.H()):((this.ht||this.l)&&this.options.scrollingComplete(),this.scrollTo(this.R,this.V,!0,this.P),this.Z&&(this.Z=!1,this.A&&this.A()))),this.O.length=0}},tt:function(t,i,h,s){var o=this,r=o._;if(r&&(n(r),o._=!1),s&&o.options.animating){o.B=t,o.C=i,o.X=h;var u=o.R,c=o.V,f=o.P,_=t-u,v=i-c,M=h-f;o._=e((function(t,i,h){h&&(o.R=u+_*t,o.V=c+v*t,o.P=f+M*t,o.t&&o.t(o.R,o.V,o.P))}),(function(t){return o._===t}),(function(t,i,h){i===o._&&(o._=!1),(o.s||h)&&o.options.scrollingComplete(),o.options.zooming&&(o.$(),o.it&&(o.it(),o.it=null))}),o.options.animationDuration,r?l:a)}else o.B=o.R=t,o.C=o.V=i,o.X=o.P=h,o.t&&o.t(t,i,h),o.options.zooming&&(o.$(),o.it&&(o.it(),o.it=null))},$:function(t){null==t&&(t=this.P),this.W=Math.max(this.g*t-this.m,0),this.k=Math.max(this.T*t-this.p,0)},rt:function(t){var i=this;if(i.options.paging){var h=Math.max(Math.min(i.R,i.W),0),s=Math.max(Math.min(i.V,i.k),0),n=i.m,o=i.p;i.q=Math.floor(h/n)*n,i.F=Math.floor(s/o)*o,i.J=Math.ceil(h/n)*n,i.K=Math.ceil(s/o)*o}else i.q=0,i.F=0,i.J=i.W,i.K=i.k;var l=i.options.snapping?4:.001;i.u=e((function(t,h,s){i.ut(s)}),(function(){var t=Math.abs(i.N)>=l||Math.abs(i.U)>=l;return t||(i.s=!0),t}),(function(t,h,s){i.u=!1,i.s&&i.options.scrollingComplete(),i.scrollTo(i.R,i.V,i.options.snapping)}))},ut:function(t){var i=this.R+this.N,h=this.V+this.U;if(!this.options.bouncing){var s=Math.max(Math.min(this.J,i),this.q);s!==i&&(i=s,this.N=0);var n=Math.max(Math.min(this.K,h),this.F);n!==h&&(h=n,this.U=0)}if(t?this.tt(i,h,this.P):(this.R=i,this.V=h),!this.options.paging){this.N*=.95,this.U*=.95}if(this.options.bouncing){var e=0,o=0,l=this.options.penetrationDeceleration,a=this.options.penetrationAcceleration;i<this.q?e=this.q-i:i>this.J&&(e=this.J-i),h<this.F?o=this.F-h:h>this.K&&(o=this.K-h),0!==e&&(e*this.N<=0?this.N+=e*l:this.N=e*a),0!==o&&(o*this.U<=0?this.U+=o*l:this.U=o*a)}}};for(var i in t)o.prototype[i]=t[i]}();var u=o;export default u;
//# sourceMappingURL=index.es.js.map
