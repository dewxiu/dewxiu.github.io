import{e as $,r as j,q as t,c as C,l as e,j as c,E as n,w as y,o as s,m as l,F as q,i as D,ay as b,v as p,_ as O}from"./index-d867314b.js";import{useRole as A}from"./hook-1bb4ed18.js";import{P as G}from"./index-d057dcf1.js";import{a as _}from"./hooks-c4b7ffa2.js";import{d as k}from"./promotion-459adb17.js";import{d as J}from"./search-cc37b371.js";import"./addModel.vue_vue_type_script_setup_true_lang-e1673780.js";import"./common-4e701550.js";import"./common-9825d308.js";import"./orgList-c6f5db47.js";const Q=$({__name:"index",setup(W){const{tableRef:x,formData:a,orgOptions:v,loading:V,columns:f,dataList:w,pagination:R,maxHeight:d,onSearch:i,onRowClick:S,onMoveHandle:P,onBatchMoveHandle:B,handleSizeChange:I,handleCurrentChange:K,handleSelectionChange:N}=A(),z=j(),H=g=>{a.orgId=g,i()};return(g,r)=>{const U=t("el-option"),E=t("el-select"),u=t("el-form-item"),h=t("el-input"),m=t("el-button"),F=t("el-form"),L=t("pure-table");return s(),C("div",{class:"main ui-h-100",ref_key:"boxRef",ref:z},[e(f).length?(s(),c(e(G),{key:0,title:"列表",columns:e(f),onRefresh:e(i)},{title:n(()=>[l(F,{model:e(a),inline:!0},{default:n(()=>[l(u,{label:"组织名称"},{default:n(()=>[l(E,{modelValue:e(a).orgId,"onUpdate:modelValue":r[0]||(r[0]=o=>e(a).orgId=o),placeholder:"请选择",onChange:H,style:{width:"160px"}},{default:n(()=>[(s(!0),C(q,null,D(e(v),o=>(s(),c(U,{key:o.value,label:o.label,value:o.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(u,{label:"工号"},{default:n(()=>[l(h,{modelValue:e(a).userCode,"onUpdate:modelValue":r[1]||(r[1]=o=>e(a).userCode=o),placeholder:"请输入工号",style:{width:"140px"},onKeyup:b(e(i),["enter"]),clearable:""},null,8,["modelValue","onKeyup"])]),_:1}),l(u,{label:"员工姓名"},{default:n(()=>[l(h,{modelValue:e(a).userName,"onUpdate:modelValue":r[2]||(r[2]=o=>e(a).userName=o),placeholder:"请输入员工姓名",style:{width:"140px"},onKeyup:b(e(i),["enter"]),clearable:""},null,8,["modelValue","onKeyup"])]),_:1}),l(u,null,{default:n(()=>[l(m,{type:"primary",icon:e(_)(e(J)),onClick:e(i)},{default:n(()=>[p("查询")]),_:1},8,["icon","onClick"])]),_:1})]),_:1},8,["model"])]),buttons:n(()=>[l(m,{type:"primary",icon:e(_)(e(k)),onClick:e(B)},{default:n(()=>[p("批量迁移")]),_:1},8,["icon","onClick"])]),default:n(({size:o,dynamicColumns:M})=>[e(d)?(s(),c(L,{key:0,ref_key:"tableRef",ref:x,class:"user-move",border:"","row-key":"id",height:e(d),"max-height":e(d),"align-whole":"center","table-layout":"auto",loading:e(V),size:o,data:e(w),columns:M,pagination:e(R),paginationSmall:o==="small",onRowClick:e(S),onSelectionChange:e(N),onPageSizeChange:e(I),onPageCurrentChange:e(K)},{operation:n(({row:T})=>[l(m,{link:"",type:"primary",size:o,onClick:X=>e(P)(T),icon:e(_)(e(k))},{default:n(()=>[p("迁移")]),_:2},1032,["size","onClick","icon"])]),_:2},1032,["height","max-height","loading","size","data","columns","pagination","paginationSmall","onRowClick","onSelectionChange","onPageSizeChange","onPageCurrentChange"])):y("",!0)]),_:1},8,["columns","onRefresh"])):y("",!0)],512)}}});const se=O(Q,[["__scopeId","data-v-efd81710"]]);export{se as default};