import {fetchAccount} from '@/lib/fetchAccount';
import { serialize,parse } from 'cookie';
import { setCookie } from 'cookies-next';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
    return;
  }

  const { username, password } = req.body;
  try {
    const users = await fetchAccount(username); // Fetch data for the specific username

    if (users.length > 0) {
      const user = users[0];
      if (user.password === password) { // Validate credentials
        setCookie('username', user.username, { req, res, maxAge: 60 * 60 * 24 * 30 });
        setCookie('role_id', user.role_id, { req, res, maxAge: 60 * 60 * 24 * 30 });
        setCookie('email', user.email, { req, res, maxAge: 60 * 60 * 24 * 30 });
        res.status(200).json({ message: 'Login successful', role: user.role_id, username: user.username, email: user.email });
      } else {
        res.status(401).json({ error: 'Invalid Username or Password' });
      }
    } else {
      res.status(404).json({ error: 'Cannot find username' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}