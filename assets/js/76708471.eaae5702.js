"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[86593],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),h=s(n),f=o,p=h["".concat(u,".").concat(f)]||h[f]||d[f]||r;return n?a.createElement(p,i(i({ref:t},l),{},{components:n})):a.createElement(p,i({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},94829:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return d}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],c={title:"Local Authentication",weight:1111},u=void 0,s={unversionedId:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/create-local-users",id:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/create-local-users",title:"Local Authentication",description:"Local authentication is the default until you configure an external authentication provider. Local authentication is where Rancher stores the user information, i.e. names and passwords, of who can log in to Rancher. By default, the admin user that logs in to Rancher for the first time is a local user.",source:"@site/docs/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/create-local-users.md",sourceDirName:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config",slug:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/create-local-users",permalink:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/create-local-users",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/create-local-users.md",tags:[],version:"current",lastUpdatedAt:1663024307,formattedLastUpdatedAt:"9/12/2022",frontMatter:{title:"Local Authentication",weight:1111},sidebar:"tutorialSidebar",previous:{title:"Users and Groups",permalink:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/manage-users-and-groups"},next:{title:"Configure Google OAuth",permalink:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-google-oauth"}},l={},d=[{value:"Adding Local Users",id:"adding-local-users",level:2}],h={toc:d};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Local authentication is the default until you configure an external authentication provider. Local authentication is where Rancher stores the user information, i.e. names and passwords, of who can log in to Rancher. By default, the ",(0,r.kt)("inlineCode",{parentName:"p"},"admin")," user that logs in to Rancher for the first time is a local user."),(0,r.kt)("h2",{id:"adding-local-users"},"Adding Local Users"),(0,r.kt)("p",null,"Regardless of whether you use external authentication, you should create a few local authentication users so that you can continue using Rancher if your external authentication service encounters issues."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In the top left corner, click ",(0,r.kt)("strong",{parentName:"li"},"\u2630 > Users & Authentication"),"."),(0,r.kt)("li",{parentName:"ol"},"In the left navigation menu, click ",(0,r.kt)("strong",{parentName:"li"},"Users"),"."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Create"),"."),(0,r.kt)("li",{parentName:"ol"},"Complete the ",(0,r.kt)("strong",{parentName:"li"},"Add User")," form."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Create"),".")))}f.isMDXComponent=!0}}]);