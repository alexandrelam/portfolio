(window.webpackJsonp=window.webpackJsonp||[]).push([[12,2,3,29,30],{326:function(e,t,r){var content=r(336);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(76).default)("4e4dc27c",content,!0,{sourceMap:!1})},328:function(e,t,r){var content=r(346);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(76).default)("7bf58252",content,!0,{sourceMap:!1})},331:function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"fr":{"projects":"projets"},"en":{"projects":"projects"}}'),delete e.options._Ctor}},332:function(e,t,r){"use strict";var n=r(12),o=r(4),c=r(92),l=r(20),d=r(15),f=r(67),v=r(116),m=r(77),x=r(3),h=r(59),y=r(68).f,w=r(48).f,_=r(16).f,M=r(333).trim,N="Number",j=o.Number,C=j.prototype,O=f(h(C))==N,H=function(e){var t,r,n,o,c,l,d,code,f=m(e,!1);if("string"==typeof f&&f.length>2)if(43===(t=(f=M(f)).charCodeAt(0))||45===t){if(88===(r=f.charCodeAt(2))||120===r)return NaN}else if(48===t){switch(f.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+f}for(l=(c=f.slice(2)).length,d=0;d<l;d++)if((code=c.charCodeAt(d))<48||code>o)return NaN;return parseInt(c,n)}return+f};if(c(N,!j(" 0o1")||!j("0b1")||j("+0x1"))){for(var E,I=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof I&&(O?x((function(){C.valueOf.call(r)})):f(r)!=N)?v(new j(H(t)),r,I):H(t)},k=n?y(j):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),F=0;k.length>F;F++)d(j,E=k[F])&&!d(I,E)&&_(I,E,w(j,E));I.prototype=C,C.constructor=I,l(o,N,I)}},333:function(e,t,r){var n=r(35),o="["+r(334)+"]",c=RegExp("^"+o+o+"*"),l=RegExp(o+o+"*$"),d=function(e){return function(t){var r=String(n(t));return 1&e&&(r=r.replace(c,"")),2&e&&(r=r.replace(l,"")),r}};e.exports={start:d(1),end:d(2),trim:d(3)}},334:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},335:function(e,t,r){"use strict";r(326)},336:function(e,t,r){var n=r(75)(!1);n.push([e.i,'.card[data-v-b502862c]{position:relative;display:flex;justify-content:space-between;align-items:center;width:500px;height:96px;border-bottom:1px solid #292524;font-size:1.5rem;cursor:pointer}@media (max-width:640px){.card[data-v-b502862c]{width:100%}}.card .new[data-v-b502862c]{color:var(--primary)}.card .index[data-v-b502862c],.card .new[data-v-b502862c]{font-family:"Merriweather",serif;font-style:italic}.card .index[data-v-b502862c]{font-weight:300}.border-top[data-v-b502862c]{border-top:1px solid #292524}.hover-me[data-v-b502862c]{position:absolute;display:flex;justify-content:center;align-items:center;background-color:#292524;width:100%;height:100%;color:#fff;font-family:"Merriweather",serif;font-style:italic;font-weight:300}.fade-enter-active[data-v-b502862c],.fade-leave-active[data-v-b502862c]{transition:opacity .8s}.fade-enter[data-v-b502862c],.fade-leave-to[data-v-b502862c]{opacity:0}',""]),e.exports=n},340:function(e,t,r){"use strict";r.r(t);r(28),r(19),r(33),r(43),r(27),r(44);var n=r(14),o=(r(332),r(32),r(65),r(58));function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d={props:{index:{type:Number,required:!0},title:{type:String,required:!0},image:{type:String,required:!0},isNew:{type:Boolean,default:!1},isHoverMe:{type:Boolean,default:!1}},computed:l(l({},Object(o.b)(["firstHoverMouse"])),{},{titleFormatted:function(){return this.title.toUpperCase()},indexFormatted:function(){return this.index+1<10?"0".concat(this.index+1):"".concat(this.index+1)},link:function(){return"fr"===this.$i18n.locale?"/fr/experiences/"+this.title.replace(/\s/g,""):"/experiences/"+this.title.replace(/\s/g,"")},shouldDisplayHoverMe:function(){return!this.firstHoverMouse&&this.isHoverMe}}),methods:l({},Object(o.c)(["addImageUrl","resetImageUrl","setMouseHover","setFirstHoverMouse"]))},f=(r(335),r(54)),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("NuxtLink",{attrs:{to:e.link}},[r("div",{staticClass:"card",class:[0===e.index&&"border-top"],on:{mouseover:function(t){e.addImageUrl(e.image),e.setMouseHover(!0),e.setFirstHoverMouse(!0)},mouseleave:function(t){e.resetImageUrl(),e.setMouseHover(!1)}}},[r("transition",{attrs:{name:"fade"}},[e.shouldDisplayHoverMe?r("span",{staticClass:"hover-me"},[e._v("Hover Me")]):e._e(),e.shouldDisplayHoverMe?e._e():r("div",[e.isNew?r("span",{staticClass:"new"},[e._v("new")]):e._e(),r("span",[e._v(e._s(e.titleFormatted))])]),e.shouldDisplayHoverMe?e._e():r("span",{staticClass:"index"},[e._v(e._s(e.indexFormatted))])])],1)])}),[],!1,null,"b502862c",null);t.default=component.exports},344:function(e,t,r){var content=r(363);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(76).default)("73109de9",content,!0,{sourceMap:!1})},345:function(e,t,r){"use strict";r(328)},346:function(e,t,r){var n=r(75)(!1);n.push([e.i,'h2[data-v-1acca506]{font-family:"Merriweather",serif;font-weight:700;font-style:italic;margin-bottom:8px}',""]),e.exports=n},352:function(e,t,r){"use strict";r.r(t),t.default=[{title:"epsor",isNew:!0,image:"epsor.png",priority:11,isHoverMe:!0},{title:"okarito",isNew:!1,image:"okarito.png",priority:10,isHoverMe:!1},{title:"ratp",isNew:!1,image:"ratp.png",priority:0,isHoverMe:!1}]},353:function(e,t,r){"use strict";r.r(t),t.default=[{title:"ducktape",isNew:!0,image:"ducktape.png",priority:6,isHoverMe:!1},{title:"portfoliov3",isNew:!0,image:"portfoliov3.png",priority:2,isHoverMe:!1},{title:"lesgrainsdesel",isNew:!1,image:"lesgrainsdesel.png",priority:5,isHoverMe:!1},{title:"buzzer",isNew:!1,image:"buzzer.png",priority:0,isHoverMe:!1},{title:"data handling for ratp",isNew:!1,image:"vigicrue.png",priority:0,isHoverMe:!1},{title:"machine learning labelling",isNew:!1,image:"labelling.png",priority:0,isHoverMe:!1},{title:"grapher",isNew:!1,image:"grapher.png",priority:0,isHoverMe:!1}]},356:function(e,t,r){"use strict";r.r(t);var n={props:{title:{type:String,required:!0},cardElements:{type:Array,required:!0}},computed:{titleFormatted:function(){return this.title.toUpperCase()}}},o=(r(345),r(54)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h2",[e._v(e._s(e.titleFormatted))]),e._l(e.cardElements,(function(e,t){return r("Card",{key:t,attrs:{title:"okarito",index:t,title:e.title,isNew:e.isNew,image:e.image,isHoverMe:e.isHoverMe}})}))],2)}),[],!1,null,"1acca506",null);t.default=component.exports;installComponents(component,{Card:r(340).default})},362:function(e,t,r){"use strict";r(344)},363:function(e,t,r){var n=r(75)(!1);n.push([e.i,".experiences[data-v-2b4997e2]{display:flex;grid-gap:4rem;gap:4rem;padding:18rem 2rem 0}@media (max-width:768px){.experiences[data-v-2b4997e2]{justify-content:flex-end}}@media (max-width:640px){.experiences[data-v-2b4997e2]{padding:8rem 1rem}}.experiences .zindex[data-v-2b4997e2]{z-index:10}.experiences .image-wrapper[data-v-2b4997e2]{flex-grow:1;display:flex;justify-content:center;align-items:center}@media (max-width:768px){.experiences .image-wrapper[data-v-2b4997e2]{display:none}}.experiences .image-wrapper .image[data-v-2b4997e2]{position:fixed;top:50%;transform:translateY(-50%);width:50vw;max-width:50rem;max-height:80vh;border-radius:.25rem}.experiences .projects[data-v-2b4997e2]{margin-top:140px}.experiences .fade-enter-active[data-v-2b4997e2],.experiences .fade-leave-active[data-v-2b4997e2]{transition:opacity 1s}.experiences .fade-enter[data-v-2b4997e2],.experiences .fade-leave-to[data-v-2b4997e2]{opacity:0}",""]),e.exports=n},364:function(e,t,r){"use strict";var n=r(331),o=r.n(n);t.default=o.a},388:function(e,t,r){"use strict";r.r(t);var n=r(352),o=r(353),c={data:function(){return{experiencesCards:n.default,projectsCards:o.default}}},l=(r(362),r(54)),d=r(364),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"experiences"},[r("div",{staticClass:"image-wrapper"},[r("transition",{attrs:{name:"fade"}},[e.$store.state.imageUrl.length?r("img",{staticClass:"image",attrs:{src:e.$store.state.imageUrl}}):e._e()])],1),r("div",{staticClass:"zindex"},[r("CardList",{attrs:{title:"experience",cardElements:e.experiencesCards}}),r("CardList",{staticClass:"projects",attrs:{title:e.$t("projects"),cardElements:e.projectsCards}})],1)])}),[],!1,null,"2b4997e2",null);"function"==typeof d.default&&Object(d.default)(component);t.default=component.exports;installComponents(component,{CardList:r(356).default})}}]);