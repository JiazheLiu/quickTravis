import React from 'react'
import Chore from "./Chore";
import { render } from '@testing-library/react'
test('not display pending', ()=>{
     const chore = {
         cid: "-M6BUTJAhUwM9SDWh0NR",
         dueDate: new Date("Mon May 04 2020 23:59:00 GMT-0500 (北美中部夏令时间)"),
         gid: "personal",
         name: "Clean the window",
         status: "incomplete",
         uid: "0oIzrfeQZMSRYtit75S4GSWYTGx1"
     }
    const { getByTestId} = render(<Chore uid={"0oIzrfeQZMSRYtit75S4GSWYTGx1"} chore={chore}/>)
    const DIV_ID = "-M6BUTJAhUwM9SDWh0NR";
    const div = getByTestId(DIV_ID);
    expect(div.textContent).toBe("Pending")})