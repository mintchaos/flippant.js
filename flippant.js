(function(e){if("function"==typeof bootstrap)bootstrap("flippant",e);else if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else if("undefined"!=typeof ses){if(!ses.ok())return;ses.makeFlippant=e}else"undefined"!=typeof window?window.flippant=e():global.flippant=e()})(function(){var define,ses,bootstrap,module,exports;
return (function(e,t,n){function i(n,s){if(!t[n]){if(!e[n]){var o=typeof require=="function"&&require;if(!s&&o)return o(n,!0);if(r)return r(n,!0);throw new Error("Cannot find module '"+n+"'")}var u=t[n]={exports:{}};e[n][0].call(u.exports,function(t){var r=e[n][1][t];return i(r?r:t)},u,u.exports)}return t[n].exports}var r=typeof require=="function"&&require;for(var s=0;s<n.length;s++)i(n[s]);return i})({1:[function(require,module,exports){
exports.flip = flip

var _flippant_ie_ver = (function(){
    var undef,
        v = 3,
        div = document.createElement('div'),
        all = div.getElementsByTagName('i');
    while (
        div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->',
        all[0]
    );
    return v > 4 ? v : undef;
}());

function _flippant_add_class(o, cls) {
  if (_flippant_ie_ver < 10) {
    o.className += ' '+cls;
  } else {
    o.classList.add(cls);
  }
}

function _flippant_remove_class(o, cls) {
  if (_flippant_ie_ver < 10) {
    o.className = (' '+o.className+' ').replace(' '+cls+' ',' ');
  } else {
    o.classList.remove(cls)
  }
}

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

  _flippant_add_class(flipper, 'flippant');
  _flippant_add_class(back, 'flippant-back');
  _flippant_add_class(back, class_name);
  if (position == "absolute") {
    style_func(back)
  } else {
    window.setTimeout(function () {
      style_func(back)
    }, 0)
  }
  window.setTimeout(function () {
    _flippant_add_class(back, 'flipper');
    _flippant_add_class(back, 'flipped');
    _flippant_add_class(flipper, 'flipped');
  }, 0)

  if (!back.addEventListener) {
    back.attachEvent('close', close)
  } else {
    back.addEventListener('close', close)
  }
  back.close = close

  function close() {
    set_styles(back, flipper, position)
    _flippant_remove_class(back, 'flipper')
    _flippant_remove_class(back, 'flipped')
    _flippant_remove_class(flipper, 'flipped')
    window.setTimeout(function () {
      _flippant_remove_class(back, class_name)
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
  back.style["z-index"] = 999
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
},{}]},{},[1])(1)
});
;
