import{j as n,c as z}from"./styles-DXLXEQ3H.js";import{w as O,a as T}from"./index-DLqD3z3M.js";import{r as g}from"./index-BjhrbhTf.js";import{T as V}from"./TableCore-kOYdxPhk.js";import{m as A,a as o}from"./employees-DtM5_3-O.js";import{c as f}from"./play-kit-Bu4SXy9H.js";import{w as P,d as q,t as p,S as L}from"./scene-kit-DXifMYYP.js";import"./jsx-runtime-CEpjeC4Q.js";import"./index-D841zMOb.js";import"./fixtures-CCjjPTo2.js";const $=[o("name","Name",190),o("team","Team",120),o("rate","Rate",80),o("role","Role",300),o("level","Level",260),o("country","Country",300),o("tier","Tier",280),o("start","Start",260)],I=$.map(e=>e.id),_=(e,t)=>$.slice(0,e).map(s=>t.includes(s.id)?{...s,meta:z({grow:!1})}:s),H=({args:e,hint:t})=>{const[s]=g.useState(()=>A(12)),i=g.useMemo(()=>_(e.columnCount,e.growFalse),[e.columnCount,e.growFalse]);return n.jsxDEV(L,{hint:t,children:n.jsxDEV(V,{data:s,columns:i,getRowId:r=>r.id,fill:e.fill},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/fill-width.stories.tsx",lineNumber:43,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/fill-width.stories.tsx",lineNumber:42,columnNumber:10},void 0)},w=e=>`import { TableCore, coreMeta } from '@pnl-simulation/table-core'${e.growFalse.length?`

const columns = employeeColumns.slice(0, ${e.columnCount}).map((column) =>
  ${p(e.growFalse)}.includes(column.id) ? { ...column, meta: coreMeta({ grow: false }) } : column
)`:`

const columns = employeeColumns.slice(0, ${e.columnCount})`}

export const EmployeesTable = ({ employees }: { employees: Employee[] }) => (
  <TableCore
    data={employees}
    columns={columns}
    getRowId={(employee) => employee.id}
    fill={${p(e.fill)}}
  />
)`,oe={title:"Tables/Table Core/Draft/Fill width",tags:["autodocs"],decorators:[P],render:function(t,{parameters:s}){return n.jsxDEV(H,{args:t,hint:s.hint},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/fill-width.stories.tsx",lineNumber:72,columnNumber:12},this)},args:{fill:!0,columnCount:3,growFalse:[]},argTypes:{fill:{description:"Lets eligible columns share spare table width.",control:"boolean"},columnCount:{description:"How many demo columns are shown.",control:{type:"range",min:3,max:8,step:1},table:{category:"demo data"}},growFalse:{name:"column meta grow: false",description:"Columns that keep their configured width.",options:I,control:"check",table:{category:"columns"}}},parameters:{layout:"fullscreen",sceneCode:w,docs:{codePanel:!0,story:{inline:!1,height:"600px"},source:q(w),description:{component:`
**Fill width** makes a table with a few columns reach its right edge, as in the legacy Resource Plan.

- **Proportional space.** Eligible columns share spare width in proportion to their configured sizes.
- **Fixed columns.** A user-resized column and one with \`meta: coreMeta({ grow: false })\` keep their width.
- **Overflow.** Columns wider than their container retain their sizes and scroll horizontally. Set \`fill={false}\` to keep all configured widths while rows and borders still reach the edge.
`}}}},l=(e,t)=>{if(!e)throw new Error(`Story check failed: ${t}`)},a=e=>O(()=>{const t=e.querySelector('[role="grid"]');if(!t||!t.querySelector("[data-cell]"))throw new Error("grid not ready");return t}),B=async e=>T(await a(e)).getAllByRole("columnheader"),J=(e,t)=>e.querySelector(`[data-header-id="${t}"]`),G=(e,t)=>{const s=e.getBoundingClientRect().left,i=Array.from(e.querySelectorAll("*")).filter(r=>r.getBoundingClientRect().right-s>e.clientWidth+1).slice(0,4).map(r=>`${r.tagName}[${Object.keys(r.dataset).join("|")}] w=${r.style.width} r=${Math.round(r.getBoundingClientRect().right-s)}`);return`headers ${t}, scroll ${e.scrollWidth}, client ${e.clientWidth}; wide: ${i.join("; ")}`},c={tags:["kb:fill-width-few-columns"],name:"1 · Few columns fill the width",parameters:{hint:n.jsxDEV(n.Fragment,{children:"With three columns, the table has no empty right side: each column takes a proportional share of the spare width."},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/fill-width.stories.tsx",lineNumber:157,columnNumber:11},void 0)},play:async e=>{if(f(e))return;const{canvasElement:t}=e,s=await a(t),i=(await B(t)).reduce((r,U)=>r+U.getBoundingClientRect().width,0);l(Math.abs(i-s.scrollWidth)<=2,G(s,i)),l(s.scrollWidth<=s.clientWidth,"grid has no horizontal overflow")}},d={tags:["kb:fill-width-fixed-width-column"],name:"2 · A fixed-width column",args:{columnCount:4,growFalse:["rate"]},parameters:{hint:n.jsxDEV(n.Fragment,{children:[n.jsxDEV("b",{children:"Rate"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/fill-width.stories.tsx",lineNumber:182,columnNumber:17},void 0)," has"," ",n.jsxDEV("code",{children:["meta: coreMeta(","{"," grow: false ","}",")"]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/fill-width.stories.tsx",lineNumber:183,columnNumber:17},void 0),", so it stays 80 px while the other columns share the spare width."]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/fill-width.stories.tsx",lineNumber:181,columnNumber:11},void 0)},play:async e=>{if(f(e))return;const{canvasElement:t}=e;await a(t);const s=J(t,"rate");if(!s)throw new Error("Story check failed: Rate header is missing");l(Math.abs(s.getBoundingClientRect().width-80)<=1,`Rate width is ${s.getBoundingClientRect().width}, expected 80`)}},m={tags:["kb:fill-width-many-columns"],name:"3 · Many columns scroll",args:{columnCount:8},parameters:{hint:n.jsxDEV(n.Fragment,{children:"Eight configured columns are wider than the frame, so their sizes are kept and the grid scrolls horizontally."},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/fill-width.stories.tsx",lineNumber:207,columnNumber:11},void 0)},play:async e=>{if(f(e))return;const t=await a(e.canvasElement);l(t.scrollWidth>t.clientWidth,"grid scrolls horizontally")}},h={tags:["kb:fill-width-fill-off"],name:"4 · Fill off",args:{fill:!1},parameters:{hint:n.jsxDEV(n.Fragment,{children:["Switch ",n.jsxDEV("code",{children:"fill"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/fill-width.stories.tsx",lineNumber:226,columnNumber:24},void 0)," off: columns retain their configured widths, while rows and borders still extend through the full grid."]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/fill-width.stories.tsx",lineNumber:225,columnNumber:11},void 0)},play:async e=>{if(f(e))return;const{canvasElement:t}=e,s=await a(t),r=(await B(t)).at(-1);if(!r)throw new Error("Story check failed: no headers");l(r.getBoundingClientRect().right<s.getBoundingClientRect().right,"last header leaves empty space at the right edge")}},u={tags:["kb:fill-width-playground"],parameters:{hint:n.jsxDEV(n.Fragment,{children:["Try changing ",n.jsxDEV("code",{children:"fill"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/fill-width.stories.tsx",lineNumber:246,columnNumber:30},void 0),", the number of columns and fixed-width columns in the controls below."]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/fill-width.stories.tsx",lineNumber:245,columnNumber:11},void 0)}};var b,y,k;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(k=(y=c.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var x,C,E;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(E=(C=d.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var N,v,F;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(F=(v=m.parameters)==null?void 0:v.docs)==null?void 0:F.source}}};var R,D,S;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ['kb:fill-width-fill-off'],
  name: '4 · Fill off',
  args: {
    fill: false
  },
  parameters: {
    hint: <>
                Switch <code>fill</code> off: columns retain their configured widths,
                while rows and borders still extend through the full grid.
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
}`,...(S=(D=h.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var M,j,W;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  tags: ['kb:fill-width-playground'],
  parameters: {
    hint: <>
                Try changing <code>fill</code>, the number of columns and fixed-width
                columns in the controls below.
            </>
  }
}`,...(W=(j=u.parameters)==null?void 0:j.docs)==null?void 0:W.source}}};const ie=["FewColumns","FixedWidthColumn","ManyColumns","FillOff","Playground"];export{c as FewColumns,h as FillOff,d as FixedWidthColumn,m as ManyColumns,u as Playground,ie as __namedExportsOrder,oe as default};
