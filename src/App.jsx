import "./App.css";
import Button from "./components/Button";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="mt-20 flex flex-col items-center h-[20rem] justify-between">
        <Button>New Patient</Button>
        <Button>Patient List</Button>
        <Button>Drug List</Button>
      </main>
      <Footer />
    </div>
  );
}

export default App;
