import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Provider } from 'inversify-react';
import container from '../container'
import Page from '../pages/index'

test('Index Page', () => {

  render(<Provider container={() => {
    return container.MyContainer;
  }
  }>
    <Page />
  </Provider>)

  expect(screen.getByText('Next.js with Dependency Injection')).toBeTruthy()
})