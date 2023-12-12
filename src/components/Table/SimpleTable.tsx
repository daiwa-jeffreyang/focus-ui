'use client';

import { MantineProvider, Paper, Space, Title } from '@mantine/core';
import { MantineReactTable, type MRT_ColumnDef, useMantineReactTable } from 'mantine-react-table';
// import {  use, useMemo ,useState  } from 'react';
import { use, useEffect, useMemo, useState } from 'react';


type Person = {
	name: string;
	username: string;
	address: {
		street: string
		city: string;
		zipcode: string;
	}
};

interface Document {
	documentId: number;
	name: string;
	publishedDate: string;
	fileType: number;
	filePath: string;
	status: string;
}

export function getData() {
	return fetch('https://docapi-docapi-data.azuremicroservices.io/doc/documents/all')
		// return fetch('https://jsonplaceholder.typicode.com/users')
		.then(data => data.json())
}

async function getAllDocuments(): Promise<Document[]> {
	const res = await fetch('https://docapi-docapi-data.azuremicroservices.io/doc/documents/all');

	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error('Failed to fetch data');
	}

	return res.json();
}

export const SimpleTable = () => {
	//should be memoized or stable
	const columns = useMemo<MRT_ColumnDef<Document>[]>(
		() => [
			{
				accessorKey: 'name',
				header: 'Name',
				//mantineTableHeadCellProps: { sx: { color: 'green' } },
			},
			{
				accessorKey: 'publishedDate',
				header: 'Published Date',
			},
			{
				accessorKey: 'fileType',
				header: 'File Type',
			},
			{
				accessorKey: 'filePath',
				header: 'File Path',
			},
			{
				accessorKey: 'status',
				header: 'status',
			},
		],
		[],
	);

	// const [list, setList] = useState<Person[]>([]);

	// useEffect(() => {
	// 	let mounted = true;
	// 	getData()
	// 		.then(items => {
	// 			if (mounted) {
	// 				setList(items)
	// 				//list = items;
	// 			}
	// 		})
	// 	return () => { mounted = false };
	// }, [])



	function Documents() {
		let [documents, setDocuments] = useState<Document[]>([]);

		useEffect(() => {
			let mounted = true;

			getAllDocuments().then(doc => {
				if (mounted) {
					setDocuments(doc);
				} else {
					doc.forEach(d => {
						console.log('yEACH ELEMENT: ' + d.documentId + ' ' + d.name);
					});
				}
			});

			return () => {
				mounted = false;
			};
		}, []);

		return documents;
	}


	return (
		<Paper withBorder radius="md" p="md">
			<Title order={5}>Simple</Title>
			<Space h="md" />

			{/* <MantineReactTable table={table} /> */}

			<MantineReactTable columns={columns}
				data={Documents()}
				// layoutMode='grid',
				// mantineTableHeadCellProps={{
				// 	style: {
				// 		th: {
				// 			background: 'hsl (0 0% 0% / 0.5)'
				// 		},
				// 		fontSize: '14px',
				// 		color: 'red',
				// 		// '@media (min-width: 600px)': {
				// 		// 	fontSize: '12px',
				// 		// },
				// 		'@media max-width(650 px)':{
				// 			td: {
				// 				display: 'block'
				// 			},

						// 	body: {
						// 		fontSize: '6pt',
						// 		color: '#000',
						// 	},
						// 	table: {
						// 		pageBreakInside: 'avoid',
						// 	}
						// },
						// '@media print and (max-width: 5in)':{
						// 	table: {
						// 		pageBreakInside: 'auto'
						// 	},
						// 	tr: {
						// 		pageBreakInside: 'avoid'
						// 	}
					// 	}
					// },
				// }}
			/>

		</Paper>
	);
};
