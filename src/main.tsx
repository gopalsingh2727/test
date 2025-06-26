// main.tsx or index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import store from './store';

const renderApp = () => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
};

const renderInfoScreen = () => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <div style={{ padding: '2rem', textAlign: 'center', fontFamily: 'sans-serif', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <h2>App Opened in New Window</h2>
      <p>The application has been launched in a new window.</p>
      <p>You can close this tab if you want.</p>
      <button
        onClick={openPopup}
        style={{
          marginTop: '1.5rem',
          padding: '10px 24px',
          fontSize: '1rem',
          border: 'none',
          backgroundColor: '#007bff',
          color: '#fff',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Reopen App
      </button>
    </div>
  );
};

function openPopup() {
  const width = window.screen.availWidth;
  const height = window.screen.availHeight;

  const popup = window.open(
    window.location.href,
    '_blank',
    `width=${width},height=${height},top=0,left=0,scrollbars=yes,resizable=yes`
  );

  if (popup) {
    renderInfoScreen(); // This is the original tab
  } else {
    ReactDOM.createRoot(document.getElementById('root')!).render(
      <div style={{ padding: '2rem', textAlign: 'center', fontFamily: 'sans-serif', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h2>Popup Blocked</h2>
        <p>Please allow popups for this site to open the app.</p>
        <button
          onClick={openPopup}
          style={{
            marginTop: '1.5rem',
            padding: '10px 24px',
            fontSize: '1rem',
            border: 'none',
            backgroundColor: '#dc3545',
            color: '#fff',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Try Again
        </button>
      </div>
    );
  }
}

window.addEventListener('load', () => {
  const isPopup = window.opener !== null;

  if (isPopup) {
    renderApp();
  } else {
    openPopup(); 
  }
});