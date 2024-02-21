import { useEffect, useState } from "react";
import { petitionAnime } from "../../services/petition";

function Anime(){

    const [animes, setAnimes] = useState(null);

    useEffect(() => {
        petitionAnime().then((responseJson) => {
            setAnimes(responseJson)
        })

    },[])

    return (
        <div>
            <h1>Lista de anime</h1>
            {animes ? (
                <ul>
                    {animes.map((item) => (
                        <li key={item.mal_id}>{item.title}</li>
                    ))}
                </ul>
            ) : (
                <p>Cargando...</p>
            )}
        </div>
    );
}

export default Anime;