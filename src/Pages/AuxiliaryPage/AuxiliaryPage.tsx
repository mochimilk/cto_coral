//This page is dedicated to creating layouts by adding or removing PanelLeft and/or PanelRight.
//When pulling in new Panels or Content components, it's recommended you copy it from the Components folder and create a dedicated folder for your Page.
//See DefaultPage's folder structure and DefaultPage.tsx panel/content imports.

import * as React from "react";

// Component imports
import Content from "./AuxiliaryPageContent.tsx";
import PanelLeft from "./AuxiliaryPagePanelLeft.tsx";
import PanelRight from "./AuxiliaryPagePanelRight.tsx";

// AppHooks
import { useAppHooks } from "../../Hooks/useAppHooks.tsx";

// https://mochimilk.github.io/cto_coral_docs/index.html#/developers/panels

const Page: React.FC = () => {
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
      {/* PanelLeft
       ** To populate its contents, go to ./src/Modules/PanelLeft.tsx */}
      {isPanelOpen && (
        <div className="panelLeft" style={{ width: `${panelWidth}px` }}>
          <PanelLeft />
          <div
            className="resize-handle-left"
            onMouseDown={handleMouseDownLeft}
          />
        </div>
      )}

      {/* Content
       ** To populate its contents, go to ./src/Modules/DefaultPageContent.tsx */}
      <div className="contentContainer" style={{ flexGrow: 1 }}>
        <Content
          isPanelOpen={isPanelOpen}
          togglePanel={togglePanel}
          isRightPanelOpen={isRightPanelOpen}
          toggleRightPanel={toggleRightPanel}
        />
      </div>

      {/* PanelRight
       ** To populate its contents, go to ./src/Modules/PanelRight.tsx */}
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

export default Page;
