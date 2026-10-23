const e={none:{value:[],code:"[]"},"by Team":{value:[{id:"team",desc:!1}],code:"[{ id: 'team', desc: false }]"},"Team ↓ then Name ↑":{value:[{id:"team",desc:!0},{id:"name",desc:!1}],code:`[
	{ id: 'team', desc: true },
	{ id: 'name', desc: false },
]`}},s={"by Status (Blocked first)":{value:[{id:"status",desc:!1}],code:"[{ id: 'status', desc: false }]"},"by Status, then Rank":{value:[{id:"status",desc:!1},{id:"rank",desc:!1}],code:`[
	{ id: 'status', desc: false },
	{ id: 'rank', desc: false },
]`}},a={...e,...s};export{s as H,a as P,e as S};
