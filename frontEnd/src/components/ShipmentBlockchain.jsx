import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';

const CONTRACT_ADDRESS = "0xd9145CCE52D386f254917e481eB44e9943F39138";

const CONTRACT_ABI = 
   [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "string",
				"name": "shipmentId",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "dataHash",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "addedBy",
				"type": "address"
			}
		],
		"name": "ShipmentAdded",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_shipmentId",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_dataHash",
				"type": "string"
			}
		],
		"name": "addShipment",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_shipmentId",
				"type": "string"
			}
		],
		"name": "getShipment",
		"outputs": [
			{
				"internalType": "string",
				"name": "shipmentId",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "dataHash",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "addedBy",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getShipmentCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "shipmentIds",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "shipments",
		"outputs": [
			{
				"internalType": "string",
				"name": "shipmentId",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "dataHash",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "addedBy",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]


const ShipmentBlockchain = () => {
  const [account, setAccount] = useState('');
  const [contract, setContract] = useState(null);
  const [shipmentData, setShipmentData] = useState({
    shipmentId: '',
    location: '',
    timestamp: '',
    status: ''
  });
  const [hash, setHash] = useState('');
  const [loading, setLoading] = useState(false);
  const [txHash, setTxHash] = useState('');
  const [searchId, setSearchId] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  const connectWallet = async () => {
    try {
      if (!window.ethereum) {
        alert('Please install MetaMask!');
        return;
      }

      const accounts = await window.ethereum.request({ 
        method: 'eth_requestAccounts' 
      });
      setAccount(accounts[0]);

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contractInstance = new ethers.Contract(
        CONTRACT_ADDRESS,
        CONTRACT_ABI,
        signer
      );
      setContract(contractInstance);

    } catch (error) {
      console.error('Error connecting wallet:', error);
      alert('Failed to connect wallet');
    }
  };

  const generateHash = () => {
    const dataString = JSON.stringify(shipmentData);
    const hashValue = ethers.utils.keccak256(
      ethers.utils.toUtf8Bytes(dataString)
    );
    setHash(hashValue);
  };

  const pushToBlockchain = async () => {
    if (!contract) {
      alert('Please connect wallet first!');
      return;
    }

    if (!hash || !shipmentData.shipmentId) {
      alert('Please generate hash first!');
      return;
    }

    try {
      setLoading(true);
      const tx = await contract.addShipment(
        shipmentData.shipmentId,
        hash
      );
      
      setTxHash(tx.hash);
      alert('Transaction submitted! Waiting for confirmation...');
      
      await tx.wait();
      alert('Shipment data successfully added to blockchain!');
      
      setShipmentData({
        shipmentId: '',
        location: '',
        timestamp: '',
        status: ''
      });
      setHash('');
      
    } catch (error) {
      console.error('Error pushing to blockchain:', error);
      alert('Failed to push data to blockchain: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const searchShipment = async () => {
    if (!contract || !searchId) {
      alert('Please connect wallet and enter shipment ID!');
      return;
    }

    try {
      setLoading(true);
      const result = await contract.getShipment(searchId);
      setSearchResult({
        shipmentId: result[0],
        dataHash: result[1],
        timestamp: new Date(result[2].toNumber() * 1000).toLocaleString(),
        addedBy: result[3]
      });
    } catch (error) {
      console.error('Error searching shipment:', error);
      alert('Shipment not found or error occurred');
      setSearchResult(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br p-8 mt-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-15 text-yellow-300">
          Add Shipment To The Chain
        </h1>

        {/* Connect Wallet */}
        <div className="bg-gray-600 rounded-lg shadow-lg p-6 mb-6">
          {!account ? (
            <button
              onClick={connectWallet}
              className="w-full bg-white text-black py-3 px-6 rounded-lg font-semibold hover:bg-yellow-400 transition"
            >
              Connect MetaMask Wallet
            </button>
          ) : (
            <div className="text-center">
              <p className="text-green-400 font-semibold">✓ Wallet Connected</p>
              <p className="text-sm text-gray-600 mt-2">
                {account.slice(0, 6)}...{account.slice(-4)}
              </p>
            </div>
          )}
        </div>

        {/* Add Shipment */}
        <div className="bg-gray-600 rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4 text-white">Add New Shipment</h2>
          
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Shipment ID"
              value={shipmentData.shipmentId}
              onChange={(e) => setShipmentData({...shipmentData, shipmentId: e.target.value})}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            />
            
            <input
              type="text"
              placeholder="Location"
              value={shipmentData.location}
              onChange={(e) => setShipmentData({...shipmentData, location: e.target.value})}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            />
            
            <input
              type="datetime-local"
              value={shipmentData.timestamp}
              onChange={(e) => setShipmentData({...shipmentData, timestamp: e.target.value})}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            />
            
            <input
              type="text"
              placeholder="Status"
              value={shipmentData.status}
              onChange={(e) => setShipmentData({...shipmentData, status: e.target.value})}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            />

            <button
              onClick={generateHash}
              className="w-full bg-white text-black py-3 px-6 rounded-lg font-semibold hover:bg-green-600 transition"
            >
              Generate Hash
            </button>

            {hash && (
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Generated Hash:</p>
                <p className="text-xs font-mono break-all text-gray-800">{hash}</p>
              </div>
            )}

            <button
              onClick={pushToBlockchain}
              disabled={loading || !hash}
              className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {loading ? 'Processing...' : 'Push to Blockchain'}
            </button>

            {txHash && (
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-sm text-green-800 mb-1">Transaction Hash:</p>
                <a
                  href={`https://sepolia.etherscan.io/tx/${txHash}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono break-all text-blue-600 hover:underline"
                >
                  {txHash}
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Search Shipment */}
        <div className="bg-gray-600 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-white">Search Shipment</h2>
          
          <div className="space-y-4">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Enter Shipment ID"
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
                className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
              />
              <button
                onClick={searchShipment}
                disabled={loading}
                className="bg-green-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-green-700 transition disabled:bg-gray-400"
              >
                Search
              </button>
            </div>

            {searchResult && (
              <div className="bg-indigo-50 p-4 rounded-lg space-y-2">
                <p><span className="font-semibold">Shipment ID:</span> {searchResult.shipmentId}</p>
                <p><span className="font-semibold">Data Hash:</span> <span className="text-xs font-mono break-all">{searchResult.dataHash}</span></p>
                <p><span className="font-semibold">Timestamp:</span> {searchResult.timestamp}</p>
                <p><span className="font-semibold">Added By:</span> <span className="text-xs font-mono">{searchResult.addedBy}</span></p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShipmentBlockchain;
