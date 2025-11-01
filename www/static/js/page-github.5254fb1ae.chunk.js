(this.csbJsonP=this.csbJsonP||[]).push([["page-github"],{"../common/lib/components/Input/index.js":function(e,t,n){"use strict";var o=this&&this.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,o,r)}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&o(t,e,n);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.TextArea=t.styles=void 0;const a=i(n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"));t.styles=a.css`
  transition: 0.3s ease border-color;
  background-color: ${e=>e.theme["input.background"]||"rgba(0, 0, 0, 0.3)"};
  color: ${e=>e.theme["input.foreground"]||(e.theme.light?"#636363":"white")};
  border: none;
  outline: none;
  border-radius: 4px;
  padding: 0.25em;
  width: ${({block:e,fullWidth:t})=>e||t?"100%":"inherit"};
  box-sizing: border-box;

  border: 1px solid
    ${e=>e.error?e.theme.red.clearer(.5):"rgba(0, 0, 0, 0.1)"};

  &:focus {
    border-color: ${e=>e.theme.secondary.clearer(.6)};
  }
`;const s=a.default.input`
  ${t.styles};
`;t.TextArea=a.default.textarea`
  ${t.styles};
`,t.default=s},"../common/lib/components/flex/MaxWidth.js":function(e,t,n){"use strict";var o=this&&this.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,o,r)}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&o(t,e,n);return r(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=a(n("../../node_modules/react/index.js")),l=i(n("../../node_modules/styled-components/dist/styled-components.browser.esm.js")),c=l.default.div`
  box-sizing: border-box;
  display: flex;

  padding: 0 2rem;

  width: 100%;
  justify-content: center;

  ${e=>e.responsive&&l.css`
      @media (max-width: 768px) {
        padding: 0;
      }
    `};
`,u=l.default.div`
  width: 100%;
  max-width: ${e=>e.width}px;
`;t.default=({children:e,width:t=1280,className:n,responsive:o=!1})=>s.default.createElement(c,{responsive:o},s.default.createElement(u,{className:n,width:t},e))},"./src/app/pages/GitHub/index.tsx":function(e,t,n){"use strict";n.r(t),n.d(t,"GitHub",(function(){return D}));var o=n("../../node_modules/@babel/runtime/helpers/slicedToArray.js"),r=n.n(o),i=n("../../node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js"),a=n.n(i),s=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),l=n("../@styled-system/css/dist/index.js"),c=n.n(l),u=n("../../node_modules/react-router-dom/esm/react-router-dom.js"),d=n("../common/lib/components/flex/MaxWidth.js"),m=n.n(d),b=n("../components/lib/index.js"),p=n("../common/lib/utils/url-generator.js"),f=n("../../node_modules/react/index.js"),h=n.n(f),g=n("./src/app/components/SubTitle.ts"),_=n("./src/app/components/Title.ts"),v=n("./src/app/overmind/index.ts"),y=n("./src/app/pages/common/Navigation/index.tsx"),j=n("../common/lib/components/flex/Centered.js"),x=n.n(j),w=n("../common/lib/components/Input/index.js"),O=n.n(w);function E(){const e=a()(["\n    color: ",";\n    margin-bottom: 2rem;\n  "]);return E=function(){return e},e}function P(){const e=a()(["\n  ",";\n"]);return P=function(){return e},e}function C(){const e=a()(["\n  font-size: 1.25rem;\n  margin-bottom: 2rem;\n"]);return C=function(){return e},e}function H(){const e=a()(["\n  margin-bottom: 1rem;\n"]);return H=function(){return e},e}function I(){const e=a()(["\n  text-align: left;\n  width: 100%;\n  margin-bottom: 0.25rem;\n  color: rgba(255, 255, 255, 0.3);\n"]);return I=function(){return e},e}function M(){const e=a()(["\n  max-width: 50em;\n  margin: 5rem auto auto;\n"]);return M=function(){return e},e}function S(){const e=a()(["\n  height: 100%;\n  width: 100%;\n  margin: 1rem;\n"]);return S=function(){return e},e}const T=s.default.div.withConfig({displayName:"elements__Container",componentId:"sc-1vi0tld-0"})(S()),L=Object(s.default)(x.a).withConfig({displayName:"elements__Content",componentId:"sc-1vi0tld-1"})(M()),N=s.default.label.withConfig({displayName:"elements__Label",componentId:"sc-1vi0tld-2"})(I()),R=s.default.div.withConfig({displayName:"elements__Description",componentId:"sc-1vi0tld-3"})(H()),U=Object(s.default)(O.a).withConfig({displayName:"elements__Input",componentId:"sc-1vi0tld-4"})(C()),$=s.default.div.withConfig({displayName:"elements__ErrorMessage",componentId:"sc-1vi0tld-5"})(P(),e=>{let t=e.theme;return Object(s.css)(E(),t.red)});function G(){const e=a()(["",""]);return G=function(){return e},e}var k=Object(s.default)(b.Element).withConfig({displayName:"GitHub___StyledElement",componentId:"sc-17davm4-0"})(G(),e=>e._css);const D=Object(s.withTheme)(e=>{let t=e.theme;const n=Object(v.b)().githubPageMounted,o=Object(f.useState)(null),i=r()(o,2),a=i[0],s=i[1],l=Object(f.useState)(""),d=r()(l,2),j=d[0],x=d[1],w=Object(f.useState)(""),O=r()(w,2),E=O[0],P=O[1];Object(f.useEffect)(()=>{n()},[n]);return h.a.createElement(b.ThemeProvider,{theme:t.vsCode},h.a.createElement(k,{_css:c()({width:"100vw",overflow:"hidden",backgroundColor:"sideBar.background"})},h.a.createElement(y.a,{title:"GitHub Import"}),h.a.createElement(m.a,null,h.a.createElement("div",{style:{minHeight:"100vh"}},h.a.createElement(b.Element,{margin:6},h.a.createElement(T,null,h.a.createElement(L,{horizontal:!0,vertical:!0},h.a.createElement(R,null,h.a.createElement(_.a,null,"Import from GitHub"),h.a.createElement(g.a,null,"Enter the URL to your GitHub repository to generate a URL to your sandbox. The sandbox will stay in sync with your repository.",h.a.createElement("br",null),h.a.createElement("a",{href:"/docs/importing#import-from-github",rel:"noopener norefereer",target:"_blank"},"See the docs"))),h.a.createElement(N,{htmlFor:"githuburl"},"URL to GitHub Repository (supports branches and paths too)"),h.a.createElement(U,{name:"githuburl",onChange:e=>{let t=e.target.value;t?p.gitHubRepoPattern.test(t)?(s(null),x((e=>"".concat(Object(p.protocolAndHost)()).concat(Object(p.gitHubToSandboxUrl)(e)))(t.trim())),P(t)):(s("The URL provided is not valid."),x(""),P(t)):(s(null),x(""),P(t))},placeholder:"Insert GitHub URL...",value:E}),null!==a&&h.a.createElement($,null,a),h.a.createElement(N,{htmlFor:"sandboxurl"},"Converted Sandbox URL"),h.a.createElement(U,{name:"sandboxurl",placeholder:"The Sandbox URL",value:j}),h.a.createElement(b.Button,{as:u.Link,disabled:!j,to:Object(p.gitHubToSandboxUrl)(E)},"Open Sandbox"))))))))})}}]);
//# sourceMappingURL=page-github.5254fb1ae.chunk.js.map