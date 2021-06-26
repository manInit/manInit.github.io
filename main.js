!function(){"use strict";function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var e=function(){function e(t){var n=t.id,a=t.text,o=t.completed;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.id=n,this.text=a,this.completed=o}var n,a;return n=e,(a=[{key:"getElement",value:function(){var t=document.createElement("li");return t.classList.add("todo__item"),t.dataset.id=this.id,t.innerHTML='\n    <div class="todo__toggle">\n      <input class="todo__check" type="checkbox" '.concat(this.completed?"checked":"",'>\n      <span class="todo__badge"></span>\n    </div>\n    <div class="todo__text ').concat(this.completed?"todo__text_completed":"",'">').concat(this.text,'</div>\n    <input class="todo__input todo__input_task" type="text">\n    <button class="todo__destroy"></button>'),t}}])&&t(n.prototype,a),e}();function n(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var o=0,r=function(){};return{s:r,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,i=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return i=t.done,t},e:function(t){l=!0,s=t},f:function(){try{i||null==n.return||n.return()}finally{if(l)throw s}}}}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var c=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];i(this,t),this._root=document.getElementsByClassName("todo__items")[0],this._todoNumberEl=document.getElementsByClassName("todo__number")[0],this._clearBtn=document.getElementsByClassName("todo__clear")[0],this.tasks=this._getTaskArrFromObjects(e),localStorage.getItem("task-list")?this._loadStateFromStorage():this._updateList(),window.addEventListener("hashchange",this._updateList.bind(this))}var a,o;return a=t,(o=[{key:"_getTaskArrFromObjects",value:function(t){return t.map((function(t,n){return new e(r(r({},t),{},{id:n}))}))}},{key:"completedCount",get:function(){return this.tasks.length-this.notCompletedCount}},{key:"notCompletedCount",get:function(){return this.tasks.filter((function(t){return!t.completed})).length}},{key:"isAllCompleted",value:function(){return this.tasks.every((function(t){return t.completed}))}},{key:"addTask",value:function(t){this.tasks.push(new e(r(r({},t),{},{id:this.tasks.length}))),this._updateList()}},{key:"deleteTask",value:function(t){var e=this.tasks.map((function(t){return t.id})).indexOf(t);this.tasks.splice(e,1),this._updateList()}},{key:"deleteAllCompleted",value:function(){var t,e=n(this.tasks.filter((function(t){return t.completed})).map((function(t){return t.id})));try{for(e.s();!(t=e.n()).done;){var a=t.value;this.deleteTask(a)}}catch(t){e.e(t)}finally{e.f()}this._updateList()}},{key:"toggleComplete",value:function(t){var e=this.tasks.find((function(e){return e.id===t}));e.completed=!e.completed,this._updateList()}},{key:"changeStatusAll",value:function(t){var e,a=n(this.tasks);try{for(a.s();!(e=a.n()).done;)e.value.completed=t}catch(t){a.e(t)}finally{a.f()}this._updateList()}},{key:"makeAllCompleted",value:function(){this.changeStatusAll(!0)}},{key:"makeAllUncompleted",value:function(){this.changeStatusAll(!1)}},{key:"_checkBoxHandler",value:function(t){this.toggleComplete(parseInt(t))}},{key:"_deleteHandler",value:function(t){this.deleteTask(parseInt(t))}},{key:"_saveStateInStorage",value:function(){var t=JSON.stringify(this.tasks);localStorage.setItem("task-list",t)}},{key:"_loadStateFromStorage",value:function(){var t=JSON.parse(localStorage.getItem("task-list"));this.tasks=this._getTaskArrFromObjects(t),this._updateList()}},{key:"_updateList",value:function(){var t=this,e=[];switch(window.location.hash.slice(2).toLowerCase()){case"all":e=this.tasks;break;case"active":e=this.tasks.filter((function(t){return!t.completed}));break;case"completed":e=this.tasks.filter((function(t){return t.completed}));break;default:e=this.tasks}this._root.innerHTML="";var a,o=n(e);try{var r=function(){var e=a.value,n=e.getElement(),o=n.dataset.id;n.addEventListener("click",(function(e){e.preventDefault();var n=e.target;n.classList.contains("todo__destroy")&&t._deleteHandler.call(t,o),n.classList.contains("todo__check")&&t._checkBoxHandler.call(t,o)})),n.addEventListener("dblclick",(function(a){a.preventDefault();var r=a.target;if(r.classList.contains("todo__text")){var s=n.getElementsByClassName("todo__input")[0];s.addEventListener("keypress",(function(n){"Enter"===n.key&&(""===s.value?t.deleteTask(o):(e.text=s.value,s.style.display="none",r.style.display="block"),t._updateList())})),s.addEventListener("focusout",(function(t){s.style.display="none",r.style.display="block"})),s.value=r.innerText,s.style.display="block",r.style.display="none",s.focus()}})),t._root.appendChild(n)};for(o.s();!(a=o.n()).done;)r()}catch(t){o.e(t)}finally{o.f()}this._todoNumberEl.innerText=this.notCompletedCount,this.completedCount>0?this._clearBtn.style.display="block":this._clearBtn.style.display="",this._saveStateInStorage()}}])&&l(a.prototype,o),t}(),u=document.getElementsByClassName("todo__input")[0],d=new c,f=document.getElementsByClassName("todo__selectAll")[0];document.getElementsByClassName("todo__clear")[0].addEventListener("click",(function(t){d.deleteAllCompleted()})),f.addEventListener("click",(function(t){d.isAllCompleted()?d.makeAllUncompleted():d.makeAllCompleted()})),u.addEventListener("keypress",(function(t){if(""!==u.value.trim()&&"Enter"===t.key){var e={text:u.value.trim(),completed:!1};d.addTask(e),u.value=""}}))}();