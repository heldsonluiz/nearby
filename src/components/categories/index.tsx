import { Category } from "@/components/category";
import { FlatList } from "react-native";
import { s } from "./styles";

export type CategoriesProps = {
  id: string;
  name: string;
}[];

type Props = {
  data: CategoriesProps;
  onSelect: (id: string) => void;
  selected: string;
};

export function Categories({ data, selected, onSelect }: Props) {
  return (
    <FlatList
      contentContainerStyle={s.content}
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Category
          name={item.name}
          iconId={item.id}
          onPress={() => onSelect(item.id)}
          isSelected={item.id === selected}
        />
      )}
      showsHorizontalScrollIndicator={false}
      style={s.container}
    ></FlatList>
  );
}
