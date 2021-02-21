const initalState = {
  teams: [{ id: 1, name: "t1", points: 13 }],
  games: []
};

export function mainReducer(state = initalState, action) {
  let newState;
  switch (action.type) {
    case 'game/added': {
      /*
      action =  {type: 'game/added', game: {vvvvv} }
      */
      const game = action.game;

      // new state
      return [...state.games, game];
    }

    case 'team/added':
      const team = action.team;

      newState = { ...state };
      newState.teams = [...state.teams, team]
      // const newState = {
      //   games: [...state.games],
      //   teams: [...state.teams, team]
      // }
      return newState;
    case 'team/initalized':
      newState = { ...state };
      newState.teams = action.newTeams;
      return newState;
  }
  return state;
}