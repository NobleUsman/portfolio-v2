import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Alert from './alert'
import Meta from './meta'
import { TbLayoutSidebarLeftExpand, TbLayoutSidebarLeftCollapse } from 'react-icons/tb'
import SideNavbar from './sidenavbar'
import Loader from './loader'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

// NOTE - 
// we have 3 layers defined here by z-index
// 1st is the loader layer, hence "z-[1]"
// 2nd is the mobile nav overlay layer, hence "z-[2]"
// 3rd is the mobile nav layer (header), hence "z-[3]"

const Layout = ({ preview, children }: Props) => {

  const [isLoading, setIsLoading] = useState(false)
  const [isSideBarOpen, setIsSideBarOpen] = useState(false)
  const router = useRouter()
  
  useEffect(() => {
    router.events.on('routeChangeStart', () => { setIsLoading(true); closeSidebar(); })
    router.events.on('routeChangeComplete', () => setIsLoading(false))
    router.events.on('routeChangeError', () => setIsLoading(false))
    return () => {
      router.events.off('routeChangeStart', () => { setIsLoading(true); closeSidebar(); })
      router.events.off('routeChangeComplete', () => setIsLoading(false))
      router.events.off('routeChangeError', () => setIsLoading(false))
    };
  }, [router.events]);

  const toggleSidebar = () => {
    isSideBarOpen ? closeSidebar() : setIsSideBarOpen(true)
  }

  const closeSidebar = () => {
    setIsSideBarOpen(false)
  }

  console.log('layout router ==> ', router)
  console.log('isLoading ===> ', isLoading)

  return (
    <>
      <Meta />  

        {/* <Alert preview={preview} /> */}
        <div className="grid xl:grid-cols-grid-cols-centered-content h-screen">

        {/* I had kept [className="relative"] in aside, dont know why, removing it isnt affecting anything yet */}
          <aside>

            <div onClick={toggleSidebar} className={`z-[2] fixed h-screen w-screen transition-all duration-500 ${isSideBarOpen ? "backdrop-blur-sm" : "invisible"} xl:hidden`}></div>

            <header className={`z-[3] text-white ${isSideBarOpen ? "translate-x-0" : "-translate-x-full"} max-xl:shadow-2xl xl:translate-x-0 w-64 xl:w-48 h-screen fixed transition-all ease-in-out duration-500`}>

              <nav className={`bg-dark-blue h-[inherit] relative selection:text-dark-blue`}>
                
                <button onClick={toggleSidebar} className={`cursor-pointer max-xl:block xl:hidden absolute top-4 -right-16 ${!isSideBarOpen && "backdrop-blur-sm"} rounded-md transition-all duration-500`}>
                  
                  {isSideBarOpen ? 
                    <TbLayoutSidebarLeftCollapse className="text-accent" size={50} />
                    :
                    <TbLayoutSidebarLeftExpand className="text-accent" size={50} />
                  }

                  <span className="sr-only">{`${isSideBarOpen ? 'Close' : 'Open'} Sidebar`}</span>

                </button>

                <SideNavbar />

              </nav>

            </header>
          </aside>

          <main>{children}</main>

          <div className={`hidden xl:block`}></div>

          {/* LOADER */}
          {/* <div className={`z-[1] fixed bg-light-blue w-screen xl:w-[calc(100vw-24.5rem)] h-screen xl:ml-48
           ${isLoading ? `show-loader` : `hide-loader`}`}>
            <div className='float-right'>loading...</div>
          </div> */}
          <div className={`z-[1] fixed bg-light-blue w-screen xl:w-[calc(100vw-24.5rem)] h-screen xl:ml-48 flex flex-col justify-center items-center
          ${isLoading ? `show-loader` : `hide-loader`}
          `}>
            <Loader />
          </div>

        </div>
 
          {/* To not show Footer on Hero Page */}
          {/* { router.route !== '/' ?  <Footer /> : null} */}
      
    </>
  )
}

export default Layout