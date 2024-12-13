import { colors, fontFamily } from "@/styles/theme"
import { StyleSheet } from "react-native"

export const s = StyleSheet.create({
  logo: {
    height: 48,
    marginBottom: 28,
    marginTop: 24,
    width: 48,
  },
  title: {
    color: colors.gray[600],
    fontFamily: fontFamily.bold,
    fontSize: 24,
  },
  subtitle: {
    color: colors.gray[500],
    fontFamily: fontFamily.regular,
    fontSize: 16,
    marginTop: 12
  }
})