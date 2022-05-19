import styled from "styled-components";

export function Logo() {
    return (
        <LogoTPRTD className="drop-shadow-lg">
            TPRTD
        </LogoTPRTD>
    )
}

const LogoTPRTD = styled.p`
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    color: #fff;
`