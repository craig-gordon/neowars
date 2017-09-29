"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BoardSpace = function (_React$Component) {
  _inherits(BoardSpace, _React$Component);

  function BoardSpace(props) {
    _classCallCheck(this, BoardSpace);

    return _possibleConstructorReturn(this, (BoardSpace.__proto__ || Object.getPrototypeOf(BoardSpace)).call(this, props));
  }

  _createClass(BoardSpace, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "td",
        null,
        this.props.terrain
      );
    }
  }]);

  return BoardSpace;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2JvYXJkU3BhY2UuanN4Il0sIm5hbWVzIjpbIkJvYXJkU3BhY2UiLCJwcm9wcyIsInRlcnJhaW4iLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxVOzs7QUFDSixzQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLG1IQUNYQSxLQURXO0FBRWxCOzs7OzZCQUVRO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFBSyxhQUFLQSxLQUFMLENBQVdDO0FBQWhCLE9BREY7QUFHRDs7OztFQVRzQkMsTUFBTUMsUyIsImZpbGUiOiJib2FyZFNwYWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQm9hcmRTcGFjZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDx0ZD57dGhpcy5wcm9wcy50ZXJyYWlufTwvdGQ+XHJcbiAgICApXHJcbiAgfVxyXG59Il19