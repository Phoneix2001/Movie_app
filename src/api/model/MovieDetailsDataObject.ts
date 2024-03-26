import * as z from "zod";


export const MovieDetail = z.object({
    "description": z.string(),
    "genres": z.string(),
    "imageLink": z.string(),
    "movieId": z.string(),
    "title": z.string(),
});
export type MovieDetail = z.infer<typeof MovieDetail>;

export const MovieDetailsDataObjectSchema = z.object({
    "output": z.array(MovieDetail),
});
export type MovieDetailsDataObject = z.infer<typeof MovieDetailsDataObjectSchema>;
