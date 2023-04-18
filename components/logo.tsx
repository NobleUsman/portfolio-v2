import Image from "next/image"

const Logo = () => {
  return (
    <div className="w-fit select-none text-center">
      <Image src={`/assets/brand/brand-dark.svg`} alt={`Usman Shaikh Logo`} width={98} height={98} priority={true} />
      
      <div className="font-bold text-3xl leading-none">
        <div className="text-accent">usman</div>
        <div className="tracking-[0.5px]">shaikh</div>
      </div>

      <div className="border-t border-t-white text-xs tracking-wider mt-1">web developer</div>
    </div>
  )
}

export default Logo