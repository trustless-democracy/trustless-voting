(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[987],{19978:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/submittion/Submittion",function(){return n(75647)}])},75647:function(e,t,n){"use strict";n.r(t);var s=n(85893),r=n(68817),a=n.n(r),i=n(11163),o=n(60509),u=n(55587),p=n(36660),l=n(64146),c=n(15422),d=n(94377),y=n(67294);let m=()=>{let[e,t]=(0,y.useState)(!0),n=(0,i.useRouter)(),[r,m]=(0,y.useState)(!1),w=Number(n.query.option)||1;async function f(){return await (0,o.getZeroDevSigner)({projectId:p.zeroDevProjectId,owner:await (0,o.getSocialWalletOwner)(p.zeroDevProjectId,new u.Hw)})}(0,y.useEffect)(()=>{b().then()},[]);let b=async()=>{t(!0);try{var e;let t=await (e=await f(),new l.CH(c.w,d.Mt,e)),n=await t.vote(w);console.log("Transaction: ".concat(n.hash));let s=await n.wait();console.log("Receipt: ".concat(JSON.stringify(s))),s.status}catch(e){e.error&&e.error.error&&"execution reverted: This address has already been voted"==e.error.error.message?alert("This address has already been voted. Vote update not supported in this version"):e.error.reason?(console.error(e),alert(e.error.reason)):(console.error(e),alert("Undefined Error. Check console for logs or try again")),m(!0)}finally{t(!1)}},h=async()=>{n.push("/results")};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("img",{className:a().img,src:"img/basket.png"}),(0,s.jsx)("div",{className:"description",children:"After submission no one can see your choice even you. Vote is anonymous. Vote is counted. We do not store link between you and the vote of yours."}),e?(0,s.jsx)("div",{className:"loader",style:{marginBottom:"100px"}}):r?(0,s.jsx)("div",{className:"description",children:"Error. Try again please"}):(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("button",{className:a().button,onClick:h,children:"See results"})})]})};t.default=m},68817:function(e){e.exports={title:"Submittion_title__lDj1o",img:"Submittion_img__lnd_S",button:"Submittion_button__IMVFh"}},94377:function(e){"use strict";e.exports=JSON.parse('{"Mt":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"maxOption","type":"uint256"}],"name":"results","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"option","type":"uint256"}],"name":"vote","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"votes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"votesCounter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]}')},15422:function(e){"use strict";e.exports=JSON.parse('{"w":"0x78475003F53ad2218e6723b24fAb289FA7798eE7"}')}},function(e){e.O(0,[123,774,888,179],function(){return e(e.s=19978)}),_N_E=e.O()}]);