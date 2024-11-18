import { StatusBar } from "expo-status-bar";
import { Text, TouchableOpacity, View } from "react-native";
import { FontAwesome, Feather, MaterialIcons } from "@expo/vector-icons";

import "../global.css";

export default function Home() {
  return (
    <View className="flex-1">
      {/* Header */}
      <View className="bg-purple-700 p-6 pb-8 rounded-b-3xl mb-6">
        <Text className="text-white text-2xl font-bold mt-4">Olá, Gabriel</Text>
        <Text className="text-white text-sm mt-1">
          alimento • Ativo | Atualizado em 02/11/24
        </Text>
      </View>

      {/* Main Content */}

      <View className="flex-1 bg-white px-4">
        <View className="flex-row justify-between items-center bg-gray-100 p-4 rounded-lg mb-6">
          <View className="flex-row items-center space-x-2">
            <FontAwesome name="shopping-cart" size={24} color="#6B21A8" />
            <Text className="text-gray-800 font-bold text-base">
              Alimentação
            </Text>
          </View>
          <View className="flex-row items-center space-x-2">
            <Text className="text-gray-800 font-bold text-base">R$ 24,61</Text>
            <Feather name="chevron-right" size={24} color="#6B21A8" />
          </View>
        </View>

        <View className="bg-red-500 flex-row items-center p-4 rounded-lg mb-6">
          <MaterialIcons name="delivery-dining" size={48} color="white" />
          <View className="ml-4">
            <Text className="text-white font-bold text-lg">
              Ticket + Rappi juntos!
            </Text>
            <TouchableOpacity className="bg-white px-4 py-2 rounded-lg mt-2">
              <Text className="text-red-500 font-bold text-sm">
                Ative a localização
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="flex-row justify-between">
          <TouchableOpacity className="items-center">
            <View className="bg-gray-100 p-4 rounded-lg">
              <FontAwesome name="credit-card" size={24} color="#374151" />
            </View>
            <Text className="text-gray-800 text-sm mt-2 text-center">
              Adicionar cartão
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className="items-center">
            <View className="bg-gray-100 p-4 rounded-lg">
              <Feather name="lock" size={24} color="#374151" />
            </View>
            <Text className="text-gray-800 text-sm mt-2 text-center">
              Trocar senha
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className="items-center">
            <View className="bg-gray-100 p-4 rounded-lg">
              <MaterialIcons name="place" size={24} color="#374151" />
            </View>
            <Text className="text-gray-800 text-sm mt-2 text-center">
              Onde aceita
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className="items-center">
            <View className="bg-gray-100 p-4 rounded-lg">
              <Feather name="more-horizontal" size={24} color="#374151" />
            </View>
            <Text className="text-gray-800 text-sm mt-2 text-center">Mais</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="absolute bottom-0 left-0 right-0 flex-row justify-around items-center bg-white py-4 border-t border-gray-300">
        <TouchableOpacity className="items-center">
          <FontAwesome name="money" size={24} color="#374151" />
          <Text className="text-gray-800 text-xs mt-1">Carteira</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <FontAwesome name="heart" size={24} color="#374151" />
          <Text className="text-gray-800 text-xs mt-1">Vantagens</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
