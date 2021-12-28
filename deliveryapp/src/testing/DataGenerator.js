import {addDoc, collection, db, doc, setDoc} from "../firebase";
import faker from 'faker';

export default async function AddARandomRestaurant(){

    const foods = [
        'Chicken Tikka Sub',
        'Cheese corn Roll',
        'Chicken Tikka Sub',
        'Aloo gobi',
        'Aloo tikki',
        'Aloo methi'
    ];
    const prices = [
      '10.00',
        '5.50',
        '6.25',
        '3.00',
        '4.50'
    ];

    const menuImages = [
      'https://firebasestorage.googleapis.com/v0/b/delivery-c718a.appspot.com/o/Menu%2Fjoseph-gonzalez-zcUgjyqEwe8-unsplash.jpg?alt=media&token=ac7d3d9a-9317-4627-a588-3439d84ef89e',
        'https://firebasestorage.googleapis.com/v0/b/delivery-c718a.appspot.com/o/Menu%2Fjoseph-gonzalez-fdlZBWIP0aM-unsplash.jpg?alt=media&token=643ba5a3-b1a1-4960-823d-ac0ab8cd667d',
        'https://firebasestorage.googleapis.com/v0/b/delivery-c718a.appspot.com/o/Menu%2Femiliano-vittoriosi-OFismyezPnY-unsplash.jpg?alt=media&token=cddc368c-9751-4453-aee6-d40a05f98fec',
        'https://firebasestorage.googleapis.com/v0/b/delivery-c718a.appspot.com/o/Menu%2Featers-collective-pLKgCsBOiw4-unsplash.jpg?alt=media&token=deff9d1f-8b58-485f-8e08-3ec061091b39',
        'https://firebasestorage.googleapis.com/v0/b/delivery-c718a.appspot.com/o/Menu%2Fcasey-lee-awj7sRviVXo-unsplash.jpg?alt=media&token=ca242d19-71b5-45f5-af92-9746bac22c63',
        'https://firebasestorage.googleapis.com/v0/b/delivery-c718a.appspot.com/o/Menu%2Fbrooke-lark-oaz0raysASk-unsplash.jpg?alt=media&token=176e3528-2a3e-46a2-967f-6624520c29b5',
        'https://firebasestorage.googleapis.com/v0/b/delivery-c718a.appspot.com/o/Menu%2Fbrooke-lark-1Rm9GLHV0UA-unsplash.jpg?alt=media&token=a0daaffb-3295-42cf-9723-d5700738c880',
        'https://firebasestorage.googleapis.com/v0/b/delivery-c718a.appspot.com/o/Menu%2Fbrooke-lark--F_5g8EEHYE-unsplash.jpg?alt=media&token=48351ea1-5039-4ec4-83dc-2305df1be968',
        'https://firebasestorage.googleapis.com/v0/b/delivery-c718a.appspot.com/o/Menu%2Fanna-tukhfatullina-food-photographer-stylist-Mzy-OjtCI70-unsplash.jpg?alt=media&token=7ab4c66d-d581-4b69-bdc6-d6bb9b025825',
        'https://firebasestorage.googleapis.com/v0/b/delivery-c718a.appspot.com/o/Menu%2Fa.jpg?alt=media&token=c6281998-2141-44cf-9c8b-3a46efe475cb'
    ];

    console.log('Generating data');
    try {
        const docRef = await addDoc(collection(db,"restaurants"),{
                name:'Armann and Benyamin',
                deliveryHours:['10AM-10PM','10AM-10PM','10AM-10PM','10AM-10PM','10AM-10PM','10AM-10PM','10AM-10PM'],
                openingHours:['10AM-10PM','10AM-10PM','10AM-10PM','10AM-10PM','10AM-10PM','10AM-10PM','10AM-10PM'],
                profileImage:menuImages[Math.floor(Math.random() * menuImages.length)],
                backgroundImage:menuImages[Math.floor(Math.random() * menuImages.length)],
                tags:['Indian','Pizza','Vegan', 'Vegetarian'],
                canDeliver:true,
                stars:'4.3',
                address:{
                    street:'Gruen',
                    houseNumber:'27',
                    postalCode:'33775',
                    city:'Versmold',
                    state:'Norden Westfalen'
                }
            }
        );

        //Add random menu items
        for (let i = 0; i < 10; i++){
            await addDoc(collection(db,`restaurants/${docRef.id}/menu`), {
                name: foods[Math.floor(Math.random() * foods.length)],
                price: prices[Math.floor(Math.random() * prices.length)],
                image:menuImages[Math.floor(Math.random() * menuImages.length)],
            });
        }

        //Add reviews for this restaurant
        for (let j = 0; j < 10; j++){
            await addDoc(collection(db,`restaurants/${docRef.id}/reviews`),{
                username: faker.name.findName(),
                review: faker.lorem.text(),
                profileImage:faker.image.people(),
                rating: (Math.random() * 5).toFixed(1).toString(),
                uid:'FAKEUSER',
            });
        }


        console.log("Document written with ID: ", docRef.id);
    }catch (e) {
        console.log("Something Went Wrong!");
        console.log(e.toString());
    }
}