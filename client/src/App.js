import { Provider } from 'react-redux';
import './App.css';
import TeamsPage from './components/teams/TeamsPage';
import TournamentPage from './components/tournament/TournamentPage';

import appStore from './redux/appStore';

function App() {
  return (
    <Provider store={appStore}>
      <div className="App">
        <TeamsPage />
      </div>
    </Provider>
  );
}

export default App;
