(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[647],{38725:function(e,t,n){"use strict";n.d(t,{q:function(){return i}});let i=[{option:1,title:"Shed for soccer",description:"Let's build a shed on the soccer field next to the Leinola school to make the field safer. 70,000 euros have been budgeted for the operation.",link:"https://example.com"},{option:2,title:"Preventive substance abuse and mental health work",description:"Preventive substance abuse and mental health work will be organized and helpers on foot will be added to the streets of the city center. Preventive guided group activities are also organized in the afternoons and evenings.70,000 euros have been budgeted for the operation.",link:"https://example.com"},{option:3,title:"Slow down the intersection",description:"The intersection of Teivaalantie, Viiranpuistonkatu and Possilankatu will be improved by adding speed bumps in front of the crosswalks and a sign warning of school children.70,000 euros have been budgeted for the operation.",link:"https://example.com"},{option:4,title:"A safe meeting place for children",description:"Let's hire two employees in K\xe4mmenniemi, so that more youth work targeting 9-18 year olds can be done in the area. The facilities and equipment of the youth center, school and parish are utilized in the operation. 70,000 euros have been budgeted for the operation.",link:"https://example.com"}]},75647:function(e,t,n){"use strict";n.r(t);var i=n(85893),o=n(68817),s=n.n(o),a=n(11163),r=n(38725),l=n(60509),u=n(55587),d=n(36660),p=n(64146),c=n(15422),m=n(94377),h=n(67294);let y=()=>{let[e,t]=(0,h.useState)(!0),[n,o]=(0,h.useState)(!1),[y,f]=(0,h.useState)(),[b,w]=(0,h.useState)(),v=(0,a.useRouter)(),g=Number(v.query.option)||1;async function x(){return await (0,l.getZeroDevSigner)({projectId:d.zeroDevProjectId,owner:await (0,l.getSocialWalletOwner)(d.zeroDevProjectId,new u.Hw)})}function _(e){return new p.CH(c.w,m.Mt,e)}(0,h.useEffect)(()=>{j().then()},[]);let j=async()=>{t(!0);try{let e=await _(await x()),t=await e.vote(g);console.log("Transaction: ".concat(t.hash));let n=await t.wait();console.log("Receipt: ".concat(JSON.stringify(n))),1==n.status&&await N()}catch(e){e.error&&e.error.error&&"execution reverted: This address has already been voted"==e.error.error.message?alert("This address has already been voted. Vote update not supported in this version"):e.error.reason?(console.error(e),alert(e.error.reason)):(console.error(e),alert("Undefined Error. Check console for logs or try again")),o(!0)}finally{t(!1)}},N=async()=>{t(!0);try{let e=await _(await x()),t=Math.max(...r.q.map(e=>e.option)),n=await e.results(t),i=n.map(e=>e.toNumber());console.log(JSON.stringify(i)),f(i),w(i.reduce((e,t)=>e+t,0))}catch(e){console.error(e),alert("Undefined Error. Check console for logs or try again")}finally{t(!1)}};return(0,i.jsxs)(i.Fragment,{children:[!y&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("img",{className:s().img,src:"img/basket.png"}),(0,i.jsx)("div",{className:s().description,children:"After submission no one can see your choice even you. Vote is anonymous. Vote is counted. We do not store link between you and the vote of yours."})]}),e?(0,i.jsx)("div",{className:"loader",style:{marginBottom:"100px"}}):y?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:s().title,children:"Voting Results"}),(0,i.jsx)("div",{className:s().resultsList,children:r.q.map(e=>(0,i.jsxs)("div",{className:s().resultRow,children:[(0,i.jsx)("div",{className:s().number,children:y[e.option-1]}),(0,i.jsx)("div",{className:s().projectName,children:e.title})]},e.option))}),(0,i.jsxs)("div",{className:s().description,children:[b," people voted",(0,i.jsx)("br",{}),"Voting will end in 10 days"]})]}):(0,i.jsx)("div",{className:s().description,children:"Error. Try again please"})]})};t.default=y},68817:function(e){e.exports={title:"Submittion_title__lDj1o",img:"Submittion_img__lnd_S",description:"Submittion_description__sM8MM",button:"Submittion_button__IMVFh",resultsList:"Submittion_resultsList__UvviG",resultRow:"Submittion_resultRow__yGj04",number:"Submittion_number__VHDtR",projectName:"Submittion_projectName__rAlrx"}},94377:function(e){"use strict";e.exports=JSON.parse('{"Mt":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"maxOption","type":"uint256"}],"name":"results","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"option","type":"uint256"}],"name":"vote","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"votes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"votesCounter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]}')},15422:function(e){"use strict";e.exports=JSON.parse('{"w":"0x11BcE085CfE5D52079190488730df835D91383CB"}')}}]);