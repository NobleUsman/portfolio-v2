import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Alert from './alert'
import Footer from './footer'
import Meta from './meta'
import { TbLayoutSidebarLeftExpand, TbLayoutSidebarLeftCollapse } from 'react-icons/tb'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {

  const router = useRouter()

  console.log('layout router ==> ', router)

  // const [time, setTime] = useState(new Date().getSeconds());

  // useEffect(() => {
  //   let timer = setInterval( () => {
  //     setTime(new Date().getSeconds())
  //   }, 1000)
    
  //   return () => clearInterval(timer);
  // }, [time])

  const [isSideBarOpen, setIsSideBarOpen] = useState(false)

  const toggleSidebar = () => {
    isSideBarOpen === true ? setIsSideBarOpen(false) : setIsSideBarOpen(true)
  }

  const closeSidebar = () => {
    setIsSideBarOpen(false)
  }

  useEffect(() => {
    router.events.on('routeChangeStart', closeSidebar);

    return () => router.events.off('routeChangeStart', closeSidebar);
  }, [router.events]);

  return (
    <>
      <Meta />
        
        <div className="grid xl:grid-cols-grid-cols-centered-content h-screen">

          <aside>
            <header className={`z-10 text-white ${isSideBarOpen ? "translate-x-0" : "-translate-x-full"} max-xl:shadow-accent xl:translate-x-0 w-64 xl:w-48 h-screen fixed transition-all ease-in-out duration-500`}>

              <nav className={`bg-dark-blue h-[inherit] relative`}>
                
                <button onClick={toggleSidebar} className={`cursor-pointer max-xl:block xl:hidden absolute top-4 -right-16 ${!isSideBarOpen && "backdrop-blur-sm"} rounded-md transition-all duration-500`}>
                  
                  {isSideBarOpen ? 
                    <TbLayoutSidebarLeftCollapse className="text-accent" size={50} />
                    :
                    <TbLayoutSidebarLeftExpand className="text-accent" size={50} />
                  }
                </button>

                <div className={``}>
                  test nav
                  <br />

                  <Link href="/posts/dynamic-routing" className='nav-link'>go to post1</Link>
                  <br />
                  <br />
                  <Link href="/articles" className={`nav-link ${router.pathname.includes('/articles') && 'text-accent'}`}>go to articles page</Link>

                </div>

              </nav>

            </header>
          </aside>

          <main>{children}</main>

          {/* <div className="hidden xl:block"></div> */}
          {/* using desktop view's 3rd grid box as overlay for mobile sidebar */}
          <div onClick={toggleSidebar} className={`w-full h-full fixed ${isSideBarOpen ? "backdrop-blur-sm" : "invisible"} transition-all duration-500 xl:static xl:bg-inherit`}></div>
        </div>
 
        {/* <div className="min-h-screen">
          <Alert preview={preview} />
          <nav>test nav</nav>
          <main>{children}</main>
        </div> */}

          {/* To not show Footer on Hero Page */}
          {/* { router.route !== '/' ?  <Footer /> : null} */}
      
    </>
  )
}

export default Layout