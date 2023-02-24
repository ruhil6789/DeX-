import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Tokens from '../src/components/Tokens';
import Swap from '../src/components/Swap';
import { useConnect, useAccount } from "wagmi";
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
// import { SwitchNetwork } from "./components/Network/SwitchNetwork";
import Header1 from '../src/components/Network/Header1'
function App() {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new MetaMaskConnector(),
  })
  return (
    <>
      <div className="App">
        <Header connect={connect} isConnected={isConnected} address={address} />
        <div className="mainWindow">
          <Routes>
            <Route path="/" element={<Swap />} />
            <Route path="tokens" element={<Tokens />} />
            <Route path="switchNetwork" element={<Header1 />} />
          </Routes>
        </div>
      </div>
    </>
  );

}

export default App;
