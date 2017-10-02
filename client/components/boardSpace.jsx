const Link = ReactRouterDOM.Link;

class BoardSpace extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <td onClick={this.props.toggleSpaceIntel.bind(null, this.props.space.position)}>
        <img src={`${this.props.space.terrain}_${this.props.space.country}.png`} />
      </td>
    )
  }
}