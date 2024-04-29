import contractABI from '@/public/abi/createNft.json';
import marketContractABI from '@/public/abi/assetMarket.json';
import { ethers } from 'ethers';

export const contracts = {
    makeNFT: '0x23Ef0e4f4031c2d0DeeB4C1f7b8fe097a8276342',
    AssetMarket: '0x408A2e1fd08BbA3e5b82c4011f547D956a62dB19'
}

export const abi = {
    makeNFT: contractABI,
    AssetMarket: marketContractABI
}
