import { useEffect, useState } from "react";
import { petitionAnime } from "../../services/petition";

function Anime() {
  const [animes, setAnimes] = useState(null);

  useEffect(() => {
    petitionAnime().then((responseJson) => {
      setAnimes(responseJson);
    });
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl text-center font-bold mb-8 p-8">Anime para Todos los Gustos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {animes ? (
          animes.map((item) => (
            <div key={item.mal_id} className="bg-gray-200 p-4 rounded-lg cursor-pointer transform transition-transform hover:scale-110">
              <img
                src={item.images.webp.image_url}
                alt={item.title}
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="mt-2">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-sm text-gray-600">{item.synopsis}</p>
              </div>
            </div>
          ))
        ) : (
          <p>Cargando Animes...</p>
        )}
      </div>
    </div>
  );
}

export default Anime;
