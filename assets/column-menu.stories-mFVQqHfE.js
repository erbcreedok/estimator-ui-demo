import{t as l,u as r,aD as A,h as u,aA as I,l as a,cx as $,U as k,V as s,y as Z,q as J,W as K,P as F,j as n,Y as Q,bK as X,bJ as ee,cy as ne,bL as te,c1 as ae,a0 as oe,bB as se,a1 as re,a3 as ie,a4 as ue,ba as ce,bb as le,bc as me,bi as de,a6 as pe,bj as ge,bf as he,bg as ye,Z as fe,r as be,S as we,c as v,b,M as w,s as S,f as Se}from"./products-CTiDOXRn.js";import{m as Me}from"./rows-l3LcChQt.js";const Re=`import {
	TableCore,
	TableStatusBar,
	columnGroupingFeature,
	columnPinningFeature,
	columnSizingFeature,
	columnVisibilityFeature,
	createColumnHelper,
	createExpandedRowModel,
	createGroupedRowModel,
	createSortedRowModel,
	groupRowsFeature,
	groupingSection,
	hidingSection,
	metaHelper,
	pinningSection,
	rowExpandingFeature,
	rowSortingFeature,
	sortingSection,
	tableFeatures,
	type ColumnMenuSection,
	type CoreColumnMeta,
	type SortingColumnMeta,
	type TableCoreUiProps,
} from '@pnl-simulation/table-core'

import type { FeatureRow } from '../../data/rows'
import { sceneSortFns } from '../../kit/sort-fns'

// The menu is ours: a header click opens the actions of the column, and what
// is in it is the screen's \`columnMenu\`: its sections, in its order. Each
// section calls v9's methods of the column (\`toggleSorting\`, \`pin\`,
// \`toggleVisibility\`, the table's \`setGrouping\`), so the table has the
// features whose actions it offers.
const features = tableFeatures({
	rowSortingFeature,
	columnGroupingFeature,
	rowExpandingFeature,
	groupRowsFeature,
	columnPinningFeature,
	columnVisibilityFeature,
	columnSizingFeature,
	groupedRowModel: createGroupedRowModel(),
	expandedRowModel: createExpandedRowModel(),
	sortedRowModel: createSortedRowModel(),
	sortFns: sceneSortFns,
	columnMeta: metaHelper<CoreColumnMeta & SortingColumnMeta>(),
})

const helper = createColumnHelper<typeof features, FeatureRow>()
const columns = helper.columns([
	helper.accessor('name', { header: 'Name', size: 190 }),
	helper.accessor('team', { header: 'Team', size: 130 }),
	helper.accessor('role', { header: 'Role', size: 160 }),
	helper.accessor('level', { header: 'Level', size: 100 }),
	helper.accessor('country', { header: 'Country', size: 130 }),
	helper.accessor('rate', { header: 'Rate', size: 90 }),
])

/** A section of the screen's own: its items get the column and its label. */
const exportSection: ColumnMenuSection = {
	id: 'export',
	getItems: ({ label }) => [
		{ id: 'copy', label: \`Copy \${label} values\`, onClick: () => undefined },
	],
}

const statusBarRegion: TableCoreUiProps['statusBar'] = (table) => (
	<TableStatusBar table={table} />
)

type Props = {
	rows: FeatureRow[]
	/** Off: no menu, a header click sorts. */
	columnMenu?: boolean
	/** The sections of the menu, in the order they are written below. */
	sorting?: boolean
	grouping?: boolean
	pinning?: boolean
	hiding?: boolean
	/** The screen's own section. */
	exportValues?: boolean
}

export const ColumnMenuTable = ({
	rows,
	columnMenu = true,
	sorting = true,
	grouping = true,
	pinning = true,
	hiding = false,
	exportValues = false,
}: Props) => (
	<TableCore
		features={features}
		data={rows}
		columns={columns}
		getRowId={(row) => row.id}
		autoResetExpanded={false}
		initialState={{ expanded: true }}
		columnMenu={
			columnMenu
				? {
						sections: [
							sorting && sortingSection(),
							grouping && groupingSection(),
							pinning && pinningSection(),
							hiding && hidingSection(),
							exportValues && exportSection,
						].filter((section) => section !== false),
				  }
				: undefined
		}
		statusBar={statusBarRegion}
	/>
)
`,f=()=>document.querySelector("[role=menu]"),xe=async e=>{await l(e),await k(e,"Team"),a(A(e,"team").getAttribute("aria-expanded")==="true","the header is marked"),a(s().getByRole("menuitem",{name:"Sort"}),"Sort ›"),a(!s().queryByRole("menuitem",{name:"Hide column"}),"Hide is not in the default menu"),await r.click(s().getByRole("menuitem",{name:"Group by Team"})),await u(()=>e.querySelector('[data-lane-id="team"]'),"grouped"),await u(()=>!f(),"the menu closed")},ke=async e=>{await l(e),await k(e,"Name");const t=s().getByRole("menuitem",{name:"Sort"}),o=()=>document.querySelector('[data-column-submenu="sort"]');a(t.getAttribute("aria-haspopup")==="menu","Sort has a submenu"),await r.hover(t),await F(()=>a(o(),"hover opens it"),{timeout:3e3}),await r.unhover(t),await F(()=>a(!o(),"leaving closes it"),{timeout:3e3}),t.focus(),await r.keyboard("{ArrowRight}"),await u(()=>{var i;return((i=document.activeElement)==null?void 0:i.textContent)==="Sort A–Z"},"→ moves into the submenu"),await r.keyboard("{ArrowLeft}"),await u(()=>!o(),"← closes the submenu"),a(f(),"the menu is still open"),await r.keyboard("{ArrowRight}"),await u(()=>o(),"open again"),await r.keyboard("{Enter}"),await u(()=>{const i=I(e,"name");return i.join()===[...i].sort((E,C)=>E.localeCompare(C)).join()},"sorted A–Z"),await u(()=>!f(),"the menu closed after the pick")},ve=async e=>{await l(e),await k(e,"Level"),a(s().getByRole("menuitem",{name:"Copy Level values"}),"the screen’s own section"),a(s().getByRole("menuitem",{name:"Freeze column"}),"the freezing section"),await r.click(s().getByRole("menuitem",{name:"Hide column"})),await u(()=>!J(e,"level"),"Level is hidden")},Ee=async e=>{await l(e),await r.click(A(e,"name")),await u(()=>{const t=I(e,"name");return t.join()===[...t].sort((o,i)=>o.localeCompare(i)).join()},"sorted by the click"),a(!f(),"no menu"),a($(e,0,"name"),"the table is there")},Ce=async e=>{const t=e.canvasElement;await Z(e,{columnMenu:!1}),await l(t),await r.click(A(t,"team")),await new Promise(o=>{setTimeout(o,300)}),a(!f(),"columnMenu off: no menu")},Te=async e=>{const t=e.canvasElement;await Z(e,{hiding:!1,exportValues:!1,grouping:!1}),await l(t),await k(t,"Level"),a(!s().queryByRole("menuitem",{name:"Hide column"}),"hiding off: no Hide column"),a(!s().queryByRole("menuitem",{name:"Copy Level values"}),"exportValues off: no screen section"),a(!s().queryByRole("menuitem",{name:"Group by Level"}),"grouping off: no Group by"),a(s().getByRole("menuitem",{name:"Freeze column"}),"pinning still on"),await K()},Ae=oe({rowSortingFeature:de,columnGroupingFeature:me,rowExpandingFeature:le,groupRowsFeature:ce,columnPinningFeature:ue,columnVisibilityFeature:ie,columnSizingFeature:re,groupedRowModel:ye(),expandedRowModel:he(),sortedRowModel:ge(),sortFns:se,columnMeta:pe()}),c=fe(),Fe=c.columns([c.accessor("name",{header:"Name",size:190}),c.accessor("team",{header:"Team",size:130}),c.accessor("role",{header:"Role",size:160}),c.accessor("level",{header:"Level",size:100}),c.accessor("country",{header:"Country",size:130}),c.accessor("rate",{header:"Rate",size:90})]),Oe={id:"export",getItems:({label:e})=>[{id:"copy",label:`Copy ${e} values`,onClick:()=>{}}]},_e=e=>n.jsx(ae,{table:e}),je=({rows:e,columnMenu:t=!0,sorting:o=!0,grouping:i=!0,pinning:E=!0,hiding:C=!1,exportValues:D=!1})=>n.jsx(Q,{features:Ae,data:e,columns:Fe,getRowId:T=>T.id,autoResetExpanded:!1,initialState:{expanded:!0},columnMenu:t?{sections:[o&&X(),i&&ee(),E&&ne(),C&&te(),D&&Oe].filter(T=>T!==!1)}:void 0,statusBar:_e}),Ge=10,M=({hint:e,...t})=>{const o=be.useMemo(()=>Me(Ge),[]);return n.jsx(we,{hint:e,children:n.jsx(je,{rows:o,...t})})},R={columnMenu:!0,sorting:!0,grouping:!0,pinning:!0,hiding:!1,exportValues:!1},x={columnMenu:{control:{type:"boolean"}},sorting:{control:{type:"boolean"}},grouping:{control:{type:"boolean"}},pinning:{control:{type:"boolean"}},hiding:{control:{type:"boolean"}},exportValues:{control:{type:"boolean"}}},[m]=Object.values([Re]),Pe={title:"Tables/Table Core/Features/Drafts/Column menu",id:"tables-table-core-features-column-menu",...Se(m)},d={tags:["kb:column-menu-open-menu"],name:"1 · Open the menu",parameters:{...S(m,"OpenMenu"),summary:"A header click opens the menu; an item runs and closes it."},args:R,argTypes:x,render:e=>n.jsx(b,{args:e,children:n.jsx(M,{...e,hint:n.jsx(w,{text:"Click the **Team** header: the menu opens under it and the header stays highlighted. Pick **Group by Team**: the rows are grouped and the menu closes."})})}),play:async e=>{v(e)||(await xe(e.canvasElement),await Ce(e))}},p={tags:["kb:column-menu-submenu"],name:"2 · Sort submenu",parameters:{...S(m,"Submenu"),summary:"`Sort ›` opens a submenu on hover and with →; ← closes only it."},args:R,argTypes:x,render:e=>n.jsx(b,{args:e,children:n.jsx(M,{...e,hint:n.jsx(w,{text:"Open **Name** and hover **Sort ›**: the submenu opens. With the keyboard: ↓ to **Sort**, → opens it, ← closes only the submenu, Enter picks."})})}),play:async e=>{v(e)||await ke(e.canvasElement)}},g={tags:["kb:column-menu-sections"],name:"3 · Your own sections",parameters:{...S(m,"Sections"),summary:"`columnMenu.sections`: the built-in sections and the screen’s own, in its order."},args:{...R,hiding:!0,exportValues:!0},argTypes:x,render:e=>n.jsx(b,{args:e,children:n.jsx(M,{...e,hint:n.jsx(w,{text:"The screen added Hide and a section of its own (*Copy … values*). Open **Level** → **Hide column**. Empty sections are skipped."})})}),play:async e=>{v(e)||(await ve(e.canvasElement),await Te(e))}},h={tags:["kb:column-menu-off"],name:"4 · Menu off",parameters:{...S(m,"Off"),summary:"Without `columnMenu` a header click sorts."},args:{...R,columnMenu:!1},argTypes:x,render:e=>n.jsx(b,{args:e,children:n.jsx(M,{...e,hint:n.jsx(w,{text:"No `columnMenu`: no menu. A click on **Name** sorts right away; click again to flip."})})}),play:async e=>{v(e)||await Ee(e.canvasElement)}},y={tags:["kb:column-menu-playground"],name:"Playground",parameters:S(m,"Playground"),args:R,argTypes:x,render:e=>n.jsx(b,{args:e,children:n.jsx(M,{...e,hint:n.jsx(w,{text:"Everything together: switch the menu and each of its sections on and off."})})})};var O,_,j;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  tags: ['kb:column-menu-open-menu'],
  name: '1 · Open the menu',
  parameters: {
    ...sceneCodeWith(source, 'OpenMenu'),
    summary: 'A header click opens the menu; an item runs and closes it.'
  },
  args: MENU_ARGS,
  argTypes: MENU_ARG_TYPES,
  render: args => <Remount args={args}>
            <Scene {...args} hint={<Md text="Click the **Team** header: the menu opens under it and the header stays highlighted. Pick **Group by Team**: the rows are grouped and the menu closes." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await openAct(ctx.canvasElement);
    await menuOffAct(ctx);
  }
}`,...(j=(_=d.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var G,P,B;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  tags: ['kb:column-menu-submenu'],
  name: '2 · Sort submenu',
  parameters: {
    ...sceneCodeWith(source, 'Submenu'),
    summary: '\`Sort ›\` opens a submenu on hover and with →; ← closes only it.'
  },
  args: MENU_ARGS,
  argTypes: MENU_ARG_TYPES,
  render: args => <Remount args={args}>
            <Scene {...args} hint={<Md text="Open **Name** and hover **Sort ›**: the submenu opens. With the keyboard: ↓ to **Sort**, → opens it, ← closes only the submenu, Enter picks." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await submenuAct(ctx.canvasElement);
  }
}`,...(B=(P=p.parameters)==null?void 0:P.docs)==null?void 0:B.source}}};var N,z,H;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
  tags: ['kb:column-menu-sections'],
  name: '3 · Your own sections',
  parameters: {
    ...sceneCodeWith(source, 'Sections'),
    summary: '\`columnMenu.sections\`: the built-in sections and the screen’s own, in its order.'
  },
  args: {
    ...MENU_ARGS,
    hiding: true,
    exportValues: true
  },
  argTypes: MENU_ARG_TYPES,
  render: args => <Remount args={args}>
            <Scene {...args} hint={<Md text="The screen added Hide and a section of its own (*Copy … values*). Open **Level** → **Hide column**. Empty sections are skipped." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await sectionsAct(ctx.canvasElement);
    await sectionControlsAct(ctx);
  }
}`,...(H=(z=g.parameters)==null?void 0:z.docs)==null?void 0:H.source}}};var U,V,L;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
  tags: ['kb:column-menu-off'],
  name: '4 · Menu off',
  parameters: {
    ...sceneCodeWith(source, 'Off'),
    summary: 'Without \`columnMenu\` a header click sorts.'
  },
  args: {
    ...MENU_ARGS,
    columnMenu: false
  },
  argTypes: MENU_ARG_TYPES,
  render: args => <Remount args={args}>
            <Scene {...args} hint={<Md text="No \`columnMenu\`: no menu. A click on **Name** sorts right away; click again to flip." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await offAct(ctx.canvasElement);
  }
}`,...(L=(V=h.parameters)==null?void 0:V.docs)==null?void 0:L.source}}};var W,Y,q;y.parameters={...y.parameters,docs:{...(W=y.parameters)==null?void 0:W.docs,source:{originalSource:`{
  tags: ['kb:column-menu-playground'],
  name: 'Playground',
  parameters: sceneCodeWith(source, 'Playground'),
  args: MENU_ARGS,
  argTypes: MENU_ARG_TYPES,
  render: args => <Remount args={args}>
            <Scene {...args} hint={<Md text="Everything together: switch the menu and each of its sections on and off." />} />
        </Remount>
}`,...(q=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:q.source}}};const Be=["OpenMenu","Submenu","Sections","Off","Playground"],He=Object.freeze(Object.defineProperty({__proto__:null,Off:h,OpenMenu:d,Playground:y,Sections:g,Submenu:p,__namedExportsOrder:Be,default:Pe},Symbol.toStringTag,{value:"Module"}));export{He as S};
