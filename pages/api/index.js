export default async function handler(req, res) {

    const httpMetod = req.method;
    
    switch(httpMetod) {
        case 'GET':            
            res.status(200).json("Api get success");
            break;
        case 'POST':
            res.status(200).json("Api post success");
            break;

        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end('Method not allowed');
            break;
    }
}
    
