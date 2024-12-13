import { categoriesIcons } from "@/utils/categories-icons";
import { Pressable, PressableProps, Text } from "react-native";
import { colors } from "../../styles/colors";
import { s } from "./styles";

type CategoryProps = PressableProps & {
  iconId: string;
  isSelected?: boolean;
  name: string;
};

export function Category({
  name,
  iconId,
  isSelected = false,
  ...rest
}: CategoryProps) {
  const Icon = categoriesIcons[iconId];

  return (
    <Pressable
      style={[s.container, isSelected && s.containerSelected]}
      {...rest}
    >
      <Icon size={16} color={colors.gray[isSelected ? 100 : 400]} />
      <Text style={[s.name, isSelected && s.nameSelected]}>{name}</Text>
    </Pressable>
  );
}
