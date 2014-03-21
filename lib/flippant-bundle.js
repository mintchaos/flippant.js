!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.flippant=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
var css = ".flippant {\n\ttransform: perspective(500px) rotateY(0deg);\n\t-webkit-transform: perspective(500px) rotateY(0deg);\n\t-moz-transform: perspective(500px) rotateY(0deg);\n\t/*z-index: 200;*/\n}\n\n.flippant-back {\n\ttransform: perspective(500px) rotateY(-180deg);\n\t-moz-transform: perspective(500px) rotateY(-180deg);\n\t-webkit-transform: perspective(500px) rotateY(-180deg);\n\theight: 0;\n\t/*z-index: 200;*/\n}\n\n.flippant, .flippant-back {\n\ttransform-style: preserve-3d;\n\t-webkit-transform-style: preserve-3d;\n\t-moz-transform-style: preserve-3d;\n\n\tbackface-visibility: hidden;\n\t-webkit-backface-visibility: hidden;\n\t-moz-backface-visibility: hidden;\n}\n\n.flippant, .flipper {\n\t-o-transition: all .2s ease-in-out;\n\t-ms-transition: all .2s ease-in-out;\n\t-moz-transition: all .2s ease-in-out;\n\t-webkit-transition: all .2s ease-in-out;\n\ttransition: all .2s ease-in-out;\n}\n\n.flippant.flipped {\n\ttransform: perspective(500px) rotateY(180deg);\n\t-moz-transform: perspective(500px) rotateY(180deg);\n\t-webkit-transform: perspective(500px) rotateY(180deg);\n\n}\n\n.flippant-back.flipped  {\n\ttransform: perspective(500px) rotateY(0deg);\n\t-moz-transform: perspective(500px) rotateY(0deg);\n\t-webkit-transform: perspective(500px) rotateY(0deg);\n}\n\n.flippant-modal-dark, .flippant-modal-light {\n\tposition: fixed;\n\tmargin: 0;\n\ttop: 2.5%;\n\tleft: 2.5%;\n\twidth: 95%;\n\theight: 95%;\n\tpadding: 1em;\n\tbox-sizing: border-box;\n\tbackground: rgba(0,0,0,0.7);\n\tbox-shadow: 0 0 10px rgba(0,0,0,0.5);\n}\n\n.flippant-modal-dark, .flippant-modal-dark p { color: white;}\n\n.flippant-modal-light {\n\tbackground: rgba(230,230,230,0.7);\n\tbox-shadow: 3px 3px 6px rgba(0,0,0,0.3);\n\tborder-radius: 5px;\n\tborder: 1px solid #aaa;\n}\n"; (_dereq_("/Users/ukakaaa/dev/flippant.js/node_modules/cssify"))(css); module.exports = css;
},{"/Users/ukakaaa/dev/flippant.js/node_modules/cssify":3}],2:[function(_dereq_,module,exports){
_dereq_('../flippant.css');

exports.flip = flip

function flip(flipper, content, type, class_name, timeout) {
  var position
    , back
    , style_func
  timeout = timeout || 400
  type = type || "card"

  if (type === "modal") {
    class_name = class_name || "flippant-modal-dark"
    position = "fixed"
    style_func = null_styles
  }

  if (type === "card") {
    class_name = class_name || "flippant-modal-light"
    position = "absolute"
    style_func = card_styles
  }

  back = document.createElement('div')
  document.body.appendChild(back)
  set_styles(back, flipper, position)
  back.innerHTML = content

  flipper.classList.add('flippant')
  back.classList.add('flippant-back')
  back.classList.add(class_name)
  if (position == "absolute") {
    style_func(back)
  } else {
    window.setTimeout(function () {
      style_func(back)
    }, 0)
  }
  window.setTimeout(function () {
    back.classList.add('flipper')
    back.classList.add('flipped')
    flipper.classList.add('flipped')
  }, 0)

  back.addEventListener('close', close)
  back.close = close

  function close() {
    set_styles(back, flipper, position)
    back.classList.remove('flipped')
    back.classList.remove('flipped')
    flipper.classList.remove('flipped')
    window.setTimeout(function () {
      back.classList.remove(class_name)
      document.body.removeChild(back)
    }, timeout)
  }

  return back
}

function set_styles(back, front, position) {
  back.style.position = position
  back.style.top = front.offsetTop + "px"
  back.style.left = front.offsetLeft + "px"
  back.style['min-height'] = front.offsetHeight + "px"
  back.style.width = front.offsetWidth + "px"
  back.style["z-index"] = 9999
}

function null_styles(back) {
  back.style.top = null
  back.style.left = null
  back.style.height = null
  back.style.width = null
}

function card_styles(back) {
  back.style.height = 'auto'
}
},{"../flippant.css":1}],3:[function(_dereq_,module,exports){
module.exports = function (css, customDocument) {
  var doc = customDocument || document;
  if (doc.createStyleSheet) {
    doc.createStyleSheet(css);
  } else {
    var head = doc.getElementsByTagName('head')[0],
        style = doc.createElement('style');

    style.type = 'text/css';
  
    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(doc.createTextNode(css));
    }
    
    head.appendChild(style); 
  }
};

module.exports.byUrl = function(url) {
  if (document.createStyleSheet) {
    document.createStyleSheet(url);
  } else {
    var head = document.getElementsByTagName('head')[0],
        link = document.createElement('link');

    link.rel = 'stylesheet';
    link.href = url;
  
    head.appendChild(link); 
  }
};

},{}]},{},[2])
(2)
});