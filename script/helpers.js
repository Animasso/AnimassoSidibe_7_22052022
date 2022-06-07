(function (window) {
    'use strict';
  window.qs = function (selector, scope) {
    return (scope || document).querySelector(selector);
  };

  window.qsAll = function (selector, scope) {
    return (scope || document).querySelectorAll(selector);
  };

  window.get = function (id, scope) {
    return (scope || document).getElementById(id);
  };

  window.$elementDomFactory = function (type, attributes, ...children) {
    const el = document.createElement(type);

    for (const key in attributes) {
      el.setAttribute(key, attributes[key]);
    }

    children.forEach((child) => {
      if (typeof child === "string") {
        el.appendChild(document.createTextNode(child));
      } else {
        el.appendChild(child);
      }
    });

    return el;
  };
})(window);
