import { useEffect, useState } from 'react';
import gamesApi from '../../api/games-api';
import LatestGame from './latest-game/LatestGame';

function Home() {
    const [latestGames, setLatestGames] = useState([]);
    
    useEffect(() => {
        // TODO: modify to do only latest games
        (async () => {
            const result = await gamesApi.getAll();

            setLatestGames(result.reverse().splice(0, 3));
        })();
    }, []);

    return (  
        <section id="welcome-world">

            <div className="welcome-message">
                <h2>ALL new games are</h2>
                <h3>Only in GamesPlay</h3>
            </div>
            <img src="./images/four_slider_img01.png" alt="hero" />

            <div id="home-page">
                <h1>Latest Games</h1>

                {latestGames.length > 0 
                    ? latestGames.map(latestGame => <LatestGame key={latestGame._id} {...latestGame} />)
                    : <p className="no-articles">No games yet</p>
                }

            </div>
        </section>
    );
}

export default Home;
