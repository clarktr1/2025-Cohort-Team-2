
import QuickActionButton from "./QuickActionButton";

export interface QuickAction {
    text: string;
    onClick: () => void;
}

interface QuickActionsProps {
    actions: QuickAction[];
}

const QuickActions: React.FC<QuickActionsProps> = ({ actions }) => {
    return (
        <div className=" bg-neutral-900 rounded-b-lg py-10">
            <h2 className="font-bold text-orange-100 mb-10 tracking-widest text-center text-4xl">Quick Actions</h2>
            <ul className="flex gap-4 items-center justify-center list-none">
                {actions.map((action, index) => (
                    <QuickActionButton key={index} text={action.text} onClick={action.onClick} />
                ))}
            </ul>
        </div>
    );
};

export default QuickActions;
