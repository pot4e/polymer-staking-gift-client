import React, { useState, useEffect }  from "react";
import { useChainId, useAccount, useReadContract } from "wagmi";
import XGift_ABI from "../config/XGift_ABI.json";
import chainPolymer from "../config/chainPolymer.json";
import {BrowserProvider, Contract} from 'ethers';
import { toast} from 'react-toastify';


function GiftClaim  ()  {
    const [listGift, setListGift] = useState([]);
    const {address} = useAccount();
    const chainId = useChainId();

    const { data: contractData, error, isLoading } = useReadContract({
        chainId: chainId,
        address: chainPolymer.optimism.portAddr,
        abi: XGift_ABI,
        functionName: 'getGiftsByUser',
        args: [address]
    });
    console.log({
        chainId: chainId,
        address: chainPolymer.optimism.portAddr,
        functionName: 'getGiftsByUser',
        args: [address]
    });
    console.log(contractData);
    useEffect(() => {
        const getGiftDetails = async () => {
            if (contractData) {
                const provider = new BrowserProvider(window.ethereum);
                const contract = new Contract(chainPolymer.optimism.portAddr, XGift_ABI, provider);

                const gifts = [];
                console.log(contractData);
                for (const id of contractData) {
                    console.log(id);
                    const gift = await contract.gifts(id);
                    gifts.push(gift);
                }
                setListGift(gifts);
            }
        };

        getGiftDetails();
    }, [contractData]);
    const handleClaim = (byte32, index) => {
        // Xử lý logic khi nhấn nút Claim cho phần tử có index là index
        console.log('Claim clicked for byte32:', byte32, 'at index:', index);
      };
    

    return (
        <div class="justify-center flex py-2 sm:py-3">
        <table class="table table-bordered border-primary">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Gift ID</th>
                    <th scope="col">Sender</th>
                    <th scope="col">Receiver</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Claim Status</th>
                    <th scope="col">Claim Gift</th>
                </tr>
            </thead>
            <tbody>
                {listGift.map((gift, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{gift.id}</td>
                        <td>{gift.sender}</td>
                        <td>{gift.receiver}</td>
                        <td>{gift.amount}</td>
                        <td>{gift.isClaimed ? 'Claimed' : 'Not Claimed'}</td>
                        <td>
                            {/* Nút Claim */}
                            <button class="btn btn-secondary" onClick={() => handleClaim(gift.id, index)}>Claim</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    );
}

export default GiftClaim;