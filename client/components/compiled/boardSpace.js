"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Link = ReactRouterDOM.Link;

var BoardSpace = function (_React$Component) {
  _inherits(BoardSpace, _React$Component);

  function BoardSpace(props) {
    _classCallCheck(this, BoardSpace);

    return _possibleConstructorReturn(this, (BoardSpace.__proto__ || Object.getPrototypeOf(BoardSpace)).call(this, props));
  }

  _createClass(BoardSpace, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var unit = this.props.units.filter(function (unit) {
        return unit.position === _this2.props.space.position;
      });
      return React.createElement(
        "td",
        { className: this.props.space.terrain + "_" + this.props.space.country, onClick: function onClick() {
            if (_this2.props.readyToMove) {
              if (Math.abs(_this2.props.clickedSpace[0] - _this2.props.space.position[0]) + Math.abs(_this2.props.clickedSpace[1] - _this2.props.space.position[1]) <= 3) {
                _this2.props.moveUnit(_this2.props.clickedSpace, _this2.props.space.position);
                _this2.props.toggleUnitMove();
              }
            }
            _this2.props.toggleSpaceIntel(_this2.props.space.position);
          } },
        unit.length ? React.createElement("img", { src: unit[0].type + "_" + unit[0].country + ".png" }) : null
      );
    }
  }]);

  return BoardSpace;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2JvYXJkU3BhY2UuanN4Il0sIm5hbWVzIjpbIkxpbmsiLCJSZWFjdFJvdXRlckRPTSIsIkJvYXJkU3BhY2UiLCJwcm9wcyIsInVuaXQiLCJ1bml0cyIsImZpbHRlciIsInBvc2l0aW9uIiwic3BhY2UiLCJ0ZXJyYWluIiwiY291bnRyeSIsInJlYWR5VG9Nb3ZlIiwiTWF0aCIsImFicyIsImNsaWNrZWRTcGFjZSIsIm1vdmVVbml0IiwidG9nZ2xlVW5pdE1vdmUiLCJ0b2dnbGVTcGFjZUludGVsIiwibGVuZ3RoIiwidHlwZSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsSUFBTUEsT0FBT0MsZUFBZUQsSUFBNUI7O0lBRU1FLFU7OztBQUNKLHNCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsbUhBQ1hBLEtBRFc7QUFFbEI7Ozs7NkJBRVE7QUFBQTs7QUFDUCxVQUFJQyxPQUFPLEtBQUtELEtBQUwsQ0FBV0UsS0FBWCxDQUFpQkMsTUFBakIsQ0FBd0I7QUFBQSxlQUFRRixLQUFLRyxRQUFMLEtBQWtCLE9BQUtKLEtBQUwsQ0FBV0ssS0FBWCxDQUFpQkQsUUFBM0M7QUFBQSxPQUF4QixDQUFYO0FBQ0EsYUFDRTtBQUFBO0FBQUEsVUFBSSxXQUFjLEtBQUtKLEtBQUwsQ0FBV0ssS0FBWCxDQUFpQkMsT0FBL0IsU0FBMEMsS0FBS04sS0FBTCxDQUFXSyxLQUFYLENBQWlCRSxPQUEvRCxFQUEwRSxTQUFTLG1CQUFNO0FBQ3ZGLGdCQUFJLE9BQUtQLEtBQUwsQ0FBV1EsV0FBZixFQUE0QjtBQUMxQixrQkFBSUMsS0FBS0MsR0FBTCxDQUFTLE9BQUtWLEtBQUwsQ0FBV1csWUFBWCxDQUF3QixDQUF4QixJQUE2QixPQUFLWCxLQUFMLENBQVdLLEtBQVgsQ0FBaUJELFFBQWpCLENBQTBCLENBQTFCLENBQXRDLElBQXNFSyxLQUFLQyxHQUFMLENBQVMsT0FBS1YsS0FBTCxDQUFXVyxZQUFYLENBQXdCLENBQXhCLElBQTZCLE9BQUtYLEtBQUwsQ0FBV0ssS0FBWCxDQUFpQkQsUUFBakIsQ0FBMEIsQ0FBMUIsQ0FBdEMsQ0FBdEUsSUFBNkksQ0FBakosRUFBb0o7QUFDbEosdUJBQUtKLEtBQUwsQ0FBV1ksUUFBWCxDQUFvQixPQUFLWixLQUFMLENBQVdXLFlBQS9CLEVBQTZDLE9BQUtYLEtBQUwsQ0FBV0ssS0FBWCxDQUFpQkQsUUFBOUQ7QUFDQSx1QkFBS0osS0FBTCxDQUFXYSxjQUFYO0FBQ0Q7QUFDRjtBQUNELG1CQUFLYixLQUFMLENBQVdjLGdCQUFYLENBQTRCLE9BQUtkLEtBQUwsQ0FBV0ssS0FBWCxDQUFpQkQsUUFBN0M7QUFDRCxXQVJEO0FBU0dILGFBQUtjLE1BQUwsR0FBYyw2QkFBSyxLQUFRZCxLQUFLLENBQUwsRUFBUWUsSUFBaEIsU0FBd0JmLEtBQUssQ0FBTCxFQUFRTSxPQUFoQyxTQUFMLEdBQWQsR0FBdUU7QUFUMUUsT0FERjtBQWFEOzs7O0VBcEJzQlUsTUFBTUMsUyIsImZpbGUiOiJib2FyZFNwYWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgTGluayA9IFJlYWN0Um91dGVyRE9NLkxpbms7XHJcblxyXG5jbGFzcyBCb2FyZFNwYWNlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgbGV0IHVuaXQgPSB0aGlzLnByb3BzLnVuaXRzLmZpbHRlcih1bml0ID0+IHVuaXQucG9zaXRpb24gPT09IHRoaXMucHJvcHMuc3BhY2UucG9zaXRpb24pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHRkIGNsYXNzTmFtZT17YCR7dGhpcy5wcm9wcy5zcGFjZS50ZXJyYWlufV8ke3RoaXMucHJvcHMuc3BhY2UuY291bnRyeX1gfSBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMucmVhZHlUb01vdmUpIHtcclxuICAgICAgICAgIGlmIChNYXRoLmFicyh0aGlzLnByb3BzLmNsaWNrZWRTcGFjZVswXSAtIHRoaXMucHJvcHMuc3BhY2UucG9zaXRpb25bMF0pICsgTWF0aC5hYnModGhpcy5wcm9wcy5jbGlja2VkU3BhY2VbMV0gLSB0aGlzLnByb3BzLnNwYWNlLnBvc2l0aW9uWzFdKSA8PSAzKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMubW92ZVVuaXQodGhpcy5wcm9wcy5jbGlja2VkU3BhY2UsIHRoaXMucHJvcHMuc3BhY2UucG9zaXRpb24pO1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLnRvZ2dsZVVuaXRNb3ZlKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucHJvcHMudG9nZ2xlU3BhY2VJbnRlbCh0aGlzLnByb3BzLnNwYWNlLnBvc2l0aW9uKTtcclxuICAgICAgfX0+XHJcbiAgICAgICAge3VuaXQubGVuZ3RoID8gPGltZyBzcmM9e2Ake3VuaXRbMF0udHlwZX1fJHt1bml0WzBdLmNvdW50cnl9LnBuZ2B9IC8+IDogbnVsbH1cclxuICAgICAgPC90ZD5cclxuICAgIClcclxuICB9XHJcbn0iXX0=