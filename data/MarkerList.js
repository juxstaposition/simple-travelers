import { connectToDatabase } from "./mongodb";

async function MarkerList(lang) {
	const { db } = await connectToDatabase()

	try{
		const findResult = await db.collection("marker-list-" + lang)
		.find()
		.toArray();

		return {
			markerList:findResult,
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

export default MarkerList;