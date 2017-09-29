const Link = ReactRouterDOM.Link;

class Banner extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>
        <Link to='/'>Neo Wars</Link>
      </h1>
    )
  }
}