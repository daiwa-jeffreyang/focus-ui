'use client';

import { Button, Container, Group, Text, Title } from '@mantine/core';
import { IconArrowRight, IconStar } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import { SimpleForm } from '@/components/Form/SimpleForm';
import classes from './HeroSection.module.css';

export function HeroSection() {
	const router = useRouter();

	return (
		<Container pt="sm" size="lg">
			<div className={classes.inner}>
				<Title className={classes.title}>Focus Dashboard</Title>
				<Title className={classes.subtitle}>
					Reporting Hub
				</Title>

				<Text className={classes.description} mt={30}>
					Web applications for Daiwa Capital Markets Americas
				</Text>

				<Group mt={40}>
				<SimpleForm/>
					{/* <Button
						size="lg"
						className={classes.control}
						onClick={() => {
							router.push('/dashboard');
						}}
						rightSection={<IconArrowRight />}
					>
						LOGIN
					</Button> */}
					{/* <Button
						variant="outline"
						size="lg"
						className={classes.control}
						onClick={() => {
							// open github
							window.open('https://github.com/jotyy/mantine-admin');
						}}
						rightSection={<IconStar />}
					>
						Give a Star
					</Button> */}
				</Group>
			</div>
		</Container>
	);
}
