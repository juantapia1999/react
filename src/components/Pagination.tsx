import React, { useEffect } from "react"

interface Props {
    onClick: (n: boolean) => any
}

const Pagination: React.FC<Props> = ({ onClick }) => {


    const refreshData = (next: boolean) => {
        //console.log("mando de pag "+next)
        onClick(next);
    }

    return (
        <div className="row">
            <button className="btn btn-secondary  col-3" type="button" onClick={() => refreshData(false)}>Mostrar anterior</button>
            <div className="col-6"></div>
            <button className="btn btn-primary col-3" type="button" onClick={() => refreshData(true)}>Mostrar siguiente</button>    
        </div>
    );
};

export default Pagination;