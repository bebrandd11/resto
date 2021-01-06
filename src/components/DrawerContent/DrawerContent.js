import React, { useState } from 'react'
import { StyleSheet, Switch, Text, View } from 'react-native'
import { Avatar, Caption, Drawer, Paragraph, Title, TouchableRipple, useTheme } from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer'

//Icon Path
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const DrawerContent = (props) => {
    const paperTheme = useTheme();
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    }
    return (
        <View style={styles.container}>
            <DrawerContentScrollView {...props}>
                <View style={styles.DrawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection: 'row',marginTop: 15}}>
                            <Avatar.Image source={require('../../../assets/banners/6.jpg')} size={50} />
                            <View style={{marginLeft: 15}}>
                                <Title style={styles.title}>John Doe</Title>
                                <Caption style={styles.caption}>@itzjohn</Caption>
                            </View>
                        </View>

                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                                <Caption style={styles.caption}>Following</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
                                <Caption style={styles.caption}>Followers</Caption>
                            </View>
                        </View>
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={() => (
                                <MaterialCommunityIcons name="home-outline" size={25} />
                            )}
                                label="Home"
                                onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem
                            icon={() => (
                                <MaterialCommunityIcons name="map-marker-outline" size={25} />
                            )}
                                label="Explore"
                                onPress={() => {props.navigation.navigate('Explore')}}
                        />
                        <DrawerItem
                            icon={() => (
                                <MaterialCommunityIcons name="account-outline" size={25} />
                            )}
                                label="Profile"
                                onPress={() => {props.navigation.navigate('Profile')}}
                        />
                        <DrawerItem
                            icon={() => (
                                <Ionicons name="ios-list-circle-outline" size={25} />
                            )}
                                label="List"
                                onPress={() => {props.navigation.navigate('List')}}
                        />
                    </Drawer.Section>
                    <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={() => {toggleTheme()}}>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={!isDarkTheme} />
                                    {/* <Switch value={paperTheme.dark} /> */}
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                icon={() => (
                    <MaterialCommunityIcons name="exit-to-app" size={25} />
                )}
                    label="Sign Out"
                    onPress={() => {}}
                />
            </Drawer.Section>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    drawerContent: {
        flex: 1,
      },
      userInfoSection: {
        paddingLeft: 20,
      },
      title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
      },
      caption: {
        fontSize: 14,
        lineHeight: 14,
      },
      row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
      },
      section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
      },
      paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
      },
      drawerSection: {
        marginTop: 15,
      },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
      },
})

export default DrawerContent;