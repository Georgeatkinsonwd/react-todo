import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
    const onClick = () =>{
        console.log('click')
    }
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button onClick = {onClick} text='Add' />
            
        </header>
    )
}


Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// css in js file
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black',
// }

export default Header

