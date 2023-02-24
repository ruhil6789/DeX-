import React from 'react'
import download from "../download.png";
import eth from '../eth.svg';
import { Link } from 'react-router-dom';
function Header(props) {

  console.log(props, "props");
  const { address, isConnected, connect } = props;

  return (
    <>
      <div className='leftH'>
        <img src={download} alt='logo' className='logo' />
        <Link to="/" className='headeritem'>
          <div className='headerItem'>Swap</div>
        </Link>
        <Link to="/tokens" className='headerItem'>
          <div className='headerItem'>Tokens</div>
        </Link>

        <div className='rightH'>
          <div className='headerItem'>
            <img src={eth} alt="logo" className='eth' />Ethereum
          </div>
          <Link to="/switchNetwork" className='headerItem'>
            <div className='headerItem'>Switch Network</div>
          </Link>

          <div className='connectButton' onClick={connect}>
            {isConnected ? (address.slice(0, 4) + "..." + address.slice(38)) : "Connect"}
          </div>
        </div>


      </div>

    </>

  )
}

export default Header