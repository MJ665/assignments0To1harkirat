import { getServerSession } from "next-auth/next";
import { authOptions } from "../lib/auth";  // Make sure this matches your actual export

export async function GET() {
    try {
        const session = await getServerSession(authOptions);
        return new Response(JSON.stringify(session), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed to get session' }), { status: 500 });
    }
}
