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
        this.props.populateMapList(mapList);
      })
      .catch(err => {
        console.log('Server error:', err);
      });
  }

  setNameAndMap(gameName, map) {
    axios.post('http://localhost:8000/board', {map})
      .then(res => {
        let board = this.assembleBoard(res.data);
        this.props.setGameName(gameName);
        this.props.setMap(map);
        this.props.setBoard(board);
      });
  }

  assembleBoard(dbArray) {
    return dbArray.reduce((matrix, space) => {
      if (space.col_no === 0) {
        matrix[space.row_no] = [new setTerrain[space.terrain](space.row_no, space.col_no, space.country)];
      } else {
        matrix[space.row_no].push(new setTerrain[space.terrain](space.row_no, space.col_no, space.country));
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
              mapList={this.props.mapList}
              setNameAndMap={this.setNameAndMap}
            />
          }/>
          <Route path='/game' component={GameContainer}/>
        </Switch>
      </div>
    )
  }
}