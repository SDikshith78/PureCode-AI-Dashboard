import Dashboard from "./pages/dashboard/dashboard";
import Topbar from "../src/components/TopbarAdmins/index";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";

function App() {
  return (
    <div className="mt-4">
      <Topbar />
      <Navbar />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
