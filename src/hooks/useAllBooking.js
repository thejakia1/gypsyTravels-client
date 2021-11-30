import {useEffect,useState} from 'react';

const useAllBooking = ()=>{
    const [booking, setBooking] = useState([]);

    useEffect(() => {
        fetch('https://secure-retreat-56263.herokuapp.com/bookingTour')
       .then(res => res.json())
       .then(result => {
        setBooking(result)
       });
     }, []);

return [ booking ];

}

export default useAllBooking;