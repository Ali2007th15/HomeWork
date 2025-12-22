import React from "react";
import { ScrollView, View } from "react-native";
import Hero from "../(auth)/Hero";
import Table from "../(auth)/Table";
import Offer from "../(auth)/Offer";
import Railway from "../(auth)/Railway";

export default function Home() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ flex: 1
      }}
    >
      <Hero />
      <Table />
      <Offer />
      <Railway />
    </ScrollView>
  );
}