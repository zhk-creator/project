import { useEffect, useState } from "react";

const dummyNews = [
  {
    title: "AI is transforming tech industry",
    desc: "Latest updates on AI growth...",
  },
  {
    title: "SpaceX launches new rocket",
    desc: "Historic launch mission...",
  },
  {
    title: "Stock markets rise globally",
    desc: "Markets show strong recovery...",
  },
];

const NewsWidget = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % dummyNews.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white text-black rounded-2xl p-4 h-full">
      <h2 className="font-bold text-lg mb-2">
        Top News
      </h2>

      <h3 className="text-xl font-semibold">
        {dummyNews[index].title}
      </h3>

      <p className="mt-2">
        {dummyNews[index].desc}
      </p>
    </div>
  );
};

export default NewsWidget;