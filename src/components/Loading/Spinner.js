import HashLoader from 'react-spinners/HashLoader';
import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
`;

const Spinner = () => {
  return (
    <Flex>
      <HashLoader size="50" color="#6b5ce7" />
    </Flex>
  );
};

export default Spinner;
