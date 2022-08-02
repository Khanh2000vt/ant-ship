/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect, memo, useMemo} from 'react';
import {FlatList, ActivityIndicator, View, StyleSheet} from 'react-native';
import {FlatListProps} from './base-flat-list-model';
import ListEmptyItem from './components/list-empty-item';

function BaseFlatList({
  data,
  url,
  onPress,
  ItemViewRender,
  onEndReached,
  onEndReachedThreshold,
  onRefresh = undefined,
  currentPage,
  columns = 1,
  heightItem,
  onScrollEndDrag,
}: FlatListProps) {
  const [isLoading, setLoading] = useState(true);
  const [isFetching, setFetching] = useState(false);
  const [dataList, setDataList] = useState([]);
  console.log('&&&&&&&&&&&&&&&&&& flat list &&&&&&&&&&&&&&&&&&&&');

  async function handleRefresh() {
    /* Will reassign dataList value as empty.
       Await for onRefresh function to complete. */
    setFetching(true);
    try {
      if (onRefresh) {
        // setDataList([]);
        await onRefresh();
      }
    } catch (error) {
      console.error(error);
    }
    setFetching(false);
  }

  // const getAPI = useMemo(async () => {
  //   try {
  //     const response = await fetch(`${url}${currentPage}`);
  //     const json = await response.json();
  //     if (!dataList.length) {
  //       setDataList([json as never]);
  //     } else {
  //       setDataList([...dataList, json as never]);
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // }, [currentPage]);
  async function getAPI() {
    try {
      const response = await fetch(`${url}${currentPage}`);
      const json = await response.json();
      if (!dataList.length) {
        setDataList([json as never]);
      } else {
        setDataList([...dataList, json as never]);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  const getData = useMemo(() => {
    setDataList(data);
    setLoading(false);
  }, [data]);

  useEffect(() => {
    try {
      if (url) {
        getAPI();
      } else if (data) {
        getData;
      }
    } catch (error) {
      console.error(error);
    }
  }, [currentPage, data]);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={dataList}
          key={columns}
          // contentContainerStyle={{paddingBottom: 20}}
          renderItem={({item}) => (
            <ItemViewRender
              item={item}
              onPress={onPress}
              heightItem={heightItem}
            />
          )}
          keyExtractor={item => item.id}
          onEndReached={onEndReached}
          onEndReachedThreshold={onEndReachedThreshold}
          onRefresh={onRefresh ? handleRefresh : undefined}
          refreshing={isFetching}
          horizontal={false}
          numColumns={columns}
          ListEmptyComponent={ListEmptyItem}
          onScrollEndDrag={onScrollEndDrag}
          // initialNumToRender={6}
          // columnWrapperStyle={styles.flatList}
          // ref={ref}
        />
      )}
    </View>
  );
}

export default memo(BaseFlatList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatList: {
    justifyContent: 'space-around',
  },
});
