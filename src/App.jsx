import '@/App.css';
import { postHello } from '@/apis/exampleApi/postHello.js';

function App() {
  const handlePostHello = async () => await postHello();
  return (
    <>
      <div className='button'>
        <button onClick={handlePostHello}>click to test</button>
      </div>
    </>
  );
}

export default App;
