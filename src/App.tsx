import React from 'react';
import {Box, Button, ChakraProvider, Flex, Heading, Image, Switch, Text} from "@chakra-ui/react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import {HomePage, AboutPage, ProjectPage} from "./pages"
import Theme from "./Theme";

function App() {
  return (
    <ChakraProvider theme={Theme}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/projects" element={<ProjectPage/>}/>
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
