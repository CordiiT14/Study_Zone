
import './App.css';
import Pomodoro from './containers/Pomodoro';
import ToDo from './containers/ToDo';
import SpotifyPlaylist from './containers/spotify-playlist';

function App() {
  return (
    <div className='App'>
      <Pomodoro />
      <SpotifyPlaylist/>
      <ToDo />
    </div>
  );
}

export default App;
