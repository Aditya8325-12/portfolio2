import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import svelte from '../md/svelte.md?raw';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Langauges', slug: 'lang' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const items = [
	defineSkill({
		slug: 'js',
		color: 'yellow',
		description:
			'JavaScript is a versatile, high-level programming language that enables dynamic behavior on web pages. As a cornerstone of web development, it allows developers to create interactive and responsive applications. With frameworks like React, Angular, and Vue.js, JavaScript has evolved into a powerful tool for both front-end and back-end development.',
		logo: Assets.JavaScript,
		name: 'JavaScript',
		category: 'pro-lang'
	}),
	// defineSkill({
	// 	slug: 'ts',
	// 	color: 'blue',
	// 	description:
	// 		'TypeScript is a superset of JavaScript that adds static typing, enhancing the development process by catching errors at compile time. With strong tooling support and integration with modern frameworks, TypeScript improves code quality and maintainability, making it a popular choice for large-scale applications.',
	// 	logo: Assets.TypeScript,
	// 	name: 'TypeScript',
	// 	category: 'pro-lang'
	// }),
	defineSkill({
		slug: 'css',
		color: 'blue',
		description:
			'CSS (Cascading Style Sheets) is the style sheet language used for describing the presentation of a document written in HTML or XML. It enables the separation of content from design, allowing for responsive layouts and animations, and enhancing the user experience across different devices.',
		logo: Assets.CSS,
		name: 'CSS',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'html',
		color: 'orange',
		description:
			'HTML (HyperText Markup Language) is the standard markup language for creating web pages. It provides the basic structure of a webpage, which is enhanced and modified by CSS and JavaScript. Understanding HTML is essential for web development, as it is the foundation for all web content.',
		logo: Assets.HTML,
		name: 'HTML',
		category: 'markup-style'
	}),
	// defineSkill({
	// 	slug: 'sass',
	// 	color: 'pink',
	// 	description:
	// 		'Sass (Syntactically Awesome Style Sheets) is a preprocessor scripting language that is interpreted or compiled into CSS. It allows for the use of variables, nested rules, and mixins, which make CSS more maintainable and easier to write. Sass improves the workflow for styles in large projects.',
	// 	logo: Assets.Sass,
	// 	name: 'Sass',
	// 	category: 'markup-style'
	// }),
	// defineSkill({
	// 	slug: 'reactjs',
	// 	color: 'cyan',
	// 	description:
	// 		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
	// 	logo: Assets.ReactJs,
	// 	name: 'React Js',
	// 	category: 'library'
	// }),
	// defineSkill({
	// 	slug: 'svelte',
	// 	color: 'orange',
	// 	description: svelte,
	// 	logo: Assets.Svelte,
	// 	name: 'Svelte',
	// 	category: 'library'
	// }),
	defineSkill({
		slug: 'react',
		color: 'cyan',
		description: 
			'A JavaScript library for building user interfaces, allowing developers to create reusable UI components efficiently. React utilizes a virtual DOM to enhance performance and provides a powerful ecosystem for web development.',
		logo: Assets.ReactJs,
		name: 'React',
		category: 'library'
	}),
	defineSkill({
		slug: 'react-native',
		color: 'blue',
		description: 
			'A framework for building mobile applications using React. It enables developers to create native mobile apps for iOS and Android with a single codebase, leveraging React’s component-based architecture.',
		logo: Assets.ReactJs,
		name: 'React Native',
		category: 'framework'
	}),
	defineSkill({
		slug: 'java',
		color: 'red',
		description: 
			'A versatile, object-oriented programming language widely used for building enterprise-level applications. Known for its portability across platforms, Java offers a rich API and strong community support.',
		logo: Assets.Java,
		name: 'Java',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'mysql',
		color: 'blue',
		description: 
			'A popular open-source relational database management system known for its reliability and ease of use. MySQL is widely used in web applications for storing and managing structured data.',
		logo: Assets.PostgreSQL,
		name: 'MySQL',
		category: 'database'
	}),
	defineSkill({
		slug: 'mongodb',
		color: 'green',
		description: 
			'A NoSQL database that stores data in flexible, JSON-like documents. MongoDB is designed for scalability and performance, making it suitable for applications with large amounts of unstructured data.',
		logo: Assets.MongoDB,
		name: 'MongoDB',
		category: 'database'
	}),
	defineSkill({
		slug: 'nodejs',
		color: 'green',
		description: 
			'A JavaScript runtime built on Chrome’s V8 engine, allowing developers to build server-side applications. Node.js is known for its event-driven, non-blocking I/O model, making it efficient for handling concurrent connections.',
		logo: Assets.NodeJs,
		name: 'Node.js',
		category: 'framework'
	}),
	defineSkill({
		slug: 'tailwindcss',
		color: 'purple',
		description: 
			'A utility-first CSS framework that enables rapid UI development. Tailwind CSS allows developers to apply styles directly in HTML using predefined classes, promoting a consistent design system.',
		logo: Assets.Tailwind,
		name: 'Tailwind CSS',
		category: 'framework'
	}),
	defineSkill({
		slug: 'bootstrap',
		color: 'purple',
		description: 
			'A popular front-end framework for developing responsive websites. Bootstrap provides a collection of CSS and JavaScript components that help create visually appealing and mobile-friendly designs quickly.',
		logo: Assets.Bootstrap,
		name: 'Bootstrap',
		category: 'framework'
	}),
	defineSkill({
		slug: 'express',
		color: 'darkgreen',
		description:
			'Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications. It simplifies the process of creating server-side applications with a clean and straightforward API, supporting a range of middleware to handle requests, responses, and various HTTP methods. Express is an essential component of the MERN and MEAN stack, enabling developers to build scalable and high-performance RESTful APIs quickly and efficiently.',
		logo: Assets.ExpressJs, // Make sure to define or import the appropriate logo for Express.js
		name: 'Express.js',
		category: 'framework'
	}),
] as const;

export const title = 'Skills';

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};
