import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  titleView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 35,
  },
  title: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#308FD2",
  },
  logo: {
    flex: 1,
    height: 290,
    width: 365,
    alignSelf: "center",
    marginLeft: 0,
  },
  emailInput: {
    flexDirection: "row",
  },
  input: {
    height: 50,
    borderRadius: 25,
    overflow: "hidden",
    backgroundColor: "#B3DAF6",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 16,
    flex: 1,
    fontSize: 22,
  },
  button: {
    backgroundColor: "#0D79C6",
    marginLeft: 30,
    marginRight: 30,
    marginTop: 30,
    height: 48,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonTitle: {
    color: "white",
    fontSize: 23,
    fontWeight: "bold",
  },
  icon: {
    position: "absolute",
    right: 55,
    top: 19,
  },
});
