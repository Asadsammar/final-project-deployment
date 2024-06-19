import { useRouter } from "next/navigation";
import { deleteCookie } from 'cookies-next';

export default function handler() {
    const router = useRouter();
    deleteCookie('username');
    deleteCookie('role_id');
    deleteCookie('email');
    router.push("/login");
}