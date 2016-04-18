var MainComponent = React.createClass({
  render: function() {
    return h('div', [
      h(app.components.Header, { name: 'Jack' }),
      h('p', 'Welcome to my React app')
    ]);
  }
});

ReactDOM.render(
  h(MainComponent),
  document.getElementById('react-target')
);
