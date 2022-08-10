import { useLocation } from 'react-router-dom';

function Footer() {
  const path = useLocation().pathname;

  return (
    <>
      {
        path !== '/register' &&
        path !== '/sign-in' &&
        <footer>Footer here</footer>
      }
    </>
  )
}

export default Footer;