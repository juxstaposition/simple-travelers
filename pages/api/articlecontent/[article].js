import ArticleContentGet from '../../../data/ArticleContentGet'


export default async function handler(req, res) {
    const httpMetod = req.method;


    switch(httpMetod) {
        case 'GET':
            const { article } = req.query;
            // console.log("api ",article)
            const response = await ArticleContentGet('sk',article)
            // console.log(response.article)
            res.status(200).json(response.article);
            break;
            
        default:
            res.setHeader('Allow', ['GET']);
            res.status(405).end('Method not allowed');
            break;
    }
}
    
