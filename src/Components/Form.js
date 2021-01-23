import React, { useState, useEffect} from 'react';

const Form = ({ delivery , onSave }) => {

    const [myDelivery, setMyDelivery ] = useState({...delivery});

    useEffect(() => {
        setMyDelivery({...delivery});
    }, [delivery]);

    function handleNameChanged(change) {
        setMyDelivery({...myDelivery,name:change.target.value})
    }
    function handleCityChanged(change) {
        setMyDelivery({...myDelivery,city:change.target.value})
    }
    function handleDateChanged(change) {
        setMyDelivery({...myDelivery,date:change.target.value})
    }
    function onClick(){
        onSave(myDelivery);
    }
    
    return (
        <div className = "myForm">
                <input style={{height : 30 , width: 350 ,borderColor: "red" ,borderRadius:4, marginBottom: 20 }} placeholder = "Date" value={myDelivery.date} onChange={handleDateChanged}/>
                <input style={{height : 30 , width: 350 ,borderColor: "red" ,borderRadius:4, marginBottom: 20 }} placeholder = "Name" value={myDelivery.name} onChange={handleNameChanged}/>
                <input style={{height : 30 , width: 350 ,borderColor: "red" ,borderRadius:4, marginBottom: 20,  }} placeholder = "City"value={myDelivery.city} onChange={handleCityChanged}/>
                <button className="myBtn" style={{opacity:"70%"}}  onClick={onClick}>{myDelivery.id?"Save":"Add"}</button>
        </div>
    );
}
export default Form;