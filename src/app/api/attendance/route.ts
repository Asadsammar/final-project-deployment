// src/app/api/attendance/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { BigQuery } from '@google-cloud/bigquery';

const bigquery = new BigQuery({
  keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
  projectId: 'quick-pointer-414903', // Replace with your Google Cloud Project ID
});

export async function GET(req: NextRequest) {
  try {
    const query = `SELECT * FROM lecturer_attendance.attendance LIMIT 10`; // Update with your actual dataset
    const [rows] = await bigquery.query(query);

    return NextResponse.json(rows, { status: 200 });
  } catch (error) {
    console.error('Error querying BigQuery:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
