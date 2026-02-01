import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import BuyerLayout from "./buyer/components/BuyerLayout";
import BuyerDashboard from "./buyer/pages/BuyerDashboard";
import DemandForm from "./buyer/pages/DemandForm";
import SupplyDemand from "./buyer/pages/SupplyDemand";
import MyDemands from "./buyer/pages/MyDemands"; // ✅ add this import


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default redirect */}
        <Route path="/" element={<Navigate to="/buyer/dashboard" />} />

        {/* Buyer Layout */}
        <Route path="/buyer" element={<BuyerLayout />}>
          <Route path="dashboard" element={<BuyerDashboard />} />
          <Route path="create-demand" element={<DemandForm />} />
          <Route path="supply-demand" element={<SupplyDemand />} />
          <Route path="my-demands" element={<MyDemands />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
