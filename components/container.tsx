type Props = {
  children?: React.ReactNode
}

const Container = ({ children }: Props) => {
  return <div className="mx-auto px-5 xl:max-w-7xl animate-fadeInLeft">{children}</div>
}

export default Container
