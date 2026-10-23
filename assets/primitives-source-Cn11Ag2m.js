const c=e=>({raw:e}),$=(e,t)=>t===void 0||t===!1?null:t===!0?e:typeof t=="string"?`${e}="${t}"`:typeof t=="number"?`${e}={${t}}`:`${e}={${t.raw}}`,l=(e,t)=>e.split(`
`).map(r=>r&&t+r).join(`
`),d=(e,t,r)=>{const n=Object.entries(t).map(([i,f])=>$(i,f)).filter(i=>i!==null),o=n.length>2?`<${e}
${l(n.join(`
`),"  ")}
>`:`<${e}${n.length?` ${n.join(" ")}`:""}>`;return r===void 0?o.replace(/>$/," />").replace(/\n> \/>$/,`
/>`):`${o}
${l(r,"  ")}
</${e}>`},u=e=>{const t=e.trim();if(!(t===""||t==="auto"))return/^\d+(\.\d+)?$/.test(t)?Number(t):t},s=e=>`[${e.map(t=>`'${t}'`).join(", ")}]`,a=(e,t,r)=>`const columns = ${s(e)}
const left = ${s(e.filter(n=>t.includes(n)))} // frozen at the left
const right = ${s(e.filter(n=>r.includes(n)&&!t.includes(n)))} // frozen at the right

const frozenOf = (label: string): Frozen | null => {
  if (left.includes(label))
    return { side: 'left', offset: left.indexOf(label) * COLUMN_WIDTH, edge: label === left.at(-1) }
  if (right.includes(label))
    return { side: 'right', offset: (right.length - 1 - right.indexOf(label)) * COLUMN_WIDTH, edge: label === right[0] }

  return null
}`;export{a as f,d as j,c as r,u as w};
