import Message from './Message/ContactForm';
import Social from './Social/Social';
import './Contact.scss';


export default function Contact() {

    return (
        <div className='contact_page'>
            <Social />
            <Message />
        </div>
    )
}