"use client";

import Link from "next/link";
import React, { useState } from "react";
import NavItem from "./NavItem";

const NavBar = () => {
  const [menu, setMenu] = useState<boolean>(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <nav className='relative z-10 w-full bg-orange-500 text-white'>
      <div className='flex items-center justify-between mx-5 sm:mx-10 lg:mx-20'>
        <div className='flex items-center text-2xl h-14'>
          <Link href='/'>중고마켓</Link>
        </div>

        <div className='hidden sm:block'>
          <NavItem />
        </div>

        {/* 모바일 버전에서 사용하는 버튼&메뉴바 */}
        <div className='text-2xl sm:hidden'>
          {menu === false ? <button onClick={toggleMenu}>햄버거</button> : <button onClick={toggleMenu}>닫기</button>}
        </div>

        <div className='block sm:hidden'>{menu === false ? null : <NavItem mobile />}</div>
      </div>
    </nav>
  );
};

export default NavBar;
