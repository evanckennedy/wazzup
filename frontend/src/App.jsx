import { Routes, Route } from 'react-router-dom';
import Authorization from "./pages/Authorization";
import Chat from "./pages/Chat";

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Authorization />} />
        <Route exact path='/chat' element={<Chat />} />
      </Routes>
    </>
  );
}

export default App;