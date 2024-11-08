import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'Locom Mobile Application',
		color: '#5EE563',
		description: `
The Locom mobile application connects businesses and customers, allowing businesses to register their services and users to search for services like bike servicing by category. Users can view detailed information about registered businesses, including pricing and service details, and communicate directly through integrated messaging features. The app also includes referral options for businesses, simplifying the process of finding and connecting with service providers to enhance interactions.`
					,
		shortDescription:
			'Locom is a mobile app that connects businesses and customers, allowing users to find and message service providers like bike servicing based on their needs.',
		links: [{ to: 'https://play.google.com/store/apps/details?id=com.rexsolution.locom', label: 'Play Store' }],
		logo: Assets.locom,
		name: 'Locom',
		period: {
			from: new Date(2023, 9, 1), to: new Date(2024, 2, 0)
		},
		skills: getSkills('react-native', 'tailwindcss', 'js'),
		type: 'Mobile Application',
			screenshots: [
			{
				label: '1',
				src: 'https://play-lh.googleusercontent.com/jfA6-ftPTKYdS4Dpr85c-B_oAKDewdBVkEWNglSE5QETKsOqaY5Hq2W10dmTzBxOBSc=w526-h296-rw'
			},
			{
				label: '2',
				src: 'https://play-lh.googleusercontent.com/88OWslLqUvv_M8nmTGxBEAn36LQHRfAsf1VklYTFjxn3JVHq3n8yjnbqzPgCY2pjzII=w526-h296-rw'
			},
		]
	},
	{
		slug: 'RD Dhoot Web Application',
		color: '#5e95e3',
		description: `Rddhoot Web Application
					 Developed the "Rddhoot" website using PHP, JavaScript, and Bootstrap for a responsive and dynamic user experience.
					 Implemented a comprehensive admin panel with PHP Maker for efficient content management.
					 Ensured optimal performance and a seamless user experience across various devices and browsers.
					 Created a user-friendly interface with robust functionality to enhance overall usability and accessibility.`,
		shortDescription:
			' Developed the "Rddhoot" website using PHP, JavaScript, and Bootstrap for a responsive user experience with a comprehensive admin panel for efficient content management.',
		links: [{ to: 'https://rddhoot.com/', label: 'Web' }],
		logo: Assets.rddhoot,
		name: 'RD Dhoot',
		period: {
			from: new Date(2024, 2, 1), to: new Date(2024, 3, 0)
		},
		skills: getSkills('mysql', 'js','bootstrap','html','css'),
		type: 'Web Application',
		screenshots: [
			{
				label: '1',
				src: '/logos/r1.png'
			},
			{
				label: '2',
				src: '/logos/r2.png'
			},
			{
				label: '3',
				src: '/logos/r3.png'
			},
			{
				label: '4',
				src: '/logos/r4.png'
			},
			{
				label: '5',
				src: '/logos/r5.png'
			},
		]
	},
	{
		slug: 'Nandani Impex Web Application',
		color: '#E5B25E',
		description: `Nandani Impex Web Application
					 Developed the "Nandani Impex" website using PHP, JavaScript, and Bootstrap for a responsive and dynamic user experience.
					 Implemented a comprehensive admin panel with PHP Maker for efficient content management.
					 Ensured optimal performance and a seamless user experience across various devices and browsers.
					 Created a user-friendly interface with robust functionality to enhance overall usability and accessibility.`,
		shortDescription:
			' Developed the "Nandani Impex" website using PHP, JavaScript, and Bootstrap for a responsive user experience with a comprehensive admin panel for efficient content management.',
		links: [{ to: 'https://www.nandiniimpex.com/', label: 'Web' }],
		logo: Assets.nandini,
		name: 'Nandani Impex',
		period: {
			from: new Date(2024, 3, 1), to: new Date(2024, 4, 0)
		},
		skills: getSkills('mysql', 'js','bootstrap','html','css'),
		type: 'Web Application',
		screenshots: [
			{
				label: '1',
				src: '/logos/n1.png'
			},
			{
				label: '2',
				src: '/logos/n2.png'
			},
			{
				label: '3',
				src: '/logos/n3.png'
			},
			{
				label: '4',
				src: '/logos/n4.png'
			},
			{
				label: '5',
				src: '/logos/n5.png'
			},
		]
	},
	{
		slug: 'Mama’s Delight Web Application',
		color: '#E55E5E',
		description: `Mama's Delight is a responsive website developed using the Spoonacular API, providing users with comprehensive food and recipe information. It enables users to easily search for recipes and view detailed nutritional information while ensuring a user-friendly experience that is accessible across all devices.`,	
		shortDescription:
			' Mama’s Delight is a responsive website using the Spoonacular API for easy recipe searches, nutritional details, and preparation steps.',
		links: [{ to: 'https://mama-sdelight.netlify.app/', label: 'Web' },{ to: 'https://github.com/Aditya8325-12/Mama-sDelight', label: 'GitHub' }],
		logo: Assets.mamas,
		name: 'Mama’s Delight',
		period: {
			from: new Date(2024, 7, 1), to: new Date(2024, 7, 25)
		},
		skills: getSkills( 'js','tailwindcss','react'),
		type: 'Web Application',
		screenshots: [
			{
				label: '1',
				src: '/logos/m1.png'
			},
			{
				label: '2',
				src: '/logos/m2.png'
			},
			{
				label: '3',
				src: '/logos/m3.png'
			},
			{
				label: '4',
				src: '/logos/m4.png'
			},
			{
				label: '5',
				src: '/logos/m5.png'
			},
		]
	},
	{
		slug: 'Time Track Web + Mobile  Application',
		color: '#6C5EE5',
		description: `
The Time Tracker application includes an admin panel for user login and logout, allowing users to view detailed time records for the current month or a specified time range, while also facilitating efficient management and tracking of user activities.`,		
		shortDescription:
			'The Time Tracker app features an admin panel for user login, detailed time records, and efficient management of user activities.',
			links: [{ to: 'https://expo.dev/accounts/adityadhutraj/projects/timetracker/builds/7673ddf8-bcf7-4df4-8ac1-3a192b0aacd1', label: 'Apk' },{ to: 'https://github.com/Aditya8325-12/TimeTrackDashboard', label: 'GitHub' }],
		logo: Assets.timetrack,
		name: 'Time Track',
		period: {
			from: new Date(2024, 9, 1), to: new Date(2024, 10, 20)
		},
		skills: getSkills('react-native', 'js','tailwindcss','react','nodejs','mongodb'),
		type: 'Web + Mobile  Application',
		screenshots: [
			{
				label: 'Mobile ',
				src: '/logos/t6.png'
			},
			{
				label: 'Admin 1',
				src: '/logos/t1.png'
			},
			{
				label: 'Admin 2',
				src: '/logos/t2.png'
			},
			{
				label: 'Admin 3',
				src: '/logos/t3.png'
			},
			{
				label: 'Admin 4',
				src: '/logos/t4.png'
			},
			{
				label: 'Admin 5',
				src: '/logos/t5.png'
			},

		]
	},
	{
		slug: 'Exam Portal Web + Mobile  Application',
		color: '#5e95e3',
		description: `The Online Exam Portal features weekly and lesson-wise tests, allowing lesson-wise assessments to be taken without a time limit and weekly tests to be completed within a specific time range, thereby offering a flexible and structured approach to personalized learning and test-taking.`,		
		shortDescription:
			'The Online Exam Portal offers flexible, untimed lesson-wise tests and timed weekly tests for personalized learning.',
			links: [{ to: 'https://github.com/Aditya8325-12/Online_Exam_portal', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'Exam Portal',
		period: {
			from: new Date(2023, 1, 1), to: new Date(2023, 2, 0)
		},
		skills: getSkills('react-native', 'js','tailwindcss','react','nodejs','mongodb'),
		type: 'Web + Mobile  Application',
		screenshots: [
			{
				label: '1',
				src: '/logos/e1.png'
			},
		]
	},

];

export const title = 'Projects';
