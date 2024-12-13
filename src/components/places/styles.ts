import { colors, fontFamily } from "@/styles/theme"
import { StyleSheet } from "react-native"

export const s = StyleSheet.create({
  container: {
    backgroundColor: colors.gray[100],
  },
  content: {
    gap: 12,
    padding: 24,
    paddingBottom: 100,
  },
  indicator: {
    backgroundColor: colors.gray[300],
    height: 4,
    width: 80,
  },
  title: {
    color: colors.gray[600],
    fontFamily: fontFamily.regular,
    fontSize: 16,
    marginBottom: 16
  }
})