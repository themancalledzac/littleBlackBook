'use client' // Unsure of syntax, TODO: investigate

import { useRouter } from 'next/navigation'
import { useEffect, useState } from "react";

export default function Page() {
    const [isLoggedIn, setIsLoggedIn] = useState( true );

    const router = useRouter();

    useEffect( () => {
        // Redirect based on the logged-in status
        if ( !isLoggedIn ) {
            router.replace( '/home' ); // Use replace to avoid redirect loop in history
        } else {
            router.replace( '/login' );
        }
    }, [isLoggedIn, router] );

    // Optional: Render a fallback or loading state while the redirect is being processed
    return <div>Loading...</div>;
}
