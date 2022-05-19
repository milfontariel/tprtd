import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SessionProvider } from "./contexts/SessionContext";
import { Initial } from "./pages/Initial";
import { Main } from "./pages/Main";

export function App() {
  return (
    <SessionProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Initial />} />
          <Route path="/home" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </SessionProvider>
  )
}