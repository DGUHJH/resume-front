import Main from 'pages/pc';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  </BrowserRouter>
);
export default App;
