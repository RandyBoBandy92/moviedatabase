const formatMovieDate = (rawMovieDate) => {
  const movieDateArray = rawMovieDate.split("-");
  const [year, month, day] = movieDateArray;
  let date = new Date(`${month} ${day} ${year}`);
  let options = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return date.toLocaleDateString("en-us", options);
};

const getTrailerKey = (videos) => {
  for (let index = 0; index < videos.length; index++) {
    const video = videos[index];
    if (video.site === "YouTube" && video.type === "Trailer") {
      return video.key;
    }
  }
};

const generateTextExcerpt = (text, maxWords) => {
  let textExcerpt = "";
  // turn the text into an array
  const textArray = text.split(" ");
  // slice the array, if it is larger than maxWords
  textExcerpt = text;
  if (textArray.length > maxWords) {
    const slicedArray = textArray.slice(0, maxWords - 1);
    textExcerpt = slicedArray.join(" ") + "...";
  }
  return textExcerpt;
};

const generateRandomIndex = (arrayLength) => {
  // generate a random number between 0 and the total length of the array
  const index = Math.floor(Math.random() * arrayLength);
  return index;
};

const sanitizeVideoData = (videos) => {
  return videos.filter(video => video.backdrop_path !== null && video.poster_path !== null)
}

export {
  formatMovieDate,
  getTrailerKey,
  generateTextExcerpt,
  generateRandomIndex,
  sanitizeVideoData,
};
