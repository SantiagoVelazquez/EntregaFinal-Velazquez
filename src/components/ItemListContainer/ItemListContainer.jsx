const ItemListContainer = ({greeting}) => {
    const greetingStyles = {
        fontSize:" 3.5rem",
        fontWeight:"700",
        textAlign: "center",
        color:"#5D4C48",
    }
    return(
        <div style={greetingStyles}>
            {greeting}
        </div>
    )
}

export default ItemListContainer;