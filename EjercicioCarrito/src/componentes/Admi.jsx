import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Producto from "./Producto";
import Productos2 from "./admin/Productos2";
import Usuarios from "./admin/Usuarios";
import { Info } from "@mui/icons-material";
import InfoPersonal from "./admin/Ventas";
import "./styles.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: 250,
      }}
    >
      <Tabs  className="panel"
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab label="USUARIOS" {...a11yProps(0)} />
        <Tab label="PRODUCTOS" {...a11yProps(1)} />
        <Tab label="VENTAS" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <h3>USUARIOS</h3>
        <Usuarios />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <h3>PRODUCTOS</h3>
        <Productos2 />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <h3>DATOS</h3>
        <InfoPersonal />
      </TabPanel>
    </Box>
  );
}
