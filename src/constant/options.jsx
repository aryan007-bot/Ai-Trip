import { icons } from "lucide-react";

export const SelectTravelesList=[
    {
        id:1,
        title:'Just Me',
        desc:'A sole traveles in explortion',
        icons:'✈',
        people:'1'
    },
    {
        id:2,
        title:'A Couple',
        desc:'Two traveles in tandem',
        icons:'🥂',
        people:'2 People' 
    },
    {
        id:3,
        title:'Family',
        desc:'A group of fun loving adv',
        icons:'🏡',
        people:'3 to 5 People'  
    },
    {
        id:4,
        title:'Friends',
        desc:'A bunch of thrill-seekes',
        icons:'🍻',
        people:'5 to 10 People'  
    },
]

export const SelectBudgetOption=[
    {
        id:1,
        title:"Cheap",
        desc:'Stay conscious of costs',
        icon:'💵'
    },
    {
        id:2,
        title:"Moderate",
        desc:'Keep cost on the average side ',
        icon:'💰'
    },
    {
        id:3,
        title:"Luxury",
        desc:'Dont worry about cost',
        icon:'💸'
    },
       
]

export const AI_PROMPT='Generate Travel plan for loaction: {loaction}, for {totalDays} for {traveler} with a {budget}budget ,Give me a Hotel option list with HotelName,Hotel address, Pric, hotel image url, geo coordinates, rating, description and suggest itinerary with placeName,place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating, Time  travel each of the locaton for {totalDays} with each day plan with best time to vist in JSON format.'