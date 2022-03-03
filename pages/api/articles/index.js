import ArticleList from '../../../data/ArticleList'

async function articleCreate(lang,article) {
    article.dateCreated = new Date().toLocaleDateString()
	
    const { db } = await connectToDatabase()
	const result = await db.collection("articles-list-" + lang).insertOne(article);
		
	return result;
}
  

export default async function Articles(req, res) {
    const httpMetod = req.method;
    
    switch(httpMetod) {
        case 'GET':
            try{
                const articleList = await ArticleList('sk')
                res.status(200).json(articleList);
            }catch(e){
                res.status(500).json("Acrticle could not be retrieved");
            }
            
            break;

        // case 'POST':
        //     try{
        //         const result = await articleCreate('sk',req.body)
        //         res.status(200).json(result);
        //     }catch(e){
        //         res.status(500).json("Acrticle could not be created");
        //     }
            
        //     break;
        default:
            res.setHeader('Allow', ['GET' /*, 'POST' */]);
            res.status(405).end('Method not allowed');
    }
}
    
