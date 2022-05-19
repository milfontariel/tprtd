import { CountrySelect } from "../components/CountrySelect";
import { CTA_Button } from "../components/CTA-Button";
import { ProvidersSelect } from "../components/ProvidersSelect";
import styled from "styled-components";
import sessionContext from "../hooks/useSession";
import * as api from "../services/api";
import { useNavigate } from "react-router-dom";

export function Initial() {
    const { providersSelected } = sessionContext();
    const navigate = useNavigate();

    async function sendProviders() {
        try {
            await api.postSelectedProviders(providersSelected);
            navigate("/home");
        } catch (error) {
            console.error(error);
        }

    }

    return (
        <div className="flex flex-col h-screen justify-center gap-8">
            <Text size={"24"}>Olá, seja bem-vindo!</Text>
            <Text>Por favor, selecione os serviços atualmente assinados por você:</Text>
            <ProvidersSelect></ProvidersSelect>
            <CTA_Button sendProviders={sendProviders}>Continuar</CTA_Button>
            <CountrySelect></CountrySelect>
        </div>
    )
}

const Text = styled.p`
    font-size: ${props => props.size ? `${props.size}px` : '18px'};
    margin: 0 auto;
    color: #ffffff;
    text-align: center;
    max-width: 500px;
    padding: 0 2rem;
`