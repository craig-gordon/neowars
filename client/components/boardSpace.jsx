const Link = ReactRouterDOM.Link;

class BoardSpace extends React.Component {
  constructor(props) {
    super(props);
    console.log('EWTHEWLTL', this.props);
  }

  render() {
    return (
      <td onClick={this.props.toggleSpaceIntel.bind(null, this.props.space.position)}>
        <img src={`${this.props.space.type}.png`} />
      </td>
    )
  }
}