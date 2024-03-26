import { MovieDetailsDataObject, MovieDetailsDataObjectSchema } from "../model/MovieDetailsDataObject"
import NetworkApiService from "../network/NetworkApiService"



async function movieListGet(): Promise<MovieDetailsDataObject> {
    let networkAPIService: NetworkApiService = NetworkApiService.getInstance();
    let response: any;
    try {
        response = await networkAPIService.getResponse("https://script.google.com/macros/s/AKfycbwRPdoGh0swb1zc24MxJx1kAy2Bm4mf3vIrU8PDaPBXbAZ8IqXmYV_RG08IiNfQtEIW/exec");
    } catch (error) {
        throw error;
    }
    return MovieDetailsDataObjectSchema.parse(response);
}

export { movieListGet }