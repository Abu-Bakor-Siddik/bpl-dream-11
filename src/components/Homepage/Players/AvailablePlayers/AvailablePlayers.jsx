import React from 'react';
import Card from '../../../ui/Card';

const AvailablePlayers = ({players,setCoin,coin}) => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {
                    players.map((player) => {
                        return (
                            <Card player={player} setCoin={setCoin} coin={coin}></Card>
                        )
                    })
                }
            </div>

        </div>
    );
};

export default AvailablePlayers;