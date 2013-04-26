// index.js

var flip = require('../lib/flip').flip
var event = require('./event')

document.addEventListener('click', function(e) {
  if (e.target.classList.contains('btnflip')) {
    e.preventDefault()
    var flipper = e.target.parentNode.parentNode
    var back
    var input = '<p><input type="text" value="' + flipper.querySelector('h2').innerText + '"></p>'
    var textarea = '<textarea style="width:100%; max-width:32em; height:8em;">' + flipper.querySelector('p').innerText + '</textarea><br><button class="btn">Update</button>'

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

