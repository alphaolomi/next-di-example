// container.test.ts
import container from '../container';

import { TYPES } from "../types";
import { ApiService } from "../interfaces";
import { RealApiService } from "../apiService";
import { expect, test } from 'vitest'

test('should bind ApiService to RealApiService', () => {
    const apiService = container.MyContainer.get<ApiService>(TYPES.ApiService);

    expect(apiService).toBeInstanceOf(RealApiService);
});
