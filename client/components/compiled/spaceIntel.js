"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SpaceIntel = function (_React$Component) {
  _inherits(SpaceIntel, _React$Component);

  function SpaceIntel(props) {
    _classCallCheck(this, SpaceIntel);

    return _possibleConstructorReturn(this, (SpaceIntel.__proto__ || Object.getPrototypeOf(SpaceIntel)).call(this, props));
  }

  _createClass(SpaceIntel, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var country = this.props.countries.filter(function (country) {
        return country.name === _this2.props.space.country;
      })[0];
      var unit = this.props.units.filter(function (unit) {
        return unit.position === _this2.props.space.position;
      });
      return React.createElement(
        "div",
        null,
        unit.length ? React.createElement(UnitIntel, {
          unit: unit[0],
          toggleUnitMove: this.props.toggleUnitMove,
          readyToMove: this.props.readyToMove
        }) : null,
        "Terrain: ",
        this.props.space.terrain,
        React.createElement("br", null),
        "Defense: ",
        this.props.space.defense,
        React.createElement("br", null),
        this.props.space.country ? "Owner: " + this.props.space.country : null,
        React.createElement("br", null),
        this.props.space.canBuild && this.props.currentTurn === this.props.space.country && unit.length === 0 ? React.createElement(
          "ul",
          null,
          this.props.space.canBuild.map(function (unitTuple, i) {
            return unitTuple[1] <= country.funds ? React.createElement(
              "li",
              {
                key: i,
                onClick: function onClick() {
                  _this2.props.buildUnit.call(null, unitTuple[0], _this2.props.space.country, _this2.props.space.position);
                  _this2.props.decrementFunds.call(null, country.name, unitTuple[1]);
                }
              },
              unitTuple[0],
              " | ",
              unitTuple[1]
            ) : null;
          })
        ) : null
      );
    }
  }]);

  return SpaceIntel;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NwYWNlSW50ZWwuanN4Il0sIm5hbWVzIjpbIlNwYWNlSW50ZWwiLCJwcm9wcyIsImNvdW50cnkiLCJjb3VudHJpZXMiLCJmaWx0ZXIiLCJuYW1lIiwic3BhY2UiLCJ1bml0IiwidW5pdHMiLCJwb3NpdGlvbiIsImxlbmd0aCIsInRvZ2dsZVVuaXRNb3ZlIiwicmVhZHlUb01vdmUiLCJ0ZXJyYWluIiwiZGVmZW5zZSIsImNhbkJ1aWxkIiwiY3VycmVudFR1cm4iLCJtYXAiLCJ1bml0VHVwbGUiLCJpIiwiZnVuZHMiLCJidWlsZFVuaXQiLCJjYWxsIiwiZGVjcmVtZW50RnVuZHMiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxVOzs7QUFDSixzQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLG1IQUNYQSxLQURXO0FBRWxCOzs7OzZCQUVRO0FBQUE7O0FBQ1AsVUFBSUMsVUFBVSxLQUFLRCxLQUFMLENBQVdFLFNBQVgsQ0FBcUJDLE1BQXJCLENBQTRCO0FBQUEsZUFBV0YsUUFBUUcsSUFBUixLQUFpQixPQUFLSixLQUFMLENBQVdLLEtBQVgsQ0FBaUJKLE9BQTdDO0FBQUEsT0FBNUIsRUFBa0YsQ0FBbEYsQ0FBZDtBQUNBLFVBQUlLLE9BQU8sS0FBS04sS0FBTCxDQUFXTyxLQUFYLENBQWlCSixNQUFqQixDQUF3QjtBQUFBLGVBQVFHLEtBQUtFLFFBQUwsS0FBa0IsT0FBS1IsS0FBTCxDQUFXSyxLQUFYLENBQWlCRyxRQUEzQztBQUFBLE9BQXhCLENBQVg7QUFDQSxhQUNFO0FBQUE7QUFBQTtBQUNHRixhQUFLRyxNQUFMLEdBQWMsb0JBQUMsU0FBRDtBQUNiLGdCQUFNSCxLQUFLLENBQUwsQ0FETztBQUViLDBCQUFnQixLQUFLTixLQUFMLENBQVdVLGNBRmQ7QUFHYix1QkFBYSxLQUFLVixLQUFMLENBQVdXO0FBSFgsVUFBZCxHQUlJLElBTFA7QUFBQTtBQU1ZLGFBQUtYLEtBQUwsQ0FBV0ssS0FBWCxDQUFpQk8sT0FON0I7QUFNcUMsdUNBTnJDO0FBQUE7QUFPWSxhQUFLWixLQUFMLENBQVdLLEtBQVgsQ0FBaUJRLE9BUDdCO0FBT3FDLHVDQVByQztBQVFHLGFBQUtiLEtBQUwsQ0FBV0ssS0FBWCxDQUFpQkosT0FBakIsZUFBcUMsS0FBS0QsS0FBTCxDQUFXSyxLQUFYLENBQWlCSixPQUF0RCxHQUFrRSxJQVJyRTtBQVEwRSx1Q0FSMUU7QUFTRyxhQUFLRCxLQUFMLENBQVdLLEtBQVgsQ0FBaUJTLFFBQWpCLElBQTZCLEtBQUtkLEtBQUwsQ0FBV2UsV0FBWCxLQUEyQixLQUFLZixLQUFMLENBQVdLLEtBQVgsQ0FBaUJKLE9BQXpFLElBQW9GSyxLQUFLRyxNQUFMLEtBQWdCLENBQXBHLEdBQ0U7QUFBQTtBQUFBO0FBQ0UsZUFBS1QsS0FBTCxDQUFXSyxLQUFYLENBQWlCUyxRQUFqQixDQUEwQkUsR0FBMUIsQ0FBOEIsVUFBQ0MsU0FBRCxFQUFZQyxDQUFaO0FBQUEsbUJBQzdCRCxVQUFVLENBQVYsS0FBZ0JoQixRQUFRa0IsS0FBeEIsR0FDRTtBQUFBO0FBQUE7QUFDRSxxQkFBS0QsQ0FEUDtBQUVFLHlCQUFTLG1CQUFNO0FBQ2IseUJBQUtsQixLQUFMLENBQVdvQixTQUFYLENBQXFCQyxJQUFyQixDQUEwQixJQUExQixFQUFnQ0osVUFBVSxDQUFWLENBQWhDLEVBQThDLE9BQUtqQixLQUFMLENBQVdLLEtBQVgsQ0FBaUJKLE9BQS9ELEVBQXdFLE9BQUtELEtBQUwsQ0FBV0ssS0FBWCxDQUFpQkcsUUFBekY7QUFDQSx5QkFBS1IsS0FBTCxDQUFXc0IsY0FBWCxDQUEwQkQsSUFBMUIsQ0FBK0IsSUFBL0IsRUFBcUNwQixRQUFRRyxJQUE3QyxFQUFtRGEsVUFBVSxDQUFWLENBQW5EO0FBQ0Q7QUFMSDtBQU9HQSx3QkFBVSxDQUFWLENBUEg7QUFBQTtBQU9vQkEsd0JBQVUsQ0FBVjtBQVBwQixhQURGLEdBVUUsSUFYMkI7QUFBQSxXQUE5QjtBQURGLFNBREYsR0FnQkM7QUF6QkosT0FERjtBQTZCRDs7OztFQXJDc0JNLE1BQU1DLFMiLCJmaWxlIjoic3BhY2VJbnRlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFNwYWNlSW50ZWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBsZXQgY291bnRyeSA9IHRoaXMucHJvcHMuY291bnRyaWVzLmZpbHRlcihjb3VudHJ5ID0+IGNvdW50cnkubmFtZSA9PT0gdGhpcy5wcm9wcy5zcGFjZS5jb3VudHJ5KVswXTtcclxuICAgIGxldCB1bml0ID0gdGhpcy5wcm9wcy51bml0cy5maWx0ZXIodW5pdCA9PiB1bml0LnBvc2l0aW9uID09PSB0aGlzLnByb3BzLnNwYWNlLnBvc2l0aW9uKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge3VuaXQubGVuZ3RoID8gPFVuaXRJbnRlbFxyXG4gICAgICAgICAgdW5pdD17dW5pdFswXX1cclxuICAgICAgICAgIHRvZ2dsZVVuaXRNb3ZlPXt0aGlzLnByb3BzLnRvZ2dsZVVuaXRNb3ZlfVxyXG4gICAgICAgICAgcmVhZHlUb01vdmU9e3RoaXMucHJvcHMucmVhZHlUb01vdmV9XHJcbiAgICAgICAgLz4gOiBudWxsfVxyXG4gICAgICAgIFRlcnJhaW46IHt0aGlzLnByb3BzLnNwYWNlLnRlcnJhaW59PGJyLz5cclxuICAgICAgICBEZWZlbnNlOiB7dGhpcy5wcm9wcy5zcGFjZS5kZWZlbnNlfTxici8+XHJcbiAgICAgICAge3RoaXMucHJvcHMuc3BhY2UuY291bnRyeSA/IGBPd25lcjogJHt0aGlzLnByb3BzLnNwYWNlLmNvdW50cnl9YCA6IG51bGx9PGJyLz5cclxuICAgICAgICB7dGhpcy5wcm9wcy5zcGFjZS5jYW5CdWlsZCAmJiB0aGlzLnByb3BzLmN1cnJlbnRUdXJuID09PSB0aGlzLnByb3BzLnNwYWNlLmNvdW50cnkgJiYgdW5pdC5sZW5ndGggPT09IDAgP1xyXG4gICAgICAgICAgKDx1bD5cclxuICAgICAgICAgICAge3RoaXMucHJvcHMuc3BhY2UuY2FuQnVpbGQubWFwKCh1bml0VHVwbGUsIGkpID0+IChcclxuICAgICAgICAgICAgICB1bml0VHVwbGVbMV0gPD0gY291bnRyeS5mdW5kcyA/IFxyXG4gICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYnVpbGRVbml0LmNhbGwobnVsbCwgdW5pdFR1cGxlWzBdLCB0aGlzLnByb3BzLnNwYWNlLmNvdW50cnksIHRoaXMucHJvcHMuc3BhY2UucG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGVjcmVtZW50RnVuZHMuY2FsbChudWxsLCBjb3VudHJ5Lm5hbWUsIHVuaXRUdXBsZVsxXSk7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHt1bml0VHVwbGVbMF19IHwge3VuaXRUdXBsZVsxXX1cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC91bD4pXHJcbiAgICAgICAgOiBudWxsfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn0iXX0=