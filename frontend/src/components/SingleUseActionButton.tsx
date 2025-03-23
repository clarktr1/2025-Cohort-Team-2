
interface SingleUseActionButtonProps {
    text: string;
    classCss: string;
    onClick?: () => void;
}

const SingleUseActionButton: React.FC<SingleUseActionButtonProps> = ({ text, classCss, onClick }) => {
    return (
        <button onClick={onClick}
            className={classCss}
        >
            {text}
        </button>
    );
};

export default SingleUseActionButton;
