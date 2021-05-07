import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { provincias } from './data/provincias';
import { producto } from './data/producto'; 

    class FormCheck extends React.Component{
        constructor(props){
            super(props)       

            this.state={
                display: false,      
                name:"",
                surname:"",
                email:"",
                phone:0,
                address:"",
                naddress:0,
                selectvalue: "Alicante",              
            };       
            this.select_handleChange = this.select_handleChange.bind(this);
        } 

        inputCheck = (e) => {
            let filter = e.target.getAttribute('filter')   
            e.target.value = e.target.value.replace(new RegExp(filter, 'g'), '')   
            this.setState({[e.target.name]: e.target.value})          
          }

        submitCheck = () => {
            if(!this.state.name || !this.state.surname){
                alert("Introduce tu nombre y apellidos");
            }else if(!this.state.email.match(/@./g)){
                alert("Introduce el email correctamente");
            }else if(this.state.phone.length<9 || !this.state.phone){
                alert("Introduce un numero de teléfono");
            }else if(!this.state.address){
                alert("Introduce una dirección válida");
            }else if(this.state.naddress.length<3||!this.state.naddress){
                alert("Introduce un número de dirección válido");
            }else{
                this.setState=({display:true});
            }
        }

        select_handleChange(event){
            this.setState({ selectvalue: event.target.selectvalue });            
        }
        
        reset_form = () =>{
            this.setState({
                display:!this.state.display,
                name:'',
                surname:'',
                phone:0,
                address:'',
                naddress:0,
                selectvalue: 'Alicante'
            });
        }

        formulario(){
            return(
                <div className="form">
                    <label className="form-label">Nombre</label>
                    <input filter="[^a-zA-Z ]" id='nom' name="name" type="text" onChange={this.inputCheck} className="form-control" />
                    <label className="form-label">Apellidos</label>
                    <input filter="[^a-zA-Z ]" id='apell' name="surname" type="text" onChange={this.inputCheck} className="form-control"/>
                    <label className="form-label">Email</label>
                    <input name="email" type="email" onChange={(e)=>{this.setState({email:e.target.value})}} className="form-control"/>
                    <label className="form-label">Teléfono</label>
                    <input filter="[^0-9]" maxLength="9" name="phone" type="text" onChange={this.inputCheck} className="form-control"/>
                    <label className="form-label">Dirección</label>
                    <input name="address" type="text" onChange={this.inputCheck} className="form-control"/>
                    <label className="form-label">Número de dirección</label>
                    <input filter="[^0-9]" name="naddress" type="text" maxLength="3" onChange={this.inputCheck} className="form-control"/>
                    <label className="form-label">Provincias</label>
                    <select value={this.state.selectvalue} onChange={this.select_handleChange} className="form-select">
                    {provincias.map((provincia) => (
                        <option key={provincia} value={provincia}>
                            {provincia}
                        </option>
                    ))}
                    </select>
                    <br/>
                    <button onClick={this.submitCheck} className="btn btn-primary">Enviar</button>
                </div> 
            );            
        }

        producto(){
            return(
                <div className="form">
                    <p>{producto.name}</p>
                </div>
            );   
        }

        render(){
            return this.state.display ? this.producto() : this.formulario();
        }
    }

    ReactDOM.render(
        <FormCheck />,
        document.getElementById('formulario')
    );

    /*
    class Select_prov extends React.Component{  
        constructor(props) {
            super(props);
            this.tuputa = this.tuputa.bind(this);
        }

        tuputa(prov){ 
            console.log(prov);
        };

        render(){
            return(
                <select>
                    {provincias.map((provincia) => (
                        <option key={provincia} value={provincia} 
                            onChange={()=>this.tuputa(provincia)}>
                            {provincia}
                        </option>
                    ))}
                </select>
            );           
        }       
    }
    */
   
    /*
    ReactDOM.render(
        <Select_prov/>,
        document.getElementById('provincias')
    );
    */
   
    