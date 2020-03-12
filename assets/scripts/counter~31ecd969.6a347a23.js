(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./src/lib/identity.ts
var identity = function identity(it) {
  return it;
};

/* harmony default export */ var lib_identity = (identity);
// CONCATENATED MODULE: ./src/lib/guards/commonGuards.ts
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isOneOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return optional; });
/* unused harmony export isObject */

var isOneOf = function isOneOf() {
  for (var _len = arguments.length, options = new Array(_len), _key = 0; _key < _len; _key++) {
    options[_key] = arguments[_key];
  }

  return function (input) {
    return options.some(function (option) {
      return option === input;
    });
  };
};
var optional = function optional(isT) {
  return function (input) {
    if (input === undefined) {
      return true;
    }

    return isT(input);
  };
};
var commonGuards_isObject = function isObject(isT) {
  return function (input) {
    return Object.values(isT(input)).every(lib_identity);
  };
};

/***/ }),

/***/ 294:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"Spacer":"src-components-Nav-classes__Spacer--36ovl","LocaleSelectLabel":"src-components-Nav-classes__LocaleSelectLabel--3h3DV","LocaleSelectInput":"src-components-Nav-classes__LocaleSelectInput--3oNu1","LocaleSelectSelectIcon":"src-components-Nav-classes__LocaleSelectSelectIcon--2AyFk","LocaleSelectInputUnderline":"src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx"};
    if(false) { var cssReload; }
  

/***/ }),

/***/ 295:
/***/ (function(module) {

module.exports = JSON.parse("{\"ja\":\"日本語\",\"en\":\"English\"}");

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__(10);
var taggedTemplateLiteral_default = /*#__PURE__*/__webpack_require__.n(taggedTemplateLiteral);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(23);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: ./node_modules/react-intl/lib/components/message.js
var message = __webpack_require__(327);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/AppBar/AppBar.js
var AppBar = __webpack_require__(367);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/IconButton/IconButton.js
var IconButton = __webpack_require__(369);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Menu/Menu.js + 9 modules
var Menu = __webpack_require__(352);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Toolbar/Toolbar.js
var Toolbar = __webpack_require__(368);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Menu.js
var icons_Menu = __webpack_require__(305);
var Menu_default = /*#__PURE__*/__webpack_require__.n(icons_Menu);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(49);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(92);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 22 modules
var es = __webpack_require__(58);

// EXTERNAL MODULE: ./node_modules/uuid/dist/esm-browser/v4.js + 2 modules
var v4 = __webpack_require__(114);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/FilledInput/FilledInput.js
var FilledInput = __webpack_require__(372);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/FormControl/FormControl.js
var FormControl = __webpack_require__(370);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Input/Input.js
var Input = __webpack_require__(371);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/InputLabel/InputLabel.js + 1 modules
var InputLabel = __webpack_require__(393);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/OutlinedInput/OutlinedInput.js + 1 modules
var OutlinedInput = __webpack_require__(392);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Select/Select.js + 4 modules
var Select = __webpack_require__(385);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/useTheme.js
var useTheme = __webpack_require__(57);

// EXTERNAL MODULE: ./src/lib/contexts/IntlProviderContext.ts
var IntlProviderContext = __webpack_require__(117);

// EXTERNAL MODULE: ./src/lib/languageNameSolver/__data__/tagNativeNameMap.json
var tagNativeNameMap = __webpack_require__(295);

// CONCATENATED MODULE: ./src/lib/languageNameSolver/index.ts

function isTag(tag) {
  return typeof tag === 'string' && tag in tagNativeNameMap;
}
function getNativeNameByTag(tag) {
  return tagNativeNameMap[tag];
}
// EXTERNAL MODULE: ./src/redux/modules/localeSelector.ts + 1 modules
var localeSelector = __webpack_require__(116);

// EXTERNAL MODULE: ./node_modules/@formatjs/macro/dist/index.js
var dist = __webpack_require__(326);

// CONCATENATED MODULE: ./src/components/LocaleSelect/messages.ts

/* harmony default export */ var messages = (Object(dist["defineMessages"])({
  languages: {
    "id": "src.components.LocaleSelect.languages",
    "defaultMessage": 'Languages'
  }
}));
// CONCATENATED MODULE: ./src/components/LocaleSelect/index.tsx


















var LocaleSelect_LocaleSelect = function LocaleSelect(_ref) {
  var _theme$props2, _theme$props2$MuiForm;

  var classes = _ref.classes,
      FormControlProps = _ref.FormControlProps,
      locale = _ref.locale,
      selectLocale = _ref.selectLocale;

  var _useState = Object(react["useState"])(0),
      _useState2 = slicedToArray_default()(_useState, 2),
      labelWidth = _useState2[0],
      setLabelWidth = _useState2[1];

  var inputId = Object(react["useMemo"])(v4["a" /* default */], []);
  var theme = Object(useTheme["a" /* default */])(); // NOTE: Fortunately, FormControl is nothing but FormControl.

  var variant = Object(react["useMemo"])(function () {
    var _ref2, _ref3, _theme$props, _theme$props$MuiFormC;

    return (_ref2 = (_ref3 = FormControlProps === null || FormControlProps === void 0 ? void 0 : FormControlProps.variant) !== null && _ref3 !== void 0 ? _ref3 : theme === null || theme === void 0 ? void 0 : (_theme$props = theme.props) === null || _theme$props === void 0 ? void 0 : (_theme$props$MuiFormC = _theme$props.MuiFormControl) === null || _theme$props$MuiFormC === void 0 ? void 0 : _theme$props$MuiFormC.variant) !== null && _ref2 !== void 0 ? _ref2 : 'standard';
  }, [FormControlProps === null || FormControlProps === void 0 ? void 0 : FormControlProps.variant, theme === null || theme === void 0 ? void 0 : (_theme$props2 = theme.props) === null || _theme$props2 === void 0 ? void 0 : (_theme$props2$MuiForm = _theme$props2.MuiFormControl) === null || _theme$props2$MuiForm === void 0 ? void 0 : _theme$props2$MuiForm.variant]);
  var rootClassName = Object(react["useMemo"])(function () {
    return classnames_default()(classes === null || classes === void 0 ? void 0 : classes.root, FormControlProps === null || FormControlProps === void 0 ? void 0 : FormControlProps.className);
  }, [classes === null || classes === void 0 ? void 0 : classes.root, FormControlProps === null || FormControlProps === void 0 ? void 0 : FormControlProps.className]);
  var labelClassName = Object(react["useMemo"])(function () {
    return classnames_default()(classes === null || classes === void 0 ? void 0 : classes.label);
  }, [classes === null || classes === void 0 ? void 0 : classes.label]);
  var inputClassName = Object(react["useMemo"])(function () {
    return classnames_default()(classes === null || classes === void 0 ? void 0 : classes.input);
  }, [classes === null || classes === void 0 ? void 0 : classes.input]);
  var selectIconClassName = Object(react["useMemo"])(function () {
    return classnames_default()(classes === null || classes === void 0 ? void 0 : classes.selectIcon);
  }, [classes === null || classes === void 0 ? void 0 : classes.selectIcon]);
  var inputUnderlineClassName = Object(react["useMemo"])(function () {
    return classnames_default()(classes === null || classes === void 0 ? void 0 : classes.inputUnderline);
  }, [classes === null || classes === void 0 ? void 0 : classes.inputUnderline]);
  var inputLabel = Object(react["useCallback"])(function (node) {
    // TODO: type
    if (node !== null) {
      setLabelWidth(node.offsetWidth);
    }
  }, []);
  var handleChange = Object(react["useCallback"])(function (event) {
    if (isTag(event.target.value)) {
      selectLocale(event.target.value);
    }
  }, []);

  var _useContext = Object(react["useContext"])(IntlProviderContext["a" /* default */]),
      availableLocales = _useContext.availableLocales;

  return react_default.a.createElement(FormControl["a" /* default */], extends_default()({}, FormControlProps, {
    className: rootClassName // NOTE: override FormControlProps.className

  }), react_default.a.createElement(InputLabel["a" /* default */], {
    className: labelClassName,
    ref: inputLabel,
    htmlFor: inputId
  }, react_default.a.createElement(message["a" /* default */], messages.languages)), react_default.a.createElement(Select["a" /* default */], {
    classes: {
      icon: selectIconClassName
    },
    "native": true,
    labelWidth: labelWidth,
    value: locale,
    onChange: handleChange,
    id: inputId,
    inputProps: {
      'data-testid': 'localeSelect'
    },
    input: {
      standard: react_default.a.createElement(Input["a" /* default */], {
        className: inputClassName,
        classes: {
          underline: inputUnderlineClassName
        }
      }),
      outlined: react_default.a.createElement(OutlinedInput["a" /* default */], {
        className: inputClassName,
        labelWidth: labelWidth
      }),
      filled: react_default.a.createElement(FilledInput["a" /* default */], {
        className: inputClassName
      })
    }[variant]
  }, availableLocales === null || availableLocales === void 0 ? void 0 : availableLocales.map(function (availableLocale, i) {
    return react_default.a.createElement("option", {
      key: i,
      value: availableLocale
    }, getNativeNameByTag(availableLocale));
  })));
}; // connect

var mapStateToProps = function mapStateToProps(_ref4) {
  var locale = _ref4.localeSelector.locale;
  return {
    locale: locale
  };
};

var mapDispatchToProps = {
  selectLocale: localeSelector["c" /* selectLocale */]
};
/* harmony default export */ var components_LocaleSelect = (Object(es["c" /* connect */])(mapStateToProps, mapDispatchToProps)(LocaleSelect_LocaleSelect));
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(42);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/MenuItem/MenuItem.js
var MenuItem = __webpack_require__(375);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(12);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(16);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(18);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(17);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(19);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(308);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Link/Link.js
var Link_Link = __webpack_require__(374);

// EXTERNAL MODULE: ./src/lib/guards/commonGuards.ts + 1 modules
var commonGuards = __webpack_require__(293);

// EXTERNAL MODULE: ./src/lib/typed.ts
var typed = __webpack_require__(11);

// CONCATENATED MODULE: ./src/lib/components/Link/index.tsx









function _templateObject() {
  var data = taggedTemplateLiteral_default()(["", " is not a Material-UI Typography color."]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var isTypographyColor = Object(commonGuards["b" /* optional */])(Object(commonGuards["a" /* isOneOf */])('initial', 'inherit', 'primary', 'secondary', 'textPrimary', 'textSecondary', 'error')); // TODO: delete this; See also https://material-ui.com/guides/composition/#link

var RouterLinkWithRef = react_default.a.forwardRef(function (props, ref) {
  return react_default.a.createElement(react_router_dom["a" /* Link */], extends_default()({
    innerRef: ref
  }, props));
});

var components_Link_Link =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(Link, _React$Component);

  function Link() {
    classCallCheck_default()(this, Link);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(Link).apply(this, arguments));
  }

  createClass_default()(Link, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          color = _this$props.color,
          restProps = objectWithoutProperties_default()(_this$props, ["color"]);

      if (!isTypographyColor(color)) {
        console.warn(Object(typed["a" /* default */])(_templateObject(), color)); // tslint:disable-line:no-console

        return react_default.a.createElement(Link_Link["a" /* default */], extends_default()({
          component: RouterLinkWithRef
        }, restProps));
      }

      return react_default.a.createElement(Link_Link["a" /* default */], extends_default()({
        component: RouterLinkWithRef,
        color: color
      }, restProps));
    }
  }]);

  return Link;
}(react_default.a.Component);


// CONCATENATED MODULE: ./src/lib/components/MenuItemLink/index.tsx





var MenuItemLink = react["forwardRef"](function (_ref, menuItem) {
  var to = _ref.to,
      button = _ref.button,
      innerRef = _ref.innerRef,
      menuItemProps = objectWithoutProperties_default()(_ref, ["to", "button", "innerRef"]);

  // See https://material-ui.com/guides/composition/#link
  var LinkWithRef = react["forwardRef"](function (linkProps, link) {
    return react["createElement"](components_Link_Link, extends_default()({
      ref: link,
      innerRef: innerRef,
      color: "inherit",
      underline: "none"
    }, linkProps));
  });
  return react["createElement"](MenuItem["a" /* default */], extends_default()({
    button: true,
    component: LinkWithRef,
    to: to,
    ref: menuItem
  }, menuItemProps));
});
/* harmony default export */ var components_MenuItemLink = (MenuItemLink);
// EXTERNAL MODULE: ./src/components/Nav/classes.css
var Nav_classes = __webpack_require__(294);
var classes_default = /*#__PURE__*/__webpack_require__.n(Nav_classes);

// CONCATENATED MODULE: ./src/components/Nav/messages.ts

/* harmony default export */ var Nav_messages = (Object(dist["defineMessages"])({
  home: {
    "id": "src.components.Nav.home",
    "defaultMessage": 'home'
  },
  chess: {
    "id": "src.components.Nav.chess",
    "defaultMessage": 'chess'
  },
  counter: {
    "id": "src.components.Nav.counter",
    "defaultMessage": 'counter'
  },
  info: {
    "id": "src.components.Nav.info",
    "defaultMessage": 'info'
  },
  reminder: {
    "id": "src.components.Nav.reminder",
    "defaultMessage": 'reminder'
  }
}));
// CONCATENATED MODULE: ./src/components/Nav/index.tsx

// import classnames from 'classnames'





 // import { createStyles, makeStyles } from '@material-ui/core/styles'


 // TODO





var Nav_Nav = function Nav() {
  var _useState = Object(react["useState"])(null),
      _useState2 = slicedToArray_default()(_useState, 2),
      anchorEl = _useState2[0],
      setAnchorEl = _useState2[1];

  var openMenu = Object(react["useCallback"])(function (event) {
    setAnchorEl(event.currentTarget);
  }, []);
  var closeMenu = Object(react["useCallback"])(function () {
    setAnchorEl(null);
  }, []);
  return react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement(AppBar["a" /* default */], {
    position: "sticky"
  }, react_default.a.createElement(Toolbar["a" /* default */], null, react_default.a.createElement(IconButton["a" /* default */], {
    edge: "start",
    color: "inherit",
    onClick: openMenu
  }, react_default.a.createElement(Menu_default.a, null)), react_default.a.createElement("div", {
    className: classes_default.a.Spacer
  }), react_default.a.createElement(components_LocaleSelect, {
    classes: {
      label: classes_default.a.LocaleSelectLabel,
      input: classes_default.a.LocaleSelectInput,
      selectIcon: classes_default.a.LocaleSelectSelectIcon,
      inputUnderline: classes_default.a.LocaleSelectInputUnderline
    },
    FormControlProps: {
      variant: 'filled'
    }
  }))), react_default.a.createElement(Menu["a" /* default */], {
    open: anchorEl !== null,
    anchorEl: anchorEl,
    onClose: closeMenu
  }, react_default.a.createElement(components_MenuItemLink, {
    to: "/",
    onClick: closeMenu
  }, react_default.a.createElement(message["a" /* default */], Nav_messages.home)), react_default.a.createElement(components_MenuItemLink, {
    to: "/chess",
    onClick: closeMenu
  }, react_default.a.createElement(message["a" /* default */], Nav_messages.chess)), react_default.a.createElement(components_MenuItemLink, {
    to: "/counter",
    onClick: closeMenu
  }, react_default.a.createElement(message["a" /* default */], Nav_messages.counter)), react_default.a.createElement(components_MenuItemLink, {
    to: "/info",
    onClick: closeMenu
  }, react_default.a.createElement(message["a" /* default */], Nav_messages.info)), react_default.a.createElement(components_MenuItemLink, {
    to: "/reminder",
    onClick: closeMenu
  }, react_default.a.createElement(message["a" /* default */], Nav_messages.reminder))));
};

/* harmony default export */ var components_Nav = (Nav_Nav);
// CONCATENATED MODULE: ./src/lib/components/ErrorBoundary/index.ts







var ErrorBoundary_ErrorBoundary =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(ErrorBoundary, _React$Component);

  function ErrorBoundary() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, ErrorBoundary);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(ErrorBoundary)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      hasError: false
    };
    return _this;
  }

  createClass_default()(ErrorBoundary, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          renderError = _this$props.renderError,
          children = _this$props.children;
      var _this$state = this.state,
          hasError = _this$state.hasError,
          error = _this$state.error;

      if (hasError) {
        return renderError(error, children);
      }

      return children;
    }
  }]);

  return ErrorBoundary;
}(react_default.a.Component);

ErrorBoundary_ErrorBoundary.getDerivedStateFromError = function (error) {
  return {
    hasError: true,
    error: error
  };
};

/* harmony default export */ var components_ErrorBoundary = (ErrorBoundary_ErrorBoundary);
// CONCATENATED MODULE: ./src/templates/PageTemplate/index.tsx
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageTemplate_createPage; });


function _templateObject2() {
  var data = taggedTemplateLiteral_default()(["", " is not an error."]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function PageTemplate_templateObject() {
  var data = taggedTemplateLiteral_default()(["", ""]);

  PageTemplate_templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var PageTemplate_PageTemplate = function PageTemplate(_ref) {
  var children = _ref.children;
  var renderError = Object(react["useCallback"])(function (error) {
    if (error instanceof Error) {
      return Object(typed["a" /* default */])(PageTemplate_templateObject(), String(error));
    }

    throw new TypeError(Object(typed["a" /* default */])(_templateObject2(), String(error)));
  }, []);
  return react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement(components_Nav, null), react_default.a.createElement(components_ErrorBoundary, {
    renderError: renderError
  }, children));
};

var PageTemplate_createPage = function createPage(Body) {
  return function (props) {
    return react_default.a.createElement(PageTemplate_PageTemplate, null, react_default.a.createElement(Body, props));
  };
};
/* harmony default export */ var templates_PageTemplate = (PageTemplate_PageTemplate);

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useIntl; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _injectIntl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(115);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);



function useIntl() {
    const intl = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_injectIntl__WEBPACK_IMPORTED_MODULE_1__[/* Context */ "a"]);
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* invariantIntlContext */ "h"])(intl);
    return intl;
}


/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(30);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29);
/* harmony import */ var _styles_colorManipulator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(55);
/* harmony import */ var _ButtonBase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(383);
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(53);









var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, theme.typography.button, {
      boxSizing: 'border-box',
      minWidth: 64,
      padding: '6px 16px',
      borderRadius: theme.shape.borderRadius,
      color: theme.palette.text.primary,
      transition: theme.transitions.create(['background-color', 'box-shadow', 'border'], {
        duration: theme.transitions.duration.short
      }),
      '&:hover': {
        textDecoration: 'none',
        backgroundColor: Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_6__[/* fade */ "d"])(theme.palette.text.primary, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        },
        '&$disabled': {
          backgroundColor: 'transparent'
        }
      },
      '&$disabled': {
        color: theme.palette.action.disabled
      }
    }),

    /* Styles applied to the span element that wraps the children. */
    label: {
      width: '100%',
      // Ensure the correct width for iOS Safari
      display: 'inherit',
      alignItems: 'inherit',
      justifyContent: 'inherit'
    },

    /* Styles applied to the root element if `variant="text"`. */
    text: {
      padding: '6px 8px'
    },

    /* Styles applied to the root element if `variant="text"` and `color="primary"`. */
    textPrimary: {
      color: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_6__[/* fade */ "d"])(theme.palette.primary.main, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    },

    /* Styles applied to the root element if `variant="text"` and `color="secondary"`. */
    textSecondary: {
      color: theme.palette.secondary.main,
      '&:hover': {
        backgroundColor: Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_6__[/* fade */ "d"])(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    },

    /* Styles applied to the root element if `variant="outlined"`. */
    outlined: {
      padding: '5px 15px',
      border: "1px solid ".concat(theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)'),
      '&$disabled': {
        border: "1px solid ".concat(theme.palette.action.disabledBackground)
      }
    },

    /* Styles applied to the root element if `variant="outlined"` and `color="primary"`. */
    outlinedPrimary: {
      color: theme.palette.primary.main,
      border: "1px solid ".concat(Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_6__[/* fade */ "d"])(theme.palette.primary.main, 0.5)),
      '&:hover': {
        border: "1px solid ".concat(theme.palette.primary.main),
        backgroundColor: Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_6__[/* fade */ "d"])(theme.palette.primary.main, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    },

    /* Styles applied to the root element if `variant="outlined"` and `color="secondary"`. */
    outlinedSecondary: {
      color: theme.palette.secondary.main,
      border: "1px solid ".concat(Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_6__[/* fade */ "d"])(theme.palette.secondary.main, 0.5)),
      '&:hover': {
        border: "1px solid ".concat(theme.palette.secondary.main),
        backgroundColor: Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_6__[/* fade */ "d"])(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      },
      '&$disabled': {
        border: "1px solid ".concat(theme.palette.action.disabled)
      }
    },

    /* Styles applied to the root element if `variant="contained"`. */
    contained: {
      color: theme.palette.getContrastText(theme.palette.grey[300]),
      backgroundColor: theme.palette.grey[300],
      boxShadow: theme.shadows[2],
      '&:hover': {
        backgroundColor: theme.palette.grey.A100,
        boxShadow: theme.shadows[4],
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          boxShadow: theme.shadows[2],
          backgroundColor: theme.palette.grey[300]
        },
        '&$disabled': {
          backgroundColor: theme.palette.action.disabledBackground
        }
      },
      '&$focusVisible': {
        boxShadow: theme.shadows[6]
      },
      '&:active': {
        boxShadow: theme.shadows[8]
      },
      '&$disabled': {
        color: theme.palette.action.disabled,
        boxShadow: theme.shadows[0],
        backgroundColor: theme.palette.action.disabledBackground
      }
    },

    /* Styles applied to the root element if `variant="contained"` and `color="primary"`. */
    containedPrimary: {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: theme.palette.primary.dark,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: theme.palette.primary.main
        }
      }
    },

    /* Styles applied to the root element if `variant="contained"` and `color="secondary"`. */
    containedSecondary: {
      color: theme.palette.secondary.contrastText,
      backgroundColor: theme.palette.secondary.main,
      '&:hover': {
        backgroundColor: theme.palette.secondary.dark,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: theme.palette.secondary.main
        }
      }
    },

    /* Styles applied to the root element if `disableElevation={true}`. */
    disableElevation: {
      boxShadow: 'none',
      '&:hover': {
        boxShadow: 'none'
      },
      '&$focusVisible': {
        boxShadow: 'none'
      },
      '&:active': {
        boxShadow: 'none'
      },
      '&$disabled': {
        boxShadow: 'none'
      }
    },

    /* Pseudo-class applied to the ButtonBase root element if the button is keyboard focused. */
    focusVisible: {},

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if `color="inherit"`. */
    colorInherit: {
      color: 'inherit',
      borderColor: 'currentColor'
    },

    /* Styles applied to the root element if `size="small"` and `variant="text"`. */
    textSizeSmall: {
      padding: '4px 5px',
      fontSize: theme.typography.pxToRem(13)
    },

    /* Styles applied to the root element if `size="large"` and `variant="text"`. */
    textSizeLarge: {
      padding: '8px 11px',
      fontSize: theme.typography.pxToRem(15)
    },

    /* Styles applied to the root element if `size="small"` and `variant="outlined"`. */
    outlinedSizeSmall: {
      padding: '3px 9px',
      fontSize: theme.typography.pxToRem(13)
    },

    /* Styles applied to the root element if `size="large"` and `variant="outlined"`. */
    outlinedSizeLarge: {
      padding: '7px 21px',
      fontSize: theme.typography.pxToRem(15)
    },

    /* Styles applied to the root element if `size="small"` and `variant="contained"`. */
    containedSizeSmall: {
      padding: '4px 10px',
      fontSize: theme.typography.pxToRem(13)
    },

    /* Styles applied to the root element if `size="large"` and `variant="contained"`. */
    containedSizeLarge: {
      padding: '8px 22px',
      fontSize: theme.typography.pxToRem(15)
    },

    /* Styles applied to the root element if `size="small"`. */
    sizeSmall: {},

    /* Styles applied to the root element if `size="large"`. */
    sizeLarge: {},

    /* Styles applied to the root element if `fullWidth={true}`. */
    fullWidth: {
      width: '100%'
    },

    /* Styles applied to the startIcon element if supplied. */
    startIcon: {
      display: 'inherit',
      marginRight: 8,
      marginLeft: -4,
      '&$iconSizeSmall': {
        marginLeft: -2
      }
    },

    /* Styles applied to the endIcon element if supplied. */
    endIcon: {
      display: 'inherit',
      marginRight: -4,
      marginLeft: 8,
      '&$iconSizeSmall': {
        marginRight: -2
      }
    },

    /* Styles applied to the icon element if supplied and `size="small"`. */
    iconSizeSmall: {
      '& > *:first-child': {
        fontSize: 18
      }
    },

    /* Styles applied to the icon element if supplied and `size="medium"`. */
    iconSizeMedium: {
      '& > *:first-child': {
        fontSize: 20
      }
    },

    /* Styles applied to the icon element if supplied and `size="large"`. */
    iconSizeLarge: {
      '& > *:first-child': {
        fontSize: 22
      }
    }
  };
};
var Button = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function Button(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'default' : _props$color,
      _props$component = props.component,
      component = _props$component === void 0 ? 'button' : _props$component,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$disableElevati = props.disableElevation,
      disableElevation = _props$disableElevati === void 0 ? false : _props$disableElevati,
      _props$disableFocusRi = props.disableFocusRipple,
      disableFocusRipple = _props$disableFocusRi === void 0 ? false : _props$disableFocusRi,
      endIconProp = props.endIcon,
      focusVisibleClassName = props.focusVisibleClassName,
      _props$fullWidth = props.fullWidth,
      fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
      _props$size = props.size,
      size = _props$size === void 0 ? 'medium' : _props$size,
      startIconProp = props.startIcon,
      _props$type = props.type,
      type = _props$type === void 0 ? 'button' : _props$type,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'text' : _props$variant,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(props, ["children", "classes", "className", "color", "component", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"]);

  var startIcon = startIconProp && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(classes.startIcon, classes["iconSize".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(size))])
  }, startIconProp);
  var endIcon = endIconProp && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(classes.endIcon, classes["iconSize".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(size))])
  }, endIconProp);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ButtonBase__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(classes.root, classes[variant], className, color === 'inherit' ? classes.colorInherit : color !== 'default' && classes["".concat(variant).concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(color))], size !== 'medium' && [classes["".concat(variant, "Size").concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(size))], classes["size".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(size))]], disableElevation && classes.disableElevation, disabled && classes.disabled, fullWidth && classes.fullWidth),
    component: component,
    disabled: disabled,
    focusRipple: !disableFocusRipple,
    focusVisibleClassName: Object(clsx__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(classes.focusVisible, focusVisibleClassName),
    ref: ref,
    type: type
  }, other), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: classes.label
  }, startIcon, children, endIcon));
});
 false ? undefined : void 0;
/* harmony default export */ __webpack_exports__["a"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(styles, {
  name: 'MuiButton'
})(Button));

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-helmet/lib/Helmet.js
var Helmet = __webpack_require__(118);
var Helmet_default = /*#__PURE__*/__webpack_require__.n(Helmet);

// EXTERNAL MODULE: ./node_modules/react-intl/lib/components/useIntl.js
var useIntl = __webpack_require__(316);

// EXTERNAL MODULE: ./node_modules/react-intl/lib/components/message.js
var message = __webpack_require__(327);

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 22 modules
var es = __webpack_require__(58);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__(320);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/react-is/index.js
var react_is = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(30);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/capitalize.js
var capitalize = __webpack_require__(53);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/colorManipulator.js
var colorManipulator = __webpack_require__(55);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js + 1 modules
var withStyles = __webpack_require__(29);

// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/ButtonGroup/ButtonGroup.js









 // Force a side effect so we don't have any override priority issue.
// eslint-disable-next-line no-unused-expressions

Button["a" /* default */].styles;
var ButtonGroup_styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'inline-flex',
      borderRadius: theme.shape.borderRadius
    },

    /* Styles applied to the root element if `variant="contained"`. */
    contained: {
      boxShadow: theme.shadows[2]
    },

    /* Pseudo-class applied to child elements if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if `fullWidth={true}`. */
    fullWidth: {
      width: '100%'
    },

    /* Styles applied to the root element if `orientation="vertical"`. */
    vertical: {
      flexDirection: 'column'
    },

    /* Styles applied to the children. */
    grouped: {
      minWidth: 40
    },

    /* Styles applied to the children if `orientation="horizontal"`. */
    groupedHorizontal: {
      '&:not(:first-child)': {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0
      },
      '&:not(:last-child)': {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0
      }
    },

    /* Styles applied to the children if `orientation="vertical"`. */
    groupedVertical: {
      '&:not(:first-child)': {
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0
      },
      '&:not(:last-child)': {
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0
      }
    },

    /* Styles applied to the children if `variant="text"`. */
    groupedText: {},

    /* Styles applied to the children if `variant="text"` and `orientation="horizontal"`. */
    groupedTextHorizontal: {
      '&:not(:last-child)': {
        borderRight: "1px solid ".concat(theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)')
      }
    },

    /* Styles applied to the children if `variant="text"` and `orientation="vertical"`. */
    groupedTextVertical: {
      '&:not(:last-child)': {
        borderBottom: "1px solid ".concat(theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)')
      }
    },

    /* Styles applied to the children if `variant="text"` and `color="primary"`. */
    groupedTextPrimary: {
      '&:not(:last-child)': {
        borderColor: Object(colorManipulator["d" /* fade */])(theme.palette.primary.main, 0.5)
      }
    },

    /* Styles applied to the children if `variant="text"` and `color="secondary"`. */
    groupedTextSecondary: {
      '&:not(:last-child)': {
        borderColor: Object(colorManipulator["d" /* fade */])(theme.palette.secondary.main, 0.5)
      }
    },

    /* Styles applied to the children if `variant="outlined"`. */
    groupedOutlined: {},

    /* Styles applied to the children if `variant="outlined"` and `orientation="horizontal"`. */
    groupedOutlinedHorizontal: {
      '&:not(:first-child)': {
        marginLeft: -1
      },
      '&:not(:last-child)': {
        borderRightColor: 'transparent'
      }
    },

    /* Styles applied to the children if `variant="outlined"` and `orientation="vertical"`. */
    groupedOutlinedVertical: {
      '&:not(:first-child)': {
        marginTop: -1
      },
      '&:not(:last-child)': {
        borderBottomColor: 'transparent'
      }
    },

    /* Styles applied to the children if `variant="outlined"` and `color="primary"`. */
    groupedOutlinedPrimary: {
      '&:hover': {
        borderColor: theme.palette.primary.main
      }
    },

    /* Styles applied to the children if `variant="outlined"` and `color="secondary"`. */
    groupedOutlinedSecondary: {
      '&:hover': {
        borderColor: theme.palette.secondary.main
      }
    },

    /* Styles applied to the children if `variant="contained"`. */
    groupedContained: {
      boxShadow: 'none'
    },

    /* Styles applied to the children if `variant="contained"` and `orientation="horizontal"`. */
    groupedContainedHorizontal: {
      '&:not(:last-child)': {
        borderRight: "1px solid ".concat(theme.palette.grey[400]),
        '&$disabled': {
          borderRight: "1px solid ".concat(theme.palette.action.disabled)
        }
      }
    },

    /* Styles applied to the children if `variant="contained"` and `orientation="vertical"`. */
    groupedContainedVertical: {
      '&:not(:last-child)': {
        borderBottom: "1px solid ".concat(theme.palette.grey[400]),
        '&$disabled': {
          borderBottom: "1px solid ".concat(theme.palette.action.disabled)
        }
      }
    },

    /* Styles applied to the children if `variant="contained"` and `color="primary"`. */
    groupedContainedPrimary: {
      '&:not(:last-child)': {
        borderColor: theme.palette.primary.dark
      }
    },

    /* Styles applied to the children if `variant="contained"` and `color="secondary"`. */
    groupedContainedSecondary: {
      '&:not(:last-child)': {
        borderColor: theme.palette.secondary.dark
      }
    }
  };
};
var ButtonGroup_ButtonGroup = react_default.a.forwardRef(function ButtonGroup(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'default' : _props$color,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$disableFocusRi = props.disableFocusRipple,
      disableFocusRipple = _props$disableFocusRi === void 0 ? false : _props$disableFocusRi,
      _props$disableRipple = props.disableRipple,
      disableRipple = _props$disableRipple === void 0 ? false : _props$disableRipple,
      _props$fullWidth = props.fullWidth,
      fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
      _props$orientation = props.orientation,
      orientation = _props$orientation === void 0 ? 'horizontal' : _props$orientation,
      _props$size = props.size,
      size = _props$size === void 0 ? 'medium' : _props$size,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'outlined' : _props$variant,
      other = Object(objectWithoutProperties["a" /* default */])(props, ["children", "classes", "className", "color", "component", "disabled", "disableFocusRipple", "disableRipple", "fullWidth", "orientation", "size", "variant"]);

  var buttonClassName = Object(clsx_m["a" /* default */])(classes.grouped, classes["grouped".concat(Object(capitalize["a" /* default */])(orientation))], classes["grouped".concat(Object(capitalize["a" /* default */])(variant))], classes["grouped".concat(Object(capitalize["a" /* default */])(variant)).concat(Object(capitalize["a" /* default */])(orientation))], classes["grouped".concat(Object(capitalize["a" /* default */])(variant)).concat(color !== 'default' ? Object(capitalize["a" /* default */])(color) : '')], disabled && classes.disabled);
  return react_default.a.createElement(Component, Object(esm_extends["a" /* default */])({
    role: "group",
    className: Object(clsx_m["a" /* default */])(classes.root, className, fullWidth && classes.fullWidth, variant === 'contained' && classes.contained, orientation === 'vertical' && classes.vertical),
    ref: ref
  }, other), react_default.a.Children.map(children, function (child) {
    if (!react_default.a.isValidElement(child)) {
      return null;
    }

    if (false) {}

    return react_default.a.cloneElement(child, {
      className: Object(clsx_m["a" /* default */])(buttonClassName, child.props.className),
      disabled: child.props.disabled || disabled,
      color: child.props.color || color,
      disableFocusRipple: disableFocusRipple,
      disableRipple: disableRipple,
      fullWidth: fullWidth,
      size: child.props.size || size,
      variant: child.props.variant || variant
    });
  }));
});
 false ? undefined : void 0;
/* harmony default export */ var esm_ButtonGroup_ButtonGroup = (Object(withStyles["a" /* default */])(ButtonGroup_styles, {
  name: 'MuiButtonGroup'
})(ButtonGroup_ButtonGroup));
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(366);

// EXTERNAL MODULE: ./src/redux/modules/counter.ts
var counter = __webpack_require__(102);

// EXTERNAL MODULE: ./node_modules/@formatjs/macro/dist/index.js
var dist = __webpack_require__(326);

// CONCATENATED MODULE: ./src/components/Counter/messages.ts

/* harmony default export */ var messages = (Object(dist["defineMessages"])({
  reset: {
    "id": "src.components.Counter.reset",
    "defaultMessage": 'reset'
  },
  increment: {
    "id": "src.components.Counter.increment",
    "defaultMessage": '+'
  },
  decrement: {
    "id": "src.components.Counter.decrement",
    "defaultMessage": '-'
  },
  incrementIfOdd: {
    "id": "src.components.Counter.incrementIfOdd",
    "defaultMessage": '+ if odd'
  },
  willIncrementInOneSecond: {
    "id": "src.components.Counter.willIncrementInOneSecond",
    "defaultMessage": '+ in 1 second'
  }
}));
// CONCATENATED MODULE: ./src/components/Counter/index.tsx








var Counter_Counter = function Counter(_ref) {
  var value = _ref.value,
      reset = _ref.reset,
      increment = _ref.increment,
      decrement = _ref.decrement,
      incrementIfOdd = _ref.incrementIfOdd,
      incrementAsync = _ref.incrementAsync;
  var handleIncrementAsync = Object(react["useCallback"])(function () {
    incrementAsync(1000);
  }, []);
  return react_default.a.createElement("div", null, react_default.a.createElement(Typography["a" /* default */], {
    component: "span"
  }, value), react_default.a.createElement(esm_ButtonGroup_ButtonGroup, null, react_default.a.createElement(Button["a" /* default */], {
    onClick: reset
  }, react_default.a.createElement(message["a" /* default */], messages.reset)), react_default.a.createElement(Button["a" /* default */], {
    onClick: increment
  }, react_default.a.createElement(message["a" /* default */], messages.increment)), react_default.a.createElement(Button["a" /* default */], {
    onClick: decrement
  }, react_default.a.createElement(message["a" /* default */], messages.decrement)), react_default.a.createElement(Button["a" /* default */], {
    onClick: incrementIfOdd,
    "data-testid": "incrementIfOddButton"
  }, react_default.a.createElement(message["a" /* default */], messages.incrementIfOdd)), react_default.a.createElement(Button["a" /* default */], {
    onClick: handleIncrementAsync,
    "data-testid": "incrementAsyncButton"
  }, react_default.a.createElement(message["a" /* default */], messages.willIncrementInOneSecond))));
}; // connect

var mapStateToProps = function mapStateToProps(_ref2) {
  var count = _ref2.counter.count;
  return {
    value: count
  };
};

var mapDispatchToProps = {
  reset: counter["h" /* reset */],
  increment: counter["e" /* increment */],
  decrement: counter["d" /* decrement */],
  incrementIfOdd: counter["g" /* incrementIfOdd */],
  incrementAsync: counter["f" /* incrementAsync */]
};
/* harmony default export */ var components_Counter = (Object(es["c" /* connect */])(mapStateToProps, mapDispatchToProps)(Counter_Counter));
// EXTERNAL MODULE: ./src/templates/PageTemplate/index.tsx + 8 modules
var PageTemplate = __webpack_require__(296);

// CONCATENATED MODULE: ./src/components/App/CounterPage/messages.ts

/* harmony default export */ var CounterPage_messages = (Object(dist["defineMessages"])({
  counter: {
    "id": "src.components.App.CounterPage.counter",
    "defaultMessage": 'counter'
  }
}));
// CONCATENATED MODULE: ./src/components/App/CounterPage/index.tsx







var CounterPage_CounterPage = function CounterPage() {
  var _useIntl = Object(useIntl["a" /* default */])(),
      formatMessage = _useIntl.formatMessage;

  return react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement(Helmet_default.a, {
    title: formatMessage(CounterPage_messages.counter)
  }), react_default.a.createElement(components_Counter, null));
};

/* harmony default export */ var App_CounterPage = __webpack_exports__["default"] = (Object(PageTemplate["a" /* createPage */])(CounterPage_CounterPage));

/***/ })

}]);
//# sourceMappingURL=counter~31ecd969.6a347a23.js.map