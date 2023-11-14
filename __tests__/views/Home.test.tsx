import React from "react"
import { fireEvent, render, screen } from "@testing-library/react-native"
import "@testing-library/react-native/extend-expect"
import { NavigationContainer } from "@react-navigation/native"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { MainStackNavigator } from "@src/presentation/navigation/MainStackNavigation"

export const safeAreaMetric = {
  frame: { x: 0, y: 0, width: 0, height: 0 },
  insets: { top: 0, left: 0, right: 0, bottom: 0 },
}

describe("HomeScreen", () => {
  test("should render the HomeScreen component without crashing", async () => {
    const { debug } = render(
      <SafeAreaProvider initialMetrics={safeAreaMetric}>
        <NavigationContainer>
          <MainStackNavigator />
        </NavigationContainer>
      </SafeAreaProvider>,
    )

    debug()

    const searchInput = screen.getAllByPlaceholderText("Search...")
    expect(searchInput).toBeTruthy()
    const addButton = screen.getByText("Agregar")
    fireEvent.press(addButton)

    const usernameOutput = await screen.findByTestId("createscreen")
    expect(usernameOutput).toBeTruthy()
  })
})
