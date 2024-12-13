import { colors, fontFamily } from "@/styles/theme"
import { StyleSheet } from "react-native"

export const s = StyleSheet.create({
  container: {
    alignItems: "center",
    borderColor: colors.gray[200],
    borderRadius: 12,
    borderWidth: 1,
    flexDirection: "row",
    gap: 16,
    height: 120,
    padding: 8,
    width: "100%",
  },
  image: {
    backgroundColor: colors.gray[200],
    borderRadius: 8,
    height: 104,
    width: 116,
  },
  content: {
    flex: 1,
    gap: 4
  },
  name: {
    color: colors.gray[600],
    fontFamily: fontFamily.medium,
    fontSize: 14,
  },
  description: {
    color: colors.gray[500],
    fontFamily: fontFamily.regular,
    fontSize: 12,
  },
  footer: {
    flexDirection: "row",
    gap: 7,
    marginTop: 10
  },
  tickets: {
    color: colors.gray[400],
    fontFamily: fontFamily.regular,
    fontSize: 12,
  }
})