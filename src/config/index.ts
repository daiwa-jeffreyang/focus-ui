import {
	IconBadge,
	IconBuilding,
	IconChartAreaLineFilled,
	IconComponents,
	IconDashboard,
	IconReportMoney,
	IconUsersGroup,
} from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { get } from 'http';
import { NavItem } from '@/types/nav-item';

const navigationLinks: NavItem[] = [
	{ label: 'Dashboard', icon: IconDashboard, link: '/dashboard' },

	{
		label: 'Finance',
		icon: IconReportMoney,
		// icon: IconComponents,
		initiallyOpened: false,
		// link: '/dashboard/table',
		links: [
			{
				label: 'Reports',
				link: '/dashboard/table',
			},
			{
				label: 'Accounting',
				link: '/dashboard/form',
			},
		],
	},
	{
		label: 'Corporate',
		icon: IconBuilding,
		initiallyOpened: false,
		// link: '/dashboard/chart',
		links: [
			{
				label: 'Clients',
				link: '/dashboard/chart',
			},
			{
				label: 'Sales',
				link: '/dashboard/form',
			},
			{
				label: 'Positions',
				link: '/dashboard/form',
			},
		],
	},
	{
		label: 'Compliance',
		icon: IconBadge,
		initiallyOpened: false,
		// link: '/dashboard/settings',
		links: [
			{
				label: 'Documents',
				link: '/dashboard/chart',
			},
			{
				label: 'SEC',
				link: '/dashboard/form',
			},
		],
	},
	{
		label: 'Equities',
		icon: IconChartAreaLineFilled,
		initiallyOpened: false,
		// link: '/dashboard/chart',
		links: [
			{
				label: 'Trades',
		link: '/dashboard/chart',
	},
	{
				label: 'Security Master',
				link: '/dashboard/form',
			},
		],
	},
	{
		label: 'Human Resources',
		icon: IconUsersGroup,
		initiallyOpened: true,
		link: '/dashboard/form',
	},
];

export interface Department {
	departmentId: number;
	name: string;
	status: string;
	revisionNo: number;
	createTmstmp: string;
	createUser: string;
	updateTmstmp: string;
	updateUser: string;
}

async function getAllDepartments(): Promise<Department[]> {
	const res = await fetch('https://docapi-docapi-data.azuremicroservices.io/doc/departments/all');

	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error('Failed to fetch data');
	}

	return res.json();
}

// function getIntersection(navItems: NavItem[] = [], departments: Department[] = []): NavItem[] {
function getIntersection(navItems: NavItem[], departments: Department[] ): NavItem[] {
	// Using filter to find the intersection
	return navItems.filter(navItem =>
		departments.some(department => department && navItem.label === department.name),
	);
}

export function NavLinks() {
	let [departments, setDepartments] = useState<Department[]>([]);
	let filteredNavLinks: NavItem[]; // = getIntersection(navigationLinks, departments);

	useEffect(() => {
		let mounted = true;

		// console.log("xxxx" + getDepartments())
		getAllDepartments().then(dept => {
			if (mounted) {
				setDepartments(dept);
				// dept.forEach(d => {
				// 	console.log("xEACH ELEMENT: " + d.departmentId + " " + d.name);
				// });

				// const filteredNavLinks = navigationLinks.filter(navLink =>
				// 	navigationLinks.some(dept => department.name === navLink.label)
				// );
			} else {
				// 	// d.forEach( x => console.log("EACH ELEMENT: " + x.name))
				dept.forEach(d => {
					console.log('yEACH ELEMENT: ' + d.departmentId + ' ' + d.name);
				});
			}
		});

		return () => {
			mounted = false;
		};
	}, []);

	filteredNavLinks = getIntersection(navigationLinks, departments!);
	return filteredNavLinks;
	// return navigationLinks;
}
