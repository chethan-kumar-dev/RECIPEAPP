(this["webpackJsonpdemo-collegeproj"]=this["webpackJsonpdemo-collegeproj"]||[]).push([[0],{11:function(e,t,c){},14:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(5),i=c.n(a),s=(c(11),c(4)),o=c.n(s),j=c(6),l=c(2),u=c(0);function b(e){var t=e.title,c=e.calories,n=e.image,r=e.ingredients;return Object(u.jsx)("div",{className:"flex-cont",children:Object(u.jsxs)("div",{className:"div-ele",children:[Object(u.jsx)("h1",{children:t}),Object(u.jsxs)("p",{children:["calories : ",c]}),Object(u.jsx)("h3",{children:"preparation"}),Object(u.jsx)("ul",{children:r.map((function(e){return Object(u.jsx)("li",{children:e.text},Math.random())}))}),Object(u.jsx)("img",{src:n,alt:""}),Object(u.jsx)("hr",{})]},c)})}c(14);var d=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(""),i=Object(l.a)(a,2),s=i[0],d=i[1],h=Object(n.useState)("chicken"),p=Object(l.a)(h,2),f=p[0],O=p[1],m="https://api.edamam.com/search?q=".concat(f,"&app_id=").concat("6f4e7a8c","&app_key=").concat("3f7991425bbeb9fcd12f1f11ae6a75fa");Object(n.useEffect)((function(){x()}),[f]);var x=function(){var e=Object(j.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(m);case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,r(c.hits);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsx)("div",{className:"form-container",children:Object(u.jsxs)("form",{className:"search-form",onSubmit:function(e){e.preventDefault(),O(s),d("")},children:[Object(u.jsx)("div",{className:"a",children:Object(u.jsxs)("div",{className:"input",children:[Object(u.jsx)("input",{type:"text",value:s,onChange:function(e){return d(e.target.value)}}),Object(u.jsx)("button",{type:"submit",children:"search"})]})}),Object(u.jsx)("h2",{style:{color:"black",textAlign:"center"},children:"RECIPE APP"}),c.map((function(e){return Object(u.jsx)(b,{title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,ingredients:e.recipe.ingredients},e.recipe.calories)}))]})})},h=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),r(e),a(e),i(e)}))};i.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(d,{})}),document.getElementById("root")),h()}},[[15,1,2]]]);
//# sourceMappingURL=main.847dfbcc.chunk.js.map