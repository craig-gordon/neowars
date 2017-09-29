'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      mapList: [],
      gameName: null,
      map: null,
      board: []
    };
    _this.getMapList = _this.getMapList.bind(_this);
    _this.setNameAndMap = _this.setNameAndMap.bind(_this);
    _this.assembleBoard = _this.assembleBoard.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'getMapList',
    value: function getMapList() {
      var _this2 = this;

      axios.get('http://localhost:8000/maps').then(function (res) {
        var mapList = res.data.map(function (map) {
          return map.name;
        });
        console.log('mapList:', mapList);
        _this2.setState({ mapList: mapList });
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
        _this3.setState({
          board: board,
          gameName: gameName,
          map: map
        });
      });
    }
  }, {
    key: 'assembleBoard',
    value: function assembleBoard(dbArray) {
      return dbArray.reduce(function (matrix, space) {
        if (space.col_no === 0) {
          matrix[space.row_no] = [space.terrain];
        } else {
          matrix[space.row_no].push(space.terrain);
        }
        return matrix;
      }, []);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(Banner, null),
        React.createElement(Main, {
          mapList: this.state.mapList,
          gameName: this.state.gameName,
          map: this.state.map,
          board: this.state.board,
          getMapList: this.getMapList,
          setNameAndMap: this.setNameAndMap
        })
      );
    }
  }]);

  return App;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsIm1hcExpc3QiLCJnYW1lTmFtZSIsIm1hcCIsImJvYXJkIiwiZ2V0TWFwTGlzdCIsImJpbmQiLCJzZXROYW1lQW5kTWFwIiwiYXNzZW1ibGVCb2FyZCIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlcyIsImRhdGEiLCJuYW1lIiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwiY2F0Y2giLCJlcnIiLCJwb3N0IiwiZGJBcnJheSIsInJlZHVjZSIsIm1hdHJpeCIsInNwYWNlIiwiY29sX25vIiwicm93X25vIiwidGVycmFpbiIsInB1c2giLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxlQUFTLEVBREU7QUFFWEMsZ0JBQVUsSUFGQztBQUdYQyxXQUFLLElBSE07QUFJWEMsYUFBTztBQUpJLEtBQWI7QUFNQSxVQUFLQyxVQUFMLEdBQWtCLE1BQUtBLFVBQUwsQ0FBZ0JDLElBQWhCLE9BQWxCO0FBQ0EsVUFBS0MsYUFBTCxHQUFxQixNQUFLQSxhQUFMLENBQW1CRCxJQUFuQixPQUFyQjtBQUNBLFVBQUtFLGFBQUwsR0FBcUIsTUFBS0EsYUFBTCxDQUFtQkYsSUFBbkIsT0FBckI7QUFWaUI7QUFXbEI7Ozs7aUNBRVk7QUFBQTs7QUFDWEcsWUFBTUMsR0FBTixDQUFVLDRCQUFWLEVBQ0dDLElBREgsQ0FDUSxlQUFPO0FBQ1gsWUFBSVYsVUFBVVcsSUFBSUMsSUFBSixDQUFTVixHQUFULENBQWE7QUFBQSxpQkFBT0EsSUFBSVcsSUFBWDtBQUFBLFNBQWIsQ0FBZDtBQUNBQyxnQkFBUUMsR0FBUixDQUFZLFVBQVosRUFBd0JmLE9BQXhCO0FBQ0EsZUFBS2dCLFFBQUwsQ0FBYyxFQUFDaEIsZ0JBQUQsRUFBZDtBQUNELE9BTEgsRUFNR2lCLEtBTkgsQ0FNUyxlQUFPO0FBQ1pILGdCQUFRQyxHQUFSLENBQVksZUFBWixFQUE2QkcsR0FBN0I7QUFDRCxPQVJIO0FBU0Q7OztrQ0FFYWpCLFEsRUFBVUMsRyxFQUFLO0FBQUE7O0FBQzNCTSxZQUFNVyxJQUFOLENBQVcsNkJBQVgsRUFBMEMsRUFBQ2pCLFFBQUQsRUFBMUMsRUFDR1EsSUFESCxDQUNRLGVBQU87QUFDWCxZQUFJUCxRQUFRLE9BQUtJLGFBQUwsQ0FBbUJJLElBQUlDLElBQXZCLENBQVo7QUFDQSxlQUFLSSxRQUFMLENBQWM7QUFDWmIsc0JBRFk7QUFFWkYsNEJBRlk7QUFHWkM7QUFIWSxTQUFkO0FBS0QsT0FSSDtBQVNEOzs7a0NBRWFrQixPLEVBQVM7QUFDckIsYUFBT0EsUUFBUUMsTUFBUixDQUFlLFVBQUNDLE1BQUQsRUFBU0MsS0FBVCxFQUFtQjtBQUN2QyxZQUFJQSxNQUFNQyxNQUFOLEtBQWlCLENBQXJCLEVBQXdCO0FBQ3RCRixpQkFBT0MsTUFBTUUsTUFBYixJQUF1QixDQUFDRixNQUFNRyxPQUFQLENBQXZCO0FBQ0QsU0FGRCxNQUVPO0FBQ0xKLGlCQUFPQyxNQUFNRSxNQUFiLEVBQXFCRSxJQUFyQixDQUEwQkosTUFBTUcsT0FBaEM7QUFDRDtBQUNELGVBQU9KLE1BQVA7QUFDRCxPQVBNLEVBT0osRUFQSSxDQUFQO0FBUUQ7Ozs2QkFFUTtBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0UsNEJBQUMsTUFBRCxPQURGO0FBRUUsNEJBQUMsSUFBRDtBQUNFLG1CQUFTLEtBQUt2QixLQUFMLENBQVdDLE9BRHRCO0FBRUUsb0JBQVUsS0FBS0QsS0FBTCxDQUFXRSxRQUZ2QjtBQUdFLGVBQUssS0FBS0YsS0FBTCxDQUFXRyxHQUhsQjtBQUlFLGlCQUFPLEtBQUtILEtBQUwsQ0FBV0ksS0FKcEI7QUFLRSxzQkFBWSxLQUFLQyxVQUxuQjtBQU1FLHlCQUFlLEtBQUtFO0FBTnRCO0FBRkYsT0FERjtBQWFEOzs7O0VBL0Rlc0IsTUFBTUMsUyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBtYXBMaXN0OiBbXSxcclxuICAgICAgZ2FtZU5hbWU6IG51bGwsXHJcbiAgICAgIG1hcDogbnVsbCxcclxuICAgICAgYm9hcmQ6IFtdXHJcbiAgICB9O1xyXG4gICAgdGhpcy5nZXRNYXBMaXN0ID0gdGhpcy5nZXRNYXBMaXN0LmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnNldE5hbWVBbmRNYXAgPSB0aGlzLnNldE5hbWVBbmRNYXAuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuYXNzZW1ibGVCb2FyZCA9IHRoaXMuYXNzZW1ibGVCb2FyZC5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgZ2V0TWFwTGlzdCgpIHtcclxuICAgIGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL21hcHMnKVxyXG4gICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIGxldCBtYXBMaXN0ID0gcmVzLmRhdGEubWFwKG1hcCA9PiBtYXAubmFtZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ21hcExpc3Q6JywgbWFwTGlzdCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWFwTGlzdH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnU2VydmVyIGVycm9yOicsIGVycik7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0TmFtZUFuZE1hcChnYW1lTmFtZSwgbWFwKSB7XHJcbiAgICBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjgwMDAvYm9hcmQnLCB7bWFwfSlcclxuICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBsZXQgYm9hcmQgPSB0aGlzLmFzc2VtYmxlQm9hcmQocmVzLmRhdGEpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgYm9hcmQsXHJcbiAgICAgICAgICBnYW1lTmFtZSxcclxuICAgICAgICAgIG1hcFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIGFzc2VtYmxlQm9hcmQoZGJBcnJheSkge1xyXG4gICAgcmV0dXJuIGRiQXJyYXkucmVkdWNlKChtYXRyaXgsIHNwYWNlKSA9PiB7XHJcbiAgICAgIGlmIChzcGFjZS5jb2xfbm8gPT09IDApIHtcclxuICAgICAgICBtYXRyaXhbc3BhY2Uucm93X25vXSA9IFtzcGFjZS50ZXJyYWluXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtYXRyaXhbc3BhY2Uucm93X25vXS5wdXNoKHNwYWNlLnRlcnJhaW4pO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBtYXRyaXg7XHJcbiAgICB9LCBbXSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxCYW5uZXIgLz5cclxuICAgICAgICA8TWFpbiBcclxuICAgICAgICAgIG1hcExpc3Q9e3RoaXMuc3RhdGUubWFwTGlzdH1cclxuICAgICAgICAgIGdhbWVOYW1lPXt0aGlzLnN0YXRlLmdhbWVOYW1lfVxyXG4gICAgICAgICAgbWFwPXt0aGlzLnN0YXRlLm1hcH1cclxuICAgICAgICAgIGJvYXJkPXt0aGlzLnN0YXRlLmJvYXJkfVxyXG4gICAgICAgICAgZ2V0TWFwTGlzdD17dGhpcy5nZXRNYXBMaXN0fVxyXG4gICAgICAgICAgc2V0TmFtZUFuZE1hcD17dGhpcy5zZXROYW1lQW5kTWFwfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufSJdfQ==