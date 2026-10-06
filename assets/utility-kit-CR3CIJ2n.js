import{U as t,c as o}from"./RowSelection-DM7ASqJ8.js";const l=["start","end","before-name"],s={start:"start",end:"end","before-name":{before:"name"}},c={start:"'start' — lanes first (default)",end:"'end' — after the pinned columns","before-name":"{ before: 'name' }"},m={start:"lanes first, then the pinned columns",end:"lanes after the pinned columns","before-name":"lanes right before Name"},u=e=>{if(e==="end")return{getLanesPosition:()=>"end"};if(e==="before-name")return{getLanesPosition:()=>({before:"name"})}},a=e=>e==="start"?null:`getLanesPosition: () => ${JSON.stringify(s[e]).replace(/"/g,"'")}`,d=e=>{const n=a(e);return n?`// Where the lane block stands among the pinned columns.
      resolvers={{ ${n} }}`:""},f=e=>[o(),...e],r=e=>e.filter(n=>n!==t),b=e=>[t,...r(e)],h=e=>`
// Row numbers and checkboxes in one narrow column (the legacy utility
// column). The core never adds it: a screen with row selection or row
// numbers adds it and pins it first, as Resource Plan does.
//   numbers only:    createRowNumberColumn()
//   checkboxes only: createSelectionColumn()
//   a column each:   createRowNumberColumn(), createSelectionColumn()
const withUtility = [createUtilityColumn<Employee>(), ...${e}]
`;export{m as L,c as a,l as b,u as c,f as d,d as l,b as p,h as u,r as w};
