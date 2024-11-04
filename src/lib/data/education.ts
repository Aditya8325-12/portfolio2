import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Bachelor degree of Computer Science',
		description: '',
		location: 'Aurangabad Maharashtra',
		logo: Assets.csmss,
		name: '',
		organization: 'CSMSS, Chh. Shahu College Of Engineering',
		period: { from: new Date(2020, 0, 1), to: new Date(2024, 0, 0) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ["CGPA 8.5"]
	},
	{
		degree: 'Higher Secondary Certificate',
		description: '',
		location: 'Aurangabad Maharashtra',
		logo: Assets.Unknown,
		name: '',
		organization: ' SHAHID BHAGATSINGH JR.COLLEGE',
		period: { from: new Date(2017, 0, 1), to: new Date(2019, 0, 0) },
		shortDescription: '',
		slug: 'dummy-education-item-2',
		subjects: ["Score - 69%"]
	}
];

export const title = 'Education';
