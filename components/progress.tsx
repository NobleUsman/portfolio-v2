import { forwardRef } from "react";

type Props = {
  width?: number,
  type: 'determinate' | 'indeterminate',
}

const Progress = forwardRef(function Progress({ width = 100, type } : Props, ref: React.RefObject<HTMLDivElement>) {

  const style = {
    width: `${width}%`
  }

  return (
    <>
      {/* progress-bar */}
      <div className={`h-1 bg-gray w-full overflow-hidden`}>
        {/* progress-bar-value */}
        <div 
        ref={ref}
        className={`
        h-full 
        bg-accent 
        origin-[0%_50%] 
        ${type === 'determinate' ? 'animate-determinateProgress' : 'animate-inDeterminateProgress'}
        `}
        
        style={style}
        ></div>
      </div>
    </>
  )
})

export default Progress