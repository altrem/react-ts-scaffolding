import * as React from 'react';

export interface HelloProps {
    name: string;
}

export class Hello extends React.Component<HelloProps, object> {
    render() {
        if (this.props.name !== 'Kenobi') {
            throw 'Wrong general';
        }

        return (
            <div>
                General {this.props.name}! You are a <b>bold</b> one! 
            </div>
            );
    }
}