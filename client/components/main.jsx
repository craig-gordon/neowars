const Switch = ReactRouterDOM.Switch;
const Route = ReactRouterDOM.Route;

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Switch>
        <Route exact path='/' render={
          () => <LandingPage
            getMapList={this.props.getMapList}
          />
        }/>
        <Route path='/new' render={
          () => <CreateNewGame
            mapList={this.props.mapList}
            setNameAndMap={this.props.setNameAndMap}
          />
        }/>
        <Route path='/game' render={
          () => <CurrentGame
            map={this.props.map}
            gameName={this.props.gameName}
            board={this.props.board}
          />
        }/>
      </Switch>
    )
  }
}