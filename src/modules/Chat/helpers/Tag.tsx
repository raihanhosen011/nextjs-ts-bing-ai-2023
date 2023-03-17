import Link from "next/link";
import React from "react";

const Tag = () => {
  return (
    <>
      <ul className="flex items-center gap-3 flex-wrap">
        <Link href="#">
          <li className="hover:underline text-sm bg-blue-200 text-blue-800 cursor-pointer px-2 py-1 rounded-md">1. tidio.com</li>
        </Link>
        <Link href="#">
          <li className="hover:underline text-sm bg-blue-200 text-blue-800 cursor-pointer px-2 py-1 rounded-md">1. tidio.com</li>
        </Link>
        <Link href="#">
          <li className="hover:underline text-sm bg-blue-200 text-blue-800 cursor-pointer px-2 py-1 rounded-md">1. tidio.com</li>
        </Link>
        <Link href="#">
          <li className="hover:underline text-sm bg-blue-200 text-blue-800 cursor-pointer px-2 py-1 rounded-md">1. tidio.com</li>
        </Link>
        <Link href="#">
          <li className="hover:underline text-sm bg-blue-200 text-blue-800 cursor-pointer px-2 py-1 rounded-md">1. tidio.com</li>
        </Link>
      </ul>
    </>
  );
};

export default Tag;
