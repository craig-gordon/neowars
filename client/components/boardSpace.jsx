const Link = ReactRouterDOM.Link;

class BoardSpace extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <td onClick={() => {
        if (this.props.readyToMove) {
          if (Math.abs(this.props.clickedSpace[0] - this.props.space.position[0]) + Math.abs(this.props.clickedSpace[1] - this.props.space.position[1]) <= 3) {
            this.props.moveUnit(this.props.clickedSpace, this.props.space.position);
            this.props.toggleUnitMove();
          }
        }
        this.props.toggleSpaceIntel(this.props.space.position);
      }}>
        <img src={`${this.props.space.terrain}_${this.props.space.country}.png`} />
      </td>
    )
  }
}