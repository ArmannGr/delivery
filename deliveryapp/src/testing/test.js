import {Button} from "react-bootstrap";
import React from 'react';
import AddARandomRestaurant from "./DataGenerator";


export default function TestPage(){
    return (
        <>
            <Button onclick={AddARandomRestaurant()}>Hello</Button>
        </>
    )
}