(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._title=e,this._link=n,this._handleCardClick=o,this.selectorTemplate=r}var n,r;return n=t,(r=[{key:"renderElement",value:function(){var e=document.querySelector(this.selectorTemplate).content.firstElementChild.cloneNode(!0),t=e.querySelector(".element__title"),n=e.querySelector(".element__image"),r=e.querySelector(".element__like");t.textContent=this._title,n.setAttribute("src",this._link),n.setAttribute("alt",this._title),this._listenerClickImage(n),this._listenerClickBtnLike(r);var o=e.querySelector(".element__trash-btn");return this._listenerClickDeletCard(o),e}},{key:"_listenerClickImage",value:function(e){e.addEventListener("click",this._handleCardClick)}},{key:"_listenerClickBtnLike",value:function(e){var t=this;e.addEventListener("click",(function(){return t._likeCard(e)}))}},{key:"_likeCard",value:function(e){e.classList.toggle("element__like_active")}},{key:"_listenerClickDeletCard",value:function(e){e.addEventListener("click",this._deleteCard)}},{key:"_deleteCard",value:function(e){e.currentTarget.closest(".element").remove()}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t){var n=t.userName,r=t.userJob;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=n,this._userJob=r,this._itemName=document.querySelector(this._userName),this._itemJob=document.querySelector(this._userJob)}var t,r;return t=e,(r=[{key:"getUserInfo",value:function(){return{name:this._itemName.textContent,job:this._itemJob.textContent}}},{key:"setUserInfo",value:function(e){var t=e.newItemName,n=e.newItemJob;this._itemName.textContent=t,this._itemJob.textContent=n}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupSelector=t,this._popup=document.querySelector(this._popupSelector),this._closeCurrentPopupByClick=this._closePopupWithListener.bind(this),this._currentHandleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._currentHandleEscClose)}},{key:"setEventListeners",value:function(){this._popup.addEventListener("click",this._closeCurrentPopupByClick)}},{key:"_closePopupWithListener",value:function(e){(e.target.classList.contains("popup__close")||e.target.classList.contains("popup"))&&this.close()}},{key:"_handleEscClose",value:function(e){27===e.which&&this.close()}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._currentHandleEscClose)}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(){return s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=l(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},s.apply(this,arguments)}function l(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=f(e)););return e}function c(e,t){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},c(e,t)}function p(e,t){if(t&&("object"===u(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&c(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=f(r);if(o){var n=f(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return p(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._callbackSubmitForm=t,n.form=n._popup.querySelector("form"),n._inputsPopup=Array.from(n._popup.querySelectorAll(".popup__input")),n}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputsPopup.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setInputValues",value:function(e){var t=this;e.forEach((function(e){t._popup.querySelector(".popup__input[name=".concat(e.name,"]")).value=e.value}))}},{key:"setEventListeners",value:function(){this._currentCallbackSubmitListener=this._сallbackFunction.bind(this),this.form.addEventListener("submit",this._currentCallbackSubmitListener),s(f(u.prototype),"setEventListeners",this).call(this)}},{key:"_сallbackFunction",value:function(e){e.preventDefault(),this._callbackSubmitForm(this._getInputValues()),this.close()}},{key:"close",value:function(){s(f(u.prototype),"close",this).call(this),this.form.reset()}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(i);function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=d(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},b.apply(this,arguments)}function d(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=k(e)););return e}function m(e,t){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},m(e,t)}function v(e,t){if(t&&("object"===h(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function k(e){return k=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},k(e)}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=k(r);if(o){var n=k(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return v(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e)).popupImageTitle=t._popup.querySelector(".popup-image__title"),t.popupImageLayer=t._popup.querySelector(".popup-image__img"),t}return t=u,(n=[{key:"open",value:function(e,t){this.popupImageTitle.textContent=e,this.popupImageLayer.setAttribute("src",t),this.popupImageLayer.setAttribute("alt",e),b(k(u.prototype),"open",this).call(this)}}])&&_(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(i);function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var E=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderElements",value:function(){var e=this;return this._items.map((function(t){return e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&w(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),C=document.querySelector(".profile__info-button"),O=document.querySelector(".profile__button"),S={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var P=function(){function e(t,n){var r=t.formSelector,o=t.inputSelector,i=t.submitButtonSelector,u=t.inactiveButtonClass,a=t.inputErrorClass,s=t.errorClass;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formSelector=r,this._inputSelector=o,this._submitButtonSelector=i,this._inactiveButtonClass=u,this._inputErrorClass=a,this._errorClass=s,this._form=n}var t,n;return t=e,(n=[{key:"enableValidation",value:function(){var e=this;this._inputs=Array.from(this._form.querySelectorAll(this._inputSelector)),this._button=this._form.querySelector(this._submitButtonSelector),this._inputs.forEach((function(t){e._setListenerOnInput(t)}))}},{key:"_setListenerOnInput",value:function(e){var t=this;e.addEventListener("input",(function(){return t._validateElements(e)}))}},{key:"_validateElements",value:function(e){this._validateInput(e),this.toggleButtonState()}},{key:"_validateInput",value:function(e){var t=this._findInputErrorPlace(e);this._isInputValid(e)?this._hideInputError(e,t):this._showInputError(e,t)}},{key:"_findInputErrorPlace",value:function(e){var t=e.getAttribute("name");return document.getElementById("".concat(t,"Error"))}},{key:"_isInputValid",value:function(e){return e.validity.valid}},{key:"_hideInputError",value:function(e,t){e.classList.remove(this._inputErrorClass),t.textContent="",t.classList.remove(this._errorClass)}},{key:"_showInputError",value:function(e,t){e.classList.add(this._inputErrorClass),t.textContent=e.validationMessage,t.classList.add(this._errorClass)}},{key:"toggleButtonState",value:function(){this._isInputsValid()?(this._button.classList.remove(this._inactiveButtonClass),this._button.removeAttribute("disabled")):(this._button.classList.add(this._inactiveButtonClass),this._button.setAttribute("disabled","disabled"))}},{key:"_isInputsValid",value:function(){return this._inputs.every(this._isInputValid)}}])&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),B=new r({userName:".profile__info-title",userJob:".profile__info-subtitle"}),L=new y(".popup-profile",(function(e){var t=e.userName,n=e.userJob;B.setUserInfo({newItemName:t,newItemJob:n})}));L.setEventListeners(),C.addEventListener("click",(function(){var e=B.getUserInfo();L.setInputValues([{name:"userName",value:e.name},{name:"userJob",value:e.job}]),q.toggleButtonState(),L.open()}));var I=new g(".popup-image");function D(e){var n=e.name,r=e.link,o=function(e,t){return function(){I.open(e,t)}}(n,r);return new t(n,r,".element-container",o).renderElement()}I.setEventListeners();var R=new E({items:[{name:"г. Енисейск",link:"https://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1RkNfX9rH8ci_0njmiJM-2H7qaKTM5SRkZCeTgDn6uOyic"},{name:"Тунгусский заповедник",link:"https://korona-severa.ru/wp-content/uploads/2/9/b/29b8b3b30338cbe7b817c399094e7fbc.jpeg"},{name:"Саяно-Шушенская ГЭС",link:"https://architectureguru.ru/wp-content/uploads/2019/04/sayano-shushenskaya-hydroelectric-8.jpg"},{name:"Красноярские стобы",link:"https://i10.fotocdn.net/s105/b0d186ca65791a06/public_pin_l/2249547891.jpg"},{name:"Ергаки",link:"http://f1.lpcdn.site/9788aa37e0a756529d272ad54a116fb1/e1833a49eb6a76e4563417b77903efc9.jpg"},{name:"Дивногорск",link:"https://visitsiberia.info/assets/cache_image/assets/manager/%D0%A7%D1%82%D0%BE%20%D0%BF%D0%BE%D1%81%D0%BC%D0%BE%D1%82%D1%80%D0%B5%D1%82%D1%8C/%D0%BA%D1%80%D0%B0%D0%B9%20%D0%B2%D0%BF%D0%B5%D1%87%D0%B0%D1%82%D0%BB%D1%8F%D0%B9/divnogorskaya_1200x630_267.jpg"}],renderer:function(e){return R.addItem(D(e))}},".elements__list");R.renderElements();var T=new y(".popup-card",(function(e){var t=D({name:e.cardTitle,link:e.cardLink});R.addItem(t)}));T.setEventListeners(),O.addEventListener("click",(function(){V.toggleButtonState(),T.open()}));var q=new P(S,L.form);q.enableValidation();var V=new P(S,T.form);V.enableValidation()})();