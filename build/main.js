/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const $app = document.getElementById('app');\r\nconst $observe = document.getElementById('observe');\r\nconst API = 'https://api.escuelajs.co/api/v1/products';\r\n\r\nlocalStorage.clear()\r\n\r\nconst getData = async api => {\r\n  let idx = parseInt(localStorage.getItem('pagination'));\r\n  if (!idx) {\r\n    idx = 5\r\n  }\r\n  let query = `?offset=${idx-1}&limit=10`\r\n  fetch(api+query)\r\n    .then(response => response.json())\r\n    .then(response => {\r\n      let products = response;\r\n      let output = products.map(product => \r\n        `\r\n          <article class=\"Card\">\r\n            <img src=\"${product.images[0]}\" alt=\"${product.title}\"/>\r\n            <h2>\r\n              ${product.title}\r\n              <small> $ ${product.price}</small>\r\n            </h2>\r\n          </article>\r\n        `\r\n      );\r\n      let newItem = document.createElement('section');\r\n      newItem.classList.add('Item');\r\n      newItem.innerHTML = output;\r\n      $app.appendChild(newItem);\r\n\r\n      if(products.length < limit) {\r\n        let message = document.createElement('p');\r\n        message.innerHTML = 'Todos los productos Obtenidos';\r\n        $app.appendChild(message);\r\n        intersectionObserver.unobserve($observe);\r\n      }\r\n      \r\n    })\r\n    .catch(error => console.log(error));\r\n    localStorage.setItem('pagination', idx+10);\r\n}\r\n\r\nconst loadData = async () => {\r\n  await getData(API);\r\n}\r\n\r\nconst intersectionObserver = new IntersectionObserver(entries => {\r\n  // logic...\r\n  entries.forEach(entry => {\r\n    if (!entry.isIntersecting) {\r\n      return;\r\n    }\r\n    loadData();\r\n  })\r\n}, {\r\n  rootMargin: '0px 0px 100% 0px',\r\n});\r\n\r\nwindow.onbeforeunload = function() {\r\n  localStorage.clear();\r\n  return '';\r\n};\r\n\r\nintersectionObserver.observe($observe);\r\nloadData();\r\n\r\n\n\n//# sourceURL=webpack://js-challenge/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;