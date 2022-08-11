import { useLocation } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const path = useLocation().pathname;

  return (
    <>
      {
        path !== '/register' &&
        path !== '/sign-in' &&
        <footer>
          <p>Made with ❤️ by <a href='https://github.com/piguicorn' target='_blanket'>@piguicorn</a></p>
        </footer>
      }
    </>
  )
}

export default Footer;