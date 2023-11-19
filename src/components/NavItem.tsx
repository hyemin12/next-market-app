import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";

const NavItem = ({ mobile }: { mobile?: boolean }) => {
  // 로그인한 사람의 상태 정보
  const { data: session, status } = useSession();
  console.log(session, status);
  return (
    <ul className={`flex justify-center items-center gap-4 w-full ${mobile && "flex-col h-full"} text-md  `}>
      <li className='py-2 text-center border-b-4 cursor-pointer'>
        <Link href='/admin'>관리자</Link>
      </li>
      <li className='py-2 text-center border-b-4 cursor-pointer'>
        <Link href='/user'>나의 마켓</Link>
      </li>
      {session?.user ? (
        <li className='py-2 text-center border-b-4 cursor-pointer'>
          <button onClick={() => signOut()}>로그아웃</button>
        </li>
      ) : (
        <li className='py-2 text-center border-b-4 cursor-pointer'>
          <button onClick={() => signIn()}>로그인</button>
        </li>
      )}
    </ul>
  );
};

export default NavItem;
