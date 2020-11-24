import React, { useState, useEffect } from 'react';

const useValidacion = ( stateInicial, validar, fn ) => {

    const [valores, guardarValores] = useState(stateInicial);
    const [errores, guardarErrores] = useState({});
    const [submitForm, guardarSubmitForm] = useState(false);

    useEffect(() => {
        if(submitForm){
            const noErrores = Object.keys(errores).length === 0;

            if(noErrores) fn(); //funcion que se ejecuta en el componente

            guardarSubmitForm(false);
        }
    }, [errores])

    //fn que se ejecuta conforme el usuario escribe algo
    const handleChange = e => {
        guardarValores({
            ...valores,
            [e.target.name]: e.target.value
        })
    }

    //fn que se ejecuta cuando se da el submit
    const handleSubmit = e => {
        e.preventDefault();
        const erroresValidacion = validar(valores); //reglas de validación
        guardarErrores(erroresValidacion);
        guardarSubmitForm(true);
    }

    //cuando se realiza el evento de blur (entrar y salir del input)

    const handleBlur = () => {
        const erroresValidacion = validar(valores); //reglas de validación
        guardarErrores(erroresValidacion);
    }


    return {
        valores,
        errores,
        handleChange,
        handleSubmit,
        handleBlur
    }
}

export default useValidacion;