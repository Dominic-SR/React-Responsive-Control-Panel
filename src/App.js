import './App.css';

function App() {
  return (
    <>
       <div className="side-menu">
        <div className="brand-name">
            <i className="fa-solid fa-ring fa-shake"></i>
            <h1>Brand</h1>
        </div>
        <ul>
            <li><i className="fa-solid fa-gauge"></i><span>Dashboard</span> </li>
            <li><i className="fa-solid fa-graduation-cap"></i><span>Students</span> </li>
            <li><i className="fa-solid fa-person-chalkboard"></i><span>Teachers</span> </li>
            <li><i className="fa-solid fa-school"></i><span>Schools</span> </li>
            <li><i className="fa-solid fa-money-bill-1-wave"></i><span>Income</span> </li>
            <li><i className="fa-solid fa-handshake-angle"></i><span>Help</span></li>
            <li><i className="fa-solid fa-gear"></i><span>Settings</span> </li>
        </ul>
    </div>
    <div className="container">
        <div className="header">
            <div className="nav">
                <div className="search">
                    <input type="text" placeholder="Search.." />
                    <button type="submit"><img src="search.png" alt="" /></button>
                </div>
                <div className="user">
                    <a href="https://www.google.com" className="btn" >Add New</a>
                    <img src="notifications.png" alt="" />
                    <div className="img-case">
                        <img src="user.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div className="content">
            <div className="cards">
                <div className="card">
                    <div className="box">
                        <h1>2194</h1>
                        <h3>Students</h3>
                    </div>
                    <div className="icon-case">
                        <i className="fa-solid fa-graduation-cap"></i>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                        <h1>53</h1>
                        <h3>Teachers</h3>
                    </div>
                    <div className="icon-case">
                        <i className="fa-solid fa-person-chalkboard"></i>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                        <h1>5</h1>
                        <h3>Schools</h3>
                    </div>
                    <div className="icon-case">
                        <i className="fa-solid fa-school"></i>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                        <h1>350000</h1>
                        <h3>Income</h3>
                    </div>
                    <div className="icon-case">
                        <i className="fa-solid fa-money-bill-1-wave"></i>
                    </div>
                </div>
            </div>

            <div className="content-2">
                <div className="recent-payments">
                    <div className="title">
                        <h2>Recent Payments</h2>
                        <a href="https://www.google.com" className="btn">View All</a>
                    </div>
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>School</th>
                            <th>Amount</th>
                            <th>Option</th>
                        </tr>
                        <tr>
                            <td>John Doe</td>
                            <td>St. James College</td>
                            <td>$120</td>
                            <td><a href="https://www.google.com" className="btn">View</a></td>
                        </tr>
                        <tr>
                            <td>John Doe</td>
                            <td>St. James College</td>
                            <td>$120</td>
                            <td><a href="https://www.google.com" className="btn">View</a></td>
                        </tr>
                        <tr>
                            <td>John Doe</td>
                            <td>St. James College</td>
                            <td>$120</td>
                            <td><a href="https://www.google.com" className="btn">View</a></td>
                        </tr>
                        <tr>
                            <td>John Doe</td>
                            <td>St. James College</td>
                            <td>$120</td>
                            <td><a href="https://www.google.com" className="btn">View</a></td>
                        </tr>
                        

                        
                    </table>
                </div>
                <div className="new-students">
                    <div className="title">
                        <h2>New Students</h2>
                        <a href="https://www.google.com" className="btn">View All</a>
                    </div>
                    <table>
                        <tr>
                            <th>Profile</th>
                            <th>Name</th>
                            <th>option</th>
                        </tr>
                        <tr>
                            <td><img src="user.png" alt="" /></td>
                            <td>John Steve Doe</td>
                            <td><i className="fa-solid fa-circle-info"></i></td>
                        </tr>
                        <tr>
                            <td><img src="user.png" alt="" /></td>
                            <td>John Steve Doe</td>
                            <td><i className="fa-solid fa-circle-info"></i></td>
                        </tr>
                        <tr>
                            <td><img src="user.png" alt="" /></td>
                            <td>John Steve Doe</td>
                            <td><i className="fa-solid fa-circle-info"></i></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default App;
