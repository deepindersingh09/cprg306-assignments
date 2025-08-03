"use client";
import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <div style={{ padding: 20 }}>
      {!user ? (
        <button onClick={gitHubSignIn}>Login with GitHub</button>
      ) : (
        <>
          <p>Welcome, {user.displayName} ({user.email})</p>
          <button onClick={firebaseSignOut}>Logout</button>
          <br />
          <Link href="/week-10/shopping-list">Go to Shopping List</Link>
        </>
      )}
    </div>
  );
}
