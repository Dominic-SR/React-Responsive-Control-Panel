import './App.css';

function App() {
  return (
    <>
    <div className='sidebar'>

        <div className='sidebar-brand'>
          <h2><span className='lab la-accusoft'>Accusoft</span></h2>
        </div>

        <div className='sidebar-menu'>
          <ul>
            <li>
              <a href='https://www.google.com' className='active'><span className='las la-igloo'></span>
              <span>Dashboard</span></a>
            </li>
            <li>
              <a href='https://www.google.com'><span className='las la-users'></span>
              <span>Customers</span></a>
            </li>
            <li>
              <a href='https://www.google.com'><span className='las la-clipboard-list'></span>
              <span>Projects</span></a>
            </li>
            <li>
              <a href='https://www.google.com'><span className='las la-shipping-bag'></span>
              <span>Orders</span></a>
            </li>
            <li>
              <a href='https://www.google.com'><span className='las la-receipt'></span>
              <span>Inventory</span></a>
            </li>
            <li>
              <a href='https://www.google.com'><span className='las la-user-circle'></span>
              <span>Accounts</span></a>
            </li>
            <li>
              <a href='https://www.google.com'><span className='las la-clipboard-list'></span>
              <span>Tasks</span></a>
            </li>
          </ul>
        </div>
        
    </div>

    
    <div className='main-content'>
        <header>
            <h2>
              <label for="">
                  <span className='las la-bars'></span>
              </label>
              Dashboard
            </h2>

            <div className='search-wrapper'>
                <span className='las la-search'></span>
                <input type="search" placeholder='Search' />
            </div>

            <div className='user-wrapper'>
              <img src={window.location.origin + '/images/users.png'} height="40px" width="40px" alt="img" />
              <div>
                  <h4>John Doe</h4>
                  <small>Super Admin</small>
              </div>
            </div>
        </header>

        <main>
          <div className='cards'>

            <div className='card-single'>
              <div>
                <h1>54</h1>
                <span>Customers</span>
              </div>
              <div>
                <span className='las la-users'></span>
              </div>
            </div>

            <div className='card-single'>
              <div>
                <h1>124</h1>
                <span>Orders</span>
              </div>
              <div>
                <span className='las la-shopping-bag'></span>
              </div>
            </div>

            <div className='card-single'>
              <div>
                <h1>6$</h1>
                <span>Incomes</span>
              </div>
              <div>
                <span className='las la-google-wallet'></span>
              </div>
            </div>

          </div>
        </main>
    </div>
    </>
  );
}

export default App;
