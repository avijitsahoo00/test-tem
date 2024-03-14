import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default function PageHadderAndButton({component, event}) {
    /* @para  looks like
        let component = {
            // it is a not necessary property (st)
            style : {
                display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "100%", padding: "4px"
            },
            buttons = [
                {
                    name: "button",
                    btnClassName: "primary",
                    style : {
                        padding: "4px"
                    },
                    link : "/"
                }
            ]
        }
        <-- use like this --> 
        <PageHadderAndButton  component/>

    */
    let temCss = { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "100%", padding: "4px" }
    let style = component?.style ? {...temCss, ...component?.style} : temCss
    let allButtons = component?.buttons || [{ name: "button" }]
    if (event) {
        return (
            <div style={style} >
            <h1>
                {component?.name || "test header"}
            </h1>
            <div>
            {allButtons.map((data) => 
               <Link key={data.name} to={data?.link || "/"} onClick={event} > <Button  variant={data.variant|| "outline-secondary"} style={data?.style ? {  minWidth: "180px", marginLeft:"50px", ...data.style} : {minWidth: "180px", marginLeft:"50px",}}  > {data.name} </Button> </Link>
            )}
            </div>
        </div>
        );
    } else {
        return (
            <>
                <div style={style} >
                    <h1>
                        {component?.name || "test header"}
                    </h1>
                    <div>
                    {allButtons.map((data) => 
                       <Link key={data.name} to={data?.link || "/"} > <Button  variant={data.variant|| "outline-secondary"} style={data?.style ? {  minWidth: "180px", marginLeft:"50px", ...data.style} : {minWidth: "180px", marginLeft:"50px",}}  > {data.name} </Button> </Link>
                    )}
                    </div>
                </div>
            </>
        )
    }
}
