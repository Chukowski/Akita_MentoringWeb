"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/micromark-util-classify-character";
exports.ids = ["vendor-chunks/micromark-util-classify-character"];
exports.modules = {

/***/ "(ssr)/./node_modules/micromark-util-classify-character/dev/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/micromark-util-classify-character/dev/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   classifyCharacter: () => (/* binding */ classifyCharacter)\n/* harmony export */ });\n/* harmony import */ var micromark_util_character__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromark-util-character */ \"(ssr)/./node_modules/micromark-util-character/dev/index.js\");\n/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-symbol */ \"(ssr)/./node_modules/micromark-util-symbol/lib/codes.js\");\n/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! micromark-util-symbol */ \"(ssr)/./node_modules/micromark-util-symbol/lib/constants.js\");\n/**\n * @import {Code} from 'micromark-util-types'\n */\n\n\n\n\n/**\n * Classify whether a code represents whitespace, punctuation, or something\n * else.\n *\n * Used for attention (emphasis, strong), whose sequences can open or close\n * based on the class of surrounding characters.\n *\n * > 👉 **Note**: eof (`null`) is seen as whitespace.\n *\n * @param {Code} code\n *   Code.\n * @returns {typeof constants.characterGroupWhitespace | typeof constants.characterGroupPunctuation | undefined}\n *   Group.\n */\nfunction classifyCharacter(code) {\n  if (\n    code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.eof ||\n    (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_1__.markdownLineEndingOrSpace)(code) ||\n    (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_1__.unicodeWhitespace)(code)\n  ) {\n    return micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.constants.characterGroupWhitespace\n  }\n\n  if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_1__.unicodePunctuation)(code)) {\n    return micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.constants.characterGroupPunctuation\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLXV0aWwtY2xhc3NpZnktY2hhcmFjdGVyL2Rldi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQSxZQUFZLE1BQU07QUFDbEI7O0FBTWlDO0FBQ3FCOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNPO0FBQ1A7QUFDQSxhQUFhLHdEQUFLO0FBQ2xCLElBQUksbUZBQXlCO0FBQzdCLElBQUksMkVBQWlCO0FBQ3JCO0FBQ0EsV0FBVyw0REFBUztBQUNwQjs7QUFFQSxNQUFNLDRFQUFrQjtBQUN4QixXQUFXLDREQUFTO0FBQ3BCO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zY2hvb2wtbWVudG9yaW5nLy4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay11dGlsLWNsYXNzaWZ5LWNoYXJhY3Rlci9kZXYvaW5kZXguanM/ZDc4MyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBpbXBvcnQge0NvZGV9IGZyb20gJ21pY3JvbWFyay11dGlsLXR5cGVzJ1xuICovXG5cbmltcG9ydCB7XG4gIG1hcmtkb3duTGluZUVuZGluZ09yU3BhY2UsXG4gIHVuaWNvZGVQdW5jdHVhdGlvbixcbiAgdW5pY29kZVdoaXRlc3BhY2Vcbn0gZnJvbSAnbWljcm9tYXJrLXV0aWwtY2hhcmFjdGVyJ1xuaW1wb3J0IHtjb2RlcywgY29uc3RhbnRzfSBmcm9tICdtaWNyb21hcmstdXRpbC1zeW1ib2wnXG5cbi8qKlxuICogQ2xhc3NpZnkgd2hldGhlciBhIGNvZGUgcmVwcmVzZW50cyB3aGl0ZXNwYWNlLCBwdW5jdHVhdGlvbiwgb3Igc29tZXRoaW5nXG4gKiBlbHNlLlxuICpcbiAqIFVzZWQgZm9yIGF0dGVudGlvbiAoZW1waGFzaXMsIHN0cm9uZyksIHdob3NlIHNlcXVlbmNlcyBjYW4gb3BlbiBvciBjbG9zZVxuICogYmFzZWQgb24gdGhlIGNsYXNzIG9mIHN1cnJvdW5kaW5nIGNoYXJhY3RlcnMuXG4gKlxuICogPiDwn5GJICoqTm90ZSoqOiBlb2YgKGBudWxsYCkgaXMgc2VlbiBhcyB3aGl0ZXNwYWNlLlxuICpcbiAqIEBwYXJhbSB7Q29kZX0gY29kZVxuICogICBDb2RlLlxuICogQHJldHVybnMge3R5cGVvZiBjb25zdGFudHMuY2hhcmFjdGVyR3JvdXBXaGl0ZXNwYWNlIHwgdHlwZW9mIGNvbnN0YW50cy5jaGFyYWN0ZXJHcm91cFB1bmN0dWF0aW9uIHwgdW5kZWZpbmVkfVxuICogICBHcm91cC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsYXNzaWZ5Q2hhcmFjdGVyKGNvZGUpIHtcbiAgaWYgKFxuICAgIGNvZGUgPT09IGNvZGVzLmVvZiB8fFxuICAgIG1hcmtkb3duTGluZUVuZGluZ09yU3BhY2UoY29kZSkgfHxcbiAgICB1bmljb2RlV2hpdGVzcGFjZShjb2RlKVxuICApIHtcbiAgICByZXR1cm4gY29uc3RhbnRzLmNoYXJhY3Rlckdyb3VwV2hpdGVzcGFjZVxuICB9XG5cbiAgaWYgKHVuaWNvZGVQdW5jdHVhdGlvbihjb2RlKSkge1xuICAgIHJldHVybiBjb25zdGFudHMuY2hhcmFjdGVyR3JvdXBQdW5jdHVhdGlvblxuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/micromark-util-classify-character/dev/index.js\n");

/***/ })

};
;