import React from 'react';
import { View } from 'react-native';


class LineDivider extends React.Component {
    render() {
        const style = {
            borderBottomColor: this.props.color,
            borderBottomWidth: 1,
            marginTop: 10,
            marginLeft: 5,
            marginRight: 5
        }

        return (
            <div>
                <View style={style} />
            </div>
        )
    }
}


export default LineDivider