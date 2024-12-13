import { colors, fontFamily } from "@/styles/theme";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
  },
  title: {
    color: colors.gray[500],
    fontFamily:fontFamily.medium,
    fontSize: 14,
    marginBottom: 12,
  },
  content: {
    alignItems: "center",
    backgroundColor: colors.green.soft,
    borderRadius: 8,
    flexDirection: "row",
    gap: 10,
    paddingHorizontal: 8,
    paddingVertical: 10,
  },
  code: {
    color: colors.gray[600],
    fontFamily: fontFamily.semiBold,
    fontSize: 16,
    textTransform: "uppercase",
  }
})