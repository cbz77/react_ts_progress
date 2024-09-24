
interface CoinProps {
    side: string
}

const Coin: React.FC<CoinProps> = ({side}) => {

    const sides: Record<string, string> = {
        heads: 'bg-yellow-500',
        tails: 'bg-red-500',
        start: 'bg-green-500',
    };
    const className = `coin w-20 h-20 flex items-center justify-center text-black rounded-full ${sides[side]}`;
    return <div className={className}>{side}</div>;
    
    
}

export default Coin