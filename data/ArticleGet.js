import { connectToDatabase } from "./mongodb";

async function ArticleGet(lang, articleUrl) {
	const { db } = await connectToDatabase()

	try{
		const article = await db.collection("articles-list-" + lang)
		.findOne({'url':articleUrl});

		return {
			article,
			code:200,
		};

	} catch(e){
		console.error(e)
		return {
			status:500,
			errorMap:e
		};
	}
}

export default ArticleGet;