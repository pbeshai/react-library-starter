import React, { PropTypes, Component } from 'react';

const colors = [
  '#ffffd9',
  '#edf8b1',
  '#c7e9b4',
  '#7fcdbb',
  '#41b6c4',
  '#1d91c0',
  '#225ea8',
  '#253494',
  '#081d58',
];

export default class MyComponent extends Component {
  static propTypes = {
    defaultColor: PropTypes.string,
  }

  static defaultProps = {
    defaultColor: colors[0],
  }

  constructor(props) {
    super(props);

    this.state = {
      color: props.defaultColor,
    };

    this.changeColor = this.changeColor.bind(this);
  }

  changeColor() {
    this.setState({
      color: colors[(colors.indexOf(this.state.color) + 1) % colors.length],
    });
  }

  render() {
    const { color } = this.state;

    return (
      <div className="MyComponent">
        <button onClick={this.changeColor}>Change Color</button>
        <div className="color-box" style={{ background: color, width: '100%', height: 200 }} />
      </div>
    );
  }
}
