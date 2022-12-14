import React, { useContext } from "react";
import { Context } from "../index";
import { observer } from "mobx-react-lite";
import { NavLink, useNavigate } from "react-router-dom";
import { Button, Navbar, Nav, Container } from "react-bootstrap";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();
console.log(user.user.role);
  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink style={{ color: "white" }} to={SHOP_ROUTE}>
          КупиДевайс
        </NavLink>
        {user.isAuth ? (
          <Nav className="ml-auto" style={{ color: "white" }}>
            {user.user.role === "ADMIN" ? (
              <div>
                <Button
                  variant={"outline-light"}
                  onClick={() => navigate(ADMIN_ROUTE)}
                >
                  Админ панель
                </Button>
                <Button
                  variant={"outline-light"}
                  onClick={() => logOut()}
                  className="ml-2"
                >
                  Выйти
                </Button>
              </div>
            ) : (
              <Button
                variant={"outline-light"}
                onClick={() => logOut()}
                className="ml-2"
              >
                Выйти
              </Button>
            )}
          </Nav>
        ) : (
          <Nav className="ml-auto" style={{ color: "white" }}>
            <Button
              variant={"outline-light"}
              onClick={() => navigate(LOGIN_ROUTE)}
            >
              Авторизация
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
