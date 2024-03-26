import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function AppLayout() {
  return (
    <div>
      <Header />
      <div className="overflow-scroll">
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
