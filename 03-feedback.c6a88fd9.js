function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return l.Date.now()};function g(e,t,n){var o,r,i,a,u,f,c=0,l=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,i=r;return o=r=void 0,c=t,a=e.apply(i,n)}function S(e){return c=e,u=setTimeout(j,t),l?b(e):a}function T(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=i}function j(){var e=v();if(T(e))return O(e);u=setTimeout(j,function(e){var n=t-(e-f);return s?m(n,i-(e-c)):n}(e))}function O(e){return u=void 0,g&&o?b(e):(o=r=void 0,a)}function h(){var e=v(),n=T(e);if(o=arguments,r=this,f=e,n){if(void 0===u)return S(f);if(s)return u=setTimeout(j,t),b(f)}return void 0===u&&(u=setTimeout(j,t)),a}return t=y(t)||0,p(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(y(n.maxWait)||0,t):i,g="trailing"in n?!!n.trailing:g),h.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=f=r=u=void 0},h.flush=function(){return void 0===u?a:O(v())},h}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),g(e,t,{leading:o,maxWait:t,trailing:r})};const b=document.querySelector(".feedback-form"),S=document.querySelector("input"),T=document.querySelector("textarea"),j={};b.addEventListener("input",e(t)((function({target:e}){j[e.name]=e.value;const t=JSON.stringify(j);localStorage.setItem("feedback-form-state",t)}),500)),b.addEventListener("submit",(function(e){e.preventDefault();const{elements:{email:t,message:n}}=e.currentTarget;if(""==t.value||""==n.value)return alert("Все поля должны быть заполнены!");const o={email:t.value,message:n.value};console.log(o),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")}));const O=localStorage.getItem("feedback-form-state"),h=JSON.parse(JSON.stringify(O));O&&(console.log(h.email||""),console.log(h.message||""),S.value=h.email||"",T.value=h.message||"");
//# sourceMappingURL=03-feedback.c6a88fd9.js.map
