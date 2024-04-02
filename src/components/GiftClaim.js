import React, { useState, useEffect }  from "react";
import { useChainId, useAccount, useReadContract, useWriteContract, useSwitchChain,useWaitForTransactionReceipt  } from "wagmi";
import XGift_ABI from "../config/XGift_ABI.json";
import chainPolymer from "../config/chainPolymer.json";
import { Contract, JsonRpcProvider, formatUnits, encodeBytes32String,  } from 'ethers';
import { toast} from 'react-toastify';


function GiftClaim  ()  {
    const [listGift, setListGift] = useState([]);
    const {address} = useAccount();
    const chainId = useChainId();
    const { switchChain } = useSwitchChain()
    const { data: hash, error, writeContract } =  useWriteContract();
    const { isLoading: isConfirming, isSuccess: isConfirmed } =
      useWaitForTransactionReceipt({
        hash,
      });


    const { data, isError } = useReadContract({
        chainId: chainId,
        address: chainPolymer.optimism.portAddr,
        abi: XGift_ABI,
        functionName: 'getGiftsByUser',
        args: [address]
    });
    useEffect(() => {

        if (isConfirming && !isConfirmed) {
            toast.info("Waiting for confirmation...");
        }

        if (isConfirmed) {
            toast.success('Transaction confirmed!!!');
            const explorerUrl = chainPolymer.optimism.explorerUrl + "/tx/" + hash;
            toast.info(`Transaction explorer:  ${explorerUrl}`);
        }
        if (error){
            toast.error(error.shortMessage);
        }

        if (isError){
            toast.error(isError.shortMessage);
        }

        const getGiftDetails = async () => {
            if (data) {
                const provider = new JsonRpcProvider("https://sepolia.optimism.io");
                const contract = new Contract(chainPolymer.optimism.portAddr, XGift_ABI, provider);

                const gifts = [];
                for (const id of data) {
                    const gift =  await contract.gifts(id);
                    const floatingAmount = formatUnits(gift.amount, 18);
                    const giftDetail = {
                        "id" : gift.id,
                        "sender": gift.sender,
                        "amount" : floatingAmount,
                        "isClaimed" : gift.isClaimed
                    }
                    gifts.push(giftDetail);
                }
                setListGift(gifts);
            }
        };

        getGiftDetails();

    }, [data, isError, isConfirming, isConfirmed, error, hash]);

    const handleClaim = async (giftId, index) => {
        // Xử lý logic khi nhấn nút Claim cho phần tử có index là index
        console.log('Claim clicked for byte32:', giftId, 'at index:', index);
        if(chainId !== chainPolymer.optimism.channelId){
            await switchChain({chainId: chainPolymer.optimism.channelId});
        }
        console.log({ 
            args: [encodeBytes32String(chainPolymer.optimism.channelId), chainPolymer.optimism.timeout, giftId],
          });
        writeContract({
            address: chainPolymer.optimism.portAddr,
            abi: XGift_ABI,
            functionName: 'claimGift',
            args: [encodeBytes32String(chainPolymer.optimism.channelId), chainPolymer.optimism.timeout, giftId],
          });
      };
    

    return (
        <div class="justify-center flex py-2 sm:py-3">
        <table class="table table-bordered border-primary">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">ID</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Claim Status</th>
                    <th scope="col">Claim Gift</th>
                </tr>
            </thead>
            <tbody>       
                {listGift.map((gift, index) => (
                    <tr key={gift.id}>
                        <td>{index + 1}</td>
                        <td>{gift.id}</td>
                        <td>{gift.amount}</td>
                        <td>{gift.isClaimed ? 'Claimed' : 'Not Claimed'}</td>
                        <td>
                            {gift.isClaimed ? 
                              <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16" style={{color: "green"}}>
                              <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
                            </svg>
                                :
                              <button class="btn btn-secondary" onClick={() => handleClaim(gift.id, index)}>Claim</button>
                            }
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    );
}

export default GiftClaim;