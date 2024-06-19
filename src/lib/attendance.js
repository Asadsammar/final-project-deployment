// src/app/api/attendance/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { BigQuery } from '@google-cloud/bigquery';

const bigquery = new BigQuery({
  keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
  projectId: 'quick-pointer-414903', // Replace with your Google Cloud Project ID
});

export default async function fetchAttendance() {
    const query = `SELECT * FROM lecturer_attendance.attendance LIMIT 10`; // Update with your actual dataset
    const options = {
      query: query,
    };
    const [rows] = await bigquery.query(options);

    return rows;
}
