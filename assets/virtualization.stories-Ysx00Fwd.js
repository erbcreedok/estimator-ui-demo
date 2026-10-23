import{b6 as x,C as F,r as v,j as u,Y as A,F as O,a0 as j,cF as T,be as q,a5 as P,a4 as B,S as $,M as k,c as L,t as M,l as p,y as z,h as i,b as _,s as I,f as N,X as y,n as s,u as g,aC as H,k as W}from"./products-CTiDOXRn.js";import{l as Y,w as X,a as D,f as K}from"./plan-like-scene-Z3UmXR5t.js";const G=`import { useMemo, useState } from 'react'

import {
	TableCore,
	columnOrderingFeature,
	columnPinningFeature,
	columnVirtualizationFeature,
	editOn,
	rowVirtualizationFeature,
	tableFeatures,
} from '@pnl-simulation/table-core'

import {
	features as planFeatures,
	leadingColumns,
	workloadColumns,
	type PlanRow,
} from '../editing/plan-like-table'
import { withWrite } from '../editing/plan-like-scene'

import { makePlan } from './plan'

// A table of many rows and many columns: the people of a plan, and a column for
// each month of the years it spans. Without the two features the table draws every
// row and every column; with them it draws what the scroller shows and a few
// around it, and the room of the rest.
const features = tableFeatures({
	...planFeatures,
	columnPinningFeature, // Name is frozen
	columnOrderingFeature, // ← new: a header is dragged, the table scrolls at its sides
	rowVirtualizationFeature, // ← new: only the rows in the window are drawn
	columnVirtualizationFeature, // ← new: only the columns in the window are drawn
})

/** The features a table asks for: a table without \`rowVirtualizationFeature\` or \`columnVirtualizationFeature\` draws all of them. */
const without = (off: (keyof typeof features)[]) =>
	Object.fromEntries(
		Object.entries(features).filter(([key]) => !off.includes(key as never))
	) as typeof features

type Switch = 'on' | 'off'

type Props = {
	/** How many people the plan has. */
	people?: number
	/** How many months, a column for each. */
	months?: number
	/** Only the rows in the window are drawn. */
	rowVirtualization?: Switch
	/** Only the columns in the window are drawn. */
	columnVirtualization?: Switch
}

export const VirtualTable = ({
	people = 200,
	months = 2400,
	rowVirtualization = 'on',
	columnVirtualization = 'on',
}: Props) => {
	const [rows, setRows] = useState<PlanRow[]>(() => makePlan(people, months))
	const columns = useMemo(
		() => [
			...leadingColumns('editable'),
			...workloadColumns(Object.keys(rows[0]?.workload ?? {})),
		],
		[months] // eslint-disable-line react-hooks/exhaustive-deps
	)
	const used = useMemo(
		() =>
			without([
				...(rowVirtualization === 'off'
					? ['rowVirtualizationFeature' as const]
					: []),
				...(columnVirtualization === 'off'
					? ['columnVirtualizationFeature' as const]
					: []),
			]),
		[rowVirtualization, columnVirtualization]
	)

	return (
		<TableCore<typeof features, PlanRow>
			features={used}
			data={rows}
			// The planning table's columns are this table's: v9 declares the features of a column invariant.
			columns={columns as never}
			getRowId={(row) => row.id}
			meta={{
				onEdit: (rowId: string, columnId: string, value: unknown) =>
					setRows((all) =>
						all.map((r) => (r.id === rowId ? withWrite(r, columnId, value) : r))
					),
			}}
			startEditing={editOn.doubleClick}
			overscanRows={12}
			overscanColumns={4}
			initialState={{ columnPinning: { start: ['name'], end: [] } }}
		/>
	)
}
`,J=[1,.5,.75,.25],Q=(e,t)=>{const o=x(new Date,t);return F(e).map((n,l)=>({...n,workload:Object.fromEntries(o.map((r,a)=>[r,J[(l+a)%4]]))}))},U=j({...K,columnPinningFeature:B,columnOrderingFeature:P,rowVirtualizationFeature:q,columnVirtualizationFeature:T}),Z=e=>Object.fromEntries(Object.entries(U).filter(([t])=>!e.includes(t))),ee=({people:e=200,months:t=2400,rowVirtualization:o="on",columnVirtualization:n="on"})=>{const[l,r]=v.useState(()=>Q(e,t)),a=v.useMemo(()=>{var w;return[...Y("editable"),...X(Object.keys(((w=l[0])==null?void 0:w.workload)??{}))]},[t]),d=v.useMemo(()=>Z([...o==="off"?["rowVirtualizationFeature"]:[],...n==="off"?["columnVirtualizationFeature"]:[]]),[o,n]);return u.jsx(A,{features:d,data:l,columns:a,getRowId:w=>w.id,meta:{onEdit:(w,c,m)=>r(h=>h.map(b=>b.id===w?D(b,c,m):b))},startEditing:O.doubleClick,overscanRows:12,overscanColumns:4,initialState:{columnPinning:{start:["name"],end:[]}}})},[E]=Object.values([G]),te=240,ne=({people:e,months:t,hint:o,...n})=>{const l=n.columnVirtualization==="off"&&t>=te;return u.jsx($,{fit:"scroll",hint:u.jsxs(u.Fragment,{children:[o,l&&u.jsx(k,{text:`**Column virtualization is off:** every row draws all ${t+8} columns, ${(t+8)*e} cells at once. Turn **columnVirtualization** on.`})]}),children:u.jsx(ee,{...n,people:e,months:t})})},oe={title:"Tables/Table Core/Features/Virtualization/Rows and columns",id:"tables-table-core-features-virtualization-rows-and-columns",...N(E)},ae=async e=>{const t=y(e);await i(()=>s(e).includes("level")&&s(e).includes("rate")&&t.scrollLeft===0,"the table is back at the left");const o=s(e).indexOf("level");p(o>=0&&o<s(e).indexOf("rate"),`Level is before Rate: ${s(e).slice(0,10).join()}`);const n=e.querySelector('[data-header-id="rate"]');W(e,"level",n.getBoundingClientRect().right-6,!1);const l=t.getBoundingClientRect().right-8;window.dispatchEvent(new PointerEvent("pointermove",{bubbles:!0,clientX:l,clientY:60})),await i(()=>t.scrollLeft>300,"the header held at the right edge scrolls the table"),p(e.querySelectorAll("[data-header-id]").length<60,"the header draws a window of columns while it scrolls"),window.dispatchEvent(new PointerEvent("pointerup",{bubbles:!0,button:0})),t.scrollLeft=0,t.dispatchEvent(new Event("scroll")),await i(()=>s(e).indexOf("level")>s(e).indexOf("rate"),`Level was dropped after Rate: ${s(e).slice(0,12).join()}`)},le=async e=>{const t=y(e),o=s(e).find(c=>/^\d{4}-\d{2}$/.test(c)),n=s(e).filter(c=>/^\d{4}-\d{2}$/.test(c))[1],l=e.querySelector(`[role=row][data-row-id] [data-column-id="${o}"]`);await g.click(l),await H(e.querySelector(`[role=row][data-row-id] [data-column-id="${n}"]`)),await i(()=>e.querySelector("[data-fill-handle]"),"a selected cell has the fill handle");const r=()=>e.querySelector("[data-fill-handle]"),a=c=>{const m=r().getBoundingClientRect(),h=document.elementFromPoint(m.left+m.width/2,m.top+m.height/2+c);return!!(h!=null&&h.closest("[data-fill-handle]"))},d=c=>{t.scrollLeft+=c,t.dispatchEvent(new Event("scroll"))},w=e.querySelector('[data-header-id="name"]');p(a(-3),"the handle is on top over its cell"),d(r().getBoundingClientRect().left+14-w.getBoundingClientRect().right+40),await i(()=>!a(-3)&&!a(3),"the handle is not over the frozen Name"),d(3e3),await i(()=>!a(-3)&&!a(3),"the handle left with its cell"),t.scrollLeft=0,t.dispatchEvent(new Event("scroll")),await i(()=>e.querySelector("[data-fill-handle]"),"the handle is back with its cell when the table scrolls back"),await g.keyboard("{Escape}"),await ie(e)},re=async e=>{const t=y(e),o=e.querySelector("[data-header-group-id]"),n=e.querySelector('[data-header-id="name"]');t.scrollLeft+=o.getBoundingClientRect().left-n.getBoundingClientRect().right+200,t.dispatchEvent(new Event("scroll")),await i(()=>{const r=o.querySelector("[data-header-group-label]").getBoundingClientRect();return r.width>20&&r.left>=n.getBoundingClientRect().right-1&&r.right<=o.getBoundingClientRect().right+1},"the name of the year stands right of Name, inside its year"),t.scrollLeft=0,t.dispatchEvent(new Event("scroll"))},ie=async e=>{const t=y(e),o=s(e).find(a=>/^\d{4}-\d{2}$/.test(a)),n=e.querySelector(`[role=row][data-row-id] [data-column-id="${o}"]`);await g.dblClick(n),await i(()=>e.querySelector('[data-editing="true"]'),"the cell is in edit");const l=e.querySelector('[data-header-id="name"]'),r=n.getBoundingClientRect();t.scrollLeft+=r.left+r.width/2-l.getBoundingClientRect().right+60,t.dispatchEvent(new Event("scroll")),await i(()=>{const a=n.getBoundingClientRect(),d=document.elementFromPoint(a.left+a.width/2,a.top+a.height/2);return!!(d!=null&&d.closest("[data-pinned]"))},"the cell in edit is under the frozen Name"),await g.keyboard("{Escape}"),t.scrollLeft=0,t.dispatchEvent(new Event("scroll"))},C=e=>e.querySelectorAll("[data-cell]").length,f={tags:["kb:virtualization-rows-and-columns"],name:"Rows and columns",parameters:{...I(E,"RowsAndColumns"),summary:"Two hundred people and two hundred years of months: 2 400 columns. The table draws the rows and the columns in the window of the scroller and the room of the rest; the frozen Name stays."},args:{people:200,months:2400,rowVirtualization:"on",columnVirtualization:"on"},argTypes:{people:{control:{type:"select"},options:[20,200,1e3]},months:{control:{type:"select"},options:[36,240,2400]},rowVirtualization:{control:"radio",options:["on","off"]},columnVirtualization:{control:"radio",options:["on","off"]}},render:e=>u.jsx(_,{args:e,children:u.jsx(ne,{...e,hint:u.jsx(k,{text:"A column for each month, a group for each year. Scroll sideways and down: the cells that are drawn are the ones in the window and a few around it (**overscanRows**, **overscanColumns**), the rest is room. Name is frozen. Turn a virtualization off to see what the table costs without it."})})}),play:async e=>{if(L(e))return;const t=e.canvasElement;await M(t),await re(t),await le(t),await ae(t),p(C(t)<1500,`2 400 columns, a window of cells: ${C(t)}`),await z(e,{months:240,people:20,columnVirtualization:"off"}),await i(()=>t.querySelectorAll("[data-cell]").length>4800,"columnVirtualization off: every column of every row is drawn"),await i(()=>/Column virtualization is off/.test(t.textContent??""),"the scene warns that every column is drawn"),await z(e,{columnVirtualization:"on"}),await i(()=>t.querySelectorAll("[data-cell]").length<1200,"columnVirtualization on: a window of columns")}};var R,S,V;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ['kb:virtualization-rows-and-columns'],
  name: 'Rows and columns',
  parameters: {
    ...sceneCodeWith(source, 'RowsAndColumns'),
    summary: 'Two hundred people and two hundred years of months: 2 400 columns. The table draws the rows and the columns in the window of the scroller and the room of the rest; the frozen Name stays.'
  },
  args: {
    people: 200,
    months: 2400,
    rowVirtualization: 'on',
    columnVirtualization: 'on'
  },
  argTypes: {
    people: {
      control: {
        type: 'select'
      },
      options: [20, 200, 1000]
    },
    months: {
      control: {
        type: 'select'
      },
      options: [36, 240, 2400]
    },
    rowVirtualization: {
      control: 'radio',
      options: ['on', 'off']
    },
    columnVirtualization: {
      control: 'radio',
      options: ['on', 'off']
    }
  },
  render: args => <Remount args={args}>
            <Scene {...args} hint={<Md text="A column for each month, a group for each year. Scroll sideways and down: the cells that are drawn are the ones in the window and a few around it (**overscanRows**, **overscanColumns**), the rest is room. Name is frozen. Turn a virtualization off to see what the table costs without it." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    const c = ctx.canvasElement;
    await tableReady(c);
    await groupLabelAct(c);
    await fillHandleAct(c);
    await dragAutoscrollAct(c);
    check(cellsIn(c) < 1500, \`2 400 columns, a window of cells: \${cellsIn(c)}\`);
    await setArgs(ctx, {
      months: 240,
      people: 20,
      columnVirtualization: 'off'
    });
    await until(() => c.querySelectorAll('[data-cell]').length > 20 * 240, 'columnVirtualization off: every column of every row is drawn');
    await until(() => /Column virtualization is off/.test(c.textContent ?? ''), 'the scene warns that every column is drawn');
    await setArgs(ctx, {
      columnVirtualization: 'on'
    });
    await until(() => c.querySelectorAll('[data-cell]').length < 20 * 60, 'columnVirtualization on: a window of columns');
  }
}`,...(V=(S=f.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};const se=["RowsAndColumns"],de=Object.freeze(Object.defineProperty({__proto__:null,RowsAndColumns:f,__namedExportsOrder:se,default:oe},Symbol.toStringTag,{value:"Module"}));export{de as R};
