
import { connectToDatabase } from "./mongodb";


async function ArticleContentGet(lang,articleUrl) {
  
    const { db } = await connectToDatabase()

    try{
        const result = await db.collection("articles-content-" + lang)
        .findOne({'url':articleUrl});

        if(result === undefined){
            return {
                article: [
                    {
                        "component" : "h4",
                        "text" : "Article Could Not Be Found",
                        "key": 1
                    }
                ],
                status:500,
                errorMap:e
            };
        }
        return {
            article:result,
            code:200,
        };

    } catch(e){
        console.error(e)
        return {
            article: [
                {
                    "component" : "h4",
                    "text" : "There was a problem loading article from the database"
                }
            ],
            status:500,
            errorMap:e
        };
    }
}

export default ArticleContentGet;