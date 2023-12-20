// apiService.ts
import 'reflect-metadata';
import { injectable } from 'inversify';
import axios from 'axios';
import { TYPES } from './types';
import { ApiService } from './interfaces';


@injectable()
export class RealApiService implements ApiService {
  async fetchData(): Promise<string> {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    return response.data.title;
  }
}
