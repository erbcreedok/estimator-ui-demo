import{j as r}from"./jsx-runtime-Cnbe3ryz.js";import{w as z,a as A}from"./index-iBx7lKYd.js";import{r as w}from"./index-3dRrDZpt.js";import{T as N}from"./TableCore-Y75h2oha.js";import{c as P}from"./places-Dp9r7e0L.js";import{m as q,a}from"./employees-CL5oqWiT.js";import{c as g}from"./play-kit-Bu4SXy9H.js";import{w as L,d as _,t as D,S as I}from"./scene-kit-BsKxVgS1.js";import{D as J}from"./reference-kit-BHZHy2IZ.js";import"./index-C0mjCMcL.js";import"./index-DKTdOcjh.js";import"./table-core-base-DFRq_Vzl.js";import"./styles-HzBmg0bt.js";import"./icons-849xEHsl.js";import"./menu-DvyBTqNz.js";import"./fixtures-P-DSdYmm.js";import"./types-reference-CMrm5GSt.js";const B=[a("name","Name",190),a("team","Team",120),a("rate","Rate",80),a("role","Role",300),a("level","Level",260),a("country","Country",300),a("tier","Tier",280),a("start","Start",260)],U=B.map(e=>e.id),H=(e,t)=>B.slice(0,e).map(n=>t.includes(n.id)?{...n,meta:P({grow:!1})}:n),G=({args:e,hint:t})=>{const[n]=w.useState(()=>q(12)),l=w.useMemo(()=>H(e.columnCount,e.growFalse),[e.columnCount,e.growFalse]);return r.jsx(I,{hint:t,children:r.jsx(N,{data:n,columns:l,getRowId:o=>o.id,fill:e.fill})})},f=e=>`import { TableCore, coreMeta } from '@pnl-simulation/table-core'${e.growFalse.length?`

const columns = employeeColumns.slice(0, ${e.columnCount}).map((column) =>
  ${D(e.growFalse)}.includes(column.id) ? { ...column, meta: coreMeta({ grow: false }) } : column
)`:`

const columns = employeeColumns.slice(0, ${e.columnCount})`}

export const EmployeesTable = ({ employees }: { employees: Employee[] }) => (
  <TableCore
    data={employees}
    columns={columns}
    getRowId={(employee) => employee.id}
    fill=${JSON.stringify(e.fill)}
  />
)`,ue={title:"Tables/Table Core/Features/Fill width",tags:["autodocs"],decorators:[L],render:function(t,{parameters:n}){return r.jsx(G,{args:t,hint:n.hint})},args:{fill:"fill",columnCount:3,growFalse:[]},argTypes:{fill:{description:"Lets eligible columns share spare table width.",options:["fill","natural"],control:"inline-radio"},columnCount:{description:"How many demo columns are shown.",control:{type:"range",min:3,max:8,step:1},table:{category:"demo data"}},growFalse:{name:"column meta grow: false",description:"Columns that keep their configured width.",options:U,control:"check",table:{category:"columns"}}},parameters:{layout:"fullscreen",sceneCode:f,docs:{codePanel:!0,story:{inline:!1,height:"600px"},source:_(f),description:{component:`${J}


**Fill width** makes a table with a few columns reach its right edge, as in the legacy Resource Plan.

- **Proportional space.** Eligible columns share spare width in proportion to their configured sizes.
- **Fixed columns.** A user-resized column and one with \`meta: coreMeta({ grow: false })\` keep their width.
- **Overflow.** Columns wider than their container retain their sizes and scroll horizontally. Set \`fill="natural"\` to keep all configured widths while rows and borders still reach the edge.
`}}}},s=(e,t)=>{if(!e)throw new Error(`Story check failed: ${t}`)},i=e=>z(()=>{const t=e.querySelector('[role="grid"]');if(!t||!t.querySelector("[data-cell]"))throw new Error("grid not ready");return t}),O=async e=>A(await i(e)).getAllByRole("columnheader"),K=(e,t)=>e.querySelector(`[data-header-id="${t}"]`),Q=(e,t)=>{const n=e.getBoundingClientRect().left,l=Array.from(e.querySelectorAll("*")).filter(o=>o.getBoundingClientRect().right-n>e.clientWidth+1).slice(0,4).map(o=>`${o.tagName}[${Object.keys(o.dataset).join("|")}] w=${o.style.width} r=${Math.round(o.getBoundingClientRect().right-n)}`);return`headers ${t}, scroll ${e.scrollWidth}, client ${e.clientWidth}; wide: ${l.join("; ")}`},c={tags:["kb:fill-width-few-columns"],name:"1 · Few columns fill the width",parameters:{hint:r.jsx(r.Fragment,{children:"With three columns, the table has no empty right side: each column takes a proportional share of the spare width."})},play:async e=>{if(g(e))return;const{canvasElement:t}=e,n=await i(t),l=(await O(t)).reduce((o,T)=>o+T.getBoundingClientRect().width,0);s(Math.abs(l-n.scrollWidth)<=2,Q(n,l)),s(n.scrollWidth<=n.clientWidth,"grid has no horizontal overflow")}},d={tags:["kb:fill-width-fixed-width-column"],name:"2 · A fixed-width column",args:{columnCount:4,growFalse:["rate"]},parameters:{hint:r.jsxs(r.Fragment,{children:[r.jsx("b",{children:"Rate"})," has"," ",r.jsxs("code",{children:["meta: coreMeta(","{"," grow: false ","}",")"]}),", so it stays 80 px while the other columns share the spare width."]})},play:async e=>{if(g(e))return;const{canvasElement:t}=e;await i(t);const n=K(t,"rate");if(!n)throw new Error("Story check failed: Rate header is missing");s(Math.abs(n.getBoundingClientRect().width-80)<=1,`Rate width is ${n.getBoundingClientRect().width}, expected 80`)}},h={tags:["kb:fill-width-many-columns"],name:"3 · Many columns scroll",args:{columnCount:8},parameters:{hint:r.jsx(r.Fragment,{children:"Eight configured columns are wider than the frame, so their sizes are kept and the grid scrolls horizontally."})},play:async e=>{if(g(e))return;const t=await i(e.canvasElement);s(t.scrollWidth>t.clientWidth,"grid scrolls horizontally")}},m={tags:["kb:fill-width-fill-off"],name:"4 · Fill off",args:{fill:"natural"},parameters:{hint:r.jsxs(r.Fragment,{children:["Set ",r.jsx("code",{children:"fill"})," to ",r.jsx("code",{children:"natural"}),": columns retain their configured widths, while rows and borders still extend through the full grid."]})},play:async e=>{if(g(e))return;const{canvasElement:t}=e,n=await i(t),o=(await O(t)).at(-1);if(!o)throw new Error("Story check failed: no headers");s(o.getBoundingClientRect().right<n.getBoundingClientRect().right,"last header leaves empty space at the right edge")}},u={tags:["kb:fill-width-playground"],parameters:{hint:r.jsxs(r.Fragment,{children:["Try changing ",r.jsx("code",{children:"fill"}),", the number of columns and fixed-width columns in the controls below."]})}};var p,y,x;c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:`{
  tags: ['kb:fill-width-few-columns'],
  name: '1 · Few columns fill the width',
  parameters: {
    hint: <>
                With three columns, the table has no empty right side: each column takes
                a proportional share of the spare width.
            </>
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    const scroller = await grid(canvasElement);
    const width = (await headers(canvasElement)).reduce((sum, element) => sum + element.getBoundingClientRect().width, 0);
    check(Math.abs(width - scroller.scrollWidth) <= 2, overflowReport(scroller, width));
    check(scroller.scrollWidth <= scroller.clientWidth, 'grid has no horizontal overflow');
  }
}`,...(x=(y=c.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var C,b,k;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  tags: ['kb:fill-width-fixed-width-column'],
  name: '2 · A fixed-width column',
  args: {
    columnCount: 4,
    growFalse: ['rate']
  },
  parameters: {
    hint: <>
                <b>Rate</b> has{' '}
                <code>
                    meta: coreMeta({'{'} grow: false {'}'})
                </code>
                , so it stays 80 px while the other columns share the spare width.
            </>
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    await grid(canvasElement);
    const rate = header(canvasElement, 'rate');
    if (!rate) throw new Error('Story check failed: Rate header is missing');
    check(Math.abs(rate.getBoundingClientRect().width - 80) <= 1, \`Rate width is \${rate.getBoundingClientRect().width}, expected 80\`);
  }
}`,...(k=(b=d.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var F,E,R;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
  tags: ['kb:fill-width-many-columns'],
  name: '3 · Many columns scroll',
  args: {
    columnCount: 8
  },
  parameters: {
    hint: <>
                Eight configured columns are wider than the frame, so their sizes are
                kept and the grid scrolls horizontally.
            </>
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const scroller = await grid(ctx.canvasElement);
    check(scroller.scrollWidth > scroller.clientWidth, 'grid scrolls horizontally');
  }
}`,...(R=(E=h.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var S,v,j;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ['kb:fill-width-fill-off'],
  name: '4 · Fill off',
  args: {
    fill: 'natural'
  },
  parameters: {
    hint: <>
                Set <code>fill</code> to <code>natural</code>: columns retain their
                configured widths, while rows and borders still extend through the full
                grid.
            </>
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    const scroller = await grid(canvasElement);
    const cells = await headers(canvasElement);
    const last = cells.at(-1);
    if (!last) throw new Error('Story check failed: no headers');
    check(last.getBoundingClientRect().right < scroller.getBoundingClientRect().right, 'last header leaves empty space at the right edge');
  }
}`,...(j=(v=m.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var M,$,W;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  tags: ['kb:fill-width-playground'],
  parameters: {
    hint: <>
                Try changing <code>fill</code>, the number of columns and fixed-width
                columns in the controls below.
            </>
  }
}`,...(W=($=u.parameters)==null?void 0:$.docs)==null?void 0:W.source}}};const ge=["FewColumns","FixedWidthColumn","ManyColumns","FillOff","Playground"];export{c as FewColumns,m as FillOff,d as FixedWidthColumn,h as ManyColumns,u as Playground,ge as __namedExportsOrder,ue as default};
