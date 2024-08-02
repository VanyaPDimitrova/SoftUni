import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Articles() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await fetch('http://localhost:3030/jsonstore/advanced/articles/list');
            const data = await result.json();
            
            setArticles(data);
        })();
    }, []);

    return (
        <ul role="list" className="m-40 p-10 divide-y divide-gray-100">
            {articles.map((article) => (
                <li key={article._id} className="flex justify-between gap-x-6 py-5">
                    <Link to={`/articles/${article._id}`}>
                        <div className="flex min-w-0 gap-x-4">
                            <img 
                                alt="person" 
                                src={article.imageUrl} 
                                className="h-12 w-12 flex-none rounded-full bg-gray-50" 
                            />
                            
                            <div className="min-w-0 flex-auto">
                                <p className="text-sm font-semibold leading-6 text-gray-900">
                                    {article.title}
                                </p>
                            </div>
                        </div>
                    </Link>
                </li>
            ))}
        </ul>
    );
}

  export default Articles;