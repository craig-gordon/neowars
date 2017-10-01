class Top extends React.Component {
  constructor(props) {
    super(props);
    this.getMapList = this.getMapList.bind(this);
    this.setNameAndMap = this.setNameAndMap.bind(this);
    this.assembleBoard = this.assembleBoard.bind(this);
  }

  getMapList() {
    axios.get('http://localhost:8000/maps')
      .then(res => {
        console.log('res.data:', res.data);
        let mapList = res.data.map(map => map.name);
        console.log('mapList:', mapList);
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
        this.props.selectMap(map);
        this.props.setBoard(board);
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
        <Main 
          mapList={this.props.mapList}
          gameName={this.props.gameName}
          map={this.props.map}
          board={this.props.board}
          getMapList={this.getMapList}
          setNameAndMap={this.setNameAndMap}
        />
      </div>
    )
  }
}