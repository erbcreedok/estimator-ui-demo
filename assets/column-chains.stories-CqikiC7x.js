import{j as e}from"./jsx-runtime-Cnbe3ryz.js";import{w as j,e as h,u as P,a as M}from"./index-iBx7lKYd.js";import{u as Be,f as R,a as Fe,C as Ne,g as De}from"./table-core-base-DFRq_Vzl.js";import{r as m}from"./index-3dRrDZpt.js";import{T as Ae}from"./TableCore-Y75h2oha.js";import{T as $e}from"./TableStatusBar-4NxO8OsQ.js";import{T as We}from"./TableToolbar-DTYEmPN-.js";import{e as Ie,m as _e,a as c}from"./employees-CL5oqWiT.js";import{m as qe}from"./fixtures-P-DSdYmm.js";import{c as ke}from"./play-kit-Bu4SXy9H.js";import{w as Ve,d as He,t as B,h as F,S as Je}from"./scene-kit-BsKxVgS1.js";import{D as ze}from"./reference-kit-BHZHy2IZ.js";import"./places-Dp9r7e0L.js";import"./index-C0mjCMcL.js";import"./index-DKTdOcjh.js";import"./styles-HzBmg0bt.js";import"./icons-849xEHsl.js";import"./menu-DvyBTqNz.js";import"./status-bar-CYB7-jUm.js";import"./panel-controls-DNzRkyVB.js";import"./SortingPanel-CpobHppH.js";import"./toolbar-C5VRlWnq.js";import"./pin-controls-NGLUwJXC.js";import"./types-reference-CMrm5GSt.js";const{addons:Ue,useArgs:Ke}=__STORYBOOK_MODULE_PREVIEW_API__,Ye=[c("name","Name",190),c("team","Team",110),c("role","Role",140),c("country","Country",120),c("tier","Tier",90),c("city","City",110),c("email","Email",230),c("phone","Phone",150),c("start","Start",110),c("end","End",110),c("rate","Rate",80)],Ge=Ie,Qe=(n,a)=>{const t=o=>n.columnOrder.indexOf(o),r=Object.fromEntries(Object.entries(n.columnChainMembers).map(([o,s])=>[o,[...s].sort((i,d)=>t(i)-t(d))]));return a({...n,columnChainMembers:r})},L={columnOrder:[],columnPinning:{left:[],right:[]},columnChainMembers:{},columnChainExpanded:{}},Le={columnPinning:{left:["name"],right:[]}},Pe=["columnOrder","columnPinning","columnChainMembers","columnChainExpanded"],v=n=>Object.fromEntries(Pe.filter(a=>n[a]!==void 0).map(a=>[a,n[a]]));let p=null;const Xe=n=>{const[,a]=Ke();return Object.fromEntries(Pe.map(t=>[F(t),r=>{var i;const o={...v(n),...p},s=Fe(r,o[t]??L[t]);p={...p,[t]:s},(i=n[F(t)])==null||i.call(n,s),queueMicrotask(()=>{p&&(a(p),p=null)})}]))},Ze="table-core/chain-state/resolved",en=n=>e.jsx(We,{table:n}),nn=n=>e.jsx($e,{table:n}),an=({args:n,handlers:a,hint:t})=>{const[r]=m.useState(()=>_e(30)),o=m.useRef(null);return m.useEffect(()=>{var d;const s=(d=o.current)==null?void 0:d.table;if(!s)return;const i=s.getColumnChainLayout();Ue.getChannel().emit(Ze,{enabled:s.getIsColumnChainsEnabled(),outside:v(n),resolved:{columnOrder:i.columnOrder,pinnedLeft:i.pinnedLeft,columnChainMembers:i.columnChainMembers},conflicts:i.conflicts})}),e.jsx(Je,{hint:t,children:e.jsx(Ae,{ref:o,data:r,columns:Ye,getRowId:s=>s.id,chains:n.chains,enableColumnChains:n.enableColumnChains,resolveChainLayout:n.resolveChainLayout,state:v(n),...a,onChainConflicts:n.onChainConflicts,toolbar:en,statusBar:nn})})},N=n=>{const a=n.resolveChainLayout==="columnOrderWins",t={...L,...v(n)},r=(o,s)=>{const i=`set${o[0].toUpperCase()}${o.slice(1)}`,d=B(t[o],"  ");return`  const [${o}, ${i}] = useState<${s}>(${d})`};return`import { useState } from 'react'
import type { ColumnOrderState, ColumnPinningState } from '@tanstack/react-table'
import {
  TableCore,
  type ChainExpandedState,${a?`
  type ChainLayoutResolver,`:""}
  type ChainMembersState,
  type ColumnChain,
} from '..'

const chains: ColumnChain[] = ${B(n.chains)}
${a?`
// Own conflict rule: the chain's order is taken from columnOrder.
const columnOrderWins: ChainLayoutResolver = (input, resolveDefault) => {
  const pos = (id: string) => input.columnOrder.indexOf(id)
  const columnChainMembers = Object.fromEntries(
    Object.entries(input.columnChainMembers).map(([id, members]) => [
      id,
      [...members].sort((a, b) => pos(a) - pos(b)),
    ])
  )
  return resolveDefault({ ...input, columnChainMembers })
}
`:""}
export const EmployeesTable = ({ employees }: { employees: Employee[] }) => {
  // Layout state is optional to own: do it to save, restore or sync it.
${r("columnOrder","ColumnOrderState")}
${r("columnPinning","ColumnPinningState")}
${r("columnChainMembers","ChainMembersState")}
${r("columnChainExpanded","ChainExpandedState")}

  return (
    <TableCore
      data={employees}
      columns={columns}
      getRowId={(e) => e.id}
      chains={chains}${n.enableColumnChains?"":`
      enableColumnChains={false}`}${a?`
      resolveChainLayout={columnOrderWins}`:""}
      state={{ columnOrder, columnPinning, columnChainMembers, columnChainExpanded }}
      onColumnOrderChange={setColumnOrder}
      onColumnPinningChange={setColumnPinning}
      onColumnChainMembersChange={setColumnChainMembers}
      onColumnChainExpandedChange={setColumnChainExpanded}
      onChainConflicts={(conflicts) => console.warn(conflicts)}
    />
  )
}`},Pn={title:"Tables/Table Core/Features/Column chains",tags:["autodocs"],decorators:[Ve],render:function(a,{parameters:t}){const r=Xe(a);return e.jsx(an,{args:a,handlers:r,hint:t.hint})},args:{chains:Ge,enableColumnChains:!0,resolveChainLayout:void 0,...L,...Le},argTypes:{chains:{description:"Chain definitions. A member is an id (required) or `{ id, optional: true }` (may leave the chain and come back).",control:"object"},enableColumnChains:{description:"Switch the feature off without removing it.",control:"boolean"},resolveChainLayout:{description:"How a disagreement between `columnOrder` and `columnChainMembers` is settled. Default: the chain order wins.",options:["default","columnOrderWins"],mapping:{default:void 0,columnOrderWins:Qe},control:{type:"radio",labels:{default:"default rules",columnOrderWins:"columnOrderWins (own resolver)"}}},columnOrder:{name:"state.columnOrder",description:"Column ids in screen order (TanStack). Drag a column and it updates; edit it to push an order in.",control:"object",table:{category:"state"}},columnPinning:{name:"state.columnPinning",description:"Frozen columns: `{ left, right }` (TanStack pinning). Freezing a chain member freezes the whole chain.",control:"object",table:{category:"state"}},columnChainMembers:{name:"state.columnChainMembers",description:"Members of each chain in their order, by chain id. Empty = the order from `chains`. An optional member taken out disappears from its list.",control:"object",table:{category:"state"}},columnChainExpanded:{name:"state.columnChainExpanded",description:"Open chains: `{ [chainId]: true }`. Collapsed chains show their first member.",control:"object",table:{category:"state"}},onColumnOrderChange:{action:"onColumnOrderChange",table:{category:"events"}},onColumnPinningChange:{action:"onColumnPinningChange",table:{category:"events"}},onColumnChainMembersChange:{action:"onColumnChainMembersChange",table:{category:"events"}},onColumnChainExpandedChange:{action:"onColumnChainExpandedChange",table:{category:"events"}},onChainConflicts:{action:"onChainConflicts",table:{category:"events"}}},parameters:{layout:"fullscreen",sceneCode:N,chainState:!0,docs:{codePanel:!0,story:{inline:!1,height:"600px"},source:He(N),description:{component:`${ze}


A **chain** is a group of related columns shown as one column until the user opens it — here *Location* (Country, Tier, City), *Contact* (Email, Phone) and *Period* (Start, End).

- **Collapsed**, only the first member is on screen, with **»** to open the chain. Opened, the members sit side by side and **«** folds them back.
- The chain's **order** is the user's: drag members inside it; whichever is first is the one shown collapsed.
- Members are **required** by default. An **optional** member (City, Phone) can be dragged **out** of the chain — it becomes a plain column — and back **in**. Columns the chain does not list can never join.
- Pinning, reordering, hiding and the Columns panel treat a chain as one block.

**State.** The layout lives in \`columnOrder\` and \`columnChainMembers\` (plus \`columnChainExpanded\`, \`columnPinning\`). A screen can own them — save, restore, sync. When what it passes disagrees with itself, the table settles it by fixed rules and reports what it fixed (\`onChainConflicts\`); \`resolveChainLayout\` replaces the rules.

**Here.** Every control below is a real \`TableCore\` prop; the *state* group has one control per state slice, and it works both ways: change the table and the slice updates; edit a slice and the table follows. Events go to **Actions**, the matching code is in **Code**, and **Chain state** shows what you passed, what the table uses and what it fixed.

The scenes go one idea at a time; *Playground* has everything.`}}}},u=(n,a)=>n.querySelector(`[data-header-id="${a}"]`),b=(...n)=>({...Le,columnChainExpanded:Object.fromEntries(n.map(a=>[a,!0]))}),g={tags:["kb:chains-collapse-expand"],name:"1 · Collapse and expand",parameters:{hint:e.jsxs(e.Fragment,{children:["Click ",e.jsx("b",{children:"»"})," next to ",e.jsx("b",{children:"Country"})," to open ",e.jsx("i",{children:"Location"}),", then"," ",e.jsx("b",{children:"«"})," to fold it. Watch ",e.jsx("code",{children:"state.columnChainExpanded"})," in the controls."]})},play:async n=>{if(ke(n))return;const a=n.canvasElement;await j(()=>h(u(a,"country")).not.toBeNull()),await h(u(a,"tier")).toBeNull(),await P.click(M(u(a,"country")).getByRole("button",{name:"Expand columns"})),await j(()=>h(u(a,"tier")).not.toBeNull()),await h(u(a,"city")).not.toBeNull(),await P.click(M(a).getByRole("button",{name:"Collapse columns"})),await j(()=>h(u(a,"tier")).toBeNull())}},f={tags:["kb:chains-reorder-inside"],name:"2 · Reorder inside a chain",args:b("location"),parameters:{hint:e.jsxs(e.Fragment,{children:["Drag ",e.jsx("b",{children:"Tier"})," before ",e.jsx("b",{children:"Country"}),", then fold ",e.jsx("i",{children:"Location"}),": now Tier is the column shown."]})}},y={tags:["kb:chains-leave-and-join"],name:"3 · Take out and put back",args:b("location","contact"),parameters:{hint:e.jsxs(e.Fragment,{children:["Drag ",e.jsx("b",{children:"City"})," away from ",e.jsx("i",{children:"Location"})," — the drag says"," ",e.jsx("i",{children:"Leaves Location"}),". Drop it back next to Tier —"," ",e.jsx("i",{children:"Joins Location"}),". Same in the ",e.jsx("b",{children:"Columns"})," panel."]})}},x={tags:["kb:chains-not-allowed"],name:"4 · What is not allowed",args:b("location"),parameters:{hint:e.jsxs(e.Fragment,{children:["Drag ",e.jsx("b",{children:"Tier"})," (required) out of ",e.jsx("i",{children:"Location"}),", or ",e.jsx("b",{children:"Team"})," into it — the drag says ",e.jsx("i",{children:"Not allowed here"})," and nothing moves."]})}},w={tags:["kb:chains-pinning"],name:"5 · Pinning a chain",args:b("location"),parameters:{hint:e.jsxs(e.Fragment,{children:["Pin ",e.jsx("b",{children:"Country"})," from its column menu (or drag it into the pinned area): the whole ",e.jsx("i",{children:"Location"})," chain goes with it."]})}},E={tags:["kb:chains-outside-state"],name:"6 · Conflicting state from outside",args:b("location"),parameters:{hint:e.jsxs(e.Fragment,{children:["Open the ",e.jsx("b",{children:"Chain state"})," tab below and apply a case. Compare"," ",e.jsx("i",{children:"you passed"})," with ",e.jsx("i",{children:"the table uses"}),"; switch"," ",e.jsx("code",{children:"resolveChainLayout"})," to see your own rule win."]})}},O={tags:["kb:chains-switched-off"],name:"7 · Switched off",args:{enableColumnChains:!1},parameters:{hint:e.jsxs(e.Fragment,{children:["Turn ",e.jsx("code",{children:"enableColumnChains"})," on and off: nothing else breaks, and the layout comes back as it was."]})},play:async n=>{if(ke(n))return;const a=n.canvasElement;await j(()=>h(u(a,"tier")).not.toBeNull()),await h(a.querySelector("[data-chain-toggle]")).toBeNull()}},S={tags:["kb:chains-playground"],args:b("location","contact","period")},D=`import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { ColumnChainsFeature } from '..'

const table = useReactTable({
  _features: [ColumnChainsFeature],
  data,
  columns,
  getCoreRowModel: getCoreRowModel(),
  chains: [
    {
      id: 'location',
      label: 'Location',
      columns: ['country', 'tier', { id: 'city', optional: true }],
    },
  ],
})

// The rest is plain TanStack: collapsed members are simply not visible.
<thead>
  <tr>
    {table.getVisibleLeafColumns().map((column) => (
      <th key={column.id}>
        {flexRender(column.columnDef.header, {})}
        {column.getIsColumnChainPrimary() && (
          <button onClick={() => column.toggleColumnChainExpanded()}>
            {column.getIsColumnChainExpanded() ? '«' : '»'}
          </button>
        )}
      </th>
    ))}
  </tr>
</thead>`,tn=["name","country","tier","city","rate"].map(n=>({id:n,accessorKey:n,header:n[0].toUpperCase()+n.slice(1)})),on=({enableColumnChains:n})=>{const[a]=m.useState(()=>qe(5)),[t,r]=m.useState([]),[o,s]=m.useState({}),[i,d]=m.useState({}),[Me,Re]=m.useState({}),k=Be({_features:[Ne],data:a,columns:tn,getCoreRowModel:De(),state:{columnOrder:t,columnPinning:o,columnChainExpanded:i,columnChainMembers:Me},onColumnOrderChange:r,onColumnPinningChange:s,chains:[{id:"location",label:"Location",columns:["country","tier",{id:"city",optional:!0}]}],enableColumnChains:n,onColumnChainExpandedChange:d,onColumnChainMembersChange:Re});return e.jsxs("table",{style:{borderCollapse:"collapse",fontSize:13,margin:16},children:[e.jsx("thead",{children:e.jsx("tr",{children:k.getVisibleLeafColumns().map(l=>{const C=!!l.getColumnChain();return e.jsxs("th",{"data-header-id":l.id,style:{textAlign:"left",padding:"6px 12px",background:C?"#F5F6FA":void 0,borderBottom:"1px solid #E1E3EB"},children:[R(l.columnDef.header,{}),l.getIsColumnChainPrimary()&&e.jsx("button",{type:"button",style:{marginLeft:6},onClick:()=>l.toggleColumnChainExpanded(),children:l.getIsColumnChainExpanded()?"«":"»"})]},l.id)})})}),e.jsx("tbody",{children:k.getRowModel().rows.map(l=>e.jsx("tr",{children:l.getVisibleCells().map(C=>e.jsx("td",{style:{padding:"6px 12px"},children:R(C.column.columnDef.cell,C.getContext())},C.id))},l.id))}),e.jsxs("caption",{style:{captionSide:"bottom",textAlign:"left",paddingTop:8},children:["Chains:"," ",k.getColumnChains().map(l=>l.label).join(", ")||"off"]})]})},T={tags:["kb:chains-plain-tan-stack"],name:"Without TableCore (plain TanStack)",render:n=>e.jsx(on,{...n}),args:{enableColumnChains:!0},argTypes:{chains:{table:{disable:!0}},columnOrder:{table:{disable:!0}},columnPinning:{table:{disable:!0}},columnChainMembers:{table:{disable:!0}},columnChainExpanded:{table:{disable:!0}},resolveChainLayout:{table:{disable:!0}},onColumnOrderChange:{table:{disable:!0}},onColumnPinningChange:{table:{disable:!0}},onColumnChainMembersChange:{table:{disable:!0}},onColumnChainExpandedChange:{table:{disable:!0}},onChainConflicts:{table:{disable:!0}}},parameters:{chainState:!1,sceneCode:()=>D,docs:{source:{type:"code",language:"tsx",transform:()=>D}}}};var A,$,W,I,_;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
  tags: ['kb:chains-collapse-expand'],
  name: '1 · Collapse and expand',
  parameters: {
    hint: <>
                Click <b>»</b> next to <b>Country</b> to open <i>Location</i>, then{' '}
                <b>«</b> to fold it. Watch <code>state.columnChainExpanded</code> in the
                controls.
            </>
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const root = ctx.canvasElement;
    await waitFor(() => expect(headerOf(root, 'country')).not.toBeNull());
    await expect(headerOf(root, 'tier')).toBeNull();
    await userEvent.click(within(headerOf(root, 'country') as HTMLElement).getByRole('button', {
      name: 'Expand columns'
    }));
    await waitFor(() => expect(headerOf(root, 'tier')).not.toBeNull());
    await expect(headerOf(root, 'city')).not.toBeNull();
    await userEvent.click(within(root).getByRole('button', {
      name: 'Collapse columns'
    }));
    await waitFor(() => expect(headerOf(root, 'tier')).toBeNull());
  }
}`,...(W=($=g.parameters)==null?void 0:$.docs)==null?void 0:W.source},description:{story:"Chains start collapsed: one column each.",...(_=(I=g.parameters)==null?void 0:I.docs)==null?void 0:_.description}}};var q,V,H,J,z;f.parameters={...f.parameters,docs:{...(q=f.parameters)==null?void 0:q.docs,source:{originalSource:`{
  tags: ['kb:chains-reorder-inside'],
  name: '2 · Reorder inside a chain',
  args: open('location'),
  parameters: {
    hint: <>
                Drag <b>Tier</b> before <b>Country</b>, then fold <i>Location</i>: now
                Tier is the column shown.
            </>
  }
}`,...(H=(V=f.parameters)==null?void 0:V.docs)==null?void 0:H.source},description:{story:"The chain's order is the user's; the first member is the one shown collapsed.",...(z=(J=f.parameters)==null?void 0:J.docs)==null?void 0:z.description}}};var U,K,Y,G,Q;y.parameters={...y.parameters,docs:{...(U=y.parameters)==null?void 0:U.docs,source:{originalSource:`{
  tags: ['kb:chains-leave-and-join'],
  name: '3 · Take out and put back',
  args: open('location', 'contact'),
  parameters: {
    hint: <>
                Drag <b>City</b> away from <i>Location</i> — the drag says{' '}
                <i>Leaves Location</i>. Drop it back next to Tier —{' '}
                <i>Joins Location</i>. Same in the <b>Columns</b> panel.
            </>
  }
}`,...(Y=(K=y.parameters)==null?void 0:K.docs)==null?void 0:Y.source},description:{story:"Optional members leave the chain and come back; the header says which.",...(Q=(G=y.parameters)==null?void 0:G.docs)==null?void 0:Q.description}}};var X,Z,ee,ne,ae;x.parameters={...x.parameters,docs:{...(X=x.parameters)==null?void 0:X.docs,source:{originalSource:`{
  tags: ['kb:chains-not-allowed'],
  name: '4 · What is not allowed',
  args: open('location'),
  parameters: {
    hint: <>
                Drag <b>Tier</b> (required) out of <i>Location</i>, or <b>Team</b> into
                it — the drag says <i>Not allowed here</i> and nothing moves.
            </>
  }
}`,...(ee=(Z=x.parameters)==null?void 0:Z.docs)==null?void 0:ee.source},description:{story:"Required members stay in; foreign columns stay out.",...(ae=(ne=x.parameters)==null?void 0:ne.docs)==null?void 0:ae.description}}};var te,oe,re,se,ie;w.parameters={...w.parameters,docs:{...(te=w.parameters)==null?void 0:te.docs,source:{originalSource:`{
  tags: ['kb:chains-pinning'],
  name: '5 · Pinning a chain',
  args: open('location'),
  parameters: {
    hint: <>
                Pin <b>Country</b> from its column menu (or drag it into the pinned
                area): the whole <i>Location</i> chain goes with it.
            </>
  }
}`,...(re=(oe=w.parameters)==null?void 0:oe.docs)==null?void 0:re.source},description:{story:"Pinning moves the whole chain.",...(ie=(se=w.parameters)==null?void 0:se.docs)==null?void 0:ie.description}}};var le,ce,de,me,ue;E.parameters={...E.parameters,docs:{...(le=E.parameters)==null?void 0:le.docs,source:{originalSource:`{
  tags: ['kb:chains-outside-state'],
  name: '6 · Conflicting state from outside',
  args: open('location'),
  parameters: {
    hint: <>
                Open the <b>Chain state</b> tab below and apply a case. Compare{' '}
                <i>you passed</i> with <i>the table uses</i>; switch{' '}
                <code>resolveChainLayout</code> to see your own rule win.
            </>
  }
}`,...(de=(ce=E.parameters)==null?void 0:ce.docs)==null?void 0:de.source},description:{story:"State pushed from outside that contradicts itself, and how it is settled.",...(ue=(me=E.parameters)==null?void 0:me.docs)==null?void 0:ue.description}}};var he,pe,be,Ce,ge;O.parameters={...O.parameters,docs:{...(he=O.parameters)==null?void 0:he.docs,source:{originalSource:`{
  tags: ['kb:chains-switched-off'],
  name: '7 · Switched off',
  args: {
    enableColumnChains: false
  },
  parameters: {
    hint: <>
                Turn <code>enableColumnChains</code> on and off: nothing else breaks,
                and the layout comes back as it was.
            </>
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const root = ctx.canvasElement;
    await waitFor(() => expect(headerOf(root, 'tier')).not.toBeNull());
    await expect(root.querySelector('[data-chain-toggle]')).toBeNull();
  }
}`,...(be=(pe=O.parameters)==null?void 0:pe.docs)==null?void 0:be.source},description:{story:"The feature off: every column is a plain column again.",...(ge=(Ce=O.parameters)==null?void 0:Ce.docs)==null?void 0:ge.description}}};var fe,ye,xe,we,Ee;S.parameters={...S.parameters,docs:{...(fe=S.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  tags: ['kb:chains-playground'],
  args: open('location', 'contact', 'period')
}`,...(xe=(ye=S.parameters)==null?void 0:ye.docs)==null?void 0:xe.source},description:{story:"Everything at once.",...(Ee=(we=S.parameters)==null?void 0:we.docs)==null?void 0:Ee.description}}};var Oe,Se,Te,je,ve;T.parameters={...T.parameters,docs:{...(Oe=T.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  tags: ['kb:chains-plain-tan-stack'],
  name: 'Without TableCore (plain TanStack)',
  render: args => <PlainTable {...args} />,
  args: {
    enableColumnChains: true
  },
  argTypes: {
    chains: {
      table: {
        disable: true
      }
    },
    columnOrder: {
      table: {
        disable: true
      }
    },
    columnPinning: {
      table: {
        disable: true
      }
    },
    columnChainMembers: {
      table: {
        disable: true
      }
    },
    columnChainExpanded: {
      table: {
        disable: true
      }
    },
    resolveChainLayout: {
      table: {
        disable: true
      }
    },
    onColumnOrderChange: {
      table: {
        disable: true
      }
    },
    onColumnPinningChange: {
      table: {
        disable: true
      }
    },
    onColumnChainMembersChange: {
      table: {
        disable: true
      }
    },
    onColumnChainExpandedChange: {
      table: {
        disable: true
      }
    },
    onChainConflicts: {
      table: {
        disable: true
      }
    }
  } as never,
  parameters: {
    chainState: false,
    sceneCode: () => plainCode,
    docs: {
      source: {
        type: 'code',
        language: 'tsx',
        transform: () => plainCode
      }
    }
  }
}`,...(Te=(Se=T.parameters)==null?void 0:Se.docs)==null?void 0:Te.source},description:{story:"The same feature on a bare `useReactTable` — no TableCore, a plain HTML\ntable. Shows that chains are a regular TanStack feature: add it to\n`_features`, pass `chains`, read `column.getIsVisible()` as usual.",...(ve=(je=T.parameters)==null?void 0:je.docs)==null?void 0:ve.description}}};const Mn=["CollapseExpand","ReorderInside","LeaveAndJoin","NotAllowed","Pinning","OutsideState","SwitchedOff","Playground","PlainTanStack"];export{g as CollapseExpand,y as LeaveAndJoin,x as NotAllowed,E as OutsideState,w as Pinning,T as PlainTanStack,S as Playground,f as ReorderInside,O as SwitchedOff,Mn as __namedExportsOrder,Pn as default};
