"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[32959],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(n),d=r,m=h["".concat(l,".").concat(d)]||h[d]||p[d]||o;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3605:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={title:"Helm CLI Quick Start"},i=void 0,s={unversionedId:"getting-started/quick-start-guides/deploy-rancher-manager/helm-cli",id:"getting-started/quick-start-guides/deploy-rancher-manager/helm-cli",title:"Helm CLI Quick Start",description:"These instructions capture a quick way to set up a proof-of-concept Rancher installation.",source:"@site/docs/getting-started/quick-start-guides/deploy-rancher-manager/helm-cli.md",sourceDirName:"getting-started/quick-start-guides/deploy-rancher-manager",slug:"/getting-started/quick-start-guides/deploy-rancher-manager/helm-cli",permalink:"/getting-started/quick-start-guides/deploy-rancher-manager/helm-cli",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/getting-started/quick-start-guides/deploy-rancher-manager/helm-cli.md",tags:[],version:"current",lastUpdatedAt:1679426796,formattedLastUpdatedAt:"Mar 21, 2023",frontMatter:{title:"Helm CLI Quick Start"},sidebar:"tutorialSidebar",previous:{title:"Rancher Equinix Metal Quick Start",permalink:"/getting-started/quick-start-guides/deploy-rancher-manager/equinix-metal"},next:{title:"Rancher Prime",permalink:"/getting-started/quick-start-guides/deploy-rancher-manager/prime"}},l={},c=[{value:"Install K3s on Linux",id:"install-k3s-on-linux",level:2},{value:"Save the kubeconfig to your workstation",id:"save-the-kubeconfig-to-your-workstation",level:2},{value:"Edit the Rancher server URL in the kubeconfig",id:"edit-the-rancher-server-url-in-the-kubeconfig",level:2},{value:"Install Rancher with Helm",id:"install-rancher-with-helm",level:2}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},p=u("Tabs"),h=u("TabItem"),d={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"These instructions capture a quick way to set up a proof-of-concept Rancher installation."),(0,r.kt)("p",null,"These instructions assume you have a Linux virtual machine that you will communicate with from your local workstation. Rancher will be installed on the Linux machine. You will need to retrieve the IP address of that machine so that you can access Rancher from your local workstation. Rancher is designed to manage Kubernetes clusters remotely, so any Kubernetes cluster that Rancher manages in the future will also need to be able to reach this IP address."),(0,r.kt)("p",null,"We don't recommend installing Rancher locally because it creates a networking problem. Installing Rancher on localhost does not allow Rancher to communicate with downstream Kubernetes clusters, so on localhost you wouldn't be able to test Rancher's cluster provisioning or cluster management functionality."),(0,r.kt)("p",null,"Your Linux machine can be anywhere. It could be an Amazon EC2 instance, a Digital Ocean droplet, or an Azure virtual machine, to name a few examples. Other Rancher docs often use 'node' as a generic term for all of these. One possible way to deploy a Linux machine is by setting up an Amazon EC2 instance as shown in ",(0,r.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/infrastructure-setup/nodes-in-amazon-ec2"},"this tutorial"),"."),(0,r.kt)("p",null,"The full installation requirements are ",(0,r.kt)("a",{parentName:"p",href:"/pages-for-subheaders/installation-requirements"},"here"),"."),(0,r.kt)("h2",{id:"install-k3s-on-linux"},"Install K3s on Linux"),(0,r.kt)("p",null,"Rancher needs to be installed on a supported Kubernetes version. To specify the K3s version, use the INSTALL_K3S_VERSION (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},'INSTALL_K3S_VERSION="v1.24.10+k3s1"'),") environment variable when running the K3s installation script. Refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://rancher.com/support-maintenance-terms/"},"support maintenance terms"),"."),(0,r.kt)("p",null,"Install a K3s cluster by running this command on the Linux machine:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"curl -sfL https://get.k3s.io | INSTALL_K3S_VERSION=<VERSION> sh -s - server --cluster-init\n")),(0,r.kt)("p",null,"Using ",(0,r.kt)("inlineCode",{parentName:"p"},"--cluster-init")," allows K3s to use embedded etcd as the datastore and has the ability to convert to an HA setup. Refer to ",(0,r.kt)("a",{parentName:"p",href:"https://rancher.com/docs/k3s/latest/en/installation/ha-embedded/"},"High Availability with Embedded DB"),"."),(0,r.kt)("p",null,"Save the IP of the Linux machine."),(0,r.kt)("h2",{id:"save-the-kubeconfig-to-your-workstation"},"Save the kubeconfig to your workstation"),(0,r.kt)("p",null,"The kubeconfig file is important for accessing the Kubernetes cluster. Copy the file at ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/rancher/k3s/k3s.yaml")," from the Linux machine and save it to your local workstation in the directory ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.kube/config"),". One way to do this is by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"scp")," tool and run this command on your local machine:"),(0,r.kt)(p,{mdxType:"Tabs"},(0,r.kt)(h,{value:"Mac and Linux",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"scp root@<IP_OF_LINUX_MACHINE>:/etc/rancher/k3s/k3s.yaml ~/.kube/config\n")),(0,r.kt)("p",null,"In some cases it may need to make sure that your shell has the environment variable ",(0,r.kt)("inlineCode",{parentName:"p"},"KUBECONFIG=~/.kube/config")," defined, for instance, it can be exported in your profile or rc files.")),(0,r.kt)(h,{value:"Windows",mdxType:"TabItem"},(0,r.kt)("p",null,'By default, "scp" is not a recognized command, so we need to install a module first.'),(0,r.kt)("p",null,"In Windows Powershell:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Find-Module Posh-SSH\nInstall-Module Posh-SSH\n\n## Get the remote kubeconfig file\nscp root@<IP_OF_LINUX_MACHINE>:/etc/rancher/k3s/k3s.yaml $env:USERPROFILE\\.kube\\config\n")))),(0,r.kt)("h2",{id:"edit-the-rancher-server-url-in-the-kubeconfig"},"Edit the Rancher server URL in the kubeconfig"),(0,r.kt)("p",null,"In the kubeconfig file, you will need to change the value of the ",(0,r.kt)("inlineCode",{parentName:"p"},"server")," field to ",(0,r.kt)("inlineCode",{parentName:"p"},"<IP_OF_LINUX_NODE>:6443"),". The Kubernetes API server will be reached at port 6443, while the Rancher server will be reached at ports 80 and 443. This edit is needed so that when you run Helm or kubectl commands from your local workstation, you will be able to communicate with the Kubernetes cluster that Rancher will be installed on."),(0,r.kt)(p,{mdxType:"Tabs"},(0,r.kt)(h,{value:"Mac and Linux",mdxType:"TabItem"},(0,r.kt)("p",null,"One way to open the kubeconfig file for editing is to use Vim:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"vi ~/.kube/config\n")),(0,r.kt)("p",null,"Press ",(0,r.kt)("inlineCode",{parentName:"p"},"i")," to put Vim in insert mode. To save your work, press ",(0,r.kt)("inlineCode",{parentName:"p"},"Esc"),". Then press ",(0,r.kt)("inlineCode",{parentName:"p"},":wq")," and press ",(0,r.kt)("inlineCode",{parentName:"p"},"Enter"),".")),(0,r.kt)(h,{value:"Windows",mdxType:"TabItem"},(0,r.kt)("p",null,"In Windows Powershell, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"notepad.exe")," for editing the kubeconfig file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"notepad.exe $env:USERPROFILE\\.kube\\config\n")),(0,r.kt)("p",null,"Once edited, either press ",(0,r.kt)("inlineCode",{parentName:"p"},"ctrl+s")," or go to ",(0,r.kt)("inlineCode",{parentName:"p"},"File > Save")," to save your work."))),(0,r.kt)("h2",{id:"install-rancher-with-helm"},"Install Rancher with Helm"),(0,r.kt)("p",null,"Then from your local workstation, run the following commands. You will need to have ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/#kubectl"},"kubectl")," and ",(0,r.kt)("a",{parentName:"p",href:"https://helm.sh/docs/intro/install/"},"helm.")," installed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"helm repo add rancher-latest https://releases.rancher.com/server-charts/latest\n\nkubectl create namespace cattle-system\n\nkubectl apply -f https://github.com/cert-manager/cert-manager/releases/download/v1.7.1/cert-manager.crds.yaml\n\nhelm repo add jetstack https://charts.jetstack.io\n\nhelm repo update\n\nhelm install cert-manager jetstack/cert-manager \\\n  --namespace cert-manager \\\n  --create-namespace \\\n  --version v1.7.1\n\n# Windows Powershell\nhelm install cert-manager jetstack/cert-manager `\n  --namespace cert-manager `\n  --create-namespace `\n  --version v1.7.1\n")),(0,r.kt)("p",null,"The final command to install Rancher is below. The command requires a domain name that forwards traffic to the Linux machine. For the sake of simplicity in this tutorial, you can use a fake domain name to create your proof-of-concept. An example of a fake domain name would be ",(0,r.kt)("inlineCode",{parentName:"p"},"<IP_OF_LINUX_NODE>.sslip.io"),"."),(0,r.kt)("p",null,"To install a specific Rancher version, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--version")," flag (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"--version 2.6.6"),"). Otherwise, the latest Rancher is installed by default. Refer to ",(0,r.kt)("a",{parentName:"p",href:"/getting-started/installation-and-upgrade/resources/choose-a-rancher-version"},"Choosing a Rancher Version"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"helm install rancher rancher-latest/rancher \\\n  --namespace cattle-system \\\n  --set hostname=<IP_OF_LINUX_NODE>.sslip.io \\\n  --set replicas=1 \\\n  --set bootstrapPassword=<PASSWORD_FOR_RANCHER_ADMIN>\n\n# Windows Powershell\nhelm install rancher rancher-latest/rancher `\n  --namespace cattle-system `\n  --set hostname=<IP_OF_LINUX_NODE>.sslip.io `\n  --set replicas=1 `\n  --set bootstrapPassword=<PASSWORD_FOR_RANCHER_ADMIN>\n")),(0,r.kt)("p",null,"Now if you navigate to ",(0,r.kt)("inlineCode",{parentName:"p"},"<IP_OF_LINUX_NODE>.sslip.io")," in a web browser, you should see the Rancher UI."),(0,r.kt)("p",null,"To make these instructions simple, we used a fake domain name and self-signed certificates to do this installation. Therefore, you will probably need to add a security exception to your web browser to see the Rancher UI. Note that for production installs, you would need a high-availability setup with a load balancer, a real domain name and real certificates."),(0,r.kt)("p",null,"These instructions also left out the full installation requirements and other installation options. If you have any issues with these steps, refer to the full ",(0,r.kt)("a",{parentName:"p",href:"/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster"},"Helm CLI installation docs.")),(0,r.kt)("p",null,"To launch new Kubernetes clusters with your new Rancher server, you may need to set up cloud credentials in Rancher. For more information, see ",(0,r.kt)("a",{parentName:"p",href:"/pages-for-subheaders/launch-kubernetes-with-rancher"},"Launching Kubernetes clusters with Rancher.")))}m.isMDXComponent=!0}}]);