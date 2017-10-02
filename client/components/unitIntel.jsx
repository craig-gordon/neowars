class UnitIntel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Unit: {this.props.unit.type}<br/>
        Country: {this.props.unit.country}<br/>
        HP: {Math.ceil(this.props.unit.hp / 10)}<br/>
        Move: {this.props.unit.moveRange}<br/>
        Fuel: {this.props.unit.fuel}<br/>
        Ammo: {this.props.unit.weapons[0].ammo}<br/>
        {this.props.unit.canMove ? `Move Unit` : null}<br/><br/>
      </div>
    )
  }
}