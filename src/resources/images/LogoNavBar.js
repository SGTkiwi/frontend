import logo from "./scoutlogo.png";
import styled from "@emotion/styled";

const StyledLogo = styled("img")({
    width: "111px",
    height: "46px",
});

const Logo = () => {
    return <StyledLogo src={logo} alt="logo" />;
};

export default Logo;