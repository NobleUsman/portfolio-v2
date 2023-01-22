type Props = {
  title: string;
  children?: React.ReactNode;
};

const Intro = ({ title, children }: Props) => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between xl:items-baseline mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold leading-tight md:pr-8 text-accent">
        {title}
      </h1>
      {children}
    </section>
  );
};

export default Intro;
