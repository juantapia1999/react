import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../hooks/useTypeSelector";
import { getUsuarios } from "../redux/actionTypeCreator/getUsuarios";
import UsuarioService from "../services/UsuarioService";
import Modal from "./Modal";

function ListaUsuario() {

    //const dispatch = useDispatch();       
    //const { usuarios, loading, error } = useTypedSelector((state) => state.usuarios);


    const [getResult, setResult] = useState<any>(null);
    const [getOne, setOne] = useState<any>(null);
    const [getIsView, setIsView] = useState(true);
    useEffect(() => {
        //se efecuta al montar el componente y cada vez que me quede escuchando la variable en la ultima parte

        const getData = async () => {
            const data = await UsuarioService.findAll();
            setResult(data);
        }
        getData();

        console.log("se montó")

        //clean up
        return () => {
            //se efecuta cuando el componente se desmonta
            document.querySelector(".fade")?.remove();
            document.body.className = "";
            document.body.removeAttribute("data-bs-overflow");
            document.body.removeAttribute("data-bs-padding-right");
            document.body.style.overflow = "visible"
            console.log("se destruyó")
        }
    }, []);

    const getById = async (id: number) => {

        try {
            const data = await UsuarioService.findById(id);
            setOne(data);
        } catch (error: any) {
            alert("error, revise la consola para mas detalles");
            console.log(error?.response?.data?.message)
        }
    }

    const getByIdRedux = async (id: number) => {
        //await dispatch(getUsuarios(id));
    }

    const showModal = (id: number, view: boolean) => {
        //console.log(usuarios, loading, error);
        //console.log(getIsView);
        view ? setIsView(true) : setIsView(false);
        //getByIdRedux(id);
        getById(id);
        //console.log(usuarios, loading, error);
        //console.log(getIsView);

    }


    return (<>
        <div className="container text-center">
            <div className="row">
                <div className="table-responsive">
                    <table className="table table-bordered table-hover">
                        <thead className="table-dark">
                            <tr>
                                <th>Id</th>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Email</th>
                                <th>Telefono</th>
                                <th>Password</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                getResult == null ?
                                    <>
                                        <tr><td colSpan={7}>Esperando datos</td></tr>
                                    </>
                                    : getResult.map((x: any) => {
                                        return (
                                            <tr key={x.id}>
                                                <th scope="row" >{x.id}</th>
                                                <td>{x.nombre}</td>
                                                <td>{x.apellido}</td>
                                                <td>{x.email}</td>
                                                <td>{x.telefono}</td>
                                                <td>{x.password}</td>
                                                <td>
                                                    <div className="btn-group btn-group-sm" role="group">
                                                        <button type="button" className="btn btn-outline-info" onClick={() => showModal(x.id, true)} data-bs-toggle="modal" data-bs-target="#exampleModal">Detalles</button>
                                                        <button type="button" className="btn btn-outline-warning" onClick={() => showModal(x.id, false)} data-bs-toggle="modal" data-bs-target="#exampleModal">Editar <i className="bi bi-exclamation-triangle-fill"></i></button>
                                                        <button type="button" className="btn btn-outline-danger">Borrar <i className="bi bi-trash-fill"></i></button>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })
                            }
                        </tbody>
                    </table>
                </div>

                <Modal obj={getOne} view={getIsView}></Modal>
            </div>

        </div>
    </>);
}

export default ListaUsuario;