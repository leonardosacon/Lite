import { ActivityIndicator, View } from "react-native";
import colors from "tailwindcss/colors";

export function LoadingView() {
    return (
        <View className="flex-1 items-center justify-center bg-slate-900">
            <ActivityIndicator color={colors.white}></ActivityIndicator>
        </View>
    )
}