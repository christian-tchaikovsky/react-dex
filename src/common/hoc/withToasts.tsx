import React, { useMemo } from "react";
import { useAppSelector } from "@/common/hooks";
import { Toast } from "@/common/components/Toast";
import { ToastLayout } from "@/common/layouts/ToastLayout";

const withToasts = (Component: React.ComponentType, delay: number): () => JSX.Element => {
    function WithToasts(): JSX.Element {
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
                    <ToastLayout>
                        {renderNotifications}
                    </ToastLayout>
                )}
            </React.Fragment>
        );
    }

    WithToasts.displayName = `WithToasts(${(Component.displayName ?? Component.name) || "Component"})`;

    return WithToasts;
};

export default withToasts;
