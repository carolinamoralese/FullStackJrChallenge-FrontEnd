import { useEffect, useState } from "react";
import { petitionAnime } from "../../services/petition";
import Carousel from "../../Components/Carousel/Carousel";
import AnimeList from "../../Components/AnimeList/AnimeList";


function Anime() {
  const [animes, setAnimes] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    petitionAnime().then((responseJson) => {
      setAnimes(responseJson);
    });
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
   
    <div className="container mx-auto ">
      <h1 className="text-2xl text-center font-bold mb-8 p-8">
        Anime para Todos los Gustos
      </h1>
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Buscar película..."
          value={searchTerm}
          onChange={handleSearch}
          className="px-4 py-2 mb-10 rounded-lg border"
        />
        <div className="p-2">
        </div>
      </div>

      {animes ? <Carousel animes={animes.slice(10, 20)} /> : null}
      <AnimeList animes={animes} searchTerm={searchTerm} />
    </div>
  );
}

export default Anime;
