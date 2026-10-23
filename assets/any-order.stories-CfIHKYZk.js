import{c as A,y as i,h as c,j as n,b as v,s as x,f as S,r as m,S as E,M as k}from"./products-CTiDOXRn.js";import{m as O}from"./rows-l3LcChQt.js";import{n as R}from"./checks-R4e5umqc.js";import{T as j}from"./totals-CNUlOeK6.js";import{G as M,s as w}from"./scene-CB7jjebp.js";const C={title:"Tables/Table Core/Features/Grouping/Look/Any order",id:"tables-table-core-features-grouping-look-any-order",...S(w)},h={"Team › Role":["team","role"],"Role › Team":["role","team"],"Team › Role › Level":["team","role","level"],"Country › Team › Role":["country","team","role"]},_=({teamLayout:e,levelLayout:a,roleLayout:l,countryLayout:o,groupTotals:t,groupIndent:r,utility:b})=>{const T=m.useMemo(()=>O(16),[]),[f,u]=m.useState(["team","role"]);return n.jsxs(E,{fit:"scroll",hint:n.jsx(k,{text:"**Team** and **Level** are header rows, **Role** and **Country** are lanes (each column says it with `meta.groupLayout`), in any order and any number. Every level is drawn inside the block of its parent: a band spans its block, with the lanes of the levels outside it beside it and the lanes of the levels inside under it."}),children:[n.jsx("div",{"data-orders":!0,style:{display:"flex",gap:8,padding:8},children:Object.entries(h).map(([d,L])=>n.jsx("button",{type:"button",onClick:()=>u(L),children:d},d))}),n.jsx("div",{style:{height:"calc(100% - 44px)"},children:n.jsx(M,{rows:T,grouping:f,onGroupingChange:u,teamLayout:e,levelLayout:a,roleLayout:l,countryLayout:o,groupTotals:t,groupIndent:r,utility:b})})]})},s={tags:["kb:group-any-order"],name:"Rows and lanes in any order",parameters:{...x(w,"AnyOrder"),summary:"Every level is drawn inside the block of its parent, in any order: a band spans its block, the lanes outside it stand beside it, the lanes inside start under it."},args:{teamLayout:"rows",levelLayout:"rows",roleLayout:"lanes",countryLayout:"lanes",groupTotals:"none",groupIndent:"none",utility:!1},argTypes:{teamLayout:{control:"radio",options:["lanes","rows"]},levelLayout:{control:"radio",options:["lanes","rows"]},roleLayout:{control:"radio",options:["lanes","rows"]},countryLayout:{control:"radio",options:["lanes","rows"]},groupTotals:{control:"radio",options:j},groupIndent:{control:"radio",options:["none","depth"]},utility:{control:"boolean"}},render:e=>n.jsx(v,{args:e,children:n.jsx(_,{...e})}),play:async e=>{if(A(e))return;const a=e.canvasElement,l=async o=>{Array.from(a.querySelectorAll("[data-orders] button")).find(r=>r.textContent===o).click(),await new Promise(r=>{setTimeout(r,400)}),await R(a)};await Object.keys(h).reduce((o,t)=>o.then(()=>l(t)),Promise.resolve()),await i(e,{groupTotals:"atEnd"}),await c(()=>a.querySelector("[data-totals-row]"),"groupTotals atEnd: the groups end with a totals row"),await i(e,{groupTotals:"none",teamLayout:"lanes"}),await c(()=>!Array.from(a.querySelectorAll("[data-group-row]")).some(o=>{var t;return(t=o.dataset.groupId)==null?void 0:t.includes("team:")}),"teamLayout lanes: Team is no longer a header row"),await i(e,{teamLayout:"rows"})}};var y,p,g;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  tags: ['kb:group-any-order'],
  name: 'Rows and lanes in any order',
  parameters: {
    ...sceneCodeWith(source, 'AnyOrder'),
    summary: 'Every level is drawn inside the block of its parent, in any order: a band spans its block, the lanes outside it stand beside it, the lanes inside start under it.'
  },
  args: {
    teamLayout: 'rows',
    levelLayout: 'rows',
    roleLayout: 'lanes',
    countryLayout: 'lanes',
    groupTotals: 'none',
    groupIndent: 'none',
    utility: false
  },
  argTypes: {
    teamLayout: {
      control: 'radio',
      options: ['lanes', 'rows']
    },
    levelLayout: {
      control: 'radio',
      options: ['lanes', 'rows']
    },
    roleLayout: {
      control: 'radio',
      options: ['lanes', 'rows']
    },
    countryLayout: {
      control: 'radio',
      options: ['lanes', 'rows']
    },
    groupTotals: {
      control: 'radio',
      options: TOTALS_NAMES
    },
    groupIndent: {
      control: 'radio',
      options: ['none', 'depth']
    },
    utility: {
      control: 'boolean'
    }
  },
  render: args => <Remount args={args}>
            <Scene {...args as Args} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    const c = ctx.canvasElement;
    const press = async (name: string) => {
      const button = Array.from(c.querySelectorAll<HTMLButtonElement>('[data-orders] button')).find(b => b.textContent === name) as HTMLElement;
      button.click();
      await new Promise(resolve => {
        setTimeout(resolve, 400);
      });
      await nestingAct(c);
    };
    await Object.keys(ORDERS).reduce((done, name) => done.then(() => press(name)), Promise.resolve());
    // A control changes the table: totals rows, and a level that was a row becomes a lane.
    await setArgs(ctx, {
      groupTotals: 'atEnd'
    });
    await until(() => c.querySelector('[data-totals-row]'), 'groupTotals atEnd: the groups end with a totals row');
    await setArgs(ctx, {
      groupTotals: 'none',
      teamLayout: 'lanes'
    });
    await until(() => !Array.from(c.querySelectorAll<HTMLElement>('[data-group-row]')).some(el => el.dataset.groupId?.includes('team:')), 'teamLayout lanes: Team is no longer a header row');
    await setArgs(ctx, {
      teamLayout: 'rows'
    });
  }
}`,...(g=(p=s.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};const q=["AnyOrder"],F=Object.freeze(Object.defineProperty({__proto__:null,AnyOrder:s,__namedExportsOrder:q,default:C},Symbol.toStringTag,{value:"Module"}));export{F as A};
