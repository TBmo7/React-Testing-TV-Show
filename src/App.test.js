import React from "react"
import {render,fireEvent,waitFor} from '@testing-library/react'
import {fetchShow as mockFetchShow} from "./api/fetchShow"

import App from "./App"

jest.mock("./api/fetchShow");
console.log(mockFetchShow);

test("App fetches show data, and renders", async ()=>{
    const mockData = {data:[{id:"id1",name:"showName",status:"notrunning"}]}
    mockFetchShow.mockResolvedValueOnce(mockData)
})