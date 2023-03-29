import { RestService } from './restService';

// eslint-disable-next-line
export class ListService extends RestService<any> {
    public constructor(baseUrl: string, baseRoute: string) {
        super(baseUrl, baseRoute);
    }
}
