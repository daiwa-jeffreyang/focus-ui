'use client';

import {
	ActionIcon,
	Avatar,
	Button,
	Card,
	Flex,
	Group,
	Menu,
	rem,
	Space,
	Stack,
	Text,
	Title,
} from '@mantine/core';
import { IconDots, IconEye, IconFileZip, IconTrash } from '@tabler/icons-react';

const sectionStyle = {
	padding: 'var(--mantine-spacing-md)',
	borderTop: '1px solid lightdark(var(--mantine-colors-gray-3), var(--mantine-colors-dark-4))',
};

export function ProfileCard() {
	return (
		<Card radius="md">
			<Card.Section style={sectionStyle}>
				<Group justify="space-between">
					<Avatar radius="xl"></Avatar>
					<Menu withinPortal position="bottom-end" shadow="sm">
						<Menu.Target>
							<ActionIcon variant="subtle">
								<IconDots size="1rem" />
							</ActionIcon>
						</Menu.Target>

						<Menu.Dropdown>
							<Menu.Item leftSection={<IconFileZip size={rem(14)} />}>Action One</Menu.Item>
							<Menu.Item leftSection={<IconEye size={rem(14)} />}>Action Two</Menu.Item>
							<Menu.Item leftSection={<IconTrash size={rem(14)} />} color="red">
								Action Three
							</Menu.Item>
						</Menu.Dropdown>
					</Menu>
				</Group>

				<Space h="md" />

				<Flex direction="column">
					<Title order={5}>Trades</Title>
					<Space h="xs" />
					<Text fz="sm" c="dimmed" fw="500">
						OPEN TRADES
					</Text>
					<Space h="4" />
					<Text fz="sm" c="dimmed" fw="500">
						3,453
					</Text>
				</Flex>
			</Card.Section>

			<Card.Section style={sectionStyle}>
				<Group grow>
					<Stack gap={4}>
						<Text fz="sm" fw="500">
							UNMATCHED
						</Text>
						<Title order={3}>21</Title>
					</Stack>
					<Stack gap={4}>
						<Text fz="sm" fw="500">
							MATCHED
						</Text>
						<Title order={3}>1932</Title>
					</Stack>
				</Group>
			</Card.Section>

			<Card.Section style={sectionStyle}>
				<Group>
					{/* <Button variant="light">Go to Trades</Button> */}
					<Button>Go to Trades</Button>
				</Group>
			</Card.Section>
		</Card>
	);
}
