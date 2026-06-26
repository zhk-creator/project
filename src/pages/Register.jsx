import RegistrationBanner from "../registrations/RegistrationBanner";
import RegistrationForm from "../registration/RegistrationForm";

const Register = () => {
  return (
    <div className="min-h-screen bg-black flex">
      <div className="w-1/2">
        <RegistrationBanner />
      </div>

      <div className="w-1/2 flex justify-center items-center">
        <RegistrationForm />
      </div>
    </div>
  );
};

export default Register;