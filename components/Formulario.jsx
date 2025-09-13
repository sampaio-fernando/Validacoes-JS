import React, { useState } from "react";
import {Text, View, TextInput, TouchableOpacity, Alert} from "react-native";
import {globalStyles} from '../Styles/globalStyles';

export default function Formulario (){
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [nomeError, setNomeError] = useState('');
    const [emailError, setEmailError] = useState('');


    const validateForm = () =>{
        let isValid = true;
        
        if(!nome.trim()){
            setNomeError("Nome é obrigatório")
            isValid = false;
        }else{
            setNomeError("");
        }
        // validar email
        if(!email.trim()){
            setEmailError("Email é obrigatório")
            isValid = false;
        }else{
            setEmailError("");
        }

        return isValid;
    }

    const handleSubmit = () =>{
        if(validateForm()){
            const dados = {nome};
            console.log("Dados do formulario válidos", dados);
            Alert.alert("Sucesso!", "Formulario sucesso");
            alert("Sucesso!!");

            //resete input
            setNome("");
            setEmail("");
        }else{
            Alert.alert("Erro!", "Formulario Erro");
            alert("Algum campo vazio!!");
        }
    };

    return(

        <View style={globalStyles.container}>

            <View style={globalStyles.scrollContent}>
                <Text style={globalStyles.title}>Formulário</Text>

                <View style={globalStyles.inputContainer}>
                    <TextInput 
                        style={[globalStyles.input, nomeError && globalStyles.inputError]}
                        placeholder="Nome completo"
                        value={nome}
                        onChangeText={setNome}
                    ></TextInput>
                    {nomeError ? <Text style={globalStyles.errorText}>{nomeError}</Text>: null}
                    {/* campo email */}
                    <TextInput 
                        style={[globalStyles.input, nomeError && globalStyles.inputError]}
                        placeholder="Email"
                        value={email}
                        onChangeText={setEmail}
                    ></TextInput>
                    {emailError ? <Text style={globalStyles.errorText}>{emailError}</Text>: null}
                </View>

                <TouchableOpacity style={globalStyles.button} onPress={handleSubmit}>
                    <Text style={globalStyles.buttonText}>Enviar</Text>
                </TouchableOpacity>
            </View>

        </View>

    )
}



