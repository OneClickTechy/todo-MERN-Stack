import { Route, Routes } from "react-router";
import MainLayout from "./Layouts/MainLayout";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ProtectRouter from "./components/protectRouter/ProtectRouter";
import CreateTask from "./pages/CreateTask";
import Logout from "./pages/Logout";
import { useGetmeQuery } from "./app/services/userSlicer";

const App = () => {
  
  useGetmeQuery();

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route
            path="/task/create"
            element={
              <ProtectRouter>
                <CreateTask />
              </ProtectRouter>
            }
          />
        </Route>

        <Route path="*" element={<h1>404 Page Not Found</h1>} />
      </Routes>
    </>
  );
};

export default App;
