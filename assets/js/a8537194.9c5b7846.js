"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[803],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=u(n),h=o,m=p["".concat(l,".").concat(h)]||p[h]||c[h]||a;return n?r.createElement(m,s(s({ref:t},d),{},{components:n})):r.createElement(m,s({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},21506:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),s=["components"],i={title:"Launching Kubernetes on Windows Clusters",weight:2240},l=void 0,u={unversionedId:"pages-for-subheaders/use-windows-clusters",id:"version-2.0-2.4/pages-for-subheaders/use-windows-clusters",title:"Launching Kubernetes on Windows Clusters",description:"Available as of v2.3.0",source:"@site/versioned_docs/version-2.0-2.4/pages-for-subheaders/use-windows-clusters.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/use-windows-clusters",permalink:"/v2.0-v2.4/pages-for-subheaders/use-windows-clusters",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/pages-for-subheaders/use-windows-clusters.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663024307,formattedLastUpdatedAt:"9/12/2022",frontMatter:{title:"Launching Kubernetes on Windows Clusters",weight:2240},sidebar:"tutorialSidebar",previous:{title:"Creating Credentials in the vSphere Console",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/create-credentials"},next:{title:"Configuration for Storage Classes in Azure",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters/azure-storageclass-configuration"}},d={},c=[{value:"OS and Docker Requirements",id:"os-and-docker-requirements",level:3},{value:"Kubernetes Version",id:"kubernetes-version",level:3},{value:"Node Requirements",id:"node-requirements",level:3},{value:"Networking Requirements",id:"networking-requirements",level:3},{value:"Architecture Requirements",id:"architecture-requirements",level:3},{value:"Container Requirements",id:"container-requirements",level:3},{value:"Cloud Provider Specific Requirements",id:"cloud-provider-specific-requirements",level:3},{value:"Add Linux Master Node",id:"add-linux-master-node",level:3},{value:"Add Linux Worker Node",id:"add-linux-worker-node",level:3},{value:"Add a Windows Worker Node",id:"add-a-windows-worker-node",level:3},{value:"Optional Next Steps",id:"optional-next-steps",level:3}],p={toc:c};function h(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Available as of v2.3.0")),(0,a.kt)("p",null,"When provisioning a ",(0,a.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/use-existing-nodes"},"custom cluster")," using Rancher, Rancher uses RKE (the Rancher Kubernetes Engine) to install Kubernetes on your existing nodes."),(0,a.kt)("p",null,"In a Windows cluster provisioned with Rancher, the cluster must contain both Linux and Windows nodes. The Kubernetes controlplane can only run on Linux nodes, and the Windows nodes can only have the worker role. Windows nodes can only be used for deploying workloads."),(0,a.kt)("p",null,"Some other requirements for Windows clusters include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You can only add Windows nodes to a cluster if Windows support is enabled when the cluster is created. Windows support cannot be enabled for existing clusters."),(0,a.kt)("li",{parentName:"ul"},"Kubernetes 1.15+ is required."),(0,a.kt)("li",{parentName:"ul"},"The Flannel network provider must be used."),(0,a.kt)("li",{parentName:"ul"},"Windows nodes must have 50 GB of disk space.")),(0,a.kt)("p",null,"For the full list of requirements, see ",(0,a.kt)("a",{parentName:"p",href:"#requirements-for-windows-clusters"},"this section.")),(0,a.kt)("p",null,"For a summary of Kubernetes features supported in Windows, see the Kubernetes documentation on ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/setup/production-environment/windows/intro-windows-in-kubernetes/#supported-functionality-and-limitations"},"supported functionality and limitations for using Kubernetes with Windows")," or the ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/setup/production-environment/windows/user-guide-windows-containers/"},"guide for scheduling Windows containers in Kubernetes"),"."),(0,a.kt)("h1",{id:"requirements-for-windows-clusters"},"Requirements for Windows Clusters"),(0,a.kt)("p",null,"The general node requirements for networking, operating systems, and Docker are the same as the node requirements for a ",(0,a.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/installation-requirements"},"Rancher installation"),"."),(0,a.kt)("h3",{id:"os-and-docker-requirements"},"OS and Docker Requirements"),(0,a.kt)("p",null,"In order to add Windows worker nodes to a cluster, the node must be running one of the following Windows Server versions and the corresponding version of Docker Engine - Enterprise Edition (EE):"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Nodes with Windows Server core version 1809 should use Docker EE-basic 18.09 or Docker EE-basic 19.03."),(0,a.kt)("li",{parentName:"ul"},"Nodes with Windows Server core version 1903 should use Docker EE-basic 19.03.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Notes:")),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"If you are using AWS, Rancher recommends ",(0,a.kt)("em",{parentName:"li"},"Microsoft Windows Server 2019 Base with Containers")," as the Amazon Machine Image (AMI)."),(0,a.kt)("li",{parentName:"ul"},"If you are using GCE, Rancher recommends ",(0,a.kt)("em",{parentName:"li"},"Windows Server 2019 Datacenter for Containers")," as the OS image."))),(0,a.kt)("h3",{id:"kubernetes-version"},"Kubernetes Version"),(0,a.kt)("p",null,"Kubernetes v1.15+ is required."),(0,a.kt)("h3",{id:"node-requirements"},"Node Requirements"),(0,a.kt)("p",null,"The hosts in the cluster need to have at least:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"2 core CPUs"),(0,a.kt)("li",{parentName:"ul"},"5 GB memory"),(0,a.kt)("li",{parentName:"ul"},"50 GB disk space")),(0,a.kt)("p",null,"Rancher will not provision the node if the node does not meet these requirements."),(0,a.kt)("h3",{id:"networking-requirements"},"Networking Requirements"),(0,a.kt)("p",null,"Before provisioning a new cluster, be sure that you have already installed Rancher on a device that accepts inbound network traffic. This is required in order for the cluster nodes to communicate with Rancher. If you have not already installed Rancher, please refer to the ",(0,a.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/installation-and-upgrade"},"installation documentation")," before proceeding with this guide."),(0,a.kt)("p",null,"Rancher only supports Windows using Flannel as the network provider."),(0,a.kt)("p",null,"There are two network options: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/coreos/flannel/blob/master/Documentation/backends.md#host-gw"},(0,a.kt)("strong",{parentName:"a"},"Host Gateway (L2bridge)"))," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/coreos/flannel/blob/master/Documentation/backends.md#vxlan"},(0,a.kt)("strong",{parentName:"a"},"VXLAN (Overlay)")),". The default option is ",(0,a.kt)("strong",{parentName:"p"},"VXLAN (Overlay)")," mode."),(0,a.kt)("p",null,"For ",(0,a.kt)("strong",{parentName:"p"},"Host Gateway (L2bridge)")," networking, it's best to use the same Layer 2 network for all nodes. Otherwise, you need to configure the route rules for them. For details, refer to the ",(0,a.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters/network-requirements-for-host-gateway#cloud-hosted-vm-routes-configuration"},"documentation on configuring cloud-hosted VM routes.")," You will also need to ",(0,a.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters/network-requirements-for-host-gateway#disabling-private-ip-address-checks"},"disable private IP address checks")," if you are using Amazon EC2, Google GCE, or Azure VM."),(0,a.kt)("p",null,"For ",(0,a.kt)("strong",{parentName:"p"},"VXLAN (Overlay)")," networking, the ",(0,a.kt)("a",{parentName:"p",href:"https://support.microsoft.com/en-us/help/4489899"},"KB4489899")," hotfix must be installed. Most cloud-hosted VMs already have this hotfix."),(0,a.kt)("p",null,"If you are configuring DHCP options sets for an AWS virtual private cloud, note that in the ",(0,a.kt)("inlineCode",{parentName:"p"},"domain-name")," option field, only one domain name can be specified. According to the DHCP options ",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/vpc/latest/userguide/VPC_DHCP_Options.html"},"documentation:")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Some Linux operating systems accept multiple domain names separated by spaces. However, other Linux operating systems and Windows treat the value as a single domain, which results in unexpected behavior. If your DHCP options set is associated with a VPC that has instances with multiple operating systems, specify only one domain name.")),(0,a.kt)("h3",{id:"architecture-requirements"},"Architecture Requirements"),(0,a.kt)("p",null,"The Kubernetes cluster management nodes (",(0,a.kt)("inlineCode",{parentName:"p"},"etcd")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"controlplane"),") must be run on Linux nodes."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"worker")," nodes, which is where your workloads will be deployed on, will typically be Windows nodes, but there must be at least one ",(0,a.kt)("inlineCode",{parentName:"p"},"worker")," node that is run on Linux in order to run the Rancher cluster agent, DNS, metrics server, and Ingress related containers."),(0,a.kt)("p",null,"We recommend the minimum three-node architecture listed in the table below, but you can always add additional Linux and Windows workers to scale up your cluster for redundancy:"),(0,a.kt)("a",{id:"guide-architecture"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Node"),(0,a.kt)("th",{parentName:"tr",align:null},"Operating System"),(0,a.kt)("th",{parentName:"tr",align:null},"Kubernetes Cluster Role(s)"),(0,a.kt)("th",{parentName:"tr",align:null},"Purpose"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Node 1"),(0,a.kt)("td",{parentName:"tr",align:null},"Linux (Ubuntu Server 18.04 recommended)"),(0,a.kt)("td",{parentName:"tr",align:null},"Control plane, etcd, worker"),(0,a.kt)("td",{parentName:"tr",align:null},"Manage the Kubernetes cluster")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Node 2"),(0,a.kt)("td",{parentName:"tr",align:null},"Linux (Ubuntu Server 18.04 recommended)"),(0,a.kt)("td",{parentName:"tr",align:null},"Worker"),(0,a.kt)("td",{parentName:"tr",align:null},"Support the Rancher Cluster agent, Metrics server, DNS, and Ingress for the cluster")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Node 3"),(0,a.kt)("td",{parentName:"tr",align:null},"Windows (Windows Server core version 1809 or above)"),(0,a.kt)("td",{parentName:"tr",align:null},"Worker"),(0,a.kt)("td",{parentName:"tr",align:null},"Run your Windows containers")))),(0,a.kt)("h3",{id:"container-requirements"},"Container Requirements"),(0,a.kt)("p",null,"Windows requires that containers must be built on the same Windows Server version that they are being deployed on. Therefore, containers must be built on Windows Server core version 1809 or above. If you have existing containers built for an earlier Windows Server core version, they must be re-built on Windows Server core version 1809 or above."),(0,a.kt)("h3",{id:"cloud-provider-specific-requirements"},"Cloud Provider Specific Requirements"),(0,a.kt)("p",null,"If you set a Kubernetes cloud provider in your cluster, some additional steps are required. You might want to set a cloud provider if you want to want to leverage a cloud provider's capabilities, for example, to automatically provision storage, load balancers, or other infrastructure for your cluster. Refer to ",(0,a.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/set-up-cloud-providers"},"this page")," for details on how to configure a cloud provider cluster of nodes that meet the prerequisites."),(0,a.kt)("p",null,"If you are using the GCE (Google Compute Engine) cloud provider, you must do the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Enable the GCE cloud provider in the ",(0,a.kt)("inlineCode",{parentName:"li"},"cluster.yml")," by following ",(0,a.kt)("a",{parentName:"li",href:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/other-cloud-providers/google-compute-engine"},"these steps.")),(0,a.kt)("li",{parentName:"ul"},"When provisioning the cluster in Rancher, choose ",(0,a.kt)("strong",{parentName:"li"},"Custom cloud provider")," as the cloud provider in the Rancher UI.")),(0,a.kt)("h1",{id:"tutorial-how-to-create-a-cluster-with-windows-support"},"Tutorial: How to Create a Cluster with Windows Support"),(0,a.kt)("p",null,"This tutorial describes how to create a Rancher-provisioned cluster with the three nodes in the ",(0,a.kt)("a",{parentName:"p",href:"#guide-architecture"},"recommended architecture.")),(0,a.kt)("p",null,"When you provision a cluster with Rancher on existing nodes, you will add nodes to the cluster by installing the ",(0,a.kt)("a",{parentName:"p",href:"/v2.0-v2.4/reference-guides/cluster-configuration/rancher-server-configuration/use-existing-nodes/rancher-agent-options"},"Rancher agent")," on each one. When you create or edit your cluster from the Rancher UI, you will see a ",(0,a.kt)("strong",{parentName:"p"},"Customize Node Run Command")," that you can run on each server to add it to your cluster."),(0,a.kt)("p",null,"To set up a cluster with support for Windows nodes and containers, you will need to complete the tasks below."),(0,a.kt)("h1",{id:"1-provision-hosts"},"1. Provision Hosts"),(0,a.kt)("p",null,"To begin provisioning a cluster on existing nodes with Windows support, prepare your hosts."),(0,a.kt)("p",null,"Your hosts can be:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Cloud-hosted VMs"),(0,a.kt)("li",{parentName:"ul"},"VMs from virtualization clusters"),(0,a.kt)("li",{parentName:"ul"},"Bare-metal servers")),(0,a.kt)("p",null,"You will provision three nodes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"One Linux node, which manages the Kubernetes control plane and stores your ",(0,a.kt)("inlineCode",{parentName:"li"},"etcd")),(0,a.kt)("li",{parentName:"ul"},"A second Linux node, which will be another worker node"),(0,a.kt)("li",{parentName:"ul"},"The Windows node, which will run your Windows containers as a worker node")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Node"),(0,a.kt)("th",{parentName:"tr",align:null},"Operating System"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Node 1"),(0,a.kt)("td",{parentName:"tr",align:null},"Linux (Ubuntu Server 18.04 recommended)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Node 2"),(0,a.kt)("td",{parentName:"tr",align:null},"Linux (Ubuntu Server 18.04 recommended)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Node 3"),(0,a.kt)("td",{parentName:"tr",align:null},"Windows (Windows Server core version 1809 or above required)")))),(0,a.kt)("p",null,"If your nodes are hosted by a ",(0,a.kt)("strong",{parentName:"p"},"Cloud Provider")," and you want automation support such as loadbalancers or persistent storage devices, your nodes have additional configuration requirements. For details, see ",(0,a.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/set-up-cloud-providers"},"Selecting Cloud Providers.")),(0,a.kt)("h1",{id:"2-create-the-cluster-on-existing-nodes"},"2. Create the Cluster on Existing Nodes"),(0,a.kt)("p",null,"The instructions for creating a Windows cluster on existing nodes are very similar to the general ",(0,a.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/use-existing-nodes"},"instructions for creating a custom cluster")," with some Windows-specific requirements."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"From the ",(0,a.kt)("strong",{parentName:"li"},"Global")," view, click on the ",(0,a.kt)("strong",{parentName:"li"},"Clusters")," tab and click ",(0,a.kt)("strong",{parentName:"li"},"Add Cluster"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"From existing nodes (Custom)"),"."),(0,a.kt)("li",{parentName:"ol"},"Enter a name for your cluster in the ",(0,a.kt)("strong",{parentName:"li"},"Cluster Name")," text box."),(0,a.kt)("li",{parentName:"ol"},"In the ",(0,a.kt)("strong",{parentName:"li"},"Kubernetes Version")," dropdown menu, select v1.15 or above."),(0,a.kt)("li",{parentName:"ol"},"In the ",(0,a.kt)("strong",{parentName:"li"},"Network Provider")," field, select ",(0,a.kt)("strong",{parentName:"li"},"Flannel.")),(0,a.kt)("li",{parentName:"ol"},"In the ",(0,a.kt)("strong",{parentName:"li"},"Windows Support")," section, click ",(0,a.kt)("strong",{parentName:"li"},"Enable.")),(0,a.kt)("li",{parentName:"ol"},"Optional: After you enable Windows support, you will be able to choose the Flannel backend. There are two network options: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/coreos/flannel/blob/master/Documentation/backends.md#host-gw"},(0,a.kt)("strong",{parentName:"a"},"Host Gateway (L2bridge)"))," and ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/coreos/flannel/blob/master/Documentation/backends.md#vxlan"},(0,a.kt)("strong",{parentName:"a"},"VXLAN (Overlay)")),". The default option is ",(0,a.kt)("strong",{parentName:"li"},"VXLAN (Overlay)")," mode."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Next"),".")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Important:")," For ",(0,a.kt)("b",null,"Host Gateway (L2bridge)")," networking, it's best to use the same Layer 2 network for all nodes. Otherwise, you need to configure the route rules for them. For details, refer to the ",(0,a.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters/network-requirements-for-host-gateway#cloud-hosted-vm-routes-configuration"},"documentation on configuring cloud-hosted VM routes.")," You will also need to ",(0,a.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters/network-requirements-for-host-gateway#disabling-private-ip-address-checks"},"disable private IP address checks")," if you are using Amazon EC2, Google GCE, or Azure VM.")),(0,a.kt)("h1",{id:"3-add-nodes-to-the-cluster"},"3. Add Nodes to the Cluster"),(0,a.kt)("p",null,"This section describes how to register your Linux and Worker nodes to your cluster. You will run a command on each node, which will install the Rancher agent and allow Rancher to manage each node."),(0,a.kt)("h3",{id:"add-linux-master-node"},"Add Linux Master Node"),(0,a.kt)("p",null,"In this section, we fill out a form on the Rancher UI to get a custom command to install the Rancher agent on the Linux master node. Then we will copy the command and run it on our Linux master node to register the node in the cluster."),(0,a.kt)("p",null,"The first node in your cluster should be a Linux host has both the ",(0,a.kt)("strong",{parentName:"p"},"Control Plane")," and ",(0,a.kt)("strong",{parentName:"p"},"etcd")," roles. At a minimum, both of these roles must be enabled for this node, and this node must be added to your cluster before you can add Windows hosts."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In the ",(0,a.kt)("strong",{parentName:"li"},"Node Operating System")," section, click ",(0,a.kt)("strong",{parentName:"li"},"Linux"),"."),(0,a.kt)("li",{parentName:"ol"},"In the ",(0,a.kt)("strong",{parentName:"li"},"Node Role")," section, choose at least ",(0,a.kt)("strong",{parentName:"li"},"etcd")," and ",(0,a.kt)("strong",{parentName:"li"},"Control Plane"),". We recommend selecting all three."),(0,a.kt)("li",{parentName:"ol"},"Optional: If you click ",(0,a.kt)("strong",{parentName:"li"},"Show advanced options,")," you can customize the settings for the ",(0,a.kt)("a",{parentName:"li",href:"/v2.0-v2.4/reference-guides/cluster-configuration/rancher-server-configuration/use-existing-nodes/rancher-agent-options"},"Rancher agent")," and ",(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/"},"node labels.")),(0,a.kt)("li",{parentName:"ol"},"Copy the command displayed on the screen to your clipboard."),(0,a.kt)("li",{parentName:"ol"},"SSH into your Linux host and run the command that you copied to your clipboard."),(0,a.kt)("li",{parentName:"ol"},"When you are finished provisioning your Linux node(s), select ",(0,a.kt)("strong",{parentName:"li"},"Done"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")),(0,a.kt)("p",null,"Your cluster is created and assigned a state of ",(0,a.kt)("strong",{parentName:"p"},"Provisioning.")," Rancher is standing up your cluster."),(0,a.kt)("p",null,"You can access your cluster after its state is updated to ",(0,a.kt)("strong",{parentName:"p"},"Active.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Active")," clusters are assigned two Projects:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Default"),", containing the ",(0,a.kt)("inlineCode",{parentName:"li"},"default")," namespace"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"System"),", containing the ",(0,a.kt)("inlineCode",{parentName:"li"},"cattle-system"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"ingress-nginx"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"kube-public"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"kube-system")," namespaces")),(0,a.kt)("p",null,"It may take a few minutes for the node to be registered in your cluster."),(0,a.kt)("h3",{id:"add-linux-worker-node"},"Add Linux Worker Node"),(0,a.kt)("p",null,"In this section, we run a command to register the Linux worker node to the cluster."),(0,a.kt)("p",null,"After the initial provisioning of your cluster, your cluster only has a single Linux host. Next, we add another Linux ",(0,a.kt)("inlineCode",{parentName:"p"},"worker")," host, which will be used to support ",(0,a.kt)("em",{parentName:"p"},"Rancher cluster agent"),", ",(0,a.kt)("em",{parentName:"p"},"Metrics server"),", ",(0,a.kt)("em",{parentName:"p"},"DNS")," and ",(0,a.kt)("em",{parentName:"p"},"Ingress")," for your cluster."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"From the ",(0,a.kt)("strong",{parentName:"li"},"Global")," view, click ",(0,a.kt)("strong",{parentName:"li"},"Clusters.")),(0,a.kt)("li",{parentName:"ol"},"Go to the cluster that you created and click ",(0,a.kt)("strong",{parentName:"li"},"\u22ee"," > Edit.")),(0,a.kt)("li",{parentName:"ol"},"Scroll down to ",(0,a.kt)("strong",{parentName:"li"},"Node Operating System"),". Choose ",(0,a.kt)("strong",{parentName:"li"},"Linux"),"."),(0,a.kt)("li",{parentName:"ol"},"In the ",(0,a.kt)("strong",{parentName:"li"},"Customize Node Run Command")," section, go to the ",(0,a.kt)("strong",{parentName:"li"},"Node Options")," and select the ",(0,a.kt)("strong",{parentName:"li"},"Worker")," role."),(0,a.kt)("li",{parentName:"ol"},"Copy the command displayed on screen to your clipboard."),(0,a.kt)("li",{parentName:"ol"},"Log in to your Linux host using a remote Terminal connection. Run the command copied to your clipboard."),(0,a.kt)("li",{parentName:"ol"},"From ",(0,a.kt)("strong",{parentName:"li"},"Rancher"),", click ",(0,a.kt)("strong",{parentName:"li"},"Save"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")," The ",(0,a.kt)("strong",{parentName:"p"},"Worker")," role is installed on your Linux host, and the node registers with Rancher. It may take a few minutes for the node to be registered in your cluster."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," Taints on Linux Worker Nodes"),(0,a.kt)("p",{parentName:"blockquote"},"For each Linux worker node added into the cluster, the following taints will be added to Linux worker node. By adding this taint to the Linux worker node, any workloads added to the Windows cluster will be automatically scheduled to the Windows worker node. If you want to schedule workloads specifically onto the Linux worker node, you will need to add tolerations to those workloads.")),(0,a.kt)("blockquote",null,(0,a.kt)("table",{parentName:"blockquote"},(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Taint Key"),(0,a.kt)("th",{parentName:"tr",align:null},"Taint Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Taint Effect"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"cattle.io/os")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"linux")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"NoSchedule")))))),(0,a.kt)("h3",{id:"add-a-windows-worker-node"},"Add a Windows Worker Node"),(0,a.kt)("p",null,"In this section, we run a command to register the Windows worker node to the cluster."),(0,a.kt)("p",null,"You can add Windows hosts to the cluster by editing the cluster and choosing the ",(0,a.kt)("strong",{parentName:"p"},"Windows")," option."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"From the ",(0,a.kt)("strong",{parentName:"li"},"Global")," view, click ",(0,a.kt)("strong",{parentName:"li"},"Clusters.")),(0,a.kt)("li",{parentName:"ol"},"Go to the cluster that you created and click ",(0,a.kt)("strong",{parentName:"li"},"\u22ee"," > Edit.")),(0,a.kt)("li",{parentName:"ol"},"Scroll down to ",(0,a.kt)("strong",{parentName:"li"},"Node Operating System"),". Choose ",(0,a.kt)("strong",{parentName:"li"},"Windows"),". Note: You will see that the ",(0,a.kt)("strong",{parentName:"li"},"worker")," role is the only available role."),(0,a.kt)("li",{parentName:"ol"},"Copy the command displayed on screen to your clipboard."),(0,a.kt)("li",{parentName:"ol"},"Log in to your Windows host using your preferred tool, such as ",(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/windows-server/remote/remote-desktop-services/clients/remote-desktop-clients"},"Microsoft Remote Desktop"),". Run the command copied to your clipboard in the ",(0,a.kt)("strong",{parentName:"li"},"Command Prompt (CMD)"),"."),(0,a.kt)("li",{parentName:"ol"},"From Rancher, click ",(0,a.kt)("strong",{parentName:"li"},"Save"),"."),(0,a.kt)("li",{parentName:"ol"},"Optional: Repeat these instructions if you want to add more Windows nodes to your cluster.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")," The ",(0,a.kt)("strong",{parentName:"p"},"Worker")," role is installed on your Windows host, and the node registers with Rancher. It may take a few minutes for the node to be registered in your cluster. You now have a Windows Kubernetes cluster."),(0,a.kt)("h3",{id:"optional-next-steps"},"Optional Next Steps"),(0,a.kt)("p",null,"After creating your cluster, you can access it through the Rancher UI. As a best practice, we recommend setting up these alternate ways of accessing your cluster:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Access your cluster with the kubectl CLI:")," Follow ",(0,a.kt)("a",{parentName:"li",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig#accessing-clusters-with-kubectl-on-your-workstation"},"these steps")," to access clusters with kubectl on your workstation. In this case, you will be authenticated through the Rancher server\u2019s authentication proxy, then Rancher will connect you to the downstream cluster. This method lets you manage the cluster without the Rancher UI."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Access your cluster with the kubectl CLI, using the authorized cluster endpoint:")," Follow ",(0,a.kt)("a",{parentName:"li",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig#authenticating-directly-with-a-downstream-cluster"},"these steps")," to access your cluster with kubectl directly, without authenticating through the Rancher server. We recommend setting up this alternative method to access your cluster so that in case you can\u2019t connect to Rancher, you can still access the cluster.")),(0,a.kt)("h1",{id:"configuration-for-storage-classes-in-azure"},"Configuration for Storage Classes in Azure"),(0,a.kt)("p",null,"If you are using Azure VMs for your nodes, you can use ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/aks/azure-files-dynamic-pv"},"Azure files")," as a StorageClass for the cluster. For details, refer to ",(0,a.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters/azure-storageclass-configuration"},"this section.")))}h.isMDXComponent=!0}}]);