import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { messaging } from "./init-fcm";

const App: React.FC = () => {
    const [token, setToken] = useState('');

  useEffect(() => {
    messaging.requestPermission()
        .then(async function() {
          const tok = await messaging.getToken();
          console.log('token', tok);
          setToken(tok || "");
        })
        .catch(function(err) {
          console.log("Unable to get permission to notify.", err);
        });
    navigator.serviceWorker.addEventListener("message", (message) => console.log(message));

    messaging.onMessage((payload) => console.log('Message received. ', payload));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {token}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
