/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { NotificationsStart, CoreStart } from 'src/core/public';
import { FieldFormatsStart } from './field_formats';
import { createGetterSetter } from '../../kibana_utils/public';
import { IndexPatternsContract } from './index_patterns';
import { DataPublicPluginStart } from './types';

export const [getNotifications, setNotifications] = createGetterSetter<NotificationsStart>(
  'Notifications'
);

export const [getUiSettings, setUiSettings] = createGetterSetter<CoreStart['uiSettings']>(
  'UiSettings'
);

export const [getHttp, setHttp] = createGetterSetter<CoreStart['http']>('Http');

export const [getFieldFormats, setFieldFormats] = createGetterSetter<FieldFormatsStart>(
  'FieldFormats'
);

export const [getOverlays, setOverlays] = createGetterSetter<CoreStart['overlays']>('Overlays');

export const [getIndexPatterns, setIndexPatterns] = createGetterSetter<IndexPatternsContract>(
  'IndexPatterns'
);

export const [getQueryService, setQueryService] = createGetterSetter<
  DataPublicPluginStart['query']
>('Query');

export const [getInjectedMetadata, setInjectedMetadata] = createGetterSetter<
  CoreStart['injectedMetadata']
>('InjectedMetadata');

export const [getSearchService, setSearchService] = createGetterSetter<
  DataPublicPluginStart['search']
>('Search');