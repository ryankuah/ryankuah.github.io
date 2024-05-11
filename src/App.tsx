import React from 'react';
import {Box, Button, ChakraProvider, Flex, Heading, Image, Switch, Text} from "@chakra-ui/react";
import {BrowserRouter as Router, Route, Routes, HashRouter, BrowserRouter} from "react-router-dom";

import {HomePage, AboutPage, ProjectPage, SomethingElse} from "./pages"
import Theme from "./Theme";

function App() {
  return (
    <ChakraProvider theme={Theme}>
      <BrowserRouter basename={"/"}>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/projects" element={<ProjectPage/>}/>
          <Route path="/somethingelse" element={<SomethingElse/>}/>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
