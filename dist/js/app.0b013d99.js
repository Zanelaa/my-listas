(function(e){function t(t){for(var r,c,u=t[0],i=t[1],l=t[2],d=0,p=[];d<u.length;d++)c=u[d],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&p.push(n[c][0]),n[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);s&&s(t);while(p.length)p.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,u=1;u<a.length;u++){var i=a[u];0!==n[i]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=a[0]))}return e}var r={},n={app:0},o=[];function c(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=e,c.c=r,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(a,r,function(t){return e[t]}.bind(null,r));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var s=i;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"02d8":function(e,t,a){},"034f":function(e,t,a){"use strict";a("85ec")},"0a9a":function(e,t,a){"use strict";a("130b")},"130b":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("cima",{attrs:{valor:e.titulo}}),a("div",{staticClass:"container"},[a("div",{staticClass:"input-group"},[a("h2",[e._v("Altere aqui o título da sua lista")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.titulo,expression:"titulo"}],attrs:{type:"text"},domProps:{value:e.titulo},on:{input:function(t){t.target.composing||(e.titulo=t.target.value)}}}),a("br"),a("p",[e._v("---------------------------------------------------------------------------------------------------------")]),a("br"),a("h3",[e._v(e._s(e.titulo))]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.novatarefa,expression:"novatarefa"}],attrs:{type:"text"},domProps:{value:e.novatarefa},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.adtarefa.apply(null,arguments)},input:function(t){t.target.composing||(e.novatarefa=t.target.value)}}}),a("span",{staticClass:"input-group-btn"},[a("button",{staticClass:"btn btn-primary",on:{click:e.adtarefa}},[e._v("Adicionar")])])]),a("listartarefas",{attrs:{tarefas:e.tarefas}}),a("p",[e._v("---------------------------------------------------------------------------------------------------------")]),a("h2",[e._v("Altere aqui o título do seu rodapé")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.rodape,expression:"rodape"}],attrs:{type:"text"},domProps:{value:e.rodape},on:{input:function(t){t.target.composing||(e.rodape=t.target.value)}}})],1),a("rodape",{attrs:{valorrodape:e.rodape}})],1)},o=[],c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("footer",[a("h1",[e._v(e._s(e.valorrodape))])])},u=[],i={props:["valorrodape"]},l=i,s=(a("bc42"),a("2877")),d=Object(s["a"])(l,c,u,!1,null,null,null),p=d.exports,f=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},v=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"cabecalho"},[a("header",[a("h1",[e._v("Lista de tarefas")])])])}],h={},m=h,b=(a("0a9a"),Object(s["a"])(m,f,v,!1,null,null,null)),y=b.exports,_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",e._l(e.tarefas,(function(t,r){return a("li",{key:r,class:{removed:t.checked}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.checked,expression:"tarefa.checked"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.checked)?e._i(t.checked,null)>-1:t.checked},on:{change:function(a){var r=t.checked,n=a.target,o=!!n.checked;if(Array.isArray(r)){var c=null,u=e._i(r,c);n.checked?u<0&&e.$set(t,"checked",r.concat([c])):u>-1&&e.$set(t,"checked",r.slice(0,u).concat(r.slice(u+1)))}else e.$set(t,"checked",o)}}}),a("label",[e._v(e._s(t.titulo))])])})),0)},k=[],g={props:["tarefas"]},x=g,O=Object(s["a"])(x,_,k,!1,null,null,null),w=O.exports,j={name:"App",components:{Cima:y,rodape:p,Listartarefas:w},data:function(){return{titulo:"Farefas do dia",rodape:"meu rodape",novatarefa:"",tarefas:[{titulo:"estudar",checked:!1},{titulo:"dormir",checked:!0},{titulo:"lavar a louça",checked:!1},{titulo:"dar banho no doguinho",checked:!0},{titulo:"estudar devono",checked:!1},{titulo:"ir para a academia",checked:!0}]}},methods:{adtarefa:function(){this.tarefas.push({titulo:this.novatarefa,checked:!1}),this.novatarefa=""}}},P=j,$=(a("034f"),Object(s["a"])(P,n,o,!1,null,null,null)),A=$.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(A)}}).$mount("#app")},"85ec":function(e,t,a){},bc42:function(e,t,a){"use strict";a("02d8")}});
//# sourceMappingURL=app.0b013d99.js.map