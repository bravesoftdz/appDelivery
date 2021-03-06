import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import headerImage from "~/images/header-background.png";
import styles, { Background } from "./styles";

import { withNavigation } from "react-navigation";

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  };

  handleBack = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };

  handleGoCart = () => {
    const { navigation } = this.props;
    navigation.navigate("Cart");
  };

  render() {
    const { title, leftComponent, rightComponent } = this.props;
    return (
      <View style={styles.container}>
        <Background source={headerImage} />

        <View style={styles.left}>
          {leftComponent ? (
            leftComponent
          ) : (
            <TouchableOpacity
              hitSlop={{ top: 5, left: 5, right: 5, bottom: 5 }}
              onPress={this.handleBack}
            >
              <Icon name="chevron-left" size={16} style={styles.icon} />
            </TouchableOpacity>
          )}
        </View>

        <Text style={styles.title}>{title}</Text>
        {rightComponent ? (
          <Text style={styles.title}>{rightComponent}</Text>
        ) : (
          <TouchableOpacity onPress={() => this.handleGoCart()}>
            <Icon name="shopping-bag" size={16} style={styles.icon} />
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

export default withNavigation(Header);
