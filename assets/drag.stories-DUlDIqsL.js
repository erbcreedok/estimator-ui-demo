import{O as K,F as me,_ as ge,a as ue}from"./order-table-Be873fAN.js";import{r as q,j as n,S as fe,ah as ye,ai as g,l as r,y as O,ap as k,u as m,at as x,X as u,au as j,ar as de,ac as E,h as Re,c as _,b as A,M as L,s as I,f as be,d as ve,e as xe}from"./products-CTiDOXRn.js";import{a as ke}from"./people-DY4ww1HD.js";import{f as D,o as v,p as X,d as G,l as B,g as we}from"./checks-Df_c61wn.js";import{h as W,p as le,H as ce}from"./handlers-DXU2ZPok.js";const Te=48,$=({hint:t,table:e,count:a=300,startRow:o=100})=>{const[w,i]=q.useState(()=>ke(a)),s=q.useRef(null);return q.useLayoutEffect(()=>{var d;const l=(d=s.current)==null?void 0:d.querySelector("[role=table]");l&&(l.scrollTop=o*Te)},[o]),n.jsx(fe,{hint:t,maxHeight:480,children:n.jsx("div",{ref:s,style:{display:"contents"},children:e({rows:w,onRowsReorder:l=>i(d=>ye(d,l,h=>h.id))})})})},f=t=>new Set(t.map(({element:e})=>e.getAttribute("data-row-id"))),z={onRowsMove:"without a handler"},J=async(t,e,a)=>{const o=k(t),w=de(t,"now"),i=await E(async()=>{const s=we(t,o[a].id,"after");await G(t,o[e].id,s),await B(s),await j()});return w.stop(),{rows:o,animated:i,gaps:w.worst(),ids:v(t)}},Me=async t=>{const e=t.canvasElement;await g(e);const a=await J(e,1,5),[,o,,,,w]=a.rows.map(s=>s.id);r(a.ids.indexOf(o)===a.ids.indexOf(w)+1,`the row stands after its target: ${a.ids.slice(0,9)}`),r(f(a.animated).size>=3,`the rows between slide: ${f(a.animated).size}`),r(a.gaps<=2,`no strip with no rows: ${a.gaps}px`),await O(t,z),await g(e);const i=await J(e,1,5);r(i.animated.length===0,"without a handler nothing slides"),r(i.ids.indexOf(i.rows[1].id)===i.ids.indexOf(i.rows[5].id)+1,"and the row is moved all the same")},Se=async t=>{const e=t.canvasElement;await g(e);const a=async()=>{var h,c,R;const s=k(e);await m.click((h=D(e,s[1].id))==null?void 0:h.querySelector("[role=checkbox]")),await m.click((c=D(e,s[2].id))==null?void 0:c.querySelector("[role=checkbox]")),await m.click((R=D(e,s[3].id))==null?void 0:R.querySelector("[role=checkbox]"));const l=we(e,s[5].id,"after"),d=await E(async()=>{var b,p;await G(e,s[2].id,l),r((p=(b=document.querySelector("[data-row-drag-ghost]"))==null?void 0:b.textContent)==null?void 0:p.includes("+2"),"the ghost says two more go with it"),await B(l),await j()});return{rows:s,animated:d,ids:v(e)}},o=await a(),w=o.ids.indexOf(o.rows[5].id);r([1,2,3].every((s,l)=>o.ids[w+1+l]===o.rows[s].id),`the three went together, after their target: ${o.ids.slice(0,10)}`),r(f(o.animated).size>=5,`they and the rows they passed slide: ${f(o.animated).size}`),await O(t,z),await g(e);const i=await a();r(i.animated.length===0,"without a handler nothing slides")},Fe=async t=>{const e=t.canvasElement;await g(e);const a=async()=>{const p=k(e),[,he]=p,N=u(e).scrollTop;X(e,he.id);let U=0;const pe=await E(async()=>{await m.keyboard(" "),await x(100),U=Math.abs(u(e).scrollTop-N),await m.keyboard("{ArrowDown}{ArrowDown}{ArrowDown}"),await m.keyboard("{Enter}"),await x(300),await j()});return{ids:v(e),rows:p,animated:pe,moved:U,scrolled:Math.abs(u(e).scrollTop-N)}},o=await a(),[,w,i,s,l]=o.rows.map(p=>p.id),d=o.ids.indexOf(w);r(o.ids.slice(d-3,d+1).join()===[i,s,l,w].join(),`three arrows: the row is three places down: ${o.ids.slice(d-4,d+2)}`),r(o.moved<=48,`Space does not move the table: ${o.moved}px`),r(o.scrolled<=48,`nor does the move: ${o.scrolled}px`),r(f(o.animated).size>=3,`the rows slide: ${f(o.animated).size}`),await O(t,z),await g(e);const h=await a();r(h.animated.length===0,"without a handler nothing slides"),await g(e);const[,c]=k(e),R=v(e)[v(e).indexOf(c.id)+1];X(e,c.id),await m.keyboard(" "),await x(100),u(e).scrollTop+=4*u(e).clientHeight,await x(150),r(!k(e).some(p=>p.id===c.id),"the wheel took the table away from the line"),await m.keyboard("{ArrowDown}"),await x(300),await m.keyboard("{Enter}"),await x(300),await j();const b=v(e);r(b[b.indexOf(c.id)-1]===R,`the arrow called the line back and stepped: the row is right after ${R}, not ${b[b.indexOf(c.id)-1]}`)},je=async t=>{const e=t.canvasElement;await g(e);const a=async()=>{const[,i]=k(e),s=u(e).getBoundingClientRect(),l=u(e).scrollTop,d={x:s.left+240,y:s.bottom-12},h=de(e,"now"),c=await E(async()=>{await G(e,i.id,d),await Re(()=>u(e).scrollTop-l>1800,"the edge scrolls the table"),await B(d),await j()});h.stop();const R=v(e);return{id:i.id,animated:c,ids:R,gaps:h.worst()}},o=await a();r(f(o.animated).size>=3,`the rows slide: ${f(o.animated).size}`),r(o.gaps<=2,`no strip with no rows: ${o.gaps}px`),r(D(t.canvasElement,o.id)!==null||o.ids.length>0,"the table is drawn"),await O(t,z),await g(e);const w=await a();r(w.animated.length===0,"without a handler nothing slides")},[C]=Object.values([ge]),[De]=Object.values([ue]),Oe={title:"Tables/Table Core/Features/Rows on the move/Drag and drop",id:"tables-table-core-features-rows-move-drag",...be(C)},y=["flipRows"],H=t=>({onRowsMove:{...ve(le(ce,t))}}),P=t=>xe({onRowsMove:le(ce,t)}),T={tags:["kb:rows-move-drag-flat"],name:"7 · A row dragged down a list of 300",parameters:{...I(C,"FlatList",P(y)),summary:"In a flat list the rows between the place a row leaves and the place it lands close up and make room: `flipRows()` slides them. Without a handler they just change."},args:{onRowsMove:"flipRows"},argTypes:H(y),render:t=>n.jsx(A,{args:t,children:n.jsx($,{table:({rows:e,onRowsReorder:a})=>n.jsx(K,{rows:e,onRowsReorder:a,onRowsMove:W(t.onRowsMove)}),hint:n.jsx(L,{text:"300 people, the table opens in the middle. Drag a row by its handle down a few rows: those it passes slide up into the gap it left, and make room where it lands. With *without a handler* the same happens, but at once."})})}),play:async t=>{_(t)||await Me(t)}},M={tags:["kb:rows-move-drag-selected"],name:"8 · Several selected rows",parameters:{...I(De,"SelectedRows",P(y)),summary:"The selected rows go together with the one taken: they and the rows they pass slide."},args:{onRowsMove:"flipRows"},argTypes:H(y),render:t=>n.jsx(A,{args:t,children:n.jsx($,{table:({rows:e,onRowsReorder:a})=>n.jsx(me,{rows:e,onRowsReorder:a,selection:!0,onRowsMove:W(t.onRowsMove)}),hint:n.jsx(L,{text:"Tick three rows, take one of them by its handle and drop the three after a row below: they go together, in the order they stood, and the rows between slide."})})}),play:async t=>{_(t)||await Se(t)}},S={tags:["kb:rows-move-drag-keys"],name:"9 · From the keys",parameters:{...I(C,"FromTheKeys",P(y)),summary:"Space takes the row, the line stands where the row does, each arrow moves it one place, Enter drops it. `flipRows()` slides the rows the row passed."},args:{onRowsMove:"flipRows"},argTypes:H(y),render:t=>n.jsx(A,{args:t,children:n.jsx($,{table:({rows:e,onRowsReorder:a})=>n.jsx(K,{rows:e,onRowsReorder:a,onRowsMove:W(t.onRowsMove)}),hint:n.jsx(L,{text:"Focus a handle (Tab), press **Space**: the line stands where the row does. Each **↓** moves it one place down; **Enter** drops. The table does not jump; with `flipRows()` the rows the row passed slide up, without a handler they just change."})})}),play:async t=>{_(t)||await Fe(t)}},F={tags:["kb:rows-move-drag-far"],name:"10 · From the top far down",parameters:{...I(C,"FarDown",P(y)),summary:"With the pointer at the bottom edge the table scrolls; the row is dropped far from where it was taken, and the rows in between slide."},args:{onRowsMove:"flipRows"},argTypes:H(y),render:t=>n.jsx(A,{args:t,children:n.jsx($,{table:({rows:e,onRowsReorder:a})=>n.jsx(K,{rows:e,onRowsReorder:a,onRowsMove:W(t.onRowsMove)}),hint:n.jsx(L,{text:"Take a row and hold the pointer at the bottom edge of the table: it scrolls by itself. Let go dozens of rows down: the row lands there and every row it passed has moved up by one."})})}),play:async t=>{_(t)||await je(t)}};var Q,V,Y;T.parameters={...T.parameters,docs:{...(Q=T.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  tags: ['kb:rows-move-drag-flat'],
  name: '7 · A row dragged down a list of 300',
  parameters: {
    ...sceneCodeWith(orderSource, 'FlatList', codes(FLIP)),
    summary: 'In a flat list the rows between the place a row leaves and the place it lands close up and make room: \`flipRows()\` slides them. Without a handler they just change.'
  },
  args: {
    onRowsMove: 'flipRows'
  },
  argTypes: control(FLIP),
  render: args => <Remount args={args}>
            <DragScene table={({
      rows,
      onRowsReorder
    }) => <OrderTable rows={rows} onRowsReorder={onRowsReorder} onRowsMove={handlerFor(args.onRowsMove)} />} hint={<Md text="300 people, the table opens in the middle. Drag a row by its handle down a few rows: those it passes slide up into the gap it left, and make room where it lands. With *without a handler* the same happens, but at once." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await flatDragAct(ctx);
  }
}`,...(Y=(V=T.parameters)==null?void 0:V.docs)==null?void 0:Y.source}}};var Z,ee,te;M.parameters={...M.parameters,docs:{...(Z=M.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  tags: ['kb:rows-move-drag-selected'],
  name: '8 · Several selected rows',
  parameters: {
    ...sceneCodeWith(flatSource, 'SelectedRows', codes(FLIP)),
    summary: 'The selected rows go together with the one taken: they and the rows they pass slide.'
  },
  args: {
    onRowsMove: 'flipRows'
  },
  argTypes: control(FLIP),
  render: args => <Remount args={args}>
            <DragScene table={({
      rows,
      onRowsReorder
    }) => <FlatTable rows={rows} onRowsReorder={onRowsReorder} selection onRowsMove={handlerFor(args.onRowsMove)} />} hint={<Md text="Tick three rows, take one of them by its handle and drop the three after a row below: they go together, in the order they stood, and the rows between slide." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await selectedDragAct(ctx);
  }
}`,...(te=(ee=M.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var oe,ae,se;S.parameters={...S.parameters,docs:{...(oe=S.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  tags: ['kb:rows-move-drag-keys'],
  name: '9 · From the keys',
  parameters: {
    ...sceneCodeWith(orderSource, 'FromTheKeys', codes(FLIP)),
    summary: 'Space takes the row, the line stands where the row does, each arrow moves it one place, Enter drops it. \`flipRows()\` slides the rows the row passed.'
  },
  args: {
    onRowsMove: 'flipRows'
  },
  argTypes: control(FLIP),
  render: args => <Remount args={args}>
            <DragScene table={({
      rows,
      onRowsReorder
    }) => <OrderTable rows={rows} onRowsReorder={onRowsReorder} onRowsMove={handlerFor(args.onRowsMove)} />} hint={<Md text="Focus a handle (Tab), press **Space**: the line stands where the row does. Each **↓** moves it one place down; **Enter** drops. The table does not jump; with \`flipRows()\` the rows the row passed slide up, without a handler they just change." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await keysDragAct(ctx);
  }
}`,...(se=(ae=S.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var re,ne,ie;F.parameters={...F.parameters,docs:{...(re=F.parameters)==null?void 0:re.docs,source:{originalSource:`{
  tags: ['kb:rows-move-drag-far'],
  name: '10 · From the top far down',
  parameters: {
    ...sceneCodeWith(orderSource, 'FarDown', codes(FLIP)),
    summary: 'With the pointer at the bottom edge the table scrolls; the row is dropped far from where it was taken, and the rows in between slide.'
  },
  args: {
    onRowsMove: 'flipRows'
  },
  argTypes: control(FLIP),
  render: args => <Remount args={args}>
            <DragScene table={({
      rows,
      onRowsReorder
    }) => <OrderTable rows={rows} onRowsReorder={onRowsReorder} onRowsMove={handlerFor(args.onRowsMove)} />} hint={<Md text="Take a row and hold the pointer at the bottom edge of the table: it scrolls by itself. Let go dozens of rows down: the row lands there and every row it passed has moved up by one." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await farDragAct(ctx);
  }
}`,...(ie=(ne=F.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};const Ee=["FlatList","SelectedRows","FromTheKeys","FarDown"],$e=Object.freeze(Object.defineProperty({__proto__:null,FarDown:F,FlatList:T,FromTheKeys:S,SelectedRows:M,__namedExportsOrder:Ee,default:Oe},Symbol.toStringTag,{value:"Module"}));export{$e as D};
