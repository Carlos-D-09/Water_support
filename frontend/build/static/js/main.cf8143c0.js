/*! For license information please see main.cf8143c0.js.LICENSE.txt */
  cursor: copy;
  display: inline-block;
  line-height: 0;

  > .container {
    position: relative;

    > div,
    > svg {
      position: relative;
    }

    &.highlight:before {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 50%;
      box-shadow: 0 0 5px 2px #aaa;
      content: '';
    }
  }
`,y3=j.memo((function(e){return(0,N.jsx)(b3,{...e})}));function x3(e){var a,n,t="";if("string"==typeof e||"number"==typeof e)t+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(n=x3(e[a]))&&(t&&(t+=" "),t+=n);else for(a in e)e[a]&&(t&&(t+=" "),t+=a);return t}const S3=function(){for(var e,a,n=0,t="";n<arguments.length;)(e=arguments[n++])&&(a=x3(e))&&(t&&(t+=" "),t+=a);return t};function M3(e){let{address:a,name:n,onClick:t,isActive:i,block:r}=e;const o=S3(QL.button,QL.medium,i?QL.primary:QL.light,r&&QL.block);return(0,N.jsxs)("button",{type:"button",className:o,onClick:t,children:[(0,N.jsx)(y3,{value:a,className:QL.icon,theme:"polkadot",size:28}),n]})}const w3={list:"Accounts_list__946CG"};function A3(e){let{list:a,onChange:n}=e;const{login:t}=zz(),i=a.length>0;return i?(0,N.jsx)("ul",{className:w3.list,children:a.map((e=>(0,N.jsx)("li",{children:(0,N.jsx)(M3,{address:e.address,name:e.meta.name,isActive:A$(e),onClick:()=>(e=>{t(e),localStorage.setItem(w$.ACCOUNT,e.address),n()})(e),block:!0})},e.address)))}):(0,N.jsx)("p",{children:"No accounts found. Please open Polkadot extension, create a new account or import existing one and reload the page."})}function P3(e){let{accounts:a,close:n}=e;return(0,N.jsx)(LU,{heading:"Connect",close:n,children:a?(0,N.jsx)(A3,{list:a,onChange:n}):(0,N.jsxs)("p",{children:["Wallet extension was not found or disconnected. Please check how to install a supported wallet and create an account"," ",(0,N.jsx)("a",{href:"https://wiki.gear-tech.io/docs/idea/account/create-account",target:"_blank",rel:"noreferrer",className:"link-text",children:"here"}),"."]})})}const B3={wallet:"Wallet_wallet__sdVGH",balance:"Wallet_balance__qA9ai",currency:"Wallet_currency__gaBUQ"};function j3(e){let{balance:a,address:n,name:t,onClick:i}=e;return(0,N.jsxs)("div",{className:B3.wallet,children:[(0,N.jsxs)("p",{className:B3.balance,children:[a.value," ",(0,N.jsx)("span",{className:B3.currency,children:a.unit})]}),(0,N.jsx)(M3,{address:n,name:t,onClick:i})]})}const T3={style_button:"Account_style_button__navnW"};function C3(){const{account:e,accounts:a}=zz(),[n,t]=(0,j.useState)(!1),i=()=>{t(!0)};return(0,N.jsxs)(N.Fragment,{children:[e?(0,N.jsx)(j3,{balance:e.balance,address:e.address,name:e.meta.name,onClick:i}):(0,N.jsx)($L,{className:T3.style_button,icon:S$,text:"Sign in",onClick:i}),n&&(0,N.jsx)(P3,{accounts:a,close:()=>{t(!1)}})]})}function N3(e){let{isAccountVisible:a}=e;return(0,N.jsxs)("header",{className:WL.header,children:[(0,N.jsx)(g$,{}),a&&(0,N.jsx)(C3,{})]})}var z3;function L3(){return L3=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},L3.apply(this,arguments)}function K3(e,a){let{title:n,titleId:t,...i}=e;return j.createElement("svg",L3({width:18,height:15,viewBox:"0 0 18 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:a,"aria-labelledby":t},i),n?j.createElement("title",{id:t},n):null,z3||(z3=j.createElement("path",{d:"M18 1.77577C17.3306 2.07692 16.6174 2.27654 15.8738 2.37346C16.6388 1.905 17.2226 1.16885 17.4971 0.281539C16.7839 0.717693 15.9964 1.02577 15.1571 1.19769C14.4799 0.458078 13.5146 0 12.4616 0C10.4186 0 8.77388 1.70077 8.77388 3.78577C8.77388 4.08577 8.79862 4.37423 8.85938 4.64885C5.7915 4.49538 3.07687 2.98731 1.25325 0.69C0.934875 1.25654 0.748125 1.905 0.748125 2.60308C0.748125 3.91385 1.40625 5.07577 2.38725 5.74846C1.79438 5.73692 1.21275 5.56038 0.72 5.28231C0.72 5.29385 0.72 5.30885 0.72 5.32385C0.72 7.16308 1.99912 8.69077 3.6765 9.04269C3.37612 9.12692 3.04875 9.16731 2.709 9.16731C2.47275 9.16731 2.23425 9.15346 2.01037 9.10269C2.4885 10.6015 3.84525 11.7035 5.4585 11.7392C4.203 12.7465 2.60887 13.3535 0.883125 13.3535C0.5805 13.3535 0.29025 13.3396 0 13.3015C1.63462 14.3827 3.57188 15 5.661 15C12.4515 15 16.164 9.23077 16.164 4.23C16.164 4.06269 16.1584 3.90115 16.1505 3.74077C16.8829 3.20769 17.4982 2.54192 18 1.77577Z",fill:"#ECECEC"})))}const E3=j.forwardRef(K3);__webpack_require__.p;var R3;function H3(){return H3=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},H3.apply(this,arguments)}function D3(e,a){let{title:n,titleId:t,...i}=e;return j.createElement("svg",H3({width:16,height:18,viewBox:"0 0 16 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:a,"aria-labelledby":t},i),n?j.createElement("title",{id:t},n):null,R3||(R3=j.createElement("path",{d:"M4.8965 18C5.52012 18 5.69637 17.7512 5.69637 17.4332C5.69637 17.1152 5.69637 16.424 5.68278 15.4424C2.44267 16.1475 1.75127 13.8663 1.75127 13.8663C1.22253 12.5253 0.449798 12.1521 0.449798 12.1521C-0.60769 11.4332 0.531127 11.447 0.531127 11.447C1.69704 11.53 2.32066 12.6498 2.32066 12.6498C3.36455 14.447 5.04561 13.9217 5.70992 13.6175C5.76415 13.023 6.02173 12.4562 6.45555 12.0415C3.86616 11.7512 1.1412 10.742 1.1412 6.26266C1.12765 5.10139 1.56148 3.96775 2.34775 3.12445C2.21219 2.83411 1.81905 1.64517 2.44267 0.0276461C2.44267 0.0276461 3.41879 -0.290324 5.65569 1.23045C7.56723 0.705075 9.57365 0.705075 11.4852 1.23045C13.695 -0.276464 14.6847 0.0276461 14.6847 0.0276461C15.3083 1.63135 14.9151 2.8203 14.8067 3.12445C15.593 3.96775 16.0133 5.10139 15.9997 6.26266C15.9997 10.7558 13.2747 11.7373 10.6718 12.0276C11.0785 12.3733 11.4581 13.0922 11.4581 14.1843C11.4581 15.7604 11.4446 17.0046 11.4446 17.3779C11.4446 17.682 11.5801 17.9309 12.2444 17.9309L4.8965 18Z",fill:"#ECECEC"})))}const V3=j.forwardRef(D3);__webpack_require__.p;var _3;function O3(){return O3=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},O3.apply(this,arguments)}function I3(e,a){let{title:n,titleId:t,...i}=e;return j.createElement("svg",O3({width:20,height:14,viewBox:"0 0 20 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:a,"aria-labelledby":t},i),n?j.createElement("title",{id:t},n):null,_3||(_3=j.createElement("path",{d:"M4.40635 11.2088C8.75586 12.9407 12.4573 13.2781 16.6518 10.5823C16.6211 10.6294 15.7913 11.8836 13.6094 12.5264C14.0704 13.1691 14.7004 13.906 14.7004 13.906C16.0987 13.906 17.4662 13.4983 18.6493 12.7145C19.5712 12.0874 20.0936 11.0056 19.9861 9.87686C19.8017 7.94848 19.3561 6.06721 18.6647 4.26435C17.7888 1.91269 15.6838 0.282241 13.2407 0.047071C13.0256 0.031381 12.8719 0.0313795 12.7797 0.0313795L12.5339 0.282194C15.3458 1.09744 16.744 2.3673 16.7748 2.41437C12.457 0.188145 7.35573 0.15681 3.00729 2.32027C3.00729 2.32027 4.39018 0.92499 7.44787 0.188146L7.26351 0C6.9408 0 6.63351 0.0313793 6.31084 0.0783589C4.05213 0.470294 2.16218 2.05372 1.34782 4.23292C0.640978 6.11419 0.180045 8.08955 0.0110226 10.0963C-0.0811552 11.1624 0.410534 12.2128 1.27098 12.8242C2.408 13.5924 3.76018 14 5.12769 14C5.12769 14 5.68084 13.2632 6.23404 12.6047C4.15969 11.9776 3.31458 10.7234 3.2992 10.6764L3.6896 10.8798C3.92298 11.0014 4.16222 11.1116 4.40635 11.2088ZM6.81791 9.84548C5.81916 9.8141 5.03551 8.95187 5.06627 7.91714C5.09702 6.94513 5.86529 6.16126 6.81791 6.12988C7.81667 6.16126 8.60031 7.02349 8.5696 8.05826C8.52347 9.03028 7.77058 9.81415 6.81791 9.84548ZM13.087 9.84548C12.0882 9.8141 11.3046 8.95187 11.3353 7.91714C11.3661 6.94513 12.1344 6.16126 13.087 6.12988C14.0858 6.16126 14.8694 7.02349 14.8387 8.05826C14.808 9.03028 14.0396 9.81415 13.087 9.84548Z",fill:"#ECECEC"})))}const G3=j.forwardRef(I3);__webpack_require__.p;var F3;function U3(){return U3=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},U3.apply(this,arguments)}function J3(e,a){let{title:n,titleId:t,...i}=e;return j.createElement("svg",U3({width:24,height:14,viewBox:"0 0 24 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:a,"aria-labelledby":t},i),n?j.createElement("title",{id:t},n):null,F3||(F3=j.createElement("path",{d:"M13.5374 7.00014C13.5374 10.8661 10.5069 14 6.76885 14C3.03072 14 0 10.8653 0 7.00014C0 3.13488 3.03051 0 6.76885 0C10.5071 0 13.5374 3.13417 13.5374 7.00014ZM20.9628 7.00014C20.9628 10.639 19.4476 13.5902 17.5784 13.5902C15.7092 13.5902 14.194 10.639 14.194 7.00014C14.194 3.36118 15.709 0.410027 17.5782 0.410027C19.4474 0.410027 20.9626 3.36024 20.9626 7.00014H20.9628ZM24 7.00014C24 10.2598 23.4671 12.9038 22.8097 12.9038C22.1522 12.9038 21.6196 10.2604 21.6196 7.00014C21.6196 3.73981 22.1524 1.09647 22.8097 1.09647C23.4669 1.09647 24 3.73959 24 7.00014Z",fill:"#ECECEC"})))}const W3=j.forwardRef(J3),Z3=(__webpack_require__.p,{socials:"Socials_socials__TRUld"}),q3=[{href:"https://twitter.com/gear_techs",icon:E3},{href:"https://github.com/gear-tech",icon:V3},{href:"https://discord.com/invite/7BQznC9uD9",icon:G3},{href:"https://medium.com/@gear_techs",icon:W3}];function X3(){return(0,N.jsx)("ul",{className:Z3.socials,children:q3.map((e=>{let{href:a,icon:n}=e;return(0,N.jsx)("li",{className:Z3.socials,children:(0,N.jsx)("a",{href:a,target:"_blank",rel:"noreferrer",children:(0,N.jsx)(n,{})})},a)}))})}const Y3={copyright:"Copyright_copyright__GHaF+"};function Q3(){const e=(new Date).getFullYear();return(0,N.jsxs)("small",{className:Y3.copyright,children:[e,". All rights reserved."]})}const $3={footer:"Footer_footer__QH5-u"};function e8(){return(0,N.jsxs)("footer",{className:$3.footer,children:[(0,N.jsx)(X3,{}),(0,N.jsx)(Q3,{})]})}const a8={loader:"ApiLoader_loader__lI6WN",ellipsis:"ApiLoader_ellipsis__kg1Jd"};function n8(){return(0,N.jsx)("p",{className:a8.loader,children:"Initializing API"})}const t8=[function(e){let{basename:a,children:n,window:t}=e,i=j.useRef();var r;null==i.current&&(i.current=(void 0===(r={window:t,v5Compat:!0})&&(r={}),Fz((function(e,a){let{pathname:n,search:t,hash:i}=e.location;return Oz("",{pathname:n,search:t,hash:i},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}),(function(e,a){return"string"===typeof a?a:Iz(a)}),null,r)));let o=i.current,[s,l]=j.useState({action:o.action,location:o.location});return j.useLayoutEffect((()=>o.listen(l)),[o]),j.createElement(GL,{basename:a,children:n,location:s.location,navigationType:s.action,navigator:o})},function(e){let{children:a}=e;return(0,N.jsx)(Az,{template:qU,containerClassName:ZU.root,children:a})},function(e){let{children:a}=e;return(0,N.jsx)(dz,{providerAddress:M$,children:a})},function(e){let{children:a}=e;const{api:n,isApiReady:t}=(0,j.useContext)(uz),i=(0,j.useContext)(wz),[r,o]=(0,j.useState)([]),[s,l]=(0,j.useState)([]),[c,u]=(0,j.useState)(),{address:d}=c||{},[h,p]=(0,j.useState)(!1),[m,f]=(0,j.useState)(!1),v=e=>{let{message:a}=e;return i.error(a)},g=e=>{localStorage.setItem(zN,e.address),u(e)},b=e=>null==n?void 0:n.balance.findOut(e.address).then((a=>((e,a)=>{return Object.assign(Object.assign({},e),{balance:lz(a),decodedAddress:(n=e.address,zn((new eN).decodeAddress(n)))});var n})(e,a))).then(g).catch(v);(0,j.useEffect)((()=>{t&&ot("Gear App").then((e=>AN(this,void 0,void 0,(function*(){return{exts:e,accs:yield st()}})))).then((e=>{let{exts:a,accs:n}=e;o(a),l(n)})).catch(v).finally((()=>p(!0)))}),[t]),(0,j.useEffect)((()=>{if(!h)return;const e=null==s?void 0:s.find(cz);return lt((e=>l(e))),e?b(e).finally((()=>f(!0))):f(!0),()=>{}}),[h]);const k=e=>u((a=>a?Object.assign(Object.assign({},a),{balance:lz(e)}):a));(0,j.useEffect)((()=>{let e;return d&&(e=null==n?void 0:n.gearEvents.subscribeToBalanceChanges(d,k)),()=>{null==e||e.then((e=>e()))}}),[n,d]);const{Provider:y}=Pz,x={extensions:r,accounts:s,account:c,isAccountReady:m,login:b,logout:()=>{localStorage.removeItem(zN),u(void 0)}};return(0,N.jsx)(y,Object.assign({value:x},{children:a}))}];const i8=__webpack_require__.p+"static/media/water-waves.665ccd3f514de795ef04.png";const r8=function(e){return()=>t8.reduceRight(((e,a)=>(0,N.jsx)(a,{children:e})),(0,N.jsx)(e,{}))}((function(){const{isApiReady:e}=Kz(),{isAccountReady:a}=zz(),n=e&&a;return(0,N.jsxs)("div",{style:{overflow:"hidden"},children:[(0,N.jsx)(N3,{isAccountVisible:a}),(0,N.jsx)("img",{className:"waves",src:i8,alt:""}),(0,N.jsx)("img",{className:"waves",src:i8,alt:""}),(0,N.jsx)("img",{className:"waves",src:i8,alt:""}),(0,N.jsx)("img",{className:"waves",src:i8,alt:""}),(0,N.jsx)("img",{className:"waves",src:i8,alt:""}),(0,N.jsx)("img",{className:"waves",src:i8,alt:""}),(0,N.jsx)("img",{className:"waves",src:i8,alt:""}),(0,N.jsx)("img",{className:"waves",src:i8,alt:""}),(0,N.jsx)("img",{className:"waves",src:i8,alt:""}),(0,N.jsx)("img",{className:"waves",src:i8,alt:""}),(0,N.jsx)("main",{children:n?(0,N.jsx)(f$,{}):(0,N.jsx)(n8,{})}),(0,N.jsx)(e8,{})]})})),o8=document.getElementById("root");(0,C.s)(o8).render((0,N.jsx)(j.StrictMode,{children:(0,N.jsx)(r8,{})}))})()})();
//# sourceMappingURL=main.cf8143c0.js.map