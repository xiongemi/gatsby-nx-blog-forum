import { render } from '@testing-library/react';

import WrapWithProvider from './wrap-with-provider';

describe('WrapWithProvider', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WrapWithProvider />);
    expect(baseElement).toBeTruthy();
  });
});
