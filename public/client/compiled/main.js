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
                setNameAndMap: _this2.props.setNameAndMap
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL21haW4uanN4Il0sIm5hbWVzIjpbIlN3aXRjaCIsIlJlYWN0Um91dGVyRE9NIiwiUm91dGUiLCJNYWluIiwicHJvcHMiLCJnZXRNYXBMaXN0IiwibWFwTGlzdCIsInNldE5hbWVBbmRNYXAiLCJtYXAiLCJnYW1lTmFtZSIsImJvYXJkIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxTQUFTQyxlQUFlRCxNQUE5QjtBQUNBLElBQU1FLFFBQVFELGVBQWVDLEtBQTdCOztJQUVNQyxJOzs7QUFDSixnQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLHVHQUNYQSxLQURXO0FBRWxCOzs7OzZCQUVRO0FBQUE7O0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFDLGdCQUFEO0FBQUE7QUFDRSw4QkFBQyxLQUFELElBQU8sV0FBUCxFQUFhLE1BQUssR0FBbEIsRUFBc0IsUUFDcEI7QUFBQSxxQkFBTSxvQkFBQyxXQUFEO0FBQ0osNEJBQVksT0FBS0EsS0FBTCxDQUFXQztBQURuQixnQkFBTjtBQUFBLGFBREYsR0FERjtBQU1FLDhCQUFDLEtBQUQsSUFBTyxNQUFLLE1BQVosRUFBbUIsUUFDakI7QUFBQSxxQkFBTSxvQkFBQyxhQUFEO0FBQ0oseUJBQVMsT0FBS0QsS0FBTCxDQUFXRSxPQURoQjtBQUVKLCtCQUFlLE9BQUtGLEtBQUwsQ0FBV0c7QUFGdEIsZ0JBQU47QUFBQSxhQURGLEdBTkY7QUFZRSw4QkFBQyxLQUFELElBQU8sTUFBSyxPQUFaLEVBQW9CLFFBQ2xCO0FBQUEscUJBQU0sb0JBQUMsV0FBRDtBQUNKLHFCQUFLLE9BQUtILEtBQUwsQ0FBV0ksR0FEWjtBQUVKLDBCQUFVLE9BQUtKLEtBQUwsQ0FBV0ssUUFGakI7QUFHSix1QkFBTyxPQUFLTCxLQUFMLENBQVdNO0FBSGQsZ0JBQU47QUFBQSxhQURGO0FBWkY7QUFERixPQURGO0FBd0JEOzs7O0VBOUJnQkMsTUFBTUMsUyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgU3dpdGNoID0gUmVhY3RSb3V0ZXJET00uU3dpdGNoO1xyXG5jb25zdCBSb3V0ZSA9IFJlYWN0Um91dGVyRE9NLlJvdXRlO1xyXG5cclxuY2xhc3MgTWFpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxtYWluPlxyXG4gICAgICAgIDxTd2l0Y2g+XHJcbiAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD0nLycgcmVuZGVyPXtcclxuICAgICAgICAgICAgKCkgPT4gPExhbmRpbmdQYWdlXHJcbiAgICAgICAgICAgICAgZ2V0TWFwTGlzdD17dGhpcy5wcm9wcy5nZXRNYXBMaXN0fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgfS8+XHJcbiAgICAgICAgICA8Um91dGUgcGF0aD0nL25ldycgcmVuZGVyPXtcclxuICAgICAgICAgICAgKCkgPT4gPENyZWF0ZU5ld0dhbWVcclxuICAgICAgICAgICAgICBtYXBMaXN0PXt0aGlzLnByb3BzLm1hcExpc3R9XHJcbiAgICAgICAgICAgICAgc2V0TmFtZUFuZE1hcD17dGhpcy5wcm9wcy5zZXROYW1lQW5kTWFwfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgfS8+XHJcbiAgICAgICAgICA8Um91dGUgcGF0aD0nL2dhbWUnIHJlbmRlcj17XHJcbiAgICAgICAgICAgICgpID0+IDxDdXJyZW50R2FtZVxyXG4gICAgICAgICAgICAgIG1hcD17dGhpcy5wcm9wcy5tYXB9XHJcbiAgICAgICAgICAgICAgZ2FtZU5hbWU9e3RoaXMucHJvcHMuZ2FtZU5hbWV9XHJcbiAgICAgICAgICAgICAgYm9hcmQ9e3RoaXMucHJvcHMuYm9hcmR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICB9Lz5cclxuICAgICAgICA8L1N3aXRjaD5cclxuICAgICAgPC9tYWluPlxyXG4gICAgKVxyXG4gIH1cclxufSJdfQ==