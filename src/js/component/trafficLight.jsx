import React, {useState} from "react";

//create your first component
const Glow = () => {
	const [color,colorState] = useState("");
 	return(
		
			<div className="card justify-content-center ">
				<div className="card-body justify-content-center bg-dark" style={{height: '400px', width: '125px'}}>
					
						{// Aca se define la luz ROJA y la accion "onclick" agregar 
						 //al "colorState" bg-danger para entonces aplicar la funcion ternaria
						}
					<div onClick={ () => colorState("bg-danger") }
					className={
					"rounded-circle bg-danger"+(color === "bg-danger" ? "shadow" : "" )
					} style={{height: '80px', width: '75px'}}>   
					</div>
					
					{// esto es para aplicar un poco espacio entre cada "luz de semaforo"
					}

					<div style={{paddingTop: "50px"}}>
					</div>
					
					{// Aca se define la luz AMARILLA y la accion "onclick" agregar al 
					 //"colorState" bg-warning para entonces aplicar la funcion ternaria
					}
					<div onClick={ () => colorState("bg-warning") }
					className={
					"rounded-circle bg-warning"+(color === "bg-warning" ? "shadow-lg" : "" )
					} style={{height: '80px', width: '75px'}}>
					</div>
					
					{// esto es para aplicar un poco espacio entre cada "luz de semaforo"
					}

					<div style={{paddingTop: "50px"}}>
					</div>
					
					{// Aca se define la luz VERDE y la accion "onclick" agregar al 
					 //"colorState" bg-success para entonces aplicar la funcion ternaria
					}
					<div onClick={ () => colorState("bg-success") }
					className={
					"rounded-circle bg-success"+(color === "bg-success" ? "shadow-lg" : "" )
					} style={{height: '80px', width: '75px'}}>
					</div>
				</div>
			</div>
	)
};

// enable-shadows -> funcionalidad de bootstrap, probar a ver si ayuda con los shadows


export default Glow;
