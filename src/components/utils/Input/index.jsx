import React from 'react';

import './input.css';

export default class Input extends React.Component {
  constructor() {
    super();
    this.autosize = this.autosize.bind(this);
  }
  componentDidUpdate(prevProps) {
    if (!prevProps.meta.active && this.props.meta.active) {
      this.input.focus();
    }
  }
  autosize(e) {
    if (this.props.element === 'textarea') {
      this.style = { height: `${e.target.scrollHeight}px` };
    }
  }
  render() {
    const Element = this.props.element || 'input';

    let error;
    if (this.props.meta.touched && this.props.meta.error) {
      error = <div className="form-error">{this.props.meta.error}</div>;
    }

    let warning;
    if (this.props.meta.touched && this.props.meta.warning) {
      warning = (
        <div className="form-warning">{this.props.meta.warning}</div>
      );
    }

    return (
      <div className='form-input'>
        <label 
          htmlFor={this.props.input.name}
          className={this.props.labelClass}
        >
          {this.props.label}
          {error}
          {warning}
        </label>
        <Element
          {...this.props.input}
          id={this.props.input.name}
          placeholder={this.props.placeholder}
          className={this.props.elementClass}
          type={this.props.type}
          ref={input => (this.input = input)}
          onKeyDown={this.autosize}
          style={this.style}
        >
          {this.props.children}
        </Element>
      </div>
    );
  }
}