import { colors, fontFamily } from "@/styles/theme"
import { StyleSheet } from "react-native"

export const s = StyleSheet.create({
  container: {
    gap: 24,
    flex: 1
  },
  title: {
    color: colors.gray[500],
    fontFamily: fontFamily.regular,
    fontSize: 16,
  }
})