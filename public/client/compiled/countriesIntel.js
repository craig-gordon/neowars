'use strict';

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
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(
        'div',
        null,
        this.props.countries.map(function (country, i) {
          return React.createElement(
            'div',
            { key: i },
            country,
            ' ',
            _this2.props.currentTurn === country ? 'Current Turn' : null
          );
        })
      );
    }
  }]);

  return CountriesIntel;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvdW50cmllc0ludGVsLmpzeCJdLCJuYW1lcyI6WyJDb3VudHJpZXNJbnRlbCIsInByb3BzIiwiY291bnRyaWVzIiwibWFwIiwiY291bnRyeSIsImkiLCJjdXJyZW50VHVybiIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLGM7OztBQUNKLDBCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMkhBQ1hBLEtBRFc7QUFFbEI7Ozs7NkJBRVE7QUFBQTs7QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUNHLGFBQUtBLEtBQUwsQ0FBV0MsU0FBWCxDQUFxQkMsR0FBckIsQ0FBeUIsVUFBQ0MsT0FBRCxFQUFVQyxDQUFWO0FBQUEsaUJBQWdCO0FBQUE7QUFBQSxjQUFLLEtBQUtBLENBQVY7QUFBY0QsbUJBQWQ7QUFBQTtBQUF3QixtQkFBS0gsS0FBTCxDQUFXSyxXQUFYLEtBQTJCRixPQUEzQixHQUFxQyxjQUFyQyxHQUFzRDtBQUE5RSxXQUFoQjtBQUFBLFNBQXpCO0FBREgsT0FERjtBQUtEOzs7O0VBWDBCRyxNQUFNQyxTIiwiZmlsZSI6ImNvdW50cmllc0ludGVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQ291bnRyaWVzSW50ZWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHt0aGlzLnByb3BzLmNvdW50cmllcy5tYXAoKGNvdW50cnksIGkpID0+IDxkaXYga2V5PXtpfT57Y291bnRyeX0ge3RoaXMucHJvcHMuY3VycmVudFR1cm4gPT09IGNvdW50cnkgPyAnQ3VycmVudCBUdXJuJyA6IG51bGx9PC9kaXY+KX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59Il19