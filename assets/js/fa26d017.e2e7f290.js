"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[34428],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||i;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},69922:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],s={title:"RKE2 Hardening Guide with CIS v1.6 Benchmark",weight:100},l=void 0,c={unversionedId:"reference-guides/rancher-security/rancher-v2.6-hardening-guides/rke2-hardening-guide-with-cis-v1.6-benchmark",id:"reference-guides/rancher-security/rancher-v2.6-hardening-guides/rke2-hardening-guide-with-cis-v1.6-benchmark",title:"RKE2 Hardening Guide with CIS v1.6 Benchmark",description:"This document provides prescriptive guidance for hardening a production installation of a RKE2 cluster to be provisioned with Rancher v2.6.5. It outlines the configurations and controls required to address Kubernetes benchmark controls from the Center for Information Security (CIS).",source:"@site/docs/reference-guides/rancher-security/rancher-v2.6-hardening-guides/rke2-hardening-guide-with-cis-v1.6-benchmark.md",sourceDirName:"reference-guides/rancher-security/rancher-v2.6-hardening-guides",slug:"/reference-guides/rancher-security/rancher-v2.6-hardening-guides/rke2-hardening-guide-with-cis-v1.6-benchmark",permalink:"/reference-guides/rancher-security/rancher-v2.6-hardening-guides/rke2-hardening-guide-with-cis-v1.6-benchmark",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/reference-guides/rancher-security/rancher-v2.6-hardening-guides/rke2-hardening-guide-with-cis-v1.6-benchmark.md",tags:[],version:"current",lastUpdatedAt:1663024307,formattedLastUpdatedAt:"9/12/2022",frontMatter:{title:"RKE2 Hardening Guide with CIS v1.6 Benchmark",weight:100},sidebar:"tutorialSidebar",previous:{title:"RKE CIS v1.6 Benchmark - Self-Assessment Guide - Rancher v2.6",permalink:"/reference-guides/rancher-security/rancher-v2.6-hardening-guides/rke1-self-assessment-guide-with-cis-v1.6-benchmark"},next:{title:"RKE2 CIS v1.6 Benchmark - Self-Assessment Guide - Rancher v2.6",permalink:"/reference-guides/rancher-security/rancher-v2.6-hardening-guides/rke2-self-assessment-guide-with-cis-v1.6-benchmark"}},d={},u=[{value:"Overview",id:"overview",level:3},{value:"Host-level requirements",id:"host-level-requirements",level:3},{value:"Ensure <code>protect-kernel-defaults</code> is set",id:"ensure-protect-kernel-defaults-is-set",level:4},{value:"Ensure etcd is configured properly",id:"ensure-etcd-is-configured-properly",level:4},{value:"Setting up hosts",id:"setting-up-hosts",level:3},{value:"Set kernel parameters",id:"set-kernel-parameters",level:4},{value:"Create the etcd user",id:"create-the-etcd-user",level:4},{value:"Kubernetes runtime requirements",id:"kubernetes-runtime-requirements",level:3},{value:"<code>PodSecurityPolicies</code>",id:"podsecuritypolicies",level:4},{value:"<code>NetworkPolicies</code>",id:"networkpolicies",level:4},{value:"Configure <code>default</code> service account",id:"configure-default-service-account",level:4},{value:"API Server audit configuration",id:"api-server-audit-configuration",level:3},{value:"Known issues",id:"known-issues",level:3},{value:"Control  1.1.12",id:"control--1112",level:4},{value:"Control 5.1.5",id:"control-515",level:4},{value:"Control 5.3.2",id:"control-532",level:4},{value:"Reference Hardened RKE2 Template Configuration",id:"reference-hardened-rke2-template-configuration",level:3},{value:"Conclusion",id:"conclusion",level:3}],p={toc:u};function h(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This document provides prescriptive guidance for hardening a production installation of a RKE2 cluster to be provisioned with Rancher v2.6.5. It outlines the configurations and controls required to address Kubernetes benchmark controls from the Center for Information Security (CIS)."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This hardening guide describes how to secure the nodes in your cluster, and it is recommended to follow this guide before installing Kubernetes."))),(0,i.kt)("p",null,"This hardening guide is intended to be used for RKE2 clusters and associated with specific versions of the CIS Kubernetes Benchmark, Kubernetes, and Rancher:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Rancher Version"),(0,i.kt)("th",{parentName:"tr",align:null},"CIS Benchmark Version"),(0,i.kt)("th",{parentName:"tr",align:null},"Kubernetes Version"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Rancher v2.6.5+"),(0,i.kt)("td",{parentName:"tr",align:null},"Benchmark v1.6"),(0,i.kt)("td",{parentName:"tr",align:null},"Kubernetes v1.21 up to v1.23")))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://releases.rancher.com/documents/security/2.6/Rancher_RKE2_v2-6_CIS_v1-6_Hardening_Guide.pdf"},"Click here to download a PDF version of this document"),"."),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("p",null,"This document provides prescriptive guidance for hardening a RKE2 cluster to be provisioned through Rancher v2.6.5+ with Kubernetes v1.21 up to v1.23. It outlines the configurations required to address Kubernetes benchmark controls from the Center for Information Security (CIS)."),(0,i.kt)("p",null,"For more details about evaluating a hardened RKE2 cluster against the official CIS benchmark, refer to the ",(0,i.kt)("a",{parentName:"p",href:"/reference-guides/rancher-security/rancher-v2.6-hardening-guides/rke2-self-assessment-guide-with-cis-v1.6-benchmark"},"RKE2 - CIS 1.6 Benchmark - Self-Assessment Guide - Rancher v2.6"),"."),(0,i.kt)("p",null,'RKE2 is designed to be "hardened by default" and pass the majority of the Kubernetes CIS controls without modification. There are a few notable exceptions to this that require manual intervention to fully pass the CIS Benchmark:'),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"RKE2 will not modify the host operating system. Therefore, you, the operator, must make a few host-level modifications."),(0,i.kt)("li",{parentName:"ol"},"Certain CIS policy controls for ",(0,i.kt)("inlineCode",{parentName:"li"},"PodSecurityPolicies")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"NetworkPolicies")," will restrict the functionality of the cluster. You must opt into having RKE2 configuring these out of the box.")),(0,i.kt)("p",null,"To help ensure these above requirements are met, RKE2 can be started with the ",(0,i.kt)("inlineCode",{parentName:"p"},"profile")," flag set to ",(0,i.kt)("inlineCode",{parentName:"p"},"cis-1.6"),". This flag generally does two things:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Checks that host-level requirements have been met. If they haven't, RKE2 will exit with a fatal error describing the unmet requirements."),(0,i.kt)("li",{parentName:"ol"},"Configures runtime pod security policies and network policies that allow the cluster to pass associated controls.")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The profile's flag only valid values are ",(0,i.kt)("inlineCode",{parentName:"p"},"cis-1.5")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"cis-1.6"),". It accepts a string value to allow for other profiles in the future."))),(0,i.kt)("p",null,"The following section outlines the specific actions that are taken when the ",(0,i.kt)("inlineCode",{parentName:"p"},"profile")," flag is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"cis-1.6"),"."),(0,i.kt)("h3",{id:"host-level-requirements"},"Host-level requirements"),(0,i.kt)("p",null,"There are two areas of host-level requirements: kernel parameters and etcd process/directory configuration. These are outlined in this section."),(0,i.kt)("h4",{id:"ensure-protect-kernel-defaults-is-set"},"Ensure ",(0,i.kt)("inlineCode",{parentName:"h4"},"protect-kernel-defaults")," is set"),(0,i.kt)("p",null,"This is a kubelet flag that will cause the kubelet to exit if the required kernel parameters are unset or are set to values that are different from the kubelet's defaults."),(0,i.kt)("p",null,"When the ",(0,i.kt)("inlineCode",{parentName:"p"},"profile")," flag is set, RKE2 will set the flag to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"protect-kernel-defaults")," is exposed as a configuration flag for RKE2. If you have set ",(0,i.kt)("inlineCode",{parentName:"p"},"profile"),' to "cis-1.x" and ',(0,i.kt)("inlineCode",{parentName:"p"},"protect-kernel-defaults")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," explicitly, RKE2 will exit with an error."))),(0,i.kt)("p",null,"RKE2 will also check the same kernel parameters that the kubelet does and exit with an error following the same rules as the kubelet. This is done as a convenience to help the operator more quickly and easily identify what kernel parameters are violating the kubelet defaults."),(0,i.kt)("p",null,"Both ",(0,i.kt)("inlineCode",{parentName:"p"},"protect-kernel-defaults")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"profile")," flags can be set in RKE2 template configuration file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  rkeConfig:\n    machineSelectorConfig:\n      - config:\n          profile: cis-1.6\n          protect-kernel-defaults: true\n")),(0,i.kt)("h4",{id:"ensure-etcd-is-configured-properly"},"Ensure etcd is configured properly"),(0,i.kt)("p",null,"The CIS Benchmark requires that the etcd data directory be owned by the ",(0,i.kt)("inlineCode",{parentName:"p"},"etcd")," user and group. This implicitly requires the etcd process to be ran as the host-level ",(0,i.kt)("inlineCode",{parentName:"p"},"etcd"),' user. To achieve this, RKE2 takes several steps when started with a valid "cis-1.x" profile:'),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Check that the ",(0,i.kt)("inlineCode",{parentName:"li"},"etcd")," user and group exists on the host. If they don't, exit with an error."),(0,i.kt)("li",{parentName:"ol"},"Create etcd's data directory with ",(0,i.kt)("inlineCode",{parentName:"li"},"etcd")," as the user and group owner."),(0,i.kt)("li",{parentName:"ol"},"Ensure the etcd process is ran as the ",(0,i.kt)("inlineCode",{parentName:"li"},"etcd")," user and group by setting the etcd static pod's ",(0,i.kt)("inlineCode",{parentName:"li"},"SecurityContext")," appropriately.")),(0,i.kt)("h3",{id:"setting-up-hosts"},"Setting up hosts"),(0,i.kt)("p",null,"This section gives you the commands necessary to configure your host to meet the above requirements."),(0,i.kt)("h4",{id:"set-kernel-parameters"},"Set kernel parameters"),(0,i.kt)("p",null,"The following ",(0,i.kt)("inlineCode",{parentName:"p"},"sysctl")," configuration is recommended for all nodes type in the cluster. Set the following parameters in ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/sysctl.d/90-kubelet.conf"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"vm.panic_on_oom=0\nvm.overcommit_memory=1\nkernel.panic=10\nkernel.panic_on_oops=1\n")),(0,i.kt)("p",null,"Run ",(0,i.kt)("inlineCode",{parentName:"p"},"sudo sysctl -p /etc/sysctl.d/90-kubelet.conf")," to enable the settings."),(0,i.kt)("p",null,"Please perform this step only on fresh installations, before actually deploying RKE2 through Rancher."),(0,i.kt)("h4",{id:"create-the-etcd-user"},"Create the etcd user"),(0,i.kt)("p",null,"On some Linux distributions, the ",(0,i.kt)("inlineCode",{parentName:"p"},"useradd")," command will not create a group. The ",(0,i.kt)("inlineCode",{parentName:"p"},"-U")," flag is included below to account for that. This flag tells ",(0,i.kt)("inlineCode",{parentName:"p"},"useradd")," to create a group with the same name as the user."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'sudo useradd -r -c "etcd user" -s /sbin/nologin -M etcd -U\n')),(0,i.kt)("h3",{id:"kubernetes-runtime-requirements"},"Kubernetes runtime requirements"),(0,i.kt)("p",null,"The runtime requirements to pass the CIS Benchmark are centered around pod security and network policies. These are outlined in this section."),(0,i.kt)("h4",{id:"podsecuritypolicies"},(0,i.kt)("inlineCode",{parentName:"h4"},"PodSecurityPolicies")),(0,i.kt)("p",null,"RKE2 always runs with the ",(0,i.kt)("inlineCode",{parentName:"p"},"PodSecurityPolicy")," admission controller turned on. However, when it is ",(0,i.kt)("strong",{parentName:"p"},"not"),' started with a valid "cis-1.x" profile, RKE2 will put an unrestricted policy in place that allows Kubernetes to run as though the ',(0,i.kt)("inlineCode",{parentName:"p"},"PodSecurityPolicy")," admission controller was not enabled."),(0,i.kt)("p",null,'When ran with a valid "cis-1.x" profile, RKE2 will put a much more restrictive set of policies in place. These policies meet the requirements outlined in section 5.2 of the CIS Benchmark.'),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The Kubernetes control plane components and critical additions such as CNI, DNS, and Ingress are ran as pods in the ",(0,i.kt)("inlineCode",{parentName:"p"},"kube-system")," namespace. Therefore, this namespace will have a policy that is less restrictive so that these components can run properly.")),(0,i.kt)("h4",{id:"networkpolicies"},(0,i.kt)("inlineCode",{parentName:"h4"},"NetworkPolicies")),(0,i.kt)("p",null,'When ran with a valid "cis-1.x" profile, RKE2 will put ',(0,i.kt)("inlineCode",{parentName:"p"},"NetworkPolicies")," in place that passes the CIS Benchmark for Kubernetes' built-in namespaces. These namespaces are: ",(0,i.kt)("inlineCode",{parentName:"p"},"kube-system"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"kube-public"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"kube-node-lease"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"default"),"."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"NetworkPolicy")," used will only allow pods within the same namespace to talk to each other. The notable exception to this is that it allows DNS requests to be resolved."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Operators must manage network policies as normal for additional namespaces that are created."))),(0,i.kt)("h4",{id:"configure-default-service-account"},"Configure ",(0,i.kt)("inlineCode",{parentName:"h4"},"default")," service account"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Set ",(0,i.kt)("inlineCode",{parentName:"strong"},"automountServiceAccountToken")," to ",(0,i.kt)("inlineCode",{parentName:"strong"},"false")," for ",(0,i.kt)("inlineCode",{parentName:"strong"},"default")," service accounts")),(0,i.kt)("p",null,"Kubernetes provides a ",(0,i.kt)("inlineCode",{parentName:"p"},"default")," service account which is used by cluster workloads where no specific service account is assigned to the pod. Where access to the Kubernetes API from a pod is required, a specific service account should be created for that pod, and rights granted to that service account. The ",(0,i.kt)("inlineCode",{parentName:"p"},"default")," service account should be configured such that it does not provide a service account token and does not have any explicit rights assignments."),(0,i.kt)("p",null,"For each namespace including ",(0,i.kt)("inlineCode",{parentName:"p"},"default")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"kube-system")," on a standard RKE2 install, the ",(0,i.kt)("inlineCode",{parentName:"p"},"default")," service account must include this value:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"automountServiceAccountToken: false\n")),(0,i.kt)("p",null,"For namespaces created by the cluster operator, the following script and configuration file can be used to configure the ",(0,i.kt)("inlineCode",{parentName:"p"},"default")," service account."),(0,i.kt)("p",null,"The configuration bellow must be saved to a file called ",(0,i.kt)("inlineCode",{parentName:"p"},"account_update.yaml"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: default\nautomountServiceAccountToken: false\n")),(0,i.kt)("p",null,"Create a bash script file called ",(0,i.kt)("inlineCode",{parentName:"p"},"account_update.sh"),". Be sure to ",(0,i.kt)("inlineCode",{parentName:"p"},"sudo chmod +x account_update.sh")," so the script has execute permissions."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/bash -e\n\nfor namespace in $(kubectl get namespaces -A -o=jsonpath="{.items[*][\'metadata.name\']}"); do\n  echo -n "Patching namespace $namespace - "\n  kubectl patch serviceaccount default -n ${namespace} -p "$(cat account_update.yaml)"\ndone\n')),(0,i.kt)("p",null,"Execute this script to apply the ",(0,i.kt)("inlineCode",{parentName:"p"},"account_update.yaml")," configuration to ",(0,i.kt)("inlineCode",{parentName:"p"},"default")," service account in all namespaces."),(0,i.kt)("h3",{id:"api-server-audit-configuration"},"API Server audit configuration"),(0,i.kt)("p",null,"CIS requirements 1.2.22 to 1.2.25 are related to configuring audit logs for the API Server. When RKE2 is started with the ",(0,i.kt)("inlineCode",{parentName:"p"},"profile")," flag set to ",(0,i.kt)("inlineCode",{parentName:"p"},"cis-1.6"),", it will automatically configure hardened ",(0,i.kt)("inlineCode",{parentName:"p"},"--audit-log-")," parameters in the API Server to pass those CIS checks."),(0,i.kt)("p",null,"RKE2's default audit policy is configured to not log requests in the API Server. This is done to allow cluster operators flexibility to customize an audit policy that suits their auditing requirements and needs, as these are specific to each users' environment and policies."),(0,i.kt)("p",null,"A default audit policy is created by RKE2 when started with the ",(0,i.kt)("inlineCode",{parentName:"p"},"profile")," flag set to ",(0,i.kt)("inlineCode",{parentName:"p"},"cis-1.6"),". The policy is defined in ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/rancher/rke2/audit-policy.yaml"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: audit.k8s.io/v1\nkind: Policy\nmetadata:\n  creationTimestamp: null\nrules:\n- level: None\n")),(0,i.kt)("p",null,"To start logging requests to the API Server, at least ",(0,i.kt)("inlineCode",{parentName:"p"},"level")," parameter must be modified, for example, to ",(0,i.kt)("inlineCode",{parentName:"p"},"Metadata"),". Detailed information about policy configuration for the API server can be found in the Kubernetes ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/debug-application-cluster/audit/"},"documentation"),"."),(0,i.kt)("p",null,"After adapting the audit policy, RKE2 must be restarted to load the new configuration."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo systemctl restart rke2-server.service\n")),(0,i.kt)("p",null,"API Server audit logs will be written to ",(0,i.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/rke2/server/logs/audit.log"),"."),(0,i.kt)("h3",{id:"known-issues"},"Known issues"),(0,i.kt)("p",null,"The following are controls that RKE2 currently does not pass. Each gap will be explained and whether it can be passed through manual operator intervention or if it will be addressed in a future release."),(0,i.kt)("h4",{id:"control--1112"},"Control  1.1.12"),(0,i.kt)("p",null,"Ensure that the etcd data directory ownership is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"etcd:etcd"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Rationale"),"\netcd is a highly-available key-value store used by Kubernetes deployments for persistent storage of all of its REST API objects. This data directory should be protected from any unauthorized reads or writes. It should be owned by ",(0,i.kt)("inlineCode",{parentName:"p"},"etcd:etcd"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Remediation"),"\nThis can be remediated by creating an ",(0,i.kt)("inlineCode",{parentName:"p"},"etcd")," user and group as described above."),(0,i.kt)("h4",{id:"control-515"},"Control 5.1.5"),(0,i.kt)("p",null,"Ensure that default service accounts are not actively used"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Rationale")," Kubernetes provides a ",(0,i.kt)("inlineCode",{parentName:"p"},"default")," service account which is used by cluster workloads where no specific service account is assigned to the pod."),(0,i.kt)("p",null,"Where access to the Kubernetes API from a pod is required, a specific service account should be created for that pod, and rights granted to that service account."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"default")," service account should be configured such that it does not provide a service account token and does not have any explicit rights assignments."),(0,i.kt)("p",null,"This can be remediated by updating the ",(0,i.kt)("inlineCode",{parentName:"p"},"automountServiceAccountToken")," field to ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," for the ",(0,i.kt)("inlineCode",{parentName:"p"},"default")," service account in each namespace."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Remediation"),"\nYou can manually update this field on service accounts in your cluster to pass the control as described above."),(0,i.kt)("h4",{id:"control-532"},"Control 5.3.2"),(0,i.kt)("p",null,"Ensure that all Namespaces have Network Policies defined"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Rationale"),"\nRunning different applications on the same Kubernetes cluster creates a risk of one compromised application attacking a neighboring application. Network segmentation is important to ensure that containers can communicate only with those they are supposed to. A network policy is a specification of how selections of pods are allowed to communicate with each other and other network endpoints."),(0,i.kt)("p",null,"Network Policies are namespace scoped. When a network policy is introduced to a given namespace, all traffic not allowed by the policy is denied. However, if there are no network policies in a namespace all traffic will be allowed into and out of the pods in that namespace."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Remediation"),"\nThis can be remediated by setting ",(0,i.kt)("inlineCode",{parentName:"p"},'profile: "cis-1.6"')," in RKE2 template configuration file. An example can be found below."),(0,i.kt)("h3",{id:"reference-hardened-rke2-template-configuration"},"Reference Hardened RKE2 Template Configuration"),(0,i.kt)("p",null,"The reference template configuration is used in Rancher to create a hardened RKE2 custom cluster. This reference does not include other required ",(0,i.kt)("strong",{parentName:"p"},"cluster configuration")," directives which will vary depending on your environment."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: provisioning.cattle.io/v1\nkind: Cluster\nmetadata:\n  name: <replace_with_cluster_name>\n  annotations:\n    {}\n#    key: string\n  labels:\n    {}\n#    key: string\n  namespace: fleet-default\nspec:\n  defaultPodSecurityPolicyTemplateName: ''\n  kubernetesVersion: <replace_with_kubernetes_version>\n  localClusterAuthEndpoint:\n    caCerts: ''\n    enabled: false\n    fqdn: ''\n  rkeConfig:\n    chartValues:\n      rke2-canal:\n        {}\n    etcd:\n      disableSnapshots: false\n      s3:\n#        bucket: string\n#        cloudCredentialName: string\n#        endpoint: string\n#        endpointCA: string\n#        folder: string\n#        region: string\n#        skipSSLVerify: boolean\n      snapshotRetention: 5\n      snapshotScheduleCron: 0 */5 * * *\n    machineGlobalConfig:\n      cni: canal\n    machinePools:\n#      - cloudCredentialSecretName: string\n#        controlPlaneRole: boolean\n#        displayName: string\n#        drainBeforeDelete: boolean\n#        etcdRole: boolean\n#        labels:\n#          key: string\n#        machineConfigRef:\n#          apiVersion: string\n#          fieldPath: string\n#          kind: string\n#          name: string\n#          namespace: string\n#          resourceVersion: string\n#          uid: string\n#        machineDeploymentAnnotations:\n#          key: string\n#        machineDeploymentLabels:\n#          key: string\n#        machineOS: string\n#        maxUnhealthy: string\n#        name: string\n#        nodeStartupTimeout: string\n#        paused: boolean\n#        quantity: int\n#        rollingUpdate:\n#          maxSurge: string\n#          maxUnavailable: string\n#        taints:\n#          - effect: string\n#            key: string\n#            timeAdded: string\n#            value: string\n#        unhealthyNodeTimeout: string\n#        unhealthyRange: string\n#        workerRole: boolean\n    machineSelectorConfig:\n      - config:\n          profile: cis-1.6\n          protect-kernel-defaults: true\n#      - config:\n#          \n#        machineLabelSelector:\n#          matchExpressions:\n#            - key: string\n#              operator: string\n#              values:\n#                - string\n#          matchLabels:\n#            key: string\n    registries:\n      configs:\n        {}\n        #authConfigSecretName: string\n#          caBundle: string\n#          insecureSkipVerify: boolean\n#          tlsSecretName: string\n      mirrors:\n        {}\n        #endpoint:\n#            - string\n#          rewrite:\n#            key: string\n    upgradeStrategy:\n      controlPlaneConcurrency: 10%\n      controlPlaneDrainOptions:\n#        deleteEmptyDirData: boolean\n#        disableEviction: boolean\n#        enabled: boolean\n#        force: boolean\n#        gracePeriod: int\n#        ignoreDaemonSets: boolean\n#        ignoreErrors: boolean\n#        postDrainHooks:\n#          - annotation: string\n#        preDrainHooks:\n#          - annotation: string\n#        skipWaitForDeleteTimeoutSeconds: int\n#        timeout: int\n      workerConcurrency: 10%\n      workerDrainOptions:\n#        deleteEmptyDirData: boolean\n#        disableEviction: boolean\n#        enabled: boolean\n#        force: boolean\n#        gracePeriod: int\n#        ignoreDaemonSets: boolean\n#        ignoreErrors: boolean\n#        postDrainHooks:\n#          - annotation: string\n#        preDrainHooks:\n#          - annotation: string\n#        skipWaitForDeleteTimeoutSeconds: int\n#        timeout: int\n#    additionalManifest: string\n#    etcdSnapshotCreate:\n#      generation: int\n#    etcdSnapshotRestore:\n#      generation: int\n#      name: string\n#      restoreRKEConfig: string\n#    infrastructureRef:\n#      apiVersion: string\n#      fieldPath: string\n#      kind: string\n#      name: string\n#      namespace: string\n#      resourceVersion: string\n#      uid: string\n#    provisionGeneration: int\n#    rotateCertificates:\n#      generation: int\n#      services:\n#        - string\n#    rotateEncryptionKeys:\n#      generation: int\n  machineSelectorConfig:\n    - config: {}\n#  agentEnvVars:\n#    - name: string\n#      value: string\n#  cloudCredentialSecretName: string\n#  clusterAPIConfig:\n#    clusterName: string\n#  defaultClusterRoleForProjectMembers: string\n#  enableNetworkPolicy: boolean\n#  redeploySystemAgentGeneration: int\n__clone: true\n")),(0,i.kt)("h3",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"If you have followed this guide, your RKE2 custom cluster provisioned by Rancher will be configured to pass the CIS Kubernetes Benchmark. You can review our RKE2 CIS Benchmark Self-Assessment Guide ",(0,i.kt)("a",{parentName:"p",href:"/reference-guides/rancher-security/rancher-v2.6-hardening-guides/rke2-self-assessment-guide-with-cis-v1.6-benchmark"},"v1.6")," to understand how we verified each of the benchmarks and how you can do the same on your cluster."))}h.isMDXComponent=!0}}]);