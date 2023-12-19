"use strict";(self.webpackChunkmantine_admin=self.webpackChunkmantine_admin||[]).push([[490],{"./node_modules/@mantine/core/esm/components/Avatar/Avatar.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>Avatar});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const AvatarGroupContext=(0,react.createContext)(null),AvatarGroupProvider=AvatarGroupContext.Provider;const Avatar_module={root:"m-f85678b6",image:"m-11f8ac07",placeholder:"m-104cd71f",group:"m-11def92b"};var factory=__webpack_require__("./node_modules/@mantine/core/esm/core/factory/factory.mjs"),use_props=__webpack_require__("./node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs"),use_styles=__webpack_require__("./node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs"),Box=__webpack_require__("./node_modules/@mantine/core/esm/core/Box/Box.mjs"),create_vars_resolver=__webpack_require__("./node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs"),get_size=__webpack_require__("./node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs"),__defProp=Object.defineProperty,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(obj,key,value)=>key in obj?__defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value}):obj[key]=value,__spreadValues=(a,b)=>{for(var prop in b||(b={}))__hasOwnProp.call(b,prop)&&__defNormalProp(a,prop,b[prop]);if(__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(b))__propIsEnum.call(b,prop)&&__defNormalProp(a,prop,b[prop]);return a};const defaultProps={},varsResolver=(0,create_vars_resolver.Z)(((_,{spacing})=>({group:{"--ag-spacing":(0,get_size.bG)(spacing)}}))),AvatarGroup=(0,factory.d)(((_props,ref)=>{const props=(0,use_props.w)("AvatarGroup",defaultProps,_props),_a=props,{classNames,className,style,styles,unstyled,vars,spacing}=_a,others=((source,exclude)=>{var target={};for(var prop in source)__hasOwnProp.call(source,prop)&&exclude.indexOf(prop)<0&&(target[prop]=source[prop]);if(null!=source&&__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(source))exclude.indexOf(prop)<0&&__propIsEnum.call(source,prop)&&(target[prop]=source[prop]);return target})(_a,["classNames","className","style","styles","unstyled","vars","spacing"]),getStyles=(0,use_styles.y)({name:"AvatarGroup",classes:Avatar_module,props,className,style,classNames,styles,unstyled,vars,varsResolver,rootSelector:"group"});return react.createElement(AvatarGroupProvider,{value:!0},react.createElement(Box.x,__spreadValues(__spreadValues({ref},getStyles("group")),others)))}));AvatarGroup.classes=Avatar_module,AvatarGroup.displayName="@mantine/core/AvatarGroup";var AvatarPlaceholderIcon_defProp=Object.defineProperty,__defProps=Object.defineProperties,__getOwnPropDescs=Object.getOwnPropertyDescriptors,AvatarPlaceholderIcon_getOwnPropSymbols=Object.getOwnPropertySymbols,AvatarPlaceholderIcon_hasOwnProp=Object.prototype.hasOwnProperty,AvatarPlaceholderIcon_propIsEnum=Object.prototype.propertyIsEnumerable,AvatarPlaceholderIcon_defNormalProp=(obj,key,value)=>key in obj?AvatarPlaceholderIcon_defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value}):obj[key]=value;function AvatarPlaceholderIcon(props){return react.createElement("svg",(a=((a,b)=>{for(var prop in b||(b={}))AvatarPlaceholderIcon_hasOwnProp.call(b,prop)&&AvatarPlaceholderIcon_defNormalProp(a,prop,b[prop]);if(AvatarPlaceholderIcon_getOwnPropSymbols)for(var prop of AvatarPlaceholderIcon_getOwnPropSymbols(b))AvatarPlaceholderIcon_propIsEnum.call(b,prop)&&AvatarPlaceholderIcon_defNormalProp(a,prop,b[prop]);return a})({},props),__defProps(a,__getOwnPropDescs({"data-avatar-placeholder-icon":!0,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"}))),react.createElement("path",{d:"M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}));var a}var polymorphic_factory=__webpack_require__("./node_modules/@mantine/core/esm/core/factory/polymorphic-factory.mjs"),Avatar_defProp=Object.defineProperty,Avatar_defProps=Object.defineProperties,Avatar_getOwnPropDescs=Object.getOwnPropertyDescriptors,Avatar_getOwnPropSymbols=Object.getOwnPropertySymbols,Avatar_hasOwnProp=Object.prototype.hasOwnProperty,Avatar_propIsEnum=Object.prototype.propertyIsEnumerable,Avatar_defNormalProp=(obj,key,value)=>key in obj?Avatar_defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value}):obj[key]=value,Avatar_spreadValues=(a,b)=>{for(var prop in b||(b={}))Avatar_hasOwnProp.call(b,prop)&&Avatar_defNormalProp(a,prop,b[prop]);if(Avatar_getOwnPropSymbols)for(var prop of Avatar_getOwnPropSymbols(b))Avatar_propIsEnum.call(b,prop)&&Avatar_defNormalProp(a,prop,b[prop]);return a},Avatar_spreadProps=(a,b)=>Avatar_defProps(a,Avatar_getOwnPropDescs(b));const Avatar_defaultProps={},Avatar_varsResolver=(0,create_vars_resolver.Z)(((theme,{size,radius,variant,gradient,color})=>{const colors=theme.variantColorResolver({color:color||"gray",theme,gradient,variant:variant||"light"});return{root:{"--avatar-size":(0,get_size.ap)(size,"avatar-size"),"--avatar-radius":void 0===radius?void 0:(0,get_size.H5)(radius),"--avatar-bg":color||variant?colors.background:void 0,"--avatar-color":color||variant?colors.color:void 0,"--avatar-bd":color||variant?colors.border:void 0}}})),Avatar=(0,polymorphic_factory.b)(((_props,ref)=>{const props=(0,use_props.w)("Avatar",Avatar_defaultProps,_props),_a=props,{classNames,className,style,styles,unstyled,vars,src,alt,radius,color,gradient,imageProps,children}=_a,others=((source,exclude)=>{var target={};for(var prop in source)Avatar_hasOwnProp.call(source,prop)&&exclude.indexOf(prop)<0&&(target[prop]=source[prop]);if(null!=source&&Avatar_getOwnPropSymbols)for(var prop of Avatar_getOwnPropSymbols(source))exclude.indexOf(prop)<0&&Avatar_propIsEnum.call(source,prop)&&(target[prop]=source[prop]);return target})(_a,["classNames","className","style","styles","unstyled","vars","src","alt","radius","color","gradient","imageProps","children"]),ctx=function useAvatarGroupContext(){return{withinGroup:!!(0,react.useContext)(AvatarGroupContext)}}(),[error,setError]=(0,react.useState)(!src),getStyles=(0,use_styles.y)({name:"Avatar",props,classes:Avatar_module,className,style,classNames,styles,unstyled,vars,varsResolver:Avatar_varsResolver});return(0,react.useEffect)((()=>setError(!src)),[src]),react.createElement(Box.x,Avatar_spreadValues(Avatar_spreadProps(Avatar_spreadValues({},getStyles("root")),{mod:{"within-group":ctx.withinGroup},ref}),others),error?react.createElement("span",Avatar_spreadProps(Avatar_spreadValues({},getStyles("placeholder")),{title:alt}),children||react.createElement(AvatarPlaceholderIcon,null)):react.createElement("img",Avatar_spreadProps(Avatar_spreadValues(Avatar_spreadValues({},imageProps),getStyles("image")),{src,alt,onError:event=>{var _a2;setError(!0),null==(_a2=null==imageProps?void 0:imageProps.onError)||_a2.call(imageProps,event)}})))}));Avatar.classes=Avatar_module,Avatar.displayName="@mantine/core/Avatar",Avatar.Group=AvatarGroup},"./node_modules/@mantine/core/esm/components/Flex/Flex.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>Flex});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const FLEX_STYLE_PROPS_DATA={gap:{type:"spacing",property:"gap"},rowGap:{type:"spacing",property:"rowGap"},columnGap:{type:"spacing",property:"columnGap"},align:{type:"identity",property:"alignItems"},justify:{type:"identity",property:"justifyContent"},wrap:{type:"identity",property:"flexWrap"},direction:{type:"identity",property:"flexDirection"}};const Flex_module={root:"m-8bffd616"};var use_random_classname=__webpack_require__("./node_modules/@mantine/core/esm/core/Box/use-random-classname/use-random-classname.mjs"),parse_style_props=__webpack_require__("./node_modules/@mantine/core/esm/core/Box/style-props/parse-style-props/parse-style-props.mjs"),InlineStyles=__webpack_require__("./node_modules/@mantine/core/esm/core/InlineStyles/InlineStyles.mjs"),filter_props=__webpack_require__("./node_modules/@mantine/core/esm/core/utils/filter-props/filter-props.mjs"),polymorphic_factory=__webpack_require__("./node_modules/@mantine/core/esm/core/factory/polymorphic-factory.mjs"),use_props=__webpack_require__("./node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs"),use_styles=__webpack_require__("./node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs"),MantineThemeProvider=__webpack_require__("./node_modules/@mantine/core/esm/core/MantineProvider/MantineThemeProvider/MantineThemeProvider.mjs"),Box=__webpack_require__("./node_modules/@mantine/core/esm/core/Box/Box.mjs"),__defProp=Object.defineProperty,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(obj,key,value)=>key in obj?__defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value}):obj[key]=value,__spreadValues=(a,b)=>{for(var prop in b||(b={}))__hasOwnProp.call(b,prop)&&__defNormalProp(a,prop,b[prop]);if(__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(b))__propIsEnum.call(b,prop)&&__defNormalProp(a,prop,b[prop]);return a};const defaultProps={},Flex=(0,polymorphic_factory.b)(((_props,ref)=>{const props=(0,use_props.w)("Flex",defaultProps,_props),_a=props,{classNames,className,style,styles,unstyled,vars,gap,rowGap,columnGap,align,justify,wrap,direction}=_a,others=((source,exclude)=>{var target={};for(var prop in source)__hasOwnProp.call(source,prop)&&exclude.indexOf(prop)<0&&(target[prop]=source[prop]);if(null!=source&&__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(source))exclude.indexOf(prop)<0&&__propIsEnum.call(source,prop)&&(target[prop]=source[prop]);return target})(_a,["classNames","className","style","styles","unstyled","vars","gap","rowGap","columnGap","align","justify","wrap","direction"]),getStyles=(0,use_styles.y)({name:"Flex",classes:Flex_module,props,className,style,classNames,styles,unstyled,vars}),theme=(0,MantineThemeProvider.rZ)(),responsiveClassName=(0,use_random_classname.m)(),parsedStyleProps=(0,parse_style_props.n)({styleProps:{gap,rowGap,columnGap,align,justify,wrap,direction},theme,data:FLEX_STYLE_PROPS_DATA});return react.createElement(react.Fragment,null,parsedStyleProps.hasResponsiveStyles&&react.createElement(InlineStyles.f,{selector:`.${responsiveClassName}`,styles:parsedStyleProps.styles,media:parsedStyleProps.media}),react.createElement(Box.x,__spreadValues(__spreadValues({ref},getStyles("root",{className:responsiveClassName,style:(0,filter_props.L)(parsedStyleProps.inlineStyles)})),others)))}));Flex.classes=Flex_module,Flex.displayName="@mantine/core/Flex"},"./node_modules/@mantine/core/esm/components/Text/Text.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Text});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const Text_module={root:"m-b6d8b162"};var get_size=__webpack_require__("./node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs"),get_gradient=__webpack_require__("./node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-gradient/get-gradient.mjs"),polymorphic_factory=__webpack_require__("./node_modules/@mantine/core/esm/core/factory/polymorphic-factory.mjs"),use_props=__webpack_require__("./node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs"),use_styles=__webpack_require__("./node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs"),Box=__webpack_require__("./node_modules/@mantine/core/esm/core/Box/Box.mjs"),create_vars_resolver=__webpack_require__("./node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs"),get_theme_color=__webpack_require__("./node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-theme-color/get-theme-color.mjs"),__defProp=Object.defineProperty,__defProps=Object.defineProperties,__getOwnPropDescs=Object.getOwnPropertyDescriptors,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(obj,key,value)=>key in obj?__defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value}):obj[key]=value,__spreadValues=(a,b)=>{for(var prop in b||(b={}))__hasOwnProp.call(b,prop)&&__defNormalProp(a,prop,b[prop]);if(__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(b))__propIsEnum.call(b,prop)&&__defNormalProp(a,prop,b[prop]);return a};function getTextTruncate(truncate){return"start"===truncate?"start":"end"===truncate||truncate?"end":void 0}const defaultProps={inherit:!1},varsResolver=(0,create_vars_resolver.Z)(((theme,{variant,lineClamp,gradient,size,color})=>({root:{"--text-fz":(0,get_size.yv)(size),"--text-lh":(0,get_size.Dp)(size),"--text-gradient":"gradient"===variant?(0,get_gradient.u)(gradient,theme):void 0,"--text-line-clamp":"number"==typeof lineClamp?lineClamp.toString():void 0,"--text-color":color?(0,get_theme_color.p)(color,theme):void 0}}))),Text=(0,polymorphic_factory.b)(((_props,ref)=>{const props=(0,use_props.w)("Text",defaultProps,_props),_a=props,{lineClamp,truncate,inline,inherit,gradient,span,__staticSelector,vars,className,style,classNames,styles,unstyled,variant,mod,size}=_a,others=((source,exclude)=>{var target={};for(var prop in source)__hasOwnProp.call(source,prop)&&exclude.indexOf(prop)<0&&(target[prop]=source[prop]);if(null!=source&&__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(source))exclude.indexOf(prop)<0&&__propIsEnum.call(source,prop)&&(target[prop]=source[prop]);return target})(_a,["lineClamp","truncate","inline","inherit","gradient","span","__staticSelector","vars","className","style","classNames","styles","unstyled","variant","mod","size"]),getStyles=(0,use_styles.y)({name:["Text",__staticSelector],props,classes:Text_module,className,style,classNames,styles,unstyled,vars,varsResolver});return react.createElement(Box.x,__spreadValues((a=__spreadValues({},getStyles("root",{focusable:!0})),b={ref,component:span?"span":"p",variant,mod:[{"data-truncate":getTextTruncate(truncate),"data-line-clamp":"number"==typeof lineClamp,"data-inline":inline,"data-inherit":inherit},mod],size},__defProps(a,__getOwnPropDescs(b))),others));var a,b}));Text.classes=Text_module,Text.displayName="@mantine/core/Text"},"./node_modules/@mantine/core/esm/components/UnstyledButton/UnstyledButton.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>UnstyledButton});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const UnstyledButton_module={root:"m-87cf2631"};var polymorphic_factory=__webpack_require__("./node_modules/@mantine/core/esm/core/factory/polymorphic-factory.mjs"),use_props=__webpack_require__("./node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs"),use_styles=__webpack_require__("./node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs"),Box=__webpack_require__("./node_modules/@mantine/core/esm/core/Box/Box.mjs"),__defProp=Object.defineProperty,__defProps=Object.defineProperties,__getOwnPropDescs=Object.getOwnPropertyDescriptors,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(obj,key,value)=>key in obj?__defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value}):obj[key]=value,__spreadValues=(a,b)=>{for(var prop in b||(b={}))__hasOwnProp.call(b,prop)&&__defNormalProp(a,prop,b[prop]);if(__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(b))__propIsEnum.call(b,prop)&&__defNormalProp(a,prop,b[prop]);return a};const defaultProps={__staticSelector:"UnstyledButton"},UnstyledButton=(0,polymorphic_factory.b)(((_props,ref)=>{const props=(0,use_props.w)("UnstyledButton",defaultProps,_props),_a=props,{className,component="button",__staticSelector,unstyled,classNames,styles,style}=_a,others=((source,exclude)=>{var target={};for(var prop in source)__hasOwnProp.call(source,prop)&&exclude.indexOf(prop)<0&&(target[prop]=source[prop]);if(null!=source&&__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(source))exclude.indexOf(prop)<0&&__propIsEnum.call(source,prop)&&(target[prop]=source[prop]);return target})(_a,["className","component","__staticSelector","unstyled","classNames","styles","style"]),getStyles=(0,use_styles.y)({name:__staticSelector,props,classes:UnstyledButton_module,className,style,classNames,styles,unstyled});return react.createElement(Box.x,__spreadValues((a=__spreadValues({},getStyles("root",{focusable:!0})),__defProps(a,__getOwnPropDescs({component,ref,type:"button"===component?"button":void 0}))),others));var a}));UnstyledButton.classes=UnstyledButton_module,UnstyledButton.displayName="@mantine/core/UnstyledButton"},"./src/components/UserButton/UserButton.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,C_projects_daiwa_jeffreyang_focus_ui_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_UserButton__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/UserButton/UserButton.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,C_projects_daiwa_jeffreyang_focus_ui_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const __WEBPACK_DEFAULT_EXPORT__={title:"Components/UserButton",component:_UserButton__WEBPACK_IMPORTED_MODULE_2__.l,tags:["autodocs"],parameters:{layout:"centered"}};var Default={render:function render(){return __jsx(_UserButton__WEBPACK_IMPORTED_MODULE_2__.l,{image:"https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80",name:"Harriette Spoonlicker",email:"hspoonlicker@outlook.com"})}};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  render: () => <UserButton image="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80" name="Harriette Spoonlicker" email="hspoonlicker@outlook.com" />\n}'},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})});const __namedExportsOrder=["Default"]},"./src/components/UserButton/UserButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>UserButton});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),UnstyledButton=__webpack_require__("./node_modules/@mantine/core/esm/components/UnstyledButton/UnstyledButton.mjs"),Flex=__webpack_require__("./node_modules/@mantine/core/esm/components/Flex/Flex.mjs"),Avatar=__webpack_require__("./node_modules/@mantine/core/esm/components/Avatar/Avatar.mjs"),Text=__webpack_require__("./node_modules/@mantine/core/esm/components/Text/Text.mjs"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),UserButton_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/UserButton/UserButton.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(UserButton_module.Z,options);const UserButton_UserButton_module=UserButton_module.Z&&UserButton_module.Z.locals?UserButton_module.Z.locals:void 0;var __jsx=react.createElement;function UserButton(_ref){var image=_ref.image,name=_ref.name,email=_ref.email;return __jsx(UnstyledButton.k,{className:UserButton_UserButton_module.user},__jsx(Flex.k,null,__jsx(Avatar.q,{src:image,radius:"xl"}),__jsx("div",{style:{flex:1}},__jsx(Text.x,{size:"sm",w:500},name),__jsx(Text.x,{c:"dimmed",size:"xs"},email))))}UserButton.displayName="UserButton";try{UserButton.displayName="UserButton",UserButton.__docgenInfo={description:"",displayName:"UserButton",props:{image:{defaultValue:null,description:"",name:"image",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},email:{defaultValue:null,description:"",name:"email",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/UserButton/UserButton.tsx#UserButton"]={docgenInfo:UserButton.__docgenInfo,name:"UserButton",path:"src/components/UserButton/UserButton.tsx#UserButton"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/UserButton/UserButton.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".UserButton_user__XsFF1 {\n\tdisplay: block;\n\twidth: 100%;\n\tpadding: var(--mantine-spacing-md);\n\tcolor: var(--mantine-color-black);\n}\n\t[data-mantine-color-scheme='dark'] .UserButton_user__XsFF1 {\n\tcolor: var(--mantine-color-dark-0);\n}\n\t@media (hover: hover) {\n\t.UserButton_user__XsFF1:hover {\n\t\tbackground-color: var(--mantine-color-gray-0);\n\t}\n\t\t[data-mantine-color-scheme='dark'] .UserButton_user__XsFF1:hover {\n\t\tbackground-color: var(--mantine-color-dark-8);\n\t}\n}\n\t@media (hover: none) {\n\t.UserButton_user__XsFF1:active {\n\t\tbackground-color: var(--mantine-color-gray-0);\n\t}\n\t\t[data-mantine-color-scheme='dark'] .UserButton_user__XsFF1:active {\n\t\tbackground-color: var(--mantine-color-dark-8);\n\t}\n}\n","",{version:3,sources:["webpack://./src/components/UserButton/UserButton.module.css","<no source>"],names:[],mappings:"AAAA;CACC,cAAc;CACd,WAAW;CACX,kCAAkC;CAClC,iCAA0E;AAK3E;CCTA;CDIC;CCJD;CDMC;CCND;EDOE,6CAAsF;ECPxF;EAAA;EDOE;ECPF;ADQC;CAFA;CCND;EDOE,6CAAsF;ECPxF;EAAA;EDOE;ECPF;ADQC",sourcesContent:[".user {\r\n\tdisplay: block;\r\n\twidth: 100%;\r\n\tpadding: var(--mantine-spacing-md);\r\n\tcolor: light-dark(var(--mantine-color-black), var(--mantine-color-dark-0));\r\n\r\n\t@mixin hover {\r\n\t\tbackground-color: light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-8));\r\n\t}\r\n}\r\n",null],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={user:"UserButton_user__XsFF1"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);