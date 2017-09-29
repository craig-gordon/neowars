'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Link = ReactRouterDOM.Link;

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
          Link,
          { to: '/game' },
          React.createElement(
            'button',
            { onClick: this.props.setNameAndMap.bind(null, this.state.gameName, this.state.map) },
            'Start Game'
          )
        )
      );
    }
  }]);

  return CreateNewGame;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NyZWF0ZU5ld0dhbWUuanN4Il0sIm5hbWVzIjpbIkxpbmsiLCJSZWFjdFJvdXRlckRPTSIsIkNyZWF0ZU5ld0dhbWUiLCJwcm9wcyIsInN0YXRlIiwiZ2FtZU5hbWUiLCJtYXAiLCJ1cGRhdGVOYW1lIiwiYmluZCIsInVwZGF0ZU1hcCIsImNvbnNvbGUiLCJsb2ciLCJlIiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcExpc3QiLCJpIiwic2V0TmFtZUFuZE1hcCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsSUFBTUEsT0FBT0MsZUFBZUQsSUFBNUI7O0lBRU1FLGE7OztBQUNKLHlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsOEhBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxnQkFBVSxFQURDO0FBRVhDLFdBQUs7QUFGTSxLQUFiO0FBSUEsVUFBS0MsVUFBTCxHQUFrQixNQUFLQSxVQUFMLENBQWdCQyxJQUFoQixPQUFsQjtBQUNBLFVBQUtDLFNBQUwsR0FBaUIsTUFBS0EsU0FBTCxDQUFlRCxJQUFmLE9BQWpCO0FBQ0FFLFlBQVFDLEdBQVIsQ0FBWSxhQUFaLEVBQTJCLE1BQUtSLEtBQWhDO0FBUmlCO0FBU2xCOzs7OytCQUVVUyxDLEVBQUc7QUFDWixXQUFLQyxRQUFMLENBQWMsRUFBQ1IsVUFBVU8sRUFBRUUsTUFBRixDQUFTQyxLQUFwQixFQUFkO0FBQ0Q7Ozs4QkFFU0gsQyxFQUFHO0FBQ1gsV0FBS0MsUUFBTCxDQUFjLEVBQUNQLEtBQUtNLEVBQUVFLE1BQUYsQ0FBU0MsS0FBZixFQUFkO0FBQ0Q7Ozs2QkFFUTtBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURGO0FBQUE7QUFFYSx1Q0FBTyxNQUFLLE1BQVosRUFBbUIsT0FBTyxLQUFLWCxLQUFMLENBQVdDLFFBQXJDLEVBQStDLFVBQVUsS0FBS0UsVUFBOUQsR0FGYjtBQUUrRix1Q0FGL0Y7QUFBQTtBQUdjO0FBQUE7QUFBQSxZQUFRLE1BQUssS0FBYixFQUFtQixVQUFVLEtBQUtFLFNBQWxDO0FBQ1Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURVO0FBRVQsZUFBS04sS0FBTCxDQUFXYSxPQUFYLENBQW1CVixHQUFuQixDQUF1QixVQUFDQSxHQUFELEVBQU1XLENBQU47QUFBQSxtQkFBWTtBQUFBO0FBQUEsZ0JBQVEsS0FBS0EsQ0FBYjtBQUFpQlg7QUFBakIsYUFBWjtBQUFBLFdBQXZCO0FBRlMsU0FIZDtBQU1XLHVDQU5YO0FBT0UsdUNBUEY7QUFPTyx1Q0FQUDtBQVFFO0FBQUMsY0FBRDtBQUFBLFlBQU0sSUFBRyxPQUFUO0FBQ0U7QUFBQTtBQUFBLGNBQVEsU0FBUyxLQUFLSCxLQUFMLENBQVdlLGFBQVgsQ0FBeUJWLElBQXpCLENBQThCLElBQTlCLEVBQW9DLEtBQUtKLEtBQUwsQ0FBV0MsUUFBL0MsRUFBeUQsS0FBS0QsS0FBTCxDQUFXRSxHQUFwRSxDQUFqQjtBQUFBO0FBQUE7QUFERjtBQVJGLE9BREY7QUFnQkQ7Ozs7RUFyQ3lCYSxNQUFNQyxTIiwiZmlsZSI6ImNyZWF0ZU5ld0dhbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBMaW5rID0gUmVhY3RSb3V0ZXJET00uTGluaztcclxuXHJcbmNsYXNzIENyZWF0ZU5ld0dhbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBnYW1lTmFtZTogJycsXHJcbiAgICAgIG1hcDogbnVsbFxyXG4gICAgfVxyXG4gICAgdGhpcy51cGRhdGVOYW1lID0gdGhpcy51cGRhdGVOYW1lLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnVwZGF0ZU1hcCA9IHRoaXMudXBkYXRlTWFwLmJpbmQodGhpcyk7XHJcbiAgICBjb25zb2xlLmxvZygndGhpcy5wcm9wczonLCB0aGlzLnByb3BzKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZU5hbWUoZSkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7Z2FtZU5hbWU6IGUudGFyZ2V0LnZhbHVlfSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVNYXAoZSkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7bWFwOiBlLnRhcmdldC52YWx1ZX0pO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDM+Q3JlYXRlIEdhbWU8L2gzPlxyXG4gICAgICAgIEdhbWUgTmFtZTogPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUuZ2FtZU5hbWV9IG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZU5hbWV9PjwvaW5wdXQ+PGJyLz5cclxuICAgICAgICBTZWxlY3QgTWFwOiA8c2VsZWN0IG5hbWU9XCJNYXBcIiBvbkNoYW5nZT17dGhpcy51cGRhdGVNYXB9PlxyXG4gICAgICAgICAgPG9wdGlvbj5zZWxlY3QuLi48L29wdGlvbj5cclxuICAgICAgICAgIHt0aGlzLnByb3BzLm1hcExpc3QubWFwKChtYXAsIGkpID0+IDxvcHRpb24ga2V5PXtpfT57bWFwfTwvb3B0aW9uPil9XHJcbiAgICAgICAgPC9zZWxlY3Q+PGJyLz5cclxuICAgICAgICA8YnIvPjxici8+XHJcbiAgICAgICAgPExpbmsgdG89Jy9nYW1lJz5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5zZXROYW1lQW5kTWFwLmJpbmQobnVsbCwgdGhpcy5zdGF0ZS5nYW1lTmFtZSwgdGhpcy5zdGF0ZS5tYXApfT5cclxuICAgICAgICAgICAgU3RhcnQgR2FtZVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn0iXX0=