import './Navbar.css'
import Link from './Link'
const X =3;
const img="vite";

function Navbar(){
return(

    <ul>
    <nav>{X}</nav>
    <img src={`/${img}.svg`}></img>
    <li><Link></Link></li>
    <li><Link></Link></li>
    <li><Link></Link></li>
    <li><Link></Link></li>
    <li><Link></Link></li>
    <li><Link></Link></li>
    </ul>

)

}

export default Navbar