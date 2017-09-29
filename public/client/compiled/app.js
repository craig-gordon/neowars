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
      board: null,
      gameName: null,
      map: null
    };
    _this.getMapList = _this.getMapList.bind(_this);
    _this.startGame = _this.startGame.bind(_this);
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
    key: 'startGame',
    value: function startGame(gameName, map) {
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
          startGame: this.startGame
        })
      );
    }
  }]);

  return App;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsIm1hcExpc3QiLCJib2FyZCIsImdhbWVOYW1lIiwibWFwIiwiZ2V0TWFwTGlzdCIsImJpbmQiLCJzdGFydEdhbWUiLCJhc3NlbWJsZUJvYXJkIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzIiwiZGF0YSIsIm5hbWUiLCJjb25zb2xlIiwibG9nIiwic2V0U3RhdGUiLCJjYXRjaCIsImVyciIsInBvc3QiLCJkYkFycmF5IiwicmVkdWNlIiwibWF0cml4Iiwic3BhY2UiLCJjb2xfbm8iLCJyb3dfbm8iLCJ0ZXJyYWluIiwicHVzaCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGVBQVMsRUFERTtBQUVYQyxhQUFPLElBRkk7QUFHWEMsZ0JBQVUsSUFIQztBQUlYQyxXQUFLO0FBSk0sS0FBYjtBQU1BLFVBQUtDLFVBQUwsR0FBa0IsTUFBS0EsVUFBTCxDQUFnQkMsSUFBaEIsT0FBbEI7QUFDQSxVQUFLQyxTQUFMLEdBQWlCLE1BQUtBLFNBQUwsQ0FBZUQsSUFBZixPQUFqQjtBQUNBLFVBQUtFLGFBQUwsR0FBcUIsTUFBS0EsYUFBTCxDQUFtQkYsSUFBbkIsT0FBckI7QUFWaUI7QUFXbEI7Ozs7aUNBRVk7QUFBQTs7QUFDWEcsWUFBTUMsR0FBTixDQUFVLDRCQUFWLEVBQ0dDLElBREgsQ0FDUSxlQUFPO0FBQ1gsWUFBSVYsVUFBVVcsSUFBSUMsSUFBSixDQUFTVCxHQUFULENBQWE7QUFBQSxpQkFBT0EsSUFBSVUsSUFBWDtBQUFBLFNBQWIsQ0FBZDtBQUNBQyxnQkFBUUMsR0FBUixDQUFZLFVBQVosRUFBd0JmLE9BQXhCO0FBQ0EsZUFBS2dCLFFBQUwsQ0FBYyxFQUFDaEIsZ0JBQUQsRUFBZDtBQUNELE9BTEgsRUFNR2lCLEtBTkgsQ0FNUyxlQUFPO0FBQ1pILGdCQUFRQyxHQUFSLENBQVksZUFBWixFQUE2QkcsR0FBN0I7QUFDRCxPQVJIO0FBU0Q7Ozs4QkFFU2hCLFEsRUFBVUMsRyxFQUFLO0FBQUE7O0FBQ3ZCSyxZQUFNVyxJQUFOLENBQVcsNkJBQVgsRUFBMEMsRUFBQ2hCLFFBQUQsRUFBMUMsRUFDR08sSUFESCxDQUNRLGVBQU87QUFDWCxZQUFJVCxRQUFRLE9BQUtNLGFBQUwsQ0FBbUJJLElBQUlDLElBQXZCLENBQVo7QUFDQSxlQUFLSSxRQUFMLENBQWM7QUFDWmYsc0JBRFk7QUFFWkMsNEJBRlk7QUFHWkM7QUFIWSxTQUFkO0FBS0QsT0FSSDtBQVNEOzs7a0NBRWFpQixPLEVBQVM7QUFDckIsYUFBT0EsUUFBUUMsTUFBUixDQUFlLFVBQUNDLE1BQUQsRUFBU0MsS0FBVCxFQUFtQjtBQUN2QyxZQUFJQSxNQUFNQyxNQUFOLEtBQWlCLENBQXJCLEVBQXdCO0FBQ3RCRixpQkFBT0MsTUFBTUUsTUFBYixJQUF1QixDQUFDRixNQUFNRyxPQUFQLENBQXZCO0FBQ0QsU0FGRCxNQUVPO0FBQ0xKLGlCQUFPQyxNQUFNRSxNQUFiLEVBQXFCRSxJQUFyQixDQUEwQkosTUFBTUcsT0FBaEM7QUFDRDtBQUNELGVBQU9KLE1BQVA7QUFDRCxPQVBNLEVBT0osRUFQSSxDQUFQO0FBUUQ7Ozs2QkFFUTtBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0UsNEJBQUMsTUFBRCxPQURGO0FBRUUsNEJBQUMsSUFBRDtBQUNFLG1CQUFTLEtBQUt2QixLQUFMLENBQVdDLE9BRHRCO0FBRUUsb0JBQVUsS0FBS0QsS0FBTCxDQUFXRyxRQUZ2QjtBQUdFLGVBQUssS0FBS0gsS0FBTCxDQUFXSSxHQUhsQjtBQUlFLGlCQUFPLEtBQUtKLEtBQUwsQ0FBV0UsS0FKcEI7QUFLRSxzQkFBWSxLQUFLRyxVQUxuQjtBQU1FLHFCQUFXLEtBQUtFO0FBTmxCO0FBRkYsT0FERjtBQWFEOzs7O0VBL0Rlc0IsTUFBTUMsUyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBtYXBMaXN0OiBbXSxcclxuICAgICAgYm9hcmQ6IG51bGwsXHJcbiAgICAgIGdhbWVOYW1lOiBudWxsLFxyXG4gICAgICBtYXA6IG51bGxcclxuICAgIH07XHJcbiAgICB0aGlzLmdldE1hcExpc3QgPSB0aGlzLmdldE1hcExpc3QuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuc3RhcnRHYW1lID0gdGhpcy5zdGFydEdhbWUuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuYXNzZW1ibGVCb2FyZCA9IHRoaXMuYXNzZW1ibGVCb2FyZC5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgZ2V0TWFwTGlzdCgpIHtcclxuICAgIGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL21hcHMnKVxyXG4gICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIGxldCBtYXBMaXN0ID0gcmVzLmRhdGEubWFwKG1hcCA9PiBtYXAubmFtZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ21hcExpc3Q6JywgbWFwTGlzdCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWFwTGlzdH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnU2VydmVyIGVycm9yOicsIGVycik7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc3RhcnRHYW1lKGdhbWVOYW1lLCBtYXApIHtcclxuICAgIGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9ib2FyZCcsIHttYXB9KVxyXG4gICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIGxldCBib2FyZCA9IHRoaXMuYXNzZW1ibGVCb2FyZChyZXMuZGF0YSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBib2FyZCxcclxuICAgICAgICAgIGdhbWVOYW1lLFxyXG4gICAgICAgICAgbWFwXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYXNzZW1ibGVCb2FyZChkYkFycmF5KSB7XHJcbiAgICByZXR1cm4gZGJBcnJheS5yZWR1Y2UoKG1hdHJpeCwgc3BhY2UpID0+IHtcclxuICAgICAgaWYgKHNwYWNlLmNvbF9ubyA9PT0gMCkge1xyXG4gICAgICAgIG1hdHJpeFtzcGFjZS5yb3dfbm9dID0gW3NwYWNlLnRlcnJhaW5dO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1hdHJpeFtzcGFjZS5yb3dfbm9dLnB1c2goc3BhY2UudGVycmFpbik7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG1hdHJpeDtcclxuICAgIH0sIFtdKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPEJhbm5lciAvPlxyXG4gICAgICAgIDxNYWluIFxyXG4gICAgICAgICAgbWFwTGlzdD17dGhpcy5zdGF0ZS5tYXBMaXN0fVxyXG4gICAgICAgICAgZ2FtZU5hbWU9e3RoaXMuc3RhdGUuZ2FtZU5hbWV9XHJcbiAgICAgICAgICBtYXA9e3RoaXMuc3RhdGUubWFwfVxyXG4gICAgICAgICAgYm9hcmQ9e3RoaXMuc3RhdGUuYm9hcmR9XHJcbiAgICAgICAgICBnZXRNYXBMaXN0PXt0aGlzLmdldE1hcExpc3R9XHJcbiAgICAgICAgICBzdGFydEdhbWU9e3RoaXMuc3RhcnRHYW1lfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufSJdfQ==