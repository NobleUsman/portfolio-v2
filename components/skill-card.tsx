import { useRef } from "react"
import Progress from "./progress";

type Props = {
  rank: number
}

const SkillCard = ({ rank } : Props) => {
  let progressRef = useRef<HTMLDivElement>(null);
  
  const determinateAnimationKeyframes = [
    { transform: "translateX(-100%) scaleX(0)", offset: 0 },
    { transform: "translateX(0) scaleX(1)", offset: 1 }
  ];

  const animationOptions = {
    duration: 1300,
    easing: "ease-out"
  };

  const handleClick = () => {
    progressRef.current.animate(determinateAnimationKeyframes, animationOptions);
  }

  return (
    <>
      <button onClick={handleClick}>skill button</button>
      <Progress type="determinate" width={rank} ref={progressRef} />
    </>
  )
}

export default SkillCard