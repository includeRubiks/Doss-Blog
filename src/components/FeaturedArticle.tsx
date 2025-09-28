interface FeaturedArticleProps{
    articletxtfile: string;
    articleimgfile: string;
    articleimgalttext: string;
    articletitle: string;
    imgwidth: string;
    imgheight: string;
    imgcredit: string;
}

function FeaturedArticle(props: FeaturedArticleProps){
    return(
    <div className="text-center mx-5" data-bs-theme="dark">
        <h1>{props.articletitle}</h1>
        <img src={props.articleimgfile} alt={props.articleimgalttext} width={props.imgwidth} height={props.imgheight}/>
        <p>Credit: {props.imgcredit}</p>
        <hr/>
        <p>{props.articletxtfile}</p>
        <hr/>
    </div>
    );
}

export default FeaturedArticle