import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { VictoryPie, VictoryAnimation, VictoryLabel } from "victory-native";
import Svg from "react-native-svg";
import styles from './ProgressCharts.module'

const ProgressChart = ({ color, text, value }) => {
  const [state, setState] = useState({
    percent: 25,
    data: getData(25)
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      let percent = state.percent + Math.random() * 25;
      percent = percent > 100 ? 0 : percent;
      setState({
        percent,
        data: getData(percent)
      });
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, [state.percent]);

  return (
    <View style={{ width: 100, height: 100 }}>
      <Svg width="100%" height="100%" viewBox="0 0 400 400">
        <VictoryPie
          standalone={false}
          animate={{ duration: 1000 }}
          width={400} height={400}
          data={state.data}
          innerRadius={120}
          cornerRadius={25}
          labels={() => null}
          style={{
            data: { fill: ({ datum }) => {
              return datum.x === 1 ? color : "transparent";
            }}
          }}
        />
        <VictoryAnimation duration={1000} data={state}>
          {(newProps) => {
            return (
              <VictoryLabel
                textAnchor="middle" verticalAnchor="middle"
                x={200} y={200}
                text={`${Math.round(newProps.percent)}%`}
                style={{ fontSize: 45 }}
              />
            );
          }}
        </VictoryAnimation>
      </Svg>
      <Text style={{ textAlign: 'center', marginTop: 5 }}>{text}</Text>
    </View>
  );
};

function getData(percent) {
  return [{ x: 1, y: percent }, { x: 2, y: 100 - percent }];
}

export default ProgressChart;
