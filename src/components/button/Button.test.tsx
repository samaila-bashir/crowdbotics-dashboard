import { cleanup, render, screen} from '@testing-library/react';
import Button from "./Button";

afterEach(cleanup)

describe('Should test Button component and verify it renders correctly',()=>{

    test('Should ensure button variant written correctly', () => {
         render(<Button onClick={()=>""} title="Button Text" variant='contained'/>);
         const linkElement = screen.getByText('Button Text');
         expect(linkElement).toBeInTheDocument();
    });
 
 })