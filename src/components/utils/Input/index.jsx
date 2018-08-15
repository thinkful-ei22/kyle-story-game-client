import React from 'react';

import './input.css';
import Row from '../grid/Row';
import Column from '../grid/Column';

export default class Input extends React.Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.meta.active && this.props.meta.active) {
      this.input.focus();
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
      <React.Fragment>
        <Row>
          <Column columnWidth='col-4'>
            <label 
              htmlFor={this.props.input.name}
              className={this.props.labelClass}
            >
              {this.props.label}
              {error}
              {warning}
            </label>
          </Column>
        </Row>
        <Row>
          <Column columnWidth='col-4'>
            <Element
              {...this.props.input}
              id={this.props.input.name}
              placeholder={this.props.placeholder}
              className={this.props.elementClass}
              type={this.props.type}
              ref={input => (this.input = input)}
            >
              {this.props.children}
            </Element>
          </Column>
        </Row>
      </React.Fragment>
    );
  }
}