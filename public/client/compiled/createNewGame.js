'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CreateNewGame = function (_React$Component) {
  _inherits(CreateNewGame, _React$Component);

  function CreateNewGame(props) {
    _classCallCheck(this, CreateNewGame);

    var _this = _possibleConstructorReturn(this, (CreateNewGame.__proto__ || Object.getPrototypeOf(CreateNewGame)).call(this, props));

    _this.state = {
      gameName: '',
      map: null
    };
    _this.updateName = _this.updateName.bind(_this);
    _this.updateMap = _this.updateMap.bind(_this);
    console.log('this.props:', _this.props);
    return _this;
  }

  _createClass(CreateNewGame, [{
    key: 'updateName',
    value: function updateName(e) {
      this.setState({ gameName: e.target.value });
    }
  }, {
    key: 'updateMap',
    value: function updateMap(e) {
      this.setState({ map: e.target.value });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h3',
          null,
          'Create Game'
        ),
        'Game Name: ',
        React.createElement('input', { type: 'text', value: this.state.gameName, onChange: this.updateName }),
        React.createElement('br', null),
        'Select Map: ',
        React.createElement(
          'select',
          { name: 'Map', onChange: this.updateMap },
          React.createElement(
            'option',
            null,
            'select...'
          ),
          this.props.mapList.map(function (map, i) {
            return React.createElement(
              'option',
              { key: i },
              map
            );
          })
        ),
        React.createElement('br', null),
        React.createElement('br', null),
        React.createElement('br', null),
        React.createElement(
          'button',
          { onClick: this.props.startGame.bind(null, this.state.gameName, this.state.map) },
          'Start Game'
        )
      );
    }
  }]);

  return CreateNewGame;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NyZWF0ZU5ld0dhbWUuanN4Il0sIm5hbWVzIjpbIkNyZWF0ZU5ld0dhbWUiLCJwcm9wcyIsInN0YXRlIiwiZ2FtZU5hbWUiLCJtYXAiLCJ1cGRhdGVOYW1lIiwiYmluZCIsInVwZGF0ZU1hcCIsImNvbnNvbGUiLCJsb2ciLCJlIiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcExpc3QiLCJpIiwic3RhcnRHYW1lIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsYTs7O0FBQ0oseUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw4SEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGdCQUFVLEVBREM7QUFFWEMsV0FBSztBQUZNLEtBQWI7QUFJQSxVQUFLQyxVQUFMLEdBQWtCLE1BQUtBLFVBQUwsQ0FBZ0JDLElBQWhCLE9BQWxCO0FBQ0EsVUFBS0MsU0FBTCxHQUFpQixNQUFLQSxTQUFMLENBQWVELElBQWYsT0FBakI7QUFDQUUsWUFBUUMsR0FBUixDQUFZLGFBQVosRUFBMkIsTUFBS1IsS0FBaEM7QUFSaUI7QUFTbEI7Ozs7K0JBRVVTLEMsRUFBRztBQUNaLFdBQUtDLFFBQUwsQ0FBYyxFQUFDUixVQUFVTyxFQUFFRSxNQUFGLENBQVNDLEtBQXBCLEVBQWQ7QUFDRDs7OzhCQUVTSCxDLEVBQUc7QUFDWCxXQUFLQyxRQUFMLENBQWMsRUFBQ1AsS0FBS00sRUFBRUUsTUFBRixDQUFTQyxLQUFmLEVBQWQ7QUFDRDs7OzZCQUVRO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFBQTtBQUVhLHVDQUFPLE1BQUssTUFBWixFQUFtQixPQUFPLEtBQUtYLEtBQUwsQ0FBV0MsUUFBckMsRUFBK0MsVUFBVSxLQUFLRSxVQUE5RCxHQUZiO0FBRStGLHVDQUYvRjtBQUFBO0FBR2M7QUFBQTtBQUFBLFlBQVEsTUFBSyxLQUFiLEVBQW1CLFVBQVUsS0FBS0UsU0FBbEM7QUFDVjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRFU7QUFFVCxlQUFLTixLQUFMLENBQVdhLE9BQVgsQ0FBbUJWLEdBQW5CLENBQXVCLFVBQUNBLEdBQUQsRUFBTVcsQ0FBTjtBQUFBLG1CQUFZO0FBQUE7QUFBQSxnQkFBUSxLQUFLQSxDQUFiO0FBQWlCWDtBQUFqQixhQUFaO0FBQUEsV0FBdkI7QUFGUyxTQUhkO0FBTVcsdUNBTlg7QUFPRSx1Q0FQRjtBQU9PLHVDQVBQO0FBUUU7QUFBQTtBQUFBLFlBQVEsU0FBUyxLQUFLSCxLQUFMLENBQVdlLFNBQVgsQ0FBcUJWLElBQXJCLENBQTBCLElBQTFCLEVBQWdDLEtBQUtKLEtBQUwsQ0FBV0MsUUFBM0MsRUFBcUQsS0FBS0QsS0FBTCxDQUFXRSxHQUFoRSxDQUFqQjtBQUFBO0FBQUE7QUFSRixPQURGO0FBWUQ7Ozs7RUFqQ3lCYSxNQUFNQyxTIiwiZmlsZSI6ImNyZWF0ZU5ld0dhbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBDcmVhdGVOZXdHYW1lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgZ2FtZU5hbWU6ICcnLFxyXG4gICAgICBtYXA6IG51bGxcclxuICAgIH1cclxuICAgIHRoaXMudXBkYXRlTmFtZSA9IHRoaXMudXBkYXRlTmFtZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy51cGRhdGVNYXAgPSB0aGlzLnVwZGF0ZU1hcC5iaW5kKHRoaXMpO1xyXG4gICAgY29uc29sZS5sb2coJ3RoaXMucHJvcHM6JywgdGhpcy5wcm9wcyk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVOYW1lKGUpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe2dhbWVOYW1lOiBlLnRhcmdldC52YWx1ZX0pO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlTWFwKGUpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe21hcDogZS50YXJnZXQudmFsdWV9KTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGgzPkNyZWF0ZSBHYW1lPC9oMz5cclxuICAgICAgICBHYW1lIE5hbWU6IDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLmdhbWVOYW1lfSBvbkNoYW5nZT17dGhpcy51cGRhdGVOYW1lfT48L2lucHV0Pjxici8+XHJcbiAgICAgICAgU2VsZWN0IE1hcDogPHNlbGVjdCBuYW1lPVwiTWFwXCIgb25DaGFuZ2U9e3RoaXMudXBkYXRlTWFwfT5cclxuICAgICAgICAgIDxvcHRpb24+c2VsZWN0Li4uPC9vcHRpb24+XHJcbiAgICAgICAgICB7dGhpcy5wcm9wcy5tYXBMaXN0Lm1hcCgobWFwLCBpKSA9PiA8b3B0aW9uIGtleT17aX0+e21hcH08L29wdGlvbj4pfVxyXG4gICAgICAgIDwvc2VsZWN0Pjxici8+XHJcbiAgICAgICAgPGJyLz48YnIvPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5zdGFydEdhbWUuYmluZChudWxsLCB0aGlzLnN0YXRlLmdhbWVOYW1lLCB0aGlzLnN0YXRlLm1hcCl9PlN0YXJ0IEdhbWU8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59Il19