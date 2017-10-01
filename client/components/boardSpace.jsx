const Link = ReactRouterDOM.Link;

class BoardSpace extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <td>
        <Link to={`/game/space=${this.props.position[0]},${this.props.position[1]}`}>
          {this.props.terrain}
        </Link>
      </td>
    )
  }
}