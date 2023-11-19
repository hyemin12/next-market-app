import Link from "next/link";
import React from "react";

const NavItem = ({ mobile }: { mobile?: boolean }) => {
  return (
    <ul className={`flex justify-center items-center gap-4 w-full ${mobile && "flex-col h-full"} text-md  `}>
      <li className='py-2 text-center border-b-4 cursor-pointer'>
        <Link href='/mypage'>나의 마켓</Link>
      </li>
      <li className='py-2 text-center border-b-4 cursor-pointer'>
        <Link href='/user'>채팅</Link>
      </li>
      <li className='py-2 text-center border-b-4 cursor-pointer'>
        <button>로그인</button>
      </li>
      <li className='py-2 text-center border-b-4 cursor-pointer'>
        <button>로그아웃</button>
      </li>
    </ul>
  );
};

export default NavItem;
