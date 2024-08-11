import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import gamesApi from '../../api/games-api';
import commentsApi from '../../api/comments-api';


function GameDetails() {
    const [game, setGame] = useState({
        category: '',
        imageUrl: '',
        maxLevel: '',
        summary: '',
        title: '',
        _id: '',
        comments: {},
    });
    const [username, setUsername] = useState('');
    const [comment, setComment] = useState('');
    const { gameId } = useParams();
    
    useEffect(() => {
        gamesApi.getOne(gameId)
        .then(data => setGame(data));
    }, []);

    
    let { category, imageUrl, maxLevel, summary, title, _id, comments} = game;
    

    const commentSubmitHandler = async (e) => {
        e.preventDefault();

        const newComment = await commentsApi.create(gameId, username, comment); 
        const newGame = {... game,
                            comments: {
                                ... comments,
                                [newComment._id]: newComment,
                            }
                        }
        
        setGame(newGame);
        setUsername('');
        setComment('');
    };
    

    return (
        // Details Page
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">

                <div className="game-header">
                    <img className="game-img" src={imageUrl} />
                    <h1>{title}</h1>
                    <span className="levels">MaxLevel: {maxLevel}</span>
                    <p className="type">{category}</p>
                </div>

                <p className="text">
                    {summary}
                </p>


                {/* // Bonus ( for Guests and Users ) */}
                <div className="details-comments">
                    <h2>Comments:</h2>

                    {Object.values(comments || {}).length > 0
                        ? <ul>
                            { Object.values(comments).map(comment => (
                                <li key={comment._id} className="comment">
                                    <p>{`${comment.username}: ${comment.text}`}</p>
                                </li>))
                            }
                          </ul>
                        : <p className="no-comment">No comments.</p>
                    }
                                    
                </div>

                {/* Edit/Delete buttons ( Only for creator of this game )  */}
                {/* <div className="buttons">
                    <a href="#" className="button">Edit</a>
                    <a href="#" className="button">Delete</a>
                </div> */}
            </div>

            {/* Bonus */}
            {/* Add Comment ( Only for logged-in users, which is not creators of the current game ) */}
            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" onSubmit={commentSubmitHandler}>
                    <input 
                        type='text' 
                        placeholder='Pesho' 
                        name='username' 
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                    />

                    <textarea 
                        className="comment" 
                        placeholder="Comment......"
                        onChange={(e) => setComment(e.target.value)}
                        value={comment}
                    ></textarea>

                    <input className="btn submit" type="submit" value="Add Comment" />
                </form>
            </article>

        </section>
    );
}

export default GameDetails;
