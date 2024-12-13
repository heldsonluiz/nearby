import { colors, fontFamily } from "@/styles/theme";
import { StyleSheet } from "react-native";

export const s =StyleSheet.create({
  container: {
    backgroundColor: colors.gray[100],
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    padding: 32,
    paddingBottom:0,
  },
  name: {
    color: colors.gray[600],
    fontFamily: fontFamily.bold,
    fontSize: 20,
  },
  description: {
    color: colors.gray[500],
    fontFamily: fontFamily.regular,
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 32,
    marginTop: 12,
  },
  group: {
    borderBottomColor: colors.gray[200],
    borderBottomWidth: 1,
    marginBottom: 16,
    paddingBottom: 16,
    width: "100%",
  },
  title: {
    color: colors.gray[500],
    fontFamily: fontFamily.medium,
    fontSize: 14,
    marginBottom: 12
  },
  rule:{}
})