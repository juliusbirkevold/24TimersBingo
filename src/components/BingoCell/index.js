import React, { Component } from "react";
import "./BingoCell.css";

class BingoCell extends Component {
  handleClick = () => {
    this.props.handleCellChange(this.props.id);
  };

  bingoCellColor = () => {
    console.log(Math.floor(this.props.id / 4));
    return this.props.id % 2 ===
      (Math.floor(this.props.id / 4) % 2 === 1 ? 1 : 0)
      ? "cell cell-odd"
      : "cell";
  };

  render() {
    return (
      <div
        className={
          this.bingoCellColor() + (this.props.clicked ? " cell-selected" : "")
        }
        onClick={this.handleClick}
      >
        <p>{this.props.content}</p>
      </div>
    );
  }
}

export default BingoCell;
