import ArticleList from '../../data/ArticleList'
import MarkerList from '../../data/MarkerList'

  

export default async function Marker(req, res) {
    const httpMetod = req.method;
    
    switch(httpMetod) {
        case 'GET':
            try{
                const articlesList = await ArticleList('sk');
                const sortedArticleList = articlesList.articleList.sort(
                    (a, b) => new Date(b.dateCreated) - new Date(a.dateCreated)
                );
                
                const markerList = await MarkerList('sk');
                const joinedList = sortedArticleList.concat(markerList.markerList);

                const response = joinedList.map(function(ele){
                    ele['isOpen']=false;
                    return ele;
                });

                res.status(200).json(response);
            }catch(e){
                res.status(500).json("Markers could not be retrieved");
            }
            
            break;

        default:
            res.setHeader('Allow', ['GET' ]);
            res.status(405).end('Method not allowed');
    }
}
    
