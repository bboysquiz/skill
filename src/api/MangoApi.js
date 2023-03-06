import { api } from './index'

class MangoApi {
    api = api;

    async getList(request) {
        const { data } = await this.api.post('/mango/getList', request);

        return data;
    }
}

export const mangoApi = new MangoApi();