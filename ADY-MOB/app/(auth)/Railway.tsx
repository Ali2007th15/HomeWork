// import React, { useState } from "react";
// import { 
//   View, 
//   Text, 
//   TextInput, 
//   TouchableOpacity, 
//   StyleSheet, 
//   ScrollView, 
//   KeyboardAvoidingView, 
//   Platform, 
//   ImageBackground,
//   Dimensions
// } from "react-native";
// import { useTranslation } from "react-i18next";

// const trainImg: any = require("../../assets/tr.png");

// const { width, height } = Dimensions.get("window");

// const RailwaySection = () => {
//   const { t } = useTranslation();
//   const [email, setEmail] = useState("");
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = () => {
//     setSubmitted(true);
//     setTimeout(() => setSubmitted(false), 4000);
//     setEmail("");
//   };

//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === "ios" ? "padding" : undefined}
//       style={{ flex: 1 }}
//     >
//       <ImageBackground
//         source={trainImg}
//         style={{ width: "102%", height: "80%", justifyContent: "center" }}
//         resizeMode="cover"
//       >
//         <View style={styles.container}>
//           <View style={styles.content}>
//             <TouchableOpacity style={styles.consultBtn}>
//               <Text style={styles.consultBtnText}>{t("consultation")}</Text>
//             </TouchableOpacity>

//             <Text style={styles.title}>{t("title")}</Text>

//             <View style={styles.list}>
//               <Text style={styles.listItem}>✔ {t("point1")}</Text>
//               <Text style={styles.listItem}>✔ {t("point2")}</Text>
//               <Text style={styles.listItem}>✔ {t("point3")}</Text>
//               <Text style={styles.listItem}>✔ {t("point4")}</Text>
//             </View>

//             <View style={styles.form}>
//               <TextInput
//                 style={styles.input}
//                 placeholder={t("placeholder")}
//                 value={email}
//                 onChangeText={setEmail}
//                 keyboardType="email-address"
//                 autoCapitalize="none"
//               />
//               <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
//                 <Text style={styles.submitBtnText}>{t("submit")}</Text>
//               </TouchableOpacity>
//             </View>

//             {submitted && <Text style={styles.success}>{t("successMessage")}</Text>}
//           </View>
//         </View>
//       </ImageBackground>
//     </KeyboardAvoidingView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     paddingVertical: 40,
//     paddingHorizontal: 20,
//     alignItems: "center",
//   },
//   content: {
//     width: "100%",
//     alignItems: "center",
//   },
//   consultBtn: {
//     backgroundColor: "#dce5f8",
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 12,
//     marginBottom: 20,
//   },
//   consultBtnText: {
//     color: "#1a3c91",
//     fontWeight: "600",
//     fontSize: 16,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "700",
//     color: "#1a2852",
//     textAlign: "center",
//     marginBottom: 20,
//   },
//   list: {
//     width: "100%",
//     marginBottom: 20,
//   },
//   listItem: {
//     fontSize: 16,
//     color: "#1a2852",
//     marginBottom: 10,
//     lineHeight: 24,
//   },
//   form: {
//     flexDirection: "row",
//     width: "100%",
//     marginBottom: 20,
//   },
//   input: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: "#b6c2d9",
//     borderRadius: 12,
//     paddingHorizontal: 15,
//     paddingVertical: 10,
//     marginRight: 10,
//     fontSize: 16,
//     backgroundColor: "#fff",
//   },
//   submitBtn: {
//     backgroundColor: "#1a3c91",
//     paddingHorizontal: 15,
//     borderRadius: 12,
//     justifyContent: "center",
//   },
//   submitBtnText: {
//     color: "#fff",
//     fontWeight: "600",
//     fontSize: 16,
//   },
//   success: {
//     color: "#2d8b4b",
//     fontSize: 14,
//     marginTop: 10,
//     textAlign: "center",
//   },
// });

// export default RailwaySection;
