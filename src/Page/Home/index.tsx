import React from "react";
import { URLComponent } from "./components/url";

class Home extends React.Component{
    render()
    {
        return(
            <div style={{width:'100%',overflow:'clip'}}>
                <URLComponent/>
            </div>
        )
    }
}
export {
    Home
}