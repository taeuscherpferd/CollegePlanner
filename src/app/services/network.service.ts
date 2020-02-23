import { INetworkService } from '../interfaces/services/network-service.interface';
import { HttpHeaders } from '@angular/common/http';

const headerDict = {
  'Access-Control-Allow-Origins': '*',
}

const requestOptions = {                                                                                                                                                                                 
  headers: new HttpHeaders(headerDict), 
};

const endpoint = 'https://cors-anywhere.herokuapp.com/localhost:4000/major/1';

export class NetworkService implements INetworkService  {

}