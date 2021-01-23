import { useState } from "react";
import DeliveryList from "./DeliveyList";
import EditDelivery from "./Form";
import Orders from '../Data/orders.json';
import   Truck from "./mobel";


const Delivery = () => {
    const [ThisDelivey, setThisDelivey] = useState(null);
    const [Olddeliveries, setOldeliveries] = useState(Orders);

    function Delete(id){
        setOldeliveries(Olddeliveries.filter(deliver => deliver.id !== id));
    }

    function Add(delivery){
        delivery.id = nextId(Olddeliveries);
        Olddeliveries.push(delivery)
        setOldeliveries([...Olddeliveries])
    }

    function Save(delivery){
        if (delivery.id) {
            updateDelivery(delivery);
        }
        else {
            Add(delivery);
        }
        setThisDelivey({id:"",date:"",city:"",name: ""});
    }


    function updateDelivery (delivery){
        let Olddelivery = Olddeliveries.find(Olddelivery => Olddelivery.id === delivery.id);
        Olddeliveries[Olddeliveries.indexOf(Olddelivery)] = delivery;
        setOldeliveries([...Olddeliveries]);
    }

    function selectDelivery (id){
        const delivery = Olddeliveries.find(Olddelivery => Olddelivery.id === id);
        setThisDelivey(delivery);
    }

    function  nextId(deliveries) {
        let newId = Math.max(...deliveries.map((Olddelivery) => Olddelivery.id));
        return ++newId;
    }

    return (
        <div className="Delivery">
            <DeliveryList deliveries={Olddeliveries} onDelete={Delete} onSelect={selectDelivery} />
            <EditDelivery delivery={ThisDelivey} onSave={Save} />
            <Truck></Truck>
        </div>
    );
}

export default Delivery;