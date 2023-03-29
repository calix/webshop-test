import { RestService } from './restService';
import {ProductItem, Products} from '../models';

export class ListService extends RestService<any> {
    public constructor(baseUrl: string, baseRoute: string) {
        super(baseUrl, baseRoute);
    }
}
