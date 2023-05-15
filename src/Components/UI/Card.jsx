import styles from "./Card.module.css";
const Card = ({ Component = "div", children, borderRadius, font, ...rest }) => {
    // console.log(DataActions);
    return (
        <div
            {...rest}
            className={styles.Card}
            style={{ borderRadius: `${borderRadius}`, fontFamily: font }}
        >
            <Component className={styles.CardContent}>{children}</Component>
        </div>
    );
};

export default Card;
