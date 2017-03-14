var React = require('react');

var NotFound = React.createClass({
  temporaryTitleStyle: {
      color: '#8f9498',
      fontFamily: 'Noto Sans, sans-serif',
      fontSize: '25pt',
      fontWeight: '100',
      margin: '0px'
  },
    render: function() {
        return (
                    <p style={this.temporaryTitleStyle}>{'NOT FOUND'}</p>
        );
    }
});

module.exports = NotFound;
