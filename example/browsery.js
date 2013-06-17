;(function(e,t,n){function i(n,s){if(!t[n]){if(!e[n]){var o=typeof require=="function"&&require;if(!s&&o)return o(n,!0);if(r)return r(n,!0);throw new Error("Cannot find module '"+n+"'")}var u=t[n]={exports:{}};e[n][0].call(u.exports,function(t){var r=e[n][1][t];return i(r?r:t)},u,u.exports)}return t[n].exports}var r=typeof require=="function"&&require;for(var s=0;s<n.length;s++)i(n[s]);return i})({1:[function(require,module,exports){
// index.js

var flip = flippant.flip
var event = require('./event')

document.addEventListener('click', function(e) {
  if (e.target.classList.contains('btnflip')) {
    e.preventDefault()
    var flipper = e.target.parentNode.parentNode
    var back
    var input = '<p><input type="text" value="' + flipper.querySelector('h2').innerText + '"></p>'
    var textarea = '<textarea style="width:100%; max-width:32em; height:12em;">' + flipper.querySelector('p').innerText + '</textarea><br><button class="btn">Update</button>'

    if (e.target.classList.contains('card')) {
      back = flip(flipper, "<p>It's a card!</p>" + input + textarea)
    } else {
      back = flip(flipper, "<p>It's a modal!</p>" + input + textarea, 'modal')
    }

    back.addEventListener('click', function(e) {
      if (e.target.classList.contains('btn')) {
        flipper.querySelector('h2').innerText = back.querySelector('input').value
        flipper.querySelector('p').innerText = back.querySelector('textarea').value
        event.trigger(back, 'close')
      }
    })

  }
})


},{"./event":2}],2:[function(require,module,exports){
exports.trigger = function(elm, event_name, data) {
  var evt = new CustomEvent(event_name, data)
  elm.dispatchEvent(evt)
}
},{}]},{},[1])
;