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

AppRegistry.registerComponent(appName, () => FlatListDemo);
