import{t as w,X as g,h as y,l as r,j as o,Y as H,a0 as O,a1 as _,a4 as q,Z as V,r as u,cd as L,ce as W,c as P,M as F,s as j,f as I,S as N}from"./products-CTiDOXRn.js";import{m as D}from"./rows-l3LcChQt.js";const $=`import Popper from '@mui/material/Popper'
import { useEffect, useRef, useState } from 'react'

import {
	TableCore,
	columnPinningFeature,
	columnSizingFeature,
	createColumnHelper,
	tableFeatures,
	useAnchoredVisibility,
} from '@pnl-simulation/table-core'

import type { FeatureRow } from '../../data/rows'

// A tip tied to a cell (a header's or a body cell's) stands where its owner puts it
// (here a Popper). \`useAnchoredVisibility(anchor, popup)\` is all the table
// adds: the tip is hidden while its anchor is not whole in the part that scrolls,
// and where it goes over a frozen column or the header it is cut, as the cells are.
const features = tableFeatures({ columnPinningFeature, columnSizingFeature })

type TipProps = { text: string; slot: string }

/** A mark with a tip under it: the mark is the anchor, the tip is drawn from the cell. */
const Tip = ({ text, slot }: TipProps) => {
	const anchor = useRef<HTMLSpanElement>(null)
	const popup = useRef<HTMLDivElement>(null)
	const [mounted, setMounted] = useState(false)
	useEffect(() => setMounted(true), [])
	useAnchoredVisibility(anchor, popup) // ← new

	return (
		<>
			<span ref={anchor} data-tip-anchor={slot} style={{ marginLeft: 6 }}>
				ⓘ
			</span>
			{mounted && (
				<Popper
					open
					popperOptions={{ strategy: 'fixed' }}
					ref={popup}
					anchorEl={anchor.current}
					placement="bottom"
					data-tip={slot}
					style={{ zIndex: 20 }}
				>
					<div
						style={{
							width: 220,
							padding: '6px 10px',
							background: '#303240',
							color: '#fff',
							borderRadius: 4,
							fontSize: 12,
						}}
					>
						{text}
					</div>
				</Popper>
			)}
		</>
	)
}

const helper = createColumnHelper<typeof features, FeatureRow>()

const columns = helper.columns([
	helper.accessor('name', { header: 'Name', size: 150 }),
	helper.accessor('team', { header: 'Team', size: 260 }),
	helper.accessor('role', {
		header: 'Role',
		size: 260,
		cell: ({ row, getValue }) => (
			<>
				{getValue()}
				{row.index === 0 && <Tip slot="cell" text="A note on this cell" />}
			</>
		),
	}),
	helper.accessor('country', {
		header: () => (
			<>
				Country
				<Tip slot="header" text="Select the country of the position" />
			</>
		),
		size: 260,
	}),
	helper.accessor('tier', { header: 'Tier', size: 260 }),
	helper.accessor('city', { header: 'City', size: 120 }),
])

export const PopupTable = ({ rows }: { rows: FeatureRow[] }) => (
	<TableCore
		features={features}
		data={rows}
		columns={columns}
		getRowId={(row) => row.id}
		initialState={{ columnPinning: { start: ['name'], end: ['city'] } }}
	/>
)
`,d=e=>document.querySelector(`[data-tip="${e}"]`),b=(e,t)=>e.querySelector(`[data-tip-anchor="${t}"]`),E=e=>{const t=e.getBoundingClientRect();return[t.left+t.width/2,t.top+t.height/2]},c=e=>{var a;const[t,n]=E(e);return!!((a=document.elementFromPoint(t,n))!=null&&a.closest("[data-tip]"))},l=async(e,t,n=e.scrollTop)=>{e.scrollLeft=t,e.scrollTop=n,e.dispatchEvent(new Event("scroll")),await new Promise(a=>{requestAnimationFrame(()=>requestAnimationFrame(a))})},X=async e=>{await w(e);const t=g(e);await y(()=>d("header"),"the tip is drawn");const n=d("header"),a=b(e,"header");await l(t,0,0),r(!c(n),"the mark is under the right frozen zone: no tip"),r(getComputedStyle(n).visibility==="hidden","the tip is hidden, not only covered"),await l(t,560),r(c(n),"the mark is between the frozen columns: the tip is seen");const s=e.querySelector("[data-pinned]").getBoundingClientRect().right;r(n.getBoundingClientRect().left<s,"the tip goes over the left frozen zone (for the cut to be tried)");const i=document.elementFromPoint(s-4,E(n)[1]);r(!(i!=null&&i.closest("[data-tip]")),"the tip is cut at the frozen column"),await l(t,640),r(!c(n),"the mark is under the left frozen zone: no tip"),await l(t,560);const p=a.getBoundingClientRect().left-s;await l(t,560+p+a.getBoundingClientRect().width/2),r(!c(n),"the mark is half under the frozen zone: no tip"),await l(t,560),r(c(n),"back: the tip is seen again")},Y=async e=>{var z;await w(e);const t=g(e);await y(()=>d("cell"),"the tip of the cell is drawn");const n=d("cell"),a=b(e,"cell");await l(t,100,0),r(c(n),"the cell is below the header: the tip is seen");const s=a.getBoundingClientRect(),i=n.getBoundingClientRect();r(i.top>=s.bottom-1,"the note stands under its mark, not over the cells beside it"),r(Math.abs(i.left+i.width/2-(s.left+s.width/2))<4,"the note is centred on its mark");const p=(z=e.querySelector("[role=columnheader]"))==null?void 0:z.closest("[role=row]"),M=a.getBoundingClientRect().top-p.getBoundingClientRect().bottom+a.getBoundingClientRect().height/2;await l(t,100,M),r(!c(n),"the mark is half under the header: no tip"),await l(t,100,0),r(c(n),"back: the tip is seen again")},Z=async e=>{await w(e);const t=g(e);await y(()=>d("header"),"the tip is drawn"),await l(t,560,0);const n=d("header");for(let a=560;a<=640;a+=22){t.scrollLeft=a,t.dispatchEvent(new Event("scroll")),await new Promise(p=>{requestAnimationFrame(p)});const s=e.querySelector("[data-pinned]").getBoundingClientRect().right;b(e,"header").getBoundingClientRect().left<s-.5&&r(getComputedStyle(n).visibility==="hidden",`scrolled to ${a}: the mark went under the frozen zone and the tip is hidden at that frame`)}},G=O({columnPinningFeature:q,columnSizingFeature:_}),T=({text:e,slot:t})=>{const n=u.useRef(null),a=u.useRef(null),[s,i]=u.useState(!1);return u.useEffect(()=>i(!0),[]),L(n,a),o.jsxs(o.Fragment,{children:[o.jsx("span",{ref:n,"data-tip-anchor":t,style:{marginLeft:6},children:"ⓘ"}),s&&o.jsx(W,{open:!0,popperOptions:{strategy:"fixed"},ref:a,anchorEl:n.current,placement:"bottom","data-tip":t,style:{zIndex:20},children:o.jsx("div",{style:{width:220,padding:"6px 10px",background:"#303240",color:"#fff",borderRadius:4,fontSize:12},children:e})})]})},h=V(),J=h.columns([h.accessor("name",{header:"Name",size:150}),h.accessor("team",{header:"Team",size:260}),h.accessor("role",{header:"Role",size:260,cell:({row:e,getValue:t})=>o.jsxs(o.Fragment,{children:[t(),e.index===0&&o.jsx(T,{slot:"cell",text:"A note on this cell"})]})}),h.accessor("country",{header:()=>o.jsxs(o.Fragment,{children:["Country",o.jsx(T,{slot:"header",text:"Select the country of the position"})]}),size:260}),h.accessor("tier",{header:"Tier",size:260}),h.accessor("city",{header:"City",size:120})]),K=({rows:e})=>o.jsx(H,{features:G,data:e,columns:J,getRowId:t=>t.id,initialState:{columnPinning:{start:["name"],end:["city"]}}}),[x]=Object.values([$]),Q={title:"Tables/Table Core/Features/Headers/Popup at a cell",id:"tables-table-core-features-headers-popup",...I(x)},B=({hint:e})=>{const t=u.useMemo(()=>D(30),[]);return o.jsx(N,{hint:e,width:640,maxHeight:260,children:o.jsx(K,{rows:t})})},m={tags:["kb:popup-header"],name:"1 · A tip at a header",parameters:{...j(x,"HeaderTip"),summary:"`useAnchoredVisibility(anchor, popup)`: a tip tied to a cell is seen while its mark is whole between the frozen columns; where it goes over a frozen column it is cut."},render:()=>o.jsx(B,{hint:o.jsx(F,{text:"**Name** and **City** are frozen; **Team**, **Role**, **Country** and **Tier** scroll between them. **Country**, to the right of **Role**, has a tip under its ⓘ. Scroll sideways: the tip is seen while the ⓘ is whole between the frozen columns, and goes when the ⓘ goes under one, even half way. Where the tip itself goes over a frozen column, it is cut there."})}),play:async e=>{P(e)||(await X(e.canvasElement),await Z(e.canvasElement))}},f={tags:["kb:popup-cell"],name:"2 · A note at a cell",parameters:{...j(x,"CellTip"),summary:"The same for a body cell: its row goes under the header, and the note goes with it."},render:()=>o.jsx(B,{hint:o.jsx(F,{text:"The first **Role** (Developer) has a note under its ⓘ. Scroll the rows up: the note goes under the header with its cell, and is back with it."})}),play:async e=>{P(e)||await Y(e.canvasElement)}};var C,R,S;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  tags: ['kb:popup-header'],
  name: '1 · A tip at a header',
  parameters: {
    ...sceneCodeWith(source, 'HeaderTip'),
    summary: '\`useAnchoredVisibility(anchor, popup)\`: a tip tied to a cell is seen while its mark is whole between the frozen columns; where it goes over a frozen column it is cut.'
  },
  render: () => <Scene hint={<Md text="**Name** and **City** are frozen; **Team**, **Role**, **Country** and **Tier** scroll between them. **Country**, to the right of **Role**, has a tip under its ⓘ. Scroll sideways: the tip is seen while the ⓘ is whole between the frozen columns, and goes when the ⓘ goes under one, even half way. Where the tip itself goes over a frozen column, it is cut there." />} />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await headerTipAct(ctx.canvasElement);
    await wheelAct(ctx.canvasElement);
  }
}`,...(S=(R=m.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};var k,v,A;f.parameters={...f.parameters,docs:{...(k=f.parameters)==null?void 0:k.docs,source:{originalSource:`{
  tags: ['kb:popup-cell'],
  name: '2 · A note at a cell',
  parameters: {
    ...sceneCodeWith(source, 'CellTip'),
    summary: 'The same for a body cell: its row goes under the header, and the note goes with it.'
  },
  render: () => <Scene hint={<Md text="The first **Role** (Developer) has a note under its ⓘ. Scroll the rows up: the note goes under the header with its cell, and is back with it." />} />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await cellTipAct(ctx.canvasElement);
  }
}`,...(A=(v=f.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};const U=["HeaderTip","CellTip"],ne=Object.freeze(Object.defineProperty({__proto__:null,CellTip:f,HeaderTip:m,__namedExportsOrder:U,default:Q},Symbol.toStringTag,{value:"Module"}));export{ne as P};
