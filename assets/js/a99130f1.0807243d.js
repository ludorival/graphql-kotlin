"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[989],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var a=o.createContext({}),l=function(e){var t=o.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=l(e.components);return o.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(r),d=n,h=m["".concat(a,".").concat(d)]||m[d]||u[d]||i;return r?o.createElement(h,p(p({ref:t},c),{},{components:r})):o.createElement(h,p({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,p=new Array(i);p[0]=m;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:n,p[1]=s;for(var l=2;l<i;l++)p[l]=r[l];return o.createElement.apply(null,p)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6570:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var o=r(7462),n=r(3366),i=(r(7294),r(3905)),p=["components"],s={id:"subscriptions",title:"Subscriptions",original_id:"subscriptions"},a=void 0,l={unversionedId:"spring-server/subscriptions",id:"version-3.x.x/spring-server/subscriptions",title:"Subscriptions",description:"Schema",source:"@site/versioned_docs/version-3.x.x/spring-server/subscriptions.md",sourceDirName:"spring-server",slug:"/spring-server/subscriptions",permalink:"/graphql-kotlin/docs/3.x.x/spring-server/subscriptions",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-3.x.x/spring-server/subscriptions.md",tags:[],version:"3.x.x",lastUpdatedBy:"Samuel Vazquez",lastUpdatedAt:1650980028,formattedLastUpdatedAt:"4/26/2022",frontMatter:{id:"subscriptions",title:"Subscriptions",original_id:"subscriptions"},sidebar:"version-3.x.x/docs",previous:{title:"Access the HTTP Request-Response",permalink:"/graphql-kotlin/docs/3.x.x/spring-server/http-request-response"},next:{title:"Client Overview",permalink:"/graphql-kotlin/docs/3.x.x/client/client-overview"}},c={},u=[{value:"Schema",id:"schema",level:2},{value:"<code>graphql-ws</code> subprotocol",id:"graphql-ws-subprotocol",level:2},{value:"Overview",id:"overview",level:3},{value:"Subscription Hooks",id:"subscription-hooks",level:3},{value:"Example",id:"example",level:2}],m={toc:u};function d(e){var t=e.components,r=(0,n.Z)(e,p);return(0,i.kt)("wrapper",(0,o.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"schema"},"Schema"),(0,i.kt)("p",null,"To see more details of how to implement subscriptions in your schema, see ",(0,i.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/3.x.x/schema-generator/execution/subscriptions"},"executing subscriptions"),"."),(0,i.kt)("h2",{id:"graphql-ws-subprotocol"},(0,i.kt)("inlineCode",{parentName:"h2"},"graphql-ws")," subprotocol"),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("p",null,"We have implemented subscriptions in Spring WebSockets following the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apollographql/subscriptions-transport-ws/blob/3.x.x/PROTOCOL.md"},(0,i.kt)("inlineCode",{parentName:"a"},"graphql-ws")," subprotocol")," defined by Apollo. This requires that your client send and parse messages in a specific format."),(0,i.kt)("p",null,"You can see more details in the file ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/3.x.x/graphql-kotlin-spring-server/src/main/kotlin/com/expediagroup/graphql/spring/execution/ApolloSubscriptionProtocolHandler.kt"},"ApolloSubscriptionProtocolHandler"),"."),(0,i.kt)("p",null,"If you would like to implement your own subscription handler, you can provide a primary spring bean for ",(0,i.kt)("inlineCode",{parentName:"p"},"HandlerMapping")," that overrides the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/3.x.x/graphql-kotlin-spring-server/src/main/kotlin/com/expediagroup/graphql/spring/SubscriptionAutoConfiguration.kt"},"default one")," which sets the url for subscriptions to the Apollo subscription handler."),(0,i.kt)("h3",{id:"subscription-hooks"},"Subscription Hooks"),(0,i.kt)("p",null,"In line with the protocol, we have implemented hooks to execute functions at different stages of the connection lifecycle:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"onConnect"),(0,i.kt)("li",{parentName:"ul"},"onOperation"),(0,i.kt)("li",{parentName:"ul"},"onOperationComplete"),(0,i.kt)("li",{parentName:"ul"},"onDisconnect")),(0,i.kt)("p",null,"You can see more details in the file ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/3.x.x/graphql-kotlin-spring-server/src/main/kotlin/com/expediagroup/graphql/spring/execution/ApolloSubscriptionHooks.kt"},"ApolloSubscriptionHooks"),"."),(0,i.kt)("p",null,"If you would like to implement your own subscription hooks, you can provide a primary spring bean for ",(0,i.kt)("inlineCode",{parentName:"p"},"ApolloSubscriptionHooks")," that overrides the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/3.x.x/graphql-kotlin-spring-server/src/main/kotlin/com/expediagroup/graphql/spring/SubscriptionAutoConfiguration.kt"},"default one")," which do not perform any actions."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"You can see an example implementation of a ",(0,i.kt)("inlineCode",{parentName:"p"},"Subscription")," in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/3.x.x/examples/spring/src/main/kotlin/com/expediagroup/graphql/examples/subscriptions/SimpleSubscription.kt"},"example app"),"."))}d.isMDXComponent=!0}}]);