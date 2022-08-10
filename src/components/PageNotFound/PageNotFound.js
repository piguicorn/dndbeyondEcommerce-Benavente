/* styles */
import './PageNotFound.css';

function PageNotFound() {
    return (
        <main className='not-found container'>
            <h1>Page Not Found</h1>
            <img src='https://www.dndbeyond.com/content/1-0-2151-0/skins/waterdeep/images/errors/404.png' alt='' />
            <p>We live in a world of uncertainty. But certainly, the page you were looking for isn’t here. Perhaps this halfling has stolen it and hidden it in another place. Try searching for what you were looking for in another realm. </p>
        </main>
    )
}

export default PageNotFound;