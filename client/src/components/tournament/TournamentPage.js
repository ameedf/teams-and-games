import React, { Component } from 'react';
import GamesPage from '../games/GamesPage';
import TeamsPage from '../teams/TeamsPage';
import StatisticsPage from '../stat/StatisticsPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class TournamentPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: [],
      games: []
    }
  }

  componentDidMount() {
    this.fetchTeams();
    this.fetchGames();
  }

  async fetchTeams() {
    try {
      const response = await fetch('/api/teams');
      const teams = await response.json();
      this.setState({ teams });
    } catch (err) {
      alert(err);
    }
  }

  async fetchGames() {
    try {
      const response = await fetch('/api/games');
      const games = await response.json();
      this.setState({ games });
    } catch (err) {
      alert(err);
    }
  }

  async addNewTeam(t) {
    try {
      const response = await fetch('/api/teams', {
        headers: {
          "Content-Type": "application/json"
        },
        method: 'POST',
        body: JSON.stringify(t)
      });
      const newTeam = await response.json();
      const teams = [...this.state.teams, newTeam];
      this.setState({ teams });
    } catch (err) {
      alert(err);
    }
  }

  async addNewGame(game) {
    try {
      const response = await fetch('/api/games', {
        headers: {
          "Content-Type": "application/json"
        },
        method: 'POST',
        body: JSON.stringify(game)
      });
      const newGame = await response.json();
      const games = [...this.state.games, newGame];
      this.setState({ games });
    } catch (err) {
      alert(err);
    }
  }

  render() {
    const { teams, games } = this.state;
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/teams">Teams</Link>
              </li>
              <li>
                <Link to="/games">Games</Link>
              </li>
            </ul>
          </nav>
          <hr />
          <Switch>
            <Route path="/games">
              <GamesPage games={games} teams={teams} onGameAdded={(game) => this.addNewGame(game)} />
            </Route>
            <Route path="/teams">
              <TeamsPage />
            </Route>
            <Route path="/">
              <StatisticsPage teamsNumber={teams.length} gamesNumber={games.length} />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default TournamentPage;