import React, { Component } from 'react';
import Aux from '../Aux/aux';
import NavigationHeader from '../../component/NavigationHeader/navigationHeader';
import SideDrawer from '../../component/NavigationHeader/SideDrawer/sideDrawer';

class Layout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showSideDrawer: false
        }
    }

    sideNavToggle = () => {
        this.setState({
            showSideDrawer: !this.state.showSideDrawer
        });
    }

    render() {
        const ifSideDrawer = this.state.showSideDrawer 
        ? <SideDrawer sideNavToggle={this.sideNavToggle}/>
        : null;

        return (
            <Aux>
                {ifSideDrawer}
                <NavigationHeader sideNavToggle={this.sideNavToggle}/>
                <div>
                    {this.props.children}
                </div>
            </Aux>
        );
    }
}

export default Layout;