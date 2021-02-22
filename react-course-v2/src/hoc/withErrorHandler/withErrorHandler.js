import React from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Auxiliate from "../Auxiliate/Auxiliate";

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }
        componentDidMount = () => {
            axios.interceptors.response.use(null, error => {
                this.setState({
                    error: error,
                })
            }
        }
        render() {
            return (
                <Auxiliate>
                    <Modal show={}>
                        Something didn't work!
                    </Modal>
                    <WrappedComponent {...props} />
                </Auxiliate>
            )
        }
    }
}

export default withErrorHandler;