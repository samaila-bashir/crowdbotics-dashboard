import MockAdapter from 'axios-mock-adapter';
import data from "./data.json";

const payload = "payload";

export const mockApplication = (mock:MockAdapter) => {
     
    mock.onGet('/api/v1/apps/').reply(200, {
        [payload] : data.application
    });

    mock.onGet(/api\/v1\/apps\/\d+/).reply((config)=>{
        const id = (config.url as any).match(/api\/v1\/apps\/(\d+)/)[1] as string;
        const application = data.application.find((el)=> el.id === parseInt(id));
        if(!application) return [404]
        return [200,{
            [payload]: application
        }]
    });

    mock.onPost('/api/v1/apps/').reply(200);

    mock.onPut(/api\/v1\/apps\/\d+/).reply(200);

    mock.onDelete(/api\/v1\/apps\/\d+/).reply(200);

}