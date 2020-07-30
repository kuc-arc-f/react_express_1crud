class IndexRow extends React.Component {
    componentDidMount(){
//        console.log(this.props.obj)
    }
    render(){
        return (
        <tr>
            <td>
                {this.props.obj.id}
            </td>
            <td>
                <a href={"/tasks/show/"+ this.props.obj.id}>{this.props.obj.title}
                </a>
                
            </td>
            <td>
            </td>
        </tr>
        )
    }
}

