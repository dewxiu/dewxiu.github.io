import{e as h,U as F,r as v,B as O,a4 as R,ap as S,m as o,q as l,I as T,ao as d,Q as E,aC as N,_ as k}from"./index-d867314b.js";function m(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!N(e)}const D={loading:{type:Boolean,default:!1},formInline:{type:Object,default:()=>({})},formConfigs:{type:Array,default:()=>[]},formRules:{type:Object,default:()=>({})},formProps:{type:Object,default:()=>({})},buttonColProp:{type:Object,default:{span:24}},showButtons:{type:Boolean,default:!1},formItemGutter:{type:Number,default:20},submitText:{type:[String,Boolean],default:"提交"},resetText:{type:[String,Boolean],default:"重置"}},G=h({props:D,emits:["submit","reset"],setup(e,{emit:c,expose:x,attrs:L,slots:M}){const u=F({loading:!1,uiLoading:!1}),n=v(),a=v(e.formInline);O(e,t=>a.value=t.formInline,{deep:!0});const p=()=>{n.value.validate(t=>{t&&!u.loading&&c("submit",a.value)})},b=()=>{n.value.resetFields(),c("reset"),_()},_=(t=!1)=>{u.loading=!!t};function C(){return n.value}x({getRef:C,setLoading:_,onResetForm:b});const{showButtons:w,submitText:s,resetText:r}=e;return()=>R(o(l("el-form"),d({ref:n,model:a.value,rules:e.formRules,class:"dialog-form",onSubmit:E(p,["stop","prevent"])},e.formProps),{default:()=>[o(l("el-row"),{gutter:e.formItemGutter},{default:()=>[e.formConfigs.map((t,I)=>{const{render:f,colProp:P,hide:j,slots:g,...B}=t,y=typeof f=="function"?f({formModel:a.value,row:t,index:I}):f,i=g?{...T(g),default:()=>y}:y;return j?null:o(l("el-col"),d({span:24},P),{default:()=>[o(l("el-form-item"),B,m(i)?i:{default:()=>[i]})]})}),o(l("el-col"),d({span:24},e.buttonColProp),{default:()=>[w?o(l("el-form-item"),{class:e.buttonColProp.span===24?"dialog-btns":""},{default:()=>[typeof s=="boolean"?null:o(l("el-button"),{type:"primary",loading:u.loading,onClick:p},m(s)?s:{default:()=>[s]}),typeof r=="boolean"?null:o(l("el-button"),{onClick:b},m(r)?r:{default:()=>[r]})]}):null]})]})]}),[[S("loading"),e.loading]])}});const q=k(G,[["__scopeId","data-v-b4116324"]]);export{q as E};