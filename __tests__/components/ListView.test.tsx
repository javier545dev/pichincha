import React from "react"
import { render, screen } from "@testing-library/react-native"
import "@testing-library/react-native/extend-expect"
import { NavigationContainer } from "@react-navigation/native"

import ListViewVertical from "@src/presentation/components/listView/ListViewVertical"

it("should render FlatList component with given data", () => {
  const data = [
    {
      id: "1",
      name: "Product 1",
      description: "Description 1",
      logo: "Logo 1",
      date_release: new Date(),
      date_revision: new Date(),
    },
    {
      id: "2",
      name: "Product 2",
      description: "Description 2",
      logo: "Logo 1",
      date_release: new Date(),
      date_revision: new Date(),
    },
  ]
  const getProducts = jest.fn()
  const refreshing = false

  render(
    <NavigationContainer>
      <ListViewVertical data={data} getProducts={getProducts} refreshing={refreshing} />{" "}
    </NavigationContainer>,
  )

  expect(screen.getByTestId("flatlist")).toBeTruthy()
  // expect(screen.getAllByTestId("product-component")).toHaveLength(2)
})
