"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[32513],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),p=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=p(a),d=n,h=m["".concat(i,".").concat(d)]||m[d]||l[d]||o;return a?r.createElement(h,s(s({ref:t},u),{},{components:a})):r.createElement(h,s({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var p=2;p<o;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},32592:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return l}});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),s=["components"],c={title:"Namespaces",weight:2520},i=void 0,p={unversionedId:"how-to-guides/advanced-user-guides/manage-projects/manage-namespaces",id:"version-2.0-2.4/how-to-guides/advanced-user-guides/manage-projects/manage-namespaces",title:"Namespaces",description:"Within Rancher, you can further divide projects into different namespaces, which are virtual clusters within a project backed by a physical cluster. Should you require another level of organization beyond projects and the default namespace, you can use multiple namespaces to isolate applications and resources.",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/manage-projects/manage-namespaces.md",sourceDirName:"how-to-guides/advanced-user-guides/manage-projects",slug:"/how-to-guides/advanced-user-guides/manage-projects/manage-namespaces",permalink:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-projects/manage-namespaces",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/manage-projects/manage-namespaces.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663024307,formattedLastUpdatedAt:"9/12/2022",frontMatter:{title:"Namespaces",weight:2520},sidebar:"tutorialSidebar",previous:{title:"Adding Users to Projects",permalink:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-projects/add-users-to-projects"},next:{title:"Rancher's CI/CD Pipelines",permalink:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-projects/ci-cd-pipelines"}},u={},l=[{value:"Creating Namespaces",id:"creating-namespaces",level:3},{value:"Moving Namespaces to Another Project",id:"moving-namespaces-to-another-project",level:3},{value:"Editing Namespace Resource Quotas",id:"editing-namespace-resource-quotas",level:3}],m={toc:l};function d(e){var t=e.components,a=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Within Rancher, you can further divide projects into different ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/"},"namespaces"),", which are virtual clusters within a project backed by a physical cluster. Should you require another level of organization beyond projects and the ",(0,o.kt)("inlineCode",{parentName:"p"},"default")," namespace, you can use multiple namespaces to isolate applications and resources."),(0,o.kt)("p",null,"Although you assign resources at the project level so that each namespace in the project can use them, you can override this inheritance by assigning resources explicitly to a namespace."),(0,o.kt)("p",null,"Resources that you can assign directly to namespaces include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/v2.0-v2.4/pages-for-subheaders/workloads-and-pods"},"Workloads")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/v2.0-v2.4/pages-for-subheaders/load-balancer-and-ingress-controller"},"Load Balancers/Ingress")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/create-services"},"Service Discovery Records")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/v2.0-v2.4/pages-for-subheaders/provisioning-storage-examples"},"Persistent Volume Claims")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/encrypt-http-communication"},"Certificates")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/configmaps"},"ConfigMaps")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/kubernetes-and-docker-registries"},"Registries")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/secrets"},"Secrets"))),(0,o.kt)("p",null,"To manage permissions in a vanilla Kubernetes cluster, cluster admins configure role-based access policies for each namespace. With Rancher, user permissions are assigned on the project level instead, and permissions are automatically inherited by any namespace owned by the particular project."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," If you create a namespace with ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl"),", it may be unusable because ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl")," doesn't require your new namespace to be scoped within a project that you have access to. If your permissions are restricted to the project level, it is better to ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-projects/manage-namespaces"},"create a namespace through Rancher")," to ensure that you will have permission to access the namespace.")),(0,o.kt)("h3",{id:"creating-namespaces"},"Creating Namespaces"),(0,o.kt)("p",null,"Create a new namespace to isolate apps and resources in a project."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Tip:")," When working with project resources that you can assign to a namespace (i.e., ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/deploy-workloads"},"workloads"),", ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/encrypt-http-communication"},"certificates"),", ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/configmaps"},"ConfigMaps"),", etc.) you can create a namespace on the fly.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the ",(0,o.kt)("strong",{parentName:"p"},"Global")," view, open the project where you want to create a namespace."),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Tip:")," As a best practice, we recommend creating namespaces from the project level. However, cluster owners and members can create them from the cluster level as well."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the main menu, select ",(0,o.kt)("strong",{parentName:"p"},"Namespace"),". The click ",(0,o.kt)("strong",{parentName:"p"},"Add Namespace"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Optional:")," If your project has ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/manage-project-resource-quotas"},"Resource Quotas")," in effect, you can override the default resource ",(0,o.kt)("strong",{parentName:"p"},"Limits")," (which places a cap on the resources that the namespace can consume).")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter a ",(0,o.kt)("strong",{parentName:"p"},"Name")," and then click ",(0,o.kt)("strong",{parentName:"p"},"Create"),"."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," Your namespace is added to the project. You can begin assigning cluster resources to the namespace."),(0,o.kt)("h3",{id:"moving-namespaces-to-another-project"},"Moving Namespaces to Another Project"),(0,o.kt)("p",null,"Cluster admins and members may occasionally need to move a namespace to another project, such as when you want a different team to start using the application."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the ",(0,o.kt)("strong",{parentName:"p"},"Global")," view, open the cluster that contains the namespace you want to move.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the main menu, select ",(0,o.kt)("strong",{parentName:"p"},"Projects/Namespaces"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select the namespace(s) that you want to move to a different project. Then click ",(0,o.kt)("strong",{parentName:"p"},"Move"),". You can move multiple namespaces at one."),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Notes:")),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"Don't move the namespaces in the ",(0,o.kt)("inlineCode",{parentName:"li"},"System")," project. Moving these namespaces can adversely affect cluster networking."),(0,o.kt)("li",{parentName:"ul"},"You cannot move a namespace into a project that already has a ",(0,o.kt)("a",{parentName:"li",href:"/v2.0-v2.4/pages-for-subheaders/manage-project-resource-quotas"},"resource quota")," configured."),(0,o.kt)("li",{parentName:"ul"},"If you move a namespace from a project that has a quota set to a project with no quota set, the quota is removed from the namespace.")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Choose a new project for the new namespace and then click ",(0,o.kt)("strong",{parentName:"p"},"Move"),". Alternatively, you can remove the namespace from all projects by selecting ",(0,o.kt)("strong",{parentName:"p"},"None"),"."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," Your namespace is moved to a different project (or is unattached from all projects). If any project resources are attached to the namespace, the namespace releases them and then attached resources from the new project."),(0,o.kt)("h3",{id:"editing-namespace-resource-quotas"},"Editing Namespace Resource Quotas"),(0,o.kt)("p",null,"You can always override the namespace default limit to provide a specific namespace with access to more (or less) project resources."),(0,o.kt)("p",null,"For more information, see how to ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/override-default-limit-in-namespaces"},"edit namespace resource quotas"),"."))}d.isMDXComponent=!0}}]);