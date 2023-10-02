import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";

const Footer = () => {
  return (
    <AppBar
      position="static"
      sx={{ background: "transparent", boxShadow: "none", margin: "0 auto" }}
    >
      <Toolbar>
        <Typography
          sx={{
            textTransform: "none",
            fontSize: 10,
            fontFamily: "Poppins",
            color: "#484640",
          }}
        >
          © {new Date().getFullYear()} Freedom, Ltd.
        </Typography>
        <Button
          sx={{
            textTransform: "none",
            fontSize: 10,
            fontFamily: "Poppins",
            color: "#484640",
            textDecoration: "underline"
          }}
        >
          Terms & Conditions
        </Button>
        <Button
          sx={{
            textTransform: "none",
            fontSize: 10,
            fontFamily: "Poppins",
            color: "#484640",
            textDecoration: "underline"
          }}
        >
          Contact Us
        </Button>
        <IconButton></IconButton>
        <IconButton></IconButton>
        <IconButton></IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
