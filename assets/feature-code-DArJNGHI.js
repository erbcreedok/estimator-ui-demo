import{T as x,j as a}from"./styles-DXLXEQ3H.js";import{r as y}from"./index-BjhrbhTf.js";import{T as C,a as S}from"./TableCore-kOYdxPhk.js";import{T as E}from"./TableStatusBar-BHCIeSi2.js";import{T as D}from"./TableToolbar-C0bTLKMD.js";import{a as v,m as T}from"./employees-DtM5_3-O.js";import{d as j,S as B,r as w,t as p}from"./scene-kit-DXifMYYP.js";const O=["High","Medium","Low"],R=e=>T(e).map((t,s)=>{const o=Number(t.start.slice(5,7));return{...t,period:`Q${Math.ceil(o/3)} ${t.start.slice(0,4)}`,priority:O[s*2%3],rank:s*7%e+1}}),te={ok:"Included",blocked:"Blocked",excluded:"Excluded"},se=["blocked","ok","excluded"],U={name:"Name",team:"Team",role:"Role",level:"Level",status:"Status",country:"Country",rate:"Rate",start:"Start",period:"Period",priority:"Priority",colour:"Colour",rank:"Rank"},M=e=>U[e]??e,i=(e,t)=>v(e,M(e),t),oe=()=>[i("name",190),i("team",120),i("role",150),i("level",90),i("country",120)],{useArgs:P}=__STORYBOOK_MODULE_PREVIEW_API__,ne={columnMenu:!1,toolbar:!1,statusBar:!1,columnHideFrom:{}},ae=e=>({columnMenu:{name:"columnMenu",description:"On: the default column menu (a header click opens it). Off: `columnMenu={false}`.",control:"boolean",table:{category:"places"}},toolbar:{name:"toolbar",description:`\`${e}\` (the default controls are Group, Sort and Columns).`,control:"boolean",table:{category:"places"}},statusBar:{name:"statusBar",description:"`statusBar={(table) => <TableStatusBar table={table} />}`: the chips and their *Clear all*.",control:"boolean",table:{category:"places"}},columnHideFrom:{name:"column meta.hideFrom",description:`Places each column is left out of: \`{ country: ['toolbar.sorting'] }\`. A parent covers its children, \`all\` = everywhere. Places: ${x.map(t=>`\`${t}\``).join(", ")}.`,control:"object",table:{category:"columns"}}}),re=e=>t=>({include:t.map(s=>{var o;return((o=e[s])==null?void 0:o.name)??s})}),d=(e,t)=>JSON.stringify(e)===JSON.stringify(t),A=({presets:e,value:t,onChange:s})=>a.jsxDEV("div",{"data-outside":!0,style:{display:"flex",gap:8,flexWrap:"wrap"},children:e.map(([o,n])=>a.jsxDEV("button",{type:"button","aria-pressed":d(t,n),onClick:()=>s(n),style:{padding:"4px 12px",borderRadius:4,border:"1px solid #C9CCD8",background:d(t,n)?"#EAF6FC":"#fff",fontWeight:d(t,n)?600:400,cursor:"pointer"},children:o},o,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/feature-scene.tsx",lineNumber:149,columnNumber:4},void 0))},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/feature-scene.tsx",lineNumber:147,columnNumber:2},void 0),V=e=>a.jsxDEV(E,{table:e},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/feature-scene.tsx",lineNumber:170,columnNumber:2},void 0),_=({spec:e,args:t,params:s,updateArgs:o})=>a.jsxDEV(a.Fragment,{children:[w(s.hint,t,o),a.jsxDEV(e.Now,{args:t},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/feature-scene.tsx",lineNumber:188,columnNumber:3},void 0)]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/feature-scene.tsx",lineNumber:186,columnNumber:2},void 0),F=e=>{const{spec:t,args:s,params:o,updateArgs:n}=e,[l]=y.useState(()=>R(30)),u=t.columnsKey(o.set,s),m=y.useMemo(()=>t.columns(o.set,s),[u]),b=t.sliceOf(s),h=r=>{const g=S(r,b);t.report(s,g),n(t.withSlice(g))},N=r=>a.jsxDEV(D,{table:r,controls:t.controls},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/feature-scene.tsx",lineNumber:208,columnNumber:3},void 0);return a.jsxDEV(B,{hint:a.jsxDEV(_,{...e},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/feature-scene.tsx",lineNumber:212,columnNumber:21},void 0),children:a.jsxDEV("div",{style:{display:"flex",flexDirection:"column",gap:8,height:"100%"},children:[o.outside==="buttons"&&a.jsxDEV(A,{presets:t.outside,value:b,onChange:r=>n(t.withSlice(r))},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/feature-scene.tsx",lineNumber:222,columnNumber:6},void 0),a.jsxDEV("div",{style:{flex:1,minHeight:0},children:a.jsxDEV(C,{data:l,columns:m,getRowId:r=>r.id,columnMenu:s.columnMenu?void 0:!1,initialState:{columnPinning:{left:["name"],right:[]},columnVisibility:{rank:!1}},toolbar:s.toolbar?N:void 0,statusBar:s.statusBar?V:void 0,...t.tableProps(s,o.owner==="screen"?h:void 0)},u,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/feature-scene.tsx",lineNumber:229,columnNumber:6},void 0)},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/feature-scene.tsx",lineNumber:228,columnNumber:5},void 0)]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/feature-scene.tsx",lineNumber:213,columnNumber:4},void 0)},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/feature-scene.tsx",lineNumber:212,columnNumber:3},void 0)},le=e=>function(s,{parameters:o}){const[,n]=P();return a.jsxDEV(F,{spec:e,args:e.argsOf(s),params:o,updateArgs:n},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/feature-scene.tsx",lineNumber:266,columnNumber:4},this)},ie=e=>t=>({...e,...Object.fromEntries(Object.entries(t).filter(([,s])=>s!==void 0))}),ce=(e,t)=>({layout:"fullscreen",sceneCode:e,docs:{codePanel:!0,story:{inline:!1,height:"520px"},source:j(e),description:{component:t}}}),f=(e,t)=>({code:e,note:t}),k=({code:e,note:t})=>`${e},${t?` // ${t}`:""}`,L=e=>{if(!e.length)return[];const[t]=e;return e.length===1&&!t.code.includes(`
`)?[f(`meta: coreMeta({ ${t.code} })`,t.note)]:[f(`meta: coreMeta({
${e.map(s=>`      ${k(s)}`).join(`
`)}
    })`)]},I=e=>{const t=[...e.fields,...L(e.meta)],s=`{ ${t.map(n=>n.code).join(", ")} }`;return!e.note&&t.every(n=>!n.note)&&s.length<=68?`  ${s},`:`${e.note?`  // ${e.note}
`:""}  {
${t.map(n=>`    ${k(n)}`).join(`
`)}
  },`},ue=(e,{hideFrom:t,off:s})=>({...e,fields:s?[...e.fields,s]:e.fields,meta:t?[...e.meta.filter(o=>!o.code.startsWith("hideFrom")),f(`hideFrom: ${p(t)}`)]:e.meta}),me=(e,t)=>`${e.length?`${e.join(`

`)}

`:""}const columns: ColumnDef<Employee>[] = [
${t.map(I).join(`
`)}
]`,c=e=>`${e[0].toUpperCase()}${e.slice(1)}`,$=e=>e.replace(/[A-Z]/g,t=>`_${t}`).toUpperCase(),H=({slice:e,params:t})=>t.owner==="constant"?`// A constant: no on${c(e.key)}Change, so only the code changes it.
      state={{ ${e.key}: ${$(e.key)} }}`:`state={{ ${e.key} }}
      on${c(e.key)}Change={set${c(e.key)}}`,J=e=>[...e.switches,!e.args.columnMenu&&`// No column menu (it is on by default).
      columnMenu={false}`,H(e),...e.extra??[],e.args.toolbar&&`// ${e.toolbar.note}
      toolbar={(table) => <TableToolbar table={table} controls={${e.toolbar.controls}} />}`,e.args.statusBar&&"statusBar={(table) => <TableStatusBar table={table} />}"].filter(Boolean).map(t=>`      ${t}`).join(`
`),W=({slice:e,outside:t})=>`// The screen's own buttons: each one only sets state.${e.key}.
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
)`,K=({slice:e,params:t})=>t.owner==="constant"?"":`  // ${e.note}
  const [${e.key}, set${c(e.key)}] = useState<${e.type}>(${p(e.value,"  ")})

`,G=({args:e,params:t,columns:s,slice:o,toolbar:n})=>{const l=["TableCore",e.toolbar&&"TableToolbar",...e.toolbar?n.imports:[],e.statusBar&&"TableStatusBar",s.includes("coreMeta(")&&"coreMeta"].filter(Boolean),u=["ColumnDef",s.includes("Row<")&&"Row",o.type],m=`import { ${l.join(", ")} } from '@pnl-simulation/table-core'`;return`${t.owner==="screen"?`import { useState } from 'react'
`:""}import type { ${u.filter(Boolean).join(", ")} } from '@tanstack/react-table'
${m.length<=80?m:`import {
${l.map(b=>`  ${b},`).join(`
`)}
} from '@pnl-simulation/table-core'`}`},be=e=>{const{slice:t,params:s}=e,o=`<TableCore
      data={employees}
      columns={columns}
      getRowId={(e) => e.id}
${J(e)}
    />`,n=s.outside==="buttons"?`<>
      <Buttons value={${t.key}} onChange={set${c(t.key)}} />
      ${o.replace(/\n/g,`
  `)}
    </>`:o,l=s.owner==="constant"?`
const ${$(t.key)}: ${t.type} = ${p(t.value)}
`:"";return`${G(e)}

${e.columns}
${l}${s.outside==="buttons"?`
${W(e)}
`:""}
export const EmployeesTable = ({ employees }: { employees: Employee[] }) => {
${K(e)}  return (
    ${n}
  )
}`};export{ne as C,O as P,te as S,re as a,oe as b,ae as c,ue as d,me as e,be as f,f as g,ce as h,se as i,M as l,i as p,le as r,ie as w};
