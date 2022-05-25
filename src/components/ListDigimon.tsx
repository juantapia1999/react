import React, { useEffect, useState } from "react";
import DigimonService from "../services/DigimonService";

function ListApi() {


    const [getResult, setResult] = useState<any>(null);

    useEffect(() => {
        console.log("se monto la lista")
        const getRandom = async () => {
            const data = await DigimonService.GetList();
            setResult(data);
        }

        getRandom();
        return () => {

            console.log("antes de destruir la lista")
        }
    }, []);
    return (
        <div className="container">
            {
                getResult == null ?
                    <p>esperando datos</p>
                    :
                    <div className="card-group">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4">
                            {
                                getResult.map((x: any, i: any) => {
                                    return (

                                        <div className="col" key={i}>
                                            <div className="card shadow p-3 mb-5 bg-body rounded">
                                                <img src={x.img} className="card-img-top" alt="" />
                                                <div className="card-body">
                                                    <h5 className="card-title">{x.name}</h5>
                                                    <p className="card-text">Level: {x.level}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
            }
        </div>
    )
}

export default ListApi;