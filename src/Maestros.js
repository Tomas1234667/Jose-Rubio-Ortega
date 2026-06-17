import React, { useState } from "react";

const Maestros = () => {

    const [mostrarModal, setMostrarModal] = useState(false);

    const [nombre, setNombre] = useState("");
    const [materia, setMateria] = useState("");
    const [correo, setCorreo] = useState("");
    const [telefono, setTelefono] = useState("");
    const [busqueda, setBusqueda] = useState("");

    const [editando, setEditando] = useState(null);

    const [maestros, setMaestros] = useState([{
            id: 1,
            nombre: "Juan Pérez",
            materia: "Matemáticas",
            correo: "juan@gmail.com",
            telefono: "6561234567",



        },

        {
            id: 2,
            nombre: "María López",
            materia: "Español",
            correo: "maria@gmail.com",
            telefono: "6562345678",
        },

        {
            id: 3,
            nombre: "Carlos García",
            materia: "Historia",
            correo: "carlos@gmail.com",
            telefono: "6563456789",
        },

        {
            id: 4,
            nombre: "Ana Martínez",
            materia: "Ciencias",
            correo: "ana@gmail.com",
            telefono: "6564567890",
        },

        {
            id: 5,
            nombre: "Luis Hernández",
            materia: "Inglés",
            correo: "luis@gmail.com",
            telefono: "6565678901",
        },
        {
            id: 6,
            nombre: "Sofía Ramírez",
            materia: "Biología",
            correo: "sofia@gmail.com",
            telefono: "6566789012",
        },
        {
            id: 7,
            nombre: "Miguel Torres",
            materia: "Física",
            correo: "miguel@gmail.com",
            telefono: "6567890123",
        },
        {
            id: 8,
            nombre: "Fernanda Díaz",
            materia: "Química",
            correo: "fernanda@gmail.com",
            telefono: "6568901234",
        },
        {
            id: 9,
            nombre: "Jorge Castillo",
            materia: "Geografía",
            correo: "jorge@gmail.com",
            telefono: "6569012345",
        },
        {
            id: 10,
            nombre: "Valeria Moreno",
            materia: "Educación Física",
            correo: "valeria@gmail.com",
            telefono: "6560123456",
        },
        {
            id: 11,
            nombre: "Ricardo Vega",
            materia: "Formación Cívica",
            correo: "ricardo@gmail.com",
            telefono: "6561112233",
        },
        {
            id: 12,
            nombre: "Daniela Flores",
            materia: "Artes",
            correo: "daniela@gmail.com",
            telefono: "6562223344",
        },
        {
            id: 13,
            nombre: "Pedro Sánchez",
            materia: "Tecnología",
            correo: "pedro@gmail.com",
            telefono: "6563334455",
        },
        {
            id: 14,
            nombre: "Gabriela Ruiz",
            materia: "Tutoría",
            correo: "gabriela@gmail.com",
            telefono: "6564445566",
        },
        {
            id: 15,
            nombre: "Alejandro Mendoza",
            materia: "Computación",
            correo: "alejandro@gmail.com",
            telefono: "6565556677",
        },
    ]);



    const guardarMaestro = () => {

        if (!nombre ||
            !materia ||
            !correo ||
            !telefono
        ) {
            alert("Completa todos los campos");


            return;
        }

        // EDITAR
        if (editando) {

            setMaestros(
                maestros.map((m) =>
                    m.id === editando ?
                    {
                        ...m,
                        nombre,
                        materia,
                        correo,
                        telefono,
                    } :
                    m
                )
            );

            setEditando(null);

        } else {

            // NUEVO
            const nuevo = {
                id: Date.now(),
                nombre,
                materia,
                correo,
                telefono,
            };

            setMaestros([...maestros, nuevo]);
        }

        // LIMPIAR
        setNombre("");
        setMateria("");
        setCorreo("");
        setTelefono("");
    };

    const eliminarMaestro = (id) => {

        const confirmar = window.confirm(
            "¿Eliminar maestro?"
        );

        if (confirmar) {
            setMaestros(
                maestros.filter((m) => m.id !== id)
            );
        }
    };
    const editarMaestro = (maestro) => {

        setNombre(maestro.nombre);
        setMateria(maestro.materia);
        setCorreo(maestro.correo);
        setTelefono(maestro.telefono);

        setEditando(maestro.id);

        setMostrarModal(true);
    };


    const maestrosFiltrados = maestros.filter((m) =>
        m.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
        m.materia.toLowerCase().includes(busqueda.toLowerCase()) ||
        m.correo.toLowerCase().includes(busqueda.toLowerCase())
    );

    return (

        <
        div className = "p-4" >

        { /* ENCABEZADO */ } <
        div className = "d-flex justify-content-between align-items-center mb-4" >

        <
        h1 > Gestión de Maestros < /h1>

        <
        button className = "btn btn-primary"
        onClick = {
            () => setMostrarModal(true) } >
        +Agregar Maestro <
        /button>

        <
        /div>

        { /* TARJETAS */ } <
        div className = "row mb-4" >

        <
        div className = "col-md-4" >
        <
        div className = "card shadow p-3" >
        <
        h5 > Total Maestros < /h5> <
        h2 > 25 < /h2> <
        /div> <
        /div>

        <
        div className = "col-md-4" >
        <
        div className = "card shadow p-3" >
        <
        h5 > Materias < /h5> <
        h2 > 10 < /h2> <
        /div> <
        /div>

        <
        div className = "col-md-4" >
        <
        div className = "card shadow p-3" >
        <
        h5 > Activos < /h5> <
        h2 > 18 < /h2> <
        /div> <
        /div>

        <
        /div>

        { /* BUSCADOR */ } <
        div className = "mb-4" >
        <
        input type = "text"
        className = "form-control"
        placeholder = "Buscar maestro..."
        value = { busqueda }
        onChange = {
            (e) =>
            setBusqueda(e.target.value)
        }
        /> <
        /div>

        { /* TABLA */ } <
        div className = "card shadow p-3" >

        <
        table className = "table" >

        <
        thead >
        <
        tr >
        <
        th > ID < /th> <
        th > Nombre < /th> <
        th > Materia < /th> <
        th > Correo < /th> <
        th > Teléfono < /th> <
        th > Acciones < /th> <
        /tr> <
        /thead>

        <
        tbody >

        {
            maestrosFiltrados.map((m) => (

                <
                tr key = { m.id } >

                <
                td > { m.id } < /td> <
                td > { m.nombre } < /td> <
                td > { m.materia } < /td> <
                td > { m.correo } < /td> <
                td > { m.telefono } < /td>

                <
                td >

                <
                button className = "btn btn-warning"
                onClick = {
                    () => editarMaestro(m) } >
                Editar <
                /button>

                <
                button className = "btn btn-danger"
                onClick = {
                    () => eliminarMaestro(m.id) } >
                Eliminar <
                /button>

                <
                /td>

                <
                /tr>

            ))
        }

        <
        /tbody> <
        /table>

        <
        /div>


        { /* MODAL */ }

        {
            mostrarModal && (

                <
                div className = "modal d-block"
                tabIndex = "-1" >

                <
                div className = "modal-dialog" >

                <
                div className = "modal-content" >

                <
                div className = "modal-header" >

                <
                h5 className = "modal-title" >
                Agregar Maestro <
                /h5>

                <
                button className = "btn-close"
                onClick = {
                    () => setMostrarModal(false) } >
                < /button>

                <
                /div>

                <
                div className = "modal-body" >

                <
                input className = "form-control"
                placeholder = "Nombre"
                value = { nombre }
                onChange = {
                    (e) =>
                    setNombre(e.target.value)
                }
                />

                <
                input className = "form-control"
                placeholder = "Materia"
                value = { materia }
                onChange = {
                    (e) =>
                    setMateria(e.target.value)
                }
                />

                <
                input className = "form-control"
                placeholder = "Correo"
                value = { correo }
                onChange = {
                    (e) =>
                    setCorreo(e.target.value)
                }
                />

                <
                input className = "form-control"
                placeholder = "Teléfono"
                value = { telefono }
                onChange = {
                    (e) =>
                    setTelefono(e.target.value)
                }
                />

                <
                /div>

                <
                div className = "modal-footer" >

                <
                button className = "btn btn-secondary"
                onClick = {
                    () => setMostrarModal(false) } >
                Cancelar <
                /button>

                <
                button className = "btn btn-primary"
                onClick = { guardarMaestro } >
                { editando ? "Actualizar" : "Guardar" } <
                /button>

                <
                /div>

                <
                /div>

                <
                /div>

                <
                /div>

            )
        }

        <
        /div>

    );

};

export default Maestros;