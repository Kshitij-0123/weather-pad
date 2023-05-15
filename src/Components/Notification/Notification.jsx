import { useDispatch, useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { LoadingActions } from "../../Store/LoadingSlice";
import { IsErrorIcon, SuccessIcon } from "../Assets/LoaderIcons";
import styles from "./Notification.module.css";
const Notification = () => {
    const status = useSelector((state) => state.loading.loading);
    const err = useSelector((state) => state.loading.error);
    const loadingClass = status
        ? styles.loading
        : err === null
        ? styles.success
        : styles.error;
    const Value = status ? "Loading..." : err === null ? "Success" : "NotFound";

    const dispatch = useDispatch();
    return (
        <>
            <CSSTransition
                in={status}
                timeout={2500}
                unmountOnExit
                mountOnEnter
                onExited={() => {
                    if (err !== null) dispatch(LoadingActions.setDefault());
                }}
                classNames={{
                    enterActive: styles.entering,
                    exitActive: styles.exiting,
                }}
            >
                <div className={`${styles.Notification} ${loadingClass}`}>
                    {err !== null ? <IsErrorIcon /> : <SuccessIcon />}
                    <h1>{Value}</h1>
                </div>
            </CSSTransition>
        </>
    );
};
export default Notification;
