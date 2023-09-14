import { useState } from "react";
import { Outlet } from 'react-router-dom'
import {
  AppBar,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import DrawerComp from "./Drawer";
import { Footer } from "./Footer";


export const Header = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  return (
    <>
      <AppBar sx={{ background: "black" }}>
        <Toolbar>

          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "1rem", paddingLeft: "2%" }}>
                Code View
              </Typography>
              <DrawerComp />
            </>
          ) : (
            <>
              <Typography sx={{ fontSize: "1.3rem", }}>
                Powered by
                <img
                  src="https://seeklogo.com/images/O/openai-logo-F97AAA4254-seeklogo.com.png"
                  alt="ChatGPT Logo"
                  height={50}
                  style={{ marginLeft: '20px' }}
                />
              </Typography>
              <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="secondary"
                textColor="inherit"
                value={value}

                onChange={(e, value) => setValue(value)}
              >
                <Tab label="Home" />
                <Tab label="Informacíon" />
                <Tab label="¿Quienes somos?" />
                <Tab label="Contactos" />
              </Tabs>

            </>
          )}
        </Toolbar>
      </AppBar>
      <Outlet />
      <Footer />
    </>
  )
}
