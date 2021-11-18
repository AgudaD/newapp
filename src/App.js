import logo from './logo.svg';
import './App.css';
import ProfilePhoto from './Components/Profile/ProfilePhoto';
import FullName from './Components/Profile/FullName';
import Address from './Components/Profile/Address';

function App() {
  return (
    <div className="App">

      <div className="port">

        <ProfilePhoto />
        <FullName />
        <Address />
        
      </div>
      

    </div>
  );
}

export default App;
