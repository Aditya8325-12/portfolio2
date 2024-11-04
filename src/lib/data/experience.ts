import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'open-sourcer',
		company: ' V4U Tracking Solutions Limited',
		description: `Software Developer Intern
		V4U Tracking Solutions Limited
		
		- Developed and deployed mobile apps for iOS and Android using React Native.
		- Integrated APIs, resolved issues, and optimized performance.
		- Published apps on the Apple Store and Google Play Store.
		- Built responsive websites with React, Tailwind CSS, and Bootstrap.`,
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Aurangabad Maharashtra',
		period: { from: new Date(2023, 9, 1), to: new Date(2024, 4, 0) },
		skills:  getSkills('react', 'react-native', 'js', 'tailwindcss', 'bootstrap','ts' ),
		name: ' Software Developer Intern',
		color: 'red',
		links: [],
		logo: Assets.v4u,
		shortDescription: ''
	},
	// {
	// 	slug: 'software-freelance',
	// 	company: 'Self-employed',
	// 	description: 'Creating awesome applications for customers.',
	// 	contract: ContractType.Freelance,
	// 	type: 'Software Development',
	// 	location: 'Home',
	// 	period: { from: new Date() },
	// 	skills: getSkills('svelte', 'ts', 'sass', 'css', 'html', 'js'),
	// 	name: 'Freelancer',
	// 	color: 'blue',
	// 	links: [],
	// 	logo: Assets.Unknown,
	// 	shortDescription: 'Creating awesome applications for customers.'
	// },
	// {
	// 	slug: 'software-freelance-junior',
	// 	company: 'Self-employed',
	// 	description: 'Creating awesome applications for customers.',
	// 	contract: ContractType.Freelance,
	// 	type: 'Software Development',
	// 	location: 'Home',
	// 	period: { from: new Date(2022, 0, 1), to: new Date() },
	// 	skills: getSkills('css', 'html', 'js'),
	// 	name: 'Junior Freelancer',
	// 	color: 'green',
	// 	links: [],
	// 	logo: Assets.Unknown,
	// 	shortDescription: 'Creating awesome applications for customers.'
	// }
];

export const title = 'Experience';
