// @flow
import * as React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import {
  Video, Constants,
  GestureHandler,
  DangerZone,
} from 'expo';

import { type Video as VideoModel } from './videos';
import VideoContent from './VideoContent';
import PlayerControls from './PlayerControls';

const { Animated } = DangerZone;
const { Value, event } = Animated;

const { PanGestureHandler, State } = GestureHandler;

const { width, height } = Dimensions.get('window');
const { statusBarHeight } = Constants;
const shadow = {
  alignItems: 'center',
  elevation: 1,
  shadowColor: 'black',
  shadowOffset: { width: 0, height: 0 },
  shadowOpacity: 0.18,
  shadowRadius: 2,
};

type VideoModalProps = {
  video: VideoModel,
};

export default class VideoModal extends React.PureComponent<VideoModalProps> {
  translationY = new Value(0);

  velocityY = new Value(0);

  gestureState = new Value(State.UNDETERMINED);

  onGestureEvent: $Call<event>;

  constructor(props: VideoModalProps) {
    super(props);
    const {
      translationY, velocityY, gestureState: state,
    } = this;
    this.onGestureEvent = event([
      {
        nativeEvent: {
          translationY,
          velocityY,
          state,
        },
      }], {
      useNativeDrawer: true,
    });
  }

  render() {
    const { video, translationY: translateY } = this.props;
    const { onGestureEvent } = this;
    return (
      <>
        <View
          style={{
            height: statusBarHeight,
            backgroundColor: 'black',
          }}
        />
        <PanGestureHandler
          onHandlerStateChange={onGestureEvent}
          {...{ onGestureEvent }}
        >
          <Animated.View
            style={{
              transform: [{ translateY }],
              ...shadow,
            }}
          >
            <View style={{ backgroundColor: 'white', width }}>
              <View style={{ ...StyleSheet.absoluteFillObject }}>
                <PlayerControls title={video.title} onPress={() => true} />
              </View>
              <Video
                source={video.video}
                style={{ width, height: width / 1.78 }}
                resizeMode={Video.RESIZE_MODE_COVER}
                shouldPlay
              />
            </View>
            <View style={{ backgroundColor: 'white', width, height }}>
              <View>
                <VideoContent {...{ video }} />
              </View>
            </View>
          </Animated.View>
        </PanGestureHandler>

      </>
    );
  }
}
