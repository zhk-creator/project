// // import { Routes, Route } from "react-router-dom";

// // import Register from "../pages/Register";
// // import Categories from "../pages/Categories";
// // import Dashboard from "../pages/Dashboard";
// // import Movies from "../pages/Movies";

// // const AppRoutes = () => {
// //   return (
// //     <Routes>
// //       <Route path="/" element={<Register />} />
// //       <Route path="/categories" element={<Categories />} />
// //       <Route path="/dashboard" element={<Dashboard />} />
// //       <Route path="/movies" element={<Movies />} />
// //     </Routes>
// //   );
// // };

// // export default AppRoutes;

// import { Routes, Route } from "react-router-dom";
// import Register from "../pages/Register";
// import Categories from "../pages/Categories";
// import Dashboard from "../pages/Dashboard";
// import Movies from "../pages/Movies";
// import ProtectedRoute from "./ProtectedRoute";

// export default function AppRoutes() {
//   return (
//     <Routes>
//       <Route path="/" element={<Register />} />

//       <Route
//         path="/categories"
//         element={<ProtectedRoute><Categories /></ProtectedRoute>}
//       />

//       <Route
//         path="/dashboard"
//         element={<ProtectedRoute><Dashboard /></ProtectedRoute>}
//       />

//       <Route
//         path="/movies"
//         element={<ProtectedRoute><Movies /></ProtectedRoute>}
//       />
//     </Routes>
//   );
// }
// import { Routes, Route } from "react-router-dom";

// import Register from "../pages/Register";
// import Categories from "../pages/Categories";
// import Dashboard from "../pages/Dashboard";
// import Movies from "../pages/Movies";

// const AppRoutes = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Register />} />
//       <Route path="/categories" element={<Categories />} />
//       <Route path="/dashboard" element={<Dashboard />} />
//       <Route path="/movies" element={<Movies />} />
//     </Routes>
//   );
// };

// export default AppRoutes;

import { Routes, Route } from "react-router-dom";
import Register from "../pages/Register";
// import Categories from "./Categories";
import Categories from "../Categories/Categories";
import Dashboard from "../Dashboard/Dashboard";
import Movies from "../Movies/Movies";
import ProtectedRoute from "./ProtectedRoute";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Register />} />

      <Route
        path="/categories"
        element={<ProtectedRoute><Categories /></ProtectedRoute>}
      />

      <Route
        path="/dashboard"
        element={<ProtectedRoute><Dashboard /></ProtectedRoute>}
      />

      <Route
        path="/movies"
        element={<ProtectedRoute><Movies /></ProtectedRoute>}
      />
    </Routes>
  );
}