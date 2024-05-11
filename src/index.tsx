import ReactDOM from 'react-dom';
import App from './App';
import {ChakraProvider} from "@chakra-ui/react";
import Theme from './Theme';

ReactDOM.render(
  <ChakraProvider theme={Theme}>
      <App />
  </ChakraProvider>,
  document.getElementById('root')
);