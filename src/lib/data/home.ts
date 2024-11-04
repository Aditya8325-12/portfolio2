import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Aditya';

export const lastName = 'Dhutraj';

export const description =
	`I'm a passionate software developer with expertise in React, React Native, and Node.js. I enjoy building innovative web and mobile applications, focusing on creating impactful and scalable solutions. I’m dedicated to continuous learning and growth in this ever-evolving field.`;

	export const links: Array<{ platform: Platform; link: string }> = [
		{ platform: Platform.GitHub, link: 'https://github.com/Aditya8325-12' },
		{ platform: Platform.Linkedin, link: 'https://www.linkedin.com/in/adityadhutraj/' },
	];
export const skills = getSkills('js', 'react', 'react-native', 'java', 'mysql','mongodb','nodejs','tailwindcss','bootstrap','express');
