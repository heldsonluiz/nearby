import { Info } from "@/components/market/info";
import { IconMapPin, IconPhone, IconTicket } from "@tabler/icons-react-native";
import { Text, View } from "react-native";
import { s } from "./styles";

export type DetailsProps = {
  address: string;
  coupons: number;
  description: string;
  name: string;
  phone: string;
  rules: {
    id: string;
    description: string;
  }[];
};

type Props = {
  data: DetailsProps;
};

export function Details({ data }: Props) {
  return (
    <View style={s.container}>
      <Text style={s.name}>{data.name}</Text>
      <Text style={s.description}>{data.description}</Text>

      <View style={s.group}>
        <Text style={s.title}>Informações</Text>

        <Info
          icon={IconTicket}
          description={`${data.coupons} cupons disponíveis`}
        />
        <Info icon={IconMapPin} description={data.address} />
        <Info icon={IconPhone} description={data.phone} />
      </View>

      <View style={s.group}>
        <Text style={s.title}>Regulamento</Text>
        {data.rules.map((item) => {
          return (
            <Text key={item.id} style={s.rule}>
              {`\u2022 ${item.description}`}
            </Text>
          );
        })}
      </View>
    </View>
  );
}
