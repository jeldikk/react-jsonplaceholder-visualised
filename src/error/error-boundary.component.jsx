import React, { Component } from 'react'

export class ErrorBoundary extends Component {

    constructor(props){
        super(props)

        this.state = {
            hasError: false,
            errorMessage: null
        }
    }

    

    static getDerivedStateFromError(error){
        return {
            hasError: true,
            errorMessage: error.message
        }
    }

    componentDidCatch(error, errorInfo){
        console.log({error, errorInfo})
    }
    render() {
        if(this.state.hasError){
            <div>Error occured while loading page</div>
        }
        else{
            return this.props.children
        }

    }
}

export default ErrorBoundary
