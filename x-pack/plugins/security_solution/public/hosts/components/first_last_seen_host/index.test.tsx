/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { cloneDeep } from 'lodash/fp';
import React from 'react';
import { MockedProvider } from 'react-apollo/test-utils';

// we don't have the types for waitFor just yet, so using "as waitFor" until when we do
import { render, act, wait as waitFor } from '@testing-library/react';

import { mockFirstLastSeenHostQuery } from '../../containers/hosts/first_last_seen/mock';
import { TestProviders } from '../../../common/mock';

import { FirstLastSeenHost, FirstLastSeenHostType } from '.';

describe('FirstLastSeen Component', () => {
  const firstSeen = 'Apr 8, 2019 @ 16:09:40.692';
  const lastSeen = 'Apr 8, 2019 @ 18:35:45.064';

  // Suppress warnings about "react-apollo" until we migrate to apollo@3
  /* eslint-disable no-console */
  const originalError = console.error;
  beforeAll(() => {
    console.error = jest.fn();
  });
  afterAll(() => {
    console.error = originalError;
  });

  test('Loading', async () => {
    const { container } = render(
      <TestProviders>
        <MockedProvider mocks={mockFirstLastSeenHostQuery} addTypename={false}>
          <FirstLastSeenHost hostname="kibana-siem" type={FirstLastSeenHostType.FIRST_SEEN} />
        </MockedProvider>
      </TestProviders>
    );
    expect(container.innerHTML).toBe(
      '<span class="euiLoadingSpinner euiLoadingSpinner--medium"></span>'
    );
  });

  test('First Seen', async () => {
    const { container } = render(
      <TestProviders>
        <MockedProvider mocks={mockFirstLastSeenHostQuery} addTypename={false}>
          <FirstLastSeenHost hostname="kibana-siem" type={FirstLastSeenHostType.FIRST_SEEN} />
        </MockedProvider>
      </TestProviders>
    );

    await act(() =>
      waitFor(() => {
        expect(container.innerHTML).toBe(
          `<div class="euiText euiText--small"><span class="euiToolTipAnchor">${firstSeen}</span></div>`
        );
      })
    );
  });

  test('Last Seen', async () => {
    const { container } = render(
      <TestProviders>
        <MockedProvider mocks={mockFirstLastSeenHostQuery} addTypename={false}>
          <FirstLastSeenHost hostname="kibana-siem" type={FirstLastSeenHostType.LAST_SEEN} />
        </MockedProvider>
      </TestProviders>
    );
    await act(() =>
      waitFor(() => {
        expect(container.innerHTML).toBe(
          `<div class="euiText euiText--small"><span class="euiToolTipAnchor">${lastSeen}</span></div>`
        );
      })
    );
  });

  test('First Seen is empty but not Last Seen', async () => {
    const badDateTime = cloneDeep(mockFirstLastSeenHostQuery);
    badDateTime[0].result.data!.source.HostFirstLastSeen.firstSeen = null;
    const { container } = render(
      <TestProviders>
        <MockedProvider mocks={badDateTime} addTypename={false}>
          <FirstLastSeenHost hostname="kibana-siem" type={FirstLastSeenHostType.LAST_SEEN} />
        </MockedProvider>
      </TestProviders>
    );

    await act(() =>
      waitFor(() => {
        expect(container.innerHTML).toBe(
          `<div class="euiText euiText--small"><span class="euiToolTipAnchor">${lastSeen}</span></div>`
        );
      })
    );
  });

  test('Last Seen is empty but not First Seen', async () => {
    const badDateTime = cloneDeep(mockFirstLastSeenHostQuery);
    badDateTime[0].result.data!.source.HostFirstLastSeen.lastSeen = null;
    const { container } = render(
      <TestProviders>
        <MockedProvider mocks={badDateTime} addTypename={false}>
          <FirstLastSeenHost hostname="kibana-siem" type={FirstLastSeenHostType.FIRST_SEEN} />
        </MockedProvider>
      </TestProviders>
    );

    await act(() =>
      waitFor(() => {
        expect(container.innerHTML).toBe(
          `<div class="euiText euiText--small"><span class="euiToolTipAnchor">${firstSeen}</span></div>`
        );
      })
    );
  });

  test('First Seen With a bad date time string', async () => {
    const badDateTime = cloneDeep(mockFirstLastSeenHostQuery);
    badDateTime[0].result.data!.source.HostFirstLastSeen.firstSeen = 'something-invalid';
    const { container } = render(
      <TestProviders>
        <MockedProvider mocks={badDateTime} addTypename={false}>
          <FirstLastSeenHost hostname="kibana-siem" type={FirstLastSeenHostType.FIRST_SEEN} />
        </MockedProvider>
      </TestProviders>
    );
    await act(() =>
      waitFor(() => {
        expect(container.textContent).toBe('something-invalid');
      })
    );
  });

  test('Last Seen With a bad date time string', async () => {
    const badDateTime = cloneDeep(mockFirstLastSeenHostQuery);
    badDateTime[0].result.data!.source.HostFirstLastSeen.lastSeen = 'something-invalid';
    const { container } = render(
      <TestProviders>
        <MockedProvider mocks={badDateTime} addTypename={false}>
          <FirstLastSeenHost hostname="kibana-siem" type={FirstLastSeenHostType.LAST_SEEN} />
        </MockedProvider>
      </TestProviders>
    );
    await act(() =>
      waitFor(() => {
        expect(container.textContent).toBe('something-invalid');
      })
    );
  });
});