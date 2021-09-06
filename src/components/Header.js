import { Link } from 'react-router-dom';
import logo from '../imgs/logo.png';
import BitcoinLogo from './BitcoinLogo';

const Header = () => {
    return ( 
        <header>
            <div className="logo">
                <figure>
                    <img src={logo} alt="Cypto Junkies logo" />
                    <BitcoinLogo />
                    <figcaption>Crypto Junkies</figcaption> 
                </figure>
            </div>
          <nav>
              <Link to="/">Crypto Index</Link> 
              <Link to="/news">News</Link> 
              <Link to="/defi">DeFi</Link> 
              <Link to="/nft">NFT</Link> 
              <Link to="/metrics">Metrics</Link> 
              <Link to="/learn">Learn</Link> 
              <Link to="/buycrypto">Buy Crypto</Link> 
          </nav>
        </header>
     );
}
 
export default Header;