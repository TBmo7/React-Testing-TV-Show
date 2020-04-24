import React from "react"
import {render} from "@testing-library/react"

import Episodes from "./Episodes"

test("Episodes renders", ()=>{
    render(<Episodes episodes ={[]}/>)
})

test("render episodes with a valid episode",()=>{
    const mockData = [{id:"oneID",image:"thisImage.jpg",season:"3",number:"4",name:"skills"}];
    const {queryAllByText,rerender} = render(<Episodes episodes={[]}/>)

    let info = queryAllByText(/skills/i);
    expect(info).toHaveLength(0);
    expect(info).toStrictEqual([])

    rerender(<Episodes episodes={mockData}/>)
    info = queryAllByText(/skills/i);
    expect(info).toHaveLength(1)
})