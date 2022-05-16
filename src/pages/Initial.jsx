import { CountrySelect } from "../components/CountrySelect";
import { CTA_Button } from "../components/CTA-Button";
import { ProvidersSelect } from "../components/ProvidersSelect";

export function Initial() {
    return (
        <div className="flex flex-col h-screen justify-center gap-8">
            <ProvidersSelect></ProvidersSelect>
            <CTA_Button>Continuar</CTA_Button>
            <CountrySelect></CountrySelect>
        </div>
    )
}