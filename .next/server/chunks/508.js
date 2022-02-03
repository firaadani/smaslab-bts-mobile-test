"use strict";
exports.id = 508;
exports.ids = [508];
exports.modules = {

/***/ 529:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z$": () => (/* binding */ ALL_ROOMS_SUCCESS),
/* harmony export */   "Fw": () => (/* binding */ ALL_ROOMS_FAIL),
/* harmony export */   "pp": () => (/* binding */ CLEAR_ERRORS)
/* harmony export */ });
const ALL_ROOMS_SUCCESS = "ALL_ROOMS_SUCCESS";
const ALL_ROOMS_FAIL = "ALL_ROOMS_FAIL";
const CLEAR_ERRORS = "CLEAR_ERRORS";


/***/ }),

/***/ 508:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Y": () => (/* binding */ wrapper)
});

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__(695);
// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__(648);
// EXTERNAL MODULE: external "redux-thunk"
var external_redux_thunk_ = __webpack_require__(417);
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_);
// EXTERNAL MODULE: ./redux/actionTypes/roomConstants.js
var roomConstants = __webpack_require__(529);
;// CONCATENATED MODULE: ./redux/reducers/roomReducers.js

const allRoomsReducer = (state = {
    rooms: []
}, action)=>{
    switch(action.type){
        case roomConstants/* ALL_ROOMS_SUCCESS */.Z$:
            return {
                rooms: action.payload
            };
        case roomConstants/* ALL_ROOMS_FAIL */.Fw:
            return {
                error: action.payload
            };
        case roomConstants/* CLEAR_ERRORS */.pp:
            return {
                ...state,
                error: null
            };
        default:
            return state;
    }
};

;// CONCATENATED MODULE: ./redux/reducers/reducers.js


const reducer = (0,external_redux_.combineReducers)({
    allRooms: allRoomsReducer
});
/* harmony default export */ const reducers = (reducer);

;// CONCATENATED MODULE: ./redux/store.js




const bindMiddleware = (middleware)=>{
    return (0,external_redux_.applyMiddleware)(...middleware);
};
const store_reducer = (state, action)=>{
    if (action.type === external_next_redux_wrapper_.HYDRATE) {
        const nextState = {
            ...state,
            ...action.payload
        };
        return nextState;
    } else {
        return reducers(state, action);
    }
};
const initStore = ()=>{
    return (0,external_redux_.createStore)(store_reducer, bindMiddleware([
        (external_redux_thunk_default())
    ]));
};
const wrapper = (0,external_next_redux_wrapper_.createWrapper)(initStore);


/***/ })

};
;