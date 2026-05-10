import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const SelectedPlayers = ({selectedPlayers,setSelectedPlayers,coin,setCoin}) => {
    console.log(selectedPlayers);

    const handleDeletedSelectedPlayer = (player) =>{
        const filterPlayers = selectedPlayers.filter(selectedPlayer => selectedPlayer.playerName != player.playerName)
        setSelectedPlayers(filterPlayers);
        setCoin(coin+player.price);
    }

    return (
        <div>
            <div className='space-y-5'>
            {
                selectedPlayers.map((player,index) => {
                    return <div key={index} className='flex items-center gap-6 justify-between p-10 rounded-2xl border'> 
                        <div className='flex items-center gap-6'>
                            <img src={player.playerImg} alt={player.playerName}  className='w-auto h-18.75 rounded-md'/>
                            <div>
                                <h2 className='flex items-center gap-2 font-semibold text-xl'> <FaUser></FaUser> {player.playerName}</h2>
                                <p>{player.playerType}</p>
                            </div>
                        </div>
                        <button className='btn text-red-500' onClick={() => handleDeletedSelectedPlayer(player)} > <MdDelete></MdDelete> </button>
                    </div>
                })
            }
            </div>
        </div>
    );
};

export default SelectedPlayers;