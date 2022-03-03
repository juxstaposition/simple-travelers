
import parse from 'html-react-parser';

function ArticleSimpleText(props) {
    return(
        <>
        {parse(props.text)}
        </> 
    )
}

export default ArticleSimpleText;