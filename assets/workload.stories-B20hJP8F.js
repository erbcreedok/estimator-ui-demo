import{t as F,Q as d,l as n,I as E,H as R,G as I,h as m,u as w,aC as j,X as S,J as q,ae as N,cB as Q,N as H,r as J,j as M,Y as K,F as U,a0 as Z,bh as ee,bi as te,a4 as ae,bj as oe,S as ne,c as re,y as se,b as le,M as ie,p as de,d as ce,s as he,e as we,f as ue}from"./products-CTiDOXRn.js";import{g as z}from"./checks-BmVl_141.js";import{l as me,w as fe,f as pe,m as ye,a as ge}from"./plan-like-scene-Z3UmXR5t.js";const f=e=>e.getBoundingClientRect(),C=(e=250)=>new Promise(t=>{setTimeout(t,e)}),b=(e,t,o)=>t.dispatchEvent(new PointerEvent(e,{bubbles:!0,button:0,...o})),v=e=>{const t=f(e);return{clientX:t.left+t.width/2,clientY:t.top+t.height/2}},L=(e,t="")=>{const o=new DataTransfer;return o.setData("text/plain",t),{data:o,event:new ClipboardEvent(e,{bubbles:!0,cancelable:!0,clipboardData:o})}},V=async e=>{let t=-1;for(;S(e).scrollLeft!==t;)t=S(e).scrollLeft,await C(120)},P=(e,t,o)=>t.map(a=>o.map(r=>d(e,a,r))),y=e=>Array.from(e.querySelectorAll("[data-selection]")).map(t=>`${t.dataset.rowIndex}:${t.dataset.colIndex}`),W=e=>{var t;return Number((t=e.querySelector('[data-cell][data-column-id^="20"]'))==null?void 0:t.dataset.colIndex)},T=async(e,t)=>{const o=e.querySelector('[data-header-id="name"]'),a=e.querySelector(`[data-header-id="${t}"]`);S(e).scrollLeft+=f(a).left-f(o).right-4,await V(e)},ke=async e=>{var l;await F(e);const t=z(e).filter(g=>{var s;return(s=g.dataset.headerGroupId)==null?void 0:s.startsWith("workload_")});n(t.length>=3,`a group for each year: ${t.length}`),n((l=t[0].textContent)==null?void 0:l.startsWith("Workload "),`the first year says Workload: ${t[0].textContent}`);const o=e.querySelector('[data-header-id^="20"]');n(Math.abs(f(t[0]).left-f(o).left)<1,"the group starts over its first month");const a=e.querySelector('[data-header-id="name"]');n(a.dataset.pinned==="left","Name is frozen");const r=()=>!!e.querySelector('[data-header-id="rate"][data-group-edge]')&&!!e.querySelector('[data-cell][data-column-id="rate"][data-group-edge]');await m(r,"a line before the first year, from the start");for(const g of[1,2]){const s=t[g],k=s.querySelector("[data-header-group-label]"),p=f(S(e)),O=f(s).left-p.left+S(e).scrollLeft+200;S(e).scrollLeft=O,await m(()=>f(s).left<p.left+f(a).width,`year ${g+1} is scrolled into`),await m(()=>f(k).left>=p.left&&f(k).right<=p.right,`the name of year ${g+1} stays in the window`),n(f(a).left<p.left+4&&a.dataset.pinned==="left","and Name stays"),n(r(),"the line before the years is there, scrolled")}const c=Array.from(e.querySelectorAll('[data-header-id^="20"][data-group-edge]'));n(c.length===t.length-1,`a line after each year but the last: ${c.length}`),n(!!e.querySelector(`[data-cell][data-column-id="${c[0].dataset.headerId}"][data-group-edge]`),"and in the body"),S(e).scrollLeft=0;const h=N(e).join(),u=e.querySelectorAll('[data-header-id^="20"]')[3];await T(e,u.dataset.headerId),await w.click(u.querySelector("button")),await m(()=>N(e).join()!==h,"a click on a month sorts the rows"),n(z(e).length>=t.length-1,"the groups of the years stay over their months")},be=async e=>{await F(e);const t=W(e),o=Array.from(e.querySelectorAll('[data-header-id^="20"]')).map(i=>i.dataset.headerId);await T(e,o[0]);const a=(i,x)=>q(e,i,x),r=e.querySelector("[role=grid]");await w.click(a(0,t+1)),n(y(e).join()===`0:${t+1}`,`a click selects one cell: ${y(e)}`),await j(a(2,t+3)),await m(()=>y(e).length===9,`Shift+click: a range of 9, got ${y(e).length}`),b("pointerdown",a(1,t),v(a(1,t))),b("pointerover",a(3,t+1),v(a(3,t+1))),b("pointerup",window,v(a(3,t+1))),await m(()=>y(e).length===6,`a drag: a range of 6, got ${y(e).length}`),await w.click(a(0,t)),await w.keyboard("{ArrowRight}{ArrowDown}"),n(y(e).join()===`1:${t+1}`,`arrows move: ${y(e)}`),await w.keyboard("{Shift>}{ArrowRight}{ArrowDown}{/Shift}"),await m(()=>y(e).length===4,`Shift+arrows: a range of 4, got ${y(e).length}`);const c=L("copy");r.dispatchEvent(c.event);const h=c.data.getData("text/plain");n(h.split(`
`).length===2,`the copy is two lines: ${h}`);const u=P(e,[1,2],[t+1,t+2]);await w.click(a(4,t+4)),r.dispatchEvent(L("paste",h).event),await m(()=>JSON.stringify(P(e,[4,5],[t+4,t+5]))===JSON.stringify(u),"a paste lays the range from the active cell"),await w.click(a(6,t)),await j(a(7,t+1)),await w.keyboard("{Delete}"),await C(500),await m(()=>P(e,[6,7],[t,t+1]).flat().every(i=>i==="0.00"),"Delete clears the range"),S(e).scrollLeft=120,await w.click(a(8,t+4));const l=a(8,t+4).querySelector("[data-fill-handle]");b("pointerdown",l,v(l));const s={clientX:f(a(8,0)).right+8,clientY:v(a(8,t+1)).clientY};b("pointermove",window,s);const k=Array.from(e.querySelectorAll('[data-row-index="8"][data-cell]')).find(i=>f(i).left<=s.clientX&&s.clientX<f(i).right);await m(()=>k.hasAttribute("data-fill"),`the frame is on the month under the pointer, ${k.dataset.colIndex}`),b("pointerup",window,s),await C();const p=async(i,x)=>{await w.click(a(...i)),await V(e);const D=a(...i).querySelector("[data-fill-handle]");b("pointerdown",D,v(D)),b("pointermove",window,v(a(...x))),await m(()=>a(...x).hasAttribute("data-fill"),"the frame follows the pointer"),b("pointerup",window,v(a(...x))),await C()};await p([0,t+6],[3,t+6]),n([1,2,3].every(i=>d(e,i,t+6)===d(e,0,t+6)),"fill down"),await p([3,t+7],[0,t+7]),n([0,1,2].every(i=>d(e,i,t+7)===d(e,3,t+7)),"fill up"),await p([5,t],[5,t+3]),n([1,2,3].every(i=>d(e,5,t+i)===d(e,5,t)),"fill to the right"),await p([6,t+5],[6,t+2]),n([2,3,4].every(i=>d(e,6,t+i)===d(e,6,t+5)),"fill to the left");const O=o.findIndex(i=>i.endsWith("-12"));await T(e,o[O-2]);const A=t+O;await w.click(a(1,A)),await j(a(1,A+1)),await m(()=>y(e).length===2,`December and January are one range: ${y(e)}`),await p([2,A],[2,A+2]),n([1,2].every(i=>d(e,2,A+i)===d(e,2,A)),"a fill goes over the border of a year")},ve=async e=>{var l,g;await F(e);const t=W(e),o=Array.from(e.querySelectorAll('[data-header-id^="20"]')).map(s=>s.dataset.headerId);await T(e,o[0]);const a=q(e,0,t+2);await w.dblClick(a);const r=await R(e),c=async s=>{for(const k of s)await H(E(e),`${r.value}${k}`)},h=async s=>(await H(r,""),await c(s),r.value),u=[["0","0."],[".","0."],["5","0.5"],["1","1"],["1.","1."],["1.5","1."],["1.00","1.00"],["12","0.12"],["0.575","0.57"],["99","0.99"]];for(const[s,k]of u){const p=await h(s);n(p===k,`typing "${s}" holds "${k}": "${p}"`)}await h("0.5"),r.dispatchEvent(new InputEvent("input",{bubbles:!0,inputType:"deleteContentBackward"})),(g=(l=Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,"value"))==null?void 0:l.set)==null||g.call(r,"0."),r.dispatchEvent(new InputEvent("input",{bubbles:!0,inputType:"deleteContentBackward"})),await C(80),n(r.value==="0.",`a deletion keeps what is left: "${r.value}"`),await h("7"),I(r,"Enter"),await m(()=>d(e,0,t+2)==="0.70",`Enter saves 0.7 as the cell shows it: ${d(e,0,t+2)}`)},Se=async e=>{await F(e);const t=W(e),o=Array.from(e.querySelectorAll('[data-header-id^="20"]')).map(u=>u.dataset.headerId);await T(e,o[0]);const a=(u,l)=>q(e,u,l);await w.click(a(3,t+1));const r=d(e,3,t+1);await w.keyboard("5");const c=await R(e);n(c.value==="0.5",`5 opens the editor with 0.5: "${c.value}"`),I(c,"Escape"),await m(()=>!E(e),"Esc closes the editor"),n(d(e,3,t+1)===r,`Esc leaves the value: ${d(e,3,t+1)} was ${r}`),await w.keyboard("{ArrowRight}{ArrowDown}"),n(y(e).join()===`4:${t+2}`,`the arrows go on: ${y(e)}`),await w.keyboard("7");const h=await R(e);n(h.value==="0.7",`7 opens with 0.7: "${h.value}"`),I(h,"Enter"),await m(()=>d(e,4,t+2)==="0.70",`Enter saves it: ${d(e,4,t+2)}`),await w.click(a(5,t)),await w.keyboard("{Control>}c{/Control}"),n(!E(e),"Ctrl+C opens no editor")},Ee=async e=>{const t=Q();if(!t)return;await F(e);const o=W(e),a=Array.from(e.querySelectorAll('[data-header-id^="20"]')).map(l=>l.dataset.headerId);await T(e,a[0]);const r=(l,g)=>{const s=q(e,l,g).getBoundingClientRect();return[s.left+s.width/2,s.top+s.height/2]},c=d(e,2,o+1);await t(...r(2,o+1),1),await C(500),n(e.querySelectorAll("[data-fill-handle]").length===1,"a click: the dot stands"),n(!E(e),"a click opens no editor"),n(d(e,2,o+1)===c,"the cell keeps its look");for(let l=0;l<20;l+=1)await t(...r(l%8,o+l%5),1),await C(120),n(e.querySelectorAll("[data-fill-handle]").length===1&&!E(e),`click ${l}: the dot is there, no editor`);const h=d(e,3,o+2);await t(...r(3,o+2),2);const u=await R(e);n(u.value===h,`a double click opens the field with the look of the cell: ${u.value}`),I(u,"Escape"),await m(()=>!E(e),"Esc closes it"),await t(...r(4,o),1),await w.keyboard("5"),n((await R(e)).value==="0.5","a digit opens the field"),I(E(e),"Escape")},Ce=`import { useMemo } from 'react'

import {
	TableCore,
	columnPinningFeature,
	createSortedRowModel,
	editOn,
	rowSortingFeature,
	sortFn_text,
	tableFeatures,
} from '@pnl-simulation/table-core'

import {
	features as planFeatures,
	leadingColumns,
	workloadColumns,
	type PlanRow,
} from '../editing/plan-like-table'

// The Resource Plan's workload, a step over the planning table of Editing: the
// columns are the same (a group for each year, a column for each month under
// it, edited, selected and filled like any cell), and the step adds what the
// header needs to show: Name frozen at the left and a sort by a month.
const features = tableFeatures({
	...planFeatures,
	columnPinningFeature, // ← new: Name is frozen
	rowSortingFeature, // ← new: a month is sorted
	sortedRowModel: createSortedRowModel(), // ← new
	sortFns: { text: sortFn_text }, // ← new
})

type Props = {
	rows: PlanRow[]
	onEdit: (rowId: string, columnId: string, value: unknown) => void
	/** The index of the month the rows start sorted by (descending); none: unsorted. */
	sortedMonth?: number
}

export const WorkloadTable = ({ rows, onEdit, sortedMonth }: Props) => {
	const months = Object.keys(rows[0]?.workload ?? {})
	const columns = useMemo(
		() => [...leadingColumns('editable'), ...workloadColumns(months)],
		[months.join()] // eslint-disable-line react-hooks/exhaustive-deps
	)

	return (
		<TableCore<typeof features, PlanRow>
			features={features}
			data={rows}
			// The planning table's columns are this table's: v9 declares the features of a column invariant.
			columns={columns as never}
			getRowId={(row) => row.id}
			meta={{ onEdit }}
			// A click selects here (to copy, paste or fill): editing needs a double click.
			startEditing={editOn.doubleClick} // ← new
			defaultColumn={{ sortFn: 'text' }} // ← new: the workloads sort as text
			initialState={{
				columnPinning: { start: ['name'], end: [] },
				sorting:
					sortedMonth === undefined
						? []
						: [{ id: months[sortedMonth], desc: true }],
			}}
		/>
	)
}
`,Ae=Z({...pe,columnPinningFeature:ae,rowSortingFeature:te,sortedRowModel:oe(),sortFns:{text:ee}}),Me=({rows:e,onEdit:t,sortedMonth:o})=>{var c;const a=Object.keys(((c=e[0])==null?void 0:c.workload)??{}),r=J.useMemo(()=>[...me("editable"),...fe(a)],[a.join()]);return M.jsx(K,{features:Ae,data:e,columns:r,getRowId:h=>h.id,meta:{onEdit:t},startEditing:U.doubleClick,defaultColumn:{sortFn:"text"},initialState:{columnPinning:{start:["name"],end:[]},sorting:o===void 0?[]:[{id:a[o],desc:!0}]}})},[G]=Object.values([Ce]),Te=({hint:e,sortedMonth:t})=>{const[o,a]=J.useState(ye);return M.jsx(ne,{hint:e,children:M.jsx(Me,{rows:o,sortedMonth:t,onEdit:(r,c,h)=>a(u=>u.map(l=>l.id===r?ge(l,c,h):l))})})},xe={title:"Tables/Table Core/Features/Headers/Workload",id:"tables-table-core-features-headers-workload",...ue(G)},_={"no sort":{value:void 0,code:"undefined"},"the second month":{value:1,code:"1"}},$={tags:["kb:headers-workload","kb:headers-workload-cells"],name:"Workload",parameters:{...he(G,"Workload",we({sortedMonth:_})),summary:"The workload of the Resource Plan as column groups: a group for each year, a column for each month under it, over three years. Name is frozen. The months are cells like any: they are selected, copied, pasted, cleared and filled as in a spreadsheet."},args:{sortedMonth:"no sort"},argTypes:{sortedMonth:ce(_)},render:e=>M.jsx(le,{args:e,children:M.jsx(Te,{sortedMonth:de(_,e.sortedMonth),hint:M.jsx(ie,{text:"A group for each year, made from the months the people have; the first year says **Workload**. **Name** is frozen: scroll sideways and the years slide under it, the name of a year stays beside it. The months are cells: click one, **Shift+click** another or drag across for a range, the arrows move and **Shift+arrows** grow it, **Ctrl/⌘+C** and **Ctrl/⌘+V** copy a range and lay it from another cell, **Delete** clears it, the dot on its corner fills up, down, right and left. Pick a month in **sortedMonth** to start the rows sorted by it; a click on a month's header sorts too, the groups stay."})})}),play:async e=>{re(e)||(await Ee(e.canvasElement),await be(e.canvasElement),await ve(e.canvasElement),await Se(e.canvasElement),await se(e,{sortedMonth:"the second month"}),await ke(e.canvasElement))}};var B,X,Y;$.parameters={...$.parameters,docs:{...(B=$.parameters)==null?void 0:B.docs,source:{originalSource:`{
  // The two slugs of the two scenes this one took over stay.
  tags: ['kb:headers-workload', 'kb:headers-workload-cells'],
  name: 'Workload',
  parameters: {
    ...sceneCodeWith(workloadSource, 'Workload', presetCodes({
      sortedMonth: SORTED_MONTHS
    })),
    summary: 'The workload of the Resource Plan as column groups: a group for each year, a column for each month under it, over three years. Name is frozen. The months are cells like any: they are selected, copied, pasted, cleared and filled as in a spreadsheet.'
  },
  args: {
    sortedMonth: 'no sort'
  },
  argTypes: {
    sortedMonth: presetControl(SORTED_MONTHS)
  },
  render: args => <Remount args={args}>
            <WorkloadScene sortedMonth={presetValue(SORTED_MONTHS, args.sortedMonth)} hint={<Md text="A group for each year, made from the months the people have; the first year says **Workload**. **Name** is frozen: scroll sideways and the years slide under it, the name of a year stays beside it. The months are cells: click one, **Shift+click** another or drag across for a range, the arrows move and **Shift+arrows** grow it, **Ctrl/⌘+C** and **Ctrl/⌘+V** copy a range and lay it from another cell, **Delete** clears it, the dot on its corner fills up, down, right and left. Pick a month in **sortedMonth** to start the rows sorted by it; a click on a month's header sorts too, the groups stay." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await workloadClickAct(ctx.canvasElement);
    await workloadSelectionAct(ctx.canvasElement);
    await workloadMaskAct(ctx.canvasElement);
    await workloadTypingAct(ctx.canvasElement);
    await setArgs(ctx, {
      sortedMonth: 'the second month'
    });
    await workloadHeaderAct(ctx.canvasElement);
  }
}`,...(Y=(X=$.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const $e=["Workload"],Oe=Object.freeze(Object.defineProperty({__proto__:null,Workload:$,__namedExportsOrder:$e,default:xe},Symbol.toStringTag,{value:"Module"}));export{Oe as W};
