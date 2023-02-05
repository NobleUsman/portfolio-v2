import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const SideNavbar = () => {

  const router = useRouter()

  return (
    <div className={``}>
      test nav
      <br />

      <div className="h-20 overflow-y-scroll overscroll-contain">
          <div>check</div>
          <div>check</div>
          <div>check</div>
          <div>check</div>
          <div>check</div>
          <div>check</div>
          <div>check</div>
        </div>

      <Link href="/posts/dynamic-routing" className="nav-link">
        go to post1
      </Link>
      <br />
      <br />
      <Link
        href="/articles"
        className={`nav-link ${
          router.pathname.includes("/articles") && "text-accent"
        }`}
      >
        go to articles page
      </Link>

        <div>
          <Image src={`/assets/logo/brand-dark.svg`} alt={`Usman Shaikh Logo`} width={500} height={500} priority={true} />
        </div>

        {/* <div className="h-20 overflow-y-scroll overscroll-contain">
          <div>check</div>
          <div>check</div>
          <div>check</div>
          <div>check</div>
          <div>check</div>
          <div>check</div>
          <div>check</div>
        </div> */}


    </div>
  );
};

export default SideNavbar;
