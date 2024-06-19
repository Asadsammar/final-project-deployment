// src/app/api/attendance/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { BigQuery } from '@google-cloud/bigquery';

const bigquery = new BigQuery({
  keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
  projectId: 'quick-pointer-414903', // Replace with your Google Cloud Project ID
});

export const config = {
    runtime: 'nodejs',
  };

export default async function handler(req, res) {
    try {
        const query = `SELECT * FROM lecturer_attendance.attendance LIMIT 10`; // Update with your actual dataset
        const options = {
          query: query,
        };
        const [rows] = await bigquery.query(options);
    
        res.status(200).json(rows);
      } catch (error) {
        console.error('Error fetching attendance:', error);
        return new Response(JSON.stringify({ error: 'Failed to fetch attendance data.' }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        });
      }
}
