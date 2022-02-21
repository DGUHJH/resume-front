import Main from 'pages/pc';
import { isMobile } from 'react-device-detect';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const App: React.FC = () =>
  !isMobile ? (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  ) : (
    <div>모바일은 지원하지 않습니다.</div>
  );
export default App;
