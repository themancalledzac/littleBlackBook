'use client'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Home() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const router = useRouter();

    useEffect(() => {
        if (isLoggedIn) {
            router.push('/user');
        } else {
            setIsLoggedIn(false);
            // Redirect to the login page
            router.push('/login');
        }

    }, []);

    return (
        null
    );
}

// TODO: how do we useState across pages that aren't children of our main page.jsx?
// want the login.js page to direct to the user.js page once the user isLoggedIn
// We want to useState of isLoggedIn on the user.js page and the login.js page