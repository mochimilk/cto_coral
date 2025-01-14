import * as React from "react";

// Module imports
import Content from "../../Components/Content/Content.tsx";
import PanelLeft from "../../Components/Panels/PanelLeft.tsx";
import PanelRight from "../../Components/Panels/PanelRight.tsx";

// AppHooks
import { useAppHooks } from "../../Hooks/useAppHooks.tsx";

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
      {isRightPanelOpen && (
        <div className="panelRight" style={{ width: `${rightPanelWidth}px` }}>
          <div
            className="resize-handle-right"
            onMouseDown={handleMouseDownRight}
          />
          <PanelRight />
        </div>
      )}
    </div>
  );
};

export default Page;
