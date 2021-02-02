const FetchRandomGif = ({gif}) => {
    return (
        <div>
            {gif? 
                <div>
                    <h3>{gif.title ? gif.title : "No Title"}</h3>
                    <img src={gif.image_url} alt="gif" />
                    <p>By: {gif.username}</p>
                    {/* <button onClick={favoriteGif(gif.title)}>Favorite Me!</button> */}
                </div>
                :
                <p>Loading...</p>
            }
        </div>
    )
}

export default FetchRandomGif