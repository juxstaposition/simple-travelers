function PageHeader(props) {
    return(
        <h2 className={props.class} >
            {props.text}
        </h2>
    )
}

export default PageHeader;