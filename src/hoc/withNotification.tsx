import React, { useMemo } from "react";
import { useAppSelector } from "@/hooks";
import { Notification } from "@/components/Notification";

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
                    <div
                        style={{
                            position: "absolute",
                            right: "20px",
                            top: "20px",
                            overflow: "hidden"
                        }}
                    >
                        {renderNotifications}
                    </div>
                )}
            </React.Fragment>
        );
    }

    WithNotification.displayName = `WithNotification(${(Component.displayName ?? Component.name) || "Component"})`;

    return WithNotification;
};

export default withNotification;
