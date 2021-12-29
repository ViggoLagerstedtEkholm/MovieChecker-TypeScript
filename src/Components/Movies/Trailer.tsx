interface Props{
    videoID: string | undefined;
}

function Trailer({videoID}: Props){
    return <iframe
        width="900"
        height="600"
        src={`https://www.youtube.com/embed/${videoID}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
    />
}

export default Trailer;