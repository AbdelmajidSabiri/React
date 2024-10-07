import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css'

function App(props) {
  const currDate = new Date();

  return (
    <div>
      <h1>Hello Buddy!</h1>
      <h2>The time now is {currDate.toLocaleTimeString()}</h2>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
function ref() {
  root.render(<App/>);
}

setInterval(ref, 1000);

export default App;