(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[382],{40187:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/results/Results",function(){return n(95782)}])},38725:function(e,t,n){"use strict";n.d(t,{q:function(){return i}});let i=[{option:1,title:"Shed for soccer",description:"Let's build a shed on the soccer field next to the Leinola school to make the field safer. 70,000 euros have been budgeted for the operation.",link:"https://example.com"},{option:2,title:"Preventive substance abuse and mental health work",description:"Preventive substance abuse and mental health work will be organized and helpers on foot will be added to the streets of the city center. Preventive guided group activities are also organized in the afternoons and evenings.70,000 euros have been budgeted for the operation.",link:"https://example.com"},{option:3,title:"Slow down the intersection",description:"The intersection of Teivaalantie, Viiranpuistonkatu and Possilankatu will be improved by adding speed bumps in front of the crosswalks and a sign warning of school children.70,000 euros have been budgeted for the operation.",link:"https://example.com"},{option:4,title:"A safe meeting place for children",description:"Let's hire two employees in K\xe4mmenniemi, so that more youth work targeting 9-18 year olds can be done in the area. The facilities and equipment of the youth center, school and parish are utilized in the operation. 70,000 euros have been budgeted for the operation.",link:"https://example.com"}]},95782:function(e,t,n){"use strict";n.r(t);var i=n(85893),s=n(41367),a=n.n(s),o=n(57421),r=n(11163),u=n(38725),l=n(64146),p=n(15422),d=n(94377),c=n(67294);let h=()=>{let e=(0,o.yL)(),[t,n]=(0,c.useState)([]),[s,h]=(0,c.useState)(!0),[m,y]=(0,c.useState)();(0,r.useRouter)(),(0,c.useEffect)(()=>{f().then()},[]);let f=async()=>{h(!0);try{let t=await new l.CH(p.w,d.Mt,e),i=Math.max(...u.q.map(e=>e.option)),s=await t.results(i),a=s.map(e=>e.toNumber());console.log(JSON.stringify(a)),n(a),y(a.reduce((e,t)=>e+t,0))}catch(e){console.error(e),alert("Undefined Error. Check console for logs or try again")}finally{h(!1)}};return(0,i.jsx)(i.Fragment,{children:s?(0,i.jsx)("div",{className:"loader",style:{marginTop:"100px"}}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:a().title,children:"Voting Results"}),(0,i.jsx)("div",{className:a().resultsList,children:u.q.map(e=>(0,i.jsxs)("div",{className:a().resultRow,children:[(0,i.jsx)("div",{className:a().number,children:t[e.option-1]}),(0,i.jsx)("div",{className:a().projectName,children:e.title})]},e.option))}),(0,i.jsxs)("div",{className:"description",children:[m," people voted",(0,i.jsx)("br",{}),"Voting will end in 10 days"]})]})})};t.default=h},41367:function(e){e.exports={title:"Results_title__7F5u_",resultsList:"Results_resultsList__GwZB7",resultRow:"Results_resultRow__WSCxJ",number:"Results_number__1hDJ3",projectName:"Results_projectName__Ogurv"}},11163:function(e,t,n){e.exports=n(96885)},94377:function(e){"use strict";e.exports=JSON.parse('{"Mt":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"maxOption","type":"uint256"}],"name":"results","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"option","type":"uint256"}],"name":"vote","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"votes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"votesCounter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]}')},15422:function(e){"use strict";e.exports=JSON.parse('{"w":"0x11BcE085CfE5D52079190488730df835D91383CB"}')}},function(e){e.O(0,[774,888,179],function(){return e(e.s=40187)}),_N_E=e.O()}]);