import UseMemoEx from './components/UseMemoEx';
import UseCallbackEx from './components/UseCallbackEx';
import UseCallbackEx2 from './components/UseCallbackEx2';
import UseReducerEx from './components/UseReducerEx';
import useTitle from './hooks/useTitle';
import Faq from './hooks/Faq';

function App() {
  useTitle('React Hook 연습');

  return (
    <div className='App'>
      <UseMemoEx />
      <hr />
      <UseCallbackEx />
      <br />
      <UseCallbackEx2 postId={7} />
      <hr />
      <UseReducerEx />
      <hr />
      <Faq />
    </div>
  );
}

export default App;
