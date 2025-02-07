import React, { Component } from "react";
import BingoCell from "./components/BingoCell";
import "./App.css";
import fireImg from "./components/BingoCell/klokke.png";
import bingopile from "./resources/bingo.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleCellChange = this.handleCellChange.bind(this);
  }

  state = {
    text: [],
    chosen_cells: [],
    bingo_id: 0,
    bingo_rows: [],
    bingo_cols: [],
    bingo_diagonal_down: false,
    bingo_diagonal_up: false,
    is_bingo: false,
    showRules: false,
  };

  componentDidMount() {
    if (!!localStorage.getItem("bingoState")) {
      this.setState(JSON.parse(localStorage.getItem("bingoState")));
    } else {
      this.generateBoard();
    }
    document.title = "24 Timers bingo";
  }

  componentDidUpdate() {
    localStorage.setItem("bingoState", JSON.stringify(this.state));
  }

  handleCellChange = (value) => {
    let cells = this.state.chosen_cells;
    cells[value % 4][Math.floor(value / 4)] =
      !cells[value % 4][Math.floor(value / 4)];
    let bingo_rows = this.state.bingo_rows;
    let bingo_cols = this.state.bingo_cols;
    let bingo_diagonal_down = this.state.bingo_diagonal_down;
    let bingo_diagonal_up = this.state.bingo_diagonal_up;
    let is_bingo = false;
    let is_full_bingo = cells.every(function (level2, i) {
      return level2.every(function (bool) {
        return bool;
      });
    });

    for (let i = 0; i < 4; i++) {
      if (!this.state.bingo_cols[i]) {
        let colBingo = true;
        for (let j = 0; j < 4; j++) {
          if (!cells[i][j]) {
            colBingo = false;
          }
        }
        if (colBingo) {
          bingo_cols[i] = true;
          is_bingo = true;
        }
      }
    }
    if (!bingo_diagonal_down) {
      let diagBingoDown = true;
      for (let i = 0; i < 4; i++) {
        if (!cells[i][i]) {
          diagBingoDown = false;
        }
      }
      if (diagBingoDown) {
        bingo_diagonal_down = true;
        is_bingo = true;
      }
    }
    if (!bingo_diagonal_up) {
      let diagBingoUp = true;
      for (let i = 0; i < 4; i++) {
        if (!cells[3 - i][i]) {
          diagBingoUp = false;
        }
      }
      if (diagBingoUp) {
        bingo_diagonal_up = true;
        is_bingo = true;
      }
    }
    for (let i = 0; i < 4; i++) {
      if (!this.state.bingo_rows[i]) {
        let rowBingo = true;
        for (let j = 0; j < 4; j++) {
          if (!cells[j][i]) {
            rowBingo = false;
          }
        }
        if (rowBingo) {
          bingo_rows[i] = true;
          is_bingo = true;
        }
      }
    }
    is_bingo = is_full_bingo ? false : is_bingo;
    const newState = {
      text: this.state.text,
      chosen_cells: cells,
      bingo_rows: bingo_rows,
      bingo_cols: bingo_cols,
      bingo_diagonal_down: bingo_diagonal_down,
      bingo_diagonal_up: bingo_diagonal_up,
      is_bingo: is_bingo,
      is_full_bingo: is_full_bingo,
      bingo_id: this.state.bingo_id,
    };
    this.setState(newState);
    localStorage.setItem("bingoState", JSON.stringify(newState));
  };

  static generatePicks(bingoArray, numberOfLines) {
    let picks = [];
    for (let i = 0; i < 16; i++) {
      let k = Math.floor(Math.random() * numberOfLines);
      while (picks.indexOf(bingoArray[k]) > -1) {
        k = Math.floor(Math.random() * numberOfLines);
      }
      picks[i] = bingoArray[k];
    }
    return picks;
  }

  generateBoard = () => {
    let bingoArray = bingopile.options;
    let pickedText = App.generatePicks(bingoArray, bingoArray.length);
    let matrix = [];
    for (let i = 0; i < 4; i++) {
      matrix[i] = [];
      for (let j = 0; j < 4; j++) {
        matrix[i][j] = false;
      }
    }
    const initState = {
      text: pickedText,
      bingo_id: this.state.bingo_id + 16,
      chosen_cells: matrix,
      bingo_rows: [],
      bingo_cols: [],
      bingo_diagonal_down: false,
      bingo_diagonal_up: false,
    };
    localStorage.setItem("bingoState", JSON.stringify(initState));
    this.setState(initState);
  };

  render() {
    return (
      <div className="App">
        <div
          className={this.state.is_full_bingo ? "popup show" : "popup"}
          onClick={() => this.setState({ is_full_bingo: false })}
        >
          <div className="bingotext">
            <img src={fireImg} alt="Abakus logo" />
            <img src={fireImg} alt="Abakus logo" />
            <img src={fireImg} alt="Abakus logo" />
          </div>
          <div className="bingotext">
            <span>Gratulerer, du har vunnet Bingo!</span>
          </div>
          <p>(Trykk for å lukke)</p>
        </div>
        <div
          className={this.state.is_bingo ? "popup show" : "popup"}
          onClick={() => this.setState({ is_bingo: false })}
        >
          <div className="bingotext">
            <img src={fireImg} alt="Abakus logo" />
            <span>Bingo!</span>
            <img src={fireImg} alt="Abakus logo" />
          </div>
          <p>(Trykk for å lukke)</p>
        </div>
        <div
          className={this.state.showRules ? "popup show" : "popup"}
          onClick={() => this.setState({ showRules: false })}
        >
          <div className="textWindow">
            <p>Regler</p>
            <br />
            <p>
              1) Du har 24 timer til å utføre så mange utfordringer som mulig
            </p>
            <br />
            <p>
              2) Det handler om å være taktisk, premier blir bestemt etter
              antall rader. Radene er kun vertikale og horisontale
            </p>
            <br />
            <p>
              3) Den endelige bingoen får du når du har fylt brettet, og gir
              selvfølgelig best premie! Dere som går for stor utføring bør
              dokumentere så mye som mulig, siden vi vil verifisere de beste.
            </p>
            <br />
            <p>
              4) Vinneren er førstemann til å fylle hele brettet, eller han/hun
              som har kommer lengst!
            </p>
          </div>
          <p>(Trykk for å lukke)</p>
        </div>

        <div className="App-header">
          <div style={{ textAlign: "left" }}>
            24-timer
            <br />
            <span style={{ textDecoration: "underline", fontSize: "3.5rem" }}>
              BINGO
            </span>
          </div>
          <div className="rules">
            <button onClick={() => this.setState({ showRules: true })}>
              Regler
            </button>
          </div>
        </div>
        <div className="bingoBoard">
          {this.state.text.map((item, key = 0) => {
            key++;
            return (
              <BingoCell
                key={this.state.bingo_id + key}
                id={key - 1}
                content={item}
                clicked={
                  this.state.chosen_cells[(key - 1) % 4][
                    Math.floor((key - 1) / 4)
                  ]
                }
                handleCellChange={this.handleCellChange}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
