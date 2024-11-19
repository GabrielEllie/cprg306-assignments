// Import the useUserAuth hook
"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context.js";

export default function SignInPage() {
    // Use the useUser  Auth hook to get the user object and the login and logout functions
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    
    // Sign in to Firebase with GitHub authentication
    async function handleSignIn() {
        try{
            await gitHubSignIn();
        } catch(error) {
            console.log(error);
        }
    }
    
    // Sign out of Firebase
    async function handleSignOut() {
        try{
            await firebaseSignOut();
        } catch(error) {
            console.log(error);
        }
    }

    
    // Display some of the user's information
    return (
        <main>
            <header>
                <h1 className="text-3xl text-w">Shopping List App</h1>
            </header>
            {user ? (
                <div>
                    <p>Welcome {user.displayName}!</p>
                    <p>{user.email}</p>
                    <div>
                        <img src={user.photoURL} />
                    </div>
                    <Link href="/week-9/shopping-list/">Shopping List Page</Link>
                    <div>
                    <button
                    type="button"
                    className="text-lg bg-cyan-600 text-white rounded"
                    onClick={handleSignOut}
                    >Sign Out</button>
                    </div>
                </div>
            ) : (
                <div>
                    <button
                    type="button"
                    className="text-lg bg-cyan-600 text-white rounded mt-5"
                    onClick={handleSignIn}
                    >Sign In with GitHub</button>
                </div>
            )}
        </main>
    );
}; 

