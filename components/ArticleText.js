
import TextRenderer from "./TextRenderer";

function ArticleText(props) {
    return(
        <p className={props.className}>
            {props.children.map((data,idx) => TextRenderer(data,idx))}
        </p>
    )
}

export default ArticleText;