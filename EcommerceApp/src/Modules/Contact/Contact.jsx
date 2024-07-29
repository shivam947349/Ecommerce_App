import { useRef } from 'react'
import emailjs from '@emailjs/browser';
import {useState} from 'react'


const Contact = () => {

    const form = useRef();
    const [done, setDone] = useState(false) ;

    const submitEmail = (e) => {

        e.preventDefault();

        emailjs.sendForm('service_iea4p4h', 'template_0mrmdfj', form.current, '31dsiI5vF_IvApRP6')
            .then((result) => {
                console.log(result.text);
                setDone(true) ;
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <>
            <div className="md:flex md:justify-between md:mt-20 mb-20 h-auto mt-40">
                <div className="mx-auto size-[200px] text-4xl text-center items-center space-y-4 mt-24">
                    <h1 className="">Get in touch</h1>  <p className="text-purple-500 ">Contact Me</p>
                </div>
                <div className="mx-auto">
                    <form ref={form} onSubmit={submitEmail}
                        className="flex flex-col space-y-4 md:mt-12 md:mr-24 ml-8 -mt-10">
                        <input type="text" name='user_name' placeholder="Name" className="w-72 h-8 p-4 border-[1px] border-purple-700 rounded-md shadow-2xl outline-none focus:border-purple-500 focus:scale-110 duration-300" />
                        <input type="text" name= 'user_email' placeholder="Email" className="w-72 h-8 border-[1px] border-purple-700 p-4 rounded-md shadow-2xl outline-none focus:border-purple-500 focus:scale-110 duration-300" />
                        <textarea type="text" name= 'message' placeholder="Message" className="w-72 h-20 border-[1px] border-purple-700 p-4 rounded-md shadow-2xl outline-none focus:border-purple-500 focus:scale-110 duration-300" />
                        <button type="submit" value='send' className="bg-purple-800 font-semibold w-24 h-10 md:mx-auto ml-24 rounded-2xl mb-16 hover:border-purple-500 hover:scale-110 duration-300">Send</button>
                        <span>{done && "Thanks for contacting me !"}</span>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact