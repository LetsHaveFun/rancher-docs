"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[81475],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(a),f=n,m=c["".concat(s,".").concat(f)]||c[f]||p[f]||l;return a?r.createElement(m,i(i({ref:t},d),{},{components:a})):r.createElement(m,i({ref:t},d))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},52877:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));const l={title:"Feature Flags"},i=void 0,o={unversionedId:"reference-guides/installation-references/feature-flags",id:"version-2.0-2.4/reference-guides/installation-references/feature-flags",title:"Feature Flags",description:"Feature flags were introduced to allow you to try experimental features that are not enabled by default.",source:"@site/versioned_docs/version-2.0-2.4/reference-guides/installation-references/feature-flags.md",sourceDirName:"reference-guides/installation-references",slug:"/reference-guides/installation-references/feature-flags",permalink:"/v2.0-v2.4/reference-guides/installation-references/feature-flags",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/reference-guides/installation-references/feature-flags.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1685125139,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{title:"Feature Flags"},sidebar:"tutorialSidebar",previous:{title:"TLS Settings",permalink:"/v2.0-v2.4/reference-guides/installation-references/tls-settings"},next:{title:"Creating an EKS Cluster",permalink:"/v2.0-v2.4/reference-guides/installation-references/amazon-eks-permissions"}},s={},u=[],d={toc:u};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("link",{rel:"canonical",href:"https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/installation-references/feature-flags"})),(0,n.kt)("p",null,"Feature flags were introduced to allow you to try experimental features that are not enabled by default."),(0,n.kt)("p",null,"To learn about feature values and how to enable features, refer ",(0,n.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/enable-experimental-features"},"here"),"."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"As of v2.4.0, there are some feature flags that may require a restart of the Rancher server container. These features that require a restart are marked in the table of these docs and in the UI.")),(0,n.kt)("p",null,"The following is a list of the feature flags available in Rancher:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"dashboard"),": This feature enables the new experimental UI that has a new look and feel. The dashboard also leverages a new API in Rancher which allows the UI to access the default Kubernetes resources without any intervention from Rancher."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"istio-virtual-service-ui"),": This feature enables a ",(0,n.kt)("a",{parentName:"li",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/istio-traffic-management-features"},"UI to create, read, update, and delete Istio virtual services and destination rules"),", which are traffic management features of Istio."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"proxy"),": This feature enables Rancher to use a new simplified code base for the proxy, which can help enhance performance and security. The proxy feature is known to have issues with Helm deployments, which prevents any catalog applications to be deployed which includes Rancher's tools like monitoring, logging, Istio, etc."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"unsupported-storage-drivers"),": This feature ",(0,n.kt)("a",{parentName:"li",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/unsupported-storage-drivers"},"allows unsupported storage drivers.")," In other words, it enables types for storage providers and provisioners that are not enabled by default.")),(0,n.kt)("p",null,"The below table shows the availability and default value for feature flags in Rancher:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Feature Flag Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,n.kt)("th",{parentName:"tr",align:null},"Status"),(0,n.kt)("th",{parentName:"tr",align:null},"Available as of"),(0,n.kt)("th",{parentName:"tr",align:null},"Rancher Restart Required?"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"dashboard")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"true")),(0,n.kt)("td",{parentName:"tr",align:null},"Experimental"),(0,n.kt)("td",{parentName:"tr",align:null},"v2.4.0"),(0,n.kt)("td",{parentName:"tr",align:null},"x")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"istio-virtual-service-ui")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"false")),(0,n.kt)("td",{parentName:"tr",align:null},"Experimental"),(0,n.kt)("td",{parentName:"tr",align:null},"v2.3.0"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"istio-virtual-service-ui")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"true")),(0,n.kt)("td",{parentName:"tr",align:null},"GA"),(0,n.kt)("td",{parentName:"tr",align:null},"v2.3.2"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"proxy")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"false")),(0,n.kt)("td",{parentName:"tr",align:null},"Experimental"),(0,n.kt)("td",{parentName:"tr",align:null},"v2.4.0"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"unsupported-storage-drivers")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"false")),(0,n.kt)("td",{parentName:"tr",align:null},"Experimental"),(0,n.kt)("td",{parentName:"tr",align:null},"v2.3.0"),(0,n.kt)("td",{parentName:"tr",align:null})))))}p.isMDXComponent=!0}}]);