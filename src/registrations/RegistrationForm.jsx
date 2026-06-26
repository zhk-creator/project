import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useUserStore from "../../store/userStore";

const RegistrationForm = () => {
  const navigate = useNavigate();
  const setUser = useUserStore((state) => state.setUser);

  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    accepted: false,
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim())
      newErrors.name = "Name is required";

    if (!form.username.trim())
      newErrors.username = "Username is required";

    if (!form.email.trim())
      newErrors.email = "Email is required";

    if (
      form.email &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    ) {
      newErrors.email = "Invalid email";
    }

    if (!form.mobile.trim())
      newErrors.mobile = "Mobile is required";

    if (
      form.mobile &&
      !/^[0-9]{10}$/.test(form.mobile)
    ) {
      newErrors.mobile =
        "Mobile should be 10 digits";
    }

    if (!form.accepted) {
      newErrors.accepted =
        "Please accept terms";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    setUser(form);

    localStorage.setItem(
      "user",
      JSON.stringify(form)
    );

    navigate("/categories");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[400px]"
    >
      <h1 className="text-[#72DB73] text-4xl mb-2">
        Super app
      </h1>

      <p className="text-white mb-8">
        Create your new account
      </p>

      <input
        type="text"
        placeholder="Name"
        value={form.name}
        onChange={(e) =>
          setForm({
            ...form,
            name: e.target.value,
          })
        }
        className="w-full p-3 bg-[#292929] text-white rounded mb-2"
      />

      {errors.name && (
        <p className="text-red-500 mb-2">
          {errors.name}
        </p>
      )}

      <input
        type="text"
        placeholder="User Name"
        value={form.username}
        onChange={(e) =>
          setForm({
            ...form,
            username: e.target.value,
          })
        }
        className="w-full p-3 bg-[#292929] text-white rounded mb-2"
      />

      {errors.username && (
        <p className="text-red-500 mb-2">
          {errors.username}
        </p>
      )}

      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) =>
          setForm({
            ...form,
            email: e.target.value,
          })
        }
        className="w-full p-3 bg-[#292929] text-white rounded mb-2"
      />

      {errors.email && (
        <p className="text-red-500 mb-2">
          {errors.email}
        </p>
      )}

      <input
        type="text"
        placeholder="Mobile"
        value={form.mobile}
        onChange={(e) =>
          setForm({
            ...form,
            mobile: e.target.value,
          })
        }
        className="w-full p-3 bg-[#292929] text-white rounded mb-2"
      />

      {errors.mobile && (
        <p className="text-red-500 mb-2">
          {errors.mobile}
        </p>
      )}

      <div className="flex items-center gap-2 mb-2">
        <input
          type="checkbox"
          checked={form.accepted}
          onChange={(e) =>
            setForm({
              ...form,
              accepted: e.target.checked,
            })
          }
        />

        <label className="text-gray-400 text-sm">
          Share my registration data
        </label>
      </div>

      {errors.accepted && (
        <p className="text-red-500 mb-2">
          {errors.accepted}
        </p>
      )}

      <button
        type="submit"
        className="w-full bg-[#72DB73] text-black py-3 rounded-full font-bold mt-4"
      >
        SIGN UP
      </button>
    </form>
  );
};

export default RegistrationForm;