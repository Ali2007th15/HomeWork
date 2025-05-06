import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import SignOutButton from "@/components/SignOutButton";

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return (
      <div className="text-center mt-10">
        <h1>You are not logged in.</h1>
        <a href="/signin" className="text-blue-500 underline">Go to Sign In</a>
      </div>
    );
  }

  return (
    <div className="max-w-sm mx-auto mt-10 text-center">
      <h1 className="text-xl mb-4">Profile Page</h1>
      <p><strong>Name:</strong> {session.user.name}</p>
      <p><strong>Email:</strong> {session.user.email}</p>
      <div className="mt-4">
        <SignOutButton />
      </div>
    </div>
  );
}
