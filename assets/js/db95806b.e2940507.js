"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4788],{58215:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294);const o=function(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},82895:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(87462),o=n(67294),r=n(72389),i=n(79443);const l=function(){var e=(0,o.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var s=n(15779),c=n(86010);const u="tabItem_vU9c";function m(e){var t,n,r,i=e.lazy,m=e.block,d=e.defaultValue,p=e.values,f=e.groupId,v=e.className,h=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=p?p:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,s.lx)(k,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===d?d:null!=(t=null!=d?d:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=h[0])?void 0:r.props.value;if(null!==b&&!k.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var I=l(),A=I.tabGroupChoices,N=I.setTabGroupChoices,w=(0,o.useState)(b),y=w[0],D=w[1],x=[],C=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var E=A[f];null!=E&&E!==y&&k.some((function(e){return e.value===E}))&&D(E)}var T=function(e){var t=e.currentTarget,n=x.indexOf(t),a=k[n].value;a!==y&&(C(t),D(a),null!=f&&N(f,a))},Z=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=x.indexOf(e.currentTarget)+1;n=x[a]||x[0];break;case"ArrowLeft":var o=x.indexOf(e.currentTarget)-1;n=x[o]||x[x.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":m},v)},k.map((function(e){var t=e.value,n=e.label,r=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:function(e){return x.push(e)},onKeyDown:Z,onFocus:T,onClick:T},r,{className:(0,c.Z)("tabs__item",u,null==r?void 0:r.className,{"tabs__item--active":y===t})}),null!=n?n:t)}))),i?(0,o.cloneElement)(h.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}function d(e){var t=(0,r.Z)();return o.createElement(m,(0,a.Z)({key:String(t)},e))}},54651:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>c,metadata:()=>u,toc:()=>m,default:()=>p});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=n(63770),l=(n(34738),n(82895),n(58215),["components"]),s={id:"icon",title:"Icon",slug:"/icon"},c=void 0,u={unversionedId:"main/icon",id:"main/icon",title:"Icon",description:"Icons are visual indicators usually used to describe action or intent.",source:"@site/docs/main/Icon.mdx",sourceDirName:"main",slug:"/icon",permalink:"/docs/next/icon",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/main/Icon.mdx",tags:[],version:"current",frontMatter:{id:"icon",title:"Icon",slug:"/icon"},sidebar:"docs",previous:{title:"Header",permalink:"/docs/next/header"},next:{title:"Image",permalink:"/docs/next/image"}},m=[{value:"Usage",id:"usage",children:[],level:2},{value:"Props",id:"props",children:[{value:"Icon",id:"icon",children:[],level:3}],level:2},{value:"Reference",id:"reference",children:[{value:"Icon",id:"icon-1",children:[],level:3}],level:2}],d={toc:m};function p(e){var t=e.components,n=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Icons are visual indicators usually used to describe action or intent."),(0,r.kt)("p",null,"They are also used for displaying information."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(i.default,{mdxType:"Usage"}),(0,r.kt)("h2",{id:"props"},"Props"),(0,r.kt)("h3",{id:"icon"},"Icon"),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("h3",{id:"icon-1"},"Icon"))}p.isMDXComponent=!0},63770:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>c,metadata:()=>u,toc:()=>m,default:()=>p});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=n(68367),l=["components"],s={},c=void 0,u={unversionedId:"main/usage/Icon/Icon",id:"main/usage/Icon/Icon",title:"Icon",description:"Hint: use reverse to make your icon look like a button",source:"@site/docs/main/usage/Icon/Icon.mdx",sourceDirName:"main/usage/Icon",slug:"/main/usage/Icon/",permalink:"/docs/next/main/usage/Icon/",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/main/usage/Icon/Icon.mdx",tags:[],version:"current",frontMatter:{}},m=[{value:"Available Icon Sets",id:"available-icon-sets",children:[],level:2},{value:"Custom Icon Fonts",id:"custom-icon-fonts",children:[],level:2}],d={toc:m};function p(e){var t=e.components,n=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Hint: use ",(0,r.kt)("strong",{parentName:"p"},"reverse")," to make your icon look like a button")),(0,r.kt)("h2",{id:"available-icon-sets"},"Available Icon Sets"),(0,r.kt)("p",null,"The icon sets in React Native Elements are made possible through\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/oblador/react-native-vector-icons"},"react-native-vector-icons"),"."),(0,r.kt)("p",null,"The current list of available icons sets are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://ant.design/components/icon/"},"antdesign")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://www.entypo.com/"},"entypo")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://evil-icons.io/"},"evilicon")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://feathericons.com/"},"feather")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://fontawesome.com/v4.7.0/"},"font-awesome")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://fontawesome.com/"},"font-awesome-5")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.fontisto.com/icons"},"fontisto")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://zurb.com/playground/foundation-icon-fonts-3"},"foundation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://ionicons.com/"},"ionicon")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://material.io/tools/icons"},"material")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://materialdesignicons.com/"},"material-community")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://octicons.github.com/"},"octicon")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://simplelineicons.github.io/"},"simple-line-icon")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://weloveiconfonts.com/"},"zocial"))),(0,r.kt)("h2",{id:"custom-icon-fonts"},"Custom Icon Fonts"),(0,r.kt)("p",null,"Register your own custom icons by calling\n",(0,r.kt)("inlineCode",{parentName:"p"},"registerCustomIconType('customid', customFont)"),". Create a custom font by\nfollowing the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/oblador/react-native-vector-icons#custom-fonts"}," instructions for creating a custom font here"),".\nAlso, you can use ",(0,r.kt)("a",{parentName:"p",href:"http://fontello.com/"},"Fontello")," to generate custom icon\nfonts."),(0,r.kt)(i.default,{mdxType:"Snack"}))}p.isMDXComponent=!0},68367:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>c,toc:()=>u,default:()=>d});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],l={},s=void 0,c={unversionedId:"main/usage/Icon/snack/index",id:"main/usage/Icon/snack/index",title:"index",description:"",source:"@site/docs/main/usage/Icon/snack/index.md",sourceDirName:"main/usage/Icon/snack",slug:"/main/usage/Icon/snack/",permalink:"/docs/next/main/usage/Icon/snack/",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/main/usage/Icon/snack/index.md",tags:[],version:"current",frontMatter:{}},u=[],m={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"snack-player","data-snack-name":"RNE Icon","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20View%2C%20Text%20%7D%20from%20'react-native'%3B%0Aimport%20%7B%20Icon%20%7D%20from%20'react-native-elements'%3B%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20alignItems%3A%20'center'%2C%0A%20%20%20%20%20%20%20%20%20%20paddingVertical%3A%205%2C%0A%20%20%20%20%20%20%20%20%20%20flexGrow%3A%201%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CIcon%0A%20%20%20%20%20%20%20%20%20%20name%3D'rowing'%20%2F%3E%0A%0A%20%20%20%20%20%20%20%20%3CIcon%0A%20%20%20%20%20%20%20%20%20%20name%3D'g-translate'%0A%20%20%20%20%20%20%20%20%20%20color%3D'%2300aced'%20%2F%3E%0A%0A%20%20%20%20%20%20%20%20%3CIcon%0A%20%20%20%20%20%20%20%20%20%20name%3D'sc-telegram'%0A%20%20%20%20%20%20%20%20%20%20type%3D'evilicon'%0A%20%20%20%20%20%20%20%20%20%20color%3D'%23517fa4'%0A%20%20%20%20%20%20%20%20%2F%3E%0A%0A%20%20%20%20%20%20%20%20%3CIcon%0A%20%20%20%20%20%20%20%20%20%20reverse%0A%20%20%20%20%20%20%20%20%20%20name%3D'ios-american-football'%0A%20%20%20%20%20%20%20%20%20%20type%3D'ionicon'%0A%20%20%20%20%20%20%20%20%20%20color%3D'%23517fa4'%0A%20%20%20%20%20%20%20%20%2F%3E%0A%0A%20%20%20%20%20%20%20%20%3CIcon%0A%20%20%20%20%20%20%20%20%20%20raised%0A%20%20%20%20%20%20%20%20%20%20name%3D'heartbeat'%0A%20%20%20%20%20%20%20%20%20%20type%3D'font-awesome'%0A%20%20%20%20%20%20%20%20%20%20color%3D'%23f50'%0A%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20console.log('hello')%7D%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3C%2F%3E%0A%20%20)%3B%0A%7D%3B","data-snack-dependencies":"react-native-elements","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}d.isMDXComponent=!0}}]);