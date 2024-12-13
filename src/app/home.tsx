import { Categories, CategoriesProps } from "@/components/categories";
import { PlaceProps } from "@/components/place";
import { Places } from "@/components/places";
import { api } from "@/services/api";
import { colors, fontFamily } from "@/styles/theme";
import * as Location from "expo-location";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, Text, View } from "react-native";
import MapView, { Callout, Marker } from "react-native-maps";

type MarketsProps = PlaceProps & {
  latitude: number;
  longitude: number;
};

const DEFAULT_ZOOM = 0.01;
const USE_USER_LOCATION = process.env.EXPO_PUBLIC_USER_LOCATION === "true";

export default function Home() {
  const [categories, setCategories] = useState<CategoriesProps>([]);
  const [category, setCategory] = useState("");
  const [markets, setMarkets] = useState<MarketsProps[]>([]);
  const [region, setRegion] = useState({
    latitude: -23.561187293883442,
    longitude: -46.656451388116494,
    latitudeDelta: DEFAULT_ZOOM,
    longitudeDelta: DEFAULT_ZOOM,
  });

  async function fetchCategories() {
    try {
      const { data } = await api.get("/categories");
      setCategories(data);
      setCategory(data[0].id);
    } catch (error) {
      Alert.alert("Categorias", "Não foi possível carregar as categorias");
    }
  }

  async function fetchMarkets() {
    try {
      if (!category) return;
      const { data } = await api.get(`/markets/category/${category}`);
      setMarkets(data);
    } catch (error) {
      console.log(error);
      Alert.alert("Locais", "Não foi possível carregar os locais");
    }
  }

  async function getCurrentLocation() {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync();

      if (granted) {
        let position = await Location.getCurrentPositionAsync({});
        setRegion({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    // Set the user's current location on the map
    if (USE_USER_LOCATION) getCurrentLocation();

    fetchCategories();
  }, []);

  useEffect(() => {
    fetchMarkets();
  }, [category]);

  return (
    <View style={{ flex: 1 }}>
      <Categories
        data={categories}
        onSelect={setCategory}
        selected={category}
      />

      <MapView
        style={{ flex: 1 }}
        region={region}
        initialRegion={region}
        showsUserLocation={true}
      >
        <Marker
          identifier="current"
          coordinate={{
            latitude: region.latitude,
            longitude: region.longitude,
          }}
          image={require("@/assets/location.png")}
        />

        {markets.map((market) => {
          return (
            <Marker
              key={market.id}
              identifier={market.id}
              coordinate={{
                latitude: market.latitude,
                longitude: market.longitude,
              }}
              image={require("@/assets/pin.png")}
            >
              <Callout onPress={() => router.navigate(`/market/${market.id}`)}>
                <View>
                  <Text
                    style={{
                      fontSize: 14,
                      color: colors.gray[600],
                      fontFamily: fontFamily.medium,
                    }}
                  >
                    {market.name}
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: colors.gray[600],
                      fontFamily: fontFamily.regular,
                    }}
                  >
                    {market.address}
                  </Text>
                </View>
              </Callout>
            </Marker>
          );
        })}
      </MapView>

      <Places data={markets} />
    </View>
  );
}
