import{C as $,S as xe,_ as Oe}from"./clipboard-table-CX-6fC6A.js";import{r as I,j as s,Y as Ne,F as Re,S as Je,c as C,u as o,aC as y,h as c,l as f,b as H,s as q,J as n,X as De,Q as h,bq as je,f as Pe,bY as Fe}from"./products-CTiDOXRn.js";import{l as Se,w as qe,P as Be,f as Ie,m as We,a as Me}from"./plan-like-scene-Z3UmXR5t.js";import{P as B}from"./people-scene-CnMRUXe9.js";import{e as Y,c as _e,a as K}from"./controls-BCXw8klf.js";const Le=`import { useMemo } from 'react'

import { TableCore, editOn } from '@pnl-simulation/table-core'

import {
	PLAN_PINNING,
	features,
	leadingColumns,
	workloadColumns,
	type PlanRow,
} from '../plan-like-table'

// The fill handle needs cells to be selected, edited and written. The planning
// table of the Resource Plan: the person's columns are only shown (they cannot be
// written), the workload is a group of columns for each year with a column for
// each month under it, and the months are what is filled.
type Props = {
	rows: PlanRow[]
	readOnly: boolean
	/** The row the screen locks: its cells say why they cannot be written. */
	lockedId: string
	/** Every value written, by typing, paste or fill, comes here to be saved. */
	onEdit: (rowId: string, columnId: string, value: unknown) => void
}

/** The column of the first month: the person's columns stand before it. */
export const FIRST_MONTH = leadingColumns('read only').length

export const WorkloadsTable = ({ rows, readOnly, lockedId, onEdit }: Props) => {
	const months = Object.keys(rows[0]?.workload ?? {})
	const columns = useMemo(
		() => [...leadingColumns('read only'), ...workloadColumns(months)],
		[months.join()] // eslint-disable-line react-hooks/exhaustive-deps
	)

	return (
		<TableCore
			// A click selects here (to copy, paste or fill): editing needs a double click.
			startEditing={editOn.doubleClick}
			features={features}
			data={rows}
			columns={columns}
			getRowId={(plan) => plan.id}
			readOnly={readOnly}
			rowHeight={42}
			meta={{ onEdit }}
			initialState={{ columnPinning: PLAN_PINNING }}
			resolvers={{
				getCanEdit: ({ row }) => (row.id === lockedId ? 'On leave' : true),
			}}
		/>
	)
}
`,Ze=Se("read only").length,$e=({rows:t,readOnly:e,lockedId:l,onEdit:r})=>{var w;const d=Object.keys(((w=t[0])==null?void 0:w.workload)??{}),u=I.useMemo(()=>[...Se("read only"),...qe(d)],[d.join()]);return s.jsx(Ne,{startEditing:Re.doubleClick,features:Ie,data:t,columns:u,getRowId:m=>m.id,readOnly:e,rowHeight:42,meta:{onEdit:r},initialState:{columnPinning:Be},resolvers:{getCanEdit:({row:m})=>m.id===l?"On leave":!0}})},[He]=Object.values([Le]),Ye="On leave",Ke="p6",Ve=({hint:t})=>{const[e,l]=I.useState(We),[r,d]=I.useState(!1),u=I.useCallback((w,m,Ae)=>l(Te=>Te.map(M=>M.id===w?Me(M,m,Ae):M)),[]);return s.jsxs(Je,{hint:t,children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,height:32},children:[s.jsx("input",{"aria-label":"Read only",type:"checkbox",checked:r,onChange:w=>d(w.target.checked)}),s.jsx("span",{children:"Read only"})]}),s.jsx($e,{rows:e,readOnly:r,lockedId:Ke,onEdit:u})]})},[E]=Object.values([Oe]),lt={title:"Tables/Table Core/Features/Editing/Writing from the clipboard",id:"tables-table-core-features-cell-features-writing",...Pe(E)},a=(t,e,l)=>t.querySelector(`[data-row-index="${e}"][data-col-index="${l}"]`),p=(t,e,l)=>e.map(r=>l.map(d=>a(t,r,d).textContent)),x=t=>c(()=>t.querySelector('[role="grid"] [data-cell]'),"the table is drawn"),k=t=>Array.from(t.querySelectorAll("[data-results] tr")).map(e=>Array.from(e.children).map(l=>l.textContent)),W=(t,e="")=>{const l=new DataTransfer;return l.setData("text/plain",e),new ClipboardEvent(t,{bubbles:!0,cancelable:!0,clipboardData:l})},v=(t,e)=>t.dispatchEvent(W("paste",e)),S={tags:["kb:cell-features-copy-paste"],name:"1 · Copy and paste",parameters:{...q(E,"CopyAndPaste",K),summary:"Ctrl/⌘+C puts the active cell or the range on the clipboard as tab-separated text; Ctrl/⌘+V lays text from the active cell, one value goes to every cell of a range, and the table under it says how each cell went."},args:{startEditing:"doubleClick",readOnly:!1},argTypes:Y,render:t=>s.jsx(H,{args:t,children:s.jsx(B,{Table:$,...t,readouts:!0,hint:s.jsxs(s.Fragment,{children:["Select a few cells (click, then Shift+click) and press Ctrl/⌘+C: the text is under the table. Click another cell and press Ctrl/⌘+V: the text lands from it, and ",s.jsx("b",{children:"Written"})," says how each cell went."]})})}),play:async t=>{if(C(t))return;const e=t.canvasElement;await x(e),await o.click(a(e,0,0)),await y(a(e,1,1)),a(e,1,1).dispatchEvent(W("copy"));const r=p(e,[0,1],[0,1]).map(d=>d.join("	")).join(`
`);await c(()=>{var d;return((d=e.querySelector("[data-copied]"))==null?void 0:d.textContent)===r},"Copy put the range on the clipboard as tab-separated text"),await o.click(a(e,3,0)),v(a(e,3,0),`Zed	QA
Yan	Ops`),await c(()=>JSON.stringify(p(e,[3,4],[0,1]))===JSON.stringify([["Zed","QA"],["Yan","Ops"]]),"the pasted text lands from the active cell"),f(k(e).length===4&&k(e).every(d=>d[1]==="applied"),"the four cells went through"),await o.click(a(e,6,0)),await y(a(e,7,1)),v(a(e,7,1),"Same"),await c(()=>p(e,[6,7],[0,1]).flat().every(d=>d==="Same"),"one value goes to every cell of the range"),await _e(t,"doubleClick")}},A={tags:["kb:cell-features-delete-fill"],name:"2 · Delete and Ctrl+D",parameters:{...q(E,"DeleteAndFill",K),summary:"Delete clears the range (what the column says, an empty string by default); Ctrl/⌘+D fills it down from its first row, Ctrl/⌘+R right from its first column. Both write the way a paste does."},args:{startEditing:"doubleClick",readOnly:!1},argTypes:Y,render:t=>s.jsx(H,{args:t,children:s.jsx(B,{Table:$,...t,readouts:!0,hint:s.jsxs(s.Fragment,{children:["Select a range and press ",s.jsx("b",{children:"Delete"}),": the cells are empty. Select a range and press ",s.jsx("b",{children:"Ctrl/⌘+D"}),": its first row is copied down;"," ",s.jsx("b",{children:"Ctrl/⌘+R"})," copies its first column right."]})})}),play:async t=>{if(C(t))return;const e=t.canvasElement;await x(e),await o.click(a(e,4,0)),await y(a(e,5,1)),await o.keyboard("{Delete}"),await c(()=>p(e,[4,5],[0,1]).flat().every(r=>r===""),"Delete cleared the range");const l=p(e,[6],[0,1])[0];await o.click(a(e,6,0)),await y(a(e,8,1)),await o.keyboard("{Control>}d{/Control}"),await c(()=>p(e,[7,8],[0,1]).every(r=>JSON.stringify(r)===JSON.stringify(l)),"Ctrl+D copied the first row of the range down"),await o.click(a(e,9,0)),await y(a(e,9,1)),await o.keyboard("{Control>}r{/Control}"),await c(()=>p(e,[9],[1])[0][0]===p(e,[9],[0])[0][0],"Ctrl+R copied the first column of the range right")}},T={tags:["kb:cell-features-refusals"],name:"3 · Cells that cannot be written",parameters:{...q(E,"Refusals",K),summary:"A cell is refused with a reason: a column that is not editable, a row the screen locked (resolvers.getCanEdit), a text the column does not parse, a cell past the edge of the table. The table says so under the grid; the screen’s onCellsWritten gets every result."},args:{startEditing:"doubleClick",readOnly:!1},argTypes:Y,render:t=>s.jsx(H,{args:t,children:s.jsx(B,{Table:$,...t,readouts:!0,hint:s.jsx(s.Fragment,{children:"Click Level of the second row and paste text that does not fit: the notice under the table lists each refused cell with its reason (Role is not editable, the third row is locked, a bad Level, the edge). The rest is written."})})}),play:async t=>{var r,d;if(C(t))return;const e=t.canvasElement;await x(e),await o.click(a(e,1,2)),v(a(e,1,2),`Z9	Peru	x
y	z	w`),await c(()=>e.querySelector("[data-write-notice]"),"the table says that cells were not written");const l=k(e).map(u=>u[2]);f(JSON.stringify(l)===JSON.stringify(["Level is A1…D9","","not editable","Row locked by Payroll","Row locked by Payroll","not editable"]),`each cell has its reason, ${JSON.stringify(l)}`),f(p(e,[1],[3])[0][0]==="Peru","the cell that fits is written"),await o.click(a(e,9,3)),v(a(e,9,3),`a	b
c	d`),await c(()=>k(e).some(u=>u[2]==="outside the table"),"a cell past the edge of the table is refused as outside"),f((d=(r=e.querySelector("[data-write-notice]"))==null?void 0:r.textContent)==null?void 0:d.includes("outside the table"),"the notice lists it")}},i=Ze,b=i+1,g=i+2,P=t=>{const e=t.getBoundingClientRect();return{clientX:e.left+e.width/2,clientY:e.top+e.height/2}},F=(t,e,l)=>e.dispatchEvent(new PointerEvent(t,{bubbles:!0,cancelable:!0,button:0,pointerId:1,isPrimary:!0,pointerType:"touch",...l})),L=(t,e,l)=>n(t,e,l).querySelector("[data-fill-handle]"),O=async(t,e)=>{const l=t.querySelector("[data-fill-handle]");if(!l)throw new Error("no handle in the cell");F("pointerdown",l,P(l)),F("pointermove",window,P(e)),await c(()=>e.hasAttribute("data-fill"),"the cell the pointer is over is in the dashed frame")},N=t=>F("pointerup",window,P(t)),Qe=t=>{var e;return((e=t.querySelector("[data-write-notice]"))==null?void 0:e.textContent)??""},ze=t=>{var r;const e=(r=t.querySelector("[data-fill-handle]"))==null?void 0:r.getBoundingClientRect(),l=t.getBoundingClientRect();return e?Math.abs(e.left+e.width/2-l.right)<=4&&Math.abs(e.top+e.height/2-l.bottom)<=4:!1},Ge=async t=>{const e=[0,1,2,3,4,5,6,7,8,9].find(r=>n(t,r,i).dataset.editable!=="true");await o.click(n(t,e-1,i)),await y(n(t,e,i)),await c(()=>L(t,e,i),"the corner is a cell that cannot be written: the selection has the dot"),await o.click(n(t,0,0)),await y(n(t,2,0)),await c(()=>!t.querySelector("[data-fill-handle]"),"a selection with nothing to write has no dot");for(let r=0;r<20;r+=1){const d=r%9,u=i+r%5;await o.click(n(t,d,u)),await y(n(t,d+1,u+1)),await c(()=>t.querySelectorAll("[data-fill-handle]").length===1,`one dot after the change ${r} of the selection`)}const l=Fe();if(l)for(let r=0;r<20;r+=1){const d=n(t,r%10,i+r%6).getBoundingClientRect();await l(d.left+d.width/2,d.top+d.height/2),await new Promise(u=>{setTimeout(u,40)}),f(t.querySelectorAll("[data-fill-handle]").length===1,`the dot stays while the pointer is over a cell, move ${r}`)}},R={tags:["kb:cell-features-fill-handle"],name:"4 · Fill handle",parameters:{...je(He),summary:"The dot at the bottom right corner of the selection is dragged over rows (up or down): they get its value, or its block repeated, in every column of the selection. It writes like a paste, each cell applied or refused with a reason; Esc during the drag leaves everything as it was."},render:()=>s.jsx(Ve,{hint:s.jsxs(s.Fragment,{children:["Click a month: the dot stands on its corner (Name cannot be written, it has none). Drag the dot down or to the right over the other months, or select a few months (Shift+click) and drag them down: a dashed frame shows the range, and when you let go every column is filled. Esc cancels. The row of Daniel is on leave: a fill over it says why it was not written. Tick ",s.jsx("b",{children:"Read only"})," and the dot is gone."]})}),play:async t=>{if(C(t))return;const e=t.canvasElement;await x(e);const l=n(e,0,0).getBoundingClientRect();De(e).scrollLeft+=n(e,0,i).getBoundingClientRect().left-l.right-4,await o.click(n(e,0,i)),await c(()=>L(e,0,i),"the active cell has the handle"),f(ze(n(e,0,i)),"the dot is on the corner of the cell"),await y(n(e,0,b)),await c(()=>L(e,0,b),"the handle moves to the range’s corner");const r=[i,b].map(w=>h(e,0,w));await O(n(e,0,b),n(e,3,b)),N(n(e,3,b)),await c(()=>[1,2,3].every(w=>JSON.stringify([i,b].map(m=>h(e,w,m)))===JSON.stringify(r)),"dragging down three rows filled both columns of the selection"),f(!e.querySelector("[data-fill]"),"the frame is gone when the drag ends");const d=[5,6].map(w=>h(e,w,i));await o.click(n(e,4,i)),await O(n(e,4,i),n(e,6,i)),document.body.dispatchEvent(new KeyboardEvent("keydown",{key:"Escape",bubbles:!0})),N(n(e,6,i)),await new Promise(w=>{setTimeout(w,300)}),f(JSON.stringify([5,6].map(w=>h(e,w,i)))===JSON.stringify(d),"Esc during the drag wrote nothing"),f(!e.querySelector("[data-fill]"),"Esc took the frame away"),await o.click(n(e,3,i)),await O(n(e,3,i),n(e,6,i)),N(n(e,6,i)),await c(()=>Qe(e).includes(Ye),"the row that is on leave is refused with its reason"),f(h(e,4,i)===h(e,3,i),"the rows that may be written were");const u=i+3;await o.click(n(e,7,i)),await O(n(e,7,i),n(e,7,u)),N(n(e,7,u)),await c(()=>[b,g,u].every(w=>h(e,7,w)===h(e,7,i)),"dragging a month to the right filled the months after it"),await o.click(n(e,8,i)),await O(n(e,8,i),n(e,9,g)),f(n(e,9,g).hasAttribute("data-fill")&&n(e,8,b).hasAttribute("data-fill"),"the dashed frame goes across, down and to the right"),F("pointermove",window,P(n(e,8,b))),await c(()=>!n(e,9,b).hasAttribute("data-fill"),"moving back inside shrinks the frame on both axes"),F("pointermove",window,P(n(e,9,g))),await c(()=>n(e,9,g).hasAttribute("data-fill"),"and grows again"),N(n(e,9,g)),await c(()=>[8,9].every(w=>[i,b,g].every(m=>h(e,w,m)===h(e,8,i))),"letting go across filled the whole rectangle"),await o.click(n(e,0,0)),f(!e.querySelector("[data-fill-handle]"),"Name cannot be written, so it has no handle"),await Ge(e),await o.click(e.querySelector('input[aria-label="Read only"]')),await o.click(n(e,0,i)),f(!e.querySelector("[data-fill-handle]"),"a read only table has no handle")}},j=(t,e)=>e.dispatchEvent(new PointerEvent(t,{bubbles:!0,button:0,metaKey:!0})),_=t=>{j("pointerdown",t),j("pointerup",t),document.dispatchEvent(new MouseEvent("mouseup"))},Xe=(t,e)=>{j("pointerdown",t),j("pointerover",e),j("pointerup",e),document.dispatchEvent(new MouseEvent("mouseup"))},Z=t=>{var e;return((e=t.querySelector("[data-write-notice]"))==null?void 0:e.textContent)??""},J={tags:["kb:cell-features-several-blocks"],name:"5 · Several blocks",parameters:{...q(E,"SeveralBlocks"),summary:"With `enableMultiCellRangeSelection`, ⌘/Ctrl+click adds blocks. Copy joins blocks in the same rows (side by side) or in the same columns (one under another) and refuses any other shape, with a notice; one pasted value goes to every cell of every block, a block is pasted only into one block (else a notice); Delete clears every block; Ctrl/⌘+D and +R fill each block from its own first row or column; the fill handle is for one block with no hole. All of it writes through `writeCells`."},render:()=>s.jsx(B,{Table:xe,readouts:!0,hint:s.jsxs(s.Fragment,{children:["Try: ",s.jsx("b",{children:"⌘/Ctrl+click"})," another cell, then paste a value, press"," ",s.jsx("b",{children:"Delete"})," or ",s.jsx("b",{children:"Ctrl+C"}),"."]})}),play:async t=>{if(C(t))return;const e=t.canvasElement;await x(e);const l=()=>e.querySelector("[data-fill-handle]");await o.click(a(e,0,0)),_(a(e,3,1)),v(a(e,3,1),"Same"),await c(()=>h(e,0,0)==="Same"&&h(e,3,1)==="Same","one value goes to every cell of every block");const r=p(e,[0,3],[0,1]);v(a(e,3,1),`a	b
c	d`),await c(()=>Z(e).includes("Paste one value into several blocks"),"a block over several blocks is refused with a notice"),f(JSON.stringify(p(e,[0,3],[0,1]))===JSON.stringify(r),"and nothing is written"),await o.keyboard("{Delete}"),await c(()=>h(e,0,0)===""&&h(e,3,1)==="","Delete clears every block"),await o.click(a(e,5,0)),_(a(e,5,3)),a(e,5,3).dispatchEvent(W("copy")),await c(()=>{var u;return((u=e.querySelector("[data-copied]"))==null?void 0:u.textContent)===`${h(e,5,0)}	${h(e,5,3)}`},"blocks in the same row copy side by side"),await o.click(a(e,5,0)),_(a(e,7,3)),a(e,7,3).dispatchEvent(W("copy")),await c(()=>Z(e).includes("Copy needs one block"),"blocks that do not line up are refused with a notice"),await o.click(a(e,6,0)),await y(a(e,7,0)),Xe(a(e,6,1),a(e,8,1));const d=[h(e,6,0),h(e,6,1)];await o.keyboard("{Control>}d{/Control}"),await c(()=>h(e,7,0)===d[0]&&h(e,7,1)===d[1]&&h(e,8,1)===d[1],"Ctrl+D fills each block from its own first row"),f(!l(),"two blocks have no fill handle"),await o.click(a(e,9,0)),await c(()=>l(),"one block has it again")}},D={tags:["kb:cell-features-walk-fan-out"],name:"6 · Enter, Tab and Ctrl+Enter in a selection",parameters:{...q(E,"WalkAndFanOut"),summary:"In a selection of more than one cell, Enter and Tab save the editor and go to the next cell of the selection (the selection stays, Esc keeps it too); Ctrl/⌘+Enter saves the value into every cell of the selection with one `writeCells`, the cells that cannot be written are refused with their reasons like a paste, and the active cell stays. The editor passes the key’s target: `cell.commit({ text }, targetOfKey(event))`."},render:()=>s.jsx(B,{Table:xe,readouts:!0,hint:s.jsxs(s.Fragment,{children:["Try: select a few cells, type a word, then ",s.jsx("b",{children:"Enter"})," (next cell of the selection) or ",s.jsx("b",{children:"Ctrl/⌘+Enter"})," (all of them)."]})}),play:async t=>{if(C(t))return;const e=t.canvasElement;await x(e);const l=()=>e.querySelectorAll("[data-selection]").length;await o.click(a(e,0,0)),await y(a(e,1,0)),await o.keyboard("One{Enter}"),await c(()=>h(e,0,0)==="One","Enter saved the active cell"),await c(()=>a(e,1,0).getAttribute("data-selection")==="active"&&l()===2,"and went to the next cell of the selection, which stays"),await o.keyboard("Two{Enter}"),await c(()=>h(e,1,0)==="Two"&&a(e,0,0).getAttribute("data-selection")==="active","at the end it goes round to the first cell"),await o.click(a(e,3,0)),await y(a(e,3,1)),await o.keyboard("A{Tab}"),await c(()=>h(e,3,0)==="A"&&a(e,3,1).getAttribute("data-selection")==="active","Tab saves and goes along the row of the selection"),await o.click(a(e,4,0)),await y(a(e,5,1)),await o.keyboard("Same{Control>}{Enter}{/Control}"),await c(()=>p(e,[4,5],[0,1]).flat().every(r=>r==="Same"),"Ctrl+Enter wrote the value into every cell of the selection"),f(a(e,4,0).getAttribute("data-selection")==="active"&&l()===4,"the active cell stays and so does the selection"),f(k(e).length===4&&k(e).every(r=>r[1]==="applied"),"one write of four cells"),await o.click(a(e,1,1)),await y(a(e,3,1)),await o.keyboard("Z{Control>}{Enter}{/Control}"),await c(()=>Z(e).includes("Row locked by Payroll"),"a cell that cannot be written is refused with its reason"),f(h(e,1,1)==="Z"&&h(e,3,1)==="Z"&&h(e,2,1)!=="Z","the others are written")}};var V,Q,z,G,X;S.parameters={...S.parameters,docs:{...(V=S.parameters)==null?void 0:V.docs,source:{originalSource:`{
  tags: ['kb:cell-features-copy-paste'],
  name: '1 · Copy and paste',
  parameters: {
    ...sceneCodeWith(source, 'CopyAndPaste', editingCodes),
    summary: 'Ctrl/⌘+C puts the active cell or the range on the clipboard as tab-separated text; Ctrl/⌘+V lays text from the active cell, one value goes to every cell of a range, and the table under it says how each cell went.'
  },
  args: {
    startEditing: 'doubleClick',
    readOnly: false
  },
  argTypes: editingArgTypes,
  render: args => <Remount args={args}>
            <PeopleScene Table={ClipboardTable} {...args} readouts hint={<>
                        Select a few cells (click, then Shift+click) and press Ctrl/⌘+C: the
                        text is under the table. Click another cell and press Ctrl/⌘+V: the
                        text lands from it, and <b>Written</b> says how each cell went.
                    </>} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    const c = ctx.canvasElement;
    await ready(c);
    await userEvent.click(at(c, 0, 0));
    await shiftClick(at(c, 1, 1));
    const cell = at(c, 1, 1);
    cell.dispatchEvent(clipboardEvent('copy'));
    const expected = texts(c, [0, 1], [0, 1]).map(r => r.join('\\t')).join('\\n');
    await until(() => c.querySelector('[data-copied]')?.textContent === expected, 'Copy put the range on the clipboard as tab-separated text');
    await userEvent.click(at(c, 3, 0));
    paste(at(c, 3, 0), 'Zed\\tQA\\nYan\\tOps');
    await until(() => JSON.stringify(texts(c, [3, 4], [0, 1])) === JSON.stringify([['Zed', 'QA'], ['Yan', 'Ops']]), 'the pasted text lands from the active cell');
    check(results(c).length === 4 && results(c).every(r => r[1] === 'applied'), 'the four cells went through');
    await userEvent.click(at(c, 6, 0));
    await shiftClick(at(c, 7, 1));
    paste(at(c, 7, 1), 'Same');
    await until(() => texts(c, [6, 7], [0, 1]).flat().every(t => t === 'Same'), 'one value goes to every cell of the range');
    await controlsAct(ctx, 'doubleClick');
  }
}`,...(z=(Q=S.parameters)==null?void 0:Q.docs)==null?void 0:z.source},description:{story:"Copy puts the selection on the clipboard as text; a paste lays text from the active cell.",...(X=(G=S.parameters)==null?void 0:G.docs)==null?void 0:X.description}}};var U,ee,te,ae,ne;A.parameters={...A.parameters,docs:{...(U=A.parameters)==null?void 0:U.docs,source:{originalSource:`{
  tags: ['kb:cell-features-delete-fill'],
  name: '2 · Delete and Ctrl+D',
  parameters: {
    ...sceneCodeWith(source, 'DeleteAndFill', editingCodes),
    summary: 'Delete clears the range (what the column says, an empty string by default); Ctrl/⌘+D fills it down from its first row, Ctrl/⌘+R right from its first column. Both write the way a paste does.'
  },
  args: {
    startEditing: 'doubleClick',
    readOnly: false
  },
  argTypes: editingArgTypes,
  render: args => <Remount args={args}>
            <PeopleScene Table={ClipboardTable} {...args} readouts hint={<>
                        Select a range and press <b>Delete</b>: the cells are empty. Select
                        a range and press <b>Ctrl/⌘+D</b>: its first row is copied down;{' '}
                        <b>Ctrl/⌘+R</b> copies its first column right.
                    </>} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    const c = ctx.canvasElement;
    await ready(c);
    await userEvent.click(at(c, 4, 0));
    await shiftClick(at(c, 5, 1));
    await userEvent.keyboard('{Delete}');
    await until(() => texts(c, [4, 5], [0, 1]).flat().every(t => t === ''), 'Delete cleared the range');
    const first = texts(c, [6], [0, 1])[0];
    await userEvent.click(at(c, 6, 0));
    await shiftClick(at(c, 8, 1));
    await userEvent.keyboard('{Control>}d{/Control}');
    await until(() => texts(c, [7, 8], [0, 1]).every(row => JSON.stringify(row) === JSON.stringify(first)), 'Ctrl+D copied the first row of the range down');
    await userEvent.click(at(c, 9, 0));
    await shiftClick(at(c, 9, 1));
    await userEvent.keyboard('{Control>}r{/Control}');
    await until(() => texts(c, [9], [1])[0][0] === texts(c, [9], [0])[0][0], 'Ctrl+R copied the first column of the range right');
  }
}`,...(te=(ee=A.parameters)==null?void 0:ee.docs)==null?void 0:te.source},description:{story:"Delete clears the range, Ctrl/⌘+D fills it down, Ctrl/⌘+R right.",...(ne=(ae=A.parameters)==null?void 0:ae.docs)==null?void 0:ne.description}}};var le,re,oe,se,ie;T.parameters={...T.parameters,docs:{...(le=T.parameters)==null?void 0:le.docs,source:{originalSource:`{
  tags: ['kb:cell-features-refusals'],
  name: '3 · Cells that cannot be written',
  parameters: {
    ...sceneCodeWith(source, 'Refusals', editingCodes),
    summary: 'A cell is refused with a reason: a column that is not editable, a row the screen locked (resolvers.getCanEdit), a text the column does not parse, a cell past the edge of the table. The table says so under the grid; the screen’s onCellsWritten gets every result.'
  },
  args: {
    startEditing: 'doubleClick',
    readOnly: false
  },
  argTypes: editingArgTypes,
  render: args => <Remount args={args}>
            <PeopleScene Table={ClipboardTable} {...args} readouts hint={<>
                        Click Level of the second row and paste text that does not fit: the
                        notice under the table lists each refused cell with its reason (Role
                        is not editable, the third row is locked, a bad Level, the edge).
                        The rest is written.
                    </>} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    const c = ctx.canvasElement;
    await ready(c);
    await userEvent.click(at(c, 1, 2));
    paste(at(c, 1, 2), 'Z9\\tPeru\\tx\\ny\\tz\\tw');
    await until(() => c.querySelector('[data-write-notice]'), 'the table says that cells were not written');
    const reasons = results(c).map(r => r[2]);
    check(JSON.stringify(reasons) === JSON.stringify(['Level is A1…D9', '', 'not editable', 'Row locked by Payroll', 'Row locked by Payroll', 'not editable']), \`each cell has its reason, \${JSON.stringify(reasons)}\`);
    check(texts(c, [1], [3])[0][0] === 'Peru', 'the cell that fits is written');
    await userEvent.click(at(c, 9, 3));
    paste(at(c, 9, 3), 'a\\tb\\nc\\td');
    await until(() => results(c).some(r => r[2] === 'outside the table'), 'a cell past the edge of the table is refused as outside');
    check(c.querySelector('[data-write-notice]')?.textContent?.includes('outside the table'), 'the notice lists it');
  }
}`,...(oe=(re=T.parameters)==null?void 0:re.docs)==null?void 0:oe.source},description:{story:"What the table refuses, and says why: a column, a row, a text, the edge.",...(ie=(se=T.parameters)==null?void 0:se.docs)==null?void 0:ie.description}}};var ce,de,he,we,ue;R.parameters={...R.parameters,docs:{...(ce=R.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  tags: ['kb:cell-features-fill-handle'],
  name: '4 · Fill handle',
  parameters: {
    ...sceneCodeOf(workloadsSource),
    summary: 'The dot at the bottom right corner of the selection is dragged over rows (up or down): they get its value, or its block repeated, in every column of the selection. It writes like a paste, each cell applied or refused with a reason; Esc during the drag leaves everything as it was.'
  },
  render: () => <WorkloadsScene hint={<>
                    Click a month: the dot stands on its corner (Name cannot be written,
                    it has none). Drag the dot down or to the right over the other months,
                    or select a few months (Shift+click) and drag them down: a dashed
                    frame shows the range, and when you let go every column is filled. Esc
                    cancels. The row of Daniel is on leave: a fill over it says why it was
                    not written. Tick <b>Read only</b> and the dot is gone.
                </>} />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    const c = ctx.canvasElement;
    await ready(c);
    // The months are what is filled: the first of them stands beside the frozen Name.
    const name = cell(c, 0, 0).getBoundingClientRect();
    scroller(c).scrollLeft += cell(c, 0, JAN).getBoundingClientRect().left - name.right - 4;
    await userEvent.click(cell(c, 0, JAN));
    await until(() => handleIn(c, 0, JAN), 'the active cell has the handle');
    check(onCorner(cell(c, 0, JAN)), 'the dot is on the corner of the cell');
    await shiftClick(cell(c, 0, FEB));
    await until(() => handleIn(c, 0, FEB), 'the handle moves to the range’s corner');
    const source = [JAN, FEB].map(col => text(c, 0, col));
    await dragTo(cell(c, 0, FEB), cell(c, 3, FEB));
    release(cell(c, 3, FEB));
    await until(() => [1, 2, 3].every(row => JSON.stringify([JAN, FEB].map(col => text(c, row, col))) === JSON.stringify(source)), 'dragging down three rows filled both columns of the selection');
    check(!c.querySelector('[data-fill]'), 'the frame is gone when the drag ends');
    const before = [5, 6].map(row => text(c, row, JAN));
    await userEvent.click(cell(c, 4, JAN));
    await dragTo(cell(c, 4, JAN), cell(c, 6, JAN));
    document.body.dispatchEvent(new KeyboardEvent('keydown', {
      key: 'Escape',
      bubbles: true
    }));
    release(cell(c, 6, JAN));
    await new Promise(resolve => {
      setTimeout(resolve, 300);
    });
    check(JSON.stringify([5, 6].map(row => text(c, row, JAN))) === JSON.stringify(before), 'Esc during the drag wrote nothing');
    check(!c.querySelector('[data-fill]'), 'Esc took the frame away');
    await userEvent.click(cell(c, 3, JAN));
    await dragTo(cell(c, 3, JAN), cell(c, 6, JAN));
    release(cell(c, 6, JAN));
    await until(() => noticeText(c).includes(ON_LEAVE), 'the row that is on leave is refused with its reason');
    check(text(c, 4, JAN) === text(c, 3, JAN), 'the rows that may be written were');

    // To the side too: a month is repeated over the months after it.
    const apr = JAN + 3;
    await userEvent.click(cell(c, 7, JAN));
    await dragTo(cell(c, 7, JAN), cell(c, 7, apr));
    release(cell(c, 7, apr));
    await until(() => [FEB, MAR, apr].every(col => text(c, 7, col) === text(c, 7, JAN)), 'dragging a month to the right filled the months after it');

    // Across: down and to the right at once, and back (shrinking) on both axes.
    await userEvent.click(cell(c, 8, JAN));
    await dragTo(cell(c, 8, JAN), cell(c, 9, MAR));
    check(cell(c, 9, MAR).hasAttribute('data-fill') && cell(c, 8, FEB).hasAttribute('data-fill'), 'the dashed frame goes across, down and to the right');
    pointer('pointermove', window, centre(cell(c, 8, FEB)));
    await until(() => !cell(c, 9, FEB).hasAttribute('data-fill'), 'moving back inside shrinks the frame on both axes');
    pointer('pointermove', window, centre(cell(c, 9, MAR)));
    await until(() => cell(c, 9, MAR).hasAttribute('data-fill'), 'and grows again');
    release(cell(c, 9, MAR));
    await until(() => [8, 9].every(row => [JAN, FEB, MAR].every(col => text(c, row, col) === text(c, 8, JAN))), 'letting go across filled the whole rectangle');
    await userEvent.click(cell(c, 0, 0));
    check(!c.querySelector('[data-fill-handle]'), 'Name cannot be written, so it has no handle');
    await handleStaysAct(c);
    await userEvent.click(c.querySelector('input[aria-label="Read only"]') as HTMLElement);
    await userEvent.click(cell(c, 0, JAN));
    check(!c.querySelector('[data-fill-handle]'), 'a read only table has no handle');
  }
}`,...(he=(de=R.parameters)==null?void 0:de.docs)==null?void 0:he.source},description:{story:"The handle at the corner of the selection: dragged, it fills the rows it goes over.",...(ue=(we=R.parameters)==null?void 0:we.docs)==null?void 0:ue.description}}};var fe,ye,be,pe,me;J.parameters={...J.parameters,docs:{...(fe=J.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  tags: ['kb:cell-features-several-blocks'],
  name: '5 · Several blocks',
  parameters: {
    ...sceneCodeWith(source, 'SeveralBlocks'),
    summary: 'With \`enableMultiCellRangeSelection\`, ⌘/Ctrl+click adds blocks. Copy joins blocks in the same rows (side by side) or in the same columns (one under another) and refuses any other shape, with a notice; one pasted value goes to every cell of every block, a block is pasted only into one block (else a notice); Delete clears every block; Ctrl/⌘+D and +R fill each block from its own first row or column; the fill handle is for one block with no hole. All of it writes through \`writeCells\`.'
  },
  render: () => <PeopleScene Table={SeveralBlocksTable} readouts hint={<>
                    Try: <b>⌘/Ctrl+click</b> another cell, then paste a value, press{' '}
                    <b>Delete</b> or <b>Ctrl+C</b>.
                </>} />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    const c = ctx.canvasElement;
    await ready(c);
    const handle = () => c.querySelector('[data-fill-handle]');
    // One value, into every cell of two blocks.
    await userEvent.click(at(c, 0, 0));
    addCell(at(c, 3, 1));
    paste(at(c, 3, 1), 'Same');
    await until(() => text(c, 0, 0) === 'Same' && text(c, 3, 1) === 'Same', 'one value goes to every cell of every block');
    // A block over two blocks: refused, nothing written.
    const before = texts(c, [0, 3], [0, 1]);
    paste(at(c, 3, 1), 'a\\tb\\nc\\td');
    await until(() => notice(c).includes('Paste one value into several blocks'), 'a block over several blocks is refused with a notice');
    check(JSON.stringify(texts(c, [0, 3], [0, 1])) === JSON.stringify(before), 'and nothing is written');
    // Delete clears every block.
    await userEvent.keyboard('{Delete}');
    await until(() => text(c, 0, 0) === '' && text(c, 3, 1) === '', 'Delete clears every block');
    // Copy: blocks in the same rows join; others are refused.
    await userEvent.click(at(c, 5, 0));
    addCell(at(c, 5, 3));
    at(c, 5, 3).dispatchEvent(clipboardEvent('copy'));
    await until(() => c.querySelector('[data-copied]')?.textContent === \`\${text(c, 5, 0)}\\t\${text(c, 5, 3)}\`, 'blocks in the same row copy side by side');
    await userEvent.click(at(c, 5, 0));
    addCell(at(c, 7, 3));
    at(c, 7, 3).dispatchEvent(clipboardEvent('copy'));
    await until(() => notice(c).includes('Copy needs one block'), 'blocks that do not line up are refused with a notice');
    // Ctrl+D, block by block.
    await userEvent.click(at(c, 6, 0));
    await shiftClick(at(c, 7, 0));
    addBlock(at(c, 6, 1), at(c, 8, 1));
    const first = [text(c, 6, 0), text(c, 6, 1)];
    await userEvent.keyboard('{Control>}d{/Control}');
    await until(() => text(c, 7, 0) === first[0] && text(c, 7, 1) === first[1] && text(c, 8, 1) === first[1], 'Ctrl+D fills each block from its own first row');
    // The fill handle is for one block.
    check(!handle(), 'two blocks have no fill handle');
    await userEvent.click(at(c, 9, 0));
    await until(() => handle(), 'one block has it again');
  }
}`,...(be=(ye=J.parameters)==null?void 0:ye.docs)==null?void 0:be.source},description:{story:"Blocks: one value into all, Delete on all, a block over many refused, Ctrl+D per block, Copy that lines up or is refused, a fill handle for one block.",...(me=(pe=J.parameters)==null?void 0:pe.docs)==null?void 0:me.description}}};var ge,ke,ve,Ce,Ee;D.parameters={...D.parameters,docs:{...(ge=D.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  tags: ['kb:cell-features-walk-fan-out'],
  name: '6 · Enter, Tab and Ctrl+Enter in a selection',
  parameters: {
    ...sceneCodeWith(source, 'WalkAndFanOut'),
    summary: 'In a selection of more than one cell, Enter and Tab save the editor and go to the next cell of the selection (the selection stays, Esc keeps it too); Ctrl/⌘+Enter saves the value into every cell of the selection with one \`writeCells\`, the cells that cannot be written are refused with their reasons like a paste, and the active cell stays. The editor passes the key’s target: \`cell.commit({ text }, targetOfKey(event))\`.'
  },
  render: () => <PeopleScene Table={SeveralBlocksTable} readouts hint={<>
                    Try: select a few cells, type a word, then <b>Enter</b> (next cell of
                    the selection) or <b>Ctrl/⌘+Enter</b> (all of them).
                </>} />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    const c = ctx.canvasElement;
    await ready(c);
    const selected = () => c.querySelectorAll('[data-selection]').length;
    // Enter saves and goes to the next cell of the selection.
    await userEvent.click(at(c, 0, 0));
    await shiftClick(at(c, 1, 0));
    await userEvent.keyboard('One{Enter}');
    await until(() => text(c, 0, 0) === 'One', 'Enter saved the active cell');
    await until(() => at(c, 1, 0).getAttribute('data-selection') === 'active' && selected() === 2, 'and went to the next cell of the selection, which stays');
    await userEvent.keyboard('Two{Enter}');
    await until(() => text(c, 1, 0) === 'Two' && at(c, 0, 0).getAttribute('data-selection') === 'active', 'at the end it goes round to the first cell');
    // Tab walks along the row.
    await userEvent.click(at(c, 3, 0));
    await shiftClick(at(c, 3, 1));
    await userEvent.keyboard('A{Tab}');
    await until(() => text(c, 3, 0) === 'A' && at(c, 3, 1).getAttribute('data-selection') === 'active', 'Tab saves and goes along the row of the selection');
    // Ctrl+Enter: one value to every cell, in one call, the active cell stays.
    await userEvent.click(at(c, 4, 0));
    await shiftClick(at(c, 5, 1));
    await userEvent.keyboard('Same{Control>}{Enter}{/Control}');
    await until(() => texts(c, [4, 5], [0, 1]).flat().every(t => t === 'Same'), 'Ctrl+Enter wrote the value into every cell of the selection');
    check(at(c, 4, 0).getAttribute('data-selection') === 'active' && selected() === 4, 'the active cell stays and so does the selection');
    check(results(c).length === 4 && results(c).every(r => r[1] === 'applied'), 'one write of four cells');
    // A locked row is refused like a paste, the rest is written.
    await userEvent.click(at(c, 1, 1));
    await shiftClick(at(c, 3, 1));
    await userEvent.keyboard('Z{Control>}{Enter}{/Control}');
    await until(() => notice(c).includes('Row locked by Payroll'), 'a cell that cannot be written is refused with its reason');
    check(text(c, 1, 1) === 'Z' && text(c, 3, 1) === 'Z' && text(c, 2, 1) !== 'Z', 'the others are written');
  }
}`,...(ve=(ke=D.parameters)==null?void 0:ke.docs)==null?void 0:ve.source},description:{story:"Tab and Enter walk the selection while it is edited; Ctrl/⌘+Enter writes the value to all of it.",...(Ee=(Ce=D.parameters)==null?void 0:Ce.docs)==null?void 0:Ee.description}}};const rt=["CopyAndPaste","DeleteAndFill","Refusals","FillHandle","SeveralBlocks","WalkAndFanOut"];export{S as CopyAndPaste,A as DeleteAndFill,R as FillHandle,T as Refusals,J as SeveralBlocks,D as WalkAndFanOut,rt as __namedExportsOrder,lt as default};
