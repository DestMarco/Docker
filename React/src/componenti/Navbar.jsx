import './Navbar.css'
import Link from './Link'
const X =11;
const img="vite";
/*const imgstyle={height:"300px", bordeRadus:"90px"}*/
/*const imgstyle={height:X<10?"800px":"500px", borderRadius:"500px"}*/

function Navbar(){
return(

    <ul>
    <div id ="box" className='rotate'>Lodate oil sole </div>
    <nav>{X}</nav>
    <img className="BordoArrotondato"src={`/${img}.svg`}></img>
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