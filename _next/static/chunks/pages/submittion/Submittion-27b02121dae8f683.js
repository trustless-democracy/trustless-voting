(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[987],{19978:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/submittion/Submittion",function(){return n(75647)}])},75647:function(e,t,n){"use strict";n.r(t);var i=n(85893),s=n(68817),a=n.n(s),o=n(11163),r=n(60509),u=n(55587),p=n(36660),c=n(64146),l=n(15422),y=n(94377),d=n(67294);let m=()=>{let[e,t]=(0,d.useState)(!0),n=(0,o.useRouter)(),s=Number(n.query.option)||1;async function m(){return await (0,r.getZeroDevSigner)({projectId:p.zeroDevProjectId,owner:await (0,r.getSocialWalletOwner)(p.zeroDevProjectId,new u.Hw)})}(0,d.useEffect)(()=>{w().then()});let w=async()=>{t(!0);try{var e;let t=await (e=await m(),new c.CH(l.w,y.Mt,e)),i=await t.vote(s);console.log("Transaction: ".concat(i.hash));let a=await i.wait();console.log("Receipt: ".concat(JSON.stringify(a))),1==a.status&&n.push("results")}catch(e){e.error.reason?(console.error(e),alert(e.error.reason)):(console.error(e),alert("Undefined Error. Check console for logs or try again"))}finally{t(!1)}},f=async()=>{n.push("results")};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("img",{className:a().img,src:"img/basket.png"}),(0,i.jsx)("div",{className:a().description,children:"After submission no one can see your choice even you. Vote is anonymous. Vote is counted. We do not store link between you and the vote of yours."}),e?(0,i.jsx)("div",{className:"loader",style:{marginBottom:"100px"}}):(0,i.jsx)("button",{className:a().button,onClick:f,children:"See results"})]})};t.default=m},68817:function(e){e.exports={img:"Submittion_img__lnd_S",description:"Submittion_description__sM8MM",button:"Submittion_button__IMVFh"}},94377:function(e){"use strict";e.exports=JSON.parse('{"Mt":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"maxOption","type":"uint256"}],"name":"results","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"option","type":"uint256"}],"name":"vote","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"votes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"votesCounter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]}')},15422:function(e){"use strict";e.exports=JSON.parse('{"w":"0x11BcE085CfE5D52079190488730df835D91383CB"}')}},function(e){e.O(0,[123,774,888,179],function(){return e(e.s=19978)}),_N_E=e.O()}]);