/* eslint-disable react/prop-types */
//import"./card.css"

function Card({ti,im,des,isVisit}){

    /*function Card(props)
     const ti = ti.props*/

    //const ti=ti
    //const im=im
    //const des=des
    return(
    <div> 
        <img src={im} alt=""></img>
        <div>

        </div>
        <h2> {ti}</h2>
        <p> {des}</p>

        {isVisit ?  <span><b> Ucciso</b></span>:<span>Non ucciso </span> }
    </div>
    
    )
}



export default Card;
