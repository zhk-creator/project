import { useNavigate } from "react-router-dom";
import useCategoryStore from "../../store/categoryStore";
import CategoryCard from "../Categories/CategoryCard";

const categories = [
  {
    title: "Action",
    color: "#FF5209",
    image: "/images/action.jpg",
  },
  {
    title: "Drama",
    color: "#7B4BDB",
    image: "/images/drama.jpg",
  },
  {
    title: "Romance",
    color: "#148A08",
    image: "/images/romance.jpg",
  },
  {
    title: "Thriller",
    color: "#84C2FF",
    image: "/images/thriller.jpg",
  },
  {
    title: "Western",
    color: "#902500",
    image: "/images/western.jpg",
  },
  {
    title: "Horror",
    color: "#7358FF",
    image: "/images/horror.jpg",
  },
  {
    title: "Fantasy",
    color: "#FF4ADE",
    image: "/images/fantasy.jpg",
  },
  {
    title: "Music",
    color: "#E61E32",
    image: "/images/music.jpg",
  },
  {
    title: "Fiction",
    color: "#6CD061",
    image: "/images/fiction.jpg",
  },
];

const CategoryGrid = () => {
  const navigate = useNavigate();

  const selectedCategories =
    useCategoryStore(
      (state) => state.selectedCategories
    );

  const toggleCategory =
    useCategoryStore(
      (state) => state.toggleCategory
    );

  const handleNext = () => {
    if (selectedCategories.length < 3) return;

    localStorage.setItem(
      "categories",
      JSON.stringify(selectedCategories)
    );

    navigate("/dashboard");
  };

  return (
    <>
      <div className="grid grid-cols-3 gap-6">
        {categories.map((item) => (
          <CategoryCard
            key={item.title}
            category={item.title}
            image={item.image}
            color={item.color}
            selected={selectedCategories.includes(
              item.title
            )}
            onClick={() =>
              toggleCategory(item.title)
            }
          />
        ))}
      </div>

      <div className="flex justify-end mt-8">
        <button
          onClick={handleNext}
          className="bg-[#148A08] text-white px-8 py-3 rounded-full"
        >
          Next Page
        </button>
      </div>
    </>
  );
};

export default CategoryGrid;