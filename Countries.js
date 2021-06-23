import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom"
import User from "./User";

export default function Countries() {
    const [data, setData] = useState([]);


    useEffect(() => {

        fetch("https://corona.lmao.ninja/v2/countries").then((result) => {
            result.json().then((resp) => {
                setData(resp);
            })
        })
    }, [])

    return (

        <>
            <div>
                <BrowserRouter>
                    <table border="1px">
                        <tbody>
                            <div>
                                <tr>
                                    <th>id</th>
                                    
                                    <th>country</th>

                                    <th>cases</th>

                                    <th>todayCases</th>
                                    <th>deaths</th>
                                    <th>todayDeaths</th>
                                    <th>recovered</th>
                                    <th>todayRecovereds</th>
                                    <th>active</th>
                                    <th>critical</th>
                                    <th>tests</th>
                                    <th>population</th>
                                    <th>continent</th>
                                    <th>oneCasePerPeople</th>
                                    <th>oneDeathPerPeople</th>
                                </tr>
                            </div>

                            {
                                data.map((item, i) => {
                                    return (
                                        <div>

                                            <tr key="1">
                                                <td>{item.countryInfo._id}</td>
                                               
                                                <td><Link to={"/user/" + item.countryInfo._id}>{item.country}</Link></td>

                                                <td>{item.cases}</td>

                                                <td>{item.todayCases}</td>
                                                <td>{item.deaths}</td>
                                                <td>{item.todayDeaths}</td>
                                                <td>{item.recovered}</td>
                                                <td>{item.todayRecovereds}</td>
                                                <td>{item.active}</td>
                                                <td>{item.critical}</td>
                                                <td>{item.tests}</td>
                                                <td>{item.population}</td>
                                                <td>{item.continent}</td>
                                                <td>{item.oneCasePerPeople}</td>
                                                <td>{item.oneDeathPerPeople}</td>
                                            </tr>
                                            <Route exact path={"/user/" + item.countryInfo._id} ><User /></Route>
                                        </div>
                                    )

                                })

                            }

                        </tbody>
                    </table>
                </BrowserRouter>
            </div>

        </>
    )
}
