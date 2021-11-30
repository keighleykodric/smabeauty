import{jsx as _jsx,jsxs as _jsxs}from"react/jsx-runtime";// Generated by Framer (cbd47d7)
import*as React from"react";import{motion,LayoutGroup}from"framer-motion";import{useActiveVariantCallback,addFonts,withCSS,addPropertyControls,ControlType,cx,useAddVariantProps,useVariantState,Text,getFonts,Stack,getPropertyControls}from"framer";import{useRandomID}from"https://framer.com/m/framer/randomID.js@^2.0.0";import Loader from"https://framerusercontent.com/modules/qBxKD1EFu6R3qZGP2E2g/HHIKbLcdPpfDNqe0J3NR/QGK0rhsMW.js";import{Icon as Phosphor}from"https://framerusercontent.com/modules/tYScH7LTqUtz5KUaUAYP/PHaFTtd03PsDa8045nJF/Phosphor.js";const LoaderFonts=getFonts(Loader);const PhosphorFonts=getFonts(Phosphor);const PhosphorControls=getPropertyControls(Phosphor);const enabledGestures={"Z202wBJyw":{"hover":true,"pressed":true},"dm0huJTXf":{"hover":true},"riWAYfCSJ":{"hover":true},"SZf2cvmyq":{"hover":true},"LZCwtCujF":{"hover":true},"TDwR8BSc2":{"hover":true},"rsaffz8LU":{"hover":true},"n9Ir609RL":{"hover":true}};const cycleOrder=["Z202wBJyw","dm0huJTXf","riWAYfCSJ","SZf2cvmyq","LZCwtCujF","TDwR8BSc2","rsaffz8LU","n9Ir609RL"];const variantClassNames={"Z202wBJyw":"framer-v-71m7ho","LZCwtCujF":"framer-v-1j4xbh5","dm0huJTXf":"framer-v-apz9md","riWAYfCSJ":"framer-v-nefr5l","SZf2cvmyq":"framer-v-1s5p28","TDwR8BSc2":"framer-v-dhh5gs","rsaffz8LU":"framer-v-1qjn8cy","n9Ir609RL":"framer-v-1869hz1"};const humanReadableVariantMap={"Primary":"Z202wBJyw","Secondary":"dm0huJTXf","Danger":"riWAYfCSJ","Success":"SZf2cvmyq","Text-Primary":"LZCwtCujF","Text-Default":"TDwR8BSc2","Text-Danger":"rsaffz8LU","Text-Success":"n9Ir609RL"};const transitions={"default":{"type":"spring","ease":[0.44,0,0.56,1],"duration":0.3,"delay":0,"stiffness":500,"damping":60,"mass":1}};const Component=/*#__PURE__*/ React.forwardRef(function({style,className,layoutId,width,height,variant:outerVariant="Z202wBJyw",label:L6_4cFcKR="Button",showIcon:JXvRUpVIA=false,showLabel:l2LfTxlJd=true,click:HZiqUG43w,icon:iwgrg0nOn="Plus",...restProps},ref){const outerVariantId=humanReadableVariantMap[outerVariant];const variant=outerVariantId||outerVariant;const{variants,baseVariant,gestureVariant,classNames,transition,setVariant,setGestureState}=useVariantState({defaultVariant:"Z202wBJyw",variant,transitions,variantClassNames,enabledGestures,cycleOrder});const{activeVariantCallback,delay}=useActiveVariantCallback(baseVariant);const onTap71m7ho=activeVariantCallback(async(...args)=>{if(HZiqUG43w){const res=await HZiqUG43w(...args);if(res===false)return false;}});const variantProps=React.useMemo(()=>({"LZCwtCujF":{"Z202wBJyw":{"data-framer-name":"Text-Primary"},"qCJkG_38K":{"color":"rgb(255, 68, 92)","iconSelection":iwgrg0nOn},"tH9Yw2Aqj":{"rawHTML":"<div style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><div style='--framer-line-height: 1em; direction: ltr; font-size: 0'><span style='--framer-letter-spacing: 0px'>Button</span><br></div></div>","fonts":["GF;Exo 2-800"]}},"Z202wBJyw-hover":{"qCJkG_38K":{"iconSelection":iwgrg0nOn},"tH9Yw2Aqj":{"rawHTML":"<div style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><div style='--framer-line-height: 1em; direction: ltr; font-size: 0'><span style='--framer-letter-spacing: 0px; --framer-text-color: hsl(0, 0%, 100%)'>Button</span><br></div></div>","fonts":["GF;Exo 2-700"]},"Ji5YTq8iq":{"color":"rgb(255, 170, 0)"}},"dm0huJTXf":{"Z202wBJyw":{"data-framer-name":"Secondary","__contentWrapperStyle":{"width":"auto","height":"100%","padding":"8px 16px 8px 16px"}},"qCJkG_38K":{"color":"var(--token-a5be4ccb-08a1-4460-bb8b-40a4ce5f1127, rgb(30, 41, 58)) /* {\"name\":\"Black\"} */","iconSelection":iwgrg0nOn},"tH9Yw2Aqj":{"rawHTML":"<div style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><div style='--framer-line-height: 1em; direction: ltr; font-size: 0'><span style='--framer-letter-spacing: 0px; --framer-text-color: var(--token-a5be4ccb-08a1-4460-bb8b-40a4ce5f1127, rgb(30, 41, 58)) /* {&quot;name&quot;:&quot;Black&quot;} */'>Button</span><br></div></div>","fonts":["GF;Exo 2-700"]}},"dm0huJTXf-hover":{"qCJkG_38K":{"iconSelection":iwgrg0nOn},"tH9Yw2Aqj":{"rawHTML":"<div style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><div style='--framer-line-height: 1em; direction: ltr; font-size: 0'><span style='--framer-letter-spacing: 0px; --framer-text-color: var(--token-a5be4ccb-08a1-4460-bb8b-40a4ce5f1127, rgb(30, 41, 58)) /* {&quot;name&quot;:&quot;Black&quot;} */'>Button</span><br></div></div>","fonts":["GF;Exo 2-700"]}},"riWAYfCSJ":{"Z202wBJyw":{"data-framer-name":"Danger"},"qCJkG_38K":{"iconSelection":iwgrg0nOn}},"SZf2cvmyq":{"Z202wBJyw":{"data-framer-name":"Success"},"qCJkG_38K":{"iconSelection":iwgrg0nOn}},"riWAYfCSJ-hover":{"qCJkG_38K":{"iconSelection":iwgrg0nOn}},"SZf2cvmyq-hover":{"qCJkG_38K":{"iconSelection":iwgrg0nOn}},"LZCwtCujF-hover":{"qCJkG_38K":{"iconSelection":iwgrg0nOn},"tH9Yw2Aqj":{"rawHTML":"<div style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><div style='--framer-line-height: 1em; direction: ltr; font-size: 0'><span style='--framer-letter-spacing: 0px'>Button</span><br></div></div>","fonts":["GF;Exo 2-800"]}},"TDwR8BSc2":{"Z202wBJyw":{"center":false,"data-framer-name":"Text-Default","__contentWrapperStyle":{"width":"auto","height":"100%","padding":"8px 16px 8px 16px"}},"qCJkG_38K":{"color":"var(--token-1ef6a791-8d8b-4528-8e93-664d3d41aff9, rgb(130, 148, 166)) /* {\"name\":\"Grey_500\"} */","iconSelection":iwgrg0nOn},"tH9Yw2Aqj":{"rawHTML":"<div style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><div style='--framer-line-height: 1em; direction: ltr; font-size: 0'><span style='--framer-letter-spacing: 0px; --framer-text-color: var(--token-1ef6a791-8d8b-4528-8e93-664d3d41aff9, rgb(130, 148, 166)) /* {&quot;name&quot;:&quot;Grey_500&quot;} */'>Button</span><br></div></div>","fonts":["GF;Exo 2-800"]}},"TDwR8BSc2-hover":{"qCJkG_38K":{"color":"var(--token-5b919493-3ea9-4319-acae-3669b7155241, rgb(97, 117, 137)) /* {\"name\":\"Grey_600\"} */","iconSelection":iwgrg0nOn},"tH9Yw2Aqj":{"rawHTML":"<div style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><div style='--framer-line-height: 1em; direction: ltr; font-size: 0'><span style='--framer-letter-spacing: 0px; --framer-text-color: var(--token-5b919493-3ea9-4319-acae-3669b7155241, rgb(97, 117, 137)) /* {&quot;name&quot;:&quot;Grey_600&quot;} */'>Button</span><br></div></div>","fonts":["GF;Exo 2-800"]}},"rsaffz8LU":{"Z202wBJyw":{"center":false,"data-framer-name":"Text-Danger","__contentWrapperStyle":{"width":"auto","height":"100%","padding":"8px 16px 8px 16px"}},"qCJkG_38K":{"color":"var(--token-33a2aa2a-5295-4337-b07a-956762618711, rgb(221, 49, 49)) /* {\"name\":\"Danger\"} */","iconSelection":iwgrg0nOn},"tH9Yw2Aqj":{"rawHTML":"<div style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><div style='--framer-line-height: 1em; direction: ltr; font-size: 0'><span style='--framer-letter-spacing: 0px; --framer-text-color: var(--token-33a2aa2a-5295-4337-b07a-956762618711, rgb(221, 49, 49)) /* {&quot;name&quot;:&quot;Danger&quot;} */'>Button</span><br></div></div>","fonts":["GF;Exo 2-800"]}},"rsaffz8LU-hover":{"qCJkG_38K":{"color":"var(--token-796a6211-e707-4630-8307-1a18b7a634a0, rgb(189, 31, 31)) /* {\"name\":\"Danger Dark\"} */","iconSelection":iwgrg0nOn},"tH9Yw2Aqj":{"rawHTML":"<div style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><div style='--framer-line-height: 1em; direction: ltr; font-size: 0'><span style='--framer-letter-spacing: 0px; --framer-text-color: var(--token-796a6211-e707-4630-8307-1a18b7a634a0, rgb(189, 31, 31)) /* {&quot;name&quot;:&quot;Danger Dark&quot;} */'>Button</span><br></div></div>","fonts":["GF;Exo 2-800"]}},"n9Ir609RL":{"Z202wBJyw":{"data-framer-name":"Text-Success"},"qCJkG_38K":{"color":"var(--token-a0c1245b-705d-4873-b552-e28d3d58655f, rgb(51, 165, 39)) /* {\"name\":\"Green_500\"} */","iconSelection":iwgrg0nOn},"tH9Yw2Aqj":{"rawHTML":"<div style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><div style='--framer-line-height: 1em; direction: ltr; font-size: 0'><span style='--framer-letter-spacing: 0px; --framer-text-color: var(--token-a0c1245b-705d-4873-b552-e28d3d58655f, rgb(51, 165, 39)) /* {&quot;name&quot;:&quot;Green_500&quot;} */'>Button</span><br></div></div>","fonts":["GF;Exo 2-800"]}},"n9Ir609RL-hover":{"qCJkG_38K":{"color":"var(--token-f607715a-fe0f-478c-9158-71efc6e166c4, rgb(25, 132, 16)) /* {\"name\":\"Green_600\"} */","iconSelection":iwgrg0nOn},"tH9Yw2Aqj":{"rawHTML":"<div style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><div style='--framer-line-height: 1em; direction: ltr; font-size: 0'><span style='--framer-letter-spacing: 0px; --framer-text-color: var(--token-f607715a-fe0f-478c-9158-71efc6e166c4, rgb(25, 132, 16)) /* {&quot;name&quot;:&quot;Green_600&quot;} */'>Button</span><br></div></div>","fonts":["GF;Exo 2-800"]}},"Z202wBJyw-pressed":{"Z202wBJyw":{"isBreakpoint":false},"qCJkG_38K":{"iconSelection":iwgrg0nOn},"tH9Yw2Aqj":{"rawHTML":"<div style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><div style='--framer-line-height: 1em; direction: ltr; font-size: 0'><span style='--framer-letter-spacing: 0px; --framer-text-color: hsl(0, 0%, 100%)'>Button</span><br></div></div>","fonts":["GF;Exo 2-700"]},"Ji5YTq8iq":{"color":"rgb(255, 170, 0)"}}}),[iwgrg0nOn]);const addVariantProps=useAddVariantProps(baseVariant,gestureVariant,variantProps);const defaultLayoutId=useRandomID();return(/*#__PURE__*/ _jsx(LayoutGroup,{id:layoutId!==null&&layoutId!==void 0?layoutId:defaultLayoutId,children:/*#__PURE__*/ _jsx(motion.div,{initial:variant,animate:variants,onHoverStart:()=>setGestureState({isHovered:true}),onHoverEnd:()=>setGestureState({isHovered:false}),onTapStart:()=>setGestureState({isPressed:true}),onTap:()=>setGestureState({isPressed:false}),onTapCancel:()=>setGestureState({isPressed:false}),className:cx("framer-dTaRj",classNames),style:{"display":"contents","pointerEvents":"auto"},children:/*#__PURE__*/ _jsxs(Stack,{...restProps,layoutId:"Z202wBJyw",className:cx("framer-71m7ho",className),style:{"borderBottomLeftRadius":12,"borderBottomRightRadius":12,"borderTopRightRadius":12,"borderTopLeftRadius":12,"backgroundColor":"rgb(255, 68, 92)","WebkitFilter":"none","filter":"none","boxShadow":"none",...style},direction:"horizontal",distribution:"center",alignment:"center",gap:4,__fromCanvasComponent:true,__contentWrapperStyle:{"width":"auto","height":"100%","padding":"8px 16px 8px 16px"},center:false,"data-highlight":true,"data-framer-name":"Primary",onTap:onTap71m7ho,variants:{"LZCwtCujF":{"backgroundColor":"var(--token-55b8c0b7-bc63-486b-9628-e67750c41df3, rgb(255, 255, 255))","WebkitFilter":"brightness(1)","filter":"brightness(1)","boxShadow":"none"},"Z202wBJyw-hover":{"backgroundColor":"rgb(237, 64, 87)","WebkitFilter":"none","filter":"none","boxShadow":"none"},"dm0huJTXf":{"backgroundColor":"var(--token-5793f11f-8eba-4298-ac92-d240eb282da4, rgb(225, 230, 235))"},"dm0huJTXf-hover":{"WebkitFilter":"none","filter":"none","boxShadow":"none","backgroundColor":"var(--token-256a6d26-f909-4a89-85d2-321c66f811f3, rgb(202, 211, 221))"},"riWAYfCSJ":{"backgroundColor":"var(--token-33a2aa2a-5295-4337-b07a-956762618711, rgb(221, 49, 49))"},"SZf2cvmyq":{"backgroundColor":"var(--token-a0c1245b-705d-4873-b552-e28d3d58655f, rgb(51, 165, 39))"},"riWAYfCSJ-hover":{"WebkitFilter":"none","filter":"none","boxShadow":"none"},"SZf2cvmyq-hover":{"WebkitFilter":"none","filter":"none","boxShadow":"none"},"LZCwtCujF-hover":{"backgroundColor":"rgba(255, 68, 92, 0.1)"},"TDwR8BSc2":{"backgroundColor":"rgba(255, 255, 255, 0)","WebkitFilter":"brightness(1)","filter":"brightness(1)","boxShadow":"none"},"TDwR8BSc2-hover":{"backgroundColor":"rgb(225, 230, 235)"},"rsaffz8LU":{"backgroundColor":"rgba(255, 255, 255, 0)","WebkitFilter":"brightness(1)","filter":"brightness(1)","boxShadow":"none"},"rsaffz8LU-hover":{"backgroundColor":"var(--token-5235c46d-a61d-4eb3-b119-40c7aa1d8c4d, rgb(255, 209, 209))"},"n9Ir609RL":{"backgroundColor":"rgba(255, 255, 255, 0)","WebkitFilter":"brightness(1)","filter":"brightness(1)","boxShadow":"none"},"n9Ir609RL-hover":{"backgroundColor":"var(--token-dd2222b9-ae78-4580-9a72-e43c5a069d2e, rgb(199, 244, 190))"},"Z202wBJyw-pressed":{"backgroundColor":"rgb(216, 59, 80)","WebkitFilter":"none","filter":"none","boxShadow":"none"}},transition:transition,ref:ref,...addVariantProps("Z202wBJyw"),children:[JXvRUpVIA&&/*#__PURE__*/ _jsx(motion.div,{style:{},layoutId:"qCJkG_38K-container",className:"framer-13gj25s-container",transition:transition,...addVariantProps("qCJkG_38K-container"),children:/*#__PURE__*/ _jsx(Phosphor,{width:"100%",height:"100%",layoutId:"qCJkG_38K",id:"qCJkG_38K",selectByList:true,iconSelection:iwgrg0nOn,iconSearch:"Home",color:"rgb(255, 255, 255)",weight:"bold",mirrored:false,style:{"width":"100%","height":"100%"},transition:transition,...addVariantProps("qCJkG_38K")})}),l2LfTxlJd&&/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Exo 2\", serif","--framer-font-style":"normal","--framer-font-weight":800,"--framer-text-color":"rgb(255, 255, 255)","--framer-font-size":"20px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1em","--framer-text-alignment":"start","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["GF;Exo 2-800"],layoutId:"tH9Yw2Aqj",className:"framer-150fs6f",rawHTML:"<div style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><div style='direction: ltr; font-size: 0'><span style=''>Button</span><br></div></div>",text:L6_4cFcKR,variants:{"LZCwtCujF":{"--framer-font-family":"\"Exo 2\", serif","--framer-font-style":"normal","--framer-font-weight":800,"--framer-font-size":"20px","--framer-text-color":"rgb(255, 68, 92)"},"Z202wBJyw-hover":{"--framer-font-family":"\"Exo 2\", serif","--framer-font-style":"normal","--framer-font-weight":700},"dm0huJTXf":{"--framer-font-family":"\"Exo 2\", serif","--framer-font-style":"normal","--framer-font-weight":700,"--framer-font-size":"20px"},"dm0huJTXf-hover":{"--framer-font-family":"\"Exo 2\", serif","--framer-font-style":"normal","--framer-font-weight":700},"riWAYfCSJ":{"--framer-font-size":"20px"},"SZf2cvmyq":{"--framer-font-size":"20px"},"LZCwtCujF-hover":{"--framer-font-family":"\"Exo 2\", serif","--framer-font-style":"normal","--framer-font-weight":800},"TDwR8BSc2":{"--framer-font-family":"\"Exo 2\", serif","--framer-font-style":"normal","--framer-font-weight":800,"--framer-font-size":"20px"},"TDwR8BSc2-hover":{"--framer-font-family":"\"Exo 2\", serif","--framer-font-style":"normal","--framer-font-weight":800},"rsaffz8LU":{"--framer-font-family":"\"Exo 2\", serif","--framer-font-style":"normal","--framer-font-weight":800,"--framer-font-size":"20px"},"rsaffz8LU-hover":{"--framer-font-family":"\"Exo 2\", serif","--framer-font-style":"normal","--framer-font-weight":800},"n9Ir609RL":{"--framer-font-family":"\"Exo 2\", serif","--framer-font-style":"normal","--framer-font-weight":800,"--framer-font-size":"20px"},"n9Ir609RL-hover":{"--framer-font-family":"\"Exo 2\", serif","--framer-font-style":"normal","--framer-font-weight":800},"Z202wBJyw-pressed":{"--framer-font-family":"\"Exo 2\", serif","--framer-font-style":"normal","--framer-font-weight":700}},transition:transition,...addVariantProps("tH9Yw2Aqj")})]})})}));});const css=[".framer-dTaRj [data-border=\"true\"]::after { content: \"\"; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none;}",".framer-dTaRj * { box-sizing: border-box; }",".framer-dTaRj .framer-71m7ho { position: relative; cursor: pointer; overflow: visible; width: min-content; height: 48px; }",".framer-dTaRj .framer-13gj25s-container { position: relative; width: 16px; flex: none; aspect-ratio: 1 / 1; }",".framer-dTaRj .framer-150fs6f { position: relative; overflow: visible; width: auto; height: auto; flex: none; white-space: pre; }",".framer-dTaRj .framer-1o7fsbd-container { position: relative; width: 26px; height: 10px; flex: none; }",".framer-dTaRj.framer-v-71m7ho .framer-71m7ho, .framer-dTaRj.framer-v-apz9md .framer-71m7ho, .framer-dTaRj.framer-v-nefr5l .framer-71m7ho, .framer-dTaRj.framer-v-1s5p28 .framer-71m7ho, .framer-dTaRj.framer-v-1j4xbh5 .framer-71m7ho, .framer-dTaRj.framer-v-dhh5gs .framer-71m7ho, .framer-dTaRj.framer-v-1qjn8cy .framer-71m7ho, .framer-dTaRj.framer-v-1869hz1 .framer-71m7ho, .framer-dTaRj.framer-v-71m7ho .framer-71m7ho { cursor: pointer; }",".framer-dTaRj.framer-v-dhh5gs .framer-71m7ho, .framer-dTaRj.framer-v-1qjn8cy .framer-71m7ho { width: min-content; height: 48px; }"];/**
 * This is a generated Framer component.
 * @framerIntrinsicHeight 48
 * @framerIntrinsicWidth 98
 * @framerCanvasComponentVariantDetails {"propertyName": "variant", "data": {"default": {"layout": ["auto", "fixed"]}, "LZCwtCujF": {"layout": ["auto", "fixed"]}, "nz6W2M9nE": {"layout": ["auto", "fixed"]}, "dm0huJTXf": {"layout": ["auto", "fixed"]}, "vaRv7b2WD": {"layout": ["auto", "fixed"]}, "riWAYfCSJ": {"layout": ["auto", "fixed"]}, "SZf2cvmyq": {"layout": ["auto", "fixed"]}, "DuRQgXaCc": {"layout": ["auto", "fixed"]}, "wkhhmF4mK": {"layout": ["auto", "fixed"]}, "rN1Uso9NA": {"layout": ["auto", "fixed"]}, "TDwR8BSc2": {"layout": ["auto", "fixed"]}, "PTmC2MK0w": {"layout": ["auto", "fixed"]}, "rsaffz8LU": {"layout": ["auto", "fixed"]}, "O1wFEhjRF": {"layout": ["auto", "fixed"]}, "n9Ir609RL": {"layout": ["auto", "fixed"]}, "tgq3WmbA7": {"layout": ["auto", "fixed"]}, "aJsPVCwjP": {"layout": ["auto", "fixed"]}}}
 * @framerVariables {"L6_4cFcKR": "label", "JXvRUpVIA": "showIcon", "l2LfTxlJd": "showLabel", "HZiqUG43w": "click", "iwgrg0nOn": "icon"}
 */ const FramerIA3hopLpm=withCSS(Component,css);export default FramerIA3hopLpm;FramerIA3hopLpm.displayName="Button";FramerIA3hopLpm.defaultProps={"width":98,"height":48};addPropertyControls(FramerIA3hopLpm,{"variant":{"type":ControlType.Enum,"title":"Variant","options":["Z202wBJyw","dm0huJTXf","riWAYfCSJ","SZf2cvmyq","LZCwtCujF","TDwR8BSc2","rsaffz8LU","n9Ir609RL"],"optionTitles":["Primary","Secondary","Danger","Success","Text-Primary","Text-Default","Text-Danger","Text-Success"]},"L6_4cFcKR":{"type":ControlType.String,"title":"Label","defaultValue":"Button"},"JXvRUpVIA":{"type":ControlType.Boolean,"title":"Show Icon","defaultValue":false},"l2LfTxlJd":{"type":ControlType.Boolean,"title":"Show Label","defaultValue":true},"HZiqUG43w":{"type":ControlType.EventHandler,"title":"Click"},"iwgrg0nOn":(PhosphorControls===null||PhosphorControls===void 0?void 0:PhosphorControls["iconSelection"])&&{...PhosphorControls["iconSelection"],"hidden":undefined,"title":"Icon","defaultValue":"Plus"}});addFonts(FramerIA3hopLpm,[{"url":"https://fonts.gstatic.com/s/exo2/v15/7cH1v4okm5zmbvwkAx_sfcEuiD8jPvWcPtq-rpvLpQ.ttf","family":"Exo 2","style":"normal","weight":"800","moduleAsset":{"url":"https://fonts.gstatic.com/s/exo2/v15/7cH1v4okm5zmbvwkAx_sfcEuiD8jPvWcPtq-rpvLpQ.ttf","localModuleIdentifier":"local-module:canvasComponent/IA3hopLpm:default"}},...LoaderFonts,...PhosphorFonts]);
export const __FramerMetadata__ = {"exports":{"default":{"type":"reactComponent","name":"FramerIA3hopLpm","slots":[],"annotations":{"framerCanvasComponentVariantDetails":"{\"propertyName\": \"variant\", \"data\": {\"default\": {\"layout\": [\"auto\", \"fixed\"]}, \"LZCwtCujF\": {\"layout\": [\"auto\", \"fixed\"]}, \"nz6W2M9nE\": {\"layout\": [\"auto\", \"fixed\"]}, \"dm0huJTXf\": {\"layout\": [\"auto\", \"fixed\"]}, \"vaRv7b2WD\": {\"layout\": [\"auto\", \"fixed\"]}, \"riWAYfCSJ\": {\"layout\": [\"auto\", \"fixed\"]}, \"SZf2cvmyq\": {\"layout\": [\"auto\", \"fixed\"]}, \"DuRQgXaCc\": {\"layout\": [\"auto\", \"fixed\"]}, \"wkhhmF4mK\": {\"layout\": [\"auto\", \"fixed\"]}, \"rN1Uso9NA\": {\"layout\": [\"auto\", \"fixed\"]}, \"TDwR8BSc2\": {\"layout\": [\"auto\", \"fixed\"]}, \"PTmC2MK0w\": {\"layout\": [\"auto\", \"fixed\"]}, \"rsaffz8LU\": {\"layout\": [\"auto\", \"fixed\"]}, \"O1wFEhjRF\": {\"layout\": [\"auto\", \"fixed\"]}, \"n9Ir609RL\": {\"layout\": [\"auto\", \"fixed\"]}, \"tgq3WmbA7\": {\"layout\": [\"auto\", \"fixed\"]}, \"aJsPVCwjP\": {\"layout\": [\"auto\", \"fixed\"]}}}","framerVariables":"{\"L6_4cFcKR\": \"label\", \"JXvRUpVIA\": \"showIcon\", \"l2LfTxlJd\": \"showLabel\", \"HZiqUG43w\": \"click\", \"iwgrg0nOn\": \"icon\"}","framerIntrinsicHeight":"48","framerIntrinsicWidth":"98","framerContractVersion":"1"}},"Props":{"type":"tsType","annotations":{"framerContractVersion":"1"}},"__FramerMetadata__":{"type":"variable"}}}
//# sourceMappingURL=./IA3hopLpm.map