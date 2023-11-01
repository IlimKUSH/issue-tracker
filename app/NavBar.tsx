import React from 'react';
import Link from "next/link";
import {AiFillBug} from "react-icons/ai"

export const NavBar = () => {
  const links = [
    {label: "Dashboard", value: "/"},
    {label: "Issues", value: "/issues"}
  ]

  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/"><AiFillBug/></Link>
      <ul className="flex space-x-6">
        {links.map(({label, value}) =>
          <Link
            key={label}
            href={value}
            className="text-zinc-500 hover:text-zinc-800 transition-colors">
            {label}
          </Link>
        )}
      </ul>
    </nav>
  );
};

