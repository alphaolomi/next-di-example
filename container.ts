// container.ts
import 'reflect-metadata';
import { Container } from 'inversify';
import { TYPES } from './types';
import { ApiService } from './interfaces';
import { RealApiService } from './apiService';

const MyContainer = new Container();

MyContainer.bind<ApiService>(TYPES.ApiService).to(RealApiService);

export default { MyContainer }
