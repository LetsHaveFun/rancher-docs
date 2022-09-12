"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[83058],{3905:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return c}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},m=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),d=p(a),c=r,k=d["".concat(s,".").concat(c)]||d[c]||u[c]||l;return a?n.createElement(k,o(o({ref:e},m),{},{components:a})):n.createElement(k,o({ref:e},m))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},67373:function(t,e,a){a.r(e),a.d(e,{assets:function(){return m},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),o=["components"],i={title:"Notifiers",weight:4,aliases:["/rancher/v2.0-v2.4/en/project-admin/tools/notifiers","/rancher/v2.0-v2.4/en/cluster-admin/tools/notifiers","/rancher/v2.0-v2.4/en/monitoring-alerting/legacy/notifiers","/rancher/v2.0-v2.4/en/monitoring-alerting/v2.0.x-v2.4.x/notifiers","/rancher/v2.x/en/monitoring-alerting/v2.0.x-v2.4.x/notifiers/","/rancher/v2.x/en/monitoring-alerting/v2.0.x-v2.4.x/cluster-alerts/default-alerts/"]},s=void 0,p={unversionedId:"explanations/integrations-in-rancher/notifiers",id:"version-2.0-2.4/explanations/integrations-in-rancher/notifiers",title:"Notifiers",description:"Notifiers are services that inform you of alert events. You can configure notifiers to send alert notifications to staff best suited to take corrective action.",source:"@site/versioned_docs/version-2.0-2.4/explanations/integrations-in-rancher/notifiers.md",sourceDirName:"explanations/integrations-in-rancher",slug:"/explanations/integrations-in-rancher/notifiers",permalink:"/v2.0-v2.4/explanations/integrations-in-rancher/notifiers",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/explanations/integrations-in-rancher/notifiers.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663024307,formattedLastUpdatedAt:"9/12/2022",frontMatter:{title:"Notifiers",weight:4,aliases:["/rancher/v2.0-v2.4/en/project-admin/tools/notifiers","/rancher/v2.0-v2.4/en/cluster-admin/tools/notifiers","/rancher/v2.0-v2.4/en/monitoring-alerting/legacy/notifiers","/rancher/v2.0-v2.4/en/monitoring-alerting/v2.0.x-v2.4.x/notifiers","/rancher/v2.x/en/monitoring-alerting/v2.0.x-v2.4.x/notifiers/","/rancher/v2.x/en/monitoring-alerting/v2.0.x-v2.4.x/cluster-alerts/default-alerts/"]},sidebar:"tutorialSidebar",previous:{title:"OPA Gatekeeper",permalink:"/v2.0-v2.4/explanations/integrations-in-rancher/opa-gatekeeper"},next:{title:"FAQ",permalink:"/v2.0-v2.4/faq"}},m={},u=[{value:"Slack",id:"slack",level:3},{value:"Email",id:"email",level:3},{value:"PagerDuty",id:"pagerduty",level:3},{value:"Webhook",id:"webhook",level:3},{value:"WeChat",id:"wechat",level:3},{value:"DingTalk",id:"dingtalk",level:3},{value:"Microsoft Teams",id:"microsoft-teams",level:3}],d={toc:u};function c(t){var e=t.components,a=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Notifiers are services that inform you of alert events. You can configure notifiers to send alert notifications to staff best suited to take corrective action."),(0,l.kt)("p",null,"Rancher integrates with a variety of popular IT services, including:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Slack"),": Send alert notifications to your Slack channels."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Email"),": Choose email recipients for alert notifications."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"PagerDuty"),": Route notifications to staff by phone, SMS, or personal email."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"WebHooks"),": Update a webpage with alert notifications."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"WeChat"),": (Available as of v2.2.0) Send alert notifications to your Enterprise WeChat contacts."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"DingTalk"),": (Available as of v2.4.6) Send alert notifications to DingTalk using a webhook."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Microsoft Teams"),": (Available as of v2.4.6) Send alert notifications to Teams using a webhook.")),(0,l.kt)("h1",{id:"roles-based-access-control-for-notifiers"},"Roles-based Access Control for Notifiers"),(0,l.kt)("p",null,"Notifiers are configured at the cluster level. This model ensures that only cluster owners need to configure notifiers, leaving project owners to simply configure alerts in the scope of their projects. You don't need to dispense privileges like SMTP server access or cloud account access."),(0,l.kt)("h1",{id:"adding-notifiers"},"Adding Notifiers"),(0,l.kt)("p",null,"Set up a notifier so that you can begin configuring and sending alerts."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"From the ",(0,l.kt)("strong",{parentName:"li"},"Global View"),", open the cluster that you want to add a notifier."),(0,l.kt)("li",{parentName:"ol"},"From the main menu, select ",(0,l.kt)("strong",{parentName:"li"},"Tools > Notifiers"),". Then click ",(0,l.kt)("strong",{parentName:"li"},"Add Notifier"),"."),(0,l.kt)("li",{parentName:"ol"},"Select the service you want to use as your notifier, and then fill out the form. For help filling out the form, refer to the configuration section below."),(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("strong",{parentName:"li"},"Test.")," You should receive a notification confirming that the notifier is configured correctly."),(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("strong",{parentName:"li"},"Add")," to complete adding the notifier.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Result:")," Your notifier is added to Rancher."),(0,l.kt)("h1",{id:"configuration"},"Configuration"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#slack"},"Slack")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#email"},"Email")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#pagerduty"},"PagerDuty")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#webhook"},"Webhook")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#wechat"},"WeChat")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#dingtalk"},"DingTalk")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#microsoft-teams"},"Microsoft Teams"))),(0,l.kt)("h3",{id:"slack"},"Slack"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Explanation"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Name"),(0,l.kt)("td",{parentName:"tr",align:null},"Enter a ",(0,l.kt)("strong",{parentName:"td"},"Name")," for the notifier.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"URL"),(0,l.kt)("td",{parentName:"tr",align:null},"From Slack, create a webhook. For instructions, see the ",(0,l.kt)("a",{parentName:"td",href:"https://get.slack.help/hc/en-us/articles/115005265063-Incoming-WebHooks-for-Slack"},"Slack Documentation"),". Then enter the Slack webhook URL.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Default Channel"),(0,l.kt)("td",{parentName:"tr",align:null},"Enter the name of the channel that you want to send alert notifications in the following format: ",(0,l.kt)("inlineCode",{parentName:"td"},"#<channelname>"),". Both public and private channels are supported.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Proxy URL"),(0,l.kt)("td",{parentName:"tr",align:null},"Proxy for the Slack webhook.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Send Resolved Alerts"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"Available as of v2.3.0")," Whether to send a follow-up notification if an alert has been resolved (e.g. ","[Resolved]"," High CPU Usage)")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Validation:")," Click ",(0,l.kt)("strong",{parentName:"p"},"Test"),". If the test is successful, the Slack channel you're configuring for the notifier outputs ",(0,l.kt)("strong",{parentName:"p"},"Slack setting validated.")),(0,l.kt)("h3",{id:"email"},"Email"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Explanation"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Name"),(0,l.kt)("td",{parentName:"tr",align:null},"Enter a ",(0,l.kt)("strong",{parentName:"td"},"Name")," for the notifier.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Default Recipient Address"),(0,l.kt)("td",{parentName:"tr",align:null},"Enter the email address that you want to receive the notification.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Send Resolved Alerts"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"Available as of v2.3.0")," Whether to send a follow-up notification if an alert has been resolved (e.g. ","[Resolved]"," High CPU Usage)")))),(0,l.kt)("p",null,"SMTP Server Configuration:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Explanation"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Sender"),(0,l.kt)("td",{parentName:"tr",align:null},"Enter an email address available on your mail server that you want to send the notification.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Host"),(0,l.kt)("td",{parentName:"tr",align:null},"Enter the IP address or hostname for your SMTP server. Example: ",(0,l.kt)("inlineCode",{parentName:"td"},"smtp.email.com"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Port"),(0,l.kt)("td",{parentName:"tr",align:null},"In the ",(0,l.kt)("strong",{parentName:"td"},"Port")," field, enter the port used for email. Typically, TLS uses ",(0,l.kt)("inlineCode",{parentName:"td"},"587")," and SSL uses ",(0,l.kt)("inlineCode",{parentName:"td"},"465"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Use TLS"),(0,l.kt)("td",{parentName:"tr",align:null},"If you're using TLS, make sure ",(0,l.kt)("strong",{parentName:"td"},"Use TLS")," is selected.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Username"),(0,l.kt)("td",{parentName:"tr",align:null},"Username to authenticate with the SMTP server.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Password"),(0,l.kt)("td",{parentName:"tr",align:null},"Password to authenticate with the SMTP server.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Validation:")," Click ",(0,l.kt)("strong",{parentName:"p"},"Test"),". If the test is successful, Rancher prints ",(0,l.kt)("strong",{parentName:"p"},"settings validated")," and you receive a test notification email."),(0,l.kt)("h3",{id:"pagerduty"},"PagerDuty"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Explanation"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Name"),(0,l.kt)("td",{parentName:"tr",align:null},"Enter a ",(0,l.kt)("strong",{parentName:"td"},"Name")," for the notifier.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Default Integration Key"),(0,l.kt)("td",{parentName:"tr",align:null},"From PagerDuty, create a Prometheus integration. For instructions, see the ",(0,l.kt)("a",{parentName:"td",href:"https://www.pagerduty.com/docs/guides/prometheus-integration-guide/"},"PagerDuty Documentation"),". Then enter the integration key.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Service Key"),(0,l.kt)("td",{parentName:"tr",align:null},"The same as the integration key. For instructions on creating a Prometheus integration, see the ",(0,l.kt)("a",{parentName:"td",href:"https://www.pagerduty.com/docs/guides/prometheus-integration-guide/"},"PagerDuty Documentation"),". Then enter the integration key.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Send Resolved Alerts"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"Available as of v2.3.0")," Whether to send a follow-up notification if an alert has been resolved (e.g. ","[Resolved]"," High CPU Usage)")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Validation:")," Click ",(0,l.kt)("strong",{parentName:"p"},"Test"),". If the test is successful, your PagerDuty endpoint outputs ",(0,l.kt)("strong",{parentName:"p"},"PagerDuty setting validated.")),(0,l.kt)("h3",{id:"webhook"},"Webhook"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Explanation"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Name"),(0,l.kt)("td",{parentName:"tr",align:null},"Enter a ",(0,l.kt)("strong",{parentName:"td"},"Name")," for the notifier.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"URL"),(0,l.kt)("td",{parentName:"tr",align:null},"Using the app of your choice, create a webhook URL.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Proxy URL"),(0,l.kt)("td",{parentName:"tr",align:null},"Proxy for the webhook.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Send Resolved Alerts"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"Available as of v2.3.0")," Whether to send a follow-up notification if an alert has been resolved (e.g. ","[Resolved]"," High CPU Usage)")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Validation:")," Click ",(0,l.kt)("strong",{parentName:"p"},"Test"),". If the test is successful, the URL you're configuring as a notifier outputs ",(0,l.kt)("strong",{parentName:"p"},"Webhook setting validated.")),(0,l.kt)("h3",{id:"wechat"},"WeChat"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Available as of v2.2.0")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Explanation"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Name"),(0,l.kt)("td",{parentName:"tr",align:null},"Enter a ",(0,l.kt)("strong",{parentName:"td"},"Name")," for the notifier.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Corporation ID"),(0,l.kt)("td",{parentName:"tr",align:null},'Enter the "EnterpriseID" of your corporation. You can get it fro the ',(0,l.kt)("a",{parentName:"td",href:"https://work.weixin.qq.com/wework_admin/frame#profile"},"Profile page"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Application Agent ID"),(0,l.kt)("td",{parentName:"tr",align:null},"From Enterprise WeChat, create an application in the ",(0,l.kt)("a",{parentName:"td",href:"https://work.weixin.qq.com/wework_admin/frame#apps"},"Application page"),', and then enter the "AgentId" of this application. You will also need to enter the application secret.')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Application Secret"),(0,l.kt)("td",{parentName:"tr",align:null},"The secret that corresponds to the Application Agent ID.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Recipient Type"),(0,l.kt)("td",{parentName:"tr",align:null},"Party, tag, or user.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Default Recipient"),(0,l.kt)("td",{parentName:"tr",align:null},"The default recipient ID should correspond to the recipient type. It should be the party ID, tag ID or user account that you want to receive the notification. You could get contact information from ",(0,l.kt)("a",{parentName:"td",href:"https://work.weixin.qq.com/wework_admin/frame#contacts"},"Contacts page"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Proxy URL"),(0,l.kt)("td",{parentName:"tr",align:null},"If you are using a proxy, enter the proxy URL.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Send Resolved Alerts"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"Available as of v2.3.0")," Whether to send a follow-up notification if an alert has been resolved (e.g. ","[Resolved]"," High CPU Usage)")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Validation:")," Click ",(0,l.kt)("strong",{parentName:"p"},"Test.")," If the test is successful, you should receive an alert message."),(0,l.kt)("h3",{id:"dingtalk"},"DingTalk"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Available as of v2.4.6")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Explanation"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Name"),(0,l.kt)("td",{parentName:"tr",align:null},"Enter a ",(0,l.kt)("strong",{parentName:"td"},"Name")," for the notifier.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Webhook URL"),(0,l.kt)("td",{parentName:"tr",align:null},"Enter the DingTalk webhook URL. For help setting up the webhook, refer to the ",(0,l.kt)("a",{parentName:"td",href:"https://www.alibabacloud.com/help/doc-detail/52872.htm"},"DingTalk documentation."))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Secret"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional: Enter a secret for the DingTalk webhook.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Proxy URL"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional: Enter a proxy for the DingTalk webhook.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Send Resolved Alerts"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to send a follow-up notification if an alert has been resolved (e.g. ","[Resolved]"," High CPU Usage)")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Validation:")," Click ",(0,l.kt)("strong",{parentName:"p"},"Test.")," If the test is successful, the DingTalk notifier output is ",(0,l.kt)("strong",{parentName:"p"},"DingTalk setting validated.")),(0,l.kt)("h3",{id:"microsoft-teams"},"Microsoft Teams"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Available as of v2.4.6")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Explanation"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Name"),(0,l.kt)("td",{parentName:"tr",align:null},"Enter a ",(0,l.kt)("strong",{parentName:"td"},"Name")," for the notifier.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Webhook URL"),(0,l.kt)("td",{parentName:"tr",align:null},"Enter the Microsoft Teams webhook URL. For help setting up the webhook, refer to the ",(0,l.kt)("a",{parentName:"td",href:"https://docs.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/add-incoming-webhook"},"Teams Documentation."))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Proxy URL"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional: Enter a proxy for the Teams webhook.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Send Resolved Alerts"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to send a follow-up notification if an alert has been resolved (e.g. ","[Resolved]"," High CPU Usage)")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Validation:")," Click ",(0,l.kt)("strong",{parentName:"p"},"Test.")," If the test is successful, the Teams notifier output is ",(0,l.kt)("strong",{parentName:"p"},"MicrosoftTeams setting validated.")),(0,l.kt)("h1",{id:"managing-notifiers"},"Managing Notifiers"),(0,l.kt)("p",null,"After you set up notifiers, you can manage them. From the ",(0,l.kt)("strong",{parentName:"p"},"Global")," view, open the cluster that you want to manage your notifiers. Select ",(0,l.kt)("strong",{parentName:"p"},"Tools > Notifiers"),". You can:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Edit")," their settings that you configured during their initial setup."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Clone")," them, to quickly setup slightly different notifiers."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Delete")," them when they're no longer necessary.")),(0,l.kt)("h1",{id:"example-payload-for-a-webhook-alert-notifier"},"Example Payload for a Webhook Alert Notifier"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "receiver": "c-2a3bc:kube-components-alert",\n  "status": "firing",\n  "alerts": [\n    {\n      "status": "firing",\n      "labels": {\n        "alert_name": "Scheduler is unavailable",\n        "alert_type": "systemService",\n        "cluster_name": "mycluster (ID: c-2a3bc)",\n        "component_name": "scheduler",\n        "group_id": "c-2a3bc:kube-components-alert",\n        "logs": "Get http://127.0.0.1:10251/healthz: dial tcp 127.0.0.1:10251: connect: connection refused",\n        "rule_id": "c-2a3bc:kube-components-alert_scheduler-system-service",\n        "severity": "critical"\n      },\n      "annotations": {},\n      "startsAt": "2020-01-30T19:18:13.321684733Z",\n      "endsAt": "0001-01-01T00:00:00Z",\n      "generatorURL": ""\n    }\n  ],\n  "groupLabels": {\n    "component_name": "scheduler",\n    "rule_id": "c-2a3bc:kube-components-alert_scheduler-system-service"\n  },\n  "commonLabels": {\n    "alert_name": "Scheduler is unavailable",\n    "alert_type": "systemService",\n    "cluster_name": "mycluster (ID: c-2a3bc)"\n  }\n}\n')),(0,l.kt)("h1",{id:"whats-next"},"What's Next?"),(0,l.kt)("p",null,"After creating a notifier, set up alerts to receive notifications of Rancher system events."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles#cluster-roles"},"Cluster owners")," can set up alerts at the ",(0,l.kt)("a",{parentName:"li",href:"/v2.0-v2.4/pages-for-subheaders/cluster-alerts"},"cluster level"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles#project-roles"},"Project owners")," can set up alerts at the ",(0,l.kt)("a",{parentName:"li",href:"/v2.0-v2.4/reference-guides/rancher-project-tools/project-alerts"},"project level"),".")))}c.isMDXComponent=!0}}]);