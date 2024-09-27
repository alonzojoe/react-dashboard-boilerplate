import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "@/layouts/RootLayout";
import Dashboard from "@/pages/Dashboard/Dashboard";
import SamplePage from "@/pages/SamplePages/SamplePage";
import SamplePageTwo from "@/pages/SamplePages/SamplePageTwo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="sample" element={<SamplePage />} />
          <Route path="sample-two" element={<SamplePageTwo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
