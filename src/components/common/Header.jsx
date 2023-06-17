import { useState } from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { routePath } from "../../constants/Route";
// import menuitem of menu
import HeaderMenu from "./HeaderMenu";
import { AppBar, Toolbar, Box, Typography, InputBase } from "@mui/material";
/// menu icon imorted
import { Menu, BookmarkAdd, ExpandMore } from "@mui/icons-material";
// import logo
import { logoUrl } from "../../constants/constant";
/// yaha me style lo manipulate karraha hu
// here Toolbar & styled is component of MUI
const StyleToolbar = styled(Toolbar)`
  background: #080847;
  min-height: 56px !important;
  padding: 0 115px !important;
  justify-content: space-between;
  & > * {
    padding: 0 16px;
  }
  & > div {
    display: flex;
    align-items: center;
    cursor: pointer;

    & > p {
      font-size: 14px;
      font-weight: 600;
    }
  }
  & > p {
    font-size: 14px;
    font-weight: 600;
  }
`;
/// css of logo
/// img is not a component of MUI so write inside as string ,and pass property in {}
const Logo = styled("img")({
  width: 64,
});

/// use state of header

/// css of input field
const InputSearchField = styled(InputBase)`
  height: 30px;
  width: 55%;
  background: #ffffff;
  border-radius: 5px;
`;
const Header = () => {
  const [open, setOpen] = useState(null);
  const handleClick = (e) => {
    setOpen(e.currentTarget);
  };

  const navigate = useNavigate();


  const handleClose = () => {
    setOpen(null);
  };
  return (
    <AppBar position="static">
      <StyleToolbar>
        <Logo src={logoUrl} alt="LOGOO" onClick={()=>navigate(routePath.home)} />
        <Box onClick={handleClick}>
          <Menu />
          <Typography>Menu</Typography>
        </Box>
          <HeaderMenu open={open} handleClose={handleClose} />
        <InputSearchField />
        <Typography>
          Imdb<Box component="span">Pro</Box>
        </Typography>
        <Box>
          <BookmarkAdd />
          <Typography>Watchlist</Typography>
        </Box>
        <Typography>Sign In</Typography>
        <Box>
          <Typography>En</Typography>
          <ExpandMore />
        </Box>
      </StyleToolbar>
    </AppBar>
  );
};
export default Header;
