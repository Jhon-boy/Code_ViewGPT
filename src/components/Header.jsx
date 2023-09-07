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

import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import DrawerComp from "./Drawer";


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
          <Typography sx={{ fontSize: "1.3rem", }}>
            Powered by   + 
            <img
              src="https://seeklogo.com/images/O/openai-logo-F97AAA4254-seeklogo.com.png"
              alt="ChatGPT Logo"
              height={50}
              style={{marginLeft: '20px'}}
            />
          </Typography>

          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "1rem", paddingLeft: "10%" }}>
                Code View
              </Typography>
              <DrawerComp />
            </>
          ) : (
            <>
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

    </>
  )
}
