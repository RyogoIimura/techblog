import NextAuth from 'next-auth'
import { authOptions } from '@/app/utils/authOptions';

const handler = NextAuth(authOptions)
console.log(handler);
export { handler as GET, handler as POST }
