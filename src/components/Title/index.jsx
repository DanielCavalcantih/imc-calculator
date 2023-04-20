import { View, Text } from 'react-native';
import styles from './style';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

export default function Title() {
  const [fontsLoaded] = useFonts({
    cookie: require('../../../assets/fonts/Cookie-Regular.ttf'),
  });

  useEffect(() => {
    const prepare = async () => {
      await SplashScreen.preventAutoHideAsync();
    };
    prepare();
  }, [])

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <View style={styles.boxTitle} onLayout={onLayoutRootView}>
      <Text style={{ fontFamily: 'cookie', fontSize: 45, color: '#ff0043' }}>
        ReciHealth
      </Text>
    </View>
  );
}