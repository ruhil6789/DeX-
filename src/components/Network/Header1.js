import { Modal, Button } from 'antd'
import React, { useState, useEffect } from 'react'
import Web3 from 'web3';
import { NETWORK_CHAIN_SELECTION } from '../Network/Constant'
import { SwitchNetwork } from '../Network/SwitchNetwork'
// import DropDownNetwork from '../Connect/DropDownNetwork';

const Header1 = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [acc, setAccount] = useState()
    const [bal, setBal] = useState()
    const [value, setValue] = useState('')
    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const { ethereum } = window;
    let web3 = new Web3(ethereum);

    const connectWallet = async () => {

        if (window.ethereum) {
            let res = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setAccount(res[0])
        }
        else {
            alert('need to install metamak')
        }
    }

    const handleChange = async (e) => {
        if (e.target.value == 'ethereum') {
            let temp = await SwitchNetwork('5')
            if (!temp) {
                setValue('ethereum')
            }
        } else if (e.target.value == "polygon") {
            let temp = await SwitchNetwork('8001')
            if (!temp) {
                setValue('polygon')
            }
        } else if (e.target.value == "Avalanche") {
            let temp = await SwitchNetwork('43113')
            if (!temp) {
                setValue('avalanche')
            }
        } else if (e.target.value == "binance") {
            let temp = await SwitchNetwork('97')
            if (!temp) {
                setValue('binance')
            }

        }
    }
    return (
        <>
            <Button type="primary" onClick={showModal}>
                Metamask
            </Button>
            <Button type="primary" onClick={showModal}>
                Switch Network
            </Button>
            {/* {NETWORK_CHAIN_SELECTION.map((state) =>
                <Button onClick={() => SwitchNetwork(state.chainNo)}>{state.label}</Button>
            )} */}
            <Modal title="Wallet" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                {/* <div> */}
                {/* <Button onClick={connectWallet}>Connect Wallet</Button>
                    <p>{acc}</p>
                </div> */}

                <div>
                    {NETWORK_CHAIN_SELECTION.map((state) =>
                        <Button onClick={() => SwitchNetwork(state.chainNo)}>{state.label}</Button>

                    )}
                </div>

            </Modal>

        </>
    );
};

export default Header1;