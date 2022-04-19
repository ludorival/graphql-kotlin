"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[354],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),c=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=c(t.components);return r.createElement(u.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,u=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),m=c(n),d=a,g=m["".concat(u,".").concat(d)]||m[d]||l[d]||o;return n?r.createElement(g,i(i({ref:e},p),{},{components:n})):r.createElement(g,i({ref:e},p))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var u in e)hasOwnProperty.call(e,u)&&(s[u]=e[u]);s.originalType=t,s.mdxType="string"==typeof t?t:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},497:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>u,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={id:"restricting-input-output",title:"Restricting Input and Output Types"},u=void 0,c={unversionedId:"schema-generator/customizing-schemas/restricting-input-output",id:"schema-generator/customizing-schemas/restricting-input-output",title:"Restricting Input and Output Types",description:"Since we are using Kotlin classes to represent both GraphQL input and output objects we can use the same class for both and the generator will handle type conflicts.",source:"@site/docs/schema-generator/customizing-schemas/restricting-input-output.md",sourceDirName:"schema-generator/customizing-schemas",slug:"/schema-generator/customizing-schemas/restricting-input-output",permalink:"/graphql-kotlin/docs/schema-generator/customizing-schemas/restricting-input-output",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/schema-generator/customizing-schemas/restricting-input-output.md",tags:[],version:"current",lastUpdatedBy:"bherrmann2",lastUpdatedAt:1650394794,formattedLastUpdatedAt:"4/19/2022",frontMatter:{id:"restricting-input-output",title:"Restricting Input and Output Types"},sidebar:"docs",previous:{title:"Custom Types",permalink:"/graphql-kotlin/docs/schema-generator/customizing-schemas/custom-type-reference"},next:{title:"Advanced Features",permalink:"/graphql-kotlin/docs/schema-generator/customizing-schemas/advanced-features"}},p={},l=[],m={toc:l};function d(t){var e=t.components,n=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Since we are using Kotlin classes to represent both GraphQL input and output objects we can use the same class for both and the generator will handle type conflicts."),(0,o.kt)("p",null,"If you want to enforce that a type should never be used as an input or output you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"@GraphQLValidObjectLocations")," annotation.\nIf the class was used in the schema in an invalid location an exception will be thrown."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'class SimpleClass(val value: String)\n\n@GraphQLValidObjectLocations([Locations.INPUT_OBJECT])\nclass InputOnly(val value: String)\n\n@GraphQLValidObjectLocations([Locations.OBJECT])\nclass OutputOnly(val value: String)\n\n// Valid Usage\nfun output1() = SimpleClass("foo")\nfun output2() = OutputOnly("foo")\nfun input1(input: SimpleClass) = "value was ${input.value}"\nfun input2(input: InputOnly) = "value was ${input.value}"\n\n// Throws Exception\nfun output3() = InputOnly("foo")\nfun input3(input: OutputOnly) = "value was ${input.value}"\n')))}d.isMDXComponent=!0}}]);