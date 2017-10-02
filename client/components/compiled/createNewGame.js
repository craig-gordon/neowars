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
          'h2',
          null,
          'Create Game'
        ),
        React.createElement(
          'div',
          { className: 'gameName' },
          'Game Name: ',
          React.createElement('input', { type: 'text', value: this.state.gameName, onChange: this.updateName })
        ),
        React.createElement(
          'div',
          { className: 'map' },
          'Select Map: ',
          React.createElement(
            'select',
            { name: 'map', onChange: this.updateMap },
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
          )
        ),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NyZWF0ZU5ld0dhbWUuanN4Il0sIm5hbWVzIjpbIkxpbmsiLCJSZWFjdFJvdXRlckRPTSIsIkNyZWF0ZU5ld0dhbWUiLCJwcm9wcyIsInN0YXRlIiwiZ2FtZU5hbWUiLCJtYXAiLCJ1cGRhdGVOYW1lIiwiYmluZCIsInVwZGF0ZU1hcCIsImUiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwibWFwTGlzdCIsImkiLCJzZXROYW1lQW5kTWFwIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxPQUFPQyxlQUFlRCxJQUE1Qjs7SUFFTUUsYTs7O0FBQ0oseUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw4SEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGdCQUFVLEVBREM7QUFFWEMsV0FBSztBQUZNLEtBQWI7QUFJQSxVQUFLQyxVQUFMLEdBQWtCLE1BQUtBLFVBQUwsQ0FBZ0JDLElBQWhCLE9BQWxCO0FBQ0EsVUFBS0MsU0FBTCxHQUFpQixNQUFLQSxTQUFMLENBQWVELElBQWYsT0FBakI7QUFQaUI7QUFRbEI7Ozs7K0JBRVVFLEMsRUFBRztBQUNaLFdBQUtDLFFBQUwsQ0FBYyxFQUFDTixVQUFVSyxFQUFFRSxNQUFGLENBQVNDLEtBQXBCLEVBQWQ7QUFDRDs7OzhCQUVTSCxDLEVBQUc7QUFDWCxXQUFLQyxRQUFMLENBQWMsRUFBQ0wsS0FBS0ksRUFBRUUsTUFBRixDQUFTQyxLQUFmLEVBQWQ7QUFDRDs7OzZCQUVRO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFFRTtBQUFBO0FBQUEsWUFBSyxXQUFVLFVBQWY7QUFBQTtBQUFxQyx5Q0FBTyxNQUFLLE1BQVosRUFBbUIsT0FBTyxLQUFLVCxLQUFMLENBQVdDLFFBQXJDLEVBQStDLFVBQVUsS0FBS0UsVUFBOUQ7QUFBckMsU0FGRjtBQUdFO0FBQUE7QUFBQSxZQUFLLFdBQVUsS0FBZjtBQUFBO0FBQWlDO0FBQUE7QUFBQSxjQUFRLE1BQUssS0FBYixFQUFtQixVQUFVLEtBQUtFLFNBQWxDO0FBQy9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEK0I7QUFFOUIsaUJBQUtOLEtBQUwsQ0FBV1csT0FBWCxDQUFtQlIsR0FBbkIsQ0FBdUIsVUFBQ0EsR0FBRCxFQUFNUyxDQUFOO0FBQUEscUJBQVk7QUFBQTtBQUFBLGtCQUFRLEtBQUtBLENBQWI7QUFBaUJUO0FBQWpCLGVBQVo7QUFBQSxhQUF2QjtBQUY4QjtBQUFqQyxTQUhGO0FBT0UsdUNBUEY7QUFPTyx1Q0FQUDtBQVFFO0FBQUMsY0FBRDtBQUFBLFlBQU0sSUFBRyxPQUFUO0FBQ0U7QUFBQTtBQUFBLGNBQVEsU0FBUyxLQUFLSCxLQUFMLENBQVdhLGFBQVgsQ0FBeUJSLElBQXpCLENBQThCLElBQTlCLEVBQW9DLEtBQUtKLEtBQUwsQ0FBV0MsUUFBL0MsRUFBeUQsS0FBS0QsS0FBTCxDQUFXRSxHQUFwRSxDQUFqQjtBQUFBO0FBQUE7QUFERjtBQVJGLE9BREY7QUFnQkQ7Ozs7RUFwQ3lCVyxNQUFNQyxTIiwiZmlsZSI6ImNyZWF0ZU5ld0dhbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBMaW5rID0gUmVhY3RSb3V0ZXJET00uTGluaztcclxuXHJcbmNsYXNzIENyZWF0ZU5ld0dhbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBnYW1lTmFtZTogJycsXHJcbiAgICAgIG1hcDogbnVsbFxyXG4gICAgfVxyXG4gICAgdGhpcy51cGRhdGVOYW1lID0gdGhpcy51cGRhdGVOYW1lLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnVwZGF0ZU1hcCA9IHRoaXMudXBkYXRlTWFwLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVOYW1lKGUpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe2dhbWVOYW1lOiBlLnRhcmdldC52YWx1ZX0pO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlTWFwKGUpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe21hcDogZS50YXJnZXQudmFsdWV9KTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGgyPkNyZWF0ZSBHYW1lPC9oMj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ2FtZU5hbWUnPkdhbWUgTmFtZTogPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUuZ2FtZU5hbWV9IG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZU5hbWV9PjwvaW5wdXQ+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21hcCc+U2VsZWN0IE1hcDogPHNlbGVjdCBuYW1lPVwibWFwXCIgb25DaGFuZ2U9e3RoaXMudXBkYXRlTWFwfT5cclxuICAgICAgICAgIDxvcHRpb24+c2VsZWN0Li4uPC9vcHRpb24+XHJcbiAgICAgICAgICB7dGhpcy5wcm9wcy5tYXBMaXN0Lm1hcCgobWFwLCBpKSA9PiA8b3B0aW9uIGtleT17aX0+e21hcH08L29wdGlvbj4pfVxyXG4gICAgICAgIDwvc2VsZWN0PjwvZGl2PlxyXG4gICAgICAgIDxici8+PGJyLz5cclxuICAgICAgICA8TGluayB0bz0nL2dhbWUnPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnByb3BzLnNldE5hbWVBbmRNYXAuYmluZChudWxsLCB0aGlzLnN0YXRlLmdhbWVOYW1lLCB0aGlzLnN0YXRlLm1hcCl9PlxyXG4gICAgICAgICAgICBTdGFydCBHYW1lXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufSJdfQ==