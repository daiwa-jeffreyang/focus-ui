import {
	BuildingOfficeIcon,
	CalendarIcon,
	ChartPieIcon,
	CheckBadgeIcon,
	CurrencyDollarIcon,
	DocumentChartBarIcon,
	FolderIcon,
	UserGroupIcon,
	UserIcon,
} from '@heroicons/react/24/outline';
import { IconComponents, IconDashboard, IconLock, IconMoodSmile } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { NavItem } from '@/types/nav-item';
import { get } from 'http';

const navigationLinks: NavItem[] = [
	{ label: 'Dashboard', icon: CurrencyDollarIcon, link: '/dashboard' },

	{
		label: 'Finance',
		icon: CurrencyDollarIcon,
		// icon: IconComponents,
		initiallyOpened: true,
		// link: '/dashboard/table',
		links: [
			{
				label: 'Reports',
				link: '/dashboard/table',
			},
			{
				label: 'Forms',
				link: '/dashboard/form',
			},
		],
	},
	{
		label: 'Finance2',
		icon: IconMoodSmile,
		initiallyOpened: true,
		link: '/dashboard/table',
	},
	{
		label: 'Corporate',
		icon: BuildingOfficeIcon,
		initiallyOpened: true,
		// link: '/dashboard/chart',
		links: [
			{
				label: 'Reports',
				link: '/dashboard/chart',
			},
			{
				label: 'Forms',
				link: '/dashboard/form',
			},
		],
	},
	{
		label: 'Compliance',
		icon: CheckBadgeIcon,
		initiallyOpened: true,
		link: '/dashboard/settings',
	},
	{
		label: 'Equities',
		icon: ChartPieIcon,
		initiallyOpened: false,
		link: '/dashboard/chart',
	},
	{
		label: 'Human Resources',
		icon: UserIcon,
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
