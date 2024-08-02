import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ArticleContent() {
    const [article, setArticle] = useState({});
    const params = useParams();

    useEffect(() => {
        (async () => {
            const result = await fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${params.articleId}`);
            const data = await result.json();
            
            setArticle(data);
        })();
    }, []);

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
