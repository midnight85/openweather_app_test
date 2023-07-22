import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, SectionList, View} from 'react-native';
import moment from 'moment';
import {useTypedSelector} from '../redux/hooks';
import {ForecastListItem} from '../types/forecast';

interface ISectionList {
  title: string;
  data: ForecastListItem[];
}

function ForecastSectionList() {
  const {forecast} = useTypedSelector(store => store.forecast);
  const [sectionListData, setSectionListData] = useState<ISectionList[]>([]);

  useEffect(() => {
    let sectionList: ISectionList[] = [];
    for (const date in forecast) {
      if (forecast.hasOwnProperty(date)) {
        const section = {
          title: date,
          data: forecast[date],
        };
        sectionList.push(section);
      }
    }
    setSectionListData(sectionList);
  }, [forecast]);

  return (
    <SectionList
      style={{flex: 1}}
      stickySectionHeadersEnabled={true}
      sections={sectionListData}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => (
        <View style={styles.item}>
          <Text style={styles.title}>
            {item.dt_txt.split(' ')[1].slice(0, 5)}
          </Text>
          <View style={styles.item}>
            <Text style={styles.text}>{item.weather[0].main}</Text>
            <Text style={styles.text}>{Math.round(item.main.temp)}°</Text>
          </View>
        </View>
      )}
      renderSectionHeader={({section: {title}}) => (
        <Text style={styles.header}>
          {moment(title).format('dddd MMMM DD')}
        </Text>
      )}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 4,
    marginVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },
  header: {
    fontFamily: 'SchibstedGrotesk-Bold',
    color: 'black',
    fontSize: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontFamily: 'SchibstedGrotesk-Medium',
    color: 'black',
  },
  text: {
    fontSize: 16,
    fontFamily: 'SchibstedGrotesk-Regular',
    color: 'black',
  },
});

export default ForecastSectionList;
