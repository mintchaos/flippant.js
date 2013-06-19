Demonstrations:
===============

Are over here: http://mintchaos.github.io/flippant.js/


Whys and hows:
==============

* Flippant is tiny. It does just enough and no more. It has zero dependencies.
* Flippant is easily customized. A couple of arguments, and CSS.
* Flippant has a single function: `flippant.flip`. Use it to flip things!

```javascript
var front = document.getElementById('flipthis')
  , back_content = "&lt;h1>I'm the back!&lt;/h1>" // Generate or pull any HTML you want for the back.
  , back

// when the correct action happens, call flip!
back = flippant.flip(front, back_content)
// this creates the back element, sizes it and flips it around.

// call the close method on the back element when it's time to close.
back.close()
// alternatively you can trigger a close event on the back element if you fancy.
var close_event = new CustomEvent('close')
back.dispatchEvent(close_event)
```

Two modes: `card` (the default), and `modal`.

`back = flippant.flip(front, back_content, 'modal')`

The back gets the default class of `flippant-modal-dark` for modal flips and
`flippant-modal-light` for cards. These styles can be overriden or you can
pass in your own class.

`back = flippant.flip(front, back_content, 'modal', 'my-modal-classname')`


The full API:
-------------

`flip(element_to_flip, content_for_back, type(modal/card), classname_for_back) -> back_element`

74.3% of the magic is in the css file. Override however you'd like.


“Installation”
--------------

Grab the JS and the CSS file. Use them. The JS file is a UMD package so require or commonjs it or just use it. It's not picky.
