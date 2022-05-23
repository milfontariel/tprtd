import styled from "styled-components";
import LogoTp from "../../assets/logo.svg"

export function Logo() {
    return (
        <LogoTPRTD className="flex justify-center mt-4">
            <img className="w-28" src={LogoTp} />
        </LogoTPRTD>
    )
}

const LogoTPRTD = styled.p`
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    color: #fff;
`