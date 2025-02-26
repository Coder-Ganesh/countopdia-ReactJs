import React from "react";
import attacklogo from "./Images/attack.png";
import defencelogo from "./Images/defend.png";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAttack = this.handleAttack.bind(this);
    this.handleDefence = this.handleDefence.bind(this);
    this.state = {
      count: 0,
      gameStatus:"",
      lastPlay:"",
    };
  }

  handleAttack = () => {
    this.setState((previousState) => {
        let newcount = previousState.count + Math.round(Math.random() * 10);
      return {
        count: newcount,
        lastPlay:"Attack",
        gameStatus : newcount>10?"You won!!!":previousState.gameStatus,
      };
    });
  };

  handleDefence = () =>  {
    this.setState((previousState) => {
        let newcount = previousState.count - Math.round(Math.random() * 10);
      return {
        count: newcount,
        lastPlay:"Defence",
        gameStatus : newcount<-10?"You lost!!!":previousState.gameStatus,
      };
    });
  };

  handleRandomPlay = () => {
    let playMode = Math.round(Math.random());
    if(playMode === 0)
    {
        this.handleAttack();
    }
    else
    {
        this.handleDefence();
    }   
  };

  handleReset = () =>  {
    this.setState(() => {
      return {
        count: 0,
        gameStatus:"",
        lastPlay:"",
      };
    });
  };

  render() {
    return (
      <div className="row text-white text-center">
        <h1>Game Score: {this.state.count}</h1>
        <p>You win at +10 points and lose at -10 points!</p>
        <p>Last Play:{this.state.lastPlay}</p>
        <h3>Game Status:{this.state.gameStatus}</h3>
        <div className="col-6 col-md-3 offset-md-3">
          <img
            style={{
              width: "100%",
              cursor: "pointer",
              border: "1px solid green",
            }}
            className="p-4 rounded"
            src={attacklogo}
            onClick={this.handleAttack}
            alt="+"
          />
        </div>

        <div className="col-6 col-md-3">
          <img
            style={{
              width: "100%",
              cursor: "pointer",
              border: "1px solid red",
            }}
            className="p-4 rounded"
            src={defencelogo}
            onClick={this.handleDefence}
            alt="-"
          />
        </div>
        <div className="col-12 col-md-4 offset-md-4">
            <button className="btn btn-secondary w-100 mt-2" onClick={this.handleRandomPlay}>Random Play</button>
            <br/>
            <button className="btn btn-warning w-100 mt-2"  onClick={this.handleReset}>Reset</button>
            <br/>
        </div>
      </div>
    );
  };
};
