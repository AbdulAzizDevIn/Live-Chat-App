import { Card } from "../../card";


type Props = React.PropsWithChildren<{
    title:string;
    action?:React.ReactNode;
}>

const itemList = ({children,title,action}: Props) => {
  return (
    <Card className="h-full w-full lg:flex-none lg:w-80 p-2">
        <div>
            
        </div>
    </Card>
  )
}

export default itemList