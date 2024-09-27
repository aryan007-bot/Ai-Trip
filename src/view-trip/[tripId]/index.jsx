import InfoSecton from '@/view-trip/components/InfoSecton';
import { getDoc } from 'firebase/firestore';
import { Hotel } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'sonner';

const Viewtrip = () => {

  const{tripId}=useParams();
  const [trip,setTrip]=useState([])

  useEffect(()=>{
    tripId&&GetTripData();
  },[tripId])

  // used to get trip information from firbase
  const GetTripData=async()=>{
    const docRef=doc(db,'AITrips',tripId)
    const docSnap=await getDoc(docRef)

    if(docSnap.exists()){
      console.log("Document:",docSnap.data());
      setTrip(docSnap.data());
    }
    else{
      console.log("No Such Document")
      toast("No trip Found!")
    }
  }

  return (
     <div className='p-10 md:px-20 lg:px-44 xl:px-56'>
      {/* Information Section */}
     I<InfoSecton trip={trip}/>
     {/* Recomended Hotel */}
     <Hotel  trip={trip}/>
     {/* Daily Plan */}

     {/* footer */}

     </div>
  )
}

export default Viewtrip