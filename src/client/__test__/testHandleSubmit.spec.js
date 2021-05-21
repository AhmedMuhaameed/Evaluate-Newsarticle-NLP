import axios from "axios";
import {handleSubmit} from "../js/formHandler";
import "regenerator-runtime/runtime";

describe('Test handle submit functionality',()=>{
    test('Testing if it defined',()=>{
        expect(handleSubmit).toBeDefined();
    })
})