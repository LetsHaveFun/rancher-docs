"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[44955],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return y}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(r),y=o,m=d["".concat(c,".").concat(y)]||d[y]||l[y]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},43167:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return y},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return l}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],s={title:"Adding a Pod Security Policy",weight:80,aliases:["/rancher/v2.x/en/cluster-admin/pod-security-policy/"]},c=void 0,u={unversionedId:"how-to-guides/advanced-user-guides/manage-clusters/add-a-pod-security-policy",id:"version-2.5/how-to-guides/advanced-user-guides/manage-clusters/add-a-pod-security-policy",title:"Adding a Pod Security Policy",description:"Prerequisite: The options below are available only for clusters that are launched using RKE.",source:"@site/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/manage-clusters/add-a-pod-security-policy.md",sourceDirName:"how-to-guides/advanced-user-guides/manage-clusters",slug:"/how-to-guides/advanced-user-guides/manage-clusters/add-a-pod-security-policy",permalink:"/v2.5/how-to-guides/advanced-user-guides/manage-clusters/add-a-pod-security-policy",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/manage-clusters/add-a-pod-security-policy.md",tags:[],version:"2.5",lastUpdatedAt:1663024307,formattedLastUpdatedAt:"9/12/2022",frontMatter:{title:"Adding a Pod Security Policy",weight:80,aliases:["/rancher/v2.x/en/cluster-admin/pod-security-policy/"]},sidebar:"tutorialSidebar",previous:{title:"Removing Kubernetes Components from Nodes",permalink:"/v2.5/how-to-guides/advanced-user-guides/manage-clusters/clean-cluster-nodes"},next:{title:"Assigning Pod Security Policies",permalink:"/v2.5/how-to-guides/advanced-user-guides/manage-clusters/assign-pod-security-policies"}},p={},l=[],d={toc:l};function y(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Prerequisite:")," The options below are available only for clusters that are ",(0,a.kt)("a",{parentName:"p",href:"/v2.5/pages-for-subheaders/launch-kubernetes-with-rancher"},"launched using RKE.")," ")),(0,a.kt)("p",null,"When your cluster is running pods with security-sensitive configurations, assign it a ",(0,a.kt)("a",{parentName:"p",href:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/create-pod-security-policies"},"pod security policy"),", which is a set of rules that monitors the conditions and settings in your pods. If a pod doesn't meet the rules specified in your policy, the policy stops it from running."),(0,a.kt)("p",null,"You can assign a pod security policy when you provision a cluster. However, if you need to relax or restrict security for your pods later, you can update the policy while editing your cluster."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"From the ",(0,a.kt)("strong",{parentName:"p"},"Global")," view, find the cluster to which you want to apply a pod security policy. Select ",(0,a.kt)("strong",{parentName:"p"},"\u22ee"," > Edit"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Expand ",(0,a.kt)("strong",{parentName:"p"},"Cluster Options"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"From ",(0,a.kt)("strong",{parentName:"p"},"Pod Security Policy Support"),", select ",(0,a.kt)("strong",{parentName:"p"},"Enabled"),"."),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," This option is only available for clusters ",(0,a.kt)("a",{parentName:"p",href:"/v2.5/pages-for-subheaders/launch-kubernetes-with-rancher"},"provisioned by RKE"),"."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"From the ",(0,a.kt)("strong",{parentName:"p"},"Default Pod Security Policy")," drop-down, select the policy you want to apply to the cluster."),(0,a.kt)("p",{parentName:"li"},"Rancher ships with ",(0,a.kt)("a",{parentName:"p",href:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/create-pod-security-policies#default-pod-security-policies"},"policies")," of ",(0,a.kt)("inlineCode",{parentName:"p"},"restricted")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"unrestricted"),", although you can ",(0,a.kt)("a",{parentName:"p",href:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/create-pod-security-policies#default-pod-security-policies"},"create custom policies")," as well.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Save"),"."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")," The pod security policy is applied to the cluster and any projects within the cluster."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," Workloads already running before assignment of a pod security policy are grandfathered in. Even if they don't meet your pod security policy, workloads running before assignment of the policy continue to run."),(0,a.kt)("p",{parentName:"blockquote"},"To check if a running workload passes your pod security policy, clone or upgrade it.")))}y.isMDXComponent=!0}}]);