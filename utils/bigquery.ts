// utils/bigquery.js
import { BigQuery } from '@google-cloud/bigquery';
import path from 'path';

const projectId = 'quick-pointer-414903';
const datasetId = 'quick-pointer-414903.lecturer_attendance';
const keyFile = path.join(process.cwd(), 'my-service-account.json');

const bigqueryClient = new BigQuery({
  projectId,
  keyFilename: keyFile,
});

export const queryBigQuery = async (query: any) => {
  const options = { query, location: 'US' };
  const [job] = await bigqueryClient.createQueryJob(options);
  const [rows] = await job.getQueryResults();
  return rows;
};

export const insertIntoTable = async (tableId: string, rows: any) => {
  const table = bigqueryClient.dataset(datasetId).table(tableId);
  await table.insert(rows);
};

export const updateTable = async (query: any) => {
  const [job] = await bigqueryClient.createQueryJob({ query });
  const [rows] = await job.getQueryResults();
  return rows;
};

export const deleteFromTable = async (query: any) => {
  const [job] = await bigqueryClient.createQueryJob({ query });
  const [rows] = await job.getQueryResults();
  return rows;
};