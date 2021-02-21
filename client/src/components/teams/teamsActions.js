
export const init = () => async (dispatch) => {
  try {
    const response = await fetch('/api/teams');
    const teams = await response.json();
    console.log("123", teams);
    dispatch({ type: 'team/initalized', newTeams: teams });
  } catch (err) {
    alert(err);
  }
}