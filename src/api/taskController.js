import axios from 'axios';
import { BASE_URL } from './index';

/**
 * send request to create Task instance
 * @param task
 * @return {Promise<AxiosResponse<T>>}
 */
export async function createTask (task) {
  return axios.post( `${BASE_URL}/task`, task );
}

/**
 *
 * @return {Promise<AxiosResponse<T>>}
 */
export async function getUserTasks () {
  return axios.get( `${BASE_URL}/tasks` );
}

/**
 *
 * @param {string | number} id
 * @param {object} data
 * @return {Promise<AxiosResponse<T>>}
 */
export async function updateTaskById (id, data) {
  return axios.put( `${BASE_URL}/task/${id}`, data );
}