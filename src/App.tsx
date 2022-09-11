import { BrowserRouter, Routes, Route } from "react-router-dom"
import AuthProvider from "./contexts/AuthProvider";
import LoadingProvider from "./contexts/Loading";
import SignIn from "./pages/login";
function App() {
  return (
    <LoadingProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignIn />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </LoadingProvider>
  );
}

export default App;
