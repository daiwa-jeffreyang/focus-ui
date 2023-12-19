'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, Paper, Space, Text, TextInput } from '@mantine/core';
import { modals } from '@mantine/modals';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
// import classes from './HeroSection.module.css';

const schema = z.object({
	name: z.string().min(1, { message: 'Username is required' }),
	email: z.string().email('Email is not valid'),
});

type User = z.infer<typeof schema>;

export const SimpleForm = () => {
	const router = useRouter();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<User>({
		resolver: zodResolver(schema),
	});

	const onSubmit = (data: User) =>
		modals.openConfirmModal({
			title: 'Register successfully',
			children: <Text size="sm">{data.name}</Text>,
			labels: { confirm: 'Confirm', cancel: 'Cancel' },
			onConfirm: () => console.log('Confirmed'),
		});

	return (
		<Paper withBorder shadow="md" p="md" w="400px">
			<Box<'form'>>
				{/* <Text<'h2'> component="h2" fw="bold" fz="lg">
					Login
				</Text> */}
				<TextInput
					label="Username"
					error={errors.name && errors.name.message}
					{...register('name')}
				/>
				<Space h="sm" />
				<TextInput
					label="Password"
					error={errors.email && errors.email.message}
					{...register('email')}
				/>
				{/* <Text component="p" color="gray" size="sm">
					We will send you a confirmation email
				</Text> */}
				<Space h="md" />
				{/* <Button onClick={handleSubmit(onSubmit)}>Register</Button> */}
				<Button
						size="lg"
						// className={classes.control}
						onClick={() => {
							router.push('/dashboard');
						}}
						// rightSection={<IconArrowRight />}
					>
						LOGIN
					</Button>
			</Box>
		</Paper>
	);
};
