export interface Notification {
    id: number;
    message: string;
}

interface NotificationsProps {
    notifications: Notification[];
}

const Notifications = ({ notifications }: NotificationsProps) => {
    return (
        <div className="">
            {notifications.map((notification) => (
                <p key={notification.id} className="text-orange-100 mb-2">
                    {notification.message}
                </p>
            ))}
        </div>
    );
};

export default Notifications;

