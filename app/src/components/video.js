function VedioList ({videos, emptyHeading}) {
    const count = videos.lenght;
    let heading = emptyHeading;
    if(count> 0) {
        const noun = count > 1? 'Videos' : 'Video';
        heading = count + ' ' + noun;
    }
    return(
        <section>
            <h2>{heading}</h2>
            {videos.map(video =>
            <video key= {video.id} video ={video} / >
                )}
        </section>
    );
}

export default VedioList;