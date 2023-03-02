import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import IconButton from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./Header.scss";
import { styled } from "@mui/material/styles";

function Header() {
  const CustomButton = styled(Button)({
    backgroundColor: "#6D5F68",
  }) as typeof Button;

  return (
    <AppBar position="static">
      <Toolbar className="Header" disableGutters={true}>
        <MenuIcon className="Header__menuIcon" fontSize="large" />
        <Typography className="Header__appTitle" variant="h5">
          Book App
        </Typography>
        <div className="Header__loginButton">
          <CustomButton variant="contained" color="primary">
            Login
          </CustomButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
