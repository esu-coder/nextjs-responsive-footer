import { useRouter } from 'next/router';
import React, { PropsWithChildren } from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';

const Layout = ({ children }: PropsWithChildren) => {

    const router = useRouter()
    let showNavFooter = true

    if (router.pathname === '/login') {
        showNavFooter = false
    }

    return (
        <>
            {showNavFooter && <Navbar />}
            <main>
                {children}
            </main>
            {showNavFooter && <Footer />}
        </>
    )
}

export default Layout