import{M,O as _,S as j,_ as V}from"./scene-CA7bFVvb.js";import{t as w,u as s,h as n,aA as a,l as p,w as l,y as m,c as b,j as o,b as z,M as R,s as P,p as L,d as K,e as Q,f as I}from"./products-CTiDOXRn.js";import{F as d}from"./filters-CUv8qRVT.js";const F=e=>{var t;return((t=e.querySelector("[data-filters-state]"))==null?void 0:t.textContent)??""},r=(e,t)=>e.length>0&&e.every(f=>f===t),W=async e=>{await w(e),p(r(a(e,"country"),"Poland"),`only Poland is left: ${a(e,"country")}`)},$=async e=>{await w(e);const t=a(e,"country").length;await s.click(l(e).getByRole("button",{name:"Poland"})),await n(()=>r(a(e,"country"),"Poland"),"the button filtered the table"),p(F(e).includes('"poland"'),`the screen has the state: ${F(e)}`),await s.click(l(e).getByRole("button",{name:"Kazakhstan, QA"})),await n(()=>r(a(e,"country"),"Kazakhstan")&&r(a(e,"role"),"QA"),"two filters at once"),await s.click(l(e).getByRole("button",{name:"No filters"})),await n(()=>a(e,"country").length===t,"the button cleared the filters")},h=e=>l(e).getByRole("textbox",{name:"Filter"}),y=(e,t)=>s.selectOptions(l(e).getByRole("combobox",{name:"Column"}),t),q=async e=>{await w(e),await s.type(h(e),"ger"),await n(()=>r(a(e,"country"),"Germany"),`setFilterValue filtered Country: ${a(e,"country")}`),await y(e,"team"),p(h(e).disabled,"Team says enableColumnFilter: false: getCanFilter() is false, the screen has no field for it"),await y(e,"level"),await s.type(h(e),"C"),await n(()=>a(e,"level").length>0&&a(e,"level").every(t=>t.startsWith("C")),`Level has its own filterFn, it keeps what starts with C: ${a(e,"level")}`),await s.click(l(e).getByRole("button",{name:"Clear"})),await n(()=>a(e,"level").length>4,"resetColumnFilters cleared it")},G=async e=>{const t=e.canvasElement;await m(e,{filters:"Kazakhstan, QA"}),await n(()=>r(a(t,"country"),"Kazakhstan")&&r(a(t,"role"),"QA"),"filters: Kazakhstan, QA leaves those rows"),await m(e,{filters:"none"}),await n(()=>new Set(a(t,"country")).size>1,"filters: none brings the rows back")},N=async e=>{const t=e.canvasElement;await m(e,{enableFilters:!1}),await n(()=>t.querySelector("[data-cell]"),"the table is drawn again");const f=a(t,"country").length;await y(t,"country"),await s.type(h(t),"ger"),await new Promise(B=>{setTimeout(B,300)}),p(a(t,"country").length===f,"enableFilters off: typing leaves every row"),await m(e,{enableFilters:!0}),await n(()=>t.querySelector("[data-cell]"),"the table is drawn again"),await y(t,"country"),await s.type(h(t),"ger"),await n(()=>r(a(t,"country"),"Germany"),"enableFilters on: Country is filtered")},[g]=Object.values([V]),D={title:"Tables/Table Core/Features/Filtering/Basics",id:"tables-table-core-features-filtering-basics",...I(g)},i={tags:["kb:filter-one-prop"],name:"1 · One prop",parameters:{...P(g,"OneProp",Q({filters:d})),summary:"`state.columnFilters` as a constant filters the rows."},args:{filters:"Poland"},argTypes:{filters:K(d)},render:({filters:e})=>o.jsx(j,{filters:L(d,e),hint:o.jsx(R,{text:"The screen passes `state.columnFilters` as a constant, here `[{ id: 'country', value: 'poland' }]`: only the rows of **Poland** are left. A constant nobody changes; the control picks another one."})}),play:async e=>{b(e)||(await W(e.canvasElement),await G(e))}},c={tags:["kb:filter-external-control"],name:"2 · The screen owns the filters",parameters:{summary:"The screen passes `state.columnFilters` with `onColumnFiltersChange`."},render:()=>o.jsx(_,{}),play:async e=>{b(e)||await $(e.canvasElement)}},u={tags:["kb:filter-column-setup"],name:"3 · The screen calls setFilterValue",parameters:{...P(g,"ByMethod"),summary:"The screen filters with `column.setFilterValue`; a column says whether it filters and how."},args:{set:"setup",enableFilters:!0},argTypes:{set:{control:{type:"radio"},options:["setup","basic"]},enableFilters:{control:{type:"boolean"}}},render:e=>o.jsx(z,{args:e,children:o.jsx(M,{...e,hint:o.jsx(R,{text:"The field above the table is the screen’s own: it calls `column.setFilterValue`. **Team** says `enableColumnFilter: false` (`getCanFilter()` is false, so the screen leaves it out); **Level** has its own `filterFn`: it keeps the levels that start with what you type."})})}),play:async e=>{b(e)||(await q(e.canvasElement),await N(e))}};var v,C,k;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ['kb:filter-one-prop'],
  name: '1 · One prop',
  parameters: {
    ...sceneCodeWith(tableSource, 'OneProp', presetCodes({
      filters: FILTERS
    })),
    summary: '\`state.columnFilters\` as a constant filters the rows.'
  },
  args: {
    filters: 'Poland'
  },
  argTypes: {
    filters: presetControl(FILTERS)
  },
  render: ({
    filters
  }) => <Scene filters={presetValue(FILTERS, filters)} hint={<Md text="The screen passes \`state.columnFilters\` as a constant, here \`[{ id: 'country', value: 'poland' }]\`: only the rows of **Poland** are left. A constant nobody changes; the control picks another one." />} />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await oneStateAct(ctx.canvasElement);
    await filtersControlAct(ctx);
  }
}`,...(k=(C=i.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var T,S,x;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  tags: ['kb:filter-external-control'],
  name: '2 · The screen owns the filters',
  parameters: {
    summary: 'The screen passes \`state.columnFilters\` with \`onColumnFiltersChange\`.'
  },
  render: () => <OutsideScene />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await outsideAct(ctx.canvasElement);
  }
}`,...(x=(S=c.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var A,O,E;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  tags: ['kb:filter-column-setup'],
  name: '3 · The screen calls setFilterValue',
  parameters: {
    ...sceneCodeWith(tableSource, 'ByMethod'),
    summary: 'The screen filters with \`column.setFilterValue\`; a column says whether it filters and how.'
  },
  args: {
    set: 'setup',
    enableFilters: true
  },
  argTypes: {
    set: {
      control: {
        type: 'radio'
      },
      options: ['setup', 'basic']
    },
    enableFilters: {
      control: {
        type: 'boolean'
      }
    }
  },
  render: args => <Remount args={args}>
            <MethodScene {...args} hint={<Md text="The field above the table is the screen’s own: it calls \`column.setFilterValue\`. **Team** says \`enableColumnFilter: false\` (\`getCanFilter()\` is false, so the screen leaves it out); **Level** has its own \`filterFn\`: it keeps the levels that start with what you type." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await methodAct(ctx.canvasElement);
    await methodControlAct(ctx);
  }
}`,...(E=(O=u.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};const H=["OneProp","ExternalControl","ByMethod"],Y=Object.freeze(Object.defineProperty({__proto__:null,ByMethod:u,ExternalControl:c,OneProp:i,__namedExportsOrder:H,default:D},Symbol.toStringTag,{value:"Module"}));export{Y as B};
