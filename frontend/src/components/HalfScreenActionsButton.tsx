
interface HalfScreenActionsButtonProps {
    text: string;
    onClick?: () => void;
}

const HalfScreenActionsButton: React.FC<HalfScreenActionsButtonProps> = ({ text, onClick }) => {
    return (
        <button onClick={onClick}
            className="text-orange-100 bg-nuetral-600 w-3/4 h-10 rounded-lg 
                            border-2 hover:bg-orange-500"
        >
            {text}
        </button>
    );
};

export default HalfScreenActionsButton;
