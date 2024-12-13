import { colors, fontFamily } from '@/styles/theme';
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.green.base,
    borderRadius: 10,
    flexDirection: "row",
    gap: 14,
    height: 56,
    justifyContent: "center",
    maxHeight: 56,
  },
  title: {
    color: colors.gray[100],
    fontFamily: fontFamily.semiBold,
    fontSize: 16
  }
})