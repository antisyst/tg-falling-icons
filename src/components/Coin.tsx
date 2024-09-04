import React from 'react';

interface CoinProps {
    x: number;
    y: number;
}

const Coin: React.FC<CoinProps> = ({ x, y }) => {
    return (
        <img 
            src="https://www.svgrepo.com/show/210231/coin.svg" 
            alt="coin" 
            style={{
                position: 'absolute',
                left: `${x}px`,
                top: `${y}px`,
                width: '30px',
                height: '30px',
                transition: 'top 2s ease-in'
            }} 
        />
    );
};

export default Coin;
