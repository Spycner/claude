"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[23957],{899577:(e,t,a)=>{a.r(t),a.d(t,{tutorial:()=>n});let o=a.p+"static/media/ai-bi-offerings.741f62072a.png",s=a.p+"static/media/dashboard-example.16fc20566c.png",i=a.p+"static/media/what-are-dashboards.1303265a0b.png",r=a.p+"static/media/what-is-genie.426032ff20.png",n={id:"sql-analytics-and-bi",title:"SQL Analytics and BI",description:"Learn how to use Databricks AI/BI to create and manage data pipelines in Databricks from start to finish.",totalDuration:"53m",category:"data-analytics-and-bi",steps:[{id:"introduction-to-databricks-ai-bi",chapterId:"Introduction",duration:"5m",componentId:"homepage.tutorials.build-data-pipeline.introduction-to-databricks-ai-bi",title:"Introduction to Databricks AI/BI",videoUrl:"https://player.vimeo.com/progressive_redirect/playback/1160279227/rendition/1080p/file.mp4%20%281080p%29.mp4?loc=external&signature=c3deb1e74c4217b6ecfcce6260d31b7aa40b14a2263393cd9e9747dd19e7cbcc",vimeoId:"1160279227",contentType:"Video",order:1,sections:[{id:"section-1",title:"Data Engineer Responsibilities",content:"In today's data-driven landscape, data is the bedrock of informed decision-making, so establishing a solid foundation for teamwork hinges on seamless data discoverability and clarity. AI/BI is designed around AI from the ground up. This structure benefits both authors and consumers. Authors can generate analytical datasets, visuals and dashboards through natural language, and even access powerful machine learning models with just a few clicks. For consumers, AI means dashboards are no longer static. They can ask follow-up questions in natural language, or right-click a chart to instantly see the key drivers of trends and anomalies in their data.",order:1},{id:"section-2",title:"Databricks AI/BI Offerings",content:`
This is why Databricks built AI/BI: to give intelligent analytics to everyone. 

![${o}](${o} "ai-bi-offerings.png")

The two AI/BI features we’ll be discussing today are Dashboards and Genie. These are located under the SQL heading in the Workspace navigation. 
            `,order:2},{id:"section-3",title:"Dashboards",content:`The tool used for presentation of visualizations and analytical results in an interactive fashion for reporting purposes.

Dashboards supports both technical and non-technical users with it’s easy to use, drag and drop interface and simple to understand features. Technical users can also create custom queries to support their dashboards. Once completed, it is simple and convenient to share dashboards with others for review as the data, queries, and dashboards are shared as one. And with separate draft and published spaces, you can continue to improve and enhance the dashboard once it has been published without disrupting others who are using it at the same time.`,order:3},{id:"section-4",title:"Genie spaces",content:`Supports dashboards by supplying users with an additional tool to engage with the data supporting the dashboard, ask questions using natural language, and get results directly from the data instead of making one-off requests to a data analyst. 

Genie spaces is conversational analytics built right into Databricks. You can literally talk with your data. Instead of relying only on dashboards, users can ask questions in natural language and get governed, secure answers from AI. Genie spaces tailors responses to your business context, so the insights are relevant and trustworthy. And because it’s accessible from anywhere, in Databricks and beyond, every user can explore data as easily as having a conversation.

You can create stand alone Genie spaces connected to your data sets or tie the Genie space directly to a dashboard where it will use the same data and context as the dashboard. Users can also rate their responses, request verification, and provide feedback on the Genie space to further refine and define its understanding of the context of business.`,order:4},{id:"section-5",title:"What is an AI/BI Dashboard?",content:`
![dashboard-example.png](${s} "dashboard-example.png")
![what-are-dashboards.png](${i} "what-are-dashboards.png")

Let’s take a closer look at what makes an AI/BI dashboard truly transformative for data analysts and technical practitioners: First, this isn’t just your traditional BI dashboard. It’s a modern interface that leverages AI to assist in authoring and delivers real-time visualizations. That means you’re not waiting for static reports as insights are available instantly, and the dashboard evolves as your data does. Additionally these dashboards are designed for teams, making it easy to share insights and findings across your organization. No more siloed data or insights stuck in one department. Everyone stays on the same page, driving collective intelligence. And what really sets this apart is the integration with Genie spaces. This allows users to explore data conversationally. Just ask questions in natural language and get answers instantly. It’s analytics on demand, lowering the barrier for everyone to interact with data, not just SQL experts.
            `,order:5},{id:"section-6",title:"What is Genie?",content:`
![what-is-genie.png](${r} "what-is-genie.png")

Genie is based in data intelligence. It knows your tables, metadata, relationships and metrics right from Unity Catalog. It also learns all the SQL queries in your existing Dashboards and Notebooks.

Space authors can do additional fine tuning for each Genie Space via its Knowledge Store, where you can can add example SQL queries, text instructions, functions, and more.

Genie also gets smarter over time from user behavior and feedback, ensuring insights become even more accurate and relevant. When Genie isn’t sure of the right answer, it doesn’t guess. It proactively seeks clarification from the user, to refine its understanding and avoid the risk of hallucinations or incorrect responses. 

This ongoing feedback loop transforms Genie into a smart and reliable AI analyst for uncovering actionable insights from your enterprise data. The more you use Genie, the smarter it gets.
`,order:6}]},{id:"creating-a-dashboard-import-sample-data",chapterId:"Creating a Dashboard",duration:"3m",componentId:"homepage.tutorials.build-data-pipeline.creating-a-dashboard-import-sample-data",title:"Import Sample Data",videoUrl:"https://player.vimeo.com/progressive_redirect/playback/1160279149/rendition/1080p/file.mp4%20%281080p%29.mp4?loc=external&signature=1081f652f6130903f13c22a4213e3be34f11206a6b3d94072abd3a98e0001e27",vimeoId:"1160279149",contentType:"Video",order:2,sections:[{id:"section-1",title:"Importing Sample Data",content:`
We are going to use a sample dataset that is available in the Databricks Marketplace. To import the sample data, perform the following actions:

1. In the left navigation bar, right-click **Marketplace**, and select **Open Link in New Tab**.

2. In this new tab, paste the following into the search bar marked "Search for products" (not the search bar at the top of the window): **Simulated Retail Customer Data**

3. Click the card named **Simulated Retail Customer Data**

This data is available for you free of charge, but you must comply with the **Terms of Service** (link in the bottom-right of the screen)

4. In the upper-right corner, click **Get instant access**

5. As desired, read the various links. Then, click check the box, and click **Get instant access**

6. Click **Open** in the upper-right corner of the screen

A new browser tab is launched, and you are taken to the Catalog Explorer. Note that the data is available to you under **Delta Shares Received**:

- **Catalog name**: databricks_simulated_retail_customer_data 
 
- **Schema name**: v01

We will use this data throughout these lessons.
            `,order:1}]},{id:"create-a-new-dashboard",chapterId:"Creating a Dashboard",duration:"3m",componentId:"homepage.tutorials.build-data-pipeline.create-a-new-dashboard",title:"Create a New Dashboard",videoUrl:"https://player.vimeo.com/progressive_redirect/playback/1159371632/rendition/1080p/file.mp4%20%281080p%29.mp4?loc=external&signature=c423f428a572e303d17b98e7759961b7a31897bf09d959e74c0384c221aa2486",vimeoId:"1159371632",contentType:"Video",order:3,sections:[{id:"section-1",title:"Creating a Dashboard in Databricks",content:`
Databricks AI/BI Dashboards offers an enhanced visualization library and a streamlined configuration experience to help you quickly transform data into shareable insights. 

In this lesson, you will create a new dashboard and add data and visualizations to the dashboard based on table data and SQL queries.

This lesson uses the following resources from the dataset you imported above:
* **sales** table
* **sales_orders** table
* **customers** table

These tables contain some retail sales figures and customer order details. We'll be using them as the source data for the visualizations in the dashboard.
            `,order:1},{id:"section-2",title:"Create a new Dashboard",content:`
Creating a new dashboard in Databricks is simple and straight forward. 
* Right-click **Dashboards** in the left navigation bar and select "Open Link in New Tab".
* In the new tab, click **Create dashboard** in the upper-right corner. 
* At the top of the resulting screen, click on the Dashboard name and change it to **Retail Dashboard**.

You also have the option to import a dashboard if you already have one. All your existing Dashboards can be located from this area of the platform. There are also many quick create features throughout the platform that offer **Dashboards** as one of the options for creating them from other submenus.
            `,order:2},{id:"section-3",title:"Adding Data",content:`
With a completely new Dashboard, you need to associate the dashboard with data before you can begin designing the information display itself. At the top of the dashboard screen, you have two tabs, **Data** and **Untitled page**. 

- **Data:** The **Data** tab allows you to define datasets that you will use in the dashboard. Datasets are bundled with dashboards when sharing, importing, or exporting them using the UI or API.

- **Untitled page:** This is the dashboard canvas that allows users to create visualizations and construct their dashboards. Each item on the canvas is called a widget. Widgets have three types: visualizations, text boxes, and filters.

You start off on the **Untitled page** tab so that you can see the helpful overview that's provided. Select the **Data** tab to get started. 

There are three small icons on the left side of the **Data** tab's screen area: **Datasets**, **Catalog**, and **Assistant**. 
* **Datasets** (an icon depicting a list) will present you with a list of all the datasets used for the dashboard. This is where we start; it's empty now.
* **Catalog** (the standard Databricks Catalog icon, three tiny shapes) allows you to navigate the available catalogs, schemas, and tables accessible to the workspace and select tables or materialized views to use as datasets.
* **Assistant** (the standard Databricks Assistant icon, a tiny four-pointed star) provides you with a AI-powered interface for asking queries in natural language to the platform to discover objects or gain insights or assistance on query writing. 

The following steps walk you through adding the tables for this example dashboard.

1. With the **Datasets list** icon selected, click the **+ Add data source** button. 
2. From the resulting pop-up, search for \`databricks_simulated_retail_customer_data.v01\`. 
3. Click \`sales_orders\` to add it as a dataset, and then select the **Confirm** button. Note that it appears in your dataset list
4. Repeat these steps to add the \`customers\` table. 

Note that each table is added to the list as an automatically populated \`SELECT *\` statement in the query editing panel. You can modify the SQL query to alter the dataset.
            `,order:3}]},{id:"add-a-counter-visualization",chapterId:"Creating a Dashboard",duration:"5m",componentId:"homepage.tutorials.build-data-pipeline.add-a-counter-visualization",title:"Add a Counter Visualization",videoUrl:"https://player.vimeo.com/progressive_redirect/playback/1159371575/rendition/1080p/file.mp4%20%281080p%29.mp4?loc=external&signature=4cd5eb4f258ce953b6a21d18087b59c469f0596b3eb3fd871dbaa44fc3f240f6",vimeoId:"1159371575",contentType:"Video",order:4,sections:[{id:"section-1",title:"Add a Counter Visualization",content:`
The first visualization we'll be adding to the dashboard is a counter visualization to display the current sales against a sales goal of $3 million.

1. In the **Data** tab, select the **+ Create from SQL** option. 
2. Enter the following query into the query editing space:
\`\`\`sql
SELECT sum(total_price) AS Total_Sales, 3000000 AS Sales_Goal FROM databricks_simulated_retail_customer_data.v01.sales;
\`\`\`
3. Click **Run** to execute the query. 
4. Right-click the query in the **Datasets** list and select **Rename**, or use the kebab menu, to rename the query as **Count Total Sales**. 
5. Return to the **Untitled page** canvas tab.
6. At the bottom of the screen you have a toolbar for moving objects, adding a visualization, adding a text box, and adding a filter. Select **Add a visualization**.
7. Move your cursor to anywhere on the screen and click to add the visualization to the canvas. 
8. In the **Configuration Panel** on the right, make the following selections for the settings:
    - **Title:** Checked
      - Click on **Widget Title** on the visualization.
      - Change it to **Sales Goal**.
    - **Dataset:** Count Total Sales
    - **Visualization:** Counter
    - **Value:** Total_Sales
    - **Comparison:** Sales_Goal

9. Now, click on **Total_Sales** and select **Format** from the resulting dropdown. Then click **Custom**.  Make the following adjustments:
    - **Type:** $
    - **Abbreviation:** None
    
10. In the Style section, click the **+** next to **Conditional Style**. Configure it with the following settings:
    - If Value <= Target
    - Then (Color: Red)

This is a really simple visualization but let's you get a feel for working with Visualizations on dashboards. You can adjust the placement and size of the visualization by dragging the edges or click-holding while hovering over the visualization box. 
            `,order:1}]},{id:"add-a-combo-chart-visualization",chapterId:"Creating a Dashboard",duration:"4m",componentId:"homepage.tutorials.build-data-pipeline.add-a-combo-chart-visualization",title:"Add a Combo Chart",videoUrl:"https://player.vimeo.com/progressive_redirect/playback/1159371654/rendition/1080p/file.mp4%20%281080p%29.mp4?loc=external&signature=90372a9efb8aacecd145ff42fb40bc01b1db10d40073672462852971d64b17bc",vimeoId:"1159371654",contentType:"Video",order:5,sections:[{id:"section-1",title:"Add a Combo Chart",content:`
Next, let's add another visualization, this time a Combo Chart containing information about total sale price and count of sales over a three months span.

1. In the **Data** tab, select the **+ Create from SQL** option. 
2. Enter and run the following query into the query editing space:

\`\`\`sql
SELECT customer_name, 
       total_price AS Total_Sales, 
       date_format(order_date, "MM") AS Month, 
       product_category 
FROM databricks_simulated_retail_customer_data.v01.sales 
WHERE order_date >= to_date('2019-08-01')
AND order_date <=  to_date('2019-10-31');
\`\`\`

3. Rename the Query to **Three Month Sales**. 
4. Return to the **Untitled page** canvas tab.
5. Select **Add a visualization** from the menu at the bottom of the canvas and click on the canvas to add the visualization.
6. In the **Configuration Panel** on the right, make the following selections for the settings:
    - **Dataset:** Three Month Sales
    - **Visualization:** Combo
    - **X axis:** Month
    - **Y axis:**
      - **Bar:** Total_Sales
        - **Display Name:** Total Sales Value
      - **Line:** COUNT(*)
        - **Display Name:** Count of Sales Orders
7. Select the kebab menu icon next to Y axis and click **Enable dual axis**.

Enabling dual axis allows us to see changes in the data on two different scales. Note that the Bar and Line options now read "Left Y axis (Bar) and Right Y axis (Line)", respectively. You can see that the number of sales in August and October was low, but the dollar amounts were high. The opposite is true in September.

8. Select the kebab menu icon next to **Left Y axis (Bar).**
9. Click on **Format**. 
10. Select **Custom** and change the Type to **$**.

Note that the axis titles automatically adjust to the Display Name for the chart series. You can also adjust the colors for the series by selecting the color blocks next to series names. 
            `,order:1}]},{id:"create-a-bar-chart-with-assistant",chapterId:"Creating a Dashboard",duration:"3m",componentId:"homepage.tutorials.build-data-pipeline.create-a-bar-chart-with-assistant",title:"Create a Bar Chart with Assistant",videoUrl:"https://player.vimeo.com/progressive_redirect/playback/1159371739/rendition/1080p/file.mp4%20%281080p%29.mp4?loc=external&signature=7f34e847b84ceacb85f23164f877488d251fab602e0cacd7588b656e194c4605",vimeoId:"1159371739",contentType:"Video",order:6,sections:[{id:"section-1",title:"Bar Chart with Databricks Assistant",content:`
When drafting a dashboard, you can provide a natural language prompt to the Databricks Assistant and it autogenerates a chart based on your request. The Databricks Assistant can help you build charts based on any dataset defined in your dashboard's data tab. Let's try it out.

Complete the following steps:

1. Select **Add a visualization** from the menu at the bottom of the canvas and click on the canvas to add the visualization.
2. In the text field at the top of your widget, enter the following prompt: 

    \`Create a bar chart with product_category on the x-axis and average total_sales on the y-axis\`

3. Either press **Enter** or click **Submit** to generate a response. It may take a moment for the Assistant to provide a visualization. 
5. You will get a bar chart that matches the provided description. Click **Accept** to confirm the visualization meets your needs. 

  If the visualization does not match your description or match the kind of visualization you wanted to create, you can reject or regenerate the response. You can also adjust the configuration of the chart once accepted. Try changing the color of the visualization.


**Edit a Visualization with the Configuration Panel**

Let's edit the generated chart to be a stacked bar chart by adding another measure on the y-axis.

1. Click the visualization widget on the canvas to open the configuration panel. 
2. Change the dataset to **Three Months Sales**, if necessary.
3. Adjust the Y axis to the **Total_Sales** by clicking on it and selecting the column name, if you had to change the dataset. This is because the column names are different between Sales and Three Month Sales. 
4. Add a second **Y axis** with **Total_Sales**. 
5. Click the label and change the transformation to **MIN**. 
Your new chart shows a stacked bar chart with the Average Total_Sales and the Minimum Total_Sales. 
6. Click the kebab to the right of **Y axis**. 
7. Check the box next to **Enable dual axis**. 

You now have a dual-axis bar chart that shows each value according to its own scale. This visualization shows that, although the **Reagate** category has the highest minimum sales figure, it also has the lowest total sales.
            `,order:1}]},{id:"add-a-scatter-plot-visualization",chapterId:"Creating a Dashboard",duration:"2m",componentId:"homepage.tutorials.build-data-pipeline.add-a-scatter-plot-visualization",title:"Add a Scatter Plot Visualization",videoUrl:"https://player.vimeo.com/progressive_redirect/playback/1159371695/rendition/1080p/file.mp4%20%281080p%29.mp4?loc=external&signature=b37fb8ad9bcd5171aeb4acfd8b2e9da2a81a4437861d5d79591a5398a83a52e7",vimeoId:"1159371695",contentType:"Video",order:7,sections:[{id:"section-1",title:"Scatter Plot",content:`
Let's create one more chart, a scatterplot, to understand how sales values vary with different order dates. To make this scatterplot, complete the following steps:

1. Select **Add a visualization** from the menu at the bottom of the canvas and click on the canvas to add the visualization. 
2. In the **Configuration Panel** on the right, make the following selections for the settings: 

    - **Dataset**: sales_orders
    - **Visualization**: Scatter
    - **X axis**: order_datetime
        - **Scale Type:** Continuous
        - **Transform:** DAILY
    - **Y axis**: total_price
        - **Scale Type:** Continuous
        - **Transform:** SUM
            `,order:1}]},{id:"add-a-text-box",chapterId:"Creating a Dashboard",duration:"2m",componentId:"homepage.tutorials.build-data-pipeline.add-a-text-box",title:"Add a Text Box",videoUrl:"https://player.vimeo.com/progressive_redirect/playback/1159371770/rendition/1080p/file.mp4%20%281080p%29.mp4?loc=external&signature=e8b02d52b925c5034748c6100c66af0d03bc5ebec1a6830dfe5f755f1a350857",vimeoId:"1159371770",contentType:"Video",order:8,sections:[{id:"section-1",title:"Adding a Text Box",content:`
Let's add a name and a space for a text description of the dashboard to the canvas. When adding a new widget to the canvas, other widgets automatically move to accommodate your placement. You can use your mouse to move and resize widgets. To delete a widget, select it and then press the delete key. You can also manipulate the widgets through the use of the kebab menu icon in the upper right corner of each individual one.

Complete the following steps to add a text box to the dashboard:

1. Click the **Add a text box** icon and drag the widget to the top of your canvas. 
2. Type: \`# Retail Organization\`

    **Note:** Text boxes can use markdown or rich text. We added an example of markdown. The \`#\` character in the included texts indicates that **Retail organization** is a level 1 heading. See [this markdown guide](https://www.markdownguide.org/basic-syntax/) for more on basic markdown syntax. Note that you can also use the rich text buttons to style your text.
            `,order:1}]},{id:"publish-and-share-a-dashboard",chapterId:"Creating a Dashboard",duration:"4m",componentId:"homepage.tutorials.build-data-pipeline.publish-and-share-a-dashboard",title:"Publish and Share a Dashboard",videoUrl:"https://player.vimeo.com/progressive_redirect/playback/1159371802/rendition/1080p/file.mp4%20%281080p%29.mp4?loc=external&signature=d76358126da5ba4029db731db855adc26192b619b2980981a21185253893eab8",vimeoId:"1159371802",contentType:"Video",order:9,description:`
When your dashboard is complete, you can publish it and share it with others. 

Published dashboards can be shared with other users in your workspace and with users registered at the account level. That means that users registered to your Databricks account, even if they have not been assigned workspace access or compute resources, can be given access to your dashboards.

When you publish a dashboard, the default setting is **Share data permission**. Share data permission in your published dashboard allows dashboard viewers to use your data permissions to access the data and power the queries that support it. This enables a shared cache, which can improve performance. If you choose **Individual data permission**, each viewer of the published dashboard uses their own data permissions to run queries. This can lead to more frequent refresh operations. If a viewer does not have access to the underlying data or the default SQL warehouse that powers the dashboard, _visualizations will not render._  

You can also notify viewers by sending emails to individuals or small groups when the dashboard is published.
        `,sections:[{id:"section-1",title:"Publishing a Dashboard",content:`
To publish your dashboard, complete the following steps:

1. Click **Publish** in the upper-right corner of your dashboard.

2. In the **Publish** dialog, you’ll see two data permission options. Select **Share data permission**.

3. Optionally, you can notify viewers via email and describe your changes in the text field.

4. Click **Publish** in the lower-right corner of the dialog. The **Sharing** dialog should open afterward. If it does not open, you can select **Share** next to **Publish** at the top of the dashboard.
    - You can use the text field to search for individual users, or share the dashboard with a preconfigured group, like **Admins** or **All workspace users**. From this window, you can grant leveled privileges like **Can Manage** or **Can Edit**. See [Dashboard ACLs](https://docs.databricks.com/en/security/auth-authz/access-control/index.html#lakeview) for details on permissions.
    - The bottom of the **Sharing** dialog controls view access. Use this setting to easily share with all account users.
3. Under **Sharing settings**, choose **Anyone in my account can view** from the drop-down. Then, close the **Sharing** dialog.
4. Use the context icon at the top of the dashboard next to the dashboard name to switch between **Edit draft** and **View published** versions of your dashboard.

**Note:** When you edit your draft dashboard, viewers of the published dashboards do not see your changes until you republish. The published dashboard includes visualizations that are built on queries that can be refreshed as new data arrives. When dashboards are refreshed, they are updated with new data automatically; the dashboards do not need to be republished.
            `,order:1}]},{id:"add-a-filter-to-a-dashboard",chapterId:"Creating a Dashboard",duration:"3m",componentId:"homepage.tutorials.build-data-pipeline.add-a-filter-to-a-dashboard",title:"Add a Filter",videoUrl:"https://player.vimeo.com/progressive_redirect/playback/1159371879/rendition/1080p/file.mp4%20%281080p%29.mp4?loc=external&signature=c516cdb501884e5326435066417a5d3ee13a0c23dea8437d087f4aba5f43c7dc",vimeoId:"1159371879",contentType:"Video",order:10,sections:[{id:"section-1",title:"Interactive Features: Field Filters",content:`
The dashboard you created in the lab is good for reporting, and viewers can use it to stay up-to-date on the most recent retail sales figures. However, the viewer has no controls that allow them to further explore the data. For example, if a user wants to see the data for a specific period, they would need to contact the dashboard author to request any changes.

You can create user controls that allow the viewer to filter certain data based on a field or a parameter value. Filters are widgets that allow dashboard viewers to narrow down results by filtering on specific fields or setting dataset parameters. 

Filters can be applied to fields of one or more datasets as well as on more than one page at a time with Global Filters (located at the top of the Dashboard between Data and the dashboard page titles). Filters on fields allow users to focus on certain values, or ranges of values in the data. The filter applies to all visualizations built on the selected datasets.

To add a filter to the dashboard, complete the following steps:

1. Return to your dashboard if you've navigated away from it.


    - From the **Dashboards** menu, select the **Owner** option and choose yourself to filter the view to just Dashboards you’ve created or own. 

2. If viewing the View published version, switch to the Edit draft version of the dashboard.

3. Click the **Filter** icon in the toolbar near the bottom of the canvas.
4. Place the widget near the top of your dashboard. You may want to add it under your text box. You can rearrange the widgets on the dashboard to organize it the way you want.

5. When the filter widget is selected, the filter configuration panel appears on the right side of the screen.
  
6. Apply the following settings:
  - **Filter**: Single value
  - **Fields**: 
      - sales.product_category 
      - Three Month Sales.product_category
7. Use the checkboxes to turn on **Title**.
8. Double-click the title on the widget and change it to **Product Category**
9. Use the drop-down in the filter widget to test your filter.

**Note:**  The filter applies to each selected dataset in the filter configuration panel. All of the datasets you selected share the same range of values for product_category. A dashboard viewer can select from that list when choosing which data to filter on the dashboard.

You can also use parameters to create interactive dashboards. Parameters allow users to customize visualizations by substituting values into dataset queries at runtime. See [What are dashboard parameters?](https://docs.databricks.com/en/dashboards/parameters.html) to learn more as that is beyond the scope of this course.

Remember to republish the dashboard after you've made edits to it in order for the published version to reflect your new filter.
            `,order:1}]},{id:"creat-a-new-genie-space",chapterId:"Creating a Genie Space",duration:"9m",componentId:"homepage.tutorials.build-data-pipeline.creat-a-new-genie-space",title:"Create a New Genie Space",videoUrl:"https://player.vimeo.com/progressive_redirect/playback/1159371981/rendition/1080p/file.mp4%20%281080p%29.mp4?loc=external&signature=10aba1f05db6cbb5335629802dcf8a0f991a450b2b2c3b41e86a3cdaedd6f537",vimeoId:"1159371981",contentType:"Video",order:11,description:`
In this lesson, you'll be looking into Databricks Genie spaces and the data exploration spaces you can create based on both existing dashboards and data sets as well as new combinations of data sets connected to the workspace. 

This lesson uses the following resources from  \`databricks_simulated_retail_customer_data.v01\`:
* **sales** table
* **customers** table

You will also need to have created the following:
  * _Your dashboard from the Lesson: Creating a Dashboard_

**Note:** If you created a copy of the course tables into your own user schema earlier in your work, you can use those tables instead of the lesson specified defaults.
        `,sections:[{id:"section-1",title:"Part 1: Creating a Genie Space",content:`
In this part of the demo, we'll start with creating a Genie Space directly from the given UI area. Follow the steps below to create a Genie Space. 
1. In the left navigation bar, right-click **Genie** and select "Open Link in New Tab".
2. Click **+ New** in the upper right corner.
3. A new pop-up will appear prompting you to Connect your data. Within this pop-up, select **All** to locate the table:
      - Catalog: databricks_simulated_retail_customer_data
      - Schema: v01
      - Table: customers
4. When finished selecting data, click **Create** at the bottom.

You will now be presented with the Genie Space UI with the chat environment on the left and the settings and details on the right. With the **Configure** button at the top selected, click on **Settings**. (By default, the Configuration opens to **Data.**) Here you can edit the following information:
1. **Title:** Basic Retail Details
2. **Description:** "This Space is designed to provide a space to query the details of the customers dataset."
3. **Default warehouse:** Serverless Starter Warehouse (or any other that is available to you)
4. **Sample Questions:** "How many customers do we have in CA?" (Click the **+ Add** button to add the question.)
5. Click **Save** at the bottom to confirm the edits.

The Genie space's screen area is split into two sides with the chat window on the left and the configuration and settings on the right. The buttons at the top right allow you to choose among these areas:

* **+ New chat**: Allows you to create a new threaded dialogues with Genie. After you publish a Genie space to end users (who will probably have only "Can View" or "Can Run" access), this is one of the only Genie areas they will have access to.
* **History** (the icon that looks like a clock): Allows you to review the separate chat threads that you've had with Genie. After you publish a Genie space to end users (who will probably have only "Can View" or "Can Run" access), this is the other Genie area they will have access to.
* **Configure** (the icon that looks like a gear): Returns you to the edit screen for the settings of the Genie space, much like the screen you saw during the space's creation.
  Within Configure you'll have:
  * **Data**: Allows you to review and edit the data tables associated with the Space.
  * **Instructions**: Allows you to provide general instructions, in natural language, on how Genie will behave when asked a question by a user.
  * **Settings**: Allows you to configure the Space by specifying its Title, Default Warehouse, Description, and Sample Questions.
* **Benchmarks** (the icon that looks like a graduate's mortarboard): Allows you to define a suite of questions that you run on a recurring basis to ensure the space continues to give good answers to the most important user questions.
* **Monitoring** (the icon that looks like a eye): Allows you to review what questions were asked, who asked them, and how they were rated by the user. 
* **Share** (the icon that looks like a lock): Allows you to set the share permissions and share the Genie space with end users. 

Additionally, under the kebab menu **(⋮)**, you’ll find options to Clone, Assign Certification, and Delete the Genie space by moving it to trash from this menu.
            `,order:1},{id:"section-2",title:"Part 2: Creating a Genie Space from a Dashboard",videoUrl:"https://player.vimeo.com/progressive_redirect/playback/1159371919/rendition/1080p/file.mp4%20%281080p%29.mp4?loc=external&signature=28d5347575a77f05940b92d072f4e3c3327702f8ff19f50b1e47f4a97f0b49a6",vimeoId:"1159371919",content:`
Alternatively, you can create a Genie Space directly from a dashboard. 

1. Navigate to **Dashboards** and select the dashboard you created during **Lesson - Creating a Dashboard in Databricks** (Retail Dashboard).

2. Switch to the **Edit draft** view for the dashboard.

3. Click the **(⋮)** kebab menu icon in the top-right corner and select the **Settings** option.

4. From the **Settings** sidebar window, select the **General** tab.

5. Click the **Enable Genie** toggle button to activate **Genie** for your dashboard.

    - You will be given the option to select 
        - Auto-generate Genie space (Note this feature is in Beta currently.)
        - Link existing Genie space
    - For this exercise, select **Auto-generate Genie space**.

6. Click **Publish** to open the publishing dialog box. Leave the **Share data permission** option as default, and Click **Publish** in the lower-right corner of the dialog.

7. Close the **Sharing** dialog (if needed) and navigate to the **View published** version of your Dashboard. 

8. Click the **Ask Genie** button embedded at the bottom. This opens a pop-up chat box on top of the dashboard. You can use the kebab menu to access the settings to dock the Genie chat to the side of the screen.

9. Ask the following question in the chatbox.

    _What tables are there and how are they connected? Give me a short summary._
10. Review the response provided by Genie. 
            `,order:2}]},{id:"comprehensive-lab",chapterId:"Summary",duration:"10m",componentId:"homepage.tutorials.build-data-pipeline.comprehensive-lab",title:"Comprehensive Lab",videoUrl:"https://player.vimeo.com/progressive_redirect/playback/1159371957/rendition/1080p/file.mp4%20%281080p%29.mp4?loc=external&signature=14680b59bf56630b031d0b4866a4c961ff3002ca200acc113a471c3f1c81c09b",vimeoId:"1159371957",contentType:"Video",description:`
As a data analyst for our fictional retail organization, management has asked to enhance the dashboard that was created in this course with an additional data set. They would also like you to add a few more visualizations which will require a couple more queries. 

The steps you'll be following include:
- Locate and explore the sales_orders dataset.
- Add the new dataset to the dashboard.
- Add new queries to the dataset list.
- Add new visualizations to the dashboard.
- Adjust the filter to reflect the new changes.
- Publish the dashboard.

This lesson uses the following resources from  \`databricks_simulated_retail_customer_data.v01\`:
* **sales_orders** table

You will also need to have created the following:
  * _Your dashboard from the Lesson: Creating a Dashboard_

**Note:** If you created a copy of the course tables into your own user schema earlier in your work, you can use those tables instead of the lesson specified defaults.
        `,order:12,sections:[{id:"section-1",title:"Part 1: Add new datasets to your dashboard",content:`
The next two charts require data from two different tables. We can use a \`JOIN\` in the query editor on the **Data** tab to create a dataset that includes all necessary values. Datasets can be created using common table expressions and joins.

####  Dataset 1: Sales by loyalty segment

This query creates a dataset that joins data from the customers and sales tables. It connects a customer's spending amount with their loyalty program status.

Complete the following steps to create this dataset:

1. Click the **Data** tab. 
2. Click **Create from SQL**. 
3. Double-click the title of the new dataset and replace the default name, **Untitled dataset**, with **Sales by loyalty segment** 
4. Paste the following query into the editor: 

\`\`\`sql
SELECT
      product_category,
      loyalty_segment,
      total_price
    FROM
      databricks_simulated_retail_customer_data.v01.sales
      JOIN databricks_simulated_retail_customer_data.v01.customers
      on sales.customer_id = customers.customer_id
\`\`\`

5. Run the query. 

####   Dataset 2: Sales and orders by day

This query creates a dataset that shows the day of the month a purchase was made, the total sales for that day, and the number of orders in that group. It pulls data from the \`sales\` and \`sales_order\` tables.

Complete the following steps to add the next dataset:

1. Click **Create from SQL**. 
2. Double-click the title of the new dataset and replace the default name, **Untitled dataset**, with **Sales and orders by day** 
3. Paste the following query into the editor: 

\`\`\`sql
WITH sales_data AS (
  SELECT
    date_format(order_date, "dd") AS day,
    SUM(total_price) AS total_sales
  FROM databricks_simulated_retail_customer_data.v01.sales
  GROUP BY day
),
orders_data AS (
  SELECT
    CASE 
      WHEN try_cast(sales_orders.order_datetime AS BIGINT) IS NOT NULL 
      THEN DAY(FROM_UNIXTIME(sales_orders.order_datetime))
      ELSE NULL 
    END as day,
    COUNT(order_number) AS total_orders
  FROM databricks_simulated_retail_customer_data.v01.sales_orders
  GROUP BY day
)
SELECT
  cast(s.day as INT),
  s.total_sales,
  o.total_orders
FROM sales_data s
JOIN orders_data o ON s.day = o.day
ORDER BY s.day;
\`\`\`

4. Run the query. 
            `,order:3},{id:"section-4",title:"Part 4: Create additional visualizations",content:`
Now, let's use those new datasets to create new visualizations.

#### Heatmap Visualization

Heatmaps are helpful for understanding patterns around the occurrence of certain events. The heatmap you're about to create shows data broken down by the customer's assigned loyalty segment and product category. The colors in the chart show the total amount spent in each category.

To create a heat map, complete the following steps:

1. Click the **Untitled page** canvas tab. 
2. Add a visualization widget to the canvas. 
3. Apply the following configuration settings: 

    - **Dataset**: Sales by loyalty segment
    - **Visualization**: Heatmap
    - **X axis**: product_category
    - **Y axis**: loyalty_segment
    - **Color by**: SUM(total_price)
    
4. Resize and arrange the widget on your dashboard. 
5. The default size for this widget is too small to show all of the product categories. Hover over the widget's edges and adjust the chart's size. Hover over other areas of the chart until you see a hand icon. Click and drag to move your chart around the canvas. 

Great! For this data, it looks like customers in loyalty segment 3 spend the most overall. For product categories **Reagate** and **Zamaha**, loyalty segments are slower to catch on and don't seem very related to customer spend.

#### Dual-axis Line Chart


Dual-axis line charts, like dual-axis bar charts, can be useful for comparing related quantities on different scales. The chart you're about to create tracks proceeds from sales and the number of orders placed. The data is grouped by the day of the month that the sale occurred. This can be useful for tracking customer spending patterns throughout the month.

To create your dual-axis line chart, complete the following:

1. Add a visualization widget to the canvas. 
2. Apply the following configuration settings: 

    - **Dataset**: Sales and orders by day
    - **Visualization**: Line
    - **X axis**: day (Set **transformation** to **None**)
    - **Y axis**: SUM(total_sales)
    - **Y axis**: SUM(total_orders)
    This creates your basic chart, but you must enable the dual axis to show the quantities on their respective scales.

3. Click the kebab to the right of the Y axis. Then, click the checkbox to turn on **Enable dual axis**. 
4. Resize and arrange the widget on your dashboard. 
            `,order:4},{id:"section-5",title:"Part 5: Edit Filter and Republish",content:`
Now that you've completed adding more visualizations, if you have additional time, feel free to customize the dashboard with additional text descriptions and alternative coloring for the charts. When finished, you need to add another selection field to our filter so that it will impact the additional charts when used. 

##### Edit Filter
To edit the filter, use the following steps: 

1. Select the Filter on the dashboard.
2. In the configuration panel, select the + next to Fields.
3. Add the _sales by loyalty segment.product_category_ field.

##### Republish Dashboard
Before leaving, to ensure any additional users can view your finished dashboard, remember to republish the dashboard.

1. Click **Publish** to create a shareable copy of your revised dashboard.
2. Use the context icon at the top of the dashboard to View published versions of your dashboard.
            `,order:5},{id:"section-6",title:"Conclusion",content:`
During this course and the accompanying comprehensive lab, you should have completed the following:

* Use Catalog Explorer to discover data sets for data analytics purposes.
* Develop queries for data analytics purposes using Databricks Notebooks.
* Create and edit a Databricks AI/BI Dashboard. 
* Used additional features to enhance a dashboard, such as adding filters. 
* Published a dashboard for sharing with other users.
* Create and edit a Databricks Genie space.
            `,order:6}]}]}}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/23957.a7c8d49571.chunk.js.map