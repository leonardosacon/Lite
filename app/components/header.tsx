import { View, Image, Text } from "react-native";

export function Header() {
    return (
        <View className="flex-row items-center border-b border-slate-700 pb-5 mx-5">
            <View className="flex-1">
                <Image source={require("@/assets/imagem.png")} className="w-32 h-6"></Image>
                <Text className="text-white text-xl font-heading"></Text>
            </View>
        </View>
    )
}