import SwitchNetwork from '../Network/SwitchNetwork'

export const avalancheTest = {};
avalancheTest.chainName = "AVAX TestNet";
avalancheTest.chainId = 43113;
avalancheTest.symbol = "AVAX";
avalancheTest.currencyDecimal = '18';


export const polygonTest = {};
polygonTest.chainName = "Matic Mumbai";
polygonTest.chainId = 80001;
polygonTest.symbol = "MATIC";
polygonTest.currencyDecimal = '18';

export const binanceTest = {};
binanceTest.chainName = "Binance TestNet";
binanceTest.chainId = 97;
binanceTest.symbol = "AVAX";
binanceTest.currencyDecimal = '18';


// export const avalancheTest = {};
// avalancheTest.chainName = "AVAX TestNet";
// avalancheTest.chainId = "43113";
// avalancheTest.symbol = "AVAX";
// avalancheTest.currencyDecimal = '18';

export const GoreliTest = {};
GoreliTest.chainName = "Goreli TestNet";
GoreliTest.chainId = "5";
GoreliTest.symbol = "GORELIETH";
GoreliTest.currencyDecimal = '18';


export const SUPPORTED_CHAIN_ID = {
    POLYGON_TESTNET: "80001",
    BINANCE_TESTNET: "97",
    AVALANCHE_TESTNET: "43113",
    GORELI_TESTNET: "5"
}

export const NETWORK_CHAIN_SELECTION = [
    {
        chainNo: SUPPORTED_CHAIN_ID.POLYGON_TESTNET,
        label: "Polygon"
    },
    {
        chainNo: SUPPORTED_CHAIN_ID.BINANCE_TESTNET,
        label: "Binance"
    },
    {
        chainNo: SUPPORTED_CHAIN_ID.AVALANCHE_TESTNET,
        label: "Avalanche"
    },
    {
        chainNo: SUPPORTED_CHAIN_ID.GORELI_TESTNET,
        label: "ethereum"
    },
]
