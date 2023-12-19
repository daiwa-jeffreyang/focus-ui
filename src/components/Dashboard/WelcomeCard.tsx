'use client'

import { Card, List, Space, Text, ThemeIcon, Title } from '@mantine/core';
import { IconCircleCheck } from '@tabler/icons-react';
import Link from 'next/link'

export function WelcomeCard() {
	return (
		<Card radius="md">
			<Title order={5}>Notifications</Title>
			<Text fz="sm" c="dimmed" fw="500">
				Corporate Actions
			</Text>
			<Space h="sm" />
			<List
				center
				size="sm"
				spacing="sm"
				icon={
					<ThemeIcon color="green.3" size={22} radius="xl">
						<IconCircleCheck size="1rem" />
					</ThemeIcon>
				}
			>
				<List.Item>Reverse Splits: <Link href=''>Microsoft (MSFT), Exxon (XOM)</Link></List.Item>
				<List.Item>Mergers: <Link href=''>Cigna (CI) merges with Humana (HUM)</Link></List.Item>
				<List.Item>Share Buybacks: <Link href=''>Chevron (CVX)</Link> </List.Item>
				<List.Item>Tender Offers: <Link href=''>SpaceX at $97/share</Link></List.Item>
			</List>
		</Card>
	);
}
