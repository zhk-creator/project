import useCategoryStore from "../../store/categoryStore";

const SelectedCategories = () => {
  const selectedCategories =
    useCategoryStore(
      (state) => state.selectedCategories
    );

  const toggleCategory =
    useCategoryStore(
      (state) => state.toggleCategory
    );

  return (
    <>
      <h2 className="text-[#72DB73] text-4xl mb-8">
        Super app
      </h2>

      <h1 className="text-white text-5xl font-bold leading-tight mb-10">
        Choose your
        <br />
        entertainment
        <br />
        category
      </h1>

      <div className="flex flex-wrap gap-3">
        {selectedCategories.map((category) => (
          <div
            key={category}
            className="bg-[#148A08] text-white rounded-full px-4 py-2 flex items-center gap-3"
          >
            {category}

            <button
              onClick={() =>
                toggleCategory(category)
              }
              className="font-bold"
            >
              X
            </button>
          </div>
        ))}
      </div>

      {selectedCategories.length < 3 && (
        <p className="text-red-500 mt-5">
          ⚠ Minimum 3 category required
        </p>
      )}
    </>
  );
};

export default SelectedCategories;