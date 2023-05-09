import React from 'react';

import { Container,ToggleLabel,ToggleSelector } from "./style";

const Toggle:React.FC=()=>(
<Container>
    <ToggleLabel>Dark</ToggleLabel>
    <ToggleSelector 
    checked={false}
    uncheckedIcon={false} 
    checkedIcon={false}
    onChange={()=>console.log("CERTO")}
    />
    <ToggleLabel>Light</ToggleLabel>
</Container>
)
export default Toggle;