import { render,screen } from "@testing-library/react";
import Greet from "./Greet";

test('Greet renders correctly',()=>{
    render(<Greet/>)
    const expectedText =screen.getByText(/hello/i)
    expect(expectedText).toBeInTheDocument();

})


test('Greet renders with a name', ()=>{
    render(<Greet name="Bretton"/>)
    const expectedText = screen.getByText(/Hello Bretton/i)
    expect(expectedText).toBeInTheDocument();
})