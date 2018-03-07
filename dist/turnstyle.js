!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n(e.turnstyle={})}(this,function(e){"use strict";var n="-webkit-",r="-moz-",t="-ms-",i={"flex-start":"start","flex-end":"end","space-between":"justify","space-around":"distribute"},o={"horizontal-tb":"lr-tb","vertical-lr":"tb-lr","vertical-rl":"tb-rl"},a={"max-height":1,"max-width":1,width:1,height:1,"min-width":1,"min-height":1},s={"min-content":1,"max-content":1,"fill-available":1,"fit-content":1,"contain-floats":1},u=function(e,r){return[[n+e,r],[e,r]]},f=function(e,r){return[[e,n+r],[e,r]]},l=function(e,i){return[[n+e,i],[r+e,i],[t+e,i],[e,i]]},c=function(e,r){return[[n+e,r],[t+e,r],[e,r]]},p=function(e,r){return[[n+e.replace("border","box-image"),r],[e,r]]},d=function(e,r){var i="inline-flex"===r?"inline-":"";return[[e,n+i+"box"],[e,t+i+"flexbox"],[e,r]]},h={"align-content":function(e,n){return[[t+"flex-line-pack",i[n]||n],[e,n]]},"align-items":function(e,r){return[[n+"box-align",i[r]||r],[t+"flex-align",i[r]||r],[e,r]]},"align-self":function(e,n){return[[t+"flex-item-align",i[n]||n],"flex-start"!==n&&"flex-end"!==n&&"baseline"!==n&&[t+"grid-row-align",i[n]||n],[e,n]].filter(function(e){return e})},appearance:function(e,t){return[[n+e,t],[r+e,t],[e,t]]},cursor:{"zoom-in":f,"zoom-out":f,grab:f,grabbing:f},display:{flex:d,"inline-flex":d},flex:function(e,r){var i=(""+r).split(" "),o="none"===i[0]?0:"auto"===i[0]?1:i[0],a=3===i.length&&"0"===i[2]?r+"px":r;return[[n+"box-"+e,o],[t+e,a],[e,r]]},"flex-basis":function(e,n){return[[t+"flex-preferred-size",n],[e,n]]},"flex-direction":function(e,r){return[[n+"box-orient",r.indexOf("row")>-1?"horizontal":"vertical"],[n+"box-direction",r.indexOf("reverse")>-1?"reverse":"normal"],[t+e,r],[e,r]]},"flex-flow":function(e,r){var i=(r+"").split(" ")[0]||"";return[[n+"box-orient",i.indexOf("row")>-1?"horizontal":"vertical"],[n+"box-direction",i.indexOf("reverse")>-1?"reverse":"normal"],[t+e,r],[e,r]]},"flex-grow":function(e,r){return[[n+"box-flex",r],[t+"flex-positive",r],[e,r]]},"flex-shrink":function(e,n){return[[t+"flex-negative",n],[e,n]]},"justify-content":function(e,r){return["space-around"!==r&&[n+"box-pack",i[r]||r],[t+"flex-pack",i[r]||r],[e,r]].filter(function(e){return e})},"tab-size":function(e,n){return[[r+e,n],[e,n]]},hyphens:c,"flex-wrap":function(e,n){return[[t+e,n],[e,n]]},"flow-into":c,"flow-from":c,"box-decoration-break":u,"break-before":c,"break-after":c,"break-inside":c,"clip-path":u,"region-fragment":c,"scroll-snap-type":c,"scroll-snap-coordinate":c,"scroll-snap-destination":c,"scroll-snap-points-x":c,"scroll-snap-points-y":c,"font-feature-settings":u,"mask-border-source":p,"mask-border-mode":p,"mask-border-slice":p,"mask-border-width":p,"mask-border-outset":p,"mask-border-repeat":p,"mask-border":p,order:function(e,r){var i=/[0-9]/.test(r)?(+r||0)+1:r;return[[n+"box-ordinal-group",i],[t+"flex-order",r],[e,r]]},"backface-visibility":u,perspective:u,"perspective-origin":u,position:{sticky:f},"text-orientation":u,"backdrop-filter":u,"font-kerning":u,filter:u,"shape-image-threshold":u,"shape-margin":u,"shape-outside":u,"text-size-adjust":l,"user-select":l,"writing-mode":function(e,r){return[[n+e,r],[t+e,o[r]||r],[e,r]]},"&:fullscreen":function(e,n){return[["&:-webkit-full-screen",n],["&:-moz-full-screen",n],["&:-ms-fullscreen",n],[e,n]]},"&::placeholder":function(e,n){return[["&::-webkit-input-placeholder",n],["&:-ms-input-placeholder",n],["&::-ms-input-placeholder",n],[e,n]]}},b=Object.prototype.hasOwnProperty.bind(h),x={},g=function(e,t){var i=e+t;if(x[i])return x[i];var o=void 0;if(b(e))"function"==typeof h[e]?o=h[e](e,t):"object"==typeof h[e]&&"function"==typeof h[e][t]&&(o=h[e][t](e,t));else if(/^(transform|animation|column|text-emphasis|text-decoration-|mask|wrap-)/.test(e))o=u(e,t);else if(/^cross-fade/.test(t)){var f=(t.match(/\(([\d]+%)/)||[])[1]||"",l=t.replace("cross-fade","-webkit-cross-fade");f?l=l.replace(f+" ",""):f="0.5";var c=l.lastIndexOf(")");c>-1&&(l=l.substring(0,c)+", "+f+")"),o=[[e,l],[e,t]]}else(""+t).indexOf("image-set")>-1?o=[[e,t.replace("image-set",n+"image-set")],[e,t]]:a[e]&&s[t]&&(o=[[e,n+t],[e,r+t],[e,t]]);return o=x[i]=o||[[e,t]]},m=function(e,n,r){for(var t=[],i=0;i<r.length;i++)for(var o=g(r[i][0],r[i][1]),a=0;a<o.length;a++)t.push(o[a][0]+":"+o[a][1]+";");var s=n?function(e){for(var n=[],r=0;r<e.length;r++)"{"===e[r]&&n.push("}");return n.join("")}(n):"";return(n||e)+"{"+t.join("")+"}"+s},v=function(e,n,r){var t=r.indexOf("&")>-1,i="@"===r[0];return t?n||i?n+r.replace(/^&/,"").replace(/&/g,e):r.replace(/&/g,e):i?n?"@"===n[0]?n.substr(0,n.length-e.length-1)+"{"+r+"{"+e:r+"{"+n:r+"{"+e:n?(n?n+" ":"")+r:e+" "+r},k=function(e,n){for(var r=[],t={"":[]},i=[""],o=n.split(""),a=o.length,s=void 0,u=void 0,f="",l=[],c=0,p=0,d=0,h=0,b=[],x=0,g=-1,k=0;k<a;k++)if(u=s,s=o[k],!(c&&"\n"!==s||p&&"/"!==s))if(d&&"'"!==s||h&&'"'!==s)b.push(s);else switch(s){case"/":if(p){"*"===u&&(p=0);break}var y=o[k+1];"/"===y?c=1:"*"===y&&(p=1);break;case"\n":c=0;break;case";":var w=b.join("");if(g<0)r.push(w.trim()+";");else{var j=w.substring(0,g).trim(),z=w.substring(g+1).trim();t[f].push([j,z])}b=[],x=0,g=-1;break;case"{":l.push(f),t[f=x?b.join("").split(",").map(function(n){return v(e,f,n.trim())}).join(","):v(e,f,b.join("").trim())]||(t[f]=[],i.push(f)),b=[],x=0,g=-1;break;case"}":f=l.pop();break;case",":x=1,b.push(s);break;case":":g<0&&(g=b.length),b.push(s);break;case"'":d=!d,b.push(s);break;case'"':h=!h,b.push(s);break;case" ":if(" "===u)break;default:b.push(s)}for(var O=0;O<i.length;O++)t[i[O]].length>0&&r.push(m(e,i[O],t[i[O]]));return r},y={},w=[],j=function(){return"cls_"+w.length.toString(36)},z=function(e){return w.push(e)};if("undefined"!=typeof document){var O=document.head.appendChild(document.createElement("style")).sheet;z=function(e){w.push(e),O.insertRule(e,O.cssRules.length)}}var _=function(){return""},A=function(e,n,r){var t=function(t,i){for(var o=[],a=0;a<e.length;a++)o.push(e[a]),a<n.length&&("function"==typeof n[a]?o.push(n[a](t,i)):o.push(n[a]));var s=o.join("");if(!s)return"";if(r){for(var u=k("",s),f=0;f<u.length;f++)z(u[f]);return""}var l=y[s];if(l)return l;var c=j();!function(e,n){y[e]=n}(s,c);for(var p=k("."+c,s),d=0;d<p.length;d++)z(p[d]);return c};if(n.length&&n.some(function(e){return"function"==typeof e}))return t;var i=t();return function(){return i}};e.rule=function(e){for(var n=arguments.length,r=Array(n>1?n-1:0),t=1;t<n;t++)r[t-1]=arguments[t];return e?A(e,r):_},e.global=function(e){for(var n=arguments.length,r=Array(n>1?n-1:0),t=1;t<n;t++)r[t-1]=arguments[t];return e?A(e,r,!0):_},e.reset=function(){w=[],y={}},e.css=function(){return w.sort().join("\n")},Object.defineProperty(e,"__esModule",{value:!0})});
