import React from 'react';
import { render } from "@testing-library/react";
import Settings from './Settings'
import '@testing-library/jest-dom/extend-expect';


test("renders in progress in h2 of Settings component", () => {
   const { getByText } = render(<Settings />);

   const headerTwo = getByText(/in progress.../i);

   expect(headerTwo).toBeInTheDocument();
  });

