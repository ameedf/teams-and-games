import React, { Component } from 'react';

class GamesPage extends Component {

  constructor(props) {
    super(props);
    this.firstTeamRef = React.createRef();
    this.secondTeamRef = React.createRef();
    this.firstTeamScore = React.createRef();
    this.secondTeamScore = React.createRef();
  }

  extractTeamName(teamId) {
    return this.props.teams.find(t => t.id === teamId).name;
  }

  addGame() {
    const firstTeamName = this.firstTeamRef.current.value;
    const firstTeamId = this.props.teams.find(t => t.name === firstTeamName).id;
    const secondTeamName = this.secondTeamRef.current.value;
    const secondTeamId = this.props.teams.find(t => t.name === secondTeamName).id;
    const firstTeamScore = this.firstTeamScore.current.value;
    const secondTeamScore = this.secondTeamScore.current.value;
    this.props.onGameAdded({ firstTeamId, secondTeamId, firstTeamScore, secondTeamScore });
    this.firstTeamRef.current.value = '';
    this.secondTeamRef.current.value = '';
    this.firstTeamScore.current.value = '';
    this.secondTeamScore.current.value = '';

  }

  render() {
    const { games } = this.props;
    return (
      <div>
        <div>
          <fieldset>
            <legend>First team</legend>
            Name: <input type="text" ref={this.firstTeamRef} />
            Score: <input type="number" ref={this.firstTeamScore} />
          </fieldset>
          <fieldset>
            <legend>Second team</legend>
            Name: <input type="text" ref={this.secondTeamRef} />
            Score: <input type="number" ref={this.secondTeamScore} />
          </fieldset>
          <button onClick={() => this.addGame()}>Add game</button>
        </div>
        <hr />
        <div>
          {games.map(game =>
            <div key={game.id}>
              <div>Team A: {this.extractTeamName(game.firstTeamId)}, Score: {game.firstTeamScore}</div>
              <div>Team B: {this.extractTeamName(game.secondTeamId)}, Score: {game.secondTeamScore}</div>
            ---------------------------
          </div>)
          }
        </div>
      </div>
    );
  }
}

export default GamesPage;