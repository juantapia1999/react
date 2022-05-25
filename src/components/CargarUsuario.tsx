import UsuarioService from "../services/UsuarioService";

function CargarUsuario() {
    const createUser = async (event: any) => {

        const regexText = /^([a-zA-Z]{3,15})$/g;
        const regexEmail = /^\w{2,15}\.?\w{2,15}\@\w{2,10}(\.\w{2,10}){1,3}$/g;
        const regexPassword = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,10}$/g;
        const { nombre, apellido, telefono, email, password, repassword } = event.target
        event.preventDefault();
        if (password.value !== repassword.value) {
            alert("Las contraseñas no coinciden");
            return;
        }
        const json = {
            nombre: nombre.value,
            apellido: apellido.value,
            telefono: telefono.value,
            email: email.value,
            password: password.value
        };

        if (!regexText.test(json.nombre) && !regexText.test(json.apellido)) {
            alert("Nombre y/o apellido tienen el formato incorrecto")
            return;
        }

        if (!regexEmail.test(json.email)) {
            alert("Formato de email incorrecto");
            return;
        }

        if (!regexPassword.test(json.password)) {
            alert("Formato de password incorrecto");
            return;
        }

        try {
            const result = await UsuarioService.create(json);
            alert(result.message);
        } catch (e: any) {
            alert("error, revise la consola para mas detalles");
            console.log(e?.response?.data?.message)
        }

    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-8 mx-auto">
                    <div className="card border-secondary">
                        <form onSubmit={createUser}>
                            <div className="card-body">
                                <h5 className="card-title mb-4 text-center">Cargar un nuevo Usuario</h5>
                                <div className="mb-3">
                                    <label htmlFor="nombre" className="form-label">Nombre:</label>
                                    <input type="text" className="form-control" id="nombre" minLength={3} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="apellido" className="form-label">Apellido:</label>
                                    <input type="text" className="form-control" id="apellido" minLength={3} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email:</label>
                                    <input type="email" className="form-control" id="email" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="telefono" className="form-label">Telefono:</label>
                                    <input type="text" className="form-control" id="telefono" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password:</label>
                                    <input type="password" className="form-control" id="password" minLength={8} maxLength={10} required />
                                </div>
                                <div className="mb-1">
                                    <label htmlFor="repassword" className="form-label">Re-password:</label>
                                    <input type="password" className="form-control" id="repassword" minLength={8} maxLength={10} required />
                                </div>
                            </div>
                            <div className="card-footer">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CargarUsuario;