app.components.Header = React.createClass({
  render: function() {
    return h('div', {
      id: 'header'
    }, 'Heya ' + this.props.name);
  }
});

app.components.Header.propTypes = {
  name: React.PropTypes.string.isRequired
}
