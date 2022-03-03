import { connectToDatabase } from "../../../data/mongodb";


async function articleContentCreate(lang,content) {
	
    const { db } = await connectToDatabase()
	const result = await db.collection("articles-content-" + lang).insertOne(content);
		
	return result;
}
  
export default async function handler(req, res) {
    const httpMetod = req.method;
    switch(httpMetod) {
        case 'GET':
            res.status(200).json("Cannot get article content. Article must be passed in url.");
            break;

        // case 'POST':
        //     try{
        //         const result = await articleContentCreate('sk',req.body)
        //         res.status(200).json(`Article ${req.body.url} Created`);
        //     }catch(e){
        //         res.status(500).json("Acrticle could not be created");
        //     }
            
        //     break;
        default:
            res.setHeader('Allow', ['GET'/*, 'POST' */]);
            res.status(405).end('Method not allowed');
    }
}
    