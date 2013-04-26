exports.trigger = function(elm, event_name, data) {
  var evt = new CustomEvent(event_name, data)
  elm.dispatchEvent(evt)
}