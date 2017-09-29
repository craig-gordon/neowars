class BoardSpace extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <td>{this.props.terrain}</td>
    )
  }
}