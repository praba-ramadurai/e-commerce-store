import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { links } from "../utils/constants";
import styled from "styled-components";
import CartButton from "./CartButton";
import { useProductsContext } from "../context/products_context";

const Sidebar = () => {
  const {isSidebarOpen,closeSidebar}=useProductsContext()

  return (
    <SidebarContainer>
      <aside className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}>
        <div className="sidebar-header">
          <img src={logo} className="logo" alt="E-commerce application" />
          <button className="close-btn" onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className="links">
          {links.map(({ id, text, url }) => {
            return (
              <li key={id}>
                <Link to={url} onClick={closeSidebar}>{text}</Link>
              </li>
            );
          })}
          <li>
            <Link to="/" onClick={closeSidebar}> checkout</Link>
          </li>
        </ul>
        <CartButton />
      </aside>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  text-align: center;
  .sidebar-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1.5rem;
  }
  .close-btn {
    background: transparent;
    border: transparent;
    font-size: 1.5rem;
    color: var(--clr-brown);
    cursor: pointer;
  }
  .logo {
    height: 45px;
    justify-self: center;
  }

  .links {
    margin-bottom: 2rem;
  }

  .links a {
    display: block;
    text-align: left;
    font-size: 1rem;
    letter-spacing: var(--spacing);
    padding: 1rem 1.5rem;
    color: var(--clr-brown);
    text-transform: capitalize;
  }
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-white);
    z-index: -1;
  }
  .show-sidebar {
    z-index: 999;
  }
  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`;

export default Sidebar;
