import ArticlesContent from "../data/Articles";

// const asyncForEach = async (array, callback) => {
//     for (let index = 0; index < array.length; index++) {
//         console.log(index)
//         const requestOptions = {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(array[index])
//         };
//         const response =  await fetch('http://localhost:3000/api/articlecontent', requestOptions);
//         const data = await response.json() 
//         console.log("data" + data)
//     }
// }

  
const handleClick = async () => {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(ArticlesContent[2])
    };
    fetch('http://localhost:3000/api/articlecontent', requestOptions);
    // ArticlesContent.map(item => {
    //     const requestOptions = {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(item)
    //     };
    //     fetch('http://localhost:3000/api/articlecontent', requestOptions);
    // })
}

const UploadArticles = () => (
    <div>
        <button onClick={handleClick}>Add</button>
    </div>

)

export default UploadArticles;