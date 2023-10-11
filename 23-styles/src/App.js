import CssModuleComponents from './CssModuleComponents';
import Practice1 from './Practice1';
import Practice2 from './Practice2';
import Practice4 from './Practice4';
import SassComponents from './SassComponents';
import StyledComponents from './StyledComponents';

function App() {
  return (
    <div className='App'>
      <h1>React Styling</h1>
      <h2>CSS Module</h2>
      <CssModuleComponents />
      <h2>SCSS Module</h2>
      <SassComponents />
      <h2>styled-components</h2>
      <StyledComponents />
      <br />

      <h2>Practice 1. 애벌레</h2>
      <Practice1 />

      <h2>Practice 4. 이미지 반응형</h2>
      <Practice4 />
    </div>
  );
}

export default App;
