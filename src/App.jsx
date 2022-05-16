import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SessionProvider } from "./contexts/SessionContext";
import { Initial } from "./pages/Initial";

export function App() {
  return (
    <SessionProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Initial/>}/>
        </Routes>
      </BrowserRouter>
    </SessionProvider>
  )
}