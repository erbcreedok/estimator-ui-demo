import{t as S,u as f,aD as d,h as m,aC as D,r as P,j as r,Y as J,a0 as U,cp as q,bh as G,a1 as V,bi as Y,a6 as Z,bj as B,Z as K,c as y,s as w,d as M,f as Q,S as X,p as R,M as ee,e as te}from"./products-CTiDOXRn.js";import{m as se}from"./rows-l3LcChQt.js";const ne=`import { useState } from 'react'

import {
	TableCore,
	columnSizingFeature,
	createColumnHelper,
	createSortedRowModel,
	metaHelper,
	rowSortingFeature,
	sortFn_basic,
	sortFn_text,
	tableFeatures,
	type CoreColumnMeta,
	type SortingState,
	type Updater,
} from '@pnl-simulation/table-core'

import type { FeatureRow } from '../../data/rows'

import { anySorting, type SortingRule } from './sorting-rules'

// The sorts are the screen's: \`state.sorting\` with \`onSortingChange\`, so every
// change (a click, Shift+click, the menu) reaches the screen first. v9 limits
// the number of sorts itself (\`maxMultiSortColCount\`: the oldest goes); a rule
// of the screen (\`rule\`) answers the rest: it gets the sorts asked for and
// gives the sorts that stay.
const features = tableFeatures({
	rowSortingFeature,
	columnSizingFeature,
	sortedRowModel: createSortedRowModel(),
	sortFns: { text: sortFn_text, basic: sortFn_basic },
	columnMeta: metaHelper<CoreColumnMeta>(),
})

const helper = createColumnHelper<typeof features, FeatureRow>()
const columns = helper.columns([
	helper.accessor('name', { header: 'Name', size: 190 }),
	helper.accessor('team', { header: 'Team', size: 120 }),
	helper.accessor('role', { header: 'Role', size: 150 }),
	helper.accessor('level', { header: 'Level', size: 90 }),
	helper.accessor('country', { header: 'Country', size: 120 }),
])

const resolved = (updater: Updater<SortingState>, old: SortingState) =>
	typeof updater === 'function' ? updater(old) : updater

type Props = {
	rows: FeatureRow[]
	/** The sorts the table starts with. */
	initialSorting?: SortingState
	/** v9: the most sorts at once; a new one over the limit takes the oldest out. */
	maxMultiSortColCount?: number
	/** What the screen lets through of a change of the sorts. */
	rule?: SortingRule
}

export const SortingLimitsTable = ({
	rows,
	initialSorting = [],
	maxMultiSortColCount = undefined,
	rule = anySorting,
}: Props) => {
	const [sorting, setSorting] = useState<SortingState>(initialSorting)

	return (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			<TableCore
				features={features}
				data={rows}
				columns={columns}
				getRowId={(row) => row.id}
				enableMultiSort
				maxMultiSortColCount={maxMultiSortColCount}
				state={{ sorting }}
				onSortingChange={(updater) =>
					setSorting((old) => rule(resolved(updater, old)))
				}
			/>
			<code data-sorting-state style={{ padding: 8 }}>
				{JSON.stringify(sorting)}
			</code>
		</div>
	)
}
`,s=e=>{var t;return JSON.parse(((t=e.querySelector("[data-sorting-state]"))==null?void 0:t.textContent)??"[]").map(n=>n.id).join()},a=async(e,t)=>D(d(e,t)),re=async e=>{await S(e),await f.click(d(e,"name")),await a(e,"role"),await a(e,"country"),await m(()=>s(e)==="name,role,country",`three sorts: ${s(e)}`)},ae=async e=>{await S(e),await f.click(d(e,"name")),await a(e,"role"),await a(e,"country"),await m(()=>s(e)==="role,country",`two sorts: ${s(e)}`)},oe=async e=>{await S(e),await f.click(d(e,"role")),await a(e,"team"),await m(()=>s(e)==="team,role",`Team first: ${s(e)}`),await a(e,"country"),await m(()=>s(e)==="team,country",`Team and the last: ${s(e)}`),await a(e,"name"),await m(()=>s(e)==="team,name",`Team and the last: ${s(e)}`)},W=e=>e,F=(e,t)=>n=>{const h=n.find(o=>o.id===e);return h?[h,...n.filter(o=>o.id!==e).slice(-t)]:n.slice(-(t+1))},C={"any sorting":{value:W,code:"anySorting"},"Team first, one more":{value:F("team",1),code:"keepFirst('team', 1)"},"Team first, two more":{value:F("team",2),code:"keepFirst('team', 2)"}},b={"no limit":{value:void 0,code:"undefined"},one:{value:1,code:"1"},two:{value:2,code:"2"},three:{value:3,code:"3"}},ie=U({rowSortingFeature:Y,columnSizingFeature:V,sortedRowModel:B(),sortFns:{text:G,basic:q},columnMeta:Z()}),i=K(),le=i.columns([i.accessor("name",{header:"Name",size:190}),i.accessor("team",{header:"Team",size:120}),i.accessor("role",{header:"Role",size:150}),i.accessor("level",{header:"Level",size:90}),i.accessor("country",{header:"Country",size:120})]),ce=(e,t)=>typeof e=="function"?e(t):e,ue=({rows:e,initialSorting:t=[],maxMultiSortColCount:n=void 0,rule:h=W})=>{const[o,H]=P.useState(t);return r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx(J,{features:ie,data:e,columns:le,getRowId:p=>p.id,enableMultiSort:!0,maxMultiSortColCount:n,state:{sorting:o},onSortingChange:p=>H($=>h(ce(p,$)))}),r.jsx("code",{"data-sorting-state":!0,style:{padding:8},children:JSON.stringify(o)})]})},[g]=Object.values([ne]),me={title:"Tables/Table Core/Concepts/Recipes/Sorting limits",id:"tables-table-core-concepts-recipes-sorting-limits",...Q(g)},k=te({maxMultiSortColCount:b,rule:C}),x={maxMultiSortColCount:M(b),rule:M(C)},v=({args:e,hint:t})=>{const n=P.useMemo(()=>se(8),[]);return r.jsx(X,{hint:r.jsx(ee,{text:t}),children:r.jsx(ue,{rows:n,maxMultiSortColCount:R(b,e.maxMultiSortColCount),rule:R(C,e.rule)})})},T={maxMultiSortColCount:"no limit",rule:"any sorting"},l={tags:["kb:recipe-sorting-state"],name:"1 · The sorts are the screen’s",parameters:{...w(g,"ScreenOwnsSorts",k),summary:"`state.sorting` and `onSortingChange` are the screen’s: every change the user asks for comes to the screen first, and what it sets is what the table sorts by."},args:T,argTypes:x,render:e=>r.jsx(v,{args:e,hint:"Click **Name**, then Shift+click **Role** and **Country**: three sorts, and the line under the table is the state the screen holds. `rule` answers every change before it is set; with `any sorting` it lets all through."}),play:async e=>{y(e)||await re(e.canvasElement)}},c={tags:["kb:recipe-sorting-limit"],name:"2 · At most two sorts",parameters:{...w(g,"AtMostTwo",k),summary:"v9’s `maxMultiSortColCount` limits the number of sorts: a new one over the limit takes the oldest out."},args:{...T,maxMultiSortColCount:"two"},argTypes:x,render:e=>r.jsx(v,{args:e,hint:"Click **Name**, Shift+click **Role** and **Country**: **Name**, the oldest, is out, and Role, Country stay. Pick **one** and Shift+click does not add a sort."}),play:async e=>{y(e)||await ae(e.canvasElement)}},u={tags:["kb:recipe-sorting-first"],name:"3 · One column always first",parameters:{...w(g,"OneColumnFirst",k),summary:"A rule of the screen on `onSortingChange`: `keepFirst(id, more)` puts the sort of `id` first and keeps only the last `more` of the others. In the Resource Plans list, `client` is first and one more sort stands with it."},args:{...T,rule:"Team first, one more"},argTypes:x,render:e=>r.jsx(v,{args:e,hint:"Click **Role**, Shift+click **Team**: Team stands first, though it was asked second. Shift+click **Country**, then **Name**: Team stays, and only the last sort stands with it. Without a sort of Team, the last two stay."}),play:async e=>{y(e)||await oe(e.canvasElement)}};var O,_,j;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  tags: ['kb:recipe-sorting-state'],
  name: '1 · The sorts are the screen’s',
  parameters: {
    ...sceneCodeWith(tableSource, 'ScreenOwnsSorts', codes),
    summary: '\`state.sorting\` and \`onSortingChange\` are the screen’s: every change the user asks for comes to the screen first, and what it sets is what the table sorts by.'
  },
  args: base,
  argTypes: controls,
  render: args => <Scene args={args} hint="Click **Name**, then Shift+click **Role** and **Country**: three sorts, and the line under the table is the state the screen holds. \`rule\` answers every change before it is set; with \`any sorting\` it lets all through." />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await stateAct(ctx.canvasElement);
  }
}`,...(j=(_=l.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var z,A,N;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  tags: ['kb:recipe-sorting-limit'],
  name: '2 · At most two sorts',
  parameters: {
    ...sceneCodeWith(tableSource, 'AtMostTwo', codes),
    summary: 'v9’s \`maxMultiSortColCount\` limits the number of sorts: a new one over the limit takes the oldest out.'
  },
  args: {
    ...base,
    maxMultiSortColCount: 'two'
  },
  argTypes: controls,
  render: args => <Scene args={args} hint="Click **Name**, Shift+click **Role** and **Country**: **Name**, the oldest, is out, and Role, Country stay. Pick **one** and Shift+click does not add a sort." />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await limitAct(ctx.canvasElement);
  }
}`,...(N=(A=c.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var E,I,L;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  tags: ['kb:recipe-sorting-first'],
  name: '3 · One column always first',
  parameters: {
    ...sceneCodeWith(tableSource, 'OneColumnFirst', codes),
    summary: 'A rule of the screen on \`onSortingChange\`: \`keepFirst(id, more)\` puts the sort of \`id\` first and keeps only the last \`more\` of the others. In the Resource Plans list, \`client\` is first and one more sort stands with it.'
  },
  args: {
    ...base,
    rule: 'Team first, one more'
  },
  argTypes: controls,
  render: args => <Scene args={args} hint="Click **Role**, Shift+click **Team**: Team stands first, though it was asked second. Shift+click **Country**, then **Name**: Team stays, and only the last sort stands with it. Without a sort of Team, the last two stay." />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await firstAct(ctx.canvasElement);
  }
}`,...(L=(I=u.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};const he=["ScreenOwnsSorts","AtMostTwo","OneColumnFirst"],pe=Object.freeze(Object.defineProperty({__proto__:null,AtMostTwo:c,OneColumnFirst:u,ScreenOwnsSorts:l,__namedExportsOrder:he,default:me},Symbol.toStringTag,{value:"Module"}));export{pe as S};
