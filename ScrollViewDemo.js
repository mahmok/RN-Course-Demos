import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView} from 'react-native'; //Import ScrollView



export default class ScrollViewDemo extends React.Component 
{
    render() {
        return (
            <ScrollView style={styles.container}>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur, leo eget faucibus convallis, eros nulla fermentum nisi, non bibendum neque sem sit amet mi. Vestibulum lectus tellus, interdum vel mi quis, consequat elementum nunc. Duis ornare metus odio, sit amet consectetur odio iaculis sed. In tellus dolor, bibendum ac ligula sagittis, interdum sagittis est. Vestibulum aliquam purus enim, et laoreet purus laoreet ornare. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer efficitur pellentesque lacus dapibus bibendum. Suspendisse ut ornare ligula. Ut auctor nisl sed felis porttitor dictum.

Maecenas eleifend elit in felis finibus, a auctor urna pharetra. Morbi ultricies neque purus, vitae tincidunt enim aliquam nec. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed metus ipsum, fringilla a efficitur eu, pretium vel orci. Nunc quis varius massa, et hendrerit neque. Nullam ut aliquet massa. Aliquam id odio porttitor, viverra turpis placerat, accumsan tortor. Vestibulum consectetur erat luctus, varius nibh non, suscipit justo. In elementum aliquet tristique. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque ullamcorper commodo magna. In malesuada auctor nunc, tempus accumsan erat faucibus vel. Cras leo justo, egestas non auctor rutrum, lacinia eu erat. Ut venenatis turpis id accumsan mollis.

Donec eu ipsum vel metus consequat scelerisque id dignissim justo. Sed lacinia orci a nunc ullamcorper congue. Quisque porttitor, nulla nec vestibulum auctor, dui lacus ornare risus, iaculis eleifend metus metus et sapien. Duis libero neque, tristique eget massa eget, feugiat malesuada nunc. Cras lacinia mauris mi, vitae eleifend augue aliquet id. Phasellus vel pharetra diam, vel tincidunt lacus. Aenean id molestie purus. Proin porttitor massa sit amet lacus laoreet, in tempus justo pulvinar. Praesent sodales neque id leo mattis, in pretium libero varius. Nullam in dolor in massa pellentesque placerat. Mauris pulvinar, ex eu dictum efficitur, tortor urna porta ex, nec volutpat mauris leo a nisi.

Etiam finibus justo dui. Nullam accumsan dignissim ligula, ac mattis massa fringilla in. Nullam maximus accumsan orci. Vivamus id vulputate elit, et luctus dui. Duis aliquet ligula a turpis lobortis, pretium dictum velit sagittis. Vivamus cursus laoreet ipsum sit amet venenatis. Integer aliquam elit est, et rutrum risus dictum eget. Vestibulum rutrum mauris lacus. Vivamus nec magna dignissim, laoreet elit sed, volutpat diam. In vehicula efficitur suscipit. Suspendisse lacinia justo scelerisque, tristique dui eget, auctor lectus. Ut ut tristique magna. Nunc viverra turpis in tempor tempor.

Donec euismod viverra ex, eu viverra erat sodales vitae. Praesent quis dolor pretium, sodales felis id, cursus nibh. Vestibulum sapien purus, feugiat non urna sed, dignissim tristique est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent quis mattis mi. Integer sapien diam, congue a felis id, mattis sollicitudin justo. Mauris dictum sem in justo porttitor gravida. Phasellus porta scelerisque est vel fringilla. Sed lacinia urna lacus. Mauris scelerisque nisi sit amet mauris pulvinar rutrum. Aliquam tristique eget neque ut varius.</Text>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    }
});
