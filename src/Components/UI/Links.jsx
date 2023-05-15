import { forwardRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Links.module.css";
const Links = forwardRef(
    (
        {
            icon = "Icon",
            title = "Title",
            desription = "Description",
            alternate = false,
            children,
            visibility = false,
            path = "/",
            anchor = null,
            ...rest
        },
        ref,
    ) => {
        const Navigate = useNavigate();
        const linkClickHandler = () => {
            if (anchor !== null) {
                window.open(anchor, "_blank");
            } else Navigate(`./${path}`);
        };

        return (
            <div
                className={styles.LinkDiv}
                data-alternate={alternate}
                data-visible={visibility}
                onClick={linkClickHandler}
                ref={ref}
            >
                <img
                    src={require(`../../images/Link Icons/${icon}.svg`)}
                    alt={title}
                    className={styles[`${title}`]}
                />
                <div>
                    <h2>{title}</h2>
                    {children}
                </div>
            </div>
        );
    },
);
export default Links;
