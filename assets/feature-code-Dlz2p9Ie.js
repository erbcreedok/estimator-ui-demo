import{j as a}from"./jsx-runtime-Cnbe3ryz.js";import{r as h}from"./index-3dRrDZpt.js";import{T as x}from"./TableCore-Y75h2oha.js";import{T}from"./TableStatusBar-4NxO8OsQ.js";import{T as k}from"./TableToolbar-DTYEmPN-.js";import{T as j}from"./places-Dp9r7e0L.js";import{a as B,m as E}from"./employees-CL5oqWiT.js";import{d as w,S as v,r as O,t as p}from"./scene-kit-BsKxVgS1.js";import{a as R}from"./table-core-base-DFRq_Vzl.js";const M=["High","Medium","Low"],P=e=>E(e).map((t,o)=>{const n=Number(t.start.slice(5,7));return{...t,period:`Q${Math.ceil(n/3)} ${t.start.slice(0,4)}`,priority:M[o*2%3],rank:o*7%e+1}}),ne={ok:"Included",blocked:"Blocked",excluded:"Excluded"},se=["blocked","ok","excluded"],A={name:"Name",team:"Team",role:"Role",level:"Level",status:"Status",country:"Country",rate:"Rate",start:"Start",period:"Period",priority:"Priority",colour:"Colour",rank:"Rank",city:"City",email:"Email",end:"End",workload:"Workload"},_=e=>A[e]??e,u=(e,t)=>B(e,_(e),t),ae=()=>[u("name",190),u("team",120),u("role",150),u("level",90),u("country",120)],{useArgs:F}=__STORYBOOK_MODULE_PREVIEW_API__,re={columnMenu:!1,toolbar:!1,statusBar:!1,columnHideFrom:{}},le=e=>({columnMenu:{name:"columnMenu",description:"On: the default column menu (a header click opens it). Off: `columnMenu={false}`.",control:"boolean",table:{category:"places"}},toolbar:{name:"toolbar",description:`\`${e}\` (the default controls are Group, Sort and Columns).`,control:"boolean",table:{category:"places"}},statusBar:{name:"statusBar",description:"`statusBar={(table) => <TableStatusBar table={table} />}`: the chips and their *Clear all*.",control:"boolean",table:{category:"places"}},columnHideFrom:{name:"column meta.hideFrom",description:`Places each column is left out of: \`{ country: ['toolbar.sorting'] }\`. A parent covers its children, \`all\` = everywhere. Places: ${j.map(t=>`\`${t}\``).join(", ")}.`,control:"object",table:{category:"columns"}}}),ce=e=>t=>({include:t.map(o=>{var n;return((n=e[o])==null?void 0:n.name)??o})}),f=(e,t)=>JSON.stringify(e)===JSON.stringify(t),L=({presets:e,value:t,onChange:o})=>a.jsx("div",{"data-outside":!0,style:{display:"flex",gap:8,flexWrap:"wrap"},children:e.map(([n,s])=>a.jsx("button",{type:"button","aria-pressed":f(t,s),onClick:()=>o(s),style:{padding:"4px 12px",borderRadius:4,border:"1px solid #C9CCD8",background:f(t,s)?"#EAF6FC":"#fff",fontWeight:f(t,s)?600:400,cursor:"pointer"},children:n},n))}),N=e=>a.jsx(T,{table:e}),I=({spec:e,args:t,params:o,updateArgs:n})=>a.jsxs(a.Fragment,{children:[O(o.hint,t,n),a.jsx(e.Now,{args:t})]}),D=e=>{const{spec:t,args:o,params:n,updateArgs:s}=e,[l]=h.useState(()=>P(30)),c=t.columnsKey(n.set,o),d=h.useMemo(()=>t.columns(n.set,o),[c]),i=t.sliceOf(o),b=r=>{const $=R(r,i);t.report(o,$),s(t.withSlice($))},S=r=>a.jsx(k,{table:r,controls:t.controls});return a.jsx(v,{hint:a.jsx(I,{...e}),children:a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8,height:"100%"},children:[n.outside==="buttons"&&a.jsx(L,{presets:t.outside,value:i,onChange:r=>s(t.withSlice(r))}),a.jsx("div",{style:{flex:1,minHeight:0},children:a.jsx(x,{data:l,columns:d,getRowId:r=>r.id,columnMenu:o.columnMenu?void 0:!1,initialState:{columnPinning:{left:["name"],right:[]},columnVisibility:{rank:!1}},toolbar:o.toolbar?S:void 0,statusBar:o.statusBar?N:void 0,...t.tableProps(o,n.owner==="screen"?b:void 0)},c)})]})})},ie=e=>function(o,{parameters:n}){const[,s]=F();return a.jsx(D,{spec:e,args:e.argsOf(o),params:n,updateArgs:s})},ue=e=>t=>({...e,...Object.fromEntries(Object.entries(t).filter(([,o])=>o!==void 0))}),me=(e,t)=>({layout:"fullscreen",sceneCode:e,docs:{codePanel:!0,story:{inline:!1,height:"520px"},source:w(e),description:{component:t}}}),y=(e,t)=>({code:e,note:t}),g=({code:e,note:t})=>`${e},${t?` // ${t}`:""}`,H=e=>{if(!e.length)return[];const[t]=e;return e.length===1&&!t.code.includes(`
`)?[y(`meta: coreMeta({ ${t.code} })`,t.note)]:[y(`meta: coreMeta({
${e.map(o=>`      ${g(o)}`).join(`
`)}
    })`)]},U=e=>{const t=[...e.fields,...H(e.meta)],o=`{ ${t.map(s=>s.code).join(", ")} }`;return!e.note&&t.every(s=>!s.note)&&o.length<=68?`  ${o},`:`${e.note?`  // ${e.note}
`:""}  {
${t.map(s=>`    ${g(s)}`).join(`
`)}
  },`},pe=(e,{hideFrom:t,off:o})=>({...e,fields:o?[...e.fields,o]:e.fields,meta:t?[...e.meta.filter(n=>!n.code.startsWith("hideFrom")),y(`hideFrom: ${p(t)}`)]:e.meta}),de=(e,t)=>`${e.length?`${e.join(`

`)}

`:""}const columns: ColumnDef<Employee>[] = [
${t.map(U).join(`
`)}
]`,m=e=>`${e[0].toUpperCase()}${e.slice(1)}`,C=e=>e.replace(/[A-Z]/g,t=>`_${t}`).toUpperCase(),J=({slice:e,params:t})=>t.owner==="constant"?`// A constant: no on${m(e.key)}Change, so only the code changes it.
      state={{ ${e.key}: ${C(e.key)} }}`:`state={{ ${e.key} }}
      on${m(e.key)}Change={set${m(e.key)}}`,W=e=>[...e.switches,!e.args.columnMenu&&`// No column menu (it is on by default).
      columnMenu={false}`,J(e),...e.extra??[],e.args.toolbar&&`// ${e.toolbar.note}
      toolbar={(table) => <TableToolbar table={table} controls={${e.toolbar.controls}} />}`,e.args.statusBar&&"statusBar={(table) => <TableStatusBar table={table} />}"].filter(Boolean).map(t=>`      ${t}`).join(`
`),K=({slice:e,outside:t})=>`// The screen's own buttons: each one only sets state.${e.key}.
const PRESETS: [string, ${e.type}][] = ${p(t)}

const Buttons = ({ value, onChange }) => (
  <div style={{ display: 'flex', gap: 8 }}>
    {PRESETS.map(([label, preset]) => (
      <button
        key={label}
        aria-pressed={JSON.stringify(value) === JSON.stringify(preset)}
        onClick={() => onChange(preset)}
      >
        {label}
      </button>
    ))}
  </div>
)`,G=({slice:e,params:t})=>t.owner==="constant"?"":`  // ${e.note}
  const [${e.key}, set${m(e.key)}] = useState<${e.type}>(${p(e.value,"  ")})

`,V=({args:e,params:t,columns:o,slice:n,toolbar:s,imports:l})=>{const c=["TableCore",e.toolbar&&"TableToolbar",...e.toolbar?s.imports:[],e.statusBar&&"TableStatusBar",o.includes("coreMeta(")&&"coreMeta",...l??[]].filter(Boolean),d=["ColumnDef",o.includes("Row<")&&"Row",n.type],i=`import { ${c.join(", ")} } from '@pnl-simulation/table-core'`;return`${t.owner==="screen"?`import { useState } from 'react'
`:""}import type { ${d.filter(Boolean).join(", ")} } from '@tanstack/react-table'
${i.length<=80?i:`import {
${c.map(b=>`  ${b},`).join(`
`)}
} from '@pnl-simulation/table-core'`}`},be=e=>{const{slice:t,params:o}=e,n=`<TableCore
      data={employees}
      columns={columns}
      getRowId={(e) => e.id}
${W(e)}
    />`,s=o.outside==="buttons"?`<>
      <Buttons value={${t.key}} onChange={set${m(t.key)}} />
      ${n.replace(/\n/g,`
  `)}
    </>`:n,l=o.owner==="constant"?`
const ${C(t.key)}: ${t.type} = ${p(t.value)}
`:"";return`${V(e)}

${e.columns}
${l}${o.outside==="buttons"?`
${K(e)}
`:""}
export const EmployeesTable = ({ employees }: { employees: Employee[] }) => {
${G(e)}  return (
    ${s}
  )
}`};export{re as C,M as P,ne as S,ce as a,de as b,le as c,pe as d,y as e,be as f,me as g,ae as h,se as i,_ as l,u as p,ie as r,ue as w};
