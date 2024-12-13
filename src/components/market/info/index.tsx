import { colors } from "@/styles/theme";
import { IconProps } from "@tabler/icons-react-native";
import { Text, View } from "react-native";
import { s } from "./styles";

type InfoProps = {
  description: string;
  icon: React.ComponentType<IconProps>;
};
export function Info({ icon: Icon, description }: InfoProps) {
  return (
    <View style={s.container}>
      <Icon size={16} color={colors.gray[400]} />
      <Text style={s.text}>{description}</Text>
    </View>
  );
}
