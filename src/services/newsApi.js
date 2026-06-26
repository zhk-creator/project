export const fetchNews = async () => {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${
      import.meta.env.VITE_NEWS_API_KEY
    }`
  );

  return res.json();
};