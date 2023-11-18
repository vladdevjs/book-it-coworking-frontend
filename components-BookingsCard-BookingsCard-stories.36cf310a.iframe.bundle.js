"use strict";(self.webpackChunkbook_it_coworking_frontend=self.webpackChunkbook_it_coworking_frontend||[]).push([[1069],{"./src/components/BookingsCard/BookingsCard.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BookingsCardDemo:function(){return BookingsCardDemo},__namedExportsOrder:function(){return __namedExportsOrder}});var _BookingsCardDemo$par,_BookingsCardDemo$par2,_BookingsCardDemo$par3,_home_runner_work_book_it_coworking_frontend_book_it_coworking_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_BookingsCard__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/BookingsCard/BookingsCard.jsx"),_images_dummy_spot2_jpg__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/images/dummy-spot2.jpg");__webpack_exports__.default={title:"Pages/Profile/Tabs/BookingsTab/BookingsCard",component:_BookingsCard__WEBPACK_IMPORTED_MODULE_0__.t,tags:["autodocs"],parameters:{layout:"centered"}};var BookingsCardDemo={args:{item:{id:"1",spot:{name:"Парк",image:_images_dummy_spot2_jpg__WEBPACK_IMPORTED_MODULE_1__},date:"6 сентября 2023",start_time:"12:00",end_time:"13:00",bill:200,isFinished:!1,status:"Processing"}}};BookingsCardDemo.parameters=(0,_home_runner_work_book_it_coworking_frontend_book_it_coworking_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)((0,_home_runner_work_book_it_coworking_frontend_book_it_coworking_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)({},BookingsCardDemo.parameters),{},{docs:(0,_home_runner_work_book_it_coworking_frontend_book_it_coworking_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)((0,_home_runner_work_book_it_coworking_frontend_book_it_coworking_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)({},null===(_BookingsCardDemo$par=BookingsCardDemo.parameters)||void 0===_BookingsCardDemo$par?void 0:_BookingsCardDemo$par.docs),{},{source:(0,_home_runner_work_book_it_coworking_frontend_book_it_coworking_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)({originalSource:'{\n  args: {\n    item: {\n      id: "1",\n      spot: {\n        name: "Парк",\n        image: SpotPhoto\n      },\n      date: "6 сентября 2023",\n      start_time: "12:00",\n      end_time: "13:00",\n      bill: 200,\n      isFinished: false,\n      status: "Processing"\n    }\n  }\n}'},null===(_BookingsCardDemo$par2=BookingsCardDemo.parameters)||void 0===_BookingsCardDemo$par2||null===(_BookingsCardDemo$par3=_BookingsCardDemo$par2.docs)||void 0===_BookingsCardDemo$par3?void 0:_BookingsCardDemo$par3.source)})});var __namedExportsOrder=["BookingsCardDemo"]},"./src/components/BookingsCard/BookingsCard.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{t:function(){return BookingsCard_BookingsCard}});var slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),dist=__webpack_require__("./node_modules/react-router/dist/index.js"),react_router_dom_dist=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),currentUserContext=__webpack_require__("./src/contexts/currentUserContext.js"),constants=__webpack_require__("./src/utils/constants.jsx"),Api=__webpack_require__("./src/utils/Api.jsx"),utils=__webpack_require__("./src/utils/utils.js"),usePopupOpen=__webpack_require__("./src/hooks/usePopupOpen.js"),ReviewsForm=__webpack_require__("./src/components/Forms/ReviewsForm/ReviewsForm.jsx"),Button=__webpack_require__("./src/components/UI-kit/Button/Button.jsx"),Popup=__webpack_require__("./src/components/Popup/Popup.jsx");var time=__webpack_require__.p+"static/media/time.b900fce9bae5f45c3b154568a1de1f2a.svg";var _statusLabels,card=__webpack_require__.p+"static/media/card.55cc540fde5cfb4d7fe66cea9e1d1b96.svg",jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),getStatusLabel=function getStatusLabel(status,className){return(0,jsx_runtime.jsx)("span",{className:"bookings-card__status bookings-card__status_".concat(className),children:status})},statusLabels=(_statusLabels={},(0,defineProperty.Z)(_statusLabels,constants.rq.WAIT_PAY,getStatusLabel(constants.rq.WAIT_PAY,"warn")),(0,defineProperty.Z)(_statusLabels,constants.rq.PAID,getStatusLabel(constants.rq.PAID,"success")),(0,defineProperty.Z)(_statusLabels,constants.rq.FINISH,getStatusLabel(constants.rq.FINISH,"main")),(0,defineProperty.Z)(_statusLabels,constants.rq.CANCEL,getStatusLabel(constants.rq.CANCEL,"alert")),(0,defineProperty.Z)(_statusLabels,constants.rq.NOT_PAID,getStatusLabel(constants.rq.NOT_PAID,"warn")),_statusLabels),BookingsCard_BookingsCard=function BookingsCard(_ref){var content,item=_ref.item,onUpdateStatus=_ref.onUpdateStatus,onReviewSubmit=_ref.onReviewSubmit,_usePopupOpen=(0,usePopupOpen.Z)(),isOpenPopup=_usePopupOpen.isOpenPopup,handleOpenPopup=_usePopupOpen.handleOpenPopup,handleClosePopup=_usePopupOpen.handleClosePopup,_useState=(0,react.useState)(!1),_useState2=(0,slicedToArray.Z)(_useState,2),isCancellationConfirmed=_useState2[0],setIsCancellationConfirmed=_useState2[1],_useState3=(0,react.useState)(!1),_useState4=(0,slicedToArray.Z)(_useState3,2),isReviewFormOpen=_useState4[0],setIsReviewFormOpen=_useState4[1],_useState5=(0,react.useState)(null),_useState6=(0,slicedToArray.Z)(_useState5,2),serverError=_useState6[0],setServerError=_useState6[1],showMessage=(0,react.useContext)(currentUserContext.E).showMessage,navigate=(0,dist.s0)(),_useState7=(0,react.useState)(!1),_useState8=(0,slicedToArray.Z)(_useState7,2),isMounted=_useState8[0],setIsMounted=_useState8[1],handleCloseBookingPopup=function handleCloseBookingPopup(){handleClosePopup(),setIsCancellationConfirmed(!1),setIsReviewFormOpen(!1),setServerError(null)},handleOpenReviewForm=function handleOpenReviewForm(){setIsReviewFormOpen(!0),handleOpenPopup()};return(0,react.useEffect)((function(){setIsMounted(!0)}),[]),content=isCancellationConfirmed?(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)("p",{className:"bookings-card__popup-text",children:["Бронирование «",item.location_name.toUpperCase()," с ",item.start_time," ","до ",item.end_time,"» отменено. Мы отправим вам подтверждение на почту и вернем предоплату."]}),(0,jsx_runtime.jsx)("p",{className:"bookings-card__popup-text",children:"Хотите создать бронирование на другую дату?"}),(0,jsx_runtime.jsxs)("div",{className:"bookings-card__button-container",children:[(0,jsx_runtime.jsx)(Button.Z,{btnText:"Нет",btnType:"button",btnClass:"button__profile-transparent button_type_cancel",onClick:function onClick(){handleCloseBookingPopup(),onUpdateStatus(item.id)}}),(0,jsx_runtime.jsx)(react_router_dom_dist.rU,{to:"/points/".concat(item.location_id),children:(0,jsx_runtime.jsx)(Button.Z,{btnText:"Создать",btnType:"button",btnClass:"button_type_createorder",onClick:handleOpenReviewForm})})]})]}):isReviewFormOpen?(0,jsx_runtime.jsx)(ReviewsForm.Z,{onSubmit:function handleReviewSubmit(data){setServerError(null),(0,Api.zU)(item.location_id,item.spot,item.id,data).then((function(){handleClosePopup(),onReviewSubmit(item.id),showMessage(constants.Ue,"info")})).catch((function(e){setServerError(e.booked_spot[0])})).finally((function(){}))},serverError:serverError}):(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)("p",{className:"bookings-card__popup-text",children:[(0,utils.cJ)(item),(0,jsx_runtime.jsx)("br",{}),"Вы уверены, что хотите отменить его?"]}),(0,jsx_runtime.jsxs)("div",{className:"bookings-card__button-container",children:[(0,jsx_runtime.jsx)(Button.Z,{btnText:"Назад",btnClass:"button__profile-transparent button_type_cancel",onClick:handleCloseBookingPopup}),(0,jsx_runtime.jsx)(Button.Z,{btnText:"Да, отменить",btnClass:"button_type_order",onClick:function handleConfirmCancellation(){(0,Api.sl)(item.location_id,item.spot,item.id).then((function(){setIsCancellationConfirmed(!0)})).catch((function(){return showMessage(constants.SJ)})).finally((function(){}))}})]})]}),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)("li",{className:(0,clsx.Z)("bookings-card",{"fade-in":isMounted}),children:[(0,jsx_runtime.jsx)("img",{className:"bookings-card__image",src:null==item?void 0:item.location_photo,alt:item.location_name}),(0,jsx_runtime.jsxs)("div",{className:"bookings-card__text-container",children:[(0,jsx_runtime.jsx)("h3",{className:"bookings-card__name",children:item.location_name}),(0,jsx_runtime.jsx)("div",{className:"bookings-card__status",children:statusLabels[item.status]}),(0,jsx_runtime.jsxs)("div",{className:"bookings-card__date-row",children:[(0,jsx_runtime.jsx)("img",{src:time,alt:"Иконка часов"}),(0,jsx_runtime.jsxs)("div",{className:"bookings-card__date-container",children:[(0,jsx_runtime.jsx)("p",{className:"bookings-card__date",children:(0,utils.p6)(item.date)}),(0,jsx_runtime.jsxs)("p",{className:"bookings-card__date",children:[item.start_time,"-",item.end_time]})]}),(0,jsx_runtime.jsxs)("div",{className:"bookings-card__price-container",children:[(0,jsx_runtime.jsx)("img",{src:card,alt:"Иконка платежной карты"}),(0,jsx_runtime.jsxs)("span",{className:"bookings-card__price",children:[item.bill," ₽"]})]})]}),item.isFinished?(0,jsx_runtime.jsx)(Button.Z,{btnText:null===item.reviews?"Оставить отзыв":"Отзыв оставлен",btnClass:"button_width-bookings button_type_sendreview",onClick:handleOpenReviewForm,isValidBtn:null===item.reviews&&function shouldButtonBeDisabled(){return item.status!==constants.rq.CANCEL}()}):(0,jsx_runtime.jsx)(Button.Z,{btnText:item.status!==constants.rq.WAIT_PAY?"Отменить":"Оплатить",btnClass:item.status!==constants.rq.WAIT_PAY?"button__profile-small button_type_transparent button_width-bookings":"button__profile-small button_type_order button_width-bookings",onClick:function onClick(){return function handleCardAction(status){status===constants.rq.WAIT_PAY?navigate("/payments",{state:{id:item.location_id,spotId:item.spot,name:item.location_name,location_name:item.location_name,date:item.date,startTime:item.start_time,endTime:item.end_time,bill:item.bill,orderId:item.id}}):handleOpenPopup()}(item.status)}})]})]},item.id),(0,jsx_runtime.jsx)(Popup.Z,{isOpen:isOpenPopup,popupClass:"bookings-card__popup popup_type_whitemobile",onClickClose:function onClickClose(){handleCloseBookingPopup(),isCancellationConfirmed&&onUpdateStatus(item.id)},children:content})]})};BookingsCard_BookingsCard.defaultProps={item:prop_types_default().shape({}),onUpdateStatus:void 0,onReviewSubmit:void 0},BookingsCard_BookingsCard.__docgenInfo={description:"",methods:[],displayName:"BookingsCard",props:{item:{defaultValue:{value:"PropTypes.shape({})",computed:!0},description:"",type:{name:"shape",value:{id:{name:"number",required:!1},location_photo:{name:"string",required:!1},location_name:{name:"string",required:!1},location_id:{name:"number",required:!1},spot:{name:"number",required:!1},date:{name:"string",required:!1},start_time:{name:"string",required:!1},end_time:{name:"string",required:!1},bill:{name:"number",required:!1},isFinished:{name:"bool",required:!1},reviews:{name:"number",required:!1},status:{name:"enum",value:[{value:"ORDER_STATUSES.WAIT_PAY",computed:!0},{value:"ORDER_STATUSES.PAID",computed:!0},{value:"ORDER_STATUSES.FINISH",computed:!0},{value:"ORDER_STATUSES.CANCEL",computed:!0},{value:"ORDER_STATUSES.NOT_PAID",computed:!0}],required:!1}}},required:!1},onUpdateStatus:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"func"},required:!1},onReviewSubmit:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"func"},required:!1}}}},"./src/hooks/usePopupOpen.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return usePopupOpen}});var _home_runner_work_book_it_coworking_frontend_book_it_coworking_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_router_dom__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react-router/dist/index.js"),_utils_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/utils.js"),_utils_constants__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/constants.jsx"),_useApiError__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/hooks/useApiError.js");function usePopupOpen(){var _location$state,location=(0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.TH)(),clearApiError=(0,_useApiError__WEBPACK_IMPORTED_MODULE_3__.Z)().clearApiError,_React$useState=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1),_React$useState2=(0,_home_runner_work_book_it_coworking_frontend_book_it_coworking_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__.Z)(_React$useState,2),isOpenPopup=_React$useState2[0],setIsOpenPopup=_React$useState2[1],_React$useState3=react__WEBPACK_IMPORTED_MODULE_0__.useState(null==location||null===(_location$state=location.state)||void 0===_location$state?void 0:_location$state.previousLocation),_React$useState4=(0,_home_runner_work_book_it_coworking_frontend_book_it_coworking_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__.Z)(_React$useState3,2),previousLocation=_React$useState4[0],setPreviousLocation=_React$useState4[1],showPopup=(0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.p9)(_utils_constants__WEBPACK_IMPORTED_MODULE_2__.Xd,location),handleClosePopup=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((function(){setIsOpenPopup(!1),document.body.style.overflow="auto",showPopup&&(clearApiError(),setPreviousLocation(null),window.history.replaceState(null,null,"/"))}),[clearApiError,showPopup]);return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((function(){function closeByEscape(evt){"Escape"===evt.key&&handleClosePopup()}function closeByOverlayClick(evt){(evt.target.classList.contains("popup")||evt.target.classList.contains("button_type_close"))&&handleClosePopup()}return isOpenPopup&&(document.addEventListener("keydown",closeByEscape),document.addEventListener("click",closeByOverlayClick)),function(){document.removeEventListener("keydown",closeByEscape),document.removeEventListener("click",closeByOverlayClick)}}),[isOpenPopup,handleClosePopup]),{isOpenPopup:isOpenPopup,handleOpenPopup:function handleOpenPopup(){setIsOpenPopup(!0),setPreviousLocation(location),document.body.style.overflow="hidden"},handleClosePopup:handleClosePopup,previousLocation:previousLocation}}},"./src/utils/utils.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{CN:function(){return formatPhone},cJ:function(){return getPopupText},nD:function(){return generateCenterFromPoints},nG:function(){return getMaxDate},p6:function(){return formatDate},p9:function(){return checkPath},vX:function(){return formatEventDate},z4:function(){return checkMobile}});var _constants__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/constants.jsx");function formatEventDate(date){var dateComponents=date.split("-"),year=dateComponents[0].slice(2),month=dateComponents[1],day=dateComponents[2];return"".concat(month,"/").concat(day,"/").concat(year)}var generateCenterFromPoints=function generateCenterFromPoints(points){if(0===points.length)return[_constants__WEBPACK_IMPORTED_MODULE_0__.mV,_constants__WEBPACK_IMPORTED_MODULE_0__.H6];var totalLat=points.reduce((function(sum,point){return sum+point.coordinates[0]}),0),totalLng=points.reduce((function(sum,point){return sum+point.coordinates[1]}),0);return[totalLat/points.length,totalLng/points.length]},checkPath=function checkPath(el,location){return el.includes(location.pathname)};function formatPhone(phoneNumber){return phoneNumber.replace(/\D/g,"").replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/,"+$1 $2 $3 $4 $5")}function formatDate(dateString){return new Date(dateString).toLocaleDateString("ru-RU",{year:"numeric",month:"long",day:"numeric"}).replace(/ г\.$/,"")}var getPopupText=function getPopupText(booking){return booking.status===_constants__WEBPACK_IMPORTED_MODULE_0__.rq.PAID?"Бронирование уже оплачено.":booking.status===_constants__WEBPACK_IMPORTED_MODULE_0__.rq.WAIT_PAY||_constants__WEBPACK_IMPORTED_MODULE_0__.rq.NOT_PAID?"Бронирование еще находится в обработке.":"Отменить бронирование"},getMaxDate=function getMaxDate(){return(new Date).toISOString().split("T")[0]},checkMobile=function checkMobile(){return window.matchMedia("(max-width: 767px)").matches}},"./src/images/dummy-spot2.jpg":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__.p+"04ff475c35a85ed7a793.jpg"}}]);