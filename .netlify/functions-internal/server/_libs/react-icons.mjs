import { o as __toESM } from "../_runtime.mjs";
import { r as require_react } from "./react+tanstack__react-query.mjs";
//#region node_modules/react-icons/lib/iconContext.mjs
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var DefaultContext = {
	color: void 0,
	size: void 0,
	className: void 0,
	style: void 0,
	attr: void 0
};
var IconContext = import_react.createContext && /*#__PURE__*/ import_react.createContext(DefaultContext);
//#endregion
//#region node_modules/react-icons/lib/iconBase.mjs
var _excluded = [
	"attr",
	"size",
	"title"
];
function _objectWithoutProperties(e, t) {
	if (null == e) return {};
	var o, r, i = _objectWithoutPropertiesLoose(e, t);
	if (Object.getOwnPropertySymbols) {
		var n = Object.getOwnPropertySymbols(e);
		for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
	}
	return i;
}
function _objectWithoutPropertiesLoose(r, e) {
	if (null == r) return {};
	var t = {};
	for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
		if (-1 !== e.indexOf(n)) continue;
		t[n] = r[n];
	}
	return t;
}
function _extends() {
	return _extends = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends.apply(null, arguments);
}
function ownKeys(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
			_defineProperty(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _defineProperty(e, r, t) {
	return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey(t) {
	var i = _toPrimitive(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
function Tree2Element(tree) {
	return tree && tree.map((node, i) => /*#__PURE__*/ import_react.createElement(node.tag, _objectSpread({ key: i }, node.attr), Tree2Element(node.child)));
}
function GenIcon(data) {
	return (props) => /*#__PURE__*/ import_react.createElement(IconBase, _extends({ attr: _objectSpread({}, data.attr) }, props), Tree2Element(data.child));
}
function IconBase(props) {
	var elem = (conf) => {
		var attr = props.attr, size = props.size, title = props.title, svgProps = _objectWithoutProperties(props, _excluded);
		var computedSize = size || conf.size || "1em";
		var className;
		if (conf.className) className = conf.className;
		if (props.className) className = (className ? className + " " : "") + props.className;
		return /*#__PURE__*/ import_react.createElement("svg", _extends({
			stroke: "currentColor",
			fill: "currentColor",
			strokeWidth: "0"
		}, conf.attr, attr, svgProps, {
			className,
			style: _objectSpread(_objectSpread({ color: props.color || conf.color }, conf.style), props.style),
			height: computedSize,
			width: computedSize,
			xmlns: "http://www.w3.org/2000/svg"
		}), title && /*#__PURE__*/ import_react.createElement("title", null, title), props.children);
	};
	return IconContext !== void 0 ? /*#__PURE__*/ import_react.createElement(IconContext.Consumer, null, (conf) => elem(conf)) : elem(DefaultContext);
}
//#endregion
//#region node_modules/react-icons/hi2/index.mjs
function HiChevronDown(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"viewBox": "0 0 24 24",
			"fill": "currentColor",
			"aria-hidden": "true"
		},
		"child": [{
			"tag": "path",
			"attr": {
				"fillRule": "evenodd",
				"d": "M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z",
				"clipRule": "evenodd"
			},
			"child": []
		}]
	})(props);
}
function HiArrowUp(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"viewBox": "0 0 24 24",
			"fill": "currentColor",
			"aria-hidden": "true"
		},
		"child": [{
			"tag": "path",
			"attr": {
				"fillRule": "evenodd",
				"d": "M11.47 2.47a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06l-6.22-6.22V21a.75.75 0 0 1-1.5 0V4.81l-6.22 6.22a.75.75 0 1 1-1.06-1.06l7.5-7.5Z",
				"clipRule": "evenodd"
			},
			"child": []
		}]
	})(props);
}
function HiArrowRight(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"viewBox": "0 0 24 24",
			"fill": "currentColor",
			"aria-hidden": "true"
		},
		"child": [{
			"tag": "path",
			"attr": {
				"fillRule": "evenodd",
				"d": "M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z",
				"clipRule": "evenodd"
			},
			"child": []
		}]
	})(props);
}
function HiArrowLeft(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"viewBox": "0 0 24 24",
			"fill": "currentColor",
			"aria-hidden": "true"
		},
		"child": [{
			"tag": "path",
			"attr": {
				"fillRule": "evenodd",
				"d": "M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z",
				"clipRule": "evenodd"
			},
			"child": []
		}]
	})(props);
}
function HiOutlineTrophy(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"fill": "none",
			"viewBox": "0 0 24 24",
			"strokeWidth": "1.5",
			"stroke": "currentColor",
			"aria-hidden": "true"
		},
		"child": [{
			"tag": "path",
			"attr": {
				"strokeLinecap": "round",
				"strokeLinejoin": "round",
				"d": "M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"
			},
			"child": []
		}]
	})(props);
}
function HiOutlineSparkles(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"fill": "none",
			"viewBox": "0 0 24 24",
			"strokeWidth": "1.5",
			"stroke": "currentColor",
			"aria-hidden": "true"
		},
		"child": [{
			"tag": "path",
			"attr": {
				"strokeLinecap": "round",
				"strokeLinejoin": "round",
				"d": "M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
			},
			"child": []
		}]
	})(props);
}
function HiOutlineShoppingBag(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"fill": "none",
			"viewBox": "0 0 24 24",
			"strokeWidth": "1.5",
			"stroke": "currentColor",
			"aria-hidden": "true"
		},
		"child": [{
			"tag": "path",
			"attr": {
				"strokeLinecap": "round",
				"strokeLinejoin": "round",
				"d": "M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
			},
			"child": []
		}]
	})(props);
}
function HiOutlineShieldCheck(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"fill": "none",
			"viewBox": "0 0 24 24",
			"strokeWidth": "1.5",
			"stroke": "currentColor",
			"aria-hidden": "true"
		},
		"child": [{
			"tag": "path",
			"attr": {
				"strokeLinecap": "round",
				"strokeLinejoin": "round",
				"d": "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
			},
			"child": []
		}]
	})(props);
}
function HiOutlinePhone(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"fill": "none",
			"viewBox": "0 0 24 24",
			"strokeWidth": "1.5",
			"stroke": "currentColor",
			"aria-hidden": "true"
		},
		"child": [{
			"tag": "path",
			"attr": {
				"strokeLinecap": "round",
				"strokeLinejoin": "round",
				"d": "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
			},
			"child": []
		}]
	})(props);
}
function HiOutlineMapPin(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"fill": "none",
			"viewBox": "0 0 24 24",
			"strokeWidth": "1.5",
			"stroke": "currentColor",
			"aria-hidden": "true"
		},
		"child": [{
			"tag": "path",
			"attr": {
				"strokeLinecap": "round",
				"strokeLinejoin": "round",
				"d": "M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
			},
			"child": []
		}, {
			"tag": "path",
			"attr": {
				"strokeLinecap": "round",
				"strokeLinejoin": "round",
				"d": "M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
			},
			"child": []
		}]
	})(props);
}
function HiOutlineHomeModern(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"fill": "none",
			"viewBox": "0 0 24 24",
			"strokeWidth": "1.5",
			"stroke": "currentColor",
			"aria-hidden": "true"
		},
		"child": [{
			"tag": "path",
			"attr": {
				"strokeLinecap": "round",
				"strokeLinejoin": "round",
				"d": "M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"
			},
			"child": []
		}]
	})(props);
}
function HiOutlineHeart(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"fill": "none",
			"viewBox": "0 0 24 24",
			"strokeWidth": "1.5",
			"stroke": "currentColor",
			"aria-hidden": "true"
		},
		"child": [{
			"tag": "path",
			"attr": {
				"strokeLinecap": "round",
				"strokeLinejoin": "round",
				"d": "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
			},
			"child": []
		}]
	})(props);
}
function HiOutlineEnvelope(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"fill": "none",
			"viewBox": "0 0 24 24",
			"strokeWidth": "1.5",
			"stroke": "currentColor",
			"aria-hidden": "true"
		},
		"child": [{
			"tag": "path",
			"attr": {
				"strokeLinecap": "round",
				"strokeLinejoin": "round",
				"d": "M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
			},
			"child": []
		}]
	})(props);
}
function HiOutlineBuildingOffice2(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"fill": "none",
			"viewBox": "0 0 24 24",
			"strokeWidth": "1.5",
			"stroke": "currentColor",
			"aria-hidden": "true"
		},
		"child": [{
			"tag": "path",
			"attr": {
				"strokeLinecap": "round",
				"strokeLinejoin": "round",
				"d": "M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
			},
			"child": []
		}]
	})(props);
}
function HiOutlineArrowDownTray(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"fill": "none",
			"viewBox": "0 0 24 24",
			"strokeWidth": "1.5",
			"stroke": "currentColor",
			"aria-hidden": "true"
		},
		"child": [{
			"tag": "path",
			"attr": {
				"strokeLinecap": "round",
				"strokeLinejoin": "round",
				"d": "M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
			},
			"child": []
		}]
	})(props);
}
function HiOutlineAcademicCap(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"fill": "none",
			"viewBox": "0 0 24 24",
			"strokeWidth": "1.5",
			"stroke": "currentColor",
			"aria-hidden": "true"
		},
		"child": [{
			"tag": "path",
			"attr": {
				"strokeLinecap": "round",
				"strokeLinejoin": "round",
				"d": "M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
			},
			"child": []
		}]
	})(props);
}
//#endregion
//#region node_modules/react-icons/hi/index.mjs
function HiOutlineX(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"fill": "none",
			"viewBox": "0 0 24 24",
			"strokeWidth": "2",
			"stroke": "currentColor",
			"aria-hidden": "true"
		},
		"child": [{
			"tag": "path",
			"attr": {
				"strokeLinecap": "round",
				"strokeLinejoin": "round",
				"d": "M6 18L18 6M6 6l12 12"
			},
			"child": []
		}]
	})(props);
}
function HiOutlineSun(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"fill": "none",
			"viewBox": "0 0 24 24",
			"strokeWidth": "2",
			"stroke": "currentColor",
			"aria-hidden": "true"
		},
		"child": [{
			"tag": "path",
			"attr": {
				"strokeLinecap": "round",
				"strokeLinejoin": "round",
				"d": "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
			},
			"child": []
		}]
	})(props);
}
function HiOutlineMoon(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"fill": "none",
			"viewBox": "0 0 24 24",
			"strokeWidth": "2",
			"stroke": "currentColor",
			"aria-hidden": "true"
		},
		"child": [{
			"tag": "path",
			"attr": {
				"strokeLinecap": "round",
				"strokeLinejoin": "round",
				"d": "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
			},
			"child": []
		}]
	})(props);
}
function HiOutlineMenu(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"fill": "none",
			"viewBox": "0 0 24 24",
			"strokeWidth": "2",
			"stroke": "currentColor",
			"aria-hidden": "true"
		},
		"child": [{
			"tag": "path",
			"attr": {
				"strokeLinecap": "round",
				"strokeLinejoin": "round",
				"d": "M4 6h16M4 12h16M4 18h16"
			},
			"child": []
		}]
	})(props);
}
//#endregion
//#region node_modules/react-icons/fa6/index.mjs
function FaYoutube(props) {
	return GenIcon({
		"tag": "svg",
		"attr": { "viewBox": "0 0 576 512" },
		"child": [{
			"tag": "path",
			"attr": { "d": "M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" },
			"child": []
		}]
	})(props);
}
function FaWhatsapp(props) {
	return GenIcon({
		"tag": "svg",
		"attr": { "viewBox": "0 0 448 512" },
		"child": [{
			"tag": "path",
			"attr": { "d": "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" },
			"child": []
		}]
	})(props);
}
function FaLinkedinIn(props) {
	return GenIcon({
		"tag": "svg",
		"attr": { "viewBox": "0 0 448 512" },
		"child": [{
			"tag": "path",
			"attr": { "d": "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" },
			"child": []
		}]
	})(props);
}
function FaInstagram(props) {
	return GenIcon({
		"tag": "svg",
		"attr": { "viewBox": "0 0 448 512" },
		"child": [{
			"tag": "path",
			"attr": { "d": "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" },
			"child": []
		}]
	})(props);
}
function FaFacebookF(props) {
	return GenIcon({
		"tag": "svg",
		"attr": { "viewBox": "0 0 320 512" },
		"child": [{
			"tag": "path",
			"attr": { "d": "M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" },
			"child": []
		}]
	})(props);
}
function FaStar(props) {
	return GenIcon({
		"tag": "svg",
		"attr": { "viewBox": "0 0 576 512" },
		"child": [{
			"tag": "path",
			"attr": { "d": "M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" },
			"child": []
		}]
	})(props);
}
function FaPhone(props) {
	return GenIcon({
		"tag": "svg",
		"attr": { "viewBox": "0 0 512 512" },
		"child": [{
			"tag": "path",
			"attr": { "d": "M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" },
			"child": []
		}]
	})(props);
}
//#endregion
export { HiOutlinePhone as C, HiOutlineTrophy as D, HiOutlineSparkles as E, HiOutlineMapPin as S, HiOutlineShoppingBag as T, HiOutlineArrowDownTray as _, FaStar as a, HiOutlineHeart as b, HiOutlineMenu as c, HiOutlineX as d, HiArrowLeft as f, HiOutlineAcademicCap as g, HiChevronDown as h, FaPhone as i, HiOutlineMoon as l, HiArrowUp as m, FaInstagram as n, FaWhatsapp as o, HiArrowRight as p, FaLinkedinIn as r, FaYoutube as s, FaFacebookF as t, HiOutlineSun as u, HiOutlineBuildingOffice2 as v, HiOutlineShieldCheck as w, HiOutlineHomeModern as x, HiOutlineEnvelope as y };
