const Switch = ReactRouterDOM.Switch;
const Route = ReactRouterDOM.Route;

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.getMapList = this.getMapList.bind(this);
    this.setNameAndMap = this.setNameAndMap.bind(this);
    this.assembleBoard = this.assembleBoard.bind(this);
  }

  getMapList() {
    axios.get('http://localhost:8000/maps')
      .then(res => {
        let mapList = res.data.map(map => map.name);
        store.dispatch(this.props.populateMapList(mapList));
      })
      .catch(err => {
        console.log('Server error:', err);
      });
  }

  setNameAndMap(gameName, map) {
    axios.post('http://localhost:8000/board', {map})
      .then(res => {
        console.log(res.data);
        let board = this.assembleBoard(res.data);
        store.dispatch(this.props.setGameName(gameName));
        store.dispatch(this.props.setMap(map));
        store.dispatch(this.props.setBoard(board));
      });
  }

  assembleBoard(dbArray) {
    return dbArray.reduce((matrix, space) => {
      if (space.col_no === 0) {
        matrix[space.row_no] = [new setTerrain[space.terrain](space.row_no, space.col_no)];
      } else {
        matrix[space.row_no].push(new setTerrain[space.terrain](space.row_no, space.col_no));
      }
      return matrix;
    }, []);
  }

  render() {
    return (
      <div>
        <Banner />
        <Switch>
          <Route exact path='/' render={
            () => <LandingPage
              getMapList={this.getMapList}
            />
          }/>
          <Route path='/new' render={
            () => <CreateNewGame
              gameName={this.props.gameName}
              map={this.props.map}
              mapList={this.props.mapList}
              setNameAndMap={this.setNameAndMap}
            />
          }/>
          <Route path='/game' render={
            () => <GameContainer
              map={this.props.map}
              gameName={this.props.gameName}
              board={this.props.board}
            />
          }/>
        </Switch>
      </div>
    )
  }
}