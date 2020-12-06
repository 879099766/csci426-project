import React, { Component } from "react";
import { StyleSheet, ScrollView, TouchableOpacity, Text } from "react-native";

export default function ViewScholarTbl(props) {
  return (
    <ScrollView horizontal={false} style={styles.container}>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('ViewScholarDetail')}
        style={styles.button}
      >
        <Text style={styles.item_title}>
          Scholarship title here...........................................
        </Text>
        <Text style={styles.item_subTitle}>Availability: ##</Text>
        <Text style={styles.item_deadline}>Deadline: mm/dd/yyyy</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E6E6E6",
    width: 360,
    height: 740
  },
  button: {
    height: 80,
    backgroundColor: "rgba(255,255,255,1)"
  },
  item_title: {
    color: "#121212",
    fontSize: 16,
    marginTop: 16,
    marginLeft: 13
  },
  item_subTitle: {
    color: "#121212",
    fontSize: 12,
    marginTop: 24,
    marginLeft: 13
  },
  item_deadline: {
    color: "#121212",
    fontSize: 12,
    marginTop: 18,
    marginLeft: 230
  }
});

