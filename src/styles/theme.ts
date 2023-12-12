'use client'

import { createTheme } from '@mantine/core';

export const theme =  createTheme({
		fontFamily: 'Lucida Bright', //'Quicksand',
		fontFamilyMonospace: 'Disket Mono, Quicksand, monospace',
		headings: {
			fontFamily: 'Quicksand',
			fontWeight: '600',
		},
		colors: {
			'more-dark': [
				'#F8FAFC', // light boja
				'#D8E5F7', // light hover boja
				'#B4CBEF',
				'#829FD0',
				'#5670A2',
				'#263964',
				'#1B2B56', // primary boja // boja teksta filled b
				'#132048', // primary hover boja
				'#0C153A',
				'#070E30',
			],
			'little-light': [
				'#F3F6FE',
				'#EFF3FC',
				'#DFE8F9',
				'#C9D3EC',
				'#B1BCDB',
				'#929EC3',
				'#6A78A7',
				'#49568C', // primary boja // boja teksta filled b
				'#2E3971', // primary hover boja
				'#1C255D',
			],
			'baseweb-black': [
				'#FFFFFF',
				'#F6F6F6',
				'#EEEEEE',
				'#E2E2E2',
				'#CBCBCB',
				'#AFAFAF',
				'#757575',
				'#545454',
				'#333333',
				'#000000',
			],
			'little-blue': [
				'#5f5e4c', '#575e6d', '#5e7183', '#5e7d99', '#6094b8',
				'#6b9ece', '#74abdb', '#b2cee8', '#cedbea', '#dee6e9'
			],
			'ocean-blue': ['#7AD1DD', '#5FCCDB', '#44CADC', '#2AC9DE', '#1AC2D9', '#11B7CD', '#09ADC3', '#0E99AC', '#128797', '#147885'],

		},
		primaryColor: 'little-light',
		defaultRadius: 'sm',
		// loader: 'dots',
	})
