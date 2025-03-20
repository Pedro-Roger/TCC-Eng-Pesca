import { ProjetosProvider } from './context/ProjetosContext';
import Paths from './routes/paths';

const App = () => {
  return (
    <>
      <ProjetosProvider>
        <Paths />
      </ProjetosProvider>
    </>
  );
};

export default App;
