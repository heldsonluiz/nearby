import { colors, fontFamily } from "@/styles/theme"
import { StyleSheet } from "react-native"

export const s = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 16,
    width: "100%",
  },
  details: {
    flex: 1,
  },
  title: {
    color: colors.gray[600],
    fontFamily: fontFamily.semiBold,
    fontSize: 16,
  },
  description: {
    color: colors.gray[500],
    fontFamily: fontFamily.regular,
    fontSize: 14,
    marginTop: 4,
  }
})