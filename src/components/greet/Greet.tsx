import { GreetProps } from "./greet.types"
const Greet = (props: GreetProps) => {
  return (
    <div>hello {props.name}</div>
  )
}

export default Greet
