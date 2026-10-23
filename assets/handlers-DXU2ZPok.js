import{aR as t,aS as l,aT as o,aU as h,aV as c,aW as i,p as d,aX as u,aY as n}from"./products-CTiDOXRn.js";const f=(e,a)=>e.moves.filter(r=>r.kind==="group").forEach(r=>{var s;return(s=a.getGroupElement(r.id))==null?void 0:s.animate([{transform:"translateY(0)"},{transform:"translateY(-12px)"},{transform:"none"}],{duration:350,easing:"ease-out"})}),v=e=>e.animate([{transform:"scale(1.03)"},{transform:"none"}],{duration:500,easing:"ease-out"}),g={"without a handler":{value:void 0,code:"undefined"},readout:{value:"readout",code:"(event) => setEvent(event)"},flipRows:{value:l(),code:"flipRows()"},keepAnchorInView:{value:n(),code:"keepAnchorInView()"},scrollToAnchor:{value:o(),code:"scrollToAnchor()"},"scrollToAnchor, instant":{value:o({behavior:"instant"}),code:"scrollToAnchor({ behavior: 'instant' })"},"scrollToAnchor, 300 ms":{value:o({duration:300}),code:"scrollToAnchor({ duration: 300 })"},"scrollToAnchor, 600 ms":{value:o({duration:600}),code:"scrollToAnchor({ duration: 600 })"},"scrollToAnchor, 1000 ms":{value:o({duration:1e3}),code:"scrollToAnchor({ duration: 1000 })"},"scrollToAnchor, flashOpacity":{value:o({highlight:i()}),code:"scrollToAnchor({ highlight: flashOpacity() })"},"scrollToAnchor, flashBorder":{value:o({highlight:c()}),code:"scrollToAnchor({ highlight: flashBorder() })"},"scrollToAnchor, flashCell":{value:o({highlight:h()}),code:"scrollToAnchor({ highlight: flashCell() }) // only the cell that was edited"},"scrollToAnchor, no flash":{value:o({highlight:!1}),code:"scrollToAnchor({ highlight: false })"},"scrollToAnchor, own flash":{value:o({highlight:v}),code:`scrollToAnchor({
  // a function of the row: any animation, here the row swells and settles
  highlight: (row) =>
    row.animate(
      [{ transform: 'scale(1.03)' }, { transform: 'none' }],
      { duration: 500, easing: 'ease-out' }
    ),
})`},"flipRows + keepAnchorInView":{value:t(l(),n()),code:"combineRowsMove(flipRows(), keepAnchorInView())"},"only groups jump":{value:f,code:`(event, view) =>
  event.moves
    .filter((move) => move.kind === 'group')
    .forEach((move) =>
      view.getGroupElement(move.id)?.animate(
        [{ transform: 'translateY(0)' }, { transform: 'translateY(-12px)' }, { transform: 'none' }],
        { duration: 350, easing: 'ease-out' }
      )
    )`},"keepAnchorInView + flash":{value:t(l(),n(),o({highlight:u({duration:4e3})})),code:`combineRowsMove(
  flipRows(),
  keepAnchorInView(),
  scrollToAnchor({ highlight: flashBackground({ duration: 4000 }) }) // the row stays; a flash says which
)`}},p=(e,a)=>Object.fromEntries(["without a handler",...a].map(r=>[r,e[r]])),w=e=>{const a=d(g,e);if(a==="readout")throw new Error('"readout" is for the scenes that show the event');return a};export{g as H,w as h,p};
