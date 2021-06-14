
function Movies(props){
console.log(props)
    return(
        <div>
            <p>{props.name}</p>
            <p>{props.released}</p>
            <p>{props.genre}</p>
            <p>{props.plot}</p>
        </div>
    )
}

export default Movies

// Name
// release date
// genre | actors
// plot