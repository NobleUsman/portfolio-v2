import Link from "next/link";
import { ImArrowLeft2 } from "react-icons/im";

type Props = {
  url: string;
  title: string;
  position: "top" | "bottom";
};

const NavigateBackTo = ({ url, title, position }: Props) => {
  return (
    <h2
      className={`text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight max-xl:mt-20 ${
        position === "top" ? "mb-20 mt-8" : "mb-8 mt-20"
      }`}
    >
      <Link href={url} className="nav-link lg:tracking-wide">
        <ImArrowLeft2 className="text-accent w-4 md:w-8 mr-1 md:mr-2 -mt-1 md:-mt-2 inline-block" />
        back to {title}
      </Link>
    </h2>
  );
};

export default NavigateBackTo;
