/* eslint-disable react/no-unknown-property */
import React from 'react';
import { Heading } from '../../components';
import ComputerOnDeskBlankBudget from '../../public/assets/computer-on-desk-blank-budget.png'

const Downloads = () => {
  return (
    <div>
      <Heading>Downloads</Heading>
      <a href="/assets/downloads/budget.xlsx" target="_blank" download="Budget.xlsx">
        <img src={ComputerOnDeskBlankBudget.src} alt="Image of a budget" />
      </a>
    </div>
  );
};

export default Downloads;
