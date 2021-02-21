import React, { Component } from 'react';
import { connect } from 'react-redux';
import {init} from './teamsActions';

class TeamsPage extends Component {
  constructor(props) {
    super(props);
    this.teamNameRef = React.createRef();
    this.teamPointsRef = React.createRef();
  }

  componentDidMount() {
   this.initalize();
  }

  async initalize() {
    console.log("abc");
    this.props.onInitializeTeams();
  }

  addTeam() {
    const name = this.teamNameRef.current.value;
    const points = this.teamPointsRef.current.value;
    this.props.onTeamAdded( { id: Math.ceil(Math.random()*1000), name, points } );
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

const mapStateToProps = state => {
  console.log(state);
  return {
    list: state.teams,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTeamAdded: (team) => dispatch({type: 'team/added', team: team}),
    onInitializeTeams: () => dispatch(init())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamsPage);