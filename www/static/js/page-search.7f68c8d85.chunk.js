(this.csbJsonP=this.csbJsonP||[]).push([["page-search"],{"../common/lib/components/ContributorsBadge/index.js":function(e,n,t){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});const a=o(t("../../node_modules/react/index.js")),i=o(t("../../node_modules/react-icons/lib/IconBase.js")),r=o(t("../common/lib/components/Tooltip/index.js")),l=t("../common/lib/components/ContributorsBadge/is-contributor.js");class s extends a.default.Component{constructor(){super(...arguments),this.state={isContributor:!1}}updateContributorStatus(e=this.props){(0,l.isContributor)(e.username).then(e=>{this.setState({isContributor:e})})}componentDidMount(){this.updateContributorStatus()}UNSAFE_componentWillReceiveProps(e){this.updateContributorStatus(e)}render(){const{className:e,username:n}=this.props;return!!this.state.isContributor&&a.default.createElement("a",{target:"_blank",rel:"noreferrer noopener",onClick:e=>e.stopPropagation(),href:"https://github.com/codesandbox/codesandbox-client/commits?author="+n},a.default.createElement(r.default,{style:{display:"flex"},content:"Open Source Contributor to CodeSandbox"},a.default.createElement(i.default,{className:e,width:"1em",height:"0.67em",viewBox:"0 0 284 192",fill:"none"},a.default.createElement("path",{d:"M276 30.9916C229.5 58.0917 180.5 77.5917 130 79.5917C59.1265 79.5917 0 61.5917 0 34.0917C0 15.5917 41 -0.408325 114.803 2.99163C185.677 2.99163 314.5 -13.5084 276 30.9916Z",transform:"translate(0 112.408)",fill:"#C5A56B"}),a.default.createElement("path",{d:"M270.493 40.3281C255 56.5 184.008 89 125.796 89C55.5 89 2.78651e-06 72.0001 0 44.0001C-1.84109e-06 25.5001 72.3769 0 137.189 0C202.002 0 284.165 22.25 270.493 40.3281Z",transform:"translate(0 99.9999)",fill:"#EAC17A"}),a.default.createElement("path",{d:"M256.656 123.303C256.656 143.23 211.803 163.158 127.082 164.404C48.5987 165.557 0 143.23 0 123.303C0 64.8345 43.6066 0 133.311 0C223.016 0 256.656 64.8345 256.656 123.303Z",transform:"translate(26.3443 2.85638)",fill:"#E1BD7B"}),a.default.createElement("path",{d:"M166.951 122.057C100.918 140.739 25.3333 134.097 0 127.039C89.7049 119.566 115.356 113.806 153.246 93.4111C201.836 67.256 181.902 24.9096 166.951 0C186.885 18.6822 204.328 43.5918 204.328 95.9021C203.082 102.129 194.361 114.302 166.951 122.057Z",transform:"translate(78.6721 32.7479)",fill:"#CFAE72"}),a.default.createElement("path",{d:"M30.5 175.564C11.5 169.564 3.50001 163.464 0 159.564C-2.68221e-06 158.351 0 158.064 0 157.351C14.9649 150.535 24.6407 147.961 34.7869 144.58C50.9836 12.5587 118.262 5.0858 138.197 1.34936C152.558 -1.34245 178.066 0.420214 190.525 2.91111V5.30307C183.049 6.54874 166.852 10.0704 153.148 15.2671C95.3377 37.1876 72.5793 119.156 69.6721 157.351C54.7213 165.239 37.5 173.564 30.5 175.564Z",transform:"translate(9 2.43616)",fill:"#AD915F"}),a.default.createElement("path",{d:"M14.2869 164.285C-4.40165 159.303 7.47541 161.512 0 155.285C13.7049 149.057 2.32624 148.394 14.2869 144.409C30.4836 12.3875 97.7623 4.91469 117.697 1.17824C133.644 -1.81091 158.811 1.39569 170.025 5.13196C162.549 6.37762 146.352 9.89933 132.648 15.096C74.8377 37.0165 51.1656 110.998 47.4279 158.326C32.477 166.214 21.7623 163.039 14.2869 164.285Z",transform:"translate(29.5 0.21521)",fill:"#CFAE72"}),a.default.createElement("path",{d:"M67.9279 13.7003C52.977 10.7111 39.3552 3.32128 34.7869 0C28.5574 1.24548 6.22951 11.2222 0 14.9587C7 23.1587 24.5 30.1587 30.5 31.6587C38 29.1587 53.1432 21.1732 67.9279 13.7003Z",transform:"translate(9.00001 144.841)",fill:"#E1BD7B"}),a.default.createElement("path",{d:"M0 3.73644C22.9246 3.73644 43.6066 1.24548 51.082 0C51.082 0.2764 52.3279 0.949887 52.3279 1.24548C52.3279 9.8297 51.082 25.7564 51.082 28.6461C40.3189 30.6023 14.0129 33.1877 1.2459 33.628C1.00761 33.6362 0.228282 32.3749 0 32.3825V3.73644Z",transform:"translate(154.672 134.877)",fill:"#AD915F"}),a.default.createElement("path",{d:"M51.082 28.6461C40.118 30.6388 12.459 31.9674 0 32.3825V3.73644C22.9246 3.73644 43.6066 1.24548 51.082 0V28.6461Z",transform:"translate(155.918 136.123)",fill:"#C5A56B"}),a.default.createElement("path",{d:"M2.49181 7.47289C10.4656 6.4765 19.1038 2.0758 22.4262 0L23.2984 0.373644L24.1705 0.747289C25.9146 7.88228 27.4098 21.2484 27.4098 24.9096C18.1916 31.3602 8.08792 37.0438 2.4918 38.6099L0 37.7381C0.415301 29.0197 1.49509 10.462 2.49181 7.47289Z",transform:"translate(245 117.4)",fill:"#AD915F"}),a.default.createElement("path",{d:"M27.4098 25.4077C17.4426 32.3824 4.98361 36.617 0 37.8625C0.415301 29.1441 1.49508 10.9601 2.4918 7.97096C10.4656 6.97457 18.3563 2.0758 21.6787 0C23.3399 6.64257 27.4098 21.4222 27.4098 25.4077Z",transform:"translate(247.492 118.148)",fill:"#C5A56B"}),a.default.createElement("path",{d:"M0.2748 36.6952C-1.46234 18.9764 5.45728 6.8743 9.22109 3.25526C30.7616 -3.34589 59.5983 1.51809 71.2371 5.3398C70.8897 5.42666 66.2863 6.29523 51.3468 9.76952C24.4211 16.2838 8.35253 28.8781 0.2748 36.6952Z",transform:"translate(128.293)",fill:"#E1BD7B"}),a.default.createElement("path",{d:"M38.2685 0C19.5942 10.4229 9.98857 14.5613 0 18.9042C6 20.4042 11 21.4042 15.2086 22.2042C20.42 19.5985 39.5713 9.9451 54.337 2.56224C49.9943 1.91083 49.9942 1.91081 38.2692 0.000126629L38.2685 0Z",transform:"translate(48 161.596)",fill:"#FCF7DE"}),a.default.createElement("path",{d:"M59.1142 3.12681L19 22.9042C22.5 23.4042 22.5 23.4042 26.5 24.0042C33.4486 20.0956 50.5732 11.4651 64.7599 3.64796C59.1142 3.12681 64.7599 3.5611 59.1142 3.12681Z",transform:"translate(48 161.596)",fill:"#FCF7DE"}),a.default.createElement("path",{d:"M5.71143 19.8105C15.2114 16.3105 24.2114 10.8105 41.6486 1.73714L36.4371 0C23.9297 6.60114 11.7257 13.6648 0 17.5733L5.71143 19.8105Z",transform:"translate(30.2886 155.69)",fill:"#FCF7DE"}))))}}n.default=s},"../common/lib/components/ContributorsBadge/is-contributor.js":function(e,n,t){"use strict";var o=this&&this.__awaiter||function(e,n,t,o){return new(t||(t=Promise))((function(a,i){function r(e){try{s(o.next(e))}catch(e){i(e)}}function l(e){try{s(o.throw(e))}catch(e){i(e)}}function s(e){var n;e.done?a(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(r,l)}s((o=o.apply(e,n||[])).next())}))};let a,i;Object.defineProperty(n,"__esModule",{value:!0}),n.isContributor=void 0,n.isContributor=function(e){return o(this,void 0,void 0,(function*(){return a||(yield i||(i=window.fetch("https://raw.githubusercontent.com/codesandbox/codesandbox-client/master/.all-contributorsrc").then(e=>e.json()).then(e=>e.contributors.map(e=>e.login)).then(e=>{a=e}).catch(()=>{}))),a&&a.indexOf(e)>-1}))}},"../common/lib/components/PatronStar/elements.js":function(e,n,t){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.Container=void 0;const a=o(t("../../node_modules/styled-components/dist/styled-components.browser.esm.js"));n.Container=a.default.div`
  margin-left: 0.25rem;
  color: ${e=>e.theme.primary()};
`},"../common/lib/components/PatronStar/index.js":function(e,n,t){"use strict";var o=this&&this.__rest||function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)n.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(t[o[a]]=e[o[a]])}return t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.PatronStar=void 0;const i=t("../../node_modules/date-fns/esm/index.js"),r=a(t("../../node_modules/react/index.js")),l=a(t("../../node_modules/react-icons/lib/go/star.js")),s=a(t("../common/lib/components/Tooltip/index.js")),c=t("../common/lib/components/PatronStar/elements.js");n.PatronStar=e=>{var{subscriptionSince:n}=e,t=o(e,["subscriptionSince"]);return r.default.createElement(s.default,{content:"Patron since "+(0,i.format)(new Date(n),"MMM yyyy")},r.default.createElement(c.Container,null,r.default.createElement(l.default,Object.assign({},t))))}},"../common/lib/components/SandboxCard/elements.js":function(e,n,t){"use strict";var o=this&&this.__createBinding||(Object.create?function(e,n,t,o){void 0===o&&(o=t);var a=Object.getOwnPropertyDescriptor(n,t);a&&!("get"in a?!n.__esModule:a.writable||a.configurable)||(a={enumerable:!0,get:function(){return n[t]}}),Object.defineProperty(e,o,a)}:function(e,n,t,o){void 0===o&&(o=t),e[o]=n[t]}),a=this&&this.__setModuleDefault||(Object.create?function(e,n){Object.defineProperty(e,"default",{enumerable:!0,value:n})}:function(e,n){e.default=n}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&o(n,e,t);return a(n,e),n};Object.defineProperty(n,"__esModule",{value:!0}),n.Image=n.SandboxStats=n.Avatar=n.Stats=n.Author=n.TemplateIcon=n.SandboxInfo=n.SandboxImage=n.SandboxDescription=n.SandboxTitle=n.Container=n.Overlay=n.BG_HOVER=n.BG_COLOR=void 0;const r=i(t("../../node_modules/styled-components/dist/styled-components.browser.esm.js")),l=t("../common/lib/components/UserWithAvatar/index.js");n.BG_COLOR="#1C2022",n.BG_HOVER="#212629",n.Overlay=r.default.div`
  position: absolute;
  background: rgba(28, 32, 34, 0.9);
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100% - 3px);
  padding: 1rem;
  box-sizing: border-box;
  opacity: 0;
  transition: opacity 200ms ease;
`,n.Container=r.default.div`
  transition: 0.3s ease all;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  position: relative;
  flex: 1;
  min-width: 300px;

  flex-grow: 1;
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;

  margin-right: 0.5rem;
  margin-left: 0.5rem;

  background-color: ${n.BG_COLOR};
  box-shadow: 0 0 0 rgba(0, 0, 0, 0.3);

  ${e=>e.small&&r.css`
      min-width: auto;
    `};

  ${e=>e.noMargin&&r.css`
      margin: 0;
    `};

  &:hover {
    ${n.Overlay} {
      opacity: 1;
    }
  }

  &:hover {
    background-color: ${n.BG_HOVER};
    transform: translateY(-5px);
    box-shadow: 0 8px 4px rgba(0, 0, 0, 0.3);
  }

  &:last-child {
    flex-grow: 0;
    min-width: calc(33% - 1rem);
  }
`,n.SandboxTitle=r.default.h2`
  color: ${e=>e.color};
  font-family: 'Poppins', sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  margin-bottom: 6px;
  margin-top: 0;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  max-height: 20px;

  word-break: break-all;
`,n.SandboxDescription=r.default.p`
  font-size: 0.8rem;
  color: ${e=>e.theme.lightText};
  font-weight: 500;
  line-height: 1.3;
  margin: 0;
  margin-bottom: 16px;
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
  max-height: 100%;

  word-break: break-all;
`,n.SandboxImage=r.default.img`
  display: block;
  margin-bottom: 0;
  z-index: 0;
  border-bottom: 3px solid ${e=>e.color};
  height: auto;
  width: 100%;
  background-color: ${n.BG_HOVER};
  border-image-width: 0;
`,n.SandboxInfo=r.default.div`
  left: -1px;
  right: -1px;
  padding: 0.75rem;
  padding-bottom: 4px;
  z-index: 1;
  display: flex;
  justify-content: space-between;
`,n.TemplateIcon=r.default.div`
  display: flex;
`,n.Author=(0,r.default)(l.UserWithAvatar)`
  font-size: 0.75rem;
  font-weight: 600;
  text-decoration: none;
  color: #777788;
`,n.Stats=r.default.ul`
  list-style: none;
  padding: 0;
  display: flex;
  font-family: 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;

  color: ${e=>e.theme.placeholder};

  li:not(:last-child) {
    margin-right: 8px;
  }

  li {
    display: flex;
    align-items: center;

    svg {
      margin-right: 6px;
      width: 16px;
      color: ${e=>e.theme.placeholder.darken(.3)};
    }
  }
`,n.Avatar=r.default.img`
  width: 1rem;
  height: 1rem;
  border-radius: 4px;
`,n.SandboxStats=r.default.div`
  display: flex;
  padding: 0.75rem;
  justify-content: space-between;
`,n.Image=r.default.div`
  position: relative;
  font-size: 10px;
`},"../common/lib/components/SandboxCard/index.js":function(e,n,t){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});const a=o(t("../../node_modules/react/index.js")),i=o(t("../../node_modules/react-icons/lib/go/repo-forked.js")),r=o(t("../../node_modules/react-icons/lib/go/eye.js")),l=o(t("../../node_modules/react-icons/lib/go/heart.js")),s=o(t("../common/lib/templates/icons.js")),c=o(t("../common/lib/templates/index.js")),d=t("../common/lib/utils/url-generator.js"),u=t("../common/lib/utils/keycodes.js"),m=t("../common/lib/components/SandboxCard/elements.js"),f=o(t("../common/lib/components/Tags/index.js")),p=e=>e>999999?(e/1e6).toFixed(1)+"M":e>999?(e/1e3).toFixed(1)+"K":e;class b extends a.default.PureComponent{constructor(){super(...arguments),this.toggleOpen=()=>{this.props.selectSandbox(Object.assign({},this.props.sandbox))},this.handleKeyUp=e=>{e.keyCode===u.ENTER&&this.toggleOpen()}}render(){const{sandbox:e,small:n,noMargin:t,noHeight:o,defaultHeight:u=152}=this.props;if(!e)return a.default.createElement(m.Container,{style:{}},a.default.createElement(m.SandboxImage,{as:"div",style:{border:0,height:150}}),a.default.createElement(m.SandboxInfo,null));const b=(0,c.default)(e.template),g=(0,s.default)(e.template);return a.default.createElement(m.Container,{noMargin:t,small:n,style:{},onClick:this.toggleOpen,role:"button",tabIndex:0,onKeyUp:this.handleKeyUp},a.default.createElement(m.Image,null,a.default.createElement(m.SandboxImage,{alt:e.title,src:e.screenshot_url||(h=e.id,`https://codesandbox.io/api/v1/sandboxes/${h}/screenshot.png`),color:b.color(),style:{height:u}}),a.default.createElement(m.Overlay,null,a.default.createElement(m.SandboxDescription,null,e.description),e.tags&&a.default.createElement(f.default,{tags:e.tags}))),a.default.createElement(m.SandboxInfo,{noHeight:o},a.default.createElement(m.SandboxTitle,{color:b.color()},e.title),a.default.createElement(m.TemplateIcon,null,a.default.createElement(g,{width:16,height:16}))),a.default.createElement(m.SandboxStats,null,a.default.createElement(m.Stats,null,a.default.createElement("li",null,a.default.createElement(r.default,null),p(e.view_count)),a.default.createElement("li",null,a.default.createElement(i.default,null),p(e.fork_count)),a.default.createElement("li",null,a.default.createElement(l.default,null),p(e.like_count))),e.author&&a.default.createElement("a",{href:(0,d.profileUrl)(e.author.username)},a.default.createElement(m.Avatar,{src:e.author.avatar_url}))));var h}}n.default=b},"../common/lib/components/Tags/Tag.js":function(e,n,t){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});const a=o(t("../../node_modules/react/index.js")),i=t("../common/lib/components/Tags/elements.js");n.default=function({tag:e,removeTag:n}){return a.default.createElement(i.Container,{canRemove:Boolean(n)},e,n&&a.default.createElement(i.DeleteIcon,{onClick:()=>{n({tag:e})}}))}},"../common/lib/components/Tags/elements.js":function(e,n,t){"use strict";var o=this&&this.__createBinding||(Object.create?function(e,n,t,o){void 0===o&&(o=t);var a=Object.getOwnPropertyDescriptor(n,t);a&&!("get"in a?!n.__esModule:a.writable||a.configurable)||(a={enumerable:!0,get:function(){return n[t]}}),Object.defineProperty(e,o,a)}:function(e,n,t,o){void 0===o&&(o=t),e[o]=n[t]}),a=this&&this.__setModuleDefault||(Object.create?function(e,n){Object.defineProperty(e,"default",{enumerable:!0,value:n})}:function(e,n){e.default=n}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&o(n,e,t);return a(n,e),n},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.DeleteIcon=n.Container=n.TagContainer=void 0;const l=i(t("../../node_modules/styled-components/dist/styled-components.browser.esm.js")),s=r(t("../../node_modules/react-icons/lib/md/clear.js"));n.TagContainer=l.default.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: -0.2rem;
  margin-right: -0.2rem;
  ${e=>"right"===e.align&&"justify-content: flex-end;"};
`,n.Container=l.default.span`
  position: relative;
  color: white;
  background-color: ${e=>e.theme.secondary};
  padding: 0.3em 0.5em;
  border-radius: 4px;
  font-weight: 500;

  ${e=>e.canRemove&&l.css`
      padding-right: 1.5rem;
    `};
`,n.DeleteIcon=(0,l.default)(s.default)`
  transition: 0.3s ease all;
  position: absolute;
  right: 0.3rem;
  top: 0;
  bottom: 0;

  margin: auto;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.5);

  &:hover {
    color: white;
  }
`},"../common/lib/components/Tags/index.js":function(e,n,t){"use strict";var o=this&&this.__rest||function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)n.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(t[o[a]]=e[o[a]])}return t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});const i=a(t("../../node_modules/react/index.js")),r=a(t("../common/lib/components/spacing/Margin.js")),l=t("../common/lib/components/Tags/elements.js"),s=a(t("../common/lib/components/Tags/Tag.js"));n.default=function(e){var{tags:n,align:t}=e,a=o(e,["tags","align"]);return i.default.createElement(l.TagContainer,Object.assign({align:t||"left"},a),n.slice().sort().map(e=>i.default.createElement(r.default,{key:e,vertical:.5,horizontal:.2},i.default.createElement(s.default,{tag:e}))))}},"../common/lib/components/UserWithAvatar/elements.js":function(e,n,t){"use strict";var o=this&&this.__createBinding||(Object.create?function(e,n,t,o){void 0===o&&(o=t);var a=Object.getOwnPropertyDescriptor(n,t);a&&!("get"in a?!n.__esModule:a.writable||a.configurable)||(a={enumerable:!0,get:function(){return n[t]}}),Object.defineProperty(e,o,a)}:function(e,n,t,o){void 0===o&&(o=t),e[o]=n[t]}),a=this&&this.__setModuleDefault||(Object.create?function(e,n){Object.defineProperty(e,"default",{enumerable:!0,value:n})}:function(e,n){e.default=n}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&o(n,e,t);return a(n,e),n},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.ContributorsBadge=n.Image=n.Username=n.Names=n.AuthorName=n.CenteredText=void 0;const l=i(t("../../node_modules/styled-components/dist/styled-components.browser.esm.js")),s=r(t("../common/lib/components/ContributorsBadge/index.js"));n.CenteredText=l.default.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`,n.AuthorName=l.default.span`
  display: inline-flex;
  align-items: center;
  margin: 0 0.75em;

  ${e=>e.useBigName&&l.css`
      margin: 0 0.75em;
      font-size: 1rem;
    `};
`,n.Names=l.default.div`
  display: inline-flex;

  flex-direction: column;
`,n.Username=l.default.div`
  ${e=>e.hasTwoNames&&l.css`
      opacity: 0.7;
      font-size: 0.75em;
    `};
`,n.Image=l.default.img`
  width: 1.75em;
  height: 1.75em;
  border-radius: 2px;
  border: 2px solid rgba(255, 255, 255, 0.5);
`,n.ContributorsBadge=(0,l.default)(s.default)`
  margin: 0 0.5rem;
  font-size: 1.25em;
`},"../common/lib/components/UserWithAvatar/index.js":function(e,n,t){"use strict";var o=this&&this.__rest||function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)n.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(t[o[a]]=e[o[a]])}return t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.UserWithAvatar=void 0;const i=a(t("../../node_modules/react/index.js")),r=t("../common/lib/components/PatronStar/index.js"),l=t("../common/lib/components/UserWithAvatar/elements.js");n.UserWithAvatar=e=>{var{avatarUrl:n,username:t,name:a,hideBadge:s,subscriptionSince:c,useBigName:d}=e,u=o(e,["avatarUrl","username","name","hideBadge","subscriptionSince","useBigName"]);return i.default.createElement(l.CenteredText,Object.assign({},u),n&&i.default.createElement(l.Image,{src:n,alt:t}),i.default.createElement(l.AuthorName,{useBigName:d},i.default.createElement(l.Names,null,a&&i.default.createElement("div",null,a),t&&i.default.createElement(l.Username,{hasTwoNames:Boolean(a&&t)},t)),c&&i.default.createElement(r.PatronStar,{style:{fontSize:"1.125em",marginBottom:"0.1em"},subscriptionSince:c}),!s&&i.default.createElement(l.ContributorsBadge,{username:t})))}},"../common/lib/components/flex/MaxWidth.js":function(e,n,t){"use strict";var o=this&&this.__createBinding||(Object.create?function(e,n,t,o){void 0===o&&(o=t);var a=Object.getOwnPropertyDescriptor(n,t);a&&!("get"in a?!n.__esModule:a.writable||a.configurable)||(a={enumerable:!0,get:function(){return n[t]}}),Object.defineProperty(e,o,a)}:function(e,n,t,o){void 0===o&&(o=t),e[o]=n[t]}),a=this&&this.__setModuleDefault||(Object.create?function(e,n){Object.defineProperty(e,"default",{enumerable:!0,value:n})}:function(e,n){e.default=n}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&o(n,e,t);return a(n,e),n},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});const l=r(t("../../node_modules/react/index.js")),s=i(t("../../node_modules/styled-components/dist/styled-components.browser.esm.js")),c=s.default.div`
  box-sizing: border-box;
  display: flex;

  padding: 0 2rem;

  width: 100%;
  justify-content: center;

  ${e=>e.responsive&&s.css`
      @media (max-width: 768px) {
        padding: 0;
      }
    `};
`,d=s.default.div`
  width: 100%;
  max-width: ${e=>e.width}px;
`;n.default=({children:e,width:n=1280,className:t,responsive:o=!1})=>l.default.createElement(c,{responsive:o},l.default.createElement(d,{className:t,width:n},e))},"../common/lib/components/flex/Row.js":function(e,n,t){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});const a=o(t("../../node_modules/styled-components/dist/styled-components.browser.esm.js"));n.default=a.default.div`
  display: flex;
  flex-direction: row;

  justify-content: ${e=>e.justifyContent||"flex-start"};
  align-items: ${e=>e.alignItems||"center"};
`},"../common/lib/components/spacing/Margin.js":function(e,n,t){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.Margin=void 0;const a=o(t("../../node_modules/styled-components/dist/styled-components.browser.esm.js")),i=o(t("../common/lib/components/spacing/get-spacing.js"));n.Margin=a.default.div`
  margin: ${i.default};
  box-sizing: border-box;
`,n.default=n.Margin},"../common/lib/components/spacing/get-spacing.js":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function({margin:e,top:n,right:t,left:o,bottom:a,horizontal:i,vertical:r}){return`${[n,r,e].find(e=>null!=e)||0}rem ${[t,i,e].find(e=>null!=e)||0}rem ${[a,r,e].find(e=>null!=e)||0}rem ${[o,i,e].find(e=>null!=e)||0}rem`}},"../common/lib/utils/config.js":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.STRIPE_API_KEY=n.ALGOLIA_DEFAULT_INDEX=n.ALGOLIA_APPLICATION_ID=n.ALGOLIA_API_KEY=void 0,n.ALGOLIA_API_KEY="85194a1433e4196466a0f80135439c79",n.ALGOLIA_APPLICATION_ID="5O7BRBEIVD",n.ALGOLIA_DEFAULT_INDEX="prod_sandboxes",n.STRIPE_API_KEY="pk_live_KeUgofl1VrjTtbrhhN7gGI9W"},"./src/app/pages/Search/index.tsx":function(e,n,t){"use strict";t.r(n),t.d(n,"Search",(function(){return we}));var o=t("../../node_modules/@babel/runtime/helpers/slicedToArray.js"),a=t.n(o),i=t("../common/lib/utils/config.js"),r=t("../common/lib/components/flex/MaxWidth.js"),l=t.n(r),s=t("../common/lib/components/spacing/Margin.js"),c=t.n(s),d=t("../../node_modules/qs/lib/index.js"),u=t.n(d),m=t("../../node_modules/react/index.js"),f=t.n(m),p=t("../../node_modules/react-helmet/es/Helmet.js"),b=t("../../node_modules/react-instantsearch/dom.js"),g=t("./src/app/overmind/index.ts"),h=t("./src/app/pages/common/Navigation/index.tsx"),x=(t("../../node_modules/instantsearch.css/themes/reset.css"),t("../../node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js")),y=t.n(x),_=t("../common/lib/components/flex/Row.js"),v=t.n(_),j=t("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),w=t("./src/app/components/Title.ts");function C(){const e=y()(["\n    background: ",";\n    width: 100vw;\n  "]);return C=function(){return e},e}function O(){const e=y()(["\n  ",";\n"]);return O=function(){return e},e}function E(){const e=y()(["\n  display: grid;\n  grid-template-columns: 1fr 340px;\n  grid-gap: 24px;\n\n  @media (max-width: 768px) {\n    grid-template-columns: 1fr;\n  }\n"]);return E=function(){return e},e}function P(){const e=y()(["\n    font-family: 'Poppins', sans-serif;\n    font-weight: 600;\n    font-size: 36px;\n    display: flex;\n    color: ",";\n    margin-bottom: 16px;\n  "]);return P=function(){return e},e}function S(){const e=y()(["\n  ",";\n"]);return S=function(){return e},e}function k(){const e=y()(["\n  margin-top: 5%;\n  text-align: left;\n  color: white;\n"]);return k=function(){return e},e}const M=j.default.div.withConfig({displayName:"elements__Content",componentId:"sc-1aqbyrj-0"})(k()),I=Object(j.default)(w.a).withConfig({displayName:"elements__Title",componentId:"sc-1aqbyrj-1"})(S(),e=>{let n=e.theme;return Object(j.css)(P(),n.lightText)}),B=Object(j.default)(v.a).withConfig({displayName:"elements__Main",componentId:"sc-1aqbyrj-2"})(E()),D=j.default.div.withConfig({displayName:"elements__Container",componentId:"sc-1aqbyrj-3"})(O(),e=>{let n=e.theme;return Object(j.css)(C(),n.background5)});var A=t("../../node_modules/@babel/runtime/helpers/defineProperty.js"),L=t.n(A),N=t("../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js"),T=t.n(N),R=t("../common/lib/templates/index.js"),z=t.n(R);function U(){const e=y()(["\n  flex: 1;\n  max-width: 340px;\n  @media (max-width: 768px) {\n    width: 100%;\n    max-width: 100%;\n  }\n"]);return U=function(){return e},e}const $=j.default.aside.withConfig({displayName:"elements__Container",componentId:"sc-1xtwbme-0"})(U());var F=t("../../node_modules/react-icons/lib/md/expand-more.js"),G=t.n(F),H=t("../../node_modules/react-icons/lib/md/expand-less.js"),Z=t.n(H);function W(){const e=y()(["\n  border: none;\n  background: inherit;\n  color: ",";\n"]);return W=function(){return e},e}function V(){const e=y()(["\n  margin-bottom: 1rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 18px;\n  line-height: 25px;\n  font-weight: normal;\n\n  svg {\n    display: none;\n    width: 30px;\n    height: 30px;\n    @media (max-width: 768px) {\n      display: block;\n    }\n  }\n"]);return V=function(){return e},e}function K(){const e=y()(["\n        height: 30px;\n        overflow: hidden;\n      "]);return K=function(){return e},e}function Y(){const e=y()(["\n  padding: 1rem;\n  background-color: ",";\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 2px;\n  margin-bottom: 1rem;\n\n  .ais-SearchBox-form {\n    margin-bottom: 0.5rem;\n  }\n\n  .ais-SearchBox-reset {\n    top: 0.25rem;\n  }\n\n  .ais-SearchBox-input {\n    font-size: 0.875rem;\n    padding-left: 2.5em;\n  }\n\n  @media (max-width: 768px) {\n    ",";\n  }\n"]);return Y=function(){return e},e}const Q=j.default.div.withConfig({displayName:"elements__Container",componentId:"sc-109ehmn-0"})(Y(),e=>e.theme.background2,e=>!e.open&&Object(j.css)(K())),q=j.default.div.withConfig({displayName:"elements__Title",componentId:"sc-109ehmn-1"})(V()),X=j.default.button.withConfig({displayName:"elements__Button",componentId:"sc-109ehmn-2"})(W(),e=>e.theme.white);var J=e=>{let n=e.attributeName,t=e.noSearch,o=e.operator,i=e.title,r=e.transformItems;const l=Object(m.useState)(!1),s=a()(l,2),c=s[0],d=s[1],u=Object(m.useCallback)(()=>{d(e=>!e)},[]);return f.a.createElement(Q,{open:c},f.a.createElement(q,null,f.a.createElement("span",null,i),f.a.createElement(X,{onClick:u},c?f.a.createElement(Z.a,null):f.a.createElement(G.a,null))),f.a.createElement(b.RefinementList,{transformItems:r,searchable:!t,showMore:!t,operator:o,attribute:n}))};t("../../node_modules/react-instantsearch-dom/dist/es/widgets/SortBy.js");function ee(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function ne(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ee(Object(t),!0).forEach((function(n){L()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ee(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var te=()=>f.a.createElement($,null,!1,f.a.createElement(J,{attributeName:"template",operator:"or",title:"Environment",transformItems:e=>e.map(e=>{let n=e.label,t=T()(e,["label"]);const o=z()(n),a=o.name,i=o.niceName;return ne(ne({},t),{},{label:a===n?i:n})})}),f.a.createElement(J,{attributeName:"npm_dependencies.dependency",operator:"and",title:"Dependencies"}),f.a.createElement(J,{attributeName:"tags",operator:"or",title:"Tags"})),oe=t("../common/lib/components/flex/Centered.js"),ae=t.n(oe),ie=t("../common/lib/components/SandboxCard/index.js"),re=t.n(ie),le=t("../common/lib/utils/get-sandbox-name.js"),se=t("../common/lib/utils/url-generator.js");function ce(){const e=y()(["\n  float: right;\n"]);return ce=function(){return e},e}const de=j.default.div.withConfig({displayName:"elements__ClearAllContainer",componentId:"sc-19mahfu-0"})(ce());var ue=()=>f.a.createElement("div",{style:{marginBottom:"1rem",fontSize:".875rem"}},f.a.createElement(b.Stats,{translations:{stats:e=>"".concat(e.toLocaleString()," results found")}}),f.a.createElement(de,null,f.a.createElement(b.ClearRefinements,null)));function me(){const e=y()(["\n  flex: 2;\n  border-top: 1px solid #828282;\n  padding-top: 1rem;\n\n  color: rgba(255, 255, 255, 0.6);\n\n  @media (max-width: 768px) {\n    margin-right: 0;\n    order: 1;\n\n    width: 100%;\n  }\n"]);return me=function(){return e},e}const fe=j.default.div.withConfig({displayName:"elements__Container",componentId:"x3bjw8-0"})(me());function pe(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function be(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?pe(Object(t),!0).forEach((function(n){L()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):pe(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var ge=()=>f.a.createElement(fe,null,f.a.createElement(ue,null),f.a.createElement(c.a,{bottom:2},f.a.createElement(b.Hits,{hitComponent:e=>{let n=e.hit;return f.a.createElement(re.a,{selectSandbox:()=>(e=>{let n=e.alias,t=e.git,o=e.objectID;return window.open(Object(se.sandboxUrl)({alias:n,id:o,git:t}))})(n),noHeight:!0,sandbox:be(be({},n),{},{title:Object(le.getSandboxName)({id:n.objectID,alias:n.alias,git:n.git,title:n.title}),id:n.objectID})})}})),f.a.createElement(ae.a,{horizontal:!0},f.a.createElement(b.Pagination,null)));function he(){const e=y()(["\n  ","\n"]);return he=function(){return e},e}function xe(){const e=y()(["\n    body {\n      .ais-SearchBox-form {\n        position: relative;\n        margin-bottom: 24px;\n      }\n\n      .ais-RefinementList-searchBox .ais-SearchBox-input {\n        background: ",";\n        width: 100%;\n      }\n\n      .ais-RefinementList-searchBox .ais-SearchBox-form .ais-SearchBox-submit {\n        height: 33px;\n      }\n\n      .ais-SearchBox-input {\n        transition: 0.3s ease border-color;\n        position: relative;\n        background: ",";\n        border: 2px solid ",";\n        border-radius: 4px;\n        outline: none;\n        color: white;\n        padding: 0.5em;\n        padding-left: 2em;\n        width: inherit;\n        box-sizing: border-box;\n        font-size: 1.125em;\n        font-weight: 500;\n        width: calc(100% - 170px);\n      }\n\n      .ais-SearchBox-input::placeholder {\n        display: flex;\n        align-items: center;\n        color: ",";\n      }\n\n      .ais-SearchBox-input:focus {\n        border-color: rgba(108, 174, 221, 0.5);\n      }\n\n      .ais-SearchBox-form .ais-SearchBox-submit {\n        position: absolute;\n        height: 42px;\n        top: auto;\n        bottom: 0;\n        right: inherit;\n        left: 0;\n        margin: 0;\n        border: 0;\n        border-radius: 3px 0 0 3px;\n        background-color: rgba(255, 255, 255, 0);\n        padding: 0;\n        width: 32px;\n        vertical-align: middle;\n        text-align: center;\n        font-size: inherit;\n        user-select: none;\n        padding-left: 4px;\n        padding-bottom: 2px;\n\n        svg {\n          margin: 6px;\n          width: 14px;\n          height: 14px;\n          vertical-align: middle;\n          fill: rgba(255, 255, 255, 0.5);\n        }\n\n        &::before {\n          display: inline-block;\n          margin-right: -4px;\n          height: 100%;\n          vertical-align: middle;\n          content: '' 2;\n        }\n\n        &:focus {\n          outline: 0;\n        }\n      }\n\n      .ais-SearchBox-submit .ais-SearchBox-submit:hover,\n      .ais-SearchBox-submit:active {\n        cursor: pointer;\n      }\n\n      .ais-SearchBox-reset {\n        display: none;\n      }\n\n      .ais-Highlight-highlighted {\n        color: #ffd399;\n        font-style: normal;\n      }\n\n      .ais-RefinementList-item {\n        color: rgba(255, 255, 255, 0.8);\n        margin-top: 6px;\n\n        .ais-RefinementList-checkbox {\n          display: inline-block;\n          border-radius: 3.5px;\n          width: 16px;\n          height: 16px;\n          background: rgba(0, 0, 0, 0.3);\n          outline: none;\n          vertical-align: middle;\n          margin-right: 8px;\n          transition: all 0.15s ease;\n        }\n      }\n\n      .ais-RefinementList-item input[type='checkbox']:checked {\n        background-color: ",";\n        /* background-image: url(\"data:image/svg+xml,%0A%3Csvg width='11px' height='8px' viewBox='0 0 11 8' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0.200000003' stroke-linecap='round' stroke-linejoin='round'%3E%3Cg id='SVG-Layer' transform='translate(1.500000, 0.500000)' fill='%23FFFFFF' stroke='%231C2022' stroke-width='1.6'%3E%3Cpolyline id='Path' points='0 3.88 2.378 6.315 8.046 0.6'%3E%3C/polyline%3E%3C/g%3E%3C/g%3E%3C/svg%3E\"); */\n        background-position: 50% 4px;\n        background-repeat: no-repeat;\n        border-color: ",";\n        box-shadow: none;\n      }\n\n      .ais-RefinementList-item:hover .ais-RefinementList-checkbox {\n        box-shadow: inset 0 0 0 1px rgba(108, 174, 221, 0.3);\n      }\n\n      .ais-RefinementList-label {\n        cursor: pointer;\n        font-weight: 300;\n      }\n\n      .ais-RefinementList-item--selected .ais-RefinementList-label {\n        cursor: pointer;\n        font-weight: 500;\n      }\n\n      .ais-RefinementList-item--selected .ais-RefinementList-count {\n        font-weight: 600;\n        color: white;\n      }\n\n      .ais-RefinementList-item--selected .ais-RefinementList-count {\n        background-color: ",";\n      }\n\n      .ais-RefinementList-count {\n        border-radius: 2px;\n        background-color: rgba(0, 0, 0, 0.2);\n        float: right;\n        color: rgba(255, 255, 255, 0.2);\n        font-weight: 500;\n        font-size: 12px;\n        padding: 3px 10px;\n      }\n\n      .ais-RefinementList-showMore {\n        background: transparent;\n        border: none;\n        cursor: pointer;\n        padding: 0;\n        margin: 0;\n        color: rgba(255, 255, 255, 0.8);\n        margin-top: 1rem;\n        font-weight: normal;\n      }\n\n      .ais-RefinementList__showMoreDisabled[disabled],\n      .ais-RefinementList__showMoreDisabled:disabled {\n        opacity: 0.5;\n        pointer-events: none;\n      }\n\n      .ais-ClearRefinements .ais-ClearRefinements-button {\n        cursor: pointer;\n        padding: 4px 8px;\n        border-radius: 4px;\n        border: none;\n        font-size: 12px;\n        box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);\n        border-radius: 4px;\n        color: white;\n        background: ",";\n\n        &:disabled[disabled],\n        &:disabled:disabled {\n          opacity: 0.5;\n          pointer-events: none;\n        }\n      }\n\n      .ais-PoweredBy {\n        padding: 0;\n        display: flex;\n        float: right;\n        border-radius: 2px;\n        color: rgba(255, 255, 255, 0.8);\n        margin-top: 8px;\n        padding: 5px 7px;\n        padding-right: 0;\n        margin-right: -4px;\n\n        .ais-PoweredBy-link {\n          padding: 0 5px;\n          svg {\n            height: 1.2em;\n            vertical-align: bottom;\n            fill: rgba(255, 255, 255, 0.8);\n\n            path:nth-child(4) {\n              fill: rgba(255, 255, 255, 0.8);\n            }\n          }\n        }\n      }\n\n      .ais-Pagination {\n        width: auto;\n        margin: 0 auto;\n        box-sizing: border-box;\n        display: inline-block;\n        border-radius: 4px;\n        padding: 8px 16px;\n\n        .ais-Pagination-item {\n          transition: 0.3s ease all;\n          display: inline-block;\n          padding: 3px;\n          width: 28px;\n          border-radius: 4px;\n          text-align: center;\n          font-size: 14px;\n          font-weight: bold;\n        }\n\n        .ais-Pagination-item:hover {\n          background: rgba(108, 174, 221, 0.2);\n        }\n\n        .ais-Pagination-item.ais-Pagination-item--selected.ais-Pagination-item--page:hover {\n          background: ",";\n        }\n\n        .ais-Pagination-item.ais-Pagination-item--selected.ais-Pagination-item--page:hover\n          .ais-Pagination-link.ais-Pagination__itemLinkSelected {\n          color: white;\n        }\n\n        .ais-Pagination__item:hover .ais-Pagination-link {\n          color: ",";\n        }\n\n        .ais-Pagination-item--selected {\n          color: ",";\n          background: ",";\n        }\n\n        .ais-Pagination-item--selected .ais-Pagination-link {\n          color: currentColor;\n        }\n\n        .ais-Pagination-item--disabled {\n          visibility: visible;\n          color: #bbbbbb;\n        }\n\n        .ais-Pagination-item--disabled[disabled],\n        .ais-Pagination-item--disabled:disabled {\n          opacity: 0.5;\n          pointer-events: none;\n        }\n\n        .ais-Pagination-item--disabled:hover {\n          cursor: default;\n          text-decoration: none;\n        }\n\n        .ais-Pagination-link {\n          text-decoration: none;\n          color: rgba(255, 255, 255, 0.5);\n          display: block;\n          width: 100%;\n          height: 100%;\n        }\n      }\n\n      .ais-Stats {\n        display: inline-block;\n\n        .ais-Stats-text {\n          color: ",";\n        }\n      }\n\n      [type='checkbox'],\n      [type='radio'] {\n        appearance: none;\n        outline-offset: -2px;\n      }\n\n      .ais-SortBy-select {\n        transition: 0.3s ease border-color;\n        background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgNC45NSAxMCI+PHBhdGggZmlsbD0id2hpdGUiIGQ9Ik0xLjQxIDQuNjdsMS4wNy0xLjQ5IDEuMDYgMS40OUgxLjQxek0zLjU0IDUuMzNMMi40OCA2LjgyIDEuNDEgNS4zM2gyLjEzeiI+PC9wYXRoPjwvc3ZnPg==);\n        background-color: rgba(0, 0, 0, 0.3);\n        background-position: right;\n        background-repeat: no-repeat;\n        width: 100%;\n        color: white;\n        border: none;\n        outline: none;\n        border-radius: 4px;\n        padding: 0.2em 1em 0.2em 0.2em;\n        box-sizing: border-box;\n        font-weight: 400;\n        height: 1.75em;\n        appearance: none;\n        border: 1px solid rgba(0, 0, 0, 0.1);\n      }\n\n      .ais-Hits .ais-Hits-list {\n        display: grid;\n        grid-gap: 2rem;\n        grid-template-columns: 1fr 1fr 1fr;\n        margin-top: 2rem;\n        margin-left: -0.5rem;\n        margin-right: 0.5rem;\n\n        @media screen and (max-width: 1100px) {\n          grid-template-columns: 1fr 1fr;\n        }\n\n        @media screen and (max-width: 900px) {\n          grid-template-columns: 1fr;\n        }\n      }\n\n      @media screen and (min-width: 1100px) {\n        .ais-Hits-item {\n          > div {\n            > img {\n              height: 147px !important;\n            }\n          }\n        }\n      }\n    }\n  "]);return xe=function(){return e},e}function ye(){const e=y()(["\n  ",";\n"]);return ye=function(){return e},e}const _e=Object(j.css)(ye(),e=>{let n=e.theme;return Object(j.css)(xe(),n.background5,n.background2,n.background2,n.placeholder,n.secondary,n.secondary,n.secondary,n.secondary,n.secondary,n.secondary,n.white,n.secondary,n.placeholder)});var ve=Object(j.createGlobalStyle)(he(),_e);const je=e=>"?".concat(u.a.stringify(e)),we=e=>{let n=e.history,t=e.location;const o=Object(g.b)().searchMounted,r=Object(m.useState)(u.a.parse(t.search.slice(1))),s=a()(r,2),d=s[0],x=s[1],y=Object(m.useRef)(null);Object(m.useEffect)(()=>{o()},[o]),Object(m.useEffect)(()=>{const e=n.listen((n,t)=>(["POP","PUSH"].includes(t)&&x(u.a.parse(n.search.slice(1))),e))},[n]);const _=Object(m.useCallback)(e=>{clearTimeout(y.current),y.current=setTimeout(()=>{n.push(((e,n)=>n?"".concat(e.pathname).concat(je(n)):"")(t,e),e)},700),x(e)},[n,t]);return f.a.createElement(D,null,f.a.createElement(p.a,null,f.a.createElement("title",null,"Search - CodeSandbox"),f.a.createElement("meta",{name:"robots",content:"noindex, nofollow"})),f.a.createElement(ve,null),f.a.createElement(h.a,{title:"Search"}),f.a.createElement(l.a,null,f.a.createElement(c.a,{vertical:1.5},f.a.createElement(M,null,f.a.createElement(b.InstantSearch,{apiKey:i.ALGOLIA_API_KEY,appId:i.ALGOLIA_APPLICATION_ID,createURL:je,indexName:i.ALGOLIA_DEFAULT_INDEX,onSearchStateChange:_,searchState:d},f.a.createElement(b.Configure,{hitsPerPage:12}),f.a.createElement(B,{alignItems:"flex-start"},f.a.createElement("div",null,f.a.createElement(I,null,"Search"),f.a.createElement(b.PoweredBy,null),f.a.createElement(b.SearchBox,{autoFocus:!0,searchAsYouType:!1,translations:{placeholder:"Search Sandboxes..."}}),f.a.createElement(ge,null)),f.a.createElement(te,null)))))))}},11:function(e,n){}}]);
//# sourceMappingURL=page-search.7f68c8d85.chunk.js.map