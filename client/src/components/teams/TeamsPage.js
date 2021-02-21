import React, { Component } from 'react';

class TeamsPage extends Component {
  constructor(props) {
    super(props);
    this.teamNameRef = React.createRef();
    this.teamPointsRef = React.createRef();
  }

  addTeam() {
    const name = this.teamNameRef.current.value;
    const points = this.teamPointsRef.current.value;
    this.props.onTeamAdded({ name, points });
    this.teamNameRef.current.value = '';
    this.teamPointsRef.current.value = '';
  }

  render() {
    const { list } = this.props;
    return (
      <div>
        <div>
          Name: <input type="text" ref={this.teamNameRef} />
          Points: <input type="number" ref={this.teamPointsRef} />
          <button onClick={() => this.addTeam()}>Add team</button>
        </div>
        <hr />
        <div>
          {list.map(team =>
            <div key={team.id}>
              Team Name: {team.name}, Points: {team.points}
            </div>)
          }
        </div>
      </div>
    );
  }
}

export default TeamsPage;