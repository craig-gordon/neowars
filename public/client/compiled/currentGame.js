'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CurrentGame = function (_React$Component) {
  _inherits(CurrentGame, _React$Component);

  function CurrentGame(props) {
    _classCallCheck(this, CurrentGame);

    var _this = _possibleConstructorReturn(this, (CurrentGame.__proto__ || Object.getPrototypeOf(CurrentGame)).call(this, props));

    _this.state = {
      currentDay: 1,
      countries: ['Floria', 'Ranford'],
      currentTurn: 'Floria'
    };
    return _this;
  }

  _createClass(CurrentGame, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h3',
          null,
          this.props.gameName
        ),
        'Map: ',
        this.props.map,
        React.createElement('br', null),
        'Day: ',
        this.state.currentDay,
        React.createElement('br', null),
        React.createElement('br', null),
        React.createElement(GameBoard, { board: this.props.board }),
        React.createElement('br', null),
        React.createElement(CountriesIntel, { countries: this.state.countries, currentTurn: this.state.currentTurn })
      );
    }
  }]);

  return CurrentGame;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2N1cnJlbnRHYW1lLmpzeCJdLCJuYW1lcyI6WyJDdXJyZW50R2FtZSIsInByb3BzIiwic3RhdGUiLCJjdXJyZW50RGF5IiwiY291bnRyaWVzIiwiY3VycmVudFR1cm4iLCJnYW1lTmFtZSIsIm1hcCIsImJvYXJkIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsVzs7O0FBQ0osdUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwSEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGtCQUFZLENBREQ7QUFFWEMsaUJBQVcsQ0FBQyxRQUFELEVBQVcsU0FBWCxDQUZBO0FBR1hDLG1CQUFhO0FBSEYsS0FBYjtBQUZpQjtBQU9sQjs7Ozs2QkFFUTtBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUssZUFBS0osS0FBTCxDQUFXSztBQUFoQixTQURGO0FBQUE7QUFFUSxhQUFLTCxLQUFMLENBQVdNLEdBRm5CO0FBRXVCLHVDQUZ2QjtBQUFBO0FBR1EsYUFBS0wsS0FBTCxDQUFXQyxVQUhuQjtBQUc4Qix1Q0FIOUI7QUFHbUMsdUNBSG5DO0FBSUUsNEJBQUMsU0FBRCxJQUFXLE9BQU8sS0FBS0YsS0FBTCxDQUFXTyxLQUE3QixHQUpGO0FBSXdDLHVDQUp4QztBQUtFLDRCQUFDLGNBQUQsSUFBZ0IsV0FBVyxLQUFLTixLQUFMLENBQVdFLFNBQXRDLEVBQWlELGFBQWEsS0FBS0YsS0FBTCxDQUFXRyxXQUF6RTtBQUxGLE9BREY7QUFTRDs7OztFQXBCdUJJLE1BQU1DLFMiLCJmaWxlIjoiY3VycmVudEdhbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBDdXJyZW50R2FtZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGN1cnJlbnREYXk6IDEsXHJcbiAgICAgIGNvdW50cmllczogWydGbG9yaWEnLCAnUmFuZm9yZCddLFxyXG4gICAgICBjdXJyZW50VHVybjogJ0Zsb3JpYSdcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxoMz57dGhpcy5wcm9wcy5nYW1lTmFtZX08L2gzPlxyXG4gICAgICAgIE1hcDoge3RoaXMucHJvcHMubWFwfTxici8+XHJcbiAgICAgICAgRGF5OiB7dGhpcy5zdGF0ZS5jdXJyZW50RGF5fTxici8+PGJyLz5cclxuICAgICAgICA8R2FtZUJvYXJkIGJvYXJkPXt0aGlzLnByb3BzLmJvYXJkfSAvPjxici8+XHJcbiAgICAgICAgPENvdW50cmllc0ludGVsIGNvdW50cmllcz17dGhpcy5zdGF0ZS5jb3VudHJpZXN9IGN1cnJlbnRUdXJuPXt0aGlzLnN0YXRlLmN1cnJlbnRUdXJufSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn0iXX0=