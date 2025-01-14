import React, { useState } from "react";
import "../../../Styles/App.css";
import Overlay from "../../../Components/Overlay/Overlay.tsx"; // Import the Overlay component
import {
  Button,
  Tooltip,
  Toolbar,
  ToolbarButton,
  Divider,
  Tag,
  Avatar,
  TabList,
  Tab,
} from "@fluentui/react-components";

import {
  FolderOpen,
  Link,
  Open,
  OrganizationHorizontal,
} from "../../../Imports/bundleIcons.tsx";
import { useContentHooks } from "../../../Hooks/useContentHooks.tsx";
import CodeBlock from "../../../Components/CodeBlock/CodeBlock.tsx";
import ContentToolbar from "../../../Hooks/useContentToolbarHooks.tsx";
import "../../../Modules/Content/Content.css";
import { Header } from "../../../Hooks/useHeaderHooks.tsx";
import MsftLogo from "../../../Imports/MsftColor.svg";

// Utility function to extract domain from URL
const getDomain = (url: string) => {
  try {
    const { hostname } = new URL(url);
    return hostname;
  } catch (error) {
    console.error("Invalid URL:", url);
    return url;
  }
};

const sampleHeader = `
<Header
  avatarSrc={MsftLogo} // Logo or image
  title="Microsoft" // Site title
  subtitle="CKM" // Optional subtitle
  badge="v3" // Optional badge
/>
`;

const sampleHeaderProps = `
import {
  TabList,
  Tab,
  Avatar,
} from "@fluentui/react-components";

<Header
  avatarSrc={MsftLogo} // Logo or image
  title="Microsoft" // Site title
  subtitle="CKM" // Optional subtitle
  badge="v3" // Optional badge
>

    // For tablists, search, etc.
    <div className="headerNav"> 
      <TabList>
      <Tab>Home</Tab>
      <Tab>Dashboard</Tab>
      </TabList>
    </div>

    // For profiles and global tools
    <div className="headerTools">
      <Avatar
        color="colorful"
        name="Pepper Hayuki"
        aria-label="Person"
      />
    </div>

</Header>
`;

const sampleHeaderTree = `
src/
├── assets/                     # Static assets like images, fonts, etc.
│   ├── images/
│   │   ├── logo.png
│   │   ├── background.jpg
│   │   └── icons/
│   │       └── close-icon.svg
│   └── fonts/
│       ├── OpenSans-Regular.ttf
│       └── OpenSans-Bold.ttf
│
├── components/                 # Reusable React components
│   ├── Header/
│   │   ├── Header.tsx
│   │   ├── Header.test.tsx
│   │   └── Header.css
│   ├── Footer/
│   │   ├── Footer.tsx
│   │   ├── Footer.test.tsx
│   │   └── Footer.css
│   ├── Overlay/
│   │   ├── Overlay.tsx
│   │   ├── Overlay.test.tsx
│   │   └── Overlay.css
│   ├── CodeBlock/
│   │   ├── CodeBlock.tsx
│   │   ├── CodeBlock.test.tsx
│   │   └── prism-material-oceanic.css
│   └── Button.tsx
│
├── hooks/                      # Custom React hooks
│   ├── useContentHooks.ts
│   └── useWindowDimensions.ts
│
├── pages/                      # Page-level components (routes)
│   ├── HomePage/
│   │   ├── HomePage.tsx
│   │   ├── HomePage.test.tsx
│   │   └── HomePage.css
│   ├── AboutPage/
│   │   ├── AboutPage.tsx
│   │   ├── AboutPage.test.tsx
│   │   └── AboutPage.css
│   └── NotFoundPage/
│       ├── NotFoundPage.tsx
│       └── NotFoundPage.css
│
├── styles/                     # Global styles and CSS variables
│   ├── index.css
│   └── theme.css
│
├── utils/                      # Utility functions and helpers
│   ├── formatDate.ts
│   ├── debounce.ts
│   └── api.ts
│
├── App.tsx                     # Main app component
├── index.tsx                   # React entry point
├── react-app-env.d.ts          # TypeScript environment declarations
├── reportWebVitals.ts          # Performance monitoring
└── setupTests.ts               # Jest setup for testing

`;

interface ContentProps {
  isPanelOpen: boolean;
  togglePanel?: () => void;
  isRightPanelOpen: boolean;
  toggleRightPanel?: () => void;
}

const ContentDevelopers: React.FC<ContentProps> = ({
  isPanelOpen,
  togglePanel,
  isRightPanelOpen,
  toggleRightPanel,
}) => {
  const { commandKey } = useContentHooks({ togglePanel, toggleRightPanel });
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const toggleOverlay = () => {
    setIsOverlayVisible(!isOverlayVisible);
  };

  return (
    <div className="contentContainer">
      <ContentToolbar
        panelConfig="left" // If your page is only using one panel, define it here with "left" or "right". Removing this defaults to both.
        isPanelOpen={isPanelOpen}
        togglePanel={togglePanel}
        isRightPanelOpen={isRightPanelOpen}
        toggleRightPanel={toggleRightPanel}
        commandKey={commandKey}
      >
        <Toolbar>
          <ToolbarButton
            icon={<OrganizationHorizontal />}
            onClick={toggleOverlay}
          >
            Find in tree
          </ToolbarButton>
          <ToolbarButton icon={<Open />}>Open in GitHub</ToolbarButton>
        </Toolbar>

        <Toolbar>
          <ToolbarButton icon={<Link />}></ToolbarButton>
        </Toolbar>
      </ContentToolbar>

      <div className="content">
        <div style={{ width: "100%", maxWidth: "728px", margin: "0 auto" }}>
          <h1>Header</h1>
          <Tag shape="circular" appearance="outline" icon={<FolderOpen />}>
            src/Components/Header/Header.tsx
          </Tag>

          <br />
          <br />
          {/* Example */}
          <div
            style={{
              padding: "48px",
              backgroundColor: "var(--colorNeutralBackground4)",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                backgroundColor: "var(--colorNeutralBackground1)",
                width: "100%",
              }}
            >
              <Header
                avatarSrc={MsftLogo} //
                title="Microsoft"
                subtitle="CKM"
                badge="v3"
              >
                {/* <div className="headerNav">
                  <TabList>
                    <Tab value="tab1">Home</Tab>
                    <Tab value="tab2">Dashboard</Tab>
                
         
                  </TabList>
                </div> */}

                {/* Tools Section */}
                {/* <div className="headerTools">
                  <Avatar
                    color="colorful"
                    name="Pepper Hayuki"
                    aria-label="App"
                    className="clickable-avatar"
                  />
                </div> */}
              </Header>
            </div>
          </div>
<br/>
          <p>
            {" "}
            The <code className="span">Header</code> component wraps the primary
            header structure. It includes properties to set branding specific to
            your app, titles, and optional badges.{" "}
          </p>
          <h3>Giving your app a logo, site title, and more</h3>
          <ul>
            <li>
              <code className="span">avatarSrc</code>: Specifies the source URL
              for the avatar (logo or image).
            </li>
            <li>
              <code className="span">title</code>: The main title for the header
              (e.g., Microsoft).
            </li>
            <li>
              <code className="span">subtitle</code>: An optional secondary
              title for app names, product, etc. (e.g., CKM)
            </li>
            <li>
              <code className="span">badge</code>: An optional label (e.g.,
              "v3") for quick identification.
            </li>
          </ul>

          <CodeBlock
            code={sampleHeader.trim()}
            fileName="Header"
            language="tsx"
          />

          <p> Undefined props will adjust the Header accordingly.</p>

          <br />
          <br />
          <Divider />

          <h3>Header Navigation and Tools</h3>

                    {/* Example */}
                    <div
            style={{
              padding: "48px",
              backgroundColor: "var(--colorNeutralBackground4)",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                backgroundColor: "var(--colorNeutralBackground1)",
                width: "100%",
              }}
            >
              <Header
                avatarSrc={MsftLogo} //
                title="Microsoft"
                subtitle="CKM"
                badge="v3"

              >
                <div className="headerNav">
                  <TabList>
                    <Tab value="tab1">Home</Tab>
                    <Tab value="tab2">Dashboard</Tab>
                
         
                  </TabList>
                </div>

                {/* Tools Section */}
                <div className="headerTools">
                  <Avatar
                    color="colorful"
                    name="Pepper Hayuki"
                    aria-label="App"
                    className="clickable-avatar"
                  />
                </div>
              </Header>
            </div>
          </div>
          <p>
            The header is divided into two main sections: navigation{" "}
            <code className="span">(headerNav)</code> and tools{" "}
            <code className="span">(headerTools)</code>. They can be placed in
            between the <code className="span">Header</code> tags. You can
            choose to use both or neither of the sections.
            <br />
            <br />
            Within the respective section is where you call in Fluent
            components, e.g., &nbsp;
            <Tooltip
              content={getDomain(
                "https://react.fluentui.dev/?path=/docs/components-tooltip--docs"
              )}
            >
              <a
                href="https://react.fluentui.dev/?path=/docs/components-tooltip--docs"
                target="_blank"
              >
                TabList ↗
              </a>
            </Tooltip>
            &nbsp; for <code className="span">headerNav</code> or&nbsp;
            <Tooltip
              content={getDomain(
                "https://react.fluentui.dev/?path=/docs/components-avatar--docs"
              )}
            >
              <a
                href="https://react.fluentui.dev/?path=/docs/components-avatar--docs"
                target="_blank"
              >
                Avatar ↗
              </a>
            </Tooltip>
            &nbsp; for <code className="span">headerTools</code>.
          </p>

          <CodeBlock
            code={sampleHeaderProps.trim()}
            fileName="Header"
            language="tsx"
          />
          <br />
          <div className="infoTile">
            <img
              src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Microbe.png"
              alt="Microbe"
              width="32"
              height="32"
            />
            <p>Get a full list of components at react.fluentui.dev</p>
            <a
              href="https://github.com/mochimilk/cto_eden/fork"
              target="_blank"
            >
              <Button appearance="primary">Visit Fluent 2</Button>
            </a>
          </div>

          <Overlay
            isVisible={isOverlayVisible}
            onClose={toggleOverlay}
            title="File tree"
          >
            <CodeBlock code={sampleHeaderTree.trim()} language="bash" />
          </Overlay>
        </div>
      </div>
    </div>
  );
};

export default ContentDevelopers;
