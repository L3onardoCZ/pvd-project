import React, { useEffect, ReactNode } from 'react';
import { useRouter } from 'next/router';

interface IsLoggedInProps {
    children: ReactNode;
}

const IsLoggedIn: React.FC<IsLoggedInProps> = ({ children }) => {
    const router = useRouter();

    useEffect(() => {
        const isLoggedIn = sessionStorage.getItem('isLoggedIn');
        if (!isLoggedIn || isLoggedIn !== 'true') {
          router.replace('/');
        }
    }, []);

    return <>{children}</>;
}

export default IsLoggedIn;
