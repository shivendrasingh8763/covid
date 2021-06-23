import React,{useState,useEffect} from "react";
import { withRouter } from "react-router";

 function User(){
     const [adata,setAdata]=useState([]);
    useEffect(() => {

        fetch("https://corona.lmao.ninja/v2/countries").then((result) => {
            result.json().then((resp) => {
                setAdata(resp);
            })
        })
    }, [])
   
    
    return(
        <>
         
        <h1>Countries Data is show in Next page  </h1>
        <button onClick={()=>{
            return(
            <div>
                <table>
                    
                        {
                            adata.map((aitem)=>{
                               return(
                                   <div>
                                    <tr>
                                    <td>{aitem.country}</td>
                                    <td>{aitem.cases}</td>
                                    <td>{aitem.countryInfo._id}</td>
                                </tr>
                                </div>
                               )
                            })
                        }
                    
                </table>
            </div>
        )
        }}>data</button>
         
        </>
    )
}
export default withRouter(User);