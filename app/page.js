"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { getUpcomingMovies } from "./lib/data";
import Carousel from "./ui/carousel";

export default function Home() {
  const pathname = usePathname();
  const [results, setResults] = useState(null);

  useEffect(() => {
    getUpcomingMovies()
      .then((data) => {
        setResults(data.results);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  }, []);

  return (
    <div>
      {results ? <Carousel results={results} /> : <div>Loading...</div>}

      <div className="mt-screen h-screen">Other mays</div>

      <footer className="mt-5 border-t border-t-gray-600 py-4">
        <h1>Bolt downloads</h1>
      </footer>
    </div>
  );
}
