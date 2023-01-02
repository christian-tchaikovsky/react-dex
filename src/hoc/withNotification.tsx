import React, { useMemo } from "react";
import { useAppSelector } from "@/hooks";
import { Notification } from "@/components/Notification";
import { NotificationLayout } from "@/layouts/NotificationLayout";

const withNotification = (Component: React.ComponentType, delay: number): () => JSX.Element => {
    function WithNotification(): JSX.Element {
        const { notifications } = useAppSelector(state => state.notification);

        const renderNotifications = useMemo(() => {
            if (notifications.length === 0) return null;

            const duration = delay * 1000;

            return notifications.map(notification => (
                <Notification
                    key={notification.id}
                    id={notification.id}
                    message={notification.message}
                    type={notification.type}
                    delay={duration}
                />
            ));
        }, [notifications]);

        return (
            <React.Fragment>
                <Component/>
                {renderNotifications && (
                    <NotificationLayout>
                        {renderNotifications}
                    </NotificationLayout>
                )}
            </React.Fragment>
        );
    }

    WithNotification.displayName = `WithNotification(${(Component.displayName ?? Component.name) || "Component"})`;

    return WithNotification;
};

export default withNotification;
