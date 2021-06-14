import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

const Nav = () => {
    return (
            <nav>
                <ul>
                    <Link to="/home">
                            <h2>Home</h2>
                    </Link>
                    <Link to="/login">
                            <h2>Login</h2>
                    </Link>
                    <Link to="/search">
                            <h2>Search</h2>
                    </Link>
                </ul>
            </nav>
    )
}

export default Nav;