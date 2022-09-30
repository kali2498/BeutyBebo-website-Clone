import logo from "./logo.svg";
import "./App.css";
import AllRoutes from "./Routes/AllRoutes";
import Navbar from "./Compoents/Navbar";
import Profile from "./Compoents/Profile";
import ImageNavbar from "./Compoents/Filtercomponenets";

function App() {
  return (
    <div>
      <ImageNavbar />
      <Navbar />
      <Profile />
      <AllRoutes />
    </div>
  );
}

export default App;
