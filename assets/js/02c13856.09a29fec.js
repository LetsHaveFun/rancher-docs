"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[86717],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,m=p["".concat(l,".").concat(d)]||p[d]||h[d]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},45348:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return h}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={title:"Configuring Shibboleth (SAML)",weight:1210},l=void 0,u={unversionedId:"pages-for-subheaders/configure-shibboleth-saml",id:"pages-for-subheaders/configure-shibboleth-saml",title:"Configuring Shibboleth (SAML)",description:"If your organization uses Shibboleth Identity Provider (IdP) for user authentication, you can configure Rancher to allow your users to log in to Rancher using their Shibboleth credentials.",source:"@site/docs/pages-for-subheaders/configure-shibboleth-saml.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/configure-shibboleth-saml",permalink:"/pages-for-subheaders/configure-shibboleth-saml",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/pages-for-subheaders/configure-shibboleth-saml.md",tags:[],version:"current",lastUpdatedAt:1663024307,formattedLastUpdatedAt:"9/12/2022",frontMatter:{title:"Configuring Shibboleth (SAML)",weight:1210},sidebar:"tutorialSidebar",previous:{title:"2. Configuring Rancher for Microsoft AD FS",permalink:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-microsoft-ad-federation-service-saml/configure-rancher-for-ms-adfs"},next:{title:"Group Permissions with Shibboleth and OpenLDAP",permalink:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-shibboleth-saml/about-group-permissions"}},c={},h=[{value:"Shibboleth Prerequisites",id:"shibboleth-prerequisites",level:3},{value:"Configure Shibboleth in Rancher",id:"configure-shibboleth-in-rancher",level:3},{value:"SAML Provider Caveats",id:"saml-provider-caveats",level:3},{value:"OpenLDAP Prerequisites",id:"openldap-prerequisites",level:3},{value:"Configure OpenLDAP in Rancher",id:"configure-openldap-in-rancher",level:3}],p={toc:h};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If your organization uses Shibboleth Identity Provider (IdP) for user authentication, you can configure Rancher to allow your users to log in to Rancher using their Shibboleth credentials."),(0,o.kt)("p",null,"In this configuration, when Rancher users log in, they will be redirected to the Shibboleth IdP to enter their credentials. After authentication, they will be redirected back to the Rancher UI."),(0,o.kt)("p",null,"If you also configure OpenLDAP as the back end to Shibboleth, it will return a SAML assertion to Rancher with user attributes that include groups. Then the authenticated user will be able to access resources in Rancher that their groups have permissions for."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The instructions in this section assume that you understand how Rancher, Shibboleth, and OpenLDAP work together. For a more detailed explanation of how it works, refer to ",(0,o.kt)("a",{parentName:"p",href:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-shibboleth-saml/about-group-permissions"},"this page."))),(0,o.kt)("h1",{id:"setting-up-shibboleth-in-rancher"},"Setting up Shibboleth in Rancher"),(0,o.kt)("h3",{id:"shibboleth-prerequisites"},"Shibboleth Prerequisites"),(0,o.kt)("blockquote",null,(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"You must have a Shibboleth IdP Server configured."),(0,o.kt)("li",{parentName:"ul"},"Following are the Rancher Service Provider URLs needed for configuration:\nMetadata URL: ",(0,o.kt)("inlineCode",{parentName:"li"},"https://<rancher-server>/v1-saml/shibboleth/saml/metadata"),"\nAssertion Consumer Service (ACS) URL: ",(0,o.kt)("inlineCode",{parentName:"li"},"https://<rancher-server>/v1-saml/shibboleth/saml/acs")),(0,o.kt)("li",{parentName:"ul"},"Export a ",(0,o.kt)("inlineCode",{parentName:"li"},"metadata.xml")," file from your IdP Server. For more information, see the ",(0,o.kt)("a",{parentName:"li",href:"https://wiki.shibboleth.net/confluence/display/SP3/Home"},"Shibboleth documentation.")))),(0,o.kt)("h3",{id:"configure-shibboleth-in-rancher"},"Configure Shibboleth in Rancher"),(0,o.kt)("p",null,"If your organization uses Shibboleth for user authentication, you can configure Rancher to allow your users to log in using their IdP credentials."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the top left corner, click ",(0,o.kt)("strong",{parentName:"p"},"\u2630 > Users & Authentication"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the left navigation menu, click ",(0,o.kt)("strong",{parentName:"p"},"Auth Provider"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Shibboleth"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Complete the ",(0,o.kt)("strong",{parentName:"p"},"Configure Shibboleth Account")," form. Shibboleth IdP lets you specify what data store you want to use. You can either add a database or use an existing ldap server. For example, if you select your Active Directory (AD) server, the examples below describe how you can map AD attributes to fields within Rancher."),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Display Name Field"),": Enter the AD attribute that contains the display name of users (example: ",(0,o.kt)("inlineCode",{parentName:"p"},"displayName"),").")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"User Name Field"),": Enter the AD attribute that contains the user name/given name (example: ",(0,o.kt)("inlineCode",{parentName:"p"},"givenName"),").")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"UID Field"),": Enter an AD attribute that is unique to every user (example: ",(0,o.kt)("inlineCode",{parentName:"p"},"sAMAccountName"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"distinguishedName"),").")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Groups Field"),": Make entries for managing group memberships (example: ",(0,o.kt)("inlineCode",{parentName:"p"},"memberOf"),").")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Rancher API Host"),": Enter the URL for your Rancher Server.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Private Key")," and ",(0,o.kt)("strong",{parentName:"p"},"Certificate"),": This is a key-certificate pair to create a secure shell between Rancher and your IdP."),(0,o.kt)("p",{parentName:"li"},"You can generate one using an openssl command. For example:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'openssl req -x509 -newkey rsa:2048 -keyout myservice.key -out myservice.cert -days 365 -nodes -subj "/CN=myservice.example.com"\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"IDP-metadata"),": The ",(0,o.kt)("inlineCode",{parentName:"p"},"metadata.xml")," file that you exported from your IdP server."))))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"After you complete the ",(0,o.kt)("strong",{parentName:"p"},"Configure Shibboleth Account")," form, click ",(0,o.kt)("strong",{parentName:"p"},"Enable"),"."),(0,o.kt)("p",{parentName:"li"},"Rancher redirects you to the IdP login page. Enter credentials that authenticate with Shibboleth IdP to validate your Rancher Shibboleth configuration."),(0,o.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You may have to disable your popup blocker to see the IdP login page."))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," Rancher is configured to work with Shibboleth. Your users can now sign into Rancher using their Shibboleth logins."),(0,o.kt)("h3",{id:"saml-provider-caveats"},"SAML Provider Caveats"),(0,o.kt)("p",null,"If you configure Shibboleth without OpenLDAP, the following caveats apply due to the fact that SAML Protocol does not support search or lookup for users or groups."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"There is no validation on users or groups when assigning permissions to them in Rancher."),(0,o.kt)("li",{parentName:"ul"},"When adding users, the exact user IDs (i.e. UID Field) must be entered correctly. As you type the user ID, there will be no search for other user IDs that may match."),(0,o.kt)("li",{parentName:"ul"},"When adding groups, you must select the group from the drop-down that is next to the text box. Rancher assumes that any input from the text box is a user."),(0,o.kt)("li",{parentName:"ul"},"The group drop-down shows only the groups that you are a member of. You will not be able to add groups that you are not a member of.")),(0,o.kt)("p",null,"To enable searching for groups when assigning permissions in Rancher, you will need to configure a back end for the SAML provider that supports groups, such as OpenLDAP."),(0,o.kt)("h1",{id:"setting-up-openldap-in-rancher"},"Setting up OpenLDAP in Rancher"),(0,o.kt)("p",null,"If you also configure OpenLDAP as the back end to Shibboleth, it will return a SAML assertion to Rancher with user attributes that include groups. Then authenticated users will be able to access resources in Rancher that their groups have permissions for."),(0,o.kt)("h3",{id:"openldap-prerequisites"},"OpenLDAP Prerequisites"),(0,o.kt)("p",null,"Rancher must be configured with a LDAP bind account (aka service account) to search and retrieve LDAP entries pertaining to users and groups that should have access. It is recommended to not use an administrator account or personal account for this purpose and instead create a dedicated account in OpenLDAP with read-only access to users and groups under the configured search base (see below)."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Using TLS?")),(0,o.kt)("p",{parentName:"blockquote"},"If the certificate used by the OpenLDAP server is self-signed or not from a recognized certificate authority, make sure have at hand the CA certificate (concatenated with any intermediate certificates) in PEM format. You will have to paste in this certificate during the configuration so that Rancher is able to validate the certificate chain.")),(0,o.kt)("h3",{id:"configure-openldap-in-rancher"},"Configure OpenLDAP in Rancher"),(0,o.kt)("p",null,"Configure the settings for the OpenLDAP server, groups and users. For help filling out each field, refer to the ",(0,o.kt)("a",{parentName:"p",href:"/reference-guides/configure-openldap/openldap-config-reference"},"configuration reference.")," Note that nested group membership is not available for Shibboleth."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Before you proceed with the configuration, please familiarise yourself with the concepts of ",(0,o.kt)("a",{parentName:"p",href:"/pages-for-subheaders/about-authentication#external-authentication-configuration-and-principal-users"},"External Authentication Configuration and Principal Users"),".")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Log into the Rancher UI using the initial local ",(0,o.kt)("inlineCode",{parentName:"li"},"admin")," account."),(0,o.kt)("li",{parentName:"ol"},"In the top left corner, click ",(0,o.kt)("strong",{parentName:"li"},"\u2630 > Users & Authentication"),"."),(0,o.kt)("li",{parentName:"ol"},"In the left navigation menu, click ",(0,o.kt)("strong",{parentName:"li"},"Auth Provider"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"OpenLDAP"),". The ",(0,o.kt)("strong",{parentName:"li"},"Configure an OpenLDAP server")," form will be displayed.")),(0,o.kt)("h1",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("p",null,"If you are experiencing issues while testing the connection to the OpenLDAP server, first double-check the credentials entered for the service account as well as the search base configuration. You may also inspect the Rancher logs to help pinpointing the problem cause. Debug logs may contain more detailed information about the error. Please refer to ",(0,o.kt)("a",{parentName:"p",href:"/faq/technical-items#how-can-i-enable-debug-logging"},"How can I enable debug logging")," in this documentation."))}d.isMDXComponent=!0}}]);