"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GameBoard = function (_React$Component) {
  _inherits(GameBoard, _React$Component);

  function GameBoard(props) {
    _classCallCheck(this, GameBoard);

    return _possibleConstructorReturn(this, (GameBoard.__proto__ || Object.getPrototypeOf(GameBoard)).call(this, props));
  }

  _createClass(GameBoard, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "table",
        null,
        React.createElement(
          "tbody",
          null,
          this.props.board.map(function (row, x) {
            return React.createElement(
              "tr",
              { key: x },
              row.map(function (space, y) {
                return React.createElement(BoardSpace, { key: y, terrain: space });
              })
            );
          })
        )
      );
    }
  }]);

  return GameBoard;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2dhbWVCb2FyZC5qc3giXSwibmFtZXMiOlsiR2FtZUJvYXJkIiwicHJvcHMiLCJib2FyZCIsIm1hcCIsInJvdyIsIngiLCJzcGFjZSIsInkiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxTOzs7QUFDSixxQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGlIQUNYQSxLQURXO0FBRWxCOzs7OzZCQUVRO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRyxlQUFLQSxLQUFMLENBQVdDLEtBQVgsQ0FBaUJDLEdBQWpCLENBQXFCLFVBQUNDLEdBQUQsRUFBTUMsQ0FBTixFQUFZO0FBQ2hDLG1CQUFPO0FBQUE7QUFBQSxnQkFBSSxLQUFLQSxDQUFUO0FBQWFELGtCQUFJRCxHQUFKLENBQVEsVUFBQ0csS0FBRCxFQUFRQyxDQUFSLEVBQWM7QUFDeEMsdUJBQU8sb0JBQUMsVUFBRCxJQUFZLEtBQUtBLENBQWpCLEVBQW9CLFNBQVNELEtBQTdCLEdBQVA7QUFDRCxlQUZtQjtBQUFiLGFBQVA7QUFHRCxXQUpBO0FBREg7QUFERixPQURGO0FBV0Q7Ozs7RUFqQnFCRSxNQUFNQyxTIiwiZmlsZSI6ImdhbWVCb2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEdhbWVCb2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDx0YWJsZT5cclxuICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICB7dGhpcy5wcm9wcy5ib2FyZC5tYXAoKHJvdywgeCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gPHRyIGtleT17eH0+e3Jvdy5tYXAoKHNwYWNlLCB5KSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIDxCb2FyZFNwYWNlIGtleT17eX0gdGVycmFpbj17c3BhY2V9IC8+XHJcbiAgICAgICAgICAgIH0pfTwvdHI+XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L3Rib2R5PlxyXG4gICAgICA8L3RhYmxlPlxyXG4gICAgKVxyXG4gIH1cclxufSJdfQ==