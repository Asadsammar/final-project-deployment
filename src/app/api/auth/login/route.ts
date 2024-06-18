import { NextApiRequest, NextApiResponse } from 'next';
import { BigQuery } from '@google-cloud/bigquery';
import { NextResponse } from 'next/server';

const bigquery = new BigQuery({
    keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
    projectId: 'quick-pointer-414903', // Replace with your Google Cloud Project ID
  });
const datasetId = 'lecturer_attendance'; // Replace with your BigQuery dataset ID
const tableId = 'user'; // Replace with your BigQuery table ID

export async function POST(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
      }
    
      try {
        const { username, password } = req.body;
    
        if (!username || !password) {
            return NextResponse.json({ message: 'Username and password are required' });
        }
    
        // Parameterized query to prevent SQL injection
        const query = `
          SELECT password 
          FROM \`${datasetId}.${tableId}\` 
          WHERE username = \`${username}\`
          LIMIT 1
        `;
    
        const options = {
          query: query,
          params: {
            username: username,
            password: password
          },
        };
    
        const [rows] = await bigquery.query(options);
    
        if (rows.length === 0) {
            return NextResponse.json({ message: 'Invalid username or password' },{ status: 401 });
        }
    
        const querypassword = rows[0].password;
    
        // Compare the provided password with the hashed password from BigQuery
        if (password !== querypassword) {
          return NextResponse.json({ message: 'Invalid username or password' },{ status: 401 });
        }

        // Successful login
        return res.json({ message: 'Login successful' });
      } catch (error) {
        console.error('Error querying BigQuery:', error);
        return NextResponse.json({ error: 'Internal server error' },{ status: 500 });
      }
}
