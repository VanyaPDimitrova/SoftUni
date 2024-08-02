import { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';

function ArticleContent() {
    const [article, setArticle] = useState({});
    const params = useParams();
    
    const location = useLocation();
    // console.log(location);

    const navigate = useNavigate();
    

    useEffect(() => {
        (async () => {
            const response = await fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${params.articleId}`);
            if (response.statusText == 'No Content') {
                // redirect
                navigate('/not-found');
                return;
            }
            
            const data = await response.json();
            
            setArticle(data);
        })();
    }, []);

    // redirect with Navigate component
    /*
    if (...) {
        return <Navigate to="/not-found" />
    };
    */

    return (
        <div className="m-40 flex min-w-0 gap-x-4">
            <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                    {article.title}
                </p>

                <p className="mt-1 text-xs leading-5 text-gray-500">
                    {article.content}
                </p>
            </div>
        </div>
    );
}

export default ArticleContent;
