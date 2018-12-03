(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"e",function(){return i}),n.d(t,"d",function(){return o}),n.d(t,"c",function(){return r}),n.d(t,"b",function(){return c});const a=e=>e.charAt(0).toUpperCase()+e.slice(1),i=(e,t,n,a)=>{switch(e){case"medium":return t;case"small":return n;case"large":return a;default:return t}},o=(e,t)=>e&&e[t];let l={};const r=e=>{l=e},c=(e,t)=>{if(!e||!l[e])return`MISSING: ${e}`;let n=l[e];if(!t)return n;for(let e in t)n=n.replace(new RegExp("{{\\s*"+e+"\\s*}}","g"),t[e].toString());return n}},,function(e,t,n){"use strict";n.d(t,"b",function(){return o}),n.d(t,"a",function(){return c});n(0);var a=n(1);n(107);const{default:i,css:o,injectGlobal:l,keyframes:r,ThemeProvider:c}=a;t.c=i},,,function(e,t,n){"use strict";n.d(t,"a",function(){return i});var a=n(1);function i(e){return a.default.svg.attrs({children:[e.props.children],viewBox:"0 0 32 32","aria-hidden":e=>void 0===e.title?"true":void 0,focusable:"false",role:e=>void 0!==e.title?"img":void 0})`
    width: 100%;
    height: 100%;
    fill: currentColor;
  `}},function(e,t,n){"use strict";n.d(t,"a",function(){return i});const a={done:"Done",remove:"Remove",copied:"Copied!",wordCount:"Word Count:",ok:"Ok",cancel:"Cancel",thisSyncChain:"from this sync chain",braveSync:"Brave Sync",syncChainDevices:"Devices in your sync chain",deviceName:"device name",addedOn:"added on",addDevice:"add device",viewSyncCode:"view sync code",dataToSync:"Data to sync from",bookmarks:"Bookmarks",savedSiteSettings:"Saved Site Settings",browsingHistory:"Browsing History",leaveSyncChain:"Leave Sync Chain",syncTitle:"Brave Sync allows you to sync bookmarks data privately between your Brave Browsers on your various devices.",syncDescription:"When you start a new sync chain, a new sync code is created. You will use this same code across your devices to link them together.",startSyncChain:"Start a new sync chain",enterSyncChainCode:"Enter a sync chain code",confirmSyncCode:"Confirm Sync Code",enterSyncCode:"Enter a sync code",enterSyncCodeDescription:"Go to Brave Settings > Sync > Display sync code",confirmCode:"Confirm Sync Code",invalidCode:"Invalid sync code.",tryAgain:"Please try again.",thisDeviceRemovalDescription:"Local device data will remain intact on all devices. Other devices in this sync chain will remain synced.",joinSyncChain:"To join a sync chain again, choose “Enter a sync chain code”.",otherDeviceRemovalDescription:"Note: Removing this device from this sync chain does not clear previously synced data from the device.",warning:"Warning!",removing:"Removing",deleteSyncChain:"will delete this sync chain.",deleteSyncDescription:"Your local data on this device will be retained but all data in Brave’s Sync cache will be deleted.",startSyncChainHowTo:"You can start a new sync chain or sync with a new device by entering its sync chain code.",areYouSure:"Are you sure?",scanThisCode:"Now, using Brave on your mobile device, scan this code.",scanThisCodeHowTo:"Go to: Brave Settings > Sync > Scan Sync Code",enterCodeWordsInstead:"Enter code words instead...",previous:"< Previous",lookingForDevice:"Looking for device",enterThisCode:"Now, using Brave on your computer, enter this code:",mobileEnterThisCode:"Now, using Brave on your mobile device, enter this code:",syncChainCodeHowTo:"Go to: Brave Settings > Sync > Enter a Sync Chain Code",useCameraInstead:"Use my camera instead...",letsSync:"Let’s sync a new device with",chooseDeviceType:"Choose a device type:",phoneTablet:"Phone/Tablet",computer:"Computer",qrCode:"QR Code",wordCode:"Word Code",privateKey:"This is a private key. If you share it, your private data may be compromised."};const i=e=>a[e]},function(e,t,n){"use strict";n.d(t,"a",function(){return c}),n.d(t,"e",function(){return s}),n.d(t,"b",function(){return d}),n.d(t,"c",function(){return p}),n.d(t,"m",function(){return u}),n.d(t,"g",function(){return m}),n.d(t,"l",function(){return h}),n.d(t,"i",function(){return g}),n.d(t,"k",function(){return f}),n.d(t,"j",function(){return b}),n.d(t,"h",function(){return x}),n.d(t,"f",function(){return y}),n.d(t,"d",function(){return C});var a=n(4),i=n(48),o=n(10),l=n(639),r=n(640);const c=Object(a.c)("section").withConfig({displayName:"Box"})`
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  padding: 30px 30px 50px;
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,0.25);
`,s=Object(a.c)("section").withConfig({displayName:"HeaderBox"})`
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
`,d=Object(a.c)("article").withConfig({displayName:"Content"})`
  box-sizing: border-box;
  display: block;
  min-height: 285px;
`,p=Object(a.c)(l.a).withConfig({displayName:"DuckDuckGoImage"})`
  box-sizing: border-box;
  display: block;
  width: 40px;
  margin-bottom: 20px;
`,u=Object(a.c)(r.a).withConfig({displayName:"TorLockImage"})`
  box-sizing: border-box;
  display: block;
  width: 40px;
  margin-bottom: 20px;
`,m=Object(a.c)("img").withConfig({displayName:"PrivateImage"})`
  box-sizing: border-box;
  display: block;
  width: 293px;

  @media screen and (max-width: 1170px) {
    margin: auto;
  }
`,h=Object(a.c)("img").withConfig({displayName:"TorImage"})`
  box-sizing: border-box;
  display: block;
  width: 177px;
  margin: 0 0 40px;

  @media screen and (max-width: 1170px) {
    margin: auto;
  }
`,g=Object(a.c)("small").withConfig({displayName:"SubTitle"})`
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  display: block;
  color: #7642F5;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 5px;
`,f=Object(a.c)(i.a).withConfig({displayName:"Title"})`
  font-size: 38px;
  letter-spacing: 0.02px;
  font-weight: 500;
  color: #fff;
  margin: 0 0 0px;
`,b=Object(a.c)("p").withConfig({displayName:"Text"})`
  font-family: ${e=>e.theme.fontFamily.body};
  letter-spacing: 0.19px;
  line-height: 26px;
  font-size: 15px;
  margin: 15px 0;
  color: #fff;
`,x=Object(a.c)("hr").withConfig({displayName:"Separator"})`
  border: 1px solid rgba(255,255,255,0.10);
  height: 0;
  width: 100%;
  margin: 25px 0 0;
`,y=(Object(a.c)(o.a).withConfig({displayName:"PurpleButton"})`
  background: #5E35C3;
  font-family: ${e=>e.theme.fontFamily.heading};
  font-size: 14px;
  font-weight: 500;
  padding: 14px 20px;
  margin: 25px 25px 0 0;
`,Object(a.c)("a").withConfig({displayName:"Link"})`
  font-family: ${e=>e.theme.fontFamily.heading};
  font-size: 14px;
  color: #814EFF;
  font-style: normal;
  line-height: 1;
  align-self: center;
  margin: 25px 20px 0 0;
  cursor: pointer;
  text-decoration: none;
`),C=Object(a.c)("a").withConfig({displayName:"FakeButton"})`
  display: grid;
  height: 100%;
  grid-template-columns: ${e=>e.settings?"auto 16px":"auto auto"};
  grid-template-rows: auto;
  grid-gap: ${e=>e.withToggle?"10px":"0"};
  background: #5E35C3;
  font-family: ${e=>e.theme.fontFamily.heading};
  font-size: 14px;
  font-weight: 500;
  padding: 14px 20px;
  margin: 25px 25px 0 0;
  color: #fff;
  user-select: none;
  border-radius: 20px;
  min-width: 104px;
  width: fit-content;
  text-decoration: none;
  align-items: center;
  line-height: 1;

  & * {
    line-height: 15px;
  }
`},function(e,t,n){"use strict";var a=n(0),i=n(4);function o(e,t,n,a){return i=>{switch(i.size){case"large":return e;case"medium":return t;case"small":return n;case"call-to-action":return null==a?e:a}}}const l=Object(i.c)("button").withConfig({displayName:"StyledButton"})`
  ${e=>{let t,n,a;if(e.disabled)t=n=a=e.theme.color.disabled;else switch(e.type){case"accent":"brave"===e.brand?(t=e.theme.color.brandBrave,n=e.theme.color.brandBraveInteracting,a=e.theme.color.brandBraveActive):"rewards"===e.brand&&(t=e.theme.color.brandBat,n=e.theme.color.brandBatInteracting,a=e.theme.color.brandBatActive);break;case"default":t=e.theme.color.defaultControl,n=e.theme.color.defaultControlInteracting,a=e.theme.color.defaultControlActive;break;case"warn":t=e.theme.color.warn,n=e.theme.color.warnInteracting,a=e.theme.color.warnActive;break;case"subtle":t=e.theme.color.subtle,n=e.theme.color.subtleInteracting,a=e.theme.color.subtleActive}return i.b`
    --button-main-color: ${t};
    --button-main-color-hover: ${n};
    --button-main-color-active: ${a};
  `}}
  --button-state-color: var(--button-main-color);
  --icon-size: ${o("18px","16px","14px")};
  --icon-spacing: ${o("6px","6px","6px")};
  --webkit-appearance: none;
  box-sizing: border-box;
  background: none;
  border: none;
  outline: none;
  display: flex;
  flex-direction: ${e=>e.icon&&"after"===e.icon.position?"row":"row-reverse"};
  justify-content: center;
  align-items: center;
  font-family: Poppins, sans-serif;
  cursor: ${e=>e.disabled?"default":"pointer"};
  user-select: none;
  font-size: ${o("14px","13px","11px")};
  border-radius: ${o("24px","20px","16px","28px")};
  width: ${e=>"call-to-action"===e.size?"100%":"auto"};
  min-width: ${o("116px","104px","88px","235px")};
  padding: ${o("14px 15px","11px 15px","7px 10px","19px 15px")};
  :hover:enabled {
    --button-state-color: var(--button-main-color-hover);
  }
  :active:enabled {
    --button-state-color: var(--button-main-color-active);
  }
`;const r=Object(i.c)(l).withConfig({displayName:"PrimaryButton"})`
  color: #fff;
  background: var(--button-state-color);
  border: 1px solid var(--button-state-color);
`,c=Object(i.c)(l).withConfig({displayName:"SecondaryButton"})`
  border: 1px solid;
  color: var(--button-state-color);
`,s=Object(i.c)(l).withConfig({displayName:"TertiaryButton"})`
  color: var(--button-state-color);
`,d=Object(i.c)("div").withConfig({displayName:"StyledText"})`
  /* min-height so that we get consistent height with / without an icon */
  min-height: var(--icon-size);
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0;
  font-weight: 500;
  text-transform: ${e=>"call-to-action"===e.size?"uppercase":"none"};
  line-height: 1;
`,p=Object(i.c)("div").withConfig({displayName:"StyledIcon"})`
  display: block;
  line-height: 0;
  height: var(--icon-size);
  width: var(--icon-size);
  margin: ${e=>e.text&&e.icon?"before"===e.icon.position?"0 var(--icon-spacing) 0 -4px":"0 -4px 0 var(--icon-spacing)":null};
`;n.d(t,"a",function(){return m});var u=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&(n[a[i]]=e[a[i]])}return n};class m extends a.PureComponent{getButtonComponent(){switch(this.props.level){case"primary":return r;case"secondary":return c;case"tertiary":return s}throw new Error(`Unknown component level: ${this.props.level||"[undefined]"}`)}render(){const e=this.props,{disabled:t,className:n,onClick:i}=e,o=u(e,["disabled","className","onClick"]),{icon:l,text:r}=o;i||t||console.warn("Button component not provided an onClick handler as a prop");let c=this.getButtonComponent();return a.createElement(c,Object.assign({className:n,onClick:i,disabled:t},o),r?a.createElement(d,Object.assign({},o),r):null,l&&l.image?a.createElement(p,Object.assign({},o),l.image):null)}}m.displayName="Button",m.defaultProps={brand:"brave",size:"medium",type:"default",level:"primary",main:!1}},function(e,t,n){"use strict";n.d(t,"f",function(){return o}),n.d(t,"g",function(){return l}),n.d(t,"i",function(){return r}),n.d(t,"h",function(){return c}),n.d(t,"e",function(){return s}),n.d(t,"j",function(){return d}),n.d(t,"q",function(){return p}),n.d(t,"n",function(){return u}),n.d(t,"o",function(){return m}),n.d(t,"p",function(){return h}),n.d(t,"b",function(){return g}),n.d(t,"a",function(){return f}),n.d(t,"c",function(){return b}),n.d(t,"m",function(){return x}),n.d(t,"d",function(){return y}),n.d(t,"l",function(){return C}),n.d(t,"r",function(){return v}),n.d(t,"k",function(){return w});var a=n(4),i=n(48);const o=Object(a.c)("header").withConfig({displayName:"ModalHeader"})`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 30px;
  margin-bottom: 20px;
`,l=Object(a.c)("img").withConfig({displayName:"ModalIcon"})`
  margin-top: 3px;
  height: 60px;
`,r=Object(a.c)(i.a).withConfig({displayName:"ModalTitle"})`
  font-weight: 500;
  font-size: 26px;
  margin: 0 0 10px;
  line-height: 1.3;
`,c=Object(a.c)("span").withConfig({displayName:"ModalSubTitle"})`
  display: block;
  font-size: 18px;
  line-height: 1.2;
  color: ${e=>e.highlight&&"#ff0000"}
`,s=Object(a.c)("div").withConfig({displayName:"ModalContent"})`
  margin-left: 90px;
`,d=Object(a.c)("div").withConfig({displayName:"OneColumnButtonGrid"})`
  display: flex;
  justify-content: flex-end;
`,p=Object(a.c)("footer").withConfig({displayName:"TwoColumnButtonGrid"})`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr auto;
  grid-gap: 20px;
  margin-top: 20px;
`,u=Object(a.c)("div").withConfig({displayName:"ThreeColumnButtonGrid"})`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  margin-top: 30px;
`,m=Object(a.c)("div").withConfig({displayName:"ThreeColumnButtonGridCol1"})`
  display: grid;
  align-items: center;
  grid-template-columns: auto;
`,h=Object(a.c)("div").withConfig({displayName:"ThreeColumnButtonGridCol2"})`
  display: grid;
  align-items: center;
  grid-template-columns: auto auto;
  grid-gap: 15px;
`,g=Object(a.c)("div").withConfig({displayName:"DeviceGrid"})`
  display: grid;
  height: 100%;
  grid-template-columns: auto auto;
  grid-template-rows: 1fr;
  grid-gap: 30px;
  margin: 30px auto 0;
  width: 400px;
`,f=Object(a.c)("div").withConfig({displayName:"DeviceContainer"})`
  display: flex;
  flex-direction: column;
  align-items: center;
`,b=Object(a.c)("img").withConfig({displayName:"DeviceImage"})`
  margin-bottom: 20px;
  height: 100px;
`,x=Object(a.c)("div").withConfig({displayName:"ScanGrid"})`
  display: grid;
  height: 100%;
  grid-template-columns: auto auto;
  grid-template-rows: 1fr;
  margin: 25px auto;
  max-width: 550px;
`,y=Object(a.c)("img").withConfig({displayName:"MobileHandImage"})`
  max-width: 100%;
  display: block;
`,C=Object(a.c)("div").withConfig({displayName:"QRCodeContainer"})`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 180px;
  img {
    max-width: 100%;
  }
`,v=Object(a.c)("div").withConfig({displayName:"ViewSyncCodeGrid"})`
  display: grid;
  height: 100%;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr;
  grid-gap: 20px;
  margin: 0 0 25px;
`,w=Object(a.c)("img").withConfig({displayName:"QRCode"})`
  max-width: 100%;
  display: block;
  width: 140px;
`},function(e,t,n){"use strict";t.a=Object.assign({},{grey000:"#F9F9FD",grey100:"#F1F1F9",grey200:"#E9E9F4",grey300:"#C5C5D3",grey400:"#A0A1B2",grey500:"#7C7D8C",grey600:"#585968",grey700:"#343546",grey800:"#242536"},{orange000:"#FDE8E6",orange100:"#FCD4CD",orange200:"#FDBBAA",orange300:"#F88469",orange400:"#FB542B",orange500:"#F43405",orange600:"#C72E03",orange700:"#992802",orange800:"#6C2200"},{blurple000:"#ECEEFF",blurple100:"#D9DDFE",blurple200:"#AAAFEF",blurple300:"#7B82E1",blurple400:"#4C54D2",blurple500:"#392DD1",blurple600:"#2D23A7",blurple700:"#21197D",blurple800:"#150F53"},{blue000:"#EBF6FF",blue100:"#D1ECFF",blue200:"#B6E2FE",blue300:"#66C3FC",blue400:"#15A4FA",blue500:"#2566B9",blue600:"#1A4B8B",blue700:"#10315D",blue800:"#181C45"},{red000:"#FAD5DC",red100:"#F5ACB8",red200:"#F18295",red300:"#EC5871",red400:"#E72F4E",red500:"#E2052A",red600:"#BE032D",red700:"#99022F",red800:"#750032"},{yellow000:"#FBF3E7",yellow100:"#F9EBD0",yellow200:"#F5DBA2",yellow300:"#F1CB74",yellow400:"#EDBB46",yellow500:"#E9AB18",yellow600:"#D19200",yellow700:"#9D6E00",yellow800:"#694900"},{green000:"#EAF9F1",green100:"#D3F2E2",green200:"#96DFBA",green300:"#58CD92",green400:"#1BBA6A",green500:"#148E50",green600:"#0D6137",green700:"#06351D",green800:"#0D2521"},{purple000:"#E9E1EF",purple100:"#D3C3E0",purple200:"#BDA5D0",purple300:"#A887C0",purple400:"#9269B0",purple500:"#7C4BA1",purple600:"#662D91",purple700:"#57267B",purple800:"#481E64"},{magenta000:"#F4D8F0",magenta100:"#EAB1E0",magenta200:"#DF8AD1",magenta300:"#D462C1",magenta400:"#CA3BB2",magenta500:"#BF14A2",magenta600:"#B4188D",magenta700:"#A91B78",magenta800:"#9E1F63"},{white:"#FFF",black:"#131525",blue400:"#15A4FA",yellow400:"#EDBB46"})},function(e,t,n){"use strict";n.r(t);var a=n(1),i=n(0),o=n(7);const l=i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},i.createElement("path",{d:"M28 15H6.28l4.85-5.25a1 1 0 0 0-.05-1.42 1 1 0 0 0-1.41.06l-6.4 6.93a.7.7 0 0 0-.1.16.75.75 0 0 0-.09.15 1 1 0 0 0 0 .74.75.75 0 0 0 .09.15.7.7 0 0 0 .1.16l6.4 6.93a1 1 0 0 0 1.41.06 1 1 0 0 0 .05-1.42L6.28 17H28a1 1 0 0 0 0-2z"}));var r=Object(o.a)(l);const c=i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},i.createElement("path",{d:"M22.4 29a1 1 0 0 1-.67-.25l-13.4-12a1 1 0 0 1 0-1.5l13.4-12a1 1 0 0 1 1.33 1.5L10.5 16l12.56 11.25A1 1 0 0 1 22.4 29z"}));var s=Object(o.a)(c);const d=i.createElement("svg",{width:"26",height:"26",xmlns:"http://www.w3.org/2000/svg"},i.createElement("g",{transform:"translate(1 1)",fill:"none",fillRule:"evenodd"},i.createElement("circle",{stroke:"#A1A8F2",opacity:".651",cx:"12",cy:"12",r:"12"}),i.createElement("path",{d:"M12.263 9a.734.734 0 0 0-.52.216l-4.527 4.526a.737.737 0 1 0 1.043 1.043l4.004-4.005 4.005 4.004a.737.737 0 0 0 1.042-1.042l-4.526-4.526A.732.732 0 0 0 12.263 9z",fill:"#4C54D2"})));var p=Object(o.a)(d),u=n(713),m=n(714),h=n(301),g=n(712),f=n(715),b=n(634),x=n(340),y=n(716),C=n(717),v=n(718);const w=i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},i.createElement("path",{d:"M16 3a13 13 0 1 0 13 13A13 13 0 0 0 16 3zm0 24a11 11 0 1 1 11-11 11 11 0 0 1-11 11z"}),i.createElement("path",{d:"M22.43 17.1a1 1 0 0 0-1.33.47A5.69 5.69 0 0 1 16 21a5.71 5.71 0 0 1-5.1-3.43 1 1 0 1 0-1.8.86A7.7 7.7 0 0 0 16 23a7.66 7.66 0 0 0 6.9-4.57 1 1 0 0 0-.47-1.33z"}),i.createElement("circle",{cx:"12",cy:"12",r:"2"}),i.createElement("circle",{cx:"20",cy:"12",r:"2"}));var E=Object(o.a)(w);const k=i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},i.createElement("path",{d:"M28 8.91a4.4 4.4 0 0 0-3-2.37A54.4 54.4 0 0 0 16 6a54.26 54.26 0 0 0-9 .54 4.44 4.44 0 0 0-3 2.37A19.4 19.4 0 0 0 3 16a19.4 19.4 0 0 0 1 7.09 4.44 4.44 0 0 0 3 2.37 54.26 54.26 0 0 0 9 .54 54.26 54.26 0 0 0 9-.54 4.4 4.4 0 0 0 3-2.37A19 19 0 0 0 29 16a19 19 0 0 0-1-7.09zm-1.87 13.38a2.45 2.45 0 0 1-1.49 1.21A55 55 0 0 1 16 24a55 55 0 0 1-8.63-.5 2.43 2.43 0 0 1-1.49-1.21A17.8 17.8 0 0 1 5 16a17.8 17.8 0 0 1 .87-6.29A2.43 2.43 0 0 1 7.36 8.5 55.13 55.13 0 0 1 16 8a55 55 0 0 1 8.63.5 2.45 2.45 0 0 1 1.49 1.21A17.8 17.8 0 0 1 27 16a17.8 17.8 0 0 1-.87 6.29z"}),i.createElement("path",{d:"M20.51 15.09l-7-4a1 1 0 0 0-1 0A1 1 0 0 0 12 12v8a1 1 0 0 0 .5.87 1 1 0 0 0 .5.13 1 1 0 0 0 .5-.13l7-4A1 1 0 0 0 21 16a1 1 0 0 0-.49-.91z"}));var O=Object(o.a)(k),S=n(341);const j=i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},i.createElement("path",{d:"M27 4h-6V3a1 1 0 0 0-2 0v1h-6V3a1 1 0 0 0-2 0v1H5a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 22H5V6h6v1a1 1 0 0 0 2 0V6h6v1a1 1 0 0 0 2 0V6h6z"}),i.createElement("path",{d:"M20.19 11.41L14.9 18.7l-3.3-2.5a1 1 0 0 0-1.2 1.6l4.1 3.11a1 1 0 0 0 .61.2h.14a1 1 0 0 0 .67-.4l5.89-8.11a1 1 0 1 0-1.62-1.18z"}));var T=Object(o.a)(j),N=n(719);const A=i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},i.createElement("path",{d:"M27.35 19.22a1 1 0 0 0-1.29.59A10.89 10.89 0 1 1 15.87 5a10.76 10.76 0 0 1 6.36 2.08A4 4 0 1 0 25 6a3.86 3.86 0 0 0-.84.09 12.64 12.64 0 0 0-8.29-3 13 13 0 1 0 12.07 17.42 1 1 0 0 0-.59-1.29z"}));var z=Object(o.a)(A),B=n(720),D=n(721),M=n(635),L=n(636);const F=i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},i.createElement("path",{d:"M26 6.2h-2.47c-4.8 0-6.59-2.63-6.66-2.74a1.1 1.1 0 0 0-1.74 0c-.07.11-1.86 2.74-6.68 2.74H6a1 1 0 0 0-1 1v5.59c0 .13 0 12.43 10.67 16.15a.94.94 0 0 0 .66 0C27 25.22 27 12.92 27 12.8V7.2a1 1 0 0 0-1-1zm-1 6.61c0 .44 0 10.75-9 14.13-9-3.38-9-13.69-9-14.14V8.2h1.47A10.47 10.47 0 0 0 16 5.49a10.49 10.49 0 0 0 7.53 2.71H25z"}),i.createElement("path",{d:"M16 9.8a1 1 0 0 0-1 1V17a1 1 0 0 0 2 0v-6.2a1 1 0 0 0-1-1zM15.29 20.09a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0 1 1 0 0 0-1.42-1.42z"}));var $=Object(o.a)(F),I=n(722),P=n(723),R=n(724);const H=i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},i.createElement("path",{d:"M15 21a1 1 0 0 1-.6-.2l-4-3a1 1 0 0 1 1.2-1.6l3.2 2.4 5.4-7.2a1 1 0 1 1 1.6 1.2l-6 8a1 1 0 0 1-.8.4z"}),i.createElement("path",{d:"M16 29a1 1 0 0 1-.48-.12l-11-6A1 1 0 0 1 4 22V10a1 1 0 0 1 .52-.88l11-6a1 1 0 0 1 1 0l11 6A1 1 0 0 1 28 10v12a1 1 0 0 1-.52.88l-11 6A1 1 0 0 1 16 29zM6 21.41l10 5.45 10-5.45V10.59L16 5.14 6 10.59zM27 22z"}));var W=Object(o.a)(H),G=n(725),V=n(222);const Z=i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},i.createElement("path",{d:"M26.43 6H7.57A2.6 2.6 0 0 0 5 8.64V12H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1v3.36A2.6 2.6 0 0 0 7.57 26H17a1 1 0 0 0 0-2H7.57a.61.61 0 0 1-.57-.64V20h5a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H7V8.64A.61.61 0 0 1 7.57 8h18.86a.61.61 0 0 1 .57.64V16a1 1 0 0 0 2 0V8.64A2.6 2.6 0 0 0 26.43 6zM11 18H5v-4h6z"}),i.createElement("path",{d:"M8.92 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM23.31 17a4.53 4.53 0 0 0-2.65.88l.34-1.52a1 1 0 1 0-1.94-.46l-.91 3.81a1 1 0 0 0 .74 1.2l3.81.92a.86.86 0 0 0 .23 0 1 1 0 0 0 .23-2l-1.42-.34a2.48 2.48 0 0 1 1.57-.49 2.5 2.5 0 1 1 0 5 1 1 0 0 0 0 2 4.5 4.5 0 1 0 0-9z"}));var q=Object(o.a)(Z);const Q=i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},i.createElement("path",{d:"M26.43 6H7.57A2.6 2.6 0 0 0 5 8.64V12H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1v3.36A2.6 2.6 0 0 0 7.57 26H16a1 1 0 0 0 0-2H7.57a.61.61 0 0 1-.57-.64V20h5a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H7V8.64A.61.61 0 0 1 7.57 8h18.86a.61.61 0 0 1 .57.64V13a1 1 0 0 0 2 0V8.64A2.6 2.6 0 0 0 26.43 6zM11 18H5v-4h6z"}),i.createElement("path",{d:"M8.92 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM24 16a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm3 5a3 3 0 0 1-.3 1.29l-4-4A2.9 2.9 0 0 1 24 18a3 3 0 0 1 3 3zm-6 0a3 3 0 0 1 .3-1.29l4 4A3 3 0 0 1 21 21z"}));var U=Object(o.a)(Q);const Y=i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},i.createElement("path",{d:"M26.43 6H7.57A2.6 2.6 0 0 0 5 8.64V12H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1v3.36A2.6 2.6 0 0 0 7.57 26H16a1 1 0 0 0 0-2H7.57a.61.61 0 0 1-.57-.64V20h5a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H7V8.64A.61.61 0 0 1 7.57 8h18.86a.61.61 0 0 1 .57.64V13a1 1 0 0 0 2 0V8.64A2.6 2.6 0 0 0 26.43 6zM11 18H5v-4h6z"}),i.createElement("path",{d:"M8.92 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM28.71 18.29a1 1 0 0 0-1.42 0L25 20.59l-2.29-2.3a1 1 0 0 0-1.42 1.42l2.3 2.29-2.3 2.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l2.29-2.3 2.29 2.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L26.41 22l2.3-2.29a1 1 0 0 0 0-1.42z"}));var K=Object(o.a)(Y);const J=i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},i.createElement("path",{d:"M26.43 6H7.57A2.6 2.6 0 0 0 5 8.64V12H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1v3.36A2.6 2.6 0 0 0 7.57 26H16a1 1 0 0 0 0-2H7.57a.61.61 0 0 1-.57-.64V20h5a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H7V8.64A.61.61 0 0 1 7.57 8h18.86a.61.61 0 0 1 .57.64V16a1 1 0 0 0 2 0V8.64A2.6 2.6 0 0 0 26.43 6zM11 18H5v-4h6z"}),i.createElement("path",{d:"M8.92 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM26.22 19.38l-3.3 4.12-1.21-1.21a1 1 0 0 0-1.42 1.42l2 2A1 1 0 0 0 23 26h.06a1 1 0 0 0 .72-.38l4-5a1 1 0 1 0-1.56-1.24z"}));var X=Object(o.a)(J),_=n(637);const ee=i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},i.createElement("path",{d:"M26.43 6H7.57A2.6 2.6 0 0 0 5 8.64V12H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1v3.36A2.6 2.6 0 0 0 7.57 26H16a1 1 0 0 0 0-2H7.57a.61.61 0 0 1-.57-.64V20h5a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H7V8.64A.61.61 0 0 1 7.57 8h18.86a.61.61 0 0 1 .57.64V13a1 1 0 0 0 2 0V8.64A2.6 2.6 0 0 0 26.43 6zM11 18H5v-4h6z"}),i.createElement("path",{d:"M28 18.17h-1v-.67a3.29 3.29 0 0 0-3-3.5 3.29 3.29 0 0 0-3 3.5v.67h-1a1 1 0 0 0-1 1V25a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-5.83a1 1 0 0 0-1-1zm-5-.67c0-.8.47-1.5 1-1.5s1 .7 1 1.5v.67h-2zm4 6.5h-6v-3.83h6zM8.92 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"}));var te=Object(o.a)(ee);const ne=i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},i.createElement("path",{d:"M26.43 6H7.57A2.6 2.6 0 0 0 5 8.64V12H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1v3.36A2.6 2.6 0 0 0 7.57 26h18.86A2.6 2.6 0 0 0 29 23.36V8.64A2.6 2.6 0 0 0 26.43 6zM5 14h6v4H5zm22 9.36a.61.61 0 0 1-.57.64H7.57a.61.61 0 0 1-.57-.64V20h5a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H7V8.64A.61.61 0 0 1 7.57 8h18.86a.61.61 0 0 1 .57.64z"}),i.createElement("path",{d:"M8.92 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"}));var ae=Object(o.a)(ne);const ie=i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},i.createElement("path",{d:"M26.43 6H7.57A2.6 2.6 0 0 0 5 8.64V12H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1v3.36A2.6 2.6 0 0 0 7.57 26H16a1 1 0 0 0 0-2H7.57a.61.61 0 0 1-.57-.64V20h5a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H7V8.64A.61.61 0 0 1 7.57 8h18.86a.61.61 0 0 1 .57.64V16a1 1 0 0 0 2 0V8.64A2.6 2.6 0 0 0 26.43 6zM11 18H5v-4h6z"}),i.createElement("path",{d:"M8.92 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM27 21h-6a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2z"}));var oe=Object(o.a)(ie);const le=i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},i.createElement("path",{d:"M26.43 6h-1.3L10.32 2a1 1 0 0 0-1.25 1v3h-1.5A2.6 2.6 0 0 0 5 8.64V12H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1v3.36A2.6 2.6 0 0 0 7.57 26h18.86A2.6 2.6 0 0 0 29 23.36V8.64A2.6 2.6 0 0 0 26.43 6zM11.07 4.3L17.4 6h-6.33zM5 14h6v4H5zm22 9.36a.61.61 0 0 1-.57.64H7.57a.61.61 0 0 1-.57-.64V20h5a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H7V8.64A.61.61 0 0 1 7.57 8h18.86a.61.61 0 0 1 .57.64z"}),i.createElement("path",{d:"M8.92 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"}));var re=Object(o.a)(le),ce=n(638),se=n(342);const de=i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},i.createElement("path",{fillRule:"evenodd",fill:"#fff",d:"M9.61 23.25h12.78L16 12 9.61 23.25z"}),i.createElement("path",{d:"M3 26.8l7.67-4.52L16 13V4a.45.45 0 0 0-.38.28l-6.27 11-6.26 11a.48.48 0 0 0 0 .48",fill:"#b0b0b0",fillRule:"evenodd"}),i.createElement("path",{d:"M16 4v9l5.29 9.31L29 26.8a.48.48 0 0 0-.05-.48l-6.26-11-6.27-11A.45.45 0 0 0 16 4",fill:"#6c6c6c",fillRule:"evenodd"}),i.createElement("path",{d:"M29 26.8l-7.67-4.52H10.71L3 26.8a.47.47 0 0 0 .43.2h25.1a.47.47 0 0 0 .43-.2",fill:"#464646",fillRule:"evenodd"}));var pe=Object(o.a)(de),ue=n(726),me=n(639),he=n(727),ge=n(728),fe=n(729),be=n(730),xe=n(640),ye=n(731),Ce=n(732),ve=n(641),we=n(733),Ee=n(734),ke=n(735);const Oe=i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 32 32"},i.createElement("defs",null,i.createElement("path",{id:"love",d:"M18.51508 15.5898c.50242-.4792.50171-1.24242-.00134-1.72006-.52004-.49164-1.37111-.49278-1.8927-.00342a.51555.51555 0 0 1-.04039.03499l-.51938.41343a.49622.49622 0 0 1-.08594.05816.52192.52192 0 0 1-.04952.02303c-.11814.04727-.25191.0484-.37229.00009a.49669.49669 0 0 1-.13546-.0811l-.51996-.41341a.5061.5061 0 0 1-.03717-.03192.1839.1839 0 0 1-.00366-.00345c-.52094-.48913-1.37236-.48799-1.89127.003-.50495.47903-.50495 1.2435 0 1.72252a.50742.50742 0 0 1 .02344.02374l2.74975 2.8606 2.75518-2.86561a.50828.50828 0 0 1 .0207-.0206zm.69517.71886l-2.78316 2.8947c-.3765.39502-.99803.39502-1.37432.00154l-2.78542-2.8977c-.9102-.87422-.90673-2.29348.01088-3.164.90065-.85217 2.34604-.85737 3.25334-.01559l.2078.16522.20753-.16518c.90783-.84177 2.35255-.83663 3.25461.01616.91689.87057.9198 2.29079.00874 3.16485zM6.6103 13.02286c-1.48663-1.49886-1.48069-3.91196.018-5.40228 1.49746-1.48912 3.9213-1.49413 5.42499-.01502l.63953.53872.64704-.53961c1.50376-1.47822 3.92692-1.47291 5.42416.01599 1.03267 1.02736 1.38192 2.5308.94104 3.88976-.08522.26266-.36723.40651-.6299.3213-.26266-.08522-.40651-.36723-.3213-.6299.32565-1.00375.06795-2.11309-.69505-2.87216-1.11113-1.10494-2.9132-1.10625-4.02596-.00393a.51536.51536 0 0 1-.04096.03728l-.92417.77073c-.17952.20063-.48724.22341-.69455.04879l-.97494-.82126a.50625.50625 0 0 1-.03489-.03161.20572.20572 0 0 1-.00378-.00375c-1.11275-1.1025-2.91495-1.10125-4.02613.00375-1.10943 1.10325-1.11153 2.88898-.00614 3.99599a.52604.52604 0 0 1 .04284.0468l4.88576 5.92318c.1675.18533.40169.24722.61728.17605.26222-.08656.54497.05584.63153.31807.08656.26222-.05585.54497-.31807.63153-.59155.19527-1.2396.02401-1.68738-.47222l-4.88893-5.9262zM13 25.5C6.09644 25.5.5 19.90356.5 13S6.09644.5 13 .5 25.5 6.09644 25.5 13 19.90356 25.5 13 25.5zm0-1c6.35127 0 11.5-5.14873 11.5-11.5S19.35127 1.5 13 1.5 1.5 6.64873 1.5 13 6.64873 24.5 13 24.5z"})),i.createElement("use",{transform:"translate(3 3)",xlinkHref:"#love"}));var Se=Object(o.a)(Oe);const je=i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 32 32"},i.createElement("defs",null,i.createElement("path",{id:"megaphone",d:"M13 25.5C6.09644 25.5.5 19.90356.5 13S6.09644.5 13 .5 25.5 6.09644 25.5 13 19.90356 25.5 13 25.5zm0-1c6.35127 0 11.5-5.14873 11.5-11.5S19.35127 1.5 13 1.5 1.5 6.64873 1.5 13 6.64873 24.5 13 24.5zM11.86758 9.48283H6.53994c.07477 0 .054.02778.054.12828v4.33333c0 .1005.02077.12829-.054.12829h5.39945c.32803 0 .59394.26591.59394.59394 0 .32802-.26591.59394-.59394.59394H6.53994c-.6687 0-1.13388-.62222-1.13388-1.31617V9.61111c0-.69394.46518-1.31616 1.13388-1.31616h5.32764v1.18788zM9.59394 20c0 .32802-.26592.59394-.59394.59394-.32802 0-.59394-.26592-.59394-.59394V8.88889c0-.32802.26592-.59394.59394-.59394.32802 0 .59394.26592.59394.59394V20zM12.224 9.4102c-.2879.15718-.64873.0512-.80591-.2367-.15719-.28791-.05122-.64873.2367-.80592l5.29145-2.88889c.3958-.21608.87855.07037.87855.52131v11.55556c0 .45093-.48275.73739-.87855.5213l-5.29146-2.88889c-.2879-.15718-.39388-.518-.2367-.80591.1572-.28791.51801-.39389.80592-.2367l4.41291 2.40924V7.00095l-4.4129 2.40925zm5.65479.7292c-.32803 0-.59394-.26592-.59394-.59395 0-.32802.26591-.59393.59394-.59393 1.502 0 2.71515 1.23926 2.71515 2.7606 0 1.52134-1.21315 2.7606-2.71515 2.7606-.32803 0-.59394-.2659-.59394-.59393 0-.32803.26591-.59394.59394-.59394.84023 0 1.52727-.70184 1.52727-1.57273 0-.87089-.68705-1.57273-1.52727-1.57273z"})),i.createElement("use",{transform:"translate(3 3)",xlinkHref:"#megaphone"}));var Te=Object(o.a)(je);function Ne(e,t){return Object(a.default)(e)`
    transform: rotate(${t}deg);
  `}n.d(t,"ArrowLeftIcon",function(){return Ae}),n.d(t,"ArrowRightIcon",function(){return ze}),n.d(t,"ArrowDownIcon",function(){return Be}),n.d(t,"ArrowUpIcon",function(){return De}),n.d(t,"CaratCircleUpIcon",function(){return Me}),n.d(t,"CaratCircleDownIcon",function(){return Le}),n.d(t,"CaratRightIcon",function(){return Fe}),n.d(t,"CaratLeftIcon",function(){return $e}),n.d(t,"CaratUpIcon",function(){return Ie}),n.d(t,"CaratDownIcon",function(){return Pe}),n.d(t,"AlertCircleIcon",function(){return u.a}),n.d(t,"ArrowAnchorIcon",function(){return m.a}),n.d(t,"CheckCircleIcon",function(){return h.a}),n.d(t,"CheckIcon",function(){return g.a}),n.d(t,"ClipboardIcon",function(){return f.a}),n.d(t,"CloseCircleIcon",function(){return b.a}),n.d(t,"CloseStrokeIcon",function(){return x.a}),n.d(t,"CloseStrokeShadowIcon",function(){return y.a}),n.d(t,"DownloadIcon",function(){return C.a}),n.d(t,"EmoteSadIcon",function(){return v.a}),n.d(t,"EmoteSmileIcon",function(){return E}),n.d(t,"LogoYoutubeIcon",function(){return O}),n.d(t,"OpenNewIcon",function(){return S.a}),n.d(t,"PaymentDueIcon",function(){return T}),n.d(t,"PrintIcon",function(){return N.a}),n.d(t,"RefreshIcon",function(){return z}),n.d(t,"SendIcon",function(){return B.a}),n.d(t,"SettingsAdvancedIcon",function(){return D.a}),n.d(t,"SettingsIcon",function(){return M.a}),n.d(t,"ShieldAlertIcon",function(){return L.a}),n.d(t,"ShieldAlertStrokeIcon",function(){return $}),n.d(t,"ThumbsUpIcon",function(){return I.a}),n.d(t,"UpholdSystemIcon",function(){return P.a}),n.d(t,"VerifiedFillIcon",function(){return R.a}),n.d(t,"VerifiedIcon",function(){return W}),n.d(t,"WalletInfoIcon",function(){return G.a}),n.d(t,"WalletAddIcon",function(){return V.a}),n.d(t,"WalletBackupIcon",function(){return q}),n.d(t,"WalletBlockIcon",function(){return U}),n.d(t,"WalletCloseIcon",function(){return K}),n.d(t,"WalletCheckIcon",function(){return X}),n.d(t,"WalletImportIcon",function(){return _.a}),n.d(t,"WalletLockIcon",function(){return te}),n.d(t,"WalletManageIcon",function(){return ae}),n.d(t,"WalletMinusIcon",function(){return oe}),n.d(t,"WalletOpenIcon",function(){return re}),n.d(t,"WalletWithdrawIcon",function(){return ce.a}),n.d(t,"BatColorIcon",function(){return se.a}),n.d(t,"BatGreyIcon",function(){return pe}),n.d(t,"BitcoinColorIcon",function(){return ue.a}),n.d(t,"DuckDuckGoIcon",function(){return me.a}),n.d(t,"EthereumColorIcon",function(){return he.a}),n.d(t,"LitecoinColorIcon",function(){return ge.a}),n.d(t,"LoaderIcon",function(){return fe.a}),n.d(t,"PaperAirplaneIcon",function(){return be.a}),n.d(t,"TorLockIcon",function(){return xe.a}),n.d(t,"TwitchColorIcon",function(){return ye.a}),n.d(t,"TwitterColorIcon",function(){return Ce.a}),n.d(t,"UpholdColorIcon",function(){return ve.a}),n.d(t,"YoutubeColorIcon",function(){return we.a}),n.d(t,"SendTipsIcon",function(){return Ee.a}),n.d(t,"GiftIcon",function(){return ke.a}),n.d(t,"LoveIcon",function(){return Se}),n.d(t,"MegaphoneIcon",function(){return Te});const Ae=Ne(r,0),ze=Ne(r,180),Be=Ne(r,-90),De=Ne(r,90),Me=Ne(p,0),Le=Ne(p,180),Fe=Ne(s,180),$e=Ne(s,0),Ie=Ne(s,90),Pe=Ne(s,-90)},,function(e,t,n){"use strict";t.a={shields:"Shields",up:"up",down:"down",totalBlocked:"Total blocked",forThisSite:"for this site",enabledMessage:"If a site appears broken, try shields down",disabledMessage:"You’re browsing this site without any privacy and security protections.",blockAds:"Ads and trackers blocked",blockPopups:"Pop-ups blocked",blockImages:"Images blocked",block3partyCookies:"3rd-party cookies blocked",allowAllCookies:"All cookies allowed",blockAllCookies:"Cookies blocked",blockSomeScripts:"Some scripts blocked",blockAllScripts:"Scripts blocked",allowAllScripts:"All scripts allowed",allowAllFingerprinting:"All device recognition allowed",blockAllFingerprinting:"Device recognition blocked",block3partyFingerprinting:"3rd-party device recognition blocked",blockPishing:"Phishing/malware attempts blocked",connectionsEncrypted:"Connections encrypted",editDefaults:"Global shield defaults",scriptsOnThisSite:"Scripts on this site",blockedScripts:"Blocked scripts",allowedScripts:"Allowed scripts",allowAll:"Allow all",allow:"Allow",allowed:"Allowed",blockAll:"Block all",block:"Block",blocked:"Blocked",apply:"Apply",applyOnce:"Apply once",applyUntilRestart:"Apply until restart",alwaysApply:"Always apply",undo:"Undo",cancel:"Cancel",goBack:"Go back",cookiesOnThisSite:"Cookies on this site",deviceRecognitionAttempts:"Device recognition attempts"}},,function(e,t,n){"use strict";t.a={learnMore:"Learn more",done:"Done",searchSettings:"Search settings",headerLabel:"This is a",headerTitle:"Private Window",headerText:"Brave doesn’t remember what you do in a Private Window. Sites you visit won't show up in your history and cookies vanish when you’re done. Private Windows don’t make you completely anonymous online, though.",headerButton:"Learn more",headerTorTitle:"Private Window with Tor",headerTorText:"Brave never remembers what you do in a Private Window. With Tor, your browsing is also hidden from your ISP or employer, and your IP address is hidden from the sites you visit.",headerTorButton:"Learn more about Private Windows with Tor",boxDdgLabel:"Search Privately with",boxDdgTitle:"DuckDuckGo",boxDdgText:"With private search, Brave will use DuckDuckGo for searches in Private Windows. DuckDuckGo doesn’t track your search history, so you can search privately.",boxDdgText2:"In Private Windows with Tor, DuckDuckGo is the default search engine. Some of the other popular search engines are harder to use with Tor. DuckDuckGo doesn’t track your search history; with Tor, they don’t even know your IP address.",boxDdgButton:"Search with DuckDuckGo",boxTorLabel:"Browse privately with",boxTorLabel2:"You are browsing privately with",boxTorTitle:"Tor Protection",boxTorText:"Tor hides your IP address from the sites you visit, by routing your browsing through several Tor servers before it reaches your destination. These connections are encrypted, so your ISP or employer can’t see which sites you’re visiting either. Tor can slow down browsing and some sites might not work at all.",boxTorText2:"Using Private Tabs only changes what Brave does on your device — it doesn't change anyone else's behavior. Tor hides your IP address from the sites you visit, and hides the sites you visit from your ISP or your employer. Open a Private Window with Tor from the menu, or with Alt+Shift+N or Option+Shift+N.",boxTorButton:"Learn more about Tor in Brave",modalPrivateWindowTorTitle:"Link out to: https://support.brave.com/hc/en-us/articles/360018121491",modalPrivateWindowTitle:"Link out to: https://support.brave.com/hc/en-us/articles/360017840332",modalTorInBraveTitle:"Link out to: https://support.brave.com/hc/en-us/articles/360018121491",modalDuckduckGoTitle:"Link out to: TBD"}},function(e,t,n){"use strict";t.a={adsDesc:"Earn tokens by seeing ads on Brave. Ads are matched from machine learning and the data temporarily present in your browser without tracking your information or sending it outside.",adsDisabledText:"Coming soon",adsDisplayed:"Ads displayed",adsEarnings:"Earnings this month",adsFreq:"Ad Frequency",adsMode:"Ad mode",adsTitle:"Brave Ads",contributionAllowed:"What should be allowed?",contributionDesc:"A simple way to support content creators. Set monthly allowance and browse normally. Your favorite sites (content sites only) receive your contributions automatically. You can exclude sites from funding here.",contributionHideAll:"Hide all",contributionMinTime:"Minimum page time before logging a visit",contributionMinVisits:"Minimum visits for publisher relevancy",contributionMonthly:"Monthly budget",contributionNextDate:"Next contribution date",contributionNonVerified:"Allow contribution to non-verified sites",contributionSeeAll:"See all",contributionSites:"Supported sites",contributionSitesNum:"Sites you're supporting",contributionSitesSuffix:"sites",contributionTime5:"5 seconds",contributionTime60:"60 seconds",contributionTime8:"8 seconds",contributionTitle:"Brave Contribute",contributionVideos:"Allow contribution to videos",contributionVisit10:"10 visits",contributionVisit1:"1 visit",contributionVisit5:"5 visits",donationDesc:"Tip content creators directly as you browse or give tips to videos and tweets that you ‘like’. You can also set up recurring monthly tips so you can support sites continuously.",donationTitle:"Tips",donationTotal:"Total tips this month",rewardsDisabledDescOne:"With conventional browsers, you pay to browse the web by viewing ads with your valuable attention, spending your valuable time downloading invasive ad technology, that transmits your valuable private data to advertisers — without your consent.",rewardsDisabledDescTwo:"Today, Brave welcomes you to the new internet. One where your time is valued, your personal data is kept private, and you actually get paid for your attention.",whyBraveRewards:"Why Brave Rewards?"}},,,,,,function(e,t,n){"use strict";var a=n(0),i=n(1);const o={mini:{text:"8px",token:"10px",tokenNum:"12"},small:{text:"10px",token:"12px",tokenNum:"14px"},normal:{text:"12px",token:"14px",tokenNum:"16px"}},l={contribute:"#9752cb",default:"#4b4c5c",donation:"#696fdc",earnings:"#c12d7c",notPaid:"#838391"},r=Object(i.default)("span").withConfig({displayName:"StyledWrapper"})`
  ${e=>{const t=o[e.size||"normal"],n=l[e.color||"default"];return i.css`
    --tokens-value-color: ${n};
    --tokens-text-size: ${t.text};
    --tokens-token-size: ${t.token};
    --tokens-tokenNum-size: ${t.tokenNum};
  `}}
`,c=Object(i.default)("span").withConfig({displayName:"StyledTokens"})`
  font-family: Poppins, sans-serif;
  font-weight: 300;
  line-height: 1.4;
  color: #686978;
  display: inline-block;
`,s=Object(i.default)("span").withConfig({displayName:"StyledTokenValue"})`
  color: var(--tokens-value-color);
  font-size: var(--tokens-tokenNum-size);
  font-weight: 500;
`,d=Object(i.default)("span").withConfig({displayName:"StyledContent"})`
  color: #9E9FAB;
  font-size: var(--tokens-text-size);
  font-family: Muli, sans-serif;
  line-height: 1.29;
  display: inline-block;
  margin-left: 10px;
`,p=Object(i.default)("span").withConfig({displayName:"StyledTokenCurrency"})`
  font-size: var(--tokens-token-size);
  font-weight: 300;
  display: inline-block;
  margin-left: 4px;
`;n.d(t,"a",function(){return u});class u extends a.PureComponent{render(){const{id:e,converted:t,value:n,hideText:i,isNegative:o,size:l,color:u,currency:m}=this.props;return a.createElement(r,{id:e,size:l,color:u},a.createElement(c,null,a.createElement(s,null,o?"-":"",n),i?null:a.createElement(p,null,"BAT")),void 0!==t?a.createElement(d,null,t," ",m):null)}}u.defaultProps={size:"normal",color:"default",currency:"USD",toFixed:"true"}},,,,,function(e,t,n){"use strict";n.d(t,"c",function(){return i}),n.d(t,"f",function(){return o}),n.d(t,"e",function(){return l}),n.d(t,"a",function(){return r}),n.d(t,"b",function(){return c}),n.d(t,"d",function(){return s}),n.d(t,"h",function(){return d}),n.d(t,"i",function(){return p}),n.d(t,"g",function(){return u}),n.d(t,"k",function(){return m}),n.d(t,"l",function(){return h}),n.d(t,"j",function(){return g});var a=n(1);const i=Object(a.default)("div").withConfig({displayName:"StyledListContent"})`
  padding: 0 25px;
`,o=Object(a.default)("div").withConfig({displayName:"StyledSupport"})`
  background: ${e=>e.theme.color.subtleBackground};
  margin-top: -9px;
  padding-top: 10px;
`,l=Object(a.default)("div").withConfig({displayName:"StyledSitesNum"})`
  height: 50px;
  padding: 20px 25px;
  margin-top: -21px;
`,r=Object(a.default)("div").withConfig({displayName:"StyledDisabledContent"})`
  padding: 0px 5px;
`,c=Object(a.default)("span").withConfig({displayName:"StyledHeading"})`
  font-size: 22px;
  font-weight: normal;
  letter-spacing: 0;
  line-height: 28px;
`,s=Object(a.default)("a").withConfig({displayName:"StyledSitesLink"})`
  float: right;
  color: #4C54D2;
  font-size: 13px;
  letter-spacing: 0;
`,d=Object(a.default)("p").withConfig({displayName:"StyledText"})`
  color: #838391;
  font-size: 14px;
  font-family: ${e=>e.theme.fontFamily.body};
  font-weight: 300;
  letter-spacing: 0;
  line-height: 28px;
`,p=Object(a.default)("div").withConfig({displayName:"StyledTotalContent"})`
  position: relative;
  top: 8px;
  padding-right: 25px;

  @media (max-width: 366px) {
    top: 11px;
  }
`,u=Object(a.default)("div").withConfig({displayName:"StyledSupportSites"})`
  position: relative;
  top: 9px;
  font-size: 16px;
  padding: 0 0 10px 25px;

  @media (max-width: 411px) {
    font-size: 14px;
  }
`,m=Object(a.default)("div").withConfig({displayName:"StyledWalletOverlay"})`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${e=>e.theme.color.modalOverlayBackground};
  align-items: center;
  z-index: 999;
  justify-content: center;
`,h=Object(a.default)("div").withConfig({displayName:"StyledWalletWrapper"})`
  height: 90vh;
  overflow-y: scroll;
  width: 90%;
  margin-top: 40px;
`,g=Object(a.default)("div").withConfig({displayName:"StyledWalletClose"})`
  top: 15px;
  right: 15px;
  position: fixed;
  color: ${e=>e.theme.color.subtleExclude};
  width: 25px;
`},function(e,t,n){"use strict";t.a={welcome:"Brave the new Internet",whatIsBrave:"Get ready to enjoy a faster and more secure browsing experience with a browser built to protect your privacy.",letsGo:"Let's go",importFromAnotherBrowser:"Import bookmarks & settings",setupImport:"Brave makes it easy to set up your usual environment by importing bookmarks and settings from other browsers installed on your computer.",import:"Import",imported:"Imported",setDefaultSearchEngine:"Change your search engine",chooseSearchEngine:"Choose the search engine you would like to use by default when searching the web from the address bar.",chooseYourTheme:"Choose your color theme",findToolbarTheme:"Set the color of your toolbar by selecting the light or dark option from the settings panel.",protectYourPrivacy:"Manage your shields",adjustProtectionLevel:"Brave shields protects you from unwanted ads and trackers while browsing. If you encounter an issue while browsing a particular site, adjust your protection level from the shields panel in the toolbar.",showMeWhere:"Show Shields",enableBraveRewards:"Enable Brave Rewards",setupBraveRewards:"Your attention is valuable. Earn by viewing privacy-respecting ads while you browse, and pay it forward to support content creators you love.",getStarted:"Enable Rewards",skipWelcomeTour:"Skip welcome tour",next:"Next",done:"Done",confirm:"Confirm",confirmed:"Confirmed",theme:"Change theme",search:"Settings"}},,,,,,,,function(e,t,n){"use strict";t.a={adsDesc:"Earn tokens by seeing ads on Brave. Ads are matched from machine learning and the data temporarily present in your browser without tracking your information or sending it outside.",adsDisabledText:"Coming soon",adsDisplayed:"Ads displayed",adsEarnings:"Earnings this month",adsFreq:"Ad Frequency",adsMode:"Ad mode",adsTitle:"Brave Ads",contributionAllowed:"What should be allowed?",contributionDesc:"A simple way to support content creators. Set monthly allowance and browse normally. Your favorite sites (content sites only) receive your contributions automatically. You can exclude sites from funding here.",contributionMinTime:"Minimum page time before logging a visit",contributionMinVisits:"Minimum visits for publisher relevancy",contributionMonthly:"Monthly budget",contributionNextDate:"Next contribution date",contributionNonVerified:"Allow contribution to non-verified sites",contributionSites:"Supported sites",contributionTime5:"5 seconds",contributionTime60:"60 seconds",contributionTime8:"8 seconds",contributionTitle:"Brave Contribute",contributionVideos:"Allow contribution to videos",contributionVisit10:"10 visits",contributionVisit1:"1 visit",contributionVisit5:"5 visits",donationDesc:"Tip content creators directly as you browse or give tips to videos and tweets that you ‘like’. You can also set up recurring monthly tips so you can support sites continuously.",donationTitle:"Tips",donationTotal:"Total tips this month"}},,,,function(e,t,n){"use strict";var a=n(0),i=n(1);const o=Object(i.default)("div").withConfig({displayName:"StyledWrapper"})`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(12, 13, 33, 0.85);
  z-index: 99;
  padding: 0 20px;
  overflow: hidden;
`,l=Object(i.default)("div").withConfig({displayName:"StyledDialog"})`
  max-width: ${e=>"small"===e.size?"666px":"920px"};
  margin: 52px auto;
  background: #fff;
  border-radius: 6px;
  overflow: hidden;
  position: relative;
`,r=Object(i.default)("div").withConfig({displayName:"StyledClose"})`
  position: absolute;
  top: 19px;
  right: 19px;
  cursor: pointer;
  width: 16px;
  height: 16px;
  color: #B8B9C4;
`,c=Object(i.default)("div").withConfig({displayName:"StyledContent"})`
  padding: 61px 50px;
  overflow-y: auto;
  max-height: calc(100vh - 100px);
`;var s=n(340);n.d(t,"a",function(){return d});class d extends a.PureComponent{constructor(){super(...arguments),this.outsideClose=(()=>{this.props.outsideClose&&this.props.onClose&&this.props.onClose()})}render(){const{id:e,onClose:t,children:n,size:i,testId:d}=this.props;return a.createElement(o,{id:e,onClick:this.outsideClose,"data-test-id":d},a.createElement(l,{size:i},a.createElement(r,{onClick:t},a.createElement(s.a,null)),a.createElement(c,null,n)))}}d.defaultProps={size:"normal",id:"modal"}},,,,,,function(e,t,n){"use strict";var a=n(0),i=n(1),o=n(107);const l=Object(i.default)("span").withConfig({displayName:"StyledSharedHeading"})`
  box-sizing: border-box;
  font-family: ${o.a.fontFamily.heading};
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  margin: 0;
`,r=Object(i.default)(l.withComponent("h1")).withConfig({displayName:"StyledH1"})`
  font-size: 48px;
`,c=Object(i.default)(l.withComponent("h2")).withConfig({displayName:"StyledH2"})`
  font-size: 40px;
`,s=Object(i.default)(l.withComponent("h3")).withConfig({displayName:"StyledH3"})`
  font-size: 32px;
`,d=Object(i.default)(l.withComponent("h4")).withConfig({displayName:"StyledH4"})`
  font-size: 24px;
`,p=Object(i.default)(l.withComponent("h5")).withConfig({displayName:"StyledH5"})`
  font-size: 20px;
`,u=Object(i.default)(l.withComponent("h6")).withConfig({displayName:"StyledH6"})`
  font-size: 16px;
`;n.d(t,"a",function(){return m});class m extends a.PureComponent{render(){const{testId:e,level:t,children:n,className:i}=this.props;switch(t){case 1:return a.createElement(r,{"data-test-id":e,className:i},n);case 2:return a.createElement(c,{"data-test-id":e,className:i},n);case 3:return a.createElement(s,{"data-test-id":e,className:i},n);case 4:return a.createElement(d,{"data-test-id":e,className:i},n);case 5:return a.createElement(p,{"data-test-id":e,className:i},n);case 6:return a.createElement(u,{"data-test-id":e,className:i},n);default:return a.createElement(r,{"data-test-id":e,className:i},n)}}}},function(e,t,n){"use strict";n.d(t,"i",function(){return r}),n.d(t,"d",function(){return c}),n.d(t,"c",function(){return s}),n.d(t,"k",function(){return d}),n.d(t,"l",function(){return p}),n.d(t,"a",function(){return m}),n.d(t,"m",function(){return h}),n.d(t,"n",function(){return g}),n.d(t,"b",function(){return f}),n.d(t,"f",function(){return b}),n.d(t,"g",function(){return x}),n.d(t,"h",function(){return y}),n.d(t,"e",function(){return C}),n.d(t,"q",function(){return v}),n.d(t,"s",function(){return w}),n.d(t,"o",function(){return E}),n.d(t,"j",function(){return k}),n.d(t,"r",function(){return O}),n.d(t,"p",function(){return S});var a=n(4),i=n(12);const o=Object(a.c)("div").withConfig({displayName:"Grid"})`
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  font-family: ${e=>e.theme.fontFamily.heading};
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: 1fr;
  grid-gap: 0;
  justify-content: center;
  align-items: center;
`,l=Object(a.c)("div").withConfig({displayName:"Flex"})`
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  font-family: ${e=>e.theme.fontFamily.heading};
  display: flex;
  align-items: center;
`,r=Object(a.c)(o).withConfig({displayName:"ResourcesGrid"})`
  box-sizing: border-box;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  background: linear-gradient(to bottom, #131526, #343546);
  width: 100%;
  height: 100%;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto 1fr;
  cursor: initial;
`,c=Object(a.c)(l).withConfig({displayName:"MainToggleFlex"})`
  justify-content: space-between;
  padding: ${e=>e.enabled?"0":"0 0 22px"};
`,s=Object(a.c)(o).withConfig({displayName:"MainSiteInfoGrid"})`
  grid-gap: 5px;
  margin: 0 0 5px;
`,d=Object(a.c)(l).withConfig({displayName:"ResourcesSiteInfoFlex"})`
  justify-content: space-between;
  padding: 25px 25px 15px;
`,p=Object(a.c)(o).withConfig({displayName:"ResourcesSiteInfoGrid"})`
  grid-template-columns: auto 1fr;
  grid-gap: 5px;

  > * {
    line-height: 1;
  }
`,u=Object(a.c)(o).withConfig({displayName:"EnabledTextGrid"})`
  grid-gap: 5px;
  justify-content: center;

  &:first-child {
    margin: 0 0 5px;
  }
`,m=Object(a.c)(u).withConfig({displayName:"DisabledTextGrid"})`
  grid-template-columns: 2fr 4fr;
  max-width: 90%;
  margin: 10px auto 10px;
`,h=Object(a.c)(o).withConfig({displayName:"ResourcesStatusGrid"})`
  grid-template-columns: ${e=>e.withStats?"28px 28px 1fr":"28px 1fr"};
  padding: 5px 25px 5px 20px;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  color: #E9E9F4;
  background-color: rgba(255, 255, 255, 0.15);
  user-select: none;
  cursor: pointer;

  > *:nth-child(2) {
    padding: 0;
  }
`,g=Object(a.c)(o).withConfig({displayName:"ResourcesSubTitleGrid"})`
  position: sticky;
  top: 0;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: auto;
  padding: 5px 25px 5px 20px;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  color: #E9E9F4;
  height: auto;
  background: ${i.a.grey800};
`,f=Object(a.c)(l.withComponent("a")).withConfig({displayName:"MainFooterLinkFlex"})`
  justify-content: space-between;
  padding: 20px 25px;
  color: ${i.a.blue200};
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  line-height: 1;

  &:hover {
    color: ${i.a.white};
  }
`,b=Object(a.c)(o.withComponent("footer")).withConfig({displayName:"ResourcesFooterGrid"})`
  grid-template-columns: 1fr 1fr;
  border-top: 1px solid rgba(255,255,255,0.15);
`,x=Object(a.c)(l).withConfig({displayName:"ResourcesFooterGridColumnLeft"})`
  justify-content: flex-start;
  height: 65px;
  padding-left: 20px;
`,y=Object(a.c)(l).withConfig({displayName:"ResourcesFooterGridColumnRight"})`
  justify-content: flex-end;
  height: 65px;
  padding-right: 20px;
  position: relative;
`,C=Object(a.c)(l).withConfig({displayName:"ResourcesFooterFlex"})`
  justify-content: center;
  margin: auto;
  padding: 15px 0;
  border-top: 1px solid rgba(255,255,255,0.15);
  width: 100%;
`,v=Object(a.c)(l).withConfig({displayName:"StatFlex"})`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  font-family: ${e=>e.theme.fontFamily.heading};
  color: ${e=>e.disabled?i.a.grey500:i.a.grey200};
  pointer-events: ${e=>e.disabled?"none":null};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  user-select: none;
  padding: 13px 0;
  `,w=Object(a.c)(o).withConfig({displayName:"ToggleGrid"})`
  grid-template-columns: 48px 28px 1fr auto;
  padding: 0;
  border-bottom: 1px solid rgba(255,255,255,0.15);
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  color: #E9E9F4;

  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
  }

  > *:first-child {
    cursor: pointer;
    margin-left: 20px;
  }

  > *:nth-child(2) {
    cursor: pointer;
    height: 40px;
  }

  > *:nth-child(3) {
    cursor: pointer;
  }
`,E=Object(a.c)(w).withConfig({displayName:"SelectGrid"})`
  padding: 0;

  > *:nth-child(2) {
    height: 46px;
  }

  &:hover {
    cursor: ${e=>e.hasUserInteraction?"pointer":"unset"};
    background-color: ${e=>e.hasUserInteraction?"rgba(255, 255, 255, 0.15)":"transparent"};
  }
`,k=Object(a.c)(o).withConfig({displayName:"ResourcesListGrid"})`
  grid-template-columns: auto 1fr auto;
  grid-template-rows: auto;
  padding: 9px 25px 9px 20px;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  color: #E9E9F4;
  background-color: ${e=>e.hightlighted?"rgba(255, 255, 255, 0.15)":null};
  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
  }
`,O=Object(a.c)(l.withComponent("label")).withConfig({displayName:"ToggleFlex"})`
  width: 100%;
  height: 100%;
  padding-right: 25px;
`,S=Object(a.c)(l).withConfig({displayName:"ShieldIconFlex"})`
  display: flex;
  justify-content: center;
`},,,function(e,t,n){"use strict";t.a={passphrase:"abandon ability able about above absent absorb abstract absurd abuse access accident account accuse access acid acoustic acquire across act action actor actress actual",device1:{id:"0",name:"MacOS without the ESC key",lastActive:"Thu Nov 15 2018 17:27:03 GMT -0200 (Brasilia Summer Time)"},device2:{id:"1",name:"Windowz machineh",lastActive:"Thu Nov 15 2018 17:27:03 GMT -0200 (Brasilia Summer Time)"}}},function(e,t,n){"use strict";var a=n(0),i=n(1);const o=Object(i.default)("div").withConfig({displayName:"StyledWrapper"})`
  width: 100%;
  margin-bottom: 12px;
`,l=Object(i.default)("div").withConfig({displayName:"StyledLabel"})`
  width: 100%;
  font-family: Poppins, sans-serif;
  line-height: normal;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 7px;
  padding-left: 2px;
  letter-spacing: 0;
  ${e=>{let t="#686978";return"dark"===e.type&&(t="#fff"),e.disabled&&(t="#D1D1DB","dark"===e.type&&(t="#686978")),i.css`
    --controlWrapper-label-color: ${t};
  `}};
  color: var(--controlWrapper-label-color);
`;n.d(t,"a",function(){return r});class r extends a.PureComponent{render(){const{id:e,text:t,children:n,type:i,disabled:r}=this.props;return a.createElement(o,{id:e},a.createElement(l,{type:i,disabled:r},t),n)}}r.defaultProps={type:"light",disabled:!1}},,,,,,,,function(e,t,n){"use strict";t.a={thirdPartyCookiesBlocked:"33",thirdPartyScriptsBlocked:"11",thirdPartyDeviceRecognitionBlocked:"10",pishingMalwareBlocked:"23",connectionsEncrypted:"1",totalBlocked:"300",siteName:"buzzfeed.com",popupsBlocked:"2",imagesBlocked:"33",totalAdsTrackersBlocked:"100",blockedScriptsResouces:[{name:"https://aaaa.com/123456789123456789123456789, ",blocked:!1,hasUserInput:!1},{name:"https://bbbb.com/123456789123456789123456789, ",blocked:!1,hasUserInput:!1},{name:"https://cccc.com/123456789123456789123456789, ",blocked:!1,hasUserInput:!0},{name:"https://dddd.com/123456789123456789123456789, ",blocked:!1,hasUserInput:!1},{name:"https://eeee.com/123456789123456789123456789, ",blocked:!1,hasUserInput:!1},{name:"https://ffff.com/123456789123456789123456789, ",blocked:!1,hasUserInput:!1},{name:"https://gggg.com/123456789123456789123456789, ",blocked:!1,hasUserInput:!1},{name:"https://hhhh.com/123456789123456789123456789, ",blocked:!1,hasUserInput:!0},{name:"https://iiii.com/123456789123456789123456789, ",blocked:!1,hasUserInput:!1},{name:"https://jjjj.com/123456789123456789123456789, ",blocked:!0,hasUserInput:!1},{name:"https://kkkk.com/123456789123456789123456789, ",blocked:!0,hasUserInput:!1},{name:"https://llll.com/123456789123456789123456789, ",blocked:!0,hasUserInput:!1}],blockedFakeResources:["https://aaaa.com/abcdefghijklmnopqrstuwxyz/123456789","https://bbbb.com/abcdefghijklmnopqrstuwxyz/123456789","https://cccc.com/abcdefghijklmnopqrstuwxyz/123456789","https://dddd.com/abcdefghijklmnopqrstuwxyz/123456789","https://eeee.com/abcdefghijklmnopqrstuwxyz/123456789","https://ffff.com/abcdefghijklmnopqrstuwxyz/123456789","https://gggg.com/abcdefghijklmnopqrstuwxyz/123456789","https://hhhh.com/abcdefghijklmnopqrstuwxyz/123456789","https://iiii.com/abcdefghijklmnopqrstuwxyz/123456789","https://jjjj.com/abcdefghijklmnopqrstuwxyz/123456789","https://kkkk.com/abcdefghijklmnopqrstuwxyz/123456789","https://llll.com/abcdefghijklmnopqrstuwxyz/123456789","https://mmmm.com/abcdefghijklmnopqrstuwxyz/123456789","https://nnnn.com/abcdefghijklmnopqrstuwxyz/123456789","https://oooo.com/abcdefghijklmnopqrstuwxyz/123456789","https://pppp.com/abcdefghijklmnopqrstuwxyz/123456789","https://qqqq.com/abcdefghijklmnopqrstuwxyz/123456789","https://rrrr.com/abcdefghijklmnopqrstuwxyz/123456789","https://ssss.com/abcdefghijklmnopqrstuwxyz/123456789","https://tttt.com/abcdefghijklmnopqrstuwxyz/123456789","https://uuuu.com/abcdefghijklmnopqrstuwxyz/123456789","https://vvvv.com/abcdefghijklmnopqrstuwxyz/123456789","https://wwww.com/abcdefghijklmnopqrstuwxyz/123456789","https://xxxx.com/abcdefghijklmnopqrstuwxyz/123456789","https://yyyy.com/abcdefghijklmnopqrstuwxyz/123456789","https://zzzz.com/abcdefghijklmnopqrstuwxyz/123456789"]}},,,,,,,function(e,t,n){"use strict";n.d(t,"d",function(){return o}),n.d(t,"b",function(){return l}),n.d(t,"a",function(){return r}),n.d(t,"c",function(){return c});var a=n(4),i=n(48);const o=Object(a.c)(i.a).withConfig({displayName:"Title"})`
  font-weight: 500;
  font-size: 26px;
  margin: 0 0 20px 0;
`,l=Object(a.c)(i.a).withConfig({displayName:"SubTitle"})`
  font-weight: 500;
  font-size: 20px;
  margin: 20px 0 10px 0;
`,r=Object(a.c)("p").withConfig({displayName:"Paragraph"})`
  font-size: 16px;
  font-weight: 300;
  line-height: 1.75;
  margin: 0;
  font-family: 'Muli', sans-serif;
  padding: 0 0 10px 0
`,c=Object(a.c)("label").withConfig({displayName:"SwitchLabel"})`
  font-family: ${e=>e.theme.fontFamily.body};
  color: ${e=>e.theme.color.defaultControlActive};
  font-size: 14px;
  font-weight: 400;
  letter-spacing: normal;
  margin: 0 10px;
`},,,,,,,function(e,t,n){"use strict";var a=n(0),i=n(1);const o=Object(i.default)("div").withConfig({displayName:"StyledWrapper"})`
  display: flex;
`,l=Object(i.default)("div").withConfig({displayName:"StyleToggle"})`
  position: relative;
  display: block;
  height: ${e=>"small"===e.size?"16px":"24px"};
  width: ${e=>"small"===e.size?"28px":"40px"};

  ${e=>e.disabled?i.css`
      pointer-events: none;
      animation: none;
    `:""};
`,r=Object(i.default)("div").withConfig({displayName:"StyledSlider"})`
  background: ${e=>e.disabled?"#F6F6FA":"#A7ACB2"};
  height: ${e=>"small"===e.size?"6px":"8px"};
  margin-top: ${e=>"small"===e.size?"5px":"8px"};
  width: 100%;
  border-radius: 3px;
`,c=Object(i.default)("div").withConfig({displayName:"StyledBullet"})`
  position: relative;
  border-radius: 50%;
  transition: all .4s ease;
  ${e=>{let t=20,n=20,a=4,o="#6D73D2";return"small"===e.size&&(t=16,n=12,a=3),"light"===e.type&&(o="#fb542b"),e.checked||(n=-1,o="#CDD1D5"),e.disabled&&(o="#EBECF0"),i.css`
    --toggle-bullet-size: ${t}px;
    --toggle-bullet-transform: translate(${n}px, calc(-50% - ${a}px));
    --toggle-bullet-background: ${o};
  `}};
  width: var(--toggle-bullet-size);
  height: var(--toggle-bullet-size);
  transform: var(--toggle-bullet-transform);
  background-color: var(--toggle-bullet-background);
  box-shadow: 0 3px 3px rgba(0,0,0,0.05);
`,s=Object(i.default)("div").withConfig({displayName:"StyledText"})`
  color: #838391;
  font-size: ${e=>"small"===e.size?"12px":"14px"};
  font-family: Poppins, sans-serif;
  text-align: right;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  margin: ${e=>"small"===e.size?"0px":"4px"} 8px 0 0;
  opacity: ${e=>e.checked||e.disabled?0:1};
  transition: 100ms ease-out;
`;var d=n(2);n.d(t,"a",function(){return p});class p extends a.PureComponent{render(){const{id:e,onToggle:t,disabled:n,checked:i,type:p,size:u,testId:m}=this.props;return a.createElement(o,{id:e},a.createElement(s,{size:u,checked:i,disabled:n},Object(d.b)("off")),a.createElement(l,{"data-test-id":"toggle","data-test-id2":m,"data-toggled":i,onClick:n?void 0:t,size:u},a.createElement(r,{size:u,disabled:n}),a.createElement(c,{size:u,checked:i,type:p,disabled:n})))}}p.defaultProps={size:"large",type:"dark"}},function(e,t,n){"use strict";n.d(t,"c",function(){return l}),n.d(t,"b",function(){return r}),n.d(t,"l",function(){return c}),n.d(t,"a",function(){return s}),n.d(t,"e",function(){return d}),n.d(t,"f",function(){return p}),n.d(t,"d",function(){return u}),n.d(t,"g",function(){return m}),n.d(t,"k",function(){return h}),n.d(t,"i",function(){return g}),n.d(t,"h",function(){return f}),n.d(t,"j",function(){return b});var a=n(4),i=n(12),o=n(2);const l=Object(a.c)("label").withConfig({displayName:"Label"})`
  box-sizing: border-box;
  font-family: ${e=>e.theme.fontFamily.heading};
  font-size: ${e=>Object(o.e)(e.size,"16px","12px","18px")};
  font-weight: ${e=>Object(o.e)(e.size,"normal","500","500")};
  line-height: ${e=>Object(o.e)(e.size,"1","18px","27px")};
  color: ${e=>Object(o.e)(e.size,i.a.grey100,i.a.grey200,i.a.grey200)};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,r=Object(a.c)("em").withConfig({displayName:"Highlight"})`
  box-sizing: border-box;
  font-family: ${e=>e.theme.fontFamily.heading};
  color: ${e=>e.enabled?e.theme.color.brandBrave:i.a.grey300};
  font-size: ${e=>"large"===e.size?"22px":"inherit"};
  font-weight: 600;
  text-transform: uppercase;
  font-style: normal;
`,c=Object(a.c)("span").withConfig({displayName:"UnHighlight"})`
  box-sizing: border-box;
  color: ${i.a.grey400};
  font-weight: 300;
`,s=Object(a.c)("p").withConfig({displayName:"Description"})`
  box-sizing: border-box;
  color: ${e=>e.enabled?i.a.grey400:i.a.grey500};
  font-size: ${e=>e.enabled?"11px":"12px"};
  font-family: ${e=>e.theme.fontFamily.body};
  font-weight: normal;
  line-height: 18px;
  padding: 0;
  margin: ${e=>e.enabled?"0 0 10px":"0"};
  text-align: left;
`,d=Object(a.c)("span").withConfig({displayName:"ResourcesListAllowedLink"})`
  box-sizing: border-box;
  font-size: 13px;
  color: ${i.a.green500};
  vertical-align: middle;
  line-height: 1;
`,p=Object(a.c)(d).withConfig({displayName:"ResourcesListBlockedLink"})`
  color: ${i.a.red500};
`,u=Object(a.c)("a").withConfig({displayName:"Link"})`
  box-sizing: border-box;
  color: ${i.a.blue200};
  font-family: ${e=>e.theme.fontFamily.heading};
  font-size: 13px;
  font-weight: normal;
  text-decoration: underline;
  cursor: pointer;
  line-height: 1;

  &:hover {
    color: ${i.a.white};
  }
`,m=Object(a.c)("span").withConfig({displayName:"ResourcesListItem"})`
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
  display: inline-block;
  margin: 0 10px;
  vertical-align: middle;
  line-height: 1.5;
`,h=Object(a.c)("span").withConfig({displayName:"ResourcesSwitchLabel"})`
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  padding: 0 11px;
  user-select: none;
  pointer-events: ${e=>e.disabled?"none":null};
`,g=Object(a.c)("span").withConfig({displayName:"ResourcesStatusTitle"})`
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  padding: 0;
  font-size: 14px;
`,f=Object(a.c)("div").withConfig({displayName:"ResourcesListText"})`
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  line-height: 1;
  color: ${i.a.grey500};
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
  padding: 9px 25px;

  &:first-of-type {
    margin-top: 10px;
  }
`,b=Object(a.c)("span").withConfig({displayName:"ResourcesSubTitle"})`
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  padding: 0 5px;
  color: ${e=>"blocked"===e.accent?i.a.red500:i.a.green500};
`},,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.d(t,"b",function(){return o}),n.d(t,"a",function(){return l});var a=n(1),i=n(48);const o=Object(a.default)(i.a).withConfig({displayName:"Title"})`
  font-size: 28px;
  color: #212121;
  margin: 10px 0 0;
  text-align: center;
  line-height: 44px;
`,l=Object(a.default)("p").withConfig({displayName:"Paragraph"})`
  display: block;
  -webkit-font-smoothing: antialiased;
  font-size: 17px;
  color: #76777A;
  line-height: 32px;
  text-align: center;
  margin: 10px 0 20px;
  font-family: Muli, sans-serif;
`},function(e,t,n){"use strict";var a=n(0),i=n(1),o=n(2);const l=Object(i.default)("div").withConfig({displayName:"StyledGrid"})`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(${e=>e.columns?e.columns:"12"}, 1fr);
  grid-gap: ${e=>Object(o.d)(e.customStyle,"gridGap")||"15px"};
  padding: ${e=>Object(o.d)(e.customStyle,"padding")||"0"};
  margin: ${e=>Object(o.d)(e.customStyle,"margin")||"0"};
  max-width: ${e=>Object(o.d)(e.customStyle,"maxWidth")||"initial"};
  height: ${e=>Object(o.d)(e.customStyle,"height")||"initial"};
  color: ${e=>Object(o.d)(e.customStyle,"color")||"inherit"};
  background-color: ${e=>Object(o.d)(e.customStyle,"backgroundColor")||"inherit"};
  font-family: inherit;
  font-size: inherit;
  align-items: ${e=>Object(o.d)(e.customStyle,"alignItems")||"flex-start"};

  ${e=>e.disabled?i.css`
      user-select: none;
      opacity: 0.25;
    `:""}
`,r=Object(i.default)("div").withConfig({displayName:"StyledColumn"})`
  box-sizing: border-box;
  position: relative;
  display: flex;
  grid-column: ${e=>e.size?`span ${e.size}`:"span 12"};
  justify-content: ${e=>Object(o.d)(e.customStyle,"justifyContent")||"initial"};
  align-items: ${e=>Object(o.d)(e.customStyle,"alignItems")||"initial"};
  background-color: ${e=>Object(o.d)(e.customStyle,"backgroundColor")||"inherit"};
  flex-direction: ${e=>Object(o.d)(e.customStyle,"flexDirection")||"initial"};
  flex-wrap:${e=>Object(o.d)(e.customStyle,"flexWrap")||"initial"};
  overflow: ${e=>Object(o.d)(e.customStyle,"overflow")};
  font-family: inherit;
  font-size: inherit;
  color: inherit;
`;n.d(t,"b",function(){return c}),n.d(t,"a",function(){return s});class c extends a.PureComponent{render(){const{id:e,disabled:t,columns:n,customStyle:i,onClick:o,children:r,className:c}=this.props;return a.createElement(l,{id:e,disabled:t,className:c,customStyle:i,onClick:o,columns:n},r)}}c.defaultProps={disabled:!1};class s extends a.PureComponent{render(){const{id:e,size:t,customStyle:n,children:i,onClick:o,className:l}=this.props;return a.createElement(r,{id:e,size:t,className:l,customStyle:n,onClick:o},i)}}},function(e,t,n){"use strict";var a=n(0),i=n(1);const o=Object(i.default)("div").withConfig({displayName:"StyledWrapper"})`
  width: 100%;
`,l=Object(i.default)("div").withConfig({displayName:"StyledSelectWrapper"})`
  position: relative;
  outline: 0;
  font-family: Muli, sans-serif;
`,r=Object(i.default)("div").withConfig({displayName:"StyledSelect"})`
  border-radius: 3px;
  font-size: 14px;
  width: 100%;
  padding: ${e=>e.floating?0:8}px 0;
  display: flex;
  align-items: center;
  ${e=>{let t="#686978",n="#DFDFE8";"dark"===e.type&&(t="#fff",n="#686978"),e.show&&(n="#A1A8F2"),e.disabled&&(n="#E5E5EA",t="#D1D1DB","dark"===e.type&&(t="#686978",n="#686978"));let a=`1px solid ${n}`;return e.floating&&(a="none"),i.css`
    --select-select-color: ${t};
    --select-select-border: ${a};
  `}};
  color: var(--select-select-color);
  border: var(--select-select-border);
`,c=Object(i.default)("div").withConfig({displayName:"StyledSelectArrow"})`
  margin-right: ${e=>e.floating?-9:15}px;
  flex-basis: 33px;
  flex-shrink: 0;
  height: 11px;
  margin-top: ${e=>e.floating?-5:0}px;
`,s=Object(i.default)("div").withConfig({displayName:"StyledSelectText"})`
  flex-grow: 1;
  padding: ${e=>e.floating?0:"0 5px 0 13px"};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,d=Object(i.default)("div").withConfig({displayName:"StyledOptions"})`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  width: ${e=>e.showAllContents?"auto":"100%"};
  border-radius: 3px;
  box-shadow: 0 2px 5px 0 rgba(223, 223, 232, 0.5);
  background-color: #fff;
  border: solid 1px #dfdfe8;
  overflow: hidden;
  z-index: 2;
  display: ${e=>e.show?"block":"none"};
  padding: 9px 0;
`,p=Object(i.default)("div").withConfig({displayName:"StyledOption"})`
  font-size: 14px;
  line-height: 36px;
  color: #1b1d2f;
  position: relative;
  padding: 0 0 0 ${e=>e.showAllContents?4:12}px;
  display: flex;
  background: ${e=>e.selected?"#e9f0ff":"#fff"};
`,u=Object(i.default)("div").withConfig({displayName:"StyledOptionCheck"})`
  flex-basis: 11px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  color: #A1A8F2;
`,m=Object(i.default)("div").withConfig({displayName:"StyledOptionText"})`
  flex-grow: 1;
  padding: 0 21px 0 6px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ${e=>e.showAllContents?"initial":"ellipsis"};
`,h=Object(i.default)("div").withConfig({displayName:"StyledOptionsOverlay"})`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${e=>e.theme.color.modalOverlayBackground};
  align-items: center;
  z-index: 999;
  justify-content: center;
`,g=Object(i.default)("div").withConfig({displayName:"StyledOptionsModal"})`
  border-radius: 7px;
  background: ${e=>e.theme.color.primaryBackground};
  height: 30%;
  width: 50%;
  z-index: 9999;
  padding: 42px 55px 30px;

  @media (max-width: 767px) {
    width: 80%;
  }
  @media (max-height: 1080px) {
    height: 40%;
  }
  @media (max-height: 900px) {
    height: 55%;
  }
  @media (max-height: 620px) {
    height: 65%;
  }
  @media (max-height: 550px) {
    height: 75%;
  }
`,f=Object(i.default)("span").withConfig({displayName:"StyledSelectTitle"})`
  color: ${e=>e.theme.color.defaultControlActive};
  display: block;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 32px;
  margin-bottom: 30px;
  text-align: left;
`,b=Object(i.default)("div").withConfig({displayName:"StyledModalContent"})`
  display: block;
`,x=Object(i.default)("div").withConfig({displayName:"StyledRadioOptions"})`
  display: block;
  max-height: 250px;
  overflow-y: scroll;
`;var y=n(1263),C=n(712),v=n(13);n.d(t,"a",function(){return w});class w extends a.PureComponent{constructor(e){super(e),this.getRadioOptions=((e,t)=>{const n=this.state.value;let i={};return a.Children.map(t,(e,t)=>{if(void 0===e.props["data-value"])return null;const a=e.props["data-value"],o=a===n;return i[a]=o}),i}),this.onRadioOptionClick=((e,t,n,a)=>{this.setState({value:e,selected:n,radioShown:!1}),this.props.onChange&&this.props.onChange(e,n)}),this.onOverlayClick=(e=>{e.target.hasAttribute("data-overlay")&&this.setState({radioShown:!1})}),this.styledModalOverlay=((e,t)=>this.state.radioShown?a.createElement(h,{"data-overlay":"overlay",onClick:this.onOverlayClick},a.createElement(g,null,a.createElement(b,null,this.props.title?a.createElement(f,null,this.props.title):null,a.createElement(x,null,a.createElement(y.a,{size:"big",disabled:!1,onChange:this.onRadioOptionClick,value:this.getRadioOptions(e,t)},this.props.children))))):null),this.generateOptions=((e,t,n)=>{const i=this;return a.Children.map(t,(e,t)=>{if(void 0===e.props["data-value"])return null;const o=e.props.children,l=e.props["data-value"],r=l===i.state.value;return a.createElement(p,{showAllContents:n,key:`${i.props.id}-option-${t}`,onClick:i.onOptionClick.bind(i,l,e,o),selected:r},a.createElement(u,null,r?a.createElement(C.a,null):null),a.createElement(m,{showAllContents:n},o))})}),this.onOptionClick=((e,t,n)=>{this.setState({value:e,selected:n,show:!1}),this.props.onChange&&this.props.onChange(e,t)}),this.isTouchscreen=(()=>"ontouchstart"in window),this.onSelectClick=(()=>{this.isTouchscreen()?this.setState({radioShown:!0}):this.setState({show:!this.state.show})}),this.onBlur=(()=>{this.setState({show:!1})});const t=this.getDefaultValue(e);this.state={value:t.value,selected:t.selected,show:!1,radioShown:!1}}componentDidUpdate(e){if(e.value!==this.props.value){const e=this.getDefaultValue(this.props);this.setState({value:e.value,selected:e.selected,show:!1})}}getDefaultValue(e){const t=a.Children.toArray(e.children);let n;const i=(e.value||"").toString();return void 0===(n=t.find(e=>e.props["data-value"]===i))&&t&&(n=t.find(e=>e&&void 0!==e.props["data-value"])),n&&n.props?{value:n.props["data-value"],selected:n.props.children}:{value:"",selected:null}}render(){const{id:e,children:t,disabled:n,value:i,type:p,floating:u,showAllContents:m}=this.props,h=a.Children.count(t);let g=null;return h>0&&(g=this.generateOptions(i,t,m)),a.createElement(o,{id:e},h>0?a.createElement(l,{tabIndex:0,onBlur:this.onBlur},a.createElement(r,{onClick:n?void 0:this.onSelectClick,disabled:n,show:this.state.show,type:p,floating:u},a.createElement(s,{floating:u},this.state.selected),a.createElement(c,{floating:u},a.createElement(v.CaratDownIcon,null))),a.createElement(d,{show:this.state.show,showAllContents:m},g),this.styledModalOverlay(i,t)):null)}}w.defaultProps={type:"light"}},,,,,,,,,,,,function(e,t,n){"use strict";var a=n(12);const i={color:{brandBrave:a.a.orange400,brandBat:a.a.blurple400,brandBraveInteracting:a.a.orange500,brandBraveActive:a.a.orange200,brandBraveLight:a.a.orange000,brandBatInteracting:a.a.blurple500,brandBatActive:a.a.blurple200,defaultControl:a.a.grey800,defaultControlInteracting:a.a.black,defaultControlActive:a.a.grey700,warn:a.a.red500,warnInteracting:a.a.red600,warnActive:a.a.red700,subtle:a.a.grey400,subtleBackground:a.a.grey100,subtleExclude:a.a.grey300,subtleInteracting:a.a.grey500,subtleActive:a.a.grey600,disabled:a.a.grey300,primaryBackground:a.a.white,secondaryBackground:a.a.grey400,modalOverlayBackground:"rgba(36,37,54,0.85)",detailDescription:a.a.grey500},fontFamily:{heading:"Poppins, sans-serif",body:"Muli, sans-serif",system:'-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif'}};t.a=i},function(e,t,n){"use strict";var a=n(0),i=n(1);const o=Object(i.default)("div").withConfig({displayName:"StyledWrapper"})`
  position: relative;
  display: flex;
  border-bottom: solid 1px #E5E5EA;
  justify-content: space-between;
  align-items: baseline;
  align-content: flex-start;
  flex-wrap: nowrap;
  margin-bottom: 8px;
  font-family: Poppins, sans-serif;
`,l=Object(i.default)("div").withConfig({displayName:"StyledTitle"})`
  font-size: 16px;
  line-height: 1;
  color: #4b4c5c;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 50%;
  padding: 9px 0 15px;
`,r=Object(i.default)("div").withConfig({displayName:"StyledContentWrapper"})`
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 50%;
  text-align: right;
`;n.d(t,"a",function(){return c});class c extends a.PureComponent{render(){const{id:e,title:t,children:n}=this.props;return a.createElement(o,{id:e},a.createElement(l,null,t),a.createElement(r,null,n))}}},,,,function(e,t,n){e.exports=n.p+"static/media/bartBaker.4fcfa7f9.jpeg"},,,function(e,t,n){"use strict";var a=n(0),i=n(1);const o=Object(i.default)("div").withConfig({displayName:"StyledNoContent"})`
  text-align: center;
  padding: 30px 0;
  color: #999ea2;
  font-size: 14px;
`,l=Object(i.default)("table").withConfig({displayName:"StyledTable"})`
  width: 100%;
  margin-bottom: 20px;
`,r=Object(i.default)("th").withConfig({displayName:"StyledTH"})`
  text-transform: uppercase;
  text-align: left;
  font-family: Poppins, sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 2.33;
  border-bottom: 2px solid #dedfe4;
  border-top: 2px solid #dedfe4;
  color: #4B4C5C;
  padding: 9px 0;

  ${e=>e.customStyle?i.css`
      ${e.customStyle}
    `:""};
`,c=Object(i.default)("tr").withConfig({displayName:"StyledTR"})`
  ${e=>e.customStyle?i.css`
      ${e.customStyle}
    `:""};
`,s=Object(i.default)("td").withConfig({displayName:"StyledTD"})`
  font-family: Muli, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
  color: #686978;
  border-bottom: solid 1px #e4e8ec;
  padding: 9px 0;
  text-align: left;
  height: 42px;

  ${e=>e.customStyle?i.css`
      ${e.customStyle}
    `:""};
`;n.d(t,"a",function(){return d});class d extends a.PureComponent{render(){const{id:e,header:t,rows:n,children:i}=this.props;return a.createElement("div",{id:e},t&&t.length>0?a.createElement(l,null,t?a.createElement("thead",null,a.createElement("tr",null,t.map((t,n)=>a.createElement(r,{key:`${e}-th-${n}`,customStyle:t.customStyle},t.content)))):null,n?a.createElement("tbody",null,n.map((t,n)=>a.createElement(c,{key:n,customStyle:t.customStyle},t.content.map((t,i)=>a.createElement(s,{key:`${e}-td-${n}-${i}`,customStyle:t.customStyle},t.content))))):null):null,n&&0!==n.length?null:a.createElement(o,null,i))}}},,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return d});var a=n(0),i=n(49),o=n(225),l=n(157),r=n(76);const c=(e,t)=>a.createElement(i.m,{withStats:!1,onClick:t},a.createElement(o.b,null,a.createElement(l.f,null)),a.createElement(r.i,null,e)),s=(e,t,n)=>a.createElement(i.m,{withStats:!0,onClick:n},a.createElement(o.b,null,a.createElement(l.f,null)),a.createElement(i.q,null,e),a.createElement(r.i,null,t));class d extends a.PureComponent{render(){const{sitename:e,data:t,title:n,favicon:d,onToggle:p,dynamic:u,children:m}=this.props;return a.createElement(i.i,null,a.createElement(i.k,null,a.createElement(i.l,null,a.createElement("img",{src:d}),a.createElement(r.c,{size:"large"},e)),a.createElement(o.a,{onClick:p},a.createElement(l.c,null))),u?c(n,p):s(t,n,p),m)}}},function(e,t,n){"use strict";var a=n(0),i=n(715),o=n(1);const l=Object(o.default)("div").withConfig({displayName:"StyledWrapper"})`
  width: 100%;
  padding: 10px;
  border: 1px solid #DFDFE8;
  border-radius: 6px;
  font-family: ${e=>e.theme.fontFamily.body};

  &:focus-within {
    border-color: #A1A8F2;
    outline: none;
  }
`,r=Object(o.default)("textarea").withConfig({displayName:"StyledArea"})`
  min-height: 140px;
  box-sizing: border-box;
  width: 100%;
  font-family: inherit;
  border: 1px solid ${e=>e.disabled?"#E5E5EA":"#DFDFE8"};
  color: ${e=>e.disabled?"#D1D1DB":"#686978"};
  border-radius: 6px;
  padding: 15px 20px;
  font-size: 16px;
  line-height: 26px;

  &:disabled {
    background: #fff;
  }

  &:focus {
    border-color: #A1A8F2;
    outline: none;
  }
`,c=Object(o.default)("div").withConfig({displayName:"StyledFooter"})`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto;
  align-items: center;
  margin-top: 10px;
`,s=o.keyframes`
  0% {
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`,d=Object(o.default)("span").withConfig({displayName:"StyledText"})`
  opacity: 0;

${e=>e.visible&&o.css`
    animation-name: ${s};
    animation-duration: 2s;
    animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
    will-change: opacity;
  `}
`,p=Object(o.default)("div").withConfig({displayName:"StyledCopyToClipboard"})`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto;
  grid-gap: 10px;
  align-items: center;
`,u=Object(o.default)("button").withConfig({displayName:"StyledClipboardButton"})`
  width: 24px;
  height: 24px;
  padding: 0;
  margin: 0;
  background: transparent;
  border: 0;
  outline: none;
`;n.d(t,"a",function(){return m});class m extends a.PureComponent{constructor(e){super(e),this.onCopyToClipboard=(()=>{navigator.clipboard.writeText(this.value),this.setState({copiedStringVisible:!0})}),this.onAnimationEnd=(()=>{this.setState({copiedStringVisible:!1})}),this.state={copiedStringVisible:!1}}get emptyWordCount(){return""===this.props.value||""===this.props.defaultValue}get value(){return this.props.value||this.props.defaultValue}get wordCount(){return!this.value||this.emptyWordCount?0:this.value.trim().replace(/\s+/gi," ").split(" ").length}render(){const{id:e,value:t,defaultValue:n,readOnly:o,placeholder:s,disabled:m,onChange:h,copiedString:g,wordCountString:f}=this.props,{copiedStringVisible:b}=this.state;return a.createElement(l,{id:e},a.createElement(r,{disabled:m,value:t,readOnly:o,placeholder:s,defaultValue:n,onChange:h}),a.createElement(c,null,f," ",this.wordCount,a.createElement(p,null,a.createElement(d,{visible:b,onAnimationEnd:this.onAnimationEnd},g),a.createElement(u,{onClick:this.onCopyToClipboard},a.createElement(i.a,null)))))}}},function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"c",function(){return o}),n.d(t,"a",function(){return l}),n.d(t,"e",function(){return r}),n.d(t,"d",function(){return c});var a=n(4);const i=Object(a.c)("section").withConfig({displayName:"SectionBlock"})`
  margin: 10px 0 40px;
`,o=(Object(a.c)("footer").withConfig({displayName:"EnabledContentButtonGrid"})`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-gap: 5px;
  margin: 10px 5px 0;
`,Object(a.c)("footer").withConfig({displayName:"SettingsToggleGrid"})`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 5px;
  align-items: center;
  margin: 15px 0 0;
`),l=Object(a.c)("footer").withConfig({displayName:"DisabledContentButtonGrid"})`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr;
  grid-gap: 10px;
  margin: 20px 0;
`,r=Object(a.c)("div").withConfig({displayName:"TableGrid"})`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 20px;
`,c=Object(a.c)("div").withConfig({displayName:"TableButtonGrid"})`
  display: grid;
  grid-template-rows: 40px 40px;
  grid-gap: 15px;
`},,,,,function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return s});var a=n(0),i=n(351),o=n(76),l=n(49),r=n(10),c=n(15);class s extends a.PureComponent{render(){const{list:e,onClickDismiss:t}=this.props;return a.createElement(a.Fragment,null,a.createElement(i.d,null,e.map((e,t)=>a.createElement(o.h,{title:e,key:t},e))),a.createElement(l.e,null,a.createElement(r.a,{level:"primary",type:"accent",text:c.a.goBack,onClick:t})))}}},function(e,t,n){e.exports=n.p+"static/media/sync_add_icon.32ad310e.svg"},,function(e,t,n){"use strict";var a=n(0),i=n(1);const o=Object(i.default)("div").withConfig({displayName:"StyledText"})`
  font-family: Muli, sans-serif;
  font-size: 14px;
  line-height: 1.29;
  text-align: right;
  color: #686978;
`,l=Object(i.default)("button").withConfig({displayName:"StyledRemove"})`
  margin: 0 8px;
  background: none;
  border: none;
  cursor: pointer;
  width: 12px;
  height: 12px;
  color: #B8B9C4;
  padding: 0;
`,r=Object(i.default)("div").withConfig({displayName:"StyledTHOther"})`
  text-align: right;
`,c=Object(i.default)(r).withConfig({displayName:"StyledTHLast"})`
  padding-right: 10px;
`,s=Object(i.default)("div").withConfig({displayName:"StyledToggleWrap"})`
  text-align: right;
`,d=Object(i.default)("button").withConfig({displayName:"StyledToggle"})`
  font-family: Poppins, sans-serif;
  font-size: 13px;
  color: #4c54d2;
  text-transform: capitalize;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
`,p=Object(i.default)("a").withConfig({displayName:"StyledLink"})`
  text-decoration: none;
`,u=Object(i.default)("div").withConfig({displayName:"StyledRestoreSites"})`
  padding-top: 15px;
  margin-bottom: -20px;
`;var m=n(115),h=n(198),g=n(2),f=n(24),b=n(688),x=n(825),y=n(340);n.d(t,"a",function(){return C});class C extends a.PureComponent{constructor(){super(...arguments),this.getHeader=(e=>{if(!e)return;this.props.showRemove&&e.push("");let t={};return this.props.headerColor&&(t={border:"none","border-bottom":"1px solid #9F22A1",padding:"0",color:"#9F22A1"}),e.map((n,i)=>({content:0===i?a.createElement("div",null,n):i===e.length-1?a.createElement(c,null,n):a.createElement(r,null,n),customStyle:t}))}),this.getRows=(e=>{if(e)return e.map(e=>{const t={content:[{content:a.createElement(p,{href:e.url,target:"_blank"},a.createElement(h.a,{title:e.profile.name,provider:e.profile.provider,verified:e.profile.verified,src:e.profile.src,tableCell:this.props.isMobile}))},{content:a.createElement(o,null,e.attention,"%")}]};if(e.token&&t.content.push({content:a.createElement(f.a,{value:e.token.value,converted:e.token.converted,size:"small"}),customStyle:{textAlign:"right",paddingRight:"10px"}}),this.props.showRemove&&t.content.push({content:a.createElement(b.a,{content:Object(g.b)("excludeSite")},a.createElement(l,{onClick:e.onRemove},a.createElement(y.a,null))),customStyle:{textAlign:"right"}}),this.props.showRowAmount)if(this.props.showRemove){const n=(100-e.attention)/1.04;t.customStyle={background:`linear-gradient(\n              to right,\n              transparent 0%,\n              transparent ${n}%,\n              rgba(210, 198, 243, 0.39) ${n}%,\n              rgba(210, 198, 243, 0.39) 100%,\n              transparent 100%,\n              transparent 100%\n            )`}}else{const n=100-e.attention;t.customStyle={background:`linear-gradient(90deg, transparent ${n}%, rgba(210, 198, 243, 0.39) ${e.attention}%)`}}return t})})}render(){const{id:e,header:t,children:n,rows:i,allSites:o,onShowAll:l,onRestore:r,numExcludedSites:c}=this.props,p=this.props.numSites||0;return a.createElement("div",{id:e},a.createElement(m.a,{header:this.getHeader(t),children:n,rows:this.getRows(i)}),!o&&p>0?a.createElement(s,null,a.createElement(d,{onClick:l},Object(g.b)("seeAllSites",{numSites:p}))):null,o&&c&&c>0?a.createElement(u,null,a.createElement(x.a,{onRestore:r,numExcludedSites:c})):null)}}},function(e,t,n){"use strict";var a=n(0),i=n(1);const o=Object(i.default)("div").withConfig({displayName:"StyledCard"})`
  max-width: 100%;
  width: 100%;
  min-height: auto;
  margin: 0;
  padding: 30px 36px;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 1px 12px 0 rgba(99,105,110,0.18);
  font-size: inherit;
  box-sizing: border-box;
  position: relative;
`;n.d(t,"a",function(){return l});class l extends a.PureComponent{render(){const{testId:e,children:t,className:n}=this.props;return a.createElement(o,{className:n,"data-test-id":e},t)}}},function(e,t,n){"use strict";var a=n(0),i=n(1);const o=Object(i.default)("div").withConfig({displayName:"StyledWrapper"})`
  position: relative;
  display: flex;
  border-bottom: ${e=>"last"===e.border?"none":"1px solid #d0d6dc"};
  border-top: ${e=>"first"===e.border?"1px solid #d0d6dc":"none"};
  justify-content: space-between;
  align-items: baseline;
  align-content: flex-start;
  flex-wrap: nowrap;
  font-family: Poppins, sans-serif;
`,l=Object(i.default)("div").withConfig({displayName:"StyledTitle"})`
  font-size: 14px;
  line-height: 2.79;
  color: #4b4c5c;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 60%;
`,r=Object(i.default)("div").withConfig({displayName:"StyledContentWrapper"})`
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 40%;
  text-align: right;
`;var c=n(24);n.d(t,"a",function(){return s});class s extends a.PureComponent{render(){const{id:e,title:t,value:n,converted:i,isNegative:s,size:d,color:p,border:u}=this.props;return a.createElement(o,{id:e,border:u},a.createElement(l,null,t),a.createElement(r,null,a.createElement(c.a,{value:n,converted:i,isNegative:s,size:d,color:p})))}}s.defaultProps={border:"default"}},,function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"c",function(){return o}),n.d(t,"d",function(){return l}),n.d(t,"a",function(){return r});var a=n(4);const i=Object(a.c)("section").withConfig({displayName:"Grid"})`
  box-sizing: border-box;
  display: grid;
  height: 100%;
  grid-template-columns: 50% 50%;
  grid-template-areas:
    "header header"
    "content1 content2";

  grid-auto-rows: auto;
  grid-gap: 40px 30px;
  padding: 0;
  align-items: center;

  > *:first-child {
    grid-area: header;
  }

  > *:nth-child(2) {
    grid-area: content1;
  }

  > *:nth-child(3) {
    grid-area: content2;
  }

  @media screen and (max-width: 1170px) {
    grid-template-columns: 460px;
    justify-content: center;
    grid-template-areas:
    "header"
    "content1"
    "content2";
  }

  @media screen and (max-width: 490px) {
    /* TODO: @cezaraugusto this needs more love */
    zoom: 0.8;
  }
`,o=Object(a.c)("section").withConfig({displayName:"Grid2Columns"})`
  box-sizing: border-box;
  display: grid;
  height: 100%;
  padding: 0;
  align-items: center;
  grid-template-columns: 50% 50%;
  grid-gap: 40px 30px;
  grid-template-areas: "content1 content2";

  > *:first-child {
    grid-area: content1;
  }

  > *:nth-child(2) {
    grid-area: content2;
  }

  @media screen and (max-width: 1170px) {
    padding: 25px;
    grid-template-columns: 1fr;
    grid-template-areas:
    "image"
    "content";
  }

  @media screen and (max-width: 1170px) {
    grid-template-columns: 460px;
    justify-content: center;
    grid-template-areas:
    "header"
    "content1"
    "content2";
  }
`,l=Object(a.c)("section").withConfig({displayName:"HeaderGrid"})`
  box-sizing: border-box;
  display: grid;
  height: 100%;
  grid-template-columns: auto 1fr;
  grid-template-areas: "image content";

  grid-auto-rows: auto;
  grid-gap: 50px;
  padding: 0 50px;
  align-items: center;

  > *:first-child {
    grid-area: image;
  }

  > *:nth-child(2) {
    grid-area: content;
  }

  @media screen and (max-width: 1170px) {
    padding: 25px;
    grid-template-columns: 1fr;
    grid-template-areas:
    "image"
    "content";
  }
`,r=Object(a.c)("footer").withConfig({displayName:"ButtonGroup"})`
  display: flex;
  flex: 1;
  justify-content: flex-start;
`},function(e,t,n){"use strict";n.d(t,"d",function(){return p}),n.d(t,"e",function(){return u}),n.d(t,"g",function(){return m}),n.d(t,"f",function(){return h}),n.d(t,"c",function(){return g}),n.d(t,"b",function(){return f}),n.d(t,"a",function(){return b});var a=n(4),i=n(341),o=n(636),l=n(13),r=n(340),c=n(634),s=n(301),d=n(12);const p=Object(a.c)(i.a).withConfig({displayName:"LinkIcon"})`
  width: 24px;
  height: 24px;
  color: ${d.a.blue200};
`,u=Object(a.c)(o.a).withConfig({displayName:"ShieldIcon"})`
  width: 48px;
  height: 48px;
  color: ${d.a.grey600};
`,m=Object(a.c)(l.CaratDownIcon).withConfig({displayName:"ShowMoreIcon"})`
  width: 16px;
  height: 16px;
  color: ${d.a.blue200};
`,h=Object(a.c)(l.CaratUpIcon).withConfig({displayName:"ShowLessIcon"})`
  width: 16px;
  height: 16px;
  color: ${d.a.blue200};
`,g=Object(a.c)(r.a).withConfig({displayName:"CloseIcon"})`
  width: 16px;
  height: 16px;
  color: ${d.a.blue200};
`,f=Object(a.c)(c.a).withConfig({displayName:"BlockedScriptsIcon"})`
  width: 16px;
  height: 16px;
  color: ${d.a.red500};
`,b=Object(a.c)(s.a).withConfig({displayName:"AllowedScriptsIcon"})`
  width: 16px;
  height: 16px;
  color: ${d.a.green500};
`},function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return o}),n.d(t,"c",function(){return l}),n.d(t,"d",function(){return r});var a=n(4);const i=Object(a.c)("main").withConfig({displayName:"Main"})`
  font-family: ${e=>e.theme.fontFamily.body};
  color: ${e=>e.theme.color.defaultControl};
  max-width: 980px;
  padding: 40px;
  margin: auto;
`,o=(Object(a.c)("span").withConfig({displayName:"TableRowId"})`
  width: 5ch;
  text-align: center;
  display: block;
`,Object(a.c)("span").withConfig({displayName:"TableRowDevice"})`
  max-width: 30ch;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
`),l=Object(a.c)("span").withConfig({displayName:"TableRowRemove"})`
  display: block;
  text-align: center;
`,r=Object(a.c)("button").withConfig({displayName:"TableRowRemoveButton"})`
  text-align: center;
  padding: 0 6px;
  border: 0;
  background: transparent;
  cursor: pointer;
  display: block;
  margin: auto;
`},,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/guardian.88f2c74b.jpg"},,,,,,,,,,function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return f});var a=n(0),i=n(10),o=n(42),l=n(11),r=n(295),c=n(196),s=n(8),d=n(815),p=n.n(d),u=n(816),m=n.n(u),h=n(150),g=n.n(h);class f extends a.PureComponent{constructor(e){super(e),this.onClickPhoneTabletButton=(()=>{this.setState({scanCode:!this.state.scanCode})}),this.onClickComputerButton=(()=>{this.setState({addNewChainNoCamera:!this.state.addNewChainNoCamera})}),this.state={addNewChainNoCamera:!1,scanCode:!1}}render(){const{onClose:e,mainDeviceName:t}=this.props,{addNewChainNoCamera:n,scanCode:d}=this.state;return a.createElement(o.a,{id:"deviceTypeModal",onClose:e,size:"small"},d?a.createElement(c.default,{onClose:this.onClickPhoneTabletButton}):null,n?a.createElement(r.default,{onClose:this.onClickComputerButton}):null,a.createElement(l.f,null,a.createElement(l.g,{src:g.a}),a.createElement("div",null,a.createElement(l.i,{level:1},Object(s.a)("letsSync"),a.createElement("br",null),"“",t,"”."),a.createElement(l.h,null,Object(s.a)("chooseDeviceType")))),a.createElement(l.b,null,a.createElement(l.a,null,a.createElement(l.c,{src:p.a}),a.createElement(i.a,{level:"primary",type:"accent",size:"medium",onClick:this.onClickPhoneTabletButton,text:Object(s.a)("phoneTablet")})),a.createElement(l.a,null,a.createElement(l.c,{src:m.a}),a.createElement(i.a,{level:"primary",type:"accent",size:"medium",onClick:this.onClickComputerButton,text:Object(s.a)("computer")}))))}}},function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return g});var a=n(0),i=n(10),o=n(42),l=n(11),r=n(294),c=n(8),s=n(814),d=n.n(s),p=n(150),u=n.n(p),m=n(344),h=n.n(m);class g extends a.PureComponent{constructor(e){super(e),this.onClickEnterCodeWordsInstead=(()=>{this.setState({enterCodeWordsInstead:!this.state.enterCodeWordsInstead})}),this.state={enterCodeWordsInstead:!1}}render(){const{onClose:e}=this.props,{enterCodeWordsInstead:t}=this.state;return a.createElement(o.a,{id:"scanCodeModal",onClose:e,size:"small"},t?a.createElement(r.default,{fromMobileScreen:!0,onClose:this.onClickEnterCodeWordsInstead}):null,a.createElement(l.f,null,a.createElement(l.g,{src:u.a}),a.createElement("div",null,a.createElement(l.i,{level:1},Object(c.a)("scanThisCode")),a.createElement(l.h,null,Object(c.a)("scanThisCodeHowTo")))),a.createElement(l.m,null,a.createElement("div",null,a.createElement(l.d,{src:d.a})),a.createElement(l.l,null,a.createElement("img",{src:h.a}))),a.createElement(l.n,null,a.createElement(l.o,null,a.createElement(i.a,{level:"secondary",type:"accent",size:"medium",onClick:this.onClickEnterCodeWordsInstead,text:Object(c.a)("enterCodeWordsInstead")})),a.createElement(l.p,null,a.createElement(i.a,{level:"secondary",type:"accent",size:"medium",onClick:e,text:Object(c.a)("previous")}),a.createElement(i.a,{level:"primary",type:"accent",size:"medium",onClick:e,disabled:!0,text:Object(c.a)("lookingForDevice")}))))}}},,function(e,t,n){"use strict";var a=n(0),i=n(1);const o=Object(i.default)("div").withConfig({displayName:"StyledWrapper"})`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: flex-start;
  flex-wrap: nowrap;
  font-family: Poppins, sans-serif;
`,l=Object(i.default)("div").withConfig({displayName:"StyledImageWrapper"})`
  flex-basis: 30px;
  position: relative;
`,r=Object(i.default)("img").withConfig({displayName:"StyledImage"})`
  border-radius: 50%;

  ${e=>"big"===e.type?i.css`
      width: 48px;
      height: 48px;
    `:""};

  ${e=>"big"!==e.type?i.css`
      width: 24px;
      height: 24px;
    `:""};
`,c=Object(i.default)("span").withConfig({displayName:"StyledVerified"})`
  position: absolute;
  bottom: -1px;
  right: -3px;
  width: 19px;
  color: #392DD1;
`,s=Object(i.default)("div").withConfig({displayName:"StyledContent"})`
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 50%;
  margin-top: -5px;
  padding-left: ${e=>"big"===e.type?"11px":0};
`,d=Object(i.default)("div").withConfig({displayName:"StyledTitleWrap"})`
  ${e=>(e=>e?null:i.css`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  `)(e.provider)}
  max-width: ${e=>e.tableCell?235:260}px;
  margin-top: ${e=>"big"===e.type?2:0}px;
  margin-left: ${e=>"big"!==e.type?10:0}px;
`,p=Object(i.default)("span").withConfig({displayName:"StyledTitle"})`
  ${e=>"big"===e.type?i.css`
      font-size: 18px;
      font-weight: 500;
      line-height: 1.22;
      letter-spacing: -0.2px;
      color: #4B4C5C;
    `:""};

  ${e=>"big"!==e.type?i.css`
      font-family: Muli, sans-serif;
      font-size: 14px;
      font-weight: 600;
      line-height: 1.29;
      letter-spacing: -0.1px;
      color: #686978;
    `:""};
`,u=Object(i.default)("span").withConfig({displayName:"StyledProvider"})`
  padding-left: 5px;

  ${e=>"big"===e.type?i.css`
      font-weight: 300;
      font-size: 18px;
      letter-spacing: -0.2px;
    `:""};

  color: ${e=>"big"===e.type?"#4b4c5c":"#b8b9c4"};
`,m=Object(i.default)("div").withConfig({displayName:"StyledProviderWrap"})`
  display: flex;
  align-items: center;
  margin-bottom: -4px;
`,h=Object(i.default)("span").withConfig({displayName:"StyledVerifiedText"})`
  font-size: 12px;
  color: #838391;
  font-weight: 400;
  letter-spacing: 0;
  margin-left: 4px;
`,g=Object(i.default)("span").withConfig({displayName:"StyledInlineVerified"})`
  width: 19px;
  padding-top: 2px;
  margin-left: -2px;
  color: #392DD1;
`;Object(i.default)("span").withConfig({displayName:"StyledSubTitle"})`
  margin-top: 5px;
`;var f=n(2),b=n(724);n.d(t,"a",function(){return x});class x extends a.PureComponent{getProviderName(e){switch(e){case"youtube":return`${Object(f.b)("on")} YouTube`;case"twitter":return`${Object(f.b)("on")} Twitter`;case"twitch":return`${Object(f.b)("on")} Twitch`}}getSrc(e){return e||""}render(){const{id:e,type:t,provider:n,src:i,title:x,verified:y,tableCell:C}=this.props;return a.createElement(o,{id:e},a.createElement(l,null,a.createElement(r,{src:this.getSrc(i),type:t}),y&&"small"===t?a.createElement(c,null,a.createElement(b.a,null)):null),a.createElement(s,{type:t},a.createElement(d,{type:t,tableCell:C,provider:n},a.createElement(p,{type:t},x),n?a.createElement(u,{type:t},this.getProviderName(n)):null),y&&"big"===t?a.createElement(m,null,a.createElement(g,null,a.createElement(b.a,null))," ",a.createElement(h,null,Object(f.b)("verifiedPublisher"))):null))}}x.defaultProps={type:"small"}},function(e,t,n){"use strict";var a=n(0),i=n(1),o=n(2);const l=i.default.span`
  box-sizing: border-box;
  font-family: inherit;
  color: inherit;
  -webkit-font-smoothing: antialiased;
  user-select: none;
  cursor: default;
`,r=Object(i.default)(l.withComponent("h1")).withConfig({displayName:"StyledHeadingTitle"})`
  margin: 0;
  font-weight: 400;
  white-space: nowrap;
  font-size: 28px;
  color: rgb(255, 80, 0);
`,c=i.default.sup`
  box-sizing: border-box;
  color: #999;
  font-size: 15px;
`,s=Object(i.default)(l.withComponent("h2")).withConfig({displayName:"StyledSectionHeading"})`
  color: rgb(68, 68, 68);
  font-size: 20px;
  margin: 0 0 20px;
  font-weight: 400;
`,d=Object(i.default)(l.withComponent("h2")).withConfig({displayName:"StyledFeatureHeading"})`
  color: #444444;
  font-weight: normal;
  font-size: 14px;
  margin: 18px 0 8px;
  min-width: 160px;
`,p=i.default.h1`
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  color: ${e=>Object(o.d)(e.customStyle,"color")};
  font-weight: ${e=>Object(o.d)(e.customStyle,"fontWeight")||"400"};
  font-family: ${e=>Object(o.d)(e.customStyle,"fontFamily")||"inherit"};
  margin: ${e=>Object(o.d)(e.customStyle,"margin")||"14px 0 22px"};
  font-size: ${e=>Object(o.d)(e.customStyle,"fontSize")||"30px"};
  text-align: ${e=>Object(o.d)(e.customStyle,"textAlign")||"left"};
  line-height: ${e=>Object(o.d)(e.customStyle,"lineHeight")||"44px"};
`,u=i.default.h2`
  /* TBD */
`,m=i.default.h3`
  /* TBD */
`,h=i.default.h4`
  /* TBD */
`,g=i.default.h5`
  /* TBD */
`,f=i.default.h6`
  /* TBD */
`;n.d(t,"d",function(){return b}),n.d(t,"c",function(){return x}),n.d(t,"a",function(){return y}),n.d(t,"b",function(){return C});class b extends a.PureComponent{render(){const{id:e,text:t,label:n}=this.props;return a.createElement(r,{id:e},t,n?a.createElement(c,null,n):null)}}class x extends a.PureComponent{render(){const{id:e,text:t}=this.props;return a.createElement(s,{id:e},t)}}class y extends a.PureComponent{render(){const{id:e,text:t}=this.props;return a.createElement(d,{id:e},t)}}class C extends a.PureComponent{render(){const{id:e,level:t,customStyle:n,text:i}=this.props;switch(t){case 1:return a.createElement(p,{id:e,customStyle:n},i);case 2:return a.createElement(u,{id:e,customStyle:n},i);case 3:return a.createElement(m,{id:e,customStyle:n},i);case 4:return a.createElement(h,{id:e,customStyle:n},i);case 5:return a.createElement(g,{id:e,customStyle:n},i);case 6:return a.createElement(f,{id:e,customStyle:n},i);default:return a.createElement(p,{id:e,customStyle:n},i)}}}},,function(e,t,n){"use strict";var a=n(0),i=n(1);const o=Object(i.default)("div").withConfig({displayName:"StyledLabel"})`
  font-family: Poppins, sans-serif;
  line-height: 1.3;
  display: flex;
  margin-bottom: 20px;
  ${e=>{let t="#686978",n=14;return"big"===e.size&&(n=16),"dark"===e.type&&(t="#B8B9C4"),i.css`
    --checkbox-label-color: ${t};
    --checkbox-label-size: ${n}px;
  `}};
  color: var(--checkbox-label-color);
  font-size: var(--checkbox-label-size);
  cursor: pointer;
`,l=Object(i.default)("span").withConfig({displayName:"StyledBox"})`
  border-radius: 2px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2.5px;
  ${e=>{let t=18,n="#D1D1DB",a="#696FDC",o=12;return"big"===e.size&&(t=24,o=17),"dark"===e.type&&(a="#A1A8F2"),e.selected&&(n="dark"===e.type?"#696FDC":"#A1A8F2"),e.disabled&&(n="dark"===e.type?"#686978":"#EBECF0"),i.css`
    --checkbox-box-size: ${t}px;
    --checkbox-box-borderColor: ${n};
    --checkbox-box-color: ${a};
    --checkbox-box-spacing: ${o}px;
  `}};
  flex-basis: var(--checkbox-box-size);
  width: var(--checkbox-box-size);
  height: var(--checkbox-box-size);
  color: var(--checkbox-box-color);
  border: 1px solid var(--checkbox-box-borderColor);
  margin-right: var(--checkbox-box-spacing);
`,r=Object(i.default)("span").withConfig({displayName:"StyledText"})`
  flex: 1;
  padding-top: ${e=>"big"===e.size?"2px":"1px"};
  letter-spacing: 0;
  display: flex;
`;var c=n(712);n.d(t,"a",function(){return s});class s extends a.PureComponent{constructor(){super(...arguments),this.generateChecks=(e=>{const t=this;return a.Children.map(e,(e,n)=>{if(void 0===e.props["data-key"])return null;const i=e.props.children,s=e.props["data-key"],d=t.props.value[s]||!1;return a.createElement(o,{key:`checkbox-${n}`,onClick:t.props.disabled?void 0:t.onOptionClick.bind(t,s,e,d),type:t.props.type,size:t.props.size},a.createElement(l,{selected:d,type:t.props.type,disabled:t.props.disabled,size:t.props.size},d?a.createElement(c.a,null):null),a.createElement(r,{disabled:t.props.disabled,size:t.props.size},i))})}),this.onOptionClick=((e,t,n)=>{const a=this.props.multiple,i=this.props.value;let o={};n=!n,Object.keys(this.props.value).map(t=>{o[t]=!!a&&i[t],e===t&&(o[t]=n)}),this.props.onChange&&this.props.onChange(e,n,t,o)})}render(){const{id:e,children:t}=this.props;let n=null;return a.Children.count(t)>0&&(n=this.generateChecks(t)),a.createElement("div",{id:e},n)}}s.defaultProps={type:"light",size:"small",disabled:!1,multiple:!1}},,,,,,,,,,,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/sync_remove_icon.2a633b3f.svg"},function(e,t,n){"use strict";var a=n(0),i=n(7);const o=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},a.createElement("path",{d:"M26.43 6H7.57A2.6 2.6 0 0 0 5 8.64V12H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1v3.36A2.6 2.6 0 0 0 7.57 26H16a1 1 0 0 0 0-2H7.57a.61.61 0 0 1-.57-.64V20h5a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H7V8.64A.61.61 0 0 1 7.57 8h18.86a.61.61 0 0 1 .57.64V13a1 1 0 0 0 2 0V8.64A2.6 2.6 0 0 0 26.43 6zM11 18H5v-4h6z"}),a.createElement("path",{d:"M8.92 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM28 20h-3v-3a1 1 0 0 0-2 0v3h-3a1 1 0 0 0 0 2h3v3a1 1 0 0 0 2 0v-3h3a1 1 0 0 0 0-2z"}));t.a=Object(i.a)(o)},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(4);const o=Object(i.c)("div").withConfig({displayName:"Page"})`
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  background: linear-gradient(${e=>e.isPrivate?"#381980":"#5F0C8A"}, #0C041E);
  min-height: 100%;
  height: initial;
`,l=Object(i.c)("main").withConfig({displayName:"PageWrapper"})`
  box-sizing: border-box;
  padding: 85px 15px;
  max-width: 950px;
  margin: 0 auto;
`;var r=n(645),c=n(643),s=n(644),d=n(642);n.d(t,"default",function(){return p});class p extends a.PureComponent{get currentWindow(){const{isTor:e,isQwant:t}=this.props;return t&&e?a.createElement(d.default,null):t?a.createElement(c.default,null):e?a.createElement(s.default,null):a.createElement(r.default,null)}render(){const{isTor:e,isQwant:t}=this.props;return a.createElement(o,{isPrivate:!e&&!t},a.createElement(l,null,this.currentWindow))}}},function(e,t,n){"use strict";var a=n(0),i=n(1);const o=Object(i.default)("div").withConfig({displayName:"StyledWrapper"})`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  font-family: Poppins, sans-serif;
  border-radius: 8px;
  background-color: #fff;
  overflow: hidden;
  padding-left: 20px;
  margin-bottom: ${e=>e.isMobile?15:19}px;
  width: 100%;
  box-shadow: 0 1px 12px 0 rgba(99,105,110,0.18);
`,l=Object(i.default)("div").withConfig({displayName:"StyledIcon"})`
  flex-basis: 42px;
  height: 42px;
  width: 52px;
  flex-shrink: 0;
  color: #FF9868;
`,r=Object(i.default)("div").withConfig({displayName:"StyledText"})`
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 70%;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.25;
  color: #686978;
  padding: 0 10px;
`,c=Object(i.default)("button").withConfig({displayName:"StyledClaim"})`
  flex-basis: 90px;
  height: 64px;
  background-color: #fb542b;
  font-size: 12px;
  line-height: 1.83;
  letter-spacing: 0.8px;
  color: #fff;
  border: none;
  text-transform: uppercase;
  cursor: pointer;
  font-weight: 600;
`;var s=n(2),d=n(735);n.d(t,"a",function(){return p});class p extends a.PureComponent{render(){const{id:e,isMobile:t,onClaim:n}=this.props;return a.createElement(o,{id:e,isMobile:t},a.createElement(l,null,a.createElement(d.a,null)),a.createElement(r,null,Object(s.b)("newGrant")),a.createElement(c,{onClick:n},Object(s.b)("claim")))}}},function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"a",function(){return o});var a=n(4);const i=Object(a.c)("button").withConfig({displayName:"EmptyButton"})`
  box-sizing: border-box;
  display: flex;
  background: transparent;
  border: 0;
  padding: 0;
  margin: 0;
  cursor: pointer;

  &:disabled {
    opacity: 0.3;
    pointer-events: none;
  }
`,o=Object(a.c)("button").withConfig({displayName:"CloseButton"})`
  box-sizing: border-box;
  background: transparent;
  display: flex;
  border: 0;
  padding: 0;
  margin: 0;
  cursor: pointer;
`},function(e,t,n){"use strict";n.d(t,"b",function(){return c}),n.d(t,"c",function(){return s}),n.d(t,"d",function(){return d}),n.d(t,"e",function(){return p}),n.d(t,"a",function(){return u}),n.d(t,"f",function(){return m}),n.d(t,"g",function(){return h}),n.d(t,"h",function(){return g});var a=n(1),i=n(153);const o=a.keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,l=Object(a.default)("div").withConfig({displayName:"BaseGrid"})`
  box-sizing: border-box;
  display: grid;
  height: 100%;
`,r=Object(a.default)("div").withConfig({displayName:"BaseColumn"})`
  box-sizing: border-box;
  position: relative;
  display: flex;
`,c=(Object(a.default)(l).withConfig({displayName:"SelectGrid"})`
  display: grid;
  height: 100%;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr;
  padding: 0 30px;
  grid-gap: 30px;
  align-items: center;
`,Object(a.default)(l.withComponent("footer")).withConfig({displayName:"Footer"})`
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  padding: 0 50px 40px;
`),s=Object(a.default)(r).withConfig({displayName:"FooterLeftColumn"})`
  align-items: center;
  justify-content: flex-start;
`,d=Object(a.default)(r).withConfig({displayName:"FooterMiddleColumn"})`
  align-items: center;
  justify-content: center;
`,p=Object(a.default)(r).withConfig({displayName:"FooterRightColumn"})`
  align-items: center;
  justify-content: flex-end;
`,u=Object(a.default)("section").withConfig({displayName:"Content"})`
  opacity: 0;
  will-change: transform;
  transform: translateX(${e=>e.isPrevious?"-"+e.screenPosition:e.screenPosition}) scale(0.8);
  transition: opacity 1.5s, transform 1.5s ease-out;
  position: absolute;
  z-index: ${e=>e.zIndex};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 0 60px;

  ${e=>e.active&&a.css`
    opacity: 1;
    transform: translateX(0) scale(1);
  `}
`,m=Object(a.default)("div").withConfig({displayName:"Page"})`
  width: inherit%;
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
`,h=Object(a.default)(i.a).withConfig({displayName:"Panel"})`
  user-select: none;
  /* animation start state must be the same as "from" keyframe */
  opacity: 0;
  /* animation stuff courtesy of ross */
  animation-delay: 1s;
  animation-name: ${o};
  animation-duration: 2.5s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  /* end of animation stuff */
  position: relative;
  overflow: hidden;
  background-color: rgba(255,255,255,0.99);
  border-radius: 20px;
  box-shadow: 0 6px 12px 0 rgba(39, 46, 64, 0.2);
  max-width: 600px;
  min-height: 540px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0;
`,g=Object(a.default)("div").withConfig({displayName:"SlideContent"})`
  max-width: inherit;
  min-height: 540px;
  display: flex;
  justify-content: center;
  align-items: center;
`},function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"b",function(){return l}),n.d(t,"d",function(){return r}),n.d(t,"f",function(){return c}),n.d(t,"c",function(){return s}),n.d(t,"e",function(){return d});var a=n(1);const i=Object(a.default)("img").withConfig({displayName:"BaseImage"})`
  box-sizing: border-box;
  display: block;
  max-width: 100%;
`,o=Object(a.default)(i).withConfig({displayName:"BraveImage"})`
  height: 140px;
`,l=Object(a.default)(i).withConfig({displayName:"ImportImage"})`
  height: 190px;
`,r=Object(a.default)(i).withConfig({displayName:"SearchImage"})`
  height: 190px;
`,c=Object(a.default)(i).withConfig({displayName:"ThemeImage"})`
  height: 190px;
`,s=Object(a.default)(i).withConfig({displayName:"PaymentsImage"})`
  height: 190px;
`,d=Object(a.default)(i).withConfig({displayName:"ShieldsImage"})`
  height: 190px;
`},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/buzz.b2a58d99.jpg"},function(e,t,n){e.exports=n.p+"static/media/ddgo.68717410.jpg"},function(e,t,n){e.exports=n.p+"static/media/wiki.5f3474e7.jpg"},,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return m});var a=n(0),i=n(10),o=n(42),l=n(143),r=n(11),c=n(196),s=n(8),d=n(52),p=n(150),u=n.n(p);class m extends a.PureComponent{constructor(e){super(e),this.onClickUseCameraInsteadButton=(()=>{this.setState({useCameraInstead:!this.state.useCameraInstead})}),this.state={useCameraInstead:!1}}render(){const{fromMobileScreen:e,onClose:t}=this.props,{useCameraInstead:n}=this.state;return a.createElement(o.a,{id:"addNewChainCameraOptionModal",onClose:t,size:"small"},n?a.createElement(c.default,{onClose:this.onClickUseCameraInsteadButton}):null,a.createElement(r.f,null,a.createElement(r.g,{src:u.a}),a.createElement("div",null,a.createElement(r.i,{level:1},e?Object(s.a)("mobileEnterThisCode"):Object(s.a)("enterThisCode")),a.createElement(r.h,null,Object(s.a)("syncChainCodeHowTo")))),a.createElement(r.e,null,a.createElement(l.a,{copiedString:"Copied!",wordCountString:Object(s.a)("wordCount"),readOnly:!0,defaultValue:d.a.passphrase})),a.createElement(r.n,null,a.createElement(r.o,null,a.createElement(i.a,{level:"secondary",type:"accent",size:"medium",onClick:this.onClickUseCameraInsteadButton,text:Object(s.a)("useCameraInstead")})),a.createElement(r.p,null,a.createElement(i.a,{level:"secondary",type:"accent",size:"medium",onClick:t,text:Object(s.a)("previous")}),a.createElement(i.a,{level:"primary",type:"accent",size:"medium",onClick:t,disabled:!0,text:Object(s.a)("lookingForDevice")}))))}}},function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return u});var a=n(0),i=n(10),o=n(42),l=n(143),r=n(11),c=n(8),s=n(52),d=n(150),p=n.n(d);class u extends a.PureComponent{render(){const{onClose:e}=this.props;return a.createElement(o.a,{id:"addNewChainNoCameraModal",onClose:e,size:"small"},a.createElement(r.f,null,a.createElement(r.g,{src:p.a}),a.createElement("div",null,a.createElement(r.i,{level:1},Object(c.a)("enterThisCode")),a.createElement(r.h,null,Object(c.a)("syncChainCodeHowTo")))),a.createElement(r.e,null,a.createElement(l.a,{copiedString:"Copied!",wordCountString:"Word Count:",readOnly:!0,defaultValue:s.a.passphrase})),a.createElement(r.q,null,a.createElement(r.j,null,a.createElement(i.a,{level:"secondary",type:"accent",size:"medium",onClick:e,text:Object(c.a)("previous")})),a.createElement(i.a,{level:"primary",type:"accent",size:"medium",onClick:e,disabled:!0,text:Object(c.a)("lookingForDevice")})))}}},function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return m});var a=n(0),i=n(10),o=n(42),l=n(304),r=n(143),c=n(68),s=n(11),d=n(8),p=n(817),u=n.n(p);class m extends a.PureComponent{constructor(e){super(e),this.onEnterPassphrase=(e=>{this.setState({passphrase:e.target.value})}),this.onClickConfirmSyncCode=(()=>{this.setState({showAlert:!0})}),this.onClickInvalidCode=(()=>{this.setState({showAlert:!1})}),this.state={passphrase:"",showAlert:!1}}render(){const{onClose:e}=this.props,{showAlert:t}=this.state;return a.createElement(o.a,{id:"enterSyncCodeModal",onClose:e,size:"small"},t?a.createElement(l.a,{okString:Object(d.a)("ok"),onClickOk:this.onClickInvalidCode},a.createElement(c.d,{level:1},Object(d.a)("invalidCode")),a.createElement(c.b,null,Object(d.a)("tryAgain"))):null,a.createElement(s.f,null,a.createElement(s.g,{src:u.a}),a.createElement("div",null,a.createElement(s.i,{level:1},Object(d.a)("enterSyncCode")),a.createElement(s.h,null,Object(d.a)("enterSyncCodeDescription")))),a.createElement(s.e,null,a.createElement(r.a,{copiedString:Object(d.a)("copied"),wordCountString:Object(d.a)("wordCount"),value:this.state.passphrase,onChange:this.onEnterPassphrase})),a.createElement(s.q,null,a.createElement(s.j,null,a.createElement(i.a,{level:"secondary",type:"accent",size:"medium",onClick:e,text:Object(d.a)("cancel")})),a.createElement(i.a,{level:"primary",type:"accent",size:"medium",onClick:this.onClickConfirmSyncCode,text:Object(d.a)("confirmCode")})))}}},function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return p});var a=n(0),i=n(10),o=n(42),l=n(11),r=n(68),c=n(8),s=n(221),d=n.n(s);class p extends a.PureComponent{render(){const{onClose:e,otherDeviceName:t}=this.props;return a.createElement(o.a,{id:"removeMainDeviceModal",onClose:e,size:"small"},a.createElement(l.f,null,a.createElement(l.g,{src:d.a}),a.createElement(l.i,{level:1},Object(c.a)("remove")," “",t,"” ",Object(c.a)("thisSyncChain"))),a.createElement(l.e,null,a.createElement(r.a,null,Object(c.a)("otherDeviceRemovalDescription"))),a.createElement(l.q,null,a.createElement(l.j,null,a.createElement(i.a,{level:"secondary",type:"accent",size:"medium",onClick:e,text:Object(c.a)("cancel")})),a.createElement(i.a,{level:"primary",type:"accent",size:"medium",onClick:e,text:Object(c.a)("remove")})))}}},function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return p});var a=n(0),i=n(10),o=n(42),l=n(11),r=n(68),c=n(8),s=n(221),d=n.n(s);class p extends a.PureComponent{render(){const{onClose:e,mainDeviceName:t}=this.props;return a.createElement(o.a,{id:"removeMainDeviceModal",onClose:e,size:"small"},a.createElement(l.f,null,a.createElement(l.g,{src:d.a}),a.createElement(l.i,{level:1},Object(c.a)("remove")," “",t,"” ",Object(c.a)("thisSyncChain"),"?")),a.createElement(l.e,null,a.createElement(r.a,null,Object(c.a)("thisDeviceRemovalDescription")),a.createElement(r.a,null,Object(c.a)("joinSyncChain"))),a.createElement(l.q,null,a.createElement(l.j,null,a.createElement(i.a,{level:"secondary",type:"accent",size:"medium",onClick:e,text:Object(c.a)("cancel")})),a.createElement(i.a,{level:"primary",type:"accent",size:"medium",onClick:e,text:Object(c.a)("remove")})))}}},function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return u});var a=n(0),i=n(10),o=n(42),l=n(143),r=n(11),c=n(8),s=n(52),d=n(344),p=n.n(d);class u extends a.PureComponent{render(){const{onClose:e}=this.props;return a.createElement(o.a,{id:"viewSyncCodeModal",onClose:e,size:"small"},a.createElement(r.r,null,a.createElement("div",{style:{textAlign:"center"}},a.createElement(r.i,{level:3},Object(c.a)("qrCode")),a.createElement(r.k,{src:p.a})),a.createElement("div",null,a.createElement(r.i,{level:3},Object(c.a)("wordCode")),a.createElement(l.a,{copiedString:Object(c.a)("copied"),wordCountString:Object(c.a)("wordCount"),defaultValue:s.a.passphrase}))),a.createElement(r.q,null,a.createElement("div",null,Object(c.a)("privateKey")),a.createElement(i.a,{level:"primary",type:"accent",size:"medium",onClick:e,text:Object(c.a)("done")})))}}},function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return u});var a=n(0),i=n(10),o=n(42),l=n(304),r=n(68),c=n(11),s=n(8),d=n(221),p=n.n(d);class u extends a.PureComponent{constructor(e){super(e),this.onSetupSync=(()=>{this.setState({showAlert:!this.state.showAlert})}),this.onResetSync=(()=>{this.props.onClose()}),this.state={showAlert:!1}}render(){const{onClose:e,mainDeviceName:t}=this.props,{showAlert:n}=this.state;return a.createElement(o.a,{id:"resetSyncModal",onClose:e,size:"small"},n?a.createElement(l.a,{okString:Object(s.a)("ok"),onClickOk:this.onResetSync,cancelString:Object(s.a)("cancel"),onClickCancel:e},a.createElement(r.d,{level:1},Object(s.a)("areYouSure"))):null,a.createElement(c.f,null,a.createElement(c.g,{src:p.a}),a.createElement("div",null,a.createElement(c.h,{highlight:!0},Object(s.a)("warning")),a.createElement(c.i,{level:1},Object(s.a)("removing")," “",t,"” ",Object(s.a)("deleteSyncChain")))),a.createElement(c.e,null,a.createElement(r.a,null,Object(s.a)("deleteSyncDescription")),a.createElement(r.a,null,Object(s.a)("startSyncChainHowTo"))),a.createElement(c.q,null,a.createElement(c.j,null,a.createElement(i.a,{level:"secondary",type:"accent",size:"medium",onClick:e,text:Object(s.a)("cancel")})),a.createElement(i.a,{level:"primary",type:"accent",size:"medium",onClick:this.onSetupSync,text:Object(s.a)("remove")})))}}},function(e,t,n){"use strict";var a=n(0),i=n(7);const o=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},a.createElement("path",{d:"M16 3a13 13 0 1 0 13 13A13 13 0 0 0 16 3zm0 24a11 11 0 1 1 11-11 11 11 0 0 1-11 11z"}),a.createElement("path",{d:"M21.72 11.57l-7.57 7.63-3.9-3.91a1 1 0 1 0-1.42 1.42l4.62 4.61a1 1 0 0 0 .7.3 1 1 0 0 0 .7-.3L23.14 13a1 1 0 0 0 0-1.42 1 1 0 0 0-1.42-.01z"}));t.a=Object(i.a)(o)},function(e,t,n){"use strict";var a=n(0);var i=n(1).default.hr`
  box-sizing: border-box;
  background: #ccc;
  border: 0px;
  height: 1px;
  width: 100%;
  margin-top: ${e=>e.noMargin?"0":"10px"};
  margin-bottom: ${e=>e.noMargin?"0":"10px"};
`;t.a=class extends a.PureComponent{render(){return a.createElement(i,{noMargin:this.props.noMargin})}}},function(e,t,n){"use strict";var a=n(0),i=n(1);const o=Object(i.default)("button").withConfig({displayName:"StyledRemove"})`
  font-family: Muli, sans-serif;
  font-size: 14px;
  line-height: 1;
  margin-top: 3px;
  color: #d1d1db;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
`,l=Object(i.default)("span").withConfig({displayName:"StyledRemoveIcon"})`
  vertical-align: middle;
  color: #DFDFE8;
  width: 12px;
  height: 12px;
  display: inline-block;
  margin-right: 4px;
`,r=Object(i.default)("div").withConfig({displayName:"StyledType"})`
  font-family: Muli, sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.29;
  color: #686978;
`,c=Object(i.default)("div").withConfig({displayName:"StyledDate"})`
  font-family: Muli, sans-serif;
  font-size: 14px;
  line-height: 1;
  margin-top: 3px;
  color: #b8b9c4;
`,s=Object(i.default)("button").withConfig({displayName:"StyledToggle"})`
  font-family: Poppins, sans-serif;
  font-size: 13px;
  color: #4c54d2;
  text-transform: capitalize;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
`,d=Object(i.default)("div").withConfig({displayName:"StyledToggleWrap"})`
  text-align: right;
`,p=Object(i.default)("a").withConfig({displayName:"StyledLink"})`
  text-decoration: none;
`;var u=n(115),m=n(198),h=n(24),g=n(2),f=n(340);n.d(t,"a",function(){return b});class b extends a.PureComponent{getTypeContent(e){switch(e.type){case"recurring":return{content:a.createElement(a.Fragment,null,a.createElement(r,null,Object(g.b)("recurring")),a.createElement(o,{onClick:e.onRemove},a.createElement(l,null,a.createElement(f.a,null)),Object(g.b)("remove")))};case"donation":return{content:a.createElement(a.Fragment,null,a.createElement(r,null,Object(g.b)("oneTime")),a.createElement(c,null,e.text))};case"tip":return{content:a.createElement(a.Fragment,null,a.createElement(r,null,Object(g.b)("tipOnLike")),a.createElement(c,null,e.text))}}}getRows(e){if(e)return e.map(e=>({content:[{content:a.createElement(p,{href:e.url,target:"_blank"},a.createElement(m.a,{title:e.profile.name,provider:e.profile.provider,verified:e.profile.verified,src:e.profile.src}))},this.getTypeContent(e),{content:a.createElement(h.a,{value:e.contribute.tokens,converted:e.contribute.converted,size:"small"}),customStyle:{"text-align":"right",padding:"0 7px 0 10px","max-width":"80px"}}]}))}get headers(){let e={};return this.props.headerColor&&(e={border:"none","border-bottom":"1px solid #696FDC",padding:"0",color:"#696FDC"}),[{content:Object(g.b)("site"),customStyle:e},{content:Object(g.b)("type"),customStyle:e},{content:Object(g.b)("tokens"),customStyle:Object.assign({"text-align":"right","padding-right":"7px"},e)}]}render(){const{id:e,children:t,rows:n,allItems:i,onShowAll:o}=this.props,l=this.props.numItems||0;return a.createElement("div",{id:e},a.createElement(u.a,{children:t,rows:this.getRows(n),header:this.headers}),!i&&l>0?a.createElement(d,null,a.createElement(s,{onClick:o},Object(g.b)("seeAllItems",{numItems:l}))):null)}}},function(e,t,n){"use strict";var a=n(0),i=n(1);const o=Object(i.default)("div").withConfig({displayName:"StyledDialog"})`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 470px;
  height: 200px;
  overflow: hidden;
  margin: auto;
  padding: 30px 20px 10px;
  max-height: calc(100vh - 100px);
  display: grid;
  grid-template-rows: 1fr auto;
  overflow-y: auto;
  background: #fff;
  box-shadow: 1px 2px 18px 0 rgba(0,0,0,0.5);
  border-radius: 6px;
`,l=Object(i.default)("footer").withConfig({displayName:"StyledFooter"})`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 10px;
`,r=Object(i.default)("div").withConfig({displayName:"StyledCancelContainer"})`
  display: flex;
  justify-content: flex-end;
`;var c=n(10);n.d(t,"a",function(){return d});var s=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&(n[a[i]]=e[a[i]])}return n};class d extends a.PureComponent{render(){const e=this.props,{testId:t,children:n}=e,i=s(e,["testId","children"]),{colorType:d,onClickCancel:p,cancelString:u,onClickOk:m,okString:h}=i;return a.createElement(o,{"data-test-id":t},a.createElement("div",null,n),a.createElement(l,null,a.createElement(r,null,u?a.createElement(c.a,{type:d,level:"secondary",onClick:p,text:u}):null),a.createElement(c.a,{type:d,onClick:m,text:h})))}}d.defaultProps={colorType:"accent"}},function(e,t,n){"use strict";var a=n(0),i=n(1);const o={big:{paddingBox:"0 19px 0 55px",sendBgColor:"#4c54d2",disabledSendColor:"#3e45b2",paddingSend:"14px 0px 13px 0px",paddingFunds:"13px 12px 13px 24px"},small:{paddingBox:"0 0 0 23px",sendBgColor:"#392dd1",disabledSendColor:"#1a22a8",paddingSend:"11px 0 10px 47px",paddingFunds:"12px 0 11px 25px"}},l=Object(i.default)("div").withConfig({displayName:"StyledWrapper"})`
  position: relative;
  font-family: Poppins, sans-serif;
  margin: ${e=>e.isMobile?"0 auto 8px auto":0}px
  ${e=>{const t=o[e.donateType||"small"];return i.css`
    --donate-content-padding: ${t.paddingBox};
    --donate-send-bg: ${t.sendBgColor};
    --donate-send-color: ${e.disabled?t.disabledSendColor:"#fff"};
    --donate-send-padding: ${t.paddingSend};
    --donate-funds-padding: ${t.paddingFunds};
  `}}
`,r=Object(i.default)("div").withConfig({displayName:"StyledContent"})`
  margin-top: ${e=>e.isMobile?-30:0}px;
  padding: ${e=>e.isMobile?"0px":"var(--donate-content-padding)"};
`,c=Object(i.default)("div").withConfig({displayName:"StyledDonationTitle"})`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.75;
  color: #fff;
  margin-bottom: ${e=>e.isMobile?20:14}px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 167px;
  padding-left: ${e=>e.isMobile?20:0}px;
`,s=Object(i.default)("div").withConfig({displayName:"StyledSend"})`
  background: var(--donate-send-bg);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.2px;
  color: var(--donate-send-color);
  padding: var(--donate-send-padding);
  text-transform: uppercase;
  border: none;
  width: 100%;
  text-align: left;
  cursor: pointer;
`,d=Object(i.default)("button").withConfig({displayName:"StyledSendButton"})`
  display: block;
  border: none;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  background: var(--donate-send-bg);
`,p=Object(i.default)("div").withConfig({displayName:"StyledButtonWrapper"})`
  display: block;
  width: ${e=>e.isMobile?190:245}px;
  margin: 0 auto;
`,u=Object(i.default)("span").withConfig({displayName:"StyledIconSend"})`
  vertical-align: middle;
  display: inline-block;
  margin-right: 15px;
  color: ${e=>e.disabled?"small"===e.donateType?"#1A22A8":"#3e45b2":"#a1a8f2"};
  width: 27px;
  height: 27px;
`,m=Object(i.default)("div").withConfig({displayName:"StyledFunds"})`
  font-family: Muli, sans-serif;
  font-size: 13px;
  font-weight: 300;
  line-height: 1.69;
  color: #fff;
  padding: var(--donate-funds-padding);
  background: #1b1d2f;
  display: flex;
  position:absolute;
  bottom: 0;
  left: 0;
  z-index: 10;
  width: 100%;

  a {
    color: #6cc7fd;
    text-decoration: none;
  }
`,h=Object(i.default)("div").withConfig({displayName:"StyledIconFace"})`
  flex-basis: 32px;
  margin: -7px 6px 0 0;
`,g=Object(i.default)("div").withConfig({displayName:"StyledFundsText"})`
  flex: 1;
  margin-right: 9px;
`,f=Object(i.default)("div").withConfig({displayName:"StyledAmountsWrapper"})`
  width: 100%;
  display: block;
  ${e=>(e=>e?i.css`
    display: grid;
    grid-gap: 0px;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-content: center;
    padding: 0px 10px;
  `:null)(e.isMobile)}
`;var b=n(684),x=n(2),y=n(720),C=n(718);n.d(t,"a",function(){return v});class v extends a.PureComponent{constructor(e){super(e),this.validateDonation=(()=>{this.validateAmount(this.props.balance)||this.props.onDonate&&this.props.onDonate(this.props.currentAmount)}),this.onAmountChange=(e=>{this.validateAmount(this.props.balance,e),this.props.onAmountSelection&&this.props.onAmountSelection(e)}),this.state={missingFunds:!1}}componentDidUpdate(e){this.props.balance===e.balance&&this.props.donationAmounts===e.donationAmounts&&this.props.currentAmount===e.currentAmount||this.validateAmount(this.props.balance)}validateAmount(e,t){void 0===t&&(t=this.props.currentAmount);const n=t>e;return this.setState({missingFunds:n}),n}render(){const{id:e,donationAmounts:t,actionText:n,children:i,title:o,currentAmount:v,donateType:w,isMobile:E}=this.props,k=0===v;return a.createElement(l,{donateType:w,disabled:k,isMobile:E},a.createElement(r,{id:e,isMobile:E},a.createElement(c,{isMobile:E},o),a.createElement(f,{isMobile:E},t&&t.map(t=>a.createElement("div",{key:`${e}-donate-${t.tokens}`},a.createElement(b.a,{isMobile:E,amount:t.tokens,selected:t.tokens===v.toString(),onSelect:this.onAmountChange,converted:t.converted,type:w})))),i),a.createElement(s,{onClick:this.validateDonation},a.createElement(p,{isMobile:E},a.createElement(d,null,a.createElement(u,{disabled:k,donateType:w},a.createElement(y.a,null)),n))),this.state.missingFunds?a.createElement(m,null,a.createElement(h,null,a.createElement(C.a,null)),a.createElement(g,null,Object(x.b)("notEnoughTokens")," ",a.createElement("a",{href:"#"},Object(x.b)("addFunds")),".")):null)}}},function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return o}),n.d(t,"d",function(){return l}),n.d(t,"c",function(){return r});var a=n(1);const i=a.default.div.withConfig({displayName:"IconGrid"})`
  height: -webkit-fill-available;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  align-items: flex-start;
`,o=a.default.div.withConfig({displayName:"IconGridItem"})`
  max-width: 100px;
  width: 50%;
  display: flex;
  flex-direction: column;
  margin: 8px
`,l=a.default.div.withConfig({displayName:"IconGridItemTitle"})`
  flex: none;
  font: 600 10px Muli;
  color: #424242;
  padding: 4px;
  text-align: center;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`,r=a.default.div.withConfig({displayName:"IconGridItemIcon"})`
  flex: 1;
  color: #424242;
  padding: 18px;
`},function(e,t,n){"use strict";var a=n(0),i=n(1);const o=Object(i.default)("div").withConfig({displayName:"StyledWrapper"})`
  position: ${e=>e.fullScreen?"fixed":"absolute"};
  top: 0;
  left: 0;
  z-index: 6;
  display: flex;
  align-items: stretch;
  align-content: flex-start;
  flex-wrap: wrap;
  font-family: Poppins, sans-serif;
  background-color: ${e=>e.fullScreen?"#fff":"rgba(255, 255, 255, 0.95)"};
  overflow: hidden;
  width: 100%;
  padding: 0 52px 20px;
  border-radius: 6px;
  height: ${e=>e.fullScreen?"100%":"auto"};
  overflow-y: ${e=>e.fullScreen?"scroll":"hidden"};
`,l=Object(i.default)("div").withConfig({displayName:"StyledHeader"})`
  text-align: center;
  width: 100%;
  margin: 59px 0;
`,r=Object(i.default)("div").withConfig({displayName:"StyledTitle"})`
  width: 100%;
  font-size: 28px;
  font-weight: 500;
  line-height: 1.29;
  letter-spacing: -0.2px;
  text-align: center;
  color: #fb542b;
`,c=Object(i.default)("button").withConfig({displayName:"StyledClose"})`
  top: 16px;
  right: 16px;
  position: absolute;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  color: #B8B9C4;
  width: 20px;
  height: 20px;
`,s=Object(i.default)("div").withConfig({displayName:"StyledText"})`
  width: 100%;
  font-family: Muli, sans-serif;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.63;
  text-align: center;
  color: #4b4c5c;
`;var d=n(340),p=a.createElement("svg",{width:"156",height:"113",viewBox:"0 0 156 113",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},a.createElement("defs",null,a.createElement("polygon",{id:"path-1",points:"0.0886956522 0.893617021 0.0886956522 69.9970213 67.4116522 69.9970213 67.4116522 0.893617021"}),a.createElement("polygon",{id:"path-3",points:"0.0462004864 0.0934350621 36.9854441 0.0934350621 36.9854441 7.14052272 0.0462004864 7.14052272"})),a.createElement("g",{id:"settings",fill:"none",fillRule:"evenodd"},a.createElement("g",{id:"5-wallet-final",transform:"translate(-4563 -259)"},a.createElement("g",{id:"wallet",transform:"translate(4459 200)"},a.createElement("g",{id:"img",transform:"translate(86 20)"},a.createElement("g",{id:"gd",fill:"#FBA"},a.createElement("path",{d:"M19.4105105,127 C18.9278104,123.507807 18.6783446,119.941117 18.6783446,116.316161 C18.6783446,73.6156243 53.2939689,39 95.9945055,39 C138.695042,39 173.310666,73.6156243 173.310666,116.316161 C173.310666,119.941117 173.061201,123.507807 172.5785,127 L19.4105105,127 Z",id:"Combined-Shape"})),a.createElement("g",{id:"icn-blankslate-statement",transform:"translate(46 82)"},a.createElement("ellipse",{id:"Oval-2",fill:"#A2A5A9",cx:"29.5",cy:"33",rx:"22.5",ry:"4"}),a.createElement("ellipse",{id:"Oval-2",fill:"#A2A5A9",cx:"25.5",cy:"43",rx:"22.5",ry:"4"}),a.createElement("ellipse",{id:"Oval-2",fill:"#A2A5A9",cx:"28.5",cy:"57",rx:"22.5",ry:"4"}),a.createElement("path",{d:"M57.9903333,32.3313271 C57.89125,30.6858261 55.9277083,29.3978333 51.9909583,28.4155883 C52.123875,28.1278965 52.1987917,27.8269636 52.1987917,27.5164008 L52.1987917,20.7791153 L52.1855,20.7791153 C51.8350833,15.1649112 28.749875,15 26.1024167,15 C23.4489167,15 0.363708333,15.1649112 0.0145,20.7791153 L0,20.7791153 L0,27.5164008 C0.00483333333,29.3460728 2.374375,30.7797171 5.90029167,31.847427 C5.85316667,32.0075233 5.82416667,32.1676196 5.8145,32.3313271 L5.80120833,32.3313271 L5.80120833,39.0601866 C2.001,40.0388203 0.103916667,41.3075534 0.00966666667,42.9253686 L0,42.9253686 L0,49.6686729 C0.00483333333,50.9422209 1.156375,52.0195606 3.045,52.9223593 C2.97370833,53.1149564 2.92658333,53.3171833 2.91208333,53.5194102 L2.89758333,53.5194102 L2.89758333,60.2627144 C2.90725,63.4646404 10.1475833,65.4532049 18.1914583,66.3800782 C18.24825,66.3933193 18.3038333,66.4173939 18.3654583,66.4173939 C18.3847917,66.4173939 18.3992917,66.4077641 18.4174167,66.4029491 C19.970125,66.5774902 21.547,66.7135119 23.1045417,66.8122179 C23.1371667,66.8170328 23.1661667,66.8314776 23.1987917,66.8314776 C23.218125,66.8314776 23.232625,66.8218477 23.25075,66.8218477 C25.2287917,66.9386097 27.1778333,67 29,67 C30.8221667,67 32.7712083,66.9386097 34.74925,66.8218477 C34.767375,66.8218477 34.781875,66.8314776 34.8012083,66.8314776 C34.8338333,66.8314776 34.8628333,66.8122179 34.8954583,66.8122179 C36.453,66.7135119 38.029875,66.5774902 39.5825833,66.4029491 C39.6007083,66.4029491 39.6152083,66.412579 39.6345417,66.412579 C39.6961667,66.412579 39.75175,66.3885044 39.8085417,66.3800782 C47.8524167,65.44839 55.09275,63.4598255 55.1024167,60.2578995 L55.1024167,53.5194102 L55.0830833,53.5194102 C55.016625,52.3397532 54.0064583,51.3514896 52.0102917,50.529341 C52.1335417,50.251279 52.1987917,49.9647909 52.1987917,49.663858 L52.1987917,43.3671381 C55.6679167,42.3054469 57.9951667,40.8850436 58,39.0698164 L58,32.3313271 L57.9903333,32.3313271 Z M50.1603333,49.9792356 L49.8340833,50.2657237 C49.3241667,50.7123082 48.4795417,51.1588926 47.3654583,51.5910322 L47.3654583,47.0024075 C48.517,46.6027686 49.4945417,46.1609991 50.2690833,45.6758953 L50.2690833,49.663858 C50.2690833,49.7625639 50.2304167,49.8660849 50.1603333,49.9792356 Z M28.5420417,54.4498947 C28.4006667,54.4547096 28.2592917,54.4547096 28.1179167,54.4595245 C27.7723333,54.4691544 27.4182917,54.4691544 27.0690833,54.4739693 L27.0690833,49.663858 C27.3337083,49.659043 27.5983333,49.6542281 27.8665833,49.6494132 L28.0188333,49.6445983 C28.9903333,49.6313572 29.967875,49.5976527 30.93575,49.5555221 L30.93575,54.3608185 C30.7279167,54.3752633 30.5200833,54.3848932 30.31225,54.394523 C29.7274167,54.4173939 29.141375,54.4366536 28.5420417,54.4498947 Z M24.3225417,54.4643395 C23.8790833,54.4547096 23.435625,54.4462835 23.000625,54.4318387 L22.8350833,54.4270238 C22.311875,54.4077641 21.7874583,54.3897081 21.2690833,54.3608185 L21.2690833,49.5555221 C22.23575,49.6024676 23.2084583,49.6313572 24.1811667,49.6494132 C24.233125,49.6494132 24.2850833,49.6494132 24.3370417,49.6494132 C24.6004583,49.6542281 24.8650833,49.659043 25.1345417,49.663858 L25.1345417,54.4739693 C24.9460417,54.4739693 24.7563333,54.4739693 24.5726667,54.4691544 C24.4880833,54.4691544 24.4022917,54.4643395 24.3225417,54.4643395 Z M6.8585,52.2687331 C6.8295,52.2591032 6.796875,52.2494734 6.76908333,52.2398435 L6.76908333,47.5898285 C7.6705,47.834186 8.642,48.0556726 9.66666667,48.2578995 L9.66666667,52.9548601 C8.77975,52.7670779 7.96291667,52.569666 7.217375,52.3674391 C7.09895833,52.3349383 6.97570833,52.3012338 6.8585,52.2687331 Z M27.234625,60.2434547 C27.5040833,60.2482696 27.7675,60.2530846 28.032125,60.2578995 L28.032125,65.0680108 C26.6969167,65.058381 25.407625,65.0210653 24.1666667,64.959675 L24.1666667,60.1495636 C25.1345417,60.1965092 26.1060417,60.224195 27.0835833,60.2434547 C27.1355417,60.2434547 27.1826667,60.2434547 27.234625,60.2434547 Z M30.9164167,60.2434547 C31.8939583,60.224195 32.8654583,60.1916943 33.8333333,60.1495636 L33.8333333,64.9548601 C32.592375,65.0162504 31.3030833,65.058381 29.967875,65.0680108 L29.967875,60.2530846 C30.2325,60.2530846 30.4959167,60.2482696 30.765375,60.2434547 C30.8173333,60.2434547 30.8644583,60.2434547 30.9164167,60.2434547 Z M38.6666667,59.8065002 L38.6666667,64.5877219 C37.73625,64.6864279 36.7695833,64.7718929 35.7690833,64.8417093 L35.7690833,60.0364129 C36.7454167,59.9750226 37.7132917,59.8955763 38.6666667,59.8065002 Z M40.6024167,59.5994583 C41.5980833,59.4766777 42.5659583,59.340656 43.5,59.1901896 L43.5,63.9208546 C42.5889167,64.0797472 41.6210417,64.2266025 40.6024167,64.3626241 L40.6024167,59.5994583 Z M45.43575,58.8471261 C46.4592083,58.6448992 47.4319167,58.4234126 48.3333333,58.18387 L48.3333333,62.833885 C47.4742083,63.0830575 46.5015,63.3238038 45.43575,63.5489016 L45.43575,58.8471261 Z M12.56425,58.8471261 L12.56425,63.5489016 C11.4985,63.3238038 10.5257917,63.0830575 9.66666667,62.833885 L9.66666667,58.18387 C10.5680833,58.4234126 11.5407917,58.6497141 12.56425,58.8471261 Z M14.5,59.1901896 C15.4340417,59.345471 16.4019167,59.4814926 17.3975833,59.5994583 L17.3975833,64.3626241 C16.3789583,64.2266025 15.4110833,64.0797472 14.5,63.9208546 L14.5,59.1901896 Z M19.3333333,59.8065002 C20.2867083,59.8955763 21.2545833,59.9750226 22.2309167,60.0412278 L22.2309167,64.8417093 C21.2304167,64.7718929 20.26375,64.6864279 19.3333333,64.5877219 L19.3333333,59.8065002 Z M16.936,54.0454409 C16.8369167,54.0370147 16.7378333,54.0273849 16.642375,54.017755 C16.5722917,54.0081252 16.501,54.0033103 16.43575,53.9948841 L16.43575,49.2124586 C17.3842917,49.3063497 18.3521667,49.380981 19.3333333,49.4471863 L19.3333333,54.2476678 C18.5213333,54.1874812 17.719,54.121276 16.936,54.0454409 Z M14.5,49.0054168 L14.5,53.7685826 C13.4801667,53.6325609 12.5122917,53.4869094 11.6024167,53.3268131 L11.6024167,48.5961481 C12.5364583,48.7514294 13.5043333,48.8874511 14.5,49.0054168 Z M33.5119167,54.2007222 C33.3004583,54.215167 33.0829583,54.2344267 32.8654583,54.2476678 L32.8654583,49.4471863 C33.8478333,49.380981 34.8145,49.3063497 35.7690833,49.2124586 L35.7690833,53.9948841 C35.1685417,54.0550707 34.56075,54.116461 33.9324167,54.1682215 C33.7910417,54.1778513 33.6496667,54.1922961 33.5119167,54.2007222 Z M37.6987917,53.7685826 L37.6987917,49.0054168 C38.6944583,48.8874511 39.6623333,48.7514294 40.6024167,48.5961481 L40.6024167,53.3268131 C39.6913333,53.4869094 38.7234583,53.6373759 37.6987917,53.7685826 Z M42.532125,48.2530846 C43.561625,48.0556726 44.5295,47.8293711 45.43575,47.5898285 L45.43575,52.2398435 C44.5717917,52.4902197 43.6039167,52.7297623 42.532125,52.9548601 L42.532125,48.2530846 Z M29.3165833,43.8570569 C28.5891667,43.8377972 27.87625,43.8101113 27.1778333,43.7764069 C27.140375,43.7715919 27.1029167,43.7715919 27.06425,43.7715919 L27.06425,38.9614806 C28.0369583,39.0084261 29.0096667,39.0373157 29.9811667,39.0553717 C30.033125,39.0553717 30.0850833,39.0553717 30.1334167,39.0601866 C30.4016667,39.0650015 30.6662917,39.0650015 30.9309167,39.0698164 L30.9309167,43.8799278 C30.4632917,43.8751128 29.986,43.8702979 29.52925,43.8618718 C29.4579583,43.8570569 29.3866667,43.8570569 29.3165833,43.8570569 Z M6.76908333,30.0935901 L6.76908333,25.4435751 C7.6705,25.6831177 8.642,25.9046043 9.66666667,26.1068312 L9.66666667,30.8086067 C9.54825,30.7797171 9.42620833,30.7568462 9.30779167,30.7327716 C8.79304167,30.6208246 8.29279167,30.5028589 7.811875,30.3752633 C7.44816667,30.2861872 7.09895833,30.1874812 6.76908333,30.0935901 Z M24.3370417,27.5031598 C24.6004583,27.5079747 24.8650833,27.5127896 25.1345417,27.5127896 L25.1345417,32.322901 C23.8319583,32.3084562 22.5378333,32.2759555 21.2690833,32.2145652 L21.2690833,27.4092687 C22.23575,27.4513993 23.2084583,27.4839001 24.1811667,27.5031598 C24.233125,27.5031598 24.2850833,27.5031598 24.3370417,27.5031598 Z M28.0188333,27.4983449 C28.9903333,27.4790852 29.9630417,27.4513993 30.93575,27.4092687 L30.93575,32.2097502 C30.7702083,32.2193801 30.6095,32.2278062 30.4439583,32.2374361 C30.4355,32.2374361 30.421,32.2374361 30.4065,32.242251 C29.7552083,32.2711405 29.09425,32.2891965 28.423625,32.3036413 C28.3209167,32.3084562 28.217,32.3084562 28.1130833,32.3132711 C27.7675,32.3180861 27.4146667,32.322901 27.06425,32.322901 L27.06425,27.5127896 C27.3337083,27.5127896 27.5983333,27.5079747 27.8629583,27.5031598 L28.0188333,27.4983449 Z M50.04675,27.982245 L50.0189583,27.97743 L49.6649167,28.2506771 C49.155,28.6455011 48.3707917,29.0451399 47.3654583,29.435149 L47.3654583,24.8513392 C48.517,24.4553115 49.4945417,24.013542 50.2690833,23.5296419 L50.2690833,27.5127896 C50.2690833,27.6584412 50.188125,27.8173337 50.04675,27.982245 Z M37.6987917,31.6126994 L37.6987917,26.8543485 C38.6944583,26.7363828 39.6623333,26.6003611 40.6024167,26.4498947 L40.6024167,31.1709299 C39.6816667,31.3298224 38.718625,31.4802889 37.6987917,31.6126994 Z M42.532125,30.7989768 L42.532125,26.1068312 C43.561625,25.9046043 44.5295,25.6831177 45.43575,25.4435751 L45.43575,30.0839603 C44.5669583,30.3331327 43.5894167,30.5726753 42.532125,30.7989768 Z M35.7690833,27.0650015 L35.7690833,31.8426121 C34.8338333,31.9365032 33.8659583,32.026783 32.8654583,32.0965995 L32.8654583,27.3009329 C33.8478333,27.2347277 34.8145,27.1552814 35.7690833,27.0650015 Z M16.43575,31.8426121 L16.43575,27.0650015 C17.3842917,27.1552814 18.3521667,27.2347277 19.3333333,27.3009329 L19.3333333,32.0917845 C18.3521667,32.0219681 17.3794583,31.9413181 16.43575,31.8426121 Z M14.5,26.8543485 L14.5,31.6126994 C14.3066667,31.5886247 14.1085,31.5705688 13.92,31.5416792 C13.79675,31.5272344 13.6783333,31.5091785 13.5562917,31.4899187 C12.99925,31.4104725 12.451875,31.3250075 11.9177917,31.2359314 C11.8090417,31.2178754 11.7063333,31.1986157 11.6024167,31.179356 L11.6024167,26.4498947 C12.5364583,26.6003611 13.5043333,26.7363828 14.5,26.8543485 Z M24.8940833,43.6403852 C24.7611667,43.6259404 24.6342917,43.6163106 24.501375,43.6078844 C23.8839167,43.5609389 23.27975,43.5091785 22.688875,43.4477881 C22.562,43.4381583 22.4339167,43.4237135 22.311875,43.4104725 C22.282875,43.4104725 22.2599167,43.4056575 22.2309167,43.4008426 L22.2309167,38.6184171 C23.1855,38.7123082 24.1521667,38.7881432 25.1345417,38.8531447 L25.1345417,43.65483 C25.0535833,43.650015 24.9738333,43.6452001 24.8940833,43.6403852 Z M18.5068333,42.9205537 C18.125,42.8603671 17.766125,42.7941619 17.3975833,42.7279567 L17.3975833,38.0069215 C18.3376667,38.1573879 19.3055417,38.2946133 20.3012083,38.4113753 L20.3012083,43.1745411 C19.7067083,43.0999097 19.1303333,43.0144448 18.5732917,42.9301836 C18.5503333,42.9253686 18.531,42.9205537 18.5068333,42.9205537 Z M15.467875,37.663858 L15.467875,42.3572073 C14.3960833,42.1260909 13.4282083,41.8817334 12.56425,41.6325609 L12.56425,36.9957869 C13.4705,37.2413482 14.438375,37.4616311 15.467875,37.663858 Z M10.6345417,36.4083659 L10.6345417,40.9837496 C9.11445833,40.4011435 8.13208333,39.802889 7.81670833,39.2720433 L7.75025,39.1637075 C7.74541667,39.1312067 7.73575,39.1023172 7.73091667,39.0698164 L7.73091667,35.0830575 C8.50545833,35.5669576 9.483,36.0087271 10.6345417,36.4083659 Z M33.8188333,39.0553717 C34.7915417,39.0373157 35.76425,39.0084261 36.7309167,38.9614806 L36.7309167,43.766777 C35.4621667,43.8281673 34.172875,43.8618718 32.8654583,43.8751128 L32.8654583,39.0698164 C33.1349167,39.0650015 33.3995417,39.0650015 33.6629583,39.0601866 L33.8188333,39.0553717 Z M46.3081667,42.7520313 C45.8840417,42.8218477 45.4587083,42.8976828 45.0200833,42.9626843 C44.765125,43.0012037 44.5053333,43.0385194 44.250375,43.0758351 C44.0050833,43.1095396 43.750125,43.1372254 43.5,43.1697262 L43.5,38.4113753 C44.4956667,38.2946133 45.4635417,38.1573879 46.4024167,38.0069215 L46.4024167,42.7327716 C46.3697917,42.7375865 46.342,42.7472164 46.3081667,42.7520313 Z M39.76625,43.57418 C39.4025417,43.6030695 39.030375,43.6211255 38.6666667,43.650015 L38.6666667,38.8531447 C39.6478333,38.7881432 40.6157083,38.7123082 41.56425,38.6184171 L41.56425,43.3960277 C41.0035833,43.457418 40.4465417,43.5127896 39.8653333,43.5645501 C39.8327083,43.5645501 39.8000833,43.569365 39.76625,43.57418 Z M50.811625,41.7685826 C50.3295,41.9009931 49.8195833,42.0273849 49.3012083,42.1501655 C49.06075,42.2067409 48.81425,42.2585014 48.564125,42.313873 C48.4892083,42.3283178 48.40825,42.3475775 48.3333333,42.3608185 L48.3333333,37.663858 C49.3628333,37.4616311 50.3295,37.2413482 51.23575,36.9957869 L51.23575,41.6518206 C51.094375,41.6891363 50.953,41.726452 50.811625,41.7685826 Z M56.0557917,32.3975324 C55.9651667,33.0511586 54.4789167,33.9214565 51.826625,34.7387902 C48.404625,35.7884442 43.0517083,36.7514294 36.2693333,37.0523623 C35.92375,37.0668071 35.5745417,37.0812519 35.2253333,37.0944929 C34.9329167,37.1041228 34.6453333,37.1089377 34.3480833,37.1185676 C33.5505833,37.1378273 32.7385833,37.1462534 31.8975833,37.1462534 C31.062625,37.1462534 30.250625,37.1378273 29.4482917,37.1185676 C29.155875,37.1089377 28.8682917,37.0993079 28.5746667,37.0908817 C28.220625,37.0812519 27.87625,37.0668071 27.5270417,37.0523623 C20.7495,36.7514294 15.3965833,35.7884442 11.9745833,34.7351791 C9.34041667,33.9262714 7.859,33.0607884 7.74541667,32.4119771 C7.75025,32.3927174 7.75025,32.3782726 7.76475,32.3554017 C7.83,32.3698465 7.90129167,32.3830876 7.96775,32.4023473 C8.34475,32.4914234 8.73625,32.5768884 9.12895833,32.6611496 C11.0502083,33.0704183 13.1780833,33.4086669 15.4437083,33.6674692 C15.453375,33.6674692 15.4582083,33.6722841 15.467875,33.6722841 L15.4727083,33.6722841 C17.01575,33.8456214 18.6204167,33.9828468 20.26375,34.0815528 C20.2770417,34.0815528 20.2867083,34.0899789 20.3012083,34.0899789 C20.3060417,34.0899789 20.310875,34.085164 20.3193333,34.085164 C21.5047083,34.1513692 22.703375,34.2031297 23.9165417,34.2320193 C24.65725,34.2500752 25.3895,34.2597051 26.1024167,34.2597051 C26.6075,34.2597051 27.125875,34.2548902 27.655125,34.2452603 C34.6779583,34.1369245 41.18725,33.305146 45.7136667,32.0171532 C45.9263333,31.9557629 46.1293333,31.8943726 46.3275,31.8329822 C46.4495417,31.7956666 46.577625,31.7631658 46.6960417,31.7258501 C47.04525,31.6126994 47.3799583,31.4947337 47.705,31.376768 C47.7617917,31.358712 47.81375,31.3346374 47.8705417,31.3165814 C48.1448333,31.2130605 48.40825,31.1047246 48.6595833,30.9963888 C48.7296667,30.9638881 48.8057917,30.9301836 48.875875,30.9024977 C49.1453333,30.7797171 49.405125,30.6581402 49.6455833,30.5305447 C49.7495,30.4739693 49.84375,30.4137827 49.9476667,30.3572073 C50.06125,30.2910021 50.1784583,30.2211857 50.2872083,30.1549804 C50.3488333,30.1176648 50.420125,30.0791454 50.4757083,30.0418297 C54.8039583,30.9735179 55.9470417,31.9978935 56.0557917,32.3975324 Z M26.1024167,16.928378 C42.0415417,16.928378 50.1035417,19.4249172 50.2545833,20.8585615 C50.1361667,21.5121878 48.6499167,22.3728559 46.0254167,23.1817635 C42.6034167,24.2350286 37.2505,25.1992176 30.4729583,25.4953355 C30.12375,25.5085766 29.779375,25.5230214 29.4253333,25.5374661 C29.1317083,25.547096 28.844125,25.5567259 28.5517083,25.560337 C27.749375,25.5795967 26.937375,25.5940415 26.1024167,25.5940415 C25.2614167,25.5940415 24.4494167,25.5795967 23.6519167,25.560337 C23.3546667,25.5567259 23.0670833,25.547096 22.7746667,25.5374661 C22.420625,25.5230214 22.07625,25.5085766 21.7306667,25.4953355 C14.9482917,25.1992176 9.595375,24.2350286 6.173375,23.1817635 C3.55008333,22.3728559 2.062625,21.5121878 1.94904167,20.8585615 C2.10008333,19.4249172 10.1620833,16.928378 26.1024167,16.928378 Z M1.93575,27.5164008 L1.93575,23.5296419 C2.70425,24.013542 3.68179167,24.4553115 4.83333333,24.8513392 L4.83333333,29.4640385 C2.954375,28.7634667 1.93575,28.05808 1.93575,27.5164008 Z M6.61804167,40.842913 C6.63133333,40.8561541 6.65066667,40.8705989 6.67,40.8850436 C7.99070833,42.215167 10.7287917,43.2636172 14.141125,44.044839 C14.2220833,44.0592838 14.3018333,44.0773398 14.3815833,44.0965995 C14.6317083,44.1531748 14.8866667,44.2097502 15.1464583,44.2615107 C18.2760417,44.923563 22.0194583,45.4038519 26.09275,45.6433945 C26.0975833,45.6433945 26.0975833,45.6433945 26.0975833,45.6433945 C26.1024167,45.6433945 26.1024167,45.6433945 26.1024167,45.6433945 C27.4146667,45.7192296 28.749875,45.7697863 30.1189167,45.793861 C30.7230833,45.8083057 31.3175833,45.8179356 31.8975833,45.8179356 C32.5682083,45.8179356 33.2533333,45.8083057 33.9469167,45.789046 C35.2120417,45.7661751 36.4578333,45.7144147 37.6855,45.6433945 C37.689125,45.6433945 37.6939583,45.6433945 37.6987917,45.6433945 C37.7084583,45.6433945 37.7132917,45.6385796 37.7229583,45.6385796 C41.81075,45.399037 45.642375,44.9151369 48.8855417,44.2181763 C48.1822917,44.5804995 47.21925,44.9620825 46.0254167,45.3280169 C42.4149167,46.4426723 36.6463333,47.4538068 29.3214167,47.6885345 C29.1039167,47.6933494 28.8864167,47.7029792 28.6652917,47.7077942 C28.4284583,47.7126091 28.188,47.717424 27.9475417,47.7222389 C27.3385417,47.7306651 26.7295417,47.7402949 26.1024167,47.7402949 C25.2614167,47.7402949 24.4494167,47.7306651 23.6519167,47.7126091 C23.3546667,47.7029792 23.0670833,47.6933494 22.7746667,47.6837195 C22.420625,47.6752934 22.07625,47.6608486 21.7306667,47.6464039 C14.9482917,47.345471 9.595375,46.381282 6.173375,45.3280169 C3.51625,44.5106831 2.03,43.6403852 1.94420833,42.986759 C2.05295833,42.6244358 3.0305,41.7168221 6.61804167,40.842913 Z M1.93575,49.663858 L1.93575,45.6758953 C2.70425,46.1609991 3.68179167,46.6027686 4.83333333,47.0024075 L4.83333333,51.5910322 L4.281125,51.3803792 L4.27145833,51.3888053 C2.751375,50.7640686 1.93575,50.147758 1.93575,49.663858 Z M4.83333333,60.2578995 L4.83333333,56.2699368 C5.607875,56.7538369 6.58420833,57.1968101 7.73091667,57.596449 L7.73091667,62.2043334 C5.85316667,61.5037617 4.83333333,60.798375 4.83333333,60.2578995 Z M50.2690833,62.2043334 L50.2690833,57.596449 C51.4157917,57.1968101 52.392125,56.7538369 53.1666667,56.2699368 L53.1666667,60.2530846 C53.1666667,60.798375 52.1468333,61.5037617 50.2690833,62.2043334 Z M53.1521667,53.5940415 C53.04825,54.2440566 51.562,55.1083358 48.923,55.9220584 C45.5058333,56.9753235 40.1529167,57.9395125 33.3705417,58.2404454 C33.0213333,58.2548902 32.6769583,58.2681312 32.3229167,58.2777611 C32.0353333,58.2873909 31.7429167,58.2970208 31.4492917,58.3066506 C30.6469583,58.3198917 29.8349583,58.3343364 29,58.3343364 C28.1650417,58.3343364 27.3482083,58.3198917 26.5507083,58.3018357 C26.2570833,58.2970208 25.9695,58.2873909 25.6819167,58.2777611 C25.327875,58.2633163 24.9786667,58.2500752 24.6294583,58.2356305 C17.8470833,57.9395125 12.4941667,56.9753235 9.077,55.9220584 C6.51895833,55.1372254 5.04116667,54.2994282 4.8575,53.6554318 C5.14508333,53.7541378 5.44233333,53.8528438 5.74925,53.9467349 C5.781875,53.9563647 5.810875,53.9659946 5.8435,53.9756244 C6.10329167,54.0550707 6.37154167,54.1309058 6.64583333,54.2055372 C6.74975,54.2344267 6.85366667,54.2669275 6.95758333,54.2910021 C7.11345833,54.3331327 7.26933333,54.3752633 7.42883333,54.412579 C10.9499167,55.3105627 15.4437083,55.9509479 20.296375,56.2374361 C20.296375,56.2374361 20.296375,56.2374361 20.3012083,56.2374361 C21.8019583,56.3216973 23.3317083,56.3782726 24.8795833,56.3975324 C25.2904167,56.4059585 25.70125,56.4059585 26.1024167,56.4059585 C26.6304583,56.4059585 27.1778333,56.4023473 27.7300417,56.3927174 C29.141375,56.3686428 30.5345833,56.3168823 31.8939583,56.2374361 C31.8975833,56.2374361 31.8975833,56.2374361 31.9024167,56.2374361 C31.90725,56.2374361 31.90725,56.2374361 31.9120833,56.2374361 C33.5687083,56.1339151 35.173375,55.9930785 36.717625,55.8185375 C36.7224583,55.8185375 36.7272917,55.8185375 36.73575,55.8185375 C36.7550833,55.8185375 36.7744167,55.8089076 36.7925417,55.8089076 C38.5107917,55.6114956 40.139625,55.3671381 41.6500417,55.0854649 C41.9617917,55.0288896 42.2675,54.9723142 42.5695833,54.9109239 C42.640875,54.8976828 42.7073333,54.883238 42.7725833,54.8687933 C45.6290833,54.2861872 48.0977083,53.52904 49.796625,52.5925369 C49.8860417,52.5407764 49.9754583,52.4902197 50.06125,52.4384592 C50.17,52.3770689 50.2727083,52.3108637 50.373,52.2446584 C50.46725,52.1844719 50.5711667,52.1278965 50.65575,52.0665062 C52.5673333,52.7430033 53.09175,53.349684 53.1521667,53.5940415 Z M53.1666667,41.0162504 L53.1666667,36.4083659 C54.3182083,36.0087271 55.29575,35.5669576 56.06425,35.0830575 L56.06425,39.0698164 C56.06425,39.6102919 55.045625,40.3156786 53.1666667,41.0162504 Z",id:"coins",fill:"#000"}),a.createElement("ellipse",{id:"Oval-2",fill:"#A2A5A9",cx:"25.5",cy:"21",rx:"22.5",ry:"4"}),a.createElement("ellipse",{id:"Oval",fill:"#CBD2D7",cx:"66",cy:"35",rx:"33",ry:"34"}),a.createElement("g",{id:"coin",transform:"translate(32)"},a.createElement("g",{id:"Group-3"},a.createElement("mask",{id:"mask-2",fill:"#fff"},a.createElement("use",{xlinkHref:"#path-1"})),a.createElement("path",{d:"M37.2506957,0.893617021 C36.0444348,0.893617021 34.8544348,0.985957447 33.688087,1.14382979 C32.464087,0.981489362 31.3036522,0.893617021 30.1535652,0.893617021 C21.4525217,0.893617021 13.5985217,5.14574468 8.09052174,11.9297872 C8.03286957,11.9819149 7.99147826,12.04 7.94565217,12.0980851 C6.19095652,14.2919149 4.68313043,16.7478723 3.46504348,19.4004255 C3.42956522,19.4585106 3.4073913,19.5165957 3.38373913,19.5806383 C2.54113043,21.436383 1.84191304,23.3859574 1.2993913,25.4159574 C1.24765217,25.5261702 1.224,25.6542553 1.20626087,25.7823404 C0.427217391,28.8534043 0,32.0942553 0,35.4453191 C0,40.6938298 1.03330435,45.6668085 2.86486957,50.1304255 C2.88113043,50.1765957 2.89886957,50.222766 2.92252174,50.2629787 C4.0193913,52.9110638 5.40452174,55.3655319 7.02765217,57.5876596 C7.06756522,57.6457447 7.10304348,57.7053191 7.15478261,57.7514894 C8.80008696,59.973617 10.6833913,61.9574468 12.7618261,63.6448936 C12.8194783,63.7089362 12.8889565,63.7551064 12.9643478,63.807234 C17.8426087,67.7048936 23.7674783,69.9970213 30.1535652,69.9970213 C31.3036522,69.9970213 32.464087,69.9165957 33.688087,69.7468085 C34.8544348,69.9106383 36.0444348,69.9970213 37.2506957,69.9970213 C53.8811304,69.9970213 67.4116522,54.4987234 67.4116522,35.4453191 C67.4116522,16.3919149 53.8811304,0.893617021 37.2506957,0.893617021 Z M24.7667826,4.00638298 C24.3735652,4.21489362 23.9877391,4.42489362 23.6063478,4.6512766 C23.392,4.77340426 23.1732174,4.89553191 22.9647826,5.02361702 C22.6351304,5.22765957 22.3187826,5.44361702 21.9950435,5.65808511 L19.72,5.65808511 C21.4466087,4.84340426 23.2530435,4.20446809 25.1363478,3.80234043 C25.0092174,3.86638298 24.888,3.94234043 24.7667826,4.00638298 Z M12.8431304,55.703617 L8.60347826,55.703617 C7.55834783,54.2202128 6.63443478,52.6191489 5.82582609,50.9391489 L10.307913,50.9391489 C10.4926957,51.3576596 10.6833913,51.7761702 10.8844348,52.1887234 C10.9716522,52.3644681 11.0573913,52.5387234 11.1505217,52.7189362 C11.3929565,53.1955319 11.6413043,53.6676596 11.9073913,54.1323404 C12.0049565,54.3006383 12.098087,54.476383 12.1956522,54.6506383 C12.404087,55.0051064 12.6228696,55.353617 12.8431304,55.703617 Z M5.28330435,21.1519149 L9.81121739,21.1519149 C9.60278261,21.6687234 9.40617391,22.1989362 9.2213913,22.7276596 C9.16965217,22.8795745 9.11791304,23.0240426 9.06617391,23.17 C8.89913043,23.6823404 8.73652174,24.1991489 8.58721739,24.7234043 L3.97356522,24.7234043 C4.34756522,23.4961702 4.7866087,22.3031915 5.28330435,21.1519149 Z M2.36817391,35.4453191 C2.36817391,34.6425532 2.40808696,33.8517021 2.45982609,33.0668085 L7.17252174,33.0668085 C7.17252174,33.0831915 7.17252174,33.1010638 7.17252174,33.1189362 C7.12521739,33.8919149 7.09713043,34.666383 7.09713043,35.4453191 C7.09713043,35.8474468 7.10895652,36.2421277 7.11930435,36.6382979 L2.414,36.6382979 C2.39626087,36.2421277 2.36817391,35.8474468 2.36817391,35.4453191 Z M7.25826087,39.0242553 C7.29965217,39.5231915 7.35730435,40.0191489 7.42530435,40.5180851 C7.42530435,40.5538298 7.43121739,40.5880851 7.43713043,40.6238298 C7.52434783,41.2865957 7.62782609,41.9434043 7.74904348,42.5957447 L3.08365217,42.5957447 C2.85304348,41.4265957 2.67417391,40.233617 2.55295652,39.0242553 L7.25826087,39.0242553 Z M7.99147826,27.1093617 C7.95747826,27.2478723 7.93382609,27.3878723 7.90573913,27.5338298 C7.87026087,27.6902128 7.84217391,27.8421277 7.80669565,27.9985106 C7.66330435,28.7491489 7.53617391,29.4997872 7.43713043,30.2682979 C7.43121739,30.3025532 7.43121739,30.3382979 7.42530435,30.3785106 C7.40904348,30.4768085 7.40313043,30.5825532 7.39130435,30.6808511 L2.69634783,30.6808511 C2.85304348,29.47 3.04817391,28.2725532 3.32017391,27.1093617 L7.99147826,27.1093617 Z M8.27530435,44.9817021 C8.30930435,45.1261702 8.34478261,45.2721277 8.37878261,45.4180851 C8.39652174,45.4702128 8.40834783,45.5223404 8.41869565,45.5744681 C8.61530435,46.3012766 8.83556522,47.0176596 9.07208696,47.7206383 C9.11791304,47.8665957 9.16965217,48.0125532 9.2213913,48.1629787 C9.26869565,48.2910638 9.3086087,48.4251064 9.35443478,48.5531915 L4.79843478,48.5531915 C4.34756522,47.3959574 3.96765217,46.2029787 3.638,44.9817021 L8.27530435,44.9817021 Z M12.1956522,16.2474468 C12.098087,16.4157447 11.9990435,16.59 11.9073913,16.7642553 C11.6413043,17.2304255 11.3929565,17.7010638 11.1505217,18.1776596 C11.0573913,18.3534043 10.9716522,18.5276596 10.8844348,18.7078723 C10.8726087,18.7257447 10.8622609,18.7480851 10.8563478,18.7659574 L6.42156522,18.7659574 C7.31591304,17.0665957 8.34478261,15.4729787 9.4933913,14.0014894 L13.634,14.0014894 C13.4891304,14.21 13.3442609,14.4140426 13.2008696,14.63 C12.8534783,15.152766 12.5193913,15.6934043 12.1956522,16.2474468 Z M15.6488696,8.04404255 L18.9173043,8.04404255 C18.6231304,8.30021277 18.3274783,8.56085106 18.0451304,8.82893617 C17.8026957,9.05531915 17.578,9.29510638 17.34,9.52744681 C17.1093913,9.76574468 16.8787826,10.0040426 16.6481739,10.2482979 C16.427913,10.4806383 16.2150435,10.7204255 16.0006957,10.9587234 C15.81,11.1731915 15.6311304,11.3951064 15.4463478,11.6155319 L11.5437391,11.6155319 C12.8135652,10.2840426 14.1824348,9.08510638 15.6488696,8.04404255 Z M10.4350435,58.0821277 L14.4943478,58.0821277 C14.6273913,58.2638298 14.7589565,58.4380851 14.897913,58.6123404 C15.2556522,59.0665957 15.6193043,59.5029787 16.0006957,59.9334043 C16.2091304,60.1776596 16.427913,60.41 16.6481739,60.6423404 C16.8787826,60.8865957 17.1093913,61.1308511 17.345913,61.3691489 C17.4390435,61.4629787 17.5306957,61.567234 17.6238261,61.6610638 L14.0671304,61.6610638 C12.7677391,60.5902128 11.554087,59.3912766 10.4350435,58.0821277 Z M25.1363478,67.0882979 C22.4222609,66.5134043 19.8589565,65.4604255 17.4848696,64.0395745 L20.3438261,64.0395745 C20.4931304,64.1617021 20.6498261,64.2734043 20.8050435,64.383617 C21.0474783,64.5697872 21.289913,64.7559574 21.5441739,64.9302128 C22.0068696,65.256383 22.479913,65.5706383 22.9647826,65.8670213 C23.1732174,65.9951064 23.386087,66.117234 23.6004348,66.2453191 C23.9877391,66.4657447 24.3735652,66.6817021 24.7608696,66.8857447 C24.888,66.9497872 25.0092174,67.0242553 25.1363478,67.0882979 Z M37.2506957,67.6185106 C36.3090435,67.6185106 35.3866087,67.5604255 34.4671304,67.4546809 L34.0118261,67.3906383 C33.9482609,67.3802128 33.8846957,67.3742553 33.8211304,67.3623404 C33.4116522,67.3042553 33.0066087,67.2342553 32.6030435,67.1582979 C32.5675652,67.1523404 32.5394783,67.1404255 32.504,67.1359574 C32.1122609,67.06 31.7249565,66.9721277 31.3376522,66.8738298 C31.28,66.8619149 31.2223478,66.8440426 31.1646957,66.8276596 C30.8069565,66.7338298 30.4492174,66.6414894 30.095913,66.5297872 C29.9924348,66.4955319 29.8830435,66.4597872 29.7736522,66.4255319 C29.4735652,66.327234 29.172,66.2274468 28.8778261,66.1231915 C28.6353913,66.0293617 28.3988696,65.9370213 28.1623478,65.837234 C27.9997391,65.7731915 27.8326957,65.7151064 27.6774783,65.6465957 C21.3135652,62.9344681 16.042087,57.6055319 12.8313043,50.7931915 C12.8017391,50.7291489 12.7795652,50.6651064 12.75,50.6010638 C12.5770435,50.2346809 12.41,49.856383 12.2533043,49.4780851 C12.1838261,49.3276596 12.1261739,49.1757447 12.0685217,49.0238298 C11.9473043,48.7274468 11.826087,48.4310638 11.7166957,48.1287234 C11.6472174,47.9365957 11.5777391,47.7385106 11.5082609,47.546383 C11.4166087,47.2797872 11.3234783,47.0176596 11.2377391,46.7495745 C11.1682609,46.5291489 11.0987826,46.307234 11.0293043,46.0868085 C10.953913,45.8365957 10.8785217,45.5804255 10.8090435,45.3302128 C10.7410435,45.0978723 10.6833913,44.8595745 10.6198261,44.6257447 C10.5562609,44.3755319 10.4926957,44.1253191 10.4350435,43.8751064 C10.3773913,43.6308511 10.3241739,43.3925532 10.2724348,43.1482979 C10.2147826,42.8921277 10.1689565,42.6419149 10.1172174,42.3857447 C10.069913,42.1414894 10.024087,41.897234 9.98417391,41.6470213 C9.93834783,41.3848936 9.90286957,41.1182979 9.86295652,40.8561702 C9.82747826,40.6119149 9.78756522,40.373617 9.75947826,40.1293617 C9.724,39.8434043 9.69591304,39.5589362 9.66634783,39.2685106 C9.64269565,39.0406383 9.6146087,38.8202128 9.59686957,38.5923404 C9.56878261,38.2617021 9.55104348,37.9295745 9.5273913,37.5929787 C9.51704348,37.4068085 9.50521739,37.2206383 9.4933913,37.0285106 C9.47565217,36.5042553 9.45791304,35.9814894 9.45791304,35.4453191 C9.45791304,34.9165957 9.47565217,34.386383 9.4933913,33.863617 C9.50521739,33.6714894 9.51704348,33.4853191 9.5273913,33.2991489 C9.55104348,32.9670213 9.56878261,32.6304255 9.59686957,32.2982979 C9.6146087,32.0719149 9.64269565,31.85 9.66634783,31.623617 C9.69591304,31.3376596 9.724,31.047234 9.75947826,30.762766 C9.78756522,30.5185106 9.82747826,30.2787234 9.86295652,30.0344681 C9.90286957,29.7738298 9.93834783,29.5057447 9.98417391,29.243617 C10.024087,28.9993617 10.069913,28.7551064 10.1172174,28.5108511 C10.1689565,28.2546809 10.2206957,27.9985106 10.2724348,27.7423404 C10.3241739,27.4980851 10.3773913,27.2597872 10.4350435,27.0214894 C10.4926957,26.7653191 10.5562609,26.5151064 10.6198261,26.2648936 C10.6833913,26.0325532 10.7410435,25.8002128 10.8090435,25.5604255 C10.8785217,25.3117021 10.953913,25.0555319 11.0293043,24.8053191 C11.0987826,24.5834043 11.1682609,24.3629787 11.2377391,24.1410638 C11.3234783,23.8744681 11.4166087,23.6123404 11.5082609,23.3442553 C11.5777391,23.1461702 11.6472174,22.9540426 11.7166957,22.7634043 C11.832,22.4595745 11.9473043,22.1631915 12.0685217,21.8668085 C12.1261739,21.7148936 12.1838261,21.5644681 12.2533043,21.4125532 C12.41,21.0342553 12.5770435,20.6574468 12.75,20.2895745 C12.7795652,20.2255319 12.8017391,20.1614894 12.8313043,20.0989362 C16.042087,13.2851064 21.3135652,7.95617021 27.6774783,5.24553191 C27.8326957,5.17553191 27.9997391,5.11744681 28.1623478,5.05340426 C28.3988696,4.95510638 28.6353913,4.8612766 28.8778261,4.76893617 C29.172,4.66319149 29.4735652,4.56489362 29.7736522,4.46510638 C29.8830435,4.43085106 29.9924348,4.39659574 30.095913,4.36085106 C30.4492174,4.2506383 30.8069565,4.15085106 31.1646957,4.06446809 C31.2223478,4.04659574 31.28,4.0287234 31.3376522,4.01829787 C31.7249565,3.91851064 32.1122609,3.83212766 32.504,3.75617021 C32.5394783,3.75021277 32.5675652,3.73829787 32.6030435,3.73234043 C33.0066087,3.65638298 33.4116522,3.58787234 33.8211304,3.52978723 C33.8846957,3.51787234 33.9482609,3.51191489 34.0118261,3.5 L34.4671304,3.43595745 C35.3866087,3.33170213 36.3090435,3.27957447 37.2506957,3.27957447 C52.5758261,3.27957447 65.0434783,17.7070213 65.0434783,35.4453191 C65.0434783,53.183617 52.5758261,67.6185106 37.2506957,67.6185106 Z",id:"Fill-1",fill:"#000",mask:"url(#mask-2)"})),a.createElement("path",{d:"M16.6148442,34.9764444 C16.6148442,34.2098834 16.6421114,33.4433224 16.6980809,32.688929 C16.7483099,32.0242719 16.2775921,31.4356625 15.6447062,31.3824291 C15.0103853,31.3352795 14.4621712,31.8280688 14.4105071,32.4988097 C14.3487971,33.3125203 14.3157895,34.1505662 14.3157895,34.9764444 L14.3157895,35.0068635 C14.3157895,35.6776044 14.8309959,36.2068966 15.4653168,36.2068966 C16.0982027,36.2068966 16.6148442,35.6487063 16.6148442,34.9764444 Z",id:"Fill-4",fill:"#000"}),a.createElement("path",{d:"M58.08881,29.2367289 C58.252798,29.7981398 58.8180333,30.1724138 59.4460725,30.1724138 C59.5542349,30.1724138 59.6693754,30.1600411 59.7862605,30.1368423 C60.5294402,29.9667178 60.9847687,29.2970458 60.8015905,28.6320136 C60.5625867,27.8045898 60.2904364,26.9833523 59.9764168,26.1853136 C59.7321793,25.5388405 58.9349184,25.1893119 58.2056951,25.4120204 C57.4764717,25.6362754 57.0874363,26.3430655 57.3403966,26.9833523 C57.6195251,27.7195275 57.8707408,28.4758083 58.08881,29.2367289 Z",id:"Fill-5",fill:"#000"}),a.createElement("path",{d:"M52.9631342,52.2792343 C52.5320984,52.7941348 52.0795109,53.286875 51.6107595,53.7405088 C51.1904996,54.1537327 51.1958876,54.8094162 51.6161474,55.2174259 C51.8262774,55.420779 52.1010627,55.5172414 52.374501,55.5172414 C52.6533273,55.5172414 52.9321535,55.4155648 53.1368955,55.2122117 C53.6581794,54.7025254 54.1632994,54.1628576 54.6360918,53.5984224 C55.0105541,53.1500027 54.9418578,52.4930157 54.4784943,52.1319336 C54.0205188,51.7656373 53.3416375,51.8360288 52.9631342,52.2792343 Z",id:"Fill-6",fill:"#000"}),a.createElement("path",{d:"M17.0691578,41.9724294 C16.8856114,41.3092118 16.1199605,40.9041699 15.3770344,41.0726797 C14.6253679,41.2365516 14.1673758,41.905953 14.3596626,42.5707166 C14.5904067,43.3978061 14.8648524,44.2187117 15.1707631,45.0226118 C15.3700421,45.5358711 15.9154373,45.862069 16.4957937,45.862069 C16.646127,45.862069 16.7964602,45.8373336 16.9467935,45.7955926 C17.6774832,45.5714282 18.0673009,44.8711075 17.8208243,44.2248956 C17.5341422,43.4890178 17.2806733,42.7345885 17.0691578,41.9724294 Z",id:"Fill-7",fill:"#000"}),a.createElement("path",{d:"M49.5208036,12.2547219 C48.774669,11.7930703 47.9916289,11.3677453 47.195752,10.9953968 C46.5619388,10.6866199 45.7917354,10.9348523 45.4708173,11.5266746 C45.1515038,12.1245513 45.4082383,12.851085 46.0356331,13.1522938 C46.7496759,13.4898292 47.4460681,13.8742866 48.1167869,14.2814482 C48.3366158,14.4176733 48.5805136,14.4827586 48.817993,14.4827586 C49.2383957,14.4827586 49.65238,14.2875027 49.8962778,13.9333175 C50.2845886,13.3717675 50.1161066,12.621016 49.5208036,12.2547219 Z",id:"Fill-8",fill:"#000"}),a.createElement("path",{d:"M45.8954206,58.0750167 C45.1988984,58.4417511 44.4773326,58.7697119 43.7557669,59.0540523 C43.1140273,59.3060813 42.7837662,60.0508593 43.0279403,60.7197054 C43.2173317,61.2366879 43.6947234,61.5517241 44.2018542,61.5517241 C44.3489847,61.5517241 44.4945501,61.5274906 44.6416806,61.4709456 C45.4555942,61.1542938 46.2554209,60.7891749 47.0380301,60.3723578 C47.6562914,60.0508593 47.8942047,59.2673076 47.5827262,58.6307729 C47.2649868,57.9990849 46.5074211,57.7470559 45.8954206,58.0750167 Z",id:"Fill-9",fill:"#000"}),a.createElement("path",{d:"M55.8777173,19.6280959 C55.4397723,18.8525939 54.9681393,18.0955964 54.4796622,17.3873831 C54.085231,16.8154295 53.3777815,16.7296364 52.9005338,17.2023393 C52.4232861,17.6750422 52.3516989,18.5228795 52.7475338,19.101562 C53.1910934,19.745851 53.6192127,20.428831 54.0136439,21.1319976 C54.2326164,21.5205897 54.5835338,21.7241379 54.9456806,21.7241379 C55.1646531,21.7241379 55.3850292,21.6518026 55.5759283,21.4936742 C56.0924787,21.0798489 56.22302,20.2387405 55.8777173,19.6280959 Z",id:"Fill-10",fill:"#000"}),a.createElement("path",{d:"M59.691244,33.7931034 C59.0553932,33.7931034 58.5389442,34.3789607 58.5389442,35.0535379 C58.5389442,35.8061274 58.5101727,36.5648355 58.4598225,37.3067174 C58.4094724,37.9751759 58.8813255,38.5671518 59.5171763,38.6206897 C59.5502635,38.6206897 59.5790351,38.6206897 59.606368,38.6206897 C60.2019387,38.6206897 60.7083176,38.1373192 60.7529135,37.4918054 C60.8147723,36.6856781 60.8421053,35.8657838 60.8421053,35.0535379 L60.8421053,34.9755255 C60.8421053,34.3009484 60.3256563,33.7931034 59.691244,33.7931034 Z",id:"Fill-11",fill:"#000"}),a.createElement("path",{d:"M58.7499945,43.5138653 C58.0607135,43.2929237 57.3120685,43.6486241 57.0812088,44.3036141 C56.8107732,45.0557557 56.5139536,45.8031964 56.1792071,46.519298 C55.8889835,47.1554844 56.198995,47.8966573 56.8618921,48.1724426 C57.0350369,48.2398219 57.2164266,48.2758621 57.3895714,48.2758621 C57.8991117,48.2758621 58.382268,47.993809 58.6015847,47.5237204 C58.9610662,46.7339717 59.2908658,45.9191516 59.5794404,45.0996306 C59.8119491,44.4446406 59.4442226,43.734807 58.7499945,43.5138653 Z",id:"Fill-12",fill:"#000"}),a.createElement("path",{d:"M39.4934863,8.58673709 C38.674895,8.49252636 37.8442434,8.44827586 37.019622,8.44827586 L36.9728884,8.44827586 C36.3080656,8.44827586 35.7894737,8.96072514 35.7894737,9.59022411 C35.7894737,10.2211505 36.3547992,10.7335998 37.019622,10.7335998 C37.7507763,10.7335998 38.4864532,10.773568 39.2160999,10.8506495 C39.2643411,10.8563592 39.3110746,10.862069 39.3578082,10.862069 C39.957807,10.862069 40.482429,10.4324109 40.5532832,9.8528722 C40.6301674,9.22337323 40.152279,8.65953629 39.4934863,8.58673709 Z",id:"Fill-13",fill:"#000"}),a.createElement("path",{d:"M19.9502953,50.0744196 C19.6046393,49.457276 18.9020863,49.2992066 18.3906278,49.7128777 C17.8749539,50.1265488 17.7386587,50.9606175 18.0899351,51.577761 C18.5227077,52.352974 18.9892029,53.1096896 19.4781797,53.817639 C19.7029967,54.1405042 20.0275761,54.3103448 20.3507505,54.3103448 C20.6036695,54.3103448 20.8551835,54.2128126 21.0645442,54.0093402 C21.5422802,53.5351318 21.6125355,52.689292 21.2177008,52.1108251 C20.7736873,51.4667761 20.34513,50.7773242 19.9502953,50.0744196 Z",id:"Fill-14",fill:"#000"}),a.createElement("path",{d:"M18.2995751,23.0359679 C17.6308165,22.7615773 16.8516962,23.0422397 16.561791,23.6803936 C16.2027039,24.4690704 15.8666774,25.2844022 15.5784194,26.099734 C15.3461657,26.7551354 15.7134888,27.4716866 16.4020137,27.691199 C16.5436719,27.7351015 16.6853302,27.7586207 16.8269884,27.7586207 C17.3738551,27.7586207 17.8877779,27.4277841 18.0739103,26.9072261 C18.3374605,26.1608839 18.6405432,25.4129737 18.9749225,24.6838789 C19.2714165,24.0535647 18.961745,23.3119263 18.2995751,23.0359679 Z",id:"Fill-15",fill:"#000"}),a.createElement("path",{d:"M36.9351458,60.479899 C36.1992782,60.479899 35.4574763,60.4356935 34.7334776,60.3515604 C34.0836591,60.2845392 33.4872504,60.7251681 33.4115866,61.3483229 C33.3359228,61.9729037 33.8002908,62.5404452 34.4486257,62.6188743 C35.2660914,62.7129892 36.1072948,62.7586207 36.9351458,62.7586207 L37.0404816,62.7586207 C37.6947509,62.7586207 38.1754386,62.2509705 38.1754386,61.6221118 C38.1754386,60.9875491 37.5908987,60.479899 36.9351458,60.479899 Z",id:"Fill-16",fill:"#000"}),a.createElement("path",{d:"M22.0188172,14.7893456 C21.5037703,15.2936939 20.9994815,15.8384422 20.5207434,16.397526 C20.1482421,16.8458356 20.2168253,17.5026613 20.6740471,17.8688677 C20.8784522,18.026558 21.1151317,18.1034483 21.3571903,18.1034483 C21.6664874,18.1034483 21.9771293,17.9705193 22.1922925,17.7216032 C22.6226189,17.2068291 23.0798407,16.7181195 23.5464759,16.2606873 C23.9673889,15.8527777 23.9620099,15.1920423 23.5424416,14.7841327 C23.1215286,14.381436 22.4383854,14.381436 22.0188172,14.7893456 Z",id:"Fill-17",fill:"#000"}),a.createElement("path",{d:"M30.5187987,9.73832644 C29.7068511,10.0536004 28.8995968,10.4206116 28.1236315,10.8312762 C27.5072397,11.1530173 27.2616216,11.9355435 27.5745109,12.5677082 C27.7935333,13.0155589 28.2347072,13.2758621 28.6915255,13.2758621 C28.8823879,13.2758621 29.0779437,13.230592 29.2609839,13.1368182 C29.9571625,12.7698069 30.6721144,12.4415986 31.3995819,12.1635108 C32.0410048,11.9112917 32.371103,11.1659517 32.1333072,10.4966008 C31.8876891,9.82724987 31.1680438,9.48610726 30.5187987,9.73832644 Z",id:"Fill-18",fill:"#000"}),a.createElement("path",{d:"M29.1242348,58.0582427 C28.4163214,57.7164648 27.7132238,57.338392 27.0422311,56.9179749 C26.4466849,56.5580495 25.656904,56.7123032 25.2620135,57.2733634 C24.8735441,57.8283744 25.0420949,58.578471 25.6312201,58.9444456 C26.3840803,59.4117437 27.1674402,59.8366976 27.9572211,60.2147705 C28.1466401,60.3039957 28.3408749,60.3448276 28.5415306,60.3448276 C29.0054466,60.3448276 29.4565207,60.1028609 29.6828603,59.6839562 C30.0087252,59.086601 29.7518859,58.3607011 29.1242348,58.0582427 Z",id:"Fill-19",fill:"#000"}))),a.createElement("g",{id:"bat",transform:"translate(99 101)"},a.createElement("g",{id:"Group-3",opacity:"0.477",transform:"translate(0 27.75)"},a.createElement("mask",{id:"mask-4",fill:"#fff"},a.createElement("use",{xlinkHref:"#path-3"}))),a.createElement("polygon",{id:"Fill-4",fill:"#9E1F63",points:"16.524725 0 16.5178571 18.9797718 33.0357143 28.4107143"}),a.createElement("polygon",{id:"Fill-5",fill:"#FB542B",points:"0 28.4107143 16.5022194 19.0069334 16.5178571 0"}),a.createElement("polygon",{id:"Fill-6",fill:"#662D91",points:"0 28.4107143 33.0357143 28.4090548 16.5506168 19.1607143"}),a.createElement("polygon",{id:"Fill-7",fill:"#FFF",points:"16.7940022 11.2321429 9.91071429 22.4642857 23.7857143 22.4642857"}),a.createElement("polygon",{id:"Stroke-8",stroke:"#999EA2",strokeWidth:"0.88",points:"16.7940022 11.2321429 9.91071429 22.4642857 23.7857143 22.4642857"})))))));n.d(t,"a",function(){return u});class u extends a.PureComponent{render(){const{id:e,fullScreen:t,onClose:n,title:i,text:u,children:m}=this.props;return a.createElement(o,{id:e,fullScreen:t},a.createElement(c,{onClick:n},a.createElement(d.a,null)),a.createElement(l,null,p),a.createElement(r,null,i),a.createElement(s,null,u),m)}}},function(e,t,n){"use strict";var a=n(0),i=n(4);const o=Object(i.c)("input")`
  display: none;
`,l=Object(i.c)("div").withConfig({displayName:"StyledWrapper"})`
  box-sizing: border-box;
  display: flex;
`,r=Object(i.c)("div").withConfig({displayName:"StyleToggle"})`
  box-sizing: border-box;
  position: relative;
  display: block;
  height: ${e=>"small"===e.size?"16px":"24px"};
  width: ${e=>"small"===e.size?"28px":"40px"};

  ${e=>e.disabled?i.b`
      pointer-events: none;
      animation: none;
    `:""};
`,c=Object(i.c)("label").withConfig({displayName:"StyledSlider"})`
  box-sizing: border-box;
  background: ${e=>e.disabled?"rgba(246,246,250,0.1)":"#C4C7C9"};
  height: ${e=>"small"===e.size?"6px":"8px"};
  margin-top: ${e=>"small"===e.size?"5px":"8px"};
  width: 100%;
  border-radius: 3px;
  display: block;
`,s=e=>{let t="small"===e.size?"12px":"20px",n="small"===e.size?"3px":"4px";return e.checked||(t="-1px"),{x:t,y:n}},d=Object(i.c)("label").withConfig({displayName:"StyledBullet"})`
  box-sizing: border-box;
  position: relative;
  border-radius: 50%;
  transition: all .4s ease;
  transform: ${e=>`translate(${(e=>`${s(e).x}, calc(-50% - ${s(e).y})`)(e)})`};
  width: ${e=>"small"===e.size?"16px":"20px"};
  height: ${e=>"small"===e.size?"16px":"20px"};
  background-color: ${e=>e.disabled||e.checked?"#fb542b":"#ebecf0"};
  display: block;
  box-shadow: 0 3px 3px rgba(0,0,0,0.05);
`;n.d(t,"a",function(){return p});class p extends a.PureComponent{constructor(e){super(e),this.state={checked:e.checked},this.handleChange=this.handleChange.bind(this)}componentWillReceiveProps(e){"checked"in e&&this.setState({checked:e.checked})}handleChange(e){const{props:t}=this;t.disabled||("checked"in t||this.setState({checked:e.target.checked}),t.onChange&&t.onChange({target:{checked:e.target.checked}}))}render(){const{id:e,testId:t,readOnly:n,disabled:i,autoFocus:s,size:p,type:u}=this.props,{checked:m}=this.state;return a.createElement(l,{checked:m,"data-test-id":t,size:p},a.createElement(r,{size:p},a.createElement(o,{type:"checkbox",id:e,readOnly:n,disabled:i,checked:m,onChange:this.handleChange,autoFocus:s}),a.createElement(c,{htmlFor:e,checked:m,size:p,disabled:i}),a.createElement(d,{htmlFor:e,checked:m,size:p,disabled:i,type:u})))}}p.defaultProps={checked:!1,size:"small",type:"default",disabled:!1}},,,,,,,,,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/eich.404c9632.jpg"},,,,,,,,,,,,,,function(e,t,n){"use strict";var a=n(0),i=n(7);const o=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},a.createElement("path",{d:"M28.71 27.29L17.41 16l11.3-11.29a1 1 0 1 0-1.42-1.42L16 14.59 4.71 3.29a1 1 0 0 0-1.42 1.42L14.59 16 3.29 27.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L16 17.41l11.29 11.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"}));t.a=Object(i.a)(o)},function(e,t,n){"use strict";var a=n(0),i=n(7);const o=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},a.createElement("path",{d:"M27 16.77a1 1 0 0 0-1 1V25a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h7.23a1 1 0 0 0 0-2H7a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3v-7.23a1 1 0 0 0-1-1z"}),a.createElement("path",{d:"M27 4h-6.42a1 1 0 0 0 0 2h4l-10.2 10.21a1 1 0 0 0 0 1.41 1 1 0 0 0 .7.3 1 1 0 0 0 .71-.3L26 7.41v4a1 1 0 1 0 2 0V5a1 1 0 0 0-1-1z"}));t.a=Object(i.a)(o)},function(e,t,n){"use strict";var a=n(0),i=n(7);const o=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},a.createElement("path",{fillRule:"evenodd",fill:"#fff",d:"M9.61 23.25h12.78L16 12 9.61 23.25z"}),a.createElement("path",{d:"M3 26.8l7.67-4.52L16 13V4a.45.45 0 0 0-.38.28l-6.27 11-6.26 11a.48.48 0 0 0 0 .48",fill:"#ff4724",fillRule:"evenodd"}),a.createElement("path",{d:"M16 4v9l5.29 9.31L29 26.8a.48.48 0 0 0-.05-.48l-6.26-11-6.27-11A.45.45 0 0 0 16 4",fill:"#9e1f63",fillRule:"evenodd"}),a.createElement("path",{d:"M29 26.8l-7.67-4.52H10.71L3 26.8a.47.47 0 0 0 .43.2h25.1a.47.47 0 0 0 .43-.2",fill:"#662d91",fillRule:"evenodd"}));t.a=Object(i.a)(o)},function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return s});var a=n(0),i=n(351),o=n(657),l=n(658),r=n(671),c=n(656);class s extends a.PureComponent{render(){const{fakeOnChange:e,enabled:t,sitename:n,favicon:s}=this.props;return a.createElement(i.e,{enabled:t,style:{width:"330px"}},a.createElement(o.default,{enabled:t,fakeOnChange:e,sitename:n,favicon:s}),a.createElement(l.default,{enabled:t,sitename:n,favicon:s}),a.createElement(r.default,{enabled:t,sitename:n,favicon:s}),a.createElement(c.default,null))}}},function(e,t,n){e.exports=n.p+"static/media/qrCode.2d3a0df8.png"},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(659),o=n(660);n(740);t.default=class extends a.PureComponent{render(){return this.props.disabled?a.createElement(i.default,null):a.createElement(o.default,null)}}},,function(e,t,n){"use strict";var a=n(0),i=n(1),o=n(10);const l=Object(i.default)("div").withConfig({displayName:"StyledWrapper"})`
  font-family: Poppins, sans-serif;
`,r=Object(i.default)("div").withConfig({displayName:"StyledTitle"})`
  font-size: 32px;
  font-weight: 500;
  color: #4b4c5c;
  margin-bottom: 10px;
  line-height: 1.3;
`,c=Object(i.default)("div").withConfig({displayName:"StyledNote"})`
  max-width: 508px;
  font-family: Muli,sans-serif;
  font-size: 12px;
  font-weight: 300;
  line-height: 1.5;
  color: #686978;
`,s=Object(i.default)("div").withConfig({displayName:"StyledAddresses"})`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
  align-items: stretch;
`,d=Object(i.default)("div").withConfig({displayName:"StyledAddress"})`
  flex-basis: ${e=>e.isMobile?100:50}%;
  flex-shrink: 0;
  flex-grow: 0;
  width: ${e=>e.isMobile?100:50}%;
  box-sizing: border-box;
  padding: 0 15px 26px;
`,p=Object(i.default)("div").withConfig({displayName:"StyledLogo"})`
  height: 60px;
  flex-basis: 60px;
  flex-shrink: 0;
  margin-right: 20px;
`,u=Object(i.default)("div").withConfig({displayName:"StyledData"})`
  flex-basis: 100%;
  text-align: center;
  margin-top: 22px;
  color: #686978;
`,m=Object(i.default)("div").withConfig({displayName:"StyledAddressTitle"})`
  flex-basis: 30%;
  flex-grow: 1;
  font-size: 16px;
  line-height: 1.38;
  color: #4b4c5c;
`,h=Object(i.default)("div").withConfig({displayName:"StyledShowQR"})`
  width: 110px;
  height: 110px;
  justify-content: center;
  display: flex;
  background: #eee;
`,g=Object(i.default)("div").withConfig({displayName:"StyledQRImageWrapper"})`
  flex-basis: 100%;
  justify-content: center;
  display: flex;
  margin: 15px 0 10px;
  position: relative;
`,f=Object(i.default)("img").withConfig({displayName:"StyledQRImage"})`
  width: 110px;
  height: 110px;
`,b=Object(i.default)(o.a).withConfig({displayName:"StyledQRButton"})`
  position: absolute;
  top: calc(50% - 23px);
  font-weight: 400;
`,x=Object(i.default)("a").withConfig({displayName:"StyledLink"})`
  color: #4c54d2;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`,y=Object(i.default)("div").withConfig({displayName:"StyledHeader"})`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`,C=Object(i.default)("div").withConfig({displayName:"StyledWalletAddress"})`
  font-size: 12px;
  font-weight: 500;
  line-height: 1;
  color: #4b4c5c;
  text-align: left;
  margin-bottom: 4px;
`,v=Object(i.default)("p").withConfig({displayName:"StyledText"})`
  margin-bottom: 30px;
  padding: 0;
  font-size: 15px;
  line-height: 1.4;
`;var w=n(42),E=n(2),k=n(682),O=n(342),S=n(727),j=n(726),T=n(728);n.d(t,"a",function(){return A});const N={BAT:a.createElement(O.a,null),ETH:a.createElement(S.a,null),BTC:a.createElement(j.a,null),LTC:a.createElement(T.a,null)};class A extends a.PureComponent{constructor(e){super(e),this.onQR=(e=>{this.setState({current:e})}),this.getAddress=(e=>{const{isMobile:t}=this.props,n=e.type===this.state.current;return a.createElement(d,{isMobile:!!t,key:`address-${e.type}`},a.createElement(y,null,a.createElement(p,null,N[e.type]),a.createElement(m,null,Object(E.b)(`title${e.type}`)),a.createElement(u,null,a.createElement(C,null,Object(E.b)("walletAddress")),a.createElement(k.a,{value:e.address}))),e.qr?a.createElement(a.Fragment,null,a.createElement(g,null,n?a.createElement(f,{src:e.qr}):a.createElement(h,null,a.createElement(b,{size:"large",brand:"rewards",type:"accent",text:Object(E.b)("addFundsQR"),onClick:this.onQR.bind(this,e.type)})))):null)}),this.state={current:void 0}}render(){const{id:e,onClose:t,addresses:n}=this.props;return a.createElement(w.a,{id:e,onClose:t},a.createElement(l,null,a.createElement(r,null,Object(E.b)("addFundsTitle")),a.createElement(v,null,Object(E.b)("addFundsText")),a.createElement(s,null,n&&n.map(e=>this.getAddress(e))),a.createElement(c,null,Object(E.b)("addFundsNote")," ",a.createElement(x,{href:"https://brave.com/faq-payments/#brave-payments",target:"_blank"},Object(E.b)("addFundsFAQ")),".")))}}},function(e,t,n){"use strict";var a=n(0),i=n(1);const o={deposit:"#9f22a1",tipOnLike:"#696fdc",donation:"#696fdc",contribute:"#9752cb",recurringDonation:"#696fdc"},l=Object(i.default)("div").withConfig({displayName:"StyledTHLast"})`
  text-align: right;
  padding-right: 14px;
`,r=Object(i.default)("span").withConfig({displayName:"StyledProvider"})`
  color: #9e9fab;
`,c=Object(i.default)("div").withConfig({displayName:"StyledType"})`
  ${e=>{const t=o[e.type];return i.css`
    --tableTransactions-type-color: ${t};
  `}};
  color: var(--tableTransactions-type-color);
`;var s=n(115),d=n(2),p=n(24);n.d(t,"a",function(){return u});class u extends a.PureComponent{constructor(){super(...arguments),this.tokenColors={deposit:"earnings",tipOnLike:"donation",donation:"donation",contribute:"contribute",recurringDonation:"donation"},this.getHeader=(()=>{const e=[Object(d.b)("date"),Object(d.b)("type"),Object(d.b)("description"),Object(d.b)("amount")];return e.map((t,n)=>({content:n===e.length-1?a.createElement(l,null,t):t}))}),this.getDescription=(e=>"string"==typeof e?e:a.createElement(a.Fragment,null,a.createElement("span",null,e.publisher)," ",a.createElement(r,null,Object(d.b)("on")," ",e.platform))),this.getRows=(e=>{if(e)return e.map(e=>{return{content:[{content:e.date},{content:a.createElement(c,{type:e.type},Object(d.b)(e.type))},{content:this.getDescription(e.description)},{content:a.createElement(p.a,{value:e.amount.value,isNegative:e.amount.isNegative,converted:e.amount.converted,color:this.tokenColors[e.type],size:"small"}),customStyle:{"text-align":"right","padding-right":"14px"}}]}})})}render(){const{id:e,children:t,rows:n}=this.props;return a.createElement("div",{id:e},a.createElement(s.a,{header:this.getHeader(),children:t,rows:this.getRows(n)}))}}},function(e,t,n){"use strict";var a=n(0),i=n(1);const o=Object(i.default)("div").withConfig({displayName:"StyledWrapper"})`
  text-align: center;
  width: 100%;
  margin: 40px 0 0;
  font-family: Poppins, sans-serif;
`,l=Object(i.default)("div").withConfig({displayName:"StyledBox"})`
  border-radius: 6px;
  background-color: #f1f1f5;
  padding: 5px 10px 20px;
`,r=Object(i.default)("div").withConfig({displayName:"StyledTitle"})`
  font-size: 14px;
  font-weight: 300;
  line-height: 1.57;
  color: #838391;
  margin: 11px 0 5px;
`,c=Object(i.default)("div").withConfig({displayName:"StyledValue"})`
  font-size: 18px;
  line-height: 1.22;
  text-align: center;
  color: #c12d7c;
`,s=Object(i.default)("div").withConfig({displayName:"StyledText"})`
  font-family: Muli, sans-serif;
  font-size: 14px;
  line-height: 1.29;
  color: #838391;
  margin: 44px 0 32px;
`,d=Object(i.default)("div").withConfig({displayName:"StyledButtonWrapper"})`
  margin-top: ${e=>e.isMobile?40:0}px;
`;var p=n(2),u=n(10);n.d(t,"a",function(){return m});class m extends a.PureComponent{render(){const{id:e,onClose:t,amount:n,date:i,isMobile:m}=this.props;return a.createElement(o,{id:e},a.createElement(l,null,a.createElement(r,null,Object(p.b)("newTokenGrant")),a.createElement(c,null,n," BAT"),a.createElement(r,null,Object(p.b)("grantExpire")),a.createElement(c,null,i)),m?null:a.createElement(s,null,Object(p.b)("grantDisclaimer")),a.createElement(d,{isMobile:m},a.createElement(u.a,{text:Object(p.b)("ok"),size:"call-to-action",type:"accent",onClick:t})))}}},function(e,t,n){"use strict";var a=n(0),i=n(1),o=n(2);const l=i.default.ul`
  box-sizing: border-box;
  display: ${e=>e.asList?"block":"inline-block"};
  -webkit-font-smoothing: antialiased;
  font-weight: 400;
  margin: 0;
  padding: 0;
  color: inherit;
  font-size: inherit;
  font-family: inherit;

  & > li {
    display: ${e=>e.asList?"flex":"inline-block"};
    align-items: ${e=>e.asList?"center":null};
    min-height: ${e=>e.asList?"30px":null};
    margin-right: ${e=>e.asList?"0":"40px"};
    margin-bottom: ${e=>e.asList?"0":"20px"};
  }
`,r=i.default.li`
  user-select: ${e=>Object(o.d)(e.customStyle,"userSelect")||"auto"};
  box-sizing: border-box;
  vertical-align: middle;
  list-style-type: none;
  font-size: inherit;
  font-family: inherit;
`,c=i.default.span`
  color: ${e=>Object(o.d)(e.customStyle,"counterColor")||"inherit"};
  font-size: ${e=>Object(o.e)(e.size,"44px","26px",void 0)};
  line-height: ${e=>Object(o.e)(e.size,"52px","24px",void 0)};
  width: ${e=>Object(o.e)(e.size,"7ch","3ch",void 0)};
  text-align: ${e=>"small"===e.size?"right":"inherit"};
  box-sizing: border-box;
  letter-spacing: -0.4px;
  font-family: inherit;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`,s=i.default.span`
  color: ${e=>Object(o.d)(e.customStyle,"counterColor")||"inherit"};
  font-size: ${e=>Object(o.e)(e.size,"20px","13px",void 0)};
  line-height: ${e=>Object(o.e)(e.size,"24px","16px",void 0)};
  margin-left: ${e=>Object(o.e)(e.size,"3px","10px",void 0)};
  box-sizing: border-box;
  display: inline;
  font-family: inherit;
  letter-spacing: 0;
`,d=i.default.div`
  box-sizing: border-box;
  font-size: 13px;
  line-height: ${e=>Object(o.e)(e.size,"24px","16px",void 0)};
  font-family: inherit;
  color: ${e=>Object(o.d)(e.customStyle,"descriptionColor")||"inherit"};
  margin-left: ${e=>Object(o.e)(e.size,"3px","1ch",void 0)};
`;n.d(t,"a",function(){return p}),n.d(t,"b",function(){return u});class p extends a.PureComponent{render(){const{id:e,asList:t,children:n}=this.props;return a.createElement(l,{id:e,asList:t},n)}}class u extends a.PureComponent{render(){const{id:e,customStyle:t,counter:n,text:i,description:o,onClick:l,size:p="medium"}=this.props;return a.createElement(r,{id:e,customStyle:t,onClick:l,size:p},a.createElement(c,{customStyle:t,size:p},n),i?a.createElement(s,{customStyle:t,size:p},i):null,o?a.createElement(d,{customStyle:t,size:p},o):null)}}},function(e,t,n){"use strict";n.d(t,"e",function(){return o}),n.d(t,"f",function(){return l}),n.d(t,"c",function(){return r}),n.d(t,"d",function(){return c}),n.d(t,"b",function(){return s}),n.d(t,"a",function(){return d});var a=n(4),i=n(153);const o=Object(a.c)("main").withConfig({displayName:"ShieldsPanel"})`
  box-sizing: border-box;
  background: linear-gradient(to bottom, #131526, #343546);
  height: 100%;
  position: relative;
`,l=Object(a.c)(i.a).withConfig({displayName:"SiteInfoCard"})`
  background: #343546;
  margin: 0;
  width: auto;
  text-align: center;
  padding: 16px;
`,r=Object(a.c)("header").withConfig({displayName:"Header"})`
  box-sizing: border-box;
  border-bottom: ${e=>e.enabled?"1px solid rgba(255, 255, 255, 0.15)":null};
  padding: ${e=>e.enabled?"28px 25px 10px":"28px 25px 0"};
`,c=Object(a.c)("div").withConfig({displayName:"ResourcesListScroll"})`
  box-sizing: border-box;
  overflow: auto;
  height: 303px;
`,s=Object(a.c)("div").withConfig({displayName:"DismissOverlay"})`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background: transparent;
  position: absolute;
  top: 0;
  z-index: 1;
`,d=Object(a.c)("div").withConfig({displayName:"ClickableEmptySpace"})`
  width: 25px;
  height: 100%;
  pointer-events: ${e=>e.disabled?"none":null};
`},function(e,t,n){"use strict";var a=n(0),i=n(1),o=n(805),l=n.n(o);const r=Object(i.default)("div").withConfig({displayName:"StyledWrapper"})`
  overflow: hidden;
  box-shadow: 0 1px 12px 0 rgba(99,105,110,0.18);
  font-family: Poppins, sans-serif;
  width: ${e=>e.isMobile?"100%":"373px"};
  background: ${e=>(e=>e?"linear-gradient(-180deg, rgba(255,255,255,1) 0%, rgba(228,242,255,1) 40%)":`url(${l.a}) no-repeat top left,\n    linear-gradient(172deg, #392dd1, rgba(255, 26, 26, 0.53)),\n    linear-gradient(#7d7bdc, #7d7bdc)`)(e.notification)};
  min-height: ${e=>e.compact?"unset":"715px"};
  border-radius: ${e=>e.compact?"0":"6px"};
  display: flex;
  flex-direction: column;
`,c=Object(i.default)("div").withConfig({displayName:"StyledHeader"})`
  padding: 16px 21px 0 19px;
  position: relative;
`,s=Object(i.default)("div").withConfig({displayName:"StyledTitle"})`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.38;
  letter-spacing: -0.2px;
  color: rgba(255, 255, 255, 0.65);
`,d=Object(i.default)("div").withConfig({displayName:"StyledBalance"})`
  text-align: center;
`,p=Object(i.default)("div").withConfig({displayName:"StyleGrantButton"})`
  display: flex;
  justify-content: center;
`,u=Object(i.default)("div").withConfig({displayName:"StyledBalanceTokens"})`
  font-size: 36px;
  line-height: 0.61;
  letter-spacing: -0.4px;
  color: #fff;
  margin-top: 10px;
  font-weight: 300;
`,m=Object(i.default)("div").withConfig({displayName:"StyledContent"})`
  padding: ${e=>e.contentPadding?"11px 25px 19px":"0px"};
  position: relative;
  background: #f9fbfc;
  flex: 1;
  height: 361px;
`,h=Object(i.default)("button").withConfig({displayName:"StyledAction"})`
  display: flex;
  background: none;
  padding: 4px;
  border: none;
  cursor: pointer;
  align-items: center;
  color: #A1A8F2;
`,g=Object(i.default)("div").withConfig({displayName:"StyledActionIcon"})`
  display: inline-block;
  width: 24px;
  height: 24px;
  margin-right: 6px;
  vertical-align: text-bottom;
`,f=Object(i.default)("div").withConfig({displayName:"StyledActionText"})`
  color: #fff;
  font-size: 14px;
  opacity: 0.65;
`,b=Object(i.default)("div").withConfig({displayName:"StyledCopy"})`
  font-size: 12px;
  color: #838391;
  padding: 19px 15px;
  background: ${e=>e.connected?"#dcdfff":"#dee2e6"};
  text-align: center;
`,x=Object(i.default)("span").withConfig({displayName:"StyledCopyImage"})`
  vertical-align: middle;
  display: inline-block;
  color: #838391;
  width: 27px;
  height: 27px;
`,y=Object(i.default)("button").withConfig({displayName:"StyledIconAction"})`
  position: absolute;
  top: 15px;
  right: 21px;
  background: none;
  padding: 0;
  border: none;
  cursor: pointer;
  color: #A1A8F2;
  width: 24px;
  height: 24px;
`,C=Object(i.default)("div").withConfig({displayName:"StyledBalanceConverted"})`
  font-family: Muli, sans-serif;
  font-size: 12px;
  line-height: 1.17;
  text-align: center;
  color: rgba(255, 255, 255, 0.65);
  margin: 8px 0;
  font-weight: 300;
`,v=Object(i.default)("div").withConfig({displayName:"StyledGrantWrapper"})`
  margin-top: 13px;
`,w=Object(i.default)("div").withConfig({displayName:"StyledGrant"})`
  font-family: Muli, sans-serif;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.60);
  text-align: center;
  margin-bottom: 3px;

  b {
    font-weight: 600;
    color: #fff;
    min-width: 81px;
    text-align: right;
    display: inline-block;
  }

  span {
    min-width: 135px;
    text-align: left;
    display: inline-block;
  }
`,E=Object(i.default)("div").withConfig({displayName:"StyledActionWrapper"})`
  text-align: center;
  font-size: 12px;
  color: #fff;
  display: flex;
  justify-content: space-evenly;
  margin: 15px 0 5px 0;
  padding-bottom: 3px;
`,k=Object(i.default)("span").withConfig({displayName:"StyledBalanceCurrency"})`
  text-transform: uppercase;
  opacity: 0.66;
  font-family: Muli, sans-serif;
  font-size: 16px;
  line-height: 0.88;
  color: #fff;
`,O=Object(i.default)("div").withConfig({displayName:"StyledCurve"})`
  padding: 10px 0;
  position: relative;
  overflow: hidden;
  margin: 0 -21px 0 -19px;
  z-index: 5;

  :before {
    content: "";
    position: absolute;
    bottom: -16px;
    margin-left: -50%;
    height: 240px;
    width: 200%;
    border-radius: 100%;
    border: 20px solid ${e=>e.background?(e=>`rgb(${e})`)(e.background):"#f9fbfc"};
  }
`,S=Object(i.default)("div").withConfig({displayName:"StyledAlertWrapper"})`
  display: flex;
  align-items: stretch;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 5;
  width: 100%;
`,j=Object(i.default)("button").withConfig({displayName:"StyledAlertClose"})`
  position: absolute;
  background: none;
  border: none;
  padding: 0;
  top: 11px;
  right: 11px;
  cursor: pointer;
  width: 15px;
  height: 15px;
  color: #B8B9C4;
`,T=Object(i.default)("div").withConfig({displayName:"StyledBAT"})`
  text-align: center;
  max-width: 300px;
  margin: 20px auto 0;
  color: #686978;

  a {
    color: #686978;

    &:hover {
      text-decoration: none;
    }
  }
`,N=Object(i.default)("img").withConfig({displayName:"StyledNotificationIcon"})`
  height: 53px;
  width: 53px;
  margin: 8px auto 0px;
`,A=Object(i.default)("div").withConfig({displayName:"StyledNotificationCloseIcon"})`
  height: 15px;
  width: 15px;
  float: right;
  margin-right: -6px;
  color: #9E9FAB;
  cursor: pointer;
`,z=Object(i.default)("div").withConfig({displayName:"StyledNotificationContent"})`
  display: block;
  text-align: center;
`,B=Object(i.default)("div").withConfig({displayName:"StyledNotificationMessage"})`
  max-width: 285px;
  color: #4B4C5C;
  padding-bottom: 5px;
  margin: 0 auto;
`,D=Object(i.default)("span").withConfig({displayName:"StyledTypeText"})`
  font-weight: 500;
  margin-right: 5px;
  display: inline-block;
`,M=Object(i.default)("span").withConfig({displayName:"StyledMessageText"})`
  line-height: 20px;
  font-weight: 400;
  margin: 0px 5px;
  font-family: Muli, sans-serif;
`,L=Object(i.default)("span").withConfig({displayName:"StyledDateText"})`
  font-weight: 400;
  margin-left: 5px;
  display: inline-block;
  color: #838391;
  font-family: Muli, sans-serif;
`,F=Object(i.default)("div").withConfig({displayName:"StyledButton"})`
  width: 88px;
  margin: 12px auto 15px;
`,$=Object(i.default)("span").withConfig({displayName:"StyledPipe"})`
  font-weight: 300;
`;var I=n(2),P=n(683),R=n(10),H=n(340),W=n(721),G=n(13),V=n(641),Z=n(723),q=n(807),Q=n.n(q),U=n(806),Y=n.n(U),K=n(678),J=n.n(K);n.d(t,"a",function(){return X});class X extends a.PureComponent{constructor(e){super(e),this.generateNotification=(e=>{if(!e)return null;const t=e.onCloseNotification.bind(this,e.id);return a.createElement(a.Fragment,null,a.createElement(A,null,a.createElement(H.a,{onClick:t})),a.createElement(z,null,this.getNotificationIcon(e),this.getNotificationMessage(e),a.createElement(F,null,a.createElement(R.a,{size:"small",type:"accent",level:"primary",onClick:t,text:"OK"}))))}),this.toggleGrantDetails=(()=>{this.setState({grantDetails:!this.state.grantDetails})}),this.hasGrants=(e=>e&&e.length>0),this.getNotificationIcon=(e=>{let t;switch(e.type){case"ads":t=J.a;break;case"contribute":t=Y.a;break;case"grant":t=Q.a;break;case"insufficientFunds":t=J.a;break;default:t=""}return t?a.createElement(N,{src:t}):null}),this.getNotificationMessage=(e=>{let t;switch(e.type){case"ads":t=Object(I.b)("braveAdsTitle");break;case"contribute":t=Object(I.b)("braveContributeTitle");break;case"grant":t=Object(I.b)("tokenGrant");break;case"insufficientFunds":t=Object(I.b)("insufficientFunds");break;default:t=""}return a.createElement(B,null,a.createElement(D,null,t)," ",a.createElement($,null,"|"),a.createElement(M,null,e.text),a.createElement(L,null,e.date))}),this.state={grantDetails:!1}}generateActions(e,t){return e&&e.map((e,n)=>a.createElement(h,{key:`${t}-${n}`,onClick:e.action},a.createElement(g,null,e.icon),a.createElement(f,null,e.name)))}render(){const{id:e,children:t,balance:n,converted:i,actions:o,showCopy:l,connectedWallet:h,compact:g,contentPadding:f,showSecActions:N,grants:A,onSettingsClick:z,alert:B,gradientTop:D,notification:M,isMobile:L}=this.props,F=this.hasGrants(A);return a.createElement(a.Fragment,null,a.createElement(r,{id:e,compact:g,isMobile:L,notification:M},a.createElement(c,null,M?this.generateNotification(M):a.createElement(a.Fragment,null,B&&B.node?a.createElement(S,null,B.onAlertClose?a.createElement(j,{onClick:B.onAlertClose},a.createElement(H.a,null)):null,a.createElement(P.a,{type:B.type,bg:!0},B.node)):null,a.createElement(s,null,Object(I.b)("yourWallet")),N?a.createElement(y,{onClick:z,"data-test-id":"settingsButton"},a.createElement(W.a,null)):null,a.createElement(d,null,a.createElement(u,null,n," ",a.createElement(k,null,"BAT")),i?a.createElement(C,null,i):null,F?a.createElement(p,null,a.createElement(R.a,{text:Object(I.b)("grants"),size:"small",type:"subtle",level:"secondary",onClick:this.toggleGrantDetails,icon:{position:"after",image:this.state.grantDetails?a.createElement(G.CaratUpIcon,null):a.createElement(G.CaratDownIcon,null)}})):null),this.state.grantDetails&&F?a.createElement(v,null,A&&A.map((t,n)=>a.createElement(w,{key:`${e}-grant-${n}`},a.createElement("b",null,t.tokens," BAT")," ",a.createElement("span",null,Object(I.b)("expiresOn")," ",t.expireDate)))):null,a.createElement(E,null,this.generateActions(o,e))),a.createElement(O,{background:D})),a.createElement(m,{contentPadding:f},t),l?a.createElement(b,{connected:h},h?a.createElement(a.Fragment,null,a.createElement(x,null,a.createElement(V.a,null)),Object(I.b)("rewardsPanelText1")," ",a.createElement("b",null,"Uphold"),"."):a.createElement(a.Fragment,null,a.createElement(x,null,a.createElement(Z.a,null)),Object(I.b)("rewardsPanelText2")," ",a.createElement("b",null,"Uphold"),".")):null),l?a.createElement(T,null,Object(I.b)("rewardsPanelText3")," ",a.createElement("a",{href:"https://basicattentiontoken.org/",target:"_blank"},Object(I.b)("rewardsPanelText4"))):null)}}},function(e,t,n){"use strict";var a=n(0),i=n(1);const o=Object(i.default)("div").withConfig({displayName:"StyledWrapper"})`
  height: 100%;
  padding: ${e=>e.compact?"0px 7px 0px":"0px"};
  background: ${e=>e.compact?(e=>`linear-gradient(-180deg, rgba(${e},1) 0%, rgba(255,255,255,1) 60%)`)("233, 235, 255"):"inherit"};
`,l=Object(i.default)("div").withConfig({displayName:"StyledInner"})`
  padding: 25px 14px 14px;
  font-family: Poppins, sans-serif;
`,r=Object(i.default)("div").withConfig({displayName:"StyledSummary"})`
  font-size: 14px;
  font-weight: 600;
  line-height: 1.57;
  letter-spacing: 0.4px;
  color: #a1a8f2;
  text-transform: uppercase;
`,c=Object(i.default)("div").withConfig({displayName:"StyledTitle"})`
  font-size: 22px;
  font-weight: 300;
  line-height: 0.79;
  letter-spacing: 0.4px;
  color: #4C54D2;
  margin: 4px 0 26px;
  text-transform: uppercase;
`,s=Object(i.default)("button").withConfig({displayName:"StyledActivity"})`
  font-size: 12px;
  color: #686978;
  margin-top: 26px;
  text-align: center;
  padding: 0;
  border: none;
  background: none;
  width: 100%;
  cursor: pointer;
`,d=Object(i.default)("span").withConfig({displayName:"StyledActivityIcon"})`
  vertical-align: middle;
  margin-right: 11px;
  width: 22px;
  height: 24px;
  color: #A1A8F2;
  display: inline-block;
`,p=Object(i.default)("div").withConfig({displayName:"StyledNoActivityWrapper"})`
  width: 100%;
  margin-top: 80px;
  text-align: center;
`,u=Object(i.default)("span").withConfig({displayName:"StyledNoActivity"})`
  font-weight: 400;
  color: #B8B9C4;
  font-size: 18px;
`;var m=n(154),h=n(2),g=n(725);n.d(t,"a",function(){return f});class f extends a.PureComponent{constructor(){super(...arguments),this.generateList=(()=>{const e=this.props.compact?"small":"normal";let t=[];const n=Object.keys(this.props.report).length;let i=0;return[{key:"grant",translation:"tokenGrant",color:"earnings"},{key:"ads",translation:"earningsAds",color:"earnings"},{key:"deposit",translation:"deposits",color:"earnings"},{key:"contribute",translation:"rewardsContribute",color:"contribute",negative:!0},{key:"donation",translation:"recurringDonations",color:"donation",negative:!0},{key:"tips",translation:"oneTimeDonation",color:"donation",negative:!0}].forEach((o,l)=>{const r=this.props.report[o.key];r&&(i++,t.push(a.createElement(m.a,{key:`summary-${e}-${l}-${r.tokens}`,size:e,value:r.tokens,converted:r.converted,color:o.color,title:Object(h.b)(o.translation),isNegative:o.negative,border:n===i?"last":void 0})))}),0===t.length?a.createElement(p,null,a.createElement(u,null,Object(h.b)("noActivity"))):t})}render(){const{id:e,onActivity:t,compact:n}=this.props,i=new Date,p=Object(h.b)(`month${i.toLocaleString("en-us",{month:"short"})}`),u=i.getFullYear();return a.createElement(o,{id:e,compact:n},a.createElement(l,null,a.createElement(r,null,Object(h.b)("rewardsSummary")),a.createElement(c,null,p," ",u),a.createElement("div",null,this.generateList()),t?a.createElement(s,{onClick:t},a.createElement(d,null,a.createElement(g.a,null)),Object(h.b)("viewMonthly")):null))}}},function(e,t,n){"use strict";var a=n(0),i=n(1),o=n(153);const l={ads:"#C12D7C",contribute:"#9F22A1",donation:"#696FDC"},r=Object(i.default)(o.a).withConfig({displayName:"StyledCard"})`
  margin-bottom: 15px;
  padding: ${e=>e.checked?"30px 30px 10px":"30px"};
  font-family: Poppins, sans-serif;
`,c=Object(i.default)("div").withConfig({displayName:"StyledFlip"})`
  display: block;
`,s=Object(i.default)("div").withConfig({displayName:"StyledContentWrapper"})`
  flex-wrap: wrap;
  display: ${e=>e.open?"flex":"none"};
`,d=Object(i.default)("div").withConfig({displayName:"StyledLeft"})`
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 50%;
`,p=Object(i.default)("div").withConfig({displayName:"StyledRight"})`
  flex-basis: 40px;
  justify-content: flex-end;
  display: flex;
  max-height: 30px;
`,u=Object(i.default)("div").withConfig({displayName:"StyledTitle"})`
  height: 36px;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.27;
  letter-spacing: normal;
  display: inline-block;
  vertical-align: ${e=>e.contentShown?"top":"default"};
  margin-left: ${e=>e.contentShown?10:0}px;
  color: ${e=>!1===e.enabled?"#838391":e.type&&l[e.type]||"#4b4c5c"};
  margin-top: ${e=>e.contentShown?3:0}px;
`,m=Object(i.default)("div").withConfig({displayName:"StyledBreak"})`
  width: 100%;
  display: block;
`,h=Object(i.default)("div").withConfig({displayName:"StyledDescription"})`
  width: 100%;
  font-family: Muli, sans-serif;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0px;
  font-weight: 300;
  color: ${e=>e.theme.color.detailDescription};
  margin-top: ${e=>e.contentShown?0:-5}px;
`,g=Object(i.default)("div").withConfig({displayName:"StyledContent"})`
  flex-basis: 100%;
  flex-grow: 1;
  margin-top: ${e=>e.contentShown?15:10}px;
  text-align: ${e=>e.contentShown?"default":"center"};
`,f=(Object(i.default)("div").withConfig({displayName:"StyledSettingsWrapper"})`
  background: #fff;
  overflow: hidden;
  display: ${e=>e.open?"block":"none"};
`,Object(i.default)("button").withConfig({displayName:"StyledSettingsClose"})`
  display: block;
  position: absolute;
  right: 15px;
  top: 30px;
  width: 21px;
  height: 21px;
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
  color: #DFDFE8;
`),b=Object(i.default)("span").withConfig({displayName:"StyledSettingsTitle"})`
  color: #4B4C5C;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 32px;
  width: 100%;
  display: block;
  text-align: center;
  padding-top: 25px;
`,x=Object(i.default)("div").withConfig({displayName:"StyledSettingsText"})`
  display: inline-block;
  vertical-align: top;
  color: #4B4C5C;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 28px;
  margin-left: 5px;
`,y=Object(i.default)("a").withConfig({displayName:"StyleDetailsLink"})`
  color: #4C54D2;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 28px;
`,C=Object(i.default)("div").withConfig({displayName:"StyledDetailInfo"})`
  width: 100%;
  padding: 0px 21px 20px;
  display: block;
`,v=Object(i.default)("div").withConfig({displayName:"StyledDetailContent"})`
  margin-top: 75px;
`,w=Object(i.default)("div").withConfig({displayName:"StyledChildContent"})`
  width: 100%;
  display: block;
  border-top: 1px solid #E5E5EA;
`,E=Object(i.default)("div").withConfig({displayName:"StyledSettingsContent"})`
  width: 100%;
  padding: 25px;
  display: block;
`,k=Object(i.default)("div").withConfig({displayName:"StyledSettingsHeader"})`
  width: 100%;
  display: block;
`,O=Object(i.default)("span").withConfig({displayName:"StyledSettingsListTitle"})`
  vertical-align: top;
  font-weight: 300;
  font-size: 16px;
  letter-spacing: 0;
  line-height: 28px;
  display: inline-block;
  margin: 5px 0px -10px 22px;
`,S=Object(i.default)("span").withConfig({displayName:"StyledArrow"})`
  color: #4C54D2;
  height: 16px;
  width: 16px;
  display: inline-block;
  vertical-align: middle;
  line-height: 16px;
`,j=Object(i.default)("div").withConfig({displayName:"StyledToggleHeader"})`
  width: 100%;
  display: flex;
  ${e=>(e=>e?i.css`
    top: 0px;
    left: 0px;
    position: fixed;
    background: #fff;
  `:null)(e.detailView)}
  margin-top: ${e=>e.detailView?0:-8}px;
  padding: ${e=>e.detailView?"20px 20px 15px 13px":"0px"};
`,T=Object(i.default)("span").withConfig({displayName:"StyledBackArrow"})`
  height: 28px;
  width: 25px;
  display: inline-block;
  margin-right: -3px;
`,N=Object(i.default)("div").withConfig({displayName:"StyledFullSizeWrapper"})`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  z-index: 999;
  overflow-y: scroll;
`,A=Object(i.default)("button").withConfig({displayName:"StyledSettingsIcon"})`
  width: 27px;
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
  color: #A1A8F2;
`,z=Object(i.default)("div").withConfig({displayName:"StyledToggleWrapper"})`
  margin-right: ${e=>e.contentShown?"-5":"-15"}px;
  margin-top: ${e=>e.contentShown?5:2}px;
`;var B=n(13),D=n(635),M=n(340),L=n(108),F=n(2),$=n(75);n.d(t,"a",function(){return I});class I extends a.PureComponent{constructor(e){super(e),this.detailsClick=(()=>{this.setState({contentShown:!this.state.contentShown})}),this.settingsClick=(()=>{this.setState({settingsOpened:!this.state.settingsOpened})}),this.onToggle=(()=>{this.props.checked&&this.setState({contentShown:!1,settingsOpened:!1}),this.props.toggleAction&&this.props.toggleAction()}),this.getSettingsTitle=(e=>`${e} ${Object(F.b)("settings")}`),this.getToggleHeader=(e=>{const{title:t,type:n,checked:i,toggle:o}=e,l=i&&this.state.contentShown;return a.createElement(j,{detailView:l},a.createElement(d,null,l?a.createElement(T,{onClick:this.detailsClick},a.createElement(B.ArrowLeftIcon,null)):null,a.createElement(u,{type:n,contentShown:l},t)),a.createElement(p,null,o?a.createElement(z,{contentShown:l},a.createElement($.a,{size:"small",onToggle:this.onToggle,checked:i})):null))}),this.getBoxContent=(e=>!e||this.state.contentShown?null:a.createElement(g,{contentShown:this.state.contentShown},a.createElement(y,{onClick:this.detailsClick},Object(F.b)("viewDetails"),a.createElement(S,null,a.createElement(B.CaratRightIcon,null))))),this.getSettingsListTitle=(()=>a.createElement(O,{onClick:this.settingsClick},a.createElement(A,null,a.createElement(D.a,null)),a.createElement(x,null,Object(F.b)("settings")))),this.getSettingsContent=((e,t,n)=>n&&this.state.settingsOpened?a.createElement(N,null,a.createElement(k,null,a.createElement(b,null,this.getSettingsTitle(e)),a.createElement(f,{onClick:this.settingsClick},a.createElement(M.a,null)),a.createElement(E,null,t))):null),this.getDetailContent=((e,t)=>t&&this.state.contentShown?a.createElement(N,null,this.getToggleHeader(this.props),a.createElement(v,null,a.createElement(C,null,a.createElement(h,{contentShown:this.state.contentShown},this.props.description)),a.createElement(w,null,a.createElement(L.a,{title:this.getSettingsListTitle()}),e))):null),this.state={contentShown:!1,settingsOpened:!1}}render(){const{id:e,title:t,children:n,description:i,checked:o,settingsChild:l}=this.props;return a.createElement(r,{testId:e,checked:o},a.createElement(c,null,a.createElement(s,{open:!this.state.settingsOpened},this.getToggleHeader(this.props),a.createElement(m,null),a.createElement(d,null,a.createElement(h,null,i)),this.getBoxContent(o))),this.getDetailContent(n,o),this.getSettingsContent(t,l,o))}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";var a=n(0),i=n(7);const o=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},a.createElement("path",{d:"M16 3a13 13 0 1 0 13 13A13 13 0 0 0 16 3zm0 24a11 11 0 1 1 11-11 11 11 0 0 1-11 11z"}),a.createElement("path",{d:"M20.71 11.29a1 1 0 0 0-1.42 0L16 14.59l-3.29-3.3a1 1 0 0 0-1.42 1.42l3.3 3.29-3.3 3.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l3.29-3.3 3.29 3.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L17.41 16l3.3-3.29a1 1 0 0 0 0-1.42z"}));t.a=Object(i.a)(o)},function(e,t,n){"use strict";var a=n(0),i=n(7);const o=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},a.createElement("path",{d:"M4 8h5.18a3 3 0 0 0 5.64 0H28a1 1 0 0 0 0-2H14.82a3 3 0 0 0-5.64 0H4a1 1 0 0 0 0 2zm8-2a1 1 0 1 1-1 1 1 1 0 0 1 1-1zM28 15h-3.18a3 3 0 0 0-5.64 0H4a1 1 0 0 0 0 2h15.18a3 3 0 0 0 5.64 0H28a1 1 0 0 0 0-2zm-6 2a1 1 0 1 1 1-1 1 1 0 0 1-1 1zM28 24H14.82a3 3 0 0 0-5.64 0H4a1 1 0 0 0 0 2h5.18a3 3 0 0 0 5.64 0H28a1 1 0 0 0 0-2zm-16 2a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"}));t.a=Object(i.a)(o)},function(e,t,n){"use strict";var a=n(0),i=n(7);const o=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},a.createElement("path",{d:"M26 6.2h-2.47c-4.8 0-6.59-2.63-6.66-2.74a1.1 1.1 0 0 0-1.74 0c-.07.11-1.86 2.74-6.68 2.74H6a1 1 0 0 0-1 1v5.59c0 .13 0 12.43 10.67 16.15a.94.94 0 0 0 .66 0C27 25.22 27 12.92 27 12.8V7.2a1 1 0 0 0-1-1zm-9.29 15.31a1 1 0 1 1 .29-.71 1.05 1.05 0 0 1-.29.71zM17 17a1 1 0 0 1-2 0v-6.2a1 1 0 0 1 2 0z"}));t.a=Object(i.a)(o)},function(e,t,n){"use strict";var a=n(0),i=n(7);const o=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},a.createElement("path",{d:"M26.43 6H7.57A2.6 2.6 0 0 0 5 8.64V12H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1v3.36A2.6 2.6 0 0 0 7.57 26H16a1 1 0 0 0 0-2H7.57a.61.61 0 0 1-.57-.64V20h5a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H7V8.64A.61.61 0 0 1 7.57 8h18.86a.61.61 0 0 1 .57.64V16a1 1 0 0 0 2 0V8.64A2.6 2.6 0 0 0 26.43 6zM11 18H5v-4h6z"}),a.createElement("path",{d:"M8.92 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM22.41 19H24a1 1 0 0 0 0-2h-4a1 1 0 0 0-.38.08 1 1 0 0 0-.54.54A1 1 0 0 0 19 18v4a1 1 0 0 0 2 0v-1.59l5.29 5.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"}));t.a=Object(i.a)(o)},function(e,t,n){"use strict";var a=n(0),i=n(7);const o=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},a.createElement("path",{d:"M26.43 6H7.57A2.6 2.6 0 0 0 5 8.64V12H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1v3.36A2.6 2.6 0 0 0 7.57 26H16a1 1 0 0 0 0-2H7.57a.61.61 0 0 1-.57-.64V20h5a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H7V8.64A.61.61 0 0 1 7.57 8h18.86a.61.61 0 0 1 .57.64V14a1 1 0 0 0 2 0V8.64A2.6 2.6 0 0 0 26.43 6zM11 18H5v-4h6z"}),a.createElement("path",{d:"M8.92 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM28 19a1 1 0 0 0-1 1v2.59l-5.29-5.3a1 1 0 0 0-1.42 1.42l5.3 5.29H23a1 1 0 0 0 0 2h5a1 1 0 0 0 .38-.08 1 1 0 0 0 .54-.54A1 1 0 0 0 29 25v-5a1 1 0 0 0-1-1z"}));t.a=Object(i.a)(o)},function(e,t,n){"use strict";var a=n(0),i=n(7);const o=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},a.createElement("circle",{cx:"16",cy:"16",r:"13",fill:"#ff3d00"}),a.createElement("path",{d:"M27.7 16a11.7 11.7 0 1 0-15.14 11.18 5 5 0 0 0 1 .26c.13 0 .2.07.33.07s.52.06.78.13a.61.61 0 0 1 .32.06h1a6 6 0 0 0 1-.06h.26a4.8 4.8 0 0 0 .84-.13c.13 0 .26-.07.46-.07A11.72 11.72 0 0 0 27.7 16zm-9.82 10.21c-.32-.65-.65-1.24-.9-1.69-.79-1.63-1.63-3.84-1.24-5.27.07-.26.07-1.36.26-1.49 1.69-1.11 1.56-.07 2.27-.52a2.34 2.34 0 0 0 .79-1c.45-1.49-.59-4.16-1.76-5.33a3.1 3.1 0 0 0-1.63-.71 4 4 0 0 0-1.23-1A5.7 5.7 0 0 0 11 8.66h-.26c-.06 0-.13.06-.26.06.13 0 .65.26 1 .39-.19.13-.52.13-.71.26h-.07l-.06.07-.07.06a1.21 1.21 0 0 0-.13.33 9.34 9.34 0 0 1 3 .26 4.6 4.6 0 0 0-1.82.52 2.24 2.24 0 0 0-.84.71 4.6 4.6 0 0 0-.78 3.84c.33 1.75 1.56 7.41 2.21 10.59A10.45 10.45 0 0 1 16 5.6a10.39 10.39 0 0 1 1.88 20.61z",fill:"#fff"}),a.createElement("path",{d:"M12.75 14.12a.78.78 0 1 0 .78.78.89.89 0 0 0-.78-.78zm.33.71c-.14 0-.2-.06-.2-.19a.18.18 0 0 1 .2-.2c.13 0 .19.07.19.2a.2.2 0 0 1-.19.19zm4.74-1a.65.65 0 1 0 .65.65.71.71 0 0 0-.65-.69zm.26.59a.21.21 0 0 1-.19-.2.2.2 0 0 1 .19-.19.19.19 0 0 1 .19.19c0 .09-.06.16-.19.16zm-5.14-1.7a1.29 1.29 0 0 0-1.1.07c-.59.32-.52.72-.52.72s-.33-.65.52-1a.88.88 0 0 1 1.1.19m5.27-.06a1.61 1.61 0 0 0-.72-.26c-.65 0-.84.32-.84.32a.78.78 0 0 1 1-.58 1.11 1.11 0 0 1 .59.52",fill:"#0277bd"}),a.createElement("path",{d:"M15.54 23.61s-2.79-1.5-2.86-.92 0 3.06.33 3.25 2.66-1.23 2.66-1.23zm1.11-.07s1.88-1.43 2.34-1.36.52 3.05.13 3.18a9.73 9.73 0 0 1-2.53-.78z",fill:"#8bc34a"}),a.createElement("path",{d:"M15 23.61c0 1-.13 1.36.26 1.49a2.93 2.93 0 0 0 1.5-.19c.26-.2.06-1.43-.07-1.69s-1.69 0-1.69.39",fill:"#689f38"}),a.createElement("path",{d:"M14.89 17.82A3 3 0 0 1 17 16.39a15.34 15.34 0 0 0 1.82-.2c.71-.19 2.53-.65 3.05-.84s2.67.13 1.17 1a21.21 21.21 0 0 1-3.7 1.44c-1.24.39-2-.39-2.47.26s-.07 1.16 1.43 1.3c2 .19 4-.91 4.22-.33s-1.75 1.3-3 1.37a12.06 12.06 0 0 1-4-1 1.86 1.86 0 0 1-.72-1.5",fill:"#ffca28"}));t.a=Object(i.a)(o)},function(e,t,n){"use strict";var a=n(0),i=n(7);const o=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},a.createElement("defs",null,a.createElement("linearGradient",{id:"a",x1:"-51.395%",x2:"102%",y1:"-30.203%",y2:"101%"},a.createElement("stop",{offset:"0%",stopColor:"#3023AE"}),a.createElement("stop",{offset:"100%",stopColor:"#C86DD7"}))),a.createElement("g",{fill:"none",fillRule:"evenodd"},a.createElement("path",{fill:"url(#a)",d:"M11.651 8.887c0-2.599 1.95-4.712 4.349-4.712 2.398 0 4.349 2.113 4.349 4.712v2.356H11.65V8.887zM23.7 11.333h-1.1V9c0-3.86-2.96-7-6.6-7-3.64 0-6.6 3.14-6.6 7v2.333H8.3c-1.82 0-3.3 1.57-3.3 3.5V26.5C5 28.43 6.48 30 8.3 30h15.4c1.82 0 3.3-1.57 3.3-3.5V14.833c0-1.93-1.48-3.5-3.3-3.5z"}),a.createElement("path",{fill:"#FFF",d:"M8.667 17.766v-1.388h5.644v1.388h-1.956v6.105h-1.742v-6.105H8.667zm6.095 5.337c-.57-.562-.856-1.302-.856-2.22 0-.918.285-1.653.856-2.204.57-.552 1.277-.828 2.12-.828.841 0 1.546.276 2.113.828.567.551.851 1.286.851 2.204 0 .918-.282 1.658-.846 2.22-.563.562-1.266.843-2.109.843-.842 0-1.552-.281-2.129-.843zm2.965-1.1c.23-.256.346-.626.346-1.11 0-.484-.119-.852-.356-1.104a1.123 1.123 0 0 0-.846-.38c-.326 0-.606.127-.84.38-.235.252-.352.62-.352 1.104 0 .484.12.854.362 1.11.24.257.524.385.85.385.326 0 .605-.128.836-.385zm4.71-4.088v1.11c.407-.782.95-1.174 1.63-1.174v1.858h-.428c-.401 0-.702.1-.902.298-.2.2-.3.548-.3 1.046v2.818h-1.743v-5.956h1.742z"})));t.a=Object(i.a)(o)},function(e,t,n){"use strict";var a=n(0),i=n(7);const o=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},a.createElement("defs",null,a.createElement("linearGradient",{id:"a",x1:"-378.78",y1:"583.86",x2:"-378.78",y2:"582.86",gradientTransform:"matrix(18 0 0 -22 6834 12848)",gradientUnits:"userSpaceOnUse"},a.createElement("stop",{offset:"0",stopColor:"#78be06"}),a.createElement("stop",{offset:"1",stopColor:"#ff523c"})),a.createElement("linearGradient",{id:"b",x1:"-372.29",y1:"587.63",x2:"-372.29",y2:"586.66",gradientTransform:"matrix(14 0 0 -19 5226 11171)",gradientUnits:"userSpaceOnUse"},a.createElement("stop",{offset:"0",stopColor:"#fab406"}),a.createElement("stop",{offset:"1",stopColor:"#fa5235"})),a.createElement("linearGradient",{id:"c",x1:"-430.71",y1:"587.63",x2:"-430.71",y2:"586.66",gradientTransform:"matrix(-14 0 0 -19 -6012 11171)",gradientUnits:"userSpaceOnUse"},a.createElement("stop",{offset:"0",stopColor:"#3d58d0"}),a.createElement("stop",{offset:"1",stopColor:"#78b81b"}))),a.createElement("path",{d:"M13.21 28.51a1 1 0 0 1 .67-1.89 6.1 6.1 0 0 0 4.24 0 1 1 0 0 1 .67 1.89 8.19 8.19 0 0 1-5.58 0z",fill:"#ff523c"}),a.createElement("path",{d:"M16 25c-5 0-9-5-9-11s4-11 9-11 9 5 9 11-4 11-9 11zm0-2c3.81 0 7-4 7-9s-3.19-9-7-9-7 4-7 9 3.19 9 7 9z",fill:"url(#a)"}),a.createElement("path",{d:"M16 25c-5 0-9-5-9-11 0-.25 0-.66.07-1.19a13.81 13.81 0 0 1 .47-2.58C8.27 7.66 9.69 6 12 6c4.74 0 9 5.14 9 11 0 5.13-2.2 8-5 8zm0-2c1.56 0 3-1.88 3-6 0-4.83-3.45-9-7-9-1.19 0-2 1-2.54 2.77a12.53 12.53 0 0 0-.4 2.23A9.51 9.51 0 0 0 9 14c0 5 3.19 9 7 9z",fill:"url(#b)"})," ",a.createElement("path",{d:"M16 25c5 0 9-5 9-11 0-.25 0-.66-.07-1.19a13.81 13.81 0 0 0-.47-2.58C23.73 7.66 22.31 6 20 6c-4.74 0-9 5.14-9 11 0 5.13 2.2 8 5 8zm0-2c-1.56 0-3-1.88-3-6 0-4.83 3.45-9 7-9 1.19 0 2 1 2.54 2.77a12.53 12.53 0 0 1 .4 2.23 9.51 9.51 0 0 1 .06 1c0 5-3.19 9-7 9z",fill:"url(#c)"}));t.a=Object(i.a)(o)},function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return c});var a=n(0),i=n(156),o=n(9),l=n(17);const r=n(736);class c extends a.PureComponent{render(){return a.createElement(i.c,null,a.createElement(o.e,null,a.createElement("div",null,a.createElement(o.l,{src:r}),a.createElement("div",null,a.createElement(o.i,null,l.a.headerLabel),a.createElement(o.k,null,l.a.headerTorTitle),a.createElement(o.j,null,l.a.headerTorText)))),a.createElement(o.a,null,a.createElement(o.b,null,a.createElement(o.m,null),a.createElement(o.i,null,l.a.boxTorLabel2),a.createElement(o.k,null,l.a.boxTorTitle),a.createElement(o.j,null,l.a.boxTorText)),a.createElement(o.h,null),a.createElement(o.d,{href:"https://support.brave.com/hc/en-us/articles/360018121491",target:"_blank"},l.a.boxTorButton)))}}},function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return c});var a=n(0),i=n(156),o=n(9),l=n(17);const r=n(737);class c extends a.PureComponent{render(){return a.createElement(i.c,null,a.createElement(o.e,null,a.createElement("div",null,a.createElement(o.l,{src:r}),a.createElement("div",null,a.createElement(o.i,null,l.a.headerLabel),a.createElement(o.k,null,l.a.headerTitle),a.createElement(o.j,null,l.a.headerText)))),a.createElement(o.a,null,a.createElement(o.b,null,a.createElement(o.m,null),a.createElement(o.i,null,l.a.boxTorLabel),a.createElement(o.k,null,l.a.boxTorTitle),a.createElement(o.j,null,l.a.boxTorText2)),a.createElement(o.h,null),a.createElement(o.d,{href:"https://support.brave.com/hc/en-us/articles/360017840332",target:"_blank"},l.a.boxTorButton)))}}},function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return s});var a=n(0),i=n(341),o=n(156),l=n(9),r=n(17);const c=n(736);class s extends a.PureComponent{render(){return a.createElement(o.b,null,a.createElement(l.e,null,a.createElement(o.d,null,a.createElement(l.g,{src:c}),a.createElement("div",null,a.createElement(l.i,null,r.a.headerLabel),a.createElement(l.k,null,r.a.headerTorTitle),a.createElement(l.j,null,r.a.headerTorText)))),a.createElement(l.a,{style:{minHeight:"471px"}},a.createElement(l.b,null,a.createElement(l.c,null),a.createElement(l.i,null,r.a.boxDdgLabel),a.createElement(l.k,null,r.a.boxDdgTitle),a.createElement(l.j,null,r.a.boxDdgText2)),a.createElement(l.h,null),a.createElement(o.a,null,a.createElement(l.d,{settings:!0,href:"https://support.brave.com/hc/en-us/articles/360018266171",target:"_blank"},a.createElement("span",null,r.a.learnMore),a.createElement(i.a,null)))),a.createElement(l.a,null,a.createElement(l.b,null,a.createElement(l.m,null),a.createElement(l.i,null,r.a.boxTorLabel2),a.createElement(l.k,null,r.a.boxTorTitle),a.createElement(l.j,null,r.a.boxTorText)),a.createElement(l.h,null),a.createElement(l.d,{href:"https://support.brave.com/hc/en-us/articles/360018121491",target:"_blank"},r.a.boxTorButton)))}}},function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return s});var a=n(0),i=n(156),o=n(9),l=n(308),r=n(17);const c=n(737);class s extends a.PureComponent{render(){return a.createElement(i.b,null,a.createElement(o.e,null,a.createElement(i.d,null,a.createElement(o.g,{src:c}),a.createElement("div",null,a.createElement(o.i,null,r.a.headerLabel),a.createElement(o.k,null,r.a.headerTitle),a.createElement(o.j,null,r.a.headerText," ",a.createElement(o.f,{href:"https://support.brave.com/hc/en-us/articles/360017840332",target:"_blank"},r.a.headerButton))))),a.createElement(o.a,{style:{minHeight:"475px"}},a.createElement(o.b,null,a.createElement(o.c,null),a.createElement(o.i,null,r.a.boxDdgLabel),a.createElement(o.k,null,r.a.boxDdgTitle),a.createElement(o.j,null,r.a.boxDdgText)),a.createElement(o.h,null),a.createElement(i.a,null,a.createElement(o.d,null,a.createElement("span",null,r.a.boxDdgButton),a.createElement(l.a,null)),a.createElement(o.f,{href:"https://support.brave.com/hc/en-us/articles/360018266171",target:"_blank"},r.a.learnMore))),a.createElement(o.a,null,a.createElement(o.b,null,a.createElement(o.m,null),a.createElement(o.i,null,r.a.boxTorLabel),a.createElement(o.k,null,r.a.boxTorTitle),a.createElement(o.j,null,r.a.boxTorText2)),a.createElement(o.h,null),a.createElement(o.d,{href:"https://support.brave.com/hc/en-us/articles/360018121491",target:"_blank"},r.a.boxTorButton)))}}},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(647),o=n(648),l=n(669),r=n(649),c=n(650),s=n(94),d=n(1262),p=n(830);t.default=class extends a.PureComponent{constructor(e){super(e),this.onMainToggle=(()=>{this.setState({mainToggle:!this.state.mainToggle})}),this.state={mainToggle:!0}}render(){return a.createElement(d.a,null,a.createElement(s.b,{columns:3,customStyle:{gridGap:"32px"}},a.createElement(s.a,{size:2,customStyle:{justifyContent:"center",flexWrap:"wrap"}},a.createElement(p.a,{onToggle:this.onMainToggle,enabled:this.state.mainToggle}),a.createElement(i.default,null),a.createElement(o.default,null),a.createElement(l.default,null)),a.createElement(s.a,{size:1,customStyle:{justifyContent:"center",flexWrap:"wrap"}},a.createElement(r.default,null),a.createElement(c.default,null))))}}},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(686),o=n(687),l=n(38);const r=n(945);t.default=class extends a.Component{adsDisabled(){return a.createElement(i.a,{image:r,type:"ads"},a.createElement("h3",null,l.a.adsDisabledText))}render(){return a.createElement(o.a,{title:l.a.adsTitle,type:"ads",description:l.a.adsDesc,toggle:!1,disabledContent:this.adsDisabled()})}}},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(24),o=n(686),l=n(687),r=n(831),c=n(108),s=n(152),d=n(94),p=n(53),u=n(95),m=n(201),h=n(680),g=n(38);const f=n(112),b=n(273),x=n(946),y=n(274),C=n(185),v=n(275),w=()=>{console.log("nothing")};t.default=class extends a.Component{constructor(e){super(e),this.contributeSettingsChild=(()=>a.createElement(a.Fragment,null,a.createElement(d.b,{columns:1,customStyle:{maxWidth:"270px",margin:"0 auto"}},a.createElement(d.a,{size:1,customStyle:{justifyContent:"center",flexWrap:"wrap"}},a.createElement(p.a,{text:g.a.contributionMonthly},a.createElement(u.a,null,a.createElement("div",{"data-value":"10"},a.createElement(i.a,{value:"10.0",converted:"4.00"})),a.createElement("div",{"data-value":"20"},a.createElement(i.a,{value:"20.0",converted:"6.00"})),a.createElement("div",{"data-value":"40"},a.createElement(i.a,{value:"40.0",converted:"12.00"})),a.createElement("div",{"data-value":"100"},a.createElement(i.a,{value:"100.0",converted:"40.00"})))),a.createElement(p.a,{text:g.a.contributionMinTime},a.createElement(u.a,null,a.createElement("div",{"data-value":"5"},g.a.contributionTime5),a.createElement("div",{"data-value":"8"},g.a.contributionTime8),a.createElement("div",{"data-value":"60"},g.a.contributionTime60))),a.createElement(p.a,{text:g.a.contributionMinVisits},a.createElement(u.a,null,a.createElement("div",{"data-value":"5"},g.a.contributionVisit1),a.createElement("div",{"data-value":"8"},g.a.contributionVisit5),a.createElement("div",{"data-value":"60"},g.a.contributionVisit10))),a.createElement(p.a,{text:g.a.contributionAllowed},a.createElement(m.a,{value:{contributionNonVerified:!0,contributionVideos:!0},multiple:!0},a.createElement("div",{"data-key":"contributionNonVerified"},g.a.contributionNonVerified),a.createElement("div",{"data-key":"contributionVideos"},g.a.contributionVideos))))))),this.onContributeToggle=(()=>{this.setState({contributeToggle:!this.state.contributeToggle})}),this.onContributeModalClose=(()=>{this.setState({modalContribute:!1})}),this.onContributeModalOpen=(()=>{this.setState({modalContribute:!0})}),this.state={contributeToggle:!0,modalContribute:!1}}get contributeRows(){return[{profile:{name:"Bart Baker",verified:!0,provider:"youtube",src:f},url:"https://brave.com",attention:40,onRemove:w},{profile:{name:"duckduckgo.com",verified:!0,src:y},url:"https://brave.com",attention:20,onRemove:w},{profile:{name:"buzzfeed.com",verified:!1,src:b},url:"https://brave.com",attention:10,onRemove:w},{profile:{name:"theguardian.com",verified:!0,src:C},url:"https://brave.com",attention:5,onRemove:w},{profile:{name:"wikipedia.org",verified:!1,src:v},url:"https://brave.com",attention:4,onRemove:w}]}contributeDisabled(){return a.createElement(o.a,{image:x,type:"contribute"},"• Pay directly for the content you love. ",a.createElement("br",null),"• Your ",a.createElement("b",null,"monthly allowance")," gets divided based on your attention metric.")}render(){return a.createElement(l.a,{title:g.a.contributionTitle,type:"contribute",description:g.a.contributionDesc,toggle:!0,checked:this.state.contributeToggle,settingsChild:this.contributeSettingsChild(),disabledContent:this.contributeDisabled(),onToggle:this.onContributeToggle},this.state.modalContribute?a.createElement(r.a,{onRestore:w,numExcludedSites:100,rows:this.contributeRows,onClose:this.onContributeModalClose.bind(self)}):null,a.createElement(c.a,{title:g.a.contributionMonthly},a.createElement(u.a,{floating:!0},a.createElement("div",{"data-value":"10"},a.createElement(i.a,{value:"10.0",converted:"4.00"})),a.createElement("div",{"data-value":"20"},a.createElement(i.a,{value:"20.0",converted:"6.00"})),a.createElement("div",{"data-value":"40"},a.createElement(i.a,{value:"40.0",converted:"12.00"})),a.createElement("div",{"data-value":"100"},a.createElement(i.a,{value:"100.0",converted:"40.00"})))),a.createElement(c.a,{title:g.a.contributionNextDate},a.createElement(h.a,null,"July 25th")),a.createElement(c.a,{title:g.a.contributionSites},"Total  ",a.createElement(i.a,{value:"55",hideText:!0})),a.createElement(s.a,{header:["Site","Attention"],rows:this.contributeRows,allSites:!1,numSites:55,showRemove:!0,onRestore:w,numExcludedSites:100,onShowAll:this.onContributeModalOpen.bind(self),headerColor:!0},"Please visit some sites"))}}},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(224),o=n(307),l=n(681),r=n(349);const c=n(739);t.default=class extends a.Component{constructor(e){super(e),this.onGrantShow=(()=>{this.setState({grantStep:"captcha"})}),this.onGrantHide=(()=>{this.setState({grantStep:""})}),this.onSolution=(()=>{this.setState({grantStep:"complete"})}),this.onComplete=(()=>{this.setState({grantStep:"",grantShow:!1})}),this.state={grantShow:!0,grantStep:""}}render(){return a.createElement(a.Fragment,null,this.state.grantShow?a.createElement(i.a,{onClaim:this.onGrantShow}):null,"captcha"===this.state.grantStep?a.createElement(o.a,{onClose:this.onGrantHide,title:"Almost there…",text:"Prove that you are human!"},a.createElement(l.a,{onSolution:this.onSolution,dropBgImage:c,hint:"blue"})):null,"complete"===this.state.grantStep?a.createElement(o.a,{onClose:this.onGrantHide,title:"It’s your lucky day!",text:"Your token grant is on its way."},a.createElement(r.a,{onClose:this.onComplete,amount:"30.0",date:"8/15/2018"})):null)}}},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(3),o=n(352),l=n(829),r=n(353),c=n(832),s=n(833),d=n(834),p=n(222),u=n(638);const m=n(112),h=n(273),g=n(274),f=n(185),b=n(275),x=()=>{console.log("nothing")};t.default=class extends a.Component{constructor(e){super(e),this.onBackupTabChange=(()=>{const e=0===this.state.activeTabId?1:0;this.setState({activeTabId:e})}),this.onBackupModalClose=(()=>{this.setState({modalBackup:!1})}),this.onBackupModalOpen=(()=>{this.setState({modalBackup:!0})}),this.onActivity=(()=>{this.setState({modalActivity:!0})}),this.onActivityClose=(()=>{this.setState({modalActivity:!1})}),this.state={activeTabId:0,modalBackup:!1,modalActivity:!1}}get activityContributions(){return[{profile:{name:"Bart Baker",verified:!0,provider:"youtube",src:m},url:"https://brave.com",attention:40,onRemove:x,token:{value:"5.0",converted:"5.00"}},{profile:{name:"duckduckgo.com",verified:!0,src:g},url:"https://brave.com",attention:20,onRemove:x,token:{value:"4.0",converted:"11.00"}},{profile:{name:"buzzfeed.com",verified:!1,src:h},url:"https://brave.com",attention:10,onRemove:x,token:{value:"3.0",converted:"15.00"}},{profile:{name:"theguardian.com",verified:!0,src:f},url:"https://brave.com",attention:5,onRemove:x,token:{value:"2.0",converted:"17.00"}},{profile:{name:"wikipedia.org",verified:!1,src:b},url:"https://brave.com",attention:4,onRemove:x,token:{value:"1.0",converted:"11.00"}}]}get activityTransactions(){return[{date:"6/1",type:"deposit",description:"Brave Ads payment for May",amount:{value:"5.0",converted:"5.00"}},{date:"6/9",type:"tipOnLike",description:{publisher:"Bart Baker",platform:"YouTube"},amount:{isNegative:!0,value:"5.0",converted:"11.00"}},{date:"6/10",type:"deposit",description:"Token grant made available or unlocked",amount:{value:"10.0",converted:"15.00"}},{date:"6/12",type:"donation",description:"coinmarketcap.com",amount:{isNegative:!0,value:"10.0",converted:"15.00"}},{date:"6/14",type:"tipOnLike",description:{publisher:"BrendanEich",platform:"Twitter"},amount:{isNegative:!0,value:"1.0",converted:"2.00"}},{date:"6/26",type:"deposit",description:"Added via Uphold",amount:{value:"10.0",converted:"15.00"}},{date:"6/31",type:"contribute",description:"Monthly payment",amount:{isNegative:!0,value:"10.0",converted:"15.00"}},{date:"6/31",type:"recurringDonation",description:"Monthly payment",amount:{isNegative:!0,value:"5.0",converted:"15.00"}}]}render(){const e=Object(i.select)("Content",{empty:"empty",summary:"summary",off:"off"},"empty");return a.createElement(a.Fragment,null,a.createElement(o.a,{balance:"25.0",converted:"6.00 USD",actions:[{name:"Add funds",action:x,icon:a.createElement(p.a,null)},{name:"Withdraw Funds",action:x,icon:a.createElement(u.a,null)}],compact:!1,contentPadding:!1,onSettingsClick:this.onBackupModalOpen,onActivityClick:x,showCopy:!0,showSecActions:!0,grants:Object(i.object)("Claimed grants",[{tokens:"8.0",expireDate:"7/15/2018"},{tokens:"10.0",expireDate:"9/10/2018"},{tokens:"10.0",expireDate:"10/10/2018"}]),connectedWallet:Object(i.boolean)("Connected wallet",!1)},"empty"===e?a.createElement(l.a,null):null,"summary"===e?a.createElement(r.a,{report:{grant:{tokens:"10.0",converted:"0.25"},ads:{tokens:"10.0",converted:"0.25"},deposit:{tokens:"10.0",converted:"0.25"},contribute:{tokens:"10.0",converted:"0.25"},donation:{tokens:"2.0",converted:"0.25"},tips:{tokens:"19.0",converted:"5.25"}},onActivity:this.onActivity}):null,"off"===e?a.createElement(c.a,null):null),this.state.modalBackup?a.createElement(s.a,{activeTabId:this.state.activeTabId,backupKey:"crouch  hint  glow  recall  round  angry  weasel  luggage save  hood  census  near  still   power  vague  balcony camp  law  now  certain  wagon  affair  butter  choice ",onTabChange:this.onBackupTabChange.bind(this),onClose:this.onBackupModalClose.bind(this),onCopy:x,onPrint:x,onSaveFile:x,onRestore:x}):null,this.state.modalActivity?a.createElement(d.a,{contributeRows:this.activityContributions,transactionRows:this.activityTransactions,onClose:this.onActivityClose,onPrint:x,onDownloadPDF:x,onMonthChange:x,months:{"jun-2018":"June 2018","may-2018":"May 2018","apr-2018":"April 2018"},currentMonth:"jun-2018",summary:[{text:"Token Grant available",type:"grant",token:{value:"10.0",converted:"5.20"}},{text:"Earnings from Brave Ads",type:"ads",token:{value:"10.0",converted:"5.20"}},{text:"Brave Contribute",type:"contribute",notPaid:!0,token:{value:"10.0",converted:"5.20",isNegative:!0}},{text:"Recurring Donations",type:"recurring",notPaid:!0,token:{value:"2.0",converted:"1.1",isNegative:!0}},{text:"One-time Donations/Tips",type:"donations",token:{value:"19.0",converted:"10.10",isNegative:!0}}],total:{value:"1.0",converted:"0.5"},paymentDay:12,openBalance:{value:"10.0",converted:"5.20"},closingBalance:{value:"11.0",converted:"5.30"}}):null)}}},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(224),o=n(307),l=n(349);t.default=class extends a.Component{constructor(e){super(e),this.onGrantHide=(()=>{this.setState({grantStep:""})}),this.onClaim=(()=>{this.setState({grantStep:"complete"})}),this.onComplete=(()=>{this.setState({grantStep:"",grantShow:!1})}),this.state={grantShow:!0,grantStep:""}}render(){return a.createElement(a.Fragment,null,this.state.grantShow?a.createElement(i.a,{isMobile:!0,onClaim:this.onClaim}):null,"complete"===this.state.grantStep?a.createElement(o.a,{fullScreen:!0,onClose:this.onGrantHide,title:"It’s your lucky day!",text:"Your token grant is on its way."},a.createElement(l.a,{isMobile:!0,onClose:this.onComplete,amount:"30.0",date:"8/15/2018"})):null)}}},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(29),o=n(95),l=n(108),r=n(24),c=n(354),s=n(18);t.default=class extends a.Component{constructor(e){super(e),this.onAdsToggle=(()=>{this.setState({adsToggle:!this.state.adsToggle})}),this.state={adsToggle:!0}}render(){const e=this.props.rewardsEnabled&&this.state.adsToggle;return a.createElement(c.a,{title:s.a.adsTitle,type:"ads",description:s.a.adsDesc,toggle:!0,checked:e,toggleAction:this.onAdsToggle,settingsChild:a.createElement("div",null,"Ads Settings content")},a.createElement(l.a,{title:a.createElement(i.c,null,s.a.adsEarnings)},a.createElement(i.c,null,a.createElement(r.a,{value:"10.0",converted:"4.00"}))),a.createElement(l.a,{title:a.createElement(i.c,null,s.a.adsDisplayed)},a.createElement(i.c,null,a.createElement(o.a,{type:"light",floating:!0,title:s.a.adsDisplayed},a.createElement("div",{"data-value":"0"},"0"),a.createElement("div",{"data-value":"2"},"2"),a.createElement("div",{"data-value":"4"},"4"),a.createElement("div",{"data-value":"6"},"6")))))}}},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(24),o=n(108),l=n(680),r=n(152),c=n(29),s=n(94),d=n(53),p=n(95),u=n(201),m=n(354),h=n(18);const g=n(112),f=n(273),b=n(274),x=n(185),y=n(275);t.default=class extends a.Component{constructor(e){super(e),this.onContributeToggle=(()=>{this.setState({contributeToggle:!this.state.contributeToggle})}),this.onSitesShownToggle=(()=>{this.setState({allSitesShown:!this.state.allSitesShown})}),this.doNothing=(()=>{console.log("nothing")}),this.contributeSettingsChild=(()=>a.createElement(a.Fragment,null,a.createElement(s.b,{columns:1,customStyle:{maxWidth:"270px",margin:"0 auto"}},a.createElement(s.a,{size:1,customStyle:{justifyContent:"center",flexWrap:"wrap"}},a.createElement(d.a,{text:h.a.contributionMonthly},a.createElement(p.a,{title:h.a.contributionMonthly},a.createElement("div",{"data-value":"10"},a.createElement(i.a,{value:"10.0",converted:"4.00"})),a.createElement("div",{"data-value":"20"},a.createElement(i.a,{value:"20.0",converted:"6.00"})),a.createElement("div",{"data-value":"40"},a.createElement(i.a,{value:"40.0",converted:"12.00"})),a.createElement("div",{"data-value":"100"},a.createElement(i.a,{value:"100.0",converted:"40.00"})))),a.createElement(d.a,{text:h.a.contributionMinTime},a.createElement(p.a,{title:h.a.contributionMinTime},a.createElement("div",{"data-value":"5"},h.a.contributionTime5),a.createElement("div",{"data-value":"8"},h.a.contributionTime8),a.createElement("div",{"data-value":"60"},h.a.contributionTime60))),a.createElement(d.a,{text:h.a.contributionMinVisits},a.createElement(p.a,{title:h.a.contributionMinVisits},a.createElement("div",{"data-value":"5"},h.a.contributionVisit1),a.createElement("div",{"data-value":"8"},h.a.contributionVisit5),a.createElement("div",{"data-value":"60"},h.a.contributionVisit10))),a.createElement(d.a,{text:h.a.contributionAllowed},a.createElement(u.a,{value:{contributionNonVerified:!0,contributionVideos:!0},multiple:!0},a.createElement("div",{"data-key":"contributionNonVerified"},h.a.contributionNonVerified),a.createElement("div",{"data-key":"contributionVideos"},h.a.contributionVideos))))))),this.state={allSitesShown:!1,contributeToggle:!0}}get contributeRows(){return[{profile:{name:"Bart Baker",verified:!0,provider:"youtube",src:g},url:"https://brave.com",attention:40,onRemove:this.doNothing},{profile:{name:"duckduckgo.com",verified:!0,src:b},url:"https://brave.com",attention:20,onRemove:this.doNothing},{profile:{name:"buzzfeed.com",verified:!1,src:f},url:"https://brave.com",attention:10,onRemove:this.doNothing},{profile:{name:"theguardian.com",verified:!0,src:x},url:"https://brave.com",attention:5,onRemove:this.doNothing},{profile:{name:"wikipedia.org",verified:!1,src:y},url:"https://brave.com",attention:4,onRemove:this.doNothing},{profile:{name:"duckduckgo.com",verified:!0,src:b},url:"https://brave.com",attention:20,onRemove:this.doNothing},{profile:{name:"buzzfeed.com",verified:!1,src:f},url:"https://brave.com",attention:10,onRemove:this.doNothing},{profile:{name:"theguardian.com",verified:!0,src:x},url:"https://brave.com",attention:5,onRemove:this.doNothing},{profile:{name:"wikipedia.org",verified:!1,src:y},url:"https://brave.com",attention:4,onRemove:this.doNothing}]}render(){const e=this.state.allSitesShown?h.a.contributionHideAll:h.a.contributionSeeAll,t=this.state.allSitesShown?this.contributeRows:this.contributeRows.slice(0,5),n=this.props.rewardsEnabled&&this.state.contributeToggle;return a.createElement(m.a,{title:h.a.contributionTitle,type:"contribute",description:h.a.contributionDesc,toggle:!0,checked:n,toggleAction:this.onContributeToggle,settingsChild:this.contributeSettingsChild()},a.createElement(o.a,{title:a.createElement(c.c,null,h.a.contributionMonthly)},a.createElement(c.c,null,a.createElement(p.a,{floating:!0,title:h.a.contributionMonthly},a.createElement("div",{"data-value":"10"},a.createElement(i.a,{value:"10.0",converted:"4.00"})),a.createElement("div",{"data-value":"20"},a.createElement(i.a,{value:"20.0",converted:"6.00"})),a.createElement("div",{"data-value":"40"},a.createElement(i.a,{value:"40.0",converted:"12.00"})),a.createElement("div",{"data-value":"100"},a.createElement(i.a,{value:"100.0",converted:"40.00"}))))),a.createElement(o.a,{title:a.createElement(c.c,null,h.a.contributionNextDate)},a.createElement(c.c,null,a.createElement(l.a,null,"July 25th"))),a.createElement(c.f,null,a.createElement(o.a,{title:a.createElement(c.g,null,h.a.contributionSitesNum)},a.createElement(c.i,null,"Total  ",a.createElement(i.a,{value:"55",hideText:!0})))),a.createElement(c.c,null,a.createElement(r.a,{header:["Site Visited/Your Attention","Exclude"],rows:t,allSites:!0,numSites:5,headerColor:!0,showRowAmount:!0,showRemove:!0,isMobile:!0})),a.createElement(c.e,null,a.createElement(c.d,{onClick:this.onSitesShownToggle},e," ",this.contributeRows.length," ",h.a.contributionSitesSuffix)))}}},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(29),o=n(354),l=n(108),r=n(24),c=n(303),s=n(94),d=n(53),p=n(201),u=n(18);const m=n(112),h=n(326),g=n(185);t.default=class extends a.Component{constructor(e){super(e),this.doNothing=(()=>{console.log("nothing")}),this.onChange=((e,t,n,a)=>{this.setState({check:a})}),this.donationSettingsChild=(()=>a.createElement(a.Fragment,null,a.createElement(s.b,{columns:1,customStyle:{maxWidth:"270px",margin:"0 auto"}},a.createElement(s.a,{size:1,customStyle:{justifyContent:"center",flexWrap:"wrap"}},a.createElement(d.a,{text:"Enable ability to give tips on ‘Like’ posts"},a.createElement(p.a,{value:this.state.check,multiple:!0,onChange:this.onChange},a.createElement("div",{"data-key":"yt"},"YouTube"),a.createElement("div",{"data-key":"tw"},"Twitter"),a.createElement("div",{"data-key":"inst"},"Instagram"))))))),this.state={check:{yt:!0,tw:!1,inst:!1}}}get donationRows(){return[{profile:{name:"Bart Baker",verified:!0,provider:"youtube",src:m},url:"https://brave.com",type:"recurring",contribute:{tokens:"2.0",converted:"0.20"},onRemove:this.doNothing},{profile:{verified:!1,name:"theguardian.com",src:g},url:"https://brave.com",type:"donation",contribute:{tokens:"12.0",converted:"6.20"},text:"May 7"},{profile:{verified:!1,name:"BrendanEich",provider:"twitter",src:h},url:"https://brave.com",type:"tip",contribute:{tokens:"7.0",converted:"3.20"},text:"May 2"}]}render(){return a.createElement(o.a,{title:u.a.donationTitle,type:"donation",toggle:!1,checked:this.props.rewardsEnabled,description:u.a.donationDesc,settingsChild:this.donationSettingsChild()},a.createElement(l.a,{title:a.createElement(i.c,null,u.a.donationTotal)},a.createElement(i.c,null,a.createElement(r.a,{value:"21.0",converted:"7.00"}))),a.createElement(i.c,null,a.createElement(c.a,{rows:this.donationRows,allItems:!0,headerColor:!0},"Please visit some sites")))}}},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(3),o=n(352),l=n(353),r=n(29),c=n(340),s=n(222),d=n(347);const p=()=>{console.log("nothing")},u=()=>{console.log("view not implemented")};t.default=class extends a.Component{constructor(e){super(e),this.toggleAddFunds=(()=>{this.setState({addFundsShown:!this.state.addFundsShown})}),this.state={addFundsShown:!1}}get walletAddresses(){return[{type:"BTC",address:"17fBi3kyqUd2jjPDSi8ArBbMWso16qmxW5",qr:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALkAAAC5CAAAAABRxsGAAAABz0lEQVR42u3cQY7DIAwF0Nz/0u1uVgP5hqYV8Fh1lFF4qVRjbNrrteq4yMnJycnJycnJycnJyXeRX/ejfcO/q6X/q89GTn62PJiz+Wdz9v/uXJqNnJy8/blvRo9mLGg+V302cnLyAXm6jAfBiZyc/EF5kJ+n9yMnJ5/Pz4OZSnvu7+0syMmXlwdr+Qdffbk6R06+sjxu1YRpeD9f+EWHi5x8ZXnwuW8+QwAs1a3JycnjwJEm34OtpFJuT05+tjyIMkHtqm6bjy3k5MfI09JT0A5KL8THqcjJT5WnnddHwkqAJicnj/fDaa82zRzmO7nk5MfI+4SgxBz0eftv22hsISffVx6Ei9J0/TJYvQBNTk6ebJSDq6Os6bMW5OT7ypO1NzwhVdpf99MMcnLyuPP68HONrv7k5GfJSy2d+nY7jUHk5OQ38mDOWokqXP3nYws5+W7ydPRjUD3vLu25ycmPlV/3I60zB6cp+q/mO1zk5FvK04hSP9FU+qrAJ6tz5OS7yeuHK9IE4aoMcnLyUflgzCgVvsnJyedjS1oQSytq89U5cvLN5fWraWoerPTk5OTzv4FWf8z0uR6szpGTryxfYpCTk5OTk5OTk5OTk5OvON4QJEO8FpFK4QAAAABJRU5ErkJggg=="},{type:"ETH",address:"0xF10bfc0EB8Fcfd1240a5BB97C3e5a7752cD1C388",qr:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM0AAADNCAAAAAA+16u1AAACPklEQVR42u3bwU7DMBAE0P7/T8ONA1LcGXsTFfRyKpQ2+3IY2bvm9fWfrhcNDQ0NDQ0NDQ0NDQ0NDc2p5vX+6m7y84lfry6/ebMCGhqaSU1QW/CJX2+kT6KvgIaG5h7NZd5UubQu6/KbgwpoaGg+QNNn2iWYhobm72rSzwZxRkND81GatGex+bG14eHdGg0NTd/rvPnVw51bGhqajTHj8iZplWlL5O4pLg0NTbC7qIruextBqtLQ0DyiqQaYl8LL363Dbv04hlY2NDQ0qSYoK4ikILqC5c15ptHQ0FSa4E792HJzhHo08aChoTmeEfQ3Duae/RLqqMtBQ0NzsrIJGhebtfWtz/P9DQ0NTZVpgStY43T9yrBDQkND84imGmX2rYn10qiKMxoamnFNuhxJrZvnH9MGBw0NzbgmbWakZaVReHIaioaGZkhTRVe1sgkmKNXGh4aG5h7NzHQybWb0OXfU66ShoakmHsGwI9gMBXk4s8ahoaEZ0lSdy+CU08k/TQ0lNA0NzaYmaFqmG5X+EY13bmloaI4zbXOP0g871o9tKKFpaGjSTAuOL6Y90X7Pk8YZDQ3NpCZuKoQHodYxlbY5aWhontO83l/rP+6LmTlQTUNDM6lJkyzY7lSLpODJ0tDQPKfZLDCIs2p4Mtm5paGhuVmzLjrY5KQNTxoamo/XHGfaxgiGhoZmWpO+GxxcSmNq8+ADDQ3NuCbdbAQ/phuV4I9v7NzS0ND8g4uGhoaGhoaGhoaGhoaGhqa5vgFTleQ0sHcoKgAAAABJRU5ErkJggg=="},{type:"BAT",address:"0xF10bfc0EB8Fcfd1240a5BB97C3e5a7752cD1C388",qr:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM0AAADNCAAAAAA+16u1AAACPklEQVR42u3bwU7DMBAE0P7/T8ONA1LcGXsTFfRyKpQ2+3IY2bvm9fWfrhcNDQ0NDQ0NDQ0NDQ0NDc2p5vX+6m7y84lfry6/ebMCGhqaSU1QW/CJX2+kT6KvgIaG5h7NZd5UubQu6/KbgwpoaGg+QNNn2iWYhobm72rSzwZxRkND81GatGex+bG14eHdGg0NTd/rvPnVw51bGhqajTHj8iZplWlL5O4pLg0NTbC7qIruextBqtLQ0DyiqQaYl8LL363Dbv04hlY2NDQ0qSYoK4ikILqC5c15ptHQ0FSa4E792HJzhHo08aChoTmeEfQ3Duae/RLqqMtBQ0NzsrIJGhebtfWtz/P9DQ0NTZVpgStY43T9yrBDQkND84imGmX2rYn10qiKMxoamnFNuhxJrZvnH9MGBw0NzbgmbWakZaVReHIaioaGZkhTRVe1sgkmKNXGh4aG5h7NzHQybWb0OXfU66ShoakmHsGwI9gMBXk4s8ahoaEZ0lSdy+CU08k/TQ0lNA0NzaYmaFqmG5X+EY13bmloaI4zbXOP0g871o9tKKFpaGjSTAuOL6Y90X7Pk8YZDQ3NpCZuKoQHodYxlbY5aWhontO83l/rP+6LmTlQTUNDM6lJkyzY7lSLpODJ0tDQPKfZLDCIs2p4Mtm5paGhuVmzLjrY5KQNTxoamo/XHGfaxgiGhoZmWpO+GxxcSmNq8+ADDQ3NuCbdbAQ/phuV4I9v7NzS0ND8g4uGhoaGhoaGhoaGhoaGhqa5vgFTleQ0sHcoKgAAAABJRU5ErkJggg=="},{type:"LTC",address:"Le8aswhmGJjn9jP5teEWdyJARak4xU8sCn",qr:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM0AAADNCAAAAAA+16u1AAACOUlEQVR42u3bQXLDIAwF0Nz/0u0FYvKFBNN0Hit7mtq8LDTwRV4//2m8aGhoaGhoaGhoaGhoaGhouprX57H+8LvnvbstPXT9DhoamnHNc+F4fNZyWmvX0AxoaGimNe/qyONf16UrqILBO2hoaL5Is4YESx4aGpov0pRK13prQ0ND86c0gbX0zvX0g/nS0NDc0wRJ4+Gry8ktDQ3NRptxL7ksTfBeF5eGhibYXQSR5mPtS/dBHTANDc2kJkguSwUrtbYaojQ0NEc06e1mSVq7gmCUhobmoCbIHIPOZsnVWd7Q0NCMa9Iwo9TZ3MgwwwyEhoZmXBN0MR+vgmVL50QEDQ3NPU2w4Ci1LUvdzsmUg4aGpt73TE8lBWlIqYhNdjxoaGg6fc/A1d6ZpKcjk7fR0NAMatJ5pM3PYPsU/Ec/s6GhoUlXNmlforRsqR9yCLqiNDQ045pSWekccCr1VvtZJw0NTSfrDEpXUBnTk9HpXouGhua0Zv3AzW7n+iMH+540NDT1rHN97LkejsRLlM9nrmloaO5pSpFmWr+Cn1qkSy0aGprLmtJpqHVcEViH9jc0NDQlTTo2s41SejF5oouGhqaTdaYlKbgKdk6lM9I0NDRnNEElS0OP9DtJ26o0NDT3NEG96fQvgv3Smd0aDQ3NoGZzPVPqc9DQ0PxlTTC3/orlc8BBQ0NzRpMGmeltUMTW3ywNDc09TZBPBH3PemFrlVEaGpoZzdcOGhoaGhoaGhoaGhoaGhqayvgFbnvHJxkVZlQAAAAASUVORK5CYII="}]}render(){const{visible:e,toggleAction:t}=this.props;return e?a.createElement(a.Fragment,null,a.createElement(r.k,null,a.createElement(r.j,null,a.createElement(c.a,{onClick:t})),a.createElement(r.l,null,a.createElement(o.a,{balance:"30.0",converted:"7.00 USD",actions:[{name:"Add funds",action:this.toggleAddFunds,icon:a.createElement(s.a,null)}],compact:!0,isMobile:!0,onSettingsClick:u,onActivityClick:p,showSecActions:!0,grants:Object(i.object)("Claimed grants",[{tokens:"8.0",expireDate:"7/15/2018"},{tokens:"10.0",expireDate:"9/10/2018"},{tokens:"10.0",expireDate:"10/10/2018"}]),connectedWallet:Object(i.boolean)("Connected wallet",!1)},a.createElement(l.a,{report:{grant:{tokens:"10.0",converted:"0.25"},ads:{tokens:"10.0",converted:"0.25"},deposit:{tokens:"10.0",converted:"0.25"},contribute:{tokens:"10.0",converted:"0.25"},donation:{tokens:"2.0",converted:"0.25"},tips:{tokens:"19.0",converted:"5.25"}},onActivity:p}))),this.state.addFundsShown?a.createElement(d.a,{isMobile:!0,onClose:this.toggleAddFunds,addresses:this.walletAddresses}):null)):null}}},function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return r});var a=n(0),i=n(49),o=n(157),l=n(15);class r extends a.PureComponent{render(){return a.createElement(i.b,{href:"chrome://settings",rel:"noreferrer noopener",target:"_blank"},a.createElement("span",null,l.a.editDefaults),a.createElement(o.d,null))}}},function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return p});var a=n(0),i=n(351),o=n(49),l=n(76),r=n(308),c=n(157),s=n(15),d=n(61);class p extends a.PureComponent{render(){const{fakeOnChange:e,enabled:t,sitename:n,favicon:p}=this.props;return a.createElement(i.c,{id:"braveShieldsHeader",enabled:t},a.createElement(o.d,{enabled:t},a.createElement(l.c,{size:"medium"},s.a.shields," ",a.createElement(l.b,{enabled:t}," ",t?s.a.up:s.a.down),a.createElement(l.l,null," ",s.a.forThisSite)),a.createElement(r.a,{id:"mainToggle",checked:t,onChange:e,size:"large"})),t?a.createElement(l.a,{enabled:!0},s.a.enabledMessage):null,a.createElement(i.f,null,a.createElement(o.c,null,a.createElement("img",{src:p}),a.createElement(l.c,{size:"large"},n)),t?a.createElement(o.c,null,a.createElement(l.b,{enabled:!0,size:"large"},d.a.totalBlocked),a.createElement(l.c,{size:"medium"},s.a.totalBlocked)):a.createElement(o.a,null,a.createElement(o.p,null,a.createElement(c.e,null)),a.createElement(l.a,{enabled:!1},s.a.disabledMessage))))}}},function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return g});var a=n(0),i=n(49),o=n(225),l=n(157),r=n(76),c=n(308),s=n(142),d=n(149),p=n(15),u=n(61);const m=(e,t,n)=>a.createElement(s.default,{favicon:e,sitename:t,title:p.a.blockAds,onToggle:n,data:u.a.totalAdsTrackersBlocked},a.createElement(d.default,{onClickDismiss:n,list:u.a.blockedFakeResources})),h=(e,t,n)=>a.createElement(s.default,{favicon:e,sitename:t,title:p.a.connectionsEncrypted,onToggle:n,data:u.a.thirdPartyDeviceRecognitionBlocked},a.createElement(d.default,{onClickDismiss:n,list:u.a.blockedFakeResources}));class g extends a.PureComponent{constructor(e){super(e),this.onChangeBlockAds=(e=>{this.setState({blockAds:e.target.checked})}),this.onChangeConnectionsEncrypted=(e=>{this.setState({connectionsEncrypted:e.target.checked})}),this.onToggleTotalAdsTrackersBlocked=(()=>{this.setState({openTotalAdsTrackersBlockedList:!this.state.openTotalAdsTrackersBlockedList})}),this.onToggleConnectionsEncrypted=(()=>{this.setState({openConnectionsEncryptedList:!this.state.openConnectionsEncryptedList})}),this.state={blockAds:!1,openTotalAdsTrackersBlockedList:!1,connectionsEncrypted:!1,openConnectionsEncryptedList:!1}}render(){const{enabled:e,favicon:t,sitename:n}=this.props,{blockAds:s,openTotalAdsTrackersBlockedList:d,connectionsEncrypted:g,openConnectionsEncryptedList:f}=this.state;return e?a.createElement(a.Fragment,null,a.createElement(i.s,null,a.createElement(o.b,{onClick:this.onToggleTotalAdsTrackersBlocked},a.createElement(l.g,null)),a.createElement(i.q,{onClick:this.onToggleTotalAdsTrackersBlocked},u.a.totalAdsTrackersBlocked),a.createElement(r.k,{onClick:this.onToggleTotalAdsTrackersBlocked},p.a.blockAds),a.createElement(i.r,null,a.createElement(c.a,{id:"blockAds",checked:s,onChange:this.onChangeBlockAds}))),d?m(t,n,this.onToggleTotalAdsTrackersBlocked):null,a.createElement(i.s,null,a.createElement(o.b,{disabled:!0,onClick:this.onToggleConnectionsEncrypted},a.createElement(l.g,null)),a.createElement(i.q,{disabled:!0,onClick:this.onToggleConnectionsEncrypted},"0"),a.createElement(r.k,{disabled:!0,onClick:this.onToggleConnectionsEncrypted},p.a.connectionsEncrypted),a.createElement(i.r,null,a.createElement(c.a,{id:"connectionsEncrypted",checked:g,onChange:this.onChangeConnectionsEncrypted}))),f?h(t,n,this.onToggleConnectionsEncrypted):null):null}}},function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return m});var a=n(0),i=n(10),o=n(158),l=n(144),r=n(68),c=n(195),s=n(296),d=n(8),p=n(52);const u=n(956);class m extends a.PureComponent{constructor(e){super(e),this.onClickNewSyncChainButton=(()=>{this.setState({newToSync:!this.state.newToSync})}),this.onClickEnterSyncChainCodeButton=(()=>{this.setState({existingSyncCode:!this.state.existingSyncCode})}),this.state={newToSync:!1,existingSyncCode:!1}}get mainDeviceName(){return p.a.device1.name}render(){const{newToSync:e,existingSyncCode:t}=this.state;return a.createElement(o.a,null,e?a.createElement(c.default,{onClose:this.onClickNewSyncChainButton,mainDeviceName:this.mainDeviceName}):null,t?a.createElement(s.default,{onClose:this.onClickEnterSyncChainCodeButton}):null,a.createElement(l.e,null,a.createElement("img",{src:u}),a.createElement("div",null,a.createElement(r.d,{level:2},Object(d.a)("syncTitle")),a.createElement(r.a,null,Object(d.a)("syncDescription")),a.createElement(l.b,null,a.createElement(l.a,null,a.createElement("div",null,a.createElement(i.a,{level:"primary",type:"accent",onClick:this.onClickNewSyncChainButton,text:Object(d.a)("startSyncChain")})),a.createElement("div",null,a.createElement(i.a,{level:"secondary",type:"accent",onClick:this.onClickEnterSyncChainCodeButton,text:Object(d.a)("enterSyncChainCode")})))))))}}},function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return b});var a=n(0),i=n(75),o=n(10),l=n(115),r=n(158),c=n(68),s=n(144),d=n(298),p=n(297),u=n(299),m=n(195),h=n(300),g=n(8),f=n(52);class b extends a.PureComponent{constructor(e){super(e),this.onClickRemoveOtherDeviceButton=(()=>{this.setState({removeOtherDevice:!this.state.removeOtherDevice})}),this.onClickRemoveMainDeviceButton=(()=>{this.setState({removeMainDevice:!this.state.removeMainDevice})}),this.onClickViewSyncCodeButton=(()=>{this.setState({viewSyncCode:!this.state.viewSyncCode})}),this.onClickAddDeviceButton=(()=>{this.setState({addDevice:!this.state.addDevice})}),this.onClickResetSyncButton=(()=>{this.setState({resetSync:!this.state.resetSync})}),this.state={removeOtherDevice:!1,removeMainDevice:!1,viewSyncCode:!1,addDevice:!1,resetSync:!1}}get mainDeviceName(){return f.a.device1.name}get otherDeviceName(){return f.a.device2.name}get rows(){return[{content:[{content:a.createElement(r.b,null,f.a.device1.name," (main device)")},{content:f.a.device1.lastActive},{content:a.createElement(r.d,{"data-id":"","data-name":"",onClick:this.onClickRemoveMainDeviceButton},"×")}]},{content:[{content:a.createElement(r.b,null,f.a.device2.name)},{content:f.a.device2.lastActive},{content:a.createElement(r.d,{"data-id":"","data-name":"",onClick:this.onClickRemoveOtherDeviceButton},"×")}]}]}get header(){return[{content:a.createElement(r.b,null,Object(g.a)("deviceName"))},{content:Object(g.a)("addedOn")},{content:a.createElement(r.c,null,Object(g.a)("remove"))}]}render(){const{removeOtherDevice:e,removeMainDevice:t,viewSyncCode:n,addDevice:b,resetSync:x}=this.state;return a.createElement(r.a,null,e?a.createElement(p.default,{onClose:this.onClickRemoveOtherDeviceButton,otherDeviceName:this.otherDeviceName}):null,t?a.createElement(d.default,{onClose:this.onClickRemoveMainDeviceButton,mainDeviceName:this.mainDeviceName}):null,n?a.createElement(u.default,{onClose:this.onClickViewSyncCodeButton}):null,b?a.createElement(m.default,{onClose:this.onClickAddDeviceButton,mainDeviceName:this.mainDeviceName}):null,x?a.createElement(h.default,{onClose:this.onClickResetSyncButton,mainDeviceName:this.mainDeviceName}):null,a.createElement(c.d,{level:2},Object(g.a)("braveSync")),a.createElement(s.b,null,a.createElement(c.b,{level:2},Object(g.a)("syncChainDevices")),a.createElement(s.e,null,a.createElement(l.a,{header:this.header,rows:this.rows}),a.createElement(s.d,null,a.createElement(o.a,{level:"secondary",type:"accent",size:"medium",text:Object(g.a)("addDevice"),onClick:this.onClickAddDeviceButton}),a.createElement(o.a,{level:"secondary",type:"accent",size:"medium",text:Object(g.a)("viewSyncCode"),onClick:this.onClickViewSyncCodeButton})))),a.createElement(s.b,null,a.createElement(c.b,{level:2},Object(g.a)("dataToSync")," ",f.a.device1.name),a.createElement(s.c,null,a.createElement(i.a,{id:"bookmarks",checked:!1}),a.createElement(c.c,{htmlFor:"bookmarks"},Object(g.a)("bookmarks")),a.createElement(i.a,{id:"savedSiteSettings",checked:!1}),a.createElement(c.c,{htmlFor:"savedSiteSettings"},Object(g.a)("savedSiteSettings")),a.createElement(i.a,{id:"browsingHistory",checked:!1}),a.createElement(c.c,{htmlFor:"browsingHistory"},Object(g.a)("browsingHistory")))),a.createElement(s.b,null,a.createElement(o.a,{level:"primary",type:"accent",size:"medium",text:Object(g.a)("leaveSyncChain"),onClick:this.onClickResetSyncButton})))}}},function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return p});var a=n(0),i=n(226),o=n(227),l=n(93),r=n(10),c=n(13),s=n(30);const d=n(964);class p extends a.PureComponent{render(){const{index:e,currentScreen:t,onClick:n}=this.props;return a.createElement(i.a,{zIndex:e,active:t===e,screenPosition:"1"+(e+1)+"0%",isPrevious:e<=t},a.createElement(o.a,{src:d}),a.createElement(l.b,null,s.a.welcome),a.createElement(l.a,null,s.a.whatIsBrave),a.createElement(r.a,{level:"primary",type:"accent",size:"large",text:s.a.letsGo,onClick:n,icon:{position:"after",image:a.createElement(c.ArrowRightIcon,null)}}))}}},function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return d});var a=n(0),i=n(226),o=n(227),l=n(93),r=n(10),c=n(30);const s=n(965);class d extends a.PureComponent{constructor(e){super(e),this.onClickImport=(()=>{this.setState({onClickFired:!this.state.onClickFired}),this.props.onClick()}),this.state={onClickFired:!1}}render(){const{index:e,currentScreen:t}=this.props;return a.createElement(i.a,{zIndex:e,active:e===t,screenPosition:"1"+(e+1)+"0%",isPrevious:e<=t},a.createElement(o.b,{src:s}),a.createElement(l.b,null,c.a.importFromAnotherBrowser),a.createElement(l.a,null,c.a.setupImport),a.createElement(r.a,{level:"primary",type:"accent",size:"large",text:(this.state.onClickFired,c.a.import),onClick:this.onClickImport}))}}},function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return d});var a=n(0),i=n(226),o=n(227),l=n(93),r=n(10),c=n(30);const s=n(966);class d extends a.PureComponent{render(){const{index:e,currentScreen:t,onClick:n}=this.props;return a.createElement(i.a,{zIndex:e,active:e===t,screenPosition:"1"+(e+1)+"0%",isPrevious:e<=t},a.createElement(o.d,{src:s}),a.createElement(l.b,null,c.a.setDefaultSearchEngine),a.createElement(l.a,null,c.a.chooseSearchEngine),a.createElement(r.a,{level:"primary",type:"accent",size:"large",text:c.a.search,onClick:n}))}}},function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return d});var a=n(0),i=n(226),o=n(227),l=n(93),r=n(10),c=n(30);const s=n(967);class d extends a.PureComponent{render(){const{index:e,currentScreen:t,onClick:n}=this.props;return a.createElement(i.a,{zIndex:e,active:e===t,screenPosition:"1"+(e+1)+"0%",isPrevious:e<=t},a.createElement(o.f,{src:s}),a.createElement(l.b,null,c.a.chooseYourTheme),a.createElement(l.a,null,c.a.findToolbarTheme),a.createElement(r.a,{level:"primary",type:"accent",size:"large",text:c.a.theme,onClick:n}))}}},function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return s});var a=n(0),i=n(226),o=n(227),l=n(93),r=n(30);const c=n(968);class s extends a.PureComponent{render(){const{index:e,currentScreen:t}=this.props;return a.createElement(i.a,{zIndex:e,active:e===t,screenPosition:"1"+(e+1)+"0%",isPrevious:e<=t},a.createElement(o.e,{src:c}),a.createElement(l.b,null,r.a.protectYourPrivacy),a.createElement(l.a,null,r.a.adjustProtectionLevel))}}},function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return d});var a=n(0),i=n(226),o=n(227),l=n(93),r=n(10),c=n(30);const s=n(969);class d extends a.PureComponent{render(){const{index:e,currentScreen:t,onClick:n}=this.props;return a.createElement(i.a,{zIndex:e,active:e===t,screenPosition:"1"+(e+1)+"0%",isPrevious:e<=t},a.createElement(o.c,{src:s}),a.createElement(l.b,null,c.a.enableBraveRewards),a.createElement(l.a,null,c.a.setupBraveRewards),a.createElement(r.a,{level:"primary",type:"accent",size:"large",text:c.a.getStarted,onClick:n}))}}},function(e,t,n){"use strict";n.r(t),n.d(t,"FullPageStory",function(){return o});var a=n(0);const i={width:"-webkit-fill-available",height:"-webkit-fill-available"},o=e=>a.createElement("div",{style:i},e())},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(49),o=n(76),l=n(351),r=n(157),c=n(4);const s=Object(c.c)("div").withConfig({displayName:"StyledOptions"})`
  position: absolute;
  width: 100%;
  bottom: 58px;
  border-radius: 3px;
  box-shadow: 0 2px 5px 0 rgba(223, 223, 232, 0.5);
  background-color: #fff;
  border: solid 1px #dfdfe8;
  overflow: hidden;
  z-index: 2;
  display: ${e=>e.visible?"block":"none"};
  padding: 9px 0;
`,d=Object(c.c)("div").withConfig({displayName:"StyledOption"})`
  font-size: 14px;
  line-height: 36px;
  color: #1b1d2f;
  position: relative;
  padding: 0 0 0 4px;
  display: flex;
  background-color: ${e=>e.selected?"#e9f0ff":"#fff"};

  &:hover {
    background-color: #e9f0ff;
  }
`,p=Object(c.c)("div").withConfig({displayName:"StyledOptionCheck"})`
  flex-basis: 11px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  color: #A1A8F2;
`,u=Object(c.c)("div").withConfig({displayName:"StyledOptionText"})`
  flex-grow: 1;
  padding: 0 21px 0 6px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  user-select: none;
`;var m=n(712);class h extends a.PureComponent{render(){const{selected:e,onClick:t,children:n}=this.props;return a.createElement(d,{onClick:t,selected:e},a.createElement(p,null,e?a.createElement(m.a,null):null),a.createElement(u,null,n))}}class g extends a.PureComponent{render(){const{visible:e,position:t,children:n}=this.props;return a.createElement(s,{visible:e,position:t},n)}}var f=n(10),b=n(13),x=n(15);n.d(t,"default",function(){return y});class y extends a.PureComponent{constructor(e){super(e),this.onClickOutsideBounds=(()=>{this.setState({showApplyOptions:!1})}),this.onClickBlockItem=(e=>{console.log("do something"),console.log("do something for",e.currentTarget.dataset.item)}),this.onClickAllowItem=(e=>{e.preventDefault(),console.log("do something for",e.currentTarget.dataset.item)}),this.onClickUndoAction=(e=>{console.log("do something for",e.currentTarget.dataset.item)}),this.onClickApplyOptions=(()=>{this.setState({showApplyOptions:!this.state.showApplyOptions})}),this.applyScriptsOnce=(()=>{console.log("do something")}),this.applyScriptsAlways=(()=>{console.log("do something")}),this.enabledList=(e=>e.map((e,t)=>!1===e.blocked?null:a.createElement(i.j,{hightlighted:e.hasUserInput,key:t},e.hasUserInput?a.createElement(o.f,null,x.a.blocked):a.createElement(o.d,{"data-item":e.index,onClick:this.onClickAllowItem},x.a.allow),a.createElement(o.g,{title:e.name},e.name),e.hasUserInput?a.createElement(o.d,{onClick:this.onClickUndoAction},x.a.undo):null))),this.disabledList=(e=>e.map((e,t)=>!0===e.blocked?null:a.createElement(i.j,{hightlighted:e.hasUserInput,key:t},e.hasUserInput?a.createElement(o.e,null,x.a.allowed):a.createElement(o.d,{onClick:this.onClickBlockItem},x.a.block),a.createElement(o.g,{title:e.name},e.name),e.hasUserInput?a.createElement(o.d,{onClick:this.onClickUndoAction},x.a.undo):null))),this.state={showApplyOptions:!1}}get blockedListSize(){return this.props.list.filter(e=>!1===e.blocked).length}get allowedListSize(){return this.props.list.filter(e=>!0===e.blocked).length}render(){const{showApplyOptions:e}=this.state,{list:t,onClickDismiss:n}=this.props;return a.createElement(a.Fragment,null,a.createElement(l.d,null,e?a.createElement(l.b,{onClick:this.onClickOutsideBounds}):null,a.createElement(i.n,null,a.createElement(r.b,null),a.createElement(o.j,{accent:"blocked"},x.a.blockedScripts," (",this.blockedListSize,")"),a.createElement(o.d,null,x.a.allowAll)),this.enabledList(t),a.createElement(i.n,null,a.createElement(r.a,null),a.createElement(o.j,{accent:"allowed"},x.a.allowedScripts," (",this.allowedListSize,")"),a.createElement(o.d,null,x.a.blockAll)),this.disabledList(t)),a.createElement(i.f,null,a.createElement(i.g,null,a.createElement(o.d,{onClick:n},x.a.cancel)),a.createElement(i.h,null,a.createElement(f.a,{level:"primary",type:"accent",text:x.a.apply,onClick:this.onClickApplyOptions,icon:{position:"after",image:a.createElement(b.CaratDownIcon,null)}}),a.createElement(g,{visible:e},a.createElement(h,{selected:!1,onClick:this.applyScriptsOnce},x.a.applyOnce),a.createElement(h,{selected:!1,onClick:this.applyScriptsAlways},x.a.alwaysApply)))))}}},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(2),o=n(1);const l=Object(o.default)("div").withConfig({displayName:"StyledWrapper"})`
  width: 100%;
  display: flex;
  background: #E9F0FF;
  padding: 5px 30px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  box-shadow: 0 1px 12px 0 rgba(99,105,110,0.18);
`,r=Object(o.default)("div").withConfig({displayName:"StyledAlertIcon"})`
  width: 57px;
  height: 57px;
  color: #15A4FA;
`,c=Object(o.default)("div").withConfig({displayName:"StyledInfo"})`
  font-size: 14px;
  letter-spacing: 0;
  line-height: 18px;
  padding: 12px 15px 0px 11px;
  vertical-align: top;
  max-width: 387px;
`,s=Object(o.default)("span").withConfig({displayName:"StyledMessage"})`
  color: #000;
  margin-right: ${e=>e.modal?5:3}px;
  font-weight: ${e=>e.modal?500:400};
  font-size: ${e=>e.modal?"22px":"inherit"};
`,d=Object(o.default)("span").withConfig({displayName:"StyledMonthlyTips"})`
  color: #696FDC;
  font-weight: ${e=>e.modal?500:400};
  display: inline-block;
  font-size: ${e=>e.modal?"22px":"inherit"};
`,p=Object(o.default)("div").withConfig({displayName:"StyledReviewWrapper"})`
  vertical-align: top;
  margin: 20px 0 0 7px;
`,u=Object(o.default)("span").withConfig({displayName:"StyledReviewList"})`
  color: #15A4FA;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 18px;
`,m=Object(o.default)("div").withConfig({displayName:"StyledModalContent"})`
  display: block;
`,h=Object(o.default)("div").withConfig({displayName:"StyledTipsIcon"})`
  width: 20%;
  vertical-align: top;
  margin-top: -33px;
  display: inline-block;
`,g=Object(o.default)("div").withConfig({displayName:"StyledModalInfo"})`
  width: 80%;
  padding-left: 20px;
  display: inline-block;
`,f=Object(o.default)("div").withConfig({displayName:"StyledListMessage"})`
  display: block;
  font-size: 16px;
  font-weight: 600;
  margin-top: 30px;
`,b=Object(o.default)("ul").withConfig({displayName:"StyledList"})`
  display: block;
  font-size: 14px;
  font-weight: 300;
  padding-left: 20px;
`,x=Object(o.default)("li").withConfig({displayName:"StyledListItem"})`
  display: block;
  display: list-item;
  line-height: 28px;
  list-style-type: disc;
`,y=Object(o.default)("div").withConfig({displayName:"StyledButton"})`
  width: 235px;
  margin: 40px auto 0 auto;
`,C=Object(o.default)("div").withConfig({displayName:"StyledButtonContainer"})`
  width: 100%;
`;var v=n(42),w=n(734),E=n(713),k=n(10);class O extends a.PureComponent{constructor(e){super(e),this.toggleModalDisplay=(()=>{this.setState({modalShown:!this.state.modalShown}),this.state.modalShown&&this.props.onReview&&this.props.onReview()}),this.pinnedSitesModal=(()=>a.createElement(v.a,{size:"small",outsideClose:!1,onClose:this.toggleModalDisplay},a.createElement(m,null,a.createElement(h,null,a.createElement(w.a,null)),a.createElement(g,null,a.createElement(s,{modal:!0},Object(i.b)("pinnedSitesHeader")),a.createElement(d,{modal:!0},Object(i.b)("monthlyTips")),a.createElement(f,null,Object(i.b)("pinnedSitesMsg")),a.createElement(b,null,a.createElement(x,null,Object(i.b)("pinnedSitesOne")),a.createElement(x,null,Object(i.b)("pinnedSitesTwo")),a.createElement(x,null,Object(i.b)("pinnedSitesThree")),a.createElement(x,null,Object(i.b)("pinnedSitesFour")))),a.createElement(C,null,a.createElement(y,null,a.createElement(k.a,{text:Object(i.b)("ok"),size:"call-to-action",type:"accent",onClick:this.toggleModalDisplay})))))),this.state={modalShown:!1}}render(){const{testId:e}=this.props;return a.createElement(l,{"data-test-id":e},a.createElement(r,null,a.createElement(E.a,null)),a.createElement(c,null,a.createElement(s,null,Object(i.b)("reviewSitesMsg")),a.createElement(d,null,Object(i.b)("monthlyTips"))),a.createElement(p,null,a.createElement(u,{onClick:this.toggleModalDisplay},Object(i.b)("learnMore"))),this.state.modalShown?this.pinnedSitesModal():null)}}var S=n(687),j=n(108),T=n(24),N=n(303),A=n(94),z=n(53),B=n(201),D=n(38);const M=n(112),L=n(326),F=n(185),$=()=>{console.log("nothing")};t.default=class extends a.Component{constructor(e){super(e),this.onChange=((e,t,n,a)=>{this.setState({check:a})}),this.donationAlertChild=(()=>a.createElement(O,{onReview:$})),this.donationSettingsChild=(()=>a.createElement(a.Fragment,null,a.createElement(A.b,{columns:1,customStyle:{maxWidth:"270px",margin:"0 auto"}},a.createElement(A.a,{size:1,customStyle:{justifyContent:"center",flexWrap:"wrap"}},a.createElement(z.a,{text:"Enable ability to give tips on ‘Like’ posts"},a.createElement(B.a,{value:this.state.check,multiple:!0,onChange:this.onChange},a.createElement("div",{"data-key":"yt"},"YouTube"),a.createElement("div",{"data-key":"tw"},"Twitter"),a.createElement("div",{"data-key":"inst"},"Instagram"))))))),this.state={check:{yt:!0,tw:!1,inst:!1}}}get donationRows(){return[{profile:{name:"Bart Baker",verified:!0,provider:"youtube",src:M},url:"https://brave.com",type:"recurring",contribute:{tokens:"2.0",converted:"0.20"},onRemove:$},{profile:{verified:!1,name:"theguardian.com",src:F},url:"https://brave.com",type:"donation",contribute:{tokens:"12.0",converted:"6.20"},text:"May 7"},{profile:{verified:!1,name:"BrendanEich",provider:"twitter",src:L},url:"https://brave.com",type:"tip",contribute:{tokens:"7.0",converted:"3.20"},text:"May 2"}]}render(){return a.createElement(S.a,{title:D.a.donationTitle,type:"donation",description:D.a.donationDesc,attachedAlert:this.donationAlertChild(),settingsChild:this.donationSettingsChild()},a.createElement(j.a,{title:D.a.donationTotal},a.createElement(T.a,{value:"21.0",converted:"7.00"})),a.createElement(N.a,{rows:this.donationRows,allItems:!0,headerColor:!0},"Please visit some sites"))}}},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(651),o=n(652),l=n(653),r=n(654),c=n(655),s=n(29),d=n(1);const p=Object(d.default)("div").withConfig({displayName:"StyledWrapper"})`
  background: ${e=>e.theme.color.subtleBackground};
  min-height: 100vh;
  width: 100%;
  padding-top: 35px;
  font-family: "Poppins", sans-serif
`,u=Object(d.default)("div").withConfig({displayName:"StyledContent"})`
   max-width: 1000px;
   margin: 0 auto;
   padding: 40px 10px 0 10px;
`;class m extends a.PureComponent{render(){const{id:e,children:t}=this.props;return a.createElement(p,{id:e},a.createElement(u,null,t))}}var h=n(1269),g=n(1267),f=n(18);t.default=class extends a.PureComponent{constructor(e){super(e),this.onMainToggle=(()=>{this.setState({mainToggle:!this.state.mainToggle})}),this.onToggleWallet=(()=>{this.setState({walletShown:!this.state.walletShown})}),this.state={mainToggle:!0,walletShown:!1}}render(){return a.createElement(m,null,a.createElement(h.a,{onToggle:this.onMainToggle,enabled:this.state.mainToggle}),this.state.mainToggle?null:a.createElement(s.a,null,a.createElement(s.b,null,f.a.whyBraveRewards),a.createElement(s.h,null,f.a.rewardsDisabledDescOne),a.createElement(s.h,null,f.a.rewardsDisabledDescTwo)),a.createElement(i.default,null),a.createElement(g.a,{balance:"30.0",id:"mobile-wallet",onClick:this.onToggleWallet,converted:"7.00 USD"}),a.createElement(o.default,{rewardsEnabled:this.state.mainToggle}),a.createElement(l.default,{rewardsEnabled:this.state.mainToggle}),a.createElement(r.default,{rewardsEnabled:this.state.mainToggle}),a.createElement(c.default,{toggleAction:this.onToggleWallet,visible:this.state.walletShown}))}}},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(49),o=n(225),l=n(4),r=n(12),c=n(813),s=n.n(c);const d=Object(l.c)("select").withConfig({displayName:"SelectBox"})`
  box-sizing: border-box;
  position: relative;
  -webkit-font-smoothing: antialiased;
  border-radius: 3px;
  display: block;
  outline: none;
  padding: 6px 12px 6px 6px;
  width: 100%;
  appearance: none;
  min-height: 36px;
  color: ${r.a.grey100};
  font-size: 12px;
  font-weight: normal;
  line-height: 18px;
  font-family: ${e=>e.theme.fontFamily.heading};
  border: 1px solid ${r.a.grey500};
  background: url(${s.a}) 98% / 10% no-repeat transparent;
  /* avoid text overflow w/ carat */
  -webkit-padding-start: 10px;
  -webkit-padding-end: 32px;

  > option {
    color: ${r.a.black};
  }

  ${e=>e.disabled?l.b`
      user-select: none;
      opacity: 0.25;
    `:""}
  ${e=>e.multiple?l.b`
      padding: 6px;
      background: none;
    `:""}
`;var p=n(351),u=n(157),m=n(142),h=n(149),g=n(668),f=n(15),b=n(61);n.d(t,"default",function(){return C});const x=(e,t,n)=>a.createElement(m.default,{dynamic:!0,favicon:e,sitename:t,title:f.a.scriptsOnThisSite,onToggle:n,data:b.a.thirdPartyScriptsBlocked},a.createElement(g.default,{onClickDismiss:n,list:b.a.blockedScriptsResouces})),y=(e,t,n)=>a.createElement(m.default,{favicon:e,sitename:t,title:f.a.deviceRecognitionAttempts,onToggle:n,data:b.a.thirdPartyDeviceRecognitionBlocked},a.createElement(h.default,{onClickDismiss:n,list:b.a.blockedFakeResources}));class C extends a.PureComponent{constructor(e){super(e),this.onToggleScriptsBlocked=(()=>{this.setState({openScriptsBlockedList:!this.state.openScriptsBlockedList})}),this.onToggleDeviceRecognition=(()=>{this.setState({openDeviceRecognitionList:!this.state.openDeviceRecognitionList})}),this.onChangeBlockScripts=(e=>{console.log("do something",e.currentTarget)}),this.onChangeBlockDeviceRecognition=(e=>{console.log("do something",e.currentTarget)}),this.onChangeBlockCookies=(e=>{console.log("do something",e.currentTarget)}),this.state={openScriptsBlockedList:!1,openDeviceRecognitionList:!1}}render(){const{enabled:e,sitename:t,favicon:n}=this.props,{openScriptsBlockedList:l,openDeviceRecognitionList:r}=this.state;return e?a.createElement(a.Fragment,null,a.createElement(i.o,{hasUserInteraction:!1},a.createElement(o.b,{disabled:!0}),a.createElement(i.q,{disabled:!0}),a.createElement(d,{onChange:this.onChangeBlockCookies},a.createElement("option",{value:"block_third_party"},f.a.block3partyCookies),a.createElement("option",{value:"block"},f.a.blockAllCookies),a.createElement("option",{value:"allow"},f.a.allowAllCookies)),a.createElement(p.a,null)),a.createElement(i.o,{hasUserInteraction:!0},a.createElement(o.b,{onClick:this.onToggleScriptsBlocked},a.createElement(u.g,null)),a.createElement(i.q,{onClick:this.onToggleScriptsBlocked},b.a.thirdPartyScriptsBlocked),a.createElement(d,{onChange:this.onChangeBlockScripts},a.createElement("option",{value:"block_third_party"},f.a.blockSomeScripts),a.createElement("option",{value:"block"},f.a.blockAllScripts),a.createElement("option",{value:"allow"},f.a.allowAllScripts)),a.createElement(p.a,{onClick:this.onToggleScriptsBlocked}),l?x(n,t,this.onToggleScriptsBlocked):null),a.createElement(i.o,{hasUserInteraction:!1},a.createElement(o.b,{disabled:!0,onClick:this.onToggleDeviceRecognition},a.createElement(u.g,null)),a.createElement(i.q,{disabled:!0,onClick:this.onToggleDeviceRecognition},"0"),a.createElement(d,{onChange:this.onChangeBlockDeviceRecognition},a.createElement("option",{value:"block_third_party"},f.a.block3partyFingerprinting),a.createElement("option",{value:"block"},f.a.blockAllFingerprinting),a.createElement("option",{value:"allow"},f.a.allowAllFingerprinting)),a.createElement(p.a,{disabled:!0,onClick:this.onToggleDeviceRecognition}),r?y(n,t,this.onToggleDeviceRecognition):null)):null}}},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(1);const o=i.keyframes`
  from {
    transform: translateY(-100%);
  }

  to {
    transform: translateY(0);
  }
`,l=Object(i.default)("div").withConfig({displayName:"BackgroundContainer"})`
  box-sizing: border-box;
  width: inherit;
  height: inherit;
  position: absolute;
  animation-delay: 0s;
  animation-name: ${o};
  animation-duration: 3s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
  overflow: hidden;
`,r=Object(i.default)("div").withConfig({displayName:"Background"})`
  box-sizing: border-box;
  background: url('${e=>e.background.image}') repeat-x;
  width: 500%;
  height: inherit;
  will-change: transform;
  transform: translateX(${e=>e.background.position});
  transition: transform ease-out 3s;
`;var c=n(226),s=n(661),d=n(662),p=n(665),u=n(663),m=n(666),h=n(664),g=n(673);n.d(t,"default",function(){return b});const f=n(963);class b extends a.PureComponent{constructor(e){super(e),this.onClickLetsGo=(()=>{this.setState({currentScreen:this.state.currentScreen+1})}),this.onClickSlideBullet=(e=>{this.setState({currentScreen:e})}),this.onClickNext=(()=>{this.setState({currentScreen:this.state.currentScreen+1})}),this.onClickDone=(()=>{}),this.onClickSkip=(()=>{}),this.onClickImport=(()=>{this.setState({fakeBookmarksImported:!this.state.fakeBookmarksImported}),this.setState({currentScreen:this.state.currentScreen+1}),console.log("IMPORTED!")}),this.onClickConfirmDefaultSearchEngine=(()=>{this.setState({fakeChangedSearchEngine:!this.state.fakeChangedSearchEngine}),this.setState({currentScreen:this.state.currentScreen+1}),console.log("CHANGED DEFAULT SEARCH ENGINE!")}),this.onClickChooseYourTheme=(()=>{this.setState({fakeChangedDefaultTheme:!this.state.fakeChangedDefaultTheme}),this.setState({currentScreen:this.state.currentScreen+1}),console.log("NEW THEME CHOOSED")}),this.onClickRewardsGetStarted=(()=>{console.log("SENT TO REWARDS PAGE")}),this.state={currentScreen:1,fakeChangedSearchEngine:!1,fakeBookmarksImported:!1,fakeChangedDefaultTheme:!1}}get totalScreensSize(){return 6}get backgroundPosition(){switch(this.state.currentScreen){case 1:return"100%";case 2:return"200%";case 3:return"300%";case 4:return"400%";case 5:return"500%";case 6:return"600%";default:return"100%"}}render(){const{currentScreen:e}=this.state;return a.createElement(a.Fragment,null,a.createElement(l,null,a.createElement(r,{background:{image:f,position:`-${e}0%`}})),a.createElement(c.f,null,a.createElement(c.g,null,a.createElement(c.h,null,a.createElement(s.default,{index:1,currentScreen:e,onClick:this.onClickLetsGo}),a.createElement(d.default,{index:2,currentScreen:e,onClick:this.onClickImport}),a.createElement(u.default,{index:3,currentScreen:e,onClick:this.onClickConfirmDefaultSearchEngine}),a.createElement(h.default,{index:4,currentScreen:e,onClick:this.onClickChooseYourTheme}),a.createElement(p.default,{index:5,currentScreen:e}),a.createElement(m.default,{index:6,currentScreen:e,onClick:this.onClickRewardsGetStarted})),a.createElement(g.default,{totalScreensSize:this.totalScreensSize,currentScreen:e,onClickSkip:this.onClickSkip,onClickSlideBullet:this.onClickSlideBullet,onClickNext:this.onClickNext,onClickDone:this.onClickDone}))))}}},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(226),o=n(1);const l=Object(o.default)("button").withConfig({displayName:"BaseButton"})`
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  display: block;
  line-height: 1;
  background: none;
  border: none;
  cursor: pointer;
  outline: inherit;
  letter-spacing:1px;
`,r=Object(o.default)(l).withConfig({displayName:"SkipButton"})`
  color: #7C7D8C;
  text-decoration: underline;
  font-weight: 300;
  letter-spacing: 0;

  &:hover {
    color: #343546;
  }
`,c=Object(o.default)(l).withConfig({displayName:"Bullet"})`
  padding: 0 7px;
  font-size: 36px;
  color: #7C7D8C;
  letter-spacing: 0;

  &:hover {
    color: #343546;
  }

  ${e=>e.active&&o.css`
    color: #FB542B;

    &:hover {
      color: #C72E03;
    }
  `}
`;var s=n(13),d=n(10),p=n(30);n.d(t,"default",function(){return u});class u extends a.PureComponent{render(){const{currentScreen:e,totalScreensSize:t,onClickSkip:n,onClickNext:o,onClickSlideBullet:l,onClickDone:u}=this.props;return a.createElement(i.b,null,a.createElement(i.c,null,a.createElement(r,{onClick:n},p.a.skipWelcomeTour)),a.createElement(i.d,null,Array.from({length:t},(t,n)=>a.createElement(c,{active:e===n+1,key:n,onClick:l.bind(this,n+1)},"•"))),a.createElement(i.e,null,e!==t&&1!==e?a.createElement(d.a,{level:"secondary",type:"default",size:"medium",onClick:o,text:p.a.next,icon:{position:"after",image:a.createElement(s.ArrowRightIcon,null)}}):1!==e&&a.createElement(d.a,{level:"secondary",type:"default",size:"medium",onClick:u,text:p.a.done})))}}},,,,,function(e,t,n){e.exports=n.p+"static/media/megaphone.8a0684e9.svg"},function(e,t,n){"use strict";var a=n(0),i=n(1);const o=Object(i.default)("div").withConfig({displayName:"StyledHero"})`
  text-align: center;
  min-height: 610px;
  padding: 60px 0 25px 0;
  border-top-left-radius: ${e=>e.isMobile?0:35}px;
  border-top-right-radius: ${e=>e.isMobile?0:35}px;
  background: linear-gradient(#392DD1, #8C41DE);
  border-bottom-left-radius: 150% 120px;
  border-bottom-right-radius: 150% 120px;

  @media (max-width: 475px) {
    padding-top: 35px;
  }
`;class l extends a.PureComponent{render(){const{id:e,isMobile:t,children:n}=this.props;return a.createElement(o,{id:e,isMobile:t},n)}}var r=n(10);const c=Object(i.default)("div").withConfig({displayName:"StyledInfoCard"})`
  height: 290px;
  border-radius: 4px;
  text-align: center;
  padding: 31px 15px 15px;
  background: #fff;
  max-width: 275px;
  margin: 0 auto;
  box-shadow: 0 0 10px 0 rgba(99,105,110,0.12);
  font-family: Poppins, sans-serif;
`,s=Object(i.default)("strong").withConfig({displayName:"StyledTitle"})`
  color: #222326;
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 0.16px;
`,d=Object(i.default)("p").withConfig({displayName:"StyledDesc"})`
  color: #686978;
  font-size: 16px;
  line-height: 22px;
  font-family: Muli, sans-serif;
  letter-spacing: 0.16px;
  margin: 10px 0 8px;
  font-weight: 400;
`,p=Object(i.default)("figure").withConfig({displayName:"StyledFigure"})`
  box-sizing: border-box;
  display: block;
  max-width: 100%;
  margin: 10px auto 20px;
  height: 80px;
`,u=Object(i.default)("div").withConfig({displayName:"StyledGrid"})`
  display: grid;
  grid-gap: 0px;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-content: center;

  @media (max-width: 640px) {
    grid-gap: 20px;
    grid-template-columns: 1fr;
  }
`,m=Object(i.default)("div").withConfig({displayName:"StyledColumn"})`
  padding: 0 10px;
`;class h extends a.PureComponent{getCards(e){return a.createElement(u,null,e.map((e,t)=>a.createElement(m,{key:`${t}`},a.createElement(c,null,a.createElement(p,null,e.icon),a.createElement(s,null,e.title),a.createElement(d,null,e.description)))))}render(){const{id:e,cards:t}=this.props;return a.createElement("section",{id:e},t?this.getCards(t):null)}}var g=n(342),f=n(729),b=n(714),x=n(1270),y=n(683),C=n(1262),v=n(2),w=n(48),E=n(808),k=n.n(E);const O=Object(i.default)("section").withConfig({displayName:"StyledOptInSection"})`
  margin: 40px auto;
  max-width: 303px;

  @media (max-width: 410px) {
    margin: 40px 20px;
    max-width: unset;
  }
`,S=Object(i.default)("section").withConfig({displayName:"StyledOptInSecond"})`
  max-width: 303px;
  margin: 0 auto;
`,j=Object(i.default)("section").withConfig({displayName:"StyledOptInInnerSection"})`
  text-align: center;
`,T=Object(i.default)("section").withConfig({displayName:"StyledCenterSection"})`
  padding: 15px 0 0;
`,N=Object(i.default)("div").withConfig({displayName:"StyledCenterContent"})`
  margin: 0 auto;
  max-width: 692px;
  padding: 67px 0 20px;

  @media (max-width: 767px) {
    max-width: none;
    width: 100%;
    padding-top: 30px;
  }
`,A=Object(i.default)("div").withConfig({displayName:"StyledSection"})`
  display: block;
`,z=Object(i.default)("section").withConfig({displayName:"StyledCenterInner"})`
  @media (max-width: 767px) {
    margin: 0 auto;
    width: 80%;
  }
`,B=Object(i.default)("section").withConfig({displayName:"StyledInfoContent"})`
  margin: 22px auto 0;
  max-width: 900px;
`,D=Object(i.default)("section").withConfig({displayName:"StyledTakeActionContent"})`
  margin: 0 auto;
  padding: 64px 0 79px;
  max-width: 500px;
  display: block;
`,M=Object(i.default)("div").withConfig({displayName:"StyledBackground"})`
  background: url(${k.a}) no-repeat top;

  @media (max-width: 980px) {
    background: #F8FAFF;
  }
`,L=Object(i.default)("div").withConfig({displayName:"StyledBatLogo"})`
  margin: 5px auto 0;
  height: 152px;

  @media (max-width: 460px) {
    height: 100px;
  }
`,F=Object(i.default)(w.a).withConfig({displayName:"StyledRewardsTitle"})`
  font-weight: 500;
  color: #FFF;
  display: inline-block;
  margin: 17px 0 4px;

  @media (max-width: 360px) {
    font-size: 36px;
  }
`,$=Object(i.default)(w.a).withConfig({displayName:"StyledActionTitle"})`
  color: #5C58C2;
  font-weight: normal;
  line-height: 28px;
  margin: 18px 0 30px;
`,I=Object(i.default)(w.a).withConfig({displayName:"StyledCenterTitle"})`
  color: #222326;
  font-weight: normal;
  text-align: left;
  line-height: 28px;
  padding: 7px 0 21px;
  margin: 0;
`,P=Object(i.default)(w.a).withConfig({displayName:"StyledSubTitle"})`
  color: #5BC4FE;
  font-weight: 500;
  text-align: center;
  margin: 18px 0 7px;

  @media (max-width: 360px) {
    font-size: 22px;
  }
`,R=Object(i.default)("span").withConfig({displayName:"StyledTrademark"})`
  display: inline-block;
  vertical-align: text-top;
  margin-top: -25px;
  color: #FFF;
  font-size: 14px;
  font-weight: 300;
  opacity: 0.7;
`,H=Object(i.default)("p").withConfig({displayName:"StyledRewardsParagraph"})`
  font-size: 16px;
  max-width: 375px;
  margin: 0 auto;
  line-height: 28px;
  color: #FFF;
`,W=Object(i.default)("p").withConfig({displayName:"StyledTeaserParagraph"})`
  font-size: 16px;
  margin: 0 0 5px;
  line-height: 28px;
  color: #FFF;
  opacity: 0.5;
`,G=Object(i.default)("p").withConfig({displayName:"StyledCenterParagraph"})`
  font-size: 16px;
  line-height: 28px;
  color: #686978;
  letter-spacing: 0.16px;
  max-width: 475px;
  margin: 0 0 15px;
  font-weight: 400;
  font-family: Muli,sans-serif;
`,V=Object(i.default)("button").withConfig({displayName:"StyledAnchor"})`
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  color: #bf9fe3;
  height: 30px;
  overflow: hidden;
  outline: none;

  &:focus {
    outline: 0;
  }
`,Z=Object(i.default)("div").withConfig({displayName:"StyledHeroInfo"})`
  @media (max-width: 400px) {
    padding: 0 10px;
  }
`,q=Object(i.default)("div").withConfig({displayName:"StyledAlert"})`
  margin-bottom: 30px;
  border: 1px solid #F43405;
  border-radius: 4px;
  overflow: hidden;

   @media (max-width: 767px) {
    display: none;
  }
`,Q=Object(i.default)("div").withConfig({displayName:"StyledAlertContent"})`
  display: flex;
  width: 100%;
`,U=Object(i.default)("div").withConfig({displayName:"StyledAlertLeft"})`
  flex-basis: 70%;
  flex-grow: 1;
`;var Y=a.createElement("svg",{width:"76",height:"76",viewBox:"0 0 76 76",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},a.createElement("defs",null,a.createElement("polygon",{id:"path-1",points:"0 0.000158333333 76 0.000158333333 76 75.9905 0 75.9905"})),a.createElement("g",{id:"BR-onboarding",fill:"none",fillRule:"evenodd"},a.createElement("g",{id:"br-new",transform:"translate(-387 -1371)"},a.createElement("g",{id:"rewards-landing",transform:"translate(224 215)"},a.createElement("g",{id:"Group-8",transform:"translate(62 1116)"},a.createElement("g",{id:"Group-9",transform:"translate(101 40)"},a.createElement("g",{id:"premium"},a.createElement("g",{id:"Group-4"},a.createElement("mask",{id:"mask-2",fill:"#fff"},a.createElement("use",{xlinkHref:"#path-1"})),a.createElement("path",{d:"M72.5255333,49.8154667 L57.0899333,65.2536 C54.9980333,67.3538917 52.287525,68.7274333 49.3569333,69.1726667 L38.9576,70.7724667 C38.2563417,70.8798167 37.5479583,70.9334917 36.8384667,70.9333333 L10.1333333,70.9333337 L10.1333333,50.1017333 L15.9752,46.4512 C18.1888583,45.066575 20.747525,44.3327 23.3586,44.3333333 L44.0255333,44.3333333 C45.424725,44.3333333 46.5588667,45.4676333 46.5588667,46.8666667 C46.5588667,48.2658583 45.424725,49.4 44.0255333,49.4 L30.7078,49.4 C27.909575,49.4 25.6411333,51.6684417 25.6411333,54.4666667 C25.6411333,57.26505 27.909575,59.5333333 30.7078,59.5333333 L49.9522667,59.5333333 C51.5449417,59.535075 53.0795083,58.93515 54.2488,57.8537333 L67.9731333,45.1870667 C68.5958583,44.6215 69.4120667,44.3167083 70.2531333,44.3358667 C72.0264667,44.3352333 73.4646083,45.7722667 73.4654,47.5457583 C73.4657167,48.3980667 73.1270417,49.2155417 72.5242667,49.818 L72.5255333,49.8154667 Z M2.53333333,73.4666667 L7.6,73.4666667 L7.6,48.1333333 L2.53333333,48.1333333 L2.53333333,73.4666667 Z M70.1505333,41.8 C68.7065333,41.7973083 67.3149417,42.3402333 66.2542667,43.32 L52.5312,55.9866667 C51.8302583,56.6378917 50.9089167,56.9998417 49.9522667,57 L30.7078,57 C29.3086083,57 28.1744667,55.8658583 28.1744667,54.4666667 C28.1744667,53.0676333 29.3086083,51.9333333 30.7078,51.9333333 L44.0255333,51.9333333 C46.8237583,51.9333333 49.0922,49.66505 49.0922,46.8666667 C49.0922,44.0684417 46.8237583,41.8 44.0255333,41.8 L23.3586,41.8 C20.27205,41.7992083 17.247725,42.6670333 14.6312667,44.3042 L10.1333333,47.12 L10.1333333,45.6 L0,45.6 L0,76 L10.1333333,76 L10.1333333,73.4666667 L36.8384667,73.4666667 C37.6768417,73.4666667 38.51395,73.4027 39.3426667,73.2754 L49.742,71.6756 C53.2055417,71.1500917 56.4089417,69.5268583 58.881,67.0446667 L74.3166,51.6065333 C75.3978583,50.5317667 76.0041167,49.068925 76,47.5443333 C75.9835333,44.3551833 73.38465,41.7832167 70.1955,41.7996833 C70.1804583,41.7996833 70.165575,41.7998417 70.1505333,41.8 Z",id:"Fill-1",fill:"#FB542B",mask:"url(#mask-2)"}),a.createElement("path",{d:"M32.9333333,15.2 C33.4517167,15.2003167 33.91785,14.8846 34.1100667,14.403425 L38,4.67653333 L41.8899333,14.403425 C42.08215,14.8846 42.5482833,15.2003167 43.0666667,15.2 L51.9333333,15.2 L44.84,20.52 C44.424375,20.8316 44.2411833,21.3653417 44.3776667,21.8664667 L47.0566667,31.6894667 L38.8423333,24.3871333 C38.3812667,23.97705 37.691725,23.9588417 37.2096,24.3440667 L28.0668,31.6578 L31.5919333,21.9665333 C31.7824083,21.441975 31.606975,20.8544 31.16,20.52 L24.0666667,15.2 L32.9333333,15.2 Z M28.8888667,21.983 L24.1426667,35.0296667 C23.9035833,35.687225 24.2427333,36.413975 24.9001333,36.6530583 C25.315125,36.80395 25.778725,36.7277917 26.1237333,36.4521333 L37.9556667,26.9850667 L48.5576667,36.4078 C49.0808,36.87235 49.8813333,36.82485 50.3458833,36.301875 C50.6296167,35.9822 50.7331667,35.5410833 50.6210667,35.1284667 L47.0490667,22.0311333 L56.4933333,14.946825 C57.0530417,14.5270833 57.1664083,13.7330417 56.7466667,13.1734917 C56.507425,12.85445 56.1320167,12.6666667 55.7333333,12.6666667 L43.9242,12.6666667 L39.1767333,0.796733333 C38.9169083,0.14725 38.1798667,-0.168783333 37.530225,0.0910416667 C37.2083333,0.219766667 36.9532583,0.474841667 36.8245333,0.796733333 L32.0758,12.6666667 L20.2666667,12.6666667 C19.56715,12.6666667 19,13.2338167 19,13.9333333 C19,14.3320167 19.1877833,14.7075833 19.5066667,14.946825 L28.8888667,21.983 Z",id:"Fill-3",fill:"#D62BA3",mask:"url(#mask-2)"})),a.createElement("polyline",{id:"Fill-5",fill:"#9563D4",points:"23 4.82841972 24.8284197 3 30 8.17158028 28.1715803 10 23 4.82841972"}),a.createElement("polyline",{id:"Fill-6",fill:"#9563D4",points:"45 8.17169968 50.1715803 3 52 4.82830032 46.8284197 10 45 8.17169968"}),a.createElement("polygon",{id:"Fill-7",fill:"#9563D4",points:"17 25 24 25 24 23 17 23"}),a.createElement("polygon",{id:"Fill-8",fill:"#9563D4",points:"52 25 59 25 59 23 52 23"}),a.createElement("polygon",{id:"Fill-9",fill:"#9563D4",points:"36 38 38 38 38 31 36 31"})))))))),K=a.createElement("svg",{width:"80",height:"80",xmlns:"http://www.w3.org/2000/svg"},a.createElement("g",{fill:"none",fillRule:"evenodd"},a.createElement("path",{d:"M66.126 18.552V2.268c0-.848-.46-1.604-1.216-1.991a2.272 2.272 0 0 0-2.338.147C46.405 11.617 37.124 13.056 30.844 13.056H12.89C5.782 13.056 0 18.846 0 25.965v4.794c0 7.118 5.782 12.908 12.89 12.908h8.618l9.354 22.7a2.255 2.255 0 0 0 2.081 1.403c.294 0 .572-.056.865-.167a2.267 2.267 0 0 0 1.234-2.95l-8.654-20.986h4.438c21.876 0 30.825 11.6 31.23 12.134a2.246 2.246 0 0 0 2.505.812 2.259 2.259 0 0 0 1.546-2.139V38.209a10.083 10.083 0 0 0 7.808-9.83c.037-4.793-3.315-8.813-7.789-9.827zM4.512 30.759v-4.794c0-4.63 3.756-8.391 8.378-8.391h7.88V39.15h-7.88c-4.622 0-8.378-3.762-8.378-8.391zm57.102 18.275c-5.008-4.13-14.842-9.884-30.788-9.884h-5.561V17.574h5.561c6.445 0 15.688-1.328 30.788-11.065v42.525zm4.512-15.583V23.29a5.555 5.555 0 0 1 3.296 5.089c.018 2.25-1.344 4.205-3.296 5.07z",fill:"#FFD8ED"}),a.createElement("path",{d:"M87.665 25.5H78.57c-1.292 0-2.336.95-2.336 2.125 0 1.174 1.044 2.125 2.336 2.125h9.094c1.291 0 2.335-.95 2.335-2.125 0-1.192-1.044-2.125-2.335-2.125zm-12.343-4.547a2.207 2.207 0 0 0 2.044 1.36 2.6 2.6 0 0 0 .807-.14L86.49 19c1.13-.436 1.685-1.674 1.237-2.771-.448-1.1-1.72-1.64-2.85-1.204l-8.317 3.173a2.12 2.12 0 0 0-1.238 2.754zm11.17 16.37l-8.312-3.172c-1.128-.436-2.4.105-2.848 1.203-.448 1.098.107 2.336 1.236 2.771l8.31 3.174c.27.104.539.139.807.139.877 0 1.702-.523 2.042-1.36.448-1.081-.107-2.319-1.235-2.755z",fill:"#F9E7BE"}),a.createElement("text",{fontFamily:"Poppins",fontSize:"12",fill:"#C12D7C"},a.createElement("tspan",{fontWeight:"600",x:"34",y:"32"},"Ads")))),J=a.createElement("svg",{width:"92",height:"69",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},a.createElement("defs",null,a.createElement("path",{id:"a",d:"M0 0h91.966v25.796H0z"})),a.createElement("g",{fill:"none",fillRule:"evenodd"},a.createElement("path",{d:"M54.368 35.984c-2.804-.341-6.138.225-9.91 1.68a40.153 40.153 0 0 0-5.76 2.783c-1.331-2.094-5.651-11.107-7.234-14.77-.794-1.84-3.432-5.527-6.095-4.5-.616.239-1.087.7-1.358 1.336-.896 2.094.547 5.583.609 5.731 2.085 4.967 7.84 18.416 8.477 19.908.097.227.228.51.38.839.36.78.855 1.851 1.18 2.809.43 1.267.338 1.687.311 1.767a1.182 1.182 0 0 1-.273.15c-1.798.694-5.393-2.672-6.758-4.314-1.246-1.5-3.879-2.289-5.524-1.654-.658.253-1.126.729-1.315 1.337-.273.877.026 1.959.888 3.214l.051.079c1.246 1.947 4.722 6.912 10.085 10.944 3.438 2.584 7.03 4.31 10.677 5.126 4.525 1.013 9.148.628 13.74-1.144 4.927-1.9 7.733-5.59 8.34-10.964.601-5.295-1.187-10.9-2.305-13.771-1.519-3.894-4.28-6.11-8.206-6.586z",fill:"#A1A8F2"}),a.createElement("mask",{id:"b",fill:"#fff"},a.createElement("use",{xlinkHref:"#a"})),a.createElement("path",{d:"M21.092 9.476c-.076 0-.151.003-.224.012l-.82.092v7.178h1.232c1.1 0 2.564-.35 2.564-3.368 0-2.689-1.427-3.914-2.752-3.914zM31.5 9c-1.974 0-2.5 2.2-2.5 3.5 0 1.3.526 3.5 2.5 3.5s2.5-2.2 2.5-3.5c0-1.3-.526-3.5-2.5-3.5zM50 14h2l-1.015-3z",fill:"#696FDC",mask:"url(#b)"}),a.createElement("path",{d:"M79.207.108H12.775C5.719.108 0 5.882 0 13.007c0 7.123 5.719 12.897 12.774 12.897h9.2c-.102-1.116-.034-2.303.406-3.345.479-1.136 1.355-2.001 2.464-2.435a4.534 4.534 0 0 1 1.662-.317c3.629 0 6.247 4.283 6.949 5.933l.07.164h45.683c7.055 0 12.773-5.774 12.773-12.897 0-7.125-5.718-12.899-12.774-12.899zM21.314 18.517c-.306 0-.609-.024-.901-.048-.411-.032-.934-.058-1.256-.02l-1.43.167a.687.687 0 0 1-.755-.577l-.06-.377a.695.695 0 0 1 .61-.798l.686-.067V9.545l-.748-.163a.69.69 0 0 1-.54-.705l.01-.24a.69.69 0 0 1 .793-.654l.227.038c.32.054.65.11.964.11.276 0 .55-.04.865-.088.344-.053.732-.11 1.157-.11 2.96 0 4.797 2.09 4.797 5.458 0 4.634-2.77 5.326-4.42 5.326zm10.056.199c-3.009 0-4.355-2.809-4.355-5.591 0-2.784 1.346-5.592 4.355-5.592 3.008 0 4.354 2.808 4.354 5.592 0 2.782-1.346 5.59-4.354 5.59zM45.44 9.49h-.35v8.334a.687.687 0 0 1-.685.692h-.62a.684.684 0 0 1-.592-.346l-3.821-6.67v5.257h.827c.378 0 .685.31.685.692v.375a.687.687 0 0 1-.685.692H37a.687.687 0 0 1-.684-.692v-.375c0-.382.306-.692.684-.692h.532V9.491H37a.688.688 0 0 1-.684-.69v-.378c0-.381.306-.69.684-.69h1.917c.246 0 .473.132.595.348l3.738 6.609V9.49h-.86a.688.688 0 0 1-.685-.69v-.376c0-.383.307-.692.685-.692h3.05c.378 0 .685.309.685.692V8.8a.688.688 0 0 1-.684.691zm10.676 8.334a.687.687 0 0 1-.684.692H52.66a.687.687 0 0 1-.684-.692v-.375c0-.382.306-.692.684-.692h.548l-.483-1.311h-3.337l-.474 1.311h.57c.377 0 .684.31.684.692v.375a.687.687 0 0 1-.684.692h-2.739a.688.688 0 0 1-.685-.692v-.375c0-.382.306-.692.685-.692h.264l3.378-9.015a.684.684 0 0 1 .636-.447h.003c.282 0 .535.175.638.44l3.5 9.022h.268c.377 0 .684.31.684.692v.375zm9.333-6.453a.688.688 0 0 1-.684.691h-.471a.688.688 0 0 1-.684-.691v-.985c0-.606-.053-.769-.083-.81-.008-.005-.129-.086-.739-.086h-.92v7.266h1.467c.379 0 .685.31.685.693v.375a.688.688 0 0 1-.685.692h-4.776a.688.688 0 0 1-.685-.692v-.375c0-.383.307-.693.685-.693h1.468V9.491h-.92c-.611 0-.732.08-.744.09-.026.037-.078.2-.078.806v.985a.688.688 0 0 1-.684.691h-.471a.688.688 0 0 1-.686-.691V8.423c0-.381.307-.69.686-.69h7.635c.379 0 .684.309.684.69v2.949zm9.629 6.453a.687.687 0 0 1-.684.692h-7.57a.687.687 0 0 1-.684-.692v-.375c0-.382.306-.692.684-.692h.958V9.491h-.958a.688.688 0 0 1-.684-.69v-.378c0-.381.306-.69.684-.69h7.258c.378 0 .684.309.684.69v2.334a.687.687 0 0 1-.684.692h-.472a.687.687 0 0 1-.684-.692v-.154c0-.593-.032-.934-.096-1.014-.017-.015-.15-.098-.84-.098h-2.367v2.307h1.441a.685.685 0 0 1 .673-.564h.471c.379 0 .684.31.684.69v1.671a.687.687 0 0 1-.684.691h-.47a.688.688 0 0 1-.685-.69v-.04h-1.43v3.202h2.662c.953 0 .953 0 .953-1.575v-.04c0-.381.307-.69.685-.69h.47c.38 0 .685.309.685.69v2.682z",fill:"#696FDC",mask:"url(#b)"})));t.a=class extends a.PureComponent{constructor(e){super(e),this.scrollToCenter=(()=>{if(!this.centerTextSection)return;const e=this.centerTextSection;e&&window.scrollTo({behavior:"smooth",top:e.offsetTop})}),this.refSet=(e=>{this.centerTextSection=e}),this.optInAction=(()=>{this.props.optInAction()}),this.centerTextSection=null,this.isTouchScreen="ontouchstart"in window}hero(){return a.createElement(l,{id:"rewards-hero",isMobile:this.isTouchScreen},a.createElement(A,null,a.createElement(L,null,a.createElement(g.a,null)),a.createElement(Z,null,a.createElement(F,{level:2},Object(v.b)("braveRewardsTitle")),a.createElement(R,null,"TM"),a.createElement(P,{level:4},Object(v.b)("braveRewardsSubTitle")),a.createElement(H,null,Object(v.b)("braveRewardsDesc")))),a.createElement(O,null,this.props.creating?a.createElement(x.a,{type:"opt-in",disabled:!0,testId:"optInAction",text:Object(v.b)("braveRewardsCreatingText"),icon:a.createElement(f.a,null)}):a.createElement(x.a,{type:"opt-in",onClick:this.optInAction,testId:"optInAction",text:Object(v.b)("braveRewardsOptInText")})),a.createElement(A,null,a.createElement(W,null,Object(v.b)("braveRewardsTeaser")),a.createElement(V,{onClick:this.scrollToCenter},a.createElement(b.a,null))))}get centerTextContent(){return a.createElement(N,null,a.createElement(z,null,a.createElement(I,{level:3},Object(v.b)("whyBraveRewards")),a.createElement(G,null,Object(v.b)("whyBraveRewardsDesc1")),a.createElement(G,null,Object(v.b)("whyBraveRewardsDesc2"))))}get optInContent(){return a.createElement(j,null,a.createElement($,{level:4},Object(v.b)("readyToTakePart")),a.createElement(S,null,this.props.creating?a.createElement(x.a,{type:"cta-opt-in",disabled:!0,text:Object(v.b)("braveRewardsCreatingText"),icon:a.createElement(f.a,null)}):a.createElement(x.a,{type:"cta-opt-in",onClick:this.optInAction,text:Object(v.b)("readyToTakePartOptInText")})))}get infoCards(){return[{title:Object(v.b)("turnOnRewardsTitle"),description:Object(v.b)("turnOnRewardsDesc"),icon:Y},{title:Object(v.b)("braveAdsTitle"),description:Object(v.b)("braveAdsDesc"),icon:K},{title:Object(v.b)("braveContributeTitle"),description:Object(v.b)("braveContributeDesc"),icon:J}]}get welcomePageContent(){return a.createElement(a.Fragment,null,this.props.onReTry?a.createElement(q,null,a.createElement(y.a,{type:"error"},a.createElement(Q,null,a.createElement(U,null,a.createElement("b",null,Object(v.b)("walletFailedTitle")),a.createElement("br",null),Object(v.b)("walletFailedText")),a.createElement(r.a,{level:"primary",type:"accent",text:Object(v.b)("walletFailedButton"),onClick:this.props.onReTry})))):null,a.createElement(M,null,a.createElement(A,null,this.hero()),a.createElement(T,null,a.createElement(T,{innerRef:this.refSet},this.centerTextContent),a.createElement(B,null,a.createElement(h,{id:"rewards-info",cards:this.infoCards})),a.createElement(D,null,this.optInContent))))}render(){const{id:e}=this.props;return this.isTouchScreen?this.welcomePageContent:a.createElement(C.a,{id:e},this.welcomePageContent)}}},function(e,t,n){"use strict";var a=n(0),i=n(1);const o=Object(i.default)("div").withConfig({displayName:"StyledWrapper"})`
  font-size: 14px;
  text-align: right;
  border-radius: 6px;
  color: #4b4c5c;
  background: #e9f0ff;
  display: inline-block;
  padding: 9px 10px 9px 13px;
`;n.d(t,"a",function(){return l});class l extends a.PureComponent{render(){const{id:e,children:t}=this.props;return a.createElement(o,{id:e},t)}}},function(e,t,n){"use strict";var a=n(0),i=n(1);const o=Object(i.default)("div").withConfig({displayName:"StyledWrapper"})`
  text-align: center;
  margin: 28px 0 0 -32px;
  width: 333px;
`,l=Object(i.default)("img").withConfig({displayName:"StyledDropArea"})`
  width: 333px;
  height: 296px;
`,r=Object(i.default)("div").withConfig({displayName:"StyledDrag"})`
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
`,c=Object(i.default)("div").withConfig({displayName:"StyledImageWrap"})`
  flex-basis: 80px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
`,s=Object(i.default)("div").withConfig({displayName:"StyledText"})`
  flex-basis: 130px;
  font-family: Muli, sans-serif;
  font-size: 14px;
  line-height: 1.29;
  color: #686978;
  text-align: left;
  padding-left: 13px;
`,d=Object(i.default)("img").withConfig({displayName:"StyledImage"})`
  width: 60px;
  height: 52px;
`;var p=n(2),u=n(804),m=n.n(u);n.d(t,"a",function(){return h});class h extends a.PureComponent{constructor(e){super(e),this.onCaptchaDrop=(e=>{if(e.preventDefault(),!this.captchaBox||!this.captchaDrag)return;const t=this.captchaBox.getBoundingClientRect(),n=this.captchaDrag.getBoundingClientRect();let a=e.clientX-t.left-this.dndStartPosition.x+this.dndStartPosition.width/2,i=e.clientY-t.top-this.dndStartPosition.y+this.dndStartPosition.height/2-n.height;if(this.props.isWindows){const e=window.devicePixelRatio,t=e<=1?0:this.offset*e;a=Math.round(a+t),i=Math.round(i+t)}this.props.onSolution(a,i)}),this.onCaptchaDrag=(e=>{if(!e||!e.target)return;const t=e.target.getBoundingClientRect();this.dndStartPosition={x:e.clientX-t.left,y:e.clientY-t.top,width:t.width,height:t.height}}),this.refWrapper=(e=>{this.captchaBox=e}),this.refDrag=(e=>{this.captchaDrag=e}),this.captchaBox=null,this.captchaDrag=null,this.offset=5,this.dndStartPosition={x:0,y:0,width:0,height:0}}preventDefault(e){e.preventDefault()}render(){const{id:e,dropBgImage:t,hint:n}=this.props;return a.createElement(o,{id:e,innerRef:this.refWrapper},a.createElement(r,{innerRef:this.refDrag},a.createElement(c,null,a.createElement(d,{src:m.a,onDragStart:this.onCaptchaDrag,draggable:!0})),a.createElement(s,null,Object(p.b)("dndCaptchaText1")," ",a.createElement("b",null,n)," ",Object(p.b)("dndCaptchaText2"))),a.createElement(l,{src:t,draggable:!1,onDrop:this.onCaptchaDrop,onDragOver:this.preventDefault}))}}},function(e,t,n){"use strict";var a=n(0),i=n(1),o=n(107);const l=Object(i.default)("div").withConfig({displayName:"InputComponent"})`
  background-color: #fff;
  min-height: auto;
  box-sizing: border-box;
  width: 100%;
  border: 1px solid ${e=>e.disabled?"#E5E5EA":"#DFDFE8"};
  border-radius: 3px;
  padding: 8px 10px;

  &:focus-within {
    border-color: #A1A8F2;
  }
`,r=Object(i.default)("div").withConfig({displayName:"StyledIcon"})`
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  margin-right: 10px;
  color: #D1D1DB;
`,c=Object(i.default)("input").withConfig({displayName:"StyledInput"})`
  display: inline-block;
  vertical-align: middle;
  min-height: auto;
  box-sizing: border-box;
  width: calc(100% - 30px);
  max-width: 100%;
  font-size: 14px;
  font-family: ${o.a.fontFamily.body};
  border: none;
  color: ${e=>e.disabled?"#D1D1DB":"#686978"};
  outline: unset;

  &::placeholder {
    color: #B8B9C4;
    font-weight: normal;
    text-align: left;
    letter-spacing: 0;
  }
`;n.d(t,"a",function(){return s});class s extends a.PureComponent{render(){const{testId:e,icon:t,onChange:n,value:i,disabled:o,type:s,placeholder:d}=this.props;return a.createElement(l,{"data-test-id":e,disabled:o},t?a.createElement(r,null,t):null,a.createElement(c,{type:s,onChange:n,disabled:o,value:i,placeholder:d}))}}s.defaultProps={type:"text"}},function(e,t,n){"use strict";var a=n(0),i=n(1);const o=Object(i.default)("div").withConfig({displayName:"StyledWrapper"})`
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  padding: 15px 38px 15px 19px;
  font-family: Poppins, sans-serif;
  width: 100%;
  ${e=>{let t="#fff";if(e.bg)switch(e.type){case"error":t="#FFEEF1";break;case"success":t="#E7F6FF";break;case"warning":t="#FAF2DE"}return i.css`
    --alert-wrapper-color: ${t};
  `}};
  background: var(--alert-wrapper-color);
`,l=Object(i.default)("span").withConfig({displayName:"StyledIcon"})`
  width: 40px;
  height: 40px;
  flex-basis: 40px;
`,r=Object(i.default)("div").withConfig({displayName:"StyledContent"})`
  flex-grow: 1;
  flex-basis: 50%;
  padding-left: 19px;
  font-family: Muli, sans-serif;
  font-size: 16px;
  font-weight: 300;
  letter-spacing: -0.3px;
  ${e=>{let t="#838391",n="#4b4c5c";if(e.colored)switch(e.type){case"error":t=n="#F36980";break;case"success":t=n="#67D79D";break;case"warning":t=n="#FF7900"}return i.css`
    --alert-content-color: ${t};
    --alert-content-bold: ${n};
  `}};
  color: var(--alert-content-color);

  b {
    font-weight: 600;
    color: var(--alert-content-bold);
  }
`,c=Object(i.default)("div").withConfig({displayName:"StyledClose"})`
  width: 11px;
  height: 11px;
  position: absolute;
  top: 14px;
  right: 14px;
  z-index: 2;
`,s=Object(i.default)("div").withConfig({displayName:"StyledError"})`
  color: #F43405;
`,d=Object(i.default)("div").withConfig({displayName:"StyledSuccess"})`
  color: #1BBA6A;
`,p=Object(i.default)("div").withConfig({displayName:"StyledWarning"})`
  color: #FF7900;
`;var u=n(634),m=n(301),h=n(713),g=n(340);n.d(t,"a",function(){return f});class f extends a.PureComponent{get icon(){switch(this.props.type){case"error":return a.createElement(s,null,a.createElement(u.a,null));case"success":return a.createElement(d,null,a.createElement(m.a,null));case"warning":return a.createElement(p,null,a.createElement(h.a,null))}return null}render(){const{id:e,children:t,onClose:n,colored:i,bg:s,type:d}=this.props;return a.createElement(o,{id:e,type:d,bg:s},a.createElement(l,null,this.icon),a.createElement(r,{type:d,colored:i},t),n?a.createElement(c,null,a.createElement(g.a,null)):null)}}},function(e,t,n){"use strict";var a=n(0),i=n(1);const o=Object(i.default)("button").withConfig({displayName:"StyledWrapper"})`
  user-select: none;
  font-family: Poppins, sans-serif;
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
  display: ${e=>e.isMobile?"block":"flex"};
  align-items: center;
  margin: ${e=>e.isMobile?"0 auto 8px auto":"0 0 8px 0"};
`,l=Object(i.default)("div").withConfig({displayName:"StyledAmount"})`
  opacity: 1;
  border-radius: 20px;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.35);
  background: ${e=>e.selected?"rgba(255, 255, 255, 0.35)":"transparent"};
  vertical-align: baseline;
  padding: ${e=>"big"===e.type?"0 16px":"0 12px"};
  min-height: ${e=>"big"===e.type?40:32}px;
  min-width: ${e=>e.isMobile?"100px":"big"===e.type?"118px":"82px"};
  font-size: 13px;
  font-weight: 600;
  margin-right: ${e=>e.isMobile?0:12}px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${e=>e.isMobile?5:0}px;
`,r=Object(i.default)("div").withConfig({displayName:"StyledTokens"})`
  font-weight: 400;
  margin-left: 5px;
`,c=i.default.span.withConfig({displayName:"StyledNumber"})`
  font-weight: 400;
`,s=Object(i.default)("div").withConfig({displayName:"StyledLogo"})`
  margin-right: 6px;
  width: ${e=>e.isMobile?20:23}px;
`,d=Object(i.default)("div").withConfig({displayName:"StyledConverted"})`
  vertical-align: baseline;
  opacity: ${e=>e.selected?1:.4};
  font-size: ${e=>"big"===e.type?"12px":"10px"};
  color: #ffffff;
  display: ${e=>e.isMobile?"block":"inline-block"};
  font-weight: 500;
`;var p=n(2),u=n(342);n.d(t,"a",function(){return m});class m extends a.PureComponent{constructor(){super(...arguments),this.getAboutText=(e=>e?"":Object(p.b)("about"))}render(){const{id:e,onSelect:t,amount:n,selected:i,type:p,converted:m,currency:h,isMobile:g}=this.props;return a.createElement(o,{id:e,onClick:t.bind(this,n),isMobile:g},a.createElement(l,{selected:i,type:p,isMobile:g},a.createElement(s,{isMobile:g},a.createElement(u.a,null)),a.createElement(c,null,n)," ",a.createElement(r,null,"big"===p?"BAT":null)),a.createElement(d,{selected:i,type:p,isMobile:g},this.getAboutText(g)," ",m," ",h))}}m.defaultProps={type:"small",currency:"USD",converted:0}},function(e,t,n){"use strict";var a=n(0),i=n(2),o=n(1);const l=Object(o.default)("section")`
  background: #F5F5F9;
  display: block;
  width: 100%;
  padding: 10px 30px;
`,r=Object(o.default)("div")`
  color: #838391;
  font-size: 14px;
  font-weight: normal;
  letter-spacing: 0;
  line-height: 28px;
  position: relative;
`,c=Object(o.default)("span")`
  color: #4C54D2;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 28px;
  margin-right: 5px;
`,s=Object(o.default)("span")`
  margin-right: 5px;
`,d=Object(o.default)("span")`
  margin-right: 5px;
  vertical-align: middle;
  width: 20px;
  height: 20px;
  margin-top: -3px;
  display: inline-block;
`,p=Object(o.default)("span")`
  font-weight: 600;
  margin-right: 5px;
`,u=Object(o.default)("div")`
  display: inline-block;
  vertical-align: middle;
  margin-top: 3px;
  text-align: right;
  position: absolute;
  right: 0px;
`,m=Object(o.default)("div")`
  float: right;
  margin-top: 2px;
`,h=Object(o.default)("span")`
  width: 20px;
  height: 20px;
  display: inline-block;
  margin-top: 3px;
  vertical-align: top;
`;var g=n(733),f=n(732),b=n(731),x=n(722),y=n(75);n.d(t,"a",function(){return C});class C extends a.PureComponent{getProviderImg(e){switch(e){case"youtube":return a.createElement(g.a,null);case"twitter":return a.createElement(f.a,null);case"twitch":return a.createElement(b.a,null)}}getProviderName(e){return e.toUpperCase()}getProviderText(e){return`${this.getProviderName(e)} ${Object(i.b)("for")}`}render(){const{id:e,provider:t,onToggleTips:n,tipsEnabled:o}=this.props;return t?a.createElement(l,{id:e},a.createElement(r,null,a.createElement(c,null,Object(i.b)("enableTips")),a.createElement(s,null,Object(i.b)("on")),a.createElement(d,null,this.getProviderImg(t)),a.createElement(p,null,this.getProviderName(t)),a.createElement(s,null,Object(i.b)("for")),a.createElement(h,null,a.createElement(x.a,null)),a.createElement(u,null,a.createElement(m,null,a.createElement(y.a,{size:"small",onToggle:n,checked:o}))))):null}}},function(e,t,n){"use strict";var a=n(0),i=n(1);const o=Object(i.default)("div").withConfig({displayName:"StyledContent"})`
  font-family: Poppins, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  ${e=>{let t="#4b4c5c",n="#4b4c5c";switch(e.type){case"ads":t="#ceb4e1",n="#b490cf";break;case"contribute":t="#ce9ccf",n="#c16fc2";break;case"donation":t="#AC9CCF",n="#696fdc"}return i.css`
    --disabled-content-color: ${t};
    --disabled-content-bold: ${n};
  `}};
  color: var(--disabled-content-color);

  b,
  a {
    color: var(--disabled-content-bold);
    font-weight: 500;
  }

  h3 {
    margin: 0;
    display: inline-block;
    padding: 0;
    font-family: Poppins, sans-serif;
    font-size: 28px;
    font-weight: 500;
    line-height: 0.5;
    color: #ceb4e1;
  }
`,l=Object(i.default)("div").withConfig({displayName:"StyledGrid"})`
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-gap: 32px;
  box-sizing: border-box;
`,r=Object(i.default)("div").withConfig({displayName:"StyledOneColumn"})`
  display: flex;
  grid-column: span 1;
  justify-content: flex-end;
`,c=Object(i.default)("div").withConfig({displayName:"StyledTwoColumn"})`
  display: flex;
  justify-content: center;
  flex-direction: column;
  grid-column: span 2;
`;n.d(t,"a",function(){return s});class s extends a.PureComponent{render(){const{id:e,image:t,children:n,type:i}=this.props;return a.createElement("div",{id:e},a.createElement(l,null,a.createElement(r,null,a.createElement("img",{src:t})),a.createElement(c,null,a.createElement(o,{type:i},n))))}}},function(e,t,n){"use strict";var a=n(0),i=n(1),o=n(153);const l={ads:"#C12D7C",contribute:"#9F22A1",donation:"#696FDC"},r=Object(i.default)("div").withConfig({displayName:"StyledWrapper"})`
  display: block;
  width: 100%;
  margin-bottom: 28px;
`,c=Object(i.default)(o.a).withConfig({displayName:"StyledCard"})`
  font-family: Poppins, sans-serif;
  border-bottom-left-radius: ${e=>e.hasAlert?0:6}px;
  border-bottom-right-radius: ${e=>e.hasAlert?0:6}px;
`,s=Object(i.default)("div").withConfig({displayName:"StyledFlip"})`
  display: block;
`,d=Object(i.default)("div").withConfig({displayName:"StyledContentWrapper"})`
  flex-wrap: wrap;
  display: ${e=>e.open?"flex":"none"};
`,p=Object(i.default)("div").withConfig({displayName:"StyledLeft"})`
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 50%;
`,u=Object(i.default)("div").withConfig({displayName:"StyledRight"})`
  flex-basis: 40px;
  justify-content: flex-end;
  display: flex;
  max-height: 30px;
`,m=Object(i.default)("div").withConfig({displayName:"StyledTitle"})`
  height: 36px;
  font-size: 22px;
  font-weight: 600;
  line-height: 1.27;
  letter-spacing: normal;
  color: ${e=>!1===e.checked?"#838391":e.type&&l[e.type]||"#4b4c5c"};
`,h=Object(i.default)("div").withConfig({displayName:"StyledBreak"})`
  width: 100%;
  display: block;
`,g=Object(i.default)("div").withConfig({displayName:"StyledDescription"})`
  width: 100%;
  padding-right: 20px;
  font-family: Muli, sans-serif;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: normal;
  color: #838391;
`,f=Object(i.default)("button").withConfig({displayName:"StyledSettingsIcon"})`
  width: 27px;
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
  color: #A1A8F2;
`,b=Object(i.default)("div").withConfig({displayName:"StyledContent"})`
  flex-basis: 100%;
  flex-grow: 1;
  margin-top: 25px;
`,x=Object(i.default)("div").withConfig({displayName:"StyledSettingsWrapper"})`
  background: #fff;
  display: ${e=>e.open?"block":"none"};
`,y=Object(i.default)("button").withConfig({displayName:"StyledSettingsClose"})`
  display: ${e=>e.open?"block":"none"};
  position: absolute;
  right: 29px;
  top: 29px;
  width: 21px;
  height: 21px;
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
  color: #DFDFE8;
`,C=Object(i.default)("div").withConfig({displayName:"StyledSettingsTitle"})`
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`,v=Object(i.default)("div").withConfig({displayName:"StyledSettingsText"})`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.75;
  color: #4b4c5c;
  margin-left: 20px;
`;var w=n(688),E=n(75),k=n(2),O=n(635),S=n(340);n.d(t,"a",function(){return j});class j extends a.PureComponent{constructor(e){super(e),this.settingsClick=(()=>{this.setState({settingsOpened:!this.state.settingsOpened})}),this.getSettingsTitle=(e=>`${e} ${Object(k.b)("settings")}`),this.state={settingsOpened:!1}}render(){const{id:e,title:t,toggle:n,checked:i,attachedAlert:o,onToggle:l,settingsChild:k,disabledContent:j,description:T,type:N,children:A,testId:z}=this.props,B=n&&!i||!n&&j;return a.createElement(r,null,a.createElement(c,{testId:e,hasAlert:!!o},a.createElement(s,null,a.createElement(d,{open:!this.state.settingsOpened},a.createElement(p,null,a.createElement(m,{type:N,checked:i},t)),a.createElement(u,null,n?a.createElement(E.a,{onToggle:l,checked:i,testId:z}):null),a.createElement(h,null),a.createElement(p,null,a.createElement(g,null,T)),a.createElement(u,null,k&&(n&&i||!n)?a.createElement(w.a,{id:"brave-ads-tip",content:this.getSettingsTitle(t)},a.createElement(f,{float:"right",onClick:this.settingsClick},a.createElement(O.a,null))):null),a.createElement(b,null,B?j:A)),a.createElement(x,{open:this.state.settingsOpened},a.createElement(y,{onClick:this.settingsClick,open:this.state.settingsOpened},a.createElement(S.a,null)),a.createElement(C,null,a.createElement(f,null,a.createElement(O.a,null)),a.createElement(v,null,this.getSettingsTitle(t))),k))),o)}}},function(e,t,n){"use strict";var a=n(0),i=n(1);const o=Object(i.default)("div").withConfig({displayName:"StyledWrapper"})`
  display: inline-block;
  position: relative;
`,l=Object(i.default)("div").withConfig({displayName:"StyledTooltip"})`
  left: 50%;
  top: calc(100% + 10px);
  transform: translateX(-50%);
  white-space: nowrap;
  position: absolute;
  background: #0C0D21;
  text-align: center;
  padding: 10px;
  z-index: 2;
  border-radius: 3px;
  box-shadow: 1px 1px 5px 0 rgba(34, 35, 38, 0.43);
  display: ${e=>e.displayed?"inline-block":"none"};
`,r=Object(i.default)("div").withConfig({displayName:"StyledTooltipText"})`
  color: #FFFFFF;
  font-family: Muli, sans-serif;
  font-weight: 300;
  font-size: 14px;
`,c=Object(i.default)("div").withConfig({displayName:"StyledPointer"})`
  width: 0;
  height: 0;
  border-style: solid;
  position: absolute;
  top: -7px;
  left: calc(50% - 7px);
  border-width: 0 7px 8px 7px;
  border-color: transparent transparent #0C0D21 transparent;
`,s=Object(i.default)("div").withConfig({displayName:"StyledChildWrapper"})`
  cursor: pointer;
`;n.d(t,"a",function(){return d});class d extends a.PureComponent{constructor(e){super(e),this.onMouseEnter=(()=>{this.setState({displayed:!0})}),this.onMouseLeave=(()=>{this.setState({displayed:!1})}),this.state={displayed:!1}}render(){const{id:e,content:t,children:n}=this.props;return a.createElement(o,{id:e},a.createElement(l,{displayed:this.state.displayed},a.createElement(c,null),a.createElement(r,null,t)),a.createElement(s,{onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave},n))}}},function(e,t,n){"use strict";var a=n(0),i=n(2),o=n(1),l=n(48),r=n(811),c=n.n(r);const s=Object(o.default)("div")`
  text-align: center;
  font-family: Poppins, sans-serif;
  background-image: linear-gradient(140deg, #392DD1 0%, #8E2995 100%);
`,d=Object(o.default)("div")`
  margin: 0 auto;
  display: inline-block;
  padding: 35px 30px 25px;
  background: url(${c.a}) no-repeat top;
`,p=Object(o.default)("p")`
  width: 261px;
  color: #FFFFFF;
  font-size: 16px;
  font-weight: 300;
  letter-spacing: 0.16px;
  line-height: 22px;
  margin: 0 auto;
  opacity: 0.5;
  font-family: Muli, sans-serif;
`,u=Object(o.default)("span")`
  display: block;
  margin: -10px auto 2px;
  width: 150px;
  height: 115px;
  padding: 20px 0 15px;
`,m=Object(o.default)(l.a)`
  color: #FFFFFF;
  font-weight: 400;
  line-height: 22px;
  margin: 0;
  display: inline-block;
`,h=Object(o.default)("p")`
  color: #FFFFFF;
  font-size: 16px;
  font-weight: normal;
  letter-spacing: 0;
  line-height: 24px;
  opacity: 0.5;
  margin: 15px auto 23px;
  text-align: center;
  width: 280px;
  font-family: Muli, sans-serif;
`,g=Object(o.default)("div")`
  margin: 0 auto 25px;
  display: inline-block;
`,f=Object(o.default)("div")`
  color: #73CBFF;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.19px;
  line-height: 21px;
  display: block;
  text-align: center;
  cursor: pointer;
`,b=Object(o.default)("span")`
  display: inline-block;
  vertical-align: text-top;
  margin-top: -13px;
  color: #FFF;
  font-size: 9px;
  font-weight: 500;
  opacity: 0.7;
`,x=Object(o.default)("span").withConfig({displayName:"StyledErrorMessage"})`
  font-size: 16px;
  display: block;
  margin: 0px auto 20px;
  line-height: 28px;
  color: #FFF;
`;var y=n(342),C=n(729),v=n(10);n.d(t,"a",function(){return w});class w extends a.PureComponent{get locale(){return{one:{header:"welcomeHeaderOne",title:"braveRewards",desc:"welcomeDescOne",button:"welcomeButtonTextOne",footer:"welcomeFooterTextOne"},two:{header:"welcomeHeaderTwo",title:"braveRewards",desc:"welcomeDescTwo",button:"welcomeButtonTextTwo",footer:"welcomeFooterTextTwo"}}[this.props.variant||"one"]}render(){const{id:e,optInAction:t,optInErrorAction:n,moreLink:o}=this.props;let l={};return o&&(l={onClick:o}),a.createElement(s,{id:e},a.createElement(d,null,a.createElement(p,null,Object(i.b)(this.locale.header)),a.createElement(u,null,a.createElement(y.a,null)),a.createElement(m,{level:4},Object(i.b)(this.locale.title)),a.createElement(b,null,"TM"),a.createElement(h,null,Object(i.b)(this.locale.desc)),a.createElement(g,null,this.props.creating&&!this.props.error?a.createElement(v.a,{level:"secondary",size:"call-to-action",type:"subtle",text:"Creating wallet",disabled:!0,"data-test-id":"optInAction",icon:{image:a.createElement(C.a,null),position:"after"}}):this.props.error?a.createElement(a.Fragment,null,a.createElement(x,null,Object(i.b)("walletFailedTitle")),a.createElement(v.a,{level:"secondary",size:"call-to-action",type:"subtle",text:Object(i.b)("walletFailedButton"),onClick:n,"data-test-id":"optInErrorAction"})):a.createElement(v.a,{size:"call-to-action",type:"subtle",level:"secondary",onClick:t,text:Object(i.b)(this.locale.button)})),a.createElement(f,Object.assign({},l),Object(i.b)(this.locale.footer))))}}},,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";var a=n(0),i=n(7);const o=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},a.createElement("path",{d:"M13 26a1 1 0 0 1-.67-.26l-9-8.2a1 1 0 0 1 1.34-1.48l8.23 7.49L27.23 6.13A1 1 0 0 1 28.64 6a1 1 0 0 1 .13 1.4l-15 18.24a1 1 0 0 1-.7.36z"}));t.a=Object(i.a)(o)},function(e,t,n){"use strict";var a=n(0),i=n(7);const o=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},a.createElement("path",{d:"M16 28C9.37258 28 4 22.62742 4 16S9.37258 4 16 4s12 5.37258 12 12-5.37258 12-12 12zm0-2c5.52285 0 10-4.47715 10-10S21.52285 6 16 6 6 10.47715 6 16s4.47715 10 10 10zm0-4c-.55228 0-1-.44772-1-1s.44772-1 1-1 1 .44772 1 1-.44772 1-1 1zm-1-11c0-.55228.44772-1 1-1s1 .44772 1 1v6.07107c0 .55228-.44772 1-1 1s-1-.44772-1-1V11z"}));t.a=Object(i.a)(o)},function(e,t,n){"use strict";var a=n(0),i=n(7);const o=a.createElement("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},a.createElement("g",{fill:"#FFF",fillRule:"evenodd",opacity:".3"},a.createElement("path",{d:"M15 33.1a2.093 2.093 0 0 1-1.484-.614l-12.9-12.9a2.1 2.1 0 0 1 0-2.972 2.104 2.104 0 0 1 2.972 0l11.411 11.414 11.415-11.412a2.1 2.1 0 0 1 2.97 2.97l-12.9 12.9c-.407.41-.947.614-1.485.614z"}),a.createElement("rect",{fillRule:"nonzero",x:"13",width:"4",height:"29",rx:"2"})));t.a=Object(i.a)(o)},function(e,t,n){"use strict";var a=n(0),i=n(7);const o=a.createElement("svg",{width:"26",height:"26",version:"1",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{d:"M24 23l-1 1H12l-1-1v-3h3c2 0 3-1 3-3V8h6l1 1v14zM2 17V3l1-1h11l1 1v14l-1 1H3l-1-1zM23 6h-6V3c0-2-1-3-3-3H3C1 0 0 1 0 3v14c0 2 1 3 3 3h6v3c0 2 1 3 3 3h11c2 0 3-1 3-3V9c0-2-1-3-3-3z",fill:"#373843",fillRule:"evenodd"}));t.a=Object(i.a)(o)},function(e,t,n){"use strict";var a=n(0),i=n(7);const o=a.createElement("svg",{width:"32",height:"32",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},a.createElement("defs",null,a.createElement("path",{d:"M28.704 27.28L17.41 15.996 28.704 4.709a1.004 1.004 0 0 0-1.419-1.42L16 14.587 4.715 3.29a1.004 1.004 0 1 0-1.42 1.42l11.296 11.285L3.296 27.281a1 1 0 0 0 0 1.42 1 1 0 0 0 1.419 0L16 17.404 27.285 28.7a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z",id:"b"}),a.createElement("filter",{x:"-17.3%",y:"-17.3%",width:"134.6%",height:"134.6%",filterUnits:"objectBoundingBox",id:"a"},a.createElement("feOffset",{in:"SourceAlpha",result:"shadowOffsetOuter1"}),a.createElement("feGaussianBlur",{stdDeviation:"1.5",in:"shadowOffsetOuter1",result:"shadowBlurOuter1"}),a.createElement("feColorMatrix",{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0",in:"shadowBlurOuter1"}))),a.createElement("g",{fill:"none",fillRule:"evenodd"},a.createElement("use",{fill:"#000",filter:"url(#a)",xlinkHref:"#b"}),a.createElement("use",{fill:"#FFF",xlinkHref:"#b"})));t.a=Object(i.a)(o)},function(e,t,n){"use strict";var a=n(0),i=n(7);const o=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},a.createElement("path",{d:"M15.25 21.65a1 1 0 0 0 1.5 0l5.89-4.88a1 1 0 1 0-1.28-1.54L17 18.84V4a1 1 0 0 0-2 0v14.84l-4.36-3.61a1 1 0 0 0-1.28 1.54z"}),a.createElement("path",{d:"M28 20a1 1 0 0 0-1 1v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-5a1 1 0 0 0-2 0v5a3 3 0 0 0 3 3h20a3 3 0 0 0 3-3v-5a1 1 0 0 0-1-1z"}));t.a=Object(i.a)(o)},function(e,t,n){"use strict";var a=n(0),i=n(7);const o=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},a.createElement("path",{d:"M16 29a13 13 0 1 1 13-13 13 13 0 0 1-13 13zm0-24a11 11 0 1 0 11 11A11 11 0 0 0 16 5z"}),a.createElement("path",{d:"M10 22a1 1 0 0 1-.85-1.53A8 8 0 0 1 16 17a8.06 8.06 0 0 1 6.84 3.46 1 1 0 1 1-1.68 1.08A6.15 6.15 0 0 0 16 19a6 6 0 0 0-5.15 2.53A1 1 0 0 1 10 22zM12 14a2 2 0 1 1 2-2 2 2 0 0 1-2 2zm0-2zM20 14a2 2 0 1 1 2-2 2 2 0 0 1-2 2zm0-2z"}));t.a=Object(i.a)(o)},function(e,t,n){"use strict";var a=n(0),i=n(7);const o=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},a.createElement("path",{fillRule:"evenodd",d:"M23 13h1c.552 0 1 .447 1 1 0 .553-.448 1-1 1h-1c-.552 0-1-.447-1-1 0-.553.448-1 1-1zm3 9h-2v-4c0-.553-.448-1-1-1H9c-.552 0-1 .447-1 1v4H6V12h20v10zm-16 4h12v-7H10v7zm0-16h12V6H10v4zm16 0h-2V5c0-.553-.448-1-1-1H9c-.552 0-1 .447-1 1v5H6c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h2v3c0 .553.448 1 1 1h14c.552 0 1-.447 1-1v-3h2c1.103 0 2-.897 2-2V12c0-1.103-.897-2-2-2z"}));t.a=Object(i.a)(o)},function(e,t,n){"use strict";var a=n(0),i=n(7);const o=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},a.createElement("path",{d:"M29 4v-.07a1 1 0 0 0 0-.24.42.42 0 0 0 0-.1.84.84 0 0 0-.18-.28.84.84 0 0 0-.29-.2h-.1a1 1 0 0 0-.37-.11H28a.87.87 0 0 0-.28.05h-.07L3.6 13.66a1 1 0 0 0-.12 1.77l8.17 4.94 5.14 8.16a1 1 0 0 0 .84.47h.08a1 1 0 0 0 .84-.6l10.37-24A1 1 0 0 0 29 4zm-5.47 3L12.21 18.38l-6.05-3.67zm-6.06 18.86l-3.83-6.08L25 8.41z"}));t.a=Object(i.a)(o)},function(e,t,n){"use strict";var a=n(0),i=n(7);const o=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},a.createElement("path",{d:"M16 11a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3z"}),a.createElement("path",{d:"M28.13 13.41l-2.55-.33a9.8 9.8 0 0 0-.76-1.83l1.54-2.06a1 1 0 0 0-.09-1.31l-2.22-2.2a1 1 0 0 0-1.31-.09l-2.07 1.58a10.72 10.72 0 0 0-1.76-.73l-.32-2.56a1 1 0 0 0-1-.88H14.4a1 1 0 0 0-1 .87l-.34 2.57a10 10 0 0 0-1.82.76L9.2 5.64a1 1 0 0 0-1.32.09L5.68 8a1 1 0 0 0-.08 1.27l1.56 2a10 10 0 0 0-.76 1.82l-2.53.32a1 1 0 0 0-.87 1v3.2a1 1 0 0 0 .88 1l2.5.31a10.19 10.19 0 0 0 .76 1.84l-1.51 2.06a1 1 0 0 0 .1 1.3L8 26.32a1 1 0 0 0 1.31.09l2-1.54a9.8 9.8 0 0 0 1.78.73l.33 2.53a1 1 0 0 0 1 .87h3.2a1 1 0 0 0 1-.87l.34-2.54a10.16 10.16 0 0 0 1.81-.75l2.08 1.53a1 1 0 0 0 1.3-.1l2.2-2.22a1 1 0 0 0 .09-1.31l-1.55-2a9.93 9.93 0 0 0 .74-1.79l2.53-.33a1 1 0 0 0 .87-1V14.4a1 1 0 0 0-.9-.99zM27 16.72l-2.33.28a1 1 0 0 0-.84.77 8 8 0 0 1-1 2.45 1 1 0 0 0 .06 1.14l1.42 1.87-1 1-1.92-1.41a1 1 0 0 0-1.12 0 7.89 7.89 0 0 1-2.47 1 1 1 0 0 0-.77.84L16.72 27h-1.44L15 24.68a1 1 0 0 0-.77-.85 7.61 7.61 0 0 1-2.45-1 1 1 0 0 0-1.13.06l-1.9 1.4-1-1 1.39-1.91a1 1 0 0 0 0-1.12 8.06 8.06 0 0 1-1-2.49A1 1 0 0 0 7.3 17L5 16.72v-1.44L7.32 15a1 1 0 0 0 .84-.77 8.15 8.15 0 0 1 1.05-2.49 1 1 0 0 0-.05-1.16L7.72 8.74l1-1 1.85 1.46a1 1 0 0 0 1.14.05 7.89 7.89 0 0 1 2.49-1 1 1 0 0 0 .8-.88L15.28 5h1.43L17 7.36a1 1 0 0 0 .78.85 7.86 7.86 0 0 1 2.44 1 1 1 0 0 0 1.13-.05l1.91-1.45 1 1-1.42 1.89a1 1 0 0 0-.05 1.14 8 8 0 0 1 1.05 2.49 1 1 0 0 0 .84.76l2.34.31z"}));t.a=Object(i.a)(o)},function(e,t,n){"use strict";var a=n(0),i=n(7);const o=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},a.createElement("path",{d:"M9.6 26.4H4a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h5.6a1 1 0 0 1 1 1v14.4a1 1 0 0 1-1 1zm-4.6-2h3.6V12H5z"}),a.createElement("path",{d:"M24.8 28H16a6.08 6.08 0 0 1-3.47-1.26L9 23.77a1 1 0 1 1 1.28-1.54l3.57 3A4.22 4.22 0 0 0 16 26h8.8a.83.83 0 0 0 .78-.7L27 14.06a.44.44 0 0 0-.1-.33.45.45 0 0 0-.33-.13H19.2a1 1 0 0 1 0-2h7.37A2.4 2.4 0 0 1 29 14.3l-1.43 11.24A2.81 2.81 0 0 1 24.8 28z"}),a.createElement("path",{d:"M19.2 13.6a1 1 0 0 1-1-1V5.4a1 1 0 0 1 2 0v7.2a1 1 0 0 1-1 1z"}),a.createElement("path",{d:"M12.8 13.6H9.6a1 1 0 0 1 0-2H12c.4-1.95 1.37-6.59 1.61-7.34A3.4 3.4 0 0 1 20.2 5.4a1 1 0 1 1-2 0A1.4 1.4 0 0 0 16.8 4a1.38 1.38 0 0 0-1.29.86c-.2.61-1.14 5.09-1.73 7.94a1 1 0 0 1-.98.8z"}));t.a=Object(i.a)(o)},function(e,t,n){"use strict";var a=n(0),i=n(7);const o=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},a.createElement("path",{d:"M18.12 26.62a6.1 6.1 0 0 1-4.24 0 1 1 0 0 0-.67 1.89 8.19 8.19 0 0 0 5.58 0 1 1 0 0 0-.67-1.89zM25 13.27a13.41 13.41 0 0 0-.45-2.81l-.06-.23c0-.15-.09-.28-.14-.42a.56.56 0 0 0 0-.12A7.69 7.69 0 0 0 24 9c-1.49-3.53-4.48-6-8-6S9.49 5.44 8 9a7.69 7.69 0 0 0-.28.72.56.56 0 0 0 0 .12c0 .14-.1.27-.14.42l-.06.23A13.41 13.41 0 0 0 7 13.27V14c0 6 4 11 9 11s9-5 9-11v-.73zM16 5a5.78 5.78 0 0 1 3.27 1A7.53 7.53 0 0 0 16 7.26a7.53 7.53 0 0 0-3.27-1.21A5.78 5.78 0 0 1 16 5zm-7 9v-.53V13a12 12 0 0 1 .36-2 3.79 3.79 0 0 1 .14-.48c.08-.24.17-.47.26-.69 0-.06 0-.12.08-.17A2.33 2.33 0 0 1 12 8a5.14 5.14 0 0 1 2.35.61A12.12 12.12 0 0 0 11 17a13.32 13.32 0 0 0 .53 3.92A10.14 10.14 0 0 1 9 14zm7 9c-1.56 0-3-1.88-3-6a10.07 10.07 0 0 1 3-7.21A10.07 10.07 0 0 1 19 17c0 4.12-1.44 6-3 6zm4.47-2.08A13.32 13.32 0 0 0 21 17a12.12 12.12 0 0 0-3.35-8.39A5.14 5.14 0 0 1 20 8a2.33 2.33 0 0 1 2.08 1.56s0 .11.08.17c.09.22.18.45.26.69a3.79 3.79 0 0 1 .14.48 12 12 0 0 1 .36 2v1a10.14 10.14 0 0 1-2.45 7.02z"}));t.a=Object(i.a)(o)},function(e,t,n){"use strict";var a=n(0),i=n(7);const o=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},a.createElement("path",{d:"M27.48 9.12l-11-6a1 1 0 0 0-1 0l-11 6A1 1 0 0 0 4 10v12a1 1 0 0 0 .52.88l11 6a1 1 0 0 0 1 0l11-6A1 1 0 0 0 28 22V10a1 1 0 0 0-.52-.88zM21.8 12.6l-6 8a1 1 0 0 1-.8.4 1 1 0 0 1-.6-.2l-4-3a1 1 0 0 1 1.2-1.6l3.2 2.4 5.4-7.2a1 1 0 1 1 1.6 1.2z"}));t.a=Object(i.a)(o)},function(e,t,n){"use strict";var a=n(0),i=n(7);const o=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},a.createElement("path",{d:"M26.43 6H7.57A2.6 2.6 0 0 0 5 8.64V12H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1v3.36A2.6 2.6 0 0 0 7.57 26H16a1 1 0 0 0 0-2H7.57a.61.61 0 0 1-.57-.64V20h5a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H7V8.64A.61.61 0 0 1 7.57 8h18.86a.61.61 0 0 1 .57.64V16a1 1 0 0 0 2 0V8.64A2.6 2.6 0 0 0 26.43 6zM11 18H5v-4h6z"}),a.createElement("path",{d:"M8.92 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM23 21a1 1 0 0 0-1 1v3a1 1 0 0 0 2 0v-3a1 1 0 0 0-1-1zM23.56 18.17a.76.76 0 0 0-.18-.09L23.2 18a1 1 0 0 0-.58.06 1.15 1.15 0 0 0-.33.21A1.05 1.05 0 0 0 22 19a1 1 0 0 0 .08.38 1 1 0 0 0 .21.33 1.15 1.15 0 0 0 .33.21A1 1 0 0 0 23 20h.2l.18-.06a.76.76 0 0 0 .18-.09 1.58 1.58 0 0 0 .15-.12 1 1 0 0 0 .21-.33A1 1 0 0 0 24 19a1.05 1.05 0 0 0-.29-.71z"}));t.a=Object(i.a)(o)},function(e,t,n){"use strict";var a=n(0),i=n(7);const o=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},a.createElement("circle",{cx:"16",cy:"16",r:"13",fill:"#f7931a"}),a.createElement("path",{d:"M20 11.8l-.48-.15.67-2.26-1.73-.52-.67 2.27-1.48-.44.69-2.27-.41-.12-1.68-.5-.66 2.19-2.05-.62-.58 1.94 2.05.61-2.1 7.07-2.05-.61-.58 1.94 2.05.61-.55 1.84.41.12 1.68.5.58-1.92 1.48.44-.59 1.92 1.73.52.57-1.93.49.15a3.34 3.34 0 0 0 .94.14 3.28 3.28 0 0 0 2.85-4.88 3.27 3.27 0 0 0 1.62-2A3.28 3.28 0 0 0 20 11.8zm-.92 8a1.38 1.38 0 0 1-.68.85 1.4 1.4 0 0 1-1.08.11l-3.65-1.08.83-2.68 3.64 1.09a1.41 1.41 0 0 1 .95 1.75zm1.35-4.5a1.43 1.43 0 0 1-1.77 1L15 15.21l.81-2.72 3.64 1.09a1.39 1.39 0 0 1 .84.68 1.46 1.46 0 0 1 .15 1.08z",fill:"#fff"}));t.a=Object(i.a)(o)},function(e,t,n){"use strict";var a=n(0),i=n(7);const o=a.createElement("svg",{id:"outlines",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},a.createElement("defs",null),a.createElement("path",{className:"cls-1",d:"M16 2.94l-5.81 9.62L8 16.18l8-3.62V2.94z"}),a.createElement("path",{fill:"#393939",fillRule:"evenodd",d:"M8 16.18l2.57 1.52L16 20.9v-8.34l-8 3.62z"}),a.createElement("path",{className:"cls-3",d:"M16 2.94v9.62l8 3.62-2.19-3.62L16 2.94z"}),a.createElement("path",{fill:"#151515",fillRule:"evenodd",d:"M16 17.7v3.2l5.43-3.2L24 16.18l-8-3.62v5.14z"}),a.createElement("path",{className:"cls-1",d:"M8 17.7l2.28 3.2L16 28.94v-6.53l-2.56-1.51L8 17.7z"}),a.createElement("path",{className:"cls-3",d:"M18.57 20.9L16 22.41v6.53l5.72-8.04L24 17.7l-5.43 3.2z"}));t.a=Object(i.a)(o)},function(e,t,n){"use strict";var a=n(0),i=n(7);const o=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},a.createElement("circle",{cx:"16",cy:"16",r:"13",fill:"#bebebe"}),a.createElement("path",{fill:"#fff",d:"M16.09 16.29l1.99-.73.5-1.86-.02-.05-1.97.72 1.42-5.34h-4.02l-1.85 6.96-1.55.57-.51 1.93 1.54-.57-1.09 4.11h10.7l.69-2.56h-6.68l.85-3.18"}));t.a=Object(i.a)(o)},function(e,t,n){"use strict";var a=n(0),i=n(7);const o=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"26px",height:"20.5px",viewBox:"0 0 32 32"},a.createElement("path",{d:"M6.5 23.5c-.7 0-1.4-.4-1.7-1C3.6 20.5 3 18.3 3 16 3 8.8 8.8 3 16 3s13 5.8 13 13c0 1.1-.9 2-2 2s-2-.9-2-2c0-5-4-9-9-9s-9 4-9 9c0 1.6.4 3.1 1.2 4.5.6 1 .2 2.2-.7 2.7-.4.2-.7.3-1 .3z"}," ",a.createElement("animateTransform",{attributeType:"xml",attributeName:"transform",type:"rotate",from:"0 16 16",to:"360 16 16",dur:".5s",repeatCount:"indefinite"})));t.a=Object(i.a)(o)},function(e,t,n){"use strict";var a=n(0),i=n(7);const o=a.createElement("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},a.createElement("g",{fill:"#D1D1DB",fillRule:"evenodd"},a.createElement("path",{d:"M17.486 23.025h.052c.89 0 1.717-.173 2.459-.515a.721.721 0 1 0-.605-1.31c-.551.255-1.174.383-1.854.383-.4 0-.747.322-.747.72 0 .399.297.722.695.722zm-4.174-1.847c.048.13.195.527 1.224 1.025a.72.72 0 0 0 .964-.335.72.72 0 0 0-.335-.965c-.361-.174-.536-.314-.567-.35-.139-.373-.518-.499-.892-.364-.374.138-.53.616-.394.989zm-1.962-8.042l-8.27 3.819L1.9 2.772l9.45 10.364zm8.08-3.731L12.723 12.5l-8.94-9.805L19.43 9.405zm-7.604 8.048l-1.74-2.143 1.74-.804v2.947zm-10.097.65a.719.719 0 0 0 1.021.593l5.984-2.763 3.253 4.007a.72.72 0 0 0 .801.226.72.72 0 0 0 .48-.68v-5.647l8.238-3.804a.724.724 0 0 0-.017-1.32L1.304.062 1.287.054c-.01-.005-.023 0-.033-.005A.716.716 0 0 0 .962.008C.934.009.906.015.877.02A.683.683 0 0 0 .644.11C.624.122.6.12.582.133.572.14.568.153.56.161.547.172.53.175.518.187a.706.706 0 0 0-.227.557C.293.757.284.767.286.78l1.443 17.323zM31.973 24.859c.033-.136.129-.547-.454-1.53a.72.72 0 0 0-.989-.253.72.72 0 0 0-.253.988c.205.345.273.558.28.605-.09.388.156.702.542.797.388.09.782-.222.874-.607M29.231 20.908l-.043-.028a5.824 5.824 0 0 0-2.335-.928.721.721 0 1 0-.22 1.427c.602.09 1.192.328 1.759.703.333.22.8.144 1.02-.188.22-.332.151-.766-.18-.986M24.335 20.46a.723.723 0 0 0-.91-.461 7.875 7.875 0 0 0-1.102.458.723.723 0 0 0 .648 1.29c.31-.156.61-.28.9-.376a.724.724 0 0 0 .464-.91"})));t.a=Object(i.a)(o)},function(e,t,n){"use strict";var a=n(0),i=n(7);const o=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},a.createElement("path",{fill:"#6441a4",d:"M5.76 3L4 7.46V25.7h6.25V29h3.52l3.32-3.3h5.07L29 18.91V3H5.76z"}),a.createElement("path",{d:"M7.91 21.63h5.27v3.3l3.32-3.3h6.25l3.91-3.88V5.33H7.91zm12.5-11.84h2.34v6.79h-2.34zm-6.25 0h2.34v6.79h-2.34z",fill:"#fff"}));t.a=Object(i.a)(o)},function(e,t,n){"use strict";var a=n(0),i=n(7);const o=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},a.createElement("path",{d:"M28.4 5.37A10.74 10.74 0 0 1 25 6.69a5.33 5.33 0 0 0-6.45-1 5.69 5.69 0 0 0-2.77 6.1A14.74 14.74 0 0 1 4.81 6a5.44 5.44 0 0 0-.64 4 5.27 5.27 0 0 0 2.31 3.31 5.23 5.23 0 0 1-2.42-.55 5.6 5.6 0 0 0 4.23 5.38 4.93 4.93 0 0 1-2.42.08 5.64 5.64 0 0 0 5.07 3.9A9.86 9.86 0 0 1 3 24.39a14.67 14.67 0 0 0 15.89.52 15.64 15.64 0 0 0 7.46-14.48A9.49 9.49 0 0 0 29 7.55a9.94 9.94 0 0 1-3 .94 5.92 5.92 0 0 0 2.4-3.12z",fill:"#1da1f3"}));t.a=Object(i.a)(o)},function(e,t,n){"use strict";var a=n(0),i=n(7);const o=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},a.createElement("path",{d:"M29 16a20.83 20.83 0 0 0-1-7.43 3.74 3.74 0 0 0-2.41-2A56.35 56.35 0 0 0 16 6a56.35 56.35 0 0 0-9.55.58A3.74 3.74 0 0 0 4 8.57 20.83 20.83 0 0 0 3 16a20.83 20.83 0 0 0 1 7.43 3.74 3.74 0 0 0 2.41 2A56.35 56.35 0 0 0 16 26a56.35 56.35 0 0 0 9.55-.58 3.74 3.74 0 0 0 2.41-2A20.83 20.83 0 0 0 29 16",fill:"#ff0100"}),a.createElement("path",{fill:"#fff",d:"M13 20v-8l7.02 3.96L13 20z"}));t.a=Object(i.a)(o)},function(e,t,n){"use strict";var a=n(0),i=n(7);const o=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},a.createElement("path",{d:"M7 21.128h18a4 4 0 0 1 0 8H7a4 4 0 0 1 0-8",fill:"#696FDC"}),a.createElement("path",{d:"M25.575 25.787c0 .409-.332.776-.93.776-.548 0-.969-.282-.977-.772h.565c.015.208.155.346.4.346.25 0 .395-.13.395-.317 0-.56-1.356-.222-1.352-1.162 0-.468.383-.75.926-.75.54 0 .91.27.943.739h-.58c-.012-.171-.152-.304-.377-.308-.208-.008-.363.093-.363.304 0 .52 1.35.23 1.35 1.144zm-2.212-1.04c0 .394-.27.795-.95.795h-.44v.996h-.528v-2.593h.968c.633 0 .95.353.95.802zm-1.39.375h.417c.298 0 .43-.145.43-.375 0-.237-.132-.38-.43-.38h-.418v.755zm-1.65 1.416h.526v-2.593h-.527v2.593zm-2.39-2.173v-.42h1.93v.42h-.702v2.173h-.527v-2.173h-.702zm-3.083 1.73h.373c.555 0 .867-.312.867-.85 0-.54-.312-.861-.867-.861h-.373v1.712zm.392-2.15c.841 0 1.387.513 1.387 1.3 0 .783-.546 1.293-1.387 1.293h-.919v-2.593h.92zM13.2 23.94h.528v2.597H13.2l-1.194-1.78v1.78h-.528V23.94h.528l1.194 1.784V23.94zm-2.276 0v.424h-.998v.65h.885v.412h-.885v.687h.998v.424H9.398V23.94h1.526zm-2.057 1.846c0 .409-.332.776-.93.776-.548 0-.969-.282-.977-.772h.565c.015.208.155.346.4.346.25 0 .396-.13.396-.317 0-.56-1.357-.222-1.353-1.162 0-.468.384-.75.927-.75.538 0 .908.27.942.739h-.58c-.012-.171-.15-.304-.377-.308-.208-.008-.362.093-.362.304 0 .52 1.35.23 1.35 1.144z",fill:"#FFF"}),a.createElement("path",{d:"M12.84 11.423l.733-.493 2.128-4.666v-2.45s.943-.71 1.741 0c.798.709 1.973 1.7.49 5.35h4.888c.426 0 2.65.654 1.127 2.758 0 0 1.402 1.523-.436 2.418 0 0 .842 1.62-.69 2.128 0 0 .763 1.862-.979 2.273h-7.108c-.508 0-1.563-.315-1.894-.726v-6.592z",fill:"#FFF"}),a.createElement("path",{d:"M23.578 12.259c.128.142.444.594.37.976-.048.247-.268.467-.655.655a.506.506 0 0 0-.226.679c.082.163.266.662.122 1.01-.077.187-.249.323-.526.414a.506.506 0 0 0-.307.663c.077.192.233.776.032 1.164-.105.202-.304.34-.607.42h-7.047c-.399 0-1.093-.23-1.394-.441v-6.11l.512-.344a.491.491 0 0 0 .176-.207l2.128-4.667a.491.491 0 0 0 .045-.207V4.099c.223-.1.597-.19.935.11.743.66 1.668 1.482.334 4.768a.5.5 0 0 0 .462.688h4.887c.181.004.873.213 1.087.643.2.402-.088.94-.364 1.32a.503.503 0 0 0 .036.63zm1.215-2.413c-.46-.901-1.608-1.181-1.973-1.181h-4.164c1.09-3.114.18-4.282-.882-5.225-.87-.775-1.933-.356-2.373-.026a.5.5 0 0 0-.2.4v2.34l-1.96 4.302a.493.493 0 0 0-.4-.214H7.63a.5.5 0 0 0-.5.5v8.52a.5.5 0 0 0 .5.5h5.21c.276 0 .5-.222.5-.5v-.342c.51.21 1.075.32 1.393.32h7.11a.496.496 0 0 0 .114-.013c.781-.184 1.15-.62 1.32-.953.276-.536.23-1.13.144-1.532.397-.236.595-.544.695-.788.204-.504.123-1.032.015-1.396.445-.305.714-.688.8-1.14.116-.618-.152-1.18-.373-1.515.57-.943.451-1.631.234-2.057z",fill:"#444"}),a.createElement("path",{fill:"#83DC94",d:"M8.13 18.763h4.21v-7.521H8.13z"}));t.a=Object(i.a)(o)},function(e,t,n){"use strict";var a=n(0),i=n(7);const o=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 32 32"},a.createElement("defs",null,a.createElement("path",{id:"gift",d:"M13 25.5C6.09644 25.5.5 19.90356.5 13S6.09644.5 13 .5 25.5 6.09644 25.5 13 19.90356 25.5 13 25.5zm0-1c6.35127 0 11.5-5.14873 11.5-11.5S19.35127 1.5 13 1.5 1.5 6.64873 1.5 13 6.64873 24.5 13 24.5zm-4.00018-15C8.68597 9.08217 8.5 8.5628 8.5 8c0-1.38071 1.11929-2.5 2.5-2.5.8178 0 1.54389.39267 2 .99976.45611-.60709 1.1822-.99976 2-.99976 1.38071 0 2.5 1.11929 2.5 2.5 0 .5628-.18597 1.08217-.49982 1.5H19c.27614 0 .5.22386.5.5v3c0 .27614-.22386.5-.5.5h-.5V19c0 .27614-.22386.5-.5.5H8c-.27614 0-.5-.22386-.5-.5v-5.5H7c-.27614 0-.5-.22386-.5-.5v-3c0-.27614.22386-.5.5-.5h1.99982zM11 9.5h1.5V8c0-.82843-.67157-1.5-1.5-1.5S9.5 7.17157 9.5 8s.67157 1.5 1.5 1.5zm2.5 0H15c.82843 0 1.5-.67157 1.5-1.5s-.67157-1.5-1.5-1.5-1.5.67157-1.5 1.5v1.5zm0 1v2h5v-2h-5zm-1 0h-5v2h5v-2zm0 3h-4v5h4v-5zm1 0v5h4v-5h-4z"})),a.createElement("use",{transform:"translate(3 3)",xlinkHref:"#gift"}));t.a=Object(i.a)(o)},function(e,t,n){e.exports=n.p+"static/media/private-window-tor.c168145d.svg"},function(e,t,n){e.exports=n.p+"static/media/private-window.dbdc336c.svg"},function(e,t,n){e.exports=n.p+"static/media/tip_site.72253a00.jpg"},function(e,t,n){e.exports=n.p+"static/media/captchaDrop.d1038f44.png"},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";t.a={about:"about",accept:"Accept",activityCopy:"©2016 –2018 Brave Software. Brave is a registered trademark of Brave Software. Site names may be trademarks or registered trademarks of the site owner.",activityNote:"To protect your privacy, this Brave Rewards statement is not saved, recorded or logged anywhere other than on your device (this computer). It cannot be retrieved from Brave in the event of data loss on your device.",addFunds:"add funds",addFundsFAQ:"the FAQ",addFundsNote:"Reminder: The Brave Wallet is unidirectional and BAT flows to publisher sites. For more information about Brave Payments, please visit",addFundsQR:"Show QR Code",addFundsText:"Be sure to use the address below that matches the type of cryto you own. It will be converted automatically to BAT by Uphold and appear as an increased balance in your Brave Rewards wallet. Please allow up to one hour for your wallet balance to update.",addFundsTitle:"Send cryptocurrency from your external account to your Brave Rewards wallet.",allowTip:"Allow tips on",amount:"Amount",backup:"Backup",braveAdsDesc:"No action required. Just collect tokens. Your data is safe with our Shields.",braveAdsTitle:"Brave Ads",braveContributeDesc:"Set budget and browse normally. Your favorite sites get paid automatically.",braveContributeTitle:"Auto-Contribute",braveRewards:"Brave Rewards",braveRewardsDesc:"Earn tokens for viewing privacy-respecting ads, and pay it forward by supporting content creators you love!",braveRewardsOptInText:"Yes, I'm In!",braveRewardsSubTitle:"Get Rewarded for Browsing!",braveRewardsTeaser:"How it works...",braveRewardsTitle:"Brave Rewards",braveVerified:"Brave Verified Publishers",cancel:"Cancel",claim:"Claim",closeBalance:"Closing Balance",contribute:"Contribute",contributeAllocation:"Auto-Contribute Allocation",contributeTooltip:"Auto-Contribute Settings",copy:"Copy",currentDonation:"You’re currently donating {{currentDonation}} BAT to this site every month.",braveRewardsCreatingText:"Creating wallet",date:"Date",deposit:"Deposit",deposits:"Deposits",description:"Description",dndCaptchaText1:"Drag and drop the token logo onto the",dndCaptchaText2:"target",donation:"Donation",donationAmount:"Donation amount",donateMonthly:"Tip this site Monthly",donateNow:"Send a tip…",donationFailureMsg:"Looks like something went wrong. Please try again later.",donationSent:"Donation Sent!",donationTips:"Donation & Tips",done:"Done",doMonthly:"Set recurring donation",downloadPDF:"Download as PDF",earningsAds:"Earnings from Ads",enableTips:"Enable Tips",excludeSite:"Exclude this site",excludedSitesText:"Sites excluded from Auto-Contributions:",expiresOn:"expires on",for:"for",grants:"Grants",grantDisclaimer:"Unused tokens by the expiration date will be automatically returned to the Brave User Growth Pool.",grantExpire:"Grant Expiration Date",import:"import",includeInAuto:"Include in Auto-Contribute",learnMore:"Learn More",makeMonthly:"Make this monthly",manageWallet:"Manage Your Wallet",monthApr:"Apr",monthAug:"August",monthDec:"December",monthFeb:"February",monthJan:"January",monthJul:"July",monthJun:"June",monthMar:"March",monthMay:"May",monthNov:"November",monthOct:"October",monthSep:"September",monthlyTips:"Monthly Tips!",newGrant:"A free token grant is available.",newTokenGrant:"New Token Grant",noActivity:"No activities yet…",noGrants:"Currently no token grant is available.",notEnoughTokens:"Not enough tokens. Please",noThankYou:"No, thank you",off:"off",ok:"ok",on:"on",oneTime:"One time",oneTimeDonation:"One-time Tips",openBalance:"Opening Balance",payment:"Payment",paymentMonthly:"Payment made every {{day}}th day in each month.",paymentNotMade:"Payment not made.",paymentWarning:"When your balance is not enough to cover the combined total of Auto-Contribute and the recurring donations, these payments are skipped for the period.",pinnedSitesHeader:"Pinned sites are now",pinnedSitesMsg:"Here's how monthly tips work:",pinnedSitesOne:"Monthly tips do not come out of your Auto-Contribute payment. They're separate.",pinnedSitesTwo:"Each site is paid a fixed amount monthly.",pinnedSitesThree:"Monthly tips are paid out all at once, each month. If you're using Auto-Contribute, tips go out at the same time as your monthly Auto-Contribute payment.",pinnedSitesFour:"You can remove any site receiving monthly tips from inside of the Tips panel.",pleaseNote:"Please note:",print:"Print",readyToTakePart:"Ready to get started?",readyToTakePartOptInText:"Yes I'm Ready!",readyToTakePartStart:"You can start with the",recoveryKeys:"Recovery Key",recurring:"Recurring",recurringDonation:"Recurring Donation",recurringDonations:"Monthly Tips",remove:"remove",restore:"Restore",restoreAll:"Restore All",reviewSitesMsg:"Your pinned sites have been moved to",rewardsBackupText1:"Backup your Wallet",rewardsBackupText2:"Keep this recovery key safe.",rewardsBackupText3:"You can always use this key to get your wallet back if something happens to your browser or computer. But make sure to protect it — anyone who gets this key could steal your wallet. It's probably safest to write it down on a piece of paper, or wherever else you keep important info.",rewardsBannerText1:"Thanks for stopping by. We joined Brave’s vision of protecting your privacy because we believe that fans like you would support us in our effort to keep the web a clean and safe place to be.",rewardsBannerText2:"Your donation is much appreciated and it encourages us to continue to improve our content.",rewardsContribute:"Auto-Contribute",rewardsContributeAttention:"Attention",rewardsContributeAttentionScore:"Attention",rewardsContributeText1:"You’re currently supporting",rewardsOffText1:"Do you know that you’ve been paying for the web content with your data for the digital ads? You didn’t have a voice in it and worse, you’re exposed to privacy and security risks.",rewardsOffText2:"Brave Rewards allows you to take control back.",rewardsOffText3:"How does it work?",rewardsOffText4:"Your attention is valuable. Get paid for the ads. And pay directly the favorite content creators at your will. That way, they can grow and continue delivering the content that delights you.",rewardsPanelEmptyText1:"Sadly, no tokens yet.",rewardsPanelEmptyText2:"3 ways to fill your wallet:",rewardsPanelEmptyText3:"You can add funds.",rewardsPanelEmptyText4:"You can earn tokens from Brave Ads.",rewardsPanelEmptyText5:"Occasionally, you will also received token grants from Brave. So keep an eye out for the alert!",rewardsPanelOffText1:"Get Rewarded for Browsing!",rewardsPanelOffText2:"Earn tokens for your attention to ads and pay it forward to support content creators you value!",rewardsPanelText1:"Add, withdraw and manage funds at",rewardsPanelText2:"Brave wallet is managed by",rewardsPanelText3:"Brave Rewards is built on the Basic Attention Token. Learn more about BAT",rewardsPanelText4:"here",rewardsRestoreText1:"Restore your Wallet",rewardsRestoreText2:"Use your recovery key to restore your wallet.",rewardsRestoreText3:"Restoring with a recovery key will replace your current wallet. So make sure you empty or back up your current wallet before restoring.",rewardsRestoreText4:"Enter your recovery key or",rewardsSummary:"Rewards Summary",rewardsWhy:"Why Brave Rewards…",saveAsFile:"Save",seeAllItems:"See all {{numItems}} items",seeAllSites:"See all {{numSites}} sites",sendDonation:"Send my donation",sendTip:"Send my Tip",settings:"Settings",site:"site",sites:"sites",thankYou:"Thank You!",tipOnLike:"Tip on like",titleBAT:"Basic Attention token (BAT)",titleBTC:"BitCoin (BTC)",titleETH:"Etherium (ETH)",titleLTC:"Lite Coin (LTC)",tokenGrant:"Token Grants",tokens:"tokens",total:"Total",transactions:"Transactions",turnOnRewardsDesc:"This enables both Brave Ads and Auto-Contribute. You can always opt out each any time.",turnOnRewardsTitle:"Turn on Rewards",type:"Type",uhOh:"Uh oh…",verifiedPublisher:"Brave Verified Publisher",viewDetails:"View Details",viewMonthly:"View Monthly Statement for Details",walletActivity:"Wallet Activity",walletAddress:"Wallet Address",walletBalance:"wallet balance",walletFailedButton:"Re-try",walletFailedTitle:"Wallet creation failed",walletFailedText:"Please check your internet connection.",welcome:"Welcome!",welcomeButtonTextOne:"Start Earning Now!",welcomeButtonTextTwo:"Join Rewards",welcomeDescOne:"You can now earn tokens for watching privacy focused Brave Ads. Your contribution stays the same.",welcomeDescTwo:"Earn tokens for watching Ads and pay it forward to your favorite content creators.",welcomeFooterTextOne:"Check out what’s improved",welcomeFooterTextTwo:"Learn More",welcomeHeaderOne:"Brave Payments is now Brave Rewards with many upgrades.",welcomeHeaderTwo:"You are about to start a very Brave way to browse the web.",whyBraveRewards:"Why Brave Rewards?",whyBraveRewardsDesc1:"With conventional browsers, you pay to browse the web by viewing ads with your valuable attention, spending your valuable time downloading invasive ad technology, that transmits your valuable private data to advertisers — without your consent.",whyBraveRewardsDesc2:"Well, you've come to the right place. Brave welcomes you to the new internet. One where your time is valued, your personal data is kept private, and you actually get paid for your attention.",yourWallet:"Your wallet"}},,,function(e,t,n){e.exports=n.p+"static/media/bat.c9255cc2.png"},function(e,t,n){e.exports=n.p+"static/media/panel.6dd79d47.svg"},function(e,t,n){e.exports=n.p+"static/media/love.68341a46.svg"},function(e,t,n){e.exports=n.p+"static/media/gift.57a2cc7d.svg"},function(e,t,n){e.exports=n.p+"static/media/centerTextBackground.1bb9aa85.svg"},function(e,t,n){e.exports=n.p+"static/media/bg_bats.2e7994ea.svg"},function(e,t,n){e.exports=n.p+"static/media/bg_hearts.4364e454.svg"},function(e,t,n){e.exports=n.p+"static/media/batOutline.59c5f41d.svg"},function(e,t,n){e.exports=n.p+"static/media/panel.6dd79d47.svg"},function(e,t,n){e.exports=n.p+"static/media/carat.db717d55.svg"},function(e,t,n){e.exports=n.p+"static/media/sync_mobile_device.8325aa2b.png"},function(e,t,n){e.exports=n.p+"static/media/sync_mobile.e52cb330.svg"},function(e,t,n){e.exports=n.p+"static/media/sync_desktop.57472828.svg"},function(e,t,n){e.exports=n.p+"static/media/sync_icon.1b85522b.svg"},function(e,t,n){"use strict";var a=n(0),i=n(2),o=n(1);var l={pushButton:{default:{bg:"#fff",color:"#5a5a5a",hoverColor:"#000"},primary:{gradient1:"#ff7a1d",gradient2:"#ff5000",color:"#fff",borderColor:"transparent",hoverColor:"#fff",borderHoverColor:"#fff"},secondary:{gradient1:"#fff",gradient2:"#ececec",color:"#666",borderColor:"#fff",hoverColor:"rgb(68, 68, 72)",borderHoverColor:"rgb(153, 153, 157)"}},switchButton:{checkedBg:"#ff6000",uncheckedBg:"#ccc",knob:"#fff"}};const r=o.default.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  font-family: inherit;
  color: inherit;

  ${e=>e.disabled&&o.css`
    opacity: 0.3;
    user-select: none;`}
`,c=o.default.label`
  box-sizing: border-box;
  font-size: ${e=>Object(i.e)(e.size,"inherit","inherit","24px")};
  margin-left: ${e=>Object(i.e)(e.size,"10px","10px","18px")};
  margin-right: ${e=>Object(i.e)(e.size,"10px","10px","18px")};
  font-weight: 400;
  font-family: inherit;
  color: ${e=>Object(i.d)(e.customStyle,"labelColor")||"inherit"};
  user-select: ${e=>Object(i.d)(e.customStyle,"userSelect")||"none"};
`,s=o.default.input`
  box-sizing: border-box;
  appearance: none;
  position: relative;
  min-width: ${e=>Object(i.e)(e.size,"48px","40px","60px")};
  height: ${e=>Object(i.e)(e.size,"16px","14px","26px")};
  border-radius: ${e=>Object(i.e)(e.size,"16px","14px","26px")};
  border: 2px solid ${l.switchButton.uncheckedBg};
  padding: 0 2px;
  background-color: white;
  outline: none;
  transition: linear 0.2s;
  box-shadow:
    inset
    -${e=>Object(i.e)(e.size,"31px","25px","33px")} 0px 0px 0px
    ${l.switchButton.uncheckedBg};

  &:checked {
    border: 2px solid ${l.switchButton.checkedBg};
    box-shadow:
      inset
      ${e=>Object(i.e)(e.size,"31px","25px","33px")} 0px 0px 0px
      ${l.switchButton.checkedBg};
  }
`;t.a=class extends a.PureComponent{constructor(e){super(e),this.state={checked:e.checked},this.handleChange=this.handleChange.bind(this)}componentWillReceiveProps(e){"checked"in e&&this.setState({checked:e.checked})}handleChange(e){const{props:t}=this;t.disabled||("checked"in t||this.setState({checked:e.target.checked}),t.onChange({target:{checked:e.target.checked,id:e.target.id}}))}getLabel(e){return a.createElement(c,{id:`${this.props.id+Object(i.a)(e)}Text`,htmlFor:this.props.id,size:this.props.size,customStyle:this.props.customStyle},"left"===e?this.props.leftText:this.props.rightText)}render(){const{id:e,readOnly:t,disabled:n,autoFocus:i,size:o="medium",rightText:l,leftText:c}=this.props,{checked:d}=this.state;return a.createElement(r,{disabled:n},c&&this.getLabel("left"),a.createElement(s,{type:"checkbox",id:e,checked:!!d,readOnly:t,disabled:n,autoFocus:i,size:o,onChange:this.handleChange}),l&&this.getLabel("right"))}}},function(e,t,n){"use strict";var a=n(0),i=n(1),o=n(2);var l={pushButton:{default:{bg:"#FFF",color:"#5A5A5A",hoverColor:"#000"},primary:{background:"#FB542B",color:"#FFF",borderColor:"#FB542B",hoverColor:"#FFF",borderHoverColor:"#FFF"},secondary:{background:"transparent",color:"#76777A",borderColor:"#76777A",hoverColor:"#FB542B",borderHoverColor:"#FB542B"}},switchButton:{checkedBg:"#ff6000",uncheckedBg:"#ccc",knob:"#FFF"}};const r=i.default.button`
  font-size: ${e=>Object(o.e)(e.size,"13px",void 0,"16px")};
  min-width: ${e=>Object(o.e)(e.size,"112px",void 0,"190px")};
  min-height: ${e=>Object(o.e)(e.size,"40px",void 0,"52px")};
  border-radius: ${e=>Object(o.e)(e.size,"20px",void 0,"32px")};
  text-transform: ${e=>Object(o.d)(e.customStyle,"textTransform")};
  line-height: ${e=>Object(o.e)(e.size,"26px",void 0,"42px")};
  font-weight: ${e=>Object(o.d)(e.customStyle,"fontWeight")};
  text-decoration: none;
  font-family: inherit;
  position: relative;
  display: inline-block;
  text-align: center;
  box-shadow: none;
  box-sizing: border-box;
  outline: none;
  border: none;
  background-position: center center;
  background-repeat: no-repeat;
  background-image: none;
  width: auto;
  white-space: nowrap;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-right: 16px;
  padding-left: 16px;
  margin-top: 0;
  margin-right: 0;
  margin-bottom: 0;
  margin-left: 0;
  -webkit-app-region: no-drag;
  cursor: pointer;
  user-select: none;
  transition: .1s opacity, .1s background;
  letter-spacing: 1px;

  &:active {
    bottom: -1px;
  }

  ${e=>e.disabled?i.css`
    pointer-events: none;
    animation: none;
    opacity: 0.25;
    `:""}

  ${e=>"default"===e.color?i.css`
      color: ${l.pushButton.default.color};
      stroke: ${l.pushButton.default.color};
      background-color: ${l.pushButton.default.bg};

      &:hover {
        color: ${l.pushButton.default.hoverColor};
      }
    `:""}

  ${e=>"primary"===e.color?i.css`
      background: ${l.pushButton.primary.background};
      color: ${l.pushButton.primary.color};
      stroke: ${l.pushButton.primary.color};

      &:hover {
        opacity: 0.9;
      }
    `:""}

  ${e=>"secondary"===e.color?i.css`
      background: ${l.pushButton.secondary.background};
      border: 2px solid ${l.pushButton.secondary.borderColor};
      color: ${l.pushButton.secondary.color};
      stroke: ${l.pushButton.secondary.color};

      &:hover {
        border: 2px solid ${l.pushButton.secondary.borderHoverColor};
        color: ${l.pushButton.secondary.hoverColor};
        stroke: ${l.pushButton.secondary.hoverColor};
      }
    `:""}
`,c=r.withComponent("a");n.d(t,"a",function(){return s});class s extends a.PureComponent{render(){const{id:e,color:t,size:n,customStyle:i,href:o,target:l,disabled:r,children:s}=this.props;return a.createElement(c,{id:e,color:t||"default",size:n||"medium",customStyle:i,href:o,target:l,disabled:r||!1,rel:"noreferrer noopener"},s)}}},function(e,t,n){"use strict";var a=n(0),i=n(1),o=n(2);const l=i.default.select`
  box-sizing: border-box;
  position: relative;
  border-radius: 4px;
  box-shadow: 0px 2px 8px -4px rgba(0, 0, 0, 1);
  display: block;
  color: rgb(68, 68, 68);
  font-size: 13px;
  font-family: inherit;
  border: solid 1px rgba(0, 0, 0, 0.2);
  outline: none;
  padding: 6px 12px 6px 6px;
  width: 100%;
  background-color: #fbfbfb;
  background-size: 12px 12px;
  appearance: none;
  min-height: 32px;
  margin-bottom: 12px;

  ${e=>e.disabled?i.css`
      user-select: none;
      opacity: 0.25;
    `:""}

  ${e=>e.multiple?i.css`
      padding: 6px;
    `:""}
`,r=i.default.div`
  position: relative;

  &::after {
    display: ${e=>e.multiple?"none":"flex"};
    opacity: ${e=>e.disabled?"0.25":"1"};
    content: "▼";
    position: absolute;
    top: 0;
    right: 0;
    align-items: center;
    max-height: 100%;
    height: 100%;
    padding: 0 8px;
    font-size: 13px;
  }
`,c=i.default.p`
  margin: 0 0 4px 2px;
  user-select: ${e=>Object(o.d)(e.customStyle,"userSelect")};
`;t.a=class extends a.PureComponent{render(){const{titleName:e,id:t,multiple:n=!1,autoFocus:i=!1,disabled:o=!1,value:s,onChange:d,children:p}=this.props;return a.createElement("div",null,a.createElement(c,null,e),a.createElement(r,{multiple:n,disabled:o},a.createElement(l,{id:t,multiple:n,autoFocus:i,disabled:o,value:s,onChange:d},p)))}}},function(e,t,n){"use strict";var a=n(0),i=n(1),o=n(2);var l=i.default.p`
  font-weight: ${e=>Object(o.d)(e.customStyle,"fontWeight")||"normal"};
  padding: ${e=>Object(o.d)(e.customStyle,"padding")||"0"};
  font-size: ${e=>Object(o.d)(e.customStyle,"fontSize")||"13px"};
  color: ${e=>Object(o.d)(e.customStyle,"color")||"inherit"};
  line-height: ${e=>Object(o.d)(e.customStyle,"lineHeight")};
  cursor: ${e=>Object(o.d)(e.customStyle,"cursor")};
  user-select: none;
  font-family: inherit;
  box-sizing: border-box;
  background: none;
  margin: 0;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;t.a=class extends a.PureComponent{render(){const{id:e,onClick:t,customStyle:n,text:i}=this.props;return a.createElement(l,{id:e,onClick:t,customStyle:n},i&&i.toString())}}},function(e,t,n){"use strict";var a=n(0),i=n(302),o=n(1);const l=o.default.div`
  box-sizing: border-box;
  width: fill-available;
  color: inherit;
  font-size: inherit;
  font-family: inherit;
`,r=o.default.div`
  box-sizing: border-box;
  position: relative;
  color: inherit;
  font-size: inherit;
  font-family: inherit;
  user-select: none;

  &::after {
    content: ${e=>e.open?'"▼"':'"▶"'};
    font-size: 12px;
    display: flex;
    align-items: center;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`,c=o.default.div`
  box-sizing: border-box;
  color: inherit;
  font-size: inherit;
  font-family: inherit;
  margin-left: 15px;
`,s=o.default.div`
  box-sizing: border-box;
  color: inherit;
  font-size: inherit;
  font-family: inherit;
  overflow: ${e=>e.open?"auto":"hidden"};
  height: ${e=>e.open?"fit-content":"0"};
  width: fill-available;
`;t.a=class extends a.PureComponent{constructor(e){super(e),this.state={open:void 0!==e.open?e.open:e.defaultOpen},this.handleClick=this.handleClick.bind(this)}componentWillReceiveProps(e){"open"in e&&this.setState({open:e.open})}handleClick(e){this.setState(e=>({open:!e.open})),this.props.onClick({target:{open:this.state.open,id:e.target.id}})}render(){const{id:e,summary:t,withSeparator:n,children:o}=this.props,{open:d}=this.state;return a.createElement(l,{id:e,open:d,withSeparator:n},a.createElement(r,{id:`${e}Control`,open:d,onClick:this.handleClick},a.createElement(c,null,t)),n&&a.createElement(i.a,null),a.createElement(s,{open:d,withSeparator:n},o),d&&n&&a.createElement(i.a,null))}}},function(e,t,n){"use strict";var a=n(0),i=n(1),o=n(2);var l=i.default.button`
  font-size: ${e=>Object(o.d)(e.customStyle,"fontSize")||"inherit"};
  color: ${e=>Object(o.d)(e.customStyle,"color")||"inherit"};
  user-select: ${e=>Object(o.d)(e.customStyle,"userSelect")};
  text-decoration: ${e=>Object(o.d)(e.customStyle,"textDecoration")};
  padding: ${e=>Object(o.d)(e.customStyle,"padding")||"0"};
  margin: 0;
  font-family: inherit;
  box-sizing: border-box;
  display: block;
  line-height: 1;
  background: none;
  border: none;
  cursor: pointer;
  outline: inherit;

  &:hover {
    color: ${e=>Object(o.d)(e.customStyle,"hoverColor")};
  }
`;t.a=class extends a.PureComponent{render(){const{id:e,onClick:t,customStyle:n,text:i}=this.props;return a.createElement(l,{id:e,customStyle:n,onClick:t},i?i.toString():null)}}},function(e,t,n){"use strict";var a=n(0),i=n(10),o=n(1);const l=Object(o.default)("div").withConfig({displayName:"StyledWrapper"})`
  text-align: center;
  width: 100%;
  padding: 20px 10px;
  font-family: Poppins, sans-serif;
  min-height: 350px;
`,r=Object(o.default)("div").withConfig({displayName:"StyledText"})`
  font-family: Muli, sans-serif;
  font-size: 14px;
  line-height: 1.29;
  color: #838391;
  margin: 44px 0 32px;
`,c=Object(o.default)("div").withConfig({displayName:"StyledButton"})`
  display: block;
  margin: 0 auto;
`;n.d(t,"a",function(){return s});class s extends a.PureComponent{render(){const{id:e,text:t,buttonText:n,onButtonClick:o}=this.props;return a.createElement(l,{id:e},a.createElement(r,null,t),a.createElement(c,null,a.createElement(i.a,{text:n,size:"call-to-action",type:"accent",onClick:o})))}}},function(e,t,n){"use strict";var a=n(0),i=n(2),o=n(1);const l=Object(o.default)("div").withConfig({displayName:"StyledExcludedText"})`
  color: #4B4C5C;
  font-size: 14px;
  font-weight: 300;
  text-align: left;
  letter-spacing: 0;
  margin-top: -20px;
  margin-bottom: 33px;
`,r=Object(o.default)("a").withConfig({displayName:"StyledRestore"})`
  color: #696fdc;
  display: inline-block;
  font-size: 13px;
  font-weight: normal;
  letter-spacing: 0;
  cursor: pointer;
  margin-left: 8px;
`;n.d(t,"a",function(){return c});class c extends a.PureComponent{getRestoreText(){return`(${Object(i.b)("restoreAll")})`}getExclusionText(e){return`${Object(i.b)("excludedSitesText")} ${e}`}render(){const{numExcludedSites:e,onRestore:t}=this.props;return a.createElement(l,null,this.getExclusionText(e),a.createElement(r,{onClick:t},this.getRestoreText()))}}},function(e,t,n){"use strict";var a=n(0),i=(n(740),n(1)),o=n(2);const l=i.default.div`
  font-family: ${e=>Object(o.d)(e.customStyle,"fontFamily")||"inherit"};
  color: ${e=>Object(o.d)(e.customStyle,"color")||"inherit"};
  padding: ${e=>Object(o.d)(e.customStyle,"padding")||"40px"};
  background: ${e=>Object(o.d)(e.customStyle,"background")||"inherit"};
  align-items: ${e=>Object(o.d)(e.customStyle,"alignItems")};
  justify-content: ${e=>Object(o.d)(e.customStyle,"justifyContent")};
  height: ${e=>Object(o.d)(e.customStyle,"height")||"initial"};
  background-size: ${e=>Object(o.d)(e.customStyle,"backgroundSize")||"auto"};
  box-sizing: border-box;
  background-attachment: fixed;
  font-size: inherit;
  display: flex;
  flex-direction: column;
  min-height: 100%;
`,r=i.default.main`
  box-sizing: border-box;
  font-size: inherit;
  font-family: inherit;
  color: inherit;
`;var c=n(199);t.a=class extends a.PureComponent{render(){const{id:e,title:t,label:n,customStyle:i,children:o}=this.props;return a.createElement(l,{id:e,title:t,label:n,customStyle:i},t?a.createElement(c.d,{text:t,label:n}):null,a.createElement(r,null,o))}}},function(e,t,n){"use strict";var a=n(0),i=n(1),o=n(2);var l=i.default.a`
  color: ${e=>Object(o.d)(e.customStyle,"color")||"inherit"};
  text-decoration: ${e=>Object(o.d)(e.customStyle,"textDecoration")||"none"};
  font-size: ${e=>Object(o.d)(e.customStyle,"fontSize")||"13px"};
  user-select: ${e=>Object(o.d)(e.customStyle,"userSelect")};
  font-family: inherit;
  box-sizing: border-box;
`;t.a=class extends a.PureComponent{render(){const{id:e,href:t,target:n,customStyle:i,text:o}=this.props;return a.createElement(l,{id:e,href:t,target:n,customStyle:i,rel:"noreferrer noopener"},o&&o.toString())}}},function(e,t,n){"use strict";var a=n(0),i=n(1),o=n(2);var l=i.default.p`
  box-sizing: border-box;
  font-family: ${e=>Object(o.d)(e.customStyle,"fontFamily")||"inherit"};
  font-size: ${e=>Object(o.d)(e.customStyle,"fontSize")||"13px"};
  color: ${e=>Object(o.d)(e.customStyle,"color")||"inherit"};
  font-weight: ${e=>Object(o.d)(e.customStyle,"fontWeight")||"normal"};
  font-style: ${e=>Object(o.d)(e.customStyle,"fontStyle")||"inherit"};
  margin: ${e=>Object(o.d)(e.customStyle,"margin")||"0 0 20px"};
  line-height: ${e=>Object(o.d)(e.customStyle,"lineHeight")||"1.4"};
  text-align: ${e=>Object(o.d)(e.customStyle,"textAlign")};
  padding: 0;
  -webkit-font-smoothing: antialiased;
  background: transparent;
`;t.a=class extends a.PureComponent{render(){const{id:e,customStyle:t,text:n}=this.props;return a.createElement(l,{id:e,customStyle:t},n&&n.toString())}}},function(e,t,n){"use strict";var a=n(0),i=n(1);const o=Object(i.default)("div").withConfig({displayName:"StyledWrapper"})`
  padding-top: 32px;
  text-align: center;
  font-family: Poppins, sans-serif;
`,l=Object(i.default)("div").withConfig({displayName:"StyledTitle"})`
  font-size: 22px;
  font-weight: 300;
  line-height: 1.05;
  color: #999ea2;
  margin-top: 32px;
`,r=Object(i.default)("div").withConfig({displayName:"StyledContent"})`
  font-family: Muli, sans-serif;
  font-size: 14px;
  line-height: 1.57;
  color: #999ea2;
  margin: 36px auto 31px;
  text-align: left;
  max-width: 250px;
  width: 100%;

  b {
    font-weight: 600;
    color: #686978;
  }
`;var c=n(2),s=a.createElement("svg",{width:"119",height:"85",viewBox:"0 0 119 85",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},a.createElement("defs",null,a.createElement("polygon",{id:"path-1",points:"0.105652174 0.182102628 0.105652174 82.4964518 80.2991739 82.4964518 80.2991739 0.182102628"})),a.createElement("g",{id:"settings",fill:"none",fillRule:"evenodd",opacity:"0.142"},a.createElement("g",{id:"5-wallet-final",transform:"translate(-386 -469)"},a.createElement("g",{id:"wallet",transform:"translate(260 209)"},a.createElement("g",{id:"blankslate-content",transform:"translate(54 261)"},a.createElement("g",{id:"icn-blankslate-statement",transform:"translate(72)"},a.createElement("path",{d:"M69.0767206,38.5123161 C68.9586949,36.552234 66.6197702,35.0180073 61.9304063,33.8479802 C62.0887335,33.5052885 62.1779724,33.1468243 62.1779724,32.7768892 L62.1779724,24.7515932 L62.1621397,24.7515932 C61.7447316,18.0640854 34.2461746,17.8676471 31.0925846,17.8676471 C27.9317978,17.8676471 0.433240809,18.0640854 0.0172720588,24.7515932 L0,24.7515932 L0,32.7768892 C0.00575735294,34.9563515 2.82829963,36.6640748 7.0282886,37.9359057 C6.97215441,38.1266087 6.93761029,38.3173116 6.92609559,38.5123161 L6.91026287,38.5123161 L6.91026287,46.5275752 C2.38354412,47.6933007 0.123783088,49.2045857 0.0115147059,51.1316891 L0,51.1316891 L0,59.1641545 C0.00575735294,60.6811749 1.37744669,61.9644766 3.62713235,63.0398692 C3.5422114,63.2692863 3.48607721,63.5101742 3.46880515,63.7510621 L3.45153309,63.7510621 L3.45153309,71.7835275 C3.46304779,75.5975863 12.0875625,77.9663176 21.6692371,79.0703873 C21.736886,79.0861597 21.8030956,79.1148369 21.8765018,79.1148369 C21.8995312,79.1148369 21.9168033,79.103366 21.9383934,79.0976306 C23.787943,79.3055398 25.6662794,79.4675656 27.5215864,79.5851419 C27.5604485,79.5908773 27.5949926,79.6080836 27.6338548,79.6080836 C27.6568842,79.6080836 27.6741563,79.5966127 27.6957463,79.5966127 C30.051943,79.7356968 32.3735956,79.8088235 34.5441176,79.8088235 C36.7146397,79.8088235 39.0362923,79.7356968 41.392489,79.5966127 C41.414079,79.5966127 41.4313511,79.6080836 41.4543805,79.6080836 C41.4932426,79.6080836 41.5277868,79.5851419 41.5666489,79.5851419 C43.4219559,79.4675656 45.3002923,79.3055398 47.1498419,79.0976306 C47.171432,79.0976306 47.188704,79.1091014 47.2117335,79.1091014 C47.2851397,79.1091014 47.3513493,79.0804243 47.4189982,79.0703873 C57.0006728,77.9605822 65.6251875,75.5918509 65.6367022,71.777792 L65.6367022,63.7510621 L65.6136728,63.7510621 C65.5345092,62.3458825 64.3312224,61.1686862 61.9534357,60.189362 C62.1002482,59.8581411 62.1779724,59.5168832 62.1779724,59.158419 L62.1779724,51.6579145 C66.3103125,50.3932529 69.0824779,48.701302 69.0882353,46.539046 L69.0882353,38.5123161 L69.0767206,38.5123161 Z M59.7498088,59.5340895 L59.3611875,59.8753474 C58.7537868,60.4073082 57.7476893,60.9392691 56.4206195,61.4540236 L56.4206195,55.9881618 C57.7923088,55.5121214 58.9567335,54.985896 59.8793493,54.4080517 L59.8793493,59.158419 C59.8793493,59.2759953 59.8332904,59.399307 59.7498088,59.5340895 Z M33.9986085,64.8594334 C33.8302059,64.8651688 33.6618033,64.8651688 33.4934007,64.8709042 C33.08175,64.8823751 32.6600239,64.8823751 32.2440551,64.8881105 L32.2440551,59.158419 C32.5592702,59.1526836 32.8744853,59.1469482 33.1940184,59.1412128 L33.375375,59.1354773 C34.5326029,59.1197049 35.6970276,59.0795569 36.8499375,59.0293719 L36.8499375,64.753328 C36.6023713,64.7705342 36.3548051,64.7820051 36.107239,64.793476 C35.4105993,64.8207192 34.7125202,64.8436609 33.9986085,64.8594334 Z M28.9724393,64.8766396 C28.4442022,64.8651688 27.9159651,64.8551318 27.3978033,64.8379255 L27.200614,64.8321901 C26.5773805,64.8092484 25.9527077,64.7877405 25.3352316,64.753328 L25.3352316,59.0293719 C26.4867022,59.0852923 27.6453695,59.1197049 28.8040368,59.1412128 C28.8659283,59.1412128 28.9278199,59.1412128 28.9897114,59.1412128 C29.3034871,59.1469482 29.6187022,59.1526836 29.9396746,59.158419 L29.9396746,64.8881105 C29.7151379,64.8881105 29.4891618,64.8881105 29.2703824,64.8823751 C29.1696287,64.8823751 29.0674357,64.8766396 28.9724393,64.8766396 Z M8.16968382,62.261285 C8.13513971,62.2498141 8.09627757,62.2383433 8.06317279,62.2268724 L8.06317279,56.6878839 C9.13691912,56.9789568 10.2941471,57.2427865 11.5147059,57.4836744 L11.5147059,63.0785833 C10.4582316,62.8549017 9.48523897,62.6197492 8.59716728,62.3788612 C8.45611213,62.3401471 8.30929963,62.2999991 8.16968382,62.261285 Z M32.4412445,71.7605858 C32.7622169,71.7663212 33.0759926,71.7720566 33.3912077,71.777792 L33.3912077,77.5074835 C31.800739,77.4960126 30.2649651,77.4515631 28.7867647,77.3784364 L28.7867647,71.6487449 C29.9396746,71.7046653 31.0969026,71.737644 32.2613272,71.7605858 C32.3232187,71.7605858 32.3793529,71.7605858 32.4412445,71.7605858 Z M36.8269081,71.7605858 C37.9913327,71.737644 39.1485607,71.6989299 40.3014706,71.6487449 L40.3014706,77.372701 C38.8232702,77.4458277 37.2874963,77.4960126 35.6970276,77.5074835 L35.6970276,71.7720566 C36.0122426,71.7720566 36.3260184,71.7663212 36.6469908,71.7605858 C36.7088824,71.7605858 36.7650165,71.7605858 36.8269081,71.7605858 Z M46.0588235,71.2400958 L46.0588235,76.9353747 C44.9505331,77.0529509 43.7990625,77.1547547 42.6072904,77.2379184 L42.6072904,71.5139624 C43.7702757,71.4408357 44.9231857,71.3462012 46.0588235,71.2400958 Z M48.3646434,70.9934724 C49.5506581,70.847219 50.703568,70.6851932 51.8161765,70.5059611 L51.8161765,76.141018 C50.7309154,76.3302871 49.5780055,76.5052176 48.3646434,76.6672435 L48.3646434,70.9934724 Z M54.1219963,70.097312 C55.3411158,69.856424 56.4997831,69.5925944 57.5735294,69.3072569 L57.5735294,74.8462454 C56.5501599,75.1430538 55.3914926,75.4298251 54.1219963,75.6979563 L54.1219963,70.097312 Z M14.966239,70.097312 L14.966239,75.6979563 C13.6967426,75.4298251 12.5380754,75.1430538 11.5147059,74.8462454 L11.5147059,69.3072569 C12.5884522,69.5925944 13.7471195,69.8621595 14.966239,70.097312 Z M17.2720588,70.5059611 C18.3846673,70.6909286 19.5375772,70.8529545 20.7235919,70.9934724 L20.7235919,76.6672435 C19.5102298,76.5052176 18.3573199,76.3302871 17.2720588,76.141018 L17.2720588,70.5059611 Z M23.0294118,71.2400958 C24.1650496,71.3462012 25.3179596,71.4408357 26.4809449,71.5196978 L26.4809449,77.2379184 C25.2891728,77.1547547 24.1377022,77.0529509 23.0294118,76.9353747 L23.0294118,71.2400958 Z M20.1737647,64.3776575 C20.055739,64.3676205 19.9377132,64.3561497 19.8240055,64.3446788 C19.7405239,64.3332079 19.6556029,64.3274725 19.5778787,64.3174355 L19.5778787,58.6207228 C20.7077592,58.7325636 21.8606691,58.8214627 23.0294118,58.9003248 L23.0294118,64.6185454 C22.0621765,64.5468526 21.1064559,64.4679905 20.1737647,64.3776575 Z M17.2720588,58.3740994 L17.2720588,64.0478705 C16.0572574,63.8858446 14.9043474,63.712348 13.8205257,63.521645 L13.8205257,57.8865881 C14.9331342,58.0715556 16.0860441,58.2335815 17.2720588,58.3740994 Z M39.9186066,64.562625 C39.6667224,64.5798313 39.4076415,64.602773 39.1485607,64.6185454 L39.1485607,58.9003248 C40.3187426,58.8214627 41.4702132,58.7325636 42.6072904,58.6207228 L42.6072904,64.3174355 C41.8919393,64.3891284 41.1679522,64.462255 40.4194963,64.5239109 C40.2510937,64.5353817 40.0826912,64.552588 39.9186066,64.562625 Z M44.9059136,64.0478705 L44.9059136,58.3740994 C46.0919283,58.2335815 47.2448382,58.0715556 48.3646434,57.8865881 L48.3646434,63.521645 C47.2793824,63.712348 46.1264724,63.8915801 44.9059136,64.0478705 Z M50.6632665,57.477939 C51.8895827,57.2427865 53.0424926,56.9732214 54.1219963,56.6878839 L54.1219963,62.2268724 C53.0928695,62.5251146 51.9399596,62.8104521 50.6632665,63.0785833 L50.6632665,57.477939 Z M34.9212243,52.2414942 C34.0547426,52.2185525 33.2055331,52.1855738 32.3735956,52.1454258 C32.3289761,52.1396904 32.2843566,52.1396904 32.2382978,52.1396904 L32.2382978,46.4099989 C33.3969651,46.4659193 34.5556324,46.5003319 35.7128603,46.5218398 C35.7747518,46.5218398 35.8366434,46.5218398 35.8942169,46.5275752 C36.21375,46.5333106 36.5289651,46.5333106 36.8441801,46.539046 L36.8441801,52.2687375 C36.2871562,52.2630021 35.7186176,52.2572666 35.1745478,52.2472296 C35.0896268,52.2414942 35.0047059,52.2414942 34.9212243,52.2414942 Z M8.06317279,35.8467765 L8.06317279,30.307788 C9.13691912,30.5931255 10.2941471,30.8569551 11.5147059,31.097843 L11.5147059,36.6984874 C11.3736507,36.6640748 11.2282776,36.6368315 11.0872224,36.6081544 C10.4740643,36.4748057 9.87817831,36.3342878 9.30532169,36.182299 C8.87208088,36.0761936 8.45611213,35.9586173 8.06317279,35.8467765 Z M28.9897114,32.7611168 C29.3034871,32.7668522 29.6187022,32.7725877 29.9396746,32.7725877 L29.9396746,38.5022791 C28.388068,38.4850728 26.8465368,38.4463587 25.3352316,38.373232 L25.3352316,32.649276 C26.4867022,32.699461 27.6453695,32.7381751 28.8040368,32.7611168 C28.8659283,32.7611168 28.9278199,32.7611168 28.9897114,32.7611168 Z M33.375375,32.7553814 C34.5326029,32.7324397 35.6912702,32.699461 36.8499375,32.649276 L36.8499375,38.3674966 C36.6527482,38.3789674 36.4613162,38.3890044 36.2641268,38.4004753 C36.2540515,38.4004753 36.2367794,38.4004753 36.2195074,38.4062107 C35.443704,38.4406233 34.656386,38.4621311 33.8575533,38.4793374 C33.7352096,38.4850728 33.6114265,38.4850728 33.4876434,38.4908083 C33.0759926,38.4965437 32.6557059,38.5022791 32.2382978,38.5022791 L32.2382978,32.7725877 C32.5592702,32.7725877 32.8744853,32.7668522 33.1897004,32.7611168 L33.375375,32.7553814 Z M59.614511,33.3317918 L59.5814063,33.3260564 L59.1596801,33.6515418 C58.5522794,34.1218468 57.6181489,34.5978873 56.4206195,35.0624569 L56.4206195,29.6023305 C57.7923088,29.1305916 58.9567335,28.6043662 59.8793493,28.0279558 L59.8793493,32.7725877 C59.8793493,32.9460843 59.7829136,33.1353534 59.614511,33.3317918 Z M44.9059136,37.6563037 L44.9059136,31.988268 C46.0919283,31.8477501 47.2448382,31.6857243 48.3646434,31.5064922 L48.3646434,37.1300782 C47.2678676,37.3193473 46.1207151,37.4985794 44.9059136,37.6563037 Z M50.6632665,36.6870165 L50.6632665,31.097843 C51.8895827,30.8569551 53.0424926,30.5931255 54.1219963,30.307788 L54.1219963,35.8353056 C53.0871121,36.132114 51.9226875,36.4174515 50.6632665,36.6870165 Z M42.6072904,32.239193 L42.6072904,37.9301703 C41.4932426,38.0420111 40.3403327,38.1495504 39.1485607,38.2327141 L39.1485607,32.5202289 C40.3187426,32.4413668 41.4702132,32.3467322 42.6072904,32.239193 Z M19.5778787,37.9301703 L19.5778787,32.239193 C20.7077592,32.3467322 21.8606691,32.4413668 23.0294118,32.5202289 L23.0294118,38.2269786 C21.8606691,38.1438149 20.7020018,38.0477465 19.5778787,37.9301703 Z M17.2720588,31.988268 L17.2720588,37.6563037 C17.0417647,37.6276265 16.8057132,37.6061187 16.5811765,37.5717061 C16.434364,37.5544998 16.2933088,37.532992 16.1479357,37.5100503 C15.4844007,37.4154157 14.8323805,37.3136119 14.196193,37.2075065 C14.0666526,37.1859987 13.9443088,37.1630569 13.8205257,37.1401152 L13.8205257,31.5064922 C14.9331342,31.6857243 16.0860441,31.8477501 17.2720588,31.988268 Z M29.6532463,51.9834 C29.4949191,51.9661937 29.3437886,51.9547229 29.1854614,51.9446859 C28.4499596,51.8887655 27.7302904,51.8271096 27.026454,51.7539829 C26.8753235,51.7425121 26.7227537,51.7253058 26.5773805,51.7095334 C26.5428364,51.7095334 26.515489,51.703798 26.4809449,51.6980625 L26.4809449,46.0013498 C27.6180221,46.1131906 28.7694926,46.2035236 29.9396746,46.2809518 L29.9396746,52.0006063 C29.843239,51.9948709 29.7482426,51.9891354 29.6532463,51.9834 Z M22.0449044,51.1259537 C21.5900735,51.0542609 21.1625901,50.9753987 20.7235919,50.8965366 L20.7235919,45.2729506 C21.8433971,45.4521826 22.996307,45.6156423 24.1823217,45.7547264 L24.1823217,51.4284975 C23.4741673,51.3395983 22.7876029,51.2377945 22.124068,51.1374245 C22.0967206,51.1316891 22.0736912,51.1259537 22.0449044,51.1259537 Z M18.4249688,44.8643014 L18.4249688,50.4549087 C17.1482757,50.1796083 15.9953658,49.8885353 14.966239,49.591727 L14.966239,44.0685109 C16.0457426,44.3610177 17.1986526,44.6234135 18.4249688,44.8643014 Z M12.6676158,43.3687888 L12.6676158,48.8188782 C10.8569283,48.1248916 9.68674632,47.4122648 9.31107904,46.779934 L9.23191544,46.6508869 C9.22615809,46.6121727 9.21464338,46.5777602 9.20888603,46.539046 L9.20888603,41.7901126 C10.1315018,42.366523 11.2959265,42.8927484 12.6676158,43.3687888 Z M40.2841985,46.5218398 C41.4428658,46.5003319 42.6015331,46.4659193 43.7530037,46.4099989 L43.7530037,52.133955 C42.2416985,52.2070817 40.7059246,52.2472296 39.1485607,52.2630021 L39.1485607,46.539046 C39.4695331,46.5333106 39.7847482,46.5333106 40.0985239,46.5275752 L40.2841985,46.5218398 Z M55.1611985,50.9252138 C54.6559908,51.0083774 54.1493438,51.0987104 53.626864,51.1761387 C53.3231636,51.2220221 53.0137059,51.2664717 52.7100055,51.3109212 C52.4178199,51.3510692 52.1141195,51.3840479 51.8161765,51.422762 L51.8161765,45.7547264 C53.0021912,45.6156423 54.1551011,45.4521826 55.2734669,45.2729506 L55.2734669,50.902272 C55.2346048,50.9080075 55.2015,50.9194783 55.1611985,50.9252138 Z M47.3686213,51.9045379 C46.9353805,51.9389505 46.4920643,51.9604583 46.0588235,51.9948709 L46.0588235,46.2809518 C47.2275662,46.2035236 48.3804761,46.1131906 49.5103566,46.0013498 L49.5103566,51.6923271 C48.8425037,51.7654538 48.1789688,51.8314112 47.4866471,51.893067 C47.4477849,51.893067 47.4089228,51.8988025 47.3686213,51.9045379 Z M60.5256121,49.7537528 C59.9513162,49.911477 59.3439154,50.062032 58.7264393,50.2082854 C58.440011,50.2756767 58.146386,50.3373325 57.848443,50.4032899 C57.759204,50.4204962 57.6627684,50.4434379 57.5735294,50.4592103 L57.5735294,44.8643014 C58.7998456,44.6234135 59.9513162,44.3610177 61.0308199,44.0685109 L61.0308199,49.6146687 C60.8624173,49.6591183 60.6940147,49.7035678 60.5256121,49.7537528 Z M66.7723401,38.5911782 C66.6643897,39.3697624 64.8940037,40.4064408 61.7346562,41.3800296 C57.6584504,42.6303526 51.282182,43.777438 43.2031765,44.1359022 C42.7915257,44.1531085 42.375557,44.1703147 41.9595882,44.1860872 C41.6112684,44.197558 41.2687059,44.2032934 40.9146287,44.2147643 C39.9646654,44.237706 38.9974301,44.247743 37.9956507,44.247743 C37.001068,44.247743 36.0338327,44.237706 35.0781121,44.2147643 C34.7297923,44.2032934 34.3872298,44.1918226 34.0374706,44.1817856 C33.6157445,44.1703147 33.2055331,44.1531085 32.7895643,44.1359022 C24.7163162,43.777438 18.3400478,42.6303526 14.2638419,41.375728 C11.1260846,40.4121763 9.36145588,39.3812333 9.22615809,38.6083845 C9.23191544,38.5854428 9.23191544,38.5682365 9.2491875,38.5409933 C9.32691176,38.5581995 9.41183272,38.573972 9.49099632,38.5969137 C9.94006985,38.7030191 10.4064154,38.8048229 10.8742004,38.9051929 C13.1627482,39.3927041 15.6974228,39.7956179 18.396182,40.1038971 C18.4076967,40.1038971 18.413454,40.1096325 18.4249687,40.1096325 L18.4307261,40.1096325 C20.268761,40.3161079 22.1802022,40.4795675 24.1377022,40.5971438 C24.1535349,40.5971438 24.1650496,40.6071808 24.1823217,40.6071808 C24.188079,40.6071808 24.1938364,40.6014454 24.2039118,40.6014454 C25.6159026,40.6803075 27.0437261,40.7419633 28.4888217,40.7763759 C29.371136,40.7978837 30.243375,40.8093546 31.0925846,40.8093546 C31.6942279,40.8093546 32.311704,40.8036192 32.9421342,40.7921483 C41.307568,40.6631012 49.0612831,39.6723062 54.4530441,38.1380795 C54.7063676,38.0649528 54.9481765,37.9918261 55.1842279,37.9186994 C55.3296011,37.8742499 55.482171,37.8355357 55.6232261,37.7910862 C56.0391949,37.6563037 56.4378915,37.5157857 56.8250735,37.3752677 C56.8927224,37.3537599 56.954614,37.3250828 57.0222629,37.3035749 C57.3489926,37.1802632 57.6627684,37.0512161 57.9621507,36.922169 C58.0456324,36.8834549 58.1363107,36.8433069 58.2197923,36.8103282 C58.5407647,36.6640748 58.8502224,36.5192553 59.1366507,36.3672665 C59.2604338,36.2998752 59.3727022,36.2281824 59.4964853,36.1607911 C59.6317831,36.081929 59.7713989,35.9987653 59.9009393,35.9199032 C59.9743456,35.8754536 60.0592665,35.8295702 60.1254761,35.7851206 C65.2811857,36.8949257 66.6427996,38.1151378 66.7723401,38.5911782 Z M31.0925846,20.1646855 C50.0788952,20.1646855 59.6821599,23.1385044 59.8620772,24.8462277 C59.7210221,25.6248119 57.950636,26.6500195 54.8243934,27.6135712 C50.7481875,28.8681958 44.3719191,30.0167151 36.298671,30.3694438 C35.8827022,30.3852162 35.4724908,30.4024225 35.0507647,30.4196288 C34.7010055,30.4310996 34.358443,30.4425705 34.0101232,30.4468721 C33.0544026,30.4698138 32.0871673,30.4870201 31.0925846,30.4870201 C30.0908051,30.4870201 29.1235699,30.4698138 28.1736066,30.4468721 C27.8195294,30.4425705 27.4769669,30.4310996 27.1286471,30.4196288 C26.706921,30.4024225 26.2967096,30.3852162 25.8850588,30.3694438 C17.8060533,30.0167151 11.4297849,28.8681958 7.35357904,27.6135712 C4.22877574,26.6500195 2.45695037,25.6248119 2.32165257,24.8462277 C2.50156985,23.1385044 12.1048346,20.1646855 31.0925846,20.1646855 Z M2.30581985,32.7768892 L2.30581985,28.0279558 C3.22123897,28.6043662 4.3856636,29.1305916 5.75735294,29.6023305 L5.75735294,35.0968694 C3.51918199,34.2623648 2.30581985,33.4221248 2.30581985,32.7768892 Z M7.88325551,48.651117 C7.89908824,48.6668894 7.92211765,48.6840957 7.94514706,48.701302 C9.51834375,50.2857137 12.7798842,51.5346029 16.8445754,52.4651759 C16.941011,52.4823821 17.0360074,52.50389 17.1310037,52.5268317 C17.4289467,52.594223 17.7326471,52.6616142 18.0421048,52.7232701 C21.7699908,53.5118913 26.2290607,54.0840001 31.0810699,54.3693376 C31.0868272,54.3693376 31.0868272,54.3693376 31.0868272,54.3693376 C31.0925846,54.3693376 31.0925846,54.3693376 31.0925846,54.3693376 C32.6557059,54.4596706 34.2461746,54.5198925 35.8769449,54.5485697 C36.596614,54.565776 37.3047684,54.5772468 37.9956507,54.5772468 C38.7944835,54.5772468 39.6105882,54.565776 40.4367684,54.5428343 C41.9437555,54.515591 43.4277132,54.4539351 44.8900809,54.3693376 C44.8943989,54.3693376 44.9001562,54.3693376 44.9059136,54.3693376 C44.9174283,54.3693376 44.9231857,54.3636022 44.9347004,54.3636022 C49.8039816,54.0782647 54.3681232,53.5018543 58.231307,52.6716512 C57.3936121,53.1032421 56.2464596,53.5577747 54.8243934,53.9936671 C50.5236507,55.3214185 43.65225,56.5258581 34.9269816,56.8054602 C34.6679007,56.8111956 34.4088199,56.8226664 34.145421,56.8284019 C33.8633107,56.8341373 33.5768824,56.8398727 33.290454,56.8456081 C32.5650276,56.8556451 31.8396011,56.867116 31.0925846,56.867116 C30.0908051,56.867116 29.1235699,56.8556451 28.1736066,56.8341373 C27.8195294,56.8226664 27.4769669,56.8111956 27.1286471,56.7997247 C26.706921,56.7896877 26.2967096,56.7724815 25.8850588,56.7552752 C17.8060533,56.396811 11.4297849,55.2482918 7.35357904,53.9936671 C4.18847426,53.0200784 2.41808824,51.9834 2.31589522,51.2048158 C2.44543566,50.7732249 3.60986029,49.692097 7.88325551,48.651117 Z M2.30581985,59.158419 L2.30581985,54.4080517 C3.22123897,54.985896 4.3856636,55.5121214 5.75735294,55.9881618 L5.75735294,61.4540236 L5.09957537,61.2030987 L5.08806066,61.2131357 C3.27737316,60.4689641 2.30581985,59.7348294 2.30581985,59.158419 Z M5.75735294,71.777792 L5.75735294,67.0274247 C6.67996875,67.6038351 7.84295404,68.1314944 9.20888603,68.6075348 L9.20888603,74.0963384 C6.97215441,73.2618337 5.75735294,72.4215937 5.75735294,71.777792 Z M59.8793493,74.0963384 L59.8793493,68.6075348 C61.2452813,68.1314944 62.4082665,67.6038351 63.3308824,67.0274247 L63.3308824,71.7720566 C63.3308824,72.4215937 62.1160809,73.2618337 59.8793493,74.0963384 Z M63.3136103,63.8399612 C63.1898272,64.6142439 61.4194412,65.643753 58.2759265,66.6130401 C54.2054779,67.8676648 47.8292096,69.016184 39.750204,69.3746482 C39.3342353,69.3918545 38.9240239,69.4076269 38.5022978,69.4190977 C38.1597353,69.4305686 37.8114154,69.4420394 37.4616562,69.4535103 C36.5059357,69.4692827 35.5387004,69.486489 34.5441176,69.486489 C33.5495349,69.486489 32.5765423,69.4692827 31.626579,69.4477749 C31.2768199,69.4420394 30.9342574,69.4305686 30.5916949,69.4190977 C30.1699687,69.4018915 29.754,69.386119 29.3380312,69.3689127 C21.2590257,69.016184 14.8827574,67.8676648 10.8123088,66.6130401 C7.76522978,65.6781655 6.00491912,64.6802013 5.78613971,63.9130879 C6.12870221,64.0306642 6.48277941,64.1482404 6.84837132,64.2600813 C6.88723346,64.2715521 6.92177757,64.283023 6.96063971,64.2944938 C7.27009743,64.3891284 7.58963051,64.4794613 7.91636029,64.5683604 C8.04014338,64.602773 8.16392647,64.6414871 8.28770956,64.6701643 C8.47338419,64.7203493 8.65905882,64.7705342 8.84905147,64.8149838 C13.0432831,65.8846409 18.396182,66.6474527 24.1765643,66.9887106 C24.1765643,66.9887106 24.1765643,66.9887106 24.1823217,66.9887106 C25.9699798,67.0890806 27.792182,67.1564718 29.6359743,67.1794135 C30.1253493,67.1894505 30.6147243,67.1894505 31.0925846,67.1894505 C31.7215754,67.1894505 32.3735956,67.185149 33.0313732,67.1736781 C34.7125202,67.145001 36.3720772,67.0833451 37.9913327,66.9887106 C37.9956507,66.9887106 37.9956507,66.9887106 38.0014081,66.9887106 C38.0071654,66.9887106 38.0071654,66.9887106 38.0129228,66.9887106 C39.9862555,66.8653989 41.8976967,66.6976377 43.737171,66.4897285 C43.7429283,66.4897285 43.7486857,66.4897285 43.758761,66.4897285 C43.7817904,66.4897285 43.8048199,66.4782576 43.8264099,66.4782576 C45.8731489,66.2431051 47.8133768,65.9520322 49.6125496,65.6165097 C49.9838989,65.5491184 50.3480515,65.4817272 50.707886,65.4086005 C50.792807,65.3928281 50.8719706,65.3756218 50.9496949,65.3584155 C54.3522904,64.6644288 57.2928585,63.762533 59.316568,62.6469924 C59.423079,62.5853366 59.5295901,62.5251146 59.6317831,62.4634588 C59.7613235,62.3903321 59.8836673,62.31147 60.0031324,62.2326078 C60.1154007,62.160915 60.2391838,62.0935237 60.3399375,62.0203971 C62.6169706,62.8262245 63.2416434,63.5488883 63.3136103,63.8399612 Z M63.3308824,48.8575924 L63.3308824,43.3687888 C64.7025717,42.8927484 65.8669963,42.366523 66.7824154,41.7901126 L66.7824154,46.539046 C66.7824154,47.1828477 65.5690533,48.0230877 63.3308824,48.8575924 Z",id:"coins",fill:"#000"}),a.createElement("ellipse",{id:"Oval-2",fill:"#A2A5A9",cx:"30.375",cy:"25.015",rx:"26.801",ry:"4.765"}),a.createElement("ellipse",{id:"Oval",stroke:"#979797",fill:"#CBD2D7",cx:"78.618",cy:"40.5",rx:"39.309",ry:"40.5"}),a.createElement("g",{id:"coin",transform:"translate(38.118 .882)"},a.createElement("g",{id:"Group-3"},a.createElement("mask",{id:"mask-2",fill:"#fff"},a.createElement("use",{xlinkHref:"#path-1"})),a.createElement("path",{d:"M44.3721522,0.182102628 C42.9352826,0.182102628 41.5177826,0.29209637 40.1284565,0.480150188 C38.6704565,0.286774093 37.2881739,0.182102628 35.9182174,0.182102628 C25.5537391,0.182102628 16.1982391,5.24713705 9.63723913,13.3281289 C9.56856522,13.3902222 9.51926087,13.4594118 9.46467391,13.5286014 C7.37452174,16.1418398 5.57843478,19.0673185 4.12747826,22.2269775 C4.08521739,22.2961671 4.05880435,22.3653567 4.03063043,22.4416427 C3.02693478,24.6521621 2.19404348,26.9744493 1.54780435,29.3925375 C1.48617391,29.5238204 1.458,29.6763924 1.43686957,29.8289643 C0.508891304,33.4871433 0,37.3475688 0,41.3392772 C0,47.5911796 1.23084783,53.5148748 3.41256522,58.8318304 C3.43193478,58.8868273 3.45306522,58.9418242 3.48123913,58.9897247 C4.78780435,62.1440613 6.43773913,65.067766 8.37117391,67.7147121 C8.41871739,67.7839018 8.46097826,67.8548655 8.5226087,67.9098623 C10.4824565,70.5568085 12.7258043,72.9198999 15.201587,74.9299468 C15.2702609,75.0062328 15.3530217,75.0612297 15.4428261,75.1233229 C21.2536957,79.7661233 28.3112609,82.4964518 35.9182174,82.4964518 C37.2881739,82.4964518 38.6704565,82.4006508 40.1284565,82.1984043 C41.5177826,82.3935544 42.9352826,82.4964518 44.3721522,82.4964518 C64.1819348,82.4964518 80.2991739,64.0352441 80.2991739,41.3392772 C80.2991739,18.6433104 64.1819348,0.182102628 44.3721522,0.182102628 Z M29.5016087,3.8899562 C29.0332174,4.13832916 28.5736304,4.38847622 28.1193261,4.6581383 C27.864,4.80361389 27.6033913,4.94908949 27.3551087,5.10166145 C26.9624348,5.34471214 26.5856087,5.60195557 26.1999783,5.85742491 L23.49,5.85742491 C25.5466957,4.88699625 27.6984783,4.12591051 29.9418261,3.64690551 C29.7903913,3.72319149 29.646,3.81367021 29.5016087,3.8899562 Z M15.2984348,65.470485 L10.2482609,65.470485 C9.00332609,63.7034887 7.90278261,61.7963392 6.93958696,59.7951627 L12.2785435,59.7951627 C12.4986522,60.2936827 12.7258043,60.7922028 12.9652826,61.2836264 C13.0691739,61.4929693 13.1713043,61.7005382 13.2822391,61.9152034 C13.5710217,62.482913 13.8668478,63.0453004 14.1838043,63.5988173 C14.3000217,63.7992897 14.4109565,64.0086327 14.5271739,64.2162015 C14.7754565,64.6384355 15.0360652,65.0535732 15.2984348,65.470485 Z M6.29334783,24.3133104 L11.6868913,24.3133104 C11.4386087,24.9289205 11.204413,25.5604975 10.9843043,26.1903004 C10.9226739,26.3712578 10.8610435,26.5433448 10.799413,26.7172059 C10.6004348,27.3274937 10.4067391,27.9431039 10.2288913,28.5675845 L4.73321739,28.5675845 C5.17871739,27.1057322 5.70169565,25.684684 6.29334783,24.3133104 Z M2.82091304,41.3392772 C2.82091304,40.3830413 2.86845652,39.4409981 2.93008696,38.5060513 L8.54373913,38.5060513 C8.54373913,38.5255663 8.54373913,38.5468554 8.54373913,38.5681446 C8.4873913,39.4888986 8.45393478,40.4114268 8.45393478,41.3392772 C8.45393478,41.8182822 8.46802174,42.2884168 8.48034783,42.7603254 L2.8755,42.7603254 C2.85436957,42.2884168 2.82091304,41.8182822 2.82091304,41.3392772 Z M8.64586957,45.6024218 C8.69517391,46.1967428 8.76384783,46.7875156 8.84484783,47.3818367 C8.84484783,47.4244149 8.8518913,47.465219 8.85893478,47.5077972 C8.96282609,48.2972685 9.08608696,49.0796433 9.23047826,49.8566959 L3.67317391,49.8566959 C3.39847826,48.4640332 3.18541304,47.042985 3.04102174,45.6024218 L8.64586957,45.6024218 Z M9.51926087,31.4096809 C9.47876087,31.5746715 9.45058696,31.7414362 9.41713043,31.9152972 C9.37486957,32.101577 9.34141304,32.2825344 9.29915217,32.4688141 C9.12834783,33.3629568 8.97691304,34.2570995 8.85893478,35.1725313 C8.8518913,35.2133354 8.8518913,35.2559136 8.84484783,35.3038141 C8.82547826,35.4209043 8.81843478,35.5468648 8.80434783,35.6639549 L3.21182609,35.6639549 C3.39847826,34.2216176 3.63091304,32.7952472 3.95491304,31.4096809 L9.51926087,31.4096809 Z M9.85734783,52.6987922 C9.89784783,52.8708792 9.9401087,53.0447403 9.9806087,53.2186014 C10.0017391,53.2806946 10.0158261,53.3427879 10.0281522,53.4048811 C10.2623478,54.2706383 10.5247174,55.1239768 10.8064565,55.9613486 C10.8610435,56.1352096 10.9226739,56.3090707 10.9843043,56.4882541 C11.0406522,56.640826 11.0881957,56.8004944 11.1427826,56.9530663 L5.71578261,56.9530663 C5.17871739,55.5745964 4.72617391,54.1535482 4.3335,52.6987922 L9.85734783,52.6987922 Z M14.5271739,18.4712234 C14.4109565,18.6716959 14.2929783,18.8792647 14.1838043,19.0868335 C13.8668478,19.6421245 13.5710217,20.2027378 13.2822391,20.7704474 C13.1713043,20.9797904 13.0691739,21.1873592 12.9652826,21.4020244 C12.9511957,21.4233135 12.9388696,21.4499249 12.9318261,21.471214 L7.64921739,21.471214 C8.71454348,19.4469743 9.9401087,17.5486952 11.3083043,15.7958917 L16.2405,15.7958917 C16.0679348,16.0442647 15.8953696,16.2873154 15.7245652,16.5445588 C15.3107609,17.1672653 14.9128043,17.811261 14.5271739,18.4712234 Z M18.6405652,8.69952128 L22.5338478,8.69952128 C22.1834348,9.00466521 21.8312609,9.31513141 21.4949348,9.63446809 C21.2061522,9.90413016 20.9385,10.1897591 20.655,10.4665175 C20.3803043,10.7503723 20.1056087,11.0342272 19.830913,11.3251783 C19.5685435,11.6019368 19.3149783,11.8875657 19.0596522,12.1714205 C18.8325,12.4268899 18.6194348,12.6912297 18.3993261,12.9537954 L13.7506304,12.9537954 C15.2632174,11.3677566 16.8937826,9.93961202 18.6405652,8.69952128 Z M12.4299783,68.3037109 L17.2653261,68.3037109 C17.4238043,68.5201502 17.5805217,68.727719 17.7460435,68.9352879 C18.1721739,69.4763861 18.6053478,69.9961952 19.0596522,70.508908 C19.3079348,70.7998592 19.5685435,71.0766176 19.830913,71.3533761 C20.1056087,71.6443273 20.3803043,71.9352785 20.6620435,72.2191333 C20.7729783,72.3309011 20.8821522,72.4550876 20.993087,72.5668554 L16.7564348,72.5668554 C15.2086304,71.2912829 13.7629565,69.8631383 12.4299783,68.3037109 Z M29.9418261,79.0316489 C26.7088696,78.3468492 23.6555217,77.0925657 20.8275652,75.4000814 L24.233087,75.4000814 C24.4109348,75.5455569 24.597587,75.6786139 24.7824783,75.8098967 C25.0712609,76.0316583 25.3600435,76.2534199 25.662913,76.4609887 C26.2140652,76.849515 26.7775435,77.2238486 27.3551087,77.576893 C27.6033913,77.729465 27.8569565,77.8749406 28.1122826,78.0275125 C28.5736304,78.2900782 29.0332174,78.5473217 29.4945652,78.7903723 C29.646,78.8666583 29.7903913,78.955363 29.9418261,79.0316489 Z M44.3721522,79.6632259 C43.2504783,79.6632259 42.1516957,79.5940363 41.0564348,79.4680757 L40.514087,79.3917897 C40.4383696,79.3793711 40.3626522,79.3722747 40.2869348,79.358082 C39.7991739,79.2888924 39.3166957,79.20551 38.8359783,79.1150313 C38.7937174,79.1079349 38.7602609,79.0937422 38.718,79.0884199 C38.2513696,78.9979412 37.7900217,78.8932697 37.3286739,78.7761796 C37.26,78.7619869 37.1913261,78.7406977 37.1226522,78.7211827 C36.6965217,78.6094149 36.2703913,78.4994212 35.8495435,78.3663642 C35.7262826,78.3255601 35.5959783,78.2829819 35.4656739,78.2421777 C35.1082174,78.1250876 34.749,78.0062234 34.398587,77.8820369 C34.1098043,77.7702691 33.8280652,77.6602753 33.5463261,77.5414111 C33.3526304,77.4651252 33.1536522,77.3959355 32.9687609,77.3143273 C25.3882174,74.0837046 19.1089565,67.7360013 15.2843478,59.6213016 C15.2491304,59.5450156 15.2227174,59.4687297 15.1875,59.3924437 C14.9814783,58.9560169 14.7825,58.5053974 14.5958478,58.0547778 C14.513087,57.8755945 14.444413,57.694637 14.3757391,57.5136796 C14.2313478,57.1606352 14.0869565,56.8075907 13.9566522,56.4474499 C13.8738913,56.218592 13.7911304,55.9826377 13.7083696,55.7537797 C13.5991957,55.4362171 13.4882609,55.1239768 13.3861304,54.8046402 C13.3033696,54.5420745 13.2206087,54.2777347 13.1378478,54.015169 C13.0480435,53.7171214 12.9582391,53.4119775 12.8754783,53.1139299 C12.7944783,52.8371715 12.7258043,52.5533166 12.650087,52.2747841 C12.5743696,51.9767365 12.4986522,51.678689 12.4299783,51.3806414 C12.3613043,51.0896902 12.297913,50.8058354 12.2362826,50.5148842 C12.1676087,50.2097403 12.1130217,49.9116927 12.0513913,49.6065488 C11.9950435,49.3155976 11.9404565,49.0246464 11.892913,48.7265989 C11.8383261,48.4143586 11.7960652,48.096796 11.7485217,47.7845557 C11.7062609,47.4936045 11.6587174,47.2097497 11.6252609,46.9187985 C11.583,46.5781727 11.5495435,46.239321 11.5143261,45.893373 C11.4861522,45.6219368 11.4526957,45.3593711 11.4315652,45.0879349 C11.3981087,44.6940864 11.3769783,44.2984637 11.3488043,43.8975188 C11.3364783,43.6757572 11.3223913,43.4539956 11.3083043,43.2251377 C11.2871739,42.6006571 11.2660435,41.9779506 11.2660435,41.3392772 C11.2660435,40.7094743 11.2871739,40.0778974 11.3083043,39.4551909 C11.3223913,39.2263329 11.3364783,39.0045713 11.3488043,38.7828098 C11.3769783,38.3871871 11.3981087,37.9862422 11.4315652,37.5906195 C11.4526957,37.3209574 11.4861522,37.0566176 11.5143261,36.7869556 C11.5495435,36.4463298 11.583,36.1003817 11.6252609,35.76153 C11.6587174,35.4705788 11.7062609,35.1849499 11.7485217,34.8939987 C11.7960652,34.5835325 11.8383261,34.2641959 11.892913,33.9519556 C11.9404565,33.6610044 11.9950435,33.3700532 12.0513913,33.079102 C12.1130217,32.7739581 12.1746522,32.4688141 12.2362826,32.1636702 C12.297913,31.872719 12.3613043,31.5888642 12.4299783,31.3050094 C12.4986522,30.9998655 12.5743696,30.7018179 12.650087,30.4037703 C12.7258043,30.1270119 12.7944783,29.8502534 12.8754783,29.5646245 C12.9582391,29.2683511 13.0480435,28.9632071 13.1378478,28.6651596 C13.2206087,28.4008198 13.3033696,28.1382541 13.3861304,27.8739143 C13.4882609,27.5563517 13.5991957,27.2441114 13.7083696,26.9247747 C13.7911304,26.6888204 13.8738913,26.4599625 13.9566522,26.2328786 C14.094,25.8709637 14.2313478,25.5179193 14.3757391,25.1648748 C14.444413,24.9839174 14.513087,24.804734 14.5958478,24.6237766 C14.7825,24.1731571 14.9814783,23.7243116 15.1875,23.2861108 C15.2227174,23.2098248 15.2491304,23.1335388 15.2843478,23.0590269 C19.1089565,14.9425532 25.3882174,8.59484981 32.9687609,5.36600125 C33.1536522,5.2826189 33.3526304,5.21342929 33.5463261,5.1371433 C33.8280652,5.02005319 34.1098043,4.90828536 34.398587,4.79829161 C34.749,4.67233104 35.1082174,4.55524093 35.4656739,4.43637672 C35.5959783,4.39557259 35.7262826,4.35476846 35.8495435,4.31219024 C36.2703913,4.18090738 36.6965217,4.06204318 37.1226522,3.95914581 C37.1913261,3.9378567 37.26,3.91656758 37.3286739,3.90414894 C37.7900217,3.78528473 38.2513696,3.68238736 38.718,3.59190864 C38.7602609,3.58481227 38.7937174,3.57061952 38.8359783,3.56352315 C39.3166957,3.47304443 39.7991739,3.39143617 40.2869348,3.32224656 C40.3626522,3.30805382 40.4383696,3.30095745 40.514087,3.28676471 L41.0564348,3.21047872 C42.1516957,3.08629224 43.2504783,3.024199 44.3721522,3.024199 C62.627087,3.024199 77.4782609,20.2098342 77.4782609,41.3392772 C77.4782609,62.4687203 62.627087,79.6632259 44.3721522,79.6632259 Z",id:"Fill-1",fill:"#000",mask:"url(#mask-2)"})),a.createElement("path",{d:"M19.7912115,40.7807647 C19.7912115,39.8676552 19.8236915,38.9545458 19.8903611,38.0559301 C19.9501927,37.2642062 19.3894847,36.5630686 18.635606,36.4996582 C17.8800178,36.4434947 17.2269981,37.0304937 17.165457,37.8294645 C17.0919495,38.7987374 17.0526316,39.7969979 17.0526316,40.7807647 L17.0526316,40.8169992 C17.0526316,41.61597 17.6663333,42.2464503 18.4219215,42.2464503 C19.1758003,42.2464503 19.7912115,41.5815472 19.7912115,40.7807647 Z",id:"Fill-4",fill:"#000"}),a.createElement("path",{d:"M69.1940237,33.9437506 C69.3893623,34.6124901 70.0626573,35.0583164 70.8107629,35.0583164 C70.9396033,35.0583164 71.076756,35.0435784 71.2159867,35.0159445 C72.101245,34.8132962 72.6436215,34.0155987 72.425424,33.2234279 C72.1407283,32.2378202 71.8165492,31.2595814 71.4424965,30.3089765 C71.1515665,29.5389129 70.2018881,29.1225627 69.3332544,29.3878478 C68.4646207,29.6549751 68.0012109,30.4968868 68.3025312,31.2595814 C68.6350226,32.136496 68.9342648,33.0373599 69.1940237,33.9437506 Z",id:"Fill-5",fill:"#000"}),a.createElement("path",{d:"M63.0884393,61.3914408 C62.5749996,62.0047782 62.035888,62.5917187 61.4775223,63.1320767 C60.9769187,63.6242993 60.9833367,64.4053339 61.4839403,64.8913456 C61.7342422,65.133575 62.06156,65.2484787 62.3872732,65.2484787 C62.7194045,65.2484787 63.0515358,65.127364 63.2954196,64.8851346 C63.9163607,64.2780082 64.5180478,63.6351686 65.081227,62.9628266 C65.5272777,62.4286797 65.4454482,61.6460923 64.8935006,61.2159798 C64.347971,60.7796562 63.5393035,60.8635049 63.0884393,61.3914408 Z",id:"Fill-6",fill:"#000"}),a.createElement("path",{d:"M20.3323792,49.1142174 C20.113743,48.3242082 19.2017176,47.8417318 18.3167615,48.0424567 C17.4213942,48.2376571 16.8758447,49.0350323 17.1048922,49.826883 C17.3797492,50.8120925 17.7066624,51.789936 18.0710561,52.7475229 C18.3084325,53.3589052 18.9580944,53.7474645 19.6494013,53.7474645 C19.8284748,53.7474645 20.0075482,53.7180003 20.1866217,53.6682794 C21.0570021,53.40126 21.5213437,52.5670546 21.2277465,51.7973021 C20.8862576,50.9207418 20.5843314,50.0220834 20.3323792,49.1142174 Z",id:"Fill-7",fill:"#000"}),a.createElement("path",{d:"M58.988016,13.7151834 C58.0992381,13.1652749 57.1664991,12.6586378 56.2184693,12.215105 C55.4634859,11.8472973 54.5460377,12.1429858 54.1637677,12.8479506 C53.7834089,13.5601272 54.089225,14.4255571 54.836563,14.7843499 C55.6871139,15.1864142 56.51664,15.6443708 57.3155845,16.1293722 C57.5774395,16.2916403 57.8679647,16.3691684 58.1508446,16.3691684 C58.6516184,16.3691684 59.1447468,16.1365841 59.435272,15.714687 C59.8978188,15.0457818 59.697127,14.1515043 58.988016,13.7151834 Z",id:"Fill-8",fill:"#000"}),a.createElement("path",{d:"M54.6695451,68.2952404 C53.8398642,68.7320859 52.9803521,69.1227451 52.12084,69.4614447 C51.3564149,69.7616557 50.9630156,70.6488176 51.2538701,71.4455314 C51.4794687,72.0613488 52.0481264,72.4366126 52.6522087,72.4366126 C52.8274671,72.4366126 53.0008611,72.4077461 53.1761195,72.3403911 C54.1456343,71.9632029 55.098369,71.5282819 56.0305947,71.0317791 C56.767053,70.6488176 57.0504497,69.7154694 56.6794238,68.9572442 C56.3009402,68.2047923 55.3985457,67.9045813 54.6695451,68.2952404 Z",id:"Fill-9",fill:"#000"}),a.createElement("path",{d:"M66.5602221,22.498173 C66.0385523,21.5744134 65.4767542,20.6726957 64.8948918,19.8290887 C64.4250546,19.147791 63.5823574,19.0455963 63.0138712,19.6086689 C62.4453849,20.1717415 62.360112,21.1816652 62.8316212,21.8709783 C63.3599789,22.6384402 63.8699445,23.4519899 64.3397817,24.2895854 C64.6006166,24.7524671 65.0186211,24.994929 65.4500019,24.994929 C65.7108367,24.994929 65.9733436,24.9087649 66.2007381,24.7204061 C66.8160409,24.2274671 66.9715386,23.2255586 66.5602221,22.498173 Z",id:"Fill-10",fill:"#000"}),a.createElement("path",{d:"M71.1028054,39.3711968 C70.3453949,39.3711968 69.730213,40.0690561 69.730213,40.8725966 C69.730213,41.7690635 69.695941,42.6728187 69.6359651,43.556531 C69.5759891,44.3527831 70.1380494,45.0579308 70.89546,45.1217039 C70.9348728,45.1217039 70.9691447,45.1217039 71.0017031,45.1217039 C71.7111329,45.1217039 72.3143195,44.5459243 72.3674411,43.7770035 C72.4411258,42.8167636 72.4736842,41.8401249 72.4736842,40.8725966 L72.4736842,40.7796701 C72.4736842,39.9761297 71.8585023,39.3711968 71.1028054,39.3711968 Z",id:"Fill-11",fill:"#000"}),a.createElement("path",{d:"M69.9816111,50.9503396 C69.1605558,50.6871592 68.2687875,51.110861 67.9937929,51.8910697 C67.6716563,52.7870031 67.3180918,53.6773369 66.9193496,54.5303402 C66.5736421,55.2881506 66.9429206,56.1710183 67.732548,56.4995272 C67.9387939,56.5797879 68.1548611,56.6227181 68.3611071,56.6227181 C68.9680595,56.6227181 69.543584,56.286743 69.8048289,55.7267846 C70.2330348,54.7860545 70.6258842,53.81546 70.9696275,52.8392659 C71.2465864,52.0590572 70.8085592,51.21352 69.9816111,50.9503396 Z",id:"Fill-12",fill:"#000"}),a.createElement("path",{d:"M47.0437116,9.34596624 C46.0686249,9.23374463 45.0791723,9.18103448 44.0969026,9.18103448 L44.0412347,9.18103448 C43.2493134,9.18103448 42.6315789,9.791452 42.6315789,10.5412964 C42.6315789,11.2928411 43.3049814,11.9032586 44.0969026,11.9032586 C44.9678364,11.9032586 45.8441575,11.9508677 46.7132955,12.0426854 C46.7707592,12.0494867 46.8264271,12.056288 46.8820951,12.056288 C47.5967995,12.056288 48.221717,11.5444895 48.3061167,10.8541566 C48.3976995,10.1043122 47.8284499,9.43268293 47.0437116,9.34596624 Z",id:"Fill-13",fill:"#000"}),a.createElement("path",{d:"M23.7643223,58.7651174 C23.352585,58.0299906 22.5157205,57.8417019 21.9064831,58.3344573 C21.2922246,58.8272126 21.1298728,59.8207356 21.5483051,60.5558624 C22.0638136,61.4792779 22.6194917,62.3806596 23.2019494,63.2239523 C23.469746,63.6085418 23.8563774,63.8108519 24.2413351,63.8108519 C24.5426063,63.8108519 24.8422038,63.6946738 25.0915895,63.4523023 C25.6606573,62.8874364 25.7443438,61.879892 25.2740259,61.1908358 C24.7451275,60.4236598 24.2346402,59.6024009 23.7643223,58.7651174 Z",id:"Fill-14",fill:"#000"}),a.createElement("path",{d:"M21.7980233,26.55755 C21.0014138,26.2307024 20.0733441,26.5650208 19.7280158,27.3251747 C19.3002796,28.2646279 18.9000128,29.235832 18.5566466,30.2070361 C18.2799916,30.9877348 18.7175382,31.8412737 19.5376928,32.1027518 C19.7064328,32.1550474 19.8751727,32.1830629 20.0439127,32.1830629 C20.6953274,32.1830629 21.3075002,31.7889781 21.5292167,31.1689017 C21.8431514,30.2798764 22.2041765,29.3889834 22.6024812,28.5205028 C22.9556579,27.7696874 22.5867845,26.8862652 21.7980233,26.55755 Z",id:"Fill-15",fill:"#000"}),a.createElement("path",{d:"M43.9962766,71.1598796 C43.1197285,71.1598796 42.2361115,71.1072231 41.3737013,71.0070058 C40.5996528,70.9271717 39.8892247,71.4520385 39.7990958,72.1943259 C39.7089668,72.9383118 40.2621111,73.6143538 41.0343924,73.7077767 C42.0081383,73.8198842 43.01016,73.8742394 43.9962766,73.8742394 L44.1217502,73.8742394 C44.9011004,73.8742394 45.4736842,73.2695384 45.4736842,72.5204567 C45.4736842,71.7645805 44.777394,71.1598796 43.9962766,71.1598796 Z",id:"Fill-16",fill:"#000"}),a.createElement("path",{d:"M26.2282969,16.7343675 C25.6147852,17.3351354 25.0140882,17.9840267 24.4438267,18.6499942 C24.0001119,19.18401 24.0818067,19.9664053 24.6264385,20.4026218 C24.869921,20.5904588 25.1518481,20.6820487 25.4401826,20.6820487 C25.80861,20.6820487 26.1786393,20.5237068 26.4349367,20.2272038 C26.9475314,19.614017 27.4921632,19.0318776 28.0480081,18.4869951 C28.5493898,18.0011028 28.5429823,17.2140504 28.0432025,16.728158 C27.5418208,16.2484752 26.7280767,16.2484752 26.2282969,16.7343675 Z",id:"Fill-17",fill:"#000"}),a.createElement("path",{d:"M36.3532749,10.7177124 C35.386102,11.0932593 34.4245197,11.5304345 33.5002081,12.0196084 C32.7659767,12.4028589 32.4734022,13.3349856 32.8461085,14.0880054 C33.107003,14.6214746 33.6325188,14.9315416 34.17667,14.9315416 C34.4040209,14.9315416 34.6369623,14.8776169 34.8549955,14.7659158 C35.6842671,14.3287406 36.535901,13.9377866 37.4024431,13.606535 C38.166491,13.3060974 38.5596962,12.4182659 38.2764394,11.6209509 C37.983865,10.8236359 37.1266405,10.4172748 36.3532749,10.7177124 Z",id:"Fill-18",fill:"#000"}),a.createElement("path",{d:"M34.6921032,68.2752597 C33.8488535,67.8681419 33.0113401,67.4177904 32.2120694,66.9169995 C31.5026688,66.4882649 30.5619003,66.6720083 30.0915161,67.34033 C29.6287804,68.001446 29.8295542,68.8949434 30.5313063,69.3308837 C31.4280957,69.8875182 32.3612156,70.3937133 33.301984,70.8440649 C33.5276155,70.9503478 33.7589833,70.9989858 33.9979997,70.9989858 C34.5506055,70.9989858 35.0879143,70.7107608 35.3575248,70.2117713 C35.7456874,69.5002159 35.4397464,68.635541 34.6921032,68.2752597 Z",id:"Fill-19",fill:"#000"}))))))));n.d(t,"a",function(){return d});class d extends a.PureComponent{render(){return a.createElement(o,{id:this.props.id},s,a.createElement(l,null,Object(c.b)("rewardsPanelEmptyText1")),a.createElement(r,null,a.createElement("b",null,Object(c.b)("rewardsPanelEmptyText2")),a.createElement("br",null),"• ",Object(c.b)("rewardsPanelEmptyText3"),a.createElement("br",null),"• ",Object(c.b)("rewardsPanelEmptyText4"),a.createElement("br",null),"• ",Object(c.b)("rewardsPanelEmptyText5")))}}},function(e,t,n){"use strict";var a=n(0),i=n(1);const o=Object(i.default)("div").withConfig({displayName:"MainToggleWrapper"})`
  font-family: Poppins, sans-serif;
  position: relative;
  display: flex;
  width: 100%;
  border-radius: 6px;
  background-color: #dee2e6;
  border: 1px solid #dbdfe3;
  justify-content: space-between;
  align-items: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
  padding: 18px 34px;
  margin-bottom: 25px;
`,l=Object(i.default)("div").withConfig({displayName:"ToggleHeading"})`
  display: flex;
  align-items: center;
  width: 100%;
`,r=Object(i.default)("div").withConfig({displayName:"StyledTitle"})`
  margin: 0 0 0 11px;
  flex: 1;
  font-size: 28px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: 0.2px;
  color: #4b4c5c;
  display: flex;
  align-items: center;
`,c=Object(i.default)("span").withConfig({displayName:"StyledTM"})`
  align-self: flex-start;
  font-size: 10px;
  font-weight: 300;
  letter-spacing: 0.2px;
  text-align: center;
  color: #222326;
`,s=Object(i.default)("div").withConfig({displayName:"StyleTitle"})`
  margin-top: 18px;
  font-size: 22px;
  line-height: 1.27;
  color: #4b4c5c;
`,d=Object(i.default)("div").withConfig({displayName:"StyleText"})`
  font-family: Muli, sans-serif;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.75;
  color: #838391;
`,p=Object(i.default)("div").withConfig({displayName:"StyledContent"})`
  flex-basis: 100%;
`,u=Object(i.default)("div").withConfig({displayName:"StyledLogoWrapper"})`
  width: 66px;
  height: 66px;
`;var m=n(75),h=n(2),g=n(342);n.d(t,"a",function(){return f});class f extends a.PureComponent{render(){const{id:e,enabled:t,onToggle:n,testId:i}=this.props;return a.createElement(o,{id:e},a.createElement(l,null,a.createElement(u,null,a.createElement(g.a,null)),a.createElement(r,null,Object(h.b)("braveRewards")," ",a.createElement(c,null,"TM")),a.createElement(m.a,{checked:t,onToggle:n,testId:i})),t?null:a.createElement(p,null,a.createElement(s,null,Object(h.b)("rewardsWhy")),a.createElement(d,null,Object(h.b)("rewardsOffText1")," ",a.createElement("b",null,Object(h.b)("rewardsOffText2"))),a.createElement(s,null,Object(h.b)("rewardsOffText3")),a.createElement(d,null,Object(h.b)("rewardsOffText4"))))}}},function(e,t,n){"use strict";var a=n(0),i=n(1);const o=Object(i.default)("div").withConfig({displayName:"StyledWrapper"})`
  font-family: Poppins, sans-serif;
`,l=Object(i.default)("div").withConfig({displayName:"StyledTitle"})`
  font-size: 16px;
  font-weight: 600;
  line-height: 2;
  color: #4b4c5c;
`,r=Object(i.default)("div").withConfig({displayName:"StyledContent"})`
  font-size: 28px;
  color: #696fdc;
  margin-bottom: 33px;
`,c=Object(i.default)("span").withConfig({displayName:"StyledNum"})`
  font-weight: 500;
  color: #0c0d21;
`;var s=n(825),d=n(42),p=n(152),u=n(2);n.d(t,"a",function(){return m});class m extends a.PureComponent{get headers(){return[Object(u.b)("site"),Object(u.b)("rewardsContributeAttention")]}render(){const{id:e,onClose:t,onRestore:n,rows:i,numExcludedSites:m}=this.props,h=i&&i.length||0;return a.createElement(d.a,{id:e,onClose:t},a.createElement(o,null,a.createElement(l,null,Object(u.b)("rewardsContribute")),a.createElement(r,null,Object(u.b)("rewardsContributeText1")," ",a.createElement(c,null,h)," ",Object(u.b)("sites"),"."),m&&m>0?a.createElement(s.a,{onRestore:n,numExcludedSites:m}):null,a.createElement(p.a,{header:this.headers,rows:i,numSites:h,allSites:!0,showRowAmount:!0,showRemove:!0})))}}},function(e,t,n){"use strict";var a=n(0),i=n(1);const o=Object(i.default)("div").withConfig({displayName:"StyledWrapper"})`
  padding: 32px 20px 46px;
  text-align: center;
  font-family: Poppins, sans-serif;
`,l=Object(i.default)("div").withConfig({displayName:"StyledTitle"})`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.75;
  letter-spacing: 0.1px;
  text-align: center;
  color: #5bc4fe;
`,r=Object(i.default)("div").withConfig({displayName:"StyledContent"})`
  font-family: Muli, sans-serif;
  font-size: 16px;
  line-height: 1.75;
  text-align: center;
  color: #686978;
`;var c=n(2);n.d(t,"a",function(){return s});class s extends a.PureComponent{render(){return a.createElement(o,{id:this.props.id},a.createElement(l,null,Object(c.b)("rewardsPanelOffText1")),a.createElement(r,null,Object(c.b)("rewardsPanelOffText2")))}}},function(e,t,n){"use strict";var a=n(0),i=n(4),o=n(10);const l=Object(i.c)("div").withConfig({displayName:"StyledContent"})`
  font-size: 14px;
  font-family: Muli, sans-serif;
  letter-spacing: 0;
  font-weight: 200;
  line-height: 26px;
  margin-top: 40px;
`,r=Object(i.c)("label").withConfig({displayName:"StyledImport"})`
  color: #4c54d2;
  cursor: pointer;
`,c=Object(i.c)("div").withConfig({displayName:"StyleButtonWrapper"})`
  display: flex;
  margin-top: 20px;
  justify-content: center;
`,s=Object(i.c)(o.a).withConfig({displayName:"GroupedButton"})`
  margin: 0 4px;

  @media (max-width: 410px) {
    min-width: 74px;
    font-size: 9px;
  }
  @media (max-width: 370px) {
    min-width: 65px;
    font-size: 9px;
  }
`,d=Object(i.c)("div").withConfig({displayName:"StyledDoneWrapper"})`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`,p=Object(i.c)("div").withConfig({displayName:"StyledStatus"})`
  margin: ${e=>e.isError?0:-16}px 0 16px;
  border-radius: 6px;
  overflow: hidden;
`,u=Object(i.c)("div").withConfig({displayName:"StyledActionsWrapper"})`
  margin-top: 40px;
  display: flex;
  justify-content: center;
`,m=Object(i.c)(o.a).withConfig({displayName:"ActionButton"})`
  margin: 0 8px;
`,h=Object(i.c)("div").withConfig({displayName:"StyledTitleWrapper"})`
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
`,g=Object(i.c)("span").withConfig({displayName:"StyledTitle"})`
  font-size: 22px;
  font-weight: normal;
  letter-spacing: 0;
  line-height: 40px;
  font-family: ${e=>e.theme.fontFamily.heading};
`,f=Object(i.c)("span").withConfig({displayName:"StyledSafe"})`
  font-weight: 700;
  margin-right: 3px;
  color: ${e=>e.theme.color.brandBatInteracting};
`,b=Object(i.c)("div").withConfig({displayName:"StyledTabWrapper"})`
  margin: 0 auto;
  max-width: 400px;
`,x=Object(i.c)("div").withConfig({displayName:"StyledControlWrapper"})`
  width: 100%;
  margin-bottom: 30px;
`,y=Object(i.c)("p").withConfig({displayName:"StyledText"})`
  font-size: 16px;
  font-weight: 200;
  letter-spacing: 0;
  line-height: 26px;
  font-family: Muli, sans-serif;
`,C=Object(i.c)("div").withConfig({displayName:"StyledTextWrapper"})`
  margin-bottom: 25px;
`;var v=n(1260),w=n(42),E=n(2),k=n(683),O=n(1266),S=n(53);n.d(t,"a",function(){return j});class j extends a.PureComponent{constructor(e){super(e),this.onFileUpload=(e=>{const t=e.target,n=this;if(!t.files)return;const a=new FileReader;a.onload=function(){a.result?n.onRestore((a.result.toString()||"").trim()):n.onRestore("")};try{a.readAsText(t.files[0])}catch(e){n.onRestore("")}}),this.setRecoveryKey=(e=>{this.setState({errorShown:!1,recoveryKey:e.target.value})}),this.onRestore=(e=>{e="string"==typeof e?e:this.state.recoveryKey,this.props.onRestore(e)}),this.getBackup=(()=>{const{backupKey:e,onClose:t,onCopy:n,onPrint:i,onSaveFile:r}=this.props;return a.createElement(a.Fragment,null,a.createElement(S.a,{text:Object(E.b)("recoveryKeys")},a.createElement(v.a,{value:e,disabled:!0})),a.createElement(c,null,n?a.createElement(s,{text:Object(E.b)("copy"),level:"secondary",size:"small",type:"subtle",onClick:n.bind(this,e)}):null,i?a.createElement(s,{text:Object(E.b)("print"),level:"secondary",size:"small",type:"subtle",onClick:i.bind(this,e)}):null,r?a.createElement(s,{text:Object(E.b)("saveAsFile"),level:"secondary",size:"small",type:"subtle",onClick:r.bind(this,e)}):null),a.createElement(l,null,a.createElement(f,null,Object(E.b)("rewardsBackupText2")),Object(E.b)("rewardsBackupText3")),a.createElement(d,null,a.createElement(o.a,{text:Object(E.b)("done"),size:"medium",type:"accent",onClick:t})))}),this.getRestore=(()=>{const{error:e,onClose:t,funds:n}=this.props,i=e&&this.state.errorShown;return a.createElement(a.Fragment,null,n?a.createElement(p,null,a.createElement(k.a,{type:"warning",colored:!0,bg:!0},`Backup your wallet before replacing. Or you will lose the fund, ${n}, in your current wallet.`)):null,a.createElement(S.a,{text:a.createElement(a.Fragment,null,Object(E.b)("rewardsRestoreText4")," ",a.createElement(r,{htmlFor:"recoverFile"},Object(E.b)("import")),a.createElement("input",{type:"file",id:"recoverFile",name:"recoverFile",style:{display:"none"},onChange:this.onFileUpload}))},a.createElement(v.a,{fieldError:!!i,value:this.state.recoveryKey,onChange:this.setRecoveryKey})),i?a.createElement(p,{isError:!0},a.createElement(k.a,{type:"error",colored:!0,bg:!0},e)):null,a.createElement(C,null,a.createElement(y,null,Object(E.b)("rewardsRestoreText3"))),a.createElement(u,null,a.createElement(m,{level:"secondary",text:Object(E.b)("cancel"),size:"medium",type:"accent",onClick:t}),a.createElement(m,{level:"primary",type:"accent",text:Object(E.b)("restore"),size:"medium",onClick:this.onRestore})))}),this.state={recoveryKey:"",errorShown:!1}}componentWillReceiveProps(e){e.error&&this.setState({errorShown:!0})}render(){const{id:e,activeTabId:t,onClose:n,onTabChange:i,testId:o}=this.props;return a.createElement(w.a,{id:e,onClose:n,size:"small",testId:o},a.createElement(h,null,a.createElement(g,null,Object(E.b)("manageWallet"))),a.createElement(x,null,a.createElement(b,null,a.createElement(O.a,{onChange:i,tabIndexSelected:t,tabTitles:[Object(E.b)("backup"),Object(E.b)("restore")]}))),0===t?this.getBackup():this.getRestore())}}},function(e,t,n){"use strict";var a=n(0),i=n(1);const o=Object(i.default)("div").withConfig({displayName:"StyledWrapper"})`
  font-family: Poppins, sans-serif;
`,l=Object(i.default)("div").withConfig({displayName:"StyledTitle"})`
  font-weight: 600;
  color: #1B1D2F;
  font-family: Poppins, sans-serif;
  font-size: 16px;
  line-height: 2;
`,r=Object(i.default)("span").withConfig({displayName:"StyledSubTitle"})`
  color: #838391;
  font-weight: normal;
`,c=Object(i.default)("div").withConfig({displayName:"StyledHeader"})`
  display: flex;
  width: 100%;
  justify-content: space-between;
`,s=Object(i.default)("div").withConfig({displayName:"StyledLeft"})`
  flex-basis: 40%;
`,d=Object(i.default)("div").withConfig({displayName:"StyledRight"})`
  flex-basis: 378px;
  flex-grow: 0;
  flex-shrink: 1;
  margin-bottom: 45px;
`,p=Object(i.default)("div").withConfig({displayName:"StyledSelectOption"})`
  font-size: 22px;
  font-weight: 300;
  color: #4C54D2;
`,u=Object(i.default)("div").withConfig({displayName:"StyledIconWrap"})`
  margin-bottom: 103px;
  display: flex;
`,m=Object(i.default)("button").withConfig({displayName:"StyledIcon"})`
  display: flex;
  margin-right: 35px;
  background: none;
  border: none;
  cursor: pointer;
  align-items: center;
`,h=Object(i.default)("div").withConfig({displayName:"StyledIconText"})`
  font-size: 14px;
  line-height: 1.43;
  color: #838391;
  margin-left: 13px;
`,g=Object(i.default)("div").withConfig({displayName:"StyledBalance"})`
  margin-top: 41px;
`,f=Object(i.default)("div").withConfig({displayName:"StyledTables"})`
  background-color: #f9f9fd;
  margin: 0 -50px;
  padding: 0 50px;
`,b=Object(i.default)("div").withConfig({displayName:"StyledWarning"})`
  display: flex;
  justify-content: center;
  border-top: 1px solid #ebecf0;
  margin: 0 -50px;
  padding: 17px 50px 0;
  align-items: flex-start;
`,x=Object(i.default)("div").withConfig({displayName:"StyledWarningText"})`
  max-width: 508px;
  font-family: Muli, sans-serif;
  font-size: 12px;
  font-weight: 300;
  line-height: 1.5;
  color: #686978;
  padding-left: 8px;
`,y=Object(i.default)("div").withConfig({displayName:"StyledNote"})`
  max-width: 508px;
  margin-top: 46px;
  font-family: Muli, sans-serif;
  font-size: 12px;
  font-weight: 300;
  line-height: 1.5;
  color: #686978;
`,C=Object(i.default)("div").withConfig({displayName:"StyledTableTitle"})`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 600;
  line-height: 2.79;
  letter-spacing: 0.2px;
  color: #4b4c5c;
  text-transform: uppercase;
  padding-top: 14px;
  margin-top: 28px;
`,v=Object(i.default)("div").withConfig({displayName:"StyledTableSubTitle"})`
  font-size: 14px;
  font-weight: 300;
  line-height: 2.79;
  letter-spacing: 0.2px;
  color: #4b4c5c;
  text-transform: none;
`,w=Object(i.default)("div").withConfig({displayName:"StyledVerified"})`
  display: flex;
  font-size: 12px;
  align-items: center;
  line-height: 2;
  color: #9e9fab;
  padding: 11px 0 32px;
`,E=Object(i.default)("div").withConfig({displayName:"StyledVerifiedText"})`
  margin-left: 5px;
`,k=Object(i.default)("div").withConfig({displayName:"StyledClosing"})`
  margin-top: -10px;
`,O=Object(i.default)("span").withConfig({displayName:"StyledActionIcon"})`
  color: #A1A8F2;
  width: 27px;
`,S=Object(i.default)("div").withConfig({displayName:"StyledAlertWrapper"})`
  color: #E9AB18;
  width: 20px;
  margin-left: 3px;
`,j=Object(i.default)("div").withConfig({displayName:"StyledWarningWrapper"})`
  display: flex;
`,T=Object(i.default)("div").withConfig({displayName:"StyledVerifiedIcon"})`
  display: flex;
  color: #392DD1;
  width: 19px;
`;var N=n(152),A=n(348),z=n(42),B=n(53),D=n(95),M=n(713),L=n(719),F=n(717),$=n(724),I=n(154),P=n(2);n.d(t,"a",function(){return R});class R extends a.PureComponent{constructor(){super(...arguments),this.colors={deposit:"earnings",grant:"earnings",ads:"earnings",contribute:"contribute",recurring:"donation",donations:"donation"},this.hasWarnings=!1,this.getSummaryBox=(()=>{let e;return this.hasWarnings=!1,this.props.summary?((e=this.props.summary.map((e,t)=>{let n=e.text;return e.notPaid&&(this.hasWarnings=!0,n=a.createElement(j,null,n," ",a.createElement(S,null,a.createElement(M.a,null)))),a.createElement(I.a,{key:`${this.props.id}-summary-${t}`,title:n,value:e.token.value,converted:e.token.converted,color:e.notPaid?"notPaid":this.colors[e.type],size:"small",border:0===t?"first":"default",isNegative:e.token.isNegative})})).push(a.createElement(I.a,{key:`${this.props.id}-summary-99`,title:a.createElement("b",null,Object(P.b)("total")),value:this.props.total.value,converted:this.props.total.converted,size:"small",border:"last"})),e):null})}get headers(){return[Object(P.b)("rewardsContributeVisited"),Object(P.b)("rewardsContributeAttention"),Object(P.b)("payment")]}get selectTitle(){return a.createElement(l,null,Object(P.b)("braveRewards")," ",a.createElement(r,null,Object(P.b)("walletActivity")))}render(){const{id:e,onClose:t,contributeRows:n,onMonthChange:i,currentMonth:l,openBalance:r,closingBalance:j,months:R,transactionRows:H,paymentDay:W}=this.props;return a.createElement(z.a,{id:e,onClose:t},a.createElement(o,null,a.createElement(c,null,a.createElement(s,null,R?a.createElement(B.a,{text:this.selectTitle},a.createElement(D.a,{value:l,onChange:i},Object.keys(R).map(t=>a.createElement("div",{"data-value":t,key:`${e}-monthly-${t}`},a.createElement(p,null,R[t]))))):null,r&&j?a.createElement(g,null,a.createElement(I.a,{title:Object(P.b)("openBalance"),value:r.value,converted:r.converted,color:"earnings",border:"last"}),a.createElement(k,null,a.createElement(I.a,{title:a.createElement("b",null,Object(P.b)("closeBalance")),value:j.value,converted:j.converted,color:"contribute",border:"last"}))):null),a.createElement(d,null,a.createElement(u,null,a.createElement(m,null,a.createElement(O,null,a.createElement(L.a,null)),a.createElement(h,null,Object(P.b)("print"))),a.createElement(m,null,a.createElement(O,null,a.createElement(F.a,null)),a.createElement(h,null,Object(P.b)("downloadPDF")))),this.getSummaryBox())),this.hasWarnings?a.createElement(b,null,a.createElement(S,null,a.createElement(M.a,null)),a.createElement(x,null,a.createElement("b",null,Object(P.b)("paymentNotMade"))," ",Object(P.b)("paymentWarning"))):null,a.createElement(f,null,a.createElement(C,null,Object(P.b)("transactions")),a.createElement(A.a,{rows:H}),a.createElement(C,null,a.createElement("span",null,Object(P.b)("contributeAllocation")),a.createElement(v,null,Object(P.b)("paymentMonthly",{day:W}))),a.createElement(N.a,{header:this.headers,rows:n,allSites:!0,showRowAmount:!0}),a.createElement(w,null,a.createElement(T,null,a.createElement($.a,null)),a.createElement(E,null,Object(P.b)("braveVerified")))),a.createElement(y,null,a.createElement("b",null,Object(P.b)("pleaseNote"))," ",Object(P.b)("activityNote"),a.createElement("br",null),a.createElement("br",null),Object(P.b)("activityCopy"))))}}},function(e,t,n){"use strict";var a=n(0),i=n(1),o=n(809),l=n.n(o),r=n(810),c=n.n(r);const s=Object(i.default)("div").withConfig({displayName:"StyledWrapper"})`
  overflow-y: scroll;
  height: ${e=>e.isMobile?"calc(100% - 237px)":"auto"};
  padding: ${e=>e.isMobile?"10px 15":0}px;
  font-family: Poppins, sans-serif;
`,d=Object(i.default)("div").withConfig({displayName:"StyledContentWrapper"})`
  display: ${e=>e.isMobile?"block":"flex"};
  justify-content: space-between;
  align-items: stretch;
  align-content: flex-start;
  flex-wrap: nowrap;
  max-width: 1320px;
  margin: 0 auto;
`,p=Object(i.default)("div").withConfig({displayName:"StyledContent"})`
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: calc(100% - 336px);
  background: #e9f0ff;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: space-between;
`,u=Object(i.default)("div").withConfig({displayName:"StyledDonation"})`
  flex-basis: 336px;
  background: #696fdc;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  ${e=>(e=>e?i.css`
    width: 100%;
    bottom: 0;
    left: 0;
    height: 237px;
    position: fixed;
    box-shadow: 0 -2px 8px 0 rgba(12,13,33,0.35);
  `:null)(e.isMobile)}
`,m=Object(i.default)("div").withConfig({displayName:"StyledBanner"})`
  position: relative;
  min-width: ${e=>e.isMobile?"unset":"900px"};
  background: #DBE3F3;
`,h=Object(i.default)("div").withConfig({displayName:"StyledBannerImage"})`
  font-size: ${e=>e.bgImage?0:"38px"};
  font-weight: 600;
  line-height: 0.74;
  color: #d1d1db;
  height: 176px;
  background: ${e=>e.bgImage?`url(${e.bgImage}) no-repeat top center / cover`:`url(${l.a}) no-repeat top left, url(${c.a}) no-repeat top right, #9e9fab`};
`,g=Object(i.default)("button").withConfig({displayName:"StyledClose"})`
  top: 14px;
  right: 17px;
  position: absolute;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  width: 27px;
  height: 27px;
  color: #B8B9C4;
`,f=Object(i.default)("div").withConfig({displayName:"StyledLogoWrapper"})`
  padding-left: ${e=>e.isMobile?20:45}px;
  flex-basis: 217px;
`,b=Object(i.default)("div").withConfig({displayName:"StyledLogoText"})`
  background: inherit;
  -webkit-background-clip: text;
  color: transparent;
  filter: invert(1) grayscale(1) contrast(9);
  font-size: ${e=>e.isMobile?50:80}px;
  font-weight: 600;
  text-align: center;
  letter-spacing: 0;
  line-height: 1;
  text-transform: uppercase;
  user-select: none;
  margin-top: ${e=>e.isMobile?-15:0}px;
`,x=Object(i.default)("div").withConfig({displayName:"StyledLogoBorder"})`
  border: 6px solid #fff;
  border-radius: 50%;
  width: ${e=>e.isMobile?100:160}px;
  height: ${e=>e.isMobile?100:160}px;
  background: ${e=>e.bg||"#DE4D26"};
  padding-top: ${e=>e.padding?"35px":0};
  margin: -66px 0 25px;
  overflow: hidden;
`,y=Object(i.default)("div").withConfig({displayName:"StyledTextWrapper"})`
  ${e=>(e=>e?i.css`
    display: block;
    margin-top: -60px;
  `:i.css`
      flex-grow: 1;
      flex-shrink: 1;
      flex-basis: calc(100% - 217px);
    `)(e.isMobile)}
`,C=Object(i.default)("div").withConfig({displayName:"StyledTitle"})`
  font-size: 28px;
  font-weight: 600;
  line-height: 1;
  color: #4b4c5c;
  margin: ${e=>e.isMobile?25:10}px 0 0;
  padding-left: ${e=>e.isMobile?25:0}px;
`,v=Object(i.default)("div").withConfig({displayName:"StyledText"})`
  font-family: Muli, sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: #686978;
  padding-right: 37px;
  padding-left: ${e=>e.isMobile?25:0}px;
`,w=Object(i.default)("div").withConfig({displayName:"StyledWallet"})`
  font-size: 12px;
  color: #afb2f1;
  text-align: right;
  margin: ${e=>e.isMobile?20:8}px 0 10px;
  padding: 0 ${e=>e.isMobile?20:19}px 0 55px;
`,E=Object(i.default)("span").withConfig({displayName:"StyledTokens"})`
  color: #fff;
`,k=Object(i.default)("span").withConfig({displayName:"StyledOption"})`
  color: rgba(255, 255, 255, 0.65);
`,O=Object(i.default)("div").withConfig({displayName:"StyledCenter"})`
  max-width: 1024px;
  padding: 126px 0 0 238px;
  margin: 0 auto;
  user-select: none;
`,S=Object(i.default)("a").withConfig({displayName:"StyledSocialItem"})`
  font-size: 12px;
  line-height: 2.5;
  letter-spacing: 0.2px;
  color: #9e9fab;
  text-decoration: none;
  display: inline-block;
  margin: 0 8px;
`,j=Object(i.default)("span").withConfig({displayName:"StyledSocialIcon"})`
  vertical-align: middle;
  display: inline-block;
  margin-right: 5px;
  width: 22px;
  height: 22px;
`,T=Object(i.default)("div").withConfig({displayName:"StyledSocialWrapper"})`
  text-align: right;
  padding-right: ${e=>e.isMobile?0:40}px;
  margin-top: ${e=>e.isMobile?5:15}px;
`,N=Object(i.default)("div").withConfig({displayName:"StyledEmptyBox"})`
  width: 100%;
  height: 39px;
`,A=Object(i.default)("div").withConfig({displayName:"StyledLogoImage"})`
  width: 148px;
  height: 148px;
  background: url(${e=>e.bg}) no-repeat;
  background-size: cover;
`,z=Object(i.default)("div").withConfig({displayName:"StyledCheckbox"})`
  width: ${e=>e.isMobile?232:180}px;
  padding-left: ${e=>e.isMobile?40:0}px;
  margin: ${e=>e.isMobile?"15px auto 5px auto":"15px 0 5px"};
`;var B=n(305),D=n(201),M=n(2),L=n(732),F=n(733),$=n(731),I=n(716);n.d(t,"a",function(){return P});class P extends a.PureComponent{constructor(e){super(e),this.getSocial=(e=>{if(!e||0===e.length)return null;const t=this;return e.map(e=>{const n=t.getSocialData(e);return a.createElement(S,{key:`${t.props.id}-social-${e.type}`,href:e.url,target:"_blank"},a.createElement(j,null,n))})}),this.onMonthlyChange=((e,t)=>{this.setState({monthly:t})}),this.onDonate=(e=>{this.props.onDonate&&this.props.onDonate(e,this.state.monthly)}),this.onKeyUp=(e=>{"escape"===e.key.toLowerCase()&&this.props.onClose&&this.props.onClose()}),this.state={monthly:!1}}getLogo(e,t){return e?a.createElement(A,{bg:e}):a.createElement(b,{isMobile:this.props.isMobile},t&&t.substring(0,1)||"")}getSocialData(e){let t=null;switch(e.type){case"twitter":t=a.createElement(L.a,null);break;case"youtube":t=a.createElement(F.a,null);break;case"twitch":t=a.createElement($.a,null)}return t}getTitle(e){return e||Object(M.b)("welcome")}getBannerTitle(e,t,n){const a=e||t;if(!n)return a;switch(n){case"youtube":return`${a} ${Object(M.b)("on")} YouTube`;case"twitter":return`${a} ${Object(M.b)("on")} Twitter`;case"twitch":return`${a} ${Object(M.b)("on")} Twitch`;default:return a}}getText(e){return e||a.createElement(a.Fragment,null,a.createElement("p",null,Object(M.b)("rewardsBannerText1")),a.createElement("p",null,Object(M.b)("rewardsBannerText2")))}render(){const{id:e,bgImage:t,onClose:n,logo:i,social:o,provider:l,children:r,title:c,recurringDonation:b,balance:S,donationAmounts:j,domain:A,onAmountSelection:L,logoBgColor:F,currentAmount:$,name:P,isMobile:R}=this.props;return a.createElement(s,{id:e,isMobile:R,onKeyUp:this.onKeyUp,tabIndex:0},a.createElement(m,{isMobile:R},a.createElement(g,{onClick:n},a.createElement(I.a,null)),a.createElement(h,{bgImage:t},R?null:a.createElement(O,null,this.getBannerTitle(P,A,l))),a.createElement(d,{isMobile:R},a.createElement(p,null,a.createElement(f,{isMobile:R},a.createElement(x,{isMobile:R,padding:!i,bg:F},this.getLogo(i,A))),a.createElement(y,{isMobile:R},a.createElement(T,{isMobile:R},this.getSocial(o)),a.createElement(C,{isMobile:R},this.getTitle(c)),a.createElement(v,{isMobile:R},this.getText(r)))),a.createElement(u,{isMobile:R},a.createElement(w,{isMobile:R},Object(M.b)("walletBalance")," ",a.createElement(E,null,S," BAT")),a.createElement(B.a,{isMobile:R,balance:parseFloat(S),donationAmounts:j,title:Object(M.b)("donationAmount"),onDonate:this.onDonate,actionText:this.state.monthly?Object(M.b)("doMonthly"):Object(M.b)("sendDonation"),onAmountSelection:L,donateType:"big",currentAmount:$},b?a.createElement(N,null):a.createElement(z,{isMobile:R},a.createElement(D.a,{value:{make:this.state.monthly},onChange:this.onMonthlyChange,type:"dark"},a.createElement("div",{"data-key":"make"},a.createElement(k,null,Object(M.b)("makeMonthly"))))))))))}}},function(e,t,n){"use strict";var a=n(0),i=n(2),o=n(1);const l=Object(o.default)("div")`
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
`,r=Object(o.default)("div")`
  height: ${e=>e.show?"100%":"0"};
  opacity: ${e=>e.show?"1":"0"};
  overflow: ${e=>e.show?"unset":"hidden"};
`,c=Object(o.default)("div")`
  width: 100%;
  display: block;
  max-height: 56px;
  padding: ${e=>e.show?"18px 30px 20px 30px":"20px"};
  top: ${e=>e.show?"unset":"12px"};
  position: ${e=>e.show?"static":"absolute"};
  background: ${e=>e.show?"#E9EBFF":"inherit"};
`,s=Object(o.default)("span")`
  color: #A1A8F2;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.35px;
  line-height: 22px;
`,d=Object(o.default)("span")`
  width: 26px;
  height: 26px;
  display: block;
  margin-left: 32px;
  margin-right: -6px;
  margin-top: ${e=>e.show?1:-2}px;
  color: #696FDC;
`,p=Object(o.default)("div").withConfig({displayName:"StyledGrid"})`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`,u=Object(o.default)("div").withConfig({displayName:"StyledColumn"})`
  flex: ${e=>e.size} 0 0;
`;var m=n(13);n.d(t,"a",function(){return h});class h extends a.PureComponent{constructor(e){super(e),this.state={panelOneShown:!0,panelTwoShown:!1},this.togglePanels=this.togglePanels.bind(this)}togglePanels(e){this.setState({panelOneShown:!this.state.panelOneShown,panelTwoShown:!this.state.panelTwoShown}),this.props.onToggle&&this.props.onToggle()}getPanel(e,t=!1){return a.createElement(l,null,t?e:null,a.createElement(c,{show:t,onClick:this.togglePanels},a.createElement(p,null,a.createElement(u,{size:"5"},t?a.createElement(s,null,Object(i.b)("rewardsSummary")):null),a.createElement(u,{size:"1"},a.createElement(d,{show:t},t?a.createElement(m.CaratCircleUpIcon,null):a.createElement(m.CaratCircleDownIcon,null))))),t?null:e)}render(){const{id:e,children:t}=this.props;if(!Array.isArray(t)||null===t[0])return a.createElement(l,{id:e},t);if(!t||2!==t.length)return null;const n=t[0],i=t[1];return a.createElement(l,{id:e},a.createElement(r,{show:this.state.panelOneShown},this.getPanel(n,!0)),a.createElement(r,{show:this.state.panelTwoShown},this.getPanel(i)))}}},function(e,t,n){"use strict";var a=n(0),i=n(2),o=n(1);const l=Object(o.default)("div")`
  display: block;
`,r=Object(o.default)("div")`
  padding: 25px 30px 25px 30px;
`,c=Object(o.default)("span")`
  margin-left: 30px;
  font-weight: 500;
  color: #4B4C5C;
  font-size: 14px;
`,s=Object(o.default)("span")`
  font-weight: 400;
  color: #4B4C5C;
  font-size: 14px;
  letter-spacing: 0;
  margin: 0 0 0 2px;
`,d=Object(o.default)("section")`
  padding: 15px 0px 6px;
`,p=Object(o.default)("section")`
  padding: 5px 0px;
  border-top: 1px solid #DBDFE3;
  border-bottom: 1px solid #DBDFE3;
`,u=Object(o.default)("span")`
  display: inline-block;
  font-size: 14px;
  font-weight: normal;
  letter-spacing: 0;
  line-height: 26px;
  margin-left: 2px;
  color: ${e=>e.theme.color.subtleInteracting};
`,m=Object(o.default)("div")`
  text-align: center;
  padding: 15px 0 0;
  margin: 0 auto;
`,h=Object(o.default)("div")`
  margin-top: 6px;
`,g=Object(o.default)("div")`
  width: 80px;
  margin: 2px 0px 0px;
`,f=Object(o.default)("div").withConfig({displayName:"StyledGrid"})`
  display: flex;
  flex-direction: row;
`,b=Object(o.default)("div").withConfig({displayName:"StyledColumn"})`
  flex: ${e=>e.size} 0 0;
`,x=Object(o.default)("div").withConfig({displayName:"StyleToggleTips"})`
  display: ${e=>e.toggleTips?"flex":"none"};
`;var y=n(95),C=n(75),v=n(24),w=n(1270),E=n(685),k=n(198);n.d(t,"a",function(){return O});class O extends a.PureComponent{publisherInfo(){const e=this.props.publisherName||"";return a.createElement(l,null,a.createElement(k.a,{type:"big",title:e,provider:this.props.platform,src:this.props.publisherImg,verified:this.props.isVerified}))}donationDropDown(){const{donationAmounts:e}=this.props,t=this.props.monthlyAmount||"5.0";return e?a.createElement(g,null,a.createElement(y.a,{floating:!0,showAllContents:!0,value:t,onChange:this.props.onAmountChange},e.map((e,t)=>a.createElement("div",{key:`donationAmount-${t}`,"data-value":e.tokens},a.createElement(v.a,{size:"small",value:e.tokens,converted:e.converted,color:"donation"}))))):null}donationControls(){const{donationAmounts:e}=this.props;return a.createElement(l,null,a.createElement(f,null,a.createElement(b,{size:"5"},a.createElement(u,null,Object(i.b)("includeInAuto"))),a.createElement(b,{size:"1"},a.createElement(h,null,a.createElement(C.a,{size:"small",checked:this.props.includeInAuto,onToggle:this.props.onIncludeInAuto})))),e?a.createElement(f,null,a.createElement(b,{size:"5"},a.createElement(u,null,Object(i.b)("donateMonthly"))),a.createElement(b,{size:"1"},this.donationDropDown())):null)}render(){const{id:e,platform:t,onToggleTips:n,attentionScore:o,tipsEnabled:u,donationAction:h,toggleTips:g}=this.props;return a.createElement(l,null,a.createElement(r,{id:e},this.publisherInfo(),a.createElement(d,null,a.createElement(f,null,a.createElement(b,{size:"5"},a.createElement(s,null,Object(i.b)("rewardsContributeAttentionScore"))),a.createElement(b,{size:"1"},a.createElement(c,null,o,"%")))),a.createElement(p,null,this.donationControls()),a.createElement(m,null,a.createElement(w.a,{type:"tip",onClick:h,text:Object(i.b)("donateNow")}))),a.createElement(x,{toggleTips:g},a.createElement(E.a,{id:"toggle-tips",provider:t,onToggleTips:n,tipsEnabled:u})))}}},,function(e,t,n){n(355),n(840),e.exports=n(841)},,function(e,t,n){"use strict";n.r(t),function(e){var t=n(0),a=n(14),i=n(799),o=n(800),l=(n(3),n(2)),r=n(801),c=n(107),s=n(4);Object(i.setOptions)({name:"Brave UI",url:"https://github.com/brave/brave-ui"}),Object(o.setDefaults)({header:!1}),Object(a.addDecorator)(function(e){return t.createElement(s.a,{theme:c.a},e())}),Object(a.configure)(function(){Object(l.c)(r.a);var e=n(919);e.keys().forEach(function(t){return e(t)})},e)}.call(this,n(31)(e))},,,,,,,,,,,,,,,,function(e,t,n){var a={"./nestedObjectAssign":695,"./nestedObjectAssign.js":695};function i(e){var t=o(e);return n(t)}function o(e){var t=a[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}i.keys=function(){return Object.keys(a)},i.resolve=o,e.exports=i,i.id=857},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){var a={"./components/buttonsIndicators.tsx":920,"./components/dataTables.tsx":931,"./components/formControls.tsx":934,"./components/icons/icons.tsx":935,"./components/layout.tsx":936,"./components/popupsModal.tsx":937,"./components/text.tsx":938,"./components/theme.tsx":939,"./features/newTab/page.tsx":940,"./features/newTab/private/index.tsx":223,"./features/newTab/private/privateWindow.tsx":645,"./features/newTab/private/qwantWindow.tsx":643,"./features/newTab/private/qwantWindowWithTor.tsx":642,"./features/newTab/private/torWindow.tsx":644,"./features/rewards/concepts.tsx":941,"./features/rewards/grant.tsx":947,"./features/rewards/modal.tsx":948,"./features/rewards/other.tsx":949,"./features/rewards/settings/adsBox.tsx":647,"./features/rewards/settings/contributeBox.tsx":648,"./features/rewards/settings/donationsBox.tsx":669,"./features/rewards/settings/grant.tsx":649,"./features/rewards/settings/pageWallet.tsx":650,"./features/rewards/settings/settings.tsx":646,"./features/rewards/settingsMobile/adsBoxMobile.tsx":652,"./features/rewards/settingsMobile/contributeBoxMobile.tsx":653,"./features/rewards/settingsMobile/donationsBoxMobile.tsx":654,"./features/rewards/settingsMobile/grantMobile.tsx":651,"./features/rewards/settingsMobile/mobileWalletPanel.tsx":655,"./features/rewards/settingsMobile/settingsMobile.tsx":670,"./features/rewards/table.tsx":951,"./features/rewards/wallet.tsx":952,"./features/shields/components/blockedReources/blockedResources.tsx":142,"./features/shields/components/blockedReources/dynamicList.tsx":668,"./features/shields/components/blockedReources/staticList.tsx":149,"./features/shields/components/footer.tsx":656,"./features/shields/components/header.tsx":657,"./features/shields/components/interfaceControls.tsx":658,"./features/shields/components/privacyControls.tsx":671,"./features/shields/components/securityControls.tsx":953,"./features/shields/index.tsx":343,"./features/shields/story.tsx":954,"./features/sync/disabledContent.tsx":659,"./features/sync/enabledContent.tsx":660,"./features/sync/modals.tsx":957,"./features/sync/modals/addNewChainCameraOption.tsx":294,"./features/sync/modals/addNewChainNoCamera.tsx":295,"./features/sync/modals/deviceType.tsx":195,"./features/sync/modals/enterSyncCode.tsx":296,"./features/sync/modals/removeMainDevice.tsx":298,"./features/sync/modals/removeOtherDevice.tsx":297,"./features/sync/modals/resetSync.tsx":300,"./features/sync/modals/scanCode.tsx":196,"./features/sync/modals/viewSyncCode.tsx":299,"./features/sync/page.tsx":958,"./features/sync/page/index.tsx":345,"./features/welcome/page/index.tsx":672,"./features/welcome/page/screens/footerBox.tsx":673,"./features/welcome/page/screens/importBox.tsx":662,"./features/welcome/page/screens/rewardsBox.tsx":666,"./features/welcome/page/screens/searchBox.tsx":663,"./features/welcome/page/screens/shieldsBox.tsx":665,"./features/welcome/page/screens/themeBox.tsx":664,"./features/welcome/page/screens/welcomeBox.tsx":661,"./features/welcome/story.tsx":970,"./old/buttons.story.tsx":971,"./old/fieldsAndLabels.story.tsx":972,"./old/selectors.story.tsx":973,"./old/typographyTextAndLinks.story.tsx":974,"./old/views.story.tsx":975,"./storyUtils.tsx":667};function i(e){var t=o(e);return n(t)}function o(e){var t=a[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}i.keys=function(){return Object.keys(a)},i.resolve=o,e.exports=i,i.id=919},function(e,t,n){"use strict";n.r(t),function(e){var t=n(0),a=n(14),i=n(339),o=n.n(i),l=n(10),r=n(4),c=n(301);const s=Object(r.c)(l.a).withConfig({displayName:"Button"})`
  margin: 10px;
`;s.displayName=l.a.displayName;const d=r.c.div.withConfig({displayName:"ComponentTypes"})`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`,p={image:t.createElement(c.a,null)},u={showSource:!1,showPropTables:!1,allowPropTablesToggling:!1};Object(a.setAddon)(o.a),Object(a.storiesOf)("Components",e).addWithChapters("Button",{subtitle:"Use when requiring the user to take an action. Different types of buttons setup different user expectations about the button action...",chapters:[{title:"A Button",info:"_You can use the knobs to customize this button_",sections:[{sectionFn:()=>t.createElement(s,{text:"A Button"}),options:{showSource:!1}}]},{title:"Variations",info:"Different styles of button",sections:[{title:"Levels",info:"Use different levels to create a _hierarchy_ of importance",options:u,sectionFn:()=>t.createElement(d,null,t.createElement(s,{level:"primary",text:"Primary"}),t.createElement(s,{level:"secondary",text:"Secondary"}),t.createElement(s,{level:"tertiary",text:"Tertiary"}))},{title:"Types",info:"Let the user know what the effect of the interaction will be",options:u,sectionFn:()=>t.createElement(t.Fragment,null,t.createElement(d,null,t.createElement(s,{level:"primary",type:"default",text:"Default"}),t.createElement(s,{level:"primary",type:"accent",text:"Accent"}),t.createElement(s,{level:"primary",type:"warn",text:"Warn"}),t.createElement(s,{level:"primary",type:"subtle",text:"Subtle"}),t.createElement(s,{level:"primary",type:"accent",text:"Disabled",disabled:!0})),t.createElement(d,null,t.createElement(s,{level:"secondary",type:"default",text:"Default"}),t.createElement(s,{level:"secondary",type:"accent",text:"Accent"}),t.createElement(s,{level:"secondary",type:"warn",text:"Warn"}),t.createElement(s,{level:"secondary",type:"subtle",text:"Subtle"}),t.createElement(s,{level:"secondary",type:"accent",text:"Disabled",disabled:!0})),t.createElement(d,null,t.createElement(s,{level:"tertiary",type:"default",text:"Default"}),t.createElement(s,{level:"tertiary",type:"accent",text:"Accent"}),t.createElement(s,{level:"tertiary",type:"warn",text:"Warn"}),t.createElement(s,{level:"tertiary",type:"subtle",text:"Subtle"}),t.createElement(s,{level:"tertiary",type:"accent",text:"Disabled",disabled:!0})))},{title:"Accent Brands",info:"Optional accents",options:u,sectionFn:()=>t.createElement(d,null,t.createElement(s,{level:"primary",type:"accent",text:"Brave"}),t.createElement(s,{level:"primary",type:"accent",brand:"rewards",text:"Rewards"}))},{title:"Sizes",info:"Use size to match the density of information",options:u,sectionFn:()=>t.createElement(t.Fragment,null,t.createElement(d,null,t.createElement(s,{size:"small",level:"primary",type:"default",text:"Small"}),t.createElement(s,{size:"medium",level:"primary",type:"accent",text:"Medium"}),t.createElement(s,{size:"large",level:"primary",type:"warn",text:"Large"})),t.createElement(s,{size:"call-to-action",level:"primary",type:"subtle",text:"Call to Action"}),t.createElement(d,null,t.createElement(s,{size:"small",level:"secondary",type:"default",text:"Small"}),t.createElement(s,{size:"medium",level:"secondary",type:"accent",text:"Medium"}),t.createElement(s,{size:"large",level:"secondary",type:"warn",text:"Large"})),t.createElement(s,{size:"call-to-action",level:"secondary",type:"subtle",text:"Call to Action"}),t.createElement(d,null,t.createElement(s,{size:"small",level:"tertiary",type:"default",text:"Small"}),t.createElement(s,{size:"medium",level:"tertiary",type:"accent",text:"Medium"}),t.createElement(s,{size:"large",level:"tertiary",type:"warn",text:"Large"})),t.createElement(s,{size:"call-to-action",level:"tertiary",type:"subtle",text:"Call to Action"}))}]},{title:"Icons",info:"Each button can have a single icon",sections:[{title:"Before Text",options:u,sectionFn:()=>t.createElement(d,null,t.createElement(s,{icon:Object.assign({},p,{position:"before"}),size:"small",level:"primary",type:"default",text:"Small"}),t.createElement(s,{icon:Object.assign({},p,{position:"before"}),size:"medium",level:"primary",type:"accent",text:"Medium"}),t.createElement(s,{icon:Object.assign({},p,{position:"before"}),size:"large",level:"primary",type:"warn",text:"Large"}))},{title:"After Text",options:u,sectionFn:()=>t.createElement(d,null,t.createElement(s,{icon:Object.assign({},p,{position:"after"}),size:"small",level:"secondary",type:"default",text:"Small"}),t.createElement(s,{icon:Object.assign({},p,{position:"after"}),size:"medium",level:"secondary",type:"accent",text:"Medium"}),t.createElement(s,{icon:Object.assign({},p,{position:"after"}),size:"large",level:"secondary",type:"warn",text:"Large"}))}]}]})}.call(this,n(31)(e))},,,,,,,,,,,function(e,t,n){"use strict";n.r(t),function(e){var t=n(14),a=n(3),i=n(28),o=n.n(i),l=n(0),r=n(115);Object(t.storiesOf)("Components/Data Tables",e).addDecorator(a.withKnobs).addDecorator(o.a).add("Table",()=>{const e={"text-align":"right","padding-left":"9px"},t=[{content:[{content:"Baker"},{content:"40%",customStyle:e},{content:"4",customStyle:e}]},{content:[{content:"duckduckgo.com"},{content:"20%",customStyle:e},{content:"2",customStyle:e}]}];return l.createElement("div",{style:{width:"595px"}},l.createElement(r.a,{header:Object(a.object)("Header",[{content:"Site visited"},{content:"Attention",customStyle:{"text-align":"right"}},{content:"Tokens",customStyle:{"text-align":"right"}}]),rows:Object(a.object)("Rows",t)},"404: Publishers not found :)"))})}.call(this,n(31)(e))},,,function(e,t,n){"use strict";n.r(t),function(e){var t=n(14),a=n(3),i=n(0),o=n(22),l=n(28),r=n.n(l),c=n(24),s=n(53),d=n(75),p=n(95),u=n(201),m=n(1263),h=n(1260),g=n(143),f=n(682),b=n(301);Object(t.storiesOf)("Components/Form controls",e).addDecorator(a.withKnobs).addDecorator(r.a).add("Wrapper",()=>i.createElement(s.a,{text:Object(a.text)("Label","Control label"),disabled:Object(a.boolean)("Disabled?",!1)},"Content")).add("Toggle",Object(o.withState)({checked:!1},e=>{return i.createElement(d.a,{size:Object(a.select)("Size",{small:"small",large:"large"},"large"),checked:e.state.checked,type:Object(a.select)("Type",{dark:"dark",light:"light"},"dark"),disabled:Object(a.boolean)("Disabled?",!1),onToggle:()=>{e.set({checked:!e.state.checked})}})})).add("Select",()=>i.createElement(i.Fragment,null,i.createElement("div",{style:{width:"310px",background:"#fff",padding:"30px"}},i.createElement(s.a,{text:Object(a.text)("Title","Limit Sites to"),type:"light",disabled:Object(a.boolean)("Disabled",!1)},i.createElement(p.a,{type:"light",title:"Limit Sites to",disabled:Object(a.boolean)("Disabled",!1),floating:Object(a.boolean)("Floating",!1)},i.createElement("div",{"data-value":"0"},"No Limit"),i.createElement("div",{"data-value":"10"},"Pay Only Top 10"),i.createElement("div",{"data-value":"50"},"Pay Top 50"),i.createElement("div",{"data-value":"100000"},"Really long limit that I know of 100000")))),i.createElement("div",{style:{width:"310px",background:"#4B4C5C",padding:"30px"}},i.createElement(s.a,{text:Object(a.text)("Title","Limit Sites to"),type:"dark",disabled:Object(a.boolean)("Disabled",!1)},i.createElement(p.a,{type:"dark",title:"Limit Sites to",disabled:Object(a.boolean)("Disabled",!1),floating:Object(a.boolean)("Floating",!1)},i.createElement("div",{"data-value":"0"},"No Limit"),i.createElement("div",{"data-value":"10"},"Pay Only Top 10"),i.createElement("div",{"data-value":"50"},"Pay Top 50"),i.createElement("div",{"data-value":"100000"},"Really long limit that I know of 100000")))),i.createElement("div",{style:{width:"310px",background:"#fff",padding:"30px"}},i.createElement(s.a,{text:Object(a.text)("Title","Monthly Budget"),type:"light",disabled:Object(a.boolean)("Disabled",!1)},i.createElement(p.a,{type:"light",title:"Monthly Budget",disabled:Object(a.boolean)("Disabled",!1),floating:Object(a.boolean)("Floating",!1)},i.createElement("div",{"data-value":"5"},i.createElement(c.a,{size:"mini",value:"5","data-value":"5",color:"donation"})),i.createElement("div",{"data-value":"10"},i.createElement(c.a,{size:"mini",value:"10","data-value":"10",color:"donation"})),i.createElement("div",{"data-value":"20"},i.createElement(c.a,{size:"mini",value:"20","data-value":"20",color:"donation"}))))))).add("Checkbox",Object(o.withState)({yt:!0,tw:!1,inst:!1},e=>{const t=(t,n,a,i)=>{e.set(i)};return i.createElement(i.Fragment,null,i.createElement("div",{style:{width:"310px",background:"#fff",padding:"30px"}},i.createElement(s.a,{text:Object(a.text)("Title","Enable ability to give tips on ‘Like’ posts"),type:"light",disabled:Object(a.boolean)("Disabled",!1)},i.createElement(u.a,{value:Object(a.object)("Checkbox values",e.state),size:Object(a.select)("Size",{small:"small",big:"big"},"small"),multiple:Object(a.boolean)("Is multiple?",!1),disabled:Object(a.boolean)("Disabled",!1),onChange:t,type:"light"},i.createElement("div",{"data-key":"yt"},"YouTube"),i.createElement("div",{"data-key":"tw"},"Twitter"),i.createElement("div",{"data-key":"inst"},"Instagram Instagram Instagram Instagram Instagram")))),i.createElement("div",{style:{width:"310px",background:"#4B4C5C",padding:"30px"}},i.createElement(s.a,{text:Object(a.text)("Title","Enable ability to give tips on ‘Like’ posts"),type:"dark",disabled:Object(a.boolean)("Disabled",!1)},i.createElement(u.a,{value:Object(a.object)("Checkbox values",e.state),size:Object(a.select)("Size",{small:"small",big:"big"},"small"),multiple:Object(a.boolean)("Is multiple?",!1),disabled:Object(a.boolean)("Disabled",!1),onChange:t,type:"dark"},i.createElement("div",{"data-key":"yt"},"YouTube"),i.createElement("div",{"data-key":"tw"},"Twitter"),i.createElement("div",{"data-key":"inst"},"Instagram Instagram Instagram Instagram Instagram")))))})).add("Radio",Object(o.withState)({5:!0,10:!1,15:!1,20:!1},e=>{return i.createElement(i.Fragment,null,i.createElement("div",{style:{width:"295px",background:"#fff",padding:"30px 60px"}},i.createElement(s.a,{text:Object(a.text)("Title","Monthly Budget"),type:"light",disabled:Object(a.boolean)("Disabled",!1)},i.createElement(m.a,{value:Object(a.object)("Radio values",e.state),size:Object(a.select)("Size",{small:"small",big:"big"},"small"),disabled:Object(a.boolean)("Disabled",!1),onChange:(t,n,a,i)=>{e.set(i)}},i.createElement("div",{"data-value":"5"},i.createElement(c.a,{size:"mini",value:"5","data-value":"5",color:"donation"})),i.createElement("div",{"data-value":"10"},i.createElement(c.a,{size:"mini",value:"10","data-value":"10",color:"donation"})),i.createElement("div",{"data-value":"15"},i.createElement(c.a,{size:"mini",value:"15","data-value":"15",color:"donation"})),i.createElement("div",{"data-value":"20"},i.createElement(c.a,{size:"mini",value:"20","data-value":"20",color:"donation"}))))))})).add("TextArea",Object(o.withState)({value:""},e=>{return i.createElement("div",{style:{width:"250px"}},i.createElement(s.a,{text:Object(a.text)("Title","Recovery keys"),disabled:Object(a.boolean)("Disabled",!1)},i.createElement(h.a,{value:Object(a.text)("Value",e.state.value),disabled:Object(a.boolean)("Disabled",!1),onChange:t=>{e.set({value:t.target.value})}})))})).add("TextAreaClipboard",Object(o.withState)({value:""},e=>{return i.createElement("div",{style:{width:"500px"}},i.createElement(s.a,{text:Object(a.text)("Title","Recovery keys"),disabled:Object(a.boolean)("Disabled",!1)},i.createElement(g.a,{copiedString:"Copied!",wordCountString:"Word Count:",value:Object(a.text)("Value",e.state.value),disabled:Object(a.boolean)("Disabled",!1),onChange:t=>{e.set({value:t.target.value})}})))})).add("Input",Object(o.withState)({value:""},e=>{const t=Object(a.select)("Type",{text:"text",email:"email",search:"search",password:"password"},"text");return i.createElement(f.a,{type:t,icon:i.createElement(b.a,null),value:Object(a.text)("Value",e.state.value),disabled:Object(a.boolean)("Disabled",!1),onChange:t=>{e.set({value:t.target.value})}})}))}.call(this,n(31)(e))},function(e,t,n){"use strict";n.r(t),function(e){var t=n(14),a=n(0),i=n(13),o=n(306);const l=Object(t.storiesOf)("Components/Icons",e),r=[],c=i;for(const e in i){const t=c[e];r.push({componentName:e,Component:t})}l.add("All Icons",()=>a.createElement(o.a,null,r.map(({componentName:e,Component:t})=>a.createElement(o.b,{title:e},a.createElement(o.c,null,a.createElement(t,null)),a.createElement(o.d,null,e)))))}.call(this,n(31)(e))},function(e,t,n){"use strict";n.r(t),function(e){var t=n(14),a=n(3),i=n(28),o=n.n(i),l=n(0),r=n(22),c=n(1261),s=n(94),d=n(153);Object(t.storiesOf)("Components/Layout",e).addDecorator(a.withKnobs).addDecorator(o.a).add("Tabs",Object(r.withState)({tabId:"cont1"},e=>{return l.createElement("div",{style:{maxWidth:"900px",background:"#fff",padding:"30px"}},l.createElement(c.a,{activeTabId:e.state.tabId,onChange:t=>{e.set({tabId:t})}},l.createElement("div",{"data-key":"cont1","data-title":"Content 1"},"1Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor incidunt laudantium magnam maiores molestias numquam quae quas tempore. Accusamus animi aperiam aspernatur autem commodi cumque cupiditate dignissimos dolore eius exercitationem fuga modi molestiae natus nemo nesciunt nihil nisi nobis obcaecati quasi quibusdam, sunt tempora temporibus ut veniam vitae! Exercitationem, possimus?"),l.createElement("div",{"data-key":"cont2","data-title":"Content 2"},"2Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at delectus dolores eaque eius eligendi error, et eveniet ex facere facilis fugit harum id in nesciunt non odit officia pariatur placeat porro, quam quisquam quos recusandae saepe totam. Ipsa nam nulla obcaecati perspiciatis saepe ullam. Aliquid amet architecto consequuntur dolor dolorem doloribus, eaque explicabo illum nam numquam quia quis voluptatem."),l.createElement("div",{"data-key":"cont3","data-title":"Content 3"},"3Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut distinctio dolore eaque eveniet fuga illo molestiae natus, officiis qui quia sit soluta sunt veniam. Dolorum eveniet illum quibusdam ratione temporibus tenetur voluptatum. Ab alias assumenda earum expedita odio tempore vitae?")))})).add("Grid List",()=>{const e={};Array.from({length:12},(e,t)=>t+1).forEach(t=>Object.assign(e,{[t.toString()]:t}));const t=Object(a.select)("Column #1 size",e,3),n=Object(a.select)("Column #2 size",e,9);return l.createElement("div",null,l.createElement("h2",null,'Playground! (see "knobs" for usage)'),l.createElement(s.b,{customStyle:{backgroundColor:Object(a.text)("Grid Background","gray"),maxWidth:Object(a.text)("Max Grid Width","100%"),padding:Object(a.text)("Own Grid Gutter (padding)","15px"),gridGap:Object(a.text)("Grid Gutter (for columns)","15px")}},l.createElement(s.a,{size:t,customStyle:{backgroundColor:Object(a.text)("Column #1 Background","darkgray"),justifyContent:Object(a.text)("Column #1 Align (flexbox-based)","flex-end"),alignItems:Object(a.text)("Column #1 Vertical Align (flexbox-based)","flex-end")}},`${t}/12`),l.createElement(s.a,{size:n,customStyle:{backgroundColor:Object(a.text)("Column #2 Background","darkgray"),justifyContent:Object(a.text)("Column #1 Align (flexbox-based)","flex-start"),alignItems:Object(a.text)("Column #1 Vertical Align (flexbox-based)","flex-start")}},`${n}/12`)))}).add("Card",()=>l.createElement(d.a,null,l.createElement("p",null,"Hello I'm a card!")))}.call(this,n(31)(e))},function(e,t,n){"use strict";n.r(t),function(e){var t=n(14),a=n(3),i=n(28),o=n.n(i),l=n(0),r=n(22),c=n(42),s=n(304);Object(t.storiesOf)("Components/Popups and Modals",e).addDecorator(a.withKnobs).addDecorator(o.a).add("Dialog",Object(r.withState)({visible:!0},e=>{return l.createElement(l.Fragment,null,Object(a.boolean)("Visible",e.state.visible)?l.createElement(c.a,{id:"modal",outsideClose:Object(a.boolean)("Close with click outside",!1),onClose:()=>{e.set({visible:!e.state.visible})}},"Content"):null)})).add("AlertBox",()=>l.createElement(s.a,{okString:"Ok",cancelString:"Cancel"},"Content here"))}.call(this,n(31)(e))},function(e,t,n){"use strict";n.r(t),function(e){var t=n(14),a=n(3),i=n(28),o=n.n(i),l=n(0),r=n(48);Object(t.storiesOf)("Components/Text",e).addDecorator(a.withKnobs).addDecorator(o.a).add("Heading playground",()=>{return l.createElement(r.a,{level:Object(a.number)("Level",1,{range:!0,min:1,max:6,step:1})},Object(a.text)("Text","Heading on fire"))}).add("Heading Demonstration",()=>l.createElement(l.Fragment,null,l.createElement(r.a,{level:1},"Heading level 1"),l.createElement(r.a,{level:2},"Heading level 2"),l.createElement(r.a,{level:3},"Heading level 3"),l.createElement(r.a,{level:4},"Heading level 4"),l.createElement(r.a,{level:5},"Heading level 5"),l.createElement(r.a,{level:6},"Heading level 6")))}.call(this,n(31)(e))},function(e,t,n){"use strict";n.r(t),function(e){var t=n(0),a=n(14),i=n(339),o=n.n(i),l=n(4),r=n(12),c=n(107);const s=l.c.div`
  width: ${e=>e.individual?"25%":"10%"};
  min-height: 150px;
  margin: 5px;
  border: 4px dotted #888;
  background: white;
  padding: 2px;
  display: flex;
  flex-direction: column;
`,d=l.c.div.withConfig({displayName:"PaletteColor"})`
  flex-grow: 1;
  flex-basis: 0;
  background-color: ${e=>e.color};
`,p=l.c.div.withConfig({displayName:"PaletteItemName"})`
  font: 12px muli;
  font-weight: 500;
  color: #222;
  text-align: center;
`,u=({color:e,name:n,individual:a})=>t.createElement(s,{individual:a},t.createElement(d,{color:e}),t.createElement(p,null,n)),m=[];for(const e in r.a)m.push({name:e,color:r.a[e]});const h=[];for(const e in c.a.color)h.push({name:e,color:c.a.color[e]});const g=l.c.div`
  display: flex;
  flex-direction: ${e=>e.individual?"column":"row"};
  flex-wrap: wrap;
  align-items: flex-start;
`,f={showSource:!1,showPropTables:!1,allowPropTablesToggling:!1};Object(a.setAddon)(o.a),Object(a.storiesOf)("Theme",e).addWithChapters("Palette",{subtitle:"Define colors by color name and shade, not by purpose",chapters:[{title:"All colors",info:"_Avoid using directly. Instead use theme variables which link to these colors_",sections:[{sectionFn:()=>t.createElement(g,null,m.map(({color:e,name:n})=>t.createElement(u,{key:n,color:e,name:n}))),sectionOptionsNoProps:f}]}]}).addWithChapters("Brave Default",{subtitle:"Define colors, fonts, and sizes by purpose. Keys should not describe the value, but what they are to be used for.",chapters:[{title:"Color variables",sections:[{sectionFn:()=>t.createElement(g,{individual:!0},h.map(({color:e,name:n})=>t.createElement(u,{individual:!0,key:n,color:e,name:n}))),sectionOptionsNoProps:f}]}]})}.call(this,n(31)(e))},function(e,t,n){"use strict";n.r(t),function(e){var t=n(0),a=n(14),i=n(3),o=n(223);Object(a.storiesOf)("Feature Components/New Tab/Private",e).addDecorator(i.withKnobs).add("Private Window",()=>t.createElement(o.default,{isQwant:Object(i.boolean)("Is Qwant?",!1),isTor:Object(i.boolean)("Enable Tor?",!1)})).add("Qwant Window",()=>t.createElement(o.default,{isQwant:Object(i.boolean)("Is Qwant?",!0),isTor:Object(i.boolean)("Enable Tor?",!1)})).add("Qwant Tor",()=>t.createElement(o.default,{isQwant:Object(i.boolean)("Is Qwant?",!0),isTor:Object(i.boolean)("Enable Tor?",!0)})).add("Tor Window",()=>t.createElement(o.default,{isQwant:Object(i.boolean)("Is Qwant?",!1),isTor:Object(i.boolean)("Enable Tor?",!0)}))}.call(this,n(31)(e))},function(e,t,n){"use strict";n.r(t),function(e){var t=n(0),a=n(22),i=n(14),o=n(3),l=n(646),r=n(670),c=n(835),s=n(1268),d=n(689),p=n(352),u=n(836),m=n(837),h=n(353),g=n(222),f=n(342),b=n(679);const x=n(112),y=n(942),C=n(943),v=n(944),w=n(738),E=[{tokens:"1.0",converted:"0.30",selected:!1},{tokens:"5.0",converted:"1.50",selected:!1},{tokens:"10.0",converted:"3.00",selected:!1}],k=()=>{console.log(k)};Object(i.storiesOf)("Feature Components/Rewards/Concepts/Desktop",e).addDecorator(o.withKnobs).add("Settings Page",()=>t.createElement(l.default,null)).add("Welcome Page",()=>t.createElement(b.a,{id:"welcome-page",optInAction:k})).add("Site Banner",Object(a.withState)({donationAmounts:E,currentAmount:5,showBanner:!0},e=>{return t.createElement("div",{style:{background:`url(${v}) no-repeat top center / cover`,width:"100%",height:"100vh"}},t.createElement("button",{onClick:()=>{e.set({showBanner:!0})}},"Show banner"),e.state.showBanner?t.createElement("div",{style:{position:"fixed",top:0,left:0,height:"100vh",width:"100%",backgroundColor:"rgba(12,13,33,0.85)"}},t.createElement(c.a,{domain:Object(o.text)("Domain","duckduckgo.com"),name:Object(o.text)("Name","duckduckgo.com"),title:Object(o.text)("Title",""),recurringDonation:Object(o.boolean)("Current recurring donation",!0),balance:Object(o.text)("Balance ","5.0"),bgImage:Object(o.boolean)("Show bg image",!1)?y:null,logo:Object(o.boolean)("Show logo",!1)?C:null,donationAmounts:Object(o.object)("Donations",e.state.donationAmounts),logoBgColor:Object(o.text)("Logo bg color",""),onDonate:()=>{console.log("onDonate")},onAmountSelection:t=>{e.set({currentAmount:t})},currentAmount:e.state.currentAmount,onClose:()=>{e.set({showBanner:!1})},provider:Object(o.select)("Provider",{youtube:"youtube",twitter:"twitter",twitch:"twitch"},"youtube"),social:[{type:"twitter",url:"https://twitter.com/DuckDuckGo"},{type:"youtube",url:"https://www.youtube.com/channel/UCm_TyecHNHucwF_p4XpeFkQ"},{type:"twitch",url:"https://www.twitch.tv/duckduckgo"}]})):null)})).add("Tip",Object(a.withState)({donationAmounts:E,currentAmount:5,allow:!1},e=>{return t.createElement("div",{style:{background:`url(${w}) no-repeat top center`,width:"986px",height:"912px",margin:"0 auto",position:"relative"}},t.createElement("div",{style:{position:"absolute",bottom:"185px",left:"330px"}},t.createElement(s.a,{donationAmounts:Object(o.object)("Donations",e.state.donationAmounts),title:Object(o.text)("Title","Bart Baker"),allow:Object(o.boolean)("Allow tips",e.state.allow),provider:Object(o.text)("Provider","YouTube"),balance:Object(o.text)("Balance","5"),onDonate:()=>{console.log("onDonate")},onClose:()=>{console.log("onClose")},onAllow:t=>{e.set({allow:t})},onAmountSelection:t=>{e.set({currentAmount:t})},currentAmount:e.state.currentAmount})))})).add("Pre Opt-In",Object(a.withState)({creatingOne:!1,creatingTwo:!1},e=>{return t.createElement("div",{style:{background:`url(${w}) no-repeat top center`,width:"986px",height:"912px",margin:"0 auto",position:"relative"}},t.createElement("div",{style:{position:"absolute",top:"40px",left:"120px",width:"373px",minHeight:"446px",borderRadius:"8px",overflow:"hidden"}},t.createElement(d.a,{variant:"one",creating:e.state.creatingOne,optInAction:()=>{e.set({creatingOne:!0})},moreLink:k,optInErrorAction:k,error:Object(o.boolean)("Wallet Creation Error",!1)})),t.createElement("div",{style:{position:"absolute",top:"40px",left:"565px",width:"373px",minHeight:"446px",borderRadius:"8px",overflow:"hidden"}},t.createElement(d.a,{variant:"two",optInAction:()=>{e.set({creatingTwo:!0})},creating:e.state.creatingTwo,optInErrorAction:k,error:Object(o.boolean)("Wallet Creation Error",!1)})))})).add("Wallet Panel",Object(a.withState)({showSummary:!1,tipsEnabled:!0,includeInAuto:!0},e=>{const n=()=>{console.log("do nothing")},a=()=>{console.log(a)};return t.createElement("div",{style:{background:`url(${w}) no-repeat top center`,width:"986px",height:"100vh",margin:"0 auto",position:"relative"}},t.createElement("div",{style:{position:"absolute",top:"50px",left:"560px",borderRadius:"8px",overflow:"hidden"}},t.createElement(p.a,{compact:!0,contentPadding:!1,notification:{id:"001",type:"ads",date:"July 7",onCloseNotification:a,text:t.createElement("span",null,"You've earned 10 BAT from Brave Ads")},gradientTop:(()=>e.state.showSummary?"233,235,255":"249,251,252")(),balance:Object(o.text)("Tokens","30.0"),converted:Object(o.text)("Converted","15.50 USD"),actions:[{name:"Add funds",action:n,icon:t.createElement(g.a,null)},{name:"Settings",action:n,icon:t.createElement(f.a,null)}],showCopy:Object(o.boolean)("Show Uphold",!1),showSecActions:!1,connectedWallet:Object(o.boolean)("Connected wallet",!1),grants:Object(o.object)("Grants",[{tokens:"8.0",expireDate:"7/15/2018"},{tokens:"10.0",expireDate:"9/10/2018"},{tokens:"10.0",expireDate:"10/10/2018"}])},t.createElement(u.a,{id:"panel-slider",onToggle:()=>{e.set({showSummary:!e.state.showSummary})}},t.createElement(m.a,{id:"wallet-panel",toggleTips:!0,platform:"youtube",publisherImg:x,publisherName:"Bart Baker",monthlyAmount:"5.0",isVerified:!0,tipsEnabled:Object(o.boolean)("Tips enabled",e.state.tipsEnabled),includeInAuto:Object(o.boolean)("Tips enabled",e.state.includeInAuto),attentionScore:"17",donationAmounts:[{tokens:"0.0",converted:"0.00"},{tokens:"1.0",converted:"0.50"},{tokens:"5.0",converted:"2.50"},{tokens:"10.0",converted:"5.00"}],onToggleTips:()=>{e.set({tipsEnabled:!e.state.tipsEnabled})},donationAction:n,onAmountChange:n,onIncludeInAuto:()=>{e.set({includeInAuto:!e.state.includeInAuto})}}),t.createElement(h.a,{compact:!0,report:{grant:Object(o.object)("Grant",{tokens:"10.0",converted:"0.25"}),ads:Object(o.object)("Ads",{tokens:"10.0",converted:"0.25"}),contribute:Object(o.object)("Contribute",{tokens:"10.0",converted:"0.25"}),donation:Object(o.object)("Donation",{tokens:"2.0",converted:"0.25"}),tips:Object(o.object)("Tips",{tokens:"19.0",converted:"5.25"})}})))))})),Object(i.storiesOf)("Feature Components/Rewards/Concepts/Mobile",e).add("Welcome Page",()=>t.createElement(b.a,{id:"welcome-page",optInAction:k})).add("Settings",()=>t.createElement(r.default,null)).add("Site Banner",Object(a.withState)({donationAmounts:E,currentAmount:5,showBanner:!0},e=>{return t.createElement("div",{style:{background:`url(${v}) no-repeat top center / cover`,width:"100%",height:"100vh"}},t.createElement("button",{onClick:()=>{e.set({showBanner:!0})}},"Show banner"),e.state.showBanner?t.createElement("div",{style:{position:"fixed",top:0,left:0,height:"100vh",width:"100%",backgroundColor:"rgba(12,13,33,0.85)"}},t.createElement(c.a,{isMobile:!0,domain:Object(o.text)("Domain","duckduckgo.com"),title:Object(o.text)("Title",""),recurringDonation:!1,balance:Object(o.text)("Balance ","5.0"),bgImage:Object(o.boolean)("Show bg image",!1)?y:null,logo:Object(o.boolean)("Show logo",!1)?C:null,donationAmounts:Object(o.object)("Donations",e.state.donationAmounts),logoBgColor:Object(o.text)("Logo bg color",""),onDonate:()=>{console.log("onDonate")},onAmountSelection:t=>{e.set({currentAmount:t})},currentAmount:e.state.currentAmount,onClose:()=>{e.set({showBanner:!1})},social:[{type:"twitter",url:"https://twitter.com/DuckDuckGo"},{type:"youtube",url:"https://www.youtube.com/channel/UCm_TyecHNHucwF_p4XpeFkQ"},{type:"twitch",url:"https://www.twitch.tv/duckduckgo"}]})):null)}))}.call(this,n(31)(e))},function(e,t,n){e.exports=n.p+"static/media/bg_siteBanner.83f72be5.jpg"},function(e,t,n){e.exports=n.p+"static/media/ddgo_siteBanner.e9f3f6bf.svg"},function(e,t,n){e.exports=n.p+"static/media/ddgo_site.a53d14ea.png"},function(e,t,n){e.exports=n.p+"static/media/rewards_ads.f1c7b58c.svg"},function(e,t,n){e.exports=n.p+"static/media/rewards_contribute.f1e8e14d.svg"},function(e,t,n){"use strict";n.r(t),function(e){var t=n(0),a=n(14),i=n(3),o=n(28),l=n.n(o),r=n(224),c=n(824),s=n(307),d=n(681),p=n(349);const u=n(739),m=()=>{console.log(m)};Object(a.storiesOf)("Feature Components/Rewards/Grant",e).addDecorator(i.withKnobs).addDecorator(l.a).add("Grant claim",()=>t.createElement(r.a,{onClaim:m})).add("Grant wrapper",()=>t.createElement("div",{style:{width:"373px",height:"715px",position:"relative"}},t.createElement(s.a,{onClose:m,title:Object(i.text)("Title","Good news!"),text:Object(i.text)("Text","Free 30 BAT have been awarded to you so you can support more publishers.")},"Content here"))).add("Grant captcha",()=>t.createElement("div",{style:{width:"373px",height:"715px",position:"relative"}},t.createElement(d.a,{onSolution:m,dropBgImage:u,hint:"blue"}))).add("Grant complete",()=>t.createElement("div",{style:{width:"373px",height:"715px",position:"relative"}},t.createElement(p.a,{onClose:m,amount:"30.0",date:"8/15/2018"}))).add("Grant Error",()=>t.createElement("div",{style:{width:"373px",height:"250px",position:"relative",background:"#fff"}},t.createElement(c.a,{onButtonClick:m,buttonText:"ok",text:"The period for claiming this grant has ended"})))}.call(this,n(31)(e))},function(e,t,n){"use strict";n.r(t),function(e){var t=n(0),a=n(22),i=n(14),o=n(3),l=n(833),r=n(831),c=n(834),s=n(1265),d=n(347);const p=n(112),u=n(274),m=n(275),h=n(273),g=n(185),f=n(326),b=()=>{console.log("nothing")};Object(i.storiesOf)("Feature Components/Rewards/Modal",e).addDecorator(o.withKnobs).add("Backup/Restore",Object(a.withState)({activeTabId:0},e=>{return t.createElement("div",{style:{maxWidth:"900px",background:"#fff",padding:"30px"}},t.createElement(l.a,{funds:"55 BAT",activeTabId:e.state.activeTabId,backupKey:"crouch  hint  glow  recall  round  angry  weasel  luggage save  hood  census  near  still   power  vague  balcony camp  law  now  certain  wagon  affair  butter  choice ",error:Object(o.text)("Error",""),onTabChange:()=>{const t=0===e.state.activeTabId?1:0;e.set({activeTabId:t})},onClose:b,onCopy:b,onPrint:b,onSaveFile:b,onRestore:b}))})).add("Contribute",()=>{const e=[{profile:{name:"Bart Baker",verified:!0,provider:"youtube",src:p},url:"https://brave.com",attention:40,onRemove:b},{profile:{name:"duckduckgo.com",verified:!0,src:u},url:"https://brave.com",attention:20,onRemove:b},{profile:{name:"buzzfeed.com",verified:!1,src:h},url:"https://brave.com",attention:10,onRemove:b},{profile:{name:"theguardian.com",verified:!0,src:g},url:"https://brave.com",attention:5,onRemove:b},{profile:{name:"wikipedia.org",verified:!1,src:m},url:"https://brave.com",attention:4,onRemove:b}];return t.createElement(r.a,{rows:e,onClose:b,numExcludedSites:25,onRestore:b})}).add("Activity",()=>{const e=[{profile:{name:"Bart Baker",verified:!0,provider:"youtube",src:p},url:"https://brave.com",attention:40,onRemove:b,token:{value:"5.0",converted:"5.00"}},{profile:{name:"duckduckgo.com",verified:!0,src:u},url:"https://brave.com",attention:20,onRemove:b,token:{value:"4.0",converted:"11.00"}},{profile:{name:"buzzfeed.com",verified:!1,src:h},url:"https://brave.com",attention:10,onRemove:b,token:{value:"3.0",converted:"15.00"}},{profile:{name:"theguardian.com",verified:!0,src:g},url:"https://brave.com",attention:5,onRemove:b,token:{value:"2.0",converted:"17.00"}},{profile:{name:"wikipedia.org",verified:!1,src:m},url:"https://brave.com",attention:4,onRemove:b,token:{value:"1.0",converted:"11.00"}}];return t.createElement(c.a,{contributeRows:e,transactionRows:[{date:"6/1",type:"deposit",description:"Brave Ads payment for May",amount:{value:"5.0",converted:"5.00"}},{date:"6/9",type:"tipOnLike",description:{publisher:"Bart Baker",platform:"YouTube"},amount:{isNegative:!0,value:"5.0",converted:"11.00"}},{date:"6/10",type:"deposit",description:"Token grant made available or unlocked",amount:{value:"10.0",converted:"15.00"}},{date:"6/12",type:"donation",description:"coinmarketcap.com",amount:{isNegative:!0,value:"10.0",converted:"15.00"}},{date:"6/14",type:"tipOnLike",description:{publisher:"BrendanEich",platform:"Twitter"},amount:{isNegative:!0,value:"1.0",converted:"2.00"}},{date:"6/26",type:"deposit",description:"Added via Uphold",amount:{value:"10.0",converted:"15.00"}},{date:"6/31",type:"contribute",description:"Monthly payment",amount:{isNegative:!0,value:"10.0",converted:"15.00"}},{date:"6/31",type:"recurringDonation",description:"Monthly payment",amount:{isNegative:!0,value:"5.0",converted:"15.00"}}],onClose:b,onPrint:b,onDownloadPDF:b,onMonthChange:b,months:{"jun-2018":"June 2018","may-2018":"May 2018","apr-2018":"April 2018"},currentMonth:"jun-2018",summary:[{text:"Token Grant available",type:"grant",token:{value:"10.0",converted:"5.20"}},{text:"Earnings from Brave Ads",type:"ads",token:{value:"10.0",converted:"5.20"}},{text:"Deposits",type:"deposit",token:{value:"10.0",converted:"5.20"}},{text:"Brave Contribute",type:"contribute",notPaid:!0,token:{value:"10.0",converted:"5.20",isNegative:!0}},{text:"Recurring Donations",type:"recurring",notPaid:!0,token:{value:"2.0",converted:"1.10",isNegative:!0}},{text:"One-time Donations/Tips",type:"donations",token:{value:"19.0",converted:"10.10",isNegative:!0}}],total:{value:"11.0",converted:"0.5"},paymentDay:12,openBalance:{value:"10.0",converted:"5.20"},closingBalance:{value:"21.0",converted:"5.30"}})}).add("Add funds",()=>{return t.createElement(d.a,{addresses:[{type:"BTC",address:"17fBi3kyqUd2jjPDSi8ArBbMWso16qmxW5",qr:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALkAAAC5CAAAAABRxsGAAAABz0lEQVR42u3cQY7DIAwF0Nz/0u1uVgP5hqYV8Fh1lFF4qVRjbNrrteq4yMnJycnJycnJycnJyXeRX/ejfcO/q6X/q89GTn62PJiz+Wdz9v/uXJqNnJy8/blvRo9mLGg+V302cnLyAXm6jAfBiZyc/EF5kJ+n9yMnJ5/Pz4OZSnvu7+0syMmXlwdr+Qdffbk6R06+sjxu1YRpeD9f+EWHi5x8ZXnwuW8+QwAs1a3JycnjwJEm34OtpFJuT05+tjyIMkHtqm6bjy3k5MfI09JT0A5KL8THqcjJT5WnnddHwkqAJicnj/fDaa82zRzmO7nk5MfI+4SgxBz0eftv22hsISffVx6Ei9J0/TJYvQBNTk6ebJSDq6Os6bMW5OT7ypO1NzwhVdpf99MMcnLyuPP68HONrv7k5GfJSy2d+nY7jUHk5OQ38mDOWokqXP3nYws5+W7ydPRjUD3vLu25ycmPlV/3I60zB6cp+q/mO1zk5FvK04hSP9FU+qrAJ6tz5OS7yeuHK9IE4aoMcnLyUflgzCgVvsnJyedjS1oQSytq89U5cvLN5fWraWoerPTk5OTzv4FWf8z0uR6szpGTryxfYpCTk5OTk5OTk5OTk5OvON4QJEO8FpFK4QAAAABJRU5ErkJggg=="},{type:"ETH",address:"0xF10bfc0EB8Fcfd1240a5BB97C3e5a7752cD1C388",qr:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM0AAADNCAAAAAA+16u1AAACPklEQVR42u3bwU7DMBAE0P7/T8ONA1LcGXsTFfRyKpQ2+3IY2bvm9fWfrhcNDQ0NDQ0NDQ0NDQ0NDc2p5vX+6m7y84lfry6/ebMCGhqaSU1QW/CJX2+kT6KvgIaG5h7NZd5UubQu6/KbgwpoaGg+QNNn2iWYhobm72rSzwZxRkND81GatGex+bG14eHdGg0NTd/rvPnVw51bGhqajTHj8iZplWlL5O4pLg0NTbC7qIruextBqtLQ0DyiqQaYl8LL363Dbv04hlY2NDQ0qSYoK4ikILqC5c15ptHQ0FSa4E792HJzhHo08aChoTmeEfQ3Duae/RLqqMtBQ0NzsrIJGhebtfWtz/P9DQ0NTZVpgStY43T9yrBDQkND84imGmX2rYn10qiKMxoamnFNuhxJrZvnH9MGBw0NzbgmbWakZaVReHIaioaGZkhTRVe1sgkmKNXGh4aG5h7NzHQybWb0OXfU66ShoakmHsGwI9gMBXk4s8ahoaEZ0lSdy+CU08k/TQ0lNA0NzaYmaFqmG5X+EY13bmloaI4zbXOP0g871o9tKKFpaGjSTAuOL6Y90X7Pk8YZDQ3NpCZuKoQHodYxlbY5aWhontO83l/rP+6LmTlQTUNDM6lJkyzY7lSLpODJ0tDQPKfZLDCIs2p4Mtm5paGhuVmzLjrY5KQNTxoamo/XHGfaxgiGhoZmWpO+GxxcSmNq8+ADDQ3NuCbdbAQ/phuV4I9v7NzS0ND8g4uGhoaGhoaGhoaGhoaGhqa5vgFTleQ0sHcoKgAAAABJRU5ErkJggg=="},{type:"BAT",address:"0xF10bfc0EB8Fcfd1240a5BB97C3e5a7752cD1C388",qr:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM0AAADNCAAAAAA+16u1AAACPklEQVR42u3bwU7DMBAE0P7/T8ONA1LcGXsTFfRyKpQ2+3IY2bvm9fWfrhcNDQ0NDQ0NDQ0NDQ0NDc2p5vX+6m7y84lfry6/ebMCGhqaSU1QW/CJX2+kT6KvgIaG5h7NZd5UubQu6/KbgwpoaGg+QNNn2iWYhobm72rSzwZxRkND81GatGex+bG14eHdGg0NTd/rvPnVw51bGhqajTHj8iZplWlL5O4pLg0NTbC7qIruextBqtLQ0DyiqQaYl8LL363Dbv04hlY2NDQ0qSYoK4ikILqC5c15ptHQ0FSa4E792HJzhHo08aChoTmeEfQ3Duae/RLqqMtBQ0NzsrIJGhebtfWtz/P9DQ0NTZVpgStY43T9yrBDQkND84imGmX2rYn10qiKMxoamnFNuhxJrZvnH9MGBw0NzbgmbWakZaVReHIaioaGZkhTRVe1sgkmKNXGh4aG5h7NzHQybWb0OXfU66ShoakmHsGwI9gMBXk4s8ahoaEZ0lSdy+CU08k/TQ0lNA0NzaYmaFqmG5X+EY13bmloaI4zbXOP0g871o9tKKFpaGjSTAuOL6Y90X7Pk8YZDQ3NpCZuKoQHodYxlbY5aWhontO83l/rP+6LmTlQTUNDM6lJkyzY7lSLpODJ0tDQPKfZLDCIs2p4Mtm5paGhuVmzLjrY5KQNTxoamo/XHGfaxgiGhoZmWpO+GxxcSmNq8+ADDQ3NuCbdbAQ/phuV4I9v7NzS0ND8g4uGhoaGhoaGhoaGhoaGhqa5vgFTleQ0sHcoKgAAAABJRU5ErkJggg=="},{type:"LTC",address:"Le8aswhmGJjn9jP5teEWdyJARak4xU8sCn",qr:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM0AAADNCAAAAAA+16u1AAACOUlEQVR42u3bQXLDIAwF0Nz/0u0FYvKFBNN0Hit7mtq8LDTwRV4//2m8aGhoaGhoaGhoaGhoaGhouprX57H+8LvnvbstPXT9DhoamnHNc+F4fNZyWmvX0AxoaGimNe/qyONf16UrqILBO2hoaL5Is4YESx4aGpov0pRK13prQ0ND86c0gbX0zvX0g/nS0NDc0wRJ4+Gry8ktDQ3NRptxL7ksTfBeF5eGhibYXQSR5mPtS/dBHTANDc2kJkguSwUrtbYaojQ0NEc06e1mSVq7gmCUhobmoCbIHIPOZsnVWd7Q0NCMa9Iwo9TZ3MgwwwyEhoZmXBN0MR+vgmVL50QEDQ3NPU2w4Ci1LUvdzsmUg4aGpt73TE8lBWlIqYhNdjxoaGg6fc/A1d6ZpKcjk7fR0NAMatJ5pM3PYPsU/Ec/s6GhoUlXNmlforRsqR9yCLqiNDQ045pSWekccCr1VvtZJw0NTSfrDEpXUBnTk9HpXouGhua0Zv3AzW7n+iMH+540NDT1rHN97LkejsRLlM9nrmloaO5pSpFmWr+Cn1qkSy0aGprLmtJpqHVcEViH9jc0NDQlTTo2s41SejF5oouGhqaTdaYlKbgKdk6lM9I0NDRnNEElS0OP9DtJ26o0NDT3NEG96fQvgv3Smd0aDQ3NoGZzPVPqc9DQ0PxlTTC3/orlc8BBQ0NzRpMGmeltUMTW3ywNDc09TZBPBH3PemFrlVEaGpoZzdcOGhoaGhoaGhoaGhoaGhqayvgFbnvHJxkVZlQAAAAASUVORK5CYII="}],onClose:b})}).add("Donation",()=>{const e=[{profile:{name:"Bart Baker",verified:!0,provider:"youtube",src:p},url:"https://brave.com",type:"recurring",contribute:{tokens:"2.0",converted:"0.20"},onRemove:b},{profile:{verified:!1,name:"theguardian.com",src:g},url:"https://brave.com",type:"donation",contribute:{tokens:"12000.0",converted:"6000.20"},text:"May 7"},{profile:{verified:!1,name:"BrendanEich",provider:"twitter",src:f},url:"https://brave.com",type:"tip",contribute:{tokens:"7.0",converted:"3.20"},text:"May 2"}];return t.createElement(s.a,{rows:e,onClose:b})})}.call(this,n(31)(e))},function(e,t,n){"use strict";n.r(t),function(e){var t=n(0),a=n(22),i=n(14),o=n(3),l=n(28),r=n.n(l),c=n(687),s=n(686),d=n(683),p=n(830),u=n(305),m=n(108),h=n(154),g=n(24),f=n(198),b=n(684),x=n(689),y=n(685),C=n(688),v=n(1264),w=n(1266),E=n(354),k=n(1269),O=n(635),S=n(342),j=n(641),T=n(224);const N=n(950),A=n(112),z=n(738),B=()=>{console.log(B)};Object(i.storiesOf)("Feature Components/Rewards/Other/Desktop",e).addDecorator(o.withKnobs).addDecorator(r.a).add("Box",Object(a.withState)({checked:!1,toggle:!0},e=>{return t.createElement("div",{style:{width:"595px"}},t.createElement(c.a,{title:Object(o.text)("Title","Brave ads"),toggle:Object(o.boolean)("Show toggle",e.state.toggle),checked:Object(o.boolean)("Toggle checked",e.state.checked),type:Object(o.select)("Type",{contribute:"contribute",donation:"donation",ads:"ads"},"contribute"),description:Object(o.text)("Description","Earn tokens by seeing ads on Brave. Ads are matched\n          from machine learning and the data temporarily present in your browser without tracking your\n          information or sending it outside."),onToggle:()=>{e.set({checked:!e.state.checked})},settingsChild:t.createElement("div",null,"Settings content")},t.createElement("div",null,"Some content")))})).add("Disabled content",()=>t.createElement(s.a,{image:N,type:"donation"},"• Donate on the spot as you find gems. ",t.createElement("br",null),"• ",t.createElement("b",null,"Enable Tips ")," on Twitter, YouTube, and more, to give tips to posts you ‘Like’.")).add("Alert",()=>t.createElement(d.a,{type:Object(o.select)("Type",{error:"error",success:"success",warning:"warning"},"success"),bg:Object(o.boolean)("Background color",!1),colored:Object(o.boolean)("Text color",!1)},t.createElement("b",null,"Funds received!")," 25 BAT are added to your wallet successfully.")).add("Main toggle",Object(a.withState)({checked:!1},e=>{return t.createElement("div",{style:{width:"800px"}},t.createElement(p.a,{enabled:Object(o.boolean)("Enable",e.state.checked),onToggle:()=>{e.set({checked:!e.state.checked})}}))})).add("Donate",Object(a.withState)({donationAmounts:[{tokens:"1.0",converted:"0.30",selected:!1},{tokens:"5.0",converted:"1.50",selected:!1},{tokens:"10.0",converted:"3.00",selected:!1}],currentAmount:5},e=>{return t.createElement("div",{style:{background:"#696fdc"}},t.createElement(u.a,{donateType:Object(o.select)("Type",{big:"big",small:"small"},"small"),balance:Object(o.number)("Balance ",5),donationAmounts:Object(o.object)("Donations",e.state.donationAmounts),onDonate:()=>{console.log("onDonate")},title:"Donation amount",actionText:Object(o.text)("Action text","Send my Donation"),onAmountSelection:t=>{e.set({currentAmount:t})},currentAmount:Object(o.number)("Current amount",e.state.currentAmount)}))})).add("List",()=>t.createElement("div",{style:{width:"595px"}},t.createElement(m.a,{title:Object(o.text)("Title","Earnings this month")},"Some content"))).add("List - Token",()=>t.createElement("div",{style:{width:"400px"}},t.createElement(h.a,{title:Object(o.text)("Title","Brave Contribute"),value:Object(o.text)("Value","10.0"),converted:Object(o.text)("Converted","0.25"),isNegative:Object(o.boolean)("Is negative",!1),color:Object(o.select)("Color",{contribute:"contribute",donation:"donation",earnings:"earnings",notPaid:"notPaid",default:"default"},"default"),size:Object(o.select)("Size",{normal:"normal",small:"small"},"small")}))).add("Tokens",()=>t.createElement(g.a,{value:Object(o.text)("Tokens value","10.0"),converted:Object(o.text)("Converted value","4.00"),currency:Object(o.text)("Currency","USD"),isNegative:Object(o.boolean)("Is negative",!1),color:Object(o.select)("Color",{contribute:"contribute",donation:"donation",earnings:"earnings",notPaid:"notPaid",default:"default"},"default"),size:Object(o.select)("Size",{normal:"normal",small:"small"},"small")})).add("Profile",()=>t.createElement("div",{style:{width:"400px"}},t.createElement(f.a,{type:Object(o.select)("Type",{big:"big",small:"small"},"big"),title:"Bart Baker",verified:Object(o.boolean)("Verified",!1),provider:Object(o.select)("Provider",{youtube:"YouTube",twitter:"Twitter",twitch:"Twitch"},"youtube"),src:A}))).add("Amount",Object(a.withState)({selected:!1},e=>{return t.createElement("div",{style:{background:"#696fdc",width:"335px",padding:"50px"}},t.createElement(b.a,{amount:Object(o.text)("Amount","5.0"),converted:Object(o.text)("Converted","1.50"),selected:Object(o.boolean)("Selected",e.state.selected),type:Object(o.select)("Type",{big:"Big",small:"Small"},"big"),onSelect:()=>{e.set({selected:!e.state.selected})}}))})).add("Grant claim",()=>t.createElement(T.a,{onClaim:B})).add("Panel Welcome",()=>t.createElement("div",{style:{width:"373px",minHeight:"446px"}},t.createElement(x.a,{optInAction:B,optInErrorAction:B,variant:Object(o.select)("Variant",{one:"One",two:"Two"},"one"),moreLink:B}))).add("Toggle Tips",Object(a.withState)({tipsEnabled:!0},e=>{return t.createElement(y.a,{id:"toggle-tips",onToggleTips:()=>{e.set({tipsEnabled:!e.state.tipsEnabled})},tipsEnabled:Object(o.boolean)("Selected",e.state.tipsEnabled),provider:Object(o.select)("Provider",{youtube:"YouTube",twitter:"Twitter",twitch:"Twitch"},"youtube")})})).add("Tooltip",()=>{const e=t.createElement("span",null,"Brave Ads Settings"),n=t.createElement("span",null,"BAT Logo"),a=t.createElement("div",null,t.createElement("span",{style:{fontWeight:"bold",color:"#4AAF57"}},"Uphold. The Internet of Money."));return t.createElement("div",null,t.createElement("div",{style:{position:"absolute",top:"200px",left:"700px"}},t.createElement(C.a,{id:"tooltip-test",content:e},t.createElement("div",{style:{width:"30px"}},t.createElement(O.a,{color:"#A1A8F2"})))),t.createElement("div",{style:{position:"absolute",top:"280px",left:"685px"}},t.createElement(C.a,{id:"tooltip-test",content:n},t.createElement("div",{style:{width:"60px"}},t.createElement(S.a,null)))),t.createElement("div",{style:{position:"absolute",top:"390px",left:"670px"}},t.createElement(C.a,{id:"tooltip-test",content:a},t.createElement("div",{style:{width:"90px"}},t.createElement(j.a,null)))))}).add("Donation Overlay",Object(a.withState)({displayed:!0},e=>{return t.createElement("div",{style:{background:`url(${z}) no-repeat top center`,width:"986px",height:"100vh",margin:"0 auto",position:"relative"}},e.state.displayed?t.createElement(v.a,{onClose:()=>{e.set({displayed:!1})},success:Object(o.boolean)("Success",!1),send:Object(o.boolean)("Is send page?",!0),subText:Object(o.text)("Sub header","This is text."),domain:"brave.com"}):null)})).add("Tab",Object(a.withState)({tabIndexSelected:0},e=>{return t.createElement("div",{style:{width:"350px"}},t.createElement(w.a,{tabTitles:["Backup","Restore"],onChange:()=>{const t=0===e.state.tabIndexSelected?1:0;e.set({tabIndexSelected:t})},tabIndexSelected:e.state.tabIndexSelected}))})),Object(i.storiesOf)("Feature Components/Rewards/Other/Mobile",e).addDecorator(o.withKnobs).addDecorator(r.a).add("Box",Object(a.withState)({checked:!0,toggle:!0},e=>{return t.createElement("div",{style:{width:"100%"}},t.createElement(E.a,{title:Object(o.text)("Title","Brave Auto-Contribute"),toggle:Object(o.boolean)("Show toggle",e.state.toggle),checked:Object(o.boolean)("Toggle checked",e.state.checked),type:Object(o.select)("Type",{contribute:"contribute",donation:"donation",ads:"ads"},"contribute"),description:Object(o.text)("Description","A simple way to support content creators. Set monthly allowance and browse normally. Your favorite sites (content sites only) receive your contributions automatically. You can exclude sites from funding right from the list below."),toggleAction:()=>{e.set({checked:!e.state.checked})},settingsChild:t.createElement("div",null,"Settings content")},t.createElement("div",{style:{padding:"0px 25px"}},t.createElement("p",null,"Detail Content"))))})).add("Main Toggle",Object(a.withState)({checked:!1},e=>{let n=[];for(let e=0;e<25;e++)n.push(e);return t.createElement("div",{style:{width:"100%"}},t.createElement(k.a,{enabled:Object(o.boolean)("Enable",e.state.checked),onToggle:()=>{e.set({checked:!e.state.checked})}}),n.map(e=>t.createElement("div",{key:e},t.createElement(m.a,{title:`Item No: ${e}`}))))}))}.call(this,n(31)(e))},function(e,t,n){e.exports=n.p+"static/media/rewards_donate.1f1fdc4c.svg"},function(e,t,n){"use strict";n.r(t),function(e){var t=n(0),a=n(14),i=n(3),o=n(28),l=n.n(o),r=n(152),c=n(303),s=n(348);const d=n(112),p=n(274),u=n(275),m=n(273),h=n(185),g=n(326),f=()=>{console.log("nothing")};Object(a.storiesOf)("Feature Components/Rewards/Table",e).addDecorator(i.withKnobs).addDecorator(l.a).add("Contribution",()=>{const e=[{profile:{name:"Bart Baker",verified:!0,provider:"youtube",src:d},url:"https://brave.com",attention:40,onRemove:f},{profile:{name:"duckduckgo.com",verified:!0,src:p},url:"https://brave.com",attention:20,onRemove:f},{profile:{name:"buzzfeed.com",verified:!1,src:m},url:"https://brave.com",attention:10,onRemove:f},{profile:{name:"theguardian.com",verified:!0,src:h},url:"https://brave.com",attention:5,onRemove:f},{profile:{name:"wikipedia.org",verified:!1,src:u},url:"https://brave.com",attention:4,onRemove:f}];return t.createElement("div",{style:{width:"595px"}},t.createElement(r.a,{header:Object(i.object)("Header",["Site","Attention"]),rows:Object(i.object)("Rows",e),allSites:Object(i.boolean)("Are this all sites?",!1),numSites:Object(i.number)("Number of all sites?",55),showRowAmount:Object(i.boolean)("Show row amount",!1),showRemove:Object(i.boolean)("Show remove action",!0),headerColor:Object(i.boolean)("Colored header",!0)},"Please visit some sites"))}).add("Donation",()=>{const e=[{profile:{name:"Bart Baker",verified:!0,provider:"youtube",src:d},url:"https://brave.com",type:"recurring",contribute:{tokens:"2.0",converted:"0.20"},onRemove:f},{profile:{verified:!1,name:"theguardian.com",src:h},url:"https://brave.com",type:"donation",contribute:{tokens:"12000.0",converted:"6000.20"},text:"May 7"},{profile:{verified:!1,name:"BrendanEich",provider:"twitter",src:g},url:"https://brave.com",type:"tip",contribute:{tokens:"1.0",converted:"0.20"},text:"May 2"}];return t.createElement("div",{style:{width:"595px"}},t.createElement(c.a,{rows:Object(i.object)("Rows",e),allItems:Object(i.boolean)("Are this all items?",!1),numItems:Object(i.number)("Number of all items?",55),headerColor:Object(i.boolean)("Colored header",!0)},"Please visit some sites"))}).add("Transactions",()=>{return t.createElement("div",{style:{width:"595px"}},t.createElement(s.a,{rows:Object(i.object)("Rows",[{date:"6/1",type:"deposit",description:"Brave Ads payment for May",amount:{value:"5.0",converted:"5.00"}},{date:"6/9",type:"tipOnLike",description:{publisher:"Bart Baker",platform:"YouTube"},amount:{isNegative:!0,value:"5.0",converted:"11.00"}},{date:"6/31",type:"contribute",description:"Monthly payment",amount:{isNegative:!0,value:"5.0",converted:"15.00"}}])},"Sorry no transactions."))})}.call(this,n(31)(e))},function(e,t,n){"use strict";n.r(t),function(e){var t=n(0),a=n(14),i=n(3),o=n(28),l=n.n(o),r=n(352),c=n(829),s=n(353),d=n(837),p=n(832),u=n(836),m=n(222),h=n(637),g=n(1267);const f=n(112),b=()=>{console.log("nothing")};Object(a.storiesOf)("Feature Components/Rewards/Wallet/Desktop",e).addDecorator(i.withKnobs).addDecorator(l.a).add("Wrapper",()=>{const e={node:"Some text",type:"success",onAlertClose:b},n=Object(i.boolean)("Show alert",!1),a=Object(i.boolean)("Show grants",!1);return t.createElement(r.a,{compact:!1,contentPadding:!1,connectedWallet:Object(i.boolean)("Connected wallet",!1),showCopy:Object(i.boolean)("Show Uphold",!1),showSecActions:Object(i.boolean)("Show secondary actions",!0),balance:Object(i.text)("Balance","25.0"),converted:Object(i.text)("Converted","163230.50 USD"),actions:[{name:"Add funds",action:b,icon:t.createElement(m.a,null)},{name:"Withdraw Funds",action:b,icon:t.createElement(h.a,null)}],grants:a?[{tokens:"8.0",expireDate:"7/15/2018"},{tokens:"10.0",expireDate:"9/10/2018"},{tokens:"10.0",expireDate:"10/10/2018"}]:[],alert:n?e:void 0},"Some content")}).add("Empty",()=>t.createElement("div",{style:{width:"373px",background:"#f9fbfc",padding:"0 25px"}},t.createElement(c.a,null))).add("Summary",()=>t.createElement("div",{style:{width:"373px",background:"#f9fbfc",padding:"0 25px"}},t.createElement(s.a,{report:{grant:Object(i.object)("Grant",{tokens:"10.0",converted:"0.25"}),deposit:Object(i.object)("Deposit",{tokens:"10.0",converted:"0.25"}),ads:Object(i.object)("Ads",{tokens:"10.0",converted:"0.25"}),contribute:Object(i.object)("Contribute",{tokens:"10.0",converted:"0.25"}),donation:Object(i.object)("Donation",{tokens:"2.0",converted:"0.25"}),tips:Object(i.object)("Tips",{tokens:"19.0",converted:"5.25"})},onActivity:b}))).add("Panel",()=>t.createElement("div",{style:{width:"373px",background:"#f9fbfc"}},t.createElement(d.a,{id:"wallet-panel",platform:Object(i.select)("Provider",{youtube:"YouTube",twitter:"Twitter",twitch:"Twitch"},"youtube"),publisherImg:f,publisherName:"Bart Baker",monthlyAmount:"10.0",isVerified:Object(i.boolean)("Verified",!0),tipsEnabled:Object(i.boolean)("Tips Enabled",!0),includeInAuto:Object(i.boolean)("Include in monthly",!0),attentionScore:"15",donationAmounts:[{tokens:"0.0",converted:"0.00"},{tokens:"1.0",converted:"0.50"},{tokens:"5.0",converted:"2.50"},{tokens:"10.0",converted:"5.00"}],onToggleTips:b,donationAction:b,onAmountChange:b,onIncludeInAuto:b}))).add("Off",()=>t.createElement("div",{style:{width:"373px",background:"#f9fbfc",padding:"0 25px"}},t.createElement(p.a,null))).add("Summary Slider",()=>t.createElement("div",{style:{width:"373px",padding:"0 25px"}},t.createElement(u.a,{id:"summary-slider"}))),Object(a.storiesOf)("Feature Components/Rewards/Wallet/Mobile",e).addDecorator(i.withKnobs).addDecorator(l.a).add("Wallet Info Header",()=>t.createElement("div",{style:{position:"fixed",top:0,left:0,height:"100vh",width:"100%"}},t.createElement("div",{style:{width:"100%",position:"absolute",top:"30%"}},t.createElement(g.a,{id:"info-header",onClick:b,balance:Object(i.text)("Balance","30.0"),converted:Object(i.text)("Converted","163230.50 USD")}))))}.call(this,n(31)(e))},function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return m});var a=n(0),i=n(49),o=n(225),l=n(157),r=n(76),c=n(308),s=n(142),d=n(149),p=n(15),u=n(61);class m extends a.PureComponent{constructor(e){super(e),this.onTogglePishingMalwareBlocked=(()=>{this.setState({openPishingMalwareBlockedList:!this.state.openPishingMalwareBlockedList})}),this.state={openPishingMalwareBlockedList:!1}}get pishingMalwareBlockedList(){const{favicon:e,sitename:t}=this.props;return a.createElement(s.default,{favicon:e,sitename:t,title:p.a.blockPishing,onToggle:this.onTogglePishingMalwareBlocked,data:u.a.thirdPartyDeviceRecognitionBlocked},a.createElement(d.default,{onClickDismiss:this.onTogglePishingMalwareBlocked,list:u.a.blockedFakeResources}))}render(){const{enabled:e}=this.props,{openPishingMalwareBlockedList:t}=this.state;return e?a.createElement(a.Fragment,null,a.createElement(i.s,null,a.createElement(o.b,{onClick:this.onTogglePishingMalwareBlocked},a.createElement(l.g,null)),a.createElement(i.q,{onClick:this.onTogglePishingMalwareBlocked},u.a.pishingMalwareBlocked),a.createElement(r.k,{onClick:this.onTogglePishingMalwareBlocked},p.a.blockPishing),a.createElement(i.r,null,a.createElement(c.a,{checked:!0}))),t?this.pishingMalwareBlockedList:null):null}}},function(e,t,n){"use strict";n.r(t),function(e){var t=n(0),a=n(14),i=n(3),o=n(22),l=n(343);const r=n(955);Object(a.storiesOf)("Feature Components/Shields",e).addDecorator(i.withKnobs).add("Enabled",Object(o.withState)({enabled:!0},e=>{return t.createElement(l.default,{fakeOnChange:()=>{e.set({enabled:!e.state.enabled})},enabled:Object(i.boolean)("Enabled?",e.state.enabled),sitename:"buzzfeed.com",favicon:r})})).add("Disabled",Object(o.withState)({enabled:!1},e=>{return t.createElement(l.default,{fakeOnChange:()=>{e.set({enabled:!e.state.enabled})},enabled:Object(i.boolean)("Enabled?",e.state.enabled),sitename:"buzzfeed.com",favicon:r})}))}.call(this,n(31)(e))},function(e,t,n){e.exports=n.p+"static/media/fake_favicon.d241873a.png"},function(e,t,n){e.exports=n.p+"static/media/sync_start.aa41900e.svg"},function(e,t,n){"use strict";n.r(t),function(e){var t=n(0),a=n(14),i=n(52),o=n(300),l=n(195),r=n(196),c=n(295),s=n(294),d=n(296),p=n(299),u=n(298),m=n(297);const h=()=>{console.log("nothing")};Object(a.storiesOf)("Feature Components/Sync/Popups and Modals",e).add("Reset Sync",()=>t.createElement(o.default,{onClose:h,mainDeviceName:i.a.device1.name})).add("Device Type",()=>t.createElement(l.default,{onClose:h,mainDeviceName:i.a.device1.name})).add("Scan Code",()=>t.createElement(r.default,{onClose:h})).add("Add New Chain (camera option)",()=>t.createElement(s.default,{onClose:h})).add("Add New Chain (no camera)",()=>t.createElement(c.default,{onClose:h})).add("Enter Sync Code",()=>t.createElement(d.default,{onClose:h})).add("View Sync Code",()=>t.createElement(p.default,{onClose:h})).add("Remove Main Device",()=>t.createElement(u.default,{onClose:h,mainDeviceName:i.a.device1.name})).add("Remove Other Device",()=>t.createElement(m.default,{onClose:h,otherDeviceName:i.a.device2.name}))}.call(this,n(31)(e))},function(e,t,n){"use strict";n.r(t),function(e){var t=n(0),a=n(14),i=n(345);Object(a.storiesOf)("Feature Components/Sync/Page",e).add("Disabled Content",()=>t.createElement(i.default,{disabled:!0})).add("Enabled Content",()=>t.createElement(i.default,null))}.call(this,n(31)(e))},,,,,function(e,t,n){e.exports=n.p+"static/media/welcome_bg.076d678f.svg"},function(e,t,n){e.exports=n.p+"static/media/lion_logo.9e31ed86.svg"},function(e,t,n){e.exports=n.p+"static/media/welcome_import.ac2b8d62.svg"},function(e,t,n){e.exports=n.p+"static/media/welcome_search.cbe80e65.svg"},function(e,t,n){e.exports=n.p+"static/media/welcome_theme.0a477204.svg"},function(e,t,n){e.exports=n.p+"static/media/welcome_shields.bf695b69.svg"},function(e,t,n){e.exports=n.p+"static/media/welcome_rewards.2b3672c9.svg"},function(e,t,n){"use strict";n.r(t),function(e){var t=n(0),a=n(14),i=n(667),o=n(672);Object(a.storiesOf)("Feature Components/Welcome",e).addDecorator(i.FullPageStory).add("Page",()=>t.createElement(o.default,null))}.call(this,n(31)(e))},function(e,t,n){"use strict";n.r(t),function(e){var t=n(14),a=n(3),i=n(114),o=n(22),l=n(28),r=n.n(l),c=n(0),s=n(819),d=n(823),p=n(818),u=n(822);Object(t.storiesOf)("Old/Buttons",e).addDecorator(a.withKnobs).addDecorator(r.a).add("UnstyledButton",()=>c.createElement(d.a,{onClick:Object(i.action)("clicked the action button!"),text:Object(a.text)("Text","Example UnstyledButton"),customStyle:{fontSize:Object(a.text)("Font Size","16px"),color:Object(a.text)("Color","#000")}})).add("PushButton",()=>{const e=Object(a.select)("Button Types",{default:"Default",primary:"Primary",secondary:"Secondary"},"default");return c.createElement(s.a,{color:e,disabled:Object(a.boolean)("Disabled",!1),customStyle:{minWidth:Object(a.text)("Width","78px"),minHeight:Object(a.text)("Height","32px"),fontSize:Object(a.text)("Font Size","13px")}},Object(a.text)("Label","Hello Button"))}).add("SwitchButton",Object(o.withState)({checked:!1},e=>{const t=Object(a.select)("Button Sizes",{default:"Default",large:"Large",small:"Small"},"medium");return c.createElement(p.a,Object.assign({},e.state,{id:"sampleSwitch",leftText:Object(a.text)("Left Label","Some label here"),rightText:Object(a.text)("Right Label","Some label here too"),customStyle:{labelColor:Object(a.text)("Label Color","#303030")},size:t,checked:Object(a.boolean)("Checked?",e.state.checked),disabled:Object(a.boolean)("Disabled?",!1),autoFocus:Object(a.boolean)("AutoFocus?",!1),onChange:()=>{e.set({checked:!e.state.checked})}}))})).add("ContentToggleArrow",Object(o.withState)({open:!0},e=>{return c.createElement(u.a,Object.assign({},e.state,{withSeparator:Object(a.boolean)("with separator?",!0),open:Object(a.boolean)("Open?",e.state.open),summary:Object(a.text)("Summary text","Some text here"),onClick:()=>{e.set({open:!e.state.open})}}),c.createElement("h1",null,"Some text inside!"))}))}.call(this,n(31)(e))},function(e,t,n){"use strict";n.r(t),function(e){var t=n(14),a=n(3),i=n(28),o=n.n(i),l=n(114),r=n(0),c=n(821);Object(t.storiesOf)("Old/Fields and Labels",e).addDecorator(a.withKnobs).addDecorator(o.a).add("TextLabel",()=>{const e=Object(a.select)("Weight",{bold:"Bold",normal:"Normal",thin:"Thin"},"normal");return r.createElement(c.a,{onClick:Object(l.action)("clicked the textLabel!"),text:Object(a.text)("Text","Example TextLabel"),customStyle:{fontSize:Object(a.text)("Font size","13px"),color:Object(a.text)("Color","#000000"),padding:Object(a.text)("Padding","0px"),fontWeight:e}})})}.call(this,n(31)(e))},function(e,t,n){"use strict";n.r(t),function(e){var t=n(14),a=n(3),i=n(28),o=n.n(i),l=n(0),r=n(820);Object(t.storiesOf)("Old/Selectors",e).addDecorator(a.withKnobs).addDecorator(o.a).add("SelectOption",()=>l.createElement(r.a,{titleName:Object(a.text)("Title","Example Title"),multiple:Object(a.boolean)("Multiple?",!1),autoFocus:Object(a.boolean)("Auto focus?",!1),disabled:Object(a.boolean)("Disabled?",!1)},l.createElement("option",{value:"cool"},"Brave UI: cool"),l.createElement("option",{value:"notcool"},"Brave UI: not cool")))}.call(this,n(31)(e))},function(e,t,n){"use strict";n.r(t),function(e){var t=n(14),a=n(3),i=n(28),o=n.n(i),l=n(0),r=n(199),c=n(828),s=n(827),d=n(302);Object(t.storiesOf)("Old/Typography, Text and Links",e).addDecorator(a.withKnobs).addDecorator(o.a).add("TitleHeading",()=>l.createElement(r.d,{text:Object(a.text)("Title","Some Feature"),label:Object(a.text)("Optional Label","Beta")})).add("SectionHeading",()=>l.createElement(r.c,{text:Object(a.text)("Section Title","Some Section Title")})).add("FeatureHeading",()=>l.createElement(r.a,{text:Object(a.text)("Feature Title","Some Feature Title")})).add("Heading",()=>{const e=Object(a.select)("Heading Level",{1:"h1",2:"h2",3:"h3"},1),t=Object(a.select)("Weight",{bold:"Bold",normal:"Normal",thin:"Thin"},"normal");return l.createElement(r.b,{level:e,text:Object(a.text)("Heading text","Some text"),customStyle:{color:Object(a.text)("Color","#000000"),fontWeight:t}})}).add("Paragraph",()=>{const e=Object(a.select)("Weight",{bold:"Bold",normal:"Normal",thin:"Thin"},"normal");return l.createElement(c.a,{text:Object(a.text)("Text","Some text here"),customStyle:{fontSize:Object(a.text)("Size","16px"),color:Object(a.text)("Color","#000000"),fontWeight:e,fontStyle:Object(a.text)("Font style","italic"),margin:Object(a.text)("Margin","15px")}})}).add("Anchor",()=>{const e=Object(a.select)("Decoration",{underline:"Underline",none:"None"},"none");return l.createElement(s.a,{href:"#",customStyle:{textDecoration:e,color:Object(a.text)("Color","#000000"),fontSize:Object(a.text)("Size","16px")},text:Object(a.text)("Link Text","Some text")})}).add("Separator",()=>l.createElement(d.a,{noMargin:Object(a.boolean)("no margin?",!1)}))}.call(this,n(31)(e))},function(e,t,n){"use strict";n.r(t),function(e){var t=n(14),a=n(3),i=n(28),o=n.n(i),l=n(114),r=n(0),c=n(826),s=n(350);Object(t.storiesOf)("Old/Views",e).addDecorator(a.withKnobs).addDecorator(o.a).add("Page",()=>r.createElement(c.a,{title:Object(a.text)("Page Title","New About Page"),label:Object(a.text)("Page Title Label","Beta")},Object(a.text)("Content","Some illustrative text"))).add("DataBlock",()=>{const e=Object(a.select)("Size",{small:"Small",medium:"Medium"},"medium"),t=Object(a.select)("Disallow user select?",{auto:"allow",none:"Disallow"},"auto");return r.createElement(s.a,{asList:Object(a.boolean)("show as list?",!1)},r.createElement(s.b,{size:e,customStyle:{counterColor:Object(a.text)("Counter Color","orange"),descriptionColor:Object(a.text)("Description Color","black"),userSelect:t},counter:Object(a.text)("Counter","123123"),text:Object(a.text)("Text","Some Text"),description:Object(a.text)("Description","Some Description"),onClick:Object(l.action)("clicked the DataBlock!")}),r.createElement(s.b,{size:e,customStyle:{counterColor:Object(a.text)("Counter Color","orange"),descriptionColor:Object(a.text)("Description Color","black"),userSelect:t},counter:Object(a.text)("Counter","123123"),text:Object(a.text)("Text","Some Text"),description:Object(a.text)("Description","Some Description"),onClick:Object(l.action)("clicked the DataBlock!")}))})}.call(this,n(31)(e))},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";var a=n(0),i=n(1);const o=Object(i.default)("div").withConfig({displayName:"StyledWrapper"})`
  width: 100%;
`,l=Object(i.default)("textarea").withConfig({displayName:"StyledArea"})`
  min-height: 140px;
  box-sizing: border-box;
  width: 100%;
  font-family: Muli, sans-serif;
  border: 1px solid ${e=>(e=>{let t="#DFDFE8";return e.disabled&&(t="#E5E5EA"),e.fieldError&&(t="#E2052A"),t})(e)};
  color: ${e=>e.disabled?"#D1D1DB":"#686978"};
  border-radius: 6px;
  padding: 15px 20px;
  font-size: 16px;
  line-height: 26px;

  &:disabled {
    background: #fff;
  }

  &:focus {
    border-color: #A1A8F2;
    outline: none;
  }
`;n.d(t,"a",function(){return r});class r extends a.PureComponent{render(){const{id:e,onChange:t,value:n,defaultValue:i,readOnly:r,placeholder:c,disabled:s,fieldError:d}=this.props;return a.createElement(o,{id:e},a.createElement(l,{onChange:t,disabled:s,value:n,readOnly:r,placeholder:c,defaultValue:i,fieldError:d}))}}},function(e,t,n){"use strict";var a=n(0),i=n(1);const o=Object(i.default)("div").withConfig({displayName:"StyledTabWrapper"})`
  border-bottom: 1px solid #DFDFE8;
  text-align: center;
  font-family: Poppins, sans-serif;
`,l=Object(i.default)("div").withConfig({displayName:"StyledTab"})`
  border-radius: 6px 6px 0 0;
  border: 1px solid #DFDFE8;
  border-bottom: 1px solid ${e=>e.selected?"#FFF":"#DFDFE8"};
  color: ${e=>e.selected?"#FB542B":"#686978"};
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.29px;
  line-height: 44px;
  display: inline-block;
  cursor: pointer;
  min-width: 230px;
  padding: 0 10px;
  margin: 0 2px;
  position: relative;
  top: 1px
`,r=Object(i.default)("div").withConfig({displayName:"StyledContent"})`
  padding: 34px 56px 20px;
`;n.d(t,"a",function(){return c});class c extends a.PureComponent{constructor(){super(...arguments),this.generateTabs=(()=>{let e=null;const t=this;return 0===a.Children.count(t.props.children)?{tabs:null,content:null}:{tabs:a.Children.map(t.props.children,(n,i)=>{if(void 0===n.props["data-key"])return null;const o=n.props["data-key"],r=n.props["data-title"]||`Tab - ${i}`,c=!!t.props.activeTabId&&(t.props.activeTabId===o||0===t.props.activeTabId.length&&0===i);return c&&(e=n.props.children),a.createElement(l,{key:`${t.props.id}-tab-${o}`,onClick:t.props.onChange.bind(t,o),selected:c},r)}),content:e}})}render(){const{id:e,className:t}=this.props,{content:n,tabs:i}=this.generateTabs();return a.createElement("div",{className:t,id:e},a.createElement(o,null,i),a.createElement(r,null,n))}}},function(e,t,n){"use strict";var a=n(0),i=n(1);const o=Object(i.default)("div").withConfig({displayName:"StyledWrapper"})`
  background: #f2f4f7;
  min-height: 100vh;
  min-width: 1024px;
  font-family: "Poppins", sans-serif
`,l=Object(i.default)("div").withConfig({displayName:"StyleHeader"})`
  background-image: linear-gradient(267deg, #bf14a2, #f73a1c);
  height: 62px;
`,r=Object(i.default)("div").withConfig({displayName:"StyledContent"})`
 max-width: 1000px;
 margin: 0 auto;
 padding: 40px 0;
`;n.d(t,"a",function(){return c});class c extends a.PureComponent{render(){const{id:e,children:t}=this.props;return a.createElement(o,{id:e},a.createElement(l,null),a.createElement(r,null,t))}}},function(e,t,n){"use strict";var a=n(0),i=n(4);const o=e=>{let t="8",n="18",a="14";return"big"===e.size&&(t="10",n="24",a="16"),i.b`
    --radio-fill-size: ${t}px;
    --radio-circle-size: ${n}px;
    --radio-font-size: ${a}px;
    --radio-right-margin: ${"17"}px;
  `},l=(e,t)=>{let n=e.theme.color.brandBat,a=e.theme.color.subtleActive;return e.disabled||(a=t?e.theme.color.brandBat:e.theme.color.brandBatActive),i.b`
    --radio-fill-color: ${n};
    --radio-border-color: ${a};
  `},r=Object(i.c)("label").withConfig({displayName:"StyledLabel"})`
  ${e=>o(e)}
  line-height: 1.3;
  display: flex;
  margin-bottom: 30px;
  font-size: var(--radio-font-size);
  cursor: pointer;
`,c=Object(i.c)("input").withConfig({displayName:"StyledInput"})`
  opacity: 0;
  position: absolute;
`,s=Object(i.c)("span").withConfig({displayName:"StyledCircle"})`
  ${e=>o(e)}
  ${e=>l(e,e.selected)}
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: var(--radio-circle-size);
  width: var(--radio-circle-size);
  height: var(--radio-circle-size);
  border: 1px solid var(--radio-border-color);
  margin-right: var(--radio-right-margin);
  border-radius: 50%;
`,d=Object(i.c)("div").withConfig({displayName:"StyledFill"})`
  ${e=>o(e)}
  ${e=>l(e,e.selected)}
  width: var(--radio-fill-size);
  height: var(--radio-fill-size);
  border-radius: 50%;
  background: var(--radio-fill-color);
`,p=Object(i.c)("span").withConfig({displayName:"StyledText"})`
  flex: 1;
  letter-spacing: 0;
  display: flex;
  padding-top: ${e=>"big"===e.size?"2px":"1px"};
`;n.d(t,"a",function(){return u});class u extends a.PureComponent{constructor(){super(...arguments),this.generateChecks=(e=>{const t=this;return a.Children.map(e,(e,n)=>{if(void 0===e.props["data-value"])return null;const i=e.props.children,o=e.props["data-value"],l=t.props.value[o]||!1;return a.createElement(r,{key:`option-${n}`,onClick:t.props.disabled?void 0:t.onOptionClick.bind(t,o,e,l),size:t.props.size},a.createElement(s,{selected:l,disabled:t.props.disabled,size:t.props.size},l?a.createElement(d,{size:t.props.size}):null),a.createElement(p,{disabled:t.props.disabled,size:t.props.size},i),a.createElement(c,{type:"radio",checked:l,readOnly:!0}))})}),this.onOptionClick=((e,t,n)=>{if(!this.props.onChange)return;let a={};this.props.value[e]||Object.keys(this.props.value).map(t=>{a[t]=e===t&&!n}),this.props.onChange(e,!n,t,a)})}render(){const{id:e,children:t}=this.props,n=a.Children.count(t);return a.createElement("div",{id:e},n>0?this.generateChecks(t):null)}}u.defaultProps={size:"small",disabled:!1}},function(e,t,n){"use strict";var a=n(0),i=n(1);const o=Object(i.default)("div").withConfig({displayName:"StyledOuterWrapper"})`
  display: flex;
`,l=Object(i.default)("div").withConfig({displayName:"StyledWrapper"})`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(12,13,33,0.85);
  font-family: "Poppins", sans-serif;
  justify-content: center;
`,r=Object(i.default)("span").withConfig({displayName:"StyledHeaderText"})`
  color: #D1D1DB;
  font-size: 38px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 28px;
`,c=Object(i.default)("div").withConfig({displayName:"StyledOverlayTop"})`
  display: flex;
  flex-direction: row;
  padding-top: 110px;
`,s=Object(i.default)("div").withConfig({displayName:"StyledOverlayContent"})`
  display: block;
`,d=Object(i.default)("span").withConfig({displayName:"StyledIconWrapper"})`
  flex: 1 0 0;
  margin-top: ${e=>e.success?0:"-25px"}
`,p=Object(i.default)("span").withConfig({displayName:"StyledIcon"})`
  width: 90px;
  margin-top: -7px;
  margin-right: 9px;
  display: inline-block;
`,u=Object(i.default)("div").withConfig({displayName:"StyledMessage"})`
  flex: 9 0 0;
  padding-top: 10px;
  margin-right: ${e=>e.success?0:"-10px"}
`,m=Object(i.default)("div").withConfig({displayName:"StyledProviderImage"})`
  width: 90px;
  height: 90px;
  padding: 0 20px;
  border-radius: 50%;
  margin-right: 25px;
  background-repeat: no-repeat;
  background-size: 90px;
  background-image:url(${e=>e.src?e.src:""});
`,h=Object(i.default)("div").withConfig({displayName:"StyledImageBorder"})`
  position: relative;
  top: 0;
  left: -20px;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  border: 5px solid #ffffff;
`,g=Object(i.default)("div").withConfig({displayName:"StyledFailWrapper"})`
  margin-top: 110px;
  padding-left: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`,f=Object(i.default)("span").withConfig({displayName:"StyledCloseIcon"})`
  width: 55px;
  color: #E2052A;
  display: block;
  cursor: pointer;
  margin-bottom: 40px;
`,b=Object(i.default)("span").withConfig({displayName:"StyledFailTitle"})`
  color: #FFFFFF;
  font-size: 28px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 28px;
  display: block;
  margin-bottom: 10px;
`,x=Object(i.default)("span").withConfig({displayName:"StyledFailMsg"})`
  color: #FFFFFF;
  font-size: 16px;
  font-family: "Muli", sans-serif;
  font-weight: normal;
  letter-spacing: 0;
  line-height: 28px;
  display: block;
  text-align: center;
  width: 249px;
`,y=Object(i.default)("div").withConfig({displayName:"StyledBackgroundCurve"})`
  position: fixed;
  top: 0;
  left: -19px;
  width: 105%;
  height: 480px;
  background: #191A2E;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 140%;
`,C=Object(i.default)("div").withConfig({displayName:"StyleSubHeaderText"})`
  font-size: 16px;
  font-family: "Muli", sans-serif;
  font-weight: normal;
  letter-spacing: 0;
  line-height: 28px;
  display: block;
  margin: 10px 0 0 5px;
`,v=Object(i.default)("div").withConfig({displayName:"StyledLetter"})`
  border: 6px solid #fff;
  border-radius: 50%;
  width: 90px;
  height: 90px;
  background: ${e=>e.logoBgColor||"#DE4D26"};
  overflow: hidden;
  margin-right: 25px;
  color: #fff;
  text-align: center;
  line-height: 78px;
  font-size: 60px;
  text-transform: uppercase;
`,w=Object(i.default)("button").withConfig({displayName:"StyledClose"})`
  top: 14px;
  right: 17px;
  position: absolute;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  width: 27px;
  height: 27px;
  color: #FFF;
  z-index: 2;
`;var E=n(2),k=n(730),O=n(634),S=n(340);n.d(t,"a",function(){return j});class j extends a.PureComponent{constructor(){super(...arguments),this.getOverlayContent=(()=>{const{success:e,send:t,siteImg:n,subText:i,domain:o,logoBgColor:l}=this.props;return a.createElement(s,null,e||t?a.createElement(c,null,a.createElement(d,{success:e},t?a.createElement(p,null,a.createElement(k.a,null)):null,!t&&n?a.createElement(m,{src:n},a.createElement(h,null)):null,t||n||!o?null:a.createElement(v,{logoBgColor:l},o&&o.substring(0,1)||"")),a.createElement(u,{success:e},a.createElement(r,null,t?Object(E.b)("donationSent"):null,e?a.createElement(a.Fragment,null,Object(E.b)("thankYou"),a.createElement(C,null,i)):null))):this.getFailureContent())})}getFailureContent(){return a.createElement(g,null,a.createElement(f,null,a.createElement(O.a,{onClick:this.props.onClose})),a.createElement(b,null,Object(E.b)("uhOh")),a.createElement(x,null,Object(E.b)("donationFailureMsg")))}render(){const{id:e,send:t,onClose:n}=this.props;return a.createElement(o,null,t?a.createElement(y,null):null,a.createElement(l,{id:e},a.createElement(w,{onClick:n},a.createElement(S.a,null)),this.getOverlayContent()))}}},function(e,t,n){"use strict";var a=n(0),i=n(1);const o=Object(i.default)("div").withConfig({displayName:"StyledWrapper"})`
  font-family: Poppins, sans-serif;
`,l=Object(i.default)("div").withConfig({displayName:"StyledTitle"})`
  font-size: 20px;
  font-weight: 600;
  line-height: 2;
  color: #4b4c5c;
  margin-bottom: 20px;
`;var r=n(42),c=n(303),s=n(2);n.d(t,"a",function(){return d});class d extends a.PureComponent{render(){const{id:e,onClose:t,rows:n}=this.props,i=n&&n.length||0;return a.createElement(r.a,{id:e,onClose:t},a.createElement(o,null,a.createElement(l,null,Object(s.b)("donationTips")),a.createElement(c.a,{rows:n,allItems:!0,numItems:i,headerColor:!0})))}}},function(e,t,n){"use strict";var a=n(0),i=n(1);const o=Object(i.default)("div").withConfig({displayName:"RewardsTabWrapper"})`
  display: flex;
  font-family: Poppins,sans-serif;
`,l=Object(i.default)("div").withConfig({displayName:"StyledSwitch"})`
  position: relative;
  display: block;
  width: 100%;
  height: 43px;
  cursor: pointer;
`,r=Object(i.default)("div").withConfig({displayName:"StyledSlider"})`
  width: 100%;
  height: 100%;
  background: #DFDFE8;
  border-radius: 21.5px 21.5px 21.5px 21.5px;
`,c=Object(i.default)("div").withConfig({displayName:"StyledBullet"})`
  top: -17px;
  width: 50%;
  height: 37px;
  background: ${e=>e.theme.color.primaryBackground};
  border-radius: 21.5px 21.5px 21.5px 21.5px;
  position: relative;
  transition: all .4s ease;
  transform: translate(calc(${e=>0===e.tabIndexSelected?2:97}%), calc(-50% - 4px));
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.05);
`,s=Object(i.default)("div").withConfig({displayName:"StyledTab"})`
  width: 50%;
  display: block;
  height: 100%;
  float: ${e=>e.left?"left":"right"};
`,d=Object(i.default)("div").withConfig({displayName:"StyledText"})`
  z-index: 9;
  position: relative;
  font-size: 14px;
  width: 70%;
  margin: 13px auto 0 auto;
  text-overflow: ellipsis;
  display: block;
  overflow: hidden;
  text-align: center;
  user-select: none;
  color: ${e=>e.selected?e.theme.color.brandBrave:e.theme.color.subtleActive};
  font-weight: ${e=>e.selected?"500":"normal"};
`;n.d(t,"a",function(){return p});class p extends a.PureComponent{constructor(){super(...arguments),this.getTabs=(e=>{return e.map((e,t)=>a.createElement(s,{left:0===t,key:`tab-${t}`,onClick:this.onSwitchChange.bind(this,t)},a.createElement(d,{selected:t===this.props.tabIndexSelected},e)))}),this.onSwitchChange=((e,t)=>{e!==this.props.tabIndexSelected&&this.props.onChange&&this.props.onChange(t)})}render(){const{testId:e,tabTitles:t,tabIndexSelected:n}=this.props;return t&&2===t.length?a.createElement(o,null,a.createElement(l,null,a.createElement(r,{"data-test-id":e},this.getTabs(t)),a.createElement(c,{tabIndexSelected:n}))):(console.warn("Rewards Tab currently supports 2 tab titles"),null)}}p.defaultProps={tabIndexSelected:0}},function(e,t,n){"use strict";var a=n(0),i=n(1),o=n(812),l=n.n(o);const r=Object(i.default)("div").withConfig({displayName:"StyledWrapper"})`
  width: 100%;
  display: flex;
  border-radius: 6px;
  margin-bottom: 15px;
  font-family: Poppins, sans-serif;
  background: url(${l.a}) no-repeat top left,
  linear-gradient(to bottom right, #392dd1 0%, #5813a6 100%) 100% no-repeat;
  flex-direction: column;
  box-shadow: 0 1px 12px 0 rgba(99,105,110,0.18);
`,c=Object(i.default)("div").withConfig({displayName:"StyledHeader"})`
  padding: 16px 21px 14px 19px;
  position: relative;
`,s=Object(i.default)("div").withConfig({displayName:"StyledTitle"})`
  font-size: 16px;
  font-weight: 300;
  line-height: 1.38;
  letter-spacing: -0.2px;
  color: rgba(255, 255, 255, 0.65);

  @media (max-width: 360px) {
    font-size: 14px;
  }
`,d=Object(i.default)("div").withConfig({displayName:"StyledBalance"})`
  margin-top: -14px;
  text-align: center;
`,p=Object(i.default)("div").withConfig({displayName:"StyledBalanceTokens"})`
  font-size: 38px;
  line-height: 0.61;
  letter-spacing: -0.4px;
  color: #fff;
  font-weight: 300;
  margin-top: 10px;
`,u=Object(i.default)("div").withConfig({displayName:"StyledBalanceConverted"})`
  font-family: Muli, sans-serif;
  font-size: 12px;
  line-height: 1.17;
  text-align: center;
  color: rgba(255, 255, 255, 0.65);
  margin: 8px 0;
`,m=Object(i.default)("span").withConfig({displayName:"StyledBalanceCurrency"})`
  text-transform: uppercase;
  opacity: 0.66;
  font-family: Muli, sans-serif;
  font-size: 16px;
  line-height: 14px;
  color: #fff;
  letter-spacing: 0px;
`;var h=n(2);n.d(t,"a",function(){return g});class g extends a.PureComponent{render(){const{id:e,balance:t,converted:n,onClick:i}=this.props;return a.createElement(r,{id:e,onClick:i},a.createElement(c,null,a.createElement(s,null,Object(h.b)("yourWallet")),a.createElement(d,null,a.createElement(p,null,t," ",a.createElement(m,null,"BAT")),n?a.createElement(u,null,n):null)))}}},function(e,t,n){"use strict";var a=n(0),i=n(1);const o=Object(i.default)("div").withConfig({displayName:"StyledWrapper"})`
  border-radius: 8px;
  background-image: linear-gradient(148deg, #2825a7, #5465e8), linear-gradient(#696fdc, #696fdc);
  width: 214px;
  overflow: hidden;
  position: relative;
  padding: 16px 0 0;
  font-family: Poppins, sans-serif;
`,l=Object(i.default)("div").withConfig({displayName:"StyledTitle"})`
  font-size: 12px;
  line-height: 1.83;
  color: #fff;
  opacity: 0.6;
  padding-left: 23px;
`,r=Object(i.default)("span").withConfig({displayName:"StyledAllowToggle"})`
  display: inline-block;
  margin-left: 33px;
  vertical-align: middle;
  padding-top: 2px;
`,c=Object(i.default)("span").withConfig({displayName:"StyledAllowText"})`
  opacity: 0.65;
  font-size: 10px;
  line-height: 1.5;
  color: #fff;
`,s=Object(i.default)("button").withConfig({displayName:"StyledClose"})`
  position: absolute;
  top: 12px;
  right: 12px;
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
  color: #DFDFE8;
  width: 20px;
  z-index: 2;
`,d=Object(i.default)("div").withConfig({displayName:"StyledTipWrapper"})`
  display: flex;
  max-width: 160px;
  margin-bottom: 7px;
`;var p=n(305),u=n(75),m=n(2),h=n(340);n.d(t,"a",function(){return g});class g extends a.PureComponent{constructor(){super(...arguments),this.onDonate=(e=>{this.props.onDonate&&this.props.onDonate(e,this.props.allow)}),this.onToggle=(()=>{this.props.onAllow&&this.props.onAllow(!this.props.allow)}),this.onAmountChange=(e=>{this.props.onAmountSelection&&this.props.onAmountSelection(e)})}render(){const{id:e,title:t,balance:n,donationAmounts:i,allow:g,onClose:f,provider:b,currentAmount:x}=this.props;return a.createElement(o,{id:e},a.createElement(s,{onClick:f},a.createElement(h.a,null)),a.createElement(l,null,"Send my tip to"),a.createElement(p.a,{title:t||"",actionText:Object(m.b)("sendTip"),balance:parseFloat(n),donationAmounts:i,onAmountSelection:this.onAmountChange,onDonate:this.onDonate,donateType:"small",currentAmount:x},a.createElement(d,null,a.createElement(c,null,Object(m.b)("allowTip")," ",b),a.createElement(r,null,a.createElement(u.a,{onToggle:this.onToggle,checked:g,size:"small",type:"light"})))))}}g.defaultProps={title:""}},function(e,t,n){"use strict";var a=n(0),i=n(1);const o=Object(i.default)("div").withConfig({displayName:"StyledWrapper"})`
  font-family: Poppins, sans-serif;
  display: flex;
  width: 100%;
  background-color: #fff;
  justify-content: space-between;
  align-items: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
  position: fixed;
  top: 0;
  left: 0;
  height: 61px;
  z-index: 2;
  box-shadow: 0 0 2px 0 rgba(99,105,110,0.55);
`,l=Object(i.default)("div").withConfig({displayName:"StyledLeft"})`
  flex-grow: 1;
  flex-shrink: 1;
  display: flex;
  align-items: center;
  padding: 0px 13px;
`,r=Object(i.default)("div").withConfig({displayName:"StyledRight"})`
  padding: 0px 15px;
  display: flex;
  height: 66px;
  align-items: center;
  margin-top: -3px;

  @media (max-width: 355px) {
    width: 55px;
    position: relative;
    right: 45px;
  }
`,c=Object(i.default)("div").withConfig({displayName:"StyledTitle"})`
  color: #4B4C5C;
  font-size: 22px;
  font-weight: 500;
  letter-spacing: 0.12px;
  line-height: 44px;
  margin-bottom: -23px;
`,s=Object(i.default)("span").withConfig({displayName:"StyledTM"})`
  font-size: 8px;
  font-weight: 300;
  letter-spacing: 0.2px;
  text-align: center;
  color: #222326;
  position: relative;
  top: -13px;
  vertical-align: text-top;
`,d=Object(i.default)("div").withConfig({displayName:"StyledLogoWrapper"})`
  width: 30px;
  height: 30px;
  margin-top: 13px;
  margin-right: 5px;
`;var p=n(75),u=n(2),m=n(342);n.d(t,"a",function(){return h});class h extends a.PureComponent{render(){const{id:e,enabled:t,onToggle:n,testId:i}=this.props;return a.createElement(o,{id:e},a.createElement(l,null,a.createElement(d,null,a.createElement(m.a,null)),a.createElement(c,null,Object(u.b)("braveRewards")," ",a.createElement(s,null,"TM"))),a.createElement(r,null,a.createElement(p.a,{checked:t,onToggle:n,testId:i})))}}},function(e,t,n){"use strict";var a=n(0),i=n(1);const o=Object(i.default)("button").withConfig({displayName:"StyledButtonWrapper"})`
  width: 100%;
  display: flex;
  color: white;
  font-size: 14px;
  border-radius: 28px;
  background: inherit;
  cursor: ${e=>e.disabled?"default":"pointer"};
  ${e=>((e,t)=>{let n=null;switch(e){case"tip":n=i.css`
        height: 40px;
        color: #4C54D2;
        border-radius: 20px;
        font-size: 12px;
        border: 1px solid #A1A8F2;
      `;break;case"opt-in":n=i.css`
        height: 56px;
        border-radius: 28px;
        letter-spacing: .6px;
        border: 1px solid rgba(255, 255, 255, 0.35);

        &:hover {
          background: ${e=>t?"inherit":"rgba(0, 0, 0, 0.05)"};
        }
      `;break;case"cta-opt-in":n=i.css`
        height: 56px;
        letter-spacing: .6px;
        background: ${e=>e.theme.color.brandBrave};

        &:hover {
          background: ${e=>t?e.theme.color.brandBrave:e.theme.brandBraveInteracting};
        }
      `}return n})(e.type,e.disabled)}
`,l=Object(i.default)("span").withConfig({displayName:"StyledButtonText"})`
  font-family: Poppins, sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.39px;
  margin: 0 auto;
`,r=Object(i.default)("div").withConfig({displayName:"StyledIcon"})`
  display: inline-block;
  line-height: 0;
  height: 18px;
  width: 18px;
  vertical-align: bottom;
  margin: 0 -4px 0 6px;
`;n.d(t,"a",function(){return c});class c extends a.PureComponent{render(){const{text:e,testId:t,type:n,disabled:i,onClick:c,icon:s}=this.props;return a.createElement(o,{type:n,disabled:i,onClick:c,"data-test-id":t},a.createElement(l,null,e,s?a.createElement(r,null,s):null))}}}],[[839,2,4]]]);
//# sourceMappingURL=iframe.592f6e6fdca86e89bf7a.bundle.js.map