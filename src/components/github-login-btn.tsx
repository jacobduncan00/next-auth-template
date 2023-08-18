import { Github } from "lucide-react"
import { useSession, signIn, signOut } from "next-auth/react"

export const GitHubLoginButton = () => {
    const { data: session } = useSession()
    if (session) {
        return (
            <>
                Signed in as {session?.user?.email} <br />
                <button className="btn w-fit" onClick={() => signOut()}>
                    Logout
                </button>
            </>
        )
    }
    return (
        <button className="btn w-fit" onClick={() => signIn()}>
            <Github className="h-6 w-6" />
            Login with GitHub
        </button>
    )
}