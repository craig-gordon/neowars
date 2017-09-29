'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Link = ReactRouterDOM.Link;

var LandingPage = function (_React$Component) {
  _inherits(LandingPage, _React$Component);

  function LandingPage(props) {
    _classCallCheck(this, LandingPage);

    return _possibleConstructorReturn(this, (LandingPage.__proto__ || Object.getPrototypeOf(LandingPage)).call(this, props));
  }

  _createClass(LandingPage, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          Link,
          { to: '/new' },
          React.createElement(
            'button',
            { onClick: this.props.getMapList },
            'Start New Game'
          )
        )
      );
    }
  }]);

  return LandingPage;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xhbmRpbmdQYWdlLmpzeCJdLCJuYW1lcyI6WyJMaW5rIiwiUmVhY3RSb3V0ZXJET00iLCJMYW5kaW5nUGFnZSIsInByb3BzIiwiZ2V0TWFwTGlzdCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsSUFBTUEsT0FBT0MsZUFBZUQsSUFBNUI7O0lBRU1FLFc7OztBQUNKLHVCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEscUhBQ1hBLEtBRFc7QUFFbEI7Ozs7NkJBRVE7QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUMsY0FBRDtBQUFBLFlBQU0sSUFBRyxNQUFUO0FBQWdCO0FBQUE7QUFBQSxjQUFRLFNBQVMsS0FBS0EsS0FBTCxDQUFXQyxVQUE1QjtBQUFBO0FBQUE7QUFBaEI7QUFERixPQURGO0FBS0Q7Ozs7RUFYdUJDLE1BQU1DLFMiLCJmaWxlIjoibGFuZGluZ1BhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBMaW5rID0gUmVhY3RSb3V0ZXJET00uTGluaztcclxuXHJcbmNsYXNzIExhbmRpbmdQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8TGluayB0bz0nL25ldyc+PGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnByb3BzLmdldE1hcExpc3R9PlN0YXJ0IE5ldyBHYW1lPC9idXR0b24+PC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn0iXX0=