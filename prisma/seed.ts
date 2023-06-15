import { db } from "../src/utils/db.server";

type Movie_Star = {
    firstname: string;
    middlename: string;
    lastname: string;
};

type Movie = {
    title: string;
    isFiction: boolean;
    dateReleased: Date;
};

async function seed(){
    await Promise.all(
        getMovie_Stars().map((Movie_Star)=>{
            return db.movie_Star.create({
                data:{
                    firstname: Movie_Star.firstname,
                    middlename: Movie_Star.middlename,
                    lastname: Movie_Star.lastname,
                } 
            })
        })
    );
    const Movie_Star = await db.movie_Star.findFirst({
        where: {
            firstname: "Anmol",
        },
    });

    await Promise.all(
        getMovies().map((Movie)=>{
            const {title, isFiction, dateReleased} = Movie;
            if(!Movie_Star){
                return;
            }
            return db.movie.create({
                data:{
                    title,
                    isFiction,
                    dateReleased,
                    movie_StarId: Movie_Star.id,
                },
            });
        })
    );
} 

seed();

function getMovie_Stars(): Array<Movie_Star>{
    return[
        {
            firstname: "Anmol",
            middlename: "",
            lastname: "KC",
        },
        {
            firstname: "Beedhan",
            middlename: "",
            lastname: "Bhuwai",
        },
        {
            firstname: "Subash",
            middlename: "",
            lastname: "Archaraya",
        },
        {
            firstname: "Niraj",
            middlename: "",
            lastname: "Bohara",
        },
        {
            firstname: "Raj",
            middlename: "",
            lastname: "Poudel",
        },
        {
            firstname: "Rupesh",
            middlename: "",
            lastname: "Thapa",
        },
        {
            firstname: "Bishal",
            middlename: "DC",
            lastname: "Tripathi"
        },
        {
            firstname: "Adip",
            middlename: "",
            lastname: "Tiwari",
        },
    ];
}

function getMovies(): Array<Movie>{
    return[
        {
            title: "Captain",
            isFiction: false,
            dateReleased: new Date(),
        },
        {
            title: "The Untold Story Of A Lady Killer",
            isFiction: false,
            dateReleased: new Date(),
        },
        {
            title: "The Day I Met Your Possible Mother",
            isFiction: false,
            dateReleased: new Date(),
        },
        {
            title: "Hangover 5",
            isFiction: false,
            dateReleased: new Date(),
        },
        {
            title: "Mero Gaming",
            isFiction: true,
            dateReleased: new Date(),
        },
    ]
}