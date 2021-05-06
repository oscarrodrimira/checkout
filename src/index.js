import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { provincias } from './data/provincias';
import { producto } from './data/producto';
import { cliente } from './data/cliente';

    class FormCheck extends React.Component{
        constructor(props){
            super(props);
            const [name, setName] = useState(cliente.name);
            const [surn, setSurn] = useState(cliente.surname);
            const [emai, setEmai] = useState(cliente.email);
            const [phone, setPhone] = useState('');
            const [address, setAddress] = useState('');
            const [adnum, setAdnum] = useState('');
            this.state={              
                selectvalue: 'Alicante'              
            };
            
            this.handleSubmit = this.handleSubmit.bind(this);
            this.select_handleChange = this.select_handleChange.bind(this);
        }

        

        handleSubmit(event){
            if(this.state.nomvalue===''||this.state.apellvalue===''||this.state.emavalue===''||this.state.telvalue===''||this.state.dirvalue===''||this.state.dnumvalue===''){
                console.log('Nada, jaja, polla')
                //cliente.name = document.getElementById('nom').value;
                console.log();
            }else{
                cliente.name = document.getElementById('nom').value;
                cliente.surname = document.getElementById('apell').value;
                cliente.ema = document.getElementById('ema').value;
                cliente.phone = document.getElementById('tel').value;
                cliente.address = document.getElementById('dir').value;
                cliente.addressNumber = document.getElementById('dnum').value;
                cliente.province = this.state.selectvalue
                console.log(this.state.nomvalue);
            }
        }

        select_handleChange(event){
            this.setState({ selectvalue: event.target.selectvalue });            
        }

        name_handleChange(event){
            this.setState({  });
        }

        


        render(){
            return(
                <form onSubmit={this.handleSubmit}>
                    <label className="form-label">Nombre</label>
                    <input id='nom' name="nom" type="text" className="form-control" />
                    <label className="form-label">Apellidos</label>
                    <input id='apell' name="apell" type="text" className="form-control"/>
                    <label className="form-label">Email</label>
                    <input name="ema" type="email" className="form-control"/>
                    <label className="form-label">Teléfono</label>
                    <input name="tel" type="text" className="form-control"/>
                    <label className="form-label">Dirección</label>
                    <input name="dir" type="text" className="form-control"/>
                    <label className="form-label">Número de dirección</label>
                    <input  name="dnum" type="text" maxLength="3" className="form-control"/>
                    <label className="form-label">Provincias</label>
                    <select value={this.state.selectvalue} onChange={this.select_handleChange} className="form-select">
                    {provincias.map((provincia) => (
                        <option key={provincia} value={provincia}>
                            {provincia}
                        </option>
                    ))}
                </select>
                <br/>
                    <input className="btn btn-primary" type="submit"/>
                </form>
            );            
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
   
    