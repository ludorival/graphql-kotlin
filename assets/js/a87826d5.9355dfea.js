"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[7474],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),g=r,m=u["".concat(s,".").concat(g)]||u[g]||d[g]||o;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7796:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={id:"schema-generator-getting-started",title:"Getting Started with the Schema Generator",original_id:"schema-generator-getting-started"},s=void 0,c={unversionedId:"schema-generator/schema-generator-getting-started",id:"version-3.x.x/schema-generator/schema-generator-getting-started",title:"Getting Started with the Schema Generator",description:"Install",source:"@site/versioned_docs/version-3.x.x/schema-generator/schema-generator-getting-started.md",sourceDirName:"schema-generator",slug:"/schema-generator/schema-generator-getting-started",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/schema-generator-getting-started",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-3.x.x/schema-generator/schema-generator-getting-started.md",tags:[],version:"3.x.x",lastUpdatedBy:"Samuel Vazquez",lastUpdatedAt:1650980028,formattedLastUpdatedAt:"4/26/2022",frontMatter:{id:"schema-generator-getting-started",title:"Getting Started with the Schema Generator",original_id:"schema-generator-getting-started"},sidebar:"version-3.x.x/docs",previous:{title:"Blogs & Videos",permalink:"/graphql-kotlin/docs/3.x.x/blogs-and-videos"},next:{title:"Nullability",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/writing-schemas/nullability"}},p={},d=[{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"<code>toSchema</code>",id:"toschema",level:2},{value:"Class <code>TopLevelObject</code>",id:"class-toplevelobject",level:2}],u={toc:d};function g(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"install"},"Install"),(0,o.kt)("p",null,"Using a JVM dependency manager, link ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," to your project."),(0,o.kt)("p",null,"With Maven:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"\n<dependency>\n  <groupId>com.expediagroup</groupId>\n  <artifactId>graphql-kotlin-schema-generator</artifactId>\n  <version>${latestVersion}</version>\n</dependency>\n\n")),(0,o.kt)("p",null,"With Gradle:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'\nimplementation("com.expediagroup", "graphql-kotlin-schema-generator", latestVersion)\n\n')),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," provides a single function, ",(0,o.kt)("inlineCode",{parentName:"p"},"toSchema"),", to generate a schema from Kotlin objects."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"\ndata class Widget(val id: Int, val value: String)\n\nclass WidgetQuery {\n  fun widgetById(id: Int): Widget? {\n    // grabs widget from a data source\n  }\n}\n\nclass WidgetMutation {\n  fun saveWidget(value: String): Widget {\n    // some logic for saving widget\n  }\n}\n\nval widgetQuery = WidgetQuery()\nval widgetMutation = WidgetMutation()\nval schema = toSchema(\n  config = yourCustomConfig(),\n  queries = listOf(TopLevelObject(widgetQuery)),\n  mutations = listOf(TopLevelObject(widgetMutation))\n)\n\n")),(0,o.kt)("p",null,"will generate:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"\nschema {\n  query: Query\n  mutation: Mutation\n}\n\ntype Query {\n  widgetById(id: Int!): Widget\n}\n\ntype Mutation {\n  saveWidget(value: String!): Widget!\n}\n\ntype Widget {\n  id: Int!\n  value: String!\n}\n\n")),(0,o.kt)("p",null,"Any ",(0,o.kt)("inlineCode",{parentName:"p"},"public")," functions defined on a query, mutation, or subscription Kotlin class will be translated into GraphQL fields on the object\ntype. ",(0,o.kt)("inlineCode",{parentName:"p"},"toSchema")," will then recursively apply Kotlin reflection on the specified classes to generate all\nremaining object types, their properties, functions, and function arguments."),(0,o.kt)("p",null,"The generated ",(0,o.kt)("inlineCode",{parentName:"p"},"GraphQLSchema")," can then be used to expose a GraphQL API endpoint."),(0,o.kt)("h2",{id:"toschema"},(0,o.kt)("inlineCode",{parentName:"h2"},"toSchema")),(0,o.kt)("p",null,"This function accepts four arguments: ",(0,o.kt)("inlineCode",{parentName:"p"},"config"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"queries"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"mutations")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"subscriptions"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"queries"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"mutations"),"\nand ",(0,o.kt)("inlineCode",{parentName:"p"},"subscriptions")," are a list of ",(0,o.kt)("inlineCode",{parentName:"p"},"TopLevelObject"),"s and will be used to generate corresponding GraphQL root types. See\nbelow on why we use this wrapper class. The ",(0,o.kt)("inlineCode",{parentName:"p"},"config")," contains all the extra information you need to pass, including\ncustom hooks, supported packages, and name overrides. See the ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/3.x.x/schema-generator/customizing-schemas/generator-config"},"Generator Configuration")," documentation for more information."),(0,o.kt)("p",null,"You can see the definition for ",(0,o.kt)("inlineCode",{parentName:"p"},"toSchema")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/3.x.x/generator/graphql-kotlin-schema-generator/src/main/kotlin/com/expediagroup/graphql/generator/toSchema.kt"},"in the\nsource")),(0,o.kt)("h2",{id:"class-toplevelobject"},"Class ",(0,o.kt)("inlineCode",{parentName:"h2"},"TopLevelObject")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"toSchema")," uses Kotlin reflection to build a GraphQL schema from given classes using ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-java"),"'s schema builder. We\ndon't just pass a ",(0,o.kt)("inlineCode",{parentName:"p"},"KClass")," though, we have to actually pass an object, because the functions on the object are\ntransformed into the data fetchers. In most cases, a ",(0,o.kt)("inlineCode",{parentName:"p"},"TopLevelObject")," can be constructed with just an object:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"\nclass Query {\n  fun getNumber() = 1\n}\n\nval topLevelObject = TopLevelObject(Query())\n\ntoSchema(config = config, queries = listOf(topLevelObject))\n\n")),(0,o.kt)("p",null,"In the above case, ",(0,o.kt)("inlineCode",{parentName:"p"},"toSchema")," will use ",(0,o.kt)("inlineCode",{parentName:"p"},"topLevelObject::class")," as the reflection target, and ",(0,o.kt)("inlineCode",{parentName:"p"},"Query")," as the data fetcher\ntarget."),(0,o.kt)("p",null,"In a lot of cases, such as with Spring AOP, the object (or bean) being used to generate a schema is a dynamic proxy. In\nthis case, ",(0,o.kt)("inlineCode",{parentName:"p"},"topLevelObject::class")," is not ",(0,o.kt)("inlineCode",{parentName:"p"},"Query"),", but rather a generated class that will confuse the schema generator.\nTo specify the ",(0,o.kt)("inlineCode",{parentName:"p"},"KClass")," to use for reflection on a proxy, pass the class to ",(0,o.kt)("inlineCode",{parentName:"p"},"TopLevelObject"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"\n@Component\nclass Query {\n  @Timed\n  fun getNumber() = 1\n}\n\nval query = getObjectFromBean()\nval customDef = TopLevelObject(query, Query::class)\n\ntoSchema(config, listOf(customDef))\n\n")))}g.isMDXComponent=!0}}]);