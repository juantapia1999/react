import React, { useEffect, useState } from "react";
import Usuario from "../interfaces/Usuario"

const Modal = ({obj,view}:any) => {

    const [getUser, setUser] = useState<Usuario>({
        id: "",
        nombre: "",
        apellido: "",
        telefono: "",
        password: "",
        email: ""
    });

    useEffect(() => {
        console.log("modal instanciado", obj);
        if (obj != null) {
            setUser(
                (user: any) => ({
                    ...user,
                    nombre: obj.nombre,
                    apellido: obj.apellido,
                    email: obj.email,
                    telefono: obj.telefono,
                    password: obj.password,
                    id: obj.id
                })
            )
        }

        return (() => {
            console.log("modal casi destruido");
        })
    }, [obj])

    const handdleChange = (e: any) => {
        setUser((user: any) => ({
            ...user,
            [e.target.id]: e.target.value
        }))
    }

    return (
        <>{view ?
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Datos del Usuario</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p className="text-left"><strong>Id:</strong> {obj?.id}</p>
                            <p className="text-left"><strong>Nombre:</strong> {obj?.nombre}</p>
                            <p className="text-left"><strong>Apellido:</strong> {obj?.apellido}</p>
                            <p className="text-left"><strong>Telefono:</strong> {obj?.telefono}</p>
                            <p className="text-left"><strong>Email:</strong> {obj?.email}</p>
                            <p className="text-left"><strong>Password:</strong> {obj?.password}</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            :
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Actualizar datos del Usuario</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label htmlFor="nombre" className="form-label">Nombre:</label>
                                <input type="text" value={getUser.nombre} onChange={(e) => handdleChange(e)} className="form-control" id="nombre" minLength={3} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="apellido" className="form-label">Apellido:</label>
                                <input type="text" value={getUser.apellido} onChange={(e) => handdleChange(e)} className="form-control" id="apellido" minLength={3} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email:</label>
                                <input type="email" value={getUser.email} onChange={(e) => handdleChange(e)} className="form-control" id="email" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="telefono" className="form-label">Telefono:</label>
                                <input type="text" value={getUser.telefono} onChange={(e) => handdleChange(e)} className="form-control" id="telefono" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password:</label>
                                <input type="password" value="" onChange={(e) => handdleChange(e)} className="form-control" id="password" minLength={8} maxLength={10} required />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        }</>

    )
}

export default Modal;