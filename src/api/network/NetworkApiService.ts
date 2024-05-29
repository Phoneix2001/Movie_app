import axios, { AxiosInstance, AxiosResponse, CancelToken } from "axios";
import BaseApiServices from "./BaseAPIService";
import SnackBar from "../../Utils/CommonFunctions/SnackBar";

class NetworkApiService implements BaseApiServices {
  private static instance: NetworkApiService;

 public static getInstance(): NetworkApiService {
    if (!NetworkApiService.instance) {
      NetworkApiService.instance = new NetworkApiService();
    }
    return NetworkApiService.instance;
  }

  public async getResponse(url: string, token?: string, cancelToken?: CancelToken): Promise<any> {
    const headers = token ? { 'Content-Type': 'application/json; charset=UTF-8', 'accessToken': token } : undefined;
   var responseData : any;
    try {
      await axios.get(url).then(
        (response) => {
          responseData = response;
          return this.returnResponseError(response);
        }
      ).catch((reason) => {
         console.log(reason)
      });
      return this.returnResponseError(responseData);
    } catch (error) {
      console.log(error);
      SnackBar(error?.toString() || "")
      throw new DefaultException("Default Error", error?.toString() || "");
    }
  }
  returnResponseError(response: AxiosResponse<any, any>): any {
    switch (response.status) {
      case 200:
        return response.data;
      case 401:
        throw new BadRequestException(response.status.toString(), response.data);
      case 400:
        throw new UnauthorisedException(response.status.toString(), response.data);
      default:
        throw new DefaultException(response.status.toString(), response.data);
    }
  }
  postResponse(url: string, data: any, options?: { cancelToken?: CancelToken | undefined; } | undefined): Promise<any> {
    throw new Error("Method not implemented.");
  }
  postHeaderResponse(url: string, data: any, token: string, options?: { cancelToken?: CancelToken | undefined; } | undefined): Promise<any> {
    throw new Error("Method not implemented.");
  }
  postHeaderWithoutBodyResponse(url: string, token: string, options?: { cancelToken?: CancelToken | undefined; } | undefined): Promise<any> {
    throw new Error("Method not implemented.");
  }
  getResponseHeaderListingApi(url: string, token: string, headerData: any[], options?: { cancelToken?: CancelToken | undefined; } | undefined): Promise<any> {
    throw new Error("Method not implemented.");
  }
  putResponse(url: string, data: any, options?: { cancelToken?: CancelToken | undefined; } | undefined): Promise<any> {
    throw new Error("Method not implemented.");
  }
  putHeaderResponse(url: string, data: any, token: string, options?: { cancelToken?: CancelToken | undefined; } | undefined): Promise<any> {
    throw new Error("Method not implemented.");
  }
  putHeaderWithoutBodyResponse(url: string, token: string, options?: { cancelToken?: CancelToken | undefined; } | undefined): Promise<any> {
    throw new Error("Method not implemented.");
  }
  postFileUpload(url: string, entity: any, path: string, options?: { cancelToken?: CancelToken | undefined; } | undefined): Promise<any> {
    throw new Error("Method not implemented.");
  }

}

export default NetworkApiService;