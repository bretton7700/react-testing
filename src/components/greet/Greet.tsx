type GreetProps ={
  name?: String
}

const Greet = (props: GreetProps) => {
  return (
    <div>hello {props.name}</div>
  )
}

export default Greet
