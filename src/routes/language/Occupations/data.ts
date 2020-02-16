import React from 'react';

import * as OccupationSvg from 'assets/images/languages/occupations';

export interface OccupationDataset {
  svg: React.FC<OccupationSvg.SvgrProps>;
  name: string;
}

export const occupationData: OccupationDataset[] = [
  {
    svg: OccupationSvg.Astronaut,
    name: 'Astronaut'
  },
  {
    svg: OccupationSvg.Baker,
    name: 'Baker'
  },
  {
    svg: OccupationSvg.Barber,
    name: 'Barber'
  },
  {
    svg: OccupationSvg.Cashier,
    name: 'Cashier'
  },
  {
    svg: OccupationSvg.Chef,
    name: 'Chef'
  },
  {
    svg: OccupationSvg.Doctor,
    name: 'Doctor'
  },
  {
    svg: OccupationSvg.Farmer,
    name: 'Farmer'
  },
  {
    svg: OccupationSvg.Fireman,
    name: 'Fireman'
  },
  {
    svg: OccupationSvg.Librarian,
    name: 'Librarian'
  },
  {
    svg: OccupationSvg.Nurse,
    name: 'Nurse'
  },
  {
    svg: OccupationSvg.Painter,
    name: 'Painter'
  },
  {
    svg: OccupationSvg.Pilot,
    name: 'Pilot'
  },
  {
    svg: OccupationSvg.Policeman,
    name: 'Policeman'
  },
  {
    svg: OccupationSvg.Scientist,
    name: 'Scientist'
  },
  {
    svg: OccupationSvg.Student,
    name: 'Student'
  },
  {
    svg: OccupationSvg.Teacher,
    name: 'Teacher'
  },
  {
    svg: OccupationSvg.Vet,
    name: 'Vet'
  },
  {
    svg: OccupationSvg.Waiter,
    name: 'Waiter'
  }
];
