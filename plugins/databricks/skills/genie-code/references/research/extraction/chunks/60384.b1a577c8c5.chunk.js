"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[60384],{260384:(e,t,a)=>{a.r(t),a.d(t,{tutorial:()=>o});let o={id:"fundamentals",version:"2",title:"Fundamentals",description:"Learn the basics of Databricks",totalDuration:"10m",category:"fundamentals",courseZipUrl:"/static/tutorials/fundamentals.zip",steps:[{id:"databricks-workspace-walkthrough-homepage-ui",chapterId:"Databricks Workspace Walkthrough",duration:"6m",componentId:"homepage.tutorials.fundamentals.databricks-workspace-walkthrough",title:"Homepage UI",videoUrl:"https://player.vimeo.com/progressive_redirect/playback/1161155506/rendition/1080p/file.mp4%20%281080p%29.mp4?loc=external&signature=2ba6be4331c670bab5bfa24ddaa3632cd595785ee01b0cc8ec5276385977be55",vimeoId:"1161155506",contentType:"Video",order:1,description:`
1.  **Dual Editions:** The walkthrough compares the "Free Edition" (learning/trial) vs. the "Full Edition" (enterprise features like Mosaic AI).
2.  **Home Page:** Your landing pad with shortcuts to recent files ("Suggested"), starred items ("Favorites"), and popular assets across your team.
3.  **Intelligent Search:** A powerful global search bar at the top that finds data, jobs, dashboards, and even answers natural language questions.
4.  **Navigation Sidebar:** The left-hand menu organizes tools by persona (SQL, Data Engineering, ML) and can be collapsed to save screen space.
5.  **Databricks Assistant:** An AI chatbot available throughout the workspace (top right) to answer questions, debug code, and guide new users.
            `,sections:[{id:"section-1",title:"The Home Page Experience",content:`
*   **Welcome Section:** New users get a quick onboarding video and shortcuts to import data or invite team members.
*   **Resources:** A dynamic list of "Suggested" (recent), "Favorites" (starred), and "Popular" (trending in your org) items helps you jump back into work.
*   **What's New:** The full edition includes a feed of the latest product updates, blogs, and documentation to keep you informed.
                    `,order:1},{id:"section-2",title:"Navigation and Search",content:`
*   **Sidebar:** The collapsible left menu is your map. It groups features by function (SQL, Engineering, AI). Note: The full edition includes extra AI tools (like Agents) and compute controls not found in the free version.
*   **Intelligent Search:** Located at the top, this isn't just a keyword match. You can ask "Show me sales data from last week" to discover relevant tables, pipelines, or dashboards.
                    `,order:2},{id:"section-3",title:"Databricks Assistant",content:`
*   **Location:** Accessed via the star icon in the top right corner.
*   **Capability:** It operates in two modes: "Chat" for general questions/learning and "Agent" for multi-step analysis tasks. It's a built-in guide for both troubleshooting code and navigating the platform.
                    `,order:3}]},{id:"databricks-workspace-walkthrough-settings-and-ui",chapterId:"Databricks Workspace Walkthrough",duration:"6m",componentId:"homepage.tutorials.fundamentals.databricks-workspace-walkthrough-settings-and-ui",title:"User Settings and Environments",videoUrl:"https://player.vimeo.com/progressive_redirect/playback/1161155440/rendition/1080p/file.mp4%20%281080p%29.mp4?loc=external&signature=623044960eddc670488430f830716e8be1b308bb4e58f949737cf3bd266de162",vimeoId:"1161155440",contentType:"Video",order:2,description:`
1.  **User Settings:** Accessed via your profile icon to manage preferences, themes (Light/Dark), and security (MFA, password).
2.  **Developer Controls:** A dedicated section to generate access tokens, configure SQL snippets, and manage Git integrations.
3.  **Workspace Switching:** Quickly toggle between different workspaces (e.g., Dev vs. Prod) if your account has access to multiple environments.
4.  **Persona-Based UIs:** Switch views based on your role—"Lakehouse" for full technical access, or "Databricks One" for business users.
5.  **Databricks One:** A simplified interface focused on consumption (dashboards, Genie, search) without the clutter of engineering tools.
            `,sections:[{id:"section-1",title:"Configuring Your User Settings",content:`
*   **Profile:** Set your display name, manage MFA, and choose your preferred language and theme (Light vs. Dark mode).
*   **Developer:** Generate Personal Access Tokens (PATs) for API access, configure editor settings (like SQL formatting), and enable experimental features.
*   **Linked Accounts:** Easily link your Git provider (GitHub, GitLab, etc.) to enable version control for your notebooks and projects.
                    `,order:1},{id:"section-2",title:"Navigating Workspaces",content:`
*   **Workspace Switcher:** Located in the top corner (showing the workspace name). Use this to jump between different environments, such as moving from a "Staging" workspace to a "Production" workspace.
*   **Admin Settings:** Users with elevated permissions will see an extra "Admin Settings" menu to manage users, groups, and workspace-level configurations.
                    `,order:2},{id:"section-3",title:"UI Environments (Personas)",content:`
*   **The Concept:** Databricks offers different "views" of the platform to match your job function, accessed via the app switcher icon.
*   **The Lakehouse:** The full experience with access to all tools (SQL, Engineering, ML).
*   **Databricks One:** A streamlined, read-only style interface designed for business users. It hides complex engineering tools and focuses on "For You" dashboards, Genie spaces, and natural language search.
*   **Lakebase Postgres:** (Full Edition Only) A dedicated environment for managing transactional database projects.
                    `,order:3}]},{id:"identifying-and-organizing-workspace-objects",chapterId:"Databricks Workspace Walkthrough",duration:"5m",componentId:"homepage.tutorials.fundamentals.identifying-and-organizing-workspace-objects",title:"Object and Asset Organization",videoUrl:"https://player.vimeo.com/progressive_redirect/playback/1161155476/rendition/1080p/file.mp4%20%281080p%29.mp4?loc=external&signature=85b5549eb0984e5ff1fabec9bedf841b6147c9e7848065a4c6ba1c1be9aaef38",vimeoId:"1161155476",contentType:"Video",order:3,description:`
1.  **Workspace Browser:** The file explorer for your Databricks environment, accessible via the "Workspace" sidebar item.
2.  **Home Folder:** Your personal sandbox where you own all content. This is separate from shared folders or other users' directories.
3.  **Object Organization:** Supports drag-and-drop movement of assets and standard management actions (Create, Move, Delete, Share).
4.  **Git Integration:** You can create specific "Git Folders" to link your work directly to a remote repository (GitHub/GitLab) for version control.
5.  **Visual Cues:** Different icons distinguish object types at a glance—notebooks, dashboards, Genie spaces, and standard files.
            `,sections:[{id:"section-1",title:"Navigating Your Assets",content:`
*   **The Structure:** The workspace is divided into "Home" (your files), "Shared" (files available to everyone), and "Users" (admin view of others' folders).
*   **Favorites & Trash:** Quick access to starred items and a safety net for deleted items, similar to a standard OS file system.
*   **Filtering:** Use the filter bar to quickly narrow down large lists of objects by name.
                    `,order:1},{id:"section-2",title:"Managing Objects",content:`
*   **Actions:** Right-click any object to View Details, Clone, Move, or Share. You can also drag and drop items between folders for easy reorganization.
*   **Creation:** The "Create" button allows you to add new Notebooks, Folders, Queries, or upload files directly to your current location.
                    `,order:2},{id:"section-3",title:"Git Folders & Version Control",content:`
*   **Setup:** Connect to a Git provider by creating a "Git Folder" and pasting your repository URL.
*   **Workflow:** This enables standard Git operations (Commit, Push, Pull) directly within the workspace UI, facilitating team collaboration and code safety.
*   **Sparse Checkout:** Supports advanced Git features like sparse checkout to manage large repositories efficiently.
                    `,order:3}]},{id:"exploring-catalog-explorer",chapterId:"Databricks Workspace Walkthrough",duration:"15m",componentId:"homepage.tutorials.fundamentals.exploring-catalog-explorer",title:"Catalog Explorer & Unity Catalog",videoUrl:"https://player.vimeo.com/progressive_redirect/playback/1161155364/rendition/1080p/file.mp4%20%281080p%29.mp4?loc=external&signature=8dd3a41abe47bab80d31f851d0bc60f262cbe5ccf5a33508e1a8c29e87ae65e5",vimeoId:"1161155364",contentType:"Video",order:4,description:`
1.  **Catalog Explorer:** The visual interface for Unity Catalog, Databricks' unified governance layer.
2.  **3-Level Namespace:** Data is organized hierarchically: **Catalog** (top level) → **Schema** (database) → **Tables/Views/Volumes**.
3.  **Delta Sharing:** Enables secure data sharing across organizations without copying files. It powers the **Databricks Marketplace**, where you can find and instantly access external datasets.
4.  **Metadata Management:** Users can add descriptions, tags, and view AI-generated documentation for tables and columns to improve data discovery.
5.  **Lineage & Auditing:** Provides a visual graph of data flow (upstream/downstream) and a full history of table changes (Delta Lake time travel).
            `,sections:[{id:"section-1",title:"Navigating the Hierarchy & Marketplace",content:`
*   **Structure:** Access "Catalog" from the sidebar to browse your data estate. Understand the hierarchy: Catalogs hold Schemas; Schemas hold Tables, Volumes, and Models.
*   **Marketplace:** Use the "Marketplace" tab to search for public datasets (e.g., "wine quality"). You can "Get Instant Access" to mount these external datasets directly into your catalog without moving data.
                    `,order:1},{id:"section-2",title:"Managing Tables & Schemas",videoUrl:"https://player.vimeo.com/progressive_redirect/playback/1161155669/rendition/1080p/file.mp4%20%281080p%29.mp4?loc=external&signature=6cfb57a50fbb9870e35beee98de20e02eeded0ae337b58e7d2f8e00a56659cac",vimeoId:"1161155669",content:`
*   **Creating Assets:** You can create catalogs and schemas via SQL or the UI.
*   **Overview Tab:** View metadata, add AI-generated descriptions, and tag assets for organization.
*   **Sample Data:** Quickly preview the contents of a table ("Select Star") using a serverless warehouse.
*   **History & Lineage:** The "History" tab shows every version of a Delta table (Time Travel), while "Lineage" visualizes dependencies—showing exactly where data came from and what downstream dashboards or models use it.
                    `,order:2},{id:"section-3",title:"Permissions and Access Control",videoUrl:"https://player.vimeo.com/progressive_redirect/playback/1161155642/rendition/1080p/file.mp4%20%281080p%29.mp4?loc=external&signature=bf6cfe6a133286394b663eaf49266c345ae8e735317006b61ebec39e3ec0ca0a",vimeoId:"1161155642",content:`
*   **Granting Access:** Use the "Permissions" tab to control who can see or edit data. You can grant specific roles like SELECT, MODIFY, or ALL PRIVILEGES.
*   **Inheritance:** Remember that permissions are hierarchical. To access a table, a user must also have "USE CATALOG" and "USE SCHEMA" permissions on the parent containers. The UI warns you if these parent permissions are missing.
                    `,order:3}]},{id:"working-with-notebooks",chapterId:"Databricks Workspace Walkthrough",duration:"20m",componentId:"homepage.tutorials.fundamentals.working-with-notebooks",title:"Working with Notebooks",videoUrl:"https://player.vimeo.com/progressive_redirect/playback/1161213006/rendition/1080p/file.mp4%20%281080p%29.mp4?loc=external&signature=3982aa44c91d508683795b2c3df418a6de78cb70ec559fa19a8b782b36712e58",vimeoId:"1161213006",contentType:"Video",order:5,assets:["01 - Notebook Fundamentals","02 - Cells and Execution","03 - Working with Data","04 - Working with Notebooks"],description:`
1.  **Notebooks as the Core Interface:** Interactive documents that combine executable code, markdown text, and visualizations in one place.
2.  **Polyglot Support:** Write Python, SQL, Scala, and R in the same notebook by using "magic commands" (e.g., \`%sql\`, \`%md\`) to switch languages per cell.
3.  **Databricks Assistant:** Built-in AI that generates code, debugs errors, and fixes syntax issues automatically within the cell.
4.  **Interactive Visualization:** Create charts and graphs directly from query results without leaving the notebook.
5.  **Programmatic Governance:** You can manage permissions and explore catalog assets (tables, volumes) using SQL commands directly in the notebook.
            `,sections:[{id:"section-1",title:"Notebook UI and Execution",content:`
*   **Structure:** Notebooks consist of cells that can be code or markdown. The "Table of Contents" on the left auto-generates from markdown headers.
*   **Navigation:** Use the sidebar to browse files or the "Catalog" tab to insert table references directly into your code.
*   **Execution:** Run code by attaching to a compute cluster (or Serverless). "Focus Mode" lets you view a single cell's output in isolation for debugging.
                    `,order:1},{id:"section-2",title:"AI Assistance and Advanced Features",videoUrl:"https://player.vimeo.com/progressive_redirect/playback/1161212951/rendition/1080p/file.mp4%20%281080p%29.mp4?loc=external&signature=3560734244a0cd39fd7dd4e5df7257cbcd30177f873aa89c299bc26939e4e1b3",vimeoId:"1161212951",content:'\n*   **Databricks Assistant:** Use natural language prompts (e.g., "Calculate sum of integers") to generate code. It can also "Diagnose Error" to explain and fix bugs automatically.\n*   **Visualizations:** Convert query results into scatterplots, bar charts, or other visuals instantly within the notebook.\n*   **Programmatic Access:** Use SQL commands like `SHOW TABLES` or `GRANT SELECT` to manage data and permissions without using the UI.\n                    ',order:2}]}]}}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/60384.b1a577c8c5.chunk.js.map