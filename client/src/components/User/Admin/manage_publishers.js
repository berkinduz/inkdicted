import React, { Component } from 'react';

import FormField from '../../utils/Form/formfield';
import { update, generateData, isFormValid,resetFields} from '../../utils/Form/formActions';

import { connect } from 'react-redux';
import { getPublishers, addPublisher } from '../../../actions/products_actions';

class ManagePublishers extends Component {

    state = {
        formError:false,
        formSuccess:false,
        formdata:{
            name: {
                element: 'input',
                value: '',
                config:{
                    name: 'name_input',
                    type: 'text',
                    placeholder: 'Enter the publisher'
                },
                validation:{
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage:''
            },
        }
    }

    showCategoryItems = () => (
        this.props.products.publishers ?
            this.props.products.publishers.map((item,i)=>(
                <div className="category_item" key={item._id}>
                    {item.name}
                </div>
            ))
        :null
    )

    updateForm = (element) => {
        const newFormdata = update(element,this.state.formdata,'publishers');
        this.setState({
            formError: false,
            formdata: newFormdata
        });
    }

    resetFieldsHandler = () =>{
        const newFormData = resetFields(this.state.formdata,'publishers');

        this.setState({
            formdata: newFormData,
            formSuccess:true
        });
    }

  
    submitForm= (event) =>{
        event.preventDefault();
        
        let dataToSubmit = generateData(this.state.formdata,'publishers');
        let formIsValid = isFormValid(this.state.formdata,'publishers')
        let existingPublishers = this.props.products.publishers;

        if(formIsValid){
           this.props.dispatch(addPublisher(dataToSubmit,existingPublishers)).then(response=>{
                if(response.payload.success){
                    this.resetFieldsHandler();
                }else{
                    this.setState({formError:true})
                }
           })
        } else {
            this.setState({
                formError: true
            })
        }
    }

    componentDidMount(){
        this.props.dispatch(getPublishers());
    }


    render() {
        return (
            <div className="admin_category_wrapper">
                <h1>Publishers</h1>
                <div className="admin_two_column">
                    <div className="left">
                        <div className="publishers_container">
                            {this.showCategoryItems()}
                        </div>
                    </div>
                    <div className="right">
                        
                    <form onSubmit={(event)=> this.submitForm(event)}>

                         <FormField
                            id={'name'}
                            formdata={this.state.formdata.name}
                            change={(element) => this.updateForm(element)}
                        />


                        {this.state.formError ?
                            <div className="error_label">
                                Please check your data
                            </div>
                            : null}
                        <button onClick={(event) => this.submitForm(event)}>
                            Add publisher
                        </button>

                    </form>

                    </div>

                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(ManagePublishers);