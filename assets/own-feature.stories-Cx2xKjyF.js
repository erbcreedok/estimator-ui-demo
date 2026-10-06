import{j as r}from"./jsx-runtime-Cnbe3ryz.js";import{w as i,u}from"./index-iBx7lKYd.js";import{a as w,d as p,k as l,u as g,t as c,f as h,b as F}from"./table-core-base-DFRq_Vzl.js";import{c as C}from"./play-kit-Bu4SXy9H.js";import{w as y,d as x}from"./scene-kit-BsKxVgS1.js";import"./index-3dRrDZpt.js";import"./places-Dp9r7e0L.js";const k=`// A screen with a feature of its own: the table of TableCore (\`tableCoreBase\`:
// its features, row models and fixed choices) plus \`FavouritesFeature\`, drawn by
// hand. \`TableCore\` itself takes no extra features yet, so this is the headless
// way: TanStack's \`useReactTable\` over the same base.
import { flexRender, useReactTable } from '@tanstack/react-table'
import React from 'react'

import { tableCoreBase, tableCoreColumns } from '../../headless'

import { FavouritesFeature } from './favourites-feature'

type Person = { id: string; name: string; team: string }

const people: Person[] = [
	{ id: 'a', name: 'Anna Kowalska', team: 'Dev' },
	{ id: 'b', name: 'Nurlan Abenov', team: 'QA' },
	{ id: 'c', name: 'Marta Zielinska', team: 'Dev' },
	{ id: 'd', name: 'Daniel Weiss', team: 'Ops' },
]

const columns = tableCoreColumns<Person>([
	{
		id: 'favourite',
		header: '',
		cell: ({ row, table }) => (
			<button
				type="button"
				data-favourite={row.id}
				aria-pressed={row.getIsFavourite()}
				aria-label={\`Favourite: \${row.original.name}\`}
				onClick={() => table.toggleFavourite(row.id)}
			>
				{row.getIsFavourite() ? '★' : '☆'}
			</button>
		),
	},
	{ id: 'name', accessorKey: 'name', header: 'Name' },
	{ id: 'team', accessorKey: 'team', header: 'Team' },
])

export const FavouritesTable = () => {
	const table = useReactTable<Person>({
		...tableCoreBase,
		_features: [...tableCoreBase._features, FavouritesFeature],
		data: people,
		columns,
		getRowId: (person) => person.id,
	})

	return (
		<div>
			<p data-favourite-count>
				{table.getFavouriteCount()} favourite
				{table.getFavouriteCount() === 1 ? '' : 's'}
			</p>
			<table>
				<tbody>
					{table.getRowModel().rows.map((row) => (
						<tr key={row.id}>
							{row.getVisibleCells().map((cell) => (
								<td key={cell.id}>
									{flexRender(cell.column.columnDef.cell, cell.getContext())}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}
`,b={getInitialState:e=>({favourites:{},...e}),getDefaultOptions:e=>({enableFavourites:!0,onFavouritesChange:t=>e.setState(a=>({...a,favourites:w(t,a.favourites)}))}),createTable:e=>{e.toggleFavourite=t=>{var a,n;e.options.enableFavourites!==!1&&((n=(a=e.options).onFavouritesChange)==null||n.call(a,o=>({...o,[t]:!o[t]})))},e.getFavouriteCount=()=>Object.values(e.getState().favourites).filter(Boolean).length},createRow:(e,t)=>{e.getIsFavourite=()=>!!t.getState().favourites[e.id]}};p({feature:b,table:l()(["toggleFavourite","getFavouriteCount"]),column:[],row:l()(["getIsFavourite"]),cell:[]});const E=[{id:"a",name:"Anna Kowalska",team:"Dev"},{id:"b",name:"Nurlan Abenov",team:"QA"},{id:"c",name:"Marta Zielinska",team:"Dev"},{id:"d",name:"Daniel Weiss",team:"Ops"}],T=F([{id:"favourite",header:"",cell:({row:e,table:t})=>r.jsx("button",{type:"button","data-favourite":e.id,"aria-pressed":e.getIsFavourite(),"aria-label":`Favourite: ${e.original.name}`,onClick:()=>t.toggleFavourite(e.id),children:e.getIsFavourite()?"★":"☆"})},{id:"name",accessorKey:"name",header:"Name"},{id:"team",accessorKey:"team",header:"Team"}]),R=()=>{const e=g({...c,_features:[...c._features,b],data:E,columns:T,getRowId:t=>t.id});return r.jsxs("div",{children:[r.jsxs("p",{"data-favourite-count":!0,children:[e.getFavouriteCount()," favourite",e.getFavouriteCount()===1?"":"s"]}),r.jsx("table",{children:r.jsx("tbody",{children:e.getRowModel().rows.map(t=>r.jsx("tr",{children:t.getVisibleCells().map(a=>r.jsx("td",{children:h(a.column.columnDef.cell,a.getContext())},a.id))},t.id))})})]})},S=Object.assign({"./own-feature/favourites-table.tsx":k}),j=S["./own-feature/favourites-table.tsx"],A=e=>e.replace("from '../../headless'","from '@pnl-simulation/table-core/headless'"),d=()=>A(j),$={title:"Tables/Table Core/Features/Own feature",decorators:[y],parameters:{layout:"padded",sceneCode:d,docs:{source:x(d)}}},s={tags:["kb:features-own-feature"],name:"A feature of your own",render:()=>r.jsx(R,{}),play:async e=>{if(C(e))return;const t=e.canvasElement,a=()=>{var o;return((o=t.querySelector("[data-favourite-count]"))==null?void 0:o.textContent)??""},n=o=>t.querySelector(`[data-favourite="${o}"]`);await i(()=>{if(!a().startsWith("0 favourites"))throw new Error("0 favourites")}),await u.click(n("b")),await i(()=>{if(a()!=="1 favourite")throw new Error(`count: ${a()}`);if(n("b").getAttribute("aria-pressed")!=="true")throw new Error("the star of the row is lit")}),await u.click(n("b")),await i(()=>{if(!a().startsWith("0 favourites"))throw new Error("back to 0")})}};var f,m,v;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['kb:features-own-feature'],
  name: 'A feature of your own',
  render: () => <FavouritesTable />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    const root = ctx.canvasElement;
    const count = () => root.querySelector('[data-favourite-count]')?.textContent ?? '';
    const star = (id: string) => root.querySelector(\`[data-favourite="\${id}"]\`) as HTMLElement;
    await waitFor(() => {
      if (!count().startsWith('0 favourites')) throw new Error('0 favourites');
    });
    await userEvent.click(star('b'));
    await waitFor(() => {
      if (count() !== '1 favourite') throw new Error(\`count: \${count()}\`);
      if (star('b').getAttribute('aria-pressed') !== 'true') throw new Error('the star of the row is lit');
    });
    await userEvent.click(star('b'));
    await waitFor(() => {
      if (!count().startsWith('0 favourites')) throw new Error('back to 0');
    });
  }
}`,...(v=(m=s.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};const M=["Favourites"];export{s as Favourites,M as __namedExportsOrder,$ as default};
