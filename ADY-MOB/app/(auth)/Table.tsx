import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, useColorScheme } from 'react-native';
import { useTranslation } from 'react-i18next';

const trains = [
  {
    number: '#6602',
    schedule: {
      baku: '06:20',
      novxani: '06:33',
      goredil: '06:38',
      pirsagi: '06:45',
      memmedli: '06:49',
      zabrat: '06:52',
      sabuncu: '06:57',
      bakixanov: '07:00',
      koroglu: '07:07',
      sumqayit: '07:35'
    }
  },
  {
    number: '#6604',
    schedule: {
      baku: '06:45',
      novxani: '06:54',
      goredil: '06:58',
      pirsagi: '07:03',
      memmedli: '07:10',
      zabrat: '07:17',
      sabuncu: '07:25',
      bakixanov: '07:32',
      koroglu: '07:40',
      sumqayit: '07:45'
    }
  },
  {
    number: '#6606',
    schedule: {
      baku: '07:00',
      novxani: '07:09',
      goredil: '07:13',
      pirsagi: '07:18',
      memmedli: '07:25',
      zabrat: '07:29',
      sabuncu: '07:32',
      bakixanov: '07:47',
      koroglu: '07:55',
      sumqayit: '08:00'
    }
  },
  {
    number: '#6608',
    schedule: {
      baku: '07:15',
      novxani: '07:24',
      goredil: '07:28',
      pirsagi: '07:33',
      memmedli: '07:40',
      zabrat: '07:44',
      sabuncu: '07:47',
      bakixanov: '07:55',
      koroglu: '08:02',
      sumqayit: '08:05'
    }
  },
  {
    number: '#6610',
    schedule: {
      baku: '07:30',
      novxani: '07:49',
      goredil: '07:50',
      pirsagi: '08:08',
      memmedli: '08:15',
      zabrat: '08:19',
      sabuncu: '08:22',
      bakixanov: '08:27',
      koroglu: '08:34',
      sumqayit: '08:37'
    }
  },
  {
    number: '#6612',
    schedule: {
      baku: '07:50',
      novxani: '07:59',
      goredil: '08:03',
      pirsagi: '08:08',
      memmedli: '08:15',
      zabrat: '08:19',
      sabuncu: '08:22',
      bakixanov: '08:30',
      koroglu: '08:37',
      sumqayit: '08:40'
    }
  },
  {
    number: '#6614',
    schedule: {
      baku: '08:00',
      novxani: '08:05',
      goredil: '08:10',
      pirsagi: '08:15',
      memmedli: '08:40',
      zabrat: '08:45',
      sabuncu: '08:50',
      bakixanov: '08:55',
      koroglu: '09:05',
      sumqayit: '09:10'
    }
  },
  {
    number: '#6616',
    schedule: {
      baku: '09:15',
      novxani: '09:24',
      goredil: '09:28',
      pirsagi: '09:39',
      memmedli: '09:44',
      zabrat: '09:49',
      sabuncu: '09:55',
      bakixanov: '09:59',
      koroglu: '10:05',
      sumqayit: '10:10'
    }
  },
  {
    number: '#6618',
    schedule: {
      baku: '10:00',
      novxani: '10:09',
      goredil: '10:18',
      pirsagi: '10:25',
      memmedli: '10:29',
      zabrat: '10:37',
      sabuncu: '10:44',
      bakixanov: '10:47',
      koroglu: '10:55',
      sumqayit: '11:00'
    }
  },
  {
    number: '#6620',
    schedule: {
      baku: '10:30',
      novxani: '10:39',
      goredil: '10:43',
      pirsagi: '10:50',
      memmedli: '10:55',
      zabrat: '11:00',
      sabuncu: '11:05',
      bakixanov: '11:12',
      koroglu: '11:20',
      sumqayit: '11:25'
    }
  },
];

const Table = () => {
  const { t } = useTranslation();
  const scheme = useColorScheme();
  const [selectedTrain, setSelectedTrain] = useState(trains[0]);

  return (
    <ScrollView style={[styles.container, scheme === 'dark' && styles.darkContainer]}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.trainSelector}>
        {trains.map((train) => (
          <TouchableOpacity
            key={train.number}
            style={[
              styles.trainButton,
              selectedTrain.number === train.number && styles.trainButtonActive,
              scheme === 'dark' && styles.darkTrainButton
            ]}
            onPress={() => setSelectedTrain(train)}
          >
            <Text
              style={[
                styles.trainButtonText,
                selectedTrain.number === train.number && styles.trainButtonTextActive,
                scheme === 'dark' && styles.darkTrainButtonText
              ]}
            >
              {train.number}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.scheduleContainer}>
        {Object.entries(selectedTrain.schedule).map(([station, time]) => (
          <View
            key={station}
            style={[styles.stationRow, scheme === 'dark' && styles.darkStationRow]}
          >
            <Text style={[styles.stationName, scheme === 'dark' && styles.darkStationName]}>
              {t(station)}
            </Text>
            <Text style={[styles.stationTime, scheme === 'dark' && styles.darkStationTime]}>
              {time}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  darkContainer: {
    backgroundColor: '#121217',
  },
  trainSelector: {
    marginBottom: 16,
  },
  trainButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 12,
    backgroundColor: '#eee',
    marginRight: 8,
  },
  trainButtonActive: {
    backgroundColor: '#1d5c87',
  },
  trainButtonText: {
    color: '#333',
    fontWeight: '600',
  },
  trainButtonTextActive: {
    color: '#fff',
  },
  darkTrainButton: {
    backgroundColor: '#2a2a34',
  },
  darkTrainButtonText: {
    color: '#ccc',
  },
  scheduleContainer: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  stationRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    backgroundColor: '#eee',
    marginBottom: 4,
    borderRadius: 8,
  },
  darkStationRow: {
    backgroundColor: '#202024',
  },
  stationName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
  },
  darkStationName: {
    color: '#e6e6e9',
  },
  stationTime: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1d5c87',
  },
  darkStationTime: {
    color: '#5aa0ff',
  },
});

export default Table;
