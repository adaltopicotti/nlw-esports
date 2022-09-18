import React from 'react'

import { Modal, ModalProps, View, Text, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { CheckCircle } from 'phosphor-react-native'
import * as Clipboard from 'expo-clipboard'

import { styles } from './styles'
import { THEME } from '../../theme'
import { Heading } from '../Heading'

interface Props extends ModalProps {
	discord: string
	onClose: () => void
}

export function DuoMatch({ discord, onClose, ...rest }: Props) {
	return (
		<Modal transparent statusBarTranslucent {...rest} animationType='fade'>
			<View style={styles.container}>
				<View style={styles.content}>
					<TouchableOpacity style={styles.closeIcon} onPress={onClose}>
						<MaterialIcons name='close' size={20} color={THEME.COLORS.CAPTION_500} />
					</TouchableOpacity>
					<CheckCircle size={64} color={THEME.COLORS.SUCCESS} weight='bold' />
					<Heading
						title="Let's Play"
						subtitle='Agora é só começar a jogar!'
						style={{ alignItems: 'center', marginTop: 24 }}
					/>
					<Text style={styles.label}>Adicione no Discord</Text>
					<TouchableOpacity style={styles.discordButton}>
						<Text style={styles.discord}>{discord}</Text>
					</TouchableOpacity>
				</View>
			</View>
		</Modal>
	)
}