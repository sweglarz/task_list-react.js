(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],[,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(1),s=n.n(c),a=n(7),o=n.n(a),i=(n(13),n(8)),r=n(4),u=n(3),l=(n(14),n(0)),d=function(t){var e=t.tasks,n=t.hideDone,c=t.toggleHideDone,s=t.setAllDone;return Object(l.jsx)("div",{className:"buttons",children:e.length>0&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("button",{onClick:c,className:"buttons__button",children:[e.some((function(t){return t.done}))&&n?"Poka\u017c":"Ukryj"," uko\u0144czone"]}),Object(l.jsx)("button",{onClick:s,className:"buttons__button",disabled:e.every((function(t){return t.done})),children:"Uko\u0144cz wszystkie"})]})})},j=(n(16),function(t){var e=t.children;return Object(l.jsx)("main",{className:"main",children:e})}),b=(n(17),function(t){var e=t.addNewTask,n=Object(c.useState)(""),s=Object(u.a)(n,2),a=s[0],o=s[1];return Object(l.jsx)("form",{className:"form",onSubmit:function(t){t.preventDefault(),e(a.trim()),o("")},children:Object(l.jsxs)("label",{className:"form__label",children:[Object(l.jsx)("input",{value:a,className:"form__input",type:"text",placeholder:"Co jest do zrobienia?",onChange:function(t){var e=t.target;return o(e.value)}}),Object(l.jsx)("button",{className:"form__button",children:"Dodaj zadanie"})]})})}),f=(n(18),function(t){var e=t.title;return Object(l.jsx)("h1",{className:"main__header",children:e})}),O=(n(19),function(t){var e=t.title,n=t.extraHeaderContent,c=t.body;return Object(l.jsxs)("section",{className:"section",children:[Object(l.jsxs)("div",{className:"section__headerBox",children:[Object(l.jsx)("h2",{className:"section__header section__header--borderless",children:e}),n]}),c]})}),h=(n(20),function(t){var e=t.tasks,n=t.hideDone,c=t.removeTask,s=t.toggleTaskDone;return Object(l.jsx)("ul",{className:"tasks__list",children:e.map((function(t){return Object(l.jsxs)("li",{className:"tasks__item ".concat(t.done&&n?"tasks__item--hidden":""),children:[Object(l.jsx)("button",{onClick:function(){return s(t.id)},className:"tasks__button tasks__button--done",children:t.done?"\u2714":""}),Object(l.jsx)("span",{className:"tasks__span\n            ".concat(t.done?"tasks__span--done":""),children:t.content}),Object(l.jsx)("button",{onClick:function(){return c(t.id)},className:"tasks__button tasks__button--remove",children:"\ud83d\uddd1\ufe0f"})]},t.id)}))})});var m=function(){var t=Object(c.useState)(!1),e=Object(u.a)(t,2),n=e[0],s=e[1],a=Object(c.useState)([]),o=Object(u.a)(a,2),m=o[0],_=o[1];return Object(c.useEffect)((function(){localStorage.setItem("tasks",JSON.stringify(m))})),Object(c.useEffect)((function(){var t=localStorage.getItem("tasks");t&&_(JSON.parse(t))}),[]),Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)(j,{children:[Object(l.jsx)(f,{title:"Lista zada\u0144"}),Object(l.jsx)(O,{title:"Dodaj nowe zadanie",body:Object(l.jsx)(b,{addNewTask:function(t){""!==t&&_((function(e){return[].concat(Object(i.a)(e),[{content:t,done:!1,id:e.length?e[e.length-1].id+1:1}])}))}})}),Object(l.jsx)(O,{title:"Lista zada\u0144",body:Object(l.jsx)(h,{tasks:m,hideDone:n,removeTask:function(t){_((function(e){return e.filter((function(e){return e.id!==t}))}))},toggleTaskDone:function(t){_((function(e){return e.map((function(e){return e.id===t?Object(r.a)(Object(r.a)({},e),{},{done:!e.done}):e}))}))}}),extraHeaderContent:Object(l.jsx)(d,{tasks:m,hideDone:n,toggleHideDone:function(){s((function(t){return!t}))},setAllDone:function(){_((function(t){return t.map((function(t){return Object(r.a)(Object(r.a)({},t),{},{done:!0})}))}))}})})]})})},_=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(e){var n=e.getCLS,c=e.getFID,s=e.getFCP,a=e.getLCP,o=e.getTTFB;n(t),c(t),s(t),a(t),o(t)}))};o.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(m,{})}),document.getElementById("root")),_()}],[[21,1,2]]]);
//# sourceMappingURL=main.b012becb.chunk.js.map