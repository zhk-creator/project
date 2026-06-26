import SelectedCategories from "../categories/SelectedCategories";
import CategoryGrid from "../categories/CategoryGrid";

const Categories = () => {
  return (
    <div className="min-h-screen bg-black px-12 py-10">
      <div className="max-w-7xl mx-auto flex gap-20">
        <div className="w-[35%]">
          <SelectedCategories />
        </div>

        <div className="w-[65%]">
          <CategoryGrid />
        </div>
      </div>
    </div>
  );
};

export default Categories;