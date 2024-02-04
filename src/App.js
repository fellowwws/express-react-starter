import { useEffect, useState } from 'react';

function App() {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch('/api/tasks')
    .then(res => res.json())
    .then(data => setState(data));
  }, []);

  return (
    <div className="App">
      <ul>
        {state.map((task) => <li key={task.id}>{task.title}</li>)}
      </ul>
    </div>
  );
}

export default App;
