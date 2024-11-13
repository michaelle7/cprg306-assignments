// week-9/page.js
"use client";
// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

// Use the useUserAuth hook to get the user object and the login and logout functions
export default function Week9Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

// Sign in to Firebase with GitHub authentication
  const login = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Error signing in: ", error);
    }
  };

// Sign out of Firebase
  const signout = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

// Display some of the user's information
// got rid of display name. followed what the instruction said
  return (
    <div className="container">
      {user ? (
        <div>
          <h1 className="text-4xl font-bold text-white">Shopping List App</h1>
          <p>Signed in as {user.email}</p>
          <button className="hover:underline" onClick={signout}>Sign out</button>
          <div>
            <Link href="/week-9/shopping-list">
              <button className="hover:underline">Go to Shopping List</button>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <h1 className="text-4xl font-bold text-white">Shopping List App</h1>
          <button className="hover:underline" onClick={login}>Login with GitHub</button>
        </div>
      )}
    </div>
  );
}
