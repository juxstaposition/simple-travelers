import { connectToDatabase } from "./mongodb";

async function ArticleList(lang) {
	const { db } = await connectToDatabase()

	try{
		const findResult = await db.collection("articles-list-" + lang)
		.find()
		.toArray();

		return {
			articleList:findResult,
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

export default ArticleList;