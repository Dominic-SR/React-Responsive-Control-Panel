import './App.css';

function App() {
  return (
    <div className='sidebar'>
        <div className='sidebar-brand'>
          <h1><span className='lab la-accusoft'>Accusoft</span></h1>
        </div>

        <div className='sidebar-menu'>
          <ul>
            <li>
              <a href='https://www.google.com'><span className='lab la igloo'></span>
              <span>Dashboard</span></a>
            </li>
          </ul>
        </div>
    </div>
  );
}

export default App;
