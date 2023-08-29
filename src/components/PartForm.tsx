"use client"
import StyledPaper from './StyledPaper';
import MultipleSelect from './MultiSelect';

const PartForm = () => {
    return(
        <div>
            <h1>Add a Part</h1>
            <StyledPaper>
                <MultipleSelect />
            </StyledPaper>
        </div>
    );
}

export default PartForm;
