import{r,j as e,i}from"../chunks/chunk-fiAFzGuX.js";import{a as n}from"../chunks/chunk-ND7wiaMS.js";import"../chunks/chunk-JBaTIRHM.js";const o=()=>{const[a,t]=r.useState([]);return r.useEffect(()=>{(async()=>{const s=await n()??[];t(s)})()},[]),a};function d(){const a=o();return e.jsx(e.Fragment,{children:e.jsx("section",{children:e.jsx("div",{style:{minWidth:"100% !important"},className:"prose",children:a?a.map(t=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"card card-side bg-base-100 shadow-xl my-5",children:[e.jsx("figure",{children:e.jsx("img",{src:t.thumbnail,alt:"Movie"})}),e.jsxs("div",{className:"card-body max-w-1/2",children:[e.jsx("h2",{className:"card-title",children:t.title}),e.jsx("p",{className:"",children:t.description}),e.jsx("div",{className:"card-actions justify-end",children:e.jsx("a",{href:`/blog/${t.title}`,className:"btn btn-primary",children:"Read more ->"})})]})]})})):e.jsx("div",{children:"NO DATA"})})})})}const l=Object.freeze(Object.defineProperty({__proto__:null,Page:d},Symbol.toStringTag,{value:"Module"})),p=[{configName:"onRenderClient",importPath:"/renderer/+onRenderClient.tsx",isValueFile:!0,exportValues:i},{configName:"Page",importPath:"/pages/blogs/+Page.tsx",isValueFile:!0,exportValues:l}],x={onBeforeRenderEnv:{definedAt:{isComputed:!0},valueSerialized:"null"},dataEnv:{definedAt:{isComputed:!0},valueSerialized:"null"},hydrationCanBeAborted:{definedAt:{filePathToShowToUser:"/renderer/+config.h.ts",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:"true"}};export{p as configValuesImported,x as configValuesSerialized};