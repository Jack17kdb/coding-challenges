import { FaUser, FaEnvelope, FaComment } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const ContactPage = () => {
	const [active, setActive] = useState(false);
	const [filed, setFiled] = useState({
		"username": "",
		"email": "",
		"message": ""
	});

	const handleNameChange = (e) => {
		setFiled(prevFiled => ({...prevFiled, "username": e.target.value}));
	};

	const filedCheck = () => {
		if(filed.username.length > 0 && filed.email.length > 0 && filed.message.length > 0) {
			setActive(true);
		} else {
			setActive(false);
		}
	};

	useEffect(() => {
		filedCheck();
	}, [filed]);



	return (
		<div className='min-h-screen bg-white flex items-center justify-center'>
			<div className='bg-gray-300 w-full max-w-md m-6 p-6 shadow-lg rounded-lg'>
				<p className='text-center leading-relaxed text-lg font-semibold mb-6'>If you wish to consult for a project please contact me</p>
				{filed.username && filed.username.length > 0 && (
					<p className='text-center leading-relaxed text-lg font-semibold mb-6'>Hello {filed.username}!</p>
				)}
				<div className='flex flex-col gap-4'>
					<div className='flex items-center rounded-full w-full px-4 py-2 gap-2 border border-gray-500 focus-within:ring-2 focus-within:ring-blue-400'>
						<FaUser className='text-gray-500' />
						<input type='text'
							placeholder='Enter Username'
							className='outline-none text-md w-full'
							value={filed.username}
							onChange={handleNameChange}
							required
						/>
					</div>
					<div className='flex items-center rounded-full w-full px-4 py-2 gap-2 border border-gray-500 focus-within:ring-2 focus-within:ring-blue-400'>
						<FaEnvelope className='text-gray-500' />
						<input type='email' placeholder='Enter Email' className='outline-none text-md w-full' value={filed.email} onChange={(e) => setFiled(prevFiled =>  ({...prevFiled, "email": e.target.value}))} required />
					</div>
					<div className='flex items-start rounded-lg w-full px-4 py-2 gap-2 border border-gray-500 focus-within:ring-2 focus-within:ring-blue-400'>
						<FaComment className='text-gray-500 mt-1' />
						<textarea placeholder='Enter message' className='outline-none resize-none text-md w-full h-24' value={filed.message} onChange={(e) => setFiled(prevFiled =>  ({...prevFiled, "message": e.target.value}))}></textarea>
					</div>
					<button type='submit' className='border-none bg-blue-400 font-semibold rounded-full w-full px-4 py-2 mt-2 text-md w-full cursor-pointer active:scale-96 transition-all duration-400' disabled={!active}>Submit</button>
				</div>
			</div>
		</div>
	)
}

export default ContactPage;
