import "react-native"
import React from "react"
import "@testing-library/react-native/extend-expect"

import { NavigationContainer } from "@react-navigation/native"
import { render, screen } from "@testing-library/react-native"

import { MainStackNavigator } from "@src/presentation/navigation/MainStackNavigation"

describe("Testing react navigation initialization", () => {
  test("find text on render app", async () => {
    const component = (
      <NavigationContainer>
        <MainStackNavigator />
      </NavigationContainer>
    )

    render(component)

    expect(screen.getByText("BANCO PICHINCHA")).toBeTruthy()
  })
})
