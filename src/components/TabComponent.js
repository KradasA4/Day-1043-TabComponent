import React, { Component } from 'react'

export default class TabComponent extends Component {
  state = {
    currentTab: this.props.defaultMenu
  }

  setCurrentTab = menu => {
    this.setState({
      currentTab: menu
    })
  }

  renderTabList = () => {
    return this.props.children.map(children => (
      <button type="button" class="btn btn-light" onClick={() => { this.setCurrentTab(children.props.title) }}>
        {children.props.title}
      </button>
    ))
  }

  renderCurrentTab = () => {
    let result = <h1>Error Not Found 404</h1>;
    this.props.children.forEach(children => {
      console.log(children.props.title, this.state.currentTab);
      if (children.props.title === this.state.currentTab) result = <div>{React.cloneElement(children)}</div>
    })
    console.log(result)
    return result;
  }

  render() {
    console.log(this.props.children)

    return (
      <div>
        {this.renderTabList()}
        {this.renderCurrentTab()}
      </div>
    )
  }
}
