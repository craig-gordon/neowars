import React from 'react';
import { Link } from 'react-router-dom';

export class Banner extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="siteBanner">
        <Link to="/" className="siteName">
          Neo Wars
        </Link>
      </div>
    )
  }
}

export default Banner;