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
            <td>{this.props.obj.title}
            </td>
            <td>
                <a href={"/tasks/edit/"+ this.props.obj.id}>[ edit ]</a>
            </td>
        </tr>
        )
    }
}

