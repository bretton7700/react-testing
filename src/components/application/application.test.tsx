import {Application} from "./application";
import {render,screen} from "@testing-library/react";
describe("Application",()=>{
    test("renders correctly",()=>{
        render(<Application/>)

        const pageHeading = screen.getByRole("heading",{
            level: 1
        })
        expect(pageHeading).toBeInTheDocument();

        const sectionHeader =screen.getByRole("heading",{
            level: 3
        })
        expect(sectionHeader).toBeInTheDocument();

        const nameElement = screen.getByRole("textbox",{
            name: "Name"
        });
        expect(nameElement).toBeInTheDocument();

        const nameElement2 = screen.getByLabelText("Name",{
            selector: "input"
        })
        expect(nameElement2).toBeInTheDocument();

        const bioElement = screen.getByRole("textbox",{
            name:"Bio"
        })
        expect(bioElement).toBeInTheDocument();


        const jobLocation = screen.getByRole("combobox");
        expect(jobLocation).toBeInTheDocument();

        const termsElement = screen.getByRole("checkbox");
        expect(termsElement).toBeInTheDocument();

        const termsElement2 =screen.getByLabelText("I agree to the terms and conditions")
        expect(termsElement2).toBeInTheDocument();

        const submitButton = screen.getByRole("button");
        expect(submitButton).toBeInTheDocument();

    })



})

