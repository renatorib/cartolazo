import React from 'react';
import styled from 'styled-components';
import { Block, Icons } from '.';

class BlockInput extends React.Component {
  state = {
    value: '',
  };

  bindField = name => (e) => {
    this.setState({ [name]: e.target.value });
    this.props.onChange && this.props.onChange(e, e.target.value);
  }

  handleSubmit = () => {
    const { onSubmit, clearOnSubmit } = this.props;
    const { value } = this.state;

    onSubmit && onSubmit(value);
    clearOnSubmit && this.setState({ value: '' });
  };

  render() {
    const { icon, children, type, onChange, ...restProps } = this.props;
    const { value } = this.state;

    return (
      <Wrapper>
        <Block {...restProps} theme="cloud" className="search">
          <input type={type || 'text'} onChange={this.bindField('value')} value={value} {...restProps} />
          <button onClick={this.handleSubmit}>
            <Icons name={icon} size={25} />
          </button>
        </Block>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  .search {
    padding: 0;
  }
  .search > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  svg {
    width: 25px;
    fill: #777;
    vertical-align: middle;
  }
  input {
    height: 50px;
    padding: 0 10px;
    flex: 1;
    background: transparent;
    border: none;
  }
  button {
    background: transparent;
    border: none;
    padding: 13px;
  }
`;

export default BlockInput;
