import { getCookies } from 'cookies-next';
import { useRouter } from 'next/navigation';

export async function isLoggedIn() {
    const cookie = getCookies('username');
    const router = useRouter();
  // Check if 'username' and 'role_id' cookies exist and their values are valid
  if (cookie == undefined) {
    // Optionally, you can perform additional checks here
    router.push('/login');
    return true;
  }
  return false;
}
