import PropTypes from "prop-types";
import Button from "./Button"

const Header = ({ title, subTitle }) => {
  const onClick = () => {
    console.log("Click")
  }
  
  return (
    <header className="header">
      <h2>{title}</h2>
      <Button color="green" text="New Task" onClick={onClick}/>
    </header>
  );
};

Header.defaultProps = {
  title: "Title from Default",
  subTitle: "Track your work!",
};

// Typescript better option on prop types
Header.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
};

export default Header;
