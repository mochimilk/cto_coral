import React from "react";
import "../../../Styles/App.css";
import {
  Body1Strong,
  Button,
  Tooltip,
  Toolbar,
  ToolbarButton,
  Menu,
  MenuTrigger,
  MenuPopover,
  MenuList,
  MenuItem,
  Divider,
  Table,
  TableHeader,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  TableCellLayout,
  Avatar,
} from "@fluentui/react-components";
import { MoreHorizontalRegular } from "@fluentui/react-icons";
import { PanelLeftContract, PanelLeftExpand } from "../../../Imports/bundleIcons.tsx";
import { useContentHooks } from "../../../Hooks/useContentHooks.tsx";
import CodeBlock from "../../../Components/CodeBlock/CodeBlock.tsx";

interface ContentProps {
  isPanelOpen: boolean;
  togglePanel?: () => void; // Optional to conditionally render left toggle
}

const ContentDevelopers: React.FC<ContentProps> = ({
  isPanelOpen,
  togglePanel,
}) => {
  const { commandKey } = useContentHooks({ togglePanel });
  const sampleRouting = `
import { HashRouter as Router, Navigate } from "react-router-dom";
// or
import { BrowserRouter as Router, Navigate } from "react-router-dom";
`;
  const items = [
    {
      file: { label: "Hosting Environment" },
      author: {
        label: "Static hosting (e.g., GitHubPages",
      },
      lastUpdated: { label: "Server with routing support", timestamp: 1 },
    },
    {
      file: { label: "URL Cleanliness" },
      author: { label: "Less Clean (/#/route)" },
      lastUpdated: { label: "Clean (/route)", timestamp: 2 },
    },
    {
      file: { label: "SEO Importance" },
      author: { label: "Low" },
      lastUpdated: { label: "High" },
    },
    {
      file: { label: "Configuration Complexity" },
      author: { label: "Minimal" },
      lastUpdated: { label: "Higher" },
    },

    {
      file: { label: "404 Errors" },
      author: { label: "No server redirects needed" },
      lastUpdated: { label: "Requires server configuration" },
    },

    {
      file: { label: "App Complexity" },
      author: { label: "Simple, lightweight apps" },
      lastUpdated: { label: "Complex, modern apps" },
    },
  ];

  const columns = [
    { columnKey: "file", label: "Criteria" },
    { columnKey: "author", label: "HashRouter" },
    { columnKey: "lastUpdated", label: "BrowserRouter" },
  ];

  return (
    <div className="contentContainer">
      {/*📌 Below is the setup for the content toolbar.
       ***You may remove this if your app doesn't need a toolbar. */}

      <div className="panelHeader">
        <div className="headerTitleGroup">
          {togglePanel && ( // Hide left toggle if togglePanel is not provided
            <Tooltip content={`${commandKey} + ←`} relationship="label">
              <Button
                icon={isPanelOpen ? <PanelLeftContract /> : <PanelLeftExpand />}
                onClick={togglePanel}
                appearance="subtle"
              />
            </Tooltip>
          )}
          <Body1Strong style={{ color: "var(--colorNeutralForeground2)" }}>
            Routing
          </Body1Strong>
        </div>

        <Toolbar>
          <Menu>
            <MenuTrigger>
              <ToolbarButton
                aria-label="More"
                icon={<MoreHorizontalRegular />}
              />
            </MenuTrigger>
            <MenuPopover>
              <MenuList>
                <MenuItem>New </MenuItem>
                <MenuItem>New Window</MenuItem>
                <MenuItem disabled>Open File</MenuItem>
                <MenuItem>Open Folder</MenuItem>
              </MenuList>
            </MenuPopover>
          </Menu>
        </Toolbar>
      </div>

      {/*📌 Below is the setup for Content.
       ***You can import just about anything into className"content" and it should show up in the content panel
       ***Dependencies for .md files and react-markdown are preinstalled.
       ***Don't forget call your import above!
       ***/}

      <div className="content">
        <div style={{ width: "100%", maxWidth: "728px", margin: " 0 auto" }}>
          <h1>Routing</h1>

          <h2>Default Routing</h2>
          <p>
            The out-of-box configuration for Coral uses HashRouting. If the app
            you are building is not hosted on a static site generator (e.g.,
            GitHub Pages) use BrowserRouter for a modern apporach.
          </p>
          <p>
            If you are hosting on a site that allows server routing, change{" "}
            <code className="span">HashRouter</code> to{" "}
            <code className="span">BrowserRouter</code> in your{" "}
            <code className="span">App.tsx</code> imports:
          </p>
          <CodeBlock code={sampleRouting.trim()} fileName="App" language="tsx" />

          <h3>Why routing?</h3>
          <p>
            Coral is designed with scalability in mind. All modular components
            that are reused throught each app are given it's own Typescript
            file, allowing developers to use them dynamically to their specific
            needs.
          </p>

          <br />
          <div className="infoTile">
            <img
              src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Coral.png"
              alt="Coral"
              width="32"
              height="32"
            />
            <p>
              Coral Docs is hosted on GitHub Pages and is routed with
              HashRouter.
            </p>
          </div>

          <Divider />
          <br />

          <h2>HashRouter vs BrowserRouter </h2>
          <p>
            The decision between using HashRouter and BrowserRouter in React (or
            similar frameworks) depends on your application's requirements and
            hosting environment. Each has its own strengths and weaknesses.
            Here's a detailed comparison to help you decide which is best for
            your use case:
          </p>
          <br />

          <ol>
            <li>
              <h3>HashRouter</h3>
              HashRouter uses the fragment identifier (
              <code className="span">#</code>) in the URL to manage routes, like{" "}
              <code className="span">https://example.com/#/home</code>.
              <h4>How It Works</h4> The URL after the{" "}
              <code className="span">#</code> is not sent to the server. The
              browser only processes the hash part, and the client-side router
              takes over.
              {/* <h4>Pros</h4>
              <ul>
                <li>
                  No Server-Side Support Needed: Works out of the box for static
                  hosting (e.g., GitHub Pages, Netlify) since servers ignore the
                  hash portion of the URL.
                </li>
                <li>
                  Avoids 404 Errors: Refreshing the page or navigating directly
                  to a route never results in a 404 because the server only sees
                  the base path.
                </li>
                <li>
                  Simpler Configuration: You don’t need to set up custom server
                  redirects (e.g., for GitHub Pages or other static hosting).
                </li>
              </ul>
              <h4>Cons</h4>
              <ul>
                <li>
                  Less Clean URLs: URLs include a #, which may look less
                  professional or polished (https://example.com/#/home vs
                  https://example.com/home).
                </li>
                <li>
                  SEO Limitations: Search engines may treat hash-based URLs
                  differently or less effectively index them (though modern
                  search engines are better at this).
                </li>
                <li>
                  Legacy Look: Hash-based routing feels a bit dated compared to
                  modern browser APIs.
                </li>
              </ul> */}
              <h4>Best Use Case</h4>
              <ul>
                <li>
                  Applications hosted on static sites like GitHub Pages, which
                  don’t support dynamic server-side routing.
                </li>
                <li>
                  When avoiding 404 errors is critical, and you don’t have
                  server-side control.
                </li>
                <li>
                  Lightweight projects or prototypes where simplicity is
                  preferred over URL cleanliness.
                </li>
              </ul>
            </li>
          </ol>

          <br />

          <ol>
            <li>
              <h3>BrowserRouter</h3>
              BrowserRouter uses the HTML5 <code className="span">
                History
              </code>{" "}
              API to manage routes, like{" "}
              <code className="span">https://example.com/home</code>.
              <h4>How It Works</h4>
              Routes are part of the actual URL (not the hash). When a route is
              accessed, the browser sends a request to the server, and the
              server needs to handle it (typically by serving the same
              index.html).
              {/* <h4>Pros</h4>
              <ul>
                <li>
                  Clean, Modern URLs: URLs look professional and are easier to
                  read (https://example.com/home).
                </li>
                <li>
                  Better SEO: Search engines treat these URLs like any other
                  traditional web page, making them easier to index.
                </li>
                <li>
                  Rich Functionality: Allows more control over routing behavior,
                  like custom history objects, programmatic navigation, and
                  state management.
                </li>
              </ul>
              <h4>Cons</h4>
              <ul>
                <li>
                  Requires Server Support: On a refresh or direct navigation,
                  the server must handle all routes and redirect them to the
                  app's index.html. Without proper configuration (e.g., with
                  GitHub Pages), it can lead to 404 errors.
                </li>
                <li>
                  Setup Complexity: You may need to configure .htaccess, nginx,
                  or a similar server setup to handle all routes.
                </li>
                <li>
                  Static Hosting Issues: Doesn’t work well on hosts like GitHub
                  Pages without custom redirect handling.
                </li>
              </ul> */}
              <h4>Best Use Case</h4>
              <ul>
                <li>
                  Applications hosted on servers with full control over routing
                  (e.g., VPS, managed cloud platforms like AWS, Vercel).
                </li>
                <li>SEO-focused projects where clean URLs are critical.</li>
                <li>
                  Complex applications where modern routing behavior (like
                  stateful navigation or dynamic URLs) is important.
                </li>
              </ul>
            </li>
          </ol>

          <br />

          <h3>Know when to use each</h3>
          <Table arial-label="Default table" style={{ minWidth: "510px" }}>
            <TableHeader
              style={{ backgroundColor: "var(--colorNeutralBackground1" }}
            >
              <TableRow>
                {columns.map((column) => (
                  <TableHeaderCell key={column.columnKey}>
                    {column.label}
                  </TableHeaderCell>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {items.map((item) => (
                <TableRow key={item.file.label}>
                  <TableCell>
                    <TableCellLayout>{item.file.label}</TableCellLayout>
                  </TableCell>
                  <TableCell>
                    <TableCellLayout>{item.author.label}</TableCellLayout>
                  </TableCell>
                  <TableCell>{item.lastUpdated.label}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ContentDevelopers;
