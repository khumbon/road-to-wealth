import * as React from 'react';
import { render } from '@testing-library/react';
import { Card } from '..';
import { axe, toHaveNoViolations } from 'jest-axe';
import { colours } from '../../../constants/colours';

expect.extend(toHaveNoViolations);

describe('Card component', () => {
  const { container } = render(
    <Card classname="testCard" backgroundColour={colours.brand}>
      <div />
    </Card>,
  );
  it('renders the Card component', () => {
    expect(container.firstChild).toMatchSnapshot();
  });
  it('renders the Card with no a11y violations', async () => {
    const results = await axe(container.innerHTML);
    expect(results).toHaveNoViolations();
  });
});
