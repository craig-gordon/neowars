"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CountriesIntel = function (_React$Component) {
  _inherits(CountriesIntel, _React$Component);

  function CountriesIntel(props) {
    _classCallCheck(this, CountriesIntel);

    return _possibleConstructorReturn(this, (CountriesIntel.__proto__ || Object.getPrototypeOf(CountriesIntel)).call(this, props));
  }

  _createClass(CountriesIntel, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(
        "div",
        null,
        "Country   Funds   Income",
        this.props.countries.map(function (country, i) {
          return React.createElement(
            "div",
            { className: "country" + i, key: i },
            country.name,
            " ",
            country.funds,
            " ",
            country.income,
            " ",
            _this2.props.currentTurn === country.name ? React.createElement(
              "div",
              { onClick: function onClick() {
                  _this2.props.changeCurrentTurn(_this2.props.countries);
                  _this2.props.makeUnitsActive();
                  _this2.props.toggleSpaceIntel();
                  setTimeout(function () {
                    _this2.props.receiveIncome(_this2.props.currentTurn);
                  }, 5);
                } },
              "End Turn"
            ) : null
          );
        })
      );
    }
  }]);

  return CountriesIntel;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvdW50cmllc0ludGVsLmpzeCJdLCJuYW1lcyI6WyJDb3VudHJpZXNJbnRlbCIsInByb3BzIiwiY291bnRyaWVzIiwibWFwIiwiY291bnRyeSIsImkiLCJuYW1lIiwiZnVuZHMiLCJpbmNvbWUiLCJjdXJyZW50VHVybiIsImNoYW5nZUN1cnJlbnRUdXJuIiwibWFrZVVuaXRzQWN0aXZlIiwidG9nZ2xlU3BhY2VJbnRlbCIsInNldFRpbWVvdXQiLCJyZWNlaXZlSW5jb21lIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsYzs7O0FBQ0osMEJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwySEFDWEEsS0FEVztBQUVsQjs7Ozs2QkFFUTtBQUFBOztBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQUE7QUFFRyxhQUFLQSxLQUFMLENBQVdDLFNBQVgsQ0FBcUJDLEdBQXJCLENBQXlCLFVBQUNDLE9BQUQsRUFBVUMsQ0FBVjtBQUFBLGlCQUN4QjtBQUFBO0FBQUEsY0FBSyx1QkFBcUJBLENBQTFCLEVBQStCLEtBQUtBLENBQXBDO0FBQ0dELG9CQUFRRSxJQURYO0FBQUE7QUFDa0JGLG9CQUFRRyxLQUQxQjtBQUFBO0FBQ2tDSCxvQkFBUUksTUFEMUM7QUFBQTtBQUNtRCxtQkFBS1AsS0FBTCxDQUFXUSxXQUFYLEtBQTJCTCxRQUFRRSxJQUFuQyxHQUEyQztBQUFBO0FBQUEsZ0JBQUssU0FBUyxtQkFBTTtBQUM5Ryx5QkFBS0wsS0FBTCxDQUFXUyxpQkFBWCxDQUE2QixPQUFLVCxLQUFMLENBQVdDLFNBQXhDO0FBQ0EseUJBQUtELEtBQUwsQ0FBV1UsZUFBWDtBQUNBLHlCQUFLVixLQUFMLENBQVdXLGdCQUFYO0FBQ0FDLDZCQUFXLFlBQU07QUFDZiwyQkFBS1osS0FBTCxDQUFXYSxhQUFYLENBQXlCLE9BQUtiLEtBQUwsQ0FBV1EsV0FBcEM7QUFDRCxtQkFGRCxFQUVHLENBRkg7QUFHRCxpQkFQMkY7QUFBQTtBQUFBLGFBQTNDLEdBTzVCO0FBUnZCLFdBRHdCO0FBQUEsU0FBekI7QUFGSCxPQURGO0FBaUJEOzs7O0VBdkIwQk0sTUFBTUMsUyIsImZpbGUiOiJjb3VudHJpZXNJbnRlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIENvdW50cmllc0ludGVsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICBDb3VudHJ5ICAgRnVuZHMgICBJbmNvbWVcclxuICAgICAgICB7dGhpcy5wcm9wcy5jb3VudHJpZXMubWFwKChjb3VudHJ5LCBpKSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGNvdW50cnkke2l9YH0ga2V5PXtpfT5cclxuICAgICAgICAgICAge2NvdW50cnkubmFtZX0ge2NvdW50cnkuZnVuZHN9IHtjb3VudHJ5LmluY29tZX0ge3RoaXMucHJvcHMuY3VycmVudFR1cm4gPT09IGNvdW50cnkubmFtZSA/ICg8ZGl2IG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLnByb3BzLmNoYW5nZUN1cnJlbnRUdXJuKHRoaXMucHJvcHMuY291bnRyaWVzKTtcclxuICAgICAgICAgICAgICB0aGlzLnByb3BzLm1ha2VVbml0c0FjdGl2ZSgpO1xyXG4gICAgICAgICAgICAgIHRoaXMucHJvcHMudG9nZ2xlU3BhY2VJbnRlbCgpO1xyXG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5yZWNlaXZlSW5jb21lKHRoaXMucHJvcHMuY3VycmVudFR1cm4pO1xyXG4gICAgICAgICAgICAgIH0sIDUpO1xyXG4gICAgICAgICAgICB9fT5FbmQgVHVybjwvZGl2PikgOiBudWxsfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufSJdfQ==