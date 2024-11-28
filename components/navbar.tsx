"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";
export default function Navbar() {
    const pathname = usePathname();

    return <header>
        <div>
            <Link
                style={{
                    float: "left",
                }}
                className={pathname === "/" ? "active" : ""}
                href="/">Home </Link>
            <a style={{
                float: "right"
            }} target="_blank" href="https://github.com/anmolplayzz/resources">GitHub</a>
        </div>
    </header>
}