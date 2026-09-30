import{U as t,c as o}from"./RowSelection-BawG8FvK.js";const c=["start","end","before-name"],s={start:"start",end:"end","before-name":{before:"name"}},m={start:"'start' — lanes first (default)",end:"'end' — after the pinned columns","before-name":"{ before: 'name' }"},u={start:"lanes first, then the pinned columns",end:"lanes after the pinned columns","before-name":"lanes right before Name"},a={start:void 0,end:{getLanesPosition:()=>"end"},"before-name":{getLanesPosition:()=>({before:"name"})}},d=e=>a[e],r=e=>e==="start"?null:`getLanesPosition: () => ${JSON.stringify(s[e]).replace(/"/g,"'")}`,b=e=>{const n=r(e);return n?`// Where the lane block stands among the pinned columns.
      resolvers={{ ${n} }}`:""},f=e=>[o(),...e],i=e=>e.filter(n=>n!==t),h=e=>[t,...i(e)],S=e=>`
// Row numbers and checkboxes in one narrow column (the legacy utility
// column). The core never adds it: a screen with row selection or row
// numbers adds it and pins it first, as Resource Plan does.
//   numbers only:    createRowNumberColumn()
//   checkboxes only: createSelectionColumn()
//   a column each:   createRowNumberColumn(), createSelectionColumn()
const withUtility = [createUtilityColumn<Employee>(), ...${e}]
`;export{u as L,m as a,c as b,d as c,f as d,b as l,h as p,S as u,i as w};
