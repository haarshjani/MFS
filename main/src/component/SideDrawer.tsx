import React, { useState, useRef, ReactNode } from 'react';
import { View, Animated, TouchableWithoutFeedback, Dimensions } from 'react-native';
import { Appbar, Drawer } from 'react-native-paper';
import { useNavigate } from '../hooks/useCrossPlatform';


const SCREEN_HEIGHT = Dimensions.get('window').height;
const DRAWER_WIDTH = 240;

interface SideDrawerPropsTypes {
  children : ReactNode
}
const SideDrawer = ({children}:SideDrawerPropsTypes) => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const drawerAnim = useRef(new Animated.Value(-DRAWER_WIDTH)).current;
  const navigate = useNavigate()

  const toggleDrawer = () => {
    if (drawerVisible) {
      Animated.timing(drawerAnim, {
        toValue: -DRAWER_WIDTH,
        duration: 250,
        useNativeDriver: true,
      }).start(() => setDrawerVisible(false));
    } else {
      setDrawerVisible(true);
      Animated.timing(drawerAnim, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }).start();
    }
  };

  const onOverlayPress = () => toggleDrawer();

  
  const styles = {
    appbar: {
      backgroundColor: 'white',
    },
    container: {
      flex: 1,
    },
    drawerSection: {
      position: 'absolute',
      left: 0,
      top: 0,
      height: SCREEN_HEIGHT,
      width: DRAWER_WIDTH,
      backgroundColor: 'white',
      paddingTop: 16,
      zIndex: 10,
      elevation: 5,
    },
    overlay: {
      position: 'absolute',
      left: DRAWER_WIDTH,
      top: 0,
      right: 0,
      bottom: 0,
     
      zIndex: 5,
    },
    content: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 16,
    },
  };

  return (
    <>
      <Appbar.Header style={styles.appbar}>
        <Appbar.Action  icon="menu" onPress={toggleDrawer} />
        <Appbar.Content title="CustomerPortal" />
      </Appbar.Header>

      <View style={styles.container}>
        {drawerVisible && (
          <>
            <Animated.View
              style={[
                styles.drawerSection,
                { transform: [{ translateX: drawerAnim }] },
              ]}
            >
              <Drawer.Item label="Accounts" onPress={() => {
                toggleDrawer()
                navigate('/')
                }} />
              <Drawer.Item label="Transactions"  onPress={() => {
                navigate('/transections')
                toggleDrawer()
              }
                }/>
            </Animated.View>

            <TouchableWithoutFeedback >
              <View style={styles.overlay} />
            </TouchableWithoutFeedback>
          </>
        )}

        <View style={styles.content} onTouchStart={onOverlayPress}>
        {children}
        </View>
      </View>
    </>
  );
};

export default SideDrawer;
