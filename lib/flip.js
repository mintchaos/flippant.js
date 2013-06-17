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