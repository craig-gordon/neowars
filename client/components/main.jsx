class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mapList: [],
      gameName: null,
      map: null,
      board: []
    };
    this.getMapList = this.getMapList.bind(this);
    this.setNameAndMap = this.setNameAndMap.bind(this);
    this.assembleBoard = this.assembleBoard.bind(this);
  }

  getMapList() {
    axios.get('http://localhost:8000/maps')
      .then(res => {
        let mapList = res.data.map(map => map.name);
        console.log('mapList:', mapList);
        this.setState({mapList});
      })
      .catch(err => {
        console.log('Server error:', err);
      });
  }

  setNameAndMap(gameName, map) {
    axios.post('http://localhost:8000/board', {map})
      .then(res => {
        let board = this.assembleBoard(res.data);
        this.setState({
          board,
          gameName,
          map
        });
      });
  }

  assembleBoard(dbArray) {
    return dbArray.reduce((matrix, space) => {
      if (space.col_no === 0) {
        matrix[space.row_no] = [space.terrain];
      } else {
        matrix[space.row_no].push(space.terrain);
      }
      return matrix;
    }, []);
  }

  render() {
    return (
      <div>
        <Banner />
        <Body 
          mapList={this.state.mapList}
          gameName={this.state.gameName}
          map={this.state.map}
          board={this.state.board}
          getMapList={this.getMapList}
          setNameAndMap={this.setNameAndMap}
        />
      </div>
    )
  }
}