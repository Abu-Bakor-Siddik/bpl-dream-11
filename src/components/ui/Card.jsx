import React from 'react';
import { FaFlag, FaUser } from 'react-icons/fa';

const Card = ({player}) => {
    return (
        <div>                        
            <div className="card bg-base-100 h-150 shadow-sm mb-10">
                <figure>
                    <img
                    src={player.playerImg}
                    alt="Player" 
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title"> <FaUser></FaUser> {player.playerName}</h2>
                    <div className='flex justify-between gap-2 items-center'>
                        <div className='flex justify-between gap-2 items-center '>
                        <FaFlag></FaFlag>
                        <p>{player.playerCountry}</p>
                        </div>

                        <button className='btn btn-ghost'>{player.playerType}</button>
                    </div>

                    <div className="divider"></div>

                    <h2 className='font-bold'>Rating: {player.rating}</h2>
                    <div className='flex justify-between gap-4 font-bold '>
                        <p>{player.battingStyle}</p>
                        <p className='text-right'>{player.bowlingStyle}</p>
                    </div>

                    <div className="card-actions justify-between items-center">
                        <p className='font-semibold'>Price: ${player.price}</p>
                    <button className="btn">Choose Player</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Card;