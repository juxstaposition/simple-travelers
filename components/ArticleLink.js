import Link from 'next/link';

function ArticleLink(props) {
    
    if(props.type === "external"){
        return (
            <a href={props.url} target="_blank" rel="noopener noreferrer">{props.text}</a>
        )
    }
    else{
        return(
            <Link className="inline-link" href={props.url} passHref>
                {props.text}
            </Link>
        )
    }
}

export default ArticleLink;