"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[60593],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(n),h=a,m=u["".concat(l,".").concat(h)]||u[h]||c[h]||i;return n?r.createElement(m,s(s({ref:t},d),{},{components:n})):r.createElement(m,s({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},24351:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),s=["components"],o={title:"CIS Scans",weight:17},l=void 0,p={unversionedId:"pages-for-subheaders/cis-scans",id:"pages-for-subheaders/cis-scans",title:"CIS Scans",description:"Rancher can run a security scan to check whether Kubernetes is deployed according to security best practices as defined in the CIS Kubernetes Benchmark. The CIS scans can run on any Kubernetes cluster, including hosted Kubernetes providers such as EKS, AKS, and GKE.",source:"@site/docs/pages-for-subheaders/cis-scans.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/cis-scans",permalink:"/pages-for-subheaders/cis-scans",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/pages-for-subheaders/cis-scans.md",tags:[],version:"current",lastUpdatedAt:1663024307,formattedLastUpdatedAt:"9/12/2022",frontMatter:{title:"CIS Scans",weight:17},sidebar:"tutorialSidebar",previous:{title:"Supportconfig bundle",permalink:"/explanations/integrations-in-rancher/cloud-marketplace/supportconfig"},next:{title:"Configuration",permalink:"/explanations/integrations-in-rancher/cis-scans/configuration-reference"}},d={},c=[{value:"About the CIS Benchmark",id:"about-the-cis-benchmark",level:2},{value:"About the Generated Report",id:"about-the-generated-report",level:2},{value:"Test Profiles",id:"test-profiles",level:2},{value:"About Skipped and Not Applicable Tests",id:"about-skipped-and-not-applicable-tests",level:2},{value:"Roles-based Access Control",id:"roles-based-access-control",level:2},{value:"Configuration",id:"configuration",level:2},{value:"How-to Guides",id:"how-to-guides",level:2}],u={toc:c};function h(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Rancher can run a security scan to check whether Kubernetes is deployed according to security best practices as defined in the CIS Kubernetes Benchmark. The CIS scans can run on any Kubernetes cluster, including hosted Kubernetes providers such as EKS, AKS, and GKE."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-cis-benchmark")," app leverages ",(0,i.kt)("a",{href:"https://github.com/aquasecurity/kube-bench",target:"_blank"},"kube-bench,")," an open-source tool from Aqua Security, to check clusters for CIS Kubernetes Benchmark compliance. Also, to generate a cluster-wide report, the application utilizes ",(0,i.kt)("a",{href:"https://github.com/vmware-tanzu/sonobuoy",target:"_blank"},"Sonobuoy")," for report aggregation."),(0,i.kt)("h2",{id:"about-the-cis-benchmark"},"About the CIS Benchmark"),(0,i.kt)("p",null,"The Center for Internet Security is a 501(c",")",'(3) non-profit organization, formed in October 2000, with a mission to "identify, develop, validate, promote, and sustain best practice solutions for cyber defense and build and lead communities to enable an environment of trust in cyberspace". The organization is headquartered in East Greenbush, New York, with members including large corporations, government agencies, and academic institutions.'),(0,i.kt)("p",null,"CIS Benchmarks are best practices for the secure configuration of a target system. CIS Benchmarks are developed through the generous volunteer efforts of subject matter experts, technology vendors, public and private community members, and the CIS Benchmark Development team."),(0,i.kt)("p",null,"The official Benchmark documents are available through the CIS website. The sign-up form to access the documents is"),(0,i.kt)("a",{href:"https://learn.cisecurity.org/benchmarks",target:"_blank"},"here."),(0,i.kt)("h2",{id:"about-the-generated-report"},"About the Generated Report"),(0,i.kt)("p",null,"Each scan generates a report can be viewed in the Rancher UI and can be downloaded in CSV format."),(0,i.kt)("p",null,"By default, the CIS Benchmark v1.6 is used."),(0,i.kt)("p",null,"The Benchmark version is included in the generated report."),(0,i.kt)("p",null,"The Benchmark provides recommendations of two types: Automated and Manual. Recommendations marked as Manual in the Benchmark are not included in the generated report."),(0,i.kt)("p",null,'Some tests are designated as "Not Applicable." These tests will not be run on any CIS scan because of the way that Rancher provisions RKE clusters. For information on how test results can be audited, and why some tests are designated to be not applicable, refer to Rancher\'s ',(0,i.kt)("a",{parentName:"p",href:"/pages-for-subheaders/rancher-security#the-cis-benchmark-and-self-assessment"},"self-assessment guide")," for the corresponding Kubernetes version."),(0,i.kt)("p",null,"The report contains the following information:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Column in Report"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"id")),(0,i.kt)("td",{parentName:"tr",align:null},"The ID number of the CIS Benchmark.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"description")),(0,i.kt)("td",{parentName:"tr",align:null},"The description of the CIS Benchmark test.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"remediation")),(0,i.kt)("td",{parentName:"tr",align:null},"What needs to be fixed in order to pass the test.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"state")),(0,i.kt)("td",{parentName:"tr",align:null},"Indicates if the test passed, failed, was skipped, or was not applicable.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"node_type")),(0,i.kt)("td",{parentName:"tr",align:null},"The node role, which affects which tests are run on the node. Master tests are run on controlplane nodes, etcd tests are run on etcd nodes, and node tests are run on the worker nodes.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"audit")),(0,i.kt)("td",{parentName:"tr",align:null},"This is the audit check that ",(0,i.kt)("inlineCode",{parentName:"td"},"kube-bench")," runs for this test.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"audit_config")),(0,i.kt)("td",{parentName:"tr",align:null},"Any configuration applicable to the audit script.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"test_info")),(0,i.kt)("td",{parentName:"tr",align:null},"Test-related info as reported by ",(0,i.kt)("inlineCode",{parentName:"td"},"kube-bench"),", if any.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"commands")),(0,i.kt)("td",{parentName:"tr",align:null},"Test-related commands as reported by ",(0,i.kt)("inlineCode",{parentName:"td"},"kube-bench"),", if any.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"config_commands")),(0,i.kt)("td",{parentName:"tr",align:null},"Test-related configuration data as reported by ",(0,i.kt)("inlineCode",{parentName:"td"},"kube-bench"),", if any.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"actual_value")),(0,i.kt)("td",{parentName:"tr",align:null},"The test's actual value, present if reported by ",(0,i.kt)("inlineCode",{parentName:"td"},"kube-bench"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"expected_result")),(0,i.kt)("td",{parentName:"tr",align:null},"The test's expected result, present if reported by ",(0,i.kt)("inlineCode",{parentName:"td"},"kube-bench"),".")))),(0,i.kt)("p",null,"Refer to ",(0,i.kt)("a",{parentName:"p",href:"/pages-for-subheaders/rancher-security"},"the table in the cluster hardening guide")," for information on which versions of Kubernetes, the Benchmark, Rancher, and our cluster hardening guide correspond to each other. Also refer to the hardening guide for configuration files of CIS-compliant clusters and information on remediating failed tests."),(0,i.kt)("h2",{id:"test-profiles"},"Test Profiles"),(0,i.kt)("p",null,"The following profiles are available:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Generic CIS 1.5"),(0,i.kt)("li",{parentName:"ul"},"Generic CIS 1.6"),(0,i.kt)("li",{parentName:"ul"},"RKE permissive 1.5"),(0,i.kt)("li",{parentName:"ul"},"RKE hardened 1.5"),(0,i.kt)("li",{parentName:"ul"},"RKE permissive 1.6"),(0,i.kt)("li",{parentName:"ul"},"RKE hardened 1.6"),(0,i.kt)("li",{parentName:"ul"},"RKE2 permissive 1.5"),(0,i.kt)("li",{parentName:"ul"},"RKE2 hardened 1.5"),(0,i.kt)("li",{parentName:"ul"},"RKE2 permissive 1.6"),(0,i.kt)("li",{parentName:"ul"},"RKE2 hardened 1.6"),(0,i.kt)("li",{parentName:"ul"},"AKS"),(0,i.kt)("li",{parentName:"ul"},"EKS"),(0,i.kt)("li",{parentName:"ul"},"GKE")),(0,i.kt)("p",null,"You also have the ability to customize a profile by saving a set of tests to skip."),(0,i.kt)("p",null,"All profiles will have a set of not applicable tests that will be skipped during the CIS scan. These tests are not applicable based on how a RKE cluster manages Kubernetes."),(0,i.kt)("p",null,"There are two types of RKE cluster scan profiles:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Permissive:")," This profile has a set of tests that have been will be skipped as these tests will fail on a default RKE Kubernetes cluster. Besides the list of skipped tests, the profile will also not run the not applicable tests."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Hardened:")," This profile will not skip any tests, except for the non-applicable tests.")),(0,i.kt)("p",null,"The EKS and GKE cluster scan profiles are based on CIS Benchmark versions that are specific to those types of clusters."),(0,i.kt)("p",null,'In order to pass the "Hardened" profile, you will need to follow the steps on the ',(0,i.kt)("a",{parentName:"p",href:"/pages-for-subheaders/rancher-security#rancher-hardening-guide"},"hardening guide")," and use the ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster.yml")," defined in the hardening guide to provision a hardened cluster."),(0,i.kt)("p",null,"The default profile and the supported CIS benchmark version depends on the type of cluster that will be scanned:"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-cis-benchmark")," supports the CIS 1.6 Benchmark version."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For RKE Kubernetes clusters, the RKE Permissive 1.6 profile is the default."),(0,i.kt)("li",{parentName:"ul"},"EKS and GKE have their own CIS Benchmarks published by ",(0,i.kt)("inlineCode",{parentName:"li"},"kube-bench"),". The corresponding test profiles are used by default for those clusters."),(0,i.kt)("li",{parentName:"ul"},"For RKE2 Kubernetes clusters, the RKE2 Permissive 1.6 profile is the default."),(0,i.kt)("li",{parentName:"ul"},"For cluster types other than RKE, RKE2, EKS and GKE, the Generic CIS 1.5 profile will be used by default.")),(0,i.kt)("h2",{id:"about-skipped-and-not-applicable-tests"},"About Skipped and Not Applicable Tests"),(0,i.kt)("p",null,"For a list of skipped and not applicable tests, refer to ",(0,i.kt)("a",{parentName:"p",href:"/how-to-guides/advanced-user-guides/cis-scan-guides/skip-tests"},"this page"),"."),(0,i.kt)("p",null,"For now, only user-defined skipped tests are marked as skipped in the generated report."),(0,i.kt)("p",null,"Any skipped tests that are defined as being skipped by one of the default profiles are marked as not applicable."),(0,i.kt)("h2",{id:"roles-based-access-control"},"Roles-based Access Control"),(0,i.kt)("p",null,"For information about permissions, refer to ",(0,i.kt)("a",{parentName:"p",href:"/explanations/integrations-in-rancher/cis-scans/rbac-for-cis-scans"},"this page")),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"For more information about configuring the custom resources for the scans, profiles, and benchmark versions, refer to ",(0,i.kt)("a",{parentName:"p",href:"/explanations/integrations-in-rancher/cis-scans/configuration-reference"},"this page")),(0,i.kt)("h2",{id:"how-to-guides"},"How-to Guides"),(0,i.kt)("p",null,"Please refer ",(0,i.kt)("a",{parentName:"p",href:"/pages-for-subheaders/cis-scan-guides"},"here")," for how-to guides on CIS scans."))}h.isMDXComponent=!0}}]);