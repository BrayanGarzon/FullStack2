import { Link } from "react-router-dom";


export default function Navbar({brand}){
    return(
        <nav style={style.nav}>
            <h2>{brand}</h2>
            <ul style={styles.ul}>
                <li>
                    <Link to="/"> Inicio<Link/>
                </li>
                <li>
                    <Link to="/products"> Productos<Link/>
                </li>
                <li>
                    <Link to="/contact"> Contacto<Link/>
                </li>
            </ul>
        </nav>
    );
}

const styles ={
    nav: {
        display : "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        backgroundColor: "#111",
        color: "#fff"
    }, 
    ul: {
        
    }
}


