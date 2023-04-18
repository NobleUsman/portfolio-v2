import Logo from "./logo"
import Progress from "./progress"

const Loader = () => {
  return (
    <div className="flex flex-col items-center h-[22.5rem] w-3/4 md:w-1/2 xl:w-[30%]">
      <Logo />
      <div className="w-full">
        <Progress type="indeterminate" />
      </div>
    </div>
  )
}

export default Loader