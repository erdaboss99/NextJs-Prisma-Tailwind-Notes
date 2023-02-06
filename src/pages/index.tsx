import type { NextPage } from 'next';
import { useState } from 'react';

interface FormData {
	title: string;
	content: string;
	id: string;
}

const Home: NextPage = () => {
	const [form, setForm] = useState<FormData>({ title: '', content: '', id: '' });
	return (
		<>
			<h1 className='text-center font-bold text-5xl mt-4'>Notes</h1>
			<form
				onSubmit={(e) => {
					e.preventDefault();
				}}
				className='w-auto min-w-[25%] max-w-min mx-auto space-y-6 flex flex-col items-stretch'>
				<input
					type='text'
					placeholder='Title'
					value={form.title}
					onChange={(e) => setForm({ ...form, title: e.target.value })}
					className='border-2 rounded border-gray-600 p-1'
				/>

				<textarea
					placeholder='Content'
					value={form.content}
					onChange={(e) => setForm({ ...form, content: e.target.value })}
					className='border-2 rounded border-gray-600 p-1'
				/>

				<button type='submit' className='bg-blue-500 text-white rounded p-1'>
					Add +
				</button>
			</form>
		</>
	);
};

export default Home;