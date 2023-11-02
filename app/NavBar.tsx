"use client";
import React from 'react';
import Link from "next/link";
import {AiFillBug} from "react-icons/ai"
import {usePathname} from "next/navigation";
import cx from 'classnames';

export const NavBar = () => {
  const currentPath = usePathname()

  const links = [
    {label: "Dashboard", href: "/"},
    {label: "Issues", href: "/issues"}
  ]

  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/"><AiFillBug/></Link>
      <ul className="flex space-x-6">
        {links.map(({label, href}) =>
          <Link
            key={label}
            href={href}
            className={cx({
              "text-zinc-900": href === currentPath,
              "text-zinc-500 hover:text-zinc-800 transition-colors": true
            })}>
            {label}
          </Link>
        )}
      </ul>
    </nav>
  );
};

