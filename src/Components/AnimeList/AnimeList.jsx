import React from "react";
import { FaExclamationCircle } from "react-icons/fa";

function AnimeList({ animes, searchAnime }) {
  const filteredAnimes = animes
    ? animes.filter((item) => {
        return item.title.toLowerCase().includes(searchAnime.toLowerCase());
      })
    : [];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-12 lg:grid-cols-4 xl:grid-cols-5 gap-8">
      {filteredAnimes.length > 0 ? (
        filteredAnimes.map((item) => (
          <div
            key={item.mal_id}
            className="bg-gray-200 p-4  rounded-lg cursor-pointer transform transition-transform hover:scale-110"
          >
            <img
              src={item.images.webp.image_url}
              alt={item.title}
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="mt-2">
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-sm text-gray-600">{item.recommendation}</p>
            </div>
          </div>
        ))
      ) : (
        <div className="flex justify-center items-centergit">
          <FaExclamationCircle className="mr-2"/>{" "}
          <p className="text-center">No se encontraron resultados.</p>
        </div>
      )}
    </div>
  );
}

export default AnimeList;
