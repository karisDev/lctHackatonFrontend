import { AuthContext } from "./api/AuthContext";
import PrivateRoute from "./api/PrivateRoute";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { SignPage } from "./pages/SignPage/SignPage";
import DashBoardPage from "./pages/Dashboard/DashBoardPage";

function App() {
  document.body.classList.add("theme");
  return (
    <AuthContext.Provider value={{ user: "user", setUser: "setUser" }}>
      <Router>
        <Routes>
          <Route path="/" element={<h1>Landing</h1>} />
          <Route path="/login" element={<Navigate to="/signin" />} />
          <Route path="/register" element={<Navigate to="/signup" />} />
          <Route path="/signin" element={<SignPage />} />
          <Route path="/signup" element={<SignPage isSignup />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <DashBoardPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <h1>profile</h1>
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
