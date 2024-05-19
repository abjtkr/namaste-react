import { LOGO_URL } from "../utils/constants";
export const Header = () => {
  return (
    <div className='header'>
      <img className='logo' src={LOGO_URL}></img>
      <ol>
        <li>Home</li>
        <li>About</li>
        <li>Cart</li>
      </ol>
    </div>
  );
};

export default Header;
