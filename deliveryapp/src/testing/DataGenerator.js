import {addDoc, collection, db} from "../firebase";

export default async function AddARandomRestaurant(){
    console.log('Generating data');
    try {
        const docRef = await addDoc(collection(db,"restaurants"),{
                name:'Armann and Benyamin',
                deliveryHours:['10AM-10PM','10AM-10PM','10AM-10PM','10AM-10PM','10AM-10PM','10AM-10PM','10AM-10PM'],
                openingHours:['10AM-10PM','10AM-10PM','10AM-10PM','10AM-10PM','10AM-10PM','10AM-10PM','10AM-10PM'],
                profileImage:'',
                tags:['Indian','Pizza','Vegan', 'Vegetarian'],
                canDeliver:true,
                stars:'4.3',
                address:{
                    street:'Gruen',
                    houseNumber:'27',
                    postalCode:'33775',
                    city:'Versmold',
                    state:'Norden Westfalen'
                },
                menu:[
                    {
                        name:'Pizza Salami',
                        price:'2.50',
                        ingredients:['Salami','Tomatensoße','Käse'],
                        description:'Pikant-scharfe Pizza mit Paprika, Salami und Peperoni',
                        images:['']
                    },

                ]
            }
        );

        console.log("Document written with ID: ", docRef.id);
    }catch (e) {
        console.log("Something Went Wrong!");
        console.log(e.toString());
    }
}