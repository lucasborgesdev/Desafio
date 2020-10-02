import styled from "styled-components";

export const StyledDefault = styled.div`
  * {
    font: 18px Poppins;
    --color-navbar-top: #61dafb;
    --color-navbar-background: black;
    .App {
      text-align: center;
    }
  }
  body {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  span {
    margin-left: 5px;
  }
  .span-repo {
    span {
      align-items: baseline;
    }
  }
  .navbar {
    a {
      font-size: 50px;
      color: var(--color-navbar-top);
      text-decoration: none;
    }
    background-color: var(--color-navbar-background);
  }
`;
