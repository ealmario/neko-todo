(this["webpackJsonpneko-todo"]=this["webpackJsonpneko-todo"]||[]).push([[0],{10:function(e,t,a){e.exports={wrapper:"Todo_wrapper__FC4F3",btnContainer:"Todo_btnContainer__2lB5i",edit:"Todo_edit__1JzZq",checkbox:"Todo_checkbox__1ezkK",taskContainer:"Todo_taskContainer__1oO58",todoItem:"Todo_todoItem__1JXTo",saveBtn:"Todo_saveBtn__29k6U"}},12:function(e,t,a){e.exports={form:"NewTodo_form__274sp",inpContainer:"NewTodo_inpContainer__3nMF5",input:"NewTodo_input__3MFZc"}},18:function(e,t,a){e.exports={archivedWrapper:"ArchivedTodo_archivedWrapper__2C7Ug",archivedTodoItem:"ArchivedTodo_archivedTodoItem__1umbJ"}},2:function(e,t,a){e.exports={mainContainer:"TodoList_mainContainer__16JAv",tlContainer:"TodoList_tlContainer__2_dQW",tlWindow:"TodoList_tlWindow__y08Js",title:"TodoList_title__RM7Q1",tlWindowList:"TodoList_tlWindowList__1yQQ0",badge:"TodoList_badge__2Yg85",selected:"TodoList_selected__mmlNw",tlTasksContainer:"TodoList_tlTasksContainer__1BPIJ",tlTasks:"TodoList_tlTasks__1GuwW",tlList:"TodoList_tlList__23KEZ",tlCompleted:"TodoList_tlCompleted__1EbO2",emptyText:"TodoList_emptyText__2eJsD",border:"TodoList_border__1EM5n"}},20:function(e,t,a){e.exports={footer:"Footer_footer__miWNG"}},27:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a(4),i=a.n(s),o=a(19),c=a.n(o),d=(a(27),a(9)),l=a(21),r=a(5),h=a(6),j=a(3),b=a(8),u=a(7),O=a(20),p=a.n(O),m=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return Object(n.jsx)("footer",{className:p.a.footer,children:Object(n.jsx)("p",{children:"\xa9 Eli Almario 2020"})})}}]),a}(s.Component),v=a(11),x=a(13),_=a(14),k=a(10),f=a.n(k),T=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={wouldEdit:!1,task:n.props.task},n.toggleEdit=n.toggleEdit.bind(Object(j.a)(n)),n.handleArchive=n.handleArchive.bind(Object(j.a)(n)),n.handleDelete=n.handleDelete.bind(Object(j.a)(n)),n.handleUpdate=n.handleUpdate.bind(Object(j.a)(n)),n.handleChange=n.handleChange.bind(Object(j.a)(n)),n}return Object(h.a)(a,[{key:"toggleEdit",value:function(){this.setState((function(e){return{wouldEdit:!e.wouldEdit}}))}},{key:"handleArchive",value:function(){var e=this.props;(0,e.archiveTodo)(e.todo.id)}},{key:"handleDelete",value:function(){var e=this.props;(0,e.deleteTodo)(e.todo.id)}},{key:"handleUpdate",value:function(e){var t=this.props,a=t.updateTodo,n=t.todo;e.preventDefault(),a(n.id,this.state.task),this.setState({wouldEdit:!1})}},{key:"handleChange",value:function(e){this.setState(Object(v.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this.props.todo,t=this.state,a=t.wouldEdit,s=t.task;return Object(n.jsxs)("li",{className:"".concat(f.a.wrapper," ").concat(a?f.a.edit:""),children:[Object(n.jsxs)("div",{className:f.a.taskContainer,children:[Object(n.jsx)("div",{className:f.a.checkbox,onClick:this.handleArchive,children:Object(n.jsx)("input",{type:"checkbox",className:f.a.checkbox,onClick:this.handleArchive})}),a?Object(n.jsxs)("form",{onSubmit:this.handleUpdate,children:[Object(n.jsx)("input",{type:"text",id:"task",name:"task",placeholder:e.task,value:s,onChange:this.handleChange,className:f.a.todoItem,required:!0}),Object(n.jsx)("button",{className:f.a.saveBtn,children:Object(n.jsx)(x.a,{icon:_.a})})]}):Object(n.jsx)("p",{className:f.a.todoItem,onClick:this.toggleEdit,children:e.task})]}),Object(n.jsxs)("div",{className:f.a.btnContainer,children:[Object(n.jsx)("button",{onClick:this.toggleEdit,title:"Edit",children:Object(n.jsx)(x.a,{icon:_.b})}),Object(n.jsx)("button",{onClick:this.handleDelete,title:"Delete",children:Object(n.jsx)(x.a,{icon:_.c})})]})]})}}]),a}(s.Component),g=a(18),C=a.n(g),N=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).handleArchive=n.handleArchive.bind(Object(j.a)(n)),n}return Object(h.a)(a,[{key:"handleArchive",value:function(){var e=this.props;(0,e.archiveTodo)(e.todo.id)}},{key:"render",value:function(){var e=this.props.todo;return Object(n.jsx)("li",{className:C.a.archivedWrapper,onClick:this.handleArchive,children:Object(n.jsx)("strike",{className:C.a.archivedTodoItem,children:Object(n.jsx)("p",{children:e.task})})})}}]),a}(s.Component),w=a(35),y=a(12),L=a.n(y),S=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={id:"",task:"",isCompleted:!1},n.handleChange=n.handleChange.bind(Object(j.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(j.a)(n)),n}return Object(h.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(v.a)({},e.target.name,[e.target.value]))}},{key:"handleSubmit",value:function(e){var t=this.props.addTodo;e.preventDefault(),t(Object(d.a)(Object(d.a)({},this.state),{},{id:Object(w.a)()})),this.setState({id:"",task:"",isCompleted:!1})}},{key:"render",value:function(){var e=this.state.task;return Object(n.jsxs)("form",{onSubmit:this.handleSubmit,className:L.a.form,children:[Object(n.jsx)("label",{htmlFor:"task","aria-label":"Add a Todo"}),Object(n.jsxs)("div",{className:L.a.inpContainer,children:[Object(n.jsx)("input",{tabIndex:0,id:"task",name:"task",type:"text",placeholder:"Add a todo",value:e,onChange:this.handleChange,className:L.a.input,required:!0}),Object(n.jsx)("button",{className:L.a.btn,children:"Add"})]})]})}}]),a}(s.Component),A=a(2),E=a.n(A),W=a.p+"static/media/neko-bottom-border.16f39bb8.png",D=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={todos:[],window:"ongoing"},n.add=n.add.bind(Object(j.a)(n)),n.archive=n.archive.bind(Object(j.a)(n)),n.delete=n.delete.bind(Object(j.a)(n)),n.update=n.update.bind(Object(j.a)(n)),n}return Object(h.a)(a,[{key:"add",value:function(e){this.setState({todos:[].concat(Object(l.a)(this.state.todos),[e])})}},{key:"archive",value:function(e){var t=this.state.todos.map((function(t){return t.id===e?Object(d.a)(Object(d.a)({},t),{},{isCompleted:!t.isCompleted}):t}));this.setState({todos:t})}},{key:"delete",value:function(e){this.setState({todos:this.state.todos.filter((function(t){return t.id!==e}))})}},{key:"update",value:function(e,t){var a=this.state.todos.map((function(a){return a.id===e?Object(d.a)(Object(d.a)({},a),{},{task:t}):a}));this.setState({todos:a})}},{key:"setWindow",value:function(e){this.setState(Object(d.a)(Object(d.a)({},this.state),{},{window:e}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.todos,s=t.window,i=a.filter((function(e){return!0===e.isCompleted})),o=a.filter((function(e){return!1===e.isCompleted})),c=o.map((function(t){return Object(n.jsx)(T,{todo:t,archiveTodo:e.archive,updateTodo:e.update,deleteTodo:e.delete},t.id)})),d=i.map((function(t){return Object(n.jsx)(N,{todo:t,archiveTodo:e.archive},t.id)})),l=(new Date).toDateString();return Object(n.jsxs)("div",{className:E.a.mainContainer,children:[Object(n.jsxs)("main",{className:E.a.tlContainer,children:[Object(n.jsxs)("div",{className:E.a.tlWindow,children:[Object(n.jsx)("h6",{className:E.a.title,children:"Tasks"}),Object(n.jsxs)("ul",{className:E.a.tlWindowList,children:[Object(n.jsxs)("li",{onClick:function(){e.setWindow("ongoing")},className:"ongoing"===s?E.a.selected:"",children:["On-Going",0!==o.length?Object(n.jsx)("span",{className:E.a.badge,children:o.length}):""]}),Object(n.jsxs)("li",{onClick:function(){e.setWindow("completed")},className:"completed"===s?E.a.selected:"",children:["Completed",0!==i.length?Object(n.jsx)("span",{className:E.a.badge,children:i.length}):""]})]})]}),Object(n.jsx)("div",{className:E.a.tlTasksContainer,children:function(t){switch(t){case"ongoing":return Object(n.jsxs)("div",{className:E.a.tlTasks,children:[Object(n.jsxs)("h6",{className:E.a.title,children:["To-Do ",Object(n.jsx)("span",{children:l})]}),Object(n.jsx)(S,{addTodo:e.add}),Object(n.jsx)("ul",{className:E.a.tlList,children:c.length>0?c:Object(n.jsx)("p",{className:E.a.emptyText,children:"No tasks for today"})}),Object(n.jsx)("figure",{className:E.a.border,children:Object(n.jsx)("img",{src:W,alt:"Neko Border"})})]});case"completed":return Object(n.jsxs)("div",{className:E.a.tlTasks,children:[Object(n.jsx)("h6",{className:E.a.title,children:"Completed"}),Object(n.jsx)("ul",{className:E.a.tlCompleted,children:0===d.length?Object(n.jsx)("p",{className:E.a.emptyText,children:"No completed tasks yet"}):d}),Object(n.jsx)("figure",{className:E.a.border,children:Object(n.jsx)("img",{src:W,alt:"Neko Border"})})]});default:return Object(n.jsxs)("div",{className:E.a.tlTasks,children:[Object(n.jsxs)("h6",{className:E.a.title,children:["To-Do ",Object(n.jsx)("span",{children:l})]}),Object(n.jsx)(S,{addTodo:e.add}),Object(n.jsx)("ul",{className:E.a.tlList,children:c}),Object(n.jsx)("figure",{className:E.a.border,children:Object(n.jsx)("img",{src:W,alt:"Neko Border"})})]})}}(s)})]}),Object(n.jsx)(m,{})]})}}]),a}(s.Component);var I=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(D,{})})};c.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(I,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.9171ac96.chunk.js.map