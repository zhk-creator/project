const CategoryCard = ({
  category,
  image,
  color,
  selected,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`
        relative
        rounded-xl
        overflow-hidden
        cursor-pointer
        transition-all
        duration-300
        hover:scale-105
        ${
          selected
            ? "border-4 border-[#11B800]"
            : ""
        }
      `}
      style={{
        backgroundColor: color,
      }}
    >
      <h3 className="text-white p-3 font-semibold">
        {category}
      </h3>

      <img
        src={image}
        alt={category}
        className="w-full h-[120px] object-cover"
      />

      {selected && (
        <div className="absolute top-2 right-2 bg-green-500 rounded-full w-6 h-6 flex items-center justify-center">
          ✓
        </div>
      )}
    </div>
  );
};

export default CategoryCard;