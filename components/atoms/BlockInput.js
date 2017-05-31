import React from 'react';
import styled from 'styled-components';
import { Block, Icons } from '.';

class BlockInput extends React.Component {
  state = {
    value: '',
  };

  bindField = name => (e) => {
    const { onChange } = this.props;

    this.setState({ [name]: e.target.value });
    onChange && onChange(e, e.target.value);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { onSubmit, clearOnSubmit } = this.props;

    onSubmit && onSubmit(this.state.value);
    clearOnSubmit && this.setState({ value: '' });
  };

  render() {
    const { value } = this.state;
    const {
      icon, children, type, onChange, clearOnSubmit, onSubmit,
      ...restProps
    } = this.props;

    return (
      <Wrapper>
        <Block {...restProps} theme="cloud" className="search">
          <form onSubmit={this.handleSubmit}>
            <input type={type || 'text'} onChange={this.bindField('value')} value={value} {...restProps} />
            <button type="submit">
              <Icons name={icon} size={25} />
            </button>
          </form>
        </Block>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  .search {
    padding: 0;
  }
  .search > div > form {
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
