import * as React from "react";
import { useEffect } from "react";
import Header from "./Components/Header/Header.tsx"; // Import Header
import "./Styles/App.css";
import "./Modules/Panels/Panels.css";
import "./Modules/Content/Content.css"
import HomePage from "./Pages/HomePage.tsx";
import DevelopersPage from "./Pages/Developers/DevelopersPage.tsx";
import DesignersPage from "./Pages/DesignersPage.tsx";
import ProductManagersPage from "./Pages/ProductManagersPage.tsx";
import NotFound from "./Pages/NotFound.tsx";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

type AppProps = {
  isDarkMode: boolean; // Prop to control dark mode
  toggleTheme: () => void; // Function to toggle dark mode
};

const App: React.FC<AppProps> = ({ isDarkMode, toggleTheme }) => {
  // const { showHotkeyOverlay, modifierKey } = useAppHooks();

  // Apply or remove the "dark-mode" class on the body element based on isDarkMode
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <div className="app-container">
      <Router>
      
        <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />

        {/* Main Layout */}
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<HomePage />} /> {/* Default route */}
            <Route path="/developers/*" element={<DevelopersPage />} />
            <Route path="/designers/*" element={<DesignersPage />} />
            <Route path="/product-managers/*" element={<ProductManagersPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </Router>

      {/* Hotkey Overlay */}
      {/* {showHotkeyOverlay && (
        <div className="hotkey-overlay">
          <Body1>System</Body1>
          <div>
            <Tag appearance="outline">{modifierKey}</Tag> +{" "}
            <Tag appearance="outline">D</Tag> : Theme
          </div>
          <Body1>View</Body1>
          <div>
            <Tag appearance="outline">{modifierKey}</Tag> +{" "}
            <Tag appearance="outline">shift</Tag> +{" "}
            <Tag appearance="outline">←</Tag> : Left panel
          </div>
          <div>
            <Tag appearance="outline">{modifierKey}</Tag> +{" "}
            <Tag appearance="outline">shift</Tag> +{" "}
            <Tag appearance="outline">→</Tag> : Right panel
          </div>
        </div>
      )} */}
    </div>
  );
};

export default App;
