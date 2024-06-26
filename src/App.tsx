import React from 'react';
import { Box, Button, ChakraProvider, Flex, Heading, Image, Switch, Text } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes, HashRouter, BrowserRouter } from "react-router-dom";

import { HomePage, AboutPage, ProjectPage, SomethingElse, ComingSoonPage } from "./pages"

import Theme from "./Theme";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<ComingSoonPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/somethingelse" element={<SomethingElse />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
