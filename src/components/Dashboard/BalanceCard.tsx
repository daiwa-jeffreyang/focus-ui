'use client';

import { Button, Card, Group, rem, Select, Space, Stack, Text, Title } from '@mantine/core';
import { IconArrowRight, IconArrowUp } from '@tabler/icons-react';
import classes from './Dashboard.module.css';

const BalanceLeftStack = () => (
	<Stack gap="md" style={{ flex: 1 }}>
		<Stack gap={4}>
			<Text size="xs" c="gray.6">
				Audit Closed
			</Text>
			<Space h={2} />
			<Title order={3}>80</Title>
			<Text size="sm" c="gray.5">
				Total  166
				<span>
					<IconArrowUp size={12} color="green" />
				</span>
			</Text>
		</Stack>

		<Group>
			<Stack gap={2}>
				<Text size="sm" c="gray.6">
					Transaction
				</Text>
				<Title order={5}>82%</Title>
			</Stack>
			<Stack gap={2}>
				<Text size="sm" c="gray.6">
					Valuation
				</Text>
				<Title order={5}>73%</Title>
			</Stack>
		</Group>
		<Button size="sm" w={rem(140)} rightSection={<IconArrowRight size={14} />}>
			View more
		</Button>
	</Stack>
);

const BalanceRightStack = () => (
	<Stack style={{ flex: 1 }}>
		<Stack align="start" gap={2}>
			<Text size="sm" c="gray.6">
				JPY
			</Text>
			<Title order={5}>
			¥ 1,123,647,341
				{/* <Text component="span" size="md" fw="bold" c="gray.6">
					$1123.64
				</Text> */}
			</Title>
		</Stack>
		<Stack align="start" gap={2}>
			<Text size="sm" c="gray.6">
				USD
			</Text>
			<Title order={5}>
				$ 21,035,345
				{/* <Text component="span" size="md" fw="bold" c="gray.6">
					$923.64
				</Text> */}
			</Title>
		</Stack>
		<Stack align="start" gap={2}>
			<Text size="sm" c="gray.6">
				EUR
			</Text>
			<Title order={5}>
			€ 2,453,453
				{/* <Text component="span" size="md" fw="bold" c="gray.6">
					$112.64
				</Text> */}
			</Title>
		</Stack>
	</Stack>
);

export function BalanceCard() {
	return (
		<Card radius="md">
			<Card.Section className={classes.section}>
				<Title order={5}>Fund Accounting</Title>
				<Select
					value="march"
					size="xs"
					data={[
						{ value: 'march', label: 'March' },
						{ value: 'april', label: 'April' },
					]}
				/>
			</Card.Section>
			<Card.Section className={classes.section}>
				<BalanceLeftStack />
				{/* <BalanceChart /> */}
				<BalanceRightStack />
			</Card.Section>
		</Card>
	);
}
