import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Dashboard from "./pages/Dashboard";
import TicketPage from "./pages/TicketPage";
const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/ticket" element={<TicketPage />}></Route>
          <Route
            path="/ticket/:id"
            element={<TicketPage editMode={true} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
