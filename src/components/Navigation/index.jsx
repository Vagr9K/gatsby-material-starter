import React, { Component } from "react";
import NavigationDrawer from "react-md/lib/NavigationDrawers";
import ToolbarActions from "../ToolbarActions";
import Footer from "../Footer";
import GetNavList from "./NavList";
import "./Navigation.scss";

class Navigation extends Component {
  render() {
    const {
      children,
      userLinks
    } = this.props;
    return (
      <NavigationDrawer
        drawerTitle={this.props.siteTitle}
        toolbarTitle={this.props.LocalTitle}
        contentClassName="main-content"
        navItems={GetNavList(userLinks)}
        mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
        tabletDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
        desktopDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
        toolbarActions={<ToolbarActions config={userLinks} />}
      >
        <div className="main-container">{children}</div>
        <Footer {...this.props} userLinks={this.props.footerLinks} />
      </NavigationDrawer>
    );
  }
}

export default Navigation;
