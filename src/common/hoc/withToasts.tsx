import React, { useMemo } from "react";
import { useAppSelector } from "@/common/hooks";
import { Toast } from "@/common/components/Toast";
import { NotificationLayout } from "@/common/layouts/NotificationLayout";

const withToasts = (Component: React.ComponentType, delay: number): () => JSX.Element => {
    function WithNotification(): JSX.Element {
        const { toasts } = useAppSelector(state => state.toasts);

        const renderNotifications = useMemo(() => {
            if (toasts.length === 0) return null;

            const duration = delay * 1000;

            return toasts.map(toast => (
                <Toast
                    key={toast.id}
                    id={toast.id}
                    message={toast.message}
                    type={toast.type}
                    delay={duration}
                />
            ));
        }, [toasts]);

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

export default withToasts;
