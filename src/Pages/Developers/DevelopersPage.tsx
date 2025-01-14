import * as React from "react";
import ContentDevelopersInstallation from "./Content/ContentDevelopers.tsx";
import PanelLeft from "./PanelLeftDevelopers.tsx";
import PanelRight from "../../Modules/Panels/PanelRight.tsx";
import ContentDevelopersSupport from "./Content/ContentDevelopersSupport.tsx";
import ContentDevelopersDevmode from "./Content/ContentDevelopersDevmode.tsx";
import ContentDevelopersLabs from "./Content/ContentDevelopersLabs.tsx";
import ContentDevelopersRouting from "./Content/ContentDevelopersRouting.tsx";
import ContentDevelopersHeader from "./Content/ContentDevelopersHeader.tsx";
import ContentDevelopersPanels from "./Content/ContentDevelopersPanels.tsx";
import ContentDevelopersContent from "./Content/ContentDevelopersContent.tsx";
import { useAppHooks } from "../../Hooks/useAppHooks.tsx";
import { Routes, Route } from "react-router-dom";

const routeConfigs = [
  {
    path: "installation",
    component: ContentDevelopersInstallation,
  },
  {
    path: "devmode",
    component: ContentDevelopersDevmode,
  },
  {
    path: "support",
    component: ContentDevelopersSupport,
  },
  {
    path: "labs",
    component: ContentDevelopersLabs,
  },
  {
    path: "routing",
    component: ContentDevelopersRouting,
  },
  {
    path: "header",
    component: ContentDevelopersHeader,
  },
  {
    path: "panels",
    component: ContentDevelopersPanels,
  },
  {
    path: "content",
    component: ContentDevelopersContent,
  },
];

const Layout: React.FC = () => {
  const {
    isPanelOpen,
    panelWidth,
    togglePanel,
    handleMouseDownLeft,
    isRightPanelOpen,
    rightPanelWidth,
    toggleRightPanel,
    handleMouseDownRight,
  } = useAppHooks();

  return (
    <div className="layout" style={{ display: "flex" }}>
      {/* 📌 PanelLeft setup */}
      {isPanelOpen && (
        <div className="panelLeft" style={{ width: `${panelWidth}px` }}>
          <PanelLeft />
          <div
            className="resize-handle-left"
            onMouseDown={handleMouseDownLeft}
          />
        </div>
      )}

      {/* 📌 Content setup */}
      <div className="contentContainer" style={{ flexGrow: 1 }}>
        <Routes>
          {routeConfigs.map(({ path, component: Component }) => (
            <Route
              key={path}
              path={path}
              element={
                <Component
                  isPanelOpen={isPanelOpen}
                  togglePanel={togglePanel}
                  isRightPanelOpen={isRightPanelOpen}
                  toggleRightPanel={toggleRightPanel} // Right toggle is active
                />
              }
            />
          ))}
        </Routes>
      </div>

      {/*📌 Below is the setup for panelRight.
       ***To populate its contents, go to ./src/Modules/PanelRight.tsx */}

      {/* {isRightPanelOpen && (
        <div className="panelRight" style={{ width: `${rightPanelWidth}px` }}>
          <div
            className="resize-handle-right"
            onMouseDown={handleMouseDownRight}
          />
          <PanelRight />
        </div>
      )} */}
    </div>
  );
};

export default Layout;
