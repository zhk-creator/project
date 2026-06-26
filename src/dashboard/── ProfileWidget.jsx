import useUserStore from "../../store/userStore";

const ProfileWidget = () => {
  const user = useUserStore((state) => state.user);

  const categories = JSON.parse(
    localStorage.getItem("categories") || "[]"
  );

  return (
    <div className="bg-[#5746EA] p-6 rounded-2xl h-full">
      <div className="flex gap-4 items-center">
        <div className="w-16 h-16 rounded-full bg-white" />
        
        <div>
          <h2 className="text-xl font-bold">
            {user?.name}
          </h2>
          <p>{user?.email}</p>
          <p>{user?.username}</p>
          <p>{user?.mobile}</p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {categories.map((c) => (
          <span
            key={c}
            className="bg-black px-3 py-1 rounded-full text-sm"
          >
            {c}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProfileWidget;