
import ArticleGet from '../../../data/ArticleContentGet'
  

export default async function handler(req, res) {
    const httpMetod = req.method;
    
    switch(httpMetod) {
        case 'GET':
            try{
                const articleUrl = "/" + req.query.articles;
                const articlesList = await ArticleGet('sk',articleUrl)
                res.status(200).json(articlesList);
            }catch(e){
                res.status(500).json("Acrticle could not be retrieved");
            }
            
            break;

        default:
            res.setHeader('Allow', ['GET']);
            res.status(405).end('Method not allowed');
    }
}
    
