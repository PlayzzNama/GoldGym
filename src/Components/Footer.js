import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import Logo from "../assets/images/Logo-1.png";
import AmpliLogo from "../assets/images/ampli-logo.png";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <img src={Logo} width="200px" alt="logo" height="40px" />
        <Typography variant="h5" pb="40px" mt="20px">
          Made with ❤️ by Awen
        </Typography>
      </Stack>
      <Stack direction="row" alignItems="center" justifyContent="space-evenly">
        <a href="https://ampli.com.ua" target="_blank" rel="noreferrer">
          <img src={AmpliLogo} alt="ampli-logo" width="100px" />
        </a>
        <p>AFE_44</p>
        <a
          href="https://classroom.google.com/c/NjY2ODM0MDcxODk2"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none", color: "#ff2625" }}
        >
          Our ClassRoom
        </a>
      </Stack>
    </Box>
  );
};

export default Footer;
