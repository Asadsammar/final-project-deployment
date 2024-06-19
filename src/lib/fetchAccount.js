
import { BigQuery } from '@google-cloud/bigquery';

const bigquery = new BigQuery({
  keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
  projectId: 'quick-pointer-414903', // Replace with your Google Cloud Project ID
});

export async function fetchAccount(username) {
  const query = `SELECT username, password, role_id FROM lecturer_attendance.user WHERE username = @username LIMIT 1`;
  const options = {
    query: query,
    params: { username: username }
  };

  const [rows] = await bigquery.query(options);
  return rows;
}