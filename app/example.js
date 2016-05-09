'use strict';

var _jsxFileName = '/Users/patrinhani/Development/Github/patrinhani-ciandt/node-deck-app/app/app/example.jsx';
var ExampleApplication = React.createClass({
  displayName: 'ExampleApplication',

  render: function () {
    var elapsed = Math.round(this.props.elapsed / 100);
    var seconds = elapsed / 10 + (elapsed % 10 ? '' : '.0');
    var message = 'React has been successfully running for ' + seconds + ' seconds.';

    return React.createElement(
      'p',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      },
      message
    );
  }
});

var start = new Date().getTime();

setInterval(function () {
  ReactDOM.render(React.createElement(ExampleApplication, { elapsed: new Date().getTime() - start, __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }), document.getElementById('container'));
}, 50);