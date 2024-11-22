import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import UserList from './UserList';
import ThemeToggle from './ThemeToggle';

function App() {
    return (
        <Router>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/users">Users</Link></li>
                    <li><Link to="/user/1">User 1</Link></li>
                </ul>
            </nav>

            <ThemeToggle />

            <Routes>
                <Route path="/" element={<h1>Home Page</h1>} />
                <Route path="/users" element={<UserList />} />
                <Route path="/user/:id" element={<h2>Dynamic User Page</h2>} />
            </Routes>
        </Router>
    );
}

export default App;
