(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[210],{32070:function(){},61004:function(W,S,e){"use strict";e.r(S),e.d(S,{default:function(){return w}});var y=e(11849),x=e(90636),D=e(3182),B=e(12968),O=e(20352),I=e(28991),r=e(81253),C=e(59250),c=e(13013),l=e(57663),s=e(71577),N=e(30887),h=e(18515),M=e(84305),v=e(39559),j=e(57254),f=e(44545),E=e(94184),Z=e.n(E),o=e(67294),J=e(32070),L=["key","name"],F=function(n){var t=n.children,d=n.menus,a=n.onSelect,m=n.className,i=n.style,P=(0,o.useContext)(v.ZP.ConfigContext),u=P.getPrefixCls,K=u("pro-table-dropdown"),R=o.createElement(h.Z,{onClick:function(g){return a&&a(g.key)}},d==null?void 0:d.map(function(b){return o.createElement(h.Z.Item,{key:b.key},b.name)}));return o.createElement(c.Z,{overlay:R,className:Z()(K,m)},o.createElement(s.Z,{style:i},t," ",o.createElement(j.Z,null)))},A=function(n){var t=n.className,d=n.style,a=n.onSelect,m=n.menus,i=m===void 0?[]:m,P=n.children,u=(0,o.useContext)(v.ZP.ConfigContext),K=u.getPrefixCls,R=K("pro-table-dropdown"),b=o.createElement(h.Z,{onClick:function(U){a==null||a(U.key)},items:i.map(function(g){var U=g.key,V=g.name,k=(0,r.Z)(g,L);return(0,I.Z)((0,I.Z)({key:U},k),{},{title:k.title,label:V})})});return o.createElement(c.Z,{overlay:b,className:Z()(R,t)},o.createElement("a",{style:d},P||o.createElement(f.Z,null)))};A.Button=F;var $=A,z=e(93760),G=e(93387),p=e(85893),H=[{dataIndex:"id",valueType:"indexBorder",width:48},{title:"\u7528\u6237\u540D",dataIndex:"username",copyable:!0},{title:"\u7528\u6237\u8D26\u53F7",dataIndex:"userAccount",copyable:!0},{title:"\u5934\u50CF",dataIndex:"avatarUrl",render:function(n,t){return(0,p.jsx)("div",{children:(0,p.jsx)(O.Z,{src:t.avatarUrl,width:100})})},copyable:!0},{title:"\u6027\u522B",dataIndex:"gender"},{title:"\u7535\u8BDD",dataIndex:"phone",copyable:!0},{title:"\u90AE\u4EF6",dataIndex:"email",copyable:!0},{title:"\u72B6\u6001",dataIndex:"userStatus"},{title:"\u661F\u7403\u7F16\u7801",dataIndex:"plantCode",copyable:!0},{title:"\u89D2\u8272",dataIndex:"userRole",valueType:"select",valueEnum:{0:{text:"\u666E\u901A\u7528\u6237",status:"Default"},1:{text:"\u7BA1\u7406\u5458",status:"Success"}}},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createTime",valueType:"dateTime"},{title:"\u6807\u9898",dataIndex:"title",copyable:!0,ellipsis:!0,tooltip:"\u6807\u9898\u8FC7\u957F\u4F1A\u81EA\u52A8\u6536\u7F29",formItemProps:{rules:[{required:!0,message:"\u6B64\u9879\u4E3A\u5FC5\u586B\u9879"}]}},{title:"\u64CD\u4F5C",valueType:"option",key:"option",render:function(n,t,d,a){return[(0,p.jsx)("a",{onClick:function(){var i;a==null||(i=a.startEditable)===null||i===void 0||i.call(a,t.id)},children:"\u7F16\u8F91"},"editable"),(0,p.jsx)("a",{href:t.url,target:"_blank",rel:"noopener noreferrer",children:"\u67E5\u770B"},"view"),(0,p.jsx)($,{onSelect:function(){return a==null?void 0:a.reload()},menus:[{key:"copy",name:"\u590D\u5236"},{key:"delete",name:"\u5220\u9664"}]},"actionGroup")]}}],w=function(){var T=(0,o.useRef)();return(0,p.jsx)(z.Z,{columns:H,actionRef:T,cardBordered:!0,request:function(){var n=(0,D.Z)((0,x.Z)().mark(function t(d,a,m){var i;return(0,x.Z)().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,(0,G.pz)();case 2:return i=u.sent,u.abrupt("return",{data:i});case 4:case"end":return u.stop()}},t)}));return function(t,d,a){return n.apply(this,arguments)}}(),editable:{type:"multiple"},columnsState:{persistenceKey:"pro-table-singe-demos",persistenceType:"localStorage",defaultValue:{option:{fixed:"right",disable:!0}},onChange:function(t){console.log("value: ",t)}},rowKey:"id",search:{labelWidth:"auto"},options:{setting:{listsHeight:400}},form:{syncToUrl:function(t,d){return d==="get"?(0,y.Z)((0,y.Z)({},t),{},{created_at:[t.startTime,t.endTime]}):t}},pagination:{pageSize:5,onChange:function(t){return console.log(t)}},dateFormatter:"string",headerTitle:"\u9AD8\u7EA7\u8868\u683C"})}},34952:function(W,S,e){"use strict";var y=e(22122),x=e(15105),D=e(67294),B=function(r,C){var c={};for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&C.indexOf(l)<0&&(c[l]=r[l]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,l=Object.getOwnPropertySymbols(r);s<l.length;s++)C.indexOf(l[s])<0&&Object.prototype.propertyIsEnumerable.call(r,l[s])&&(c[l[s]]=r[l[s]]);return c},O={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},I=D.forwardRef(function(r,C){var c=function(f){var E=f.keyCode;E===x.Z.ENTER&&f.preventDefault()},l=function(f){var E=f.keyCode,Z=r.onClick;E===x.Z.ENTER&&Z&&Z()},s=r.style,N=r.noStyle,h=r.disabled,M=B(r,["style","noStyle","disabled"]),v={};return N||(v=(0,y.Z)({},O)),h&&(v.pointerEvents="none"),v=(0,y.Z)((0,y.Z)({},v),s),D.createElement("div",(0,y.Z)({role:"button",tabIndex:0,ref:C},M,{onKeyDown:c,onKeyUp:l,style:v}))});S.Z=I}}]);
