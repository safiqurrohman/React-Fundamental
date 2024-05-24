import React, { Component } from "react";
import './style/EditModal.css';
import Button from "./Button";

class EditModal extends Component {
    
    constructor(props) {
        // const {data } = this.props;
        super(props);
        this.state = {
            inputValue: this.props.data.title // Inisialisasi state dengan nilai dari prop data.title
        };
    }

    handleChange = (event) => {
        this.setState({ inputValue: event.target.value });
    };
    render() {
        const { edit, closeModal, data } = this.props;
        const { inputValue } = this.state;
        if (edit) {
            return (
                <div className="container-edit">
                    <div className="modal-box">
                        <h1>Edit Data</h1>
                    console.log({inputValue});
                        <div className="input-modal">
                            <input
                                type="text"
                                onChange={this.handleChange}
                                value={data}
                            />
                            
                        </div>
                        <div className="btn-group">
                            <Button text="Kembali" variant="warning-modal" action={closeModal} />
                            <Button text="Edit" variant="success-modal" />
                        </div>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default EditModal;
