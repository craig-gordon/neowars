'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Link = ReactRouterDOM.Link;

var Banner = function (_React$Component) {
  _inherits(Banner, _React$Component);

  function Banner(props) {
    _classCallCheck(this, Banner);

    return _possibleConstructorReturn(this, (Banner.__proto__ || Object.getPrototypeOf(Banner)).call(this, props));
  }

  _createClass(Banner, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'h1',
        null,
        React.createElement(
          Link,
          { to: '/' },
          'Neo Wars'
        )
      );
    }
  }]);

  return Banner;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2Jhbm5lci5qc3giXSwibmFtZXMiOlsiTGluayIsIlJlYWN0Um91dGVyRE9NIiwiQmFubmVyIiwicHJvcHMiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLElBQU1BLE9BQU9DLGVBQWVELElBQTVCOztJQUVNRSxNOzs7QUFDSixrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDJHQUNYQSxLQURXO0FBRWxCOzs7OzZCQUVRO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFDLGNBQUQ7QUFBQSxZQUFNLElBQUcsR0FBVDtBQUFBO0FBQUE7QUFERixPQURGO0FBS0Q7Ozs7RUFYa0JDLE1BQU1DLFMiLCJmaWxlIjoiYmFubmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgTGluayA9IFJlYWN0Um91dGVyRE9NLkxpbms7XHJcblxyXG5jbGFzcyBCYW5uZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8aDE+XHJcbiAgICAgICAgPExpbmsgdG89Jy8nPk5lbyBXYXJzPC9MaW5rPlxyXG4gICAgICA8L2gxPlxyXG4gICAgKVxyXG4gIH1cclxufSJdfQ==