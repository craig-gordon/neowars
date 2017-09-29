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

    return _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this, props));
  }

  _createClass(Main, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(
        'main',
        null,
        React.createElement(
          Switch,
          null,
          React.createElement(Route, { exact: true, path: '/', render: function render() {
              return React.createElement(LandingPage, {
                getMapList: _this2.props.getMapList
              });
            } }),
          React.createElement(Route, { path: '/new', render: function render() {
              return React.createElement(CreateNewGame, {
                mapList: _this2.props.mapList,
                startGame: _this2.props.startGame
              });
            } }),
          React.createElement(Route, { path: '/game', render: function render() {
              return React.createElement(CurrentGame, {
                map: _this2.props.map,
                gameName: _this2.props.gameName,
                board: _this2.props.board
              });
            } })
        )
      );
    }
  }]);

  return Main;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL21haW4uanN4Il0sIm5hbWVzIjpbIlN3aXRjaCIsIlJlYWN0Um91dGVyRE9NIiwiUm91dGUiLCJNYWluIiwicHJvcHMiLCJnZXRNYXBMaXN0IiwibWFwTGlzdCIsInN0YXJ0R2FtZSIsIm1hcCIsImdhbWVOYW1lIiwiYm9hcmQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLElBQU1BLFNBQVNDLGVBQWVELE1BQTlCO0FBQ0EsSUFBTUUsUUFBUUQsZUFBZUMsS0FBN0I7O0lBRU1DLEk7OztBQUNKLGdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsdUdBQ1hBLEtBRFc7QUFFbEI7Ozs7NkJBRVE7QUFBQTs7QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUMsZ0JBQUQ7QUFBQTtBQUNFLDhCQUFDLEtBQUQsSUFBTyxXQUFQLEVBQWEsTUFBSyxHQUFsQixFQUFzQixRQUNwQjtBQUFBLHFCQUFNLG9CQUFDLFdBQUQ7QUFDSiw0QkFBWSxPQUFLQSxLQUFMLENBQVdDO0FBRG5CLGdCQUFOO0FBQUEsYUFERixHQURGO0FBTUUsOEJBQUMsS0FBRCxJQUFPLE1BQUssTUFBWixFQUFtQixRQUNqQjtBQUFBLHFCQUFNLG9CQUFDLGFBQUQ7QUFDSix5QkFBUyxPQUFLRCxLQUFMLENBQVdFLE9BRGhCO0FBRUosMkJBQVcsT0FBS0YsS0FBTCxDQUFXRztBQUZsQixnQkFBTjtBQUFBLGFBREYsR0FORjtBQVlFLDhCQUFDLEtBQUQsSUFBTyxNQUFLLE9BQVosRUFBb0IsUUFDbEI7QUFBQSxxQkFBTSxvQkFBQyxXQUFEO0FBQ0oscUJBQUssT0FBS0gsS0FBTCxDQUFXSSxHQURaO0FBRUosMEJBQVUsT0FBS0osS0FBTCxDQUFXSyxRQUZqQjtBQUdKLHVCQUFPLE9BQUtMLEtBQUwsQ0FBV007QUFIZCxnQkFBTjtBQUFBLGFBREY7QUFaRjtBQURGLE9BREY7QUF3QkQ7Ozs7RUE5QmdCQyxNQUFNQyxTIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBTd2l0Y2ggPSBSZWFjdFJvdXRlckRPTS5Td2l0Y2g7XHJcbmNvbnN0IFJvdXRlID0gUmVhY3RSb3V0ZXJET00uUm91dGU7XHJcblxyXG5jbGFzcyBNYWluIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPG1haW4+XHJcbiAgICAgICAgPFN3aXRjaD5cclxuICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPScvJyByZW5kZXI9e1xyXG4gICAgICAgICAgICAoKSA9PiA8TGFuZGluZ1BhZ2VcclxuICAgICAgICAgICAgICBnZXRNYXBMaXN0PXt0aGlzLnByb3BzLmdldE1hcExpc3R9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICB9Lz5cclxuICAgICAgICAgIDxSb3V0ZSBwYXRoPScvbmV3JyByZW5kZXI9e1xyXG4gICAgICAgICAgICAoKSA9PiA8Q3JlYXRlTmV3R2FtZVxyXG4gICAgICAgICAgICAgIG1hcExpc3Q9e3RoaXMucHJvcHMubWFwTGlzdH1cclxuICAgICAgICAgICAgICBzdGFydEdhbWU9e3RoaXMucHJvcHMuc3RhcnRHYW1lfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgfS8+XHJcbiAgICAgICAgICA8Um91dGUgcGF0aD0nL2dhbWUnIHJlbmRlcj17XHJcbiAgICAgICAgICAgICgpID0+IDxDdXJyZW50R2FtZVxyXG4gICAgICAgICAgICAgIG1hcD17dGhpcy5wcm9wcy5tYXB9XHJcbiAgICAgICAgICAgICAgZ2FtZU5hbWU9e3RoaXMucHJvcHMuZ2FtZU5hbWV9XHJcbiAgICAgICAgICAgICAgYm9hcmQ9e3RoaXMucHJvcHMuYm9hcmR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICB9Lz5cclxuICAgICAgICA8L1N3aXRjaD5cclxuICAgICAgPC9tYWluPlxyXG4gICAgKVxyXG4gIH1cclxufSJdfQ==