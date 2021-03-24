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

        console.log(this.state)
        if(this.state.hasError){
            return <div>Error occured while loading page</div>
        }
        
        return this.props.children;

    }
}

export default ErrorBoundary
