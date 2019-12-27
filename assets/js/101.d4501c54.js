(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{437:function(t,e,a){"use strict";a.r(e);var s=a(20),r=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"logger"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#logger","aria-hidden":"true"}},[t._v("#")]),t._v(" Logger")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("GROWI uses "),a("a",{attrs:{href:"https://github.com/trentm/node-bunyan",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bunyan"),a("OutboundLink")],1),t._v(" and "),a("a",{attrs:{href:"https://github.com/philmander/browser-bunyan",target:"_blank",rel:"noopener noreferrer"}},[t._v("browser-bunyan"),a("OutboundLink")],1),t._v(".\nOlder code uses "),a("a",{attrs:{href:"https://www.npmjs.com/package/debug",target:"_blank",rel:"noopener noreferrer"}},[t._v("debug"),a("OutboundLink")],1),t._v(" for logging, but "),a("code",[t._v("debug()")]),t._v(" can be replaced with Bunyan's "),a("code",[t._v("logger.debug()")]),t._v(".")])]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#log-levels"}},[t._v("Log Levels")])]),a("li",[a("a",{attrs:{href:"#log-method"}},[t._v("Log Method")])]),a("li",[a("a",{attrs:{href:"#edit-log-setting"}},[t._v("Edit Log Setting")])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"log-levels"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#log-levels","aria-hidden":"true"}},[t._v("#")]),t._v(" Log Levels")]),t._v(" "),a("p",[t._v("See "),a("a",{attrs:{href:"https://github.com/trentm/node-bunyan#levels",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bunyan#Levels"),a("OutboundLink")],1),t._v(" for more about log levels.")]),t._v(" "),a("p",[t._v("By default, log levels are set as below.")]),t._v(" "),a("ul",[a("li",[t._v("Development\n"),a("ul",[a("li",[a("code",[t._v("info")])])])]),t._v(" "),a("li",[t._v("Production\n"),a("ul",[a("li",[a("code",[t._v("info")])])])])]),t._v(" "),a("h2",{attrs:{id:"log-method"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#log-method","aria-hidden":"true"}},[t._v("#")]),t._v(" Log Method")]),t._v(" "),a("p",[t._v("See "),a("a",{attrs:{href:"https://github.com/trentm/node-bunyan#log-method-api",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bunyan#Log Method API"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"edit-log-setting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#edit-log-setting","aria-hidden":"true"}},[t._v("#")]),t._v(" Edit Log Setting")]),t._v(" "),a("p",[t._v("There are 2 ways to edit the log setting.")]),t._v(" "),a("h3",{attrs:{id:"edit-log-setting-for-indivisual-environments"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#edit-log-setting-for-indivisual-environments","aria-hidden":"true"}},[t._v("#")]),t._v(" Edit Log Setting for Indivisual Environments")]),t._v(" "),a("ul",[a("li",[t._v("Development\n"),a("ul",[a("li",[a("code",[t._v("config/logger/config.dev.js")])])])]),t._v(" "),a("li",[t._v("Production\n"),a("ul",[a("li",[a("code",[t._v("config/logger/config.prod.js")])])])])]),t._v(" "),a("h4",{attrs:{id:"format"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#format","aria-hidden":"true"}},[t._v("#")]),t._v(" Format")]),t._v(" "),a("ul",[a("li",[t._v("Format as "),a("code",[t._v("${namespace}: '${level}',")]),t._v("."),a("br"),t._v("\ne.g."),a("div",{staticClass:"language-javascript extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'info'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'growi:crowi'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'debug'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'growi:routes:login-passport'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'debug'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("li",[t._v("The default log level can be set with "),a("code",[t._v("default")]),t._v(" key.")])]),t._v(" "),a("h3",{attrs:{id:"edit-log-setting-with-environmental-variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#edit-log-setting-with-environmental-variables","aria-hidden":"true"}},[t._v("#")]),t._v(" Edit Log Setting with Environmental Variables")]),t._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("Enviroment variables override the setting files.")])]),t._v(" "),a("h4",{attrs:{id:"format-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#format-2","aria-hidden":"true"}},[t._v("#")]),t._v(" Format")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("${LEVEL}=${namespace1},${namespace2}, ...")])])]),t._v(" "),a("p",[t._v("e.g.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("DEBUG"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("growi:crowi,growi:routes:login-passport\nWARN"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("growi:crowi:express-init\n")])])])])},[],!1,null,null,null);r.options.__file="logger.md";e.default=r.exports}}]);