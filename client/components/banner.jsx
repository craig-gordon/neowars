import React from 'react';
import { Link } from 'react-router-dom';

class Banner extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <h1>
        <Link to='/'>Neo Wars</Link>
      </h1>
    )
  }
}

export default Banner;