import { Button, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../feature/Actions/GetPosts/getPost";
import { loginAction } from "../../feature/Actions/Login/login";
import { decrement, increment } from "../../feature/Reducer/CounterSlice";

const Home = () => {
  const { count } = useSelector((state) => state?.counter);
  const { data } = useSelector((state) => state?.Posts);
  const dispatch = useDispatch();
  const handleCount = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  const handleGetPosts = () => {
    dispatch(getPosts());
  };
  const handleLogin = () => {
    dispatch(
      loginAction({
        username: "kanishk1@yopmail.com",
        password: "Admin@123",
        ipAddress: "119.222.21.123",
        location: "Ambala",
        deviceInfo: "ios",
      })
    );
  };
  console.log(localStorage.getItem("accessToken"));
  return (
    <View>
      <Text style={styles.text}>{count}</Text>
      <View style={styles.container}>
        <Button title="Increment" onPress={handleCount} />
      </View>
      <View style={styles.container}>
        <Button
          title="Decrement"
          onPress={handleDecrement}
          style={styles.container}
        />
      </View>
      <View style={styles.container}>
        <Button
          title="Posts"
          onPress={handleGetPosts}
          style={styles.container}
        />
      </View>
      <View style={styles.container}>
        <Button title="Login" onPress={handleLogin} style={styles.container} />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    width: "40%",
    alignSelf: "center",
  },
  text: {
    alignSelf: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
});
