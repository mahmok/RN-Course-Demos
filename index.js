/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import ImageDemo from './ImageDemo';
import FlexBoxDemo from './FlexBoxDemo';
import ScrollViewDemo from './ScrollViewDemo';
import FlatListDemo from './FlatListDemo';
import TextInputDemo from './TextInputDemo';
import ButtonDemo from './ButtonDemo';
import ActivityIndicatorDemo from './ActivityIndicatorDemo';
import WebViewDemo from './WebViewDemo';
import PickerDemo from './PickerDemo';

AppRegistry.registerComponent(appName, () => PickerDemo);
