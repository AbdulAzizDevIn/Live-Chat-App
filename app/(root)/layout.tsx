import SideBarWrapper from "@/components/ui/shared/sidebar/SideBarWrapper"



type Props = React.PropsWithChildren<{}>

const layout = ({children}: Props) => {
  return (
    <SideBarWrapper>{children}</SideBarWrapper>
  )
}

export default layout