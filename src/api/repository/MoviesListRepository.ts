import { MovieDetailsDataObject, MovieDetailsDataObjectSchema } from "../model/MovieDetailsDataObject"
import { ApiResponse, completed } from "../network/ApiResponse";
import NetworkApiService from "../network/NetworkApiService"



const newLocal = "https://script.googleusercontent.com/a/macros/networkon.io/echo?user_content_key=LjAlip5dWaoo_8zXTteqmXE65c2a83kcy3AFZ24oYWY2NKN4Sdx_4khWpj4Z4A7ogqFdieJymf3JSYUGb2qbCBUdemHpXMEjOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMi80zadyHLKDf6zCbLyC-YEKvmCw5awEi68n4RAo2RJzMqTQ5tskS9zW4TAN6zHLOi8DhSbTUEhOdHuTpAs4T5QX3mfjnhBq4IK0FlKv4cRXjaXgOKOOkwc7uk9zF3Z2D32NGLpq1CVXc_ScPTHfLrg&lib=MqbrDgkqZ-93th4iZkj0-mGzTCDxM4zNw";
async function movieListGet(): Promise<ApiResponse<MovieDetailsDataObject>> {
    let networkAPIService: NetworkApiService = NetworkApiService.getInstance();
    let response: any;
    try {
        response = await networkAPIService.getResponse(newLocal);
    } catch (error) {
        throw error;
    }
    return completed(MovieDetailsDataObjectSchema.parse(response));
}

export default movieListGet;