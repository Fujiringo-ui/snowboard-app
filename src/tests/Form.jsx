import React from "react";
import { SearchBox, SearchButton } from "src/components/Form";
import { Spacer } from "src/components/Utility";

const Form = () => {
    return (
        <div>
            <SearchBox />
            <Spacer size={30} />
            <SearchButton />
        </div>
    )
}

export default Form;