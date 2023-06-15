import { db } from "../utils/db.server";

type moviestar={
    id: number;
    firstname: string;
    lastname: string;
};

export const listmoviestars = async () : Promise<moviestar[]> => {
        return db.movie_Star.findMany({
        select:{
            id: true,
            firstname: true,
            lastname: true,
        },
    });
};