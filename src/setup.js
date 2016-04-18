// shortcut for creating elements
window.h = function(type, props, children) {
  if (!children) {
    if (Array.isArray(props) || typeof props === 'string') {
      children = props;
      props = null;
    } else {
      children = [];
    }
  }

  var allArgs = [type, props].concat(children);

  return React.createElement.apply(null, allArgs);
}

// set up the app object
window.app = window.app || {};
app.components = app.components || {};

