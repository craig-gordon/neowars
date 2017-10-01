class SpaceIntel extends React.Component {
  constructor(props) {
    super(props);
    console.log('this.props:', this.props);
  }

  render() {
    return (
      <div>
        Terrain: {this.props.space.type}<br/>
        Defense: {this.props.space.defense}
        {this.props.space.owner ? `Owner: ${this.props.space.owner}` : null}
      </div>
    )
  }
}