import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Drawer from 'react-native-drawer';
const Drawer = require('react-native-drawer');
export default class App extends React.Component {
    closeControlPanel = () => {
        this._drawer.close()
    };
    openControlPanel = () => {
        this._drawer.open()
    };
    render() {
        return (
            <Drawer
                ref={(ref) => this._drawer = ref}
                content={<ControlPanel />}
            >
                <MainView />
            </Drawer>
        )
    }
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
