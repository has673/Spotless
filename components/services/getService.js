import { request } from './ajax';

const getService = async (route, params) =>
  request({
    method: 'GET',
    route,
    params,
  });

export default getService;
