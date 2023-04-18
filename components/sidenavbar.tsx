import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Logo from "./logo";

const SideNavbar = () => {

  const router = useRouter()

  return (
    // <div className={`flex flex-col justify-between items-center h-[inherit] py-24 px-12 xl:px-8`}>
    // <div className={`flex flex-col justify-between items-center pt-24 px-12 xl:px-8 h-[100%]`}>
    <div className={`flex flex-col justify-between items-center h-[inherit] xl:py-24`}>

      {/* <div className="h-20 overflow-y-scroll overscroll-contain">
          <div>check</div>
          <div>check</div>
          <div>check</div>
          <div>check</div>
          <div>check</div>
          <div>check</div>
          <div>check</div>
      </div> */}

      {/* <div className="flex flex-col items-center mx-20 xl:mx-12 pt-12 xl:pt-0 select-none cursor-pointer">
        <Image src={`/assets/brand/brand-dark.svg`} alt={`Usman Shaikh Logo`} width={500} height={500} priority={true} />
        
        <div className="font-bold text-3xl leading-none">
          <div className="text-accent">usman</div>
          <div className="">shaikh</div>
        </div>

        <div className="w-full text-center border-t border-t-white text-xs tracking-wider mt-1">web developer</div>

      </div> */}

      <div>
        <Logo />
      </div>


      <div className="flex flex-col items-center text-gray font-medium border-t border-b border-gray py-4 my-4">
        <Link href="/posts/dynamic-routing" className="nav-link py-2 px-4 xl:px-0">
          about
        </Link>

        <Link href="/posts/dynamic-routing" className="nav-link py-2 px-4 xl:px-0">
          work
        </Link>
        
        <Link href="/posts/dynamic-routing" className="nav-link py-2 px-4 xl:px-0">
          go to post1
        </Link>


        <Link
          href="/articles"
          className={`nav-link py-2 px-4 xl:px-0 ${router.pathname.includes("/articles") && "text-accent"}`}
        >
          articles
        </Link  >
      </div>

      <div className="mb-32 xl:mb-0 w-full">
        social links
      </div>

    </div>
  );
};

export default SideNavbar;
