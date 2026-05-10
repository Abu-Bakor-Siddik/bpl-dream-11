import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import SelectedCard from '../../../ui/SelectedCard';

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
                selectedPlayers.length === 0 ? 
                <div className='h-100 flex items-center justify-center flex-col gap-4'>
                    <h2 className='font-semibold text-xl'>No Players selected Yet</h2>
                    <p>go to available tab to select players</p>
                </div>
                :
                selectedPlayers.map((player,index) => {
                    return (
                        <SelectedCard key={index} player={player} handleDeletedSelectedPlayer={handleDeletedSelectedPlayer}></SelectedCard>
                    )
                })
            }
            </div>
        </div>
    );
};

export default SelectedPlayers;