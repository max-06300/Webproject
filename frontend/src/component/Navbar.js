import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

import isAuth, { userType } from "../lib/isAuth";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = (props) => {
  const classes = useStyles();
  let history = useHistory();

  const handleClick = (location) => {
    console.log(location);
    history.push(location);
  };

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
        <Button color="inherit" onClick={() => handleClick("/home")}>
                Job portal
              </Button>
        </Typography>
        {isAuth() ? (
          userType() === "recruiter" ? (
            <>
              {/* <Button color="inherit" onClick={() => handleClick("/home")}>
                Home
              </Button> */}
              <Button color="inherit" onClick={() => handleClick("/addjob")}>
                Ajouter une offre
              </Button>
              <Button color="inherit" onClick={() => handleClick("/myjobs")}>
                Mes offres
              </Button>
              <Button color="inherit" onClick={() => handleClick("/employees")}>
                Demandes
              </Button>
              <Button color="inherit" onClick={() => handleClick("/profile")}>
                Profil
              </Button>
              <Button color="inherit" onClick={() => handleClick("/logout")}>
                Se déconnecter
              </Button>
            </>
          ) : (
            <>
              {/* <Button color="inherit" onClick={() => handleClick("/home")}>
                Home
              </Button> */}
              <Button
                color="inherit"
                onClick={() => handleClick("/applications")}
              >
                Offres
              </Button>
              <Button color="inherit" onClick={() => handleClick("/profile")}>
                Profil
              </Button>
              <Button color="inherit" onClick={() => handleClick("/logout")}>
                Se déconnecter
              </Button>
            </>
          )
        ) : (
          <>
            <Button color="inherit" onClick={() => handleClick("/login")}>
              Se connecter
            </Button>
            <Button color="inherit" onClick={() => handleClick("/signup")}>
              S'inscrire
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
