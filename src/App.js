import MyComponent from './MyComponent';
import LoginForm from './LoginForm';
import {useState,useEffect} from 'react';



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  const handleLogin = (username) => {
    setUsername(username);
    setIsLoggedIn(true);
  };
  
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
  };
  
  return (
    <div>
      {isLoggedIn ? (
        <div>
          <MyComponent/>
          <button onClick={handleLogout}>Log Out</button>
        </div>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
