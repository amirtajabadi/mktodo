(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,o){e.exports=o(24)},19:function(e,t,o){},22:function(e,t,o){},24:function(e,t,o){"use strict";o.r(t);var n,r,a,l,c,i,s,u,p,d,m=o(0),h=o.n(m),b=o(9),f=o.n(b),y=(o(19),o(2)),O=o(3),g=o(6),v=o(5),j=o(7),E=o(8),k=(o(22),o(10)),w=o(4),C=(o(13),o(1)),T=(n=function(){function e(t,o,n,l){Object(y.a)(this,e),this.id=void 0,Object(k.a)(this,"title",r,this),Object(k.a)(this,"completed",a,this),this.store=void 0,this.id=l,this.title=o,this.completed=n,this.store=t}return Object(O.a)(e,[{key:"toggle",value:function(){this.completed=!this.completed}},{key:"removeTodo",value:function(){var e=this;this.store.todos=this.store.todos.filter(function(t){return t!==e})}}]),e}(),r=Object(w.a)(n.prototype,"title",[C.l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),a=Object(w.a)(n.prototype,"completed",[C.l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Object(w.a)(n.prototype,"toggle",[C.d],Object.getOwnPropertyDescriptor(n.prototype,"toggle"),n.prototype),Object(w.a)(n.prototype,"removeTodo",[C.d],Object.getOwnPropertyDescriptor(n.prototype,"removeTodo"),n.prototype),n),N=new(l=function(){function e(){Object(y.a)(this,e),Object(k.a)(this,"todos",c,this),this.lastId=0,Object(k.a)(this,"filterKey",i,this)}return Object(O.a)(e,[{key:"addTodo",value:function(e){this.todos.push(new T(this,e,!1,this.lastId++)),console.log(this.todos)}},{key:"removeAllCompleted",value:function(){this.todos=this.todos.filter(function(e){return!e.completed})}},{key:"toggleAll",value:function(){0===this.activeTodoCount?this.todos.forEach(function(e){return e.completed=!1}):this.todos.forEach(function(e){return e.completed=!0})}},{key:"changeFilter",value:function(e){this.filterKey=e}},{key:"activeTodoCount",get:function(){return this.todos.reduce(function(e,t){return e+(t.completed?0:1)},0)}},{key:"completedTodoCount",get:function(){return this.todos.reduce(function(e,t){return e+(t.completed?1:0)},0)}}]),e}(),c=Object(w.a)(l.prototype,"todos",[C.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),i=Object(w.a)(l.prototype,"filterKey",[C.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),Object(w.a)(l.prototype,"activeTodoCount",[C.e],Object.getOwnPropertyDescriptor(l.prototype,"activeTodoCount"),l.prototype),Object(w.a)(l.prototype,"completedTodoCount",[C.e],Object.getOwnPropertyDescriptor(l.prototype,"completedTodoCount"),l.prototype),Object(w.a)(l.prototype,"addTodo",[C.d],Object.getOwnPropertyDescriptor(l.prototype,"addTodo"),l.prototype),Object(w.a)(l.prototype,"removeAllCompleted",[C.d],Object.getOwnPropertyDescriptor(l.prototype,"removeAllCompleted"),l.prototype),Object(w.a)(l.prototype,"toggleAll",[C.d],Object.getOwnPropertyDescriptor(l.prototype,"toggleAll"),l.prototype),Object(w.a)(l.prototype,"changeFilter",[C.d],Object.getOwnPropertyDescriptor(l.prototype,"changeFilter"),l.prototype),l),A=function(e){function t(){var e;return Object(y.a)(this,t),(e=Object(g.a)(this,Object(v.a)(t).call(this))).handleKeyDown=function(t){13===t.keyCode&&""!==e.state.value&&(t.preventDefault(),N.addTodo(e.state.value),e.setState({value:""}))},e.state={value:""},e}return Object(j.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){var e=this;return h.a.createElement("header",{className:"header"},h.a.createElement("h1",null,"Todo"),h.a.createElement("input",{value:this.state.value,onChange:function(t){return e.setState({value:t.target.value})},onKeyDown:function(t){return e.handleKeyDown(t)},type:"text",className:"new-todo",placeholder:"what needs to e done?"}))}}]),t}(m.Component),D=Object(E.a)(s=function(e){function t(){var e,o;Object(y.a)(this,t);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(o=Object(g.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).onToggle=function(){o.props.todo.toggle()},o.onRemove=function(){o.props.todo.removeTodo()},o}return Object(j.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){var e=this.props.todo;return h.a.createElement("li",{className:e.completed?"completed":""},h.a.createElement("div",{className:"view"},h.a.createElement("input",{onChange:this.onToggle,type:"checkbox",className:"toggle",value:e.completed?"off":"on",checked:e.completed}),h.a.createElement("label",null,e.title),h.a.createElement("button",{className:"destroy",onClick:this.onRemove})))}}]),t}(m.Component))||s,K=Object(E.a)(u=function(e){function t(){return Object(y.a)(this,t),Object(g.a)(this,Object(v.a)(t).call(this))}return Object(j.a)(t,e),Object(O.a)(t,[{key:"getFilterdTodos",value:function(){return N.todos.filter(function(e){return 1===N.filterKey?!e.completed:2!==N.filterKey||e.completed})}},{key:"render",value:function(){var e=this;return h.a.createElement("section",{className:"main"},h.a.createElement("input",{id:"toggle-all",className:"toggle-all",type:"checkbox",onChange:function(){return N.toggleAll()},checked:0===N.activeTodoCount&&N.todos.length}),h.a.createElement("label",{htmlFor:"toggle-all"}),h.a.createElement("ul",{className:"todo-list"},this.getFilterdTodos().map(function(t){return h.a.createElement(D,{key:t.id,todo:t,removeHandler:e.onRemove})})))}}]),t}(m.Component))||u,F=Object(E.a)(p=function(e){function t(){return Object(y.a)(this,t),Object(g.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){var e=this,t=this.props.todoStore;return 0===t.todos.length?null:h.a.createElement("footer",{className:"footer"},h.a.createElement("span",{className:"todo-count"},t.activeTodoCount," item left"),h.a.createElement("ul",{className:"filters"},h.a.createElement("li",null,h.a.createElement("a",{onClick:function(){return e.props.todoStore.changeFilter(0)},className:0==t.filterKey?"selected":""},"All")),h.a.createElement("li",null,h.a.createElement("a",{onClick:function(){return e.props.todoStore.changeFilter(1)},className:1==t.filterKey?"selected":""},"Active")),h.a.createElement("li",null,h.a.createElement("a",{onClick:function(){return e.props.todoStore.changeFilter(2)},className:2==t.filterKey?"selected":""},"Completed"))),h.a.createElement("button",{className:"clear-completed",style:{display:t.completedTodoCount?"":"none"},onClick:function(){t.removeAllCompleted()}},"Clear completed"))}}]),t}(m.Component))||p,P=Object(E.a)(d=function(e){function t(){return Object(y.a)(this,t),Object(g.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){return[h.a.createElement("div",{id:"todoapp",className:"todoapp"},h.a.createElement(A,null),h.a.createElement(K,null),h.a.createElement(F,{todoStore:N})),h.a.createElement("footer",{className:"info"},h.a.createElement("p",null,"Written by ",h.a.createElement("a",{href:"https://github.com/alitalebi7s"},"Ali Talebi")),h.a.createElement("p",null,"Project of ",h.a.createElement("a",{href:"https://maktabkhooneh.org"},"Maktabkhooneh")))]}}]),t}(m.Component))||d;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));f.a.render(h.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[14,2,1]]]);
//# sourceMappingURL=main.c9f4687d.chunk.js.map