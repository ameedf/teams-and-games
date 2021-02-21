import React, { Component } from 'react';

class StatisticsPage extends Component {
  render() {
    return (
      <div>
        <div>
          Number of teams: {this.props.teamsNumber}
        </div>
        <div>
          Number of games: {this.props.gamesNumber}
        </div>
      </div>
    );
  }
}

export default StatisticsPage;