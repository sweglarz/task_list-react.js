(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(7),o=n.n(a),i=(n(13),n(8)),r=n(4),u=n(3),d=(n(14),n(0)),l=function(e){var t=e.tasks,n=e.hideDone,c=e.toggleHideDone,s=e.setAllDone;return Object(d.jsx)("div",{className:"buttons",children:t.length>0&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("button",{onClick:c,className:"buttons__button",children:[t.some((function(e){return e.done}))&&n?"Poka\u017c":"Ukryj"," uko\u0144czone"]}),Object(d.jsx)("button",{onClick:s,className:"buttons__button",disabled:t.every((function(e){return e.done})),children:"Uko\u0144cz wszystkie"})]})})},j=(n(16),function(e){var t=e.children;return Object(d.jsx)("main",{className:"main",children:t})}),b=(n(17),function(e){var t=e.addNewTask,n=Object(c.useState)(""),s=Object(u.a)(n,2),a=s[0],o=s[1];return Object(d.jsx)("form",{className:"form",onSubmit:function(e){e.preventDefault(),t(a.trim()),o("")},children:Object(d.jsxs)("label",{className:"form__label",children:[Object(d.jsx)("input",{value:a,className:"form__input",type:"text",placeholder:"Co jest do zrobienia?",onChange:function(e){var t=e.target;return o(t.value)}}),Object(d.jsx)("button",{className:"form__button",children:"Dodaj zadanie"})]})})}),f=(n(18),function(e){var t=e.title;return Object(d.jsx)("h1",{className:"main__header",children:t})}),h=(n(19),function(e){var t=e.title,n=e.extraHeaderContent,c=e.body;return Object(d.jsxs)("section",{className:"section",children:[Object(d.jsxs)("div",{className:"section__headerBox",children:[Object(d.jsx)("h2",{className:"section__header section__header--borderless",children:t}),n]}),c]})}),m=(n(20),function(e){var t=e.tasks,n=e.hideDone,c=e.removeTask,s=e.toggleTaskDone;return Object(d.jsx)("ul",{className:"tasks__list",children:t.map((function(e){return Object(d.jsxs)("li",{className:"tasks__item ".concat(e.done&&n?"tasks__item--hidden":""),children:[Object(d.jsx)("button",{onClick:function(){return s(e.id)},className:"tasks__button tasks__button--done",children:e.done?"\u2714":""}),Object(d.jsx)("span",{className:"tasks__span\n            ".concat(e.done?"tasks__span--done":""),children:e.content}),Object(d.jsx)("button",{onClick:function(){return c(e.id)},className:"tasks__button tasks__button--remove",children:"\ud83d\uddd1\ufe0f"})]},e.id)}))})});var O=function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)([{id:1,content:"przejs\u0107 na Reacta",done:!1},{id:2,content:"podj\u0105\u0107 pr\xf3b\u0119 przej\u015bcia na Reacta",done:!0}]),o=Object(u.a)(a,2),O=o[0],_=o[1];return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(j,{children:[Object(d.jsx)(f,{title:"Lista zada\u0144"}),Object(d.jsx)(h,{title:"Dodaj nowe zadanie",body:Object(d.jsx)(b,{addNewTask:function(e){""!==e&&_((function(t){return[].concat(Object(i.a)(t),[{content:e,done:!1,id:t.length?t[t.length-1].id+1:1}])}))}})}),Object(d.jsx)(h,{title:"Lista zada\u0144",body:Object(d.jsx)(m,{tasks:O,hideDone:n,removeTask:function(e){_((function(t){return t.filter((function(t){return t.id!==e}))}))},toggleTaskDone:function(e){_((function(t){return t.map((function(t){return t.id===e?Object(r.a)(Object(r.a)({},t),{},{done:!t.done}):t}))}))}}),extraHeaderContent:Object(d.jsx)(l,{tasks:O,hideDone:n,toggleHideDone:function(){s((function(e){return!e}))},setAllDone:function(){_((function(e){return e.map((function(e){return Object(r.a)(Object(r.a)({},e),{},{done:!0})}))}))}})})]})})},_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),s(e),a(e),o(e)}))};o.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(O,{})}),document.getElementById("root")),_()}],[[21,1,2]]]);
//# sourceMappingURL=main.19924681.chunk.js.map