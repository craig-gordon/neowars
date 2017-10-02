'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Switch = ReactRouterDOM.Switch;
var Route = ReactRouterDOM.Route;

var Main = function (_React$Component) {
  _inherits(Main, _React$Component);

  function Main(props) {
    _classCallCheck(this, Main);

    var _this = _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this, props));

    _this.getMapList = _this.getMapList.bind(_this);
    _this.setNameAndMap = _this.setNameAndMap.bind(_this);
    _this.assembleBoard = _this.assembleBoard.bind(_this);
    return _this;
  }

  _createClass(Main, [{
    key: 'getMapList',
    value: function getMapList() {
      var _this2 = this;

      axios.get('http://localhost:8000/maps').then(function (res) {
        var mapList = res.data.map(function (map) {
          return map.name;
        });
        _this2.props.populateMapList(mapList);
      }).catch(function (err) {
        console.log('Server error:', err);
      });
    }
  }, {
    key: 'setNameAndMap',
    value: function setNameAndMap(gameName, map) {
      var _this3 = this;

      axios.post('http://localhost:8000/board', { map: map }).then(function (res) {
        var board = _this3.assembleBoard(res.data);
        _this3.props.setGameName(gameName);
        _this3.props.setMap(map);
        _this3.props.setBoard(board);
      });
    }
  }, {
    key: 'assembleBoard',
    value: function assembleBoard(dbArray) {
      return dbArray.reduce(function (matrix, space) {
        if (space.col_no === 0) {
          matrix[space.row_no] = [new setTerrain[space.terrain](space.row_no, space.col_no, space.country)];
        } else {
          matrix[space.row_no].push(new setTerrain[space.terrain](space.row_no, space.col_no, space.country));
        }
        return matrix;
      }, []);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      return React.createElement(
        'div',
        null,
        React.createElement(Banner, null),
        React.createElement(
          Switch,
          null,
          React.createElement(Route, { exact: true, path: '/', render: function render() {
              return React.createElement(LandingPage, {
                getMapList: _this4.getMapList
              });
            } }),
          React.createElement(Route, { path: '/new', render: function render() {
              return React.createElement(CreateNewGame, {
                mapList: _this4.props.mapList,
                setNameAndMap: _this4.setNameAndMap
              });
            } }),
          React.createElement(Route, { path: '/game', component: GameContainer })
        )
      );
    }
  }]);

  return Main;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL21haW4uanN4Il0sIm5hbWVzIjpbIlN3aXRjaCIsIlJlYWN0Um91dGVyRE9NIiwiUm91dGUiLCJNYWluIiwicHJvcHMiLCJnZXRNYXBMaXN0IiwiYmluZCIsInNldE5hbWVBbmRNYXAiLCJhc3NlbWJsZUJvYXJkIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwibWFwTGlzdCIsInJlcyIsImRhdGEiLCJtYXAiLCJuYW1lIiwicG9wdWxhdGVNYXBMaXN0IiwiY2F0Y2giLCJjb25zb2xlIiwibG9nIiwiZXJyIiwiZ2FtZU5hbWUiLCJwb3N0IiwiYm9hcmQiLCJzZXRHYW1lTmFtZSIsInNldE1hcCIsInNldEJvYXJkIiwiZGJBcnJheSIsInJlZHVjZSIsIm1hdHJpeCIsInNwYWNlIiwiY29sX25vIiwicm93X25vIiwic2V0VGVycmFpbiIsInRlcnJhaW4iLCJjb3VudHJ5IiwicHVzaCIsIkdhbWVDb250YWluZXIiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLElBQU1BLFNBQVNDLGVBQWVELE1BQTlCO0FBQ0EsSUFBTUUsUUFBUUQsZUFBZUMsS0FBN0I7O0lBRU1DLEk7OztBQUNKLGdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLFVBQUwsR0FBa0IsTUFBS0EsVUFBTCxDQUFnQkMsSUFBaEIsT0FBbEI7QUFDQSxVQUFLQyxhQUFMLEdBQXFCLE1BQUtBLGFBQUwsQ0FBbUJELElBQW5CLE9BQXJCO0FBQ0EsVUFBS0UsYUFBTCxHQUFxQixNQUFLQSxhQUFMLENBQW1CRixJQUFuQixPQUFyQjtBQUppQjtBQUtsQjs7OztpQ0FFWTtBQUFBOztBQUNYRyxZQUFNQyxHQUFOLENBQVUsNEJBQVYsRUFDR0MsSUFESCxDQUNRLGVBQU87QUFDWCxZQUFJQyxVQUFVQyxJQUFJQyxJQUFKLENBQVNDLEdBQVQsQ0FBYTtBQUFBLGlCQUFPQSxJQUFJQyxJQUFYO0FBQUEsU0FBYixDQUFkO0FBQ0EsZUFBS1osS0FBTCxDQUFXYSxlQUFYLENBQTJCTCxPQUEzQjtBQUNELE9BSkgsRUFLR00sS0FMSCxDQUtTLGVBQU87QUFDWkMsZ0JBQVFDLEdBQVIsQ0FBWSxlQUFaLEVBQTZCQyxHQUE3QjtBQUNELE9BUEg7QUFRRDs7O2tDQUVhQyxRLEVBQVVQLEcsRUFBSztBQUFBOztBQUMzQk4sWUFBTWMsSUFBTixDQUFXLDZCQUFYLEVBQTBDLEVBQUNSLFFBQUQsRUFBMUMsRUFDR0osSUFESCxDQUNRLGVBQU87QUFDWCxZQUFJYSxRQUFRLE9BQUtoQixhQUFMLENBQW1CSyxJQUFJQyxJQUF2QixDQUFaO0FBQ0EsZUFBS1YsS0FBTCxDQUFXcUIsV0FBWCxDQUF1QkgsUUFBdkI7QUFDQSxlQUFLbEIsS0FBTCxDQUFXc0IsTUFBWCxDQUFrQlgsR0FBbEI7QUFDQSxlQUFLWCxLQUFMLENBQVd1QixRQUFYLENBQW9CSCxLQUFwQjtBQUNELE9BTkg7QUFPRDs7O2tDQUVhSSxPLEVBQVM7QUFDckIsYUFBT0EsUUFBUUMsTUFBUixDQUFlLFVBQUNDLE1BQUQsRUFBU0MsS0FBVCxFQUFtQjtBQUN2QyxZQUFJQSxNQUFNQyxNQUFOLEtBQWlCLENBQXJCLEVBQXdCO0FBQ3RCRixpQkFBT0MsTUFBTUUsTUFBYixJQUF1QixDQUFDLElBQUlDLFdBQVdILE1BQU1JLE9BQWpCLENBQUosQ0FBOEJKLE1BQU1FLE1BQXBDLEVBQTRDRixNQUFNQyxNQUFsRCxFQUEwREQsTUFBTUssT0FBaEUsQ0FBRCxDQUF2QjtBQUNELFNBRkQsTUFFTztBQUNMTixpQkFBT0MsTUFBTUUsTUFBYixFQUFxQkksSUFBckIsQ0FBMEIsSUFBSUgsV0FBV0gsTUFBTUksT0FBakIsQ0FBSixDQUE4QkosTUFBTUUsTUFBcEMsRUFBNENGLE1BQU1DLE1BQWxELEVBQTBERCxNQUFNSyxPQUFoRSxDQUExQjtBQUNEO0FBQ0QsZUFBT04sTUFBUDtBQUNELE9BUE0sRUFPSixFQVBJLENBQVA7QUFRRDs7OzZCQUVRO0FBQUE7O0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRSw0QkFBQyxNQUFELE9BREY7QUFFRTtBQUFDLGdCQUFEO0FBQUE7QUFDRSw4QkFBQyxLQUFELElBQU8sV0FBUCxFQUFhLE1BQUssR0FBbEIsRUFBc0IsUUFDcEI7QUFBQSxxQkFBTSxvQkFBQyxXQUFEO0FBQ0osNEJBQVksT0FBS3pCO0FBRGIsZ0JBQU47QUFBQSxhQURGLEdBREY7QUFNRSw4QkFBQyxLQUFELElBQU8sTUFBSyxNQUFaLEVBQW1CLFFBQ2pCO0FBQUEscUJBQU0sb0JBQUMsYUFBRDtBQUNKLHlCQUFTLE9BQUtELEtBQUwsQ0FBV1EsT0FEaEI7QUFFSiwrQkFBZSxPQUFLTDtBQUZoQixnQkFBTjtBQUFBLGFBREYsR0FORjtBQVlFLDhCQUFDLEtBQUQsSUFBTyxNQUFLLE9BQVosRUFBb0IsV0FBVytCLGFBQS9CO0FBWkY7QUFGRixPQURGO0FBbUJEOzs7O0VBNURnQkMsTUFBTUMsUyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgU3dpdGNoID0gUmVhY3RSb3V0ZXJET00uU3dpdGNoO1xyXG5jb25zdCBSb3V0ZSA9IFJlYWN0Um91dGVyRE9NLlJvdXRlO1xyXG5cclxuY2xhc3MgTWFpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuZ2V0TWFwTGlzdCA9IHRoaXMuZ2V0TWFwTGlzdC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5zZXROYW1lQW5kTWFwID0gdGhpcy5zZXROYW1lQW5kTWFwLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmFzc2VtYmxlQm9hcmQgPSB0aGlzLmFzc2VtYmxlQm9hcmQuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIGdldE1hcExpc3QoKSB7XHJcbiAgICBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9tYXBzJylcclxuICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBsZXQgbWFwTGlzdCA9IHJlcy5kYXRhLm1hcChtYXAgPT4gbWFwLm5hbWUpO1xyXG4gICAgICAgIHRoaXMucHJvcHMucG9wdWxhdGVNYXBMaXN0KG1hcExpc3QpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnU2VydmVyIGVycm9yOicsIGVycik7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0TmFtZUFuZE1hcChnYW1lTmFtZSwgbWFwKSB7XHJcbiAgICBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjgwMDAvYm9hcmQnLCB7bWFwfSlcclxuICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBsZXQgYm9hcmQgPSB0aGlzLmFzc2VtYmxlQm9hcmQocmVzLmRhdGEpO1xyXG4gICAgICAgIHRoaXMucHJvcHMuc2V0R2FtZU5hbWUoZ2FtZU5hbWUpO1xyXG4gICAgICAgIHRoaXMucHJvcHMuc2V0TWFwKG1hcCk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5zZXRCb2FyZChib2FyZCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYXNzZW1ibGVCb2FyZChkYkFycmF5KSB7XHJcbiAgICByZXR1cm4gZGJBcnJheS5yZWR1Y2UoKG1hdHJpeCwgc3BhY2UpID0+IHtcclxuICAgICAgaWYgKHNwYWNlLmNvbF9ubyA9PT0gMCkge1xyXG4gICAgICAgIG1hdHJpeFtzcGFjZS5yb3dfbm9dID0gW25ldyBzZXRUZXJyYWluW3NwYWNlLnRlcnJhaW5dKHNwYWNlLnJvd19ubywgc3BhY2UuY29sX25vLCBzcGFjZS5jb3VudHJ5KV07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWF0cml4W3NwYWNlLnJvd19ub10ucHVzaChuZXcgc2V0VGVycmFpbltzcGFjZS50ZXJyYWluXShzcGFjZS5yb3dfbm8sIHNwYWNlLmNvbF9ubywgc3BhY2UuY291bnRyeSkpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBtYXRyaXg7XHJcbiAgICB9LCBbXSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxCYW5uZXIgLz5cclxuICAgICAgICA8U3dpdGNoPlxyXG4gICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9Jy8nIHJlbmRlcj17XHJcbiAgICAgICAgICAgICgpID0+IDxMYW5kaW5nUGFnZVxyXG4gICAgICAgICAgICAgIGdldE1hcExpc3Q9e3RoaXMuZ2V0TWFwTGlzdH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIH0vPlxyXG4gICAgICAgICAgPFJvdXRlIHBhdGg9Jy9uZXcnIHJlbmRlcj17XHJcbiAgICAgICAgICAgICgpID0+IDxDcmVhdGVOZXdHYW1lXHJcbiAgICAgICAgICAgICAgbWFwTGlzdD17dGhpcy5wcm9wcy5tYXBMaXN0fVxyXG4gICAgICAgICAgICAgIHNldE5hbWVBbmRNYXA9e3RoaXMuc2V0TmFtZUFuZE1hcH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIH0vPlxyXG4gICAgICAgICAgPFJvdXRlIHBhdGg9Jy9nYW1lJyBjb21wb25lbnQ9e0dhbWVDb250YWluZXJ9Lz5cclxuICAgICAgICA8L1N3aXRjaD5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59Il19