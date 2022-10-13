import React from "react";
import { Box } from "@mui/material";
import Header from "@libs/components/Header";

const MainLayout = ({ children }) => (
  <Box minHeight="100vh">
    <Header />
    {children}
  </Box>
);

export default MainLayout;
