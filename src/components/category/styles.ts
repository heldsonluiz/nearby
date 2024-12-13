import { colors, fontFamily } from "@/styles/theme"
import { StyleSheet } from "react-native"

export const s = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.gray[100],
    borderColor: colors.gray[300],
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: "row",
    gap: 10,
    height: 36,
    justifyContent: "center",
    paddingHorizontal: 12,
  },
  name: {
    color: colors.gray[500],
    fontFamily: fontFamily.regular,
    fontSize: 14,
  },
  containerSelected: {
    backgroundColor: colors.green.base,
    borderColor: colors.green.base,
  },
  nameSelected: {
    color: colors.gray[100],
  },
})