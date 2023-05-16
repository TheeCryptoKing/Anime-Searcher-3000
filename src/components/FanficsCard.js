function FanficsCard ({ title, creator, image, animeName, genre, body}) {
    return (
        <article>
            <h2>{title}</h2>
            <h2>{creator}</h2>
            <image src={image} alt={animeName}></image>
            <h4>{animeName}</h4>
            <h4>{genre}</h4>
            <p>{body}</p>
        </article>
    )
}

export default FanficsCard;