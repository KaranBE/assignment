import Table from './components/Table';
import getSampleData from "./sampleData";
import { StyledAppTitle, StyledTableContainer } from "./components/styledComponents";

const sampleData = getSampleData();
function App() {
  return (
    <div>
      <StyledAppTitle>Finance App</StyledAppTitle>
      <StyledTableContainer>
        <Table initialData={sampleData} />
      </StyledTableContainer>
    </div>
  );
}

export default App;
