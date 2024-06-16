// src/pages/api/attendance.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { BigQuery } from '@google-cloud/bigquery';

const bigquery = new BigQuery({
  keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
  projectId: 'quick-pointer-414903', // Replace with your Google Cloud Project ID
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const query = `SELECT * FROM lecturer_attendance.attendance LIMIT 10`; // Update with your actual dataset
      const [rows] = await bigquery.query(query);

      res.status(200).json(rows);
    } catch (error) {
      console.error('Error querying BigQuery:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}