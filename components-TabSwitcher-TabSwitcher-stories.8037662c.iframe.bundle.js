/*! For license information please see components-TabSwitcher-TabSwitcher-stories.8037662c.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkbook_it_coworking_frontend=self.webpackChunkbook_it_coworking_frontend||[]).push([[6719],{"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_require__.d(__webpack_exports__,{Z:function(){return _arrayLikeToArray}})},"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _defineProperty}});var esm_typeof=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js");function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==(0,esm_typeof.Z)(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==(0,esm_typeof.Z)(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===(0,esm_typeof.Z)(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}},"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectSpread2}});var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}},"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _slicedToArray}});var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||(0,unsupportedIterableToArray.Z)(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/@babel/runtime/helpers/esm/typeof.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}__webpack_require__.d(__webpack_exports__,{Z:function(){return _typeof}})},"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _unsupportedIterableToArray}});var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen):void 0}}},"./src/components/TabSwitcher/TabSwitcher.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Example:function(){return Example},__namedExportsOrder:function(){return __namedExportsOrder}});var _Example$parameters,_Example$parameters2,_Example$parameters2$,_home_runner_work_book_it_coworking_frontend_book_it_coworking_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_TabSwitcher__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/TabSwitcher/TabSwitcher.jsx");__webpack_exports__.default={title:"Components/TabSwitcher",component:_TabSwitcher__WEBPACK_IMPORTED_MODULE_0__.r,tags:["autodocs"],parameters:{layout:"fullscreen"},argTypes:{firstCaption:{description:"Первый элемент",control:{type:"text"}},secondCaption:{description:"Второй элемент",control:{type:"text"}},onClick:{description:"Колбэк клика"},containerClassName:{description:"Дополнительный класс для контейнера",control:{type:"text"}},itemClassName:{description:"Дополнительный класс для элемента",control:{type:"text"}}}};var Example={args:{firstCaption:"Рабочее место",secondCaption:"Переговорная"}};Example.parameters=(0,_home_runner_work_book_it_coworking_frontend_book_it_coworking_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)((0,_home_runner_work_book_it_coworking_frontend_book_it_coworking_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)({},Example.parameters),{},{docs:(0,_home_runner_work_book_it_coworking_frontend_book_it_coworking_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)((0,_home_runner_work_book_it_coworking_frontend_book_it_coworking_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)({},null===(_Example$parameters=Example.parameters)||void 0===_Example$parameters?void 0:_Example$parameters.docs),{},{source:(0,_home_runner_work_book_it_coworking_frontend_book_it_coworking_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)({originalSource:'{\n  args: {\n    firstCaption: "Рабочее место",\n    secondCaption: "Переговорная"\n  }\n}'},null===(_Example$parameters2=Example.parameters)||void 0===_Example$parameters2||null===(_Example$parameters2$=_Example$parameters2.docs)||void 0===_Example$parameters2$?void 0:_Example$parameters2$.source)})});var __namedExportsOrder=["Example"]},"./src/components/TabSwitcher/TabSwitcher.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{r:function(){return TabSwitcher_TabSwitcher}});var slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),TabSwitcher_TabSwitcher=function TabSwitcher(_ref){var _ref$firstCaption=_ref.firstCaption,firstCaption=void 0===_ref$firstCaption?"":_ref$firstCaption,_ref$secondCaption=_ref.secondCaption,secondCaption=void 0===_ref$secondCaption?"":_ref$secondCaption,_ref$onClick=_ref.onClick,onClick=void 0===_ref$onClick?null:_ref$onClick,_ref$containerClassNa=_ref.containerClassName,containerClassName=void 0===_ref$containerClassNa?"":_ref$containerClassNa,_ref$itemClassName=_ref.itemClassName,itemClassName=void 0===_ref$itemClassName?"":_ref$itemClassName,_useState=(0,react.useState)(firstCaption),_useState2=(0,slicedToArray.Z)(_useState,2),selectedItem=_useState2[0],setSelectedItem=_useState2[1],handleClick=function handleClick(item){setSelectedItem(item),onClick&&onClick(item)},getItemClassName=function getItemClassName(item){var resultClassName="tab-switcher__item";return item===selectedItem&&(resultClassName+=" ".concat(resultClassName,"_active")),itemClassName&&(resultClassName+=" ".concat(itemClassName)),resultClassName};return(0,jsx_runtime.jsxs)("ul",{className:function getContainerClassName(){var resultClassName="tab-switcher".concat(containerClassName?" ".concat(containerClassName):"");return selectedItem===secondCaption&&(resultClassName+=" tab-switcher_second-selected"),resultClassName}(),children:[(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)("button",{type:"button",className:getItemClassName(firstCaption),onClick:function onClick(){return handleClick(firstCaption)},children:firstCaption})}),(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)("button",{type:"button",className:getItemClassName(secondCaption),onClick:function onClick(){return handleClick(secondCaption)},children:secondCaption})})]})};TabSwitcher_TabSwitcher.defaultProps={firstCaption:"",secondCaption:"",onClick:null,containerClassName:"",itemClassName:""},TabSwitcher_TabSwitcher.__docgenInfo={description:"",methods:[],displayName:"TabSwitcher",props:{firstCaption:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},secondCaption:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},onClick:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"func"},required:!1},containerClassName:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},itemClassName:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1}}}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);