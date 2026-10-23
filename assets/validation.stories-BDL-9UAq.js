import{j as a,Y as H,F as D,aZ as Y,bQ as N,bR as j,a0 as $,b3 as K,a_ as U,b4 as W,b5 as Q,a6 as O,bs as G,Z as J,bS as X,r as f,S as z,bT as ee,bU as V,bV as te,c as ae,O as ne,u as c,J as l,H as k,N as B,G as S,h as F,P as w,l as i,w as R,K as I,bW as re,bX as se,Q as y,I as ie,f as oe}from"./products-CTiDOXRn.js";import{N as le,l as ce,a as de,m as ue,u as he,w as me,R as we}from"./country-city-requests-Muz9l7yR.js";const ye=`import {
	TableCore,
	cellEditingFeature,
	cellSelectionFeature,
	cellKeyboardFeature,
	cellKeyboardEditingFeature,
	createColumnHelper,
	metaHelper,
	tableFeatures,
	type CellEditingColumnMeta,
	type CellEditingTableMeta,
	editOn,
} from '@pnl-simulation/table-core'

import { COUNTRIES, LEVELS, isCityOf } from '../../../data/places'
import type { Person } from '../../../data/people'
import { Editor } from '../editor'

import { AutocompleteEditor } from './autocomplete-editor'
import { NO_COUNTRY } from './country-city-rows'
import { loadCities, loadCountries } from './country-city-requests'

// 1. Cells can be edited.
const features = tableFeatures({
	cellSelectionFeature,
	cellKeyboardFeature,
	cellEditingFeature,
	cellKeyboardEditingFeature,
	tableMeta: metaHelper<CellEditingTableMeta>(),
	columnMeta: metaHelper<CellEditingColumnMeta>(),
})

// A value that is not on the list is refused with its reason.
const oneOf = (list: string[], what: string) => (text: string) =>
	list.includes(text) ? { value: text } : { error: \`\${text} is not \${what}\` }

const helper = createColumnHelper<typeof features, Person>()
const columns = helper.columns([
	helper.accessor('name', {
		header: 'Name',
		meta: { editable: true, typeToEdit: true },
		cell: (info) => <Editor {...info} />,
	}),
	helper.accessor('level', {
		header: 'Level',
		meta: { editable: true, parse: oneOf(LEVELS, 'a level (A1–C5)') },
		cell: (info) => <AutocompleteEditor {...info} source={LEVELS} />,
	}),
	helper.accessor('country', {
		header: 'Country',
		meta: { editable: true, parse: oneOf(COUNTRIES, 'a country on the list') },
		cell: (info) => <AutocompleteEditor {...info} source={loadCountries} />,
	}),
	// A city of another country is let in: the screen's rules below flag it.
	helper.accessor('city', {
		header: 'City',
		meta: { editable: true },
		cell: (info) => <AutocompleteEditor {...info} source={loadCities} />,
	}),
])

// What the screen says is wrong with a cell: an error, or a warning (allowed).
// The table keeps none of these rules; it draws the mark, the frame and the message.
const issueOf = (columnId: string, person: Person) => {
	if (columnId === 'name' && person.name.trim() === '')
		return { error: 'Name is required' }
	if (columnId === 'level' && person.level < 'B1')
		return { warning: \`\${person.level} is below B1\` }
	if (
		columnId === 'city' &&
		person.city &&
		!isCityOf(person.country, person.city)
	)
		return { error: \`\${person.city} is not a city of \${person.country}\` }

	return {}
}

type Props = {
	rows: Person[]
	/** The screen saves; it may take its time, and a throw refuses the value. */
	onEdit: (rowId: string, columnId: string, value: unknown) => Promise<void>
}

export const ValidationTable = ({ rows, onEdit }: Props) => (
	<TableCore
		startEditing={editOn.click} // these scenes open an editor by a click
		features={features}
		data={rows}
		columns={columns}
		getRowId={(person) => person.id}
		meta={{ onEdit }}
		resolvers={{
			getCanEdit: ({ column, row }) =>
				column.id === 'city' && !(row.original as Person).country
					? NO_COUNTRY
					: true,
			getCellIssue: ({ column, row }) =>
				issueOf(column.id, row.original as Person),
		}}
	/>
)
`,Ee=$({cellSelectionFeature:Q,cellKeyboardFeature:W,cellEditingFeature:U,cellKeyboardEditingFeature:K,tableMeta:O(),columnMeta:O()}),P=(t,e)=>n=>t.includes(n)?{value:n}:{error:`${n} is not ${e}`},E=J(),ge=E.columns([E.accessor("name",{header:"Name",meta:{editable:!0,typeToEdit:!0},cell:t=>a.jsx(Y,{...t})}),E.accessor("level",{header:"Level",meta:{editable:!0,parse:P(j,"a level (A1–C5)")},cell:t=>a.jsx(N,{...t,source:j})}),E.accessor("country",{header:"Country",meta:{editable:!0,parse:P(X,"a country on the list")},cell:t=>a.jsx(N,{...t,source:ce})}),E.accessor("city",{header:"City",meta:{editable:!0},cell:t=>a.jsx(N,{...t,source:de})})]),pe=(t,e)=>t==="name"&&e.name.trim()===""?{error:"Name is required"}:t==="level"&&e.level<"B1"?{warning:`${e.level} is below B1`}:t==="city"&&e.city&&!G(e.country,e.city)?{error:`${e.city} is not a city of ${e.country}`}:{},ve=({rows:t,onEdit:e})=>a.jsx(H,{startEditing:D.click,features:Ee,data:t,columns:ge,getRowId:n=>n.id,meta:{onEdit:e},resolvers:{getCanEdit:({column:n,row:d})=>n.id==="city"&&!d.original.country?le:!0,getCellIssue:({column:n,row:d})=>pe(n.id,d.original)}}),be={current:{latency:te,failLoad:!1}},fe=600,ke=({hint:t})=>{const[e,n]=f.useState(ue),[d,x]=f.useState(!1),g=f.useRef(d);g.current=d;const{env:p,log:v}=he(be,(u,h)=>u==="/api/countries"?V({kind:"countries"},h.q):V({kind:"cities",country:h.country},h.q)),b=f.useCallback(async(u,h,r)=>{const L=String(r);if(await new Promise(T=>{setTimeout(T,fe)}),g.current)throw new Error(`The server rejected ${L||"an empty value"}`);n(T=>me(T,u,h,L))},[]);return a.jsx(z,{hint:t,children:a.jsxs(ee.Provider,{value:p,children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,height:32},children:[a.jsx("input",{"aria-label":"The server rejects what is saved",type:"checkbox",checked:d,onChange:u=>x(u.target.checked)}),a.jsx("span",{children:"The server rejects what is saved"})]}),a.jsx(ve,{rows:e,onEdit:b}),a.jsx(we,{entries:v})]})})},[Ce]=Object.values([ye]),Te={title:"Tables/Table Core/Features/Editing/Validation",id:"tables-table-core-features-editing-validation",...oe(Ce)},s=0,m=1,C=3,o=(t,e,n)=>l(t,e,n).querySelector("[data-cell-mark]"),Ae=(t,e)=>{const n=new DataTransfer;n.setData("text/plain",e),t.dispatchEvent(new ClipboardEvent("paste",{bubbles:!0,cancelable:!0,clipboardData:n}))},A={timeout:4e3},M={tags:["kb:editing-validation"],name:"1 · Errors, warnings and saving",parameters:{summary:"The screen’s rules put an error or a warning on a cell; a save takes its time and may be refused."},render:()=>a.jsx(ke,{hint:a.jsxs(a.Fragment,{children:[a.jsx("b",{children:"Name"})," is required: clear one and press Enter, it gets a red ⚠ and a frame. A ",a.jsx("b",{children:"Level"})," below B1 gets a yellow ⚠ (a warning, the value is allowed). Paste a city of another country into ",a.jsx("b",{children:"City"}),": error. The mark says what is wrong on hover, and on a tap or when the cell is the active one. Saving takes 600 ms (a spinner in the cell); with ",a.jsx("b",{children:"the server rejects"})," on it is refused: the old value stays and ⚠ says why. This scene opens an editor by a click (",a.jsx("code",{children:"startEditing=editOn.click"}),")."]})}),play:async t=>{var v,b,u,h;if(ae(t))return;const e=t.canvasElement;await ne(e),await c.click(l(e,1,s));const n=await k(e);await B(n,""),S(n,"Enter"),await F(()=>{var r;return((r=o(e,1,s))==null?void 0:r.dataset.cellMark)==="saving"},"the save is on its way: a spinner in the cell"),await w(()=>{var r;return i(l(e,1,s).dataset.issue==="error"&&((r=o(e,1,s))==null?void 0:r.dataset.cellMark)==="error","an empty Name is an error")},A),i(((v=o(e,1,s))==null?void 0:v.getAttribute("aria-label"))==="Name is required","the mark says what is wrong"),i(getComputedStyle(l(e,1,s)).outlineColor==="rgb(217, 58, 58)","the cell with an error has a red frame"),await c.hover(o(e,1,s)),await w(()=>i(R(document.body).getByRole("tooltip").textContent==="Name is required","hovering the mark shows the message")),await c.unhover(o(e,1,s));const d=I(l(e,2,m));await c.click(l(e,2,m));const x=await k(e);re.change(x,{target:{value:"A3"}}),await c.click(await se("A3")),await w(()=>{var r;return i(y(e,2,m).startsWith("A3")&&((r=o(e,2,m))==null?void 0:r.dataset.cellMark)==="warning","a level below B1 is a warning")},A),i(((b=o(e,2,m))==null?void 0:b.getAttribute("aria-label"))==="A3 is below B1","the warning says why"),i(Math.abs(I(l(e,2,m)).left-d.left)<1,"the mark does not move the text of the cell"),i(l(e,2,m).dataset.issue==="warning"&&getComputedStyle(l(e,2,m)).outlineStyle!=="solid","a warning has no frame"),await c.click(l(e,0,C)),await c.keyboard("{Escape}"),await c.keyboard("{Escape}"),Ae(e.querySelector("[role=grid]"),"Berlin"),await w(()=>{var r;return i(y(e,0,C)==="Berlin"&&((r=o(e,0,C))==null?void 0:r.dataset.cellMark)==="error","a city of another country is an error")},A),i(((u=o(e,0,C))==null?void 0:u.getAttribute("aria-label"))==="Berlin is not a city of Poland","the error names the country"),await c.click(R(e).getByRole("checkbox",{name:"The server rejects what is saved"}));const g=y(e,3,s);await c.click(l(e,3,s));const p=await k(e);await B(p,"Zed Zedson"),S(p,"Enter"),await F(()=>{var r;return((r=o(e,3,s))==null?void 0:r.dataset.cellMark)==="saving"},"the save is on its way"),i(y(e,3,s)==="Zed Zedson","the cell shows the value while it is saved"),await w(()=>{var r;return i(((r=o(e,3,s))==null?void 0:r.dataset.cellMark)==="failed","the refused save is marked")},A),i(((h=o(e,3,s))==null?void 0:h.getAttribute("aria-label"))==="The server rejected Zed Zedson","the mark says why the server refused"),i(y(e,3,s)===g,"the value is what it was: rolled back"),i(getComputedStyle(l(e,3,s)).outlineColor==="rgb(217, 58, 58)","a failed save has a red frame too"),await c.click(l(e,3,s)),await k(e),i(!o(e,3,s),"starting to edit again ends the failed save"),S(ie(e),"Escape")}};var q,_,Z;M.parameters={...M.parameters,docs:{...(q=M.parameters)==null?void 0:q.docs,source:{originalSource:`{
  tags: ['kb:editing-validation'],
  name: '1 · Errors, warnings and saving',
  parameters: {
    summary: 'The screen’s rules put an error or a warning on a cell; a save takes its time and may be refused.'
  },
  render: () => <ValidationScene hint={<>
                    <b>Name</b> is required: clear one and press Enter, it gets a red ⚠
                    and a frame. A <b>Level</b> below B1 gets a yellow ⚠ (a warning, the
                    value is allowed). Paste a city of another country into <b>City</b>:
                    error. The mark says what is wrong on hover, and on a tap or when the
                    cell is the active one. Saving takes 600 ms (a spinner in the cell);
                    with <b>the server rejects</b> on it is refused: the old value stays
                    and ⚠ says why. This scene opens an editor by a click (
                    <code>startEditing=editOn.click</code>).
                </>} />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    const c = ctx.canvasElement;
    await grid(c);

    // An error: Name is required.
    await userEvent.click(cell(c, 1, NAME));
    const field = await openEditor(c);
    await typeInto(field, '');
    press(field, 'Enter');
    await until(() => mark(c, 1, NAME)?.dataset.cellMark === 'saving', 'the save is on its way: a spinner in the cell');
    await waitFor(() => check(cell(c, 1, NAME).dataset.issue === 'error' && mark(c, 1, NAME)?.dataset.cellMark === 'error', 'an empty Name is an error'), SAVED);
    check(mark(c, 1, NAME)?.getAttribute('aria-label') === 'Name is required', 'the mark says what is wrong');
    check(getComputedStyle(cell(c, 1, NAME)).outlineColor === 'rgb(217, 58, 58)', 'the cell with an error has a red frame');
    await userEvent.hover(mark(c, 1, NAME) as HTMLElement);
    await waitFor(() => check(within(document.body).getByRole('tooltip').textContent === 'Name is required', 'hovering the mark shows the message'));
    await userEvent.unhover(mark(c, 1, NAME) as HTMLElement);

    // A warning: a level below B1 is allowed, and says so.
    const levelBefore = lookBefore(cell(c, 2, LEVEL));
    await userEvent.click(cell(c, 2, LEVEL));
    const level = await openEditor(c);
    fireEvent.change(level, {
      target: {
        value: 'A3'
      }
    });
    await userEvent.click(await option('A3'));
    await waitFor(() => check(text(c, 2, LEVEL).startsWith('A3') && mark(c, 2, LEVEL)?.dataset.cellMark === 'warning', 'a level below B1 is a warning'), SAVED);
    check(mark(c, 2, LEVEL)?.getAttribute('aria-label') === 'A3 is below B1', 'the warning says why');
    check(Math.abs(lookBefore(cell(c, 2, LEVEL)).left - levelBefore.left) < 1, 'the mark does not move the text of the cell');
    check(cell(c, 2, LEVEL).dataset.issue === 'warning' && getComputedStyle(cell(c, 2, LEVEL)).outlineStyle !== 'solid', 'a warning has no frame');

    // A paste of a city of another country: the value is written, the screen says it is wrong.
    await userEvent.click(cell(c, 0, CITY));
    // The click opened the editor (a list: Esc closes the list, a second Esc the edit) and leaves the cell selected for the paste.
    await userEvent.keyboard('{Escape}');
    await userEvent.keyboard('{Escape}');
    paste(c.querySelector('[role=grid]') as HTMLElement, 'Berlin');
    await waitFor(() => check(text(c, 0, CITY) === 'Berlin' && mark(c, 0, CITY)?.dataset.cellMark === 'error', 'a city of another country is an error'), SAVED);
    check(mark(c, 0, CITY)?.getAttribute('aria-label') === 'Berlin is not a city of Poland', 'the error names the country');

    // A save the server refuses: the old value stays, the cell says why.
    await userEvent.click(within(c).getByRole('checkbox', {
      name: 'The server rejects what is saved'
    }));
    const kept = text(c, 3, NAME);
    await userEvent.click(cell(c, 3, NAME));
    const again = await openEditor(c);
    await typeInto(again, 'Zed Zedson');
    press(again, 'Enter');
    await until(() => mark(c, 3, NAME)?.dataset.cellMark === 'saving', 'the save is on its way');
    check(text(c, 3, NAME) === 'Zed Zedson', 'the cell shows the value while it is saved');
    await waitFor(() => check(mark(c, 3, NAME)?.dataset.cellMark === 'failed', 'the refused save is marked'), SAVED);
    check(mark(c, 3, NAME)?.getAttribute('aria-label') === 'The server rejected Zed Zedson', 'the mark says why the server refused');
    check(text(c, 3, NAME) === kept, 'the value is what it was: rolled back');
    check(getComputedStyle(cell(c, 3, NAME)).outlineColor === 'rgb(217, 58, 58)', 'a failed save has a red frame too');
    await userEvent.click(cell(c, 3, NAME));
    await openEditor(c);
    check(!mark(c, 3, NAME), 'starting to edit again ends the failed save');
    press(editor(c) as HTMLInputElement, 'Escape');
  }
}`,...(Z=(_=M.parameters)==null?void 0:_.docs)==null?void 0:Z.source}}};const Ne=["Validation"];export{M as Validation,Ne as __namedExportsOrder,Te as default};
