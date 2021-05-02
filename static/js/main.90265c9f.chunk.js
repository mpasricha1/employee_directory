(this.webpackJsonpemployees_app=this.webpackJsonpemployees_app||[]).push([[0],{24:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),s=a(13),r=a.n(s),l=(a(24),a(3)),i=a(14),o=a(15),j=a(18),b=a(17),d=a(0);var h=function(e){return Object(d.jsxs)("nav",{className:"navbar navbar-expand-lar navbar-dark bg-dark",children:[Object(d.jsx)("a",{className:"navbar-brand",href:"#",children:"Employee Search"}),Object(d.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbar","aria-controls":"navbar","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),Object(d.jsx)("div",{className:"collapse navbar-collapse",id:"navbar3",children:Object(d.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(d.jsx)("li",{className:"nav-item active",children:Object(d.jsxs)("a",{className:"nav-link",href:"#",children:["Home ",Object(d.jsx)("span",{class:"sr-only",children:"(current)"})]})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)("a",{className:"nav-link",href:"#",children:"Link"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)("a",{className:"nav-link disabled",href:"#",children:"Disabled"})})]})})]})},u=a(19);var m=function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:Object(d.jsx)("img",{src:e.picture.thumbnail})}),Object(d.jsx)("td",{children:e.name.first}),Object(d.jsx)("td",{children:e.name.last}),Object(d.jsx)("td",{children:e.location.city}),Object(d.jsx)("td",{children:e.location.state})]})};var p=function(e){return Object(d.jsxs)("table",{className:"table",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{scope:"col"}),Object(d.jsx)("th",{scope:"col",children:"First name"}),Object(d.jsx)("th",{scope:"col",children:"Last Name"}),Object(d.jsx)("th",{scope:"col",children:"City"}),Object(d.jsx)("th",{scope:"col",children:"State"})]})}),Object(d.jsx)("tbody",{children:e.data.map((function(e){return Object(d.jsx)(m,Object(u.a)({},e),e.login.uuid)}))})]})};var O=function(e){return Object(d.jsx)("form",{id:"searchForm",style:{maxWidth:"400px",margin:"10px auto"},children:Object(d.jsxs)("div",{className:"input-group mb-3",children:[Object(d.jsx)("input",{type:"text",className:"form-control",placeholder:"Employee Name",onChange:e.handleInputChange}),Object(d.jsx)("div",{className:"input-group-append",children:Object(d.jsx)("button",{className:"btn btn-dark",type:"submit",onClick:e.handleSubmit,children:"Search"})})]})})};var x=function(e){return Object(d.jsxs)("div",{className:"btn-group",role:"group",children:[Object(d.jsx)("button",{type:"button",className:"btn btn-dark",onClick:function(){return e.handleSort("first",1)},children:"First Name"}),Object(d.jsx)("button",{type:"button",className:"btn btn-dark",onClick:function(){return e.handleSort("last",1)},children:"Last Name"})]})},v=a(16),f=a.n(v),g={getEmployees:function(){return f.a.get("https://randomuser.me/api/?results=20&nat=us")}},y=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={employees:[],searchedName:""},e.getRandomEmployees=function(){g.getEmployees().then((function(t){var a=Object(l.a)(t.data.results);e.setState({employees:a}),console.log(a)}))},e.handleSort=function(){var t=Object(l.a)(e.state.employees);console.log(t)},e.handleSubmit=function(t){t.preventDefault();var a=e.state.searchedName.split(" ");e.setState({employees:e.state.employees.filter((function(e){return e.name.first===a[0]&&e.name.last===a[1]}))})},e.handleInputChange=function(t){var a=t.target.value;e.setState({searchedName:a})},e.handleSort=function(t,a){var n=Object(l.a)(e.state.employees);n.sort((function(e,n){return e.name[t]>n.name[t]?1*a:-1*a})),e.setState({employees:n})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.getRandomEmployees()}},{key:"render",value:function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(h,{}),Object(d.jsx)(O,{handleSubmit:this.handleSubmit,handleInputChange:this.handleInputChange}),Object(d.jsx)(x,{handleSort:this.handleSort}),Object(d.jsx)(p,{data:this.state.employees})]})}}]),a}(c.a.Component),N=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,46)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};a(44);r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(y,{})}),document.getElementById("root")),N()}},[[45,1,2]]]);
//# sourceMappingURL=main.90265c9f.chunk.js.map