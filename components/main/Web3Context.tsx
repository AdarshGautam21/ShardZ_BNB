import React, { createContext, useState, useEffect, useContext } from 'react';
import { ethers } from 'ethers';
declare var ethereum: any;

interface Web3ContextType {
  provider: ethers.BrowserProvider | null;
}

const Web3Context = createContext<Web3ContextType | undefined>(undefined);


interface Web3ProviderProps {
    children: React.ReactNode;
  }

  const Web3Provider: React.FC<Web3ProviderProps> = ({ children }) => {
  const [provider, setProvider] = useState<ethers.BrowserProvider | null>(null);

  useEffect(() => {
    // Logic to initialize or connect to the provider
    // For example, using ethers.js
    const connectProvider = async () => {
      try {
        // Check if MetaMask is installed
          // Request access to MetaMask
          await ethereum.request({ method: 'eth_requestAccounts' });
          const ethProvider = new ethers.BrowserProvider((window as any).ethereum);
          setProvider(ethProvider);
        
      } catch (error) {
        console.error('Error connecting to provider:', error);
      }
    };

    connectProvider();
  }, []);

  return (
    <Web3Context.Provider value={{ provider }}>
      {children}
    </Web3Context.Provider>
  );
};

const useWeb3 = () => {
  const context = useContext(Web3Context);
  if (!context) {
    throw new Error('useWeb3 must be used within a Web3Provider');
  }
  return context;
};

export { Web3Provider, useWeb3 };
