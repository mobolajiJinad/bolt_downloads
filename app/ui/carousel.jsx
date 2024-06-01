import { useEffect, useState } from "react";
import Image from "next/image";

import { shortenParagraph } from "../lib/shortenParagraph";

export default function Carousel({ results }) {
  const [page, setPage] = useState(0);
  const count = results.length;

  useEffect(() => {
    const int = setInterval(() => {
      setPage((prev) => (prev + 1 >= count ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(int);
  }, [count]);

  const handlePrevPage = () => {
    setPage((prev) => (prev - 1 < 0 ? count - 1 : prev - 1));
  };

  const handleNextPage = () => {
    setPage((prev) => (prev + 1 >= count ? 0 : prev + 1));
  };

  const overview = shortenParagraph(results[page].overview, 250);

  return (
    <main className="absolute left-0 right-0 top-0 mx-auto flex h-screen w-full md:items-center">
      <div className="absolute top-0 h-full w-full">
        <Image
          className="h-auto w-auto object-cover object-center"
          fill
          alt="Image"
          src={`https://image.tmdb.org/t/p/w780/${results[page].backdrop_path}`}
        />

        <div className="absolute left-0 top-0 h-full w-full">
          <div
            className="h-full w-full bg-black bg-opacity-40"
            style={{
              maskImage: "radial-gradient(circle, transparent, black)",
              WebkitMaskImage: "radial-gradient(circle, transparent, black)",
            }}
          ></div>
        </div>
      </div>

      <div className="absolute bottom-0 z-10 mx-auto w-full">
        <div className="h-full w-full p-6 md:bg-gradient-to-l">
          <h2 className="mb-5 text-center text-lg font-bold text-purple-300 md:text-4xl">
            {results[page].original_title}
          </h2>

          <p className="mx-auto mt-4 max-w-4xl text-center text-sm font-bold text-purple-300 md:text-lg">
            {overview}
          </p>
        </div>
      </div>

      <div
        onClick={handlePrevPage}
        className="absolute bottom-1/2 left-1 z-10 text-4xl font-bold md:left-4 lg:left-12"
      >
        <span className="inline-block cursor-pointer transition-transform hover:-translate-x-1 hover:text-violet-600 motion-reduce:transform-none">
          &lt;
        </span>
      </div>

      <div
        onClick={handleNextPage}
        className="absolute bottom-1/2 right-1 z-10 text-4xl font-bold md:right-4 lg:right-12"
      >
        <span className="inline-block cursor-pointer transition-transform hover:translate-x-1 hover:text-violet-600 motion-reduce:transform-none">
          &gt;
        </span>
      </div>
    </main>
  );
}
