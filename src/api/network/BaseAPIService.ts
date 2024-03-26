import { CancelToken } from 'axios';

interface BaseApiServices {
  getResponse(url: string, token?: string, cancelToken?: CancelToken ): Promise<any>;
  postResponse(url: string, data: any, options?: { cancelToken?: CancelToken }): Promise<any>;
  postHeaderResponse(url: string, data: any, token: string, options?: { cancelToken?: CancelToken }): Promise<any>;
  postHeaderWithoutBodyResponse(url: string, token: string, options?: { cancelToken?: CancelToken }): Promise<any>;
  getResponseHeaderListingApi(url: string, token: string, headerData: any[], options?: { cancelToken?: CancelToken }): Promise<any>;
  putResponse(url: string, data: any,  options?: { cancelToken?: CancelToken }): Promise<any>;
  putHeaderResponse(url: string, data: any, token: string, options?: { cancelToken?: CancelToken }): Promise<any>;
  putHeaderWithoutBodyResponse(url: string, token: string, options?: { cancelToken?: CancelToken }): Promise<any>;
  postFileUpload(url: string, entity: any, path: string, options?: { cancelToken?: CancelToken }): Promise<any>;
}
export default BaseApiServices;