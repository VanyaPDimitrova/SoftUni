import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <h1>
                <Link to='/' className="home">
                    GamesPlay
                </Link>
            </h1>

            <nav>
                <Link to='/games'>
                    All games
                </Link>

                {/* Logged-in users */}
                <div id="user">
                    <Link to='/login'>
                        Create Game
                    </Link>
                    <Link to='/logout'>
                        Logout
                    </Link>
                </div>
                
                {/* Guest users */}
                <div id="guest">
                    <Link to='/login'>
                        Login
                    </Link>
                    <Link to='/register'>
                        Register
                    </Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;
