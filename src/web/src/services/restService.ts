import axios, { AxiosInstance } from 'axios';

export interface QueryOptions {
    maxLimit?: number;
}

export interface Entity {
    id?: string;
}

export abstract class RestService<T extends Entity> {
    protected client: AxiosInstance;

    public constructor(baseUrl: string, baseRoute: string) {
        this.client = axios.create({
            baseURL: `${baseUrl}${baseRoute}`
        });
    }

    public async getList(queryOptions?: QueryOptions): Promise<T> {
        const response = await this.client.request<T>({
            method: 'GET',
            data: queryOptions
        });

        return response.data;
    }

    public async get(id: string): Promise<T> {
        const response = await this.client.request<T>({
            method: 'GET',
            url: id
        });

        return response.data
    }
}
