import Link from 'next/link'
import React from 'react'

const navbar = () => {
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link href="/cricket">Cricket</Link></li>
                            <li><Link href="/football">Football</Link></li>
                            <li><Link href="/basketball">Basketball</Link></li>
                            <li><Link href="/volleyball">Volleyball</Link></li>
                            <li><Link href="/tabletennis">Table Tennis</Link></li>
                            <li><Link href="/sponsors">Sponsors</Link></li>
                            <li><Link href="/timeline">Timeline</Link></li>
                        </ul>
                    </div>
                    <Link href="/" className="btn btn-ghost text-xl">OLYMPUS</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link href="/cricket">Cricket</Link></li>
                        <li><Link href="/football">Football</Link></li>
                        <li><Link href="/basketball">Basketball</Link></li>
                        <li><Link href="/volleyball">Volleyball</Link></li>
                        <li><Link href="/tabletennis">Table Tennis</Link></li>
                        <li><Link href="/sponsors">Sponsors</Link></li>
                        <li><Link href="/timeline">Timeline</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link href="/scoreboard" className="btn">Scoreboard</Link>
                </div>
            </div>
        </>
    )
}

export default navbar