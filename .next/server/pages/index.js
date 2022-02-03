"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 688:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(725);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
;// CONCATENATED MODULE: ./components/navigationBar/index.js




const index = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "container top-auto flex justify-around align-center min-w-full",
        style: {
            backgroundColor: "green"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: "/",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    children: "nav a"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: "/",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    children: "nav b"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: "/",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    children: "nav c"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: "/",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    children: "nav d"
                })
            })
        ]
    }));
};
/* harmony default export */ const navigationBar = (index);

;// CONCATENATED MODULE: ./components/Layout.js




// import components

const Layout = ({ title , children  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "container h-screen min-h-screen max-h-screen mx-auto max-w-xl relative",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                className: "h-10",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Generated by create next app"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                className: "mb-auto h-full overflow-auto no-scrollbar",
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mt-auto h-14 absolute bottom-0 w-full",
                style: {
                    backgroundColor: "blue"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(navigationBar, {})
            })
        ]
    }));
};
/* harmony default export */ const components_Layout = (Layout);

// EXTERNAL MODULE: ./node_modules/antd/dist/antd.css
var antd = __webpack_require__(722);
// EXTERNAL MODULE: ./redux/actionTypes/roomConstants.js
var roomConstants = __webpack_require__(529);
;// CONCATENATED MODULE: ./redux/actions/roomActions.js

const getRooms = ()=>async (dispatch)=>{
        try {
            console.log("do stuff here");
            dispatch({
                type: roomConstants/* ALL_ROOMS_SUCCESS */.Z$,
                payload: "tester aja"
            });
        } catch (error) {
            dispatch({
                type: roomConstants/* ALL_ROOMS_FAIL */.Fw,
                payload: "ini error"
            });
        }
    }
;

// EXTERNAL MODULE: ./redux/store.js + 2 modules
var store = __webpack_require__(508);
;// CONCATENATED MODULE: ./pages/index.js



// css




function Home() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_Layout, {
        title: "this is home",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: "hello this is index"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: "/dashboard",
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Button, {
                    type: "primary",
                    children: "go to dashboard"
                })
            })
        ]
    }));
};
// export const getServerSideProps = wrapper.getServerSideProps(
//   async ({ req, store }) => {
//     await store.dispatch(getRooms(req));
//   }
// );
const getServerSideProps = store/* wrapper.getServerSideProps */.Y.getServerSideProps((store)=>async ({ req  })=>{
        await store.dispatch(getRooms(req));
    }
);


/***/ }),

/***/ 725:
/***/ ((module) => {

module.exports = require("antd");

/***/ }),

/***/ 648:
/***/ ((module) => {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 14:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 20:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 52:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 422:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 695:
/***/ ((module) => {

module.exports = require("redux");

/***/ }),

/***/ 417:
/***/ ((module) => {

module.exports = require("redux-thunk");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,122,508], () => (__webpack_exec__(688)));
module.exports = __webpack_exports__;

})();