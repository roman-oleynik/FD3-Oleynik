import React from 'react';
import PropTypes from 'prop-types';

import {ChooseMobileCompany} from './chooseMobileCompany';
import {FilterClients} from './filterClients';
// import {TableOfClients} from './tableOfClients';
import {Client} from './Client';
import {ClientForm} from './clientForm';

import {handler} from './events';


class MobileCompanyApp extends React.PureComponent {
    static propTypes = {
        title: PropTypes.string.isRequired,
        velcomClients: PropTypes.arrayOf(
            PropTypes.shape({
                lastname: PropTypes.string.isRequired,
                code: PropTypes.number.isRequired,
                firstname: PropTypes.string.isRequired,
                patronym: PropTypes.string.isRequired,
                balance: PropTypes.number.isRequired,
            })
        ),
    };

    state = {
        velcomClients: this.props.clients,
        mtsClients: this.props.clients,
        editedItem: null,
        workMode:1,
        companyMode: 1,
        filterMode: 1,
    };
    
    componentDidMount = () => {
        handler.addListener('ChangeCompany', this.changeCompany);
        handler.addListener('ChangeFilter', this.changeFilter);
        handler.addListener('DeleteItem', this.deleteItem);
        handler.addListener('EditItem', this.editItem);
        handler.addListener('SubmitData', this.submitData);
        handler.addListener('CanselForm', this.canselForm);
        handler.addListener('ChangeLastNameRef', this.changeLastNameRef);
        handler.addListener('ChangeFirstNameRef', this.changeFirstNameRef);
        handler.addListener('ChangePatronymRef', this.changePatronymRef);
        handler.addListener('ChangeBalanceRef', this.changeBalanceRef);
    }
    componentWillUnmount = () => {
        handler.removeListener('ChangeCompany', this.changeCompany);
        handler.removeListener('ChangeFilter', this.changeFilter);
        handler.removeListener('DeleteItem', this.deleteItem);
        handler.removeListener('EditItem', this.editItem);
        handler.removeListener('SubmitData', this.submitData);
        handler.removeListener('CanselForm', this.canselForm);
        handler.removeListener('ChangeLastNameRef', this.changeLastNameRef);
        handler.removeListener('ChangeFirstNameRef', this.changeFirstNameRef);
        handler.removeListener('ChangePatronymRef', this.changePatronymRef);
        handler.removeListener('ChangeBalanceRef', this.changeBalanceRef);
    }

    addClient = () => {
        this.setState({
            workMode: 2
        })
    }

    editItem = (id, compMode) => {
        this.setState({
            workMode: 3,
            editedItem: id,
        })
    }

    canselForm = () => {
        this.setState({
            workMode: 1,
        })
    }

    changeCompany = (id) => {
        if (this.state.companyMode === id) {
            return;
        } else {
            this.setState({
                companyMode: id,
                workMode: 1
            })
        }
    }

    lastNameRef = null;
    changeLastNameRef = (ref) => {
        this.lastNameRef = ref;
    }
    firstNameRef = null;
    changeFirstNameRef = (ref) => {
        this.firstNameRef = ref;
    }
    patronymRef = null;
    changePatronymRef = (ref) => {
        this.patronymRef = ref;
    }
    balanceRef = null;
    changeBalanceRef = (ref) => {
        this.balanceRef = ref;
    }

    submitData = () => {
        if (this.state.workMode === 2 && this.lastNameRef.value && this.firstNameRef.value && this.patronymRef.value && this.balanceRef.value) {
            if (this.state.companyMode === 1) {
                let newClientData = {lastname: this.lastNameRef.value, code: this.state.velcomClients.length+1, 
                    firstname: this.firstNameRef.value, patronym: this.patronymRef.value, 
                    balance: this.balanceRef.value};
                let clientData = [...this.state.velcomClients, newClientData];
                this.setState({
                    workMode: 1,
                    velcomClients: clientData,
                });
            }
            else if (this.state.companyMode === 2) {
                let newClientData = {lastname: this.lastNameRef.value, code: this.state.mtsClients.length+1, 
                    firstname: this.firstNameRef.value, patronym: this.patronymRef.value, 
                    balance: this.balanceRef.value};
                let clientData = [...this.state.mtsClients, newClientData];
                this.setState({
                    workMode: 1,
                    mtsClients: clientData,
                });
            }
            else {
                alert('error')
            }
        }
        else if (this.state.workMode === 3 && this.lastNameRef.value && this.firstNameRef.value && this.patronymRef.value && this.balanceRef.value) {
            if (this.state.companyMode === 1) {
                let clientData = [...this.state.velcomClients];
                this.setState({
                    velcomClients: clientData.map( (el, i) => {
                        if (el.code === this.state.editedItem) {
                            return {
                                lastname: this.lastNameRef.value,
                                code: this.state.editedItem,
                                firstname: this.firstNameRef.value,
                                patronym: this.patronymRef.value,
                                balance: +this.balanceRef.value
                            }

                        } else {
                            return el;
                        }
                    }),
                    workMode: 1,
                });
                console.log(this.state.editedItem)
            }
            else if (this.state.companyMode === 2) {
                let clientData = [...this.state.mtsClients];
                this.setState({
                    mtsClients: clientData.map( (el, i) => {
                        if (el.code === this.state.editedItem) {
                            return {
                                lastname: this.lastNameRef.value,
                                code: this.state.editedItem,
                                firstname: this.firstNameRef.value,
                                patronym: this.patronymRef.value,
                                balance: +this.balanceRef.value
                            }

                        } else {
                            return el;
                        }
                    }),
                    workMode: 1,
                });
            }
        }
    }

    changeFilter = (id) => {
        if (this.state.filterMode === id) {
            return;
        } else {
            this.setState({
                filterMode: id
            })
        }
    }

    deleteItem = (id) => {
        const conf = confirm('Do you really want to delete this item?');
        if (conf) {
            this.state.companyMode === 1
            ?
            this.setState({
                velcomClients: this.state.velcomClients.filter(e => {
                    return e.code !== id
                })
            })
            :
            this.setState({
                mtsClients: this.state.mtsClients.filter(e => {
                    return e.code !== id
                })
            })
        }
    };

    render() {
        console.log('parent component render')
        return <div>
            <ChooseMobileCompany 
                velcomClients={this.state.velcomClients} 
                mtsClients={this.state.mtsClients}
                companyMode={this.state.companyMode}
            /> 
            <FilterClients
                velcomClients={this.state.velcomClients} 
                mtsClients={this.state.mtsClients}
                filterMode={this.state.filterMode} 
            /> 
            
            {
                this.state.companyMode === 1 && this.state.filterMode === 1 ?
                this.state.velcomClients.map((el, i) => {
                    return <Client 
                        key={i}
                        id={el.code}
                        firstname={el.firstname}
                        lastname={el.lastname}
                        patronym={el.patronym}
                        balance={el.balance}
                        status={el.balance >=0 ? "Active" : "Blocked"}
                        clients={this.props.velcomClients} 
                        companyMode={this.props.companyMode}
                        filterMode={this.props.filterMode} 
                        workMode={this.props.workMode}
                    />
                })
                : 
                this.state.companyMode === 1 && this.state.filterMode === 2 ?
                this.state.velcomClients.map((el, i) => {
                    if (el.balance >= 0)
                    return <Client 
                        key={i}
                        id={el.code}
                        firstname={el.firstname}
                        lastname={el.lastname}
                        patronym={el.patronym}
                        balance={el.balance}
                        status={el.balance >=0 ? "Active" : "Blocked"}
                        clients={this.props.velcomClients} 
                        companyMode={this.props.companyMode}
                        filterMode={this.props.filterMode} 
                        workMode={this.props.workMode}
                    />
                })
                : 
                this.state.companyMode === 1 && this.state.filterMode === 3 ?
                this.state.velcomClients.map((el, i) => {
                    if (el.balance < 0)
                    return <Client 
                        key={i}
                        id={el.code}
                        firstname={el.firstname}
                        lastname={el.lastname}
                        patronym={el.patronym}
                        balance={el.balance}
                        status={el.balance >=0 ? "Active" : "Blocked"}
                        clients={this.props.velcomClients} 
                        companyMode={this.props.companyMode}
                        filterMode={this.props.filterMode} 
                        workMode={this.props.workMode}
                    />
                })
                : 
                this.state.companyMode === 2 && this.state.filterMode === 1 ?
                this.state.mtsClients.map((el, i) => {
                    return <Client 
                        key={i}
                        id={el.code}
                        firstname={el.firstname}
                        lastname={el.lastname}
                        patronym={el.patronym}
                        balance={el.balance}
                        status={el.balance >=0 ? "Active" : "Blocked"}
                        clients={this.props.mtsClients} 
                        companyMode={this.props.companyMode}
                        filterMode={this.props.filterMode} 
                        workMode={this.props.workMode}
                    />
                })
                : 
                this.state.companyMode === 2 && this.state.filterMode === 2 ?
                this.state.mtsClients.map((el, i) => {
                    if (el.balance < 0)
                    return <Client 
                        key={i}
                        id={el.code}
                        firstname={el.firstname}
                        lastname={el.lastname}
                        patronym={el.patronym}
                        balance={el.balance}
                        status={el.balance >=0 ? "Active" : "Blocked"}
                        clients={this.props.mtsClients} 
                        companyMode={this.props.companyMode}
                        filterMode={this.props.filterMode} 
                        workMode={this.props.workMode}
                    />
                })
                : 
                
                this.state.mtsClients.map((el, i) => {
                    if (el.balance < 0)
                    return <Client 
                        key={i}
                        id={el.code}
                        firstname={el.firstname}
                        lastname={el.lastname}
                        patronym={el.patronym}
                        balance={el.balance}
                        status={el.balance >=0 ? "Active" : "Blocked"}
                        clients={this.props.mtsClients} 
                        companyMode={this.props.companyMode}
                        filterMode={this.props.filterMode} 
                        workMode={this.props.workMode}
                    />
                })
                

            }
            <button className='AddClientButton' onClick={this.addClient}>Click To Add New Client</button>
            {
                this.state.workMode === 2
                ?
                <ClientForm workMode={this.state.workMode}/>
                :
                null
            }
            {
                this.state.workMode === 3
                ?
                <ClientForm 
                    workMode={this.state.workMode}
                    velcomClients={this.state.velcomClients} 
                    mtsClients={this.state.mtsClients}
                    companyMode={this.state.companyMode}
                    filterMode={this.state.filterMode} 
                    editedItem={this.state.editedItem}

                />
                :
                null
            }
        </div> 

    }
}

export default MobileCompanyApp;