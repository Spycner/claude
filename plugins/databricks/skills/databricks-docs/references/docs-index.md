# Databricks Docs Index

Canonical entry URLs for the Databricks product surfaces this skill supports.
Default cloud is AWS; rewrite the `aws` segment to `azure` or `gcp` if the
user has specified another cloud.

## Topics

apps: https://docs.databricks.com/aws/en/dev-tools/databricks-apps/
asset-bundles: https://docs.databricks.com/aws/en/dev-tools/bundles/
clusters: https://docs.databricks.com/aws/en/compute/
compute: https://docs.databricks.com/aws/en/compute/
jobs: https://docs.databricks.com/aws/en/jobs/
lakebase: https://docs.databricks.com/aws/en/oltp/
mlflow: https://docs.databricks.com/aws/en/mlflow/
model-serving: https://docs.databricks.com/aws/en/machine-learning/model-serving/
pipelines: https://docs.databricks.com/aws/en/dlt/
secrets: https://docs.databricks.com/aws/en/security/secrets/
serverless: https://docs.databricks.com/aws/en/compute/serverless/
sql-warehouses: https://docs.databricks.com/aws/en/compute/sql-warehouse/
unity-catalog: https://docs.databricks.com/aws/en/data-governance/unity-catalog/
workflows: https://docs.databricks.com/aws/en/jobs/

## Usage

1. Match the user's question to one of the topics above.
2. WebFetch the URL with a focused prompt that quotes the user's question.
3. If the entry page lacks the answer, follow links from the entry page.
4. If no topic matches, fall back to the docs root: https://docs.databricks.com/aws/en/
