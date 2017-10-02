'use strict';

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
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(
        'table',
        null,
        React.createElement(
          'tbody',
          null,
          this.props.board.map(function (row, x) {
            return React.createElement(
              'tr',
              { className: 'row', key: x },
              row.map(function (space, y) {
                return React.createElement(BoardSpace, {
                  key: y,
                  space: space,
                  units: _this2.props.units,
                  clickedSpace: _this2.props.clickedSpace,
                  readyToMove: _this2.props.readyToMove,
                  moveUnit: _this2.props.moveUnit,
                  toggleSpaceIntel: _this2.props.toggleSpaceIntel,
                  toggleUnitMove: _this2.props.toggleUnitMove
                });
              })
            );
          })
        )
      );
    }
  }]);

  return GameBoard;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2dhbWVCb2FyZC5qc3giXSwibmFtZXMiOlsiR2FtZUJvYXJkIiwicHJvcHMiLCJib2FyZCIsIm1hcCIsInJvdyIsIngiLCJzcGFjZSIsInkiLCJ1bml0cyIsImNsaWNrZWRTcGFjZSIsInJlYWR5VG9Nb3ZlIiwibW92ZVVuaXQiLCJ0b2dnbGVTcGFjZUludGVsIiwidG9nZ2xlVW5pdE1vdmUiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxTOzs7QUFDSixxQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGlIQUNYQSxLQURXO0FBRWxCOzs7OzZCQUVRO0FBQUE7O0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRyxlQUFLQSxLQUFMLENBQVdDLEtBQVgsQ0FBaUJDLEdBQWpCLENBQXFCLFVBQUNDLEdBQUQsRUFBTUMsQ0FBTixFQUFZO0FBQ2hDLG1CQUFPO0FBQUE7QUFBQSxnQkFBSSxXQUFVLEtBQWQsRUFBb0IsS0FBS0EsQ0FBekI7QUFBNkJELGtCQUFJRCxHQUFKLENBQVEsVUFBQ0csS0FBRCxFQUFRQyxDQUFSLEVBQWM7QUFDeEQsdUJBQ0Usb0JBQUMsVUFBRDtBQUNFLHVCQUFLQSxDQURQO0FBRUUseUJBQU9ELEtBRlQ7QUFHRSx5QkFBTyxPQUFLTCxLQUFMLENBQVdPLEtBSHBCO0FBSUUsZ0NBQWMsT0FBS1AsS0FBTCxDQUFXUSxZQUozQjtBQUtFLCtCQUFhLE9BQUtSLEtBQUwsQ0FBV1MsV0FMMUI7QUFNRSw0QkFBVSxPQUFLVCxLQUFMLENBQVdVLFFBTnZCO0FBT0Usb0NBQWtCLE9BQUtWLEtBQUwsQ0FBV1csZ0JBUC9CO0FBUUUsa0NBQWdCLE9BQUtYLEtBQUwsQ0FBV1k7QUFSN0Isa0JBREY7QUFZRCxlQWJtQztBQUE3QixhQUFQO0FBY0QsV0FmQTtBQURIO0FBREYsT0FERjtBQXNCRDs7OztFQTVCcUJDLE1BQU1DLFMiLCJmaWxlIjoiZ2FtZUJvYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgR2FtZUJvYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHRhYmxlPlxyXG4gICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgIHt0aGlzLnByb3BzLmJvYXJkLm1hcCgocm93LCB4KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiA8dHIgY2xhc3NOYW1lPSdyb3cnIGtleT17eH0+e3Jvdy5tYXAoKHNwYWNlLCB5KSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxCb2FyZFNwYWNlXHJcbiAgICAgICAgICAgICAgICAgIGtleT17eX1cclxuICAgICAgICAgICAgICAgICAgc3BhY2U9e3NwYWNlfVxyXG4gICAgICAgICAgICAgICAgICB1bml0cz17dGhpcy5wcm9wcy51bml0c31cclxuICAgICAgICAgICAgICAgICAgY2xpY2tlZFNwYWNlPXt0aGlzLnByb3BzLmNsaWNrZWRTcGFjZX1cclxuICAgICAgICAgICAgICAgICAgcmVhZHlUb01vdmU9e3RoaXMucHJvcHMucmVhZHlUb01vdmV9XHJcbiAgICAgICAgICAgICAgICAgIG1vdmVVbml0PXt0aGlzLnByb3BzLm1vdmVVbml0fVxyXG4gICAgICAgICAgICAgICAgICB0b2dnbGVTcGFjZUludGVsPXt0aGlzLnByb3BzLnRvZ2dsZVNwYWNlSW50ZWx9XHJcbiAgICAgICAgICAgICAgICAgIHRvZ2dsZVVuaXRNb3ZlPXt0aGlzLnByb3BzLnRvZ2dsZVVuaXRNb3ZlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pfTwvdHI+XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L3Rib2R5PlxyXG4gICAgICA8L3RhYmxlPlxyXG4gICAgKVxyXG4gIH1cclxufSJdfQ==