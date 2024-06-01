const axios = require("axios");

export async function getUpcomingMovies() {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error("Error details:", error);
    throw new Error("Failed to fetch upcoming movies");
  }
}
