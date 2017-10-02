"use strict";

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
      spaceInFocus: false,
      clickedSpace: [],
      readyToMove: false
    };
    _this.toggleSpaceIntel = _this.toggleSpaceIntel.bind(_this);
    _this.toggleUnitMove = _this.toggleUnitMove.bind(_this);
    _this.calculateInitialIncome = _this.calculateInitialIncome.bind(_this);
    return _this;
  }

  _createClass(CurrentGame, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.props.incrementDay();
      this.props.changeCurrentTurn(this.props.countries);
      setTimeout(function () {
        _this2.props.countries.forEach(function (country, i) {
          var amount = _this2.calculateInitialIncome(country.name);
          _this2.props.incrementIncome(i, amount);
        });
        _this2.props.receiveIncome(_this2.props.countries[0].name);
      }, 20);
    }
  }, {
    key: "toggleSpaceIntel",
    value: function toggleSpaceIntel(position) {
      if (position === this.state.clickedSpace || position === undefined) {
        this.setState({ spaceInFocus: false, clickedSpace: [] });
      } else {
        this.setState({ spaceInFocus: true, clickedSpace: position });
      }
    }
  }, {
    key: "toggleUnitMove",
    value: function toggleUnitMove() {
      this.setState({ readyToMove: !this.state.readyToMove });
    }
  }, {
    key: "calculateInitialIncome",
    value: function calculateInitialIncome(countryName) {
      return this.props.board.reduce(function (sum, row) {
        return sum + row.reduce(function (total, space) {
          return total + (space.country === countryName ? 1000 : 0);
        }, 0);
      }, 0);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h3",
          null,
          this.props.gameName
        ),
        "Map: ",
        this.props.map,
        React.createElement("br", null),
        "Day: ",
        this.props.day,
        React.createElement("br", null),
        React.createElement("br", null),
        React.createElement(GameBoard, {
          board: this.props.board,
          units: this.props.units,
          clickedSpace: this.state.clickedSpace,
          readyToMove: this.state.readyToMove,
          moveUnit: this.props.moveUnit,
          toggleSpaceIntel: this.toggleSpaceIntel,
          toggleUnitMove: this.toggleUnitMove
        }),
        React.createElement("br", null),
        React.createElement(CountriesIntel, {
          countries: this.props.countries,
          currentTurn: this.props.currentTurn,
          toggleSpaceIntel: this.toggleSpaceIntel,
          changeCurrentTurn: this.props.changeCurrentTurn,
          makeUnitsActive: this.props.makeUnitsActive,
          receiveIncome: this.props.receiveIncome
        }),
        React.createElement("br", null),
        this.state.spaceInFocus ? React.createElement(SpaceIntel, {
          currentTurn: this.props.currentTurn,
          countries: this.props.countries,
          units: this.props.units,
          position: this.state.clickedSpace,
          space: this.props.board[this.state.clickedSpace[0]][this.state.clickedSpace[1]],
          readyToMove: this.state.readyToMove,
          toggleUnitMove: this.toggleUnitMove,
          buildUnit: this.props.buildUnit,
          decrementFunds: this.props.decrementFunds
        }) : null
      );
    }
  }]);

  return CurrentGame;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2N1cnJlbnRHYW1lLmpzeCJdLCJuYW1lcyI6WyJDdXJyZW50R2FtZSIsInByb3BzIiwic3RhdGUiLCJzcGFjZUluRm9jdXMiLCJjbGlja2VkU3BhY2UiLCJyZWFkeVRvTW92ZSIsInRvZ2dsZVNwYWNlSW50ZWwiLCJiaW5kIiwidG9nZ2xlVW5pdE1vdmUiLCJjYWxjdWxhdGVJbml0aWFsSW5jb21lIiwiaW5jcmVtZW50RGF5IiwiY2hhbmdlQ3VycmVudFR1cm4iLCJjb3VudHJpZXMiLCJzZXRUaW1lb3V0IiwiZm9yRWFjaCIsImNvdW50cnkiLCJpIiwiYW1vdW50IiwibmFtZSIsImluY3JlbWVudEluY29tZSIsInJlY2VpdmVJbmNvbWUiLCJwb3NpdGlvbiIsInVuZGVmaW5lZCIsInNldFN0YXRlIiwiY291bnRyeU5hbWUiLCJib2FyZCIsInJlZHVjZSIsInN1bSIsInJvdyIsInRvdGFsIiwic3BhY2UiLCJnYW1lTmFtZSIsIm1hcCIsImRheSIsInVuaXRzIiwibW92ZVVuaXQiLCJjdXJyZW50VHVybiIsIm1ha2VVbml0c0FjdGl2ZSIsImJ1aWxkVW5pdCIsImRlY3JlbWVudEZ1bmRzIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsVzs7O0FBQ0osdUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwSEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLG9CQUFjLEtBREg7QUFFWEMsb0JBQWMsRUFGSDtBQUdYQyxtQkFBYTtBQUhGLEtBQWI7QUFLQSxVQUFLQyxnQkFBTCxHQUF3QixNQUFLQSxnQkFBTCxDQUFzQkMsSUFBdEIsT0FBeEI7QUFDQSxVQUFLQyxjQUFMLEdBQXNCLE1BQUtBLGNBQUwsQ0FBb0JELElBQXBCLE9BQXRCO0FBQ0EsVUFBS0Usc0JBQUwsR0FBOEIsTUFBS0Esc0JBQUwsQ0FBNEJGLElBQTVCLE9BQTlCO0FBVGlCO0FBVWxCOzs7O3dDQUVtQjtBQUFBOztBQUNsQixX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ekIsaUJBQU8sS0FBS1gsS0FBTCxDQUFXaUMsS0FITztBQUl6QixvQkFBVSxLQUFLaEMsS0FBTCxDQUFXRSxZQUpJO0FBS3pCLGlCQUFPLEtBQUtILEtBQUwsQ0FBV3dCLEtBQVgsQ0FBaUIsS0FBS3ZCLEtBQUwsQ0FBV0UsWUFBWCxDQUF3QixDQUF4QixDQUFqQixFQUE2QyxLQUFLRixLQUFMLENBQVdFLFlBQVgsQ0FBd0IsQ0FBeEIsQ0FBN0MsQ0FMa0I7QUFNekIsdUJBQWEsS0FBS0YsS0FBTCxDQUFXRyxXQU5DO0FBT3pCLDBCQUFnQixLQUFLRyxjQVBJO0FBUXpCLHFCQUFXLEtBQUtQLEtBQUwsQ0FBV3FDLFNBUkc7QUFTekIsMEJBQWdCLEtBQUtyQyxLQUFMLENBQVdzQztBQVRGLFVBQTFCLEdBVUk7QUEvQlAsT0FERjtBQW1DRDs7OztFQWpGdUJDLE1BQU1DLFMiLCJmaWxlIjoiY3VycmVudEdhbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBDdXJyZW50R2FtZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHNwYWNlSW5Gb2N1czogZmFsc2UsXHJcbiAgICAgIGNsaWNrZWRTcGFjZTogW10sXHJcbiAgICAgIHJlYWR5VG9Nb3ZlOiBmYWxzZVxyXG4gICAgfVxyXG4gICAgdGhpcy50b2dnbGVTcGFjZUludGVsID0gdGhpcy50b2dnbGVTcGFjZUludGVsLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnRvZ2dsZVVuaXRNb3ZlID0gdGhpcy50b2dnbGVVbml0TW92ZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5jYWxjdWxhdGVJbml0aWFsSW5jb21lID0gdGhpcy5jYWxjdWxhdGVJbml0aWFsSW5jb21lLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMucHJvcHMuaW5jcmVtZW50RGF5KCk7XHJcbiAgICB0aGlzLnByb3BzLmNoYW5nZUN1cnJlbnRUdXJuKHRoaXMucHJvcHMuY291bnRyaWVzKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLnByb3BzLmNvdW50cmllcy5mb3JFYWNoKChjb3VudHJ5LCBpKSA9PiB7XHJcbiAgICAgICAgbGV0IGFtb3VudCA9IHRoaXMuY2FsY3VsYXRlSW5pdGlhbEluY29tZShjb3VudHJ5Lm5hbWUpO1xyXG4gICAgICAgIHRoaXMucHJvcHMuaW5jcmVtZW50SW5jb21lKGksIGFtb3VudCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMucHJvcHMucmVjZWl2ZUluY29tZSh0aGlzLnByb3BzLmNvdW50cmllc1swXS5uYW1lKTtcclxuICAgIH0sIDIwKTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZVNwYWNlSW50ZWwocG9zaXRpb24pIHtcclxuICAgIGlmIChwb3NpdGlvbiA9PT0gdGhpcy5zdGF0ZS5jbGlja2VkU3BhY2UgfHwgcG9zaXRpb24gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtzcGFjZUluRm9jdXM6IGZhbHNlLCBjbGlja2VkU3BhY2U6IFtdfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtzcGFjZUluRm9jdXM6IHRydWUsIGNsaWNrZWRTcGFjZTogcG9zaXRpb259KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRvZ2dsZVVuaXRNb3ZlKCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7cmVhZHlUb01vdmU6ICF0aGlzLnN0YXRlLnJlYWR5VG9Nb3ZlfSk7XHJcbiAgfVxyXG5cclxuICBjYWxjdWxhdGVJbml0aWFsSW5jb21lKGNvdW50cnlOYW1lKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5ib2FyZC5yZWR1Y2UoKHN1bSwgcm93KSA9PiB7XHJcbiAgICAgIHJldHVybiBzdW0gKyByb3cucmVkdWNlKCh0b3RhbCwgc3BhY2UpID0+IHtcclxuICAgICAgICByZXR1cm4gdG90YWwgKyAoc3BhY2UuY291bnRyeSA9PT0gY291bnRyeU5hbWUgPyAxMDAwIDogMCk7XHJcbiAgICAgIH0sIDApO1xyXG4gICAgfSwgMCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxoMz57dGhpcy5wcm9wcy5nYW1lTmFtZX08L2gzPlxyXG4gICAgICAgIE1hcDoge3RoaXMucHJvcHMubWFwfTxici8+XHJcbiAgICAgICAgRGF5OiB7dGhpcy5wcm9wcy5kYXl9PGJyLz48YnIvPlxyXG4gICAgICAgIDxHYW1lQm9hcmRcclxuICAgICAgICAgIGJvYXJkPXt0aGlzLnByb3BzLmJvYXJkfVxyXG4gICAgICAgICAgdW5pdHM9e3RoaXMucHJvcHMudW5pdHN9XHJcbiAgICAgICAgICBjbGlja2VkU3BhY2U9e3RoaXMuc3RhdGUuY2xpY2tlZFNwYWNlfVxyXG4gICAgICAgICAgcmVhZHlUb01vdmU9e3RoaXMuc3RhdGUucmVhZHlUb01vdmV9XHJcbiAgICAgICAgICBtb3ZlVW5pdD17dGhpcy5wcm9wcy5tb3ZlVW5pdH1cclxuICAgICAgICAgIHRvZ2dsZVNwYWNlSW50ZWw9e3RoaXMudG9nZ2xlU3BhY2VJbnRlbH1cclxuICAgICAgICAgIHRvZ2dsZVVuaXRNb3ZlPXt0aGlzLnRvZ2dsZVVuaXRNb3ZlfVxyXG4gICAgICAgIC8+PGJyLz5cclxuICAgICAgICA8Q291bnRyaWVzSW50ZWxcclxuICAgICAgICAgIGNvdW50cmllcz17dGhpcy5wcm9wcy5jb3VudHJpZXN9XHJcbiAgICAgICAgICBjdXJyZW50VHVybj17dGhpcy5wcm9wcy5jdXJyZW50VHVybn1cclxuICAgICAgICAgIHRvZ2dsZVNwYWNlSW50ZWw9e3RoaXMudG9nZ2xlU3BhY2VJbnRlbH1cclxuICAgICAgICAgIGNoYW5nZUN1cnJlbnRUdXJuPXt0aGlzLnByb3BzLmNoYW5nZUN1cnJlbnRUdXJufVxyXG4gICAgICAgICAgbWFrZVVuaXRzQWN0aXZlPXt0aGlzLnByb3BzLm1ha2VVbml0c0FjdGl2ZX1cclxuICAgICAgICAgIHJlY2VpdmVJbmNvbWU9e3RoaXMucHJvcHMucmVjZWl2ZUluY29tZX1cclxuICAgICAgICAvPjxici8+XHJcbiAgICAgICAge3RoaXMuc3RhdGUuc3BhY2VJbkZvY3VzID8gPFNwYWNlSW50ZWxcclxuICAgICAgICAgIGN1cnJlbnRUdXJuPXt0aGlzLnByb3BzLmN1cnJlbnRUdXJufVxyXG4gICAgICAgICAgY291bnRyaWVzPXt0aGlzLnByb3BzLmNvdW50cmllc31cclxuICAgICAgICAgIHVuaXRzPXt0aGlzLnByb3BzLnVuaXRzfVxyXG4gICAgICAgICAgcG9zaXRpb249e3RoaXMuc3RhdGUuY2xpY2tlZFNwYWNlfVxyXG4gICAgICAgICAgc3BhY2U9e3RoaXMucHJvcHMuYm9hcmRbdGhpcy5zdGF0ZS5jbGlja2VkU3BhY2VbMF1dW3RoaXMuc3RhdGUuY2xpY2tlZFNwYWNlWzFdXX1cclxuICAgICAgICAgIHJlYWR5VG9Nb3ZlPXt0aGlzLnN0YXRlLnJlYWR5VG9Nb3ZlfVxyXG4gICAgICAgICAgdG9nZ2xlVW5pdE1vdmU9e3RoaXMudG9nZ2xlVW5pdE1vdmV9XHJcbiAgICAgICAgICBidWlsZFVuaXQ9e3RoaXMucHJvcHMuYnVpbGRVbml0fVxyXG4gICAgICAgICAgZGVjcmVtZW50RnVuZHM9e3RoaXMucHJvcHMuZGVjcmVtZW50RnVuZHN9XHJcbiAgICAgICAgLz4gOiBudWxsfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn0iXX0=