import{c as g,h as s,y as r,l as y,j as l,M as n,d as b,ad as w,s as f,f as m}from"./products-CTiDOXRn.js";import{T as v}from"./totals-CNUlOeK6.js";import{b as i}from"./checks-BwzfMUfK.js";import{I as S,i as L,R as T}from"./issues-hold-scene-CMHtBXMX.js";import{S as R,s as h}from"./scene-CB7jjebp.js";const A={title:"Tables/Table Core/Features/Grouping/Playground",id:"tables-table-core-features-grouping-playground",...m(h)},u={initialGrouping:["team"],set:"basic",groupLayout:"lanes",groupTotals:"none",teamLayout:"table",levelLayout:"table",roleLayout:"table",countryLayout:"table",groupIndent:"none",groupHeader:"none",header:"global",enableGroupSelect:!0,utility:!1,enableMultiGroup:!0,enableGroupCollapse:!0,enableGroupLevelCollapse:!0,columnMenu:!0,toolbar:!0,statusBar:!0,issues:!1,resolve:"both"},G=(e,o)=>Object.fromEntries(Object.keys(e).map(t=>[t,t==="issues"||t==="resolve"?o[t]:{control:"boolean",...o[t],if:{arg:"issues",truthy:!1}}])),a={tags:["kb:group-playground"],name:"Playground",parameters:{...w("issues",f(h,"Playground"),L("Playground"),["resolve"])},args:u,argTypes:G(u,{issues:{control:"boolean"},resolve:{...b(T),if:{arg:"issues"}},initialGrouping:{control:!1},set:{control:"radio",options:["basic","ways","only"]},groupLayout:{control:"radio",options:["lanes","rows"]},groupTotals:{control:"radio",options:v},teamLayout:{control:"radio",options:["table","lanes","rows"]},levelLayout:{control:"radio",options:["table","lanes","rows"]},roleLayout:{control:"radio",options:["table","lanes","rows"]},countryLayout:{control:"radio",options:["table","lanes","rows"]},groupIndent:{control:"radio",options:["none","depth"]},groupHeader:{control:"radio",options:["none","labels","full"]},header:{control:"radio",options:["global","none"]},enableGroupSelect:{control:"boolean"},utility:{control:"boolean"}}),render:({issues:e,resolve:o,...t})=>e?l.jsx(S,{resolve:o,hint:l.jsx(n,{text:"Issues with an edit: the Issues button of the screen, a **Rate** that fixes a blocker, and **resolve** says how the screen resolves it. The controls of the layout belong to the other table: turn **issues** off to get them back."})}):l.jsx(R,{...t,count:12,hint:l.jsx(n,{text:"Everything together: group from a header menu or the toolbar’s **Group**, fold a level, sort a lane; the controls below switch the layout, the totals, several levels and the bars."})}),play:async e=>{if(g(e))return;const o=e.canvasElement;await s(()=>o.querySelector("[data-group-level]"),"the groups are drawn"),await r(e,{utility:!0}),await s(()=>o.querySelector('[data-header-id="row-utility"]'),"utility on: the utility column"),await r(e,{groupLayout:"rows"}),await s(()=>o.querySelector("[data-group-row]"),"groupLayout rows: header rows"),await r(e,{groupTotals:"atEnd"}),await s(()=>o.querySelector("[data-totals-row]"),"groupTotals atEnd: totals rows"),await r(e,{issues:!0}),await s(()=>o.querySelector("[data-issues-toggle]"),"issues on: the table of Issues with an edit");const t=e.parameters.sceneCode({...e.args,issues:!0,resolve:"animation"});y(t.includes("IssuesHoldTable")&&t.includes("onRowsMove: combineRowsMove("),"its Code is the step table with the preset of resolve"),await i(e,"animation"),await i(e,"both")}};var c,d,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  tags: ['kb:group-playground'],
  name: 'Playground',
  // Issues on: the table is the step of scene 7, and its Code is the file of that step.
  parameters: {
    ...sceneCodeSwitched('issues', sceneCodeWith(source, 'Playground'), issuesHoldCodeWith('Playground'), ['resolve'])
  },
  args: PLAYGROUND_ARGS,
  argTypes: layoutOnlyWithoutIssues(PLAYGROUND_ARGS, {
    issues: {
      control: 'boolean'
    },
    resolve: {
      ...presetControl(RESOLVES),
      if: {
        arg: 'issues'
      }
    },
    initialGrouping: {
      control: false
    },
    set: {
      control: 'radio',
      options: ['basic', 'ways', 'only']
    },
    groupLayout: {
      control: 'radio',
      options: ['lanes', 'rows']
    },
    groupTotals: {
      control: 'radio',
      options: TOTALS_NAMES
    },
    teamLayout: {
      control: 'radio',
      options: ['table', 'lanes', 'rows']
    },
    levelLayout: {
      control: 'radio',
      options: ['table', 'lanes', 'rows']
    },
    roleLayout: {
      control: 'radio',
      options: ['table', 'lanes', 'rows']
    },
    countryLayout: {
      control: 'radio',
      options: ['table', 'lanes', 'rows']
    },
    groupIndent: {
      control: 'radio',
      options: ['none', 'depth']
    },
    groupHeader: {
      control: 'radio',
      options: ['none', 'labels', 'full']
    },
    header: {
      control: 'radio',
      options: ['global', 'none']
    },
    enableGroupSelect: {
      control: 'boolean'
    },
    utility: {
      control: 'boolean'
    }
  }),
  render: ({
    issues,
    resolve,
    ...args
  }) => issues ? <IssuesHoldScene resolve={resolve} hint={<Md text="Issues with an edit: the Issues button of the screen, a **Rate** that fixes a blocker, and **resolve** says how the screen resolves it. The controls of the layout belong to the other table: turn **issues** off to get them back." />} /> : <Scene {...args} count={12} hint={<Md text="Everything together: group from a header menu or the toolbar’s **Group**, fold a level, sort a lane; the controls below switch the layout, the totals, several levels and the bars." />} />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    const c = ctx.canvasElement;
    await until(() => c.querySelector('[data-group-level]'), 'the groups are drawn');
    await setArgs(ctx, {
      utility: true
    });
    await until(() => c.querySelector('[data-header-id="row-utility"]'), 'utility on: the utility column');
    await setArgs(ctx, {
      groupLayout: 'rows'
    });
    await until(() => c.querySelector('[data-group-row]'), 'groupLayout rows: header rows');
    await setArgs(ctx, {
      groupTotals: 'atEnd'
    });
    await until(() => c.querySelector('[data-totals-row]'), 'groupTotals atEnd: totals rows');
    // Issues on: the step table of scene 7, its Code is the file of that step.
    await setArgs(ctx, {
      issues: true
    });
    await until(() => c.querySelector('[data-issues-toggle]'), 'issues on: the table of Issues with an edit');
    const code = (ctx.parameters.sceneCode as (args: unknown) => string)({
      ...ctx.args,
      issues: true,
      resolve: 'animation'
    });
    check(code.includes('IssuesHoldTable') && code.includes('onRowsMove: combineRowsMove('), 'its Code is the step table with the preset of resolve');
    await issuesResolveAct(ctx, 'animation');
    await issuesResolveAct(ctx, 'both');
  }
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const I=["Playground"],M=Object.freeze(Object.defineProperty({__proto__:null,Playground:a,__namedExportsOrder:I,default:A},Symbol.toStringTag,{value:"Module"}));export{M as P};
