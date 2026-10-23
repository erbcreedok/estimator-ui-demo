import{y as l,h as c,O as p,l as b,n as F,j as a,Y as T,_ as O,$ as M,a0 as v,a1 as j,a2 as P,a3 as z,a4 as R,a5 as L,a6 as k,Z as A,r,S as h,M as y}from"./products-CTiDOXRn.js";import{m}from"./rows-l3LcChQt.js";const D=`import {
	TableCore,
	TableToolbar,
	columnChainsFeature,
	columnOrderingFeature,
	columnPinningFeature,
	columnSizingFeature,
	columnVisibilityFeature,
	columnsControl,
	createColumnHelper,
	metaHelper,
	tableFeatures,
	type ChainExpandedState,
	type ChainMembersState,
	type ColumnChain,
	type ColumnChainsState,
	type ColumnOrderState,
	type CoreColumnMeta,
	type OnChangeFn,
	type TableCoreUiProps,
} from '@pnl-simulation/table-core'

import type { FeatureRow } from '../../data/rows'

// Column chains are ours (v9 has no word for them): \`columnChainsFeature\`, added
// after the features whose answers it settles — the order (\`columnOrderingFeature\`)
// and the visibility (\`columnVisibilityFeature\`). Its state is
// \`columnChainExpanded\` (which chains are open) and \`columnChainMembers\`
// (who is in each chain, in order); \`chains\` defines them.
const features = tableFeatures({
	columnOrderingFeature,
	columnPinningFeature,
	columnVisibilityFeature,
	columnChainsFeature,
	columnSizingFeature,
	columnMeta: metaHelper<CoreColumnMeta>(),
})

const helper = createColumnHelper<typeof features, FeatureRow>()
const columns = helper.columns([
	helper.accessor('name', { header: 'Name', size: 190 }),
	helper.accessor('country', { header: 'Country', size: 130 }),
	helper.accessor('tier', { header: 'Tier', size: 100 }),
	helper.accessor('city', { header: 'City', size: 120 }),
	helper.accessor('email', { header: 'Email', size: 240 }),
	helper.accessor('phone', { header: 'Phone', size: 170 }),
])

/** Location (City may leave) and Contact (both required). */
export const CHAINS: ColumnChain[] = [
	{
		id: 'location',
		label: 'Location',
		columns: ['country', 'tier', { id: 'city', optional: true }],
	},
	{ id: 'contact', label: 'Contact', columns: ['email', 'phone'] },
]

const toolbarRegion: TableCoreUiProps['toolbar'] = (table) => (
	<TableToolbar table={table} controls={[columnsControl()]} />
)

export type ChainsTableProps = {
	rows: FeatureRow[]
	chains?: ColumnChain[]
	/** Which chains are open, \`{ location: true }\`. Left out: the table keeps its own. */
	expanded?: ChainExpandedState
	onExpandedChange?: OnChangeFn<ChainExpandedState>
	/** Who is in each chain. Left out: the chains' own lists. */
	members?: ChainMembersState
	onMembersChange?: OnChangeFn<ChainMembersState>
	/** The column order the screen keeps (it may disagree with the chains: they win). */
	columnOrder?: ColumnOrderState
	initialState?: Partial<ColumnChainsState> & { columnOrder?: string[] }
	initialPinning?: { start: string[]; end: string[] }
	enableColumnChains?: boolean
	toolbar?: boolean
}

export const ChainsTable = ({
	rows,
	chains = CHAINS,
	expanded = undefined,
	onExpandedChange,
	members,
	onMembersChange,
	columnOrder,
	initialState = undefined,
	initialPinning,
	enableColumnChains = true,
	toolbar = false,
}: ChainsTableProps) => (
	<TableCore
		features={features}
		data={rows}
		columns={columns}
		getRowId={(row) => row.id}
		chains={chains}
		enableColumnChains={enableColumnChains}
		enableRightPinning
		initialState={{
			...initialState,
			columnPinning: initialPinning ?? { start: [], end: [] },
		}}
		toolbar={toolbar ? toolbarRegion : undefined}
		{...((expanded || members || columnOrder) && {
			state: {
				...(expanded && { columnChainExpanded: expanded }),
				...(members && { columnChainMembers: members }),
				...(columnOrder && { columnOrder }),
			},
			onColumnChainExpandedChange: onExpandedChange,
			onColumnChainMembersChange: onMembersChange,
		})}
	/>
)
`,t=e=>F(e).join(),U=async e=>{const n=e.canvasElement;await l(e,{expanded:"both open"}),await c(()=>t(n)==="name,country,tier,city,email,phone",`both open: ${t(n)}`),await l(e,{expanded:"all folded"}),await c(()=>t(n)==="name,country,email",`all folded: ${t(n)}`)},W=async e=>{const n=e.canvasElement;await l(e,{initialState:"Location open"}),await c(()=>t(n)==="name,country,tier,city,email",`Location starts open: ${t(n)}`)},J=async e=>{const n=e.canvasElement;await l(e,{enableColumnChains:!0}),await p(n),await c(()=>n.querySelector("[data-chain-toggle]"),"the toggle is back"),b(t(n)==="name,country,email",`the chains fold: ${t(n)}`)},X=async e=>{const n=e.canvasElement;await l(e,{enableColumnChains:!1}),await p(n),await c(()=>t(n)==="name,country,tier,city,email,phone",`all the columns: ${t(n)}`),b(!n.querySelector("[data-chain-toggle]"),"no toggle")},Y={"Location open":{value:{location:!0},code:"{ location: true }"},"both open":{value:{location:!0,contact:!0},code:"{ location: true, contact: true }"},"all folded":{value:{},code:"{}"},"the table keeps its own":{value:void 0,code:"undefined"}},Z={"all folded":{value:void 0,code:"undefined"},"Location open":{value:{columnChainExpanded:{location:!0}},code:"{ columnChainExpanded: { location: true } }"},"both open":{value:{columnChainExpanded:{location:!0,contact:!0}},code:"{ columnChainExpanded: { location: true, contact: true } }"}},H=v({columnOrderingFeature:L,columnPinningFeature:R,columnVisibilityFeature:z,columnChainsFeature:P,columnSizingFeature:j,columnMeta:k()}),i=A(),I=i.columns([i.accessor("name",{header:"Name",size:190}),i.accessor("country",{header:"Country",size:130}),i.accessor("tier",{header:"Tier",size:100}),i.accessor("city",{header:"City",size:120}),i.accessor("email",{header:"Email",size:240}),i.accessor("phone",{header:"Phone",size:170})]),N=[{id:"location",label:"Location",columns:["country","tier",{id:"city",optional:!0}]},{id:"contact",label:"Contact",columns:["email","phone"]}],_=e=>a.jsx(O,{table:e,controls:[M()]}),C=({rows:e,chains:n=N,expanded:o=void 0,onExpandedChange:u,members:s,onMembersChange:g,columnOrder:d,initialState:x=void 0,initialPinning:w,enableColumnChains:S=!0,toolbar:f=!1})=>a.jsx(T,{features:H,data:e,columns:I,getRowId:E=>E.id,chains:n,enableColumnChains:S,enableRightPinning:!0,initialState:{...x,columnPinning:w??{start:[],end:[]}},toolbar:f?_:void 0,...(o||s||d)&&{state:{...o&&{columnChainExpanded:o},...s&&{columnChainMembers:s},...d&&{columnOrder:d}},onColumnChainExpandedChange:u,onColumnChainMembersChange:g}}),B=({hint:e,...n})=>{const o=r.useMemo(()=>m(6),[]);return a.jsx(h,{hint:e,children:a.jsx(C,{rows:o,...n})})},$=({state:e})=>a.jsx("code",{"data-chains-state":!0,style:{fontSize:12},children:JSON.stringify(e)}),G=()=>{const e=r.useMemo(()=>m(6),[]),[n,o]=r.useState({}),[u,s]=r.useState({});return a.jsxs(h,{hint:a.jsx(y,{text:"The screen owns `columnChainExpanded` and `columnChainMembers`: its buttons set them, a toggle or a drag in the table sets them too, and both see the same state."}),children:[a.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",height:36},children:[a.jsx("button",{type:"button",onClick:()=>o({location:!0,contact:!0}),children:"Open all"}),a.jsx("button",{type:"button",onClick:()=>o({}),children:"Close all"}),a.jsx("button",{type:"button",onClick:()=>s({location:["country","tier"]}),children:"City out of Location"})]}),a.jsx("div",{style:{height:"calc(100% - 64px)"},children:a.jsx(C,{rows:e,expanded:n,onExpandedChange:o,members:u,onMembersChange:s})}),a.jsx($,{state:{expanded:n,members:u}})]})},K=()=>{const e=r.useMemo(()=>m(6),[]),[n]=r.useState(["country","name","tier","email","city","phone"]);return a.jsx(h,{hint:a.jsx(y,{text:"The screen keeps `columnOrder` = Country, Name, Tier, Email, City, Phone: Country, Tier and City are split. The chain wins: its members are gathered side by side where its first member stands, and the layout says what it settled (`table.getColumnChainLayout().conflicts`)."}),children:a.jsx(C,{rows:e,columnOrder:n,initialState:{columnChainExpanded:{location:!0}}})})};export{Y as E,G as O,B as S,D as _,Z as a,K as b,J as c,X as d,U as e,W as s};
