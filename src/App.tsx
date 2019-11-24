import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { messaging } from "./init-fcm";

const App: React.FC = () => {
    const [token, setToken] = useState('');

  useEffect(() => {
      Notification.requestPermission().then((permission) => {
          if (permission === 'granted') {
              console.log('Notification permission granted.');
              // Get Instance ID token. Initially this makes a network call, once retrieved
                // subsequent calls to getToken will return from cache.
              messaging.getToken().then((currentToken) => {
                  if (currentToken) {
                      // sendTokenToServer(currentToken);
                      // updateUIForPushEnabled(currentToken);
                      setToken(currentToken);
                  } else {
                      // Show permission request.
                      console.log('No Instance ID token available. Request permission to generate one.');
                      // Show permission UI.
                      // updateUIForPushPermissionRequired();
                      // setTokenSentToServer(false);
                  }
              }).catch((err) => {
                  console.log('An error occurred while retrieving token. ', err);
                  // showToken('Error retrieving Instance ID token. ', err);
                  // setTokenSentToServer(false);
              });

              // Callback fired if Instance ID token is updated.
              messaging.onTokenRefresh(() => {
                  messaging.getToken().then((refreshedToken) => {
                      console.log('Token refreshed.');
                      // Indicate that the new Instance ID token has not yet been sent to the
                      // app server.
                      // setTokenSentToServer(false);
                      // Send Instance ID token to app server.
                      // sendTokenToServer(refreshedToken);
                      setToken(refreshedToken || '');
                      alert('token refreshed');
                      // ...
                  }).catch((err) => {
                      console.log('Unable to retrieve refreshed token ', err);
                      // showToken('Unable to retrieve refreshed token ', err);
                  });
              });
          } else {
              console.log('Unable to get permission to notify.');
          }
      });

      /*
      messaging.requestPermission()
        .then(async function() {
          const tok = await messaging.getToken();
          console.log('token', tok);
          setToken(tok || "");
        })
        .catch(function(err) {
          console.log("Unable to get permission to notify.", err);
        });

       */

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
