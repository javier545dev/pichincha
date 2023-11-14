import React from "react"
import { FlatList, StyleSheet } from "react-native"

import ProductComponent from "@presentation/components/Product"
import Separator from "@presentation/components/Separator"
import RefreshController from "@presentation/components/refresh/RefreshController"
import { Product } from "@src/domain/entities/Product"
import { colors } from "@src/presentation/theme/Styles"

interface ListViewVerticalProps {
  data: Product[]
  getProducts: () => void
  refreshing: boolean
}

export default function ListViewVertical({ data, getProducts, refreshing }: ListViewVerticalProps) {
  return (
    <FlatList
      testID="flatlist"
      data={data}
      onRefresh={getProducts}
      refreshControl={<RefreshController refreshing={refreshing} onRefresh={getProducts} />}
      refreshing={refreshing}
      style={styles.flatList}
      contentContainerStyle={styles.contentContainerStyle}
      ItemSeparatorComponent={Separator}
      renderItem={({ item }) => (
        <ProductComponent
          id={item.id}
          name={item.name}
          description={item.description}
          logo={item.logo}
          date_release={item.date_release}
          date_revision={item.date_revision}
        />
      )}
      keyExtractor={item => item.id!.toString()}
    />
  )
}

const styles = StyleSheet.create({
  contentContainerStyle: {
    width: "100%",
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 5,
    paddingVertical: 5,
  },
  flatList: { width: "100%" },
})
