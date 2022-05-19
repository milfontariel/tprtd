import styled from "styled-components"

export function CTA_Button({ children, sendProviders }) {
    return (
        <Button onClick={sendProviders} className="w-min my-0 mx-auto py-4 px-12 drop-shadow-lg rounded-full bg-[#990F71] text-white text-xl font-normal hover:bg-[#B31284] transition-colors">
            {children.toLocaleUpperCase()}
        </Button>
    )
}

const Button = styled.button`
    
`