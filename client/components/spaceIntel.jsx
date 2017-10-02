class SpaceIntel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Terrain: {this.props.space.terrain}<br/>
        Defense: {this.props.space.defense}<br/>
        {this.props.space.country ? `Owner: ${this.props.space.country}` : null}<br/>
        {this.props.space.canBuild ?
          (<ul>
            {this.props.space.canBuild.map(unitTuple => (
              <li>
                {unitTuple[0]} | {unitTuple[1]}
              </li>
            ))}
          </ul>)
        : null}
      </div>
    )
  }
}