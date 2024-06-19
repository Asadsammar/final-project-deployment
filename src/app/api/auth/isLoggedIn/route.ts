'use server';
import { NextApiRequest, NextApiResponse } from 'next';
import { BigQuery } from '@google-cloud/bigquery';
import { serialize } from 'cookie';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

const username = NextResponse.next().cookies.get('username')?.value;

export async function GET(req: NextRequest) {
    if(!username) {
        return NextResponse.json({ loggedIn: true });
    } else {
        return NextResponse.json({ loggedIn: false });
    }
}