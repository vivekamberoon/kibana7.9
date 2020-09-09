/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { API_URLS } from '../../../common/constants';
import { StatesIndexStatus, StatesIndexStatusType } from '../../../common/runtime_types';
import { apiService } from './utils';

export const fetchIndexStatus = async (): Promise<StatesIndexStatus> => {
  return await apiService.get(API_URLS.INDEX_STATUS, undefined, StatesIndexStatusType);
};
