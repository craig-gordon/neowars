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
            'Create New Game'
          )
        )
      );
    }
  }]);

  return LandingPage;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xhbmRpbmdQYWdlLmpzeCJdLCJuYW1lcyI6WyJMaW5rIiwiUmVhY3RSb3V0ZXJET00iLCJMYW5kaW5nUGFnZSIsInByb3BzIiwiZ2V0TWFwTGlzdCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsSUFBTUEsT0FBT0MsZUFBZUQsSUFBNUI7O0lBRU1FLFc7OztBQUNKLHVCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEscUhBQ1hBLEtBRFc7QUFFbEI7Ozs7NkJBRVE7QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUMsY0FBRDtBQUFBLFlBQU0sSUFBRyxNQUFUO0FBQ0U7QUFBQTtBQUFBLGNBQVEsU0FBUyxLQUFLQSxLQUFMLENBQVdDLFVBQTVCO0FBQUE7QUFBQTtBQURGO0FBREYsT0FERjtBQVNEOzs7O0VBZnVCQyxNQUFNQyxTIiwiZmlsZSI6ImxhbmRpbmdQYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgTGluayA9IFJlYWN0Um91dGVyRE9NLkxpbms7XHJcblxyXG5jbGFzcyBMYW5kaW5nUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPExpbmsgdG89Jy9uZXcnPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnByb3BzLmdldE1hcExpc3R9PlxyXG4gICAgICAgICAgICBDcmVhdGUgTmV3IEdhbWVcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59Il19