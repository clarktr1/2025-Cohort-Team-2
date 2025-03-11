import React from "react";

interface QuickActionButtonProps {
    text: string;
    onClick?: () => void;
}

const QuickActionButton: React.FC<QuickActionButtonProps> = ({ text, onClick }) => {
    return (
        <li className="w-40 h-40 p-1 bg-gradient-to-r from-orange-500 to-orange-100 rounded-full">
            <button
                onClick={onClick}
                className="w-full h-full rounded-full flex items-center justify-center bg-neutral-950 text-orange-100 font-bold hover:bg-orange-100 hover:text-neutral-900 transition-colors duration-300 ease-in-out focus:outline-none"
            >
                {text}
            </button>
        </li>
    );
};

export default QuickActionButton;
