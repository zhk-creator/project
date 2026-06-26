import banner from "../../assets/images/register-banner.jpg";

const RegistrationBanner = () => {
  return (
    <div className="relative h-screen">
      <img
        src={banner}
        alt="banner"
        className="w-full h-full object-cover"
      />

      <div className="absolute top-10 left-10 bg-[#5746EA] px-6 py-2 rounded-lg text-white font-bold">
        Vasavi
      </div>

      <div className="absolute bottom-12 left-10">
        <h1 className="text-white text-4xl font-bold max-w-sm">
          Discover new things on Superapp
        </h1>
      </div>
    </div>
  );
};

export default RegistrationBanner;