import React, { useEffect, useState } from "react";
import twitterLogo from "./assets/twitter-logo.svg"
import "./App.css"

// Constants
const TWITTER_HANDLE = "brunnogoliveira"
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`

const App = () => {

  const [currentAccount, setCurrentAccount] = useState(null);

  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("Eu acho que você não tem a metamask!");
        return;
      } else {
        console.log("Nós temos o objeto ethereum", ethereum);
      }
        const accounts = await ethereum.request({ method: "eth_accounts" });

        if (accounts.length !== 0) {
          const account = accounts[0];
          console.log("Carteira conectada::", account);
          setCurrentAccount(account);
        } else {
          console.log("Não encontramos uma carteira conectada");
        }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  const connectWalletAction = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Instale a MetaMask!");
        return;
      }

      /*
       * Método chique para pedir acesso para a conta.
       */
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      /*
       * Boom! Isso deve escrever o endereço público uma vez que autorizarmos Metamask.
       */
      console.log("Contectado", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="header-container">
          <p className="header gradient-text">Comedians Battle</p>
          <p className="sub-text">Vamos matar o Carlos Alberto de rir!!!</p>
          <div className="connect-wallet-container">
            <img
              src="https://c.tenor.com/B3RKN_3MmtsAAAAC/lol-cazalbe.gif"
              alt="Nascimento Gif"
            />
            <button
              className="cta-button connect-wallet-button"
              onClick={connectWalletAction}
            >
              Conecte sua carteira para começar
            </button>
          </div>
        </div>
        <div className="footer-container">
          <img alt="Twitter Logo" className="twitter-logo" src={twitterLogo} />
          <a
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`construído por @${TWITTER_HANDLE}`}</a>
        </div>
      </div>
    </div>
  )
}

export default App
