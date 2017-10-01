const Link = ReactRouterDOM.Link;

class BoardSpace extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <td>
        <Link to={`/game/space=${this.props.space.position[0]},${this.props.space.position[1]}`}>
          {this.props.space.type}
        </Link>
      </td>
    )
  }
}