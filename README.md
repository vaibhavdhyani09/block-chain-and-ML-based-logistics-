# 🚚 Blockchain & ML-Based Logistics System

> A decentralized logistics platform that combines **Ethereum smart contracts** for shipment transparency with **Machine Learning** for delivery time & demand prediction — ensuring trust, efficiency, and real-time visibility across the supply chain.

---

## 📌 Overview

Traditional logistics systems suffer from opacity, data tampering, and poor demand forecasting. This project tackles all three by fusing two cutting-edge technologies:

- **Blockchain (Ethereum + Solidity)** — Every shipment event is recorded on-chain, creating an immutable, tamper-proof audit trail that all stakeholders can trust.
- **Machine Learning** — Predictive models forecast delivery times and demand patterns, enabling smarter planning and reduced delays.
- **Animated Frontend (GSAP)** — A smooth, interactive UI built with vanilla JS, CSS, and HTML, powered by GSAP animations for a polished user experience.

---

## ✨ Features

- 🔗 **On-chain Shipment Tracking** — Log and verify shipment status events on the Ethereum blockchain
- 📦 **End-to-End Transparency** — Stakeholders (sender, carrier, receiver) can independently verify shipment history
- 🤖 **ML Demand & Delivery Prediction** — Predict estimated delivery times and demand using trained ML models
- 🎨 **Animated UI** — GSAP-powered frontend with smooth transitions and interactive components
- 🔒 **Tamper-Proof Records** — Immutable on-chain logs prevent data manipulation

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Blockchain | Ethereum, Solidity |
| Smart Contract Dev | Hardhat / Truffle (local dev) |
| Frontend | HTML, CSS, JavaScript |
| Animations | GSAP (GreenSock Animation Platform) |
| ML Models | Python (scikit-learn / pandas) |
| Web3 Integration | Web3.js / Ethers.js |

---

## 📁 Project Structure

```
block-chain-and-ML-based-logistics-/
│
├── frontEnd/               # Frontend UI (HTML, CSS, JS + GSAP)
│   ├── index.html
│   ├── styles/
│   └── scripts/
│
├── contracts/              # Solidity smart contracts
│   └── Logistics.sol
│
├── ml-model/               # ML prediction scripts
│   └── predict.py
│
├── package.json            # Node dependencies (GSAP)
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v16+
- [MetaMask](https://metamask.io/) browser extension
- [Python](https://www.python.org/) 3.8+
- [Hardhat](https://hardhat.org/) or [Ganache](https://trufflesuite.com/ganache/) for local blockchain

### 1. Clone the Repository

```bash
git clone https://github.com/vaibhavdhyani09/block-chain-and-ML-based-logistics-.git
cd block-chain-and-ML-based-logistics-
```

### 2. Install Frontend Dependencies

```bash
npm install
```

### 3. Set Up Local Blockchain

```bash
# Using Hardhat
npx hardhat node

# Deploy the smart contract
npx hardhat run scripts/deploy.js --network localhost
```

### 4. Install ML Dependencies

```bash
pip install -r requirements.txt
```

### 5. Run the Frontend

Open `frontEnd/index.html` in your browser or serve it locally:

```bash
npx serve frontEnd
```

---

## 🔗 Smart Contract

The core `Logistics.sol` contract handles:

- **Creating shipments** — Assign a unique ID, origin, destination, and sender
- **Updating shipment status** — `In Transit`, `Out for Delivery`, `Delivered`
- **Querying history** — Fetch the full status history of any shipment by ID

All state changes emit events that are permanently recorded on the Ethereum blockchain.

---

## 🤖 ML Prediction Module

The ML module is trained on historical logistics data to predict:

- **Estimated Delivery Time** — Based on distance, carrier, weather conditions, and package weight
- **Demand Forecasting** — Predict shipment volume for better resource planning

```python
# Example usage
from predict import predict_delivery_time

result = predict_delivery_time(origin="Mumbai", destination="Delhi", weight=5.2)
print(f"Estimated delivery: {result} days")
```

---

## 📸 Screenshots

> _Add screenshots of your UI here_

| Dashboard | Shipment Tracker | Prediction Panel |
|---|---|---|
| ![dashboard]() | ![tracker]() | ![prediction]() |

---

## 🔮 Future Improvements

- [ ] IPFS integration for document storage (invoices, receipts)
- [ ] Multi-carrier support with role-based access control
- [ ] Real-time GPS tracking feed
- [ ] Mobile-responsive redesign
- [ ] Deploy to Ethereum Sepolia testnet

---

## 🤝 Contributing

Contributions are welcome! Please open an issue first to discuss what you'd like to change.

1. Fork the repository
2. Create your branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Vaibhav Dhyani**
- GitHub: [@vaibhavdhyani09](https://github.com/vaibhavdhyani09)

---

> ⭐ If you found this project helpful, please give it a star on GitHub!
