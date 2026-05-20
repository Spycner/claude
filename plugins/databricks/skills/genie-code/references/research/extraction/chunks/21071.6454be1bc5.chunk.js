"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[21071],{293636:(e,a,t)=>{t.r(a),t.d(a,{tutorial:()=>v});let i=t.p+"static/media/get-started-de-databricks-overview.33a8915ebc.png",n=t.p+"static/media/get-started-de-de-architecture.bcc28ef8b8.png",o=t.p+"static/media/get-started-de-de-responsibility.dac77c18a8.png",r=t.p+"static/media/get-started-de-ingestion.7484ec5df9.png",s=t.p+"static/media/get-started-de-lakeflow-features.5ed2c9b467.png",l=t.p+"static/media/get-started-de-lakeflow-jobs.92ee5a685e.png",d=t.p+"static/media/get-started-de-lsdp.8d2633224f.png",c=t.p+"static/media/get-started-de-lsdp2.baac448a3e.png",p=t.p+"static/media/get-started-de-lsdp3.2a102720d2.png",g=t.p+"static/media/get-started-de-managed-connectors.a62ec9fd28.png",h=t.p+"static/media/get-started-de-medallion.b0052acb9b.png",u=t.p+"static/media/get-started-de-medallion2.b6e1323782.png",m=t.p+"static/media/get_started_de_lakeflow_job_blocks.3f9a5e1073.png",f=t.p+"static/media/get_started_de_lakeflow_job_monitoring.a17651182c.png",b=t.p+"static/media/get_started_de_lakeflow_job_query_insights.1768847eab.png",y=t.p+"static/media/get_started_de_lakeflow_jobs_ui.2d26bdade7.png",v={id:"data-engineering",title:"Data Engineering",description:"Learn how to create and manage data pipelines in Databricks from start to finish.",totalDuration:"1h 28m",category:"data-pipeline",courseZipUrl:"/static/tutorials/data-engineering.zip",steps:[{id:"data-engineering-basics",chapterId:"introduction",duration:"5m",componentId:"homepage.tutorials.build-data-pipeline.data-engineering-basics",title:"Data Engineering Basics",videoUrl:"https://player.vimeo.com/progressive_redirect/playback/1159359906/rendition/1080p/file.mp4%20%281080p%29.mp4?loc=external&signature=1452fe4d2231142964f29d2aba20265688985eedd24c09e4a40d996ea3957f13",vimeoId:"1159359906",contentType:"Video",order:1,sections:[{id:"section-1",title:"Data Engineer Responsibilities",content:`
First, let’s take a quick look at the key responsibilities of a data engineer, who is essential in managing and optimizing an organization's data.

![get-started-de-de responsibility.png](${o} "get-started-de-de responsibility.png")

One of the primary tasks of a data engineer is to **transform raw data** into a format that is clean and reliable. This involves a variety of processes including:
- data extraction from diverse sources like databases, data lakes, flat files and more 
- data cleansing to remove errors and inconsistencies
- data transformation to convert it into a structured and usable format for consumers

Data engineers are also responsible for **ensuring the quality and integrity** of an organization’s data. This means implementing processes to monitor and maintain data accuracy, consistency, and reliability. This keeps the data trustworthy and dependable.

Another critical role of a data engineer is **designing, building, and maintaining data pipelines**. 

These pipelines are the pathways through which data flows from various sources to our storage systems and analytical tools. Data engineers create, optimize and automate these pipelines to ensure efficient data movement, proper data integration, and seamless access. 

Now that you know what a data engineer does, let’s see how these responsibilities fit into the bigger picture of data architecture.
            `,order:1},{id:"section-2",title:"Data Engineering Architecture",content:`
Let’s review a high-level step-by-step overview of a traditional data engineering architecture.

![${n}](${n} "dataEngineeringArchitectureImage")

**Data sources**: First, you start by understanding your data sources, which can include databases, cloud storage, network logs, a variety of files types and more.

**Data ingestion**: Next, data is ingested into the enterprise storage systems. Typically, this involves using data warehouses and data lakes to manage the large volumes of data.

**Data processing**: Once ingested, data must be processed and cleaned using various tools to ensure accuracy and completeness for business use.

**Making data available**: Processed data is then stored and provided to consumers like business analysts, data scientists, and machine learning teams for insights, models, and applications.

**Data orchestration**: As a data engineer, it’s crucial to orchestrate workloads effectively by building, automating and maintaining data pipelines for reusability.

**Data governance**: Lastly, doing this while managing data governance, access and security to maintain the integrity and protection of the data.

While this architecture provides a strong foundation, it also introduces several challenges for organizations. Why? Well, organizations typically use a variety of technology stacks to manage the data engineering process, which introduces several challenges.

Let’s explore some of the most common challenges data engineers face in this environment.
            `,order:2},{id:"section-3",title:"Common Challenges Faced by Data Engineers",content:`
- Complex data ingestion methods. Managing streaming ingestion can be difficult, requiring always-running streaming platforms or manual tracking of files that have not been ingested yet, along with managing the time-consuming and error-prone tasks.
- Supporting key data engineering principles, such as agile development methods, CI/CD (continuous integration and continuous deployment), version control, and isolated development and production environments.
- Using third-party orchestration tools, which can increase operational overhead and system complexity, typically requiring an advanced skill set. As well as platform inconsistencies. Differences between various data warehouses and data lake providers can create challenges in integrating multiple products due to differing limitations, workloads, languages, and governance models.

To address these challenges, many organizations are turning to unified platforms like Databricks.
            `,order:3},{id:"section-4",title:"Simplify Data Engineering Using the Databricks Data Intelligence Platform",content:`
![${i}](${i} "get-started-de-overview.png")

With the Databricks Data Intelligent Platform, organizations can simplify their data engineering architecture and do it in one place, one platform.

- From Lakeflow Connect using batch or streaming processing into Delta Lake, enhancing data reliability and performance by centralizing storage and avoiding duplication.
- Using Spark and/or Photon to optimize data processing and transformation, supporting efficient storage in Delta Lake for your lakehouse.
- Lakeflow Spark Declarative Pipelines is a declarative ETL framework for the Databricks Data Intelligence Platform that helps data engineers build automated and reliable ETL pipelines for fresh, high quality data for your consumers. Lakeflow Spark Declarative Pipelines automatically manage task orchestration, cluster management, monitoring, data quality and error handling.
- Delivering clean, usable data to your consumers for data warehousing and business intelligence for DBSQL, data science and machine learning using Mosaic AI, or sharing data to other organizations using Delta Sharing.
- Databricks Lakeflow Jobs provides a collection of tools that allow you to schedule and orchestrate end to end data processing tasks on Databricks.
- Lastly, with Unity Catalog, organizations can seamlessly govern both structured and unstructured data in any format, as well as machine learning models, notebooks, dashboards and files across any cloud or platform. Providing data governance, access and security. 

The Databricks Data Intelligence platform enables the entire data team to collaborate seamlessly on a single secure platform. From the moment data is ingested into the organization to its cleaning, analysis, and application in business decisions, the platform supports every stage of the process.

With this unified approach, your data engineering workloads become more streamlined and collaborative, supporting every stage from ingestion to insight.
            `,order:4}]},{id:"intro-to-lakeflow",chapterId:"introduction",duration:"5m",componentId:"homepage.tutorials.build-data-pipeline.intro-to-lakeflow",title:"Intro to Lakeflow",videoUrl:"https://player.vimeo.com/progressive_redirect/playback/1159365490/rendition/1080p/file.mp4%20%281080p%29.mp4?loc=external&signature=c3c5df7f9d6ff726f5be2b7e0e749b1fca746429f68f4bb4f09f00904b2e678b",vimeoId:"1159365490",contentType:"Video",order:2,sections:[{id:"section-1",title:"Lakeflow Overview",content:`
Achieving data intelligence starts with getting data into the platform which is the domain of data engineering. Data Engineering involves not only getting data into the platform but also transforming that data into useable assets and managing this at scale. Databricks provides a powerful solution for this with Databricks Lakeflow. 

Let’s take a closer look at the core features of Lakeflow.

![${s}](${s} "get-started-de-lakeflow-features.png")

Lakeflow consists of three powerful components:
- Connect for fast, no-code data ingestion from any source;
- Spark Declarative Pipelines for automated and reliable batch or streaming transformations using SQL;
- Jobs for smart orchestration with real-time triggers and monitoring.

Together, they deliver a seamless, fully governed data engineering workflow within Databricks.

Let's look at a high level overview of each component of Lakeflow.
            `,order:1},{id:"section-2",title:"Lakeflow Connect",content:`
So what exactly is Lakeflow Connect?

![${g}](${g} "get-started-de-managed-connectors.png")

Lakeflow Connect provides simple, efficient connectors to ingest data into the Databricks Lakehouse from a wide range of sources, including enterprise applications, databases, cloud storage, local files, message buses, and more. It supports three main types of ingestion:
- Manual File Uploads: This allows users to upload local files directly to Databricks into either a volume or as a table, making it extremely easy to bring local data into the platform quickly.
- Standard Connectors: These connectors support data ingestion from various sources such as cloud object storage, Kafka, and more. They support multiple ingestion modes, including batch, incremental batch, and streaming. We’ll explore these ingestion methods in more detail shortly.
- Managed Connectors: Purpose-built for ingesting data from enterprise applications, including SaaS platforms and databases. They leverage efficient incremental read/write patterns to provide scalable, cost-effective, and high-performance data ingestion into the lakehouse.

Taking a closer look at Lakeflow Connect Managed Connectors, they offer built-in, no-code connectors for popular databases and enterprise applications. With a simple interface, it enables fast, scalable, and secure data ingestion into the Databricks platform, all governed by Unity Catalog and powered by serverless compute. With Unity Catalog, data is kept automatically updated, and ensures full observability, governance, and autoscaling across the data ecosystem.
            `,order:2},{id:"section-3",title:"Lakeflow Spark Declarative Pipelines",content:`
Once data is ingested, Lakeflow Spark Declarative Pipelines accelerates ETL with declarative SQL, allowing analysts to build production-grade incremental batch and streaming pipelines. Spark Declarative Pipelines support the medallion architecture, incremental processing, and intelligent workload optimization for faster and more efficient ETL pipelines.

![${d}](${d} "get-started-de-lsdp.png")`,order:3},{id:"section-4",title:"Lakeflow Jobs",content:`
Finally, Lakeflow Jobs simplifies orchestration with smart triggers, real-time monitoring, and automated workloads. Its serverless design supports event-based triggers, continuous execution, and complex DAGs, ensuring reliable and scalable production workloads.

With Lakeflow Connect, Pipelines, and Jobs, you can streamline your entire data workflow, from ingestion to orchestration, all within the Databricks platform.

![${l}](${l} "get-started-de-lakeflow-jobs.png")`,order:4}]},{id:"ingestion-with-lakeflow-connect",chapterId:"ingestion-and-transformation",duration:"5m",componentId:"homepage.tutorials.build-data-pipeline.ingestion-with-lakeflow-connect",title:"Ingestion with Lakeflow Connect",videoUrl:"https://player.vimeo.com/progressive_redirect/playback/1159365808/rendition/1080p/file.mp4%20%281080p%29.mp4?loc=external&signature=3de164b40a8ebc9aedc2ee4f145cad886f45c0d264abc8102ccc4081346fae5b",vimeoId:"1159365808",contentType:"Video",order:3,sections:[{id:"section-1",title:"Lakeflow Connect Ingestion Techniques Overview",content:`
Let’s focus on Delta Lake Lakeflow Connect techniques—specifically, how to bring raw data into our Delta Lake.
![${r}](${r} "get-started-de-ingestion.png")
            `,order:1},{id:"section-2",title:"CREATE TABLE AS (CTAS)",content:`
Creates a table by selecting data from an existing table or data source. By default, it creates a Delta table in Databricks. You can explicitly specify the \`USING DELTA\` keyword when creating a table, but *this is optional*.

\`\`\`sql
CREATE TABLE mydeltatable

USING DELTA    -- Optional

AS

your query
\`\`\`
            `,order:2},{id:"section-3",title:"COPY INTO",content:`
Offers several advantages for Lakeflow Connect into Delta Lake.

First, it loads one or more files from a file location into a Delta table.

It supports various file formats and cloud storage locations. 

It automatically handles schema changes, seamlessly integrating new data formats without manual adjustments.

Lastly, it’s idempotent, meaning it will skip files that have already been loaded, increasing efficiency.

Example usage:

\`\`\`sql
COPY INTO mydeltatable
FROM 'your-path'
FILE_FORMAT = 'format'
FILE_OPTIONS = ('format-options')
\`\`\`
            `,order:3},{id:"section-4",title:"Auto Loader",content:'Incrementally and efficiently processes new data files as they arrive in cloud storage based on an input directory path. It receives notifications from the cloud source and ingests only new files, reducing the need for full reprocessing and enhancing efficiency. Auto Loader also automatically infers and evolves schemas, detecting new columns and handling schema changes without manual intervention. Additionally, it can "rescue" unexpected data, such as data with differing types, and set it aside for review.',order:4}]},{id:"ingesting-data-into-delta-lake",chapterId:"ingestion-and-transformation",duration:"18m",componentId:"homepage.tutorials.build-data-pipeline.ingesting-data-into-delta-lake",title:"Ingesting Data into Delta Lake",videoUrl:"https://player.vimeo.com/progressive_redirect/playback/1159367438/rendition/1080p/file.mp4%20%281080p%29.mp4?loc=external&signature=275f2582a4e69628b741fb822852b74f04be1aee3669c7ab1856d8ade09cac18",vimeoId:"1159367438",contentType:"Video",order:4,sections:[{id:"section-1",title:"Configure and Explore Your Environment",content:'\nImport and open the resource to:\n\n1. **Configure the Workspace**: Select the correct Databricks environment version to ensure compatibility.\n2. **Initialize Unity Catalog Objects**: Programmatically create the necessary three-level hierarchy: Catalog (`dbacademy`) → Schema (`ingesting_data`) → Volume (`myfiles`).\n3. **Stage Raw Data**: Create a sample dataset (`employees.csv`) and save it to a Volume, establishing a "landing zone" for raw files before they are ingested into tables.\n4. **Explore the Namespace**: Use both SQL (e.g., `USE CATALOG`, `SHOW TABLES`) and PySpark (e.g., `spark.catalog.setCurrentCatalog`) to verify the environment is correctly set up and empty of tables, ready for the ingestion techniques that follow.\n            ',order:1},{id:"section-2",title:"Delta Lake Ingestion Techniques - Manual and SQL-Based Data Ingestion Techniques",videoUrl:"https://player.vimeo.com/progressive_redirect/playback/1159366228/rendition/1080p/file.mp4%20%281080p%29.mp4?loc=external&signature=8f154b6a9a7a7ddd571227339d81694aadb2a7653da9e977bb677fefa1908bf5",vimeoId:"1159366228",content:'\nManual and SQL-Based Data Ingestion Techniques:\n\n1. **Ingest via SQL (`CTAS`)**: Use the `CREATE TABLE ... AS SELECT` statement combined with the powerful `read_files` function to infer schema, parse CSV options (like headers), and populate a new Delta table in a single command.\n2. **Handle Full Refreshes**: Understand that CTAS is a "replace" operation. The script explicitly drops the table first, demonstrating that this method is for full data refreshes (re-ingesting everything) rather than incremental updates.\n3. **Ingest via UI**: Use the Databricks "Add Data" visual interface to manually upload local files directly into the Unity Catalog hierarchy, a method often used for ad-hoc analysis or one-off files.\n4. **Verify Ingestion**: Run simple `SELECT` queries and `SHOW TABLES` commands to confirm that both the programmatic (CTAS) and manual (UI) methods result in queryable Delta tables with the correct schema.\n',order:2},{id:"section-3",title:"Delta Lake Ingestion Techniques - Idempotent Data Ingestion and Incremental Loading",videoUrl:"https://player.vimeo.com/progressive_redirect/playback/1159367201/rendition/1080p/file.mp4%20%281080p%29.mp4?loc=external&signature=12e80b313f83a98abc979812c567d06897f2e39cfa7c8ce30cbad67e1148ff38",vimeoId:"1159367201",content:"\nIdempotent Data Ingestion and Incremental Loading:\n\n1.  **Ingest with COPY INTO:** Use the `COPY INTO` command to load data from file locations into an existing Delta table. This command is designed for idempotent, incremental loading.\n2.  **Understand Idempotency:** Observe that running the exact same `COPY INTO` command twice **does not** duplicate data. The command tracks which files have already been processed and skips them, ensuring efficiency and preventing accidental duplication of the *same file*.\n3.  **Handle Duplicate Content:** Learn a critical nuance: `COPY INTO` tracks *files*, not *row content*. When a *new file* (`employees2.csv`) with duplicate data is added, `COPY INTO` ingests it, resulting in duplicate rows in the table. This distinction between file-level tracking and row-level deduplication is key.\n4.  **Audit Changes:** Use `DESCRIBE HISTORY` to view the transaction log (Delta Log), verifying that only operations which actually changed data (the initial load and the new file load) created new table versions, while the skipped redundant load did not.\n5.  **Clean Up Resources:** Practice good data hygiene by dropping the schema (`DROP SCHEMA ... CASCADE`) at the end of the exercise to remove all created tables and volumes.\n            ",order:3}],assets:["02 - Ingesting Data into Delta Lake"]},{id:"data-transformation-with-the-medallion-architecture",chapterId:"ingestion-and-transformation",duration:"5m",componentId:"homepage.tutorials.build-data-pipeline.data-transformation-with-the-medallion-architecture",title:"Data Transformation with the Medallion Architecture",videoUrl:"https://player.vimeo.com/progressive_redirect/playback/1159366720/rendition/1080p/file.mp4%20%281080p%29.mp4?loc=external&signature=124d49d0005e0edab951f4099d2040879af3928d361db005284d44e54b15ebc5",vimeoId:"1159366720",contentType:"Video",order:5,sections:[{id:"section-1",title:"Data Transformation Overview",content:`
Within the Lakehouse, you will process data using Apache Spark, an open-source, in-memory distributed processing engine. It’s scalable and supports batch and streaming operations, as well as SQL, Python, Scala, and more.

With Databricks you can also enable Photon. Photon is a high-performance query engine for Databricks that can optimize SQL queries and accelerate processing with Delta Lake.

When processing data, Databricks recommends using the Medallion Architecture (sometimes known as Multi Hop architecture) for transforming data in our data processing component within the Data Engineering architecture. Let’s review the medallion architecture at a high level.

Let’s break down how this architecture works in practice.

![${h}](${h} "get-started-de-medallion.png")

As you ingest data into your Delta Lake through batch or streaming methods, or both, you can begin processing and transforming your data in Databricks. 

For almost all Delta Lake use cases, we frame our data transformation pipelines as the medallion architecture, a data design pattern used to organize data within a lakehouse. This is built on the “bronze-silver-gold medallion” data quality levels.  Of course, Databricks did not invent this pattern, but it is a very good fit for Delta Lake. 

The goal is to incrementally and progressively improve the structure and quality of data as it moves through each layer: From the original raw data in your data lake in its native format, to the Bronze layer to the Silver layer and finally to the Gold layer consumer level data.

Now, let’s explore the three layers of the Medallion Architecture.
            `,order:1},{id:"section-2",title:"Bronze",content:`
In the bronze layer, we simply ingest raw data from external source systems.  We get the data in as quickly as possible, even though it may be dirty.  We keep the data, making it useful for both current and future projects. Adding any additional metadata columns that capture the load date/time, process ID, and more.

By ingesting the data “raw,” we avoid exposing ourselves to bugs in the system or the processing logic.  We have the data as it originally existed, and we can always “go back” to it.  This is feasible because storage is so cheap.

Depending on your regulatory requirements, you can also remove any personally identifiable information (PII) as you ingest data into your Delta Lake.

Once raw data is in Bronze, we refine it further in the Silver layer.
`,order:2},{id:"section-3",title:"Silver",content:`
In the silver layer of the Lakehouse, data is filtered, cleansed, joined, and enriched version of the bronze data. The tables in the silver layer define the structure of the data, and enforce the schema, or evolve the schema as necessary.

The silver layer becomes a “single source of truth” for the enterprise across many projects.  We fix errors, add in business data, apply business rules, etc. Examples of data in this layer would be cleaned tables like all unique customers, transactions, and more.

After cleansing in Silver, data is optimized for consumption in Gold.
            `,order:3},{id:"section-4",title:"Gold",content:`
Gold-level tables contain clean data, ready for consumer consumption. 

Depending on the use case, they may include business-level aggregates of the Silver data. 

Gold data is formatted for specific projects or reports delivered downstream to users and applications. These tables can be stored in Delta format for use by Spark jobs or SQL queries and may also be replicated to external systems. Many engines have Delta Lake readers, and with Uniform, Delta tables can also be read natively by other applications.

With Gold data ready, let’s see how Delta Lake’s features support this workflow.

Thanks to the solid foundation of Delta’s ACID support, Databricks can offer more advanced features in the runtime itself. For example, Databricks is able to provide support for deletes, updates, and merges. These features are groundbreaking for data lakes. Moreover, Delta Lake is extremely easy to use. It supports full SQL, the simplest, most powerful, and most well-known API for data, as well as Python and Scala. 

With ACID compliance and SQL support, it becomes much easier to manage your data pipelines in the face of change. For example, when business logic changes, you can simply update or delete your Silver and Gold tables, and restart your stream or batch processes in order to put the changes into effect. 

While this architecture is robust, real-world pipelines often add complexity.

![${u}](${u} "get-started-de-medallion-2.png")

Typically, a data engineering pipeline is quite complex. It involves several stages, starting with reading data from various sources, including streaming data, batch files, and data lakes.
- Data from these external sources is ingested into bronze tables in its raw form.
- The bronze data is then processed to create multiple silver layer tables, which are cleaned and joined to enhance data quality.
- Finally, the cleaned and processed silver tables are aggregated into gold tables. These gold tables are used for various purposes, including BI and reporting, machine learning, AI, and streaming tasks to support business needs.

Understanding these layers equips you to design scalable, reliable data pipelines.
            `,order:4}]},{id:"transforming-data-with-the-medallion-architecture",chapterId:"ingestion-and-transformation",duration:"11m",componentId:"homepage.tutorials.build-data-pipeline.transforming-data-with-the-medallion-architecture",title:"Transforming Data with the Medallion Architecture",videoUrl:"https://player.vimeo.com/progressive_redirect/playback/1159367616/rendition/1080p/file.mp4%20%281080p%29.mp4?loc=external&signature=5879e74de35a25c3fd78fe9e45c5154547174bd11a149f182d3e04d194445093",vimeoId:"1159367616",contentType:"Video",order:6,sections:[{id:"section-1",title:"Transforming Data Using the Medallion Architecture",content:`![get-started-de-medallion.png](${h} "get-started-de-medallion.png")`,order:1},{id:"section-2",title:"Lakeflow Spark Declarative Pipelines Overview",content:"\n1.  **Build the Bronze Layer (Raw):** Ingest raw data files from a storage Volume directly into a Delta table (`current_employees_bronze`) using `COPY INTO`, creating an immutable record of source data.\n\n2.  **Build the Silver Layer (Cleaned):** Apply row-level transformations—such as standardizing text casing (`upper(Role)`) and adding audit timestamps—to create a refined, queryable table (`current_employees_silver`).\n\n3.  **Build the Gold Layer (Aggregated):** Generate business-level insights (e.g., counting employees by role) using **Temporary Views** for intermediate logic and `INSERT OVERWRITE` to populate the final reporting table (`total_roles_gold`).\n\n4.  **Understand Delta ACID Transactions:** Use `DESCRIBE HISTORY` to demonstrate that operations like `INSERT OVERWRITE` are atomic; either the entire table is updated successfully, or nothing changes, preventing partial data corruption.\n            ",order:2},{id:"section-3",videoUrl:"https://player.vimeo.com/progressive_redirect/playback/1159365999/rendition/1080p/file.mp4%20%281080p%29.mp4?loc=external&signature=df04f3c1952173d1c5acf91465d9b1f16951aea14d575eecbe5c605b4298a446",vimeoId:"1159365999",title:"Data Governance and Observability with Unity Catalog",content:"\n1.  **Navigate Catalog Explorer:** Use the visual interface to inspect tables (`total_roles_gold`) and verify the successful creation of the Medallion architecture hierarchy.\n2.  **Manage Permissions (ACLs):** Understand the security model, specifically that granting access requires a chain of privileges: `USE CATALOG` on the catalog + `USE SCHEMA` on the schema + `SELECT` on the specific table.\n3.  **Trace Data Lineage:** Visualize the data flow using the **Lineage** graph to confirm that `total_roles_gold` is correctly derived from `current_employees_silver`, providing transparency and auditability.\n4.  **Monitor Table Activity:** Explore the **History** tab to see Delta transactions (ACID commits) and the **Insights** tab to track query patterns and user access, essential for data governance.\n5.  **Clean Up:** Conclude the lifecycle management by dropping the entire schema (`DROP SCHEMA ... CASCADE`), reinforcing the practice of cleaning up temporary or educational resources.\n            ",order:3}],assets:["04 - Transforming Data Using the Medallion Architecture"]},{id:"ingesting-and-manipulation-lab",chapterId:"ingestion-and-transformation",duration:"2m",componentId:"homepage.tutorials.build-data-pipeline.ingesting-and-manipulation-lab",title:"Ingesting and Manipulation Lab",videoUrl:"https://player.vimeo.com/progressive_redirect/playback/1159365930/rendition/1080p/file.mp4%20%281080p%29.mp4?loc=external&signature=f26dd3e1a88abce3b70269aef5f292759e0c6170ef9e940be42da30ceb54819d",vimeoId:"1159365930",contentType:"Video",order:7,sections:[{id:"section-1",title:"Hands-On Practice",content:"\nThis lab teaches how to:\n\n1. **Set Up the Workspace:** Configure the catalog (`dbacademy`) and schema (`ingestion_lab`), then verify the active namespace using `current_catalog()` and `current_schema()`.\n2. **Explore Volumes:** List volumes in a schema (`SHOW VOLUMES`) and inspect files within a volume using the Unity Catalog path format (`/Volumes/catalog/schema/volume/`).\n3. **Ingest Real-World Data:** Create a Bronze table (`taxitrips_bronze`) with a predefined schema, then use `COPY INTO` to load NYC taxi trip data from CSV files in a volume, confirming successful ingestion of 21,932 rows.\n4. **Manipulate Data:** Execute a `DELETE` operation to remove rows based on a condition (trips with distance < 1), demonstrating that Delta Lake tracks all modifications in the transaction log.\n5. **Use Time Travel:** Query previous table versions using `VERSION AS OF` to compare row counts before and after the DELETE, showing how Delta Lake maintains historical snapshots.\n6. **Restore Tables:** Use the `RESTORE TABLE ... TO VERSION AS OF` command to undo accidental deletions, demonstrating Delta Lake's ability to roll back to any previous version.\n7. **Audit Operations:** Use `DESCRIBE HISTORY` to view the complete transaction log, confirming that RESTORE operations are recorded as new versions in the Delta Log.\n            ",order:1}],assets:["05 - Ingesting and Manipulation Lab"]},{id:"etl-with-lakeflow-spark-declarative-pipelines",chapterId:"pipelines",duration:"2m",componentId:"homepage.tutorials.build-data-pipeline.etl-with-lakeflow-spark-declarative-pipelines",title:"ETL with Lakeflow Spark Declarative Pipelines",videoUrl:"https://player.vimeo.com/progressive_redirect/playback/1159366510/rendition/1080p/file.mp4%20%281080p%29.mp4?loc=external&signature=97e2366e4dfddd61f134251d57f4f18a41252fc55dbed366254dd7e08706efbe",vimeoId:"1159366510",contentType:"Video",order:8,sections:[{id:"section-1",title:"Overview",content:`
Let’s explore the process of ETL with Databricks, focusing on Lakeflow Spark Declarative Pipelines for incremental or streaming processing pipelines.

So what exactly are Lakeflow Spark Declarative Pipelines? 

Lakeflow Spark Declarative Pipelines are a declarative ETL framework for the Databricks Data Intelligence Platform that helps data teams simplify streaming and batch ETL cost-effectively. It revolutionizes ETL and real-time analytics by automating and scaling streaming ingestion and transformation, providing powerful pipeline observability. 

![${c}](${c} "get-started-de-lsdp2.png")

With Lakeflow Spark Declarative Pipelines, we're making it dramatically easier to build and manage reliable data pipelines at scale. Let me walk you through how.

- Simplified Pipeline Authoring
You can now define data ingestion and transformation tasks using familiar SQL or Python. No need to write complex orchestration logic. Lakeflow takes care of the execution plan, error handling, and dependency management behind the scenes.

- Intelligent Optimization at Scale
As your data volumes grow, Spark Declarative Pipelines automatically scale and recover from failures. This means fewer manual interventions, better reliability, and lower operational overhead.

- Unified Batch and Streaming
Whether you're processing large historical datasets or working with real-time data, Spark Pipelines handle both seamlessly. They adapt to the workload type and optimize for performance and cost efficiency, no need to manage separate systems or rewrite code.

Overall, this is about empowering your team to move faster with fewer headaches while delivering production-grade data pipelines that just work.
            `,order:1},{id:"section-2",title:"Connecting to Data Sources",content:`
It all starts with getting your data into Databricks, and that’s where Lakeflow Connect plays a crucial role.

![${p}](${p} "get-started-de-lsdp3.png")

You can bring in data from a variety of sources. Whether it is stored in cloud object stores such as S3, ADLS, or GCS, streaming from message queues like Kafka, Pub/Sub, or Kinesis, pulled from traditional databases including SQL Server or Postgres, or coming from SaaS applications like Salesforce or Workday, Lakeflow Connect makes ingestion simple and reliable.

Once the data is connected, Lakeflow Declarative Pipelines can handle ingestion and transformation efficiently. This allows you to build data pipelines that follow the medallion architecture, progressing data through bronze, silver, and gold layers with confidence in reliability and scalability.

No matter what your data source, you can ingest, transform, and operationalize your data quickly, all within the Databricks environment.

At the end of the day, Spark Declarative Pipelines is for incremental ETL, regardless of whether you are doing batch or streaming processing. Regardless of the data source, which is the domain of Lakeflow Connect, SDP(Spark Declarative Pipelines) is for transitioning your data through the medallion architecture stages.

Lakeflow Spark Declarative Pipelines uses a simple declarative approach to building reliable data pipelines. With automatic infrastructure management, you can spend time getting value from your data faster without having to spend the time on the tooling.
            `,order:2}]},{id:"creating-and-managing-lakeflow-spark-declarative-pipelines",chapterId:"pipelines",duration:"15m",componentId:"homepage.tutorials.build-data-pipeline.creating-and-managing-lakeflow-spark-declarative-pipelines",title:"Creating and Managing Lakeflow Spark Declarative Pipelines",videoUrl:"https://player.vimeo.com/progressive_redirect/playback/1159366376/rendition/1080p/file.mp4%20%281080p%29.mp4?loc=external&signature=f20e88f2543f8375b1c06560f2952b2a5c8772632f2e17b42798e914db609288",vimeoId:"1159366376",contentType:"Video",order:9,sections:[{id:"section-1",title:"Creating a Lakeflow Spark Declarative Pipeline",content:'\n1.  **Configure Environment**: Run a setup script to create the necessary Unity Catalog objects (Catalog, Schema, Volume) and generate sample data files (`employees.csv`, `employees2.csv`) to be used by the pipeline.\n2.  **Locate Pipeline Assets**: Identify the precise file paths for the **Root Folder** and **Source Code File** (`Pipeline - 1.py`) which are programmatically printed in the notebook for easy copy-pasting.\n3.  **Initialize Pipeline**: Navigate to the "Jobs & Pipelines" interface to create a new **ETL Pipeline**, configuring it with the correct Target Catalog (`dbacademy`) and Target Schema (`create_pipeline`).\n4.  **Link Existing Code**: Use the "Add existing assets" feature to connect the new pipeline to the pre-written source code file (`Pipeline - 1.py`), effectively wrapping existing logic into a managed pipeline structure without writing new code from scratch.\n5.  **Verify Structure**: Confirm that the pipeline is correctly set up by viewing the **Pipelines UI**, which displays the linked workspace files and the pipeline definition, setting the stage for execution in the next lesson.       \n            ',order:1},{id:"section-2",title:"Defining Lakeflow Declarative Pipelines with Python",videoUrl:"https://player.vimeo.com/progressive_redirect/playback/1159367025/rendition/1080p/file.mp4%20%281080p%29.mp4?loc=external&signature=5e25af6ccf3316dfd210f7ca51e455d780de83f59930709f275b91184951abfd",vimeoId:"1159367025",content:'\n1.  **Externalize Configurations:** Use `spark.conf.get()` to retrieve dynamic parameters (like catalog and schema names) set in the pipeline\'s UI settings, promoting modularity and reusability over hardcoded paths.\n2.  **Define Datasets with Decorators:** Use the `@dp.table` decorator to register Python functions as pipeline nodes (tables or views), effectively translating function logic into data lineage.\n3.  **Implement the Medallion Architecture:**\n    *   **Bronze Layer:** Ingest raw data using **Auto Loader** (`format("cloudFiles")`), which automatically detects and processes new files from the source volume.\n    *   **Silver Layer:** Read from the Bronze table (`spark.readStream.table("bronze_table")`) to apply cleaning transformations, such as type casting and text normalization.\n    *   **Gold Layer:** Create an aggregated Materialized View that summarizes data (e.g., counting distinct users by role) for downstream reporting.\n4.  **Enforce Data Quality:** Apply declarative expectations (`@dp.expect`, `@dp.expect_or_drop`, `@dp.expect_or_fail`) to automatically validate data as it flows through the pipeline, ensuring only high-quality data reaches the final layers.\n            ',order:2},{id:"section-3",title:"Executing, Monitoring, and Debugging Lakeflow Pipelines",videoUrl:"https://player.vimeo.com/progressive_redirect/playback/1159366107/rendition/1080p/file.mp4%20%281080p%29.mp4?loc=external&signature=38da88fdbcc556f50c4e8078cab557f3babf514b4bbd702f9ea30fb12aab5e25",vimeoId:"1159366107",content:'\n1.  **Execute and Visualize:** Run a pipeline ("Refresh All") and observe the automatic generation of a **Directed Acyclic Graph (DAG)**, which visualizes the dependencies between Bronze, Silver, and Gold datasets without manual ordering.\n2.  **Inspect Dependencies:** Understand that the pipeline engine automatically resolves execution order based on data lineage (e.g., Silver reads from Bronze), regardless of how the code is organized.\n3.  **Monitor Pipeline Health:** Click on individual nodes in the DAG to view granular details, including **Record Counts** (6 Bronze, 5 Silver, 3 Gold), schemas, and performance metrics.\n4.  **Troubleshoot Configuration Errors:** Identify and fix runtime failures by analyzing error logs—specifically demonstrating how a simple typo in a configuration key (e.g., `catalog_ame` vs. `catalog_name`) causes initialization failures, and how to correct it in the pipeline settings.\n5.  **Verify Artifacts:** Confirm that the pipeline successfully materialized the physical tables in the target Unity Catalog namespace (defaulting to `workspace.default` in this example).         \n            ',order:3}]},{id:"monitoring-and-optimizing-pipelines",chapterId:"pipelines",duration:"6m",componentId:"homepage.tutorials.build-data-pipeline.monitoring-and-optimizing-pipelines",title:"Monitoring and Optimizing Pipelines",videoUrl:"https://player.vimeo.com/progressive_redirect/playback/1159366862/rendition/1080p/file.mp4%20%281080p%29.mp4?loc=external&signature=12cdafdc1cc82f76a0f4933dc5c3385c523ce846cab82a4cfae085418b3deee4",vimeoId:"1159366862",contentType:"Video",order:10,sections:[{id:"section-1",title:"Enforcing Data Quality and Monitoring Pipeline Health",content:`
1.  **Define Data Quality Expectations:** Apply declarative rules to datasets using three distinct enforcement levels to handle violations:
    *   **Warn (\`expect\`):** Flag invalid data (e.g., invalid country) but allow it to proceed downstream, useful for monitoring without disrupting operations.
    *   **Drop (\`expect_or_drop\`):** Automatically remove records that violate rules (e.g., invalid roles), preventing bad data from polluting downstream tables.
    *   **Fail (\`expect_or_fail\`):** Halt the entire pipeline execution immediately if critical constraints are unmet (e.g., Null IDs), ensuring data integrity for mission-critical fields.
2.  **Monitor Data Quality Metrics:** Inspect the **Data Quality Drawer** in the pipeline UI to view detailed statistics, such as the percentage of records written vs. dropped (e.g., 83% written, 16% dropped) and specific counts of violations per rule.
3.  **Investigate Pipeline Runs:** Use the **Runs Page** to track the historical and current status of pipeline executions, providing a centralized view to debug failures, analyze performance, and review the outcomes of data quality checks.
            `,order:1}]},{id:"orchestration-with-lakeflow-jobs",chapterId:"orchestration",duration:"4m",componentId:"homepage.tutorials.build-data-pipeline.orchestration-with-lakeflow-jobs",title:"Orchestration with Lakeflow Jobs",videoUrl:"https://player.vimeo.com/progressive_redirect/playback/1159366597/rendition/1080p/file.mp4%20%281080p%29.mp4?loc=external&signature=a33d954db6f9ba57c34a620fbd286caab3d455d2a7f8403f508a02f34cf5a170",vimeoId:"1159366597",contentType:"Video",order:11,sections:[{id:"section-1",title:"Orchestration with Lakeflow Jobs",content:`
Let’s explore unified orchestration with Databricks using Lakeflow Jobs for end to end platform-wide orchestration.

### Unified Orchestration in Databricks
![${y}](${y} "get_started_de_lakeflow_jobs_ui.png")
Fully-managed cloud-based general-purpose task orchestration service for the entire platform.
For data engineers, data scientists and analysts to build reliable data, analytics and AI Lakeflow Jobs using Notebooks, Jobs for SQL, ML models and more.
Easy to use point-and-click interface.
Lakeflow Spark Declarative Pipelines can be a task in a Lakeflow Job.


Lakeflow Jobs is a fully-managed, cloud-based, general-purpose task orchestration service for the entire platform. It removes operational overhead with a fully managed orchestration service enabling you to focus on your Jobs, not on managing your infrastructure. 
Lakeflow Jobs is a service for anyone in the organization, including data engineers, data scientists and analysts, allowing them to build reliable data, analytics and AI Lakeflow Jobs on any cloud. Data teams can orchestrate any combination of tasks, such as notebooks, SQL, ML models python code, as well as Spark Declarative pipelines. 
Your team can easily create, run, monitor and repair data pipelines without managing any infrastructure. With an easy point-and-click authoring experience for all your data teams not just those with specialized skills, Lakeflow Jobs makes it easy to author and execute orchestrated workloads.
            `,order:1},{id:"section-2",title:"Building Blocks of a Lakeflow Job",content:`
![${m}](${m} "get_started_de_lakeflow_job_blocks.png")

Building a Lakeflow Job begins with considering the the type of task you want to complete. Then you can define how that task should be executed in the control flow. Finally, you define the type of trigger trigger necessary to kick off the job. Databricks offers several different options to make building Lakeflow Jobs simple and convenient for all users.  
            `,order:2},{id:"section-3",title:"Actionable insights from real-time monitoring",content:`
![${f}](${f} "get_started_de_lakeflow_job_monitoring.png")

The deep integration of Lakeflow Jobs with the the platform means you get full, deep observability to every job that is running. Monitoring visualization helps you get a quick view of everything that is running and a drill down allows you to troubleshoot issues quickly 
            `,order:3},{id:"section-4",title:"Timeline view with query insights",content:`
Improved Observability for job runs

![${b}](${b} "get_started_de_lakeflow_job_query_insights.png")

Observibility remains an important part of Databricks Lakeflow Jobs and we continuously invest in bringing more experiences that allow our customers to get actionable insights regarding their workloads and how each job runs. 

We have added an exciting new visualization to Lakeflow Jobs which is especially useful for non-trivial jobs with multiple tasks. 

This Gantt view lets you see each job run with the various dependencies and you'll be able to easily identify which tasks in a job run slowly and where you might have opportunities to optimize.

            `,order:4}]},{id:"creating-a-simple-lakeflow-job",chapterId:"orchestration",duration:"10m",componentId:"homepage.tutorials.build-data-pipeline.creating-a-simple-lakeflow-job",title:"Creating a Simple Lakeflow Job",videoUrl:"https://player.vimeo.com/progressive_redirect/playback/1159367342/rendition/1080p/file.mp4%20%281080p%29.mp4?loc=external&signature=c6caec79733ab4576b73e4e6514ac35b127a3f42e490257cd3857f052be3700a",vimeoId:"1159367342",contentType:"Video",order:12,sections:[{id:"section-1",title:"Create a Job",content:`
1.  **Prepare the Environment:** Run setup scripts to confirm the target environment (Environment 4) and generate the precise file paths for the notebooks ("Task 1 - Setup" and "Task 2 - Silver-Gold") that will be orchestrated.
2.  **Create a New Job:** Navigate to the **Jobs** UI to initialize a new workflow (e.g., named "Dave job" or programmatic equivalents), which serves as the container for the execution logic.
3.  **Define Sequential Tasks:**
    *   **Task 1 (Bronze Setup):** Configure the first task to run a notebook that initializes tables, using **Serverless** compute for quick startup.
    *   **Task 2 (Silver/Gold Processing):** Configure a dependent second task that runs the transformation notebook, ensuring it only starts after Task 1 succeeds.
4.  **Parameterize the Workflow:** Set **Job Parameters** (specifically \`catalog_name\` and \`schema_name\`) at the job level. This allows variables to be passed dynamically into all tasks, preventing hardcoded values and making the job reusable across different environments (e.g., dev vs. prod).
            `,order:1},{id:"section-2",title:"Run a Job",videoUrl:"https://player.vimeo.com/progressive_redirect/playback/1159367580/rendition/1080p/file.mp4%20%281080p%29.mp4?loc=external&signature=01fadd468bc396eb8e10cd1b45bf6a71ac66cfa17d7d4419c17f5de0713c7ad0",vimeoId:"1159367580",content:`
1.  **Manage Task Dependencies:** Configure execution logic where downstream tasks (Task 2) only trigger after the successful completion of upstream tasks (Task 1), ensuring data integrity.
2.  **Configure Triggers:** Explore various execution modes beyond manual runs, including **Scheduled** (Cron/Time-based), **File Arrival**, **Table Update**, and **Continuous** execution for near real-time processing.
3.  **Monitor Execution:** Use the **Runs** tab to visualize the live execution graph, tracking the progress of individual tasks (Green = Success) and verifying that parameters (catalog/schema names) are correctly passed to each notebook.
4.  **Analyze Run History:** Inspect the Gantt-style timeline view to understand the duration and sequencing of the entire job versus individual tasks.
5.  **Compare Orchestration Patterns:** Understand the architectural choice between using Notebooks, Lakeflow Pipelines (preferred for ETL), and Lakeflow Jobs, noting that Jobs are powerful for orchestrating complex workflows that combine ETL with downstream actions like ML model training.
            `,order:2}],assets:["02 - Creating a Simple Lakeflow Job","Jobs - Task 1 - Setup - Bronze","Jobs - Task 2 - Silver - Gold"]}]}}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/21071.6454be1bc5.chunk.js.map