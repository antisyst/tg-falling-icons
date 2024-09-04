import React, { useState } from 'react';
import Coin from './Coin';

const CoinContainer: React.FC = () => {
    const [coins, setCoins] = useState<{ id: number, x: number, y: number }[]>([]);
    const [coinId, setCoinId] = useState(0);

    const handleTap = (e: React.MouseEvent) => {
        if (coins.length >= 200) return; 

        const x = e.clientX - 15; 
        const y = e.clientY - 15;

        setCoins([...coins, { id: coinId, x, y }]);
        setCoinId(coinId + 1);

        setTimeout(() => {
            setCoins((prevCoins) => prevCoins.map(coin => 
                coin.id === coinId ? { ...coin, y: window.innerHeight - 50 } : coin
            ));
        }, 0);
    };

    return (
        <div 
            style={{ 
                width: '100%', 
                height: '100%', 
                position: 'relative', 
                overflow: 'hidden' 
            }} 
            onClick={handleTap}
        >
            {coins.map(coin => (
                <Coin key={coin.id} x={coin.x} y={coin.y} />
            ))}
        </div>
    );
};

export default CoinContainer;
