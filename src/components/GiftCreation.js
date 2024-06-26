import React, { useState, useEffect } from "react";
import { useChains, useChainId, useAccount, useWriteContract, useWaitForTransactionReceipt, useSwitchChain } from "wagmi";
import XGiftVault_ABI from "../config/XGiftVault_ABI.json";
import chainPolymer from "../config/chainPolymer.json";
import {parseUnits, encodeBytes32String} from 'ethers';
import { toast} from 'react-toastify';


function GiftCreation () {
  const chainId = useChainId();
  const currentChain = useChains();
  const {address} = useAccount();
  const { switchChain } = useSwitchChain()
  
  const [receiverAddress, setReceiverAddress] = useState("");
  const [amount, setAmount] =useState("");
  const { data: hash, error, writeContract } = useWriteContract();
  const { isLoading: isConfirming, isSuccess: isConfirmed } =
      useWaitForTransactionReceipt({
        hash,
      });

  const handleAddressChange = (event) => {
    setReceiverAddress(event.target.value);
  }

  const handleAmount = (event) => {
    setAmount(event.target.value);
  }
  
  const handleCreation = async () => {
    if (chainId !== currentChain[0].id ){
      await switchChain({chainId: currentChain[0].id});
    }
    if(receiverAddress === "") {
      toast.error('Please enter receiver address');
      return
    }
    if (address === receiverAddress){
      toast.error('Recevier address shoule be differnent with current wallet address');
      return
    }
    if(amount <= 0) {
      toast.error('You are forgetting to enter amount');
      return
    }
    await writeContract({
      address: chainPolymer.base.portAddr,
      abi: XGiftVault_ABI,
      functionName: 'createGift',
      value: parseUnits(amount, 18),
      args: [encodeBytes32String(chainPolymer.base.channelId), chainPolymer.base.timeout, receiverAddress]
    });
  }
  useEffect(() => {
    if (isConfirming && !isConfirmed) {
      toast.info("Waiting for confirmation...");
    }
    if (isConfirmed) {
      toast.success('Transaction confirmed!!!');
    }
    if (error){
      toast.error(error.shortMessage);
    }
  }, [isConfirming, isConfirmed, error]);

  return (
        <div class="justify-center flex py-2 sm:py-3">
        <div id="swap-element"
          class="!bg-inherit dark:md:!bg-portfolio-slateGray-500 md:!bg-white w-full rounded-2xl sm:max-w-md py-4 sm:px-3 md:px-8 sm:py-8">
          <div id="build-quote" class="space-y-3">
            <div class="flex justify-between items-end">
              <div class="font-bold text-left dark:text-white">Receiver Address</div>
            </div>
            <div >
              <div class="relative mt-1">
                <div class="flex relative h-16">
                  <div class="flex flex-1 text-left items-center relative">
                      <input className='pl-6 py-2 w-full h-full rounded-r-lg border dark:border-slate-600 border-slate-300 text-lg bg-surface-default cursor-default dark:text-white focus:ring-1 focus:ring-primary-default'
                            type='text'
                            onChange={handleAddressChange} value={receiverAddress || ""}
                            placeholder='0x... or any address'
                      />
                      </div>
                </div>
              </div>
            </div>
          </div>
          <br />

          <div class="space-y-3">
            <div class="flex justify-between">
              <div class="font-bold text-left dark:text-white">Amount</div>
            </div>
            <div>
              <div class="relative mt-1">
                <div class="flex relative h-16">
                  <div class="flex flex-1 text-left items-center">
                      <input className='pl-6 py-2 w-full h-full rounded-r-lg border dark:border-slate-600 border-slate-300 text-lg bg-surface-default cursor-default dark:text-white focus:ring-1 focus:ring-primary-default' type='number' inputMode='decimals' 
                      onChange={handleAmount} value={amount || ""}
                      placeholder='0'></input>
                      </div>
                </div>
              </div>
            </div>
          </div>
          <div class="justify-center text-center w-full mt-10"><button
              class="transition px-5 py-2 rounded-full border flex items-center justify-center text-center w-full text-sm opacity-50 border-primary-default bg-primary-default text-inverse" 
              onClick={handleCreation}
              disabled= {address ==null}
              >
              <span
                >{address != null ? 'Create' : 'Connect Wallet'}
              </span>
              </button>
          </div>
          <br />
          <div class="justify-center text-center w-full mt-10">
          {hash && <a target="_blank" href={chainPolymer.base.explorerUrl + "/tx/" +hash} >Transaction Hash (Click here)</a> }         
          </div>
        </div>
      </div>
    );
}

export default GiftCreation;