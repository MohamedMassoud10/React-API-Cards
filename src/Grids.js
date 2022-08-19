import React from "react"
import Maincontent from "./MainContent"
import Data from "./Jokedata"
console.log(Data)
export default function Grids() {
    let Cards = Data.map((e) => {
        return (
            <div>
                <Maincontent
                {...e}
            />
            </div>
        )
    })
    return (
        <div className="container">
            {Cards}
        </div>
    )
}
console.log(Data)