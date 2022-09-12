"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[57506],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(r),h=a,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||o;return r?n.createElement(m,s(s({ref:t},u),{},{components:r})):n.createElement(m,s({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},98301:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),s=["components"],i={title:"Role-Based Access Control (RBAC)",weight:20},c=void 0,l={unversionedId:"pages-for-subheaders/manage-role-based-access-control-rbac",id:"pages-for-subheaders/manage-role-based-access-control-rbac",title:"Role-Based Access Control (RBAC)",description:"Within Rancher, each person authenticates as a user, which is a login that grants you access to Rancher. As mentioned in Authentication, users can either be local or external.",source:"@site/docs/pages-for-subheaders/manage-role-based-access-control-rbac.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/manage-role-based-access-control-rbac",permalink:"/pages-for-subheaders/manage-role-based-access-control-rbac",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/pages-for-subheaders/manage-role-based-access-control-rbac.md",tags:[],version:"current",lastUpdatedAt:1663024307,formattedLastUpdatedAt:"9/12/2022",frontMatter:{title:"Role-Based Access Control (RBAC)",weight:20},sidebar:"tutorialSidebar",previous:{title:"Group Permissions with Shibboleth and OpenLDAP",permalink:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-shibboleth-saml/about-group-permissions"},next:{title:"Global Permissions",permalink:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions"}},u={},p=[{value:"Users and Roles",id:"users-and-roles",level:2}],d={toc:p};function h(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Within Rancher, each person authenticates as a ",(0,o.kt)("em",{parentName:"p"},"user"),", which is a login that grants you access to Rancher. As mentioned in ",(0,o.kt)("a",{parentName:"p",href:"/pages-for-subheaders/about-authentication"},"Authentication"),", users can either be local or external."),(0,o.kt)("p",null,"After you configure external authentication, the users that display on the ",(0,o.kt)("strong",{parentName:"p"},"Users")," page changes."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If you are logged in as a local user, only local users display.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If you are logged in as an external user, both external and local users display."))),(0,o.kt)("h2",{id:"users-and-roles"},"Users and Roles"),(0,o.kt)("p",null,"Once the user logs in to Rancher, their ",(0,o.kt)("em",{parentName:"p"},"authorization"),", or their access rights within the system, is determined by ",(0,o.kt)("em",{parentName:"p"},"global permissions"),", and ",(0,o.kt)("em",{parentName:"p"},"cluster and project roles"),".  "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions"},"Global Permissions"),":"),(0,o.kt)("p",{parentName:"li"},"  Define user authorization outside the scope of any particular cluster.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles"},"Cluster and Project Roles"),":"),(0,o.kt)("p",{parentName:"li"},"  Define user authorization inside the specific cluster or project where they are assigned the role."))),(0,o.kt)("p",null,"Both global permissions and cluster and project roles are implemented on top of ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/rbac/"},"Kubernetes RBAC"),". Therefore, enforcement of permissions and roles is performed by Kubernetes."))}h.isMDXComponent=!0}}]);