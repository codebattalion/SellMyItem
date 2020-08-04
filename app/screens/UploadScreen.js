import React from 'react';
import { StyleSheet, View, Modal } from 'react-native';
import LottieView from 'lottie-react-native';

import * as Progress from 'react-native-progress';
import colors from '../config/colors';

const UploadScreen = ({ onDone, progress = 0, visible = false }) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <Progress.Bar color={colors.primary} progress={progress} />
        ) : (
          <LottieView
            loop={false}
            style={styles.animation}
            onAnimationFinish={onDone}
            source={require('../assets/ani/done.json')}
            autoPlay
          />
        )}
      </View>
    </Modal>
  );
};

export default UploadScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  animation: {
    width: 320,
  },
});
