(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{29:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),o=n(12),i=n.n(o),a=n(3),s=n(13),d=n(2),l=n(7),b=n.n(l),j=n(31),u=n(5),m=n(0),p=function(e){var t=e.agregarTodo,n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(r.useState)(e),n=Object(d.a)(t,2),c=n[0],o=n[1];return[c,function(e){var t=e.target,n=t.name,r=t.value,c=t.checked,i=t.type;o((function(e){return Object(a.a)(Object(a.a)({},e),{},Object(u.a)({},n,"checkbox"===i?c:r))}))},function(){o(e)}]}({nombre:"",descripcion:"",estado:"pendiente",prioridad:!1}),c=Object(d.a)(n,3),o=c[0],i=c[1],s=c[2],l=o.nombre,p=o.descripcion,f=o.estado,O=o.prioridad;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h3",{children:"Agregar TODO"}),Object(m.jsxs)("form",{onSubmit:function(e){return e.preventDefault(),l.trim()?p.trim()?(b.a.fire({title:"\xc9xito!",text:"Tarea agregada",icon:"success"}),t({nombre:l,descripcion:p,estado:"pendiente"!==f,prioridad:O,id:Object(j.a)()}),void s()):(e.target[1].focus(),void b.a.fire({title:"Error!",text:"No puede dejar la descripci\xf3n en blanco",icon:"error"})):(e.target[0].focus(),void b.a.fire({title:"Error!",text:"No puede dejar nombre en blanco",icon:"error"}))},children:[Object(m.jsx)("input",{type:"text",className:"form-control mb-2",name:"nombre",placeholder:"ingrese todo nombre",value:l,onChange:i}),Object(m.jsx)("textarea",{className:"form-control mb-2",name:"descripcion",placeholder:"ingrese descripcion",value:p,onChange:i}),Object(m.jsxs)("select",{name:"estado",className:"form-control mb-2",value:f,onChange:i,children:[Object(m.jsx)("option",{value:"pendiente",children:"pendiente"}),Object(m.jsx)("option",{value:"completado",children:"completado"})]}),Object(m.jsxs)("div",{className:"form-check",children:[Object(m.jsx)("input",{id:"flexCheckDefault",className:"form-check-input",type:"checkbox",name:"prioridad",checked:O,onChange:i}),Object(m.jsx)("label",{className:"form-check-label",htmlFor:"flexCheckDefault",children:"Prioritario"})]}),Object(m.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Agregar"})]})]})},f=function(e){var t=e.todo,n=e.eliminarTodo,r=e.editarTodo,c=t.id,o=t.nombre,i=t.descripcion,a=t.estado,s=t.prioridad;return Object(m.jsxs)("li",{className:"list-group-item d-flex justify-content-between align-items-start",children:[Object(m.jsxs)("div",{className:"ms-2 me-auto",children:[Object(m.jsxs)("div",{className:"fw-bold",children:[o," ( ",a?"Finalizado":"Pendiente"," )"]}),Object(m.jsx)("p",{children:i}),Object(m.jsxs)("div",{children:[Object(m.jsx)("button",{className:"btn btn-danger me-2",onClick:function(){return n(c)},children:"Eliminar"}),Object(m.jsx)("button",{className:"btn btn-warning",onClick:function(){return r(c)},children:"Editar"})]})]}),Object(m.jsx)("span",{className:"badge bg-primary rounded-pill",children:s&&"Prioritario"})]})},O=function(){var e=Object(r.useState)([]),t=Object(d.a)(e,2),n=t[0],c=t[1];Object(r.useEffect)((function(){localStorage.getItem("todos")&&c(JSON.parse(localStorage.getItem("todos")))}),[]),Object(r.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(n))}),[n]);var o=function(e){c((function(t){return t.filter((function(t){return t.id!==e}))}))},i=function(e){var t=n.map((function(t){return t.id===e?Object(a.a)(Object(a.a)({},t),{},{estado:!t.estado}):t}));c(t)};return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(p,{agregarTodo:function(e){console.log(e),c((function(t){return[].concat(Object(s.a)(t),[e])}))}}),Object(m.jsx)("ul",{className:"list-group list-group-numbered mt-2",children:n.map((function(e){return Object(m.jsx)(f,{todo:e,eliminarTodo:o,editarTodo:i},e.id)}))})]})},h=function(){return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("h1",{children:"App"}),Object(m.jsx)(O,{})]})};i.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(h,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.ba34b2e3.chunk.js.map