import React from 'react';
import { View, Text } from 'react-native';
import styles from './Header.styles';

const Footer = ({ footerText }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>{footerText}</Text>
        </View>
    );
};

export default Footer;