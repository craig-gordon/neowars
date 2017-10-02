"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UnitIntel = function (_React$Component) {
  _inherits(UnitIntel, _React$Component);

  function UnitIntel(props) {
    _classCallCheck(this, UnitIntel);

    return _possibleConstructorReturn(this, (UnitIntel.__proto__ || Object.getPrototypeOf(UnitIntel)).call(this, props));
  }

  _createClass(UnitIntel, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        "Unit: ",
        this.props.unit.type,
        React.createElement("br", null),
        "Country: ",
        this.props.unit.country,
        React.createElement("br", null),
        "HP: ",
        Math.ceil(this.props.unit.hp / 10),
        React.createElement("br", null),
        "Move: ",
        this.props.unit.moveRange,
        React.createElement("br", null),
        "Fuel: ",
        this.props.unit.fuel,
        React.createElement("br", null),
        this.props.unit.weapons[0].ammo ? "Ammo: " + this.props.unit.weapons[0].ammo : null,
        React.createElement("br", null),
        this.props.unit.canMove ? React.createElement(
          "div",
          { onClick: this.props.toggleUnitMove.bind(null, this.props.unit) },
          "Move Unit"
        ) : null,
        this.props.readyToMove ? "to..." : null,
        React.createElement("br", null),
        React.createElement("br", null)
      );
    }
  }]);

  return UnitIntel;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3VuaXRJbnRlbC5qc3giXSwibmFtZXMiOlsiVW5pdEludGVsIiwicHJvcHMiLCJ1bml0IiwidHlwZSIsImNvdW50cnkiLCJNYXRoIiwiY2VpbCIsImhwIiwibW92ZVJhbmdlIiwiZnVlbCIsIndlYXBvbnMiLCJhbW1vIiwiY2FuTW92ZSIsInRvZ2dsZVVuaXRNb3ZlIiwiYmluZCIsInJlYWR5VG9Nb3ZlIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsUzs7O0FBQ0oscUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxpSEFDWEEsS0FEVztBQUVsQjs7Ozs2QkFFUTtBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQUE7QUFDUyxhQUFLQSxLQUFMLENBQVdDLElBQVgsQ0FBZ0JDLElBRHpCO0FBQzhCLHVDQUQ5QjtBQUFBO0FBRVksYUFBS0YsS0FBTCxDQUFXQyxJQUFYLENBQWdCRSxPQUY1QjtBQUVvQyx1Q0FGcEM7QUFBQTtBQUdPQyxhQUFLQyxJQUFMLENBQVUsS0FBS0wsS0FBTCxDQUFXQyxJQUFYLENBQWdCSyxFQUFoQixHQUFxQixFQUEvQixDQUhQO0FBRzBDLHVDQUgxQztBQUFBO0FBSVMsYUFBS04sS0FBTCxDQUFXQyxJQUFYLENBQWdCTSxTQUp6QjtBQUltQyx1Q0FKbkM7QUFBQTtBQUtTLGFBQUtQLEtBQUwsQ0FBV0MsSUFBWCxDQUFnQk8sSUFMekI7QUFLOEIsdUNBTDlCO0FBTUcsYUFBS1IsS0FBTCxDQUFXQyxJQUFYLENBQWdCUSxPQUFoQixDQUF3QixDQUF4QixFQUEyQkMsSUFBM0IsY0FBMkMsS0FBS1YsS0FBTCxDQUFXQyxJQUFYLENBQWdCUSxPQUFoQixDQUF3QixDQUF4QixFQUEyQkMsSUFBdEUsR0FBK0UsSUFObEY7QUFNdUYsdUNBTnZGO0FBT0csYUFBS1YsS0FBTCxDQUFXQyxJQUFYLENBQWdCVSxPQUFoQixHQUEwQjtBQUFBO0FBQUEsWUFBSyxTQUFTLEtBQUtYLEtBQUwsQ0FBV1ksY0FBWCxDQUEwQkMsSUFBMUIsQ0FBK0IsSUFBL0IsRUFBcUMsS0FBS2IsS0FBTCxDQUFXQyxJQUFoRCxDQUFkO0FBQUE7QUFBQSxTQUExQixHQUFpSCxJQVBwSDtBQVFHLGFBQUtELEtBQUwsQ0FBV2MsV0FBWCxhQUFtQyxJQVJ0QztBQVEyQyx1Q0FSM0M7QUFRZ0Q7QUFSaEQsT0FERjtBQVlEOzs7O0VBbEJxQkMsTUFBTUMsUyIsImZpbGUiOiJ1bml0SW50ZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBVbml0SW50ZWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIFVuaXQ6IHt0aGlzLnByb3BzLnVuaXQudHlwZX08YnIvPlxyXG4gICAgICAgIENvdW50cnk6IHt0aGlzLnByb3BzLnVuaXQuY291bnRyeX08YnIvPlxyXG4gICAgICAgIEhQOiB7TWF0aC5jZWlsKHRoaXMucHJvcHMudW5pdC5ocCAvIDEwKX08YnIvPlxyXG4gICAgICAgIE1vdmU6IHt0aGlzLnByb3BzLnVuaXQubW92ZVJhbmdlfTxici8+XHJcbiAgICAgICAgRnVlbDoge3RoaXMucHJvcHMudW5pdC5mdWVsfTxici8+XHJcbiAgICAgICAge3RoaXMucHJvcHMudW5pdC53ZWFwb25zWzBdLmFtbW8gPyBgQW1tbzogJHt0aGlzLnByb3BzLnVuaXQud2VhcG9uc1swXS5hbW1vfWAgOiBudWxsfTxici8+XHJcbiAgICAgICAge3RoaXMucHJvcHMudW5pdC5jYW5Nb3ZlID8gPGRpdiBvbkNsaWNrPXt0aGlzLnByb3BzLnRvZ2dsZVVuaXRNb3ZlLmJpbmQobnVsbCwgdGhpcy5wcm9wcy51bml0KX0+TW92ZSBVbml0PC9kaXY+IDogbnVsbH1cclxuICAgICAgICB7dGhpcy5wcm9wcy5yZWFkeVRvTW92ZSA/IGB0by4uLmAgOiBudWxsfTxici8+PGJyLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59Il19