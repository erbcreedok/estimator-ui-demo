import{v as f,c as m,w,h as c,l as r,u as s,j as p,E as b}from"./products-CTiDOXRn.js";import{C as k,F as h,s as z}from"./sources-BYI1br-Z.js";const C=["feature","layout","test","screen"],l=()=>C.map(t=>`// ───── ${h[t]} ${"─".repeat(Math.max(0,66-h[t].length))}

${z(t).trim()}`).join(`

`),x={title:"Tables/Table Core/Features/Custom feature",id:"tables-table-core-features-custom-feature",decorators:[f],parameters:{layout:"padded",sceneCode:l,docs:{source:b(l)}}},n=(t,e)=>{var o;return((o=t.querySelector(`[data-readout="${e}"]`))==null?void 0:o.textContent)??""},a=(t,e)=>!!t.querySelector(`[data-header-id="${e}"]`),i={tags:["kb:features-own-feature"],name:"Column chains, a custom feature",render:()=>p.jsx(k,{}),play:(async t=>{if(m(t))return;const e=t.canvasElement,o=w(e);await c(()=>a(e,"country"),"the table is drawn"),r(!a(e,"tier")&&!a(e,"city")&&!a(e,"phone"),"folded chains show their first member only"),r(n(e,"hidden")==="tier, city, phone","tier, city, phone folded away"),await s.click(o.getByRole("button",{name:"Open Location"})),await c(()=>a(e,"tier")&&a(e,"city"),"Location is open"),r(n(e,"hidden")==="phone","only phone is folded away now"),r(n(e,"order")==="name, country, tier, city, email, phone",`the order the table answers, ${n(e,"order")}`),await s.click(o.getByRole("button",{name:"Freeze country"})),await c(()=>n(e,"frozen")==="country, tier, city",`the chain is frozen whole, ${n(e,"frozen")}`),await s.click(o.getByRole("button",{name:"Fold Location"})),await c(()=>!a(e,"tier"),"Location is folded"),r(n(e,"frozen")==="country, tier, city","the folded chain is still frozen whole")})};var d,u,y;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  tags: ['kb:features-own-feature'],
  name: 'Column chains, a custom feature',
  render: () => <ChainsTable />,
  play: (async ctx => {
    if (checksOff(ctx)) return;
    const c = ctx.canvasElement;
    const screen = within(c);
    await until(() => has(c, 'country'), 'the table is drawn');
    check(!has(c, 'tier') && !has(c, 'city') && !has(c, 'phone'), 'folded chains show their first member only');
    check(readout(c, 'hidden') === 'tier, city, phone', 'tier, city, phone folded away');
    await userEvent.click(screen.getByRole('button', {
      name: 'Open Location'
    }));
    await until(() => has(c, 'tier') && has(c, 'city'), 'Location is open');
    check(readout(c, 'hidden') === 'phone', 'only phone is folded away now');
    check(readout(c, 'order') === 'name, country, tier, city, email, phone', \`the order the table answers, \${readout(c, 'order')}\`);
    // Freezing one member: the whole chain is frozen, the screen asked for one.
    await userEvent.click(screen.getByRole('button', {
      name: 'Freeze country'
    }));
    await until(() => readout(c, 'frozen') === 'country, tier, city', \`the chain is frozen whole, \${readout(c, 'frozen')}\`);
    await userEvent.click(screen.getByRole('button', {
      name: 'Fold Location'
    }));
    await until(() => !has(c, 'tier'), 'Location is folded');
    check(readout(c, 'frozen') === 'country, tier, city', 'the folded chain is still frozen whole');
  }) as Play
}`,...(y=(u=i.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};const L=["ColumnChains"];export{i as ColumnChains,L as __namedExportsOrder,x as default};
