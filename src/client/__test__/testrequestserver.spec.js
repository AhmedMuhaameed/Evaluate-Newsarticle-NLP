import axios from "axios";
import {getServerResponse} from "../js/requestserver";
import "regenerator-runtime/runtime";

describe('Test handle submit functionality',()=>{
    test('Testing if it defined',()=>{
        expect(getServerResponse).toBeDefined();
    })
})