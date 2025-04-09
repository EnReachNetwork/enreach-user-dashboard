"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5863],{28853:function(e,t,r){r.d(t,{Z:function(){return J}});var n,i,a,o,s,l,u,c,f="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==r.g?r.g:"undefined"!=typeof self?self:{};function h(){if(o)return a;o=1;let e=[{key:"ZiB",factor:11805916207174113e5},{key:"ZB",factor:1e21},{key:"YiB",factor:12089258196146292e8},{key:"YB",factor:1e24},{key:"TiB",factor:1099511627776},{key:"TB",factor:1e12},{key:"PiB",factor:0x4000000000000},{key:"PB",factor:1e15},{key:"MiB",factor:1048576},{key:"MB",factor:1e6},{key:"KiB",factor:1024},{key:"KB",factor:1e3},{key:"GiB",factor:1073741824},{key:"GB",factor:1e9},{key:"EiB",factor:0x1000000000000000},{key:"EB",factor:1e18},{key:"B",factor:1}];function t(e){return e.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")}return a={unformat:function(r,n){let i;let a=d(),o=a.currentDelimiters(),s=a.currentCurrency().symbol,l=a.currentOrdinal(),u=a.getZeroFormat(),c=a.currentAbbreviations();if("string"==typeof r){if(function(e,t){if(!(e.indexOf(":")&&":"!==t.thousands))return!1;let r=e.split(":");if(3!==r.length)return!1;let n=+r[0],i=+r[1],a=+r[2];return!isNaN(n)&&!isNaN(i)&&!isNaN(a)}(r,o)){let e,t,n;t=+(e=r.split(":"))[0],n=+e[1],i=+e[2]+60*n+3600*t}else i=function(r,n,i="",a,o,s,l){if(""!==r)return r===o?0:function r(n,i,a,o,s,l,u){if(!isNaN(+n))return+n;let c="",f=n.replace(/(^[^(]*)\((.*)\)([^)]*$)/,"$1$2$3");if(f!==n)return -1*r(f,i,a,o,s,l);for(let t=0;t<e.length;t++){let u=e[t];if((c=n.replace(RegExp(`([0-9 ])(${u.key})$`),"$1"))!==n)return r(c,i,a,o,s,l)*u.factor}if((c=n.replace("%",""))!==n)return r(c,i,a,o,s,l)/100;let h=parseFloat(n);if(isNaN(h))return;let p=o(h);if(p&&"."!==p&&(c=n.replace(RegExp(`${t(p)}$`),""))!==n)return r(c,i,a,o,s,l);let g={};Object.keys(l).forEach(e=>{g[l[e]]=e});let d=Object.keys(g).sort().reverse(),m=d.length;for(let e=0;e<m;e++){let t=d[e],u=g[t];if((c=n.replace(t,""))!==n){let e;switch(u){case"thousand":e=1e3;break;case"million":e=1e6;break;case"billion":e=1e9;break;case"trillion":e=1e12}return r(c,i,a,o,s,l)*e}}}(r.replace(i,"").replace(RegExp(`([0-9])${t(n.thousands)}([0-9])`,"g"),"$1$2").replace(n.decimal,"."),n,i,a,o,s)}(r,o,s,l,u,c)}else{if("number"!=typeof r)return;i=r}if(void 0!==i)return i}}}function p(){if(l)return s;l=1;let e=h(),t=/^[a-z]{2,3}(-[a-zA-Z]{4})?(-([A-Z]{2}|[0-9]{3}))?$/,r={output:{type:"string",validValues:["currency","percent","byte","time","ordinal","number"]},base:{type:"string",validValues:["decimal","binary","general"],restriction:(e,t)=>"byte"===t.output,message:"`base` must be provided only when the output is `byte`",mandatory:e=>"byte"===e.output},characteristic:{type:"number",restriction:e=>e>=0,message:"value must be positive"},prefix:"string",postfix:"string",forceAverage:{type:"string",validValues:["trillion","billion","million","thousand"]},average:"boolean",lowPrecision:{type:"boolean",restriction:(e,t)=>!0===t.average,message:"`lowPrecision` must be provided only when the option `average` is set"},currencyPosition:{type:"string",validValues:["prefix","infix","postfix"]},currencySymbol:"string",totalLength:{type:"number",restrictions:[{restriction:e=>e>=0,message:"value must be positive"},{restriction:(e,t)=>!t.exponential,message:"`totalLength` is incompatible with `exponential`"}]},mantissa:{type:"number",restriction:e=>e>=0,message:"value must be positive"},optionalMantissa:"boolean",trimMantissa:"boolean",roundingFunction:"function",optionalCharacteristic:"boolean",thousandSeparated:"boolean",spaceSeparated:"boolean",spaceSeparatedCurrency:"boolean",spaceSeparatedAbbreviation:"boolean",abbreviations:{type:"object",children:{thousand:"string",million:"string",billion:"string",trillion:"string"}},negative:{type:"string",validValues:["sign","parenthesis"]},forceSign:"boolean",exponential:{type:"boolean"},prefixSymbol:{type:"boolean",restriction:(e,t)=>"percent"===t.output,message:"`prefixSymbol` can be provided only when the output is `percent`"}},n={languageTag:{type:"string",mandatory:!0,restriction:e=>e.match(t),message:"the language tag must follow the BCP 47 specification (see https://tools.ieft.org/html/bcp47)"},delimiters:{type:"object",children:{thousands:"string",decimal:"string",thousandsSize:"number"},mandatory:!0},abbreviations:{type:"object",children:{thousand:{type:"string",mandatory:!0},million:{type:"string",mandatory:!0},billion:{type:"string",mandatory:!0},trillion:{type:"string",mandatory:!0}},mandatory:!0},spaceSeparated:"boolean",spaceSeparatedCurrency:"boolean",ordinal:{type:"function",mandatory:!0},bytes:{type:"object",children:{binarySuffixes:"object",decimalSuffixes:"object"}},currency:{type:"object",children:{symbol:"string",position:"string",code:"string"},mandatory:!0},defaults:"format",ordinalFormat:"format",byteFormat:"format",percentageFormat:"format",currencyFormat:"format",timeDefaults:"format",formats:{type:"object",children:{fourDigits:{type:"format",mandatory:!0},fullWithTwoDecimals:{type:"format",mandatory:!0},fullWithTwoDecimalsNoCurrency:{type:"format",mandatory:!0},fullWithNoDecimals:{type:"format",mandatory:!0}}}};function i(t){return void 0!==e.unformat(t)}function a(e,t,n,i=!1){let o=Object.keys(e).map(i=>{if(!t[i])return console.error(`${n} Invalid key: ${i}`),!1;let o=e[i],s=t[i];if("string"==typeof s&&(s={type:s}),"format"===s.type){if(!a(o,r,`[Validate ${i}]`,!0))return!1}else if(typeof o!==s.type)return console.error(`${n} ${i} type mismatched: "${s.type}" expected, "${typeof o}" provided`),!1;if(s.restrictions&&s.restrictions.length){let t=s.restrictions.length;for(let r=0;r<t;r++){let{restriction:t,message:a}=s.restrictions[r];if(!t(o,e))return console.error(`${n} ${i} invalid value: ${a}`),!1}}return s.restriction&&!s.restriction(o,e)?(console.error(`${n} ${i} invalid value: ${s.message}`),!1):s.validValues&&-1===s.validValues.indexOf(o)?(console.error(`${n} ${i} invalid value: must be among ${JSON.stringify(s.validValues)}, "${o}" provided`),!1):!s.children||!!a(o,s.children,`[Validate ${i}]`)});return i||o.push(...Object.keys(t).map(r=>{let i=t[r];if("string"==typeof i&&(i={type:i}),i.mandatory){let t=i.mandatory;if("function"==typeof t&&(t=t(e)),t&&void 0===e[r])return console.error(`${n} Missing mandatory key "${r}"`),!1}return!0})),o.reduce((e,t)=>e&&t,!0)}function o(e){return a(e,r,"[Validate format]")}return s={validate:function(e,t){let r=i(e),n=o(t);return r&&n},validateFormat:o,validateInput:i,validateLanguage:function(e){return a(e,n,"[Validate language]")}}}var g={parseFormat:function(e,t={}){var r,n,i,a,o;let s,l,u,c;return"string"!=typeof e?e:(!function(e,t){if(-1!==e.indexOf("$")){t.output="currency";return}if(-1!==e.indexOf("%")){t.output="percent";return}if(-1!==e.indexOf("bd")){t.output="byte",t.base="general";return}if(-1!==e.indexOf("b")){t.output="byte",t.base="binary";return}if(-1!==e.indexOf("d")){t.output="byte",t.base="decimal";return}if(-1!==e.indexOf(":")){t.output="time";return}-1!==e.indexOf("o")&&(t.output="ordinal")}(e=(l=(n=e=(s=(r=e).match(/^{([^}]*)}/))?(t.prefix=s[1],r.slice(s[0].length)):r).match(/{([^}]*)}$/))?(t.postfix=l[1],n.slice(0,-l[0].length)):n,t),(u=e.match(/[1-9]+[0-9]*/))&&(t.totalLength=+u[0]),(c=e.split(".")[0].match(/0+/))&&(t.characteristic=c[0].length),!function(e,t){if(-1!==e.indexOf(".")){let r=e.split(".")[0];t.optionalCharacteristic=-1===r.indexOf("0")}}(e,t),-1!==e.indexOf("a")&&(t.average=!0),-1!==(i=e).indexOf("K")?t.forceAverage="thousand":-1!==i.indexOf("M")?t.forceAverage="million":-1!==i.indexOf("B")?t.forceAverage="billion":-1!==i.indexOf("T")&&(t.forceAverage="trillion"),!function(e,t){let r=e.split(".")[1];if(r){let e=r.match(/0+/);e&&(t.mantissa=e[0].length)}}(e,t),(a=e).match(/\[\.]/)?t.optionalMantissa=!0:a.match(/\./)&&(t.optionalMantissa=!1),!function(e,t){let r=e.split(".")[1];r&&(t.trimMantissa=-1!==r.indexOf("["))}(e,t),-1!==e.indexOf(",")&&(t.thousandSeparated=!0),-1!==e.indexOf(" ")&&(t.spaceSeparated=!0,t.spaceSeparatedCurrency=!0,(t.average||t.forceAverage)&&(t.spaceSeparatedAbbreviation=!0)),(o=e).match(/^\+?\([^)]*\)$/)&&(t.negative="parenthesis"),o.match(/^\+?-/)&&(t.negative="sign"),e.match(/^\+/)&&(t.forceSign=!0),t)}};function d(){let e;if(c)return u;c=1;let t=i?n:(i=1,n={languageTag:"en-US",delimiters:{thousands:",",decimal:"."},abbreviations:{thousand:"k",million:"m",billion:"b",trillion:"t"},spaceSeparated:!1,ordinal:function(e){let t=e%10;return 1==~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th"},bytes:{binarySuffixes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],decimalSuffixes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]},currency:{symbol:"$",position:"prefix",code:"USD"},currencyFormat:{thousandSeparated:!0,totalLength:4,spaceSeparated:!0,spaceSeparatedCurrency:!0},formats:{fourDigits:{totalLength:4,spaceSeparated:!0},fullWithTwoDecimals:{output:"currency",thousandSeparated:!0,mantissa:2},fullWithTwoDecimalsNoCurrency:{thousandSeparated:!0,mantissa:2},fullWithNoDecimals:{output:"currency",thousandSeparated:!0,mantissa:0}}}),r=p(),a={},o={},s=null,l={};function f(){return o[e]}return a.languages=()=>Object.assign({},o),a.currentLanguage=()=>e,a.currentBytes=()=>f().bytes||{},a.currentCurrency=()=>f().currency,a.currentAbbreviations=()=>f().abbreviations,a.currentDelimiters=()=>f().delimiters,a.currentOrdinal=()=>f().ordinal,a.currentDefaults=()=>Object.assign({},f().defaults,l),a.currentOrdinalDefaultFormat=()=>Object.assign({},a.currentDefaults(),f().ordinalFormat),a.currentByteDefaultFormat=()=>Object.assign({},a.currentDefaults(),f().byteFormat),a.currentPercentageDefaultFormat=()=>Object.assign({},a.currentDefaults(),f().percentageFormat),a.currentCurrencyDefaultFormat=()=>Object.assign({},a.currentDefaults(),f().currencyFormat),a.currentTimeDefaultFormat=()=>Object.assign({},a.currentDefaults(),f().timeFormat),a.setDefaults=e=>{e=g.parseFormat(e),r.validateFormat(e)&&(l=e)},a.getZeroFormat=()=>s,a.setZeroFormat=e=>s="string"==typeof e?e:null,a.hasZeroFormat=()=>null!==s,a.languageData=e=>{if(e){if(o[e])return o[e];throw Error(`Unknown tag "${e}"`)}return f()},a.registerLanguage=(t,n=!1)=>{if(!r.validateLanguage(t))throw Error("Invalid language data");o[t.languageTag]=t,n&&(e=t.languageTag)},a.setLanguage=(r,n=t.languageTag)=>{if(!o[r]){let t=r.split("-")[0],i=Object.keys(o).find(e=>e.split("-")[0]===t);if(!o[i]){e=n;return}e=i;return}e=r},a.registerLanguage(t),e=t.languageTag,u=a}var m={exports:{}};!function(e){var t,r=/^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,n=Math.ceil,i=Math.floor,a="[BigNumber Error] ",o=a+"Number primitive has more than 15 significant digits: ",s=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13];function l(e){var t=0|e;return e>0||e===t?t:t-1}function u(e){for(var t,r,n=1,i=e.length,a=e[0]+"";n<i;){for(r=14-(t=e[n++]+"").length;r--;t="0"+t);a+=t}for(i=a.length;48===a.charCodeAt(--i););return a.slice(0,i+1||1)}function c(e,t){var r,n,i=e.c,a=t.c,o=e.s,s=t.s,l=e.e,u=t.e;if(!o||!s)return null;if(r=i&&!i[0],n=a&&!a[0],r||n)return r?n?0:-s:o;if(o!=s)return o;if(r=o<0,n=l==u,!i||!a)return n?0:!i^r?1:-1;if(!n)return l>u^r?1:-1;for(o=0,s=(l=i.length)<(u=a.length)?l:u;o<s;o++)if(i[o]!=a[o])return i[o]>a[o]^r?1:-1;return l==u?0:l>u^r?1:-1}function f(e,t,r,n){if(e<t||e>r||e!==i(e))throw Error(a+(n||"Argument")+("number"==typeof e?e<t||e>r?" out of range: ":" not an integer: ":" not a primitive number: ")+String(e))}function h(e){var t=e.c.length-1;return l(e.e/14)==t&&e.c[t]%2!=0}function p(e,t){return(e.length>1?e.charAt(0)+"."+e.slice(1):e)+(t<0?"e":"e+")+t}function g(e,t,r){var n,i;if(t<0){for(i=r+".";++t;i+=r);e=i+e}else if(n=e.length,++t>n){for(i=r,t-=n;--t;i+=r);e+=i}else t<n&&(e=e.slice(0,t)+"."+e.slice(t));return e}(t=function e(t){var d,m,y,b,v,w,O,N,x,$=j.prototype={constructor:j,toString:null,valueOf:null},S=new j(1),B=20,D=4,E=-7,_=21,A=-1e7,F=1e7,k=!1,M=1,L=0,C={prefix:"",groupSize:3,secondaryGroupSize:0,groupSeparator:",",decimalSeparator:".",fractionGroupSize:0,fractionGroupSeparator:"\xa0",suffix:""},P="0123456789abcdefghijklmnopqrstuvwxyz",T=!0;function j(e,t){var n,a,s,l,u,c,h,p,g=this;if(!(g instanceof j))return new j(e,t);if(null==t){if(e&&!0===e._isBigNumber){g.s=e.s,!e.c||e.e>F?g.c=g.e=null:e.e<A?g.c=[g.e=0]:(g.e=e.e,g.c=e.c.slice());return}if((c="number"==typeof e)&&0*e==0){if(g.s=1/e<0?(e=-e,-1):1,e===~~e){for(l=0,u=e;u>=10;u/=10,l++);l>F?g.c=g.e=null:(g.e=l,g.c=[e]);return}p=String(e)}else{if(!r.test(p=String(e)))return x(g,p,c);g.s=45==p.charCodeAt(0)?(p=p.slice(1),-1):1}(l=p.indexOf("."))>-1&&(p=p.replace(".","")),(u=p.search(/e/i))>0?(l<0&&(l=u),l+=+p.slice(u+1),p=p.substring(0,u)):l<0&&(l=p.length)}else{if(f(t,2,P.length,"Base"),10==t&&T)return G(g=new j(e),B+g.e+1,D);if(p=String(e),c="number"==typeof e){if(0*e!=0)return x(g,p,c,t);if(g.s=1/e<0?(p=p.slice(1),-1):1,j.DEBUG&&p.replace(/^0\.0*|\./,"").length>15)throw Error(o+e)}else g.s=45===p.charCodeAt(0)?(p=p.slice(1),-1):1;for(n=P.slice(0,t),l=u=0,h=p.length;u<h;u++)if(0>n.indexOf(a=p.charAt(u))){if("."==a){if(u>l){l=h;continue}}else if(!s&&(p==p.toUpperCase()&&(p=p.toLowerCase())||p==p.toLowerCase()&&(p=p.toUpperCase()))){s=!0,u=-1,l=0;continue}return x(g,String(e),c,t)}c=!1,(l=(p=N(p,t,10,g.s)).indexOf("."))>-1?p=p.replace(".",""):l=p.length}for(u=0;48===p.charCodeAt(u);u++);for(h=p.length;48===p.charCodeAt(--h););if(p=p.slice(u,++h)){if(h-=u,c&&j.DEBUG&&h>15&&(e>9007199254740991||e!==i(e)))throw Error(o+g.s*e);if((l=l-u-1)>F)g.c=g.e=null;else if(l<A)g.c=[g.e=0];else{if(g.e=l,g.c=[],u=(l+1)%14,l<0&&(u+=14),u<h){for(u&&g.c.push(+p.slice(0,u)),h-=14;u<h;)g.c.push(+p.slice(u,u+=14));u=14-(p=p.slice(u)).length}else u-=h;for(;u--;p+="0");g.c.push(+p)}}else g.c=[g.e=0]}function R(e,t,r,n){var i,a,o,s,l;if(null==r?r=D:f(r,0,8),!e.c)return e.toString();if(i=e.c[0],o=e.e,null==t)l=u(e.c),l=1==n||2==n&&(o<=E||o>=_)?p(l,o):g(l,o,"0");else if(a=(e=G(new j(e),t,r)).e,s=(l=u(e.c)).length,1==n||2==n&&(t<=a||a<=E)){for(;s<t;l+="0",s++);l=p(l,a)}else if(t-=o,l=g(l,a,"0"),a+1>s){if(--t>0)for(l+=".";t--;l+="0");}else if((t+=a-s)>0)for(a+1==s&&(l+=".");t--;l+="0");return e.s<0&&i?"-"+l:l}function U(e,t){for(var r,n,i=1,a=new j(e[0]);i<e.length;i++)(n=new j(e[i])).s&&(r=c(a,n))!==t&&(0!==r||a.s!==t)||(a=n);return a}function I(e,t,r){for(var n=1,i=t.length;!t[--i];t.pop());for(i=t[0];i>=10;i/=10,n++);return(r=n+14*r-1)>F?e.c=e.e=null:r<A?e.c=[e.e=0]:(e.e=r,e.c=t),e}function G(e,t,r,a){var o,l,u,c,f,h,p,g=e.c;if(g){e:{for(o=1,c=g[0];c>=10;c/=10,o++);if((l=t-o)<0)l+=14,u=t,p=i((f=g[h=0])/s[o-u-1]%10);else if((h=n((l+1)/14))>=g.length){if(a){for(;g.length<=h;g.push(0));f=p=0,o=1,l%=14,u=l-14+1}else break e}else{for(o=1,f=c=g[h];c>=10;c/=10,o++);l%=14,p=(u=l-14+o)<0?0:i(f/s[o-u-1]%10)}if(a=a||t<0||null!=g[h+1]||(u<0?f:f%s[o-u-1]),a=r<4?(p||a)&&(0==r||r==(e.s<0?3:2)):p>5||5==p&&(4==r||a||6==r&&(l>0?u>0?f/s[o-u]:0:g[h-1])%10&1||r==(e.s<0?8:7)),t<1||!g[0])return g.length=0,a?(t-=e.e+1,g[0]=s[(14-t%14)%14],e.e=-t||0):g[0]=e.e=0,e;if(0==l?(g.length=h,c=1,h--):(g.length=h+1,c=s[14-l],g[h]=u>0?i(f/s[o-u]%s[u])*c:0),a)for(;;){if(0==h){for(l=1,u=g[0];u>=10;u/=10,l++);for(u=g[0]+=c,c=1;u>=10;u/=10,c++);l!=c&&(e.e++,1e14==g[0]&&(g[0]=1));break}if(g[h]+=c,1e14!=g[h])break;g[h--]=0,c=1}for(l=g.length;0===g[--l];g.pop());}e.e>F?e.c=e.e=null:e.e<A&&(e.c=[e.e=0])}return e}function V(e){var t,r=e.e;return null===r?e.toString():(t=u(e.c),t=r<=E||r>=_?p(t,r):g(t,r,"0"),e.s<0?"-"+t:t)}return j.clone=e,j.ROUND_UP=0,j.ROUND_DOWN=1,j.ROUND_CEIL=2,j.ROUND_FLOOR=3,j.ROUND_HALF_UP=4,j.ROUND_HALF_DOWN=5,j.ROUND_HALF_EVEN=6,j.ROUND_HALF_CEIL=7,j.ROUND_HALF_FLOOR=8,j.EUCLID=9,j.config=j.set=function(e){var t,r;if(null!=e){if("object"==typeof e){if(e.hasOwnProperty(t="DECIMAL_PLACES")&&(f(r=e[t],0,1e9,t),B=r),e.hasOwnProperty(t="ROUNDING_MODE")&&(f(r=e[t],0,8,t),D=r),e.hasOwnProperty(t="EXPONENTIAL_AT")&&((r=e[t])&&r.pop?(f(r[0],-1e9,0,t),f(r[1],0,1e9,t),E=r[0],_=r[1]):(f(r,-1e9,1e9,t),E=-(_=r<0?-r:r))),e.hasOwnProperty(t="RANGE")){if((r=e[t])&&r.pop)f(r[0],-1e9,-1,t),f(r[1],1,1e9,t),A=r[0],F=r[1];else if(f(r,-1e9,1e9,t),r)A=-(F=r<0?-r:r);else throw Error(a+t+" cannot be zero: "+r)}if(e.hasOwnProperty(t="CRYPTO")){if(!!(r=e[t])===r){if(r){if("undefined"!=typeof crypto&&crypto&&(crypto.getRandomValues||crypto.randomBytes))k=r;else throw k=!r,Error(a+"crypto unavailable")}else k=r}else throw Error(a+t+" not true or false: "+r)}if(e.hasOwnProperty(t="MODULO_MODE")&&(f(r=e[t],0,9,t),M=r),e.hasOwnProperty(t="POW_PRECISION")&&(f(r=e[t],0,1e9,t),L=r),e.hasOwnProperty(t="FORMAT")){if("object"==typeof(r=e[t]))C=r;else throw Error(a+t+" not an object: "+r)}if(e.hasOwnProperty(t="ALPHABET")){if("string"!=typeof(r=e[t])||/^.?$|[+\-.\s]|(.).*\1/.test(r))throw Error(a+t+" invalid: "+r);T="0123456789"==r.slice(0,10),P=r}}else throw Error(a+"Object expected: "+e)}return{DECIMAL_PLACES:B,ROUNDING_MODE:D,EXPONENTIAL_AT:[E,_],RANGE:[A,F],CRYPTO:k,MODULO_MODE:M,POW_PRECISION:L,FORMAT:C,ALPHABET:P}},j.isBigNumber=function(e){if(!e||!0!==e._isBigNumber)return!1;if(!j.DEBUG)return!0;var t,r,n=e.c,o=e.e,s=e.s;e:if("[object Array]"==({}).toString.call(n)){if((1===s||-1===s)&&o>=-1e9&&o<=1e9&&o===i(o)){if(0===n[0]){if(0===o&&1===n.length)return!0;break e}if((t=(o+1)%14)<1&&(t+=14),String(n[0]).length==t){for(t=0;t<n.length;t++)if((r=n[t])<0||r>=1e14||r!==i(r))break e;if(0!==r)return!0}}}else if(null===n&&null===o&&(null===s||1===s||-1===s))return!0;throw Error(a+"Invalid BigNumber: "+e)},j.maximum=j.max=function(){return U(arguments,-1)},j.minimum=j.min=function(){return U(arguments,1)},j.random=(d=9007199254740992*Math.random()&2097151?function(){return i(9007199254740992*Math.random())}:function(){return(1073741824*Math.random()|0)*8388608+(8388608*Math.random()|0)},function(e){var t,r,o,l,u,c=0,h=[],p=new j(S);if(null==e?e=B:f(e,0,1e9),l=n(e/14),k){if(crypto.getRandomValues){for(t=crypto.getRandomValues(new Uint32Array(l*=2));c<l;)(u=131072*t[c]+(t[c+1]>>>11))>=9e15?(r=crypto.getRandomValues(new Uint32Array(2)),t[c]=r[0],t[c+1]=r[1]):(h.push(u%1e14),c+=2);c=l/2}else if(crypto.randomBytes){for(t=crypto.randomBytes(l*=7);c<l;)(u=(31&t[c])*281474976710656+1099511627776*t[c+1]+4294967296*t[c+2]+16777216*t[c+3]+(t[c+4]<<16)+(t[c+5]<<8)+t[c+6])>=9e15?crypto.randomBytes(7).copy(t,c):(h.push(u%1e14),c+=7);c=l/7}else throw k=!1,Error(a+"crypto unavailable")}if(!k)for(;c<l;)(u=d())<9e15&&(h[c++]=u%1e14);for(l=h[--c],e%=14,l&&e&&(u=s[14-e],h[c]=i(l/u)*u);0===h[c];h.pop(),c--);if(c<0)h=[o=0];else{for(o=-1;0===h[0];h.splice(0,1),o-=14);for(c=1,u=h[0];u>=10;u/=10,c++);c<14&&(o-=14-c)}return p.e=o,p.c=h,p}),j.sum=function(){for(var e=1,t=arguments,r=new j(t[0]);e<t.length;)r=r.plus(t[e++]);return r},N=function(){var e="0123456789";function t(e,t,r,n){for(var i,a,o=[0],s=0,l=e.length;s<l;){for(a=o.length;a--;o[a]*=t);for(o[0]+=n.indexOf(e.charAt(s++)),i=0;i<o.length;i++)o[i]>r-1&&(null==o[i+1]&&(o[i+1]=0),o[i+1]+=o[i]/r|0,o[i]%=r)}return o.reverse()}return function(r,n,i,a,o){var s,l,c,f,h,p,d,m,y=r.indexOf("."),b=B,v=D;for(y>=0&&(f=L,L=0,r=r.replace(".",""),p=(m=new j(n)).pow(r.length-y),L=f,m.c=t(g(u(p.c),p.e,"0"),10,i,e),m.e=m.c.length),c=f=(d=t(r,n,i,o?(s=P,e):(s=e,P))).length;0==d[--f];d.pop());if(!d[0])return s.charAt(0);if(y<0?--c:(p.c=d,p.e=c,p.s=a,d=(p=O(p,m,b,v,i)).c,h=p.r,c=p.e),y=d[l=c+b+1],f=i/2,h=h||l<0||null!=d[l+1],h=v<4?(null!=y||h)&&(0==v||v==(p.s<0?3:2)):y>f||y==f&&(4==v||h||6==v&&1&d[l-1]||v==(p.s<0?8:7)),l<1||!d[0])r=h?g(s.charAt(1),-b,s.charAt(0)):s.charAt(0);else{if(d.length=l,h)for(--i;++d[--l]>i;)d[l]=0,l||(++c,d=[1].concat(d));for(f=d.length;!d[--f];);for(y=0,r="";y<=f;r+=s.charAt(d[y++]));r=g(r,c,s.charAt(0))}return r}}(),O=function(){function e(e,t,r){var n,i,a,o,s=0,l=e.length,u=t%1e7,c=t/1e7|0;for(e=e.slice();l--;)n=c*(a=e[l]%1e7)+(o=e[l]/1e7|0)*u,s=((i=u*a+n%1e7*1e7+s)/r|0)+(n/1e7|0)+c*o,e[l]=i%r;return s&&(e=[s].concat(e)),e}function t(e,t,r,n){var i,a;if(r!=n)a=r>n?1:-1;else for(i=a=0;i<r;i++)if(e[i]!=t[i]){a=e[i]>t[i]?1:-1;break}return a}function r(e,t,r,n){for(var i=0;r--;)e[r]-=i,i=e[r]<t[r]?1:0,e[r]=i*n+e[r]-t[r];for(;!e[0]&&e.length>1;e.splice(0,1));}return function(n,a,o,s,u){var c,f,h,p,g,d,m,y,b,v,w,O,N,x,$,S,B,D=n.s==a.s?1:-1,E=n.c,_=a.c;if(!E||!E[0]||!_||!_[0])return new j(n.s&&a.s&&(E?!_||E[0]!=_[0]:_)?E&&0==E[0]||!_?0*D:D/0:NaN);for(b=(y=new j(D)).c=[],D=o+(f=n.e-a.e)+1,u||(u=1e14,f=l(n.e/14)-l(a.e/14),D=D/14|0),h=0;_[h]==(E[h]||0);h++);if(_[h]>(E[h]||0)&&f--,D<0)b.push(1),p=!0;else{for(x=E.length,S=_.length,h=0,D+=2,(g=i(u/(_[0]+1)))>1&&(_=e(_,g,u),E=e(E,g,u),S=_.length,x=E.length),N=S,w=(v=E.slice(0,S)).length;w<S;v[w++]=0);B=[0].concat(B=_.slice()),$=_[0],_[1]>=u/2&&$++;do{if(g=0,(c=t(_,v,S,w))<0){if(O=v[0],S!=w&&(O=O*u+(v[1]||0)),(g=i(O/$))>1)for(g>=u&&(g=u-1),m=(d=e(_,g,u)).length,w=v.length;1==t(d,v,m,w);)g--,r(d,S<m?B:_,m,u),m=d.length,c=1;else 0==g&&(c=g=1),m=(d=_.slice()).length;if(m<w&&(d=[0].concat(d)),r(v,d,w,u),w=v.length,-1==c)for(;1>t(_,v,S,w);)g++,r(v,S<w?B:_,w,u),w=v.length}else 0===c&&(g++,v=[0]);b[h++]=g,v[0]?v[w++]=E[N]||0:(v=[E[N]],w=1)}while((N++<x||null!=v[0])&&D--);p=null!=v[0],b[0]||b.splice(0,1)}if(1e14==u){for(h=1,D=b[0];D>=10;D/=10,h++);G(y,o+(y.e=h+14*f-1)+1,s,p)}else y.e=f,y.r=+p;return y}}(),m=/^(-?)0([xbo])(?=\w[\w.]*$)/i,y=/^([^.]+)\.$/,b=/^\.([^.]+)$/,v=/^-?(Infinity|NaN)$/,w=/^\s*\+(?=[\w.])|^\s+|\s+$/g,x=function(e,t,r,n){var i,o=r?t:t.replace(w,"");if(v.test(o))e.s=isNaN(o)?null:o<0?-1:1;else{if(!r&&(o=o.replace(m,function(e,t,r){return i="x"==(r=r.toLowerCase())?16:"b"==r?2:8,n&&n!=i?e:t}),n&&(i=n,o=o.replace(y,"$1").replace(b,"0.$1")),t!=o))return new j(o,i);if(j.DEBUG)throw Error(a+"Not a"+(n?" base "+n:"")+" number: "+t);e.s=null}e.c=e.e=null},$.absoluteValue=$.abs=function(){var e=new j(this);return e.s<0&&(e.s=1),e},$.comparedTo=function(e,t){return c(this,new j(e,t))},$.decimalPlaces=$.dp=function(e,t){var r,n,i;if(null!=e)return f(e,0,1e9),null==t?t=D:f(t,0,8),G(new j(this),e+this.e+1,t);if(!(r=this.c))return null;if(n=((i=r.length-1)-l(this.e/14))*14,i=r[i])for(;i%10==0;i/=10,n--);return n<0&&(n=0),n},$.dividedBy=$.div=function(e,t){return O(this,new j(e,t),B,D)},$.dividedToIntegerBy=$.idiv=function(e,t){return O(this,new j(e,t),0,1)},$.exponentiatedBy=$.pow=function(e,t){var r,o,s,l,u,c,f,p,g,d=this;if((e=new j(e)).c&&!e.isInteger())throw Error(a+"Exponent not an integer: "+V(e));if(null!=t&&(t=new j(t)),c=e.e>14,!d.c||!d.c[0]||1==d.c[0]&&!d.e&&1==d.c.length||!e.c||!e.c[0])return g=new j(Math.pow(+V(d),c?e.s*(2-h(e)):+V(e))),t?g.mod(t):g;if(f=e.s<0,t){if(t.c?!t.c[0]:!t.s)return new j(NaN);(o=!f&&d.isInteger()&&t.isInteger())&&(d=d.mod(t))}else{if(e.e>9&&(d.e>0||d.e<-1||(0==d.e?d.c[0]>1||c&&d.c[1]>=24e7:d.c[0]<8e13||c&&d.c[0]<=9999975e7)))return l=d.s<0&&h(e)?-0:0,d.e>-1&&(l=1/l),new j(f?1/l:l);L&&(l=n(L/14+2))}for(c?(r=new j(.5),f&&(e.s=1),p=h(e)):p=(s=Math.abs(+V(e)))%2,g=new j(S);;){if(p){if(!(g=g.times(d)).c)break;l?g.c.length>l&&(g.c.length=l):o&&(g=g.mod(t))}if(s){if(0===(s=i(s/2)))break;p=s%2}else if(G(e=e.times(r),e.e+1,1),e.e>14)p=h(e);else{if(0==(s=+V(e)))break;p=s%2}d=d.times(d),l?d.c&&d.c.length>l&&(d.c.length=l):o&&(d=d.mod(t))}return o?g:(f&&(g=S.div(g)),t?g.mod(t):l?G(g,L,D,u):g)},$.integerValue=function(e){var t=new j(this);return null==e?e=D:f(e,0,8),G(t,t.e+1,e)},$.isEqualTo=$.eq=function(e,t){return 0===c(this,new j(e,t))},$.isFinite=function(){return!!this.c},$.isGreaterThan=$.gt=function(e,t){return c(this,new j(e,t))>0},$.isGreaterThanOrEqualTo=$.gte=function(e,t){return 1===(t=c(this,new j(e,t)))||0===t},$.isInteger=function(){return!!this.c&&l(this.e/14)>this.c.length-2},$.isLessThan=$.lt=function(e,t){return 0>c(this,new j(e,t))},$.isLessThanOrEqualTo=$.lte=function(e,t){return -1===(t=c(this,new j(e,t)))||0===t},$.isNaN=function(){return!this.s},$.isNegative=function(){return this.s<0},$.isPositive=function(){return this.s>0},$.isZero=function(){return!!this.c&&0==this.c[0]},$.minus=function(e,t){var r,n,i,a,o=this.s;if(t=(e=new j(e,t)).s,!o||!t)return new j(NaN);if(o!=t)return e.s=-t,this.plus(e);var s=this.e/14,u=e.e/14,c=this.c,f=e.c;if(!s||!u){if(!c||!f)return c?(e.s=-t,e):new j(f?this:NaN);if(!c[0]||!f[0])return f[0]?(e.s=-t,e):new j(c[0]?this:3==D?-0:0)}if(s=l(s),u=l(u),c=c.slice(),o=s-u){for((a=o<0)?(o=-o,i=c):(u=s,i=f),i.reverse(),t=o;t--;i.push(0));i.reverse()}else for(n=(a=(o=c.length)<(t=f.length))?o:t,o=t=0;t<n;t++)if(c[t]!=f[t]){a=c[t]<f[t];break}if(a&&(i=c,c=f,f=i,e.s=-e.s),(t=(n=f.length)-(r=c.length))>0)for(;t--;c[r++]=0);for(t=1e14-1;n>o;){if(c[--n]<f[n]){for(r=n;r&&!c[--r];c[r]=t);--c[r],c[n]+=1e14}c[n]-=f[n]}for(;0==c[0];c.splice(0,1),--u);return c[0]?I(e,c,u):(e.s=3==D?-1:1,e.c=[e.e=0],e)},$.modulo=$.mod=function(e,t){var r,n;return(e=new j(e,t),this.c&&e.s&&(!e.c||e.c[0]))?e.c&&(!this.c||this.c[0])?(9==M?(n=e.s,e.s=1,r=O(this,e,0,3),e.s=n,r.s*=n):r=O(this,e,0,M),(e=this.minus(r.times(e))).c[0]||1!=M||(e.s=this.s),e):new j(this):new j(NaN)},$.multipliedBy=$.times=function(e,t){var r,n,i,a,o,s,u,c,f,h,p,g,d,m=this.c,y=(e=new j(e,t)).c;if(!m||!y||!m[0]||!y[0])return this.s&&e.s&&(!m||m[0]||y)&&(!y||y[0]||m)?(e.s*=this.s,m&&y?(e.c=[0],e.e=0):e.c=e.e=null):e.c=e.e=e.s=null,e;for(n=l(this.e/14)+l(e.e/14),e.s*=this.s,(u=m.length)<(h=y.length)&&(d=m,m=y,y=d,i=u,u=h,h=i),i=u+h,d=[];i--;d.push(0));for(i=h;--i>=0;){for(r=0,p=y[i]%1e7,g=y[i]/1e7|0,a=i+(o=u);a>i;)s=g*(c=m[--o]%1e7)+(f=m[o]/1e7|0)*p,r=((c=p*c+s%1e7*1e7+d[a]+r)/1e14|0)+(s/1e7|0)+g*f,d[a--]=c%1e14;d[a]=r}return r?++n:d.splice(0,1),I(e,d,n)},$.negated=function(){var e=new j(this);return e.s=-e.s||null,e},$.plus=function(e,t){var r,n=this.s;if(t=(e=new j(e,t)).s,!n||!t)return new j(NaN);if(n!=t)return e.s=-t,this.minus(e);var i=this.e/14,a=e.e/14,o=this.c,s=e.c;if(!i||!a){if(!o||!s)return new j(n/0);if(!o[0]||!s[0])return s[0]?e:new j(o[0]?this:0*n)}if(i=l(i),a=l(a),o=o.slice(),n=i-a){for(n>0?(a=i,r=s):(n=-n,r=o),r.reverse();n--;r.push(0));r.reverse()}for((n=o.length)-(t=s.length)<0&&(r=s,s=o,o=r,t=n),n=0;t;)n=(o[--t]=o[t]+s[t]+n)/1e14|0,o[t]=1e14===o[t]?0:o[t]%1e14;return n&&(o=[n].concat(o),++a),I(e,o,a)},$.precision=$.sd=function(e,t){var r,n,i;if(null!=e&&!!e!==e)return f(e,1,1e9),null==t?t=D:f(t,0,8),G(new j(this),e,t);if(!(r=this.c))return null;if(n=14*(i=r.length-1)+1,i=r[i]){for(;i%10==0;i/=10,n--);for(i=r[0];i>=10;i/=10,n++);}return e&&this.e+1>n&&(n=this.e+1),n},$.shiftedBy=function(e){return f(e,-9007199254740991,9007199254740991),this.times("1e"+e)},$.squareRoot=$.sqrt=function(){var e,t,r,n,i,a=this.c,o=this.s,s=this.e,c=B+4,f=new j("0.5");if(1!==o||!a||!a[0])return new j(!o||o<0&&(!a||a[0])?NaN:a?this:1/0);if(0==(o=Math.sqrt(+V(this)))||o==1/0?(((t=u(a)).length+s)%2==0&&(t+="0"),o=Math.sqrt(+t),s=l((s+1)/2)-(s<0||s%2),r=new j(t=o==1/0?"5e"+s:(t=o.toExponential()).slice(0,t.indexOf("e")+1)+s)):r=new j(o+""),r.c[0]){for((o=(s=r.e)+c)<3&&(o=0);;)if(i=r,r=f.times(i.plus(O(this,i,c,1))),u(i.c).slice(0,o)===(t=u(r.c)).slice(0,o)){if(r.e<s&&--o,"9999"!=(t=t.slice(o-3,o+1))&&(n||"4999"!=t)){+t&&(+t.slice(1)||"5"!=t.charAt(0))||(G(r,r.e+B+2,1),e=!r.times(r).eq(this));break}if(!n&&(G(i,i.e+B+2,0),i.times(i).eq(this))){r=i;break}c+=4,o+=4,n=1}}return G(r,r.e+B+1,D,e)},$.toExponential=function(e,t){return null!=e&&(f(e,0,1e9),e++),R(this,e,t,1)},$.toFixed=function(e,t){return null!=e&&(f(e,0,1e9),e=e+this.e+1),R(this,e,t)},$.toFormat=function(e,t,r){var n;if(null==r)null!=e&&t&&"object"==typeof t?(r=t,t=null):e&&"object"==typeof e?(r=e,e=t=null):r=C;else if("object"!=typeof r)throw Error(a+"Argument not an object: "+r);if(n=this.toFixed(e,t),this.c){var i,o=n.split("."),s=+r.groupSize,l=+r.secondaryGroupSize,u=r.groupSeparator||"",c=o[0],f=o[1],h=this.s<0,p=h?c.slice(1):c,g=p.length;if(l&&(i=s,s=l,l=i,g-=i),s>0&&g>0){for(i=g%s||s,c=p.substr(0,i);i<g;i+=s)c+=u+p.substr(i,s);l>0&&(c+=u+p.slice(i)),h&&(c="-"+c)}n=f?c+(r.decimalSeparator||"")+((l=+r.fractionGroupSize)?f.replace(RegExp("\\d{"+l+"}\\B","g"),"$&"+(r.fractionGroupSeparator||"")):f):c}return(r.prefix||"")+n+(r.suffix||"")},$.toFraction=function(e){var t,r,n,i,o,l,c,f,h,p,g,d,m=this.c;if(null!=e&&(!(c=new j(e)).isInteger()&&(c.c||1!==c.s)||c.lt(S)))throw Error(a+"Argument "+(c.isInteger()?"out of range: ":"not an integer: ")+V(c));if(!m)return new j(this);for(t=new j(S),h=r=new j(S),n=f=new j(S),d=u(m),o=t.e=d.length-this.e-1,t.c[0]=s[(l=o%14)<0?14+l:l],e=!e||c.comparedTo(t)>0?o>0?t:h:c,l=F,F=1/0,c=new j(d),f.c[0]=0;p=O(c,t,0,1),1!=(i=r.plus(p.times(n))).comparedTo(e);)r=n,n=i,h=f.plus(p.times(i=h)),f=i,t=c.minus(p.times(i=t)),c=i;return i=O(e.minus(r),n,0,1),f=f.plus(i.times(h)),r=r.plus(i.times(n)),f.s=h.s=this.s,o*=2,g=1>O(h,n,o,D).minus(this).abs().comparedTo(O(f,r,o,D).minus(this).abs())?[h,n]:[f,r],F=l,g},$.toNumber=function(){return+V(this)},$.toPrecision=function(e,t){return null!=e&&f(e,1,1e9),R(this,e,t,2)},$.toString=function(e){var t,r=this,n=r.s,i=r.e;return null===i?n?(t="Infinity",n<0&&(t="-"+t)):t="NaN":(null==e?t=i<=E||i>=_?p(u(r.c),i):g(u(r.c),i,"0"):10===e&&T?t=g(u((r=G(new j(r),B+i+1,D)).c),r.e,"0"):(f(e,2,P.length,"Base"),t=N(g(u(r.c),i,"0"),10,e,n,!0)),n<0&&r.c[0]&&(t="-"+t)),t},$.valueOf=$.toJSON=function(){return V(this)},$._isBigNumber=!0,null!=t&&j.set(t),j}()).default=t.BigNumber=t,m.exports?m.exports=t:(e||(e="undefined"!=typeof self&&self?self:window),e.BigNumber=t)}(f);var y=m.exports;let b=d(),v=p(),w={trillion:1e12,billion:1e9,million:1e6,thousand:1e3},O={totalLength:0,characteristic:0,forceAverage:!1,average:!1,mantissa:-1,optionalMantissa:!0,thousandSeparated:!1,spaceSeparated:!1,negative:"sign",forceSign:!1,roundingFunction:Math.round,spaceSeparatedAbbreviation:!1},{binarySuffixes:N,decimalSuffixes:x}=b.currentBytes(),$=1024,S=x,B=1024,D=N,E=1e3,_=x;function A(e,t,r){let n=t[0],i=Math.abs(e);if(i>=r){for(let a=1;a<t.length;++a){let o=Math.pow(r,a),s=Math.pow(r,a+1);if(i>=o&&i<s){n=t[a],e/=o;break}}n===t[0]&&(e/=Math.pow(r,t.length-1),n=t[t.length-1])}return{value:e,suffix:n}}function F(e){let t="";for(let r=0;r<e;r++)t+="0";return t}function k({instance:e,providedFormat:t,state:r=b,decimalSeparator:n,defaults:i=r.currentDefaults()}){let a=e._value;if(0===a&&r.hasZeroFormat())return r.getZeroFormat();if(!isFinite(a))return a.toString();let o=Object.assign({},O,i,t),s=o.totalLength,l=s?0:o.characteristic,u=o.optionalCharacteristic,c=o.forceAverage,f=o.lowPrecision,h=!!s||!!c||o.average,p=s?-1:h&&void 0===t.mantissa?0:o.mantissa,g=!s&&(void 0===t.optionalMantissa?-1===p:o.optionalMantissa),d=o.trimMantissa,m=o.thousandSeparated,v=o.spaceSeparated,N=o.negative,x=o.forceSign,$=o.exponential,S=o.roundingFunction,B="";if(h){let e=function({value:e,forceAverage:t,lowPrecision:r=!0,abbreviations:n,spaceSeparated:i=!1,totalLength:a=0,roundingFunction:o=Math.round}){let s="",l=Math.abs(e),u=-1;if(t&&n[t]&&w[t]?(s=n[t],e/=w[t]):l>=w.trillion||r&&1===o(l/w.trillion)?(s=n.trillion,e/=w.trillion):l<w.trillion&&l>=w.billion||r&&1===o(l/w.billion)?(s=n.billion,e/=w.billion):l<w.billion&&l>=w.million||r&&1===o(l/w.million)?(s=n.million,e/=w.million):(l<w.million&&l>=w.thousand||r&&1===o(l/w.thousand))&&(s=n.thousand,e/=w.thousand),s&&(s=(i?" ":"")+s),a){let t=e<0,r=e.toString().split(".")[0];u=Math.max(a-(t?r.length-1:r.length),0)}return{value:e,abbreviation:s,mantissaPrecision:u}}({value:a,forceAverage:c,lowPrecision:f,abbreviations:r.currentAbbreviations(),spaceSeparated:v,roundingFunction:S,totalLength:s});a=e.value,B+=e.abbreviation,s&&(p=e.mantissaPrecision)}if($){let e=function({value:e,characteristicPrecision:t}){let[r,n]=e.toExponential().split("e"),i=+r;return t&&1<t&&(i*=Math.pow(10,t-1),n=(n=+n-(t-1))>=0?`+${n}`:n),{value:i,abbreviation:`e${n}`}}({value:a,characteristicPrecision:l});a=e.value,B=e.abbreviation+B}let D=function(e,t,r,n,i,a){if(-1===n)return e;let o=function(e,t,r=Math.round){return -1!==e.toString().indexOf("e")?function(e,t){let r=e.toString(),[n,i]=r.split("e"),[a,o=""]=n.split(".");if(+i>0)r=a+o+F(i-o.length);else{let e=".";e=0>+a?`-0${e}`:`0${e}`;let n=(F(-i-1)+Math.abs(a)+o).substr(0,t);n.length<t&&(n+=F(t-n.length)),r=e+n}return+i>0&&t>0&&(r+=`.${F(t)}`),r}(e,t):new y(r(+`${e}e+${t}`)/Math.pow(10,t)).toFixed(t)}(t,n,a),[s,l=""]=o.toString().split(".");if(l.match(/^0+$/)&&(r||i))return s;let u=l.match(/0+$/);return i&&u?`${s}.${l.toString().slice(0,u.index)}`:o.toString()}(a.toString(),a,g,p,d,S);if(D=function(e,t,r,n,i){let a=n.currentDelimiters(),o=a.thousands;i=i||a.decimal;let s=a.thousandsSize||3,l=e.toString(),u=l.split(".")[0],c=l.split(".")[1],f=t<0&&0===u.indexOf("-");return r&&(f&&(u=u.slice(1)),(function(e,t){let r=[],n=0;for(let i=e;i>0;i--)n===t&&(r.unshift(i),n=0),n++;return r})(u.length,s).forEach((e,t)=>{u=u.slice(0,e+t)+o+u.slice(e+t)}),f&&(u=`-${u}`)),l=c?u+i+c:u}(D=function(e,t,r,n){let i=e,[a,o]=i.toString().split(".");if(a.match(/^-?0$/)&&r)return o?`${a.replace("0","")}.${o}`:a.replace("0","");let s=t<0&&0===a.indexOf("-");if(s&&(a=a.slice(1),i=i.slice(1)),a.length<n){let e=n-a.length;for(let t=0;t<e;t++)i=`0${i}`}return s&&(i=`-${i}`),i.toString()}(D,a,u,l),a,m,r,n),(h||$)&&(D+=B),x||a<0){var E,_;E=D,D=0===(_=a)?E:0==+E?E.replace("-",""):_>0?`+${E}`:"sign"===N?E:`(${E.replace("-","")})`}return D}function M(e,t){if(!e)return t;let r=Object.keys(e);return 1===r.length&&"output"===r[0]?t:e}function L(e,t,r){let n=new y(e._value),i=t;return r.isNumbro(t)&&(i=t._value),i=new y(i),e._value=n.minus(i).toNumber(),e}let C=d(),P=p(),T=h(),j=(...e)=>(function(e,t={},r){if("string"==typeof t&&(t=g.parseFormat(t)),!v.validateFormat(t))return"ERROR: invalid format";let n=t.prefix||"",i=t.postfix||"",a=function(e,t,r){var n,i;switch(t.output){case"currency":return function(e,t,r){let n;let i=r.currentCurrency(),a=Object.assign({},t),o=Object.assign({},O,a),s="",l=!!o.totalLength||!!o.forceAverage||o.average,u=a.currencyPosition||i.position,c=a.currencySymbol||i.symbol,f=void 0!==o.spaceSeparatedCurrency?o.spaceSeparatedCurrency:o.spaceSeparated;void 0===a.lowPrecision&&(a.lowPrecision=!1),f&&(s=" "),"infix"===u&&(n=s+c+s);let h=k({instance:e,providedFormat:a,state:r,decimalSeparator:n});return"prefix"===u&&(h=e._value<0&&"sign"===o.negative?`-${s}${c}${h.slice(1)}`:e._value>0&&o.forceSign?`+${s}${c}${h.slice(1)}`:c+s+h),u&&"postfix"!==u||(h=h+(s=!o.spaceSeparatedAbbreviation&&l?"":s)+c),h}(e,t=M(t,b.currentCurrencyDefaultFormat()),b);case"percent":let a,o,s;return a=(n=t=M(t,b.currentPercentageDefaultFormat())).prefixSymbol,o=k({instance:r(100*e._value),providedFormat:n,state:b}),s=Object.assign({},O,n),a?`%${s.spaceSeparated?" ":""}${o}`:`${o}${s.spaceSeparated?" ":""}%`;case"byte":return function(e,t,r,n){let i=t.base||"binary",a=Object.assign({},O,t),{binarySuffixes:o,decimalSuffixes:s}=r.currentBytes(),l={general:{scale:1024,suffixes:s||x,marker:"bd"},binary:{scale:1024,suffixes:o||N,marker:"b"},decimal:{scale:1e3,suffixes:s||x,marker:"d"}}[i],{value:u,suffix:c}=A(e._value,l.suffixes,l.scale),f=k({instance:n(u),providedFormat:t,state:r,defaults:r.currentByteDefaultFormat()});return`${f}${a.spaceSeparated?" ":""}${c}`}(e,t=M(t,b.currentByteDefaultFormat()),b,r);case"time":let l,u,c;return t=M(t,b.currentTimeDefaultFormat()),l=Math.floor(e._value/60/60),u=Math.floor((e._value-3600*l)/60),c=Math.round(e._value-3600*l-60*u),`${l}:${u<10?"0":""}${u}:${c<10?"0":""}${c}`;case"ordinal":let f,h,p,g;return i=t=M(t,b.currentOrdinalDefaultFormat()),f=b.currentOrdinal(),h=Object.assign({},O,i),p=k({instance:e,providedFormat:i,state:b}),g=f(e._value),`${p}${h.spaceSeparated?" ":""}${g}`;default:return k({instance:e,providedFormat:t,numbro:r})}}(e,t,r);return(a=n+a)+i})(...e,K),R=(...e)=>(function(e){return A(e._value,S,$).suffix})(...e,K),U=(...e)=>(function(e){return A(e._value,D,B).suffix})(...e,K),I=(...e)=>(function(e){return A(e._value,_,E).suffix})(...e,K),G=(e,t)=>{let r,n;return r=new y(e._value),n=t,K.isNumbro(t)&&(n=t._value),n=new y(n),e._value=r.plus(n).toNumber(),e},V=(e,t)=>L(e,t,K),q=(e,t)=>{let r,n;return r=new y(e._value),n=t,K.isNumbro(t)&&(n=t._value),n=new y(n),e._value=r.times(n).toNumber(),e},Z=(e,t)=>{let r,n;return r=new y(e._value),n=t,K.isNumbro(t)&&(n=t._value),n=new y(n),e._value=r.dividedBy(n).toNumber(),e},z=(e,t)=>{let r;return r=t,K.isNumbro(t)&&(r=t._value),e._value=r,e},W=(e,t)=>{let r;return L(r=K(e._value),t,K),Math.abs(r._value)};class H{constructor(e){this._value=e}clone(){return K(this._value)}format(e={}){return j(this,e)}formatCurrency(e){return"string"==typeof e&&(e=g.parseFormat(e)),(e=M(e,C.currentCurrencyDefaultFormat())).output="currency",j(this,e)}formatTime(e={}){return e.output="time",j(this,e)}binaryByteUnits(){return U(this)}decimalByteUnits(){return I(this)}byteUnits(){return R(this)}difference(e){return W(this,e)}add(e){return G(this,e)}subtract(e){return V(this,e)}multiply(e){return q(this,e)}divide(e){return Z(this,e)}set(e){return z(this,Y(e))}value(){return this._value}valueOf(){return this._value}}function Y(e){let t=e;return K.isNumbro(e)?t=e._value:"string"==typeof e?t=K.unformat(e):isNaN(e)&&(t=NaN),t}function K(e){return new H(Y(e))}K.version="2.5.0",K.isNumbro=function(e){return e instanceof H},K.language=C.currentLanguage,K.registerLanguage=C.registerLanguage,K.setLanguage=C.setLanguage,K.languages=C.languages,K.languageData=C.languageData,K.zeroFormat=C.setZeroFormat,K.defaultFormat=C.currentDefaults,K.setDefaults=C.setDefaults,K.defaultCurrencyFormat=C.currentCurrencyDefaultFormat,K.validate=P.validate,K.loadLanguagesInNode=e=>(function(e,t){e.forEach(e=>{let r;try{r=function(e){throw Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}(`../languages/${e}`)}catch(t){console.error(`Unable to load "${e}". No matching language file found.`)}r&&t.registerLanguage(r)})})(e,K),K.unformat=T.unformat,K.BigNumber=y;var J=K&&K.__esModule&&Object.prototype.hasOwnProperty.call(K,"default")?K.default:K}}]);