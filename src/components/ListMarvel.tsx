import React, { useEffect, useState } from "react"
import MarvelService from "../services/MarvelService";
import CardCharacter from "./CardCharacter";
import Pagination from "./Pagination";

const ListMarvel = () => {

    const [getResult, setResult] = useState<any>(null);

    const getList = async (nextResult: boolean) => {
        MarvelService.SetOffsetCount(nextResult);
        const { data } = await MarvelService.GetList();
        const { results } = data;
        setResult(results);
    }

    useEffect(() => {

        getList(false);

        return () => {
        }
    }, [])

    const refreshCharacters = async (next: any) => {
        //console.log("llego a lista "+next)
        await getList(next);
    }

    return (
        <div className="row">
            {
                getResult == null ?
                    <p>Esperando datos</p>
                    : <>
                        <div className="card-group card-container">
                            <div className="card-header border-0 col-12 bg-transparent">
                                <Pagination onClick={(e: any) => refreshCharacters(e)}></Pagination>
                            </div>

                            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 g-4">
                                {
                                    getResult.map((x: any, i: any) => {
                                        return (
                                            <CardCharacter character={x} i={i} key={i}></CardCharacter>
                                        );
                                    })
                                }
                            </div>
                            <div className="card-footer border-0 col-12 bg-transparent">
                                <Pagination onClick={(e: any) => refreshCharacters(e)}></Pagination>
                            </div>

                        </div>
                        <div className="col-12"><br /></div>
                    </>
            }
        </div>
    )
}

export default ListMarvel;