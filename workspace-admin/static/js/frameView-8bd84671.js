import{e as u,r,O as v,l as a,h as p,ap as h,a4 as g,o as x,c as w,b as V,J as k,_ as R}from"./index-d867314b.js";const y={class:"frame","element-loading-text":"加载中..."},B=["src"],E=u({name:"FrameView",__name:"frameView",setup(S){var f,_,l;const o=r(!0),t=v(),c=r(""),i=r(null);(f=a(t.meta))!=null&&f.frameSrc&&(c.value=(_=a(t.meta))==null?void 0:_.frameSrc),((l=a(t.meta))==null?void 0:l.frameLoading)===!1&&n();function n(){o.value=!1}function m(){k(()=>{const e=a(i);if(!e)return;const s=e;s.attachEvent?s.attachEvent("onload",()=>{n()}):e.onload=()=>{n()}})}return p(()=>{m()}),(e,s)=>{const d=h("loading");return g((x(),w("div",y,[V("iframe",{src:c.value,class:"frame-iframe",ref_key:"frameRef",ref:i},null,8,B)])),[[d,o.value]])}}});const L=R(E,[["__scopeId","data-v-d038a369"]]);export{L as default};