import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import AuxWrapper from '../AuxWrapper/AuxWrapper';

const withErrorHandler = (WrapperComponent, axios) => {
  return class extends Component {
    state = {
      error: null
    };

    componentDidMount() {
      axios.interceptors.request.use(req => {
        this.setState({
          error: null
        });
        return req;
      });

      axios.interceptors.response.use(
        res => res,
        error => {
          this.setState({
            error
          });
        }
      );
    }

    errorConfirmedHandler = () => {
      this.setState({
        error: null
      });
    };

    render() {
      return (
        <AuxWrapper>
          <Modal show={this.state.error} modalClosed={this.errorConfirmedHandler}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrapperComponent {...this.props} />
        </AuxWrapper>
      );
    }
  };
};

export default withErrorHandler;
