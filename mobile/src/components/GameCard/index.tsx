import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'

import {
	Text,
	ImageBackground,
	ImageSourcePropType,
	TouchableOpacity,
	TouchableOpacityProps,
} from 'react-native'
import { THEME } from '../../theme'

import { styles } from './styles'

export interface GameCardProps {
	id: string
	title: string
	_count: {
		ads: number
	}
	bannerUrl: string
}

interface Props extends TouchableOpacityProps {
	data: GameCardProps
}

export function GameCard({ data, ...rest }: Props) {
	return (
		<TouchableOpacity {...rest} style={styles.container}>
			<ImageBackground style={styles.cover} source={{ uri: data.bannerUrl }}>
				<LinearGradient colors={THEME.COLORS.FOOTER} style={styles.footer}>
					<Text style={styles.name}>{data.title}</Text>
					<Text style={styles.name}>{data._count.ads} anúncio(s)</Text>
				</LinearGradient>
			</ImageBackground>
		</TouchableOpacity>
	)
}
