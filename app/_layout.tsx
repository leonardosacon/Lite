import { SafeAreaView } from "react-native";
import { Text } from "react-native";
import {
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    useFonts
} from "@expo-google-fonts/inter";

import { LoadingView } from '@/components/loading';

export function Layout() {

    const [fontsLoaded] = useFonts({
        Inter_400Regular,
        Inter_500Medium,
        Inter_600SemiBold,
        Inter_700Bold,
    })

    if (!fontsLoaded) {
        return <LoadingView />
    }

    return (
        <SafeAreaView className="flex-1 pt-8">
            <Text className="text-2xl text-heading">React Native</Text>
        </SafeAreaView>
    )
}