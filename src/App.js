import React from 'react';

function App() {
  const containerStyle = {
    backgroundColor: '#030303',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  };

  const titleStyle = {
    color: '#ffffff',
    fontSize: '4rem',
    fontWeight: '900',
    letterSpacing: '-2px',
    margin: '0'
  };

  const subtitleStyle = {
    color: '#8b5cf6',
    textTransform: 'uppercase',
    letterSpacing: '8px',
    fontSize: '0.75rem',
    marginTop: '10px',
    opacity: '0.8'
  };

  return (
    <div style={containerStyle}>
      <div style={{ padding: '40px', border: '1px solid rgba(139, 92, 246, 0.2)', borderRadius: '15px', background: 'rgba(10, 10, 20, 0.5)' }}>
        <h1 style={titleStyle}>
          LIFE <span style={{ color: '#8b5cf6' }}>OS</span>
        </h1>
        <p style={subtitleStyle}>System Interface v1.0</p>
        <div style={{ marginTop: '30px', width: '40px', height: '2px', backgroundColor: '#8b5cf6', margin: '30px auto' }}></div>
      </div>
    </div>
  );
}

export default App;